document.addEventListener("DOMContentLoaded", function() {
    
    // NC백화점 브랜드 컬러 (사진에서 추출한 베이지/골드 계열)
    const ncBeige = "#D6C7AE"; 
    const linkColor = "#0066cc";
    const borderColor = "#ddd";

    const ncNavHTML = `
    <div style="border: 1px solid #ccc; border-radius: 2px; margin-bottom: 20px; box-shadow: 0 1px 2px rgba(0,0,0,0.1); background-color: #fff; overflow: hidden; font-family: sans-serif;">
        
        <!-- 상단 배너 영역 (로고 및 타이틀) -->
        <div style="background-color: ${ncBeige}; padding: 15px; display: flex; align-items: center; justify-content: center; gap: 15px; border-bottom: 1px solid #ccc;">
            
            <!-- 좌측 NC 로고 텍스트 스타일링 -->
            <div style="text-align: right; color: #222;">
                <div style="font-weight: 900; font-size: 1.8em; line-height: 1; letter-spacing: -2px; font-family: 'Arial Black', sans-serif;">NC</div>
                <div style="font-size: 0.45em; font-weight: bold; letter-spacing: 0.5px; margin-top: 2px;">DEPARTMENT STORE</div>
            </div>
            
            <!-- 중앙 구분선 -->
            <div style="width: 1px; height: 35px; background-color: rgba(0,0,0,0.2);"></div>
            
            <!-- 우측 텍스트 -->
            <div style="text-align: left; line-height: 1.3;">
                <div style="font-size: 1.15em; font-weight: 900; color: #222; letter-spacing: -0.5px;">NC백화점</div>
                <div style="font-size: 0.75em; color: #444; letter-spacing: 0.5px;">NC DEPARTMENT STORE</div>
            </div>
        </div>

        <details class="wiki-folder" open="" style="margin: 0; border: none;">
            <summary class="wiki-folder-summary" style="border: none; border-bottom: 1px solid ${borderColor}; background-color: #fff; padding: 8px; font-weight: bold; text-align: center; cursor: pointer; color: #333; list-style: none;">[ 펼치기 · 접기 ]</summary>
            
            <div class="wiki-folder-content" style="padding: 0;">
                <table style="width: 100%; border-collapse: collapse; text-align: center; font-size: 0.9em; table-layout: fixed; margin: 0;">
                    <tbody>
                        
                        <!-- 1. 수도권 -->
                        <tr>
                            <th colspan="4" style="background-color: ${ncBeige}; color: #333; padding: 7px; border: 1px solid ${borderColor}; font-weight: bold;">수도권</th>
                        </tr>
                        <tr style="background-color: #fff;">
                            <td style="padding: 10px 5px; border: 1px solid ${borderColor}; width: 25%;">
                                <a href="#" style="color: ${linkColor}; text-decoration: none;">강서점</a>
                            </td>
                            <td style="padding: 10px 5px; border: 1px solid ${borderColor}; width: 25%;">
                                <a href="#" style="color: ${linkColor}; text-decoration: none;">신구로점</a>
                            </td>
                            <td style="padding: 10px 5px; border: 1px solid ${borderColor}; width: 25%;">
                                <a href="#" style="color: ${linkColor}; text-decoration: none;">불광점</a>
                            </td>
                            <td style="padding: 10px 5px; border: 1px solid ${borderColor}; width: 25%;">
                                <a href="#" style="color: ${linkColor}; text-decoration: none;">송파점</a>
                            </td>
                        </tr>
                        <tr style="background-color: #fff;">
                            <td style="padding: 10px 5px; border: 1px solid ${borderColor};">
                                <a href="#" style="color: ${linkColor}; text-decoration: none;">야탑점</a>
                            </td>
                            <td style="padding: 10px 5px; border: 1px solid ${borderColor};">
                                <a href="#" style="color: ${linkColor}; text-decoration: none;">고잔점</a>
                            </td>
                            <td style="padding: 10px 5px; border: 1px solid ${borderColor};">
                                <a href="#" style="color: ${linkColor}; text-decoration: none;">수원터미널점</a>
                            </td>
                            <td style="padding: 10px 5px; border: 1px solid ${borderColor}; line-height: 1.4;">
                                <a href="#" style="color: ${linkColor}; text-decoration: none;">구의점<br><span style="font-size: 0.85em;">(이스트폴)</span></a>
                            </td>
                        </tr>

                        <!-- 2. 비수도권 -->
                        <tr>
                            <th colspan="4" style="background-color: ${ncBeige}; color: #333; padding: 7px; border: 1px solid ${borderColor}; font-weight: bold;">비수도권</th>
                        </tr>
                        <tr style="background-color: #fff;">
                            <td style="padding: 10px 5px; border: 1px solid ${borderColor};">
                                <a href="#" style="color: ${linkColor}; text-decoration: none;">유성점</a>
                            </td>
                            <td style="padding: 10px 5px; border: 1px solid ${borderColor};">
                                <a href="#" style="color: ${linkColor}; text-decoration: none;">중앙로역점</a>
                            </td>
                            <td style="padding: 10px 5px; border: 1px solid ${borderColor};">
                                <a href="#" style="color: ${linkColor}; text-decoration: none;">청주점</a>
                            </td>
                            <td style="padding: 10px 5px; border: 1px solid ${borderColor};">
                                <a href="#" style="color: ${linkColor}; text-decoration: none;">광주역점</a>
                            </td>
                        </tr>
                        <tr style="background-color: #fff;">
                            <td style="padding: 10px 5px; border: 1px solid ${borderColor};">
                                <a href="#" style="color: ${linkColor}; text-decoration: none;">웨이브 충장점</a>
                            </td>
                            <td style="padding: 10px 5px; border: 1px solid ${borderColor};">
                                <a href="#" style="color: ${linkColor}; text-decoration: none;">웨이브 전주점</a>
                            </td>
                            <td style="padding: 10px 5px; border: 1px solid ${borderColor};">
                                <a href="#" style="color: ${linkColor}; text-decoration: none;">순천점</a>
                            </td>
                            <td style="padding: 10px 5px; border: 1px solid ${borderColor};">
                                <a href="#" style="color: ${linkColor}; text-decoration: none;">아울렛 엑스코점</a>
                            </td>
                        </tr>
                        
                        <tr style="background-color: #fff;">
                            <td style="padding: 10px 5px; border: 1px solid ${borderColor};">
                                <a href="#" style="color: ${linkColor}; text-decoration: none;">경산점</a>
                            </td>
                            <td style="padding: 10px 5px; border: 1px solid ${borderColor};">
                                <a href="#" style="color: ${linkColor}; text-decoration: none;">부산대점</a>
                            </td>
                            <td style="padding: 10px 5px; border: 1px solid ${borderColor};">
                                <a href="#" style="color: ${linkColor}; text-decoration: none;">해운대점</a>
                            </td>
                            <td style="padding: 10px 5px; border: 1px solid ${borderColor}; background-color: #fcfcfc;">
                                <a href="효빈점.html" style="color: ${linkColor}; text-decoration: none; font-weight: bold;">효빈점</a>
                            </td>
                        </tr>
                        <tr style="background-color: #fff;">
                            <td style="padding: 10px 5px; border: 1px solid ${borderColor}; background-color: #fcfcfc;">
                                <a href="낙주점.html" style="color: ${linkColor}; text-decoration: none; font-weight: bold;">낙주점</a>
                            </td>
                            <td style="padding: 10px 5px; border: 1px solid ${borderColor}; background-color: #fcfcfc;">
                                <a href="서해점.html" style="color: ${linkColor}; text-decoration: none; font-weight: bold;">서해점</a>
                            </td>
                            <td style="padding: 10px 5px; border: 1px solid ${borderColor};"></td>
                            <td style="padding: 10px 5px; border: 1px solid ${borderColor};"></td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </details>
    </div>
    `;

    // HTML에 작성한 id "nc-nav-container"를 찾아서 주입
    const container = document.getElementById("nc-nav-container");
    if (container) {
        container.innerHTML = ncNavHTML;
    } else {
        // Fallback for classes
        const fallbackContainer = document.querySelector(".nc-nav-container");
        if(fallbackContainer) {
            fallbackContainer.innerHTML = ncNavHTML;
        }
    }
});