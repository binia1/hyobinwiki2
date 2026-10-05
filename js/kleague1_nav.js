(function () {
    // 공통 토글 함수 (전역 객체에 없으면 생성)
    if (typeof window.toggleTable !== 'function') {
        window.toggleTable = function (targetId, btnId) {
            var target = document.getElementById(targetId);
            var btn = document.getElementById(btnId);
            if (target.style.display === 'none') {
                target.style.display = 'block';
                btn.innerText = '[ 접기 ]';
            } else {
                target.style.display = 'none';
                btn.innerText = '[ 펼치기 ]';
            }
        };
    }

    document.addEventListener("DOMContentLoaded", function () {
        const container = document.getElementById("kleague1-nav-container");
        if (!container) return;

        // 메인 테마 색상 지정
        const themeColor = "#002244"; 
        
        // 템플릿 HTML 주입
        container.innerHTML = `
            <div class="w-full max-w-4xl mx-auto mb-6 text-sm border-2 rounded-t" style="border-color: ${themeColor};">
                
                <!-- 헤더 영역 -->
                <div class="relative py-3 flex flex-col justify-center items-center font-bold text-white" style="background-color: ${themeColor};">
                    <div class="text-xl tracking-wider mb-1">
                        <span style="color: #E31837;">K</span> LEAGUE 1
                    </div>
                    <div class="text-xs text-gray-200">2026 시즌 참가 구단</div>
                    <button id="btn-kleague1" onclick="toggleTable('kleague1-body', 'btn-kleague1')" class="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs font-normal bg-black bg-opacity-30 hover:bg-opacity-50 text-white px-2 py-1 rounded transition-colors duration-200">
                        [ 접기 ]
                    </button>
                </div>

                <!-- 바디 영역 (테이블 기반) -->
                <div id="kleague1-body">
                    <table class="w-full border-collapse bg-white">
                        <colgroup>
                            <col style="width: 25%;">
                            <col style="width: 25%;">
                            <col style="width: 25%;">
                            <col style="width: 25%;">
                        </colgroup>
                        <tbody>
                            <!-- 1번째 줄 -->
                            <tr>
                                <td class="border border-gray-200 p-2 text-center align-middle">
                                    <div class="flex flex-col items-center gap-2">
                                        <img src="이미지/svg/강원FC_로고.svg" alt="강원 FC" class="h-10 w-auto object-contain" onerror="this.style.display='none'">
                                        <div class="w-full text-white font-bold text-xs py-1 rounded-sm" style="background-color: #FF6600;">강원</div>
                                    </div>
                                </td>
                                <td class="border border-gray-200 p-2 text-center align-middle">
                                    <div class="flex flex-col items-center gap-2">
                                        <img src="이미지/svg/광주FC_로고.svg" alt="광주 FC" class="h-10 w-auto object-contain" onerror="this.style.display='none'">
                                        <div class="w-full text-white font-bold text-xs py-1 rounded-sm" style="background-color: #FFA500;">광주</div>
                                    </div>
                                </td>
                                <td class="border border-gray-200 p-2 text-center align-middle">
                                    <div class="flex flex-col items-center gap-2">
                                        <img src="이미지/svg/김천상무_로고.svg" alt="김천 상무" class="h-10 w-auto object-contain" onerror="this.style.display='none'">
                                        <div class="w-full text-white font-bold text-xs py-1 rounded-sm" style="background-color: #D31145;">김천</div>
                                    </div>
                                </td>
                                <td class="border border-gray-200 p-2 text-center align-middle">
                                    <div class="flex flex-col items-center gap-2">
                                        <img src="이미지/svg/대전하나시티즌_로고.svg" alt="대전 하나 시티즌" class="h-10 w-auto object-contain" onerror="this.style.display='none'">
                                        <div class="w-full text-white font-bold text-xs py-1 rounded-sm" style="background-color: #007A5E;">대전</div>
                                    </div>
                                </td>
                            </tr>
                            
                            <!-- 2번째 줄 -->
                            <tr>
                                <td class="border border-gray-200 p-2 text-center align-middle">
                                    <div class="flex flex-col items-center gap-2">
                                        <img src="이미지/덕빈FC_로고.webp" alt="덕빈 FC" class="h-10 w-auto object-contain" onerror="this.style.display='none'">
                                        <div class="w-full text-white font-bold text-xs py-1 rounded-sm" style="background-color: #5D2279;">
                                            <a href="덕빈 FC.html" class="text-white hover:underline" style="text-decoration: none;">덕빈</a>
                                        </div>
                                    </div>
                                </td>
                                <td class="border border-gray-200 p-2 text-center align-middle">
                                    <div class="flex flex-col items-center gap-2">
                                        <img src="이미지/svg/부천FC_로고.svg" alt="부천 FC 1995" class="h-10 w-auto object-contain" onerror="this.style.display='none'">
                                        <div class="w-full text-white font-bold text-xs py-1 rounded-sm" style="background-color: #A6192E;">부천</div>
                                    </div>
                                </td>
                                <td class="border border-gray-200 p-2 text-center align-middle">
                                    <div class="flex flex-col items-center gap-2">
                                        <img src="이미지/svg/FC서울_로고.svg" alt="FC 서울" class="h-10 w-auto object-contain" onerror="this.style.display='none'">
                                        <div class="w-full text-white font-bold text-xs py-1 rounded-sm" style="background-color: #E31837;">서울</div>
                                    </div>
                                </td>
                                <td class="border border-gray-200 p-2 text-center align-middle">
                                    <div class="flex flex-col items-center gap-2">
                                        <img src="이미지/svg/FC안양_로고.svg" alt="FC 안양" class="h-10 w-auto object-contain" onerror="this.style.display='none'">
                                        <div class="w-full text-white font-bold text-xs py-1 rounded-sm" style="background-color: #4B2E83;">안양</div>
                                    </div>
                                </td>
                            </tr>

                            <!-- 3번째 줄 -->
                            <tr>
                                <td class="border border-gray-200 p-2 text-center align-middle">
                                    <div class="flex flex-col items-center gap-2">
                                        <img src="이미지/svg/울산HD_로고.svg" alt="울산 HD" class="h-10 w-auto object-contain" onerror="this.style.display='none'">
                                        <div class="w-full text-white font-bold text-xs py-1 rounded-sm" style="background-color: #005BAC;">울산</div>
                                    </div>
                                </td>
                                <td class="border border-gray-200 p-2 text-center align-middle">
                                    <div class="flex flex-col items-center gap-2">
                                        <img src="이미지/svg/인천유나이티드_로고.svg" alt="인천 유나이티드" class="h-10 w-auto object-contain" onerror="this.style.display='none'">
                                        <div class="w-full text-white font-bold text-xs py-1 rounded-sm" style="background-color: #005BAC;">인천</div>
                                    </div>
                                </td>
                                <td class="border border-gray-200 p-2 text-center align-middle">
                                    <div class="flex flex-col items-center gap-2">
                                        <img src="이미지/svg/전북현대_로고.svg" alt="전북 현대 모터스" class="h-10 w-auto object-contain" onerror="this.style.display='none'">
                                        <div class="w-full text-white font-bold text-xs py-1 rounded-sm" style="background-color: #007A5E;">전북</div>
                                    </div>
                                </td>
                                <td class="border border-gray-200 p-2 text-center align-middle">
                                    <div class="flex flex-col items-center gap-2">
                                        <img src="이미지/svg/제주유나이티드_로고.svg" alt="제주 유나이티드" class="h-10 w-auto object-contain" onerror="this.style.display='none'">
                                        <div class="w-full text-white font-bold text-xs py-1 rounded-sm" style="background-color: #FF6600;">제주</div>
                                    </div>
                                </td>
                            </tr>

                            <!-- 4번째 줄 (균형을 맞추기 위해 colspan="2" 사용) -->
                            <tr>
                                <td colspan="2" class="border border-gray-200 p-2 text-center align-middle">
                                    <div class="flex flex-col items-center gap-2">
                                        <img src="이미지/svg/포항스틸러스_로고.svg" alt="포항 스틸러스" class="h-10 w-auto object-contain" onerror="this.style.display='none'">
                                        <div class="w-1/2 mx-auto text-white font-bold text-xs py-1 rounded-sm" style="background-color: #E31837;">포항</div>
                                    </div>
                                </td>
                                <td colspan="2" class="border border-gray-200 p-2 text-center align-middle">
                                    <div class="flex flex-col items-center gap-2">
                                        <img src="이미지/레인보우아쿠아드로고.webp" alt="효빈 레인보우 아쿠아드" class="h-10 w-auto object-contain" onerror="this.style.display='none'">
                                        <div class="w-1/2 mx-auto text-white font-bold text-xs py-1 rounded-sm" style="background-color: #00AEEF;">
                                            <a href="효빈 레인보우 아쿠아드.html" class="text-white hover:underline" style="text-decoration: none;">효빈</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <!-- 하단 서브 메뉴 영역 -->
                    <table class="w-full border-collapse text-xs font-bold text-center text-white">
                        <colgroup>
                            <col style="width: 20%;">
                            <col style="width: 20%;">
                            <col style="width: 20%;">
                            <col style="width: 20%;">
                            <col style="width: 20%;">
                        </colgroup>
                        <tbody>
                            <tr>
                                <td class="border border-gray-200 py-1.5 px-1 hover:brightness-110 cursor-pointer" style="background-color: #002244;">◀ K LEAGUE 2 ▶</td>
                                <td class="border border-gray-200 py-1.5 px-1 hover:brightness-110 cursor-pointer" style="background-color: #E31837;">◀ 2025년 참가 구단</td>
                                <td class="border border-gray-200 py-1.5 px-1 hover:brightness-110 cursor-pointer" style="background-color: #002244;">2027년 참가 구단 ▶</td>
                                <td class="border border-gray-200 py-1.5 px-1 hover:brightness-110 cursor-pointer" style="background-color: #00458B;">코리아컵 참가 구단</td>
                                <td class="border border-gray-200 py-1.5 px-1 hover:brightness-110 cursor-pointer" style="background-color: #555555;">과거 참가 구단</td>
                            </tr>
                        </tbody>
                    </table>

                    <!-- 세계 축구 주요 리그 영역 -->
                    <div class="bg-gray-50 border-t border-gray-300 p-3 text-center text-xs text-gray-700 leading-6">
                        <div>
                            <img src="대한민국_국기.webp" class="inline-block w-4 h-3 mr-1 border border-gray-300 object-cover" onerror="this.style.display='none'"> <a href="K리그1.html" class="text-[#0275d8] hover:underline">K리그1</a> &nbsp;|&nbsp; 
                            <img src="https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg" class="inline-block w-4 h-3 mr-1 border border-gray-300 object-cover" onerror="this.style.display='none'"> <a href="J1리그.html" class="text-[#0275d8] hover:underline">J1리그</a> &nbsp;|&nbsp; 
                            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg" class="inline-block w-4 h-3 mr-1 border border-gray-300 object-cover" onerror="this.style.display='none'"> <a href="슈퍼 리그.html" class="text-[#0275d8] hover:underline">슈퍼 리그</a>
                        </div>
                        <div>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Flag_of_the_United_Kingdom.svg" class="inline-block w-4 h-3 mr-1 border border-gray-300 object-cover" onerror="this.style.display='none'"> <a href="프리미어 리그.html" class="text-[#0275d8] hover:underline">프리미어 리그</a> &nbsp;|&nbsp; 
                            <img src="https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg" class="inline-block w-4 h-3 mr-1 border border-gray-300 object-cover" onerror="this.style.display='none'"> <a href="세리에 A.html" class="text-[#0275d8] hover:underline">세리에 A</a> &nbsp;|&nbsp; 
                            <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg" class="inline-block w-4 h-3 mr-1 border border-gray-300 object-cover" onerror="this.style.display='none'"> <a href="분데스리가.html" class="text-[#0275d8] hover:underline">분데스리가</a>
                        </div>
                        <div class="text-[10px] text-gray-400 mt-2 pt-1 border-t border-gray-200">세계 축구 주요 리그</div>
                    </div>
                </div>
            </div>
        `;
    });
})();