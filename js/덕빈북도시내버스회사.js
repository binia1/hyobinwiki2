document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("deokbinbukdo-bus-company-nav-container");
    
    if (container) {
        container.innerHTML = `
        <style>
            /* 틀 전용 독립 CSS (다른 문서의 CSS와 충돌 방지) */
            .db-macro-container { border: 1px solid #ccc; margin: 15px 0; font-size: 0.9rem; border-radius: 2px; overflow: hidden; background: #fff; font-family: 'Noto Sans KR', sans-serif; }
            .db-macro-summary { list-style: none; cursor: pointer; user-select: none; display: block; }
            .db-macro-summary::-webkit-details-marker { display: none; }
            
            /* 헤더 타이틀 영역 */
            .db-macro-header { background-color: #4AD898; color: black; padding: 8px; font-weight: bold; text-align: center; border-bottom: 1px solid #ccc; font-size: 1.125rem; }
            
            /* 펼치기 접기 토글 버튼 영역 */
            .db-macro-toggle { text-align: center; padding: 4px; background-color: #f9f9f9; border-bottom: 1px solid #ccc; font-size: 0.8rem; font-weight: bold; color: #333; }
            .db-macro-toggle:hover { background-color: #e5e5e5; }
            
            /* 테이블 스타일 */
            .db-macro-table { width: 100%; border-collapse: collapse; text-align: left; margin: 0; }
            .db-macro-table th, .db-macro-table td { border: 1px solid #ddd; padding: 8px 12px; }
            .db-macro-table th { text-align: center; font-weight: bold; width: 15%; }
            .db-macro-table td { background-color: #fff; width: 35%; color: #333; }
            
            /* 링크 스타일 */
            .db-macro-link { color: #0088cc; text-decoration: none; }
            .db-macro-link:hover { text-decoration: underline; }
        </style>

        <details class="db-macro-container" open>
            <summary class="db-macro-summary">
                <div class="db-macro-header">🚌 덕빈북도 시내/농어촌버스 회사</div>
                <div class="db-macro-toggle">[ 펼치기 · 접기 ]</div>
            </summary>
            
            <div>
                <table class="db-macro-table">
                    <tbody>
                        <tr>
                            <th style="background-color: #ffeeaa; color: black;">빈주시</th>
                            <td>
                                <a href="빈주시_시내버스.html" class="db-macro-link">장기운수</a> · 
                                <a href="빈주시_시내버스.html" class="db-macro-link">빈성여객</a> · 
                                <a href="빈주시_시내버스.html" class="db-macro-link">빈주여객</a> · 
                                <a href="빈주시_시내버스.html" class="db-macro-link">가원여객</a>
                            </td>
                            <th style="background-color: #485EC6; color: white;">낭원군</th>
                            <td>
                                <a href="낭원군_농어촌버스.html" class="db-macro-link">낭원교통</a> · 
                                <a href="낭원군_농어촌버스.html" class="db-macro-link">전포운수</a>
                            </td>
                        </tr>
                        <tr>
                            <th style="background-color: #F8C8C4; color: black;">약산시</th>
                            <td>
                                <a href="약산시_시내버스.html" class="db-macro-link">약산여객</a> · 
                                <a href="약산시_시내버스.html" class="db-macro-link">화소운수</a> · 
                                <a href="약산시_시내버스.html" class="db-macro-link">홍염교통</a> · 
                                <a href="약산시_시내버스.html" class="db-macro-link">수구운수</a>
                            </td>
                            <th style="background-color: #FF5800; color: white;">덕현군</th>
                            <td>
                                <a href="덕현군_농어촌버스.html" class="db-macro-link">덕현여객</a>
                            </td>
                        </tr>
                        <tr>
                            <th style="background-color: #8B4993; color: white;">천주시</th>
                            <td>
                                <a href="천주시_시내버스.html" class="db-macro-link">천주여객</a> · 
                                <a href="천주시_시내버스.html" class="db-macro-link">소천여객</a> · 
                                <a href="천주시_시내버스.html" class="db-macro-link">창진여객</a> · 
                                <a href="천주시_시내버스.html" class="db-macro-link">월산여객</a> · 
                                <a href="천주시_시내버스.html" class="db-macro-link">천성교통</a>
                            </td>
                            <th style="background-color: #D6D5CA; color: black;">선곡군</th>
                            <td>
                                <a href="선곡군_농어촌버스.html" class="db-macro-link">선곡여객</a>
                            </td>
                        </tr>
                        <tr>
                            <th style="background-color: #37B484; color: white;">서해시</th>
                            <td>
                                <a href="서해시_시내버스.html" class="db-macro-link">서해여객</a> · 
                                <a href="서해시_시내버스.html" class="db-macro-link">신항교통</a> · 
                                <a href="서해시_시내버스.html" class="db-macro-link">원변운수</a>
                            </td>
                            <th style="background-color: #01B7ED; color: white;">기도군</th>
                            <td>
                                <a href="기도군_농어촌버스.html" class="db-macro-link">기도버스</a>
                            </td>
                        </tr>
                        <tr>
                            <th style="background-color: #ED7D95; color: black;">계성시</th>
                            <td>
                                <a href="계성시_시내버스.html" class="db-macro-link">계성운수</a> · 
                                <a href="계성시_시내버스.html" class="db-macro-link">진백여객</a>
                            </td>
                            <th style="background-color: #1D1D1D; color: white;">저천군</th>
                            <td>
                                <a href="저천군_농어촌버스.html" class="db-macro-link">저천여객</a>
                            </td>
                        </tr>
                        <tr>
                            <th style="background-color: #ffc94a; color: black;">강주시</th>
                            <td>
                                <a href="강주시_시내버스.html" class="db-macro-link">강주여객</a> · 
                                <a href="강주시_시내버스.html" class="db-macro-link">새강주교통</a>
                            </td>
                            <th style="background-color: #84C36E; color: black;">상안군</th>
                            <td>
                                <a href="상안군_농어촌버스.html" class="db-macro-link">상안버스</a>
                            </td>
                        </tr>
                        <tr>
                            <th style="background-color: #E7D600; color: black;">군천시</th>
                            <td>
                                <a href="군천시_시내버스.html" class="db-macro-link">군천여객</a> · 
                                <a href="군천시_시내버스.html" class="db-macro-link">해양교통</a>
                            </td>
                            <th style="background-color: #D81C2F; color: white;">반양군</th>
                            <td>
                                <a href="반양군_농어촌버스.html" class="db-macro-link">반양여객</a>
                            </td>
                        </tr>
                        <tr>
                            <th style="background-color: #9CA5B9; color: black;">서진시</th>
                            <td>
                                <a href="서진시_시내버스.html" class="db-macro-link">서진여객</a>
                            </td>
                            <th style="background-color: #A664A0; color: white;">모제군</th>
                            <td>
                                <a href="모제군_농어촌버스.html" class="db-macro-link">모제여객</a>
                            </td>
                        </tr>
                        <tr>
                            <th style="background-color: #FF7F27; color: white;">전산시</th>
                            <td>
                                <a href="전산시_시내버스.html" class="db-macro-link">전산여객</a> · 
                                <a href="전산시_시내버스.html" class="db-macro-link">해진교통</a>
                            </td>
                            <th style="background-color: #aa7799; color: white;">치원군</th>
                            <td>
                                <a href="치원군_농어촌버스.html" class="db-macro-link">치원교통</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </details>
        `;
    }
});