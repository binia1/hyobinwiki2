(function() {
    const html = `
    <table class="wiki-table-custom" style="width:100%; border-collapse: collapse; border: 1px solid #ccc; text-align: center; font-size: 0.9rem; margin: 15px 0;">
        <thead>
            <tr>
                <th colspan="2" style="background:#ffffff; color:#000000; font-weight:bold; padding:10px; border: 1px solid #ccc; font-size:1.05rem;">대한민국의 도시철도</th>
            </tr>
            <tr>
                <td colspan="2" style="background:#ffffff; color:#333333; padding:6px; border: 1px solid #ccc; cursor:pointer; font-size:0.85rem;" onclick="const tb = this.parentElement.parentElement.nextElementSibling; const span = this.querySelector('span'); if(tb.style.display === 'none'){ tb.style.display = ''; span.innerText = '▲'; }else{ tb.style.display = 'none'; span.innerText = '▼'; }">
                    [ 펼치기 · 접기 ] <span>▼</span>
                </td>
            </tr>
        </thead>
        <tbody style="display:none;">
            <tr>
                <td style="width:25%; background:#f0f0f0; color:#000000; font-weight:bold; border: 1px solid #ccc; padding:8px;">수도권</td>
                <td style="text-align:left; background:#ffffff; color:#000000; border: 1px solid #ccc; padding:8px;"><a class="wiki-link" href="수도권 전철.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">수도권 전철</a></td>
            </tr>
            <tr>
                <td style="background:#f0f0f0; color:#000000; font-weight:bold; border: 1px solid #ccc; padding:8px;">부산·울산권</td>
                <td style="text-align:left; background:#ffffff; color:#000000; border: 1px solid #ccc; padding:8px;"><a class="wiki-link" href="동남권 전철.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">동남권 전철</a></td>
            </tr>
            <tr>
                <td style="background:#f0f0f0; color:#000000; font-weight:bold; border: 1px solid #ccc; padding:8px;">대구권</td>
                <td style="text-align:left; background:#ffffff; color:#000000; border: 1px solid #ccc; padding:8px;"><a class="wiki-link" href="대구권 전철.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">대구권 전철</a></td>
            </tr>
            <tr>
                <td style="background:#f0f0f0; color:#000000; font-weight:bold; border: 1px solid #ccc; padding:8px;">광주권</td>
                <td style="text-align:left; background:#ffffff; color:#000000; border: 1px solid #ccc; padding:8px;"><a class="wiki-link" href="광주 도시철도.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">광주 도시철도</a></td>
            </tr>
            <tr>
                <td style="background:#f0f0f0; color:#000000; font-weight:bold; border: 1px solid #ccc; padding:8px;">대전권</td>
                <td style="text-align:left; background:#ffffff; color:#000000; border: 1px solid #ccc; padding:8px;"><a class="wiki-link" href="대전권 전철.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">대전권 전철</a></td>
            </tr>
            <tr>
                <td style="background:#f0f0f0; color:#000000; font-weight:bold; border: 1px solid #ccc; padding:8px;">덕빈권</td>
                <td style="text-align:left; background:#ffffff; color:#000000; border: 1px solid #ccc; padding:8px;">
                    <a class="wiki-link" href="효빈권 전철.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">효빈권 전철</a> (<a class="wiki-link" href="효빈 도시철도.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">효빈 도시철도</a>), 
                    <a class="wiki-link" href="덕북권_전철.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">덕북권 전철</a> (<a class="wiki-link" href="빈주권 전철.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">빈주권 전철</a> 등),
                    <a class="wiki-link" href="덕남권 전철.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">덕남권 전철</a> (<a class="wiki-link" href="덕주1호선.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">덕주 도시철도</a>)
                </td>
            </tr>
        </tbody>
    </table>
    `;
    const div = document.createElement('div');
    div.innerHTML = html.trim();
    const currentScript = document.currentScript || (function() {
        const scripts = document.getElementsByTagName('script');
        return scripts[scripts.length - 1];
    })();
    if (currentScript && currentScript.parentNode) {
        currentScript.parentNode.insertBefore(div.firstChild, currentScript);
    } else {
        const rz = document.getElementById('template-render-zone');
        if(rz) rz.appendChild(div.firstChild);
        else document.body.appendChild(div.firstChild);
    }
})();