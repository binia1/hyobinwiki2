document.addEventListener("DOMContentLoaded", function() {
    
    const indepGray = "#808080"; 
    const linkColor = "#0066cc";
    const borderColor = "#ddd";

    // 1~8기 광역자치단체장 통합 데이터 (1기에 오창석 추가)
    const termsData = [
        {
            term: 1,
            names: ["신구범", "최각규", "오창석"],
            footer: '<a href="한나라당.html" style="color: #fff; text-decoration: none;">한나라당</a> · <a href="새정치국민회의.html" style="color: #fff; text-decoration: none;">새정치국민회의</a> · <a href="자유민주연합.html" style="color: #fff; text-decoration: none;">자유민주연합</a> · <a href="무소속.html" style="color: #fff; text-decoration: none;">무소속</a>'
        },
        {
            term: 2,
            names: ["최기선"],
            footer: '<a href="한나라당.html" style="color: #fff; text-decoration: none;">한나라당</a> · <a href="새천년민주당.html" style="color: #fff; text-decoration: none;">새천년민주당</a> · <a href="자유민주연합.html" style="color: #fff; text-decoration: none;">자유민주연합</a> · <a href="무소속.html" style="color: #fff; text-decoration: none;">무소속</a>'
        },
        {
            term: 4,
            names: ["김태환"],
            footer: '<a href="한나라당.html" style="color: #fff; text-decoration: none;">한나라당</a> · <a href="민주당.html" style="color: #fff; text-decoration: none;">민주당</a> · <a href="무소속.html" style="color: #fff; text-decoration: none;">무소속</a>'
        },
        {
            term: 5,
            names: ["강운태"],
            footer: '<a href="새누리당.html" style="color: #fff; text-decoration: none;">새누리당</a> · <a href="새정치민주연합.html" style="color: #fff; text-decoration: none;">새정치민주연합</a> · <a href="무소속.html" style="color: #fff; text-decoration: none;">무소속</a>'
        },
        {
            term: 6,
            names: ["원희룡"],
            footer: '<a href="더불어민주당.html" style="color: #fff; text-decoration: none;">더불어민주당</a> · <a href="자유한국당.html" style="color: #fff; text-decoration: none;">자유한국당</a> · <a href="무소속.html" style="color: #fff; text-decoration: none;">무소속</a>'
        },
        {
            term: 8,
            names: ["김관영"],
            footer: '<a href="더불어민주당.html" style="color: #fff; text-decoration: none;">더불어민주당</a> · <a href="국민의힘.html" style="color: #fff; text-decoration: none;">국민의힘</a> · <a href="무소속.html" style="color: #fff; text-decoration: none;">무소속</a>'
        }
    ];

    termsData.forEach(data => {
        // ID가 문서에 존재할 경우에만 렌더링 (광역자치단체장용 ID)
        const container = document.getElementById(`minseon${data.term}-gwangyeok-indep-nav-container`);
        if (!container) return;

        const sortedNames = Array.from(new Set(data.names)).sort((a, b) => a.localeCompare(b, 'ko'));

        let tableRowsHTML = '';
        const columns = 5;
        for (let i = 0; i < sortedNames.length; i += columns) {
            tableRowsHTML += '<tr style="background-color: #fff;">';
            for (let j = 0; j < columns; j++) {
                const index = i + j;
                if (index < sortedNames.length) {
                    tableRowsHTML += `<td style="padding: 10px 5px; border: 1px solid ${borderColor}; width: 20%; line-height: 1.3;"><a href="${sortedNames[index]}.html" style="color: ${linkColor}; text-decoration: none;">${sortedNames[index]}</a></td>`;
                } else {
                    tableRowsHTML += `<td style="padding: 10px 5px; border: 1px solid ${borderColor}; width: 20%; background-color: #f8f9fa;"></td>`;
                }
            }
            tableRowsHTML += '</tr>';
        }

        const navHTML = `
        <div style="border: 1px solid ${indepGray}; border-radius: 2px; margin-bottom: 20px; box-shadow: 0 1px 2px rgba(0,0,0,0.1); background-color: #fff; overflow: hidden; font-family: sans-serif;">
            <div style="background-color: ${indepGray}; padding: 12px 15px; text-align: center; display: flex; align-items: center; justify-content: center; gap: 12px; color: #fff;">
                <div style="display: inline-flex; align-items: center; gap: 8px; border: 1px solid rgba(255,255,255,0.7); padding: 4px 10px 4px 6px; border-radius: 2px;">
                    <div style="background-color: #1A365D; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 1px solid #fff; box-shadow: 0 0 2px rgba(0,0,0,0.3);">
                        <div style="background-color: #FFD700; width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 0.65em; color: #333; box-shadow: 0 0 2px rgba(255,215,0,0.8); letter-spacing: -1px;">
                            자치
                        </div>
                    </div>
                    <div style="text-align: left; line-height: 1.2; padding-left: 6px; border-left: 1px solid rgba(255,255,255,0.7);">
                        <div style="font-size: 0.8em; font-weight: bold; letter-spacing: -0.5px;">무소속</div>
                        <div style="font-size: 1.1em; font-weight: 900; letter-spacing: -0.5px;">민선 ${data.term}기 광역자치단체장</div>
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
                                    ${data.footer}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </details>
        </div>
        `;
        
        container.innerHTML = navHTML;
    });
});