document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("hyobin-academy-chairman-nav-container");

    if (container) {
        // 직접 작성해주신 원본 HTML 코드 (수정 절대 없음)
        container.innerHTML = `
        <!-- 2. 내비게이션 박스 1 (역대 이사장) -->
        <div style="border: 1px solid #ccc; background-color: #fff; width: 100%; box-sizing: border-box; clear: both; margin-bottom: 20px;">
            <div style="background-color: var(--wiki-table-header); padding: 15px 0 10px 0; text-align: center; border-bottom: 1px solid #000;">
                <div style="color: #fff; font-size: 1.1rem; font-weight: bold; letter-spacing: -0.5px;">역대 학교법인 효빈회주학원 이사장</div>
            </div>
            <details open style="margin: 0; padding: 0;">
                <summary style="background-color: var(--wiki-main); color: #fff; text-align: center; padding: 8px 0; font-size: 0.85rem; font-weight: bold; cursor: pointer; border-bottom: 1px solid #ccc;">[ 펼치기 · 접기 ]</summary>
                <div style="padding: 0;">
                    <table style="width: 100%; border-collapse: collapse; text-align: center; font-size: 0.95rem; margin: 0; background-color: #fff; table-layout: fixed;">
                        <tr>
                            <th colspan="2" style="background-color: var(--wiki-table-header); color: #fff; padding: 8px; font-weight: bold; border: 1px solid #ddd;">효빈회주학원 역대 이사장</th>
                        </tr>
                        <tr style="line-height: 1.8;">
                            <td style="width: 50%; padding: 15px 5px; border: 1px solid #ddd; vertical-align: top; background-color: #f8f9fa;"><span style="font-size: 0.8rem; color: #777;">제1대 (설립자 / 창업주)</span><br><a href="박신유.html" style="color: var(--wiki-table-header); font-weight: bold; text-decoration: none; font-size: 1.1rem;">박신유</a><br><span style="font-size: 0.75rem; color: #555;">(1968~2007)</span></td>
                            <td style="width: 50%; padding: 15px 5px; border: 1px solid #ddd; vertical-align: top; background-color: #eef4f9;"><span style="font-size: 0.8rem; color: #777;">제2대 (현직 / 창업주 차남)</span><br><a href="박낙성.html" style="color: var(--wiki-table-header); font-weight: bold; text-decoration: none; font-size: 1.1rem;">박낙성</a><br><span style="font-size: 0.75rem; color: #555;">(2007~현재)</span></td>
                        </tr>
                    </table>
                </div>
            </details>
        </div>
        `;
    }
});