/* 파일명: wiki_main.js */

/* 1. 검색 기능 */
function handleSearch() {
    const query = document.getElementById('searchInput').value;
    if (query) {
        location.href = `search.html?q=${encodeURIComponent(query)}`;
    } else {
        alert('검색어를 입력해주세요.');
    }
}

/* 2. 알림 메시지 표시 */
function showMsg(text) {
    const box = document.getElementById('wiki-msg-box');
    if (box) {
        box.innerText = text; 
        box.style.display = 'block';
        setTimeout(() => { box.style.display = 'none'; }, 2000);
    }
}

/* 3. 각주 툴팁 기능 (문서 로딩 후 실행) */
document.addEventListener('DOMContentLoaded', function() {
    const tooltip = document.getElementById('footnote-tooltip-container');
    const fnLinks = document.querySelectorAll('.wiki-fn-link'); // sup a 대신 클래스로 선택

    if (!tooltip) return; // 툴팁 통이 없으면 중단

    fnLinks.forEach(link => {
        // 마우스 진입 시 내용 표시
        link.addEventListener('mouseenter', (e) => {
            const href = link.getAttribute('href');
            if (!href) return;
            
            const targetId = href.substring(1); // #fn1 -> fn1
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                let content = targetElement.innerHTML;
                
                // '[이동]' 링크 제거하고 순수 텍스트만 보여주기
                if (content.includes('back-link')) {
                    const tempDiv = document.createElement('div');
                    tempDiv.innerHTML = content;
                    const backLink = tempDiv.querySelector('.back-link');
                    if(backLink) backLink.remove();
                    content = tempDiv.innerHTML;
                }

                tooltip.innerHTML = content;
                tooltip.style.display = 'block';
            }
        });

        // 마우스 따라다니기
        link.addEventListener('mousemove', (e) => {
            tooltip.style.left = (e.pageX + 15) + 'px';
            tooltip.style.top = (e.pageY + 15) + 'px';
        });

        // 마우스 나가면 숨기기
        link.addEventListener('mouseleave', () => {
            tooltip.style.display = 'none';
        });
    });
});

/* --- [추가] 푸터 자동 생성 기능 --- */
document.addEventListener("DOMContentLoaded", function() {
    const footerArea = document.getElementById("wiki-footer-area");
    
    if (footerArea) {
        footerArea.innerHTML = `
        <footer class="wiki-footer">
            <div class="mb-2 font-bold text-lg">HyobinWiki</div>
            <p class="mb-2"><strong>크리에이티브 커먼즈 라이선스</strong><br>
            이 저작물은 <a href="https://creativecommons.org/licenses/by-nc-sa/2.0/kr/" class="text-blue-600 hover:underline" target="_blank">CC BY-NC-SA 2.0 KR</a>에 따라 이용할 수 있습니다. (단, 라이선스가 명시된 일부 문서 및 삽화 제외)<br>
            기여하신 문서의 저작권은 각 기여자에게 있으며, 각 기여자는 기여하신 부분의 저작권을 갖습니다.</p>
            
            <p class="mt-4 text-xs text-gray-500">
            효빈위키는 백과사전이 아니며 검증되지 않았거나, 편향적이거나, 잘못된 서술이 있을 수 있습니다.<br>
            효빈위키는 위키위키입니다. 여러분이 직접 문서를 고칠 수 있으며, 다른 사람의 의견을 원할 경우 직접 토론을 발제할 수 있습니다.
            </p>
        </footer>
        `;
    }
});
/* --- [추가] 빈주 1호선 네비게이션 접기/펼치기 기능 --- */
function toggleNavTable(btn) {
    const content = document.getElementById('navTableContent');
    if (content.classList.contains('collapsed')) {
        content.classList.remove('collapsed');
        btn.innerText = '[접기]';
    } else {
        content.classList.add('collapsed');
        btn.innerText = '[펼치기]';
    }
}