(function() {
    const template = `
<div style="border: 1px solid #ccc; font-family: 'Noto Sans KR', sans-serif; background-color: #fff; max-width: 100%; box-sizing: border-box; clear: both; margin-bottom: 40px;">
    <div style="background-color: #7777AA; padding: 25px 0 15px 0; text-align: center; border-bottom: 1px solid #555588;">
        <img src="이미지/효빈시설관리공단_로고.webp" alt="효빈시설관리공단" onerror="this.outerHTML='<span style=\\'font-size:1.5rem; font-weight:bold; color:white;\\'>효빈시설관리공단</span>'" style="height: 50px; display: block; margin: 0 auto 10px auto; object-fit: contain;">
        <div style="color: #fff; font-size: 1.2rem; font-weight: bold; letter-spacing: -0.5px;">역대 효빈시설관리공단 이사장</div>
    </div>
    <details open style="margin: 0; padding: 0;">
        <summary style="background-color: #555588; color: #fff; text-align: center; padding: 10px 0; font-size: 0.95rem; font-weight: bold; cursor: pointer; list-style: none; outline: none; border-bottom: 1px solid #ccc;">
            [ 펼치기 · 접기 ]
        </summary>
        <div style="padding: 0;">
            <table style="width: 100%; border-collapse: collapse; text-align: center; font-size: 0.95rem; margin: 0; background-color: #fff; table-layout: fixed;">
                <tr>
                    <th style="background-color: #666666; color: #fff; padding: 8px; font-weight: bold; border: 1px solid #ddd;">문민정부</th>
                    <th style="background-color: #D82634; color: #fff; padding: 8px; font-weight: bold; border: 1px solid #ddd;">환산채 시정</th>
                    <th colspan="2" style="background-color: #009A44; color: #fff; padding: 8px; font-weight: bold; border: 1px solid #ddd;">박현만 시정</th>
                    <th style="background-color: #0095DA; color: #fff; padding: 8px; font-weight: bold; border: 1px solid #ddd;">윤대환 시정</th>
                </tr>
                <tr style="line-height: 1.8;">
                    <td style="width: 20%; padding: 15px 5px; border: 1px solid #ddd; vertical-align: top;">
                        <span style="font-size: 0.75rem; color: #777;">초대</span><br>
                        <a href="윤재형.html" style="color: #0055AA; font-weight: bold; text-decoration: none;">윤재형</a>
                    </td>
                    <td style="width: 20%; padding: 15px 5px; border: 1px solid #ddd; vertical-align: top;">
                        <span style="font-size: 0.75rem; color: #777;">제2대</span><br>
                        <a href="양준범.html" style="color: #0055AA; font-weight: bold; text-decoration: none;">양준범</a>
                    </td>
                    <td style="width: 20%; padding: 15px 5px; border: 1px solid #ddd; vertical-align: top;">
                        <span style="font-size: 0.75rem; color: #777;">제3·4대</span><br>
                        <a href="구왕유.html" style="color: #0055AA; font-weight: bold; text-decoration: none;">구왕유</a>
                    </td>
                    <td style="width: 20%; padding: 15px 5px; border: 1px solid #ddd; vertical-align: top;">
                        <span style="font-size: 0.75rem; color: #777;">제5대</span><br>
                        <a href="노완규.html" style="color: #0055AA; font-weight: bold; text-decoration: none;">노완규</a>
                    </td>
                    <td style="width: 20%; padding: 15px 5px; border: 1px solid #ddd; vertical-align: top;">
                        <span style="font-size: 0.75rem; color: #777;">제6대</span><br>
                        <a href="오박명.html" style="color: #0055AA; font-weight: bold; text-decoration: none;">오박명</a>
                    </td>
                </tr>
                <tr>
                    <th colspan="2" style="background-color: #019E33; color: #fff; padding: 8px; font-weight: bold; border: 1px solid #ddd;">박현만 시정</th>
                    <th colspan="3" style="background-color: #008CCD; color: #fff; padding: 8px; font-weight: bold; border: 1px solid #ddd;">김성민 시정</th>
                </tr>
                <tr style="line-height: 1.8;">
                    <td style="padding: 15px 5px; border: 1px solid #ddd; vertical-align: top;">
                        <span style="font-size: 0.75rem; color: #777;">제7대</span><br>
                        <a href="주연천.html" style="color: #0055AA; font-weight: bold; text-decoration: none;">주연천</a>
                    </td>
                    <td style="padding: 15px 5px; border: 1px solid #ddd; vertical-align: top;">
                        <span style="font-size: 0.75rem; color: #777;">제8대</span><br>
                        <a href="공석현.html" style="color: #0055AA; font-weight: bold; text-decoration: none;">공석현</a>
                    </td>
                    <td style="padding: 15px 5px; border: 1px solid #ddd; vertical-align: top;">
                        <span style="font-size: 0.75rem; color: #777;">제9대</span><br>
                        <a href="양원준.html" style="color: #0055AA; font-weight: bold; text-decoration: none;">양원준</a>
                    </td>
                    <td style="padding: 15px 5px; border: 1px solid #ddd; vertical-align: top;">
                        <span style="font-size: 0.75rem; color: #777;">제10대</span><br>
                        <a href="추진명.html" style="color: #0055AA; font-weight: bold; text-decoration: none;">추진명</a>
                    </td>
                    <td style="padding: 15px 5px; border: 1px solid #ddd; vertical-align: top;">
                        <span style="font-size: 0.75rem; color: #777;">제11대</span><br>
                        <a href="연숙현.html" style="color: #0055AA; font-weight: bold; text-decoration: none;">연숙현</a>
                    </td>
                </tr>
                <tr>
                    <th colspan="1" style="background-color: #008CCD; color: #fff; padding: 8px; font-weight: bold; border: 1px solid #ddd;">김성민 시정</th>
                    <th colspan="4" style="background-color: #004EA2; color: #fff; padding: 8px; font-weight: bold; border: 1px solid #ddd;">박효빈 시정</th>
                </tr>
                <tr style="line-height: 1.8;">
                    <td style="padding: 15px 5px; border: 1px solid #ddd; vertical-align: top;">
                        <span style="font-size: 0.75rem; color: #777;">제12대</span><br>
                        <a href="조왕석.html" style="color: #0055AA; font-weight: bold; text-decoration: none;">조왕석</a>
                    </td>
                    <td style="padding: 15px 5px; border: 1px solid #ddd; vertical-align: top; ">
                        <span style="font-size: 0.75rem; color: #777;">제13대</span><br>
<a href="최성진.html" style="color: #0055AA; font-weight: bold; text-decoration: none;">최성진</a>                    </td>
                    <td colspan="3" style="padding: 15px 5px; border: 1px solid #ddd; background-color: #f8f9fa;"></td>
                </tr>
            </table>
        </div>
    </details>
</div>
    `;
    document.currentScript.insertAdjacentHTML('beforebegin', template);
})();