    function toggleTheme() {
        const body = document.body;
        const isDark = body.getAttribute('data-theme') === 'dark';
        body.setAttribute('data-theme', isDark ? 'light' : 'dark');
        document.getElementById('themeBtn').innerText = isDark ? '다크모드' : '라이트모드';
    }

    function showMsg(text) {
        const box = document.getElementById('wiki-msg-box');
        box.innerText = text; box.style.display = 'block';
        setTimeout(() => { box.style.display = 'none'; }, 2000);
    }

    // 목차 부드러운 스크롤 이동
    document.querySelectorAll('.toc a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                const headerOffset = 60;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
            }
        });
    });
