document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("hyobin-metro-characters-nav-container");
    
    if (container) {
        container.innerHTML = `
        <details class="nw-box" open="" style="border-color:#555588;">
            <summary class="outline-none" style="background-color:#555588; color: white;">
                <a class="text-white text-lg hover:underline" href="효빈교통공사.html"><span class="font-bold">효빈교통공사 캐릭터들</span></a>
            </summary>
            <table class="nw-tbl">
                <tr>
                    <th class="w-[10%] nw-th-col text-[#555588]" rowspan="4">등<br/>장<br/>인<br/>물</th>
                    <td class="font-bold text-white w-[15%]" style="background-color: #0077DD;"><a class="nw-link hover:underline" href="1호선.html">1호선</a></td>
                    <td class="font-bold text-white w-[15%]" style="background-color: #00CCAA;"><a class="nw-link hover:underline" href="2호선.html">2호선</a></td>
                    <td class="font-bold text-[#333] w-[15%]" style="background-color: #FFCC11;"><a class="nw-link hover:underline" href="3호선.html">3호선</a></td>
                    <td class="font-bold text-white w-[15%]" style="background-color: #FF5522;"><a class="nw-link hover:underline" href="4호선.html">4호선</a></td>
                    <td class="font-bold text-white w-[15%]" style="background-color: #EE0022;"><a class="nw-link hover:underline" href="5호선.html">5호선</a></td>
                    <td class="font-bold text-[#333] w-[15%]" style="background-color: #33AAFF;"><a class="nw-link hover:underline" href="창전선.html">창전선</a></td>
                </tr>
                <tr>
                    <td><a class="nw-link hover:underline" href="고나미.html"><img class="nw-img" src="이미지/고나미 로고.webp"/>고나미</a></td>
                    <td><a class="nw-link hover:underline" href="하루빈.html"><img class="nw-img" src="이미지/하루빈 로고.webp"/>하루빈</a></td>
                    <td><a class="nw-link hover:underline" href="박라미.html"><img class="nw-img" src="이미지/박라미 로고.webp"/>박라미</a></td>
                    <td><a class="nw-link hover:underline" href="다로나.html"><img class="nw-img" src="이미지/다로나 로고.webp"/>다로나</a></td>
                    <td><a class="nw-link hover:underline" href="미소하.html"><img class="nw-img" src="이미지/미소하 로고.webp"/>미소하</a></td>
                    <td><a class="nw-link hover:underline" href="심세이.html"><img class="nw-img" src="이미지/심세이_로고.webp"/>심세이</a></td>
                </tr>
                <tr>
                    <td class="font-bold text-white" style="background-color: #881188;"><a class="nw-link hover:underline" href="6호선.html">6호선</a></td>
                    <td class="font-bold text-[#333]" colspan="2" style="background-color: #FF8899;"><a class="nw-link hover:underline" href="7호선.html">7호선</a></td>
                    <td class="font-bold text-white" style="background-color: #9856FF;"><a class="nw-link hover:underline" href="8호선.html">8호선</a></td>
                    <td class="font-bold text-white" colspan="2" style="background-color: #6677CC;"><a class="nw-link hover:underline" href="빈효선.html">빈효선*</a></td>
                </tr>
                <tr>
                    <td><a class="nw-link hover:underline" href="라세나.html"><img class="nw-img" src="이미지/라세나 로고.webp"/>라세나</a></td>
                    <td><a class="nw-link hover:underline" href="임세정.html"><img class="nw-img" src="이미지/임세정 로고.webp"/>임세정</a></td>
                    <td><a class="nw-link hover:underline" href="임세하.html"><img class="nw-img" src="이미지/임세하 로고.webp"/>임세하</a></td>
                    <td><a class="nw-link hover:underline" href="유리아.html"><img class="nw-img" src="이미지/유리아 로고.webp"/>유리아</a></td>
                    <td colspan="2"><a class="nw-link hover:underline" href="전노아.html"><img class="nw-img" src="이미지/전노아 로고.webp"/>전노아</a></td>
                </tr>
                <tr>
                    <td class="text-left text-xs text-gray-600 bg-gray-50 px-3 py-2 border-t border-gray-300" colspan="7" style="text-align: left;">
                        * <strong>빈효선</strong>: 노선 운영은 효빈교통공사가 아닌 코레일(한국철도공사)이 담당하지만, 지역 인프라 특성상 같이 묶여서 캐릭터 사업으로 진행됨.<br/>
                        * <strong>창전선</strong> (본 문서 캐릭터 소속) 등 신규 노선은 개통 및 캐릭터 정식 데뷔 시점에 맞춰 틀에 추가될 예정입니다. (현재 심세이 정식 등재 완료)
                    </td>
                </tr>
            </table>
        </details>
        `;
    }
});