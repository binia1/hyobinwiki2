document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("korail-trains-nav-container");
    
    if (container) {
        container.innerHTML = `
        <div class="namu-nav-container border-2 border-[#005bac] bg-white mb-5 text-[0.85rem]">
            <div class="namu-nav-header bg-[#1c1d1f] text-white p-2 font-bold text-center flex justify-between items-center">
                <div class="flex-1"></div>
                <div class="flex flex-col items-center gap-1">
                    <div class="bg-white px-2 py-0.5 rounded inline-block">
                        <img src="이미지/코레일_로고.svg" alt="코레일 로고" style="height:20px; object-fit: contain;">
                    </div>
                    <a href="한국철도공사_전동차.html" class="text-[#005bac] font-bold text-lg bg-white px-2 py-0.5 rounded no-underline hover:underline">한국철도공사의 전동차</a>
                </div>
                <div class="flex-1 text-right"></div>
            </div>
            
            <!-- 자체 펼치기/접기 기능 -->
            <details open style="border: none; margin: 0;">
                <summary style="font-weight: bold; padding: 0.5em; cursor: pointer; background-color: #eee; list-style: none; display: flex; justify-content: center; align-items: center; font-size: 0.85em; color: #555; border-bottom: 1px solid #ddd;">[ 펼치기 · 접기 ]</summary>
                <div id="navTableContent" class="namu-nav-content block">
                    <table class="namu-nav-table w-full border-collapse">
                        <!-- 고속열차 -->
                        <tr class="border-b border-[#ccc]">
                            <th class="bg-[#003da5] text-white w-[100px] text-center font-bold border-r border-white py-2">고속열차</th>
                            <td class="p-2 leading-[1.8] text-left">
                                <span class="inline-block bg-[#003da5] text-white px-1.5 py-0.5 rounded text-xs font-bold mr-1">KTX</span>
                                <a href="KTX(차량).html" class="wiki-link text-[#0055AA]">100000호대</a>(<a href="KTX(차량)_현황.html" class="wiki-link text-[#0055AA]">현황</a>) &emsp;
                                <span class="inline-block bg-[#003da5] text-white px-1.5 py-0.5 rounded text-xs font-bold mr-1">KTX-산천</span>
                                <a href="KTX-산천.html" class="wiki-link text-[#0055AA]">110000호대</a>(<a href="KTX-산천_현황.html" class="wiki-link text-[#0055AA]">현황</a>) · 
                                <a href="KTX-산천.html" class="wiki-link text-[#0055AA]">140000호대</a>(<a href="KTX-산천_현황.html" class="wiki-link text-[#0055AA]">현황</a>) &emsp;
                                <span class="inline-block bg-[#003da5] text-white px-1.5 py-0.5 rounded text-xs font-bold mr-1">KTX-이음</span>
                                <a href="KTX-이음.html" class="wiki-link text-[#0055AA]">150000호대</a>(<a href="KTX-이음_현황.html" class="wiki-link text-[#0055AA]">현황</a>)<sup class="text-xs text-gray-500">도입중</sup> &emsp;
                                <span class="inline-block bg-[#003da5] text-white px-1.5 py-0.5 rounded text-xs font-bold mr-1">KTX-청룡</span>
                                <a href="KTX-청룡.html" class="wiki-link text-[#0055AA]">160000호대</a>(<a href="KTX-청룡_현황.html" class="wiki-link text-[#0055AA]">현황</a>)<sup class="text-xs text-gray-500">도입중</sup><br>
                                <span class="inline-block bg-[#4b2f48] text-white px-1.5 py-0.5 rounded text-xs font-bold mr-1">SRT</span>
                                <a href="KTX-산천.html" class="wiki-link text-[#0055AA]">120000호대</a>(<a href="KTX-산천_현황.html" class="wiki-link text-[#0055AA]">현황</a>) · 
                                <a href="KTX-산천.html" class="wiki-link text-[#0055AA]">130000호대</a>(<a href="KTX-산천_현황.html" class="wiki-link text-[#0055AA]">현황</a>) · 
                                <a href="KTX-청룡.html" class="wiki-link text-[#0055AA]">180000호대</a>(<a href="KTX-청룡_현황.html" class="wiki-link text-[#0055AA]">현황</a>)<sup class="text-xs text-gray-500">도입중</sup>
                            </td>
                        </tr>
                        <!-- 일반열차 -->
                        <tr class="border-b border-[#ccc]">
                            <th class="bg-[#005bac] text-white w-[100px] text-center font-bold border-r border-white py-2">일반열차</th>
                            <td class="p-2 leading-[1.8] text-left">
                                <span class="inline-block bg-[#3d99c2] text-white px-1.5 py-0.5 rounded text-xs font-bold mr-1">누리로</span>
                                <span class="inline-block bg-[#00a495] text-white px-1.5 py-0.5 rounded text-xs font-bold mr-1">동해산타열차<sub class="text-[0.6rem] ml-0.5">(관광)</sub></span>
                                <a href="누리로.html" class="wiki-link text-[#0055AA]">200000호대</a>(<a href="누리로_현황.html" class="wiki-link text-[#0055AA]">현황</a>) &emsp;
                                <span class="inline-block bg-[#c30e2f] text-white px-1.5 py-0.5 rounded text-xs font-bold mr-1">ITX-새마을</span>
                                <a href="ITX-새마을.html" class="wiki-link text-[#0055AA]">210000호대</a>(<a href="ITX-새마을_현황.html" class="wiki-link text-[#0055AA]">현황</a>) &emsp;
                                <span class="inline-block bg-[#c30e2f] text-white px-1.5 py-0.5 rounded text-xs font-bold mr-1">ITX-마음</span>
                                <a href="ITX-마음.html" class="wiki-link text-[#0055AA]">220000호대</a>(<a href="ITX-마음_현황.html" class="wiki-link text-[#0055AA]">현황</a>)<sup class="text-xs text-gray-500">도입중</sup> · 
                                <a href="ITX-마음.html" class="wiki-link text-[#0055AA]">230000호대</a>(<a href="ITX-마음_현황.html" class="wiki-link text-[#0055AA]">현황</a>)<sup class="text-xs text-gray-500">도입중</sup> &emsp;
                                <span class="inline-block bg-[#37b366] text-white px-1.5 py-0.5 rounded text-xs font-bold mr-1">ITX-청춘</span>
                                <a href="ITX-청춘.html" class="wiki-link text-[#0055AA]">368000호대</a>(<a href="ITX-청춘_현황.html" class="wiki-link text-[#0055AA]">현황</a>)
                            </td>
                        </tr>
                        <!-- 광역전철 -->
                        <tr class="border-b border-[#ccc]">
                            <th class="bg-[#005bac] text-white w-[100px] text-center font-bold border-r border-white py-2">광역전철</th>
                            <td class="p-2 leading-[1.8] text-left">
                                <span class="inline-flex justify-center items-center w-5 h-5 rounded-full bg-[#0052A4] text-white text-xs font-bold mr-1">1</span>
                                <a href="한국철도공사_31x000호대_전동차.html" class="wiki-link text-[#0055AA]">31x000호대</a>(<a href="한국철도공사_31x000호대_전동차_상세.html" class="wiki-link text-[#0055AA]">상세</a> · <a href="한국철도공사_31x000호대_전동차_사고.html" class="wiki-link text-[#0055AA]">사고</a> · <a href="한국철도공사_31x000호대_전동차_현황.html" class="wiki-link text-[#0055AA]">현황</a>) &emsp;
                                
                                <span class="inline-block bg-[#77C4A3] text-white px-2 py-0.5 rounded-full text-xs font-bold mr-1">경의·중앙</span>
                                <a href="한국철도공사_321000호대_전동차.html" class="wiki-link text-[#0055AA]">321000호대</a>(<a href="한국철도공사_321000호대_전동차_현황.html" class="wiki-link text-[#0055AA]">현황</a>) · 
                                <a href="한국철도공사_331000호대_전동차.html" class="wiki-link text-[#0055AA]">331000호대</a>(<a href="한국철도공사_331000호대_전동차_현황.html" class="wiki-link text-[#0055AA]">현황</a>) &emsp;
                                
                                <span class="inline-flex justify-center items-center w-5 h-5 rounded-full bg-[#EF7C1C] text-white text-xs font-bold mr-1">3</span>
                                <a href="한국철도공사_3000호대_전동차.html" class="wiki-link text-[#0055AA]">3000호대</a>(<a href="한국철도공사_3000호대_전동차_현황.html" class="wiki-link text-[#0055AA]">현황</a>) &emsp;
                                
                                <span class="inline-flex justify-center items-center w-5 h-5 rounded-full bg-[#00A4E3] text-white text-xs font-bold mr-1">4</span>
                                <a href="한국철도공사_341000호대_전동차.html" class="wiki-link text-[#0055AA]">341000호대</a>(<a href="한국철도공사_341000호대_전동차_상세.html" class="wiki-link text-[#0055AA]">상세</a> · <a href="한국철도공사_341000호대_전동차_현황.html" class="wiki-link text-[#0055AA]">현황</a>) &emsp;
                                
                                <span class="inline-block bg-[#fabe00] text-white px-2 py-0.5 rounded-full text-xs font-bold mr-1">수인·분당</span>
                                <a href="한국철도공사_351000호대_전동차.html" class="wiki-link text-[#0055AA]">351000호대</a>(<a href="한국철도공사_351000호대_전동차_상세.html" class="wiki-link text-[#0055AA]">상세</a> · <a href="한국철도공사_351000호대_전동차_현황.html" class="wiki-link text-[#0055AA]">현황</a>) <br>
                                
                                <span class="inline-block bg-[#178C72] text-white px-2 py-0.5 rounded-full text-xs font-bold mr-1">경춘</span>
                                <a href="한국철도공사_361000호대_전동차.html" class="wiki-link text-[#0055AA]">361000호대</a>(<a href="한국철도공사_361000호대_전동차_현황.html" class="wiki-link text-[#0055AA]">현황</a>) &emsp;
                                
                                <span class="inline-block bg-[#0054a6] text-white px-2 py-0.5 rounded-full text-xs font-bold mr-1">경강</span>
                                <a href="한국철도공사_371000호대_전동차.html" class="wiki-link text-[#0055AA]">371000호대</a>(<a href="한국철도공사_371000호대_전동차_현황.html" class="wiki-link text-[#0055AA]">현황</a>) &emsp;
                                
                                <span class="inline-block bg-[#0054a6] text-white px-2 py-0.5 rounded-full text-xs font-bold mr-1">동해</span>
                                <a href="한국철도공사_381000호대_전동차.html" class="wiki-link text-[#0055AA]">381000호대</a>(<a href="한국철도공사_381000호대_전동차_현황.html" class="wiki-link text-[#0055AA]">현황</a>) &emsp;
                                
                                <span class="inline-block bg-[#8FC31F] text-white px-2 py-0.5 rounded-full text-xs font-bold mr-1">서해</span>
                                <a href="한국철도공사_391000호대_전동차.html" class="wiki-link text-[#0055AA]">391000호대</a>(<a href="한국철도공사_391000호대_전동차_현황.html" class="wiki-link text-[#0055AA]">현황</a>) &emsp;
                                
                                <span class="inline-block bg-[#0054a6] text-white px-2 py-0.5 rounded-full text-xs font-bold mr-1">대경</span>
                                <a href="한국철도공사_392000호대_전동차.html" class="wiki-link text-[#0055AA]">392000호대</a>(<a href="한국철도공사_392000호대_전동차_현황.html" class="wiki-link text-[#0055AA]">현황</a>) &emsp;
                                
                                <span class="inline-block bg-[#aecc54] text-white px-2 py-0.5 rounded-full text-xs font-bold mr-1">충청권</span>
                                <a href="한국철도공사_393000호대_전동차.html" class="wiki-link text-[#0055AA]">393000호대</a>(<a href="한국철도공사_393000호대_전동차_현황.html" class="wiki-link text-[#0055AA]">현황</a>) <br>
                                
                                <span class="inline-block bg-[#0054a6] text-white px-2 py-0.5 rounded-full text-xs font-bold mr-1">빈주권</span>
                                <a href="한국철도공사_781000호대_전동차.html" class="wiki-link text-[#0055AA]">781000호대</a>(<a href="한국철도공사_781000호대_전동차_현황.html" class="wiki-link text-[#0055AA]">현황</a>) &emsp;
                                
                                <span class="inline-block bg-[#6677CC] text-white px-2 py-0.5 rounded-full text-xs font-bold mr-1">빈효</span>
                                <a href="한국철도공사_791000호대_전동차.html" class="wiki-link text-[#0055AA] font-bold">791000호대</a>(<a href="한국철도공사_791000호대_전동차_현황.html" class="wiki-link text-[#0055AA]">현황</a>)
                            </td>
                        </tr>
                        <!-- 도입 예정 -->
                        <tr class="border-b border-[#ccc]">
                            <th class="bg-[#005bac] text-white w-[100px] text-center font-bold border-r border-white py-2">도입 예정</th>
                            <td class="p-2 leading-[1.8] text-left">
                                <span class="inline-block bg-[#c30e2f] text-white px-1.5 py-0.5 rounded text-xs font-bold mr-1">ITX-마음</span>
                                <a href="ITX-마음.html" class="wiki-link text-[#0055AA]">240000호대</a>(<a href="ITX-마음_현황.html" class="wiki-link text-[#0055AA]">현황</a>) &emsp;
                                <span class="inline-block bg-[#234699] text-white px-2 py-0.5 rounded-full text-xs font-bold mr-1">GTX-B</span>
                                <a href="수도권_광역급행철도_B선.html" class="wiki-link text-[#0055AA]">제작 예정</a> &emsp;
                                <span class="inline-block bg-[#306E5B] text-white px-2 py-0.5 rounded-full text-xs font-bold mr-1">GTX-C</span>
                                <a href="수도권_광역급행철도_C선.html" class="wiki-link text-[#0055AA]">제작 예정</a> &emsp;
                                <span class="inline-block bg-[#797979] text-white px-2 py-0.5 rounded-full text-xs font-bold mr-1">동탄인덕원</span>
                                <a href="동탄인덕원선.html" class="wiki-link text-[#0055AA]">제작 예정</a> &emsp;
                                <span class="inline-block bg-[#003da5] text-white px-1.5 py-0.5 rounded text-xs font-bold mr-1">EMU-370</span>
                                <a href="HSEMU-370.html" class="wiki-link text-[#0055AA]">발주 예정</a> &emsp;
                                <span class="inline-block bg-[#234699] text-white px-2 py-0.5 rounded-full text-xs font-bold mr-1">대구산업</span>
                                <a href="대구산업선_광역전철.html" class="wiki-link text-[#0055AA]">발주 예정</a>
                            </td>
                        </tr>
                        <!-- 개번 전 -->
                        <tr class="border-b border-[#ccc]">
                            <th class="bg-[#147d80] text-[#fabe00] w-[100px] text-center font-bold border-r border-white py-2">개번 전</th>
                            <td class="p-2 leading-[1.8] text-left">
                                <span class="inline-flex justify-center items-center w-5 h-5 rounded-full bg-[#00A4E3] text-white text-xs font-bold mr-1">4</span>
                                <span class="inline-block bg-[#fabe00] text-white px-2 py-0.5 rounded-full text-xs font-bold mr-1">수인·분당</span>
                                <a href="한국철도공사_2030호대_전동차.html" class="wiki-link text-[#0055AA]">2030호대</a>(<a href="한국철도공사_2030호대_전동차_현황.html" class="wiki-link text-[#0055AA]">현황</a>) <br>
                                <span class="inline-flex justify-center items-center w-5 h-5 rounded-full bg-[#0052A4] text-white text-xs font-bold mr-1">1</span>
                                <span class="inline-block bg-[#77C4A3] text-white px-2 py-0.5 rounded-full text-xs font-bold mr-1">경의·중앙</span>
                                <a href="한국철도공사_5000호대_6000호대_전동차.html" class="wiki-link text-[#0055AA]">5000호대</a>(<a href="한국철도공사_5000호대_6000호대_전동차_현황.html" class="wiki-link text-[#0055AA]">현황</a>) · 
                                <a href="한국철도공사_5000호대_6000호대_전동차.html" class="wiki-link text-[#0055AA]">6000호대</a>(<a href="한국철도공사_5000호대_6000호대_전동차_현황.html" class="wiki-link text-[#0055AA]">현황</a>)
                            </td>
                        </tr>
                        <!-- 전량 퇴역 -->
                        <tr class="border-b border-[#ccc]">
                            <th class="bg-gray-500 text-white w-[100px] text-center font-bold border-r border-white py-2">전량 퇴역</th>
                            <td class="p-2 leading-[1.8] text-left text-gray-500">
                                <span class="inline-block bg-[#f55839] text-white px-1.5 py-0.5 rounded text-xs font-bold mr-1">무궁화호</span>
                                <span class="inline-block bg-[#147d80] text-[#fabe00] px-1.5 py-0.5 rounded text-xs font-bold mr-1">통일호</span>
                                <a href="EEC_전동차.html" class="wiki-link text-gray-500">9900호대</a>(<a href="EEC_전동차_현황.html" class="wiki-link text-gray-500">현황</a>)<sup class="text-[0.65rem]">(1980~2001)</sup> <br>
                                <span class="inline-flex justify-center items-center w-5 h-5 rounded-full bg-[#0052A4] text-white text-xs font-bold mr-1">1</span>
                                <a href="한국철도공사_1000호대_전동차.html" class="wiki-link text-gray-500">1000호대</a>(<a href="한국철도공사_1000호대_전동차_상세.html" class="wiki-link text-gray-500">상세</a> · <a href="한국철도공사_1000호대_전동차_현황.html" class="wiki-link text-gray-500">현황</a>)<sup class="text-[0.65rem]">(1974~2020)</sup> <br>
                                <span class="inline-flex justify-center items-center w-5 h-5 rounded-full bg-[#0052A4] text-white text-xs font-bold mr-1">1</span>
                                <a href="초저항.html" class="wiki-link text-gray-500">초저항</a><sup class="text-[0.65rem]">(1974~2014)</sup> <br>
                                <span class="inline-flex justify-center items-center w-5 h-5 rounded-full bg-[#EF7C1C] text-white text-xs font-bold mr-1">3</span>
                                <a href="한국철도공사_3000호대_전동차.html" class="wiki-link text-gray-500">1차분</a>(<a href="한국철도공사_3000호대_전동차_현황.html" class="wiki-link text-gray-500">현황</a>)<sup class="text-[0.65rem]">(1996~2024)</sup>
                            </td>
                        </tr>
                        <!-- Footer 링크 -->
                        <tr>
                            <td colspan="2" class="bg-[#1c1d1f] text-center p-3 leading-relaxed text-sm">
                                <a href="한국철도공사의_기관차.html" class="wiki-link text-[#005bac] font-bold hover:text-[#337fd6]">한국철도공사 소속 기관차</a> <span class="text-white mx-1">·</span> 
                                <a href="한국철도공사의_디젤동차.html" class="wiki-link text-[#005bac] font-bold hover:text-[#337fd6]">디젤동차</a> <span class="text-white mx-1">·</span> 
                                <a href="한국철도공사의_발전차.html" class="wiki-link text-[#005bac] font-bold hover:text-[#337fd6]">발전차</a>(<a href="발전차_현황.html" class="wiki-link text-[#005bac] hover:text-[#337fd6]">현황</a>)<br>
                                <a href="대한민국의_철도차량.html" class="wiki-link text-white font-normal hover:underline">다른 지역 전동차 보기</a>
                            </td>
                        </tr>
                    </table>
                </div>
            </details>
        </div>
        `;
    }
});