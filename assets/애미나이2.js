(function(){
  const COLOR = {
    '1':'#0077DD','2':'#00CCAA','3':'#FFCC11','4':'#FF5522','5':'#EE0022','6':'#881188','7':'#FF8899','8':'#9856FF',
    '9':'#444444',
    '청엽':'#D6D5CA',
    '안천':'#B2FFDD',
    '창':'#33aaff',
    '빈효':'#6677cc'
  };

  function makeRing(label){
    const span = document.createElement('span');
    span.className = 'line-ring';
    const c = COLOR[label] || '#666666';
    span.style.borderColor = c;
    span.style.color = c;
    span.textContent = label;
    return span;
  }

  function parseLineTokens(s){
    return (s||'')
      .split(',')
      .map(x => x.trim())
      .filter(Boolean)
      .map(x => {
        // 숫자(예: '1') 또는 단축라벨(예: '빈효')
        // 혹시 '빈효선' 같은 경우는 '빈효'로 축약
        if (x === '빈효선') return '빈효';
        if (x === '청엽선') return '청엽';
        if (x === '안천선') return '안천';
        return x;
      });
  }

  function wrapHidden(node, lead, inside, tail){
    const frag = document.createDocumentFragment();
    if (lead) frag.appendChild(document.createTextNode(lead));

    const hidden = document.createElement('span');
    hidden.className = 'pil-line-text';
    hidden.textContent = '(' + inside + ')';
    frag.appendChild(hidden);

    if (tail) frag.appendChild(document.createTextNode(tail));
    node.parentNode.replaceChild(frag, node);
  }

  function apply(){
    const start = document.getElementById('s-10');
    if(!start) return;

    // s-10부터 다음 H2 전까지
    const scope = [];
    let el = start;
    while(el){
      scope.push(el);
      el = el.nextElementSibling;
      if(!el) break;
      if(el.tagName === 'H2' && el.id && el.id !== 's-10') break;
    }

    // 범위 안의 data-table에서만 처리
    scope.forEach(root => {
      root.querySelectorAll && root.querySelectorAll('table.data-table td').forEach(td => {
        const links = td.querySelectorAll('a.wiki-link');
        links.forEach(a => {
          const name = (a.textContent||'').trim();
          if(!name.endsWith('역')) return;

          // 이미 배지 넣었으면 패스
          const prevEl = a.previousElementSibling;
          if(prevEl && prevEl.classList && prevEl.classList.contains('pil-line-badges')) return;

          // 다음 형제 텍스트에서 '(...)' 찾기
          let n = a.nextSibling;
          if(!n || n.nodeType !== 3) return; // text node only

          const txt = n.nodeValue || '';
          const m = txt.match(/^(\s*)\(([^)]+)\)([\s\S]*)$/);
          if(!m) return;

          const lead = m[1], inside = m[2], tail = m[3];
          const tokens = parseLineTokens(inside);
          if(!tokens.length) return;

          // 배지 컨테이너 생성 후 역명 앞에 삽입
          const badges = document.createElement('span');
          badges.className = 'pil-line-badges';
          tokens.forEach(t => badges.appendChild(makeRing(t)));
          a.parentNode.insertBefore(badges, a);

          // 원문 '(...)' 는 숨김 처리하되 tail(예: ' / ')은 살림
          wrapHidden(n, lead, inside, tail);
        });
      });
    });
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', apply);
  } else {
    apply();
  }
})();
