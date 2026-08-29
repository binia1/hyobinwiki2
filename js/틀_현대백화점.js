document.addEventListener("DOMContentLoaded", function() {
    
    // 현대백화점 다크그린 브랜드 컬러
    const hyundaiGreen = "#365440";
    const connectYellow = "#F3F700";
    const uplexPink = "#E3007F";
    const darkGreyTag = "#444";

    const hyundaiNavHTML = `
    <div style="border: 1px solid #ccc; border-radius: 2px; margin-bottom: 20px; box-shadow: 0 1px 2px rgba(0,0,0,0.1); background-color: #fff; overflow: hidden; font-family: sans-serif;">
        
        <!-- 상단 배너 영역 (사진의 THE HYUNDAI 로고 디자인 완벽 반영) -->
        <div style="background-color: ${hyundaiGreen}; padding: 15px; text-align: center; display: flex; align-items: center; justify-content: center; gap: 15px;">
            <div style="border: 1.5px solid #fff; padding: 4px 12px; display: inline-block; text-align: center; color: #fff;">
                <div style="font-size: 0.7em; letter-spacing: 1px; margin-bottom: 2px;">THE</div>
                <div style="font-size: 1.1em; font-weight: bold; letter-spacing: 0.5px;">HYUNDAI</div>
            </div>
            <div style="width: 1px; height: 35px; background-color: rgba(255,255,255,0.4);"></div>
            <div style="text-align: left; line-height: 1.2; color: #fff;">
                <div style="font-size: 1.1em; font-weight: bold; letter-spacing: -0.5px;">현대백화점</div>
                <div style="font-size: 0.9em; letter-spacing: -0.5px; opacity: 0.9;">점포 목록</div>
            </div>
        </div>

        <details class="wiki-folder" open="" style="margin: 0; border: none;">
            <summary class="wiki-folder-summary" style="border: none; border-bottom: 1px solid #ccc; background-color: #fff; padding: 8px; font-weight: bold; text-align: center; cursor: pointer; color: #333; list-style: none;">[ 펼치기 · 접기 ]</summary>
            
            <div class="wiki-folder-content" style="padding: 0;">
                <table style="width: 100%; border-collapse: collapse; text-align: center; font-size: 0.9em; table-layout: fixed; margin: 0;">
                    <tbody>
                        
                        <!-- 1. 더현대 -->
                        <tr>
                            <th colspan="4" style="background-color: ${hyundaiGreen}; color: #fff; padding: 7px; border: 1px solid #ccc; font-weight: bold;">더현대</th>
                        </tr>
                        <tr style="background-color: #fff; border-bottom: 1px solid #eee;">
                            <td style="padding: 10px; border: 1px solid #ccc; text-align: center; word-break: keep-all; line-height: 1.8;">
                                <a href="#" style="color: #0066cc; text-decoration: none;">더현대 서울</a>
                            </td>
                            <td style="padding: 10px; border: 1px solid #ccc; text-align: center; word-break: keep-all; line-height: 1.8;">
                                <a href="#" style="color: #0066cc; text-decoration: none;">더현대 대구</a>
                            </td>
                            <td style="padding: 10px; border: 1px solid #ccc; text-align: center; word-break: keep-all; line-height: 1.8;">
                                <a href="#" style="color: #0066cc; text-decoration: none;">더현대 부산</a>
                                <span style="display:inline-block; background:${darkGreyTag}; color:#fff; font-size:0.7em; padding:1px 4px; border-radius:2px; margin-left:2px; font-weight:bold; letter-spacing:-0.5px;">건설 중</span>
                            </td>
                            <td style="padding: 10px; border: 1px solid #ccc; text-align: center; word-break: keep-all; line-height: 1.8;">
                                <a href="#" style="color: #0066cc; text-decoration: none;">더현대 광주</a>
                                <span style="display:inline-block; background:${darkGreyTag}; color:#fff; font-size:0.7em; padding:1px 4px; border-radius:2px; margin-left:2px; font-weight:bold; letter-spacing:-0.5px;">건설 중</span>
                            </td>
                        </tr>
                        <tr style="background-color: #fff;">
                            <td colspan="4" style="padding: 10px; border: 1px solid #ccc; text-align: center; word-break: keep-all; line-height: 1.8; background-color: #fcfcfc;">
                                <a href="#" style="color: #0066cc; text-decoration: none; font-weight: bold;">더현대 창전</a>
                                <span style="display:inline-block; background:${darkGreyTag}; color:#fff; font-size:0.7em; padding:1px 4px; border-radius:2px; margin-left:2px; font-weight:bold; letter-spacing:-0.5px;">건설 중</span>
                            </td>
                        </tr>

                        <!-- 2. 현대백화점 -->
                        <tr>
                            <th colspan="4" style="background-color: ${hyundaiGreen}; color: #fff; padding: 7px; border: 1px solid #ccc; font-weight: bold;">현대백화점</th>
                        </tr>
                        
                        <tr style="background-color: #fff;">
                            <td style="padding: 10px 5px; border: 1px solid #ccc; text-align: center; word-break: keep-all;">
                                <a href="#" style="color: #0066cc; text-decoration: none;">압구정본점</a>
                            </td>
                            <td style="padding: 10px 5px; border: 1px solid #ccc; text-align: center; word-break: keep-all;">
                                <a href="#" style="color: #0066cc; text-decoration: none;">무역센터점</a>
                            </td>
                            <td style="padding: 10px 5px; border: 1px solid #ccc; text-align: center; word-break: keep-all;">
                                <a href="#" style="color: #0066cc; text-decoration: none;">천호점</a>
                            </td>
                            <td style="padding: 10px 5px; border: 1px solid #ccc; text-align: center; word-break: keep-all;">
                                <a href="#" style="color: #0066cc; text-decoration: none;">신촌점</a>
                                <span style="display:inline-block; background:${uplexPink}; color:#fff; font-size:0.75em; padding:1px 4px; border-radius:2px; margin-left:2px; font-weight:bold; letter-spacing:-0.5px;">U-PLEX</span>
                            </td>
                        </tr>
                        <tr style="background-color: #fff;">
                            <td style="padding: 10px 5px; border: 1px solid #ccc; text-align: center; word-break: keep-all;">
                                <a href="#" style="color: #0066cc; text-decoration: none;">미아점</a>
                            </td>
                            <td style="padding: 10px 5px; border: 1px solid #ccc; text-align: center; word-break: keep-all;">
                                <a href="#" style="color: #0066cc; text-decoration: none;">목동점</a>
                            </td>
                            <td style="padding: 10px 5px; border: 1px solid #ccc; text-align: center; word-break: keep-all;">
                                <a href="#" style="color: #0066cc; text-decoration: none;">중동점</a>
                                <span style="display:inline-block; background:${uplexPink}; color:#fff; font-size:0.75em; padding:1px 4px; border-radius:2px; margin-left:2px; font-weight:bold; letter-spacing:-0.5px;">U-PLEX</span>
                            </td>
                            <td style="padding: 10px 5px; border: 1px solid #ccc; text-align: center; word-break: keep-all;">
                                <a href="#" style="color: #0066cc; text-decoration: none;">킨텍스점</a>
                            </td>
                        </tr>
                        <tr style="background-color: #fff;">
                            <td style="padding: 10px 5px; border: 1px solid #ccc; text-align: center; word-break: keep-all;">
                                <a href="#" style="color: #0066cc; text-decoration: none;">판교점</a>
                                <span style="display:inline-block; background:${uplexPink}; color:#fff; font-size:0.75em; padding:1px 4px; border-radius:2px; margin-left:2px; font-weight:bold; letter-spacing:-0.5px;">U-PLEX</span>
                            </td>
                            <td style="padding: 10px 5px; border: 1px solid #ccc; text-align: center; word-break: keep-all; background-color: #f4f8ff;">
                                <a href="현대백화점_효빈점.html" style="color: #0066cc; text-decoration: none; font-weight: bold;">효빈점</a>
                            </td>
                            <td style="padding: 10px 5px; border: 1px solid #ccc; text-align: center; word-break: keep-all;">
                                <a href="#" style="color: #0066cc; text-decoration: none;">울산점 <span style="color:#666; font-size:0.9em;">(울산점 동구)</span></a>
                            </td>
                            <td style="padding: 10px 5px; border: 1px solid #ccc; text-align: center; word-break: keep-all;">
                                <a href="#" style="color: #0066cc; text-decoration: none;">충청점</a>
                            </td>
                        </tr>

                        <!-- 3. 더현대 글로벌 & 커넥트현대 -->
                        <tr>
                            <th colspan="2" style="background-color: ${hyundaiGreen}; color: #fff; padding: 7px; border: 1px solid #ccc; font-weight: bold; width: 50%;">더현대 글로벌</th>
                            <th colspan="2" style="background-color: ${connectYellow}; color: #000; padding: 7px; border: 1px solid #ccc; font-weight: bold; width: 50%;">커넥트현대</th>
                        </tr>
                        <tr style="background-color: #fff;">
                            <td colspan="2" style="padding: 10px; border: 1px solid #ccc; text-align: center; word-break: keep-all;">
                                <!-- 일본 국기 CSS 아이콘 구현 -->
                                <span style="display:inline-block; width:16px; height:11px; background:#fff; border:1px solid #aaa; border-radius:1px; vertical-align:middle; position:relative; margin-right:5px; margin-bottom: 2px;">
                                    <span style="display:block; width:6px; height:6px; background:#bc002d; border-radius:50%; position:absolute; top:50%; left:50%; transform:translate(-50%, -50%);"></span>
                                </span>
                                <a href="#" style="color: #0066cc; text-decoration: none;">더현대 오모테산도</a>
                            </td>
                            <td style="padding: 10px; border: 1px solid #ccc; text-align: center; word-break: keep-all;">
                                <a href="#" style="color: #0066cc; text-decoration: none;">커넥트현대 부산</a>
                            </td>
                            <td style="padding: 10px; border: 1px solid #ccc; text-align: center; word-break: keep-all;">
                                <a href="#" style="color: #0066cc; text-decoration: none;">커넥트현대 청주</a>
                            </td>
                        </tr>

                        <!-- 하단 주석 -->
                        <tr style="background-color: #fff;">
                            <td colspan="4" style="padding: 10px; border: 1px solid #ccc; text-align: center; font-size: 0.85em; color: #555;">
                                <span style="display:inline-block; background-color:#008000; color:#fff; padding: 2px 5px; border-radius:3px; margin-right:5px; font-weight:bold; letter-spacing:-1px;">🔗</span>
                                공식 웹사이트 기재순
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </details>
    </div>
    `;

    // HTML에 작성한 id "hyundai-nav-container"를 찾습니다.
    const container = document.getElementById("hyundai-nav-container");
    if (container) {
        container.innerHTML = hyundaiNavHTML;
    } else {
        // 혹시 id 대신 class로 선언한 경우를 위한 안전 장치
        const fallbackContainer = document.querySelector(".hyundai-nav-container");
        if(fallbackContainer) {
            fallbackContainer.innerHTML = hyundaiNavHTML;
        }
    }
});