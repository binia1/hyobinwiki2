/**
 * 파일명: js/중구초등학교.js
 * 설명: 효빈광역시 중구 초등학교 내비게이션 (독립형 CSS 포함)
 */
document.addEventListener("DOMContentLoaded", function() {
    // 1. 외부 CSS 없이도 작동하도록 JS 내부에 스타일 강제 주입
    if (!document.getElementById("hb-school-nav-style")) {
        var style = document.createElement("style");
        style.id = "hb-school-nav-style";
        style.innerHTML = `
            .hb-school-nav-box { border: 1px solid #BB9955; margin-bottom: 15px; font-size: 0.85rem; border-radius: 4px; overflow: hidden; clear: both; background-color: #ffffff; font-family: 'Noto Sans KR', sans-serif; }
            .hb-school-nav-header { background-color: #BB9955; color: #fff; padding: 8px 12px; font-weight: bold; text-align: center; cursor: default; }
            .hb-school-nav-info { padding: 8px; text-align: center; font-size: 0.75rem; border-bottom: 1px solid #ccc; background-color: #ffffff; color: #333; }
            .hb-school-nav-badge { padding: 2px 6px; border: 1px solid #ccc; border-radius: 3px; display: inline-block; margin: 0 2px; }
            .hb-school-table { width: 100%; border-collapse: collapse; background: #fff; table-layout: fixed; margin: 0; }
            .hb-school-table td { border: 1px solid #ccc; padding: 8px 4px; text-align: center; width: 20%; font-size: 0.85rem; vertical-align: middle; word-break: keep-all; }
            .hb-school-table a { color: #0022AA; text-decoration: none; font-weight: bold; }
            .hb-school-table a:hover { text-decoration: underline; }
            .hb-bg-boy { background-color: #e3f2fd !important; color: #000; }
            .hb-bg-girl { background-color: #ffebee !important; color: #000; }
            
            /* 다크모드 대응 */
            [data-theme='dark'] .hb-school-nav-box { border-color: #9999CC; background-color: #121212; }
            [data-theme='dark'] .hb-school-nav-header { background-color: #9999CC; }
            [data-theme='dark'] .hb-school-nav-info { border-color: #444; background-color: #121212; color: #eee; }
            [data-theme='dark'] .hb-school-nav-badge { border-color: #444; }
            [data-theme='dark'] .hb-school-table { background: #2d2f34; }
            [data-theme='dark'] .hb-school-table td { border-color: #444; }
            [data-theme='dark'] .hb-school-table a { color: #88AAFF; }
            [data-theme='dark'] .hb-bg-boy { background-color: #1e3a8a !important; color: #fff; }
            [data-theme='dark'] .hb-bg-girl { background-color: #881337 !important; color: #fff; }
        `;
        document.head.appendChild(style);
    }

    // 2. HTML 구조 생성
    var containers = document.querySelectorAll(".hb-중구초등학교-nav");
    containers.forEach(function(container) {
        container.innerHTML = `
<div class="hb-school-nav-box">
    <div class="hb-school-nav-header">
        효빈광역시 중구의 초등학교
    </div>
    <div class="hb-school-nav-info">
        <div style="margin-bottom: 2px;">
            <span class="hb-school-nav-badge hb-bg-boy">남자초등학교</span>
            <span class="hb-school-nav-badge hb-bg-girl">여자초등학교</span>
            이외 남녀공학
        </div>
    </div>
    <table class="hb-school-table">
        <tr>
            <td><a href="내조초등학교.html">내조초</a></td>
            <td><a href="내항초등학교.html">내항초</a></td>
            <td><a href="리사초등학교.html">리사초</a></td>
            <td><a href="상원초등학교.html">상원초</a></td>
            <td><a href="신덕초등학교.html">신덕초</a></td>
        </tr>
        <tr>
            <td><a href="심동초등학교.html">심동초</a></td>
            <td><a href="약맥초등학교.html">약맥초</a></td>
            <td><a href="천석초등학교.html">천석초</a></td>
            <td><a href="효빈원동초등학교.html">효빈원동초</a></td>
            <td><a href="효빈중동초등학교.html">효빈중동초</a></td>
        </tr>
        <tr>
            <td><a href="효빈중앙초등학교.html">효빈중앙초</a></td>
            <td><a href="효빈초등학교.html">효빈초</a></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </table>
</div>
        `;
    });
});