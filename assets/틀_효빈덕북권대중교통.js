(function() {
    const templateHTML = `
        <div style="border: 1px solid #000; margin: 10px 0; background: #fff;">
            <div style="background-color: #fff; color: #000; padding: 5px; font-weight: bold; text-align: center; border-bottom: 1px solid #000;">
                <a href="덕빈권.html" style="color:#000; text-decoration: none; font-weight: bold;">효빈·덕빈권</a>(효빈·덕북·덕남)의 대중교통
            </div>
            <div style="margin: 0; border: none;">
                <button onclick="toggleFold('fold-hyobin-transport')" style="width: 100%; background-color: #fff; border-top: 1px solid #ccc; border-bottom: none; border-left: none; border-right: none; padding: 5px; text-align: center; cursor: pointer; font-size: 0.9rem; font-weight: bold; display: block;">
                    <span>[ 펼치기 · 접기 ]</span> <span style="font-size:0.8em">▼</span>
                </button>
                <div id="fold-hyobin-transport" style="padding: 0; display: block; border-top: 1px solid #ccc; background: #fff;">
                    <table style="width:100%; font-size: 0.9rem; border-collapse: collapse; margin: 0;">
                        <tr>
                            <td style="background:#AAA; font-weight:bold; width: 10%; border: 1px solid #000;"></td>
                            
                            <!-- 효빈광역시 -->
                            <td style="font-weight:bold; border: 1px solid #000; width: 30%; background-color:#F9F9F9; text-align: center; padding: 6px;">
                                <div style="display: flex; align-items: center; justify-content: center; gap: 5px;">
                                    <img src="이미지/hyobin1.webp" alt="효빈광역시" style="height:20px; width:auto; display:inline-block !important; object-fit:contain; margin:0;" onerror="this.style.display='none'">
                                    <a href="효빈광역시.html" style="color: #0055AA; text-decoration: none; font-weight: bold;">효빈광역시</a>
                                </div>
                            </td>

                            <!-- 덕빈북도 -->
                            <td style="font-weight:bold; border: 1px solid #000; width: 30%; background-color:#F9F9F9; text-align: center; padding: 6px;">
                                <div style="display: flex; align-items: center; justify-content: center; gap: 5px;">
                                    <img src="이미지/svg/덕빈북도.svg" alt="덕빈북도" style="height:20px; width:auto; display:inline-block !important; object-fit:contain; margin:0;" onerror="this.style.display='none'">
                                    <a href="덕빈북도.html" style="color: #0055AA; text-decoration: none; font-weight: bold;">덕빈북도</a>
                                </div>
                            </td>

                            <!-- 덕빈남도 -->
                            <td style="font-weight:bold; border: 1px solid #000; width: 30%; background-color:#F9F9F9; text-align: center; padding: 6px;">
                                <div style="display: flex; align-items: center; justify-content: center; gap: 5px;">
                                    <img src="이미지/svg/덕빈남도.svg" alt="덕빈남도" style="height:20px; width:auto; display:inline-block !important; object-fit:contain; margin:0;" onerror="this.style.display='none'">
                                    <a href="덕빈남도.html" style="color: #0055AA; text-decoration: none; font-weight: bold;">덕빈남도</a>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td style="background:#AAA; font-weight:bold; text-align: center; border: 1px solid #000; padding: 6px;">항공</td>
                            <td colspan="3" style="text-align:center; border: 1px solid #000; padding: 6px;">
                                <a href="효빈국제공항.html" style="color: #0055AA; text-decoration: none; font-weight: bold;">효빈국제공항</a>
                            </td>
                        </tr>

                        <tr>
                            <td style="background:#AAA; font-weight:bold; text-align: center; border: 1px solid #000; padding: 6px;">항만</td>
                            <td style="text-align:center; border: 1px solid #000; padding: 6px; font-size: 0.85rem; line-height: 1.6;">
                                <a href="효빈항 국제여객터미널.html" style="color: #0055AA; text-decoration: none;">효빈항 국제여객터미널</a> · <a href="효빈 유람선.html" style="color: #0055AA; text-decoration: none;">효빈 유람선</a> · <a href="효빈내항.html" style="color: #0055AA; text-decoration: none;">효빈내항</a> · <a href="어간항.html" style="color: #0055AA; text-decoration: none;">어간항</a> · <a href="탄성-승남항.html" style="color: #0055AA; text-decoration: none;">탄성-승남항(예정)</a>
                            </td>
                            <td style="text-align:center; border: 1px solid #000; padding: 6px; font-size: 0.85rem; line-height: 1.6;">
                                <a href="궁하항.html" style="color: #0055AA; text-decoration: none;">궁하항</a> · <a href="천주여객선터미널.html" style="color: #0055AA; text-decoration: none;">천주여객선터미널</a> · <a href="장곡여객선터미널.html" style="color: #0055AA; text-decoration: none;">장곡여객선터미널</a> · <a href="서해항.html" style="color: #0055AA; text-decoration: none;">서해항</a> · <a href="강주항.html" style="color: #0055AA; text-decoration: none;">강주항</a> · <a href="풍영여객선터미널.html" style="color: #0055AA; text-decoration: none;">풍영여객선터미널</a> · <a href="전산항.html" style="color: #0055AA; text-decoration: none;">전산항</a> · <a href="서진항.html" style="color: #0055AA; text-decoration: none;">서진항</a> · <a href="군천항.html" style="color: #0055AA; text-decoration: none;">군천항</a>
                            </td>
                            <td style="text-align:center; border: 1px solid #000; padding: 6px; font-size: 0.85rem; line-height: 1.6;">
                                <a href="비천항.html" style="color: #0055AA; text-decoration: none;">비천항</a> · <a href="운진항.html" style="color: #0055AA; text-decoration: none;">운진항</a> · <a href="마진항.html" style="color: #0055AA; text-decoration: none;">마진항</a> · <a href="방산항.html" style="color: #0055AA; text-decoration: none;">방산항</a> · <a href="낙주항.html" style="color: #0055AA; text-decoration: none;">낙주항</a>
                            </td>
                        </tr>

                        <tr>
                            <td rowspan="2" style="background:#AAA; font-weight:bold; text-align: center; border: 1px solid #000; padding: 6px;">철도</td>
                            <td style="text-align:center; border: 1px solid #000; padding: 6px;"><a href="효빈광역시_교통.html" style="color: #0055AA; text-decoration: none; font-weight: bold;">역 목록</a></td>
                            <td style="text-align:center; border: 1px solid #000; padding: 6px;"><a href="덕빈북도_교통.html" style="color: #0055AA; text-decoration: none; font-weight: bold;">역 목록</a></td>
                            <td style="text-align:center; border: 1px solid #000; padding: 6px;"><a href="덕빈남도_교통.html" style="color: #0055AA; text-decoration: none; font-weight: bold;">역 목록</a></td>
                        </tr>

                        <tr>
                            <!-- 효빈권 전철 -->
                            <td style="text-align:center; border: 1px solid #000; vertical-align: top; padding: 12px 6px;">
                                <div style="margin-bottom: 8px;">
                                    <a href="효빈권전철.html" style="color: #0055AA; text-decoration: none; font-weight: bold;">효빈권 전철</a>
                                </div>
                                <div style="display: flex; flex-direction: column; align-items: center; gap: 6px;">
                                    <div style="display: flex; justify-content: center; align-items: center; gap: 4px;">
                                        <span style="font-weight:bold;">(</span>
                                        <a href="1호선.html" style="display:inline-block;"><img src="이미지/svg/효빈1호선.svg" alt="1호선" style="height:22px; width:auto; display:inline-block !important; vertical-align:middle; margin:0;"></a>
                                        <span style="font-weight:bold;">·</span>
                                        <a href="2호선.html" style="display:inline-block;"><img src="이미지/svg/효빈2호선.svg" alt="2호선" style="height:22px; width:auto; display:inline-block !important; vertical-align:middle; margin:0;"></a>
                                        <span style="font-weight:bold;">·</span>
                                        <a href="3호선.html" style="display:inline-block;"><img src="이미지/svg/효빈3호선.svg" alt="3호선" style="height:22px; width:auto; display:inline-block !important; vertical-align:middle; margin:0;"></a>
                                        <span style="font-weight:bold;">·</span>
                                        <a href="4호선.html" style="display:inline-block;"><img src="이미지/svg/효빈4호선.svg" alt="4호선" style="height:22px; width:auto; display:inline-block !important; vertical-align:middle; margin:0;"></a>
                                        <span style="font-weight:bold;">·</span>
                                        <a href="5호선.html" style="display:inline-block;"><img src="이미지/svg/효빈5호선.svg" alt="5호선" style="height:22px; width:auto; display:inline-block !important; vertical-align:middle; margin:0;"></a>
                                    </div>
                                    <div style="display: flex; justify-content: center; align-items: center; gap: 4px;">
                                        <a href="6호선.html" style="display:inline-block;"><img src="이미지/svg/효빈6호선.svg" alt="6호선" style="height:22px; width:auto; display:inline-block !important; vertical-align:middle; margin:0;"></a>
                                        <span style="font-weight:bold;">·</span>
                                        <a href="7호선.html" style="display:inline-block;"><img src="이미지/svg/효빈7호선.svg" alt="7호선" style="height:22px; width:auto; display:inline-block !important; vertical-align:middle; margin:0;"></a>
                                        <span style="font-weight:bold;">·</span>
                                        <a href="8호선.html" style="display:inline-block;"><img src="이미지/svg/효빈8호선.svg" alt="8호선" style="height:22px; width:auto; display:inline-block !important; vertical-align:middle; margin:0;"></a>
                                        <span style="font-weight:bold;">·</span>
                                        <a href="빈효선.html" style="display:inline-block;"><img src="이미지/svg/빈효광역선.svg" alt="빈효선" style="height:22px; width:auto; display:inline-block !important; vertical-align:middle; margin:0;"></a>
                                        <span style="font-weight:bold;">·</span>
                                        <a href="창전선.html" style="display:inline-block;"><del><img src="이미지/svg/창전선.svg" alt="창전선" style="height:22px; width:auto; display:inline-block !important; vertical-align:middle; opacity:0.5; margin:0;"></del></a>
                                        <span style="font-weight:bold;">)</span>
                                    </div>
                                </div>
                            </td>

                            <!-- 덕북권 전철 -->
                            <td style="text-align:center; border: 1px solid #000; vertical-align: top; padding: 12px 6px;">
                                <div style="margin-bottom: 10px;">
                                    <a href="덕북권_전철.html" style="color: #0054A6; font-size: 1.05em; font-weight: bold; text-decoration: none;">덕북권 전철</a>
                                </div>
                                <div style="margin-bottom: 6px;">
                                    <a href="빈주권_전철.html" style="color: #0055AA; text-decoration: none; font-weight: bold;">빈주권 전철</a>
                                </div>
                                <div style="display: flex; flex-wrap: wrap; justify-content: center; align-items: center; gap: 4px; margin-bottom: 12px;">
                                    <span style="font-weight:bold;">(</span>
                                    <a href="빈주1호선.html" style="display:inline-block;"><img src="이미지/svg/빈주1.svg" alt="빈주1호선" style="height:22px; width:auto; display:inline-block !important; vertical-align:middle; margin:0;"></a>
                                    <span style="font-weight:bold;">·</span>
                                    <a href="빈주2호선.html" style="display:inline-block;"><img src="이미지/svg/빈주2.svg" alt="빈주2호선" style="height:22px; width:auto; display:inline-block !important; vertical-align:middle; margin:0;"></a>
                                    <span style="font-weight:bold;">·</span>
                                    <a href="빈주광역철도.html" style="display:inline-block;"><img src="이미지/svg/빈주광역선.svg" alt="빈주광역선" style="height:22px; width:auto; display:inline-block !important; vertical-align:middle; margin:0;"></a>
                                    <span style="font-weight:bold;">)</span>
                                </div>
                                
                                <div style="margin-bottom: 4px;">
                                    <a href="서해경전철.html" style="color: #aaa; text-decoration: line-through; font-weight: bold;">서해경전철</a>
                                </div>
                                <div style="display: flex; flex-wrap: wrap; justify-content: center; align-items: center; gap: 4px; margin-bottom: 12px;">
                                    <span style="color: #aaa; font-weight:bold;">(</span>
                                    <a href="서해경전철.html" style="display:inline-block;"><del><img src="이미지/svg/서해경전철.svg" alt="서해경전철" style="height:22px; width:auto; display:inline-block !important; vertical-align:middle; opacity:0.5; margin:0;" onerror="this.style.display='none'"></del></a>
                                    <span style="color: #aaa; font-weight:bold;">)</span>
                                </div>

                                <div style="margin-bottom: 4px;">
                                    <a href="천주1호선.html" style="color: #aaa; text-decoration: line-through; font-weight: bold;">천주1호선</a>
                                </div>
                                <div style="display: flex; flex-wrap: wrap; justify-content: center; align-items: center; gap: 4px;">
                                    <span style="color: #aaa; font-weight:bold;">(</span>
                                    <a href="천주1호선.html" style="display:inline-block;"><del><img src="이미지/svg/천주1.svg" alt="천주1호선" style="height:22px; width:auto; display:inline-block !important; vertical-align:middle; opacity:0.5; margin:0;" onerror="this.style.display='none'"></del></a>
                                    <span style="color: #aaa; font-weight:bold;">)</span>
                                </div>
                            </td>

                            <!-- 덕남권 전철 -->
                            <td style="text-align:center; border: 1px solid #000; vertical-align: top; padding: 12px 6px;">
                                <div style="margin-bottom: 6px;">
                                    <a href="덕남권_전철.html" style="color: #0055AA; text-decoration: none; font-weight: bold;">덕남권 전철</a>
                                </div>
                                <div style="display: flex; flex-wrap: wrap; justify-content: center; align-items: center; gap: 4px;">
                                    <span style="font-weight:bold;">(</span>
                                    <a href="덕주1호선.html" style="display:inline-block;"><img src="이미지/svg/덕주1.svg" alt="덕주1호선" style="height:22px; width:auto; display:inline-block !important; vertical-align:middle; margin:0;"></a>
                                    <span style="font-weight:bold;">·</span>
                                    <a href="덕남권_광역철도.html" style="display:inline-block;"><del><img src="이미지/svg/덕남권광역철도.svg" alt="덕남권광역철도" style="height:22px; width:auto; display:inline-block !important; vertical-align:middle; opacity:0.5; margin:0;"></del></a>
                                    <span style="font-weight:bold;">)</span>
                                </div>
                            </td>
                        </tr>

                        <!-- 광역급행철도(HDTX) 병합 행 -->
                        <tr>
                            <td style="background:#AAA; font-weight:bold; text-align: center; border: 1px solid #000; padding: 6px;">HDTX</td>
                            <td colspan="3" style="text-align:center; border: 1px solid #000; padding: 10px 6px;">
                                <div style="display:flex; flex-wrap: wrap; align-items:center; justify-content:center; gap: 6px;">
                                    <a href="HDTX.html" style="color: #aaa; text-decoration: line-through; font-weight: bold; margin-right:4px; vertical-align:middle;">광역급행철도 (HDTX)</a>
                                    <span style="color: #aaa; font-weight:bold;">(</span>
                                    <a href="HDTX-A.html" style="display:inline-block;"><del><img src="이미지/svg/HDTXA.svg" alt="HDTX-A" style="height:22px; width:auto; display:inline-block !important; vertical-align:middle; opacity:0.5; margin:0;"></del></a>
                                    <span style="color: #aaa; font-weight:bold;">·</span>
                                    <a href="HDTX-B.html" style="display:inline-block;"><del><img src="이미지/svg/HDTXB.svg" alt="HDTX-B" style="height:22px; width:auto; display:inline-block !important; vertical-align:middle; opacity:0.5; margin:0;"></del></a>
                                    <span style="color: #aaa; font-weight:bold;">)</span>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td style="background:#AAA; font-weight:bold; text-align: center; border: 1px solid #000; padding: 6px;">버스</td>
                            <td style="text-align:center; border: 1px solid #000; padding: 6px;"><a href="효빈광역시의_버스_터미널.html" style="color: #0055AA; text-decoration: none;">터미널 목록</a><br><a href="효빈광역시 시내버스.html" style="color: #0055AA; text-decoration: none;">효빈광역시 시내버스</a></td>
                            <td style="text-align:center; border: 1px solid #000; padding: 6px;">
                                <a href="덕빈북도의 버스 터미널.html" style="color: #0055AA; text-decoration: none;">터미널 목록</a><br>
                                <a href="덕빈북도 시내/농어촌버스.html" style="color: #0055AA; text-decoration: none;">덕빈북도 시내/농어촌버스</a>
                            </td>
                            <td style="text-align:center; border: 1px solid #000; padding: 6px;">
                                <a href="덕빈남도의 버스 터미널.html" style="color: #0055AA; text-decoration: none;">터미널 목록</a><br>
                                <a href="덕빈남도 시내버스.html" style="color: #0055AA; text-decoration: none;">덕빈남도 시내버스</a>
                            </td>
                        </tr>

                        <tr>
                            <td style="background:#AAA; font-weight:bold; text-align: center; border: 1px solid #000; padding: 6px;">교통카드</td>
                            <td colspan="2" style="text-align:center; border: 1px solid #000; padding: 6px;">
                                <a href="이즐.html" style="color: #0055AA; text-decoration: none;">이즐</a> · <a href="티머니.html" style="color: #0055AA; text-decoration: none;">티머니</a> · <a href="효빈덕북교통카드.html" style="color: #0055AA; text-decoration: none;">효빈덕북교통카드</a> 등
                            </td>
                            <td style="text-align:center; border: 1px solid #000; padding: 6px;">
                                <a href="덕남카드.html" style="color: #0055AA; text-decoration: none;">덕남카드</a>
                            </td>
                        </tr>

                        <tr>
                            <td style="background:#AAA; font-weight:bold; text-align: center; border: 1px solid #000;"></td>
                            <td colspan="2" style="text-align:center; border: 1px solid #000; padding: 6px;">
                                <a href="효빈덕북권_광역환승제.html" style="color: #0055AA; text-decoration: none; font-weight: bold;">효빈덕북권 광역환승제</a>
                            </td>
                            <td style="text-align:center; border: 1px solid #000; padding: 6px;">
                                <a href="덕남권_환승제.html" style="color: #0055AA; text-decoration: none; font-weight: bold;">덕남권 환승제</a>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    `;

    if (typeof window.toggleFold === 'undefined') {
        window.toggleFold = function(id) {
            const content = document.getElementById(id);
            if (content) {
                content.style.display = (content.style.display === "block" || content.style.display === "") ? "none" : "block";
            }
        };
    }

    // HTML에 직접 주입 (기존 찌꺼기 표 완벽 교체)
    const renderZone = document.getElementById('template-render-zone') || document.getElementById('deokbuk-transit-zone');
    if (renderZone) {
        renderZone.innerHTML = templateHTML;
    } else if (document.currentScript) {
        document.currentScript.insertAdjacentHTML('afterend', templateHTML);
    } else {
        document.body.insertAdjacentHTML('beforeend', templateHTML);
    }
})();