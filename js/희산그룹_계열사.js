document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("huisan-affiliates-nav-container");

    if (container) {
        container.innerHTML = `
        <div style="border: 1px solid #ccc; font-family: 'Noto Sans KR', sans-serif; background-color: #fff; max-width: 100%; box-sizing: border-box; clear: both; margin-bottom: 30px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
            <div style="background-color: #1A365D; padding: 15px 0 10px 0; text-align: center; border-bottom: 1px solid #0f2342;">
                <div style="color: #fff; font-size: 1.1rem; font-weight: bold; letter-spacing: -0.5px;">희산그룹 주요 계열사 및 산하 기관</div>
            </div>
            <details open style="margin: 0; padding: 0;">
                <summary style="background-color: #2C3E50; color: #fff; text-align: center; padding: 8px 0; font-size: 0.85rem; font-weight: bold; cursor: pointer; list-style: none; outline: none; border-bottom: 1px solid #ccc;">[ 펼치기 · 접기 ]</summary>
                <div style="padding: 0;">
                    <table style="width: 100%; border-collapse: collapse; text-align: center; font-size: 0.95rem; margin: 0; background-color: #fff; table-layout: fixed;">
                        <tr>
                            <th style="background-color: #1A365D; color: #fff; padding: 8px; font-weight: bold; border: 1px solid #ddd; width: 25%;">분야</th>
                            <th style="background-color: #e6f0fa; color: #333; padding: 8px; font-weight: bold; border: 1px solid #ddd; width: 75%;">계열사 및 기관명</th>
                        </tr>
                        <tr style="line-height: 1.8;">
                            <td style="font-weight: bold; background-color: #f2f6fa; border: 1px solid #ddd;">그룹 본사</td>
                            <td style="text-align: left; padding: 10px; border: 1px solid #ddd;"><b><a href="희산그룹.html" style="color: #1A365D; font-weight: bold; text-decoration: none;">희산그룹</a></b></td>
                        </tr>
                        <tr style="line-height: 1.8;">
                            <td style="font-weight: bold; background-color: #f2f6fa; border: 1px solid #ddd;">제조 / 중공업</td>
                            <td style="text-align: left; padding: 10px; border: 1px solid #ddd;"><b><a href="희산공업.html" style="color: #1A365D; font-weight: bold; text-decoration: none;">희산공업(주)</a></b> <span style="font-size: 0.85rem; color: #666;">(항동 본사, 산취지사, 상포지사, 고곡지사, 현해지사)</span></td>
                        </tr>
                        <tr style="line-height: 1.8;">
                            <td style="font-weight: bold; background-color: #f2f6fa; border: 1px solid #ddd;">건설 / 부동산</td>
                            <td style="text-align: left; padding: 10px; border: 1px solid #ddd;"><b><a href="희산건설.html" style="color: #1A365D; font-weight: bold; text-decoration: none;">희산건설(주)</a></b> <span style="font-size: 0.85rem; color: #666;">(희산공업사원 아파트 1·2차 시공)</span></td>
                        </tr>
                        <tr style="line-height: 1.8;">
                            <td style="font-weight: bold; background-color: #f2f6fa; border: 1px solid #ddd;">물류 / 운송</td>
                            <td style="text-align: left; padding: 10px; border: 1px solid #ddd;"><b><a href="희산로지스.html" style="color: #1A365D; font-weight: bold; text-decoration: none;">희산로지스(주)</a></b></td>
                        </tr>
                        <tr style="line-height: 1.8;">
                            <td style="font-weight: bold; background-color: #f2f6fa; border: 1px solid #ddd;">호텔 / 레저</td>
                            <td style="text-align: left; padding: 10px; border: 1px solid #ddd;"><b><a href="희산호텔앤리조트.html" style="color: #1A365D; font-weight: bold; text-decoration: none;">희산호텔앤리조트</a></b> (<b><a href="희산벨리_효빈.html" style="color: #1A365D; font-weight: bold; text-decoration: none;">희산벨리 효빈</a></b>)</td>
                        </tr>
                        <tr style="line-height: 1.8;">
                            <td style="font-weight: bold; background-color: #f2f6fa; border: 1px solid #ddd;">사회공헌 / 복지</td>
                            <td style="text-align: left; padding: 10px; border: 1px solid #ddd;"><b>희산공업 사회공헌재단</b> <span style="font-size: 0.85rem; color: #666;">(청덕 노인종합복지관, 희산 스마트홈)</span> / <b>희산장학재단</b></td>
                        </tr>
                    </table>
                </div>
            </details>
        </div>
        `;
    }
});