document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("lotte-dept-branch-nav-container");
    if (!container) return;

    // 접기/펼치기 전용 고유 함수
    window.toggleLotteDeptTable = function() {
        const tbody = document.getElementById("lotte-dept-nav-body");
        const btn = document.getElementById("lotteDeptToggleBtn");
        if (tbody.style.display === "none") {
            tbody.style.display = "table-row-group";
            btn.innerText = "[ 접기 ]";
        } else {
            tbody.style.display = "none";
            btn.innerText = "[ 펼치기 · 접기 ]";
        }
    };

    const templateHTML = `
        <div class="w-full mx-auto border-2 text-sm font-sans bg-white shadow-sm mb-4" style="border-color: #8A7E70;">
            <!-- 상단 헤더 -->
            <div class="text-white p-2.5 flex justify-center items-center gap-3 border-b" style="background-color: #8A7E70; border-bottom-color: #8A7E70;">
                <img src="이미지/롯데백화점_로고_화이트.webp" alt="롯데백화점" class="h-5 object-contain bg-transparent" onerror="this.style.display='none'">
                <div class="flex flex-col items-center justify-center text-center">
                    <span class="font-extrabold text-[15px] tracking-widest leading-tight drop-shadow-sm text-white">롯데백화점 점포 목록</span>
                </div>
            </div>
            
            <!-- 펼치기/접기 버튼 -->
            <div onclick="toggleLotteDeptTable()" class="bg-[#F6F5F4] text-center text-xs py-1.5 cursor-pointer font-bold select-none hover:bg-[#EBE8E5] transition-colors border-b text-[#8A7E70]" style="border-bottom-color: #8A7E70;">
                <span id="lotteDeptToggleBtn">[ 접기 ]</span>
            </div>

            <!-- 테이블 영역 -->
            <table class="w-full border-collapse bg-white text-center table-fixed text-[13px] text-gray-800">
                <colgroup>
                    <col style="width: 33.33%;">
                    <col style="width: 33.33%;">
                    <col style="width: 33.33%;">
                </colgroup>
                <tbody id="lotte-dept-nav-body">
                    
                    <!-- 점포 타이틀 -->
                    <tr>
                        <td colspan="3" class="bg-[#8A7E70] text-white font-bold py-1.5 border border-[#8A7E70] shadow-inner text-[13px]">
                            운영 중인 점포
                        </td>
                    </tr>
                    
                    <!-- 1열 -->
                    <tr class="border-b border-gray-200">
                        <td class="py-2 px-2 border-r border-gray-200 hover:bg-gray-50 break-keep">
                            <a href="https://namu.wiki/w/롯데백화점%20본점" target="_blank" class="text-[#0275d8] hover:underline">본점·에비뉴엘</a>
                        </td>
                        <td class="py-2 px-2 border-r border-gray-200 hover:bg-gray-50 break-keep">
                            <a href="https://namu.wiki/w/롯데백화점%20잠실점" target="_blank" class="text-[#0275d8] hover:underline">잠실점·에비뉴엘·캐슬플라자</a>
                        </td>
                        <td class="py-2 px-2 hover:bg-gray-50 break-keep">
                            <a href="https://namu.wiki/w/롯데백화점%20부산본점" target="_blank" class="text-[#0275d8] hover:underline">부산본점·에비뉴엘</a>
                        </td>
                    </tr>

                    <!-- 2열 -->
                    <tr class="border-b border-gray-200 bg-gray-50/50">
                        <td class="py-2 px-2 border-r border-gray-200 hover:bg-gray-50 break-keep">
                            <a href="https://namu.wiki/w/롯데백화점%20강남점" target="_blank" class="text-[#0275d8] hover:underline">강남점</a>
                        </td>
                        <td class="py-2 px-2 border-r border-gray-200 hover:bg-gray-50 break-keep">
                            <a href="https://namu.wiki/w/롯데백화점%20건대스타시티점" target="_blank" class="text-[#0275d8] hover:underline">건대스타시티점</a>
                        </td>
                        <td class="py-2 px-2 hover:bg-gray-50 break-keep">
                            <a href="https://namu.wiki/w/롯데백화점%20관악점" target="_blank" class="text-[#0275d8] hover:underline">관악점</a>
                        </td>
                    </tr>

                    <!-- 3열 -->
                    <tr class="border-b border-gray-200">
                        <td class="py-2 px-2 border-r border-gray-200 hover:bg-gray-50 break-keep">
                            <a href="https://namu.wiki/w/롯데백화점%20김포공항점" target="_blank" class="text-[#0275d8] hover:underline">김포공항점</a>
                        </td>
                        <td class="py-2 px-2 border-r border-gray-200 hover:bg-gray-50 break-keep">
                            <a href="https://namu.wiki/w/롯데백화점%20노원점" target="_blank" class="text-[#0275d8] hover:underline">노원점</a>
                        </td>
                        <td class="py-2 px-2 hover:bg-gray-50 break-keep">
                            <a href="https://namu.wiki/w/롯데백화점%20미아점" target="_blank" class="text-[#0275d8] hover:underline">미아점</a>
                        </td>
                    </tr>

                    <!-- 4열 -->
                    <tr class="border-b border-gray-200 bg-gray-50/50">
                        <td class="py-2 px-2 border-r border-gray-200 hover:bg-gray-50 break-keep">
                            <a href="https://namu.wiki/w/롯데백화점%20영등포점" target="_blank" class="text-[#0275d8] hover:underline">영등포점</a>
                        </td>
                        <td class="py-2 px-2 border-r border-gray-200 hover:bg-gray-50 break-keep">
                            <a href="https://namu.wiki/w/롯데백화점%20청량리점" target="_blank" class="text-[#0275d8] hover:underline">청량리점</a>
                        </td>
                        <td class="py-2 px-2 hover:bg-gray-50 break-keep">
                            <a href="https://namu.wiki/w/롯데백화점%20인천점" target="_blank" class="text-[#0275d8] hover:underline">인천점</a>
                        </td>
                    </tr>

                    <!-- 5열 -->
                    <tr class="border-b border-gray-200">
                        <td class="py-2 px-2 border-r border-gray-200 hover:bg-gray-50 break-keep">
                            <a href="https://namu.wiki/w/롯데백화점%20동탄점" target="_blank" class="text-[#0275d8] hover:underline">동탄점</a>
                        </td>
                        <td class="py-2 px-2 border-r border-gray-200 hover:bg-gray-50 break-keep">
                            <a href="https://namu.wiki/w/롯데백화점%20구리점" target="_blank" class="text-[#0275d8] hover:underline">구리점</a>
                        </td>
                        <td class="py-2 px-2 hover:bg-gray-50 break-keep">
                            <a href="https://namu.wiki/w/롯데백화점%20분당점" target="_blank" class="text-[#0275d8] hover:underline">분당점</a>
                        </td>
                    </tr>

                    <!-- 6열 -->
                    <tr class="border-b border-gray-200 bg-gray-50/50">
                        <td class="py-2 px-2 border-r border-gray-200 hover:bg-gray-50 break-keep">
                            <a href="https://namu.wiki/w/롯데백화점%20안산점" target="_blank" class="text-[#0275d8] hover:underline">안산점</a>
                        </td>
                        <td class="py-2 px-2 border-r border-gray-200 hover:bg-gray-50 break-keep">
                            <a href="https://namu.wiki/w/롯데백화점%20일산점" target="_blank" class="text-[#0275d8] hover:underline">일산점</a>
                        </td>
                        <td class="py-2 px-2 hover:bg-gray-50 break-keep">
                            <a href="https://namu.wiki/w/롯데백화점%20중동점" target="_blank" class="text-[#0275d8] hover:underline">중동점</a>
                        </td>
                    </tr>

                    <!-- 7열 -->
                    <tr class="border-b border-gray-200">
                        <td class="py-2 px-2 border-r border-gray-200 hover:bg-gray-50 break-keep">
                            <a href="https://namu.wiki/w/롯데백화점%20평촌점" target="_blank" class="text-[#0275d8] hover:underline">평촌점</a>
                        </td>
                        <td class="py-2 px-2 border-r border-gray-200 hover:bg-gray-50 break-keep">
                            <a href="https://namu.wiki/w/롯데백화점%20광복점" target="_blank" class="text-[#0275d8] hover:underline">광복점</a>
                        </td>
                        <td class="py-2 px-2 hover:bg-gray-50 break-keep">
                            <a href="https://namu.wiki/w/롯데백화점%20광주점" target="_blank" class="text-[#0275d8] hover:underline">광주점</a>
                        </td>
                    </tr>

                    <!-- 8열 -->
                    <tr class="border-b border-gray-200 bg-gray-50/50">
                        <td class="py-2 px-2 border-r border-gray-200 hover:bg-gray-50 break-keep">
                            <a href="https://namu.wiki/w/롯데백화점%20대구점" target="_blank" class="text-[#0275d8] hover:underline">대구점</a>
                        </td>
                        <td class="py-2 px-2 border-r border-gray-200 hover:bg-gray-50 break-keep">
                            <a href="https://namu.wiki/w/롯데백화점%20대전점" target="_blank" class="text-[#0275d8] hover:underline">대전점</a>
                        </td>
                        <td class="py-2 px-2 hover:bg-gray-50 break-keep">
                            <a href="https://namu.wiki/w/롯데백화점%20동래점" target="_blank" class="text-[#0275d8] hover:underline">동래점</a>
                        </td>
                    </tr>

                    <!-- 9열 -->
                    <tr class="border-b border-gray-200">
                        <td class="py-2 px-2 border-r border-gray-200 hover:bg-gray-50 break-keep">
                            <a href="https://namu.wiki/w/롯데백화점%20상인점" target="_blank" class="text-[#0275d8] hover:underline">상인점</a>
                        </td>
                        <td class="py-2 px-2 border-r border-gray-200 hover:bg-gray-50 break-keep">
                            <a href="https://namu.wiki/w/롯데백화점%20센텀시티점" target="_blank" class="text-[#0275d8] hover:underline">센텀시티점</a>
                        </td>
                        <td class="py-2 px-2 hover:bg-gray-50 break-keep">
                            <a href="https://namu.wiki/w/롯데백화점%20울산점" target="_blank" class="text-[#0275d8] hover:underline">울산점</a>
                        </td>
                    </tr>

                    <!-- 10열 -->
                    <tr class="border-b border-gray-200 bg-gray-50/50">
                        <td class="py-2 px-2 border-r border-gray-200 hover:bg-gray-50 break-keep">
                            <a href="https://namu.wiki/w/롯데백화점%20전주점" target="_blank" class="text-[#0275d8] hover:underline">전주점</a>
                        </td>
                        <td class="py-2 px-2 border-r border-gray-200 hover:bg-gray-50 break-keep">
                            <a href="https://namu.wiki/w/롯데백화점%20창원점" target="_blank" class="text-[#0275d8] hover:underline">창원점</a>
                        </td>
                        <td class="py-2 px-2 hover:bg-gray-50 break-keep">
                            <a href="https://namu.wiki/w/롯데백화점%20포항점" target="_blank" class="text-[#0275d8] hover:underline">포항점</a>
                        </td>
                    </tr>

                    <!-- 11열 (효빈광역시 지점) -->
                    <tr class="border-b border-gray-200">
                        <td class="py-2 px-2 border-r border-gray-200 hover:bg-gray-50 break-keep">
                            <a href="롯데백화점_진희점.html" class="font-bold text-[#0275d8] hover:underline">진희점</a>
                        </td>
                        <td class="py-2 px-2 border-r border-gray-200 hover:bg-gray-50 break-keep">
                            <a href="롯데백화점_효빈점.html" class="text-[#0275d8] hover:underline">효빈점</a>
                        </td>
                        <td class="py-2 px-2 hover:bg-gray-50 break-keep">
                            <a href="롯데백화점_청엽점.html" class="text-[#0275d8] hover:underline">청엽점</a>
                        </td>
                    </tr>

                    <!-- 개점 준비 중인 점포 타이틀 -->
                    <tr>
                        <td colspan="3" class="bg-[#8A7E70] text-white font-bold py-1.5 border border-[#8A7E70] shadow-inner text-[13px] mt-2">
                            개점 준비 중인 점포
                        </td>
                    </tr>
                    
                    <!-- 개점 준비 중 -->
                    <tr>
                        <td colspan="3" class="py-2 px-2 hover:bg-gray-50 break-keep">
                            <a href="https://namu.wiki/w/상암%20DMC%20롯데쇼핑몰" target="_blank" class="text-[#0275d8] hover:underline">롯데백화점 상암DMC</a>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    `;

    container.innerHTML = templateHTML;
});