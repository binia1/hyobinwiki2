document.addEventListener("DOMContentLoaded", function() {
    
    // 조국혁신당 브랜드 메인 컬러 및 테두리/링크 스타일 정의 (트루 블루)
    const jogukBlue = "#0073CF"; 
    const linkColor = "#0066cc";
    const borderColor = "#ddd";

    // 조국혁신당 민선 9기 기초자치단체장 명단
    const rawNames = [
        "김태성", "사순문", "조우영"
    ];

    // 중복 제거 및 가나다순 정렬
    const sortedNames = Array.from(new Set(rawNames)).sort((a, b) => {
        return a.localeCompare(b, 'ko');
    });

    // 5열(Columns) 구조 생성
    let tableRowsHTML = '';
    const columns = 5;
    for (let i = 0; i < sortedNames.length; i += columns) {
        tableRowsHTML += '<tr style="background-color: #fff;">';
        for (let j = 0; j < columns; j++) {
            const index = i + j;
            if (index < sortedNames.length) {
                const nameKey = sortedNames[index];
                tableRowsHTML += `
                    <td style="padding: 10px 5px; border: 1px solid ${borderColor}; width: 20%; line-height: 1.3;">
                        <a href="${nameKey}.html" style="color: ${linkColor}; text-decoration: none;">${nameKey}</a>
                    </td>`;
            } else {
                tableRowsHTML += `<td style="padding: 10px 5px; border: 1px solid ${borderColor}; width: 20%; background-color: #f8f9fa;"></td>`;
            }
        }
        tableRowsHTML += '</tr>';
    }

    const minseon9GichoJogukNavHTML = `
    <div style="border: 1px solid ${jogukBlue}; border-radius: 2px; margin-bottom: 20px; box-shadow: 0 1px 2px rgba(0,0,0,0.1); background-color: #fff; overflow: hidden; font-family: sans-serif;">
        
        <!-- 상단 헤더 영역 -->
        <div style="background-color: ${jogukBlue}; padding: 12px 15px; text-align: center; display: flex; align-items: center; justify-content: center; gap: 12px; color: #fff;">
            
            <!-- 조국혁신당 로고 배지 (흰색 아이콘/로고타입) -->
            <div style="background-color: #fff; color: ${jogukBlue}; padding: 3px 8px; border-radius: 3px; font-weight: 900; font-size: 0.85em; display: inline-flex; flex-direction: column; align-items: center; justify-content: center; line-height: 1.1; box-shadow: 0 1px 3px rgba(0,0,0,0.2);">
                <span style="font-size: 0.65em; letter-spacing: -0.5px; opacity: 0.9;">조국</span>
                <span style="font-size: 1.05em; font-weight: 900; letter-spacing: -1px;">혁신당</span>
            </div>
            
            <!-- 타이틀 텍스트 -->
            <div style="text-align: left; line-height: 1.2;">
                <div style="font-size: 1.15em; font-weight: 900; letter-spacing: -0.5px;">민선 9기 기초자치단체장</div>
            </div>
        </div>

        <!-- 펼치기 / 접기 영역 -->
        <details class="wiki-folder" open="" style="margin: 0; border: none;">
            <summary class="wiki-folder-summary" style="border: none; border-bottom: 1px solid ${borderColor}; background-color: #fff; padding: 8px; font-weight: bold; text-align: center; cursor: pointer; color: #333; list-style: none;">[ 펼치기 · 접기 ]</summary>
            
            <div class="wiki-folder-content" style="padding: 0;">
                <table style="width: 100%; border-collapse: collapse; text-align: center; font-size: 0.9em; table-layout: fixed; margin: 0;">
                    <tbody>
                        ${tableRowsHTML}

                        <!-- 하단 정당 이동 바 -->
                        <tr>
                            <td colspan="5" style="background-color: ${jogukBlue}; color: #fff; padding: 8px; border: 1px solid ${jogukBlue}; font-weight: bold; text-align: center; font-size: 0.9em;">
                                <a href="더불어민주당.html" style="color: #fff; text-decoration: none;">더불어민주당</a> · 
                                <a href="국민의힘.html" style="color: #fff; text-decoration: none;">국민의힘</a> · 
                                <a href="조국혁신당.html" style="color: #fff; text-decoration: none;">조국혁신당</a> · 
                                <a href="무소속.html" style="color: #fff; text-decoration: none;">무소속</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </details>
    </div>
    `;

    const container = document.getElementById("minseon9-gicho-joguk-nav-container") || 
                      document.querySelector(".minseon9-gicho-joguk-nav-container");
    if (container) {
        container.innerHTML = minseon9GichoJogukNavHTML;
    } else {
        console.warn("조국혁신당 민선 9기 기초자치단체장 둘러보기 틀을 삽입할 컨테이너 요소를 찾을 수 없습니다.");
    }
});