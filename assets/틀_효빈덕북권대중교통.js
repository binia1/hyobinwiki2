(function() {
    // 1. 필수 스타일 (CSS) 자동 주입
    if (!document.getElementById('style-template-transport-hb')) {
        const style = document.createElement('style');
        style.id = 'style-template-transport-hb';
        style.textContent = `
            :root {
                /* 효빈·덕빈권 공식 노선 색상 */
                --wiki-line-1: #0077DD;
                --wiki-line-2: #00CCAA;
                --wiki-line-3: #FFCC11;
                --wiki-line-4: #FF5522;
                --wiki-line-5: #EE0022;
                --wiki-line-6: #881188;
                --wiki-line-7: #FF8899;
                --wiki-line-8: #9856FF;
                --wiki-line-bin: #6677CC;
                --wiki-line-bj1: #CFBA0F;
                --wiki-line-bj2: #C455F6;
                --wiki-line-bjm: #005BAC;
                --wiki-line-dj1: #FF4F91;
                --wiki-line-changjeon: #33AAFF;
            }

            /* 효빈·덕빈권 대중교통 틀 전용 스타일 */
            .wiki-link { color: #0055AA; font-weight: bold; cursor: pointer; text-decoration: none; }
            .wiki-link:hover { text-decoration: underline; }
            
            /* 접기/펼치기 컨테이너 스타일 */
            .folding-container { border: 1px solid #ccc; margin: 5px 0; border-radius: 4px; overflow: hidden; }
            
            .folding-btn { 
                width: 100%; 
                background-color: #fff; 
                border: none; 
                padding: 5px; 
                text-align: center; 
                cursor: pointer; 
                font-size: 0.9rem; 
                font-weight: bold; 
                display: block; 
            }
            .folding-btn:hover { background-color: #eee; }
            .folding-content { display: none; padding: 10px; border-top: 1px solid #ccc; background: #fff; }

            /* 노선 아이콘 기본 구조 */
            .station-ring, .station-rect, .station-pill { 
                display: inline-flex; 
                align-items: center; 
                justify-content: center; 
                height: 24px; 
                border: 2.5px solid; 
                background: #fff; 
                font-weight: 900; 
                font-size: 0.75rem; 
                line-height: 1; 
                flex-shrink: 0; 
                text-decoration: none !important;
                margin: 0 1px;
                vertical-align: middle;
                box-sizing: border-box;
            }
            
            .station-ring { width: 24px; border-radius: 50%; }
            .station-rect { width: 24px; border-radius: 4px; }
            .station-pill { padding: 0 8px; border-radius: 12px; }

            /* 효빈도시철도 (테두리 및 글자색) */
            .line-1 { border-color: var(--wiki-line-1); color: var(--wiki-line-1); }
            .line-2 { border-color: var(--wiki-line-2); color: var(--wiki-line-2); }
            .line-3 { border-color: var(--wiki-line-3); color: var(--wiki-line-3); }
            .line-4 { border-color: var(--wiki-line-4); color: var(--wiki-line-4); }
            .line-5 { border-color: var(--wiki-line-5); color: var(--wiki-line-5); }
            .line-6 { border-color: var(--wiki-line-6); color: var(--wiki-line-6); }
            .line-7 { border-color: var(--wiki-line-7); color: var(--wiki-line-7); }
            .line-8 { border-color: var(--wiki-line-8); color: var(--wiki-line-8); }
            .line-bin { border-color: var(--wiki-line-bin); color: var(--wiki-line-bin); font-size: 0.65rem; }

            /* 덕주 및 빈주 노선 (채워진 배경) */
            .line-dj1-filled { background-color: var(--wiki-line-dj1); color: #fff; border: none; font-size: 0.85rem; }
            .line-bj1-filled { background-color: var(--wiki-line-bj1); color: #000; border: none; font-size: 0.85rem; } /* 빈주 1호선 숫자 검은색 */
            .line-bj2-filled { background-color: var(--wiki-line-bj2); color: #000; border: none; font-size: 0.85rem; } /* 빈주 2호선 숫자 검은색 */
            .line-bjm-filled { background-color: var(--wiki-line-bjm); color: #fff; border: none; font-size: 0.8rem; }
            
            /* 폐선/기타 노선 */
            .line-disabled { background-color: #aaa; color: #fff; border: none; text-decoration: line-through !important; }
        `;
        document.head.appendChild(style);
    }

    // 2. 접기/펼치기 기능
    if (typeof window.toggleFold === 'undefined') {
        window.toggleFold = function(id) {
            const content = document.getElementById(id);
            if (content) {
                content.style.display = (content.style.display === "block" || content.style.display === "") ? "none" : "block";
            }
        };
    }

    // 3. HTML 템플릿
    const templateHTML = `
        <div style="border: 1px solid #000; margin: 10px 0;">
            <div style="background-color: #fff; color: #000; padding: 5px; font-weight: bold; text-align: center; border-bottom: 1px solid #000;">
                <a href="덕빈권.html" class="wiki-link" style="color:#000;">효빈·덕빈권</a>(효빈·덕북·덕남)의 대중교통
            </div>
            <div class="folding-container" style="margin: 0; border: none;">
                <button class="folding-btn" onclick="toggleFold('fold-hyobin-transport')" style="background-color: #fff; border-top: 1px solid #ccc; width: 100%; cursor: pointer; border: none; padding: 5px;">
                    <span>[ 펼치기 · 접기 ]</span>
                    <span style="font-size:0.8em">▼</span>
                </button>
                <div id="fold-hyobin-transport" class="folding-content" style="padding: 0; display: block;">
                    <table class="wiki-table-custom" style="width:100%; font-size: 0.9rem; border-collapse: collapse; margin: 0;">
                        <tr>
                            <td style="background:#AAA; font-weight:bold; width: 10%; border: 1px solid #000;"></td>

                            <td style="font-weight:bold; border: 1px solid #000; width: 30%; background-color:#F9F9F9;">
                                <div style="display: flex; align-items: center; justify-content: center;">
                                    <img src="이미지/효빈시_로고.webp" alt="효빈광역시" style="height:20px; margin-right:5px; onerror='this.style.display=\`none\`'">
                                    <a href="효빈광역시.html" class="wiki-link">효빈광역시</a>
                                </div>
                            </td>

                            <td style="font-weight:bold; border: 1px solid #000; width: 30%; background-color:#F9F9F9;">
                                <div style="display: flex; align-items: center; justify-content: center;">
                                    <img src="이미지/덕북로고.webp" alt="덕빈북도" style="height:20px; margin-right:5px; onerror='this.style.display=\`none\`'">
                                    <a href="덕빈북도.html" class="wiki-link">덕빈북도</a>
                                </div>
                            </td>

                            <td style="font-weight:bold; border: 1px solid #000; width: 30%; background-color:#F9F9F9;">
                                <div style="display: flex; align-items: center; justify-content: center;">
                                    <img src="이미지/덕빈남도_로고.webp" alt="덕빈남도" style="height:20px; margin-right:5px; onerror='this.style.display=\`none\`'">
                                    <a href="덕빈남도.html" class="wiki-link">덕빈남도</a>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td style="background:#AAA; font-weight:bold; text-align: center; border: 1px solid #000;">항공</td>
                            <td colspan="3" style="text-align:center; border: 1px solid #000;">
                                <a href="효빈국제공항.html" class="wiki-link">효빈국제공항</a>
                            </td>
                        </tr>

                        <tr>
                            <td style="background:#AAA; font-weight:bold; text-align: center; border: 1px solid #000;">항만</td>
                            <td style="text-align:center; border: 1px solid #000;">
                                <a href="효빈항 국제여객터미널.html" class="wiki-link">효빈항 국제여객터미널</a> · <a href="효빈 유람선.html" class="wiki-link">효빈 유람선</a> · <a href="효빈내항.html" class="wiki-link">효빈내항</a> · <a href="어간항.html" class="wiki-link">어간항</a> · <a href="탄성-승남항.html" class="wiki-link">탄성-승남항(예정)</a>
                            </td>
                            <td style="text-align:center; border: 1px solid #000;">
                                <a href="궁하항.html" class="wiki-link">궁하항</a> · <a href="천주여객선터미널.html" class="wiki-link">천주여객선터미널</a> · <a href="장곡여객선터미널.html" class="wiki-link">장곡여객선터미널</a> · <a href="서해항.html" class="wiki-link">서해항</a> · <a href="강주항.html" class="wiki-link">강주항</a> · <a href="풍영여객선터미널.html" class="wiki-link">풍영여객선터미널</a> · <a href="전산항.html" class="wiki-link">전산항</a> · <a href="서진항.html" class="wiki-link">서진항</a> · <a href="군천항.html" class="wiki-link">군천항</a>
                            </td>
                            <td style="text-align:center; border: 1px solid #000;">
                                <a href="비천항.html" class="wiki-link">비천항</a> · <a href="운진항.html" class="wiki-link">운진항</a> · <a href="마진항.html" class="wiki-link">마진항</a> · <a href="방산항.html" class="wiki-link">방산항</a> · <a href="낙주항.html" class="wiki-link">낙주항</a>
                            </td>
                        </tr>

                        <tr>
                            <td style="background:#AAA; font-weight:bold; text-align: center; border: 1px solid #000;">철도</td>
                            <td style="text-align:center; border: 1px solid #000;"><a href="효빈광역시_교통.html" class="wiki-link">역 목록</a></td>
                            <td style="text-align:center; border: 1px solid #000;"><a href="덕빈북도_교통.html" class="wiki-link">역 목록</a></td>
                            <td style="text-align:center; border: 1px solid #000;"><a href="덕빈남도_교통.html" class="wiki-link">역 목록</a></td>
                        </tr>

                        <tr>
                            <td style="background:#AAA; font-weight:bold; text-align: center; border: 1px solid #000;"></td>
                            
                            <!-- 효빈권 전철 -->
                            <td style="text-align:center; border: 1px solid #000;">
                                <div style="margin-bottom: 5px;">
                                    <a href="효빈권전철.html" class="wiki-link">효빈권 전철</a><br>
                                    <span style="vertical-align: middle;">(</span>
                                    <a href="1호선.html" class="station-ring line-1">1</a>·
                                    <a href="2호선.html" class="station-ring line-2">2</a>·
                                    <a href="3호선.html" class="station-ring line-3">3</a>·
                                    <a href="4호선.html" class="station-ring line-4">4</a>·
                                    <a href="5호선.html" class="station-ring line-5">5</a>·
                                    <a href="6호선.html" class="station-ring line-6">6</a>·
                                    <a href="7호선.html" class="station-ring line-7">7</a>·
                                    <a href="8호선.html" class="station-ring line-8">8</a>·
                                    <a href="빈효광역선.html" class="station-ring line-bin">빈</a>
                                    <span style="vertical-align: middle;">)</span>
                                </div>
                            </td>

                            <!-- 빈주권 전철 -->
                            <td style="text-align:center; border: 1px solid #000;">
                                <div style="margin-bottom: 8px;">
                                    <a href="빈주권_전철.html" class="wiki-link">빈주권 전철</a><br>
                                    <span style="vertical-align: middle;">(</span>
                                    <a href="빈주1호선.html" class="station-rect line-bj1-filled">1</a>·
                                    <a href="빈주2호선.html" class="station-rect line-bj2-filled">2</a>·
                                    <a href="빈주광역철도.html" class="station-pill line-bjm-filled">빈주</a>
                                    <span style="vertical-align: middle;">)</span>
                                </div>
                                <div>
                                    <a href="서해경전철.html" class="wiki-link" style="color: #aaa; text-decoration: line-through;">서해경전철</a><br>
                                    <span style="color: #aaa; vertical-align: middle;">(</span>
                                    <a href="서해경전철.html" class="station-pill line-disabled">서해</a>
                                    <span style="color: #aaa; vertical-align: middle;">)</span>
                                </div>
                                <div>
                                    <a href="천주1호선.html" class="wiki-link" style="color: #aaa; text-decoration: line-through;">천주1호선</a><br>
                                    <span style="color: #aaa; vertical-align: middle;">(</span>
                                    <a href="천주1호선.html" class="station-pill line-disabled">천주1</a>
                                    <span style="color: #aaa; vertical-align: middle;">)</span>
                                </div>
                            </td>

                            <!-- 덕남권 전철 -->
                            <td style="text-align:center; border: 1px solid #000;">
                                <div style="margin-bottom: 5px;">
                                    <a href="덕주1호선.html" class="wiki-link">덕남권 전철</a><br>
                                    <span style="vertical-align: middle;">(</span>
                                    <a href="덕주1호선.html" class="station-rect line-dj1-filled">1</a>
                                    <span style="vertical-align: middle;">)</span>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td style="background:#AAA; font-weight:bold; text-align: center; border: 1px solid #000;">버스</td>
                            <td style="text-align:center; border: 1px solid #000;"><a href="효빈광역시의_버스_터미널.html" class="wiki-link">터미널 목록</a><br><a href="효빈광역시 시내버스.html" class="wiki-link">효빈광역시 시내버스</a></td>
                            <td style="text-align:center; border: 1px solid #000;">
                                <a href="덕빈북도의 버스 터미널.html" class="wiki-link">터미널 목록</a><br>
                                <a href="덕빈북도 시내버스.html" class="wiki-link">덕빈북도 시내/농어촌버스</a>
                            </td>
                            <td style="text-align:center; border: 1px solid #000;">
                                <a href="덕빈남도의 버스 터미널.html" class="wiki-link">터미널 목록</a><br>
                                <a href="덕빈남도 시내버스.html" class="wiki-link">덕빈남도 시내버스</a>
                            </td>
                        </tr>

                        <tr>
                            <td style="background:#AAA; font-weight:bold; text-align: center; border: 1px solid #000;">교통카드</td>
                            <td colspan="2" style="text-align:center; border: 1px solid #000;">
                                <a href="이즐.html" class="wiki-link">이즐</a> · <a href="티머니.html" class="wiki-link">티머니</a> · <a href="효빈덕북교통카드.html" class="wiki-link">효빈덕북교통카드</a> 등
                            </td>
                            <td style="text-align:center; border: 1px solid #000;">
                                <a href="덕남카드.html" class="wiki-link">덕남카드</a>
                            </td>
                        </tr>

                        <tr>
                            <td style="background:#AAA; font-weight:bold; text-align: center; border: 1px solid #000;"></td>
                            <td colspan="2" style="text-align:center; border: 1px solid #000;">
                                <a href="효빈권_광역환승제.html" class="wiki-link">효빈덕북권 광역환승제</a>
                            </td>
                            <td style="text-align:center; border: 1px solid #000;">
                                <a href="덕남권_환승제.html" class="wiki-link">덕남권 환승제</a>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    `;

    // 4. HTML 삽입
    document.currentScript.insertAdjacentHTML('afterend', templateHTML);
})();