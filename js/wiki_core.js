document.addEventListener('DOMContentLoaded', () => {
    // 1. 검색 기능 (엔터키 지원 포함)
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.querySelector('button[onclick="handleSearch()"]');

    const doSearch = () => {
        const query = searchInput?.value.trim();
        query ? location.href = `${query}.html` : alert('검색어를 입력해주세요.');
    };

    // HTML 인라인 이벤트 대신 JS에서 리스너 바인딩 (HTML을 더 깔끔하게)
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') doSearch();
        });
        // 기존 버튼의 onclick 속성을 제거하고 리스너로 대체해도 좋음
        window.handleSearch = doSearch; 
    }

    // 2. 각주 툴팁 기능 (호버링)
    const tooltip = document.getElementById('wiki-tooltip');
    
    document.querySelectorAll('sup a[id^="rfn-"]').forEach(fn => {
        fn.addEventListener('mouseenter', function() {
            const targetId = this.getAttribute('href').substring(1);
            const contentEl = document.getElementById(targetId);
            
            if (contentEl && tooltip) {
                // 각주 내용 가져오기 (되돌아가기 링크 '^' 제거)
                tooltip.innerHTML = contentEl.innerHTML.replace(/<a[^>]*>\^<\/a>/g, '');
                tooltip.style.display = 'block';

                // 위치 계산 (화면 오른쪽 넘어감 방지 로직 포함)
                const rect = this.getBoundingClientRect();
                const tWidth = 300; // CSS max-width와 맞춤
                
                let left = rect.left;
                // 툴팁이 화면 오른쪽을 뚫고 나가면 위치 보정
                if (left + tWidth > window.innerWidth) {
                    left = window.innerWidth - tWidth - 20; 
                }

                tooltip.style.left = `${left}px`;
                tooltip.style.top = `${rect.bottom + window.scrollY + 5}px`;
            }
        });

        fn.addEventListener('mouseleave', () => {
            if (tooltip) tooltip.style.display = 'none';
        });
    });
});