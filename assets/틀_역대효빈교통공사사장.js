(function() {
    const template = `
<div style="border: 1px solid #ccc; font-family: 'Noto Sans KR', sans-serif; background-color: #fff; max-width: 100%; box-sizing: border-box; clear: both; margin-bottom: 40px;">
    <div style="background-color: #16A4BE; padding: 25px 0 15px 0; text-align: center; border-bottom: 1px solid #118298;">
        <img src="이미지/효빈교통공사_흰색로고.webp" alt="효빈교통공사" onerror="this.style.display='none'" style="height: 50px; display: block; margin: 0 auto 10px auto; object-fit: contain;">
        <div style="color: #fff; font-size: 1.2rem; font-weight: bold; letter-spacing: -0.5px;">역대 효빈교통공사 사장</div>
    </div>
    <details open style="margin: 0; padding: 0;">
        <summary style="background-color: #118298; color: #fff; text-align: center; padding: 10px 0; font-size: 0.95rem; font-weight: bold; cursor: pointer; list-style: none; outline: none; border-bottom: 1px solid #ccc;">
            [ 펼치기 · 접기 ]
        </summary>
        <div style="padding: 0;">
            <table style="width: 100%; border-collapse: collapse; text-align: center; font-size: 0.95rem; margin: 0; background-color: #fff; table-layout: fixed;">
                
                <!-- 전신: 효빈도시공사 섹션 (9대까지) -->
                <tr>
                    <td colspan="5" style="background-color: #666; color: #fff; padding: 10px; font-weight: bold; font-size: 1.05rem; border: 1px solid #ccc;">효빈도시공사 사장 (전신)</td>
                </tr>
                <tr>
                    <th style="background-color: #888; color: #fff; padding: 8px; font-weight: bold; border: 1px solid #ddd;">관선 시대</th>
                    <th style="background-color: #D82634; color: #fff; padding: 8px; font-weight: bold; border: 1px solid #ddd;">환산채 시정</th>
                    <th colspan="2" style="background-color: #009A44; color: #fff; padding: 8px; font-weight: bold; border: 1px solid #ddd;">박현만 시정</th>
                    <th style="background-color: #0095DA; color: #fff; padding: 8px; font-weight: bold; border: 1px solid #ddd;">윤대환 시정</th>
                </tr>
                <tr style="line-height: 1.8;">
                    <td style="width: 20%; padding: 15px 5px; border: 1px solid #ddd; vertical-align: top;">
                        <span style="font-size: 0.8rem; color: #777;">초대</span><br>
                        <a href="유우진.html" style="color: #0055AA; font-weight: bold; text-decoration: none;">유우진</a>
                    </td>
                    <td style="width: 20%; padding: 15px 5px; border: 1px solid #ddd; vertical-align: top;">
                        <span style="font-size: 0.8rem; color: #777;">제2대</span><br>
                        <a href="원성휴.html" style="color: #0055AA; font-weight: bold; text-decoration: none;">원성휴</a>
                    </td>
                    <td style="width: 20%; padding: 15px 5px; border: 1px solid #ddd; vertical-align: top;">
                        <span style="font-size: 0.8rem; color: #777;">제3대</span><br>
                        <a href="소경민.html" style="color: #0055AA; font-weight: bold; text-decoration: none;">소경민</a>
                    </td>
                    <td style="width: 20%; padding: 15px 5px; border: 1px solid #ddd; vertical-align: top;">
                        <span style="font-size: 0.8rem; color: #777;">제4대</span><br>
                        <a href="오다구.html" style="color: #0055AA; font-weight: bold; text-decoration: none;">오다구</a>
                    </td>
                    <td style="width: 20%; padding: 15px 5px; border: 1px solid #ddd; vertical-align: top;">
                        <span style="font-size: 0.8rem; color: #777;">제5대</span><br>
                        <a href="권이현.html" style="color: #0055AA; font-weight: bold; text-decoration: none;">권이현</a>
                    </td>
                </tr>
                <tr>
                    <th style="background-color: #0095DA; color: #fff; padding: 8px; font-weight: bold; border: 1px solid #ddd;">윤대환 시정</th>
                    <th colspan="3" style="background-color: #019E33; color: #fff; padding: 8px; font-weight: bold; border: 1px solid #ddd;">박현만 시정</th>
                    <th style="background-color: #f8f9fa; border: 1px solid #ddd;"></th>
                </tr>
                <tr style="line-height: 1.8;">
                    <td style="padding: 15px 5px; border: 1px solid #ddd; vertical-align: top;">
                        <span style="font-size: 0.8rem; color: #777;">제6대</span><br>
                        <a href="구진내.html" style="color: #0055AA; font-weight: bold; text-decoration: none;">구진내</a>
                    </td>
                    <td style="padding: 15px 5px; border: 1px solid #ddd; vertical-align: top;">
                        <span style="font-size: 0.8rem; color: #777;">제7대</span><br>
                        <a href="구성현.html" style="color: #0055AA; font-weight: bold; text-decoration: none;">구성현</a>
                    </td>
                    <td style="padding: 15px 5px; border: 1px solid #ddd; vertical-align: top;">
                        <span style="font-size: 0.8rem; color: #777;">제8대</span><br>
                        <a href="원중현.html" style="color: #0055AA; font-weight: bold; text-decoration: none;">원중현</a>
                    </td>
                    <td style="padding: 15px 5px; border: 1px solid #ddd; vertical-align: top;">
                        <span style="font-size: 0.8rem; color: #777;">제9대</span><br>
                        <a href="소홍문.html" style="color: #0055AA; font-weight: bold; text-decoration: none;">소홍문</a>
                    </td>
                    <td style="padding: 15px 5px; border: 1px solid #ddd; background-color: #f8f9fa;"></td>
                </tr>

                <!-- 2016년 분사 이후 효빈교통공사 섹션 -->
                <tr>
                    <td colspan="5" style="background-color: #16A4BE; color: #fff; padding: 10px; font-weight: bold; font-size: 1.05rem; border: 1px solid #ccc; border-top: 3px solid #118298;">효빈교통공사 사장 (분사 이후)</td>
                </tr>
                <tr>
                    <th colspan="2" style="background-color: #008CCD; color: #fff; padding: 8px; font-weight: bold; border: 1px solid #ddd;">김성민 시정</th>
                    <th colspan="3" style="background-color: #004EA2; color: #fff; padding: 8px; font-weight: bold; border: 1px solid #ddd;">박효빈 시정</th>
                </tr>
                <tr style="line-height: 1.8;">
                    <td style="width: 20%; padding: 15px 5px; border: 1px solid #ddd; vertical-align: top;">
                        <span style="font-size: 0.8rem; color: #777;">초대</span><br>
                        <a href="박철군.html" style="color: #0055AA; font-weight: bold; text-decoration: none;">박철군</a>
                    </td>
                    <td style="width: 20%; padding: 15px 5px; border: 1px solid #ddd; vertical-align: top;">
                        <span style="font-size: 0.8rem; color: #777;">제2대</span><br>
                        <a href="정민재.html" style="color: #0055AA; font-weight: bold; text-decoration: none;">정민재</a>
                    </td>
                    <td style="width: 20%; padding: 15px 5px; border: 1px solid #ddd; vertical-align: top;">
                        <span style="font-size: 0.8rem; color: #777;">제3대</span><br>
                        <a href="최대현.html" style="color: #0055AA; font-weight: bold; text-decoration: none;">최대현</a>
                    </td>
                    <td style="width: 20%; padding: 15px 5px; border: 1px solid #ddd; vertical-align: top; background-color: #f0f8ff;">
                        <span style="font-size: 0.8rem; color: #777;">제4대</span><br>
                        <strong style="color: #005BAC; font-size: 1.05rem;">정시원</strong>
                    </td>
                    <td style="width: 20%; padding: 15px 5px; border: 1px solid #ddd; background-color: #f8f9fa;"></td>
                </tr>
            </table>
        </div>
    </details>
</div>
    `;
    document.currentScript.insertAdjacentHTML('beforebegin', template);
})();