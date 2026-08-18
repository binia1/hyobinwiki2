document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("hyobin-branch-bus-nav-container");
    
    if (container) {
        container.innerHTML = `
        <div aria-label="시내버스 노선 둘러보기 틀" class="w-full border-2 border-[#37B484] rounded-[10px] bg-white mb-6 shadow-sm overflow-hidden mt-[14px] clear-both">
            <!-- 헤더 영역 -->
            <div class="bg-[#37B484] py-3 flex justify-center items-center">
                <div class="border border-white/50 inline-flex items-center px-4 py-1.5 shadow-sm rounded-sm" style="box-shadow: 0 0 0 1px rgba(255,255,255,0.5) inset;">
                    <img alt="효빈광역시" src="이미지/logo.webp" class="h-11 w-auto mr-3 brightness-0 invert" style="filter: brightness(0) invert(1);"/>
                    <div class="text-left text-white leading-none">
                        <div class="text-[13px] font-bold tracking-wide mb-[2px] opacity-90">효빈광역시</div>
                        <div class="text-[22px] font-black tracking-tight leading-tight">지선버스</div>
                    </div>
                </div>
            </div>
            
            <!-- 뱃지 영역 -->
            <div class="py-3 border-b border-[#ddd] flex flex-wrap justify-center gap-1.5 bg-white px-2">
                <span onclick="location.href='급행버스.html'" class="bg-[#D81C2F] text-white text-[13px] px-2 py-1 rounded font-black cursor-pointer hover:opacity-80 transition-opacity" title="급행버스">급행</span>
                <span onclick="location.href='간선버스.html'" class="bg-[#01B7ED] text-white text-[13px] px-2 py-1 rounded font-black cursor-pointer hover:opacity-80 transition-opacity" title="간선버스">간선</span>
                <span onclick="location.href='순환버스.html'" class="bg-[#E7D600] text-[#111] text-[13px] px-2 py-1 rounded font-black cursor-pointer hover:opacity-80 transition-opacity" title="순환버스">순환</span>
                <span onclick="location.href='지선버스.html'" class="bg-[#37B484] text-white text-[13px] px-2 py-1 rounded font-black cursor-pointer hover:opacity-80 transition-opacity ring-1 ring-black/10" title="지선버스">지선</span>
                <span onclick="location.href='광역버스.html'" class="bg-[#485EC6] text-white text-[13px] px-2 py-1 rounded font-black cursor-pointer hover:opacity-80 transition-opacity" title="광역버스">광역</span>
                <span onclick="location.href='좌석버스.html'" class="bg-[#FF5800] text-white text-[13px] px-2 py-1 rounded font-black cursor-pointer hover:opacity-80 transition-opacity" title="좌석버스">좌석</span>
                <span onclick="location.href='마을버스.html'" class="bg-[#A664A0] text-white text-[13px] px-2 py-1 rounded font-black cursor-pointer hover:opacity-80 transition-opacity" title="마을버스">마을</span>
                <span onclick="location.href='공항버스.html'" class="bg-[#84C36E] text-white text-[13px] px-2 py-1 rounded font-black cursor-pointer hover:opacity-80 transition-opacity" title="공항버스">공항</span>
                <span onclick="location.href='시티투어버스.html'" class="bg-[#7777AA] text-white text-[13px] px-2 py-1 rounded font-black cursor-pointer hover:opacity-80 transition-opacity" title="시티투어버스">투어</span>
            </div>

            <!-- 노선 번호 영역 -->
            <details open class="group">
                <summary class="cursor-pointer select-none font-black text-[13px] text-center py-2.5 text-[#333] hover:bg-gray-50 list-none bg-white" style="display: block;">
                    <div class="flex items-center justify-center gap-1">
                        <span>[ 펼치기 · 접기 ]</span>
                    </div>
                </summary>
                
                <div class="bg-gray-50 text-center font-bold text-[#333] py-1.5 text-[13.5px] border-t border-b border-[#ddd]">지선버스 노선 번호 (전체)</div>
                
                <div class="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 border-l border-[#ddd] text-center w-full bg-white">
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_111.html'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">111</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_112.html'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">112</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_121.html'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">121</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_123.html'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">123</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_131.html'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">131</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_132.html'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">132</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_141.html'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">141</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_143.html'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">143</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_150.html#151'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">151</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_150.html#154'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">154</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_161.html'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">161</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_171.html'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">171</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_172.html'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">172</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_173.html'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">173</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_181.html'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">181</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_190.html#191'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">191</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_190.html#192'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">192</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_190.html#193'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">193</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_190.html#194'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">194</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_219.html'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">219</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_220.html#221'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">221</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_220.html#222'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">222</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_230.html#231'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">231</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_230.html#232'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">232</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_241.html'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">241</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_242.html'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">242</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_250.html#251'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">251</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_250.html#258'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">258</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_260.html#261'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">261</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_260.html#262'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">262</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_271.html'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">271</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_281.html'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">281</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_290.html#291'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">291</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_290.html#292'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">292</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_330.html#331'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">331</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_330.html#334'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">334</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_341.html'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">341</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_351.html'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">351</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_361.html'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">361</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_371.html'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">371</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_381.html'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">381</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_391.html'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">391</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_441.html'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">441</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_451.html'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">451</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_461.html'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">461</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_470.html#471'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">471</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_470.html#472'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">472</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_481.html'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">481</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_490.html#491'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">491</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_490.html#492'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">492</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_522.html'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">522</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_550.html#551'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">551</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_550.html#552'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">552</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_561.html'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">561</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_571.html'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">571</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_580.html#581'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">581</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_580.html#582'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">582</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_590.html#591'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">591</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_590.html#592'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">592</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_612.html'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">612</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_632.html'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">632</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_661.html'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">661</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_671.html'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">671</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_672.html'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">672</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_681.html'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">681</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_682.html'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">682</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_691.html'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">691</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_692.html'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">692</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_752.html'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">752</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_753.html'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">753</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_771.html'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">771</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_781.html'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">781</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_791.html'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">791</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_792.html'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">792</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_793.html'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">793</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_842.html'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">842</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_881.html'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">881</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_891.html'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">891</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_892.html'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">892</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_991.html'" class="text-[14px] font-bold text-[#37B484] cursor-pointer hover:underline block">991</span></div>
                </div>
            </details>
        </div>
        `;
    }
});