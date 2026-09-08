/**
 * 파일명: js/남구초등학교.js
 * 설명: 효빈광역시 남구 초등학교 내비게이션 (독립형 CSS 포함)
 */
document.addEventListener("DOMContentLoaded", function() {
    // 1. 외부 CSS 없이도 작동하도록 JS 내부에 스타일 강제 주입 (중복 방지)
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
    var containers = document.querySelectorAll(".hb-남구초등학교-nav");
    containers.forEach(function(container) {
        container.innerHTML = `
<div class="hb-school-nav-box">
    <div class="hb-school-nav-header">
        효빈광역시 남구의 초등학교
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
            <td><a href="간건초등학교.html">간건초</a></td>
            <td><a href="간자초등학교.html">간자초</a></td>
            <td><a href="고관초등학교.html">고관초</a></td>
            <td><a href="곽산초등학교.html">곽산초</a></td>
            <td><a href="곽암초등학교.html">곽암초</a></td>
        </tr>
        <tr>
            <td><a href="남구초등학교.html">남구초</a></td>
            <td><a href="능사초등학교.html">능사초</a></td>
            <td><a href="박산초등학교.html">박산초</a></td>
            <td><a href="삼선초등학교.html">삼선초</a></td>
            <td><a href="상원대초등학교.html">상원대초</a></td>
        </tr>
        <tr>
            <td><a href="선산초등학교.html">선산초</a></td>
            <td><a href="설채초등학교.html">설채초</a></td>
            <td><a href="신거초등학교.html">신거초</a></td>
            <td><a href="신흥초등학교.html">신흥초</a></td>
            <td><a href="애마초등학교.html">애마초</a></td>
        </tr>
        <tr>
            <td><a href="앵판초등학교.html">앵판초</a></td>
            <td><a href="어간초등학교.html">어간초</a></td>
            <td><a href="어천초등학교.html">어천초</a></td>
            <td><a href="월천남초등학교.html">월천남초</a></td>
            <td><a href="월천초등학교.html">월천초</a></td>
        </tr>
        <tr>
            <td><a href="종람초등학교.html">종람초</a></td>
            <td><a href="중천초등학교.html">중천초</a></td>
            <td><a href="판령초등학교.html">판령초</a></td>
            <td><a href="평남초등학교.html">평남초</a></td>
            <td><a href="평당초등학교.html">평당초</a></td>
        </tr>
        <tr>
            <td><a href="평산초등학교.html">평산초</a></td>
            <td><a href="평안초등학교.html">평안초</a></td>
            <td><a href="포장초등학교.html">포장초</a></td>
            <td><a href="항구초등학교.html">항구초</a></td>
            <td><a href="항동초등학교.html">항동초</a></td>
        </tr>
        <tr>
            <td><a href="해안초등학교.html">해안초</a></td>
            <td><a href="효빈남초등학교.html">효빈남초</a></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </table>
</div>
        `;
    });
});