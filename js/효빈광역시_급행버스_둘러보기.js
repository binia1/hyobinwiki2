document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("hyobin-express-bus-nav-container");
    
    if (container) {
        container.innerHTML = `
        <div aria-label="시내버스 노선 둘러보기 틀" class="w-full border-2 border-[#D81C2F] rounded-[10px] bg-white mb-6 shadow-sm overflow-hidden mt-[14px]">
            <!-- 헤더 영역 -->
            <div class="bg-[#D81C2F] py-3 flex justify-center items-center">
                <div class="border border-white/50 inline-flex items-center px-4 py-1.5 shadow-sm rounded-sm" style="box-shadow: 0 0 0 1px rgba(255,255,255,0.5) inset;">
                    <img alt="효빈광역시" src="이미지/logo.webp" class="h-11 w-auto mr-3 brightness-0 invert" style="filter: brightness(0) invert(1);"/>
                    <div class="text-left text-white leading-none">
                        <div class="text-[13px] font-bold tracking-wide mb-[2px] opacity-90">효빈광역시</div>
                        <div class="text-[22px] font-black tracking-tight leading-tight">급행버스</div>
                    </div>
                </div>
            </div>
            
            <!-- 뱃지 영역 -->
            <div class="py-3 border-b border-[#ddd] flex flex-wrap justify-center gap-1.5 bg-white px-2">
                <span onclick="location.href='급행버스.html'" class="bg-[#D81C2F] text-white text-[13px] px-2 py-1 rounded font-black cursor-pointer hover:opacity-80 transition-opacity ring-1 ring-black/10" title="급행버스">급행</span>
                <span onclick="location.href='간선버스.html'" class="bg-[#01B7ED] text-white text-[13px] px-2 py-1 rounded font-black cursor-pointer hover:opacity-80 transition-opacity" title="간선버스">간선</span>
                <span onclick="location.href='순환버스.html'" class="bg-[#E7D600] text-[#111] text-[13px] px-2 py-1 rounded font-black cursor-pointer hover:opacity-80 transition-opacity" title="순환버스">순환</span>
                <span onclick="location.href='지선버스.html'" class="bg-[#37B484] text-white text-[13px] px-2 py-1 rounded font-black cursor-pointer hover:opacity-80 transition-opacity" title="지선버스">지선</span>
                <span onclick="location.href='광역버스.html'" class="bg-[#485EC6] text-white text-[13px] px-2 py-1 rounded font-black cursor-pointer hover:opacity-80 transition-opacity" title="광역버스">광역</span>
                <span onclick="location.href='좌석버스.html'" class="bg-[#FF5800] text-white text-[13px] px-2 py-1 rounded font-black cursor-pointer hover:opacity-80 transition-opacity" title="좌석버스">좌석</span>
                <span onclick="location.href='마을버스.html'" class="bg-[#A664A0] text-white text-[13px] px-2 py-1 rounded font-black cursor-pointer hover:opacity-80 transition-opacity" title="마을버스">마을</span>
                <span onclick="location.href='공항버스.html'" class="bg-[#84C36E] text-white text-[13px] px-2 py-1 rounded font-black cursor-pointer hover:opacity-80 transition-opacity" title="공항버스">공항</span>
                <span onclick="location.href='시티투어버스.html'" class="bg-[#7777AA] text-white text-[13px] px-2 py-1 rounded font-black cursor-pointer hover:opacity-80 transition-opacity" title="시티투어버스">투어</span>
            </div>

            <!-- 노선 영역 -->
            <details open class="group">
                <summary class="cursor-pointer select-none font-black text-[13px] text-center py-2.5 text-[#333] hover:bg-gray-50 list-none" style="display: block;">
                    <div class="flex items-center justify-center gap-1">
                        <span>[ 펼치기 · 접기 ]</span>
                    </div>
                </summary>
                
                <div class="border-t border-[#ddd] bg-white">
                    <!-- 정방향 -->
                    <div class="bg-gray-50 text-center font-bold text-[#333] py-1.5 text-[13.5px] border-b border-[#ddd]">정방향 (01~09)</div>
                    <div class="grid grid-cols-3 text-center w-full">
                        <div class="border-r border-b border-[#ddd] p-3.5"><span onclick="location.href='bus_01.html#tab-01'" class="text-[14.5px] font-bold text-[#D81C2F] cursor-pointer hover:underline block">01</span></div>
                        <div class="border-r border-b border-[#ddd] p-3.5"><span onclick="location.href='bus_02.html#tab-02'" class="text-[14.5px] font-bold text-[#D81C2F] cursor-pointer hover:underline block">02</span></div>
                        <div class="border-b border-[#ddd] p-3.5"><span onclick="location.href='bus_03.html#tab-03'" class="text-[14.5px] font-bold text-[#D81C2F] cursor-pointer hover:underline block">03</span></div>
                        
                        <div class="border-r border-b border-[#ddd] p-3.5"><span onclick="location.href='bus_04.html#tab-04'" class="text-[14.5px] font-bold text-[#D81C2F] cursor-pointer hover:underline block">04</span></div>
                        <div class="border-r border-b border-[#ddd] p-3.5"><span onclick="location.href='bus_05.html#tab-05'" class="text-[14.5px] font-bold text-[#D81C2F] cursor-pointer hover:underline block">05</span></div>
                        <div class="border-b border-[#ddd] p-3.5"><span onclick="location.href='bus_06.html#tab-06'" class="text-[14.5px] font-bold text-[#D81C2F] cursor-pointer hover:underline block">06</span></div>
                        
                        <div class="border-r border-b border-[#ddd] p-3.5"><span onclick="location.href='bus_07.html#tab-07'" class="text-[14.5px] font-bold text-[#D81C2F] cursor-pointer hover:underline block">07</span></div>
                        <div class="border-r border-b border-[#ddd] p-3.5"><span onclick="location.href='bus_08.html#tab-08'" class="text-[14.5px] font-bold text-[#D81C2F] cursor-pointer hover:underline block">08</span></div>
                        <div class="border-b border-[#ddd] p-3.5"><span onclick="location.href='bus_09.html#tab-09'" class="text-[14.5px] font-bold text-[#D81C2F] cursor-pointer hover:underline block">09</span></div>
                    </div>

                    <!-- 역방향 -->
                    <div class="bg-gray-50 text-center font-bold text-[#333] py-1.5 text-[13.5px] border-b border-[#ddd]">역방향 (01-1~09-1)</div>
                    <div class="grid grid-cols-3 text-center w-full">
                        <div class="border-r border-b border-[#ddd] p-3.5"><span onclick="location.href='bus_01.html#tab-01-1'" class="text-[14.5px] font-bold text-[#D81C2F] cursor-pointer hover:underline block">01-1</span></div>
                        <div class="border-r border-b border-[#ddd] p-3.5"><span onclick="location.href='bus_02.html#tab-02-1'" class="text-[14.5px] font-bold text-[#D81C2F] cursor-pointer hover:underline block">02-1</span></div>
                        <div class="border-b border-[#ddd] p-3.5"><span onclick="location.href='bus_03.html#tab-03-1'" class="text-[14.5px] font-bold text-[#D81C2F] cursor-pointer hover:underline block">03-1</span></div>
                        
                        <div class="border-r border-b border-[#ddd] p-3.5"><span onclick="location.href='bus_04.html#tab-04-1'" class="text-[14.5px] font-bold text-[#D81C2F] cursor-pointer hover:underline block">04-1</span></div>
                        <div class="border-r border-b border-[#ddd] p-3.5"><span onclick="location.href='bus_05.html#tab-05-1'" class="text-[14.5px] font-bold text-[#D81C2F] cursor-pointer hover:underline block">05-1</span></div>
                        <div class="border-b border-[#ddd] p-3.5"><span onclick="location.href='bus_06.html#tab-06-1'" class="text-[14.5px] font-bold text-[#D81C2F] cursor-pointer hover:underline block">06-1</span></div>
                        
                        <div class="border-r border-[#ddd] p-3.5"><span onclick="location.href='bus_07.html#tab-07-1'" class="text-[14.5px] font-bold text-[#D81C2F] cursor-pointer hover:underline block">07-1</span></div>
                        <div class="border-r border-[#ddd] p-3.5"><span onclick="location.href='bus_08.html#tab-08-1'" class="text-[14.5px] font-bold text-[#D81C2F] cursor-pointer hover:underline block">08-1</span></div>
                        <div class="p-3.5"><span onclick="location.href='bus_09.html#tab-09-1'" class="text-[14.5px] font-bold text-[#D81C2F] cursor-pointer hover:underline block">09-1</span></div>
                    </div>
                </div>
            </details>
        </div>
        `;
    }
});