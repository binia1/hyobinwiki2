document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("hyobin-mainline-bus-nav-container");
    
    if (container) {
        container.innerHTML = `
        <div aria-label="시내버스 노선 둘러보기 틀" class="w-full border-2 border-[#01B7ED] rounded-[10px] bg-white mb-6 shadow-sm overflow-hidden mt-[14px] clear-both">
            
            <!-- 헤더 영역 -->
            <div class="bg-[#01B7ED] py-3 flex justify-center items-center">
                <div class="border border-white/50 inline-flex items-center px-4 py-1.5 shadow-sm rounded-sm" style="box-shadow: 0 0 0 1px rgba(255,255,255,0.5) inset;">
                    <img alt="효빈광역시" src="이미지/logo.webp" class="h-11 w-auto mr-3 brightness-0 invert" style="filter: brightness(0) invert(1);"/>
                    <div class="text-left text-white leading-none">
                        <div class="text-[13px] font-bold tracking-wide mb-[2px] opacity-90">효빈광역시</div>
                        <div class="text-[22px] font-black tracking-tight leading-tight">간선버스</div>
                    </div>
                </div>
            </div>
            
            <!-- 뱃지 영역 -->
            <div class="py-3 border-b border-[#ddd] flex flex-wrap justify-center gap-1.5 bg-white px-2">
                <span onclick="location.href='급행버스.html'" class="bg-[#D81C2F] text-white text-[13px] px-2 py-1 rounded font-black cursor-pointer hover:opacity-80 transition-opacity" title="급행버스">급행</span>
                <span onclick="location.href='간선버스.html'" class="bg-[#01B7ED] text-white text-[13px] px-2 py-1 rounded font-black cursor-pointer hover:opacity-80 transition-opacity ring-1 ring-black/10" title="간선버스">간선</span>
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
                <summary class="cursor-pointer select-none font-black text-[13px] text-center py-2.5 text-[#333] hover:bg-gray-50 list-none bg-white" style="display: block;">
                    <div class="flex items-center justify-center gap-1">
                        <span>[ 펼치기 · 접기 ]</span>
                    </div>
                </summary>
                
                <div class="bg-gray-50 text-center font-bold text-[#333] py-1.5 text-[13.5px] border-t border-b border-[#ddd]">간선버스 노선 번호 (전체)</div>
                
                <div class="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 border-l border-[#ddd] text-center w-full bg-white">
                    <!-- 10번대 -->
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_11.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">11</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_11.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">11-1</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_12.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">12</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_13.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">13</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_14.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">14</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_15.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">15</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_16.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">16</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_17.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">17</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_18.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">18</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_19.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">19</span></div>
                    
                    <!-- 20번대 -->
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_12.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">21</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_22.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">22</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_22.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">22-1</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_23.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">23</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_24.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">24</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_25.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">25</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_26.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">26</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_27.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">27</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_28.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">28</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_29.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">29</span></div>
                    
                    <!-- 30번대 -->
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_13.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">31</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_23.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">32</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_33.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">33</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_33.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">33-1</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_34.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">34</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_35.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">35</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_36.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">36</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_37.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">37</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_38.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">38</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_39.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">39</span></div>
                    
                    <!-- 40번대 -->
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_14.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">41</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_24.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">42</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_34.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">43</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_45.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">45</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_46.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">46</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_47.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">47</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_48.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">48</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_49.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">49</span></div>
                    
                    <!-- 50번대 -->
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_15.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">51</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_25.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">52</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_35.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">53</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_45.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">54</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_56.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">56</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_57.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">57</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_58.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">58</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_59.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">59</span></div>
                    
                    <!-- 60번대 -->
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_16.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">61</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_26.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">62</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_36.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">63</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_46.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">64</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_56.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">65</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_66.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">66</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_66.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">66-1</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_67.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">67</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_68.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">68</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_69.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">69</span></div>
                    
                    <!-- 70번대 -->
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_17.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">71</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_27.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">72</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_37.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">73</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_47.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">74</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_57.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">75</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_67.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">76</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_77.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">77</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_77.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">77-1</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_78.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">78</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_79.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">79</span></div>
                    
                    <!-- 80번대 -->
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_18.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">81</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_28.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">82</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_38.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">83</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_48.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">84</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_58.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">85</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_68.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">86</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_78.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">87</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_88.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">88</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_88.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">88-1</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_89.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">89</span></div>
                    
                    <!-- 90번대 -->
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_19.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">91</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_29.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">92</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_39.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">93</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_49.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">94</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_59.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">95</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_69.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">96</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_79.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">97</span></div>
                    <div class="border-r border-b border-[#ddd] p-2.5"><span onclick="location.href='bus_89.html'" class="text-[14px] font-bold text-[#0055AA] cursor-pointer hover:underline block">98</span></div>
                </div>
            </details>
        </div>
        `;
    }
});