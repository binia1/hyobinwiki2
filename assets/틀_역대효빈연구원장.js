(function() {
    const t = `
<div style="border: 1px solid #ccc; font-family: 'Noto Sans KR', sans-serif; background-color: #fff; max-width: 100%; box-sizing: border-box; clear: both; margin-bottom: 40px;">
    <div style="background-color: #2E7D32; padding: 25px 0 15px 0; text-align: center; border-bottom: 1px solid #1B5E20;">
        <div style="color: #fff; font-size: 1.2rem; font-weight: bold; letter-spacing: -0.5px;">역대 효빈연구원 원장</div>
    </div>
    <details open style="margin: 0; padding: 0;">
        <summary style="background-color: #1B5E20; color: #fff; text-align: center; padding: 10px 0; font-size: 0.95rem; font-weight: bold; cursor: pointer; list-style: none; outline: none; border-bottom: 1px solid #ccc;">[ 펼치기 · 접기 ]</summary>
        <div style="padding: 0;">
            <table style="width: 100%; border-collapse: collapse; text-align: center; font-size: 0.95rem; margin: 0; background-color: #fff; table-layout: fixed;">
                <tr>
                    <th colspan="1" style="background-color: #D82634; color: #fff; padding: 8px; font-weight: bold; border: 1px solid #ddd;">환산채 시정</th>
                    <th colspan="3" style="background-color: #009A44; color: #fff; padding: 8px; font-weight: bold; border: 1px solid #ddd;">박현만 시정</th>
                    <th colspan="1" style="background-color: #0095DA; color: #fff; padding: 8px; font-weight: bold; border: 1px solid #ddd;">윤대환 시정</th>
                </tr>
                <tr style="line-height: 1.8;">
                    <td style="width: 20%; padding: 15px 5px; border: 1px solid #ddd; vertical-align: top;"><span style="font-size: 0.8rem; color: #777;">제1대</span><br><a href="신현수.html" style="color: #0055AA; font-weight: bold; text-decoration: none;">신현수</a></td>
                    <td style="width: 20%; padding: 15px 5px; border: 1px solid #ddd; vertical-align: top;"><span style="font-size: 0.8rem; color: #777;">제2대</span><br><a href="박종철.html" style="color: #0055AA; font-weight: bold; text-decoration: none;">박종철</a></td>
                    <td style="width: 20%; padding: 15px 5px; border: 1px solid #ddd; vertical-align: top;"><span style="font-size: 0.8rem; color: #777;">제3대</span><br><a href="이영석.html" style="color: #0055AA; font-weight: bold; text-decoration: none;">이영석</a></td>
                    <td style="width: 20%; padding: 15px 5px; border: 1px solid #ddd; vertical-align: top;"><span style="font-size: 0.8rem; color: #777;">제4대</span><br><a href="한준호.html" style="color: #0055AA; font-weight: bold; text-decoration: none;">한준호</a></td>
                    <td style="width: 20%; padding: 15px 5px; border: 1px solid #ddd; vertical-align: top;"><span style="font-size: 0.8rem; color: #777;">제5대</span><br><a href="배종기.html" style="color: #0055AA; font-weight: bold; text-decoration: none;">배종기</a></td>
                </tr>
                <tr>
                    <th colspan="3" style="background-color: #009A44; color: #fff; padding: 8px; font-weight: bold; border: 1px solid #ddd;">박현만 시정</th>
                    <th colspan="2" style="background-color: #008CCD; color: #fff; padding: 8px; font-weight: bold; border: 1px solid #ddd;">김성민 시정</th>
                </tr>
                <tr style="line-height: 1.8;">
                    <td style="padding: 15px 5px; border: 1px solid #ddd; vertical-align: top;"><span style="font-size: 0.8rem; color: #777;">제6대</span><br><a href="조태영.html" style="color: #0055AA; font-weight: bold; text-decoration: none;">조태영</a></td>
                    <td style="padding: 15px 5px; border: 1px solid #ddd; vertical-align: top;"><span style="font-size: 0.8rem; color: #777;">제7대</span><br><a href="배성식.html" style="color: #0055AA; font-weight: bold; text-decoration: none;">배성식</a></td>
                    <td style="padding: 15px 5px; border: 1px solid #ddd; vertical-align: top;"><span style="font-size: 0.8rem; color: #777;">제8대</span><br><a href="정인호.html" style="color: #0055AA; font-weight: bold; text-decoration: none;">정인호</a></td>
                    <td style="padding: 15px 5px; border: 1px solid #ddd; vertical-align: top;"><span style="font-size: 0.8rem; color: #777;">제9대</span><br><a href="최명진.html" style="color: #0055AA; font-weight: bold; text-decoration: none;">최명진</a></td>
                    <td style="padding: 15px 5px; border: 1px solid #ddd; vertical-align: top;"><span style="font-size: 0.8rem; color: #777;">제10대</span><br><a href="국승재.html" style="color: #0055AA; font-weight: bold; text-decoration: none;">국승재</a></td>
                </tr>
                <tr>
                    <th colspan="2" style="background-color: #004EA2; color: #fff; padding: 8px; font-weight: bold; border: 1px solid #ddd;">박효빈 시정</th>
                    <th colspan="3" style="background-color: #f8f9fa; border: 1px solid #ddd;"></th>
                </tr>
                <tr style="line-height: 1.8;">
                    <td style="padding: 15px 5px; border: 1px solid #ddd; vertical-align: top; background-color: #f0f8ff;"><span style="font-size: 0.8rem; color: #777;">제11대</span><br><a href="서민우.html" style="color: #0055AA; font-weight: bold; text-decoration: none;">서민우</a></td>
                    <td style="padding: 15px 5px; border: 1px solid #ddd; vertical-align: top; background-color: #f0f8ff;"><span style="font-size: 0.8rem; color: #777;">제12대</span><br><a href="원유미.html" style="color: #0055AA; font-weight: bold; text-decoration: none;">원유미</a></td>
                    <td colspan="3" style="padding: 15px 5px; border: 1px solid #ddd; background-color: #f8f9fa;"></td>
                </tr>
            </table>
        </div>
    </details>
</div>`;
    document.currentScript.insertAdjacentHTML('beforebegin', t);
})();