/**
 * 파일명: js/북구행정.js
 * 설명: 효빈광역시 북구 행정구역(행정동/법정동) 전체 내비게이션 자동 생성
 * 특징: 클래스 기반(.hb-bukgu-nav)으로 작동, 북구 전용 색상(wiki-point) 적용
 */

(function() {
    // 1. "hb-bukgu-nav" 클래스를 가진 모든 요소를 찾음
    var containers = document.querySelectorAll(".hb-bukgu-nav");

    // 2. 각 컨테이너마다 HTML 주입
    containers.forEach(function(container, index) {
        // 고유 ID 생성 (접기/펼치기 기능 충돌 방지)
        var uniqueNavId = "bukguNav_" + index;
        var uniqueLabelId = "bukguLabel_" + index;

        // 원본 HTML 소스 (북구 데이터 및 디자인 완벽 유지)
        var navHTML = `
        <div class="nav-box rounded overflow-hidden shadow-sm">
            <div class="nav-box-header" onclick="toggleNav('${uniqueNavId}', '${uniqueLabelId}')">
                <span class="flex items-center">
                    <img src="이미지/북구_흰색로고.png" alt="📂" style="height: 3.0em; width: auto; margin-right: 5px;" onerror="this.outerHTML='📂'">
                    <span>효빈광역시 북구의 행정구역</span>
                </span>
                <span id="${uniqueLabelId}" class="text-[10px] bg-white/20 px-2 py-0.5 rounded nav-toggle-btn">[접기]</span>
            </div>
            <div id="${uniqueNavId}" class="nav-box-body" style="transition: max-height 0.3s ease-out; overflow: hidden; max-height: 2000px;">
                <table class="admin-dong-grid text-xs">
                    <colgroup>
                        <col class="w-1/4">
                        <col class="w-1/4">
                        <col class="w-1/4">
                        <col class="w-1/4">
                    </colgroup>
                    <tr class="text-white">
                        <th class="border border-[#ccc] p-2" style="background-color: var(--wiki-point);">행정동</th>
                        <th colspan="3" class="border border-[#ccc] p-2" style="background-color: var(--wiki-point);">법정동</th>
                    </tr>
                    <tr>
                        <td class="admin-name-cell border border-[#ccc] p-2" rowspan="2"><a href="사능1동.html" class="wiki-link">사능1동</a></td>
                        <td class="legal-dong-cell border border-[#ccc] p-2"><a href="사능동.html" class="wiki-link">사능동1가</a></td>
                        <td class="legal-dong-cell border border-[#ccc] p-2"><a href="사능동.html" class="wiki-link">사능동2가</a>(일부)</td>
                        <td class="legal-dong-cell border border-[#ccc] p-2"><a href="사능동.html" class="wiki-link">사능동3가</a></td>
                    </tr>
                    <tr>
                        <td class="legal-dong-cell border border-[#ccc] p-2"><a href="생곡동.html" class="wiki-link">생곡동</a></td>
                        <td class="legal-dong-cell border border-[#ccc] p-2"><a href="치남동.html" class="wiki-link">치남동</a></td>
                        <td class="bg-[#f9f9f9] border border-[#ccc] p-2"></td>
                    </tr>
                    <tr>
                        <td class="admin-name-cell border border-[#ccc] p-2"><a href="사능2동.html" class="wiki-link">사능2동</a></td>
                        <td colspan="3" class="legal-dong-cell border border-[#ccc] p-2"><a href="사능동.html" class="wiki-link">사능동2가</a>(일부)</td>
                    </tr>
                    <tr>
                        <td class="admin-name-cell border border-[#ccc] p-2"><a href="고송1동.html" class="wiki-link">고송1동</a></td>
                        <td rowspan="8" colspan="3" class="legal-dong-cell border border-[#ccc] p-2"><a href="고송동.html" class="wiki-link">고송동</a></td>
                    </tr>
                    <tr><td class="admin-name-cell border border-[#ccc] p-2"><a href="고송2동.html" class="wiki-link">고송2동</a></td></tr>
                    <tr><td class="admin-name-cell border border-[#ccc] p-2"><a href="고송3동.html" class="wiki-link">고송3동</a></td></tr>
                    <tr><td class="admin-name-cell border border-[#ccc] p-2"><a href="고송4동.html" class="wiki-link">고송4동</a></td></tr>
                    <tr><td class="admin-name-cell border border-[#ccc] p-2"><a href="고송5동.html" class="wiki-link">고송5동</a></td></tr>
                    <tr><td class="admin-name-cell border border-[#ccc] p-2"><a href="고송6동.html" class="wiki-link">고송6동</a></td></tr>
                    <tr><td class="admin-name-cell border border-[#ccc] p-2"><a href="고송7동.html" class="wiki-link">고송7동</a></td></tr>
                    <tr><td class="admin-name-cell border border-[#ccc] p-2"><a href="고송8동.html" class="wiki-link">고송8동</a></td></tr>
                    <tr>
                        <td class="admin-name-cell border border-[#ccc] p-2"><a href="진희동.html" class="wiki-link">진희동</a></td>
                        <td class="legal-dong-cell border border-[#ccc] p-2"><a href="진희동.html" class="wiki-link">진희동</a></td>
                        <td class="legal-dong-cell border border-[#ccc] p-2"><a href="입희동.html" class="wiki-link">입희동</a></td>
                        <td class="bg-[#f9f9f9] border border-[#ccc] p-2"></td>
                    </tr>
                    <tr>
                        <td class="admin-name-cell border border-[#ccc] p-2"><a href="청능동.html" class="wiki-link">청능동</a></td>
                        <td class="legal-dong-cell border border-[#ccc] p-2"><a href="청능동.html" class="wiki-link">청능동</a></td>
                        <td class="legal-dong-cell border border-[#ccc] p-2"><a href="입선동.html" class="wiki-link">입선동</a></td>
                        <td class="legal-dong-cell border border-[#ccc] p-2"><a href="입희동.html" class="wiki-link">입희동</a>(일부)</td>
                    </tr>
                    <tr>
                        <td class="admin-name-cell border border-[#ccc] p-2"><a href="중수1동.html" class="wiki-link">중수1동</a></td>
                        <td rowspan="4" colspan="3" class="legal-dong-cell border border-[#ccc] p-2"><a href="중수동.html" class="wiki-link">중수동</a></td>
                    </tr>
                    <tr><td class="admin-name-cell border border-[#ccc] p-2"><a href="중수2동.html" class="wiki-link">중수2동</a></td></tr>
                    <tr><td class="admin-name-cell border border-[#ccc] p-2"><a href="중수3동.html" class="wiki-link">중수3동</a></td></tr>
                    <tr><td class="admin-name-cell border border-[#ccc] p-2"><a href="중수4동.html" class="wiki-link">중수4동</a></td></tr>
                    <tr>
                        <td class="admin-name-cell border border-[#ccc] p-2"><a href="오내1동.html" class="wiki-link">오내1동</a></td>
                        <td rowspan="2" colspan="3" class="legal-dong-cell border border-[#ccc] p-2"><a href="오내동.html" class="wiki-link">오내동</a></td>
                    </tr>
                    <tr><td class="admin-name-cell border border-[#ccc] p-2"><a href="오내2동.html" class="wiki-link">오내2동</a></td></tr>
                    <tr>
                        <td class="admin-name-cell border border-[#ccc] p-2"><a href="남전동.html" class="wiki-link">남전동</a></td>
                        <td colspan="3" class="legal-dong-cell border border-[#ccc] p-2"><a href="남전동.html" class="wiki-link">남전동</a></td>
                    </tr>
                    <tr>
                        <td class="admin-name-cell border border-[#ccc] p-2"><a href="천왕사동.html" class="wiki-link">천왕사동</a></td>
                        <td class="legal-dong-cell border border-[#ccc] p-2"><a href="천왕사동.html" class="wiki-link">천왕사동</a></td>
                        <td class="legal-dong-cell border border-[#ccc] p-2"><a href="해서동.html" class="wiki-link">해서동</a></td>
                        <td class="bg-[#f9f9f9] border border-[#ccc] p-2"></td>
                    </tr>
                    <tr>
                        <td class="admin-name-cell border border-[#ccc] p-2"><a href="소조동.html" class="wiki-link">소조동</a></td>
                        <td colspan="3" class="legal-dong-cell border border-[#ccc] p-2"><a href="소조동.html" class="wiki-link">소조동</a></td>
                    </tr>
                    <tr>
                        <td class="admin-name-cell border border-[#ccc] p-2"><a href="포산동.html" class="wiki-link">포산동</a></td>
                        <td colspan="3" class="legal-dong-cell border border-[#ccc] p-2"><a href="포산동.html" class="wiki-link">포산동</a></td>
                    </tr>
                    <tr>
                        <td class="admin-name-cell border border-[#ccc] p-2"><a href="산고동.html" class="wiki-link">산고동</a></td>
                        <td class="legal-dong-cell border border-[#ccc] p-2"><a href="서도동.html" class="wiki-link">서도동</a></td>
                        <td class="legal-dong-cell border border-[#ccc] p-2"><a href="추산동.html" class="wiki-link">추산동</a></td>
                        <td class="legal-dong-cell border border-[#ccc] p-2"><a href="사연동.html" class="wiki-link">사연동</a></td>
                    </tr>
                    <tr>
                        <td class="admin-name-cell border border-[#ccc] p-2" rowspan="4"><a href="채산동.html" class="wiki-link">채산동</a></td>
                        <td class="legal-dong-cell border border-[#ccc] p-2"><a href="아진동.html" class="wiki-link">아진동</a></td>
                        <td class="legal-dong-cell border border-[#ccc] p-2"><a href="곡진동.html" class="wiki-link">곡진동</a></td>
                        <td class="legal-dong-cell border border-[#ccc] p-2"><a href="평전동.html" class="wiki-link">평전동</a></td>
                    </tr>
                    <tr>
                        <td class="legal-dong-cell border border-[#ccc] p-2"><a href="등기동.html" class="wiki-link">등기동</a></td>
                        <td class="legal-dong-cell border border-[#ccc] p-2"><a href="수포동.html" class="wiki-link">수포동</a></td>
                        <td class="legal-dong-cell border border-[#ccc] p-2"><a href="아자동.html" class="wiki-link">아자동</a></td>
                    </tr>
                    <tr>
                        <td class="legal-dong-cell border border-[#ccc] p-2"><a href="신영동.html" class="wiki-link">신영동</a></td>
                        <td class="legal-dong-cell border border-[#ccc] p-2"><a href="실본동.html" class="wiki-link">실본동</a></td>
                        <td class="legal-dong-cell border border-[#ccc] p-2"><a href="채산동.html" class="wiki-link">채산동</a></td>
                    </tr>
                    <tr>
                        <td class="legal-dong-cell border border-[#ccc] p-2"><a href="습지동.html" class="wiki-link">습지동</a></td>
                        <td class="bg-[#f9f9f9] border border-[#ccc] p-2"></td>
                        <td class="bg-[#f9f9f9] border border-[#ccc] p-2"></td>
                    </tr>
                </table>
            </div>
        </div>
        `;
        
        container.innerHTML = navHTML;
    });

    // 공통 토글 기능 (안전 장치)
    if (typeof window.toggleNav === 'undefined') {
        window.toggleNav = function(id, labelId) {
            var content = document.getElementById(id);
            var label = document.getElementById(labelId);
            
            if (!content) return;

            if (!content.style.maxHeight) {
                content.style.maxHeight = '2000px'; 
            }

            if (content.style.maxHeight === '0px') {
                content.style.maxHeight = '2000px';
                if(label) label.innerText = '[접기]';
            } else {
                content.style.maxHeight = '0px';
                if(label) label.innerText = '[펼치기]';
            }
        };
    }
})();