document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("hoeju-chairman-nav-container");

    if (container) {
        container.innerHTML = `
        <!-- 내비게이션 박스 1 (역대 회장) -->
        <div style="border: 1px solid #ccc; font-family: 'Noto Sans KR', sans-serif; background-color: #fff; width: 100%; box-sizing: border-box; clear: both; margin-bottom: 20px;">
            <div style="background-color: #004D40; padding: 15px 0 10px 0; text-align: center; border-bottom: 1px solid #002620;">
                <div style="color: #fff; font-size: 1.1rem; font-weight: bold; letter-spacing: -0.5px;">역대 회주기업그룹 회장</div>
            </div>
            <details open style="margin: 0; padding: 0;">
                <summary style="background-color: #00695C; color: #fff; text-align: center; padding: 8px 0; font-size: 0.85rem; font-weight: bold; cursor: pointer; list-style: none; outline: none; border-bottom: 1px solid #ccc;">[ 펼치기 · 접기 ]</summary>
                <div style="padding: 0;">
                    <table style="width: 100%; border-collapse: collapse; text-align: center; font-size: 0.95rem; margin: 0; background-color: #fff; table-layout: fixed;">
                        <tr>
                            <th colspan="2" style="background-color: #004D40; color: #fff; padding: 8px; font-weight: bold; border: 1px solid #ddd;">회주기업그룹 역대 회장</th>
                        </tr>
                        <tr style="line-height: 1.8;">
                            <td style="width: 50%; padding: 15px 5px; border: 1px solid #ddd; vertical-align: top; background-color: #f2f8f8;"><span style="font-size: 0.8rem; color: #777;">제1대 (창업주)</span><br><a href="박신유.html" style="color: #00695C; font-weight: bold; text-decoration: none; font-size: 1.1rem;">박신유</a><br><span style="font-size: 0.75rem; color: #555;">(1945~2007)</span></td>
                            <td style="width: 50%; padding: 15px 5px; border: 1px solid #ddd; vertical-align: top; background-color: #e0f2f1;"><span style="font-size: 0.8rem; color: #777;">제2대 (현직)</span><br><a href="박성인.html" style="color: #00695C; font-weight: bold; text-decoration: none; font-size: 1.1rem;">박성인</a><br><span style="font-size: 0.75rem; color: #555;">(2007~현재)</span></td>
                        </tr>
                    </table>
                </div>
            </details>
        </div>
        `;
    }
});