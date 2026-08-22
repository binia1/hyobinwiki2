document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("hyobin-character-universe-nav-container");
    
    if (container) {
        container.innerHTML = `
        <style>
            /* 틀 전용 독립 CSS (어느 문서에서도 레이아웃 깨짐 방지) */
            .cu-container { border: 2px solid #555588; margin: 15px 0; border-radius: 4px; overflow: hidden; background: #fff; font-family: 'Noto Sans KR', sans-serif; }
            .cu-summary { background-color: #555588; color: white; padding: 12px; font-weight: bold; cursor: pointer; text-align: center; list-style: none; font-size: 1.1rem; user-select: none; }
            .cu-summary::-webkit-details-marker { display: none; }
            .cu-summary a { color: white; text-decoration: none; }
            .cu-summary a:hover { text-decoration: underline; }
            
            .cu-table { width: 100%; border-collapse: collapse; text-align: center; margin: 0; table-layout: fixed; }
            .cu-table th, .cu-table td { border: 1px solid #ccc; padding: 10px 6px; vertical-align: middle; }
            
            .cu-th-col { font-weight: bold; font-size: 1rem; background-color: #f9f9f9; color: #555588; width: 8%; }
            
            .cu-link { text-decoration: none; color: #000; display: inline-flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px; font-size: 0.95rem; }
            .cu-link:hover { text-decoration: underline; color: #0022AA; }
            
            /* 캐릭터 원형 프로필 이미지 고정 */
            .cu-img { width: 65px; height: 65px; border-radius: 50%; object-fit: cover; border: 1px solid #ddd; background-color: #fff; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }
            
            .cu-footer { text-align: left; font-size: 0.85rem; color: #555; background-color: #f9f9f9; padding: 12px 15px; border-top: 1px solid #ccc; line-height: 1.6; }
            .cu-footer strong { color: #333; }
        </style>

        <details class="cu-container" open>
            <summary class="cu-summary">
                <a href="효빈교통공사.html">효빈권 대중교통 캐릭터 유니버스 ▼</a>
            </summary>
            <div style="overflow-x: auto;">
                <table class="cu-table">
                    <tr>
                        <th class="cu-th-col" rowspan="4">효<br/>빈<br/>교<br/>통<br/>공<br/>사</th>
                        <td style="background-color: #0077DD; width: 15.3%; font-weight: bold;"><a href="1호선.html" style="color: white; text-decoration: none;">1호선</a></td>
                        <td style="background-color: #00CCAA; width: 15.3%; font-weight: bold;"><a href="2호선.html" style="color: white; text-decoration: none;">2호선</a></td>
                        <td style="background-color: #FFCC11; width: 15.3%; font-weight: bold;"><a href="3호선.html" style="color: #333; text-decoration: none;">3호선</a></td>
                        <td style="background-color: #FF5522; width: 15.3%; font-weight: bold;"><a href="4호선.html" style="color: white; text-decoration: none;">4호선</a></td>
                        <td style="background-color: #EE0022; width: 15.3%; font-weight: bold;"><a href="5호선.html" style="color: white; text-decoration: none;">5호선</a></td>
                        <!-- 창전선 색상 하드코딩 적용 (#33AAFF) -->
                        <td style="background-color: #33AAFF; width: 15.3%; font-weight: bold;"><a href="창전선.html" style="color: white; text-decoration: none;">창전선</a></td>
                    </tr>
                    <tr>
                        <td><a href="고나미.html" class="cu-link"><img class="cu-img" onerror="this.style.display='none'" src="이미지/고나미 로고.webp"/>고나미</a></td>
                        <td><a href="하루빈.html" class="cu-link"><img class="cu-img" onerror="this.style.display='none'" src="이미지/하루빈 로고.webp"/>하루빈</a></td>
                        <td><a href="박라미.html" class="cu-link"><img class="cu-img" onerror="this.style.display='none'" src="이미지/박라미 로고.webp"/>박라미</a></td>
                        <td><a href="다로나.html" class="cu-link"><img class="cu-img" onerror="this.style.display='none'" src="이미지/다로나 로고.webp"/>다로나</a></td>
                        <td><a href="미소하.html" class="cu-link"><img class="cu-img" onerror="this.style.display='none'" src="이미지/미소하 로고.webp"/>미소하</a></td>
                        <td><a href="심세이.html" class="cu-link"><img class="cu-img" src="이미지/심세이_로고.webp"/>심세이</a></td>
                    </tr>
                    <tr>
                        <td style="background-color: #881188; font-weight: bold;"><a href="6호선.html" style="color: white; text-decoration: none;">6호선</a></td>
                        <td colspan="2" style="background-color: #FF8899; font-weight: bold;"><a href="7호선.html" style="color: #333; text-decoration: none;">7호선</a></td>
                        <td style="background-color: #9856FF; font-weight: bold;"><a href="8호선.html" style="color: white; text-decoration: none;">8호선</a></td>
                        <td colspan="2" style="background-color: #6677CC; font-weight: bold;"><a href="빈효광역선.html" style="color: white; text-decoration: none;">빈효선*</a></td>
                    </tr>
                    <tr>
                        <td><a href="라세나.html" class="cu-link"><img class="cu-img" onerror="this.style.display='none'" src="이미지/라세나 로고.webp"/>라세나</a></td>
                        <td><a href="임세정.html" class="cu-link"><img class="cu-img" onerror="this.style.display='none'" src="이미지/임세정 로고.webp"/>임세정</a></td>
                        <td><a href="임세하.html" class="cu-link"><img class="cu-img" onerror="this.style.display='none'" src="이미지/임세하 로고.webp"/>임세하</a></td>
                        <td><a href="유리아.html" class="cu-link"><img class="cu-img" onerror="this.style.display='none'" src="이미지/유리아 로고.webp"/>유리아</a></td>
                        <td colspan="2"><a href="전노아.html" class="cu-link"><img class="cu-img" onerror="this.style.display='none'" src="이미지/전노아 로고.webp"/>전노아</a></td>
                    </tr>
                    <tr>
                        <th class="cu-th-col" rowspan="2" style="color: #000;">빈주<br/>&amp;<br/>덕주</th>
                        <td colspan="2" style="background-color: #CFBA0F; font-weight: bold;"><a href="빈주1호선.html" style="color: black; text-decoration: none;">빈주 1호선</a></td>
                        <td colspan="2" style="background-color: #C455F6; font-weight: bold;"><a href="빈주2호선.html" style="color: white; text-decoration: none;">빈주 2호선</a></td>
                        <td colspan="2" style="background-color: #FF4F91; font-weight: bold;"><a href="덕주1호선.html" style="color: white; text-decoration: none;">덕주 1호선</a></td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <a href="박빛나.html" class="cu-link" style="font-weight: bold;"><img class="cu-img" src="이미지/박빛나.webp"/>박빛나</a><br/>
                            <span style="font-size: 0.75rem; color: #777; font-weight: normal;">(1호선/총괄)</span>
                        </td>
                        <td colspan="2">
                            <a href="김소빈.html" class="cu-link" style="font-weight: bold;"><img class="cu-img" src="이미지/김소빈.webp"/>김소빈</a><br/>
                            <span style="font-size: 0.75rem; color: #777; font-weight: normal;">(2호선 신입)</span>
                        </td>
                        <td colspan="2">
                            <a href="이덕희.html" class="cu-link" style="font-weight: bold;"><img class="cu-img" src="이미지/이덕희_로고.webp"/>이덕희</a><br/>
                            <span style="font-size: 0.75rem; color: #777; font-weight: normal;">(1호선 파견)</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="7" class="cu-footer">
                            * <strong>빈효선</strong>: 노선 운영은 코레일이 담당하나, 효빈교통공사와 한 팀으로 취급됨.<br/>
                            * <strong>타 지역 참전</strong>: 빈주도시철도공사의 박빛나, 김소빈에 이어 <strong><a href="덕주도시철도공사.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">덕주도시철도공사(DJURC)</a></strong>의 이덕희까지 정식 합류하며 철도 모에화 3파전이 완성되었습니다.
                        </td>
                    </tr>
                </table>
            </div>
        </details>
        `;
    }
});