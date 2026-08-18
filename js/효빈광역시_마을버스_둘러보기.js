document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("hyobin-village-bus-nav-container");
    
    if (container) {
        container.innerHTML = `
        <div aria-label="시내버스 노선 둘러보기 틀" class="w-full border-2 border-[#A664A0] rounded-[10px] bg-white mb-6 shadow-sm overflow-hidden mt-[14px] clear-both">
            <!-- 헤더 영역 -->
            <div class="bg-[#A664A0] py-3 flex justify-center items-center">
                <div class="border border-white/50 inline-flex items-center px-4 py-1.5 shadow-sm rounded-sm" style="box-shadow: 0 0 0 1px rgba(255,255,255,0.5) inset;">
                    <img alt="효빈광역시" src="이미지/logo.webp" class="h-11 w-auto mr-3 brightness-0 invert" style="filter: brightness(0) invert(1);"/>
                    <div class="text-left text-white leading-none">
                        <div class="text-[13px] font-bold tracking-wide mb-[2px] opacity-90">효빈광역시</div>
                        <div class="text-[22px] font-black tracking-tight leading-tight">마을버스</div>
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
                <span onclick="location.href='마을버스.html'" class="bg-[#A664A0] text-white text-[13px] px-2 py-1 rounded font-black cursor-pointer hover:opacity-80 transition-opacity ring-1 ring-black/10" title="마을버스">마을</span>
                <span onclick="location.href='공항버스.html'" class="bg-[#84C36E] text-white text-[13px] px-2 py-1 rounded font-black cursor-pointer hover:opacity-80 transition-opacity" title="공항버스">공항</span>
                <span onclick="location.href='시티투어버스.html'" class="bg-[#7777AA] text-white text-[13px] px-2 py-1 rounded font-black cursor-pointer hover:opacity-80 transition-opacity" title="시티투어버스">투어</span>
            </div>

            <!-- 노선 영역 (반응형 4~8칸 그리드 적용) -->
            <details open class="group">
                <summary class="cursor-pointer select-none font-black text-[13px] text-center py-2.5 text-[#333] hover:bg-gray-50 list-none bg-white" style="display: block;">
                    <div class="flex items-center justify-center gap-1">
                        <span>[ 펼치기 · 접기 ]</span>
                    </div>
                </summary>
                
                <div class="bg-gray-50 text-center font-bold text-[#333] py-1.5 text-[13.5px] border-t border-b border-[#ddd]">마을버스 노선 번호 (전체)</div>
                
                <div class="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 border-l border-[#ddd] text-center w-full bg-white">
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='도향01.html'" class="text-[14px] font-bold text-[#A664A0] cursor-pointer hover:underline block">도향01</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='도향02.html'" class="text-[14px] font-bold text-[#A664A0] cursor-pointer hover:underline block">도향02</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='도향03.html'" class="text-[14px] font-bold text-[#A664A0] cursor-pointer hover:underline block">도향03</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='칠채01.html'" class="text-[14px] font-bold text-[#A664A0] cursor-pointer hover:underline block">칠채01</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='광정01.html'" class="text-[14px] font-bold text-[#A664A0] cursor-pointer hover:underline block">광정01</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='곽산01.html'" class="text-[14px] font-bold text-[#A664A0] cursor-pointer hover:underline block">곽산01</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='뇌전01.html'" class="text-[14px] font-bold text-[#A664A0] cursor-pointer hover:underline block">뇌전01</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='채산01.html'" class="text-[14px] font-bold text-[#A664A0] cursor-pointer hover:underline block">채산01</span></div>
                    
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='채산02.html'" class="text-[14px] font-bold text-[#A664A0] cursor-pointer hover:underline block">채산02</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='내항01.html'" class="text-[14px] font-bold text-[#A664A0] cursor-pointer hover:underline block">내항01</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='악부01.html'" class="text-[14px] font-bold text-[#A664A0] cursor-pointer hover:underline block">악부01</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='정근01.html'" class="text-[14px] font-bold text-[#A664A0] cursor-pointer hover:underline block">정근01</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='정근02.html'" class="text-[14px] font-bold text-[#A664A0] cursor-pointer hover:underline block">정근02</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='소원01.html'" class="text-[14px] font-bold text-[#A664A0] cursor-pointer hover:underline block">소원01</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='소원02.html'" class="text-[14px] font-bold text-[#A664A0] cursor-pointer hover:underline block">소원02</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='흑택01.html'" class="text-[14px] font-bold text-[#A664A0] cursor-pointer hover:underline block">흑택01</span></div>
                    
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='야진01.html'" class="text-[14px] font-bold text-[#A664A0] cursor-pointer hover:underline block">야진01</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='야진02.html'" class="text-[14px] font-bold text-[#A664A0] cursor-pointer hover:underline block">야진02</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='탄성01.html'" class="text-[14px] font-bold text-[#A664A0] cursor-pointer hover:underline block">탄성01</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='탄성02.html'" class="text-[14px] font-bold text-[#A664A0] cursor-pointer hover:underline block">탄성02</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='서목01.html'" class="text-[14px] font-bold text-[#A664A0] cursor-pointer hover:underline block">서목01</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='서목02.html'" class="text-[14px] font-bold text-[#A664A0] cursor-pointer hover:underline block">서목02</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='고해01.html'" class="text-[14px] font-bold text-[#A664A0] cursor-pointer hover:underline block">고해01</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='고해02.html'" class="text-[14px] font-bold text-[#A664A0] cursor-pointer hover:underline block">고해02</span></div>
                    
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='도변01.html'" class="text-[14px] font-bold text-[#A664A0] cursor-pointer hover:underline block">도변01</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"></div>
                </div>
            </details>
        </div>
        `;
    }
});