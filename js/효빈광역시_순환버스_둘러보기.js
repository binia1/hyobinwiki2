document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("hyobin-circular-bus-nav-container");
    
    if (container) {
        container.innerHTML = `
        <div aria-label="시내버스 노선 둘러보기 틀" class="w-full border-2 border-[#E7D600] rounded-[10px] bg-white mb-6 shadow-sm overflow-hidden mt-[14px]">
            <!-- 헤더 영역 -->
            <div class="bg-[#E7D600] py-3 flex justify-center items-center">
                <div class="border border-white inline-flex items-center px-4 py-1.5 shadow-sm" style="box-shadow: 0 0 0 1px white inset;">
                    <img alt="효빈광역시" src="이미지/logo.webp" class="h-11 w-auto mr-3 brightness-0 invert" style="filter: brightness(0) invert(1);"/>
                    <div class="text-left text-white leading-none">
                        <div class="text-[13px] font-bold tracking-wide mb-[2px] opacity-90">효빈광역시</div>
                        <div class="text-[22px] font-black tracking-tight leading-tight">순환버스</div>
                    </div>
                </div>
            </div>
            
            <!-- 뱃지 영역 (a 태그를 없애고 span으로 변경) -->
            <div class="py-3 border-b border-[#ddd] flex flex-wrap justify-center gap-1.5 bg-white px-2">
                <span onclick="location.href='급행버스.html'" class="bg-[#D81C2F] text-white text-[13px] px-2 py-1 rounded font-black cursor-pointer hover:opacity-80 transition-opacity" title="급행버스">급행</span>
                <span onclick="location.href='간선버스.html'" class="bg-[#01B7ED] text-white text-[13px] px-2 py-1 rounded font-black cursor-pointer hover:opacity-80 transition-opacity" title="간선버스">간선</span>
                <span onclick="location.href='순환버스.html'" class="bg-[#E7D600] text-[#111] text-[13px] px-2 py-1 rounded font-black cursor-pointer hover:opacity-80 transition-opacity ring-1 ring-black/10" title="순환버스">순환</span>
                <span onclick="location.href='지선버스.html'" class="bg-[#37B484] text-white text-[13px] px-2 py-1 rounded font-black cursor-pointer hover:opacity-80 transition-opacity" title="지선버스">지선</span>
                <span onclick="location.href='광역버스.html'" class="bg-[#485EC6] text-white text-[13px] px-2 py-1 rounded font-black cursor-pointer hover:opacity-80 transition-opacity" title="광역버스">광역</span>
                <span onclick="location.href='좌석버스.html'" class="bg-[#FF5800] text-white text-[13px] px-2 py-1 rounded font-black cursor-pointer hover:opacity-80 transition-opacity" title="좌석버스">좌석</span>
                <span onclick="location.href='마을버스.html'" class="bg-[#A664A0] text-white text-[13px] px-2 py-1 rounded font-black cursor-pointer hover:opacity-80 transition-opacity" title="마을버스">마을</span>
                <span onclick="location.href='공항버스.html'" class="bg-[#84C36E] text-white text-[13px] px-2 py-1 rounded font-black cursor-pointer hover:opacity-80 transition-opacity" title="공항버스">공항</span>
                <span onclick="location.href='시티투어버스.html'" class="bg-[#7777AA] text-white text-[13px] px-2 py-1 rounded font-black cursor-pointer hover:opacity-80 transition-opacity" title="시티투어버스">투어</span>
            </div>

            <!-- 노선 영역 (a 태그를 없애고 span으로 변경) -->
            <div class="grid grid-cols-3 text-center bg-white w-full">
                <div class="border-r border-b border-[#ddd] p-3.5"><span onclick="location.href='bus_10.html'" class="text-[14.5px] font-bold text-[#0055AA] cursor-pointer hover:underline block">10, 10-1</span></div>
                <div class="border-r border-b border-[#ddd] p-3.5"><span onclick="location.href='bus_20.html'" class="text-[14.5px] font-bold text-[#0055AA] cursor-pointer hover:underline block">20, 20-1</span></div>
                <div class="border-b border-[#ddd] p-3.5"><span onclick="location.href='bus_30.html'" class="text-[14.5px] font-bold text-[#0055AA] cursor-pointer hover:underline block">30, 30-1</span></div>
                
                <div class="border-r border-b border-[#ddd] p-3.5"><span onclick="location.href='bus_40.html'" class="text-[14.5px] font-bold text-[#0055AA] cursor-pointer hover:underline block">40, 40-1</span></div>
                <div class="border-r border-b border-[#ddd] p-3.5"><span onclick="location.href='bus_50.html'" class="text-[14.5px] font-bold text-[#0055AA] cursor-pointer hover:underline block">50, 50-1</span></div>
                <div class="border-b border-[#ddd] p-3.5"><span onclick="location.href='bus_60.html'" class="text-[14.5px] font-bold text-[#0055AA] cursor-pointer hover:underline block">60, 60-1</span></div>
                
                <div class="border-r border-[#ddd] p-3.5"><span onclick="location.href='bus_70.html'" class="text-[14.5px] font-bold text-[#0055AA] cursor-pointer hover:underline block">70, 70-1</span></div>
                <div class="border-r border-[#ddd] p-3.5"><span onclick="location.href='bus_80.html'" class="text-[14.5px] font-bold text-[#0055AA] cursor-pointer hover:underline block">80, 80-1</span></div>
                <div class="p-3.5"><span onclick="location.href='bus_90.html'" class="text-[14.5px] font-bold text-[#0055AA] cursor-pointer hover:underline block">90, 90-1</span></div>
            </div>
        </div>
        `;
    }
});