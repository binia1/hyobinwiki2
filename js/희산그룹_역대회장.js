document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("huisan-chairman-nav-container");

    if (container) {
        container.innerHTML = `
        <!-- 내비게이션 박스 1 (희산그룹 역대 회장) -->
        <div style="border: 1px solid #ccc; font-family: 'Noto Sans KR', sans-serif; background-color: #fff; width: 100%; box-sizing: border-box; clear: both; margin-bottom: 20px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
            <div style="background-color: #1A365D; padding: 15px 0 10px 0; text-align: center; border-bottom: 1px solid #0f2342;">
                <div style="color: #fff; font-size: 1.1rem; font-weight: bold; letter-spacing: -0.5px;">역대 희산그룹 회장</div>
            </div>
            <details open style="margin: 0; padding: 0;">
                <summary style="background-color: #2C3E50; color: #fff; text-align: center; padding: 8px 0; font-size: 0.85rem; font-weight: bold; cursor: pointer; list-style: none; outline: none; border-bottom: 1px solid #ccc;">[ 펼치기 · 접기 ]</summary>
                <div style="padding: 0;">
                    <table style="width: 100%; border-collapse: collapse; text-align: center; font-size: 0.95rem; margin: 0; background-color: #fff; table-layout: fixed;">
                        <tr>
                            <th colspan="3" style="background-color: #1A365D; color: #fff; padding: 8px; font-weight: bold; border: 1px solid #ddd;">희산그룹 역대 회장</th>
                        </tr>
                        <tr style="line-height: 1.8;">
                            <td style="width: 33.33%; padding: 15px 5px; border: 1px solid #ddd; vertical-align: top; background-color: #f8f9fa; transition: background-color 0.2s;" onmouseover="this.style.backgroundColor='#f1f3f5'" onmouseout="this.style.backgroundColor='#f8f9fa'">
                                <span style="font-size: 0.8rem; color: #777;">제1대 (창업주)</span><br>
                                <a href="서천혁.html" style="color: #1A365D; font-weight: 900; text-decoration: none; font-size: 1.15rem;">서천혁</a><br>
                                <span style="font-size: 0.75rem; color: #555; font-weight: bold;">(1939~1981)</span>
                            </td>
                            <td style="width: 33.33%; padding: 15px 5px; border: 1px solid #ddd; vertical-align: top; background-color: #f2f6fa; transition: background-color 0.2s;" onmouseover="this.style.backgroundColor='#e9edf2'" onmouseout="this.style.backgroundColor='#f2f6fa'">
                                <span style="font-size: 0.8rem; color: #777;">제2대</span><br>
                                <a href="서성직.html" style="color: #1A365D; font-weight: 900; text-decoration: none; font-size: 1.15rem;">서성직</a><br>
                                <span style="font-size: 0.75rem; color: #555; font-weight: bold;">(1981~2005)</span>
                            </td>
                            <td style="width: 33.33%; padding: 15px 5px; border: 1px solid #ddd; vertical-align: top; background-color: #e6f0fa; transition: background-color 0.2s;" onmouseover="this.style.backgroundColor='#dce8f5'" onmouseout="this.style.backgroundColor='#e6f0fa'">
                                <span style="font-size: 0.8rem; color: #777;">제3대 (현직)</span><br>
                                <a href="서형연.html" style="color: #1A365D; font-weight: 900; text-decoration: none; font-size: 1.15rem;">서형연</a><br>
                                <span style="font-size: 0.75rem; color: #555; font-weight: bold;">(2005~현재)</span>
                            </td>
                        </tr>
                    </table>
                </div>
            </details>
        </div>
        `;
    }
});