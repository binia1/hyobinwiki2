document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("hyobin-shopping-nav-container");
    if (!container) return;

    // 접기/펼치기 전용 고유 함수
    window.toggleShoppingTable = function() {
        const tbody = document.getElementById("shopping-nav-body");
        const btn = document.getElementById("shoppingToggleBtn");
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
                <img src="이미지/logo.webp" alt="효빈광역시 로고" class="h-10 object-contain bg-transparent">
                <div class="flex flex-col items-center justify-center text-center">
                    <span class="font-extrabold text-[17px] tracking-widest leading-tight drop-shadow-sm text-white">효빈광역시 소재 쇼핑시설</span>
                </div>
            </div>
            
            <!-- 펼치기/접기 버튼 -->
            <div onclick="toggleShoppingTable()" class="bg-[#f0f0f5] text-center text-xs py-1.5 cursor-pointer font-bold select-none hover:bg-gray-200 transition-colors border-b text-[#7777AA]" style="border-bottom-color: #7777AA;">
                <span id="shoppingToggleBtn">[ 접기 ]</span>
            </div>

            <!-- 테이블 영역 (3단 구조: 로고 - 브랜드명 - 지점목록) -->
            <table class="w-full border-collapse bg-white text-center table-fixed text-[13px] text-gray-800">
                <colgroup>
                    <col style="width: 16%;"> <!-- 1열: 로고 -->
                    <col style="width: 18%;"> <!-- 2열: 브랜드명 -->
                    <col style="width: 66%;"> <!-- 3열: 지점 목록 -->
                </colgroup>
                <tbody id="shopping-nav-body">
                    
                    <!-- 1. 백화점 -->
                    <tr>
                        <td colspan="3" class="bg-[#7777AA] text-white font-bold py-1.5 border border-[#7777AA] shadow-inner text-[14px]">
                            효빈광역시 소재 백화점
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1.5">
                            <img src="이미지/롯데백화점_로고.svg" alt="롯데백화점" class="h-9 mx-auto object-contain">
                        </td>
                        <th class="bg-[#7777AA] text-white py-1.5 font-bold border-r border-gray-300">롯데백화점</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="롯데백화점 효빈점.html" class="text-[#0275d8] hover:underline">효빈점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="롯데백화점 진희점.html" class="text-[#0275d8] hover:underline">진희점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="롯데백화점 평당점.html" class="text-[#0275d8] hover:underline">평당점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="롯데백화점 청엽점.html" class="text-[#0275d8] hover:underline">청엽점</a>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1.5">
                            <img src="이미지/신세계백화점_로고.svg" alt="신세계백화점" class="h-9 mx-auto object-contain">
                        </td>
                        <th class="bg-[#7777AA] text-white py-1.5 font-bold border-r border-gray-300">신세계백화점</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="신세계백화점 효빈점.html" class="text-[#0275d8] hover:underline">효빈점</a>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1.5">
                            <img src="이미지/현대백화점_로고.svg" alt="현대백화점" class="h-9 mx-auto object-contain">
                        </td>
                        <th class="bg-[#7777AA] text-white py-1.5 font-bold border-r border-gray-300">현대백화점</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="현대백화점 효빈점.html" class="text-[#0275d8] hover:underline">효빈점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="더현대 창전.html" class="text-[#0275d8] hover:underline">더현대 창전</a><span class="text-[10px] text-gray-500 ml-0.5">(2027)</span>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1.5">
                            <img src="이미지/NC백화점_로고.svg" alt="NC백화점" class="h-9 mx-auto object-contain">
                        </td>
                        <th class="bg-[#7777AA] text-white py-1.5 font-bold border-r border-gray-300">NC백화점</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="NC백화점 효빈점.html" class="text-[#0275d8] hover:underline">효빈점</a>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1.5">
                            <img src="이미지/갤러리아백화점_로고.svg" alt="갤러리아백화점" class="h-9 mx-auto object-contain">
                        </td>
                        <th class="bg-[#7777AA] text-white py-1.5 font-bold border-r border-gray-300">갤러리아백화점</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="갤러리아백화점 효빈점.html" class="text-[#0275d8] hover:underline">효빈점</a>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1.5">
                            <img src="이미지/AK플라자_로고.svg" alt="AK백화점" class="h-9 mx-auto object-contain">
                        </td>
                        <th class="bg-[#7777AA] text-white py-1.5 font-bold border-r border-gray-300">AK백화점</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="AK백화점 효빈역점.html" class="text-[#0275d8] hover:underline">효빈역점</a>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1.5">
                            <img src="이미지/logo.webp" alt="기타" class="h-9 mx-auto object-contain opacity-50">
                        </td>
                        <th class="bg-[#7777AA] text-white py-1.5 font-bold border-r border-gray-300 leading-tight">기타 폐점<br>백화점</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="효빈백화점.html" class="text-gray-400 line-through hover:underline">효빈백화점</a><span class="text-[10px] text-gray-500 ml-0.5">(폐)</span> <span class="text-gray-300 mx-1">·</span>
                            <a href="리에라백화점.html" class="text-gray-400 line-through hover:underline">리에라백화점</a><span class="text-[10px] text-gray-500 ml-0.5">(전)</span> <span class="text-gray-300 mx-1">·</span>
                            <a href="대곡백화점.html" class="text-gray-400 line-through hover:underline">대곡백화점</a><span class="text-[10px] text-gray-500 ml-0.5">(변)</span> <span class="text-gray-300 mx-1">·</span>
                            <a href="두청백화점.html" class="text-gray-400 line-through hover:underline">두청백화점</a><span class="text-[10px] text-gray-500 ml-0.5">(폐)</span> <span class="text-gray-300 mx-1">·</span>
                            <a href="안석백화점.html" class="text-gray-400 line-through hover:underline">안석백화점</a><span class="text-[10px] text-gray-500 ml-0.5">(폐)</span>
                        </td>
                    </tr>

                    <!-- 2. 면세점 -->
                    <tr>
                        <td colspan="3" class="bg-[#7777AA] text-white font-bold py-1.5 border border-[#7777AA] shadow-inner text-[14px]">
                            효빈광역시 소재 면세점
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1.5">
                            <img src="이미지/롯데면세점_로고.svg" alt="롯데면세점" class="h-9 mx-auto object-contain">
                        </td>
                        <th class="bg-[#7777AA] text-white py-1.5 font-bold border-r border-gray-300">롯데면세점</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="롯데면세점 효빈점.html" class="text-[#0275d8] hover:underline">효빈점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="롯데면세점 효빈공항점.html" class="text-[#0275d8] hover:underline">효빈공항점</a><span class="text-[10px] text-gray-500 ml-0.5">(입국장)(기도)</span>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1.5">
                            <img src="이미지/신세계면세점_로고.svg" alt="신세계면세점" class="h-9 mx-auto object-contain">
                        </td>
                        <th class="bg-[#7777AA] text-white py-1.5 font-bold border-r border-gray-300">신세계면세점</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="신세계면세점 효빈점.html" class="text-[#0275d8] hover:underline">효빈점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="신세계면세점 효빈공항점.html" class="text-[#0275d8] hover:underline">효빈공항점</a><span class="text-[10px] text-gray-500 ml-0.5">(출국장)(기도)</span>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1.5">
                            <img src="이미지/효빈면세점_로고.svg" alt="효빈면세점" class="h-9 mx-auto object-contain">
                        </td>
                        <th class="bg-[#7777AA] text-white py-1.5 font-bold border-r border-gray-300">효빈면세점</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="효빈면세점 효빈항점.html" class="text-[#0275d8] hover:underline">효빈항점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="효빈면세점 중보로점.html" class="text-[#0275d8] hover:underline">중보로점</a>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1.5">
                            <img src="이미지/경복궁면세점_로고.wepb" alt="경복궁면세점" class="h-9 mx-auto object-contain">
                        </td>
                        <th class="bg-[#7777AA] text-white py-1.5 font-bold border-r border-gray-300">경복궁면세점</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="경복궁면세점 효빈공항점.html" class="text-[#0275d8] hover:underline">효빈공항점</a><span class="text-[10px] text-gray-500 ml-0.5">(입국장)(기도)</span>
                        </td>
                    </tr>

                    <!-- 3. 아울렛 -->
                    <tr>
                        <td colspan="3" class="bg-[#7777AA] text-white font-bold py-1.5 border border-[#7777AA] shadow-inner text-[14px]">
                            효빈광역시 소재 아울렛
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1.5">
                            <img src="이미지/롯데아울렛_로고.svg" alt="롯데아울렛" class="h-9 mx-auto object-contain">
                        </td>
                        <th class="bg-[#7777AA] text-white py-1.5 font-bold border-r border-gray-300">롯데아울렛</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="롯데백화점_평당점.html" class="text-[#0275d8] hover:underline">평당점</a>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1.5">
                            <img src="이미지/세이브존_로고.svg" alt="세이브존" class="h-9 mx-auto object-contain">
                        </td>
                        <th class="bg-[#7777AA] text-white py-1.5 font-bold border-r border-gray-300">세이브존</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="세이브존 효빈사가당점.html" class="text-[#0275d8] hover:underline">효빈사가당점</a>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1.5">
                            <img src="이미지/모다아울렛_로고.svg" alt="모다아울렛" class="h-9 mx-auto object-contain">
                        </td>
                        <th class="bg-[#7777AA] text-white py-1.5 font-bold border-r border-gray-300">모다아울렛</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="모다아울렛 고해점.html" class="text-[#0275d8] hover:underline">고해점</a>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1.5">
                            <img src="이미지/뉴코아아울렛_로고.svg" alt="뉴코아아울렛" class="h-9 mx-auto object-contain">
                        </td>
                        <th class="bg-[#7777AA] text-white py-1.5 font-bold border-r border-gray-300">뉴코아아울렛</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="뉴코아아울렛 창전점.html" class="text-[#0275d8] hover:underline">창전점</a>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1.5">
                            <img src="이미지/현대프리미엄아울렛_로고.wepb" alt="현대프리미엄아울렛" class="h-9 mx-auto object-contain">
                        </td>
                        <th class="bg-[#7777AA] text-white py-1.5 font-bold border-r border-gray-300 leading-tight">현대프리미엄<br>아울렛</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="현대프리미엄아울렛 야진점.html" class="text-[#0275d8] hover:underline">야진점</a><span class="text-[10px] text-gray-500 ml-0.5">(예)</span>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1.5">
                            <img src="이미지/logo.webp" alt="기타" class="h-9 mx-auto object-contain opacity-50">
                        </td>
                        <th class="bg-[#7777AA] text-white py-1.5 font-bold border-r border-gray-300">기타</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="두청아울렛.html" class="text-gray-400 line-through hover:underline">두청아울렛</a><span class="text-[10px] text-gray-500 ml-0.5">(폐)</span> <span class="text-gray-300 mx-1">·</span>
                            <a href="유니브스퀘어.html" class="text-[#0275d8] hover:underline">유니브스퀘어</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="카린아울렛.html" class="text-[#0275d8] hover:underline">카린아울렛</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="애니아울렛.html" class="text-[#0275d8] hover:underline">애니아울렛</a>
                        </td>
                    </tr>

                    <!-- 4. 복합쇼핑몰 -->
                    <tr>
                        <td colspan="3" class="bg-[#7777AA] text-white font-bold py-1.5 border border-[#7777AA] shadow-inner text-[14px]">
                            효빈광역시 소재 복합쇼핑몰
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1.5">
                            <img src="이미지/롯데몰_로고.svg" alt="롯데몰" class="h-9 mx-auto object-contain">
                        </td>
                        <th class="bg-[#7777AA] text-white py-1.5 font-bold border-r border-gray-300">롯데몰</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="롯데백화점_청엽점.html" class="text-[#0275d8] hover:underline">청엽점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="롯데몰 창전점.html" class="text-[#0275d8] hover:underline">창전점</a>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1.5">
                            <img src="이미지/스타필드_로고.svg" alt="스타필드" class="h-9 mx-auto object-contain">
                        </td>
                        <th class="bg-[#7777AA] text-white py-1.5 font-bold border-r border-gray-300">스타필드</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="스타필드 효빈.html" class="text-[#0275d8] hover:underline">효빈점</a><span class="text-[10px] text-gray-500 ml-0.5">(2028)</span>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1.5">
                            <img src="이미지/밀리오레_로고.svg" alt="밀리오레" class="h-9 mx-auto object-contain">
                        </td>
                        <th class="bg-[#7777AA] text-white py-1.5 font-bold border-r border-gray-300">밀리오레</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="밀리오레 효빈점.html" class="text-gray-400 line-through hover:underline">효빈점</a><span class="text-[10px] text-gray-500 ml-0.5">(변)</span>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1.5">
                            <img src="이미지/엔터식스_로고.svg" alt="엔터식스" class="h-9 mx-auto object-contain">
                        </td>
                        <th class="bg-[#7777AA] text-white py-1.5 font-bold border-r border-gray-300">엔터식스</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="엔터식스 효빈점.html" class="text-gray-400 line-through hover:underline">효빈점</a><span class="text-[10px] text-gray-500 ml-0.5">(폐)</span>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1.5">
                            <img src="이미지/더플러스몰_로고.wepb" alt="더플러스몰" class="h-9 mx-auto object-contain">
                        </td>
                        <th class="bg-[#7777AA] text-white py-1.5 font-bold border-r border-gray-300">더플러스몰</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="홈플러스_고송점.html" class="text-gray-400 line-through hover:underline">고송점</a><span class="text-[10px] text-gray-500 ml-0.5">(전)</span>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1.5">
                            <img src="이미지/신세계백화점_로고.svg" alt="신세계몰" class="h-9 mx-auto object-contain">
                        </td>
                        <th class="bg-[#7777AA] text-white py-1.5 font-bold border-r border-gray-300">신세계몰</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="신세계몰 효빈점.html" class="text-[#0275d8] hover:underline">효빈점</a>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1.5">
                            <img src="이미지/타임빌라스_로고.svg" alt="타임빌라스" class="h-9 mx-auto object-contain">
                        </td>
                        <th class="bg-[#7777AA] text-white py-1.5 font-bold border-r border-gray-300">타임빌라스</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="타임빌라스 진희점.html" class="text-[#0275d8] hover:underline">진희점</a><span class="text-[10px] text-gray-500 ml-0.5">(2027)</span>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1.5">
                            <img src="이미지/logo.webp" alt="기타몰" class="h-9 mx-auto object-contain opacity-50">
                        </td>
                        <th class="bg-[#7777AA] text-white py-1.5 font-bold border-r border-gray-300 leading-tight">기타 주요<br>복합쇼핑몰</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="이자파크몰.html" class="text-[#0275d8] hover:underline">이자파크몰</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="HJ몰 중수점.html" class="text-[#0275d8] hover:underline">HJ몰 중수점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="아논타워몰.html" class="text-[#0275d8] hover:underline">아논타워몰</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="청엽시티몰.html" class="text-[#0275d8] hover:underline">청엽시티몰</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="리에라몰.html" class="text-[#0275d8] hover:underline">리에라몰</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="도변스퀘어몰.html" class="text-[#0275d8] hover:underline">도변스퀘어몰</a>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1.5">
                            <img src="이미지/logo.webp" alt="폐점몰" class="h-9 mx-auto object-contain opacity-50">
                        </td>
                        <th class="bg-[#7777AA] text-white py-1.5 font-bold border-r border-gray-300 leading-tight">기타 폐점한<br>복합쇼핑몰</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="두청몰.html" class="text-gray-400 line-through hover:underline">두청몰</a><span class="text-[10px] text-gray-500 ml-0.5">(폐)</span> <span class="text-gray-300 mx-1">·</span>
                            <a href="에르데나스.html" class="text-gray-400 line-through hover:underline">에르데나스</a><span class="text-[10px] text-gray-500 ml-0.5">(폐)</span> <span class="text-gray-300 mx-1">·</span>
                            <a href="델러트.html" class="text-gray-400 line-through hover:underline">델러트</a><span class="text-[10px] text-gray-500 ml-0.5">(폐)</span> <span class="text-gray-300 mx-1">·</span>
                            <a href="에바르.html" class="text-gray-400 line-through hover:underline">에바르</a><span class="text-[10px] text-gray-500 ml-0.5">(폐)</span>
                        </td>
                    </tr>

                    <!-- 5. 주상복합 내 쇼핑몰 -->
                    <tr>
                        <td colspan="3" class="bg-[#7777AA] text-white font-bold py-1.5 border border-[#7777AA] shadow-inner text-[14px]">
                            효빈광역시 소재 주상복합 내 쇼핑몰 <span class="font-normal text-xs">(총면적 20000㎡ 이상)</span>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1.5">
                            <img src="이미지/고송스퀘어_로고.svg" alt="고송스퀘어" class="h-9 mx-auto object-contain">
                        </td>
                        <th class="bg-[#7777AA] text-white py-1.5 font-bold border-r border-gray-300">고송스퀘어</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="고송스퀘어.html" class="text-[#0275d8] hover:underline">고송스퀘어몰</a>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1.5">
                            <img src="이미지/W스퀘어_로고.wepb" alt="W스퀘어" class="h-9 mx-auto object-contain">
                        </td>
                        <th class="bg-[#7777AA] text-white py-1.5 font-bold border-r border-gray-300">W스퀘어</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="칠심W스퀘어.html" class="text-[#0275d8] hover:underline">칠심W스퀘어</a>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1.5">
                            <img src="이미지/다이버시티몰_로고.svg" alt="다이버시티몰" class="h-9 mx-auto object-contain">
                        </td>
                        <th class="bg-[#7777AA] text-white py-1.5 font-bold border-r border-gray-300">다이버시티몰</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="청덕 다이버시티몰.html" class="text-[#0275d8] hover:underline">청덕 다이버시티몰</a>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1.5">
                            <img src="이미지/더샵센트럴스퀘어_로고.wepb" alt="더샵 센트럴스퀘어" class="h-9 mx-auto object-contain">
                        </td>
                        <th class="bg-[#7777AA] text-white py-1.5 font-bold border-r border-gray-300 leading-tight">더샵 센트럴<br>스퀘어</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="청엽 더샵 센트럴스퀘어.html" class="text-[#0275d8] hover:underline">청엽 더샵 센트럴스퀘어</a>
                        </td>
                    </tr>

                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1.5">
                            <img src="이미지/아쿠아몰_로고.svg" alt="아쿠아몰" class="h-9 mx-auto object-contain">
                        </td>
                        <th class="bg-[#7777AA] text-white py-1.5 font-bold border-r border-gray-300">아쿠아몰</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="창전 아쿠아 1단지.html" class="text-[#0275d8] hover:underline">창전아쿠아몰</a>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1.5">
                            <img src="이미지/logo.webp" alt="기타" class="h-9 mx-auto object-contain opacity-50">
                        </td>
                        <th class="bg-[#7777AA] text-white py-1.5 font-bold border-r border-gray-300">기타</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="평당 빌리브몰.html" class="text-[#0275d8] hover:underline">평당 빌리브몰</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="창전 마린시티.html" class="text-[#0275d8] hover:underline">창전 마린시티</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="덕현 벨리움.html" class="text-[#0275d8] hover:underline">덕현 벨리움</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="진희 스타시티몰.html" class="text-[#0275d8] hover:underline">진희 스타시티몰</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="고송아이파크 상가.html" class="text-[#0275d8] hover:underline">고송아이파크 상가</a>
                        </td>
                    </tr>

                    <!-- 6. 주요 전문점 -->
                    <tr>
                        <td colspan="3" class="bg-[#7777AA] text-white font-bold py-1.5 border border-[#7777AA] shadow-inner text-[14px]">
                            효빈광역시 소재 주요 전문점
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1.5">
                            <img src="이미지/이케아_로고.svg" alt="이케아" class="h-9 mx-auto object-contain">
                        </td>
                        <th class="bg-[#7777AA] text-white py-1.5 font-bold border-r border-gray-300">이케아</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="이케아 효빈점.html" class="text-[#0275d8] hover:underline">효빈점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="Hej 효빈.html" class="text-[#0275d8] hover:underline">Hej 효빈!</a><span class="text-[10px] text-gray-500 ml-0.5">(팝업)</span>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1.5">
                            <img src="이미지/일렉트로마트_로고.svg" alt="일렉트로마트" class="h-9 mx-auto object-contain">
                        </td>
                        <th class="bg-[#7777AA] text-white py-1.5 font-bold border-r border-gray-300">일렉트로마트</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="이마트_마잡점.html" class="text-[#0275d8] hover:underline">마잡점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="이마트_사복점.html" class="text-[#0275d8] hover:underline">사복점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="이마트_안천점.html" class="text-[#0275d8] hover:underline">안천점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="이마트_월천점.html" class="text-[#0275d8] hover:underline">월천점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="이마트_중수점.html" class="text-[#0275d8] hover:underline">중수점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="이마트_창전점.html" class="text-[#0275d8] hover:underline">창전점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="이마트_효빈점.html" class="text-[#0275d8] hover:underline">효빈점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="이마트_효빈고속버스터미널점.html" class="text-[#0275d8] hover:underline">효빈고속버스터미널점</a>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1.5">
                            <img src="이미지/올랜드_로고.wepb" alt="올랜드" class="h-9 mx-auto object-contain">
                        </td>
                        <th class="bg-[#7777AA] text-white py-1.5 font-bold border-r border-gray-300">올랜드</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="올랜드앤올소 덕현점.html" class="text-[#0275d8] hover:underline">올랜드앤올소 덕현점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="올랜드앤올소 효빈오내점.html" class="text-[#0275d8] hover:underline">올랜드앤올소 효빈오내점</a>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1.5">
                            <img src="이미지/토이저러스_로고.svg" alt="토이저러스" class="h-9 mx-auto object-contain">
                        </td>
                        <th class="bg-[#7777AA] text-white py-1.5 font-bold border-r border-gray-300">토이저러스</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="롯데마트_과진점.html" class="text-[#0275d8] hover:underline">과진점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="롯데마트_도변점.html" class="text-[#0275d8] hover:underline">도변점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="롯데마트_이자점.html" class="text-[#0275d8] hover:underline">이자점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="롯데마트_진희점.html" class="text-[#0275d8] hover:underline">진희점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="롯데마트_평당점.html" class="text-[#0275d8] hover:underline">평당점</a>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1.5">
                            <img src="이미지/애니메이트_로고.svg" alt="애니메이트" class="h-9 mx-auto object-contain">
                        </td>
                        <th class="bg-[#7777AA] text-white py-1.5 font-bold border-r border-gray-300">애니메이트</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="애니메이트 고송본점.html" class="text-[#0275d8] hover:underline">고송본점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="애니메이트 탄성점.html" class="text-[#0275d8] hover:underline">탄성점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="애니메이트 효빈역점.html" class="text-[#0275d8] hover:underline">효빈역점</a>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1.5">
                            <img src="이미지/애니플러스_로고.svg" alt="애니플러스샵" class="h-9 mx-auto object-contain">
                        </td>
                        <th class="bg-[#7777AA] text-white py-1.5 font-bold border-r border-gray-300">애니플러스샵</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="애니플러스샵 고송점.html" class="text-[#0275d8] hover:underline">고송점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="애니플러스샵 창전점.html" class="text-[#0275d8] hover:underline">창전점</a>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1.5">
                            <img src="이미지/멜론북스_로고.svg" alt="멜론북스" class="h-9 mx-auto object-contain">
                        </td>
                        <th class="bg-[#7777AA] text-white py-1.5 font-bold border-r border-gray-300">멜론북스</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="멜론북스 고송점.html" class="text-[#0275d8] hover:underline">고송점</a>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1.5">
                            <img src="이미지/모던하우스_로고.svg" alt="모던하우스" class="h-9 mx-auto object-contain">
                        </td>
                        <th class="bg-[#7777AA] text-white py-1.5 font-bold border-r border-gray-300">모던하우스</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="모던하우스 NC효빈점.html" class="text-[#0275d8] hover:underline">NC 효빈점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="모던하우스 뉴코아창전점.html" class="text-[#0275d8] hover:underline">뉴코아 창전점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="모던하우스 롯데아울렛평당점.html" class="text-[#0275d8] hover:underline">롯데아울렛 평당점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="모던하우스 홈플러스효빈점.html" class="text-[#0275d8] hover:underline">홈플러스 효빈점</a>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1.5">
                            <img src="이미지/효빈메트로_로고.webp" alt="효빈교통공사" class="h-9 mx-auto object-contain">
                        </td>
                        <th class="bg-[#7777AA] text-white py-1.5 font-bold border-r border-gray-300 leading-tight">효빈교통공사<br>굿즈샵</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="효빈교통공사_굿즈샵.html" class="text-[#0275d8] hover:underline">창선역점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="효빈교통공사_굿즈샵.html" class="text-[#0275d8] hover:underline">창전구청역점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="효빈교통공사_굿즈샵.html" class="text-[#0275d8] hover:underline">고송교차로역점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="효빈교통공사_굿즈샵.html" class="text-[#0275d8] hover:underline">청엽구청역점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="효빈교통공사_굿즈샵.html" class="text-[#0275d8] hover:underline">이자공원역점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="효빈교통공사_굿즈샵.html" class="text-[#0275d8] hover:underline">소조역점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="효빈교통공사_굿즈샵.html" class="text-[#0275d8] hover:underline">중수역점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="효빈교통공사_굿즈샵.html" class="text-[#0275d8] hover:underline">중앙로1가역점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="효빈교통공사_굿즈샵.html" class="text-[#0275d8] hover:underline">운양중앙역점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="효빈교통공사_굿즈샵.html" class="text-[#0275d8] hover:underline">효빈역플래그십</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="효빈교통공사_굿즈샵.html" class="text-[#0275d8] hover:underline">효빈교통공사 직영점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="효빈교통공사_굿즈샵.html" class="text-[#0275d8] hover:underline">과진역점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="효빈교통공사_굿즈샵.html" class="text-[#0275d8] hover:underline">도변요우점</a>
                        </td>
                    </tr>

                    <!-- 7. 대형 서점 -->
                    <tr>
                        <td colspan="3" class="bg-[#7777AA] text-white font-bold py-1.5 border border-[#7777AA] shadow-inner text-[14px]">
                            효빈광역시 소재 서점
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1.5">
                            <img src="이미지/교보문고_로고.svg" alt="교보문고" class="h-9 mx-auto object-contain">
                        </td>
                        <th class="bg-[#7777AA] text-white py-1.5 font-bold border-r border-gray-300">교보문고</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="교보문고 효빈점.html" class="text-[#0275d8] hover:underline">효빈점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="교보문고 안천팝업스토어.html" class="text-[#0275d8] hover:underline">안천팝업스토어</a><span class="text-[10px] text-gray-500 ml-0.5">(팝업)</span> <span class="text-gray-300 mx-1">·</span>
                            <a href="교보문고 효빈터미널점.html" class="text-[#0275d8] hover:underline">효빈터미널점</a><span class="text-[10px] text-gray-500 ml-0.5">(교보핫트랙스)</span>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1.5">
                            <img src="이미지/영풍문고_로고.svg" alt="영풍문고" class="h-9 mx-auto object-contain">
                        </td>
                        <th class="bg-[#7777AA] text-white py-1.5 font-bold border-r border-gray-300">영풍문고</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="영풍문고 효빈대점.html" class="text-[#0275d8] hover:underline">효빈대점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="영풍문고 고송스퀘어점.html" class="text-[#0275d8] hover:underline">고송스퀘어점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="영풍문고 롯데백화점 청엽점.html" class="text-[#0275d8] hover:underline">롯데백화점 청엽점</a>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1.5">
                            <img src="이미지/종로서적_로고.svg" alt="종로서적" class="h-9 mx-auto object-contain">
                        </td>
                        <th class="bg-[#7777AA] text-white py-1.5 font-bold border-r border-gray-300">종로서적</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="종로서적 평당센트럴점.html" class="text-[#0275d8] hover:underline">평당센트럴점</a>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1.5">
                            <img src="이미지/아크앤북_로고.webp" alt="아크앤북" class="h-9 mx-auto object-contain">
                        </td>
                        <th class="bg-[#7777AA] text-white py-1.5 font-bold border-r border-gray-300">아크앤북</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="아크앤북 창전점.html" class="text-[#0275d8] hover:underline">창전점</a>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1.5">
                            <img src="이미지/알라딘중고서점_로고.svg" alt="알라딘중고서점" class="h-9 mx-auto object-contain">
                        </td>
                        <th class="bg-[#7777AA] text-white py-1.5 font-bold border-r border-gray-300 leading-tight">알라딘<br>중고서점</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="알라딘중고서점 효빈역점.html" class="text-[#0275d8] hover:underline">효빈역점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="알라딘중고서점 고송교차로역점.html" class="text-[#0275d8] hover:underline">고송교차로역점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="알라딘중고서점 청엽구청역점.html" class="text-[#0275d8] hover:underline">청엽구청역점</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="알라딘중고서점 이자점.html" class="text-[#0275d8] hover:underline">이자점</a>
                        </td>
                    </tr>

                    <!-- 8. 지하상가 -->
                    <tr>
                        <td colspan="3" class="bg-[#7777AA] text-white font-bold py-1.5 border border-[#7777AA] shadow-inner text-[14px]">
                            효빈광역시 소재 지하상가
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1.5">
                            <img src="이미지/효빈시설관리공단_로고.webp" alt="효빈시설공단" class="h-9 mx-auto object-contain">
                        </td>
                        <th class="bg-[#7777AA] text-white py-1.5 font-bold border-r border-gray-300 leading-tight">효빈시설공단<br>지하상가</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="중앙로지하상가.html" class="text-[#0275d8] hover:underline">중앙로지하상가</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="안천지하상가.html" class="text-[#0275d8] hover:underline">안천지하상가</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="당선지하상가.html" class="text-[#0275d8] hover:underline">당선지하상가</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="효빈역지하상가.html" class="text-[#0275d8] hover:underline">효빈역지하상가</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="중수지하상가.html" class="text-[#0275d8] hover:underline">중수지하상가</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="HSCO쇼핑문화거리.html" class="text-[#0275d8] hover:underline">HSCO쇼핑문화거리</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="고송지하상가.html" class="text-[#0275d8] hover:underline">고송지하상가</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="창전지하상가.html" class="text-[#0275d8] hover:underline">창전지하상가</a>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="bg-white border-r border-gray-300 align-middle p-1.5">
                            <img src="이미지/logo.webp" alt="기타 지하상가" class="h-9 mx-auto object-contain">
                        </td>
                        <th class="bg-[#7777AA] text-white py-1.5 font-bold border-r border-gray-300">기타 지하상가</th>
                        <td class="text-left py-1.5 px-3 leading-loose">
                            <a href="청엽 지하상가.html" class="text-[#0275d8] hover:underline">청엽 지하상가</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="중구 지하상가.html" class="text-[#0275d8] hover:underline">중구 지하상가</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="창선 지하상가.html" class="text-[#0275d8] hover:underline">창선 지하상가</a> <span class="text-gray-300 mx-1">·</span>
                            <a href="대학로 지하상가.html" class="text-[#0275d8] hover:underline">대학로 지하상가</a>
                        </td>
                    </tr>

                    <!-- 범례 -->
                    <tr>
                        <td colspan="3" class="bg-gray-50 text-gray-500 text-xs text-left p-2 border-t border-gray-300 leading-relaxed">
                            (폐): 폐점된 점포 | (예): 개점 예정인 점포 | (변): 다른 브랜드로 변경된 점포 | (전): 동일한 운영주체의 다른 브랜드로 전환된 점포 | (중): 영업이 일시 중단된 점포 | (기도): 기도군 소재 | (팝업): 팝업스토어 | (20XX): 해당연도에 개점 예정인 점포
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;

    container.innerHTML = templateHTML;
});