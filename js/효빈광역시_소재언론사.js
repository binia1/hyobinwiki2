document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("hyobin-media-nav-container");

    if (container) {
        // 직접 작성해주신 원본 HTML 코드 (수정 절대 없음)
        container.innerHTML = `
        <!-- 효빈광역시 소재 언론사 틀 -->
        <div class="overflow-x-auto mb-8">
            <table class="econ-table text-[0.82rem] w-full border-collapse">
                <thead>
                    <tr><th colspan="2" style="background-color: #7777AA !important; color: white; border: 1px solid white;">효빈광역시 소재 언론사</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <th class="w-24 bg-[#7777AA] text-white text-center">신문</th>
                        <td class="bg-white p-2 border font-bold">
                            <a class="wiki-link" href="효빈일보.html">효빈일보</a> · <a class="wiki-link" href="포성일보.html">포성일보</a> · <a class="wiki-link" href="덕북일보.html">덕북일보</a> · <a class="wiki-link" href="덕북매일.html">덕북매일</a> · <a class="wiki-link" href="덕북경제.html">덕북경제</a> · <a class="wiki-link" href="북도경제.html">북도경제</a> · <a class="wiki-link" href="효빈장일신문.html">효빈장일신문</a>
                        </td>
                    </tr>
                    <tr>
                        <th class="bg-[#7777AA] text-white text-center">지상파 방송</th>
                        <td class="bg-white p-2 border font-bold">
                            <a class="wiki-link" href="KBS효빈.html">KBS효빈</a> · <a class="wiki-link" href="효빈MBC.html">효빈MBC</a> · <a class="wiki-link" href="효빈방송.html">HBS 효빈방송</a>
                        </td>
                    </tr>
                    <tr>
                        <th class="bg-[#7777AA] text-white text-center">종교 방송</th>
                        <td class="bg-white p-2 border font-bold">
                            <a class="wiki-link" href="효빈CBS.html">효빈CBS</a> · <a class="wiki-link" href="BBS_효빈불교방송.html">BBS 효빈불교방송</a> · <a class="wiki-link" href="cpbc_효빈가톨릭평화방송.html">cpbc 효빈가톨릭평화방송</a> · <a class="wiki-link" href="febc_효빈극동방송.html">febc 효빈극동방송</a> · <a class="wiki-link" href="WBS_효빈원음방송.html">WBS 효빈원음방송</a>
                        </td>
                    </tr>
                    <tr>
                        <th class="bg-[#7777AA] text-white text-center">기타 방송사</th>
                        <td class="bg-white p-2 border font-bold">
                            <a class="wiki-link" href="효빈FM.html">효빈FM</a> · <a class="wiki-link" href="효빈복지방송.html">효빈복지방송</a> · <a class="wiki-link" href="DHB_효빈덕북방송.html">DHB 효빈덕북방송</a> · <a class="wiki-link" href="HCTV효빈방송.html">HCTV효빈방송</a> · <a class="wiki-link" href="TBN_효빈교통방송.html">TBN 효빈교통방송</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        `;
    }
});