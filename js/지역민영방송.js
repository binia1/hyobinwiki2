document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("regional-private-broadcasting-nav-container");

    if (container) {
        // 직접 작성해주신 원본 HTML 코드 (수정 절대 없음)
        container.innerHTML = `
        <!-- 대한민국 지상파 틀 등 (기존 유지) -->
        <div class="flex flex-col gap-2 mb-6">
            <details>
                <summary style="text-align: center; background-image: linear-gradient(120deg, #fff 5%, #000 5.1% 9%, #fff 9.1% 10%, #000 10.1% 14%, #fff 14.1% 15%, #000 15.1% 19%, #fff 19.1% 81%, #cd313a 81.1% 90%, #0047a0 90.1%); border: 1px solid var(--wiki-border);">
                    <span class="font-bold text-black drop-shadow-md bg-white/50 px-2 py-1 rounded inline-flex items-center gap-1">
                        <img class="border border-gray-300" src="이미지/대한민국_국기.webp" width="20"/>
                        <a class="text-black no-underline hover:underline" href="민영방송.html">대한민국의 지역 민영방송</a>
                    </span>
                </summary>
                <div class="details-content text-sm p-0 border-t-0">
                    <table class="namu-table text-center text-xs mb-0 mt-0 border-0">
                        <tr>
                            <th class="bg-[#0073a5] text-white font-bold border-0" colspan="6">SBS 네트워크</th>
                        </tr>
                        <tr>
                            <td class="font-bold" colspan="6">
                                <a class="wiki-link text-lg" href="SBS.html">SBS</a><br/>
                                <span class="bg-[#0073A5] text-white px-2 py-0.5 rounded text-[10px]">서울, 경기, 인천</span>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" width="33%">
                                <a class="wiki-link" href="KNN.html">KNN</a><br/><span class="bg-[#0073A5] text-white px-2 py-0.5 rounded text-[10px]">부산, 경남</span>
                            </td>
                            <td colspan="2" width="33%">
                                <a class="wiki-link" href="TBC.html">TBC</a><br/><span class="bg-[#0073A5] text-white px-2 py-0.5 rounded text-[10px]">대구, 경북</span>
                            </td>
                            <td colspan="2" width="34%">
                                <a class="wiki-link" href="광주방송.html">kbc</a><br/><span class="bg-[#0073A5] text-white px-2 py-0.5 rounded text-[10px]">광주, 전남</span>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" style="background-color: var(--wiki-gray-bg);">
                                <a class="wiki-link font-bold text-[#0047a0]" href="HBS.html">HBS 효빈방송</a><br/><span class="bg-[#00a0e9] text-white px-2 py-0.5 rounded text-[10px]">효빈, 덕북</span>
                            </td>
                            <td colspan="2">
                                <a class="wiki-link" href="DBS.html">DBS 덕남방송</a><br/><span class="bg-[#0073A5] text-white px-2 py-0.5 rounded text-[10px]">덕남</span>
                            </td>
                            <td colspan="2">
                                <a class="wiki-link" href="청주방송.html">CJB</a><br/><span class="bg-[#0073A5] text-white px-2 py-0.5 rounded text-[10px]">충북</span>
                            </td>
                        </tr>
                    </table>
                </div>
            </details>
        </div>
        `;
    }
});