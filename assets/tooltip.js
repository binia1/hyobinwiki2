// 1. 테마(다크/라이트 모드) 전환 기능
function toggleTheme() {
    const body = document.body;
    const isDark = body.getAttribute('data-theme') === 'dark';
    body.setAttribute('data-theme', isDark ? 'light' : 'dark');
    localStorage.setItem('wiki_theme', isDark ? 'light' : 'dark');
    
    const themeBtn = document.getElementById('themeBtn');
    if(themeBtn) themeBtn.innerText = isDark ? '다크모드' : '라이트모드';
}

// 2. 안내 메시지 기능
function showMsg(text) {
    const box = document.getElementById('wiki-msg-box');
    if(!box) return;
    box.innerText = text; 
    box.style.display = 'block';
    setTimeout(() => { box.style.display = 'none'; }, 2000);
}

// 3. 페이지 로드 시 자동으로 실행될 핵심 로직들
document.addEventListener('DOMContentLoaded', () => {
    
    // [A] 저장된 테마 불러오기
    const savedTheme = localStorage.getItem('wiki_theme');
    if (savedTheme === 'dark') document.body.setAttribute('data-theme', 'dark');

    // [B] 검색 기능 (Enter키 입력 시 .html로 이동)
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && this.value.trim()) {
                // 저장된 지침에 따라 '단어.html' 형식으로 이동
                location.href = this.value.trim() + ".html";
            }
        });
    }

    // [C] 고급 각주 툴팁 기능 (두 코드의 장점 결합 및 호환성 확보)
    // 기존 문서들의 클래스(.footnote-ref, .wiki-fn)를 모두 인식
    const refs = document.querySelectorAll('.footnote-ref, .wiki-fn');
    
    // 툴팁 박스 찾기 (없으면 자동으로 생성해서 에러 방지)
    let tooltip = document.getElementById('wiki-tooltip-container') || document.getElementById('footnote-tooltip');
    if (!tooltip) {
        tooltip = document.createElement('div');
        tooltip.id = 'wiki-tooltip-container';
        tooltip.style.position = 'fixed'; // 마우스를 자연스럽게 따라다니도록 설정
        tooltip.style.display = 'none';
        tooltip.style.zIndex = '9999'; // 화면 최상단에 배치
        document.body.appendChild(tooltip);
    }

    refs.forEach(ref => {
        ref.addEventListener('mouseenter', (e) => {
            e.preventDefault(); 
            
            // 두 방식 모두 호환 (data-note 속성이 있으면 쓰고, 없으면 href 속성 사용)
            let targetId = ref.getAttribute('data-note');
            if (!targetId && ref.getAttribute('href')) {
                targetId = ref.getAttribute('href').substring(1); 
            }
            
            if (!targetId) return;

            const targetContent = document.getElementById(targetId);
            
            if (targetContent) {
                tooltip.innerHTML = targetContent.innerHTML;
                tooltip.style.display = 'block';
                moveTooltip(e);
            }
        });

        ref.addEventListener('mousemove', (e) => {
            moveTooltip(e);
        });

        ref.addEventListener('mouseleave', () => {
            tooltip.style.display = 'none';
        });
    });

    function moveTooltip(e) {
        const x = e.clientX + 15;
        const y = e.clientY + 15;
        
        const tooltipRect = tooltip.getBoundingClientRect();
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        let finalX = x;
        let finalY = y;

        // 오른쪽 화면 밖으로 잘림 방지
        if (x + tooltipRect.width > windowWidth) {
            finalX = windowWidth - tooltipRect.width - 20;
        }
        // 아래쪽 화면 밖으로 잘림 방지
        if (y + tooltipRect.height > windowHeight) {
            finalY = windowHeight - tooltipRect.height - 20;
        }

        tooltip.style.left = finalX + 'px';
        tooltip.style.top = finalY + 'px';
    }
});