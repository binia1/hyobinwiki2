document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("deokbinnamdo-bus-terminals-nav-container");
    
    if (container) {
        container.innerHTML = `
        <style>
            /* 외부 환경에 영향받지 않는 틀 전용 독립 CSS */
            .dn-bus-table { width: 100%; border-collapse: collapse; border: 1px solid #ccc; table-layout: fixed; margin: 0; font-family: 'Noto Sans KR', sans-serif; }
            .dn-bus-table th, .dn-bus-table td { border: 1px solid #ccc; }
            .dn-bus-table th { padding: 10px 4px; font-weight: bold; text-align: center; font-size: 1rem; }
            .dn-bus-table td { padding: 16px 8px; text-align: center; vertical-align: top; font-size: 0.9rem; line-height: 2.0; background-color: #ffffff; color: #000; }
            .dn-bus-link { color: #0022AA; text-decoration: none; font-weight: normal; }
            .dn-bus-link:hover { text-decoration: underline; }
        </style>

        <details class="nav-template" open style="border: 1px solid #ccc; margin: 20px 0; background-color: #fff; font-family: 'Noto Sans KR', sans-serif;">
            <summary style="background-color: #335566; color: white; padding: 0; font-weight: bold; cursor: pointer; text-align: center; list-style: none;">
                <!-- 타이틀 영역 -->
                <div style="padding: 14px; font-size: 1.3rem; display: flex; align-items: center; justify-content: center; gap: 12px;">
                    <img onerror="this.style.display='none'" src="이미지/덕빈남도_로고.webp" style="max-height: 32px; width: auto;" alt="Logo"/>
                    <span style="font-weight: 900; text-shadow: 1px 1px 3px rgba(0,0,0,0.5);">덕빈남도 버스 터미널</span>
                </div>
                <!-- 펼치기/접기 버튼 영역 -->
                <div style="background-color: #26404d; color: white; padding: 4px; font-size: 0.85rem; border-bottom: 2px solid #fff;">
                    [ 펼치기 · 접기 ]
                </div>
            </summary>
            
            <div class="nav-template-content overflow-x-auto" style="padding: 0;">
                <table class="dn-bus-table">
                    <tbody>
                        <!-- 1행 헤더 -->
                        <tr>
                            <th style="background-color: #ff9ea9; color: #000;">덕주시</th>
                            <th style="background-color: #bb0033; color: #fff;">낙주시</th>
                            <th style="background-color: #FFF442; color: #000;">방산시</th>
                            <th style="background-color: #74F466; color: #000;">비천시</th>
                        </tr>
                        <!-- 1행 내용 -->
                        <tr>
                            <td>
                                <a href="덕주복합버스터미널.html" class="dn-bus-link">덕주복합</a> · 
                                <a href="원명터미널.html" class="dn-bus-link">원명</a> · 
                                <a href="화진정류장.html" class="dn-bus-link">화진정류장</a> · 
                                <a href="조전정류장.html" class="dn-bus-link">조전정류장</a>
                            </td>
                            <td>
                                <a href="낙주고속시외버스터미널.html" class="dn-bus-link">낙주고속시외</a> · 
                                <a href="진적터미널.html" class="dn-bus-link">진적</a> · 
                                <a href="길산정류장.html" class="dn-bus-link">길산정류장</a> · 
                                <a href="토마정류장.html" class="dn-bus-link">토마정류장</a>
                            </td>
                            <td>
                                <a href="방산고속시외버스터미널.html" class="dn-bus-link">방산고속시외</a> · 
                                <a href="서중터미널.html" class="dn-bus-link">서중</a> · 
                                <a href="동공정류장.html" class="dn-bus-link">동공정류장</a> · 
                                <a href="석원정류장.html" class="dn-bus-link">석원정류장</a> · 
                                <a href="약원정류장.html" class="dn-bus-link">약원정류장</a>
                            </td>
                            <td>
                                <a href="비천공용터미널.html" class="dn-bus-link">비천공용</a> · 
                                <a href="벽산정류장.html" class="dn-bus-link">벽산정류장</a> · 
                                <a href="소육정류장.html" class="dn-bus-link">소육정류장</a>
                            </td>
                        </tr>

                        <!-- 2행 헤더 -->
                        <tr>
                            <th style="background-color: #FF6E90; color: #fff;">매성시</th>
                            <th style="background-color: #ff3b72; color: #fff;">하정시</th>
                            <th style="background-color: #ff99be; color: #000;">마진시</th>
                            <th style="background-color: #bbff64; color: #000;">운진군</th>
                        </tr>
                        <!-- 2행 내용 -->
                        <tr>
                            <td>
                                <a href="매성고속시외버스터미널.html" class="dn-bus-link">매성고속시외</a>
                            </td>
                            <td>
                                <a href="하정시외터미널.html" class="dn-bus-link">하정시외</a> · 
                                <a href="별당정류장.html" class="dn-bus-link">별당정류장</a> · 
                                <a href="구주정류장.html" class="dn-bus-link">구주정류장</a>
                            </td>
                            <td>
                                <a href="마진공용버스터미널.html" class="dn-bus-link">마진공용</a> · 
                                <a href="천대터미널.html" class="dn-bus-link">천대</a> · 
                                <a href="유록정류장.html" class="dn-bus-link">유록정류장</a> · 
                                <a href="상정정류장.html" class="dn-bus-link">상정정류장</a>
                            </td>
                            <td>
                                <a href="운진시외터미널.html" class="dn-bus-link">운진시외</a> · 
                                <a href="운남정류장.html" class="dn-bus-link">운남정류장</a> · 
                                <a href="사내정류장.html" class="dn-bus-link">사내정류장</a> · 
                                <a href="산인정류장.html" class="dn-bus-link">산인정류장</a>
                            </td>
                        </tr>

                        <!-- 3행 헤더 -->
                        <tr>
                            <th style="background-color: #A0FFF9; color: #000;">매산군</th>
                            <th style="background-color: #0000A0; color: #fff;">석창군</th>
                            <th style="background-color: #FF3535; color: #fff;">분주군</th>
                            <th style="background-color: #4cd2e2; color: #000;">인곡군</th>
                        </tr>
                        <!-- 3행 내용 -->
                        <tr>
                            <td>
                                <a href="대현시외종합터미널.html" class="dn-bus-link">대현시외종합</a> · 
                                <a href="이율터미널.html" class="dn-bus-link">이율</a>
                            </td>
                            <td>
                                <a href="석창종합터미널.html" class="dn-bus-link">석창종합</a> · 
                                <a href="읍악정류장.html" class="dn-bus-link">읍악정류장</a> · 
                                <a href="명성정류장.html" class="dn-bus-link">명성정류장</a> · 
                                <a href="대흥정류장.html" class="dn-bus-link">대흥정류장</a>
                            </td>
                            <td>
                                <a href="분주공용터미널.html" class="dn-bus-link">분주공용</a> · 
                                <a href="대자공용터미널.html" class="dn-bus-link">대자공용</a>
                            </td>
                            <td>
                                <a href="인곡공용터미널.html" class="dn-bus-link">인곡공용</a> · 
                                <a href="시오정류장.html" class="dn-bus-link">시오정류장</a>
                            </td>
                        </tr>

                        <!-- 4행 헤더 -->
                        <tr>
                            <th style="background-color: #FF51C4; color: #fff;">곡천군</th>
                            <th style="background-color: #e49dfd; color: #000;">관수군</th>
                            <th style="background-color: #00aabb; color: #fff;">원안군</th>
                            <th style="background-color: #e3ba3a; color: #000;">두원군</th>
                        </tr>
                        <!-- 4행 내용 -->
                        <tr>
                            <td>
                                <a href="곡천공용버스터미널.html" class="dn-bus-link">곡천공용</a> · 
                                <a href="북동정류장.html" class="dn-bus-link">북동정류장</a> · 
                                <a href="하북정류장.html" class="dn-bus-link">하북정류장</a>
                            </td>
                            <td>
                                <a href="관수공용터미널.html" class="dn-bus-link">관수공용</a> · 
                                <a href="북원터미널.html" class="dn-bus-link">북원</a>
                            </td>
                            <td>
                                <a href="원안버스터미널.html" class="dn-bus-link">원안</a> · 
                                <a href="개색버스터미널.html" class="dn-bus-link">개색</a> · 
                                <a href="상능터미널.html" class="dn-bus-link">상능</a>
                            </td>
                            <td>
                                <a href="두원공용터미널.html" class="dn-bus-link">두원공용</a> · 
                                <a href="총선정류장.html" class="dn-bus-link">총선정류장</a> · 
                                <a href="승린정류장.html" class="dn-bus-link">승린정류장</a>
                            </td>
                        </tr>

                        <!-- 5행 헤더 -->
                        <tr>
                            <th style="background-color: #B2FFDD; color: #000;">고포군</th>
                            <th colspan="3" style="background-color: #f3f4f6; border-bottom: none;"></th>
                        </tr>
                        <!-- 5행 내용 -->
                        <tr>
                            <td>
                                <a href="고포버스터미널.html" class="dn-bus-link">고포</a>
                            </td>
                            <td colspan="3" style="background-color: #f3f4f6; border-top: none;"></td>
                        </tr>

                        <!-- 하단 공통 정보 -->
                        <tr>
                            <td colspan="4" style="background-color: #f2f5f7; border-top: 2px solid #335566; padding: 16px; font-size: 0.8rem; text-align: center; line-height: 1.6;">
                                <strong>시외버스 · 고속버스가 정차하는 경우만 표기</strong><br>
                                시내버스 · 농어촌버스만 정차하는 곳은 표기하지 않음. <span style="color: #6b7280;">(하차)</span>는 하차만 가능한 경우<br>
                                <div style="margin-top: 8px;">
                                    <a href="서울.html" class="dn-bus-link">서울</a> · 
                                    <a href="부산.html" class="dn-bus-link">부산</a> · 
                                    <a href="인천.html" class="dn-bus-link">인천</a> · 
                                    <a href="대구.html" class="dn-bus-link">대구</a> · 
                                    <a href="대전.html" class="dn-bus-link">대전</a> · 
                                    <a href="광주.html" class="dn-bus-link">광주</a> · 
                                    <a href="울산.html" class="dn-bus-link">울산</a> · 
                                    <a href="경기.html" class="dn-bus-link">경기</a> · 
                                    <a href="강원.html" class="dn-bus-link">강원</a> · 
                                    <a href="충북.html" class="dn-bus-link">충북</a> · 
                                    <a href="충남.html" class="dn-bus-link">충남</a> · 
                                    <a href="전북.html" class="dn-bus-link">전북</a> · 
                                    <a href="전남.html" class="dn-bus-link">전남</a> · 
                                    <a href="경북.html" class="dn-bus-link">경북</a> · 
                                    <a href="경남.html" class="dn-bus-link">경남</a> · 
                                    <a href="제주.html" class="dn-bus-link">제주</a> · 
                                    <a href="세종.html" class="dn-bus-link">세종</a> · 
                                    <a href="효빈.html" class="dn-bus-link">효빈</a> · 
                                    <a href="덕북.html" class="dn-bus-link">덕북</a>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </details>
        `;
    }
});