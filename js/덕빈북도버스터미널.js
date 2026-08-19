document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("deokbinbukdo-bus-terminals-nav-container");
    
    if (container) {
        container.innerHTML = `
        <style>
            /* 외부 환경에 영향받지 않는 틀 전용 독립 CSS */
            .db-bus-table { width: 100%; border-collapse: collapse; border: 1px solid #ccc; table-layout: fixed; margin: 0; font-family: 'Noto Sans KR', sans-serif; }
            .db-bus-table th, .db-bus-table td { border: 1px solid #ccc; }
            .db-bus-table th { padding: 10px 4px; font-weight: bold; text-align: center; font-size: 1rem; }
            .db-bus-table td { padding: 16px 8px; text-align: center; vertical-align: top; font-size: 0.9rem; line-height: 2.0; background-color: #ffffff; color: #000; }
            .db-bus-link { color: #0022AA; text-decoration: none; font-weight: normal; }
            .db-bus-link:hover { text-decoration: underline; }
            .db-bus-link-bold { color: #0062cc; text-decoration: none; font-weight: bold; }
            .db-bus-link-bold:hover { text-decoration: underline; }
        </style>

        <details class="nav-template" open style="border: 1px solid #ccc; margin: 20px 0; background-color: #fff; font-family: 'Noto Sans KR', sans-serif;">
            <summary style="background-color: #4AD898; color: white; padding: 0; font-weight: bold; cursor: pointer; text-align: center; list-style: none;">
                <!-- 타이틀 영역 -->
                <div style="padding: 14px; font-size: 1.3rem; display: flex; align-items: center; justify-content: center; gap: 12px;">
                    <img onerror="this.style.display='none'" src="이미지/덕북로고흰색.webp" style="max-height: 32px; width: auto;" alt="Logo"/>
                    <span style="font-weight: 900; text-shadow: 1px 1px 3px rgba(0,0,0,0.2);">덕빈북도 버스 터미널</span>
                </div>
                <!-- 펼치기/접기 버튼 영역 -->
                <div style="background-color: #2b9968; color: white; padding: 4px; font-size: 0.85rem; border-bottom: 2px solid #fff;">
                    [ 펼치기 · 접기 ]
                </div>
            </summary>
            
            <div class="nav-template-content overflow-x-auto" style="padding: 0;">
                <table class="db-bus-table">
                    <tbody>
                        <!-- 1행 헤더 -->
                        <tr>
                            <th style="background-color: #ffeeaa; color: #000;">빈주시</th>
                            <th style="background-color: #8B4993; color: #fff;">천주시</th>
                            <th style="background-color: #37B484; color: #fff;">서해시</th>
                            <th style="background-color: #F8C8C4; color: #000;">약산시</th>
                        </tr>
                        <!-- 1행 내용 -->
                        <tr>
                            <td>
                                <a href="빈주종합버스터미널.html" class="db-bus-link">빈주종합</a> · 
                                <a href="장기역환승정류장.html" class="db-bus-link">장기역환승</a> · 
                                <a href="덕빈북도청정류장.html" class="db-bus-link">덕빈북도청</a> · 
                                <a href="상만역정류장.html" class="db-bus-link">상만역</a> · 
                                <a href="고전정류장.html" class="db-bus-link">고전</a> · 
                                <a href="빈주대정류장.html" class="db-bus-link">빈주대</a>
                            </td>
                            <td>
                                <a href="천주시외고속버스터미널.html" class="db-bus-link">천주시외고속</a> · 
                                <a href="인자터미널.html" class="db-bus-link">인자</a> · 
                                <a href="청선시외버스터미널.html" class="db-bus-link">청선시외</a> · 
                                <a href="궁하아이정류장.html" class="db-bus-link">궁하아이</a> · 
                                <a href="천주시청정류장.html" class="db-bus-link">천주시청</a>
                            </td>
                            <td>
                                <a href="서해종합버스터미널.html" class="db-bus-link">서해종합</a> · 
                                <a href="문진정류장.html" class="db-bus-link">문진</a> · 
                                <a href="원변정류장.html" class="db-bus-link">원변</a>
                            </td>
                            <td>
                                <a href="약산종합버스터미널.html" class="db-bus-link">약산종합</a> · 
                                <a href="화소터미널.html" class="db-bus-link">화소</a> · 
                                <a href="원강터미널.html" class="db-bus-link">원강</a>
                            </td>
                        </tr>

                        <!-- 2행 헤더 -->
                        <tr>
                            <th style="background-color: #ffc94a; color: #000;">강주시</th>
                            <th style="background-color: #ED7D95; color: #fff;">계성시</th>
                            <th style="background-color: #E7D600; color: #000;">군천시</th>
                            <th style="background-color: #9CA5B9; color: #000;">서진시</th>
                        </tr>
                        <!-- 2행 내용 -->
                        <tr>
                            <td>
                                <a href="강주시외고속버스터미널.html" class="db-bus-link">강주시외고속</a> · 
                                <a href="청성정류장.html" class="db-bus-link">청성</a> · 
                                <a href="풍원정류장.html" class="db-bus-link">풍원</a>
                            </td>
                            <td>
                                <a href="계성고속시외버스터미널.html" class="db-bus-link">계성고속시외</a>
                            </td>
                            <td>
                                <a href="군천종합버스터미널.html" class="db-bus-link">군천종합</a> · 
                                <a href="한동정류장.html" class="db-bus-link">한동</a> · 
                                <a href="신득정류장.html" class="db-bus-link">신득</a> · 
                                <a href="애음정류장.html" class="db-bus-link">애음</a>
                            </td>
                            <td>
                                <a href="서진시외버스터미널.html" class="db-bus-link">서진시외</a> · 
                                <a href="서진고속버스터미널.html" class="db-bus-link">서진고속</a>
                            </td>
                        </tr>

                        <!-- 3행 헤더 -->
                        <tr>
                            <th style="background-color: #FF7F27; color: #fff;">전산시</th>
                            <th style="background-color: #485EC6; color: #fff;">낭원군</th>
                            <th style="background-color: #FF5800; color: #fff;">덕현군</th>
                            <th style="background-color: #D81C2F; color: #fff;">반양군</th>
                        </tr>
                        <!-- 3행 내용 -->
                        <tr>
                            <td>
                                <a href="전산공용버스터미널.html" class="db-bus-link">전산공용</a> · 
                                <a href="해진정류장.html" class="db-bus-link">해진</a>
                            </td>
                            <td>
                                <a href="낭원터미널.html" class="db-bus-link">낭원</a> · 
                                <a href="판주터미널.html" class="db-bus-link">판주</a> · 
                                <a href="전포터미널.html" class="db-bus-link">전포</a>
                            </td>
                            <td>
                                <a href="덕현종합버스터미널.html" class="db-bus-link">덕현종합</a> · 
                                <a href="화원터미널.html" class="db-bus-link">화원</a> · 
                                <a href="흑성터미널.html" class="db-bus-link">흑성</a> · 
                                <a href="부진역환승센터.html" class="db-bus-link-bold">부진역환승센터</a>
                            </td>
                            <td>
                                <a href="반양종합터미널.html" class="db-bus-link">반양종합</a> · 
                                <a href="삽곡터미널.html" class="db-bus-link">삽곡</a> · 
                                <a href="하원정류장.html" class="db-bus-link">하원</a>
                            </td>
                        </tr>

                        <!-- 4행 헤더 -->
                        <tr>
                            <th style="background-color: #D6D5CA; color: #000;">선곡군</th>
                            <th style="background-color: #1D1D1D; color: #fff;">저천군</th>
                            <th style="background-color: #aa7799; color: #fff;">치원군</th>
                            <th style="background-color: #01B7ED; color: #fff;">기도군</th>
                        </tr>
                        <!-- 4행 내용 -->
                        <tr>
                            <td>
                                <a href="선곡공용터미널.html" class="db-bus-link">선곡공용</a> · 
                                <a href="원전터미널.html" class="db-bus-link">원전</a> · 
                                <a href="하미공용터미널.html" class="db-bus-link">하미공용</a>
                            </td>
                            <td>
                                <a href="저천종합버스터미널.html" class="db-bus-link">저천종합</a> · 
                                <a href="산백터미널.html" class="db-bus-link">산백</a> · 
                                <a href="우구터미널.html" class="db-bus-link">우구</a> · 
                                <a href="송남정류장.html" class="db-bus-link">송남</a>
                            </td>
                            <td>
                                <a href="치원공용터미널.html" class="db-bus-link">치원공용</a> · 
                                <a href="후등공용버스터미널.html" class="db-bus-link">후등공용</a>
                            </td>
                            <td>
                                <a href="기도공용버스터미널.html" class="db-bus-link">기도공용</a> · 
                                <a href="염곡정류장.html" class="db-bus-link">염곡</a>
                            </td>
                        </tr>

                        <!-- 5행 헤더 -->
                        <tr>
                            <th style="background-color: #A664A0; color: #fff;">모제군</th>
                            <th style="background-color: #84C36E; color: #fff;">상안군</th>
                            <th colspan="2" style="background-color: #f3f4f6; border-bottom: none;"></th>
                        </tr>
                        <!-- 5행 내용 -->
                        <tr>
                            <td>
                                <a href="모제터미널.html" class="db-bus-link">모제</a> · 
                                <a href="약궁정류장.html" class="db-bus-link">약궁</a>
                            </td>
                            <td>
                                <a href="상안버스터미널.html" class="db-bus-link">상안</a> · 
                                <a href="이부정류장.html" class="db-bus-link">이부</a>
                            </td>
                            <td colspan="2" style="background-color: #f3f4f6; border-top: none;"></td>
                        </tr>

                        <!-- 하단 공통 정보 -->
                        <tr>
                            <td colspan="4" style="background-color: #f0f9f4; border-top: 2px solid #4AD898; padding: 16px; font-size: 0.8rem; text-align: center; line-height: 1.6;">
                                <strong>시외버스 · 고속버스가 정차하는 경우만 표기</strong><br>
                                시내버스 · 농어촌버스만 정차하는 곳은 표기하지 않음. <span style="color: #6b7280;">(하차)</span>는 하차만 가능한 경우<br>
                                <div style="margin-top: 8px;">
                                    <a href="서울.html" class="db-bus-link">서울</a> · 
                                    <a href="부산.html" class="db-bus-link">부산</a> · 
                                    <a href="인천.html" class="db-bus-link">인천</a> · 
                                    <a href="대구.html" class="db-bus-link">대구</a> · 
                                    <a href="대전.html" class="db-bus-link">대전</a> · 
                                    <a href="광주.html" class="db-bus-link">광주</a> · 
                                    <a href="울산.html" class="db-bus-link">울산</a> · 
                                    <a href="경기.html" class="db-bus-link">경기</a> · 
                                    <a href="강원.html" class="db-bus-link">강원</a> · 
                                    <a href="충북.html" class="db-bus-link">충북</a> · 
                                    <a href="충남.html" class="db-bus-link">충남</a> · 
                                    <a href="전북.html" class="db-bus-link">전북</a> · 
                                    <a href="전남.html" class="db-bus-link">전남</a> · 
                                    <a href="경북.html" class="db-bus-link">경북</a> · 
                                    <a href="경남.html" class="db-bus-link">경남</a> · 
                                    <a href="제주.html" class="db-bus-link">제주</a> · 
                                    <a href="세종.html" class="db-bus-link">세종</a> · 
                                    <a href="효빈.html" class="db-bus-link">효빈</a> · 
                                    <a href="덕남.html" class="db-bus-link">덕남</a>
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