document.addEventListener("DOMContentLoaded", function() {
    const akPlazaNavHTML = `
    <div style="border: 1px solid #ccc; border-radius: 2px; margin-bottom: 20px; box-shadow: 0 1px 2px rgba(0,0,0,0.1); background-color: #fff; overflow: hidden;">
        <!-- 상단 헤더 (사진 디자인 반영) -->
        <div style="background-color: #002855; padding: 15px; text-align: center; color: white; display: flex; justify-content: center; align-items: center; gap: 15px;">
            <div style="font-size: 1.4em; font-weight: 900; letter-spacing: -1px; font-style: italic; font-family: sans-serif;">AK PLAZA</div>
            <div style="width: 1px; height: 35px; background-color: rgba(255,255,255,0.6);"></div>
            <div style="text-align: left; line-height: 1.2;">
                <div style="font-size: 1.1em; font-weight: bold;">AK플라자</div>
                <div style="font-size: 0.8em; font-family: sans-serif;">AK PLAZA</div>
            </div>
        </div>
        
        <!-- 접기/펼치기 영역 -->
        <details class="wiki-folder" open="" style="margin: 0; border: none;">
            <summary class="wiki-folder-summary" style="border: none; border-bottom: 1px solid #ccc; background-color: #f8f9fa; padding: 8px; font-weight: bold; text-align: center; cursor: pointer; color: #333; list-style: none;">[ 펼치기 · 접기 ]</summary>
            
            <div class="wiki-folder-content" style="padding: 0;">
                <table style="width: 100%; border-collapse: collapse; text-align: center; font-size: 0.9em; table-layout: fixed; margin: 0;">
                    <tbody>
                        <!-- 백화점 섹션 -->
                        <tr style="color: white; font-weight: bold;">
                            <td colspan="5" style="background-color: #002855; padding: 6px; border: 1px solid #ddd;">백화점</td>
                        </tr>
                        <tr style="background-color: #fff;">
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="https://namu.wiki/w/AK플라자%20평택점" target="_blank" style="color: #333; text-decoration: none;">평택점</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="https://namu.wiki/w/AK플라자%20수원점" target="_blank" style="color: #333; text-decoration: none;">수원점</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="https://namu.wiki/w/AK플라자%20분당점" target="_blank" style="color: #333; text-decoration: none;">분당점</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="https://namu.wiki/w/AK플라자%20원주점" target="_blank" style="color: #333; text-decoration: none;">원주점</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="https://namu.wiki/w/AK플라자/지점#s-2.5" target="_blank" style="color: #333; text-decoration: none;">인천공항점</a></td>
                        </tr>
                        <!-- 효빈점 (강조 표시) -->
                        <tr style="background-color: #f4f7fa;">
                            <td colspan="5" style="padding: 10px 5px; border: 1px solid #ddd;"><strong><a href="AK백화점_효빈점.html" style="color: #002855; text-decoration: none; font-size: 1.05em;">효빈점</a></strong></td>
                        </tr>
                        
                        <!-- 쇼핑몰 섹션 -->
                        <tr style="color: white; font-weight: bold;">
                            <td colspan="5" style="background-color: #002855; padding: 6px; border: 1px solid #ddd;">쇼핑몰</td>
                        </tr>
                        <tr style="background-color: #fff;">
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="https://namu.wiki/w/AK플라자%20홍대" target="_blank" style="color: #333; text-decoration: none;">홍대점</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="https://namu.wiki/w/AK플라자%20기흥" target="_blank" style="color: #333; text-decoration: none;">기흥점</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="https://namu.wiki/w/AK플라자%20세종" target="_blank" style="color: #333; text-decoration: none;">세종점</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="https://namu.wiki/w/AK플라자%20광명" target="_blank" style="color: #333; text-decoration: none;">광명점</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="https://namu.wiki/w/AK플라자%20금정" target="_blank" style="color: #333; text-decoration: none;">금정점</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </details>
    </div>
    `;

    const container = document.getElementById("ak-plaza-nav-container");
    if (container) {
        container.innerHTML = akPlazaNavHTML;
    }
});