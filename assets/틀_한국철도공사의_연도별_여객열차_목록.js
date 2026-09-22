// 파일 경로: assets/틀_한국철도공사의_연도별_여객열차_목록.js

(function() {
    const templateHTML = `
    <div class="wiki-table-wrap my-4 max-w-3xl mx-auto border border-gray-300 bg-white shadow-sm overflow-hidden">
        <table class="w-full border-collapse text-sm font-['Noto_Sans_KR']">
            <tbody>
                <!-- 상단 헤더 -->
                <tr>
                    <th class="border-b border-gray-300 p-2 bg-white font-bold text-center">
                        <a href="한국철도공사.html" class="flex items-center justify-center gap-1 hover:underline text-[#005BAC]">
                            <span class="font-black italic text-lg tracking-tighter">KORAIL</span>
                            <span>한국철도공사의 연도별 여객열차 목록</span>
                        </a>
                    </th>
                </tr>
                <tr>
                    <td class="border-b border-gray-300 p-1 bg-white text-xs text-gray-700 cursor-pointer hover:bg-gray-100 text-center">
                        [ 펼치기 · 접기 ]
                    </td>
                </tr>

                <!-- 연도별 타임라인 영역 -->
                <tr>
                    <td class="p-0">
                        <div class="flex flex-col w-full text-xs font-medium border-b border-gray-300">
                            
                            <!-- 눈금축 (Axis) -->
                            <div class="relative w-full h-7 bg-gray-500 overflow-hidden">
                                <!-- 1년 단위 작은 눈금 패턴 -->
                                <div class="absolute bottom-0 left-0 w-full h-1.5" style="background: repeating-linear-gradient(90deg, transparent, transparent calc(100% / 56 - 1px), rgba(255,255,255,0.7) calc(100% / 56 - 1px), rgba(255,255,255,0.7) calc(100% / 56));"></div>
                                <!-- 5년 단위 연도 라벨 -->
                                <div class="absolute text-white text-[10px] bottom-1.5" style="left: 1.78%; transform: translateX(-50%);">1970</div>
                                <div class="absolute text-white text-[10px] bottom-1.5" style="left: 10.71%; transform: translateX(-50%);">1975</div>
                                <div class="absolute text-white text-[10px] bottom-1.5" style="left: 19.64%; transform: translateX(-50%);">1980</div>
                                <div class="absolute text-white text-[10px] bottom-1.5" style="left: 28.57%; transform: translateX(-50%);">1985</div>
                                <div class="absolute text-white text-[10px] bottom-1.5" style="left: 37.50%; transform: translateX(-50%);">1990</div>
                                <div class="absolute text-white text-[10px] bottom-1.5" style="left: 46.42%; transform: translateX(-50%);">1995</div>
                                <div class="absolute text-white text-[10px] bottom-1.5" style="left: 55.35%; transform: translateX(-50%);">2000</div>
                                <div class="absolute text-white text-[10px] bottom-1.5" style="left: 64.28%; transform: translateX(-50%);">2005</div>
                                <div class="absolute text-white text-[10px] bottom-1.5" style="left: 73.21%; transform: translateX(-50%);">2010</div>
                                <div class="absolute text-white text-[10px] bottom-1.5" style="left: 82.14%; transform: translateX(-50%);">2015</div>
                                <div class="absolute text-white text-[10px] bottom-1.5" style="left: 91.07%; transform: translateX(-50%);">2020</div>
                                <div class="absolute text-white text-[10px] bottom-1.5" style="left: 99%; transform: translateX(-100%);">2025</div>
                            </div>

                            <!-- 각 열차별 바 (Rows) -->
                            <!-- 통일호 -->
                            <div class="relative w-full h-[26px] bg-[#888888] border-b border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                                <div class="absolute top-0 bottom-0 left-0 bg-[#137A7F]" style="width: 62.9%;"></div>
                                <div class="absolute inset-0 flex items-center justify-start px-2 text-white z-10 font-bold whitespace-nowrap">
                                    <a href="통일호.html" class="hover:underline">통일호</a>(前 <a href="특급열차.html" class="hover:underline font-normal">특급열차</a>) 1955. 8. 15.~2004. 3. 31.
                                </div>
                            </div>
                            
                            <!-- 비둘기호 -->
                            <div class="relative w-full h-[26px] bg-[#888888] border-b border-white/20">
                                <div class="absolute top-0 bottom-0 left-0 bg-[#1F2E3D]" style="width: 56.9%;"></div>
                                <div class="absolute inset-0 flex items-center justify-start px-2 text-white z-10 font-bold whitespace-nowrap">
                                    <a href="비둘기호.html" class="hover:underline">비둘기호</a>(前 <a href="보통열차.html" class="hover:underline font-normal">보통열차</a>, <a href="보급열차.html" class="hover:underline font-normal">보급열차</a>, <a href="준급열차.html" class="hover:underline font-normal">준급열차</a>) 1967. 9. 1.~2000. 11. 14.
                                </div>
                            </div>
                            
                            <!-- 새마을호 -->
                            <div class="relative w-full h-[26px] bg-[#888888] border-b border-white/20">
                                <div class="absolute top-0 bottom-0 left-0 right-0 bg-[#5288F5]"></div>
                                <div class="absolute inset-0 flex items-center justify-end px-2 text-white z-10 font-bold whitespace-nowrap">
                                    <a href="새마을호.html" class="hover:underline">새마을호</a>(前 <a href="관광호.html" class="hover:underline font-normal">관광호</a>) 1969. 2. 10.~
                                </div>
                            </div>
                            
                            <!-- 무궁화호 -->
                            <div class="relative w-full h-[26px] bg-[#888888] border-b border-white/20">
                                <div class="absolute top-0 bottom-0 right-0 bg-[#F34D35]" style="left: 15.4%;"></div>
                                <div class="absolute inset-0 flex items-center justify-end px-2 text-white z-10 font-bold whitespace-nowrap">
                                    <a href="무궁화호.html" class="hover:underline">무궁화호</a>(前 <a href="우등열차.html" class="hover:underline font-normal">우등열차</a>) 1977. 8. 13.~
                                </div>
                            </div>
                            
                            <!-- KTX -->
                            <div class="relative w-full h-[26px] bg-[#888888] border-b border-white/20">
                                <div class="absolute top-0 bottom-0 right-0 bg-[#003da5]" style="left: 62.9%;"></div>
                                <div class="absolute inset-0 flex items-center justify-end px-2 text-white z-10 font-bold whitespace-nowrap">
                                    <a href="KTX.html" class="hover:underline">KTX</a> 2004. 4. 1.~
                                </div>
                            </div>
                            
                            <!-- 통근열차 -->
                            <div class="relative w-full h-[26px] bg-[#888888] border-b border-white/20">
                                <div class="absolute top-0 bottom-0 bg-[#7BBA7B]" style="left: 62.9%; right: 1.9%;"></div>
                                <div class="absolute inset-0 flex items-center justify-end px-2 text-white z-10 font-bold whitespace-nowrap">
                                    <a href="통근열차.html" class="hover:underline">통근열차</a> 2004. 4. 1.~2023. 12. 18.
                                </div>
                            </div>
                            
                            <!-- 누리로 -->
                            <div class="relative w-full h-[26px] bg-[#888888] border-b border-white/20">
                                <div class="absolute top-0 bottom-0 right-0 bg-[#2C95A7]" style="left: 72.1%;"></div>
                                <div class="absolute inset-0 flex items-center justify-end px-2 text-white z-10 font-bold whitespace-nowrap">
                                    <a href="누리로.html" class="hover:underline">누리로</a> 2009. 6. 1.~
                                </div>
                            </div>
                            
                            <!-- KTX-산천 -->
                            <div class="relative w-full h-[26px] bg-[#888888] border-b border-white/20">
                                <div class="absolute top-0 bottom-0 right-0 bg-[#003da5]" style="left: 73.5%;"></div>
                                <div class="absolute inset-0 flex items-center justify-end px-2 text-white z-10 font-bold whitespace-nowrap">
                                    <a href="KTX-산천.html" class="hover:underline">KTX-산천</a> 2010. 3. 2.~
                                </div>
                            </div>
                            
                            <!-- ITX-청춘 -->
                            <div class="relative w-full h-[26px] bg-[#888888] border-b border-white/20">
                                <div class="absolute top-0 bottom-0 right-0 bg-[#4CAF50]" style="left: 77.1%;"></div>
                                <div class="absolute inset-0 flex items-center justify-end px-2 text-white z-10 font-bold whitespace-nowrap">
                                    <a href="ITX-청춘.html" class="hover:underline">ITX-청춘</a> 2012. 2. 28.~
                                </div>
                            </div>
                            
                            <!-- ITX-새마을 -->
                            <div class="relative w-full h-[26px] bg-[#888888] border-b border-white/20">
                                <div class="absolute top-0 bottom-0 right-0 bg-[#C60C30]" style="left: 81.0%;"></div>
                                <div class="absolute inset-0 flex items-center justify-end px-2 text-white z-10 font-bold whitespace-nowrap">
                                    <a href="ITX-새마을.html" class="hover:underline">ITX-새마을</a> 2014. 5. 12.~
                                </div>
                            </div>
                            
                            <!-- KTX-이음 -->
                            <div class="relative w-full h-[26px] bg-[#888888] border-b border-white/20">
                                <div class="absolute top-0 bottom-0 right-0 bg-[#003da5]" style="left: 92.9%;"></div>
                                <div class="absolute inset-0 flex items-center justify-end px-2 text-white z-10 font-bold whitespace-nowrap">
                                    <a href="KTX-이음.html" class="hover:underline">KTX-이음</a> 2021. 1. 5.~
                                </div>
                            </div>
                            
                            <!-- ITX-마음 -->
                            <div class="relative w-full h-[26px] bg-[#888888] border-b border-white/20">
                                <div class="absolute top-0 bottom-0 right-0 bg-[#C60C30]" style="left: 97.6%;"></div>
                                <div class="absolute inset-0 flex items-center justify-end px-2 text-white z-10 font-bold whitespace-nowrap">
                                    <a href="ITX-마음.html" class="hover:underline">ITX-마음</a> 2023. 9. 1.~
                                </div>
                            </div>
                            
                            <!-- KTX-청룡 -->
                            <div class="relative w-full h-[26px] bg-[#888888]">
                                <div class="absolute top-0 bottom-0 right-0 bg-[#003da5]" style="left: 98.8%;"></div>
                                <div class="absolute inset-0 flex items-center justify-end px-2 text-white z-10 font-bold whitespace-nowrap">
                                    <a href="KTX-청룡.html" class="hover:underline">KTX-청룡</a> 2024. 5. 1.~
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>

                <!-- 하단 주석 -->
                <tr>
                    <td class="p-2 bg-white text-xs text-black text-center font-medium leading-relaxed">
                        <span class="bg-[#888888] text-white px-1 font-bold">회색 바탕</span> : 미운행 기간<br>
                        이 표에는 1969년 1월 1일부터 2025년 1월 1일까지의 목록을 작성함
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    `;

    const scriptTag = document.currentScript;
    if (scriptTag) {
        scriptTag.insertAdjacentHTML('beforebegin', templateHTML);
    }
})();