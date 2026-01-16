/* 효빈광역시 공통 스크립트 (원본 HTML의 <script> 분리본) */
/* data.js에서 window.fileMap을 먼저 로드하세요. */

// 1. 테마 및 메시지 관리
    function toggleTheme() {
        const body = document.body;
        const isDark = body.getAttribute('data-theme') === 'dark';
        const newTheme = isDark ? 'light' : 'dark';
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('wiki_theme', newTheme);
        const btn = document.getElementById('themeBtn');
        if(btn) btn.innerText = newTheme === 'dark' ? '라이트모드' : '다크모드';
    }

    function showMsg(text) {
        const box = document.getElementById('wiki-msg-box');
        if (box) {
            box.innerText = text;
            box.style.display = 'block';
            setTimeout(() => { box.style.display = 'none'; }, 2000);
        }
    }

    // 2. 지능형 통합 내비게이션
    function handleSearchFromNav(title) {
        if (!title) return;
        
        const realCities = ['서울특별시', '부산광역시', '인천광역시', '대구광역시', '대전광역시', '광주광역시', '울산광역시'];

        if (fileMap[title]) {
            window.location.href = fileMap[title];
        } else if (!isNaN(title) && title.trim() !== "") {
            window.location.href = 'bus_' + title + '.html';
        } else if (realCities.includes(title) || title.includes('광역시') || title.includes('특별시')) {
            window.location.href = 'https://namu.wiki/w/' + encodeURIComponent(title);
        } else {
            showMsg(`'${title}' 문서를 불러오는 중...`);
            window.location.href = title + '.html';
        }
    }


    // 3. 내비게이션 접기/펼치기 (토글 함수 누락 보강)
    function toggleNav(bodyId, labelId) {
        const body = document.getElementById(bodyId);
        const label = document.getElementById(labelId);
        if (!body) return;

        const key = 'wiki_nav_' + bodyId;

        const isClosed = (body.dataset.open === 'false') || body.style.maxHeight === '0px';

        if (isClosed) {
            body.dataset.open = 'true';
            const h = body.scrollHeight || 2000;
            body.style.maxHeight = h + 'px';
            if (label) label.textContent = '[접기]';
            try { localStorage.setItem(key, 'open'); } catch (e) {}
        } else {
            body.dataset.open = 'false';
            body.style.maxHeight = '0px';
            if (label) label.textContent = '[펼치기]';
            try { localStorage.setItem(key, 'closed'); } catch (e) {}
        }
    }

    // 페이지 로드 시, 내비게이션 접힘 상태 복원
    document.addEventListener('DOMContentLoaded', function() {
        document.querySelectorAll('.nav-box-body[id]').forEach(function(body) {
            const key = 'wiki_nav_' + body.id;
            let state = null;
            try { state = localStorage.getItem(key); } catch (e) {}
            if (state === 'closed') {
                body.dataset.open = 'false';
                body.style.maxHeight = '0px';
                const header = body.closest('.nav-box')?.querySelector('.nav-box-header');
                const label = header?.querySelector('.nav-toggle-btn');
                if (label) label.textContent = '[펼치기]';
            } else {
                body.dataset.open = 'true';
            }
        });
    });

    // 3. [완벽 수정] 각주 호버보드 로직
    document.addEventListener('mouseover', function(e) {
        const trigger = e.target.closest('.wiki-fn-trigger');
        if (trigger) {
            const tooltip = document.getElementById('wiki-footnote-tooltip');
            if (!tooltip) return; // 툴팁 박스 없으면 중단

            const href = trigger.getAttribute('href');
            if (!href) return; 

            const fnId = href.startsWith('#') ? href.substring(1) : href.split('#').pop();
            const fnElem = document.getElementById(fnId);
            
            if (fnElem) {
                // 내용 추출
                let textContent = "";
                const contentSpan = fnElem.querySelector('span:last-child');
                if (contentSpan) {
                    textContent = contentSpan.innerText;
                } else {
                    textContent = fnElem.innerText.replace(/^\[.*?\]\s*/, '');
                }
                
                tooltip.innerText = textContent;
                tooltip.style.display = 'block';
                
                // 좌표 계산
                const rect = trigger.getBoundingClientRect();
                const scrollY = window.pageYOffset || document.documentElement.scrollTop;
                const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
                
                // 위치 지정 (링크 바로 아래)
                tooltip.style.top = (rect.bottom + scrollY + 8) + 'px';
                tooltip.style.left = (rect.left + scrollX) + 'px';
                
                // 화면 오른쪽 넘침 방지
                const tooltipWidth = 320;
                if (rect.left + tooltipWidth > window.innerWidth) {
                    tooltip.style.left = (window.innerWidth - tooltipWidth - 20 + scrollX) + 'px';
                }
            }
        }
    });

    document.addEventListener('mouseout', function(e) {
        if (e.target.closest('.wiki-fn-trigger')) {
            const tooltip = document.getElementById('wiki-footnote-tooltip');
            if (tooltip) tooltip.style.display = 'none';
        }
    });

    // 4. 초기화 및 이벤트 등록
    window.onload = function() {
        const savedTheme = localStorage.getItem('wiki_theme');
        if (savedTheme === 'dark') {
            document.body.setAttribute('data-theme', 'dark');
            const btn = document.getElementById('themeBtn');
            if(btn) btn.innerText = '라이트모드';
        }
    };

    document.getElementById('searchInput')?.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') handleSearchFromNav(this.value.trim());
    });

