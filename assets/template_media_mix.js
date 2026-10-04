(function () {
    document.addEventListener("DOMContentLoaded", function () {
        const container = document.getElementById("template-media-mix");
        if (!container) return;

        // 메인 테마 색상 지정
        const mainThemeColor = "#555588";

        // HTML 템플릿 렌더링
        container.innerHTML = `
            <div class="mb-6 border-2" style="border-color: ${mainThemeColor};">
                <!-- 헤더 (타이틀 및 토글 버튼) -->
                <div class="flex items-center justify-between px-4 py-2" style="background-color: ${mainThemeColor}; color: white;">
                    <div class="flex-1 text-center">
                        <a href="효빈교통공사 미디어 믹스.html" class="text-white text-lg font-bold hover:underline">
                            효빈교통공사 미디어 믹스 (HYOBIN METRO MEDIA MIX)
                        </a>
                    </div>
                    <div>
                        <button id="toggle-btn-media-mix" class="text-sm bg-black/20 hover:bg-black/30 px-2 py-1 rounded outline-none transition-colors" onclick="toggleTable('body-media-mix', 'toggle-btn-media-mix')">
                            [접기]
                        </button>
                    </div>
                </div>

                <!-- 본문 테이블 영역 -->
                <div id="body-media-mix">
                    <table class="w-full text-sm border-collapse bg-white">
                        <colgroup>
                            <col class="w-[15%]">
                            <col class="w-[85%]">
                        </colgroup>
                        <tbody>
                            <tr class="border-b border-gray-200">
                                <th class="py-2 text-white font-bold align-middle" style="background-color: #6677CC;">TV 애니메이션</th>
                                <td class="text-left pl-4 py-2 bg-gray-50">
                                    <a class="text-[#0275d8] hover:underline font-medium" href="철도부!.html">철도부!</a> (1기) &middot; 
                                    <a class="text-[#0275d8] hover:underline font-medium" href="철도부! 2기.html">철도부! (2기)</a> <span class="text-gray-500 text-xs">(방영 예정)</span> &middot; 
                                    <a class="text-[#0275d8] hover:underline font-medium" href="전노아 애니메이션.html">전노아 주역 시리즈 (제목 미정)</a> <span class="text-gray-500 text-xs">(제작 예정)</span>
                                </td>
                            </tr>
                            <tr class="border-b border-gray-200">
                                <th class="py-2 text-white font-bold align-middle" style="background-color: #6677CC;">숏폼 및 OVA</th>
                                <td class="text-left pl-4 py-2 bg-white">
                                    <a class="text-[#0275d8] hover:underline font-medium" href="달려라! 레일루미네.html">달려라! 레일루미네</a> (1기) &middot; 
                                    <a class="text-[#0275d8] hover:underline font-medium" href="철덕일기.html">철덕일기</a> &middot; 
                                    <a class="text-[#0275d8] hover:underline font-medium" href="철도부!.html">철도부 OVA: F학점 동맹의 우울</a> &middot; 
                                    <a class="text-[#0275d8] hover:underline font-medium" href="쁘띠 레일루미네.html">쁘띠 레일루미네</a> <span class="text-gray-500 text-xs">(2026년 2쿨 방영 예정)</span>
                                </td>
                            </tr>
                            <tr class="border-b border-gray-200">
                                <th class="py-2 text-white font-bold align-middle" style="background-color: #6677CC;">극장판 애니메이션</th>
                                <td class="text-left pl-4 py-2 bg-gray-50">
                                    <a class="text-[#0275d8] hover:underline font-medium" href="레일루미네_기적의 스탬프 랠리.html">극장판 레일루미네 - 기적의 스탬프 랠리 -</a> <span class="text-gray-500 text-xs">(2025)</span> &middot; 
                                    <a class="text-[#0275d8] hover:underline font-medium" href="궤도를 넘어서.html">극장판 철도부! &lt;궤도를 넘어서&gt;</a> <span class="text-gray-500 text-xs">(2027년 개봉 예정)</span>
                                </td>
                            </tr>
                            <tr class="border-b border-gray-200">
                                <th class="py-2 text-white font-bold align-middle" style="background-color: #885588;">만화 및 도서</th>
                                <td class="text-left pl-4 py-2 bg-white">
                                    <a class="text-[#0275d8] hover:underline font-medium" href="철도부! ~매일매일 출발 진행~.html">철도부! ~매일매일 출발 진행~</a> <span class="text-gray-500 text-xs">(공식 4컷 만화)</span> &middot; 
                                    <a class="text-[#0275d8] hover:underline font-medium" href="레일루미네 코믹 앤솔로지.html">레일루미네 코믹 앤솔로지</a> &middot; 
                                    <a class="text-[#0275d8] hover:underline font-medium" href="다로나의 엑셀 생존기.html">다로나의 엑셀 생존기</a> <span class="text-gray-500 text-xs">(스핀오프 웹툰)</span>
                                </td>
                            </tr>
                            <tr class="border-b border-gray-200">
                                <th class="py-2 text-white font-bold align-middle" style="background-color: #338866;">게임 (Game)</th>
                                <td class="text-left pl-4 py-2 bg-gray-50">
                                    <a class="text-[#0275d8] hover:underline font-medium" href="레일루미네_스마일 페스티벌.html">레일루미네: 스마일 페스티벌</a> <span class="text-gray-500 text-xs">(리듬 어드벤처 / 모바일)</span> &middot; 
                                    <a class="text-[#0275d8] hover:underline font-medium" href="효빈 철도 시뮬레이터: 덕업일치 에디션.html">효빈 철도 시뮬레이터: 덕업일치 에디션</a> <span class="text-gray-500 text-xs">(시뮬레이션 / PC)</span>
                                </td>
                            </tr>
                            <tr>
                                <th class="py-2 text-white font-bold align-middle" style="background-color: #DD5555;">라이브 및 행사</th>
                                <td class="text-left pl-4 py-2 bg-white">
                                    <a class="text-[#0275d8] hover:underline font-medium" href="레일루미네 1st Live_Next Station!.html">레일루미네 1st Live: Next Station!</a> &middot; 
                                    <a class="text-[#0275d8] hover:underline font-medium" href="HAF.html">HAF (효빈 애니메이션 페스티벌) 특별 스테이지</a> &middot; 
                                    <a class="text-[#0275d8] hover:underline font-medium" href="철도부! 팬미팅_종점 없는 티켓.html">철도부! 팬미팅: 종점 없는 티켓</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `;

        // 위키 코어 JS에 토글 함수가 없을 경우를 대비한 안전 장치(Fallback)
        if (typeof window.toggleTable !== 'function') {
            window.toggleTable = function(targetId, btnId) {
                const targetEl = document.getElementById(targetId);
                const btnEl = document.getElementById(btnId);
                
                if (targetEl && btnEl) {
                    if (targetEl.style.display === 'none') {
                        targetEl.style.display = '';
                        btnEl.innerText = '[접기]';
                    } else {
                        targetEl.style.display = 'none';
                        btnEl.innerText = '[펼치기]';
                    }
                }
            };
        }
    });
})();