document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("minjoo-hyobin-nav-container");
    
    if (container) {
        container.innerHTML = `
        <div style="margin-bottom: 20px; font-family: 'Noto Sans KR', sans-serif;">
            <div style="border: 2px solid #004EA2; border-radius: 2px; overflow: hidden; background-color: white;">
                
                <!-- 상단 헤더 (파랑 - 보라 - 청록 3분할) -->
                <div style="display: flex; width: 100%; min-height: 55px;">
                    <div style="flex: 1; background-color: #004EA2;"></div>
                    <div style="flex: 1.5; background-color: #56188C; display: flex; align-items: center; justify-content: center; padding: 12px 5px;">
                        <!-- '더불어'를 '민' 글자 바로 좌측 상단에 겹치게 배치 -->
                        <a class="wiki-link" href="더불어민주당.html" style="color:white; font-weight:900; font-size: 1.15rem; text-decoration: none; letter-spacing: -0.5px; position: relative;">
                            <span style="position: absolute; top: -12px; left: 0px; font-size: 0.65rem; font-style: italic; font-weight: 700; font-family: 'Noto Sans KR', sans-serif;">더불어</span>
                            민주당 효빈광역시당 지역위원장
                        </a>
                    </div>
                    <div style="flex: 1; background-color: #007A5E;"></div>
                </div>
                
                <!-- 펼치기/접기 바 (보라색) -->
                <details open style="margin: 0;">
                    <summary style="background-color: #56188C; color: white; text-align: center; padding: 6px; cursor: pointer; font-size: 0.9rem; font-weight: bold; list-style: none; border-top: 1px solid rgba(255,255,255,0.3);">
                        [ 펼치기 · 접기 ]
                    </summary>
                    
                    <div style="padding: 0;">
                        <table style="width: 100%; text-align: center; border-collapse: collapse; table-layout: fixed;">
                            
                            <!-- 시당위원장 (전체 너비 4칸 차지) -->
                            <tr>
                                <td colspan="4" style="background-color: #004EA2; padding: 8px; border: 1px solid #ddd; font-weight: bold; color: white;">시당위원장</td>
                            </tr>
                            <tr>
                                <td colspan="4" style="padding: 10px 8px; border: 1px solid #ddd; background-color: #FFFF99;">
                                    <a href="김성민.html" style="color: #004EA2; text-decoration: none; font-weight: bold;" class="hover:underline">김성민</a>
                                </td>
                            </tr>
                            
                            <!-- 1열 -->
                            <tr>
                                <td style="background-color: #004EA2; padding: 8px; border: 1px solid #ddd; font-weight: bold; width: 25%;"><a href="중구-동구.html" style="color: white; text-decoration: none;">중구·동구</a></td>
                                <td style="background-color: #004EA2; padding: 8px; border: 1px solid #ddd; font-weight: bold; width: 25%;"><a href="서구(선거구).html" style="color: white; text-decoration: none;">서구</a></td>
                                <td style="background-color: #004EA2; padding: 8px; border: 1px solid #ddd; font-weight: bold; width: 25%;"><a href="남구_갑(효빈).html" style="color: white; text-decoration: none;">남구 갑</a></td>
                                <td style="background-color: #004EA2; padding: 8px; border: 1px solid #ddd; font-weight: bold; width: 25%;"><a href="남구_을(효빈).html" style="color: white; text-decoration: none;">남구 을</a></td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 8px; border: 1px solid #ddd; background-color: #FFFF99;"><a href="김성민.html" style="color: #004EA2; text-decoration: none; font-weight: bold;" class="hover:underline">김성민</a></td>
                                <td style="padding: 10px 8px; border: 1px solid #ddd; background-color: #FFFF99;"><a href="지선진.html" style="color: #004EA2; text-decoration: none; font-weight: bold;" class="hover:underline">지선진</a></td>
                                <td style="padding: 10px 8px; border: 1px solid #ddd; background-color: #FFFF99;"><a href="고정민.html" style="color: #004EA2; text-decoration: none; font-weight: bold;" class="hover:underline">고정민</a></td>
                                <td style="padding: 10px 8px; border: 1px solid #ddd; background-color: #FFFFFF;"><a href="오전희.html" style="color: #004EA2; text-decoration: none; font-weight: bold;" class="hover:underline">오전희</a></td>
                            </tr>
                            
                            <!-- 2열 -->
                            <tr>
                                <td style="background-color: #004EA2; padding: 8px; border: 1px solid #ddd; font-weight: bold;"><a href="북구_갑(효빈).html" style="color: white; text-decoration: none;">북구 갑</a></td>
                                <td style="background-color: #004EA2; padding: 8px; border: 1px solid #ddd; font-weight: bold;"><a href="북구_을(효빈).html" style="color: white; text-decoration: none;">북구 을</a></td>
                                <td style="background-color: #004EA2; padding: 8px; border: 1px solid #ddd; font-weight: bold;"><a href="북구_병(효빈).html" style="color: white; text-decoration: none;">북구 병</a></td>
                                <td style="background-color: #004EA2; padding: 8px; border: 1px solid #ddd; font-weight: bold;"><a href="안천구_갑.html" style="color: white; text-decoration: none;">안천 갑</a></td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 8px; border: 1px solid #ddd; background-color: #FFFF99;"><a href="조상현.html" style="color: #004EA2; text-decoration: none; font-weight: bold;" class="hover:underline">조상현</a></td>
                                <td style="padding: 10px 8px; border: 1px solid #ddd; background-color: #FFFF99;"><a href="원성준.html" style="color: #004EA2; text-decoration: none; font-weight: bold;" class="hover:underline">원성준</a></td>
                                <td style="padding: 10px 8px; border: 1px solid #ddd; background-color: #FFFF99;"><a href="이찬대.html" style="color: #004EA2; text-decoration: none; font-weight: bold;" class="hover:underline">이찬대</a></td>
                                <td style="padding: 10px 8px; border: 1px solid #ddd; background-color: #FFFF99;"><a href="고선규.html" style="color: #004EA2; text-decoration: none; font-weight: bold;" class="hover:underline">고선규</a></td>
                            </tr>
                            
                            <!-- 3열 -->
                            <tr>
                                <td style="background-color: #004EA2; padding: 8px; border: 1px solid #ddd; font-weight: bold;"><a href="안천구_을.html" style="color: white; text-decoration: none;">안천 을</a></td>
                                <td style="background-color: #004EA2; padding: 8px; border: 1px solid #ddd; font-weight: bold;"><a href="청엽구_갑.html" style="color: white; text-decoration: none;">청엽 갑</a></td>
                                <td style="background-color: #004EA2; padding: 8px; border: 1px solid #ddd; font-weight: bold;"><a href="청엽구_을.html" style="color: white; text-decoration: none;">청엽 을</a></td>
                                <td style="background-color: #004EA2; padding: 8px; border: 1px solid #ddd; font-weight: bold;"><a href="창전구_갑.html" style="color: white; text-decoration: none;">창전 갑</a></td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 8px; border: 1px solid #ddd; background-color: #FFFF99;"><a href="신진영.html" style="color: #004EA2; text-decoration: none; font-weight: bold;" class="hover:underline">신진영</a></td>
                                <td style="padding: 10px 8px; border: 1px solid #ddd; background-color: #FFFF99;"><a href="신수인.html" style="color: #004EA2; text-decoration: none; font-weight: bold;" class="hover:underline">신수인</a></td>
                                <td style="padding: 10px 8px; border: 1px solid #ddd; background-color: #FFFF99;"><a href="소판권.html" style="color: #004EA2; text-decoration: none; font-weight: bold;" class="hover:underline">소판권</a></td>
                                <td style="padding: 10px 8px; border: 1px solid #ddd; background-color: #FFFF99;"><a href="추산령.html" style="color: #004EA2; text-decoration: none; font-weight: bold;" class="hover:underline">추산령</a></td>
                            </tr>
                            
                            <!-- 4열 (더불어민주당 로고 포함) -->
                            <tr>
                                <td style="background-color: #004EA2; padding: 8px; border: 1px solid #ddd; font-weight: bold;"><a href="창전구_을.html" style="color: white; text-decoration: none;">창전 을</a></td>
                                <td style="background-color: #004EA2; padding: 8px; border: 1px solid #ddd; font-weight: bold;"><a href="탄성군(선거구).html" style="color: white; text-decoration: none;">탄성</a></td>
                                <td colspan="2" rowspan="2" style="background-color: #004EA2; border: 1px solid #ddd; vertical-align: middle;">
                                    <a href="더불어민주당.html" style="color: white; text-decoration: none; position: relative; display: inline-block; font-weight: 900; font-size: 2.2rem; letter-spacing: -1px; margin-top: 15px;">
                                        <span style="position: absolute; top: -16px; left: 2px; font-size: 1.1rem; font-style: italic; font-weight: 700;">더불어</span>
                                        민주당
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 8px; border: 1px solid #ddd; background-color: #FFFF99;"><a href="노상현.html" style="color: #004EA2; text-decoration: none; font-weight: bold;" class="hover:underline">노상현</a></td>
                                <td style="padding: 10px 8px; border: 1px solid #ddd; background-color: #FFFF99;"><a href="박청권.html" style="color: #004EA2; text-decoration: none; font-weight: bold;" class="hover:underline">박청권</a></td>
                            </tr>
                        </table>

                        <!-- 하단 푸터 (타 정당 및 지역) -->
                        <div style="background-color: #004EA2; padding: 12px; text-align: center; line-height: 1.6; border-top: 1px solid rgba(255,255,255,0.2);">
                            <div style="color: white; font-size: 0.85rem; font-weight: bold; margin-bottom: 4px;">
                                국민의힘 · 조국혁신당 · 진보당 · 개혁신당 · 새미래민주당 · 정의당
                            </div>
                            <div style="color: white; font-size: 0.8rem;">
                                서울 · 전남광주 · 부산 · 대구 · 인천 · 울산 · 세종 · 경기 · 강원 · 충북 · 충남 · 전북 · 경북 · 경남 · 제주 · 효빈 · 덕북 · 덕남
                            </div>
                        </div>
                    </div>
                </details>
            </div>
        </div>
        `;
    }
});