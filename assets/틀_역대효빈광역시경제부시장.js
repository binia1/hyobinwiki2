(function() {
    const template = `
<div style="border: 1px solid #ccc; font-family: 'Noto Sans KR', sans-serif; background-color: #fff; max-width: 100%; box-sizing: border-box; clear: both; margin-bottom: 40px;">
    <div style="background-color: #7777AA; padding: 25px 0 15px 0; text-align: center; border-bottom: 1px solid #555588;">
        <img src="이미지/효빈광역시_흰색로고.webp" alt="효빈광역시" onerror="this.style.display='none'" style="height: 60px; display: block; margin: 0 auto 10px auto; object-fit: contain;">
        <div style="color: #fff; font-size: 1.2rem; font-weight: bold; letter-spacing: -0.5px;">효빈광역시 경제(정무)부시장</div>
    </div>
    <details open style="margin: 0; padding: 0;">
        <summary style="background-color: #555588; color: #fff; text-align: center; padding: 10px 0; font-size: 0.95rem; font-weight: bold; cursor: pointer; list-style: none; outline: none; border-bottom: 1px solid #ccc;">
            [ 펼치기 · 접기 ]
        </summary>
        <div style="padding: 0;">
            <table style="width: 100%; border-collapse: collapse; text-align: center; font-size: 0.95rem; margin: 0; background-color: #fff; table-layout: fixed;">
                <tr>
                    <td colspan="5" style="background-color: #666; color: #fff; padding: 10px; font-weight: bold; font-size: 1.05rem; border: 1px solid #ccc;">정무부시장</td>
                </tr>
                <tr>
                    <th colspan="2" style="background-color: #D82634; color: #fff; padding: 8px; font-weight: bold; border: 1px solid #ddd;">환산채 시정</th>
                    <th colspan="3" style="background-color: #009A44; color: #fff; padding: 8px; font-weight: bold; border: 1px solid #ddd;">박현만 시정</th>
                </tr>
                <tr style="line-height: 1.8;">
                    <td style="width: 20%; padding: 15px 5px; border: 1px solid #ddd; vertical-align: top;">
                        <span style="font-size: 0.8rem; color: #777;">초대</span><br>
                        <a href="한영국.html" style="color: #0055AA; font-weight: bold; text-decoration: none;">한영국</a>
                    </td>
                    <td style="width: 20%; padding: 15px 5px; border: 1px solid #ddd; vertical-align: top;">
                        <span style="font-size: 0.8rem; color: #777;">제2대</span><br>
                        <a href="소경민.html" style="color: #0055AA; font-weight: bold; text-decoration: none;">소경민</a>
                    </td>
                    <td style="width: 20%; padding: 15px 5px; border: 1px solid #ddd; vertical-align: top;">
                        <span style="font-size: 0.8rem; color: #777;">제3대</span><br>
                        <a href="윤명수.html" style="color: #0055AA; font-weight: bold; text-decoration: none;">윤명수</a>
                    </td>
                    <td style="width: 20%; padding: 15px 5px; border: 1px solid #ddd; vertical-align: top;">
                        <span style="font-size: 0.8rem; color: #777;">제4대</span><br>
                        <a href="천호진.html" style="color: #0055AA; font-weight: bold; text-decoration: none;">천호진</a>
                    </td>
                    <td style="width: 20%; padding: 15px 5px; border: 1px solid #ddd; vertical-align: top;">
                        <span style="font-size: 0.8rem; color: #777;">제5대</span><br>
                        <a href="노창현.html" style="color: #0055AA; font-weight: bold; text-decoration: none;">노창현</a>
                    </td>
                </tr>
                <tr>
                    <td colspan="2" style="background-color: #555; color: #fff; padding: 8px; font-weight: bold; font-size: 1rem; border: 1px solid #ddd;">정무부시장</td>
                    <td colspan="3" style="background-color: #555; color: #fff; padding: 8px; font-weight: bold; font-size: 1rem; border: 1px solid #ddd;">경제부시장</td>
                </tr>
                <tr>
                    <th colspan="1" style="background-color: #0095DA; color: #fff; padding: 8px; font-weight: bold; border: 1px solid #ddd;">윤대환 시정</th>
                    <th colspan="2" style="background-color: #019E33; color: #fff; padding: 8px; font-weight: bold; border: 1px solid #ddd;">박현만 시정 (복귀)</th>
                    <th colspan="2" style="background-color: #008CCD; color: #fff; padding: 8px; font-weight: bold; border: 1px solid #ddd;">김성민 시정</th>
                </tr>
                <tr style="line-height: 1.8;">
                    <td style="padding: 15px 5px; border: 1px solid #ddd; vertical-align: top;">
                        <span style="font-size: 0.8rem; color: #777;">제6대</span><br>
                        <a href="배도환.html" style="color: #0055AA; font-weight: bold; text-decoration: none;">배도환</a>
                    </td>
                    <td style="padding: 15px 5px; border: 1px solid #ddd; vertical-align: top;">
                        <span style="font-size: 0.8rem; color: #777;">제7대</span><br>
                        <a href="안상수.html" style="color: #0055AA; font-weight: bold; text-decoration: none;">안상수</a>
                    </td>
                    <td style="padding: 15px 5px; border: 1px solid #ddd; vertical-align: top;">
                        <span style="font-size: 0.8rem; color: #777;">제8대</span><br>
                        <a href="박동규.html" style="color: #0055AA; font-weight: bold; text-decoration: none;">박동규</a>
                    </td>
                    <td style="padding: 15px 5px; border: 1px solid #ddd; vertical-align: top;">
                        <span style="font-size: 0.8rem; color: #777;">제9대</span><br>
                        <a href="정민재.html" style="color: #0055AA; font-weight: bold; text-decoration: none;">정민재</a>
                    </td>
                    <td style="padding: 15px 5px; border: 1px solid #ddd; vertical-align: top;">
                        <span style="font-size: 0.8rem; color: #777;">제10대</span><br>
                        <a href="탁진호.html" style="color: #0055AA; font-weight: bold; text-decoration: none;">탁진호</a>
                    </td>
                </tr>
                <tr>
                    <th colspan="2" style="background-color: #008CCD; color: #fff; padding: 8px; font-weight: bold; border: 1px solid #ddd;">김성민 시정</th>
                    <th colspan="3" style="background-color: #004EA2; color: #fff; padding: 8px; font-weight: bold; border: 1px solid #ddd;">박효빈 시정</th>
                </tr>
                <tr style="line-height: 1.8;">
                    <td style="padding: 15px 5px; border: 1px solid #ddd; vertical-align: top;">
                        <span style="font-size: 0.8rem; color: #777;">제11대</span><br>
                        <a href="곽태영.html" style="color: #0055AA; font-weight: bold; text-decoration: none;">곽태영</a>
                    </td>
                    <td style="padding: 15px 5px; border: 1px solid #ddd; vertical-align: top;">
                        <span style="font-size: 0.8rem; color: #777;">제12대</span><br>
                        <a href="심규원.html" style="color: #0055AA; font-weight: bold; text-decoration: none;">심규원</a>
                    </td>
                    <td style="padding: 15px 5px; border: 1px solid #ddd; vertical-align: top;">
                        <span style="font-size: 0.8rem; color: #777;">제13대</span><br>
                        <a href="고명석.html" style="color: #0055AA; font-weight: bold; text-decoration: none;">고명석</a>
                    </td>
                    <td style="padding: 15px 5px; border: 1px solid #ddd; vertical-align: top; background-color: #f0f8ff;">
                        <span style="font-size: 0.8rem; color: #777;">제14대</span><br>
                        <strong style="color: #005BAC;">우진현</strong>
                    </td>
                    <td style="padding: 15px 5px; border: 1px solid #ddd; vertical-align: top;">
                        <span style="font-size: 0.8rem; color: #777;">제15대</span><br>
                        <a href="최대현.html" style="color: #0055AA; font-weight: bold; text-decoration: none;">최대현</a>
                    </td>
                </tr>
            </table>
        </div>
    </details>
</div>
    `;
    
    // 현재 스크립트 태그가 위치한 곳에 HTML 코드를 렌더링합니다.
    document.currentScript.insertAdjacentHTML('beforebegin', template);
})();