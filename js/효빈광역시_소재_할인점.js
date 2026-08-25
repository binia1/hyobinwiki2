document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("hyobin-discount-store-nav-container");
    if (!container) return;

    // 접기/펼치기 전용 고유 함수
    window.toggleDiscountStoreTable = function() {
        const tbody = document.getElementById("discount-store-nav-body");
        const btn = document.getElementById("discountStoreToggleBtn");
        if (tbody.style.display === "none") {
            tbody.style.display = "table-row-group";
            btn.innerText = "[ 접기 ]";
        } else {
            tbody.style.display = "none";
            btn.innerText = "[ 펼치기 · 접기 ]";
        }
    };

    const templateHTML = `
        <div class="w-full mx-auto border-2 text-sm font-sans bg-white shadow-sm mb-4" style="border-color: #7777AA;">
            <!-- 상단 헤더 -->
            <div class="text-white p-2.5 flex justify-center items-center gap-3 border-b" style="background-color: #7777AA; border-bottom-color: #7777AA;">
                <img src="이미지/효빈위키아이콘.webp" alt="효빈광역시 로고" class="h-8 object-contain bg-transparent" onerror="this.style.display='none'">
                <div class="flex flex-col items-center justify-center text-center">
                    <span class="font-bold text-[13px] tracking-wide text-white opacity-90">효빈광역시 소재</span>
                    <span class="font-extrabold text-[17px] tracking-widest leading-tight drop-shadow-sm text-white">대형 할인점</span>
                </div>
            </div>
            
            <!-- 펼치기/접기 버튼 -->
            <div onclick="toggleDiscountStoreTable()" class="bg-[#f0f0f5] text-center text-xs py-1.5 cursor-pointer font-bold select-none hover:bg-gray-200 transition-colors border-b text-[#7777AA]" style="border-bottom-color: #7777AA;">
                <span id="discountStoreToggleBtn">[ 접기 ]</span>
            </div>

            <!-- 테이블 영역 (3단 구조: 로고 - 브랜드명 - 지점목록) -->
            <table class="w-full border-collapse bg-white text-center table-fixed text-[13px] text-gray-800">
                <colgroup>
                    <col style="width: 16%;"> <!-- 1열: 로고 -->
                    <col style="width: 18%;"> <!-- 2열: 브랜드명 -->
                    <col style="width: 66%;"> <!-- 3열: 지점 목록 -->
                </colgroup>
                <tbody id="discount-store-nav-body">
                    
                    <!-- 1. 전국구 할인점 -->
                    <tr>
                        <td colspan="3" class="bg-[#7777AA] text-white font-bold py-1.5 border border-[#7777AA] shadow-inner text-[14px]">
                            효빈광역시 소재 전국구 할인점
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1">
                            <img src="이미지/이마트_로고.webp" alt="이마트" class="max-h-5 mx-auto object-contain" onerror="this.style.display='none'">
                        </td>
                        <th class="bg-[#7777AA] text-white py-1.5 font-bold border-r border-gray-300">이마트</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="이마트_마잡점.html" class="text-[#0275d8] hover:underline">마잡점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="이마트_사복점.html" class="text-[#0275d8] hover:underline">사복점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="이마트_안천점.html" class="text-[#0275d8] hover:underline">안천점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="이마트_우전점.html" class="text-gray-400 line-through hover:underline">우전점</a><span class="text-[10px] text-gray-500 ml-0.5">(폐)</span> <span class="text-gray-300 mx-1">·</span>
                            <a href="이마트_월천점.html" class="text-[#0275d8] hover:underline">월천점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="이마트_중수점.html" class="text-[#0275d8] hover:underline">중수점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="이마트_창전점.html" class="text-[#0275d8] hover:underline">창전점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="이마트_효빈고속버스터미널점.html" class="text-[#0275d8] hover:underline">효빈고속버스터미널점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="이마트_효빈점.html" class="text-[#0275d8] hover:underline">효빈점</a>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1">
                            <img src="이미지/롯데마트_로고.webp" alt="롯데마트" class="max-h-5 mx-auto object-contain" onerror="this.style.display='none'">
                        </td>
                        <th class="bg-[#7777AA] text-white py-1.5 font-bold border-r border-gray-300">롯데마트</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="롯데마트_과진점.html" class="text-[#0275d8] hover:underline">과진점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="롯데마트_덕현점.html" class="text-gray-400 line-through hover:underline">덕현점</a><span class="text-[10px] text-gray-500 ml-0.5">(폐)</span> <span class="text-gray-300 mx-1">·</span>
                            <a href="롯데마트_도변점.html" class="text-[#0275d8] hover:underline">도변점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="롯데마트_안천점.html" class="text-gray-400 line-through hover:underline">안천점</a><span class="text-[10px] text-gray-500 ml-0.5">(폐)</span> <span class="text-gray-300 mx-1">·</span>
                            <a href="롯데마트_이자점.html" class="text-[#0275d8] hover:underline">이자점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="롯데마트_진희점.html" class="text-[#0275d8] hover:underline">진희점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="롯데마트_평당점.html" class="text-[#0275d8] hover:underline">평당점</a>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1">
                            <img src="이미지/홈플러스_로고.webp" alt="홈플러스" class="max-h-5 mx-auto object-contain" onerror="this.style.display='none'">
                        </td>
                        <th class="bg-[#7777AA] text-white py-1.5 font-bold border-r border-gray-300">홈플러스</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="홈플러스_고송점.html" class="text-[#0275d8] hover:underline">고송점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="홈플러스_효빈역점.html" class="text-[#0275d8] hover:underline">효빈역점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="홈플러스_청엽점.html" class="text-[#0275d8] hover:underline">청엽점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="홈플러스_사노점.html" class="text-[#0275d8] hover:underline">사노점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="홈플러스_탄성점.html" class="text-gray-400 line-through hover:underline">탄성점</a><span class="text-[10px] text-gray-500 ml-0.5">(폐)</span> <span class="text-gray-300 mx-1">·</span>
                            <a href="홈플러스_청능점.html" class="text-gray-400 line-through hover:underline">청능점</a><span class="text-[10px] text-gray-500 ml-0.5">(폐)</span> <span class="text-gray-300 mx-1">·</span>
                            <a href="홈플러스_평당점.html" class="text-gray-400 line-through hover:underline">평당점</a><span class="text-[10px] text-gray-500 ml-0.5">(폐)</span>
                        </td>
                    </tr>

                    <!-- 2. 지역형 할인점 -->
                    <tr>
                        <td colspan="3" class="bg-[#7777AA] text-white font-bold py-1.5 border border-[#7777AA] shadow-inner text-[14px]">
                            효빈광역시 소재 지역형 할인점
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1">
                            <img src="이미지/하나로마트_로고.webp" alt="하나로마트" class="max-h-5 mx-auto object-contain" onerror="this.style.display='none'">
                        </td>
                        <th class="bg-[#7777AA] text-white py-1.5 font-bold border-r border-gray-300">하나로마트</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="하나로마트_효빈점.html" class="text-[#0275d8] hover:underline">효빈점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="하나로마트_당선점.html" class="text-[#0275d8] hover:underline">당선점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="하나로마트_고송점.html" class="text-[#0275d8] hover:underline">고송점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="하나로마트_평당점.html" class="text-[#0275d8] hover:underline">평당점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="하나로마트_청엽점.html" class="text-[#0275d8] hover:underline">청엽점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="하나로마트_안천점.html" class="text-[#0275d8] hover:underline">안천점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="하나로마트_탄성점.html" class="text-[#0275d8] hover:underline">탄성점</a>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1">
                            <img src="이미지/CY마트_로고.webp" alt="CY마트" class="max-h-5 mx-auto object-contain" onerror="this.style.display='none'">
                        </td>
                        <th class="bg-[#7777AA] text-white py-1.5 font-bold border-r border-gray-300">CY마트</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="CY마트_청엽메가센터.html" class="text-[#0275d8] hover:underline">청엽메가센터</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="CY마트_북구중수점.html" class="text-[#0275d8] hover:underline">북구중수점</a>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1">
                            <img src="이미지/빈스마트_로고.webp" alt="빈스마트" class="max-h-5 mx-auto object-contain" onerror="this.style.display='none'">
                        </td>
                        <th class="bg-[#7777AA] text-white py-1.5 font-bold border-r border-gray-300">빈스마트</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="빈스마트_고송본점.html" class="text-[#0275d8] hover:underline">고송본점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="빈스마트_남구청점.html" class="text-[#0275d8] hover:underline">남구청점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="빈스마트_창전구청점.html" class="text-[#0275d8] hover:underline">창전구청점</a>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1">
                            <img src="이미지/마루마트_로고.webp" alt="마루마트" class="max-h-5 mx-auto object-contain" onerror="this.style.display='none'">
                        </td>
                        <th class="bg-[#7777AA] text-white py-1.5 font-bold border-r border-gray-300">마루마트</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="마루마트_동구본점.html" class="text-[#0275d8] hover:underline">동구본점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="마루마트_탄성군청점.html" class="text-[#0275d8] hover:underline">탄성군청점</a>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1">
                            <img src="이미지/천조마트_로고.webp" alt="천조마트" class="max-h-5 mx-auto object-contain" onerror="this.style.display='none'">
                        </td>
                        <th class="bg-[#7777AA] text-white py-1.5 font-bold border-r border-gray-300">천조마트</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="천조마트_안천본점.html" class="text-[#0275d8] hover:underline">안천본점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="천조마트_평전공단점.html" class="text-[#0275d8] hover:underline">평전공단점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="천조마트_효빈항물류점.html" class="text-[#0275d8] hover:underline">효빈항물류점</a>
                        </td>
                    </tr>

                    <!-- 3. 창고형 할인점 -->
                    <tr>
                        <td colspan="3" class="bg-[#7777AA] text-white font-bold py-1.5 border border-[#7777AA] shadow-inner text-[14px]">
                            효빈광역시 소재 창고형 할인점
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1">
                            <img src="이미지/코스트코_로고.webp" alt="코스트코" class="max-h-5 mx-auto object-contain" onerror="this.style.display='none'">
                        </td>
                        <th class="bg-[#7777AA] text-white py-1.5 font-bold border-r border-gray-300">코스트코</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="코스트코_효빈점.html" class="text-[#0275d8] hover:underline">효빈점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="코스트코_이자점.html" class="text-[#0275d8] hover:underline">이자점</a>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1">
                            <img src="이미지/트레이더스_로고.webp" alt="트레이더스 홀세일 클럽" class="max-h-5 mx-auto object-contain" onerror="this.style.display='none'">
                        </td>
                        <th class="bg-[#7777AA] text-white py-1.5 font-bold border-r border-gray-300 leading-tight">트레이더스<br>홀세일 클럽</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="트레이더스_효빈점.html" class="text-[#0275d8] hover:underline">효빈점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="트레이더스_평당점.html" class="text-[#0275d8] hover:underline">평당점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="트레이더스_흑택점.html" class="text-[#0275d8] hover:underline">흑택점</a><span class="text-[10px] text-gray-500 ml-0.5">(예정)</span>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1">
                            <img src="이미지/롯데마트맥스_로고.webp" alt="롯데마트 맥스" class="max-h-5 mx-auto object-contain" onerror="this.style.display='none'">
                        </td>
                        <th class="bg-[#7777AA] text-white py-1.5 font-bold border-r border-gray-300">롯데마트 맥스</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="롯데마트맥스_창전점.html" class="text-[#0275d8] hover:underline">창전점</a>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1">
                            <img src="이미지/홈플러스스페셜_로고.webp" alt="홈플러스 스페셜" class="max-h-5 mx-auto object-contain" onerror="this.style.display='none'">
                        </td>
                        <th class="bg-[#7777AA] text-white py-1.5 font-bold border-r border-gray-300 leading-tight">홈플러스<br>스페셜</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="홈플러스_청능점.html" class="text-gray-400 line-through hover:underline">청능점</a><span class="text-[10px] text-gray-500 ml-0.5">(전)</span>
                        </td>
                    </tr>

                    <!-- 4. 없어진 할인점 -->
                    <tr>
                        <td colspan="3" class="bg-[#7777AA] text-white font-bold py-1.5 border border-[#7777AA] shadow-inner text-[14px]">
                            효빈광역시 소재 없어진 할인점
                        </td>
                    </tr>
                    
                    <!-- 이마트 계열 -->
                    <tr class="border-b border-gray-200">
                        <th rowspan="2" class="bg-gray-100 text-gray-700 py-1.5 font-bold border-r border-gray-300">이마트 계열</th>
                        <td class="bg-white border-r border-gray-300 align-middle p-1">
                            <img src="이미지/월마트_로고.webp" alt="월마트" class="max-h-5 mx-auto object-contain" onerror="this.style.display='none'">
                        </td>
                        <th class="bg-[#7777AA] text-white py-1.5 font-bold border-r border-gray-300">월마트</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="월마트_마잡점.html" class="text-gray-400 line-through hover:underline">마잡점</a><span class="text-[10px] text-gray-500 ml-0.5">(변)</span> <span class="text-gray-300 mx-1">·</span>
                            <span class="text-gray-400 line-through">효빈2호점</span><span class="text-[10px] text-gray-500 ml-0.5">(무산)</span>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1">
                            <img src="이미지/마크로_로고.webp" alt="마크로" class="max-h-5 mx-auto object-contain" onerror="this.style.display='none'">
                        </td>
                        <th class="bg-[#7777AA] text-white py-1.5 font-bold border-r border-gray-300">마크로</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <span class="text-gray-400 line-through">효빈점</span><span class="text-[10px] text-gray-500 ml-0.5">(무산)</span>
                        </td>
                    </tr>

                    <!-- 롯데마트 계열 -->
                    <tr class="border-b border-gray-200">
                        <th rowspan="2" class="bg-gray-100 text-gray-700 py-1.5 font-bold border-r border-gray-300">롯데마트 계열</th>
                        <td class="bg-white border-r border-gray-300 align-middle p-1">
                            <img src="이미지/GS마트_로고.webp" alt="GS마트" class="max-h-5 mx-auto object-contain" onerror="this.style.display='none'">
                        </td>
                        <th class="bg-[#7777AA] text-white py-1.5 font-bold border-r border-gray-300">GS마트</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="GS마트_덕현점.html" class="text-gray-400 line-through hover:underline">덕현점</a><span class="text-[10px] text-gray-500 ml-0.5">(변)</span> <span class="text-gray-300 mx-1">·</span>
                            <a href="GS마트_과진점.html" class="text-gray-400 line-through hover:underline">과진점</a><span class="text-[10px] text-gray-500 ml-0.5">(변)</span>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1">
                            <img src="이미지/LG마트_로고.webp" alt="LG마트" class="max-h-5 mx-auto object-contain" onerror="this.style.display='none'">
                        </td>
                        <th class="bg-[#7777AA] text-white py-1.5 font-bold border-r border-gray-300">LG마트</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="LG마트_덕현점.html" class="text-gray-400 line-through hover:underline">덕현점</a><span class="text-[10px] text-gray-500 ml-0.5">(변)</span> <span class="text-gray-300 mx-1">·</span>
                            <a href="LG마트_과진점.html" class="text-gray-400 line-through hover:underline">과진점</a><span class="text-[10px] text-gray-500 ml-0.5">(변)</span>
                        </td>
                    </tr>

                    <!-- 홈플러스 계열 -->
                    <tr class="border-b border-gray-200">
                        <th rowspan="2" class="bg-gray-100 text-gray-700 py-1.5 font-bold border-r border-gray-300">홈플러스 계열</th>
                        <td class="bg-white border-r border-gray-300 align-middle p-1">
                            <img src="이미지/까르푸_로고.webp" alt="까르푸" class="max-h-5 mx-auto object-contain" onerror="this.style.display='none'">
                        </td>
                        <th class="bg-[#7777AA] text-white py-1.5 font-bold border-r border-gray-300">까르푸</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="까르푸_청능점.html" class="text-gray-400 line-through hover:underline">청능점</a><span class="text-[10px] text-gray-500 ml-0.5">(변)</span> <span class="text-gray-300 mx-1">·</span>
                            <a href="까르푸_평당점.html" class="text-gray-400 line-through hover:underline">평당점</a><span class="text-[10px] text-gray-500 ml-0.5">(변)</span> <span class="text-gray-300 mx-1">·</span>
                            <a href="까르푸_효빈역점.html" class="text-gray-400 line-through hover:underline">효빈역점</a><span class="text-[10px] text-gray-500 ml-0.5">(변)</span>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1">
                            <img src="이미지/홈에버_로고.webp" alt="홈에버" class="max-h-5 mx-auto object-contain" onerror="this.style.display='none'">
                        </td>
                        <th class="bg-[#7777AA] text-white py-1.5 font-bold border-r border-gray-300">홈에버</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="홈에버_청능점.html" class="text-gray-400 line-through hover:underline">청능점</a><span class="text-[10px] text-gray-500 ml-0.5">(변)</span> <span class="text-gray-300 mx-1">·</span>
                            <a href="홈에버_평당점.html" class="text-gray-400 line-through hover:underline">평당점</a><span class="text-[10px] text-gray-500 ml-0.5">(변)</span> <span class="text-gray-300 mx-1">·</span>
                            <a href="홈에버_효빈역점.html" class="text-gray-400 line-through hover:underline">효빈역점</a><span class="text-[10px] text-gray-500 ml-0.5">(변)</span>
                        </td>
                    </tr>

                    <!-- 기타 -->
                    <tr class="border-b border-gray-200">
                        <th class="bg-gray-100 text-gray-700 py-1.5 font-bold border-r border-gray-300">기타</th>
                        <td class="bg-white border-r border-gray-300 align-middle p-1">
                            <img src="이미지/효빈위키아이콘.webp" alt="기타 브랜드" class="max-h-5 mx-auto object-contain opacity-50" onerror="this.style.display='none'">
                        </td>
                        <th class="bg-[#7777AA] text-white py-1.5 font-bold border-r border-gray-300">우성유통</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="우성유통_우전점.html" class="text-gray-400 line-through hover:underline">우전점</a><span class="text-[10px] text-gray-500 ml-0.5">(변)</span> <span class="text-gray-300 mx-1">·</span>
                            <a href="우성유통_항동점.html" class="text-gray-400 line-through hover:underline">항동점</a><span class="text-[10px] text-gray-500 ml-0.5">(폐)</span>
                        </td>
                    </tr>

                    <!-- 범례 -->
                    <tr>
                        <td colspan="4" class="bg-gray-50 text-gray-500 text-xs text-left p-2 border-t border-gray-300 leading-relaxed">
                            (폐): 폐점된 점포 | (예정): 개점 예정인 점포 | (변): 다른 브랜드로 변경된 점포 | (전): 동일한 운영주체의 다른 브랜드로 전환된 점포 | (무산): 입점 계획이 취소되거나 개점이 무산된 점포
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;

    container.innerHTML = templateHTML;
});