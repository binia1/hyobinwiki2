(function() {
    document.addEventListener('DOMContentLoaded', function() {
        const container = document.getElementById('hw-korea-council-nav-container');
        if (!container) return;

        // 접기/펼치기 토글 함수
        window.toggleKoreaCouncilNav = function() {
            const body = document.getElementById('hw-korea-council-tbody');
            if (body.style.display === 'none') {
                body.style.display = 'table-row-group';
            } else {
                body.style.display = 'none';
            }
        };

        // 캡슐화된 스타일 및 통합된 HTML 템플릿
        const template = `
            <style>
                /* 고유 ID 캡슐화 */
                #hw-korea-council-nav {
                    width: 100%; max-width: 100%; font-family: 'Noto Sans KR', sans-serif; margin: 20px 0;
                    box-shadow: 0 1px 3px rgba(0,0,0,0.1); background-color: #fff;
                }
                
                #hw-korea-council-nav table {
                    width: 100%; border-collapse: collapse; text-align: center; font-size: 0.8rem; font-weight: bold; margin: 0;
                }
                #hw-korea-council-nav td {
                    border: 1px solid #ccc; padding: 0; vertical-align: middle;
                }
                
                /* 헤더 디자인 (이미지와 동일한 사선 패턴) */
                #hw-korea-council-nav .header-row {
                    background: linear-gradient(120deg, #fff 5%, #000 5.1% 9%, #fff 9.1% 10%, #000 10.1% 14%, #fff 14.1% 15%, #000 15.1% 19%, #fff 19.1% 81%, #cd313a 81.1% 90%, #0047a0 90.1%);
                    padding: 10px; border-bottom: 1px solid #ccc; border-color: #000;
                }
                #hw-korea-council-nav .header-content {
                    display: flex; justify-content: center; align-items: center; gap: 12px;
                }
                
                #hw-korea-council-nav .toggle-row {
                    background: #f8f9fa; padding: 6px; border-bottom: 1px solid #ccc; color: #444; cursor: pointer; font-size: 0.85rem;
                }
                #hw-korea-council-nav .toggle-row:hover { background: #f0f0f0; }

                /* 로고가 들어가는 컬러 바 */
                #hw-korea-council-nav .color-bar { 
                    height: 32px; border-bottom: 1px solid #ccc; display: flex; justify-content: center; align-items: center;
                }
                /* 로고 이미지를 강제로 하얗게 만드는 필터 */
                #hw-korea-council-nav .color-bar img {
                    height: 20px; filter: brightness(0) invert(1); object-fit: contain;
                }
                
                #hw-korea-council-nav .name-bar { 
                    height: 32px; background: white; display: flex; justify-content: center; align-items: center; padding: 0 4px;
                }
                #hw-korea-council-nav a { text-decoration: none; word-break: keep-all; }
                #hw-korea-council-nav a:hover { text-decoration: underline; }
            </style>

            <div id="hw-korea-council-nav">
                <table>
                    <colgroup>
                        <col style="width: 20%;">
                        <col style="width: 20%;">
                        <col style="width: 20%;">
                        <col style="width: 20%;">
                        <col style="width: 20%;">
                    </colgroup>
                    <thead>
                        <tr>
                            <td colspan="5" class="header-row">
                                <div class="header-content">
                                    <!-- 수정됨: 대한민국 국장 경로 변경 -->
                                    <img src="이미지/svg/대한민국_국장.svg" onerror="this.style.display='none'" alt="대한민국 국장" style="background: white; border-radius: 50%; width: 45px; height: 45px; object-fit: contain; box-shadow: 0 1px 3px rgba(0,0,0,0.2); border: 1px solid #eee; padding: 2px;">
                                    <div style="text-align: left; color: black; line-height: 1.1;">
                                        <div style="font-size: 0.85rem; font-weight: 800; color: #333;">대한민국</div>
                                        <div style="font-size: 1.3rem; font-weight: 900; letter-spacing: 1px;">광역의회</div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="5" class="toggle-row" onclick="toggleKoreaCouncilNav()">[ 펼치기 · 접기 ]</td>
                        </tr>
                    </thead>
                    <tbody id="hw-korea-council-tbody">
                        <!-- 1번째 줄 -->
                        <tr>
                            <td>
                                <div class="color-bar" style="background-color: #ae1932;"><img src="이미지/svg/서울특별시.svg" onerror="this.style.display='none'"></div>
                                <div class="name-bar"><a href="서울특별시의회.html" style="color: #ae1932;">서울특별시의회</a></div>
                            </td>
                            <td>
                                <div class="color-bar" style="background-color: #003da5;"><img src="이미지/svg/전남광주통합특별시.svg" onerror="this.style.display='none'"></div>
                                <div class="name-bar"><a href="전남광주통합특별시의회.html" style="color: #003da5;">전남광주통합특별시의회</a></div>
                            </td>
                            <td>
                                <div class="color-bar" style="background-color: #E5007F;"><img src="이미지/svg/부산광역시.svg" onerror="this.style.display='none'"></div>
                                <div class="name-bar"><a href="부산광역시의회.html" style="color: #E5007F;">부산광역시의회</a></div>
                            </td>
                            <td>
                                <div class="color-bar" style="background-color: #008837;"><img src="이미지/svg/대구광역시.svg" onerror="this.style.display='none'"></div>
                                <div class="name-bar"><a href="대구광역시의회.html" style="color: #008837;">대구광역시의회</a></div>
                            </td>
                            <td>
                                <div class="color-bar" style="background-color: #0079c1;"><img src="이미지/svg/인천광역시.svg" onerror="this.style.display='none'"></div>
                                <div class="name-bar"><a href="인천광역시의회.html" style="color: #0079c1;">인천광역시의회</a></div>
                            </td>
                        </tr>
                        
                        <!-- 2번째 줄 -->
                        <tr>
                            <td>
                                <div class="color-bar" style="background-color: #00ae4d;"><img src="이미지/svg/대전광역시.svg" onerror="this.style.display='none'"></div>
                                <div class="name-bar"><a href="대전광역시의회.html" style="color: #00ae4d;">대전광역시의회</a></div>
                            </td>
                            <td>
                                <div class="color-bar" style="background-color: #008c95;"><img src="이미지/svg/울산광역시.svg" onerror="this.style.display='none'"></div>
                                <div class="name-bar"><a href="울산광역시의회.html" style="color: #008c95;">울산광역시의회</a></div>
                            </td>
                            <td>
                                <div class="color-bar" style="background-color: #00a0c6;"><img src="이미지/svg/세종특별자치시.svg" onerror="this.style.display='none'"></div>
                                <div class="name-bar"><a href="세종특별자치시의회.html" style="color: #00a0c6;">세종특별자치시의회</a></div>
                            </td>
                            <td>
                                <div class="color-bar" style="background-color: #164194;"><img src="이미지/svg/경기도.svg" onerror="this.style.display='none'"></div>
                                <div class="name-bar"><a href="경기도의회.html" style="color: #164194;">경기도의회</a></div>
                            </td>
                            <td>
                                <div class="color-bar" style="background-color: #D50037;"><img src="이미지/svg/강원도.svg" onerror="this.style.display='none'"></div>
                                <div class="name-bar"><a href="강원특별자치도의회.html" style="color: #D50037;">강원특별자치도의회</a></div>
                            </td>
                        </tr>
                        
                        <!-- 3번째 줄 -->
                        <tr>
                            <td>
                                <div class="color-bar" style="background-color: #6f448c;"><img src="이미지/svg/충청북도.svg" onerror="this.style.display='none'"></div>
                                <div class="name-bar"><a href="충청북도의회.html" style="color: #6f448c;">충청북도의회</a></div>
                            </td>
                            <td>
                                <div class="color-bar" style="background-color: #8c8c70;"><img src="이미지/svg/충청남도.svg" onerror="this.style.display='none'"></div>
                                <div class="name-bar"><a href="충청남도의회.html" style="color: #8c8c70;">충청남도의회</a></div>
                            </td>
                            <td>
                                <div class="color-bar" style="background-color: #024694;"><img src="이미지/svg/전북특별자치도.svg" onerror="this.style.display='none'"></div>
                                <div class="name-bar"><a href="전북특별자치도의회.html" style="color: #024694;">전북특별자치도의회</a></div>
                            </td>
                            <td>
                                <div class="color-bar" style="background-color: #0070bb;"><img src="이미지/svg/경상북도.svg" onerror="this.style.display='none'"></div>
                                <div class="name-bar"><a href="경상북도의회.html" style="color: #0070bb;">경상북도의회</a></div>
                            </td>
                            <td>
                                <div class="color-bar" style="background-color: #f15a38;"><img src="이미지/svg/경상남도.svg" onerror="this.style.display='none'"></div>
                                <div class="name-bar"><a href="경상남도의회.html" style="color: #f15a38;">경상남도의회</a></div>
                            </td>
                        </tr>

                        <!-- 4번째 줄 -->
                        <tr>
                            <td colspan="2">
                                <div class="color-bar" style="background-color: #939499;"><img src="이미지/svg/제주특별자치도.svg" onerror="this.style.display='none'"></div>
                                <div class="name-bar"><a href="제주특별자치도의회.html" style="color: #666;">제주특별자치도의회</a></div>
                            </td>
                            <td>
                                <!-- 수정됨: 효빈광역시 로고 경로 변경 (.webp) -->
                                <div class="color-bar" style="background-color: #7777AA;"><img src="이미지/hyobin1.webp" onerror="this.style.display='none'"></div>
                                <div class="name-bar"><a href="효빈광역시의회.html" style="color: #7777AA;">효빈광역시의회</a></div>
                            </td>
                            <td>
                                <div class="color-bar" style="background-color: #4ad898;"><img src="이미지/svg/덕빈북도.svg" onerror="this.style.display='none'"></div>
                                <div class="name-bar"><a href="덕빈북도의회.html" style="color: #4ad898;">덕빈북도의회</a></div>
                            </td>
                            <td>
                                <div class="color-bar" style="background-color: #335566;"><img src="이미지/svg/덕빈남도.svg" onerror="this.style.display='none'"></div>
                                <div class="name-bar"><a href="덕빈남도의회.html" style="color: #335566;">덕빈남도의회</a></div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `;

        container.innerHTML = template;
    });
})();