// -----------------------------------------------------------
    // [통합 해결] 1. ID 자동 부여 + 2. 부드러운 양방향 이동
    // -----------------------------------------------------------
    document.addEventListener('DOMContentLoaded', function() {
        
        // 1. [자동 수리] 본문 링크에 돌아올 주소(ID)가 없으면 자동으로 붙여줍니다.
        // 예: href="#fn-1" 인 녀석에게 자동으로 id="fnref-1" 을 달아줌
        const triggers = document.querySelectorAll('.wiki-fn-trigger');
        triggers.forEach(function(trigger) {
            const href = trigger.getAttribute('href'); // "#fn-1"
            if (href && href.startsWith('#fn-')) {
                const num = href.replace('#fn-', ''); // "1"
                // ID가 없으면 달아줌
                if (!trigger.id) {
                    trigger.id = 'fnref-' + num;
                }
            }
        });

        // 2. [양방향 이동] 위로 가든 아래로 가든 부드럽게 이동
        document.addEventListener('click', function(e) {
            // 클릭된 요소가 링크인지 확인 (본문 각주 or 아래쪽 되돌아가기 버튼)
            const link = e.target.closest('a');
            
            // 링크가 아니거나 내부 이동(#)이 아니면 무시
            if (!link || !link.getAttribute('href') || !link.getAttribute('href').startsWith('#')) return;

            const href = link.getAttribute('href');
            // 예외: 목차 토글 등 다른 기능은 건드리지 않음
            if (href === '#' || href.includes('toc')) return;

            const targetId = href.substring(1); // # 제거
            const targetElem = document.getElementById(targetId);

            if (targetElem) {
                e.preventDefault(); // 팍! 튀는거 방지

                // 부드럽게 스크롤
                targetElem.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center' // 화면 중앙에 오도록
                });

                // 도착했다는 표시 (노란색 깜빡임)
                targetElem.style.transition = 'background-color 0.5s ease';
                const originalBg = targetElem.style.backgroundColor;
                targetElem.style.backgroundColor = 'rgba(255, 235, 59, 0.5)'; // 노란 형광펜 색
                
                setTimeout(() => {
                    targetElem.style.backgroundColor = originalBg || 'transparent';
                }, 1500);
            }
        });
    });
