document.addEventListener("DOMContentLoaded", function() {
    function renderHyobinAssembly22Nav(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const html = `
        <table class="nav-table" style="border: 2px solid #7777AA;">
            <tbody>
                <tr>
                    <td class="nav-header" style="background-color: #7777AA;">
                        <span class="nav-header-wrap" style="display:inline-flex; align-items:center; gap:4px;">
                            <a class="wiki-link" href="효빈광역시.html" style="color:white;">
                                <img onerror="this.style.display='none'" src="이미지/logo.webp" style="vertical-align: middle; display:block;" width="20"/>
                            </a>
                            <a class="wiki-link" href="제22대_국회의원.html" style="color:white;">효빈광역시 제22대 국회의원</a>
                        </span>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 0;">
                        <details open="" style="border: none; margin: 0;">
                            <summary style="display:none;">[ 펼치기 · 접기 ]</summary>
                            <div style="padding: 5px;">
                                <table style="width: 100%; text-align: center; border-collapse: collapse;">
                                    <tbody>
                                        <!-- 1열 -->
                                        <tr style="background-color: #003B96; color: white;">
                                            <td style="width: 25%;"><a class="nav-th" href="중구-동구.html">중구·동구</a></td>
                                            <td style="width: 25%;"><a class="nav-th" href="서구(선거구).html">서구</a></td>
                                            <td style="width: 25%;"><a class="nav-th" href="남구_갑(효빈).html">남구 갑</a></td>
                                            <td style="width: 25%; background-color: #D6001C;"><a class="nav-th" href="남구_을(효빈).html">남구 을</a></td>
                                        </tr>
                                        <tr>
                                            <td><a class="nav-link minju" href="김성민.html">김성민</a> (재선)</td>
                                            <td><a class="nav-link minju" href="지선진.html">지선진</a> (초선)</td>
                                            <td><a class="nav-link minju" href="고정민.html">고정민</a> (재선)</td>
                                            <td><a class="nav-link jinbo" href="신원임.html">신원임</a> (초선)</td>
                                        </tr>
                                        <!-- 2열 -->
                                        <tr style="background-color: #003B96; color: white;">
                                            <td><a class="nav-th" href="북구_갑(효빈).html">북구 갑</a></td>
                                            <td><a class="nav-th" href="북구_을(효빈).html">북구 을</a></td>
                                            <td><a class="nav-th" href="북구_병(효빈).html">북구 병</a></td>
                                            <td style="width: 25%; background-color: #003B96;"><a class="nav-th" href="안천구_갑.html" style="color: white;">안천 갑</a></td>
                                        </tr>
                                        <tr>
                                            <td><a class="nav-link minju" href="조상현.html">조상현</a> (5선)</td>
                                            <td><a class="nav-link minju" href="원성준.html">원성준</a> (4선)</td>
                                            <td><a class="nav-link minju" href="이찬대.html">이찬대</a> (3선)</td>
                                            <td><a class="nav-link minju" href="고선규.html">고선규</a> (초선)</td>
                                        </tr>
                                        <!-- 3열 -->
                                        <tr style="background-color: #003B96; color: white;">
                                            <td><a class="nav-th" href="안천구_을.html">안천 을</a></td>
                                            <td><a class="nav-th" href="청엽구_갑.html">청엽 갑</a></td>
                                            <td><a class="nav-th" href="청엽구_을.html">청엽 을</a></td>
                                            <td><a class="nav-th" href="창전구_갑.html">창전 갑</a></td>
                                        </tr>
                                        <tr>
                                            <td><a class="nav-link minju" href="신진영.html">신진영</a> (초선)</td>
                                            <td><a class="nav-link minju" href="신수인.html">신수인</a> (재선)</td>
                                            <td><a class="nav-link minju" href="소판권.html">소판권</a> (초선)</td>
                                            <td><a class="nav-link minju" href="추산령.html">추산령</a> (재선)</td>
                                        </tr>
                                        <!-- 4열 -->
                                        <tr style="background-color: #003B96; color: white;">
                                            <td><a class="nav-th" href="창전구_을.html">창전 을</a></td>
                                            <td><a class="nav-th" href="탄성군(선거구).html">탄성</a></td>
                                            <td colspan="2" style="background-color: #fff; border:none;"></td>
                                        </tr>
                                        <tr>
                                            <td><a class="nav-link minju" href="노상현.html">노상현</a> (4선)</td>
                                            <td><a class="nav-link minju" href="박청권.html">박청권</a> (초선)</td>
                                            <td colspan="2" style="border:none;"></td>
                                        </tr>
                                        <tr>
                                            <td colspan="4" style="background-color: #f9f9f9; font-size: 0.9em; padding-top: 10px;">
                                                <a class="wiki-link" href="제22대_국회의원_선거_효빈광역시.html">선거 결과</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div style="margin-top: 5px; font-size: 0.8em; text-align: left;">
                                    <span style="color: #7777AA; font-weight: bold;">◀ 제21대</span> | 
                                    <span style="background-color: #7777AA; color: white; padding: 2px 4px; border-radius: 2px;">효빈</span> 외 타 지역 보기
                                </div>
                            </div>
                        </details>
                    </td>
                </tr>
            </tbody>
        </table>
        `;

        container.innerHTML = html;
    }
    
    // 컴포넌트 렌더링 실행
    renderHyobinAssembly22Nav('hyobin-assembly-22-nav-container');
});