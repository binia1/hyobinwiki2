document.currentScript.insertAdjacentHTML('beforebegin', `
<div class="gradient-box">
        <div style="background-color: white; display: inline-block; padding: 20px; border-radius: 50%; width: 120px; height: 120px; box-shadow: 0 4px 6px rgba(0,0,0,0.3);">
            <div style="width: 100%; height: 100%; border: 4px dashed var(--wiki-main); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-direction: column;">
                <span style="font-size: 1.8rem; font-weight: 900; color: var(--wiki-main); line-height: 1;">SGU</span>
            </div>
        </div>
        <h1 class="text-white font-black text-2xl tracking-wider drop-shadow-md mt-4" style="margin: 0; color: white;">SAPGOK UNIVERSITY</h1>
    </div>

    <!-- ========================================== -->
    <!-- 2. 전체 너비 둘러보기 폴딩 메뉴 -->
    <!-- ========================================== -->
    <details class="folding-nav">
        <summary>[ 펼치기 · 접기 ]</summary>
        <div class="p-0 border-t border-gray-200 bg-white">
            <table class="wiki-table" style="margin: 0; width: 100%; border: none;">
                <tr><td class="text-center font-bold text-white" colspan="4" style="background-color: var(--wiki-main); padding: 8px;">대학 정보</td></tr>
                <tr>
                    <td class="wiki-table-center" style="border: 1px solid #ffe0b2;"><a class="wiki-link text-[var(--wiki-main)]" onclick="goToLink('삽곡대학교_역사.html')">역사</a></td>
                    <td class="wiki-table-center" style="border: 1px solid #ffe0b2;"><a class="wiki-link text-[var(--wiki-main)]" onclick="goToLink('삽곡대학교_상징.html')">상징</a></td>
                    <td class="wiki-table-center" style="border: 1px solid #ffe0b2;"><a class="wiki-link text-[var(--wiki-main)]" onclick="goToLink('삽곡대학교_학과.html')">학과</a></td>
                    <td class="wiki-table-center" style="border: 1px solid #ffe0b2;"><a class="wiki-link text-[var(--wiki-main)]" onclick="goToLink('삽곡대학교_전공심화과정.html')">전공심화과정</a></td>
                </tr>
                <tr>
                    <td class="wiki-table-center" style="border: 1px solid #ffe0b2;"><a class="wiki-link text-[var(--wiki-main)]" onclick="goToLink('삽곡대학교_캠퍼스.html')">캠퍼스</a></td>
                    <td class="wiki-table-center" style="border: 1px solid #ffe0b2;"><a class="wiki-link text-[var(--wiki-main)]" onclick="goToLink('삽곡대학교_총학생회.html')">총학생회</a></td>
                    <td class="wiki-table-center" style="border: 1px solid #ffe0b2;"><a class="wiki-link text-[var(--wiki-main)]" onclick="goToLink('삽곡대학교_언론.html')">학내 언론</a></td>
                    <td class="wiki-table-center" style="border: 1px solid #ffe0b2;"><a class="wiki-link text-[var(--wiki-main)]" onclick="goToLink('삽곡대학교_교류대학.html')">교류 대학</a></td>
                </tr>
                <tr><td class="text-center font-bold text-white" colspan="4" style="background-color: var(--wiki-main); padding: 8px;">기타 정보</td></tr>
                <tr>
                    <td class="wiki-table-center" style="border: 1px solid #ffe0b2;"><a class="wiki-link text-[var(--wiki-main)]" onclick="goToLink('삽곡대학교_출신인물.html')">출신 인물</a></td>
                    <td class="wiki-table-center" style="border: 1px solid #ffe0b2;"><a class="wiki-link text-[var(--wiki-main)]" onclick="goToLink('삽곡대학교_주변상권.html')">주변 상권</a></td>
                    <td class="wiki-table-center" style="border: 1px solid #ffe0b2;"><a class="wiki-link text-[var(--wiki-main)]" onclick="goToLink('삽곡대학교_입시.html')">입시</a></td>
                    <td class="wiki-table-center" style="border: 1px solid #ffe0b2;"><a class="wiki-link text-[var(--wiki-main)]" onclick="goToLink('삽곡대학교_사건사고.html')">사건 사고</a></td>
                </tr>
            </table>
        </div>
    </details>
`);