document.addEventListener("DOMContentLoaded", function() {
    
    // 국민의힘 브랜드 메인 컬러 및 테두리 색상
    const pppRed = "#E61E2B";
    const linkColor = "#0066cc";
    const borderColor = "#ddd";

    const pppMinseon9NavHTML = `
    <div style="border: 1px solid ${pppRed}; border-radius: 2px; margin-bottom: 20px; box-shadow: 0 1px 2px rgba(0,0,0,0.1); background-color: #fff; overflow: hidden; font-family: sans-serif;">
        
        <!-- 상단 헤더 영역 (국민의힘 로고 + 타이틀) -->
        <div style="background-color: ${pppRed}; padding: 12px 15px; text-align: center; display: flex; align-items: center; justify-content: center; gap: 12px; color: #fff;">
            
            <!-- 국민의힘 로고 배지 -->
            <div style="background-color: #fff; color: ${pppRed}; padding: 3px 8px; border-radius: 3px; font-weight: 900; font-size: 0.85em; display: inline-flex; flex-direction: column; align-items: center; justify-content: center; line-height: 1.1; box-shadow: 0 1px 3px rgba(0,0,0,0.2);">
                <span style="font-size: 0.65em; letter-spacing: -0.5px; opacity: 0.9;">국민의</span>
                <span style="font-size: 1.05em; font-weight: 900; letter-spacing: -1px;">힘</span>
            </div>
            
            <!-- 타이틀 텍스트 -->
            <div style="text-align: left; line-height: 1.2;">
                <div style="font-size: 1.15em; font-weight: 900; letter-spacing: -0.5px;">민선 9기 광역자치단체장</div>
            </div>
        </div>

        <!-- 펼치기 / 접기 영역 -->
        <details class="wiki-folder" open="" style="margin: 0; border: none;">
            <summary class="wiki-folder-summary" style="border: none; border-bottom: 1px solid ${borderColor}; background-color: #fff; padding: 8px; font-weight: bold; text-align: center; cursor: pointer; color: #333; list-style: none;">[ 펼치기 · 접기 ]</summary>
            
            <div class="wiki-folder-content" style="padding: 0;">
                <table style="width: 100%; border-collapse: collapse; text-align: center; font-size: 0.9em; table-layout: fixed; margin: 0;">
                    <tbody>
                        
                        <!-- 1행: 박완수, 오세훈, 이철우, 추경호 (가나다순) -->
                        <tr style="background-color: #fff;">
                            <td style="padding: 10px 5px; border: 1px solid ${borderColor};">
                                <a href="박완수.html" style="color: ${linkColor}; text-decoration: none;">박완수</a>
                            </td>
                            <td style="padding: 10px 5px; border: 1px solid ${borderColor};">
                                <a href="오세훈.html" style="color: ${linkColor}; text-decoration: none;">오세훈</a>
                            </td>
                            <td style="padding: 10px 5px; border: 1px solid ${borderColor};">
                                <a href="이철우.html" style="color: ${linkColor}; text-decoration: none;">이철우</a>
                            </td>
                            <td style="padding: 10px 5px; border: 1px solid ${borderColor};">
                                <a href="추경호.html" style="color: ${linkColor}; text-decoration: none;">추경호</a>
                            </td>
                        </tr>

                        <!-- 하단 정당 이동 바 (더불어민주당) -->
                        <tr>
                            <td colspan="4" style="background-color: ${pppRed}; color: #fff; padding: 8px; border: 1px solid ${pppRed}; font-weight: bold; text-align: center;">
                                <a href="더불어민주당.html" style="color: #fff; text-decoration: none;">더불어민주당</a>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </details>
    </div>
    `;

    // 클래스명 "minseon9-ppp-nav-container" 또는 ID "minseon9-ppp-nav-container" 요소에 연결
    const container = document.getElementById("minseon9-ppp-nav-container") || document.querySelector(".minseon9-ppp-nav-container");
    if (container) {
        container.innerHTML = pppMinseon9NavHTML;
    } else {
        console.warn("국민의힘 민선 9기 광역자치단체장 둘러보기 틀을 삽입할 '.minseon9-ppp-nav-container' 요소를 찾을 수 없습니다.");
    }
});