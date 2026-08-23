document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("hoeju-affiliates-nav-container");

    if (container) {
        // 직접 작성해주신 원본 HTML 코드 (수정 절대 없음)
        container.innerHTML = `
        <div style="border: 1px solid #ccc; font-family: 'Noto Sans KR', sans-serif; background-color: #fff; max-width: 100%; box-sizing: border-box; clear: both; margin-bottom: 30px;">
            <div style="background-color: #004D40; padding: 15px 0 10px 0; text-align: center; border-bottom: 1px solid #002620;">
                <div style="color: #fff; font-size: 1.1rem; font-weight: bold; letter-spacing: -0.5px;">회주기업그룹 주요 계열사 및 산하 기관</div>
            </div>
            <details open style="margin: 0; padding: 0;">
                <summary style="background-color: #00695C; color: #fff; text-align: center; padding: 8px 0; font-size: 0.85rem; font-weight: bold; cursor: pointer; list-style: none; outline: none; border-bottom: 1px solid #ccc;">[ 펼치기 · 접기 ]</summary>
                <div style="padding: 0;">
                    <table style="width: 100%; border-collapse: collapse; text-align: center; font-size: 0.95rem; margin: 0; background-color: #fff; table-layout: fixed;">
                        <tr>
                            <th style="background-color: #004D40; color: #fff; padding: 8px; font-weight: bold; border: 1px solid #ddd; width: 25%;">분야</th>
                            <th style="background-color: #E0F2F1; color: #333; padding: 8px; font-weight: bold; border: 1px solid #ddd; width: 75%;">계열사 및 기관명</th>
                        </tr>
                        <tr style="line-height: 1.8;">
                            <td style="font-weight: bold; background-color: #f2f8f8; border: 1px solid #ddd;">지주사</td>
                            <td style="text-align: left; padding: 10px; border: 1px solid #ddd;"><b><a href="회주기업.html" style="color: #00695C; font-weight: bold; text-decoration: none;">회주홀딩스</a></b></td>
                        </tr>
                        <tr style="line-height: 1.8;">
                            <td style="font-weight: bold; background-color: #f2f8f8; border: 1px solid #ddd;">제조 / 중공업</td>
                            <td style="text-align: left; padding: 10px; border: 1px solid #ddd;"><b><a href="회주공업.html" style="color: #00695C; font-weight: bold; text-decoration: none;">회주공업</a></b></td>
                        </tr>
                        <tr style="line-height: 1.8;">
                            <td style="font-weight: bold; background-color: #f2f8f8; border: 1px solid #ddd;">미디어 / 언론</td>
                            <td style="text-align: left; padding: 10px; border: 1px solid #ddd;"><b><a href="효빈방송.html" style="color: #00695C; font-weight: bold; text-decoration: none;">HBS 효빈방송</a></b> / <b><a href="효빈일보.html" style="color: #00695C; font-weight: bold; text-decoration: none;">효빈일보</a></b> (회주미디어센터)</td>
                        </tr>
                        <tr style="line-height: 1.8;">
                            <td style="font-weight: bold; background-color: #f2f8f8; border: 1px solid #ddd;">유통 / 쇼핑</td>
                            <td style="text-align: left; padding: 10px; border: 1px solid #ddd;"><b><a href="HJ몰_중수점.html" style="color: #00695C; font-weight: bold; text-decoration: none;">회주유통 (HJ몰)</a></b></td>
                        </tr>
                        <tr style="line-height: 1.8;">
                            <td style="font-weight: bold; background-color: #f2f8f8; border: 1px solid #ddd;">스포츠 / 엔터</td>
                            <td style="text-align: left; padding: 10px; border: 1px solid #ddd;"><b><a href="회주_돌핀즈.html" style="color: #00695C; font-weight: bold; text-decoration: none;">회주 돌핀즈</a></b> (프로야구단)</td>
                        </tr>
                        <tr style="line-height: 1.8;">
                            <td style="font-weight: bold; background-color: #f2f8f8; border: 1px solid #ddd;">교육 / 복지</td>
                            <td style="text-align: left; padding: 10px; border: 1px solid #ddd;"><b>학교법인 효빈회주학원</b> (<a href="효빈종합고등학교.html" style="color: #00695C; text-decoration: none;">효빈종합고</a>, <a href="삼각중학교.html" style="color: #00695C; text-decoration: none;">삼각중</a>) / <b><a href="회주복지재단.html" style="color: #00695C; text-decoration: none;">회주복지재단</a></b></td>
                        </tr>
                    </table>
                </div>
            </details>
        </div>
        `;
    }
});