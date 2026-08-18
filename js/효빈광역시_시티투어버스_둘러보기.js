document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("hyobin-tour-bus-nav-container");
    
    if (container) {
        container.innerHTML = `
        <div aria-label="시내버스 노선 둘러보기 틀" class="w-full border-2 border-[#7777AA] rounded-[10px] bg-white mb-6 shadow-sm overflow-hidden mt-[14px] clear-both">
            <!-- 헤더 영역 -->
            <div class="bg-[#7777AA] py-3 flex justify-center items-center">
                <div class="border border-white/50 inline-flex items-center px-4 py-1.5 shadow-sm rounded-sm" style="box-shadow: 0 0 0 1px rgba(255,255,255,0.5) inset;">
                    <img alt="효빈광역시" src="이미지/logo.webp" class="h-11 w-auto mr-3 brightness-0 invert" style="filter: brightness(0) invert(1);"/>
                    <div class="text-left text-white leading-none">
                        <div class="text-[13px] font-bold tracking-wide mb-[2px] opacity-90">효빈광역시</div>
                        <div class="text-[22px] font-black tracking-tight leading-tight">시티투어버스</div>
                    </div>
                </div>
            </div>
            
            <!-- 뱃지 영역 -->
            <div class="py-3 border-b border-[#ddd] flex flex-wrap justify-center gap-1.5 bg-white px-2">
                <span onclick="location.href='급행버스.html'" class="bg-[#D81C2F] text-white text-[13px] px-2 py-1 rounded font-black cursor-pointer hover:opacity-80 transition-opacity" title="급행버스">급행</span>
                <span onclick="location.href='간선버스.html'" class="bg-[#01B7ED] text-white text-[13px] px-2 py-1 rounded font-black cursor-pointer hover:opacity-80 transition-opacity" title="간선버스">간선</span>
                <span onclick="location.href='순환버스.html'" class="bg-[#E7D600] text-[#111] text-[13px] px-2 py-1 rounded font-black cursor-pointer hover:opacity-80 transition-opacity" title="순환버스">순환</span>
                <span onclick="location.href='지선버스.html'" class="bg-[#37B484] text-white text-[13px] px-2 py-1 rounded font-black cursor-pointer hover:opacity-80 transition-opacity" title="지선버스">지선</span>
                <span onclick="location.href='광역버스.html'" class="bg-[#485EC6] text-white text-[13px] px-2 py-1 rounded font-black cursor-pointer hover:opacity-80 transition-opacity" title="광역버스">광역</span>
                <span onclick="location.href='좌석버스.html'" class="bg-[#FF5800] text-white text-[13px] px-2 py-1 rounded font-black cursor-pointer hover:opacity-80 transition-opacity" title="좌석버스">좌석</span>
                <span onclick="location.href='마을버스.html'" class="bg-[#A664A0] text-white text-[13px] px-2 py-1 rounded font-black cursor-pointer hover:opacity-80 transition-opacity" title="마을버스">마을</span>
                <span onclick="location.href='공항버스.html'" class="bg-[#84C36E] text-white text-[13px] px-2 py-1 rounded font-black cursor-pointer hover:opacity-80 transition-opacity" title="공항버스">공항</span>
                <span onclick="location.href='시티투어버스.html'" class="bg-[#7777AA] text-white text-[13px] px-2 py-1 rounded font-black cursor-pointer hover:opacity-80 transition-opacity ring-1 ring-black/10" title="시티투어버스">투어</span>
            </div>

            <!-- 노선 영역 (3x3 그리드 + 하단 T10 풀사이즈) -->
            <details open class="group">
                <summary class="cursor-pointer select-none font-black text-[13px] text-center py-2.5 text-[#333] hover:bg-gray-50 list-none bg-white" style="display: block;">
                    <div class="flex items-center justify-center gap-1">
                        <span>[ 펼치기 · 접기 ]</span>
                    </div>
                </summary>
                
                <div class="bg-gray-50 text-center font-bold text-[#333] py-1.5 text-[13.5px] border-t border-b border-[#ddd]">시티투어버스 노선 번호 (전체)</div>
                
                <div class="grid grid-cols-3 text-center w-full bg-white">
                    <div class="border-r border-b border-[#ddd] p-3.5">
                        <span onclick="location.href='효빈_시티투어버스_T01.html'" class="cursor-pointer hover:underline block flex flex-col items-center">
                            <span class="text-[15px] font-bold text-[#7777AA]">T01</span>
                            <span class="text-[11px] font-normal text-gray-500 mt-0.5">(중앙도심 순환)</span>
                        </span>
                    </div>
                    <div class="border-r border-b border-[#ddd] p-3.5">
                        <span onclick="location.href='효빈_시티투어버스_T02.html'" class="cursor-pointer hover:underline block flex flex-col items-center">
                            <span class="text-[15px] font-bold text-[#7777AA]">T02</span>
                            <span class="text-[11px] font-normal text-gray-500 mt-0.5">(항만·해양)</span>
                        </span>
                    </div>
                    <div class="border-b border-[#ddd] p-3.5">
                        <span onclick="location.href='효빈_시티투어버스_T03.html'" class="cursor-pointer hover:underline block flex flex-col items-center">
                            <span class="text-[15px] font-bold text-[#7777AA]">T03</span>
                            <span class="text-[11px] font-normal text-gray-500 mt-0.5">(성지·랜드마크)</span>
                        </span>
                    </div>
                    
                    <div class="border-r border-b border-[#ddd] p-3.5">
                        <span onclick="location.href='효빈_시티투어버스_T04.html'" class="cursor-pointer hover:underline block flex flex-col items-center">
                            <span class="text-[15px] font-bold text-[#7777AA]">T04</span>
                            <span class="text-[11px] font-normal text-gray-500 mt-0.5">(안천역·문화)</span>
                        </span>
                    </div>
                    <div class="border-r border-b border-[#ddd] p-3.5">
                        <span onclick="location.href='효빈_시티투어버스_T05.html'" class="cursor-pointer hover:underline block flex flex-col items-center">
                            <span class="text-[15px] font-bold text-[#7777AA]">T05</span>
                            <span class="text-[11px] font-normal text-gray-500 mt-0.5">(창전·학교문화)</span>
                        </span>
                    </div>
                    <div class="border-b border-[#ddd] p-3.5">
                        <span onclick="location.href='효빈_시티투어버스_T06.html'" class="cursor-pointer hover:underline block flex flex-col items-center">
                            <span class="text-[15px] font-bold text-[#7777AA]">T06</span>
                            <span class="text-[11px] font-normal text-gray-500 mt-0.5">(청엽·신도시)</span>
                        </span>
                    </div>
                    
                    <div class="border-r border-b border-[#ddd] p-3.5">
                        <span onclick="location.href='효빈_시티투어버스_T07.html'" class="cursor-pointer hover:underline block flex flex-col items-center">
                            <span class="text-[15px] font-bold text-[#7777AA]">T07</span>
                            <span class="text-[11px] font-normal text-gray-500 mt-0.5">(레일네임 성지)</span>
                        </span>
                    </div>
                    <div class="border-r border-b border-[#ddd] p-3.5">
                        <span onclick="location.href='효빈_시티투어버스_T08.html'" class="cursor-pointer hover:underline block flex flex-col items-center">
                            <span class="text-[15px] font-bold text-[#7777AA]">T08</span>
                            <span class="text-[11px] font-normal text-gray-500 mt-0.5">(해수욕장 순례)</span>
                        </span>
                    </div>
                    <div class="border-b border-[#ddd] p-3.5">
                        <span onclick="location.href='효빈_시티투어버스_T09.html'" class="cursor-pointer hover:underline block flex flex-col items-center">
                            <span class="text-[15px] font-bold text-[#7777AA]">T09</span>
                            <span class="text-[11px] font-normal text-gray-500 mt-0.5">(성지·자연)</span>
                        </span>
                    </div>

                    <!-- T10 풀사이즈 블록 -->
                    <div class="col-span-3 bg-[#7777AA] p-4 border-b border-[#ddd]">
                        <span onclick="location.href='효빈_시티투어버스_T10.html'" class="text-[15.5px] font-bold text-white cursor-pointer hover:underline block">
                            T10 (MyGO!!!!! 에디션)
                        </span>
                    </div>
                </div>
            </details>
        </div>
        `;
    }
});