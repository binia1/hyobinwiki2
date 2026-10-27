(function() {
    document.addEventListener("DOMContentLoaded", function() {
        const container = document.getElementById("nav-bigdata-container");
        if (!container) return;

        // 토글 함수가 전역에 선언되어 있지 않을 경우를 대비한 방어 코드
        if (typeof window.toggleTable !== 'function') {
            window.toggleTable = function(bodyId, btnId) {
                const body = document.getElementById(bodyId);
                const btn = document.getElementById(btnId);
                if (!body) return;
                
                if (body.style.display === 'none') {
                    body.style.display = '';
                    if (btn) btn.innerText = '▼';
                } else {
                    body.style.display = 'none';
                    if (btn) btn.innerText = '◀';
                }
            };
        }

        // 테마 색상 (코레일 블루 - 전문적이고 신뢰감 있는 학습서 톤)
        const themeColor = "#005BAC";
        const linkColor = "#0275d8";

        const templateHTML = `
        <div style="border: 2px solid ${themeColor};" class="rounded-lg overflow-hidden shadow-md bg-white text-[0.9rem] font-sans">
            
            <!-- 헤더 영역 -->
            <div style="background-color: ${themeColor};" class="text-white font-black px-4 py-2.5 flex justify-between items-center">
                <div class="flex items-center gap-2">
                    <img src="이미지/효빈위키아이콘.webp" onerror="this.style.display='none'" class="w-5 h-5 rounded bg-white p-0.5" alt="로고">
                    <span>📊 빅데이터분석기사 실기 완전정복 시리즈 (효빈위키 학습서)</span>
                </div>
                <button id="btn-bigdata-nav" onclick="toggleTable('body-bigdata-nav', 'btn-bigdata-nav')" class="text-white hover:text-gray-200 focus:outline-none font-bold px-2 transition-colors cursor-pointer">▼</button>
            </div>
            
            <!-- 본문 테이블 영역 -->
            <div id="body-bigdata-nav" class="w-full transition-all duration-300">
                <table class="w-full border-collapse text-center">
                    <colgroup>
                        <col style="width: 22%;">
                        <col style="width: 78%;">
                    </colgroup>
                    <tbody>
                        <!-- 카테고리 1: 기초 및 전처리 -->
                        <tr class="border-b border-gray-200">
                            <th class="bg-gray-50 text-gray-800 py-3.5 border-r border-gray-200 font-bold">기초 및 전처리</th>
                            <td class="py-3.5 px-5 text-left bg-white">
                                <div class="flex flex-wrap items-center gap-x-4 gap-y-2">
                                    <a href="빅분기_실기1.html" style="color: ${linkColor};" class="font-bold hover:underline decoration-2 underline-offset-2">1. 파이썬 기초</a>
                                    <span class="text-gray-300 text-xs">|</span>
                                    <a href="빅분기_실기1_5.html" style="color: ${linkColor};" class="font-bold hover:underline decoration-2 underline-offset-2">1.5. 판다스(pandas) 완전정복</a>
                                    <span class="text-gray-300 text-xs">|</span>
                                    <a href="빅분기_실기2.html" style="color: ${linkColor};" class="font-bold hover:underline decoration-2 underline-offset-2">2. 제1유형 완전정복 (전처리)</a>
                                </div>
                            </td>
                        </tr>
                        
                        <!-- 카테고리 2: 분석 및 모델링 -->
                        <tr class="border-b border-gray-200">
                            <th class="bg-gray-50 text-gray-800 py-3.5 border-r border-gray-200 font-bold">분석 및 모델링</th>
                            <td class="py-3.5 px-5 text-left bg-white">
                                <div class="flex flex-wrap items-center gap-x-4 gap-y-2">
                                    <a href="빅분기_실기3.html" style="color: ${linkColor};" class="font-bold hover:underline decoration-2 underline-offset-2">3. 제2유형 머신러닝 & 4대 템플릿</a>
                                    <span class="text-gray-300 text-xs">|</span>
                                    <a href="빅분기_실기4.html" style="color: ${linkColor};" class="font-bold hover:underline decoration-2 underline-offset-2">4. 제3유형 통계 검정과 회귀분석</a>
                                </div>
                            </td>
                        </tr>
                        
                        <!-- 카테고리 3: 실전 및 모의고사 -->
                        <tr>
                            <th class="bg-gray-50 text-gray-800 py-3.5 border-r border-gray-200 font-bold">실전 및 시뮬레이션</th>
                            <td class="py-3.5 px-5 text-left bg-white">
                                <div class="flex flex-wrap items-center gap-x-4 gap-y-2">
                                    <a href="빅분기_실기5.html" style="color: ${linkColor};" class="font-bold hover:underline decoration-2 underline-offset-2">5. 시험장 생존 가이드 & 통합 비기</a>
                                    <span class="text-gray-300 text-xs">|</span>
                                    <a href="빅분기_실기6.html" style="color: ${linkColor};" class="font-bold hover:underline decoration-2 underline-offset-2">6. 커스텀 문제 생성기 & 샌드박스</a>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        `;

        container.innerHTML = templateHTML;
    });
})();