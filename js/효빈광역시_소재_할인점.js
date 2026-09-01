document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("hyobin-discount-store-nav-container");
    if (!container) return;

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
        <div class="w-full mx-auto border-2 text-sm font-sans bg-white shadow-sm mb-4" style="border-color: #7777AA !important;">
            <!-- 상단 헤더 -->
            <div class="p-2.5 flex justify-center items-center gap-3 border-b" style="background-color: #7777AA !important; border-bottom-color: #7777AA !important;">
                <img src="이미지/logo.webp" alt="효빈광역시 로고" class="h-8 object-contain bg-transparent" onerror="this.style.display='none'">
                <div class="flex flex-col items-center justify-center text-center">
                    <span class="font-bold text-[13px] tracking-wide text-white opacity-90">효빈광역시 소재</span>
                    <span class="font-extrabold text-[17px] tracking-widest leading-tight drop-shadow-sm text-white">대형 할인점</span>
                </div>
            </div>
            
            <!-- 펼치기/접기 버튼 -->
            <div onclick="toggleDiscountStoreTable()" class="bg-[#f0f0f5] text-center text-xs py-1.5 cursor-pointer font-bold select-none hover:bg-gray-200 transition-colors border-b" style="color: #7777AA !important; border-bottom-color: #7777AA !important;">
                <span id="discountStoreToggleBtn">[ 접기 ]</span>
            </div>

            <!-- 테이블 영역 -->
            <table class="w-full text-center table-fixed text-[13px] text-gray-800" style="border: none !important; margin: 0 !important;">
                <colgroup>
                    <col style="width: 16%;">
                    <col style="width: 18%;">
                    <col style="width: 66%;">
                </colgroup>
                <tbody id="discount-store-nav-body">
                    
                    <!-- 1. 전국구 할인점 -->
                    <tr>
                        <td colspan="3" class="font-bold py-1.5 shadow-inner text-[14px]" style="background-color: #7777AA !important; color: #ffffff !important; border: 1px solid #7777AA !important;">
                            효빈광역시 소재 전국구 할인점
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1">
                            <img src="이미지/이마트_로고.svg" alt="이마트" class="max-h-5 mx-auto object-contain" onerror="this.style.display='none'">
                        </td>
                        <th class="py-1.5 font-bold border-r border-gray-300" style="background-color: #FFB81C !important; color: #000000 !important;">이마트</th>
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
                            <img src="이미지/롯데마트_로고.svg" alt="롯데마트" class="max-h-5 mx-auto object-contain" onerror="this.style.display='none'">
                        </td>
                        <th class="py-1.5 font-bold border-r border-gray-300" style="background-color: #E60012 !important; color: #ffffff !important;">롯데마트</th>
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
                            <img src="이미지/홈플러스_로고.svg" alt="홈플러스" class="max-h-5 mx-auto object-contain" onerror="this.style.display='none'">
                        </td>
                        <th class="py-1.5 font-bold border-r border-gray-300" style="background-color: #E60013 !important; color: #ffffff !important;">홈플러스</th>
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
                        <td colspan="3" class="font-bold py-1.5 shadow-inner text-[14px]" style="background-color: #7777AA !important; color: #ffffff !important; border: 1px solid #7777AA !important;">
                            효빈광역시 소재 지역형 할인점
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1">
                            <img src="이미지/하나로마트_로고.svg" alt="하나로마트" class="max-h-5 mx-auto object-contain" onerror="this.style.display='none'">
                        </td>
                        <th class="py-1.5 font-bold border-r border-gray-300" style="background-color: #00B140 !important; color: #ffffff !important;">하나로마트</th>
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
                            <img src="이미지/CY마트_로고.svg" alt="CY마트" class="max-h-5 mx-auto object-contain" onerror="this.style.display='none'">
                        </td>
                        <th class="py-1.5 font-bold border-r border-gray-300" style="background-color: #00CCBB !important; color: #ffffff !important;">CY마트</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="CY마트.html" class="text-[#0275d8] hover:underline">청엽메가센터</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="CY마트.html" class="text-[#0275d8] hover:underline">북구중수점</a>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1">
                            <img src="이미지/빈스마트_로고.svg" alt="빈스마트" class="max-h-5 mx-auto object-contain" onerror="this.style.display='none'">
                        </td>
                        <th class="py-1.5 font-bold border-r border-gray-300" style="background-color: #E49DFD !important; color: #000000 !important;">빈스마트</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="빈스마트.html" class="text-[#0275d8] hover:underline">고송본점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="빈스마트.html" class="text-[#0275d8] hover:underline">남구청점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="빈스마트.html" class="text-[#0275d8] hover:underline">창전구청점</a>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1">
                            <img src="이미지/마루마트_로고.svg" alt="마루마트" class="max-h-5 mx-auto object-contain" onerror="this.style.display='none'">
                        </td>
                        <th class="py-1.5 font-bold border-r border-gray-300" style="background-color: #FFCD00 !important; color: #000000 !important;">마루마트</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="마루마트.html" class="text-[#0275d8] hover:underline">동구본점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="마루마트.html" class="text-[#0275d8] hover:underline">탄성군청점</a>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1">
                            <img src="이미지/천조마트_로고.svg" alt="천조마트" class="max-h-5 mx-auto object-contain" onerror="this.style.display='none'">
                        </td>
                        <th class="py-1.5 font-bold border-r border-gray-300" style="background-color: #77DD77 !important; color: #000000 !important;">천조마트</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="천조마트.html" class="text-[#0275d8] hover:underline">안천본점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="천조마트.html" class="text-[#0275d8] hover:underline">효빈항물류점</a>
                        </td>
                    </tr>

                    <!-- 3. 창고형 할인점 -->
                    <tr>
                        <td colspan="3" class="font-bold py-1.5 shadow-inner text-[14px]" style="background-color: #7777AA !important; color: #ffffff !important; border: 1px solid #7777AA !important;">
                            효빈광역시 소재 창고형 할인점
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1">
                            <img src="이미지/코스트코_로고.svg" alt="코스트코" class="max-h-5 mx-auto object-contain" onerror="this.style.display='none'">
                        </td>
                        <th class="py-1.5 font-bold border-r border-gray-300" style="background-color: #E31837 !important; color: #ffffff !important;">코스트코</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="코스트코_효빈점.html" class="text-[#0275d8] hover:underline">효빈점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="코스트코_이자점.html" class="text-[#0275d8] hover:underline">이자점</a>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1">
                            <img src="이미지/트레이더스_로고.svg" alt="트레이더스 홀세일 클럽" class="max-h-5 mx-auto object-contain" onerror="this.style.display='none'">
                        </td>
                        <th class="py-1.5 font-bold border-r border-gray-300 leading-tight" style="background-color: #231815 !important; color: #ffffff !important;">트레이더스<br>홀세일 클럽</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="트레이더스_효빈점.html" class="text-[#0275d8] hover:underline">효빈점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="트레이더스_평당점.html" class="text-[#0275d8] hover:underline">평당점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="트레이더스_흑택점.html" class="text-[#0275d8] hover:underline">흑택점</a><span class="text-[10px] text-gray-500 ml-0.5">(예정)</span>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1">
                            <img src="이미지/롯데마트맥스_로고.svg" alt="롯데마트 맥스" class="max-h-5 mx-auto object-contain" onerror="this.style.display='none'">
                        </td>
                        <th class="py-1.5 font-bold border-r border-gray-300" style="background-color: #00A775 !important; color: #ffffff !important;">롯데마트 맥스</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="롯데마트_맥스_창전점.html" class="text-[#0275d8] hover:underline">창전점</a>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1">
                            <img src="이미지/홈플러스스페셜_로고.svg" alt="홈플러스 스페셜" class="max-h-5 mx-auto object-contain" onerror="this.style.display='none'">
                        </td>
                        <th class="py-1.5 font-bold border-r border-gray-300 leading-tight" style="background-color: #E60013 !important; color: #ffffff !important;">홈플러스<br>스페셜</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="홈플러스_청능점.html" class="text-gray-400 line-through hover:underline">청능점</a><span class="text-[10px] text-gray-500 ml-0.5">(전)</span>
                        </td>
                    </tr>

                    <!-- 4. 없어진 할인점 -->
                    <tr>
                        <td colspan="3" class="font-bold py-1.5 shadow-inner text-[14px]" style="background-color: #7777AA !important; color: #ffffff !important; border: 1px solid #7777AA !important;">
                            효빈광역시 소재 없어진 할인점
                        </td>
                    </tr>
                    
                    <!-- 이마트 계열 -->
                    <tr>
                        <td colspan="3" class="font-bold py-1.5 border-b border-gray-300 shadow-inner text-[13px]" style="background-color: #FFB81C !important; color: #000000 !important;">
                            이마트 계열
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1">
                            <img src="이미지/월마트_로고.svg" alt="월마트" class="max-h-5 mx-auto object-contain" onerror="this.style.display='none'">
                        </td>
                        <th class="py-1.5 font-bold border-r border-gray-300" style="background-color: #004890 !important; color: #ffffff !important;">월마트</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="이마트_마잡점.html" class="text-gray-400 line-through hover:underline">마잡점</a><span class="text-[10px] text-gray-500 ml-0.5">(변)</span> <span class="text-gray-300 mx-1">·</span>
                            <span class="text-gray-400 line-through">효빈2호점</span><span class="text-[10px] text-gray-500 ml-0.5">(무산)</span>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1">
                            <img src="이미지/마크로_로고.svg" alt="마크로" class="max-h-5 mx-auto object-contain" onerror="this.style.display='none'">
                        </td>
                        <th class="py-1.5 font-bold border-r border-gray-300" style="background-color: #D9272E !important; color: #ffffff !important;">마크로</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <span class="text-gray-400 line-through">효빈점</span><span class="text-[10px] text-gray-500 ml-0.5">(무산)</span>
                        </td>
                    </tr>

                    <!-- 롯데마트 계열 -->
                    <tr>
                        <td colspan="3" class="font-bold py-1.5 border-b border-gray-300 shadow-inner text-[13px]" style="background-color: #E60012 !important; color: #ffffff !important;">
                            롯데마트 계열
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1">
                            <img src="이미지/GS마트_로고.svg" alt="GS마트" class="max-h-5 mx-auto object-contain" onerror="this.style.display='none'">
                        </td>
                        <th class="py-1.5 font-bold border-r border-gray-300" style="background-color: #009999 !important; color: #ffffff !important;">GS마트</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="롯데마트_덕현점.html" class="text-gray-400 line-through hover:underline">덕현점</a><span class="text-[10px] text-gray-500 ml-0.5">(변)</span> <span class="text-gray-300 mx-1">·</span>
                            <a href="롯데마트_과진점.html" class="text-gray-400 line-through hover:underline">과진점</a><span class="text-[10px] text-gray-500 ml-0.5">(변)</span>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1">
                            <img src="이미지/LG마트_로고.svg" alt="LG마트" class="max-h-5 mx-auto object-contain" onerror="this.style.display='none'">
                        </td>
                        <th class="py-1.5 font-bold border-r border-gray-300" style="background-color: #A6215D !important; color: #ffffff !important;">LG마트</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="롯데마트_덕현점.html" class="text-gray-400 line-through hover:underline">덕현점</a><span class="text-[10px] text-gray-500 ml-0.5">(변)</span> <span class="text-gray-300 mx-1">·</span>
                            <a href="롯데마트_과진점.html" class="text-gray-400 line-through hover:underline">과진점</a><span class="text-[10px] text-gray-500 ml-0.5">(변)</span>
                        </td>
                    </tr>

                    <!-- 홈플러스 계열 -->
                    <tr>
                        <td colspan="3" class="font-bold py-1.5 border-b border-gray-300 shadow-inner text-[13px]" style="background-color: #E60013 !important; color: #ffffff !important;">
                            홈플러스 계열
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1">
                            <img src="이미지/까르푸_로고.svg" alt="까르푸" class="max-h-5 mx-auto object-contain" onerror="this.style.display='none'">
                        </td>
                        <th class="py-1.5 font-bold border-r border-gray-300" style="background-color: #273785 !important; color: #ffffff !important;">까르푸</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="홈플러스_청능점.html" class="text-gray-400 line-through hover:underline">청능점</a><span class="text-[10px] text-gray-500 ml-0.5">(변)</span> <span class="text-gray-300 mx-1">·</span>
                            <a href="홈플러스_평당점.html" class="text-gray-400 line-through hover:underline">평당점</a><span class="text-[10px] text-gray-500 ml-0.5">(변)</span> <span class="text-gray-300 mx-1">·</span>
                            <a href="홈플러스_효빈역점.html" class="text-gray-400 line-through hover:underline">효빈역점</a><span class="text-[10px] text-gray-500 ml-0.5">(변)</span>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1">
                            <img src="이미지/홈에버_로고.svg" alt="홈에버" class="max-h-5 mx-auto object-contain" onerror="this.style.display='none'">
                        </td>
                        <th class="py-1.5 font-bold border-r border-gray-300" style="background-color: #B2001A !important; color: #ffffff !important;">홈에버</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="홈플러스_청능점.html" class="text-gray-400 line-through hover:underline">청능점</a><span class="text-[10px] text-gray-500 ml-0.5">(변)</span> <span class="text-gray-300 mx-1">·</span>
                            <a href="홈플러스_평당점.html" class="text-gray-400 line-through hover:underline">평당점</a><span class="text-[10px] text-gray-500 ml-0.5">(변)</span> <span class="text-gray-300 mx-1">·</span>
                            <a href="홈플러스_효빈역점.html" class="text-gray-400 line-through hover:underline">효빈역점</a><span class="text-[10px] text-gray-500 ml-0.5">(변)</span>
                        </td>
                    </tr>

                    <!-- 기타 브랜드 -->
                    <tr>
                        <td colspan="3" class="font-bold py-1.5 border-b border-gray-300 shadow-inner text-[13px]" style="background-color: #808080 !important; color: #ffffff !important;">
                            기타 브랜드
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1">
                            <img src="이미지/logo.webp" alt="기타 브랜드" class="max-h-5 mx-auto object-contain opacity-50" onerror="this.style.display='none'">
                        </td>
                        <th class="py-1.5 font-bold border-r border-gray-300" style="background-color: #808080 !important; color: #ffffff !important;">우성유통</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="우성유통.html" class="text-gray-400 line-through hover:underline">우전점</a><span class="text-[10px] text-gray-500 ml-0.5">(변)</span> <span class="text-gray-300 mx-1">·</span>
                            <a href="우성유통.html" class="text-gray-400 line-through hover:underline">항동점</a><span class="text-[10px] text-gray-500 ml-0.5">(폐)</span>
                        </td>
                    </tr>

                    <!-- 범례 -->
                    <tr>
                        <td colspan="3" class="bg-gray-50 text-gray-500 text-xs text-left p-2 border-t border-gray-300 leading-relaxed">
                            (폐): 폐점된 점포 | (예정): 개점 예정인 점포 | (변): 다른 브랜드로 변경된 점포 | (전): 동일한 운영주체의 다른 브랜드로 전환된 점포 | (무산): 입점 계획이 취소되거나 개점이 무산된 점포
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;

    container.innerHTML = templateHTML;
});