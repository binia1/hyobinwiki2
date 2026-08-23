        function toggleTheme() {
            const body = document.body;
            const isDark = body.getAttribute('data-theme') === 'dark';
            body.setAttribute('data-theme', isDark ? 'light' : 'dark');
            localStorage.setItem('wiki_theme', isDark ? 'light' : 'dark');
            document.getElementById('themeBtn').innerText = isDark ? '다크모드' : '라이트모드';
        }

        function showMsg(text) {
            const box = document.getElementById('wiki-msg-box');
            box.innerText = text; box.style.display = 'block';
            setTimeout(() => { box.style.display = 'none'; }, 2000);
        }

        function handleSearchFromNav(title) {
            if (!title) return;
            const fileMap = {
                '효빈광역시': '효빈광역시.html',
                '남구': '남구.html',
                '남구(효빈)': '남구.html',
                '동구': '동구.html',
                '동구(효빈)': '동구.html',
                '북구': '북구.html',
                '북구(효빈)': '북구.html',
                '서구': '서구.html',
                '서구(효빈)': '서구.html',
                '중구': '중구.html',
                '안천구': '안천구.html',
                '안천구': '안천구.html',
                '창전구': '창전구.html',
                '창전구': '창전구.html',
                '청엽구': '청엽구.html',
                '청엽구': '청엽구.html',
                '탄성군': '탄성군.html',
                '탄성군': '탄성군.html',
                '덕빈북도': 'deokbin_buk.html',
                '덕빈남도': 'deokbin_nam.html',
                '박효빈': '박효빈.html'
            };

            if (fileMap[title]) {
                window.location.href = fileMap[title];
            } else {
                const t = String(title).trim();
                const hasExt = /\.[a-zA-Z0-9]+($|\?)/.test(t);
                window.location.href = hasExt ? t : (t + '.html');
            }
        }

        window.onload = function() {
            const savedTheme = localStorage.getItem('wiki_theme');
            if (savedTheme === 'dark') document.body.setAttribute('data-theme', 'dark');
        };

        document.getElementById('searchInput')?.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') handleSearchFromNav(this.value.trim());
        });
    
        // --- 링크 처리(한국어 파일명 포함) ---
        function handleLink(target){
            if(!target) return;
            const t = String(target).trim();
            if(!t) return;
            const hasExt = /\.[a-zA-Z0-9]+($|\?)/.test(t);
            location.href = hasExt ? t : (t + '.html');
        }
        function normalizeWikiLinks(){
            document.querySelectorAll('a.wiki-link').forEach(a=>{
                const href = a.getAttribute('href');
                if(!href) return;
                const h = href.trim();
                if(!h || h.startsWith('#') || h.startsWith('http') || h.startsWith('mailto:') || h.startsWith('tel:') || h.startsWith('javascript:')) return;
                if(/\.[a-zA-Z0-9]+($|\?)/.test(h)) return;
                a.setAttribute('href', h + '.html');
            });
        }
        normalizeWikiLinks();
