document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("korean-peninsula-regions-nav-container");

    if (container) {
        // 직접 작성해주신 원본 HTML 코드 (수정 절대 없음)
        container.innerHTML = `
        <div class="mb-4 border border-[#0084c9] shadow-sm rounded overflow-hidden" style="font-size: 0.85em;">
        <div class="bg-[#0084c9] text-white font-bold p-2 text-center text-lg shadow-sm">
                        🗺️ <a class="text-white hover:underline" href="한반도.html">한반도</a>의 <a class="text-white hover:underline" href="한반도_지역_구분.html">지역 구분</a>
        </div>
        <div class="bg-[#1f2023]">
        <div class="cursor-pointer text-center p-2 text-xs font-bold text-gray-300 hover:text-white transition-colors select-none border-b border-gray-700" onclick="toggleNav('korea-table-content', 'korea-table-label')">
                            [ <span id="korea-table-label">표로 보기</span> ]
                        </div>
        <div id="korea-table-content" style="max-height: 2000px; overflow: hidden; transition: max-height 0.3s ease-out; background-color: var(--wiki-bg);">
        <table class="w-full text-center m-0 border-collapse border-0">
        <tbody>
        <tr>
        <th class="w-[10%] bg-[#1c1d1f] text-[#C19B76]" rowspan="3">북부</th>
        <td class="w-[2%] p-0 bg-[#A3B1C6] border-none"></td>
        <th class="w-[18%] bg-[#1c1d1f] text-[#C19B76]"><a class="wiki-link text-[#C19B76]" href="관북.html">관북</a></th>
        <td class="text-left bg-[#1c1d1f] text-gray-300">
        <a class="wiki-link text-[#FF9E7B]" href="라선시.html">라선</a> · <a class="wiki-link text-[#FF9E7B]" href="함경북도.html">함북</a> · <a class="wiki-link text-[#FF9E7B]" href="함경남도.html">함남</a> · <a class="wiki-link text-[#FF9E7B]" href="량강도.html">량강</a>
        </td>
        </tr>
        <tr>
        <td class="p-0 bg-[#A7C6C0] border-none"></td>
        <th class="bg-[#1c1d1f] text-[#C19B76]"><a class="wiki-link text-[#C19B76]" href="관서.html">관서</a></th>
        <td class="text-left bg-[#1c1d1f] text-gray-300">
        <a class="wiki-link text-[#FF9E7B]" href="평양시.html">평양</a> · <a class="wiki-link text-[#FF9E7B]" href="남포시.html">남포</a> · <a class="wiki-link text-[#FF9E7B]" href="평안북도.html">평북</a> · <a class="wiki-link text-[#FF9E7B]" href="평안남도.html">평남</a> · <a class="wiki-link text-[#FF9E7B]" href="자강도.html">자강</a>
        </td>
        </tr>
        <tr>
        <td class="p-0 bg-[#EFDA84] border-none"></td>
        <th class="bg-[#1c1d1f] text-[#C19B76]"><a class="wiki-link text-[#C19B76]" href="해서.html">해서</a></th>
        <td class="text-left bg-[#1c1d1f] text-gray-300">
        <a class="wiki-link text-[#FF9E7B]" href="개성시.html">개성</a> · <a class="wiki-link text-[#FF9E7B]" href="황해북도.html">황북</a> · <a class="wiki-link text-[#FF9E7B]" href="황해남도.html">황남</a>
        </td>
        </tr>
        <tr>
        <th class="bg-[#1c1d1f] text-[#C19B76]" rowspan="3">중부</th>
        <td class="p-0 border-none" style="background: linear-gradient(to bottom, #EDBECC 50%, #E8AFC2 50%);"></td>
        <th class="bg-[#1c1d1f] text-[#C19B76]">
        <a class="wiki-link text-[#FF9E7B]" href="강원특별자치도.html">강원<span class="text-xs text-[#C19B76] ml-1">(관동)</span></a><br/>
        <span class="text-[0.7rem] text-gray-400">( <a class="wiki-link text-gray-400" href="영동.html">영동</a> · <a class="wiki-link text-gray-400" href="영서.html">영서</a> )</span>
        </th>
        <td class="text-left bg-[#1c1d1f] text-gray-300">
        <a class="wiki-link text-[#FF9E7B]" href="강원특별자치도.html">강원</a>
        </td>
        </tr>
        <tr>
        <td class="p-0 bg-[#666666] border-none"></td>
        <th class="bg-[#1c1d1f] text-[#C19B76]"><a class="wiki-link text-[#FF9E7B]" href="수도권.html">수도권<span class="text-xs text-[#C19B76] ml-1">(경기)</span></a></th>
        <td class="text-left bg-[#1c1d1f] text-gray-300">
        <a class="wiki-link text-[#FF9E7B]" href="서울특별시.html">서울</a> · <a class="wiki-link text-[#FF9E7B]" href="인천광역시.html">인천</a> · <a class="wiki-link text-[#FF9E7B]" href="경기도.html">경기</a>
        </td>
        </tr>
        <tr>
        <td class="p-0 bg-[#B2B09A] border-none"></td>
        <th class="bg-[#1c1d1f] text-[#C19B76]"><a class="wiki-link text-[#FF9E7B]" href="충청도.html">충청<span class="text-xs text-[#C19B76] ml-1">(호서)</span></a></th>
        <td class="text-left bg-[#1c1d1f] text-gray-300">
        <a class="wiki-link text-[#FF9E7B]" href="대전광역시.html">대전</a> · <a class="wiki-link text-[#FF9E7B]" href="세종특별자치시.html">세종</a> · <a class="wiki-link text-[#FF9E7B]" href="충청북도.html">충북</a> · <a class="wiki-link text-[#FF9E7B]" href="충청남도.html">충남</a>
        </td>
        </tr>
        <tr>
        <th class="bg-[#1c1d1f] text-[#C19B76]" rowspan="4">남부</th>
        <td class="p-0 bg-[#97BDC6] border-none"></td>
        <th class="bg-[#1c1d1f] text-[#C19B76]"><a class="wiki-link text-[#C19B76]" href="영남.html">영남</a></th>
        <td class="text-left bg-[#1c1d1f] text-gray-300">
        <a class="wiki-link text-[#FF9E7B]" href="부산광역시.html">부산</a> · <a class="wiki-link text-[#FF9E7B]" href="대구광역시.html">대구</a> · <a class="wiki-link text-[#FF9E7B]" href="울산광역시.html">울산</a> · <a class="wiki-link text-[#FF9E7B]" href="경상북도.html">경북</a> · <a class="wiki-link text-[#FF9E7B]" href="경상남도.html">경남</a>
        </td>
        </tr>
        <tr>
        <td class="p-0 bg-[#B4C9A6] border-none"></td>
        <th class="bg-[#1c1d1f] text-[#C19B76]"><a class="wiki-link text-[#C19B76]" href="호남.html">호남</a></th>
        <td class="text-left bg-[#1c1d1f] text-gray-300">
        <a class="wiki-link text-[#FF9E7B]" href="광주광역시.html">광주</a> · <a class="wiki-link text-[#FF9E7B]" href="전북특별자치도.html">전북</a> · <a class="wiki-link text-[#FF9E7B]" href="전라남도.html">전남</a>
        </td>
        </tr>
        <tr>
        <td class="p-0 bg-[#E2B89C] border-none"></td>
        <th class="bg-[#1c1d1f] text-[#C19B76]"><a class="wiki-link text-[#C19B76]" href="제주도.html">제주</a></th>
        <td class="text-left bg-[#1c1d1f] text-gray-300">
        <a class="wiki-link text-[#FF9E7B]" href="제주특별자치도.html">제주</a>
        </td>
        </tr>
        <!-- 덕빈도 추가 -->
        <tr>
        <td class="p-0 bg-[#9B59B6] border-none"></td>
        <th class="bg-[#1c1d1f] text-[#C19B76]"><a class="wiki-link text-[#B57EDC]" href="덕빈도.html">덕빈</a></th>
        <td class="text-left bg-[#1c1d1f] text-gray-300">
        <a class="wiki-link text-[#FF9E7B]" href="효빈광역시.html">효빈</a> · <a class="wiki-link text-[#FF9E7B]" href="덕빈북도.html">덕북</a> · <a class="wiki-link text-[#FF9E7B]" href="덕빈남도.html">덕남</a>
        </td>
        </tr>
        <tr class="bg-[#1c1d1f] text-[0.75rem] text-left text-gray-400">
        <td class="text-left px-4 py-2 leading-relaxed border-t border-gray-700" colspan="4">
                                            ▪ 근거: &lt;대한민국 국가지도집 I 2019&gt; 국토교통부 국토지리정보원 발간<br/>
                                            ▪ 강원·충청: 각각 관동·호서라는 이칭이 있음<br/>
                                            ▪ 해서·충청: 전통적으로 각각 중부와 남부 지방으로 분류되기도 함<br/>
                                            ▪ 개성: 본래 경기도 소속이나 분단으로 인해 황해도 소속이 됨<br/>
        <span class="font-bold text-[#B57EDC]">▪ 덕빈: 과거 한반도 서남부에 존재했던 거대 행정구역(덕빈도)의 관할 구역이었으며, 효빈·덕북·덕남을 아우름.</span>
        </td>
        </tr>
        </tbody>
        </table>
        </div>
        <div class="cursor-pointer text-center p-2 text-xs font-bold text-gray-300 hover:text-white transition-colors select-none border-t border-b border-gray-700" onclick="toggleNav('korea-map-content', 'korea-map-label')">
                            [ <span id="korea-map-label">지도로 보기</span> ]
                        </div>
        <div class="text-center p-4" id="korea-map-content" style="max-height: 2000px; overflow: hidden; transition: max-height 0.3s ease-out; background-color: #1f2023;">
        <img alt="한반도 지방" class="inline-block w-full max-w-[600px] rounded" src="이미지/한반도_지역_1.webp"/>
        </div>
        </div>
        </div>
        `;
    }
});