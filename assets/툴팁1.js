    (function(){
        // 툴팁 엘리먼트
        const tip = document.createElement('div');
        tip.id = 'fn-tooltip';
        tip.className = 'fn-tooltip';
        tip.innerHTML = '<div class="fn-tooltip-inner"></div>';
        document.body.appendChild(tip);
        const inner = tip.querySelector('.fn-tooltip-inner');

        // 각주 맵 만들기: .footnote-area 안의 [번호] 텍스트를 파싱
        const footnoteMap = {};
        document.querySelectorAll('.footnote-area .footnote-item').forEach(item => {
            const txt = (item.textContent || '').trim();
            const m = txt.match(/^\[(\d+)\]\s*(.*)$/);
            if (m) footnoteMap[m[1]] = m[2];
        });

        const clampPos = (x, y) => {
            const pad = 12;
            const rect = tip.getBoundingClientRect();
            let left = x + pad;
            let top  = y + pad;
            if (left + rect.width > window.innerWidth - 8) left = window.innerWidth - rect.width - 8;
            if (top  + rect.height > window.innerHeight - 8) top  = window.innerHeight - rect.height - 8;
            if (left < 8) left = 8;
            if (top  < 8) top  = 8;
            return { left, top };
        };

        const showTip = (x, y, text) => {
            if (!text) return;
            inner.textContent = text;
            tip.style.left = '0px';
            tip.style.top  = '0px';
            tip.classList.add('show');
            // 레이아웃 반영 후 위치 재계산
            const pos = clampPos(x, y);
            tip.style.left = pos.left + 'px';
            tip.style.top  = pos.top  + 'px';
        };

        const hideTip = () => {
            tip.classList.remove('show');
        };

        // 본문에서 [숫자] 패턴을 <sup class="fn-ref" data-fn="n">[n]</sup> 로 자동 변환
        const scope = document.querySelector('.wiki-container') || document.body;
        const walker = document.createTreeWalker(scope, NodeFilter.SHOW_TEXT, {
            acceptNode(node){
                const v = node.nodeValue;
                if (!v || v.indexOf('[') === -1) return NodeFilter.FILTER_SKIP;
                const pe = node.parentElement;
                if (!pe) return NodeFilter.FILTER_SKIP;
                if (pe.closest('script, style, .footnote-area')) return NodeFilter.FILTER_SKIP;
                if (/\[\d+\]/.test(v)) return NodeFilter.FILTER_ACCEPT;
                return NodeFilter.FILTER_SKIP;
            }
        });
        const targets = [];
        while (walker.nextNode()) targets.push(walker.currentNode);

        targets.forEach(textNode => {
            const txt = textNode.nodeValue;
            const parts = txt.split(/(\[\d+\])/);
            if (parts.length === 1) return;
            const frag = document.createDocumentFragment();
            for (const part of parts) {
                const m = part.match(/^\[(\d+)\]$/);
                if (m) {
                    const sup = document.createElement('sup');
                    sup.className = 'fn-ref';
                    sup.setAttribute('data-fn', m[1]);
                    sup.textContent = part;
                    frag.appendChild(sup);
                } else {
                    frag.appendChild(document.createTextNode(part));
                }
            }
            textNode.parentNode.replaceChild(frag, textNode);
        });

        // 마우스 호버: (1) fn-ref면 각주 내용, (2) 일반 sup면 sup 내부 텍스트
        let hoveringSup = null;
        document.addEventListener('mouseover', (e) => {
            const sup = e.target.closest('sup');
            if (!sup) return;
            hoveringSup = sup;
            let content = '';
            if (sup.classList.contains('fn-ref')) {
                const n = sup.getAttribute('data-fn');
                content = footnoteMap[n] || sup.textContent;
            } else {
                content = (sup.textContent || '').trim();
            }
            if (content) showTip(e.clientX, e.clientY, content);
        });

        document.addEventListener('mousemove', (e) => {
            if (!tip.classList.contains('show')) return;
            const pos = clampPos(e.clientX, e.clientY);
            tip.style.left = pos.left + 'px';
            tip.style.top  = pos.top  + 'px';
        });

        document.addEventListener('mouseout', (e) => {
            const sup = e.target.closest('sup');
            if (!sup) return;
            if (hoveringSup && (e.relatedTarget && (e.relatedTarget.closest('sup') === hoveringSup))) return;
            hoveringSup = null;
            hideTip();
        });

        // 텍스트를 "긁어서(드래그 선택)" [숫자]가 포함되면, 선택 범위 옆에 각주 내용을 표시
        let selTimer = null;
        document.addEventListener('mouseup', () => {
            clearTimeout(selTimer);
            selTimer = setTimeout(() => {
                const sel = window.getSelection();
                if (!sel || sel.isCollapsed) return;
                const text = sel.toString();
                const matches = text.match(/\[(\d+)\]/g) || [];
                const nums = Array.from(new Set(matches.map(s => s.replace(/\[|\]/g, ''))));
                if (!nums.length) return;
                const lines = nums.map(n => footnoteMap[n] ? `[${n}] ${footnoteMap[n]}` : '').filter(Boolean);
                if (!lines.length) return;
                const range = sel.getRangeAt(0);
                const r = range.getBoundingClientRect();
                showTip(r.right, r.bottom, lines.join('\n'));
            }, 0);
        });

        // 스크롤/ESC 시 숨김
        document.addEventListener('keydown', (e) => { if (e.key === 'Escape') hideTip(); });
        document.addEventListener('scroll', () => { if (tip.classList.contains('show')) hideTip(); }, true);
    })();
