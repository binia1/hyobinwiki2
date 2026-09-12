document.addEventListener("DOMContentLoaded", function() {
    
    const indepGray = "#808080"; 
    const linkColor = "#0066cc";
    const borderColor = "#ddd";

    const rawNames = [
        "강선우", "고수안", "김병기", "김종민", "이춘석", "장경태", 
        "조정식", "최혁진", "한동훈"
    ];

    const sortedNames = Array.from(new Set(rawNames)).sort((a, b) => a.localeCompare(b, 'ko'));

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

    const assembly22IndepNavHTML = `
    <div style="border: 1px solid ${indepGray}; border-radius: 2px; margin-bottom: 20px; box-shadow: 0 1px 2px rgba(0,0,0,0.1); background-color: #fff; overflow: hidden; font-family: sans-serif;">
        <div style="background-color: ${indepGray}; padding: 12px 15px; text-align: center; display: flex; align-items: center; justify-content: center; gap: 12px; color: #fff;">
            <div style="display: inline-flex; align-items: center; gap: 8px; border: 1px solid rgba(255,255,255,0.7); padding: 4px 10px 4px 6px; border-radius: 2px;">
                <div style="background-color: #9C7E3A; color: #fff; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 0.75em; border: 2px solid #fff; box-shadow: inset 0 0 3px rgba(0,0,0,0.3);">
                    국회
                </div>
                <div style="text-align: left; line-height: 1.2; padding-left: 6px; border-left: 1px solid rgba(255,255,255,0.7);">
                    <div style="font-size: 0.8em; font-weight: bold; letter-spacing: -0.5px;">무소속</div>
                    <div style="font-size: 1.1em; font-weight: 900; letter-spacing: -0.5px;">제22대 국회의원</div>
                </div>
            </div>
        </div>
        <details class="wiki-folder" open="" style="margin: 0; border: none;">
            <summary class="wiki-folder-summary" style="border: none; border-bottom: 1px solid ${borderColor}; background-color: #fff; padding: 8px; font-weight: bold; text-align: center; cursor: pointer; color: #333; list-style: none;">[ 펼치기 · 접기 ]</summary>
            <div class="wiki-folder-content" style="padding: 0;">
                <table style="width: 100%; border-collapse: collapse; text-align: center; font-size: 0.9em; table-layout: fixed; margin: 0;">
                    <tbody>
                        ${tableRowsHTML}
                        <tr>
                            <td colspan="5" style="background-color: ${indepGray}; color: #fff; padding: 8px; border: 1px solid ${indepGray}; font-weight: bold; text-align: center; font-size: 0.85em; word-break: keep-all;">
                                <a href="더불어민주당.html" style="color: #fff; text-decoration: none;">더불어민주당</a> · 
                                <a href="국민의힘.html" style="color: #fff; text-decoration: none;">국민의힘</a> · 
                                <a href="조국혁신당.html" style="color: #fff; text-decoration: none;">조국혁신당</a> · 
                                <a href="진보당.html" style="color: #fff; text-decoration: none;">진보당</a> · 
                                <a href="개혁신당.html" style="color: #fff; text-decoration: none;">개혁신당</a> · 
                                <a href="기본소득당.html" style="color: #fff; text-decoration: none;">기본소득당</a> · 
                                <a href="사회민주당.html" style="color: #fff; text-decoration: none;">사회민주당</a> · 
                                <a href="무소속.html" style="color: #fff; text-decoration: none;">무소속</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </details>
    </div>
    `;

    // 핵심 변경점: id가 아닌 class를 찾아 모두 채워넣도록 반복문 실행
    const containers = document.querySelectorAll(".assembly22-indep-nav-container");
    containers.forEach(container => {
        container.innerHTML = assembly22IndepNavHTML;
    });
});