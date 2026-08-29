document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("hyobin-incident-nav-container");
    if (!container) return;

    const templateHTML = `
        <div class="w-full mx-auto border-2 text-sm font-sans bg-white shadow-sm mb-4" style="border-color: #7777AA !important; border-radius: 4px; overflow: hidden;">
            
            <!-- 상단 헤더 -->
            <div class="p-2.5 flex justify-center items-center font-bold text-white tracking-wide" style="background-color: #7777AA !important;">
                효빈광역시의 주요 사건 및 사고
            </div>
            
            <details open class="group">
                <!-- 펼치기/접기 버튼 -->
                <summary class="text-center text-xs py-2 cursor-pointer font-bold select-none bg-[#f0f0f5] hover:bg-gray-200 transition-colors border-b border-gray-300" style="color: #7777AA !important; list-style: none;">
                    <span class="group-open:hidden">[ 펼치기 ]</span>
                    <span class="hidden group-open:inline">[ 접기 ]</span>
                </summary>
                
                <!-- 템플릿 본문 (Table 태그 대신 Div Flexbox 사용으로 깨짐 원천 차단) -->
                <div class="flex flex-col text-[13.5px]">
                    
                    <!-- 1. 행정 / 대형 정책 -->
                    <div class="flex flex-col md:flex-row border-b border-gray-300">
                        <div class="md:w-1/5 font-bold p-3 flex items-center justify-center text-center shrink-0" style="background-color: #5D75A0 !important; color: white !important;">
                            행정 / 대형 정책
                        </div>
                        <div class="md:w-4/5 p-3 leading-loose break-keep" style="background-color: #f8fafc !important; color: #333 !important;">
                            <a class="text-[#333] hover:underline font-semibold" href="스타더스트_작전.html">스타더스트 작전 (시내버스 3세대 대개편)</a> <span class="text-gray-400 mx-1">|</span>
                            <a class="text-[#333] hover:underline font-semibold" href="당가동_르네상스.html">당가동 르네상스</a> <span class="text-gray-400 mx-1">|</span>
                            <a class="text-[#333] hover:underline font-semibold" href="광역철도_중단사건.html">광역철도 중단사건 (빈효선 사태)</a> <span class="text-gray-400 mx-1">|</span>
                            <a class="text-[#881188] hover:underline font-bold" href="6호선_설계도_파쇄_사건.html">6호선 설계도 파쇄 사건</a> <span class="text-gray-400 mx-1">|</span>
                            <a class="text-[#333] hover:underline font-semibold" href="효빈종합버스터미널_정상화.html">효빈종합버스터미널 정상화 (서브컬처 성지화)</a> <span class="text-gray-400 mx-1">|</span>
                            <a class="text-[#333] hover:underline font-semibold" href="2022년_효빈광역시장_선거_및_방송사고.html">2022년 효빈광역시장 선거 및 방송사고</a> <span class="text-gray-400 mx-1">|</span>
                            <a class="text-[#333] hover:underline font-semibold" href="2024년_창전갑_선거_및_윤재훈_몰락.html">2024년 창전갑 선거 및 윤재훈 일가 몰락 사건</a> <span class="text-gray-400 mx-1">|</span>
                            <a class="text-[#333] hover:underline font-semibold" href="yoon_dae_hwan_incident.html">윤대환 시정 실책 및 살인미수 사건</a>
                        </div>
                    </div>

                    <!-- 2. 범죄 / 사회적 논란 -->
                    <div class="flex flex-col md:flex-row border-b border-gray-300">
                        <div class="md:w-1/5 font-bold p-3 flex items-center justify-center text-center shrink-0" style="background-color: #D81C2F !important; color: white !important;">
                            범죄 / 사회적 논란
                        </div>
                        <div class="md:w-4/5 p-3 leading-loose break-keep" style="background-color: #fef2f2 !important; color: #333 !important;">
                            <a class="text-[#D81C2F] hover:underline font-semibold" href="2007년_1월_붉은_겨울_참사.html">2007년 1월 붉은 겨울 참사 (구급차 사망·5호선 투신·7호선 폭력진압)</a> <span class="text-gray-400 mx-1">|</span>
                            <a class="text-[#D81C2F] hover:underline font-semibold" href="비서관_재떨이_살인미수_사건.html">비서관 재떨이 살인미수 사건 (윤대환)</a> <span class="text-gray-400 mx-1">|</span>
                            <a class="text-[#D81C2F] hover:underline font-semibold" href="윤대환_노조_탄압사건.html">윤대환 노조 탄압사건 (효빈의료원 강제 진압)</a> <span class="text-gray-400 mx-1">|</span>
                            <a class="text-[#D81C2F] hover:underline font-semibold" href="두청운수_게이트.html">두청운수 게이트 (75인승·요금조작)</a> <span class="text-gray-400 mx-1">|</span>
                            <a class="text-[#D81C2F] hover:underline font-semibold" href="윤대환_거지_망언_파동.html">윤대환 이웃도시 거지 망언 파동</a> <span class="text-gray-400 mx-1">|</span>
                            <a class="text-[#D81C2F] hover:underline font-semibold" href="약산시_단수_테러.html">약산시 단수 테러</a> <span class="text-gray-400 mx-1">|</span>
                            <a class="text-[#D81C2F] hover:underline font-semibold" href="탕쿠쿠_파일_폭행_및_인종차별_사건.html">탕쿠쿠 파일 폭행 및 인종차별 사건</a> <span class="text-gray-400 mx-1">|</span>
                            <a class="text-[#D81C2F] hover:underline font-semibold" href="탕쿠쿠_대첩.html">Liyuu 내한 테러 미수 사건</a> <span class="text-gray-400 mx-1">|</span>
                            <a class="text-[#D81C2F] hover:underline font-semibold" href="윤재훈_여론조작_게이트.html">윤재훈 위증교사 및 언론 조작 게이트</a> <span class="text-gray-400 mx-1">|</span>
                            <a class="text-[#D81C2F] hover:underline font-semibold" href="12_3_비상계엄_사태.html">12.3 비상계엄 사태 및 8호선 EMP 망상</a> <span class="text-gray-400 mx-1">|</span>
                            <a class="text-[#D81C2F] hover:underline font-semibold" href="윤대환의_서브컬처_탄압.html">윤대환의 서브컬처 탄압</a> <span class="text-gray-400 mx-1">|</span>
                            <a class="text-[#D81C2F] hover:underline font-semibold" href="윤대환·윤재훈_성우_협박_사건.html">윤대환·윤재훈 레일루미네 성우 SNS 협박 및 명예훼손 사건</a> <span class="text-gray-400 mx-1">|</span>
                            <a class="text-[#D81C2F] hover:underline font-semibold" href="yun_jaehoon_otaku_incidents.html">윤재훈/오타쿠 비하 및 성지 파괴 미수 사건</a> <span class="text-gray-400 mx-1">|</span>
                            <a class="text-[#D81C2F] hover:underline font-semibold" href="yun_jaehoon_full_incident_log.html">윤재훈 및 혐오 세력의 대규모 성지 테러 미수 일지</a> <span class="text-gray-400 mx-1">|</span>
                            <a class="text-[#D81C2F] hover:underline font-semibold" href="윤재훈_및_A씨_사건지하철_및_캠퍼스_난동_일지.html">윤재훈 및 A씨 사건/지하철 및 캠퍼스 난동 일지</a> <span class="text-gray-400 mx-1">|</span>
                            <a class="text-[#D81C2F] hover:underline font-semibold" href="yun_jaehoon_otakusibal2.html">윤재훈 및 A씨 사건/지도부 대응 및 성우계 반응</a> <span class="text-gray-400 mx-1">|</span>
                            <a class="text-[#D81C2F] hover:underline font-semibold" href="효빈광역시_성지_연쇄훼손_사건.html">효빈광역시 성지 연쇄훼손 사건</a> <span class="text-gray-400 mx-1">|</span>
                            <a class="text-[#D81C2F] hover:underline font-semibold" href="한바다_아청법_및_선정성_선동사건.html">한바다 아청법 및 선정성 선동사건</a> <span class="text-gray-400 mx-1">|</span>
                            <a class="text-[#D81C2F] hover:underline font-semibold" href="윤재훈 대변 테러 사건.html">윤재훈 대변 테러 사건</a> <span class="text-gray-400 mx-1">|</span>
                            <a class="text-[#D81C2F] hover:underline font-semibold" href="조선일보 효빈시 왜곡보도 사건.html">조선일보 효빈시 왜곡보도 사건</a> <span class="text-gray-400 mx-1">|</span>
                            <a class="text-[#D81C2F] hover:underline font-semibold" href="yun_jaehoon_philippines.html">윤재훈 일가 필리핀 입국 금지 사건</a>
                        </div>
                    </div>

                    <!-- 3. 기타 사건사고 -->
                    <div class="flex flex-col md:flex-row">
                        <div class="md:w-1/5 font-bold p-3 flex items-center justify-center text-center shrink-0" style="background-color: #E7D600 !important; color: #333 !important;">
                            기타 사건사고
                        </div>
                        <div class="md:w-4/5 p-3 leading-loose break-keep" style="background-color: #fefce8 !important; color: #333 !important;">
                            <a class="text-[#333] hover:underline font-semibold" href="두청운수_불매운동.html">두청운수 불매운동 및 퇴출 시위</a> <span class="text-gray-400 mx-1">|</span>
                            <a class="text-[#333] hover:underline font-semibold" href="신세계백화점_효빈점_영업_중지_선포_사건.html">신세계백화점 효빈점 영업 중지 선포 사태</a> <span class="text-gray-400 mx-1">|</span>
                            <a class="text-[#D4AF37] hover:underline font-semibold" href="북구_중수동_오타쿠_성지화_논란.html">북구 중수동 오타쿠 성지화 논란</a> <span class="text-gray-400 mx-1">|</span>
                            <a class="text-[#333] hover:underline font-semibold" href="돈불라_강요_사건.html">돈불라 강요 사건</a> <span class="text-gray-400 mx-1">|</span>
                            <a class="text-[#333] hover:underline font-semibold" href="2021년_부동산학과_강의실사건.html">2021년 부동산학과 강의실 사건</a>
                        </div>
                    </div>

                </div>
            </details>
        </div>
    `;

    container.innerHTML = templateHTML;
});