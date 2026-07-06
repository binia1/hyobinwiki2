/**
 * 파일명: js/중구행정.js
 * 설명: 효빈광역시 중구 행정구역(행정동/법정동) 전체 내비게이션
 * 수정: 테이블 찌그러짐(우측 여백 텅 빔) 현상 완벽 해결 (width: 100%, table-layout: fixed 강제 적용)
 */

(function() {
    // 1. "hb-junggu-nav" 클래스를 가진 모든 요소를 찾음
    var containers = document.querySelectorAll(".hb-junggu-nav");

    // 2. 각 컨테이너마다 HTML 주입
    containers.forEach(function(container, index) {
        // 고유 ID 생성
        var uniqueNavId = "jungguNav_" + index;
        var uniqueLabelId = "jungguLabel_" + index;

        // [핵심 수정]: table 태그에 style="width: 100% !important; table-layout: fixed !important;" 추가하여 찌그러짐 원천 차단
        var navHTML = `
        <div class="nav-box rounded overflow-hidden shadow-sm" style="border: 2px solid var(--wiki-main); margin-bottom: 20px; font-size: 0.85rem; clear: both; background-color: var(--wiki-bg);">
            <div class="nav-box-header" style="background-color: var(--wiki-main); color: #fff; padding: 8px 12px; font-weight: bold; display: flex; justify-content: center; align-items: center; cursor: pointer; position: relative;" onclick="window.toggleNav ? window.toggleNav('${uniqueNavId}', '${uniqueLabelId}') : toggleNav('${uniqueNavId}', '${uniqueLabelId}')">
                <span class="flex items-center">
                    <img src="이미지/중구_흰색로고.webp" alt="📂" style="height: 1.8em; width: auto; margin-right: 8px;" onerror="this.outerHTML='<span style=\\'font-size: 1.2em; margin-right: 5px;\\'>🏛️</span>'">
                    <span>효빈광역시 중구의 행정구역</span>
                </span>
                <span id="${uniqueLabelId}" class="text-[10px] bg-white/20 px-2 py-0.5 rounded nav-toggle-btn" style="position: absolute; right: 12px;">[접기]</span>
            </div>
            <div id="${uniqueNavId}" class="nav-box-body" style="transition: max-height 0.3s ease-out; overflow: hidden; max-height: 2000px;">
                <table class="admin-dong-table" style="margin: 0; width: 100% !important; table-layout: fixed !important; border-collapse: collapse !important; text-align: center;">
                    <colgroup>
                        <col style="width: 16%;">
                        <col style="width: 21%;">
                        <col style="width: 21%;">
                        <col style="width: 21%;">
                        <col style="width: 21%;">
                    </colgroup>
                    <tbody>
                        <tr class="text-white">
                            <th class="border border-[#ccc] p-2" style="background-color: var(--wiki-point) !important; color:white;">행정동</th>
                            <th colspan="4" class="border border-[#ccc] p-2" style="background-color: var(--wiki-point) !important; color:white;">법정동</th>
                        </tr>
                        
                        <tr>
                            <td class="admin-name-cell border border-[#ccc] p-2 bg-[var(--wiki-gray-bg)]" rowspan="2"><a href="궁영동.html" class="wiki-link">궁영동</a></td>
                            <td class="legal-dong-cell border border-[#ccc] p-2"><a href="궁정동.html" class="wiki-link">궁정동</a></td>
                            <td class="legal-dong-cell border border-[#ccc] p-2"><a href="도람동.html" class="wiki-link">도람동</a></td>
                            <td class="legal-dong-cell border border-[#ccc] p-2"><a href="만실동.html" class="wiki-link">만실동</a></td>
                            <td class="legal-dong-cell border border-[#ccc] p-2"><a href="영동1가.html" class="wiki-link">영동1가</a></td>
                        </tr>
                        <tr>
                            <td colspan="4" class="legal-dong-cell border border-[#ccc] p-2"><a href="영동2가.html" class="wiki-link">영동2가</a></td>
                        </tr>
                        <tr>
                            <td class="admin-name-cell border border-[#ccc] p-2 bg-[var(--wiki-gray-bg)]"><a href="신덕동.html" class="wiki-link">신덕동</a></td>
                            <td colspan="4" class="legal-dong-cell border border-[#ccc] p-2"><a href="신덕동.html" class="wiki-link">신덕동</a></td>
                        </tr>
                        <tr>
                            <td class="admin-name-cell border border-[#ccc] p-2 bg-[var(--wiki-gray-bg)]"><a href="내항동.html" class="wiki-link">내항동</a></td>
                            <td colspan="2" class="legal-dong-cell border border-[#ccc] p-2"><a href="내항동.html" class="wiki-link">내항동</a></td>
                            <td colspan="2" class="legal-dong-cell border border-[#ccc] p-2"><a href="명일동.html" class="wiki-link">명일동</a></td>
                        </tr>
                        <tr>
                            <td class="admin-name-cell border border-[#ccc] p-2 bg-[var(--wiki-gray-bg)]"><a href="내조1동.html" class="wiki-link">내조1동</a></td>
                            <td colspan="4" rowspan="2" class="legal-dong-cell border border-[#ccc] p-2 align-middle"><a href="내조동.html" class="wiki-link">내조동</a></td>
                        </tr>
                        <tr>
                            <td class="admin-name-cell border border-[#ccc] p-2 bg-[var(--wiki-gray-bg)]"><a href="내조2동.html" class="wiki-link">내조2동</a></td>
                        </tr>

                        <tr>
                            <td class="admin-name-cell border border-[#ccc] p-2 bg-[var(--wiki-gray-bg)]" rowspan="2"><a href="고도동.html" class="wiki-link">고도동</a></td>
                            <td class="legal-dong-cell border border-[#ccc] p-2"><a href="고도동.html" class="wiki-link">고도동</a></td>
                            <td class="legal-dong-cell border border-[#ccc] p-2"><a href="시남동.html" class="wiki-link">시남동</a></td>
                            <td class="legal-dong-cell border border-[#ccc] p-2"><a href="시북동.html" class="wiki-link">시북동</a></td>
                            <td class="legal-dong-cell border border-[#ccc] p-2"><a href="십덕동.html" class="wiki-link">십덕동</a></td>
                        </tr>
                        <tr>
                            <td colspan="4" class="legal-dong-cell border border-[#ccc] p-2"><a href="우이동.html" class="wiki-link">우이동</a></td>
                        </tr>
                        <tr>
                            <td class="admin-name-cell border border-[#ccc] p-2 bg-[var(--wiki-gray-bg)]" rowspan="2"><a href="약맥동.html" class="wiki-link">약맥동</a></td>
                            <td class="legal-dong-cell border border-[#ccc] p-2"><a href="삼각동.html" class="wiki-link">삼각동</a></td>
                            <td class="legal-dong-cell border border-[#ccc] p-2"><a href="목동.html" class="wiki-link">목동</a></td>
                            <td class="legal-dong-cell border border-[#ccc] p-2"><a href="약맥동.html" class="wiki-link">약맥동</a></td>
                            <td class="legal-dong-cell border border-[#ccc] p-2"><a href="오주동.html" class="wiki-link">오주동</a></td>
                        </tr>
                        <tr>
                            <td colspan="4" class="legal-dong-cell border border-[#ccc] p-2"><a href="일향동.html" class="wiki-link">일향동</a></td>
                        </tr>
                        <tr>
                            <td class="admin-name-cell border border-[#ccc] p-2 bg-[var(--wiki-gray-bg)]"><a href="유내동.html" class="wiki-link">유내동</a></td>
                            <td class="legal-dong-cell border border-[#ccc] p-2"><a href="유내동.html" class="wiki-link">유내동</a></td>
                            <td class="legal-dong-cell border border-[#ccc] p-2"><a href="경동.html" class="wiki-link">경동</a></td>
                            <td class="legal-dong-cell border border-[#ccc] p-2"><a href="리사동.html" class="wiki-link">리사동</a></td>
                            <td class="legal-dong-cell border border-[#ccc] p-2"><a href="정동.html" class="wiki-link">정동</a></td>
                        </tr>
                        <tr>
                            <td class="admin-name-cell border border-[#ccc] p-2 bg-[var(--wiki-gray-bg)]" rowspan="5"><a href="중앙동.html" class="wiki-link">중앙동</a></td>
                            <td class="legal-dong-cell border border-[#ccc] p-2"><a href="심동1가.html" class="wiki-link">심동1가</a></td>
                            <td class="legal-dong-cell border border-[#ccc] p-2"><a href="심동2가.html" class="wiki-link">심동2가</a></td>
                            <td class="legal-dong-cell border border-[#ccc] p-2"><a href="중앙로1가.html" class="wiki-link">중앙로1가</a></td>
                            <td class="legal-dong-cell border border-[#ccc] p-2"><a href="중앙로2가.html" class="wiki-link">중앙로2가</a></td>
                        </tr>
                        <tr>
                            <td class="legal-dong-cell border border-[#ccc] p-2"><a href="중앙로3가.html" class="wiki-link">중앙로3가</a></td>
                            <td class="legal-dong-cell border border-[#ccc] p-2"><a href="중앙로4가.html" class="wiki-link">중앙로4가</a></td>
                            <td class="legal-dong-cell border border-[#ccc] p-2"><a href="중앙로5가.html" class="wiki-link">중앙로5가</a></td>
                            <td class="legal-dong-cell border border-[#ccc] p-2"><a href="중앙로6가.html" class="wiki-link">중앙로6가</a></td>
                        </tr>
                        <tr>
                            <td class="legal-dong-cell border border-[#ccc] p-2"><a href="지유동1가.html" class="wiki-link">지유동1가</a></td>
                            <td class="legal-dong-cell border border-[#ccc] p-2"><a href="지유동2가.html" class="wiki-link">지유동2가</a></td>
                            <td class="legal-dong-cell border border-[#ccc] p-2"><a href="훈동.html" class="wiki-link">훈동</a></td>
                            <td class="legal-dong-cell border border-[#ccc] p-2"><a href="원동1가.html" class="wiki-link">원동1가</a></td>
                        </tr>
                        <tr>
                            <td class="legal-dong-cell border border-[#ccc] p-2"><a href="원동2가.html" class="wiki-link">원동2가</a></td>
                            <td class="legal-dong-cell border border-[#ccc] p-2"><a href="원동3가.html" class="wiki-link">원동3가</a></td>
                            <td class="legal-dong-cell border border-[#ccc] p-2"><a href="원동4가.html" class="wiki-link">원동4가</a></td>
                            <td class="legal-dong-cell border border-[#ccc] p-2"><a href="창선동1가.html" class="wiki-link">창선동1가</a></td>
                        </tr>
                        <tr>
                            <td class="legal-dong-cell border border-[#ccc] p-2"><a href="창선동2가.html" class="wiki-link">창선동2가</a></td>
                            <td class="legal-dong-cell border border-[#ccc] p-2"><a href="창선동3가.html" class="wiki-link">창선동3가</a></td>
                            <td class="legal-dong-cell border border-[#ccc] p-2"><a href="소장동1가.html" class="wiki-link">소장동1가</a></td>
                            <td class="legal-dong-cell border border-[#ccc] p-2"><a href="소장동2가.html" class="wiki-link">소장동2가</a></td>
                        </tr>

                        <tr>
                            <td class="admin-name-cell border border-[#ccc] p-2 bg-[var(--wiki-gray-bg)]" rowspan="2"><a href="중정동.html" class="wiki-link">중정동</a></td>
                            <td class="legal-dong-cell border border-[#ccc] p-2"><a href="완동1가.html" class="wiki-link">완동1가</a></td>
                            <td class="legal-dong-cell border border-[#ccc] p-2"><a href="완동2가.html" class="wiki-link">완동2가</a></td>
                            <td class="legal-dong-cell border border-[#ccc] p-2"><a href="완동3가.html" class="wiki-link">완동3가</a></td>
                            <td class="legal-dong-cell border border-[#ccc] p-2"><a href="오석동.html" class="wiki-link">오석동</a></td>
                        </tr>
                        <tr>
                            <td class="legal-dong-cell border border-[#ccc] p-2"><a href="중동1가.html" class="wiki-link">중동1가</a></td>
                            <td class="legal-dong-cell border border-[#ccc] p-2"><a href="중동2가.html" class="wiki-link">중동2가</a></td>
                            <td class="legal-dong-cell border border-[#ccc] p-2"><a href="중동3가.html" class="wiki-link">중동3가</a></td>
                            <td class="legal-dong-cell border border-[#ccc] p-2"><a href="중보로.html" class="wiki-link">중보로</a></td>
                        </tr>
                        <tr>
                            <td class="admin-name-cell border border-[#ccc] p-2 bg-[var(--wiki-gray-bg)]" rowspan="3"><a href="조유동.html" class="wiki-link">조유동</a></td>
                            <td class="legal-dong-cell border border-[#ccc] p-2"><a href="조유동1가.html" class="wiki-link">조유동1가</a></td>
                            <td class="legal-dong-cell border border-[#ccc] p-2"><a href="조유동2가.html" class="wiki-link">조유동2가</a></td>
                            <td class="legal-dong-cell border border-[#ccc] p-2"><a href="조유동3가.html" class="wiki-link">조유동3가</a></td>
                            <td class="legal-dong-cell border border-[#ccc] p-2"><a href="조유동4가.html" class="wiki-link">조유동4가</a></td>
                        </tr>
                        <tr>
                            <td class="legal-dong-cell border border-[#ccc] p-2"><a href="조유동5가.html" class="wiki-link">조유동5가</a></td>
                            <td class="legal-dong-cell border border-[#ccc] p-2"><a href="천석동1가.html" class="wiki-link">천석동1가</a></td>
                            <td class="legal-dong-cell border border-[#ccc] p-2"><a href="천석동2가.html" class="wiki-link">천석동2가</a></td>
                            <td class="legal-dong-cell border border-[#ccc] p-2"><a href="천석동3가.html" class="wiki-link">천석동3가</a></td>
                        </tr>
                        <tr>
                            <td colspan="4" class="legal-dong-cell border border-[#ccc] p-2"><a href="서남동.html" class="wiki-link">서남동</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        `;
        
        container.innerHTML = navHTML;
    });

    // 공통 토글 기능 (전역 스코프에 등록하여 HTML에서 호출 가능하도록 보장)
    if (typeof window.toggleNav === 'undefined') {
        window.toggleNav = function(id, labelId) {
            var content = document.getElementById(id);
            var label = document.getElementById(labelId);
            
            if (!content) return;

            // maxHeight 초기값이 설정되지 않은 경우 처리
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