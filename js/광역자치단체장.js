document.addEventListener("DOMContentLoaded", function() {
    const minseon9NavHTML = `
    <div style="border: 1px solid #ccc; border-radius: 2px; margin-bottom: 20px; box-shadow: 0 1px 2px rgba(0,0,0,0.1); background-color: #fff; overflow: hidden;">
        <div style="padding: 15px; text-align: center; border-bottom: 1px solid #ccc;">
            <img alt="대한민국 국장" onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Emblem_of_South_Korea.svg/100px-Emblem_of_South_Korea.svg.webp'" src="이미지/대한민국_국장.svg" style="width: 45px; vertical-align: middle; margin-right: 15px; display: inline-block;"/>
            <div style="display: inline-block; vertical-align: middle; text-align: left; line-height: 1.2;">
                <div style="font-size: 0.85em; font-weight: bold; color: #333;">대한민국 민선 9기</div>
                <div style="font-size: 1.3em; font-weight: 900; letter-spacing: -1px; color: #000;">광역자치단체장</div>
            </div>
        </div>
        <details class="wiki-folder" open="" style="margin: 0; border: none;">
            <summary class="wiki-folder-summary" style="border: none; border-bottom: 1px solid #ccc; background-color: #f8f9fa; padding: 8px; font-weight: bold; text-align: center; cursor: pointer; color: #333; list-style: none;">[ 펼치기 · 접기 ]</summary>
            <div class="wiki-folder-content" style="padding: 0;">
                <table style="width: 100%; border-collapse: collapse; text-align: center; font-size: 0.9em; table-layout: fixed; margin: 0;">
                    <tbody>
                        <tr style="color: white; font-weight: bold;">
                            <td style="background-color: #E61E2B; padding: 6px; border: 1px solid #ddd;">서울</td>
                            <td style="background-color: #004EA2; padding: 6px; border: 1px solid #ddd;">광주</td>
                            <td style="background-color: #004EA2; padding: 6px; border: 1px solid #ddd;">부산</td>
                            <td style="background-color: #E61E2B; padding: 6px; border: 1px solid #ddd;">대구</td>
                        </tr>
                        <tr style="background-color: #fff;">
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="오세훈.html" style="color: #333; text-decoration: none;">오세훈</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="민형배.html" style="color: #333; text-decoration: none;">민형배</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="전재수.html" style="color: #333; text-decoration: none;">전재수</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="추경호.html" style="color: #333; text-decoration: none;">추경호</a></td>
                        </tr>
                        <tr style="color: white; font-weight: bold;">
                            <td style="background-color: #004EA2; padding: 6px; border: 1px solid #ddd;">인천</td>
                            <td style="background-color: #004EA2; padding: 6px; border: 1px solid #ddd;">대전</td>
                            <td style="background-color: #004EA2; padding: 6px; border: 1px solid #ddd;">울산</td>
                            <td style="background-color: #004EA2; padding: 6px; border: 1px solid #ddd;">세종</td>
                        </tr>
                        <tr style="background-color: #fff;">
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="박찬대.html" style="color: #333; text-decoration: none;">박찬대</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="허태정.html" style="color: #333; text-decoration: none;">허태정</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="김상욱.html" style="color: #333; text-decoration: none;">김상욱</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="조상호.html" style="color: #333; text-decoration: none;">조상호</a></td>
                        </tr>
                        <tr style="color: white; font-weight: bold;">
                            <td style="background-color: #004EA2; padding: 6px; border: 1px solid #ddd;">경기</td>
                            <td style="background-color: #004EA2; padding: 6px; border: 1px solid #ddd;">강원</td>
                            <td style="background-color: #004EA2; padding: 6px; border: 1px solid #ddd;">충북</td>
                            <td style="background-color: #004EA2; padding: 6px; border: 1px solid #ddd;">충남</td>
                        </tr>
                        <tr style="background-color: #fff;">
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="추미애.html" style="color: #333; text-decoration: none;">추미애</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="우상호.html" style="color: #333; text-decoration: none;">우상호</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="신용한.html" style="color: #333; text-decoration: none;">신용한</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="박수현.html" style="color: #333; text-decoration: none;">박수현</a></td>
                        </tr>
                        <tr style="color: white; font-weight: bold;">
                            <td style="background-color: #004EA2; padding: 6px; border: 1px solid #ddd;">전북</td>
                            <td style="background-color: #E61E2B; padding: 6px; border: 1px solid #ddd;">경북</td>
                            <td style="background-color: #E61E2B; padding: 6px; border: 1px solid #ddd;">경남</td>
                            <td style="background-color: #004EA2; padding: 6px; border: 1px solid #ddd;">제주</td>
                        </tr>
                        <tr style="background-color: #fff;">
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="이원택.html" style="color: #333; text-decoration: none;">이원택</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="이철우.html" style="color: #333; text-decoration: none;">이철우</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="박완수.html" style="color: #333; text-decoration: none;">박완수</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="위성곤.html" style="color: #333; text-decoration: none;">위성곤</a></td>
                        </tr>
                        <tr style="color: white; font-weight: bold;">
                            <td style="background-color: #004EA2; padding: 6px; border: 1px solid #ddd;">효빈</td>
                            <td style="background-color: #004EA2; padding: 6px; border: 1px solid #ddd;">덕북</td>
                            <td style="background-color: #004EA2; padding: 6px; border: 1px solid #ddd;">덕남</td>
                            <td style="background-color: #f8f9fa; border: 1px solid #ddd;"></td>
                        </tr>
                        <tr style="background-color: #fff;">
                            <td style="padding: 10px 5px; border: 1px solid #ddd; background-color: #f0f4ff;"><a href="박효빈.html" style="color: #333; text-decoration: none; font-weight: bold;">박효빈</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd; background-color: #f0f4ff;"><a href="강수성.html" style="color: #333; text-decoration: none; font-weight: bold;">강수성</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd; background-color: #f0f4ff;"><a href="김영산.html" style="color: #333; text-decoration: none; font-weight: bold;">김영산</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd; background-color: #f8f9fa;"></td>
                        </tr>
                        <tr style="background-color: #fff; border-top: 1px solid #ddd;">
                            <td colspan="4" style="padding: 15px 10px 10px 10px; font-size: 0.85em; color: #555; text-align: center; line-height: 1.6;">
                                <a href="제9회_전국동시지방선거_효빈광역시.html" style="color: #0275d8; text-decoration: none;">제9회 전국동시지방선거</a><br/>
                                임기: 2026년 7월 1일 ~ 2030년 6월 30일(예정)
                            </td>
                        </tr>
                        <tr style="background-color: #f8f9fa; border-top: 1px solid #ddd;">
                            <td colspan="4" style="padding: 10px; font-size: 0.8em; color: #555; text-align: center; word-break: keep-all;">
                                <a href="1960-1961.html" style="color: #333; text-decoration: none;">1960-1961</a> · 
                                <a href="민선 1기.html" style="color: #333; text-decoration: none;">민선 1기</a> · 
                                <a href="민선 2기.html" style="color: #333; text-decoration: none;">민선 2기</a> · 
                                <a href="민선 3기.html" style="color: #333; text-decoration: none;">민선 3기</a> · 
                                <a href="민선 4기.html" style="color: #333; text-decoration: none;">민선 4기</a> · 
                                <a href="민선 5기.html" style="color: #333; text-decoration: none;">민선 5기</a> · 
                                <a href="민선 6기.html" style="color: #333; text-decoration: none;">민선 6기</a> · 
                                <a href="민선 7기.html" style="color: #333; text-decoration: none;">민선 7기</a> · 
                                <a href="민선 8기.html" style="color: #333; text-decoration: none;">민선 8기</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </details>
    </div>
    `;

    const container = document.querySelector(".minseon9-nav-container");
    if (container) {
        container.innerHTML = minseon9NavHTML;
    }
});