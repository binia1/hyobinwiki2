(function() {
    const template = `
<div style="border: 2px solid #7777AA; font-family: 'Noto Sans KR', sans-serif; background-color: #fff; max-width: 100%; box-sizing: border-box; clear: both; margin-bottom: 40px;">
<div style="background-color: #7777AA; padding: 20px 0 15px 0; text-align: center; border-bottom: 1px solid #555588;">
<img alt="효빈광역시" onerror="this.style.display='none'" src="이미지/효빈광역시_흰색로고.webp" style="height: 50px; display: block; margin: 0 auto 8px auto; object-fit: contain;"/>
<div style="color: #fff; font-size: 1.05rem; font-weight: 900; letter-spacing: -0.5px;">역대 효빈광역시 행정부시장</div>
</div>
<details open="" style="margin: 0; padding: 0;">
<summary style="background-color: #555588; color: #fff; text-align: center; padding: 8px 0; font-size: 0.85rem; font-weight: bold; cursor: pointer; list-style: none; outline: none; border-bottom: 1px solid #ccc;">
                    [ 펼치기 · 접기 ]
                </summary>
<table style="width: 100%; border-collapse: collapse; text-align: center; font-size: 0.9rem; margin: 0; background-color: #fff; table-layout: fixed;">
<tr>
<th colspan="2" style="background-color: #D82634; color: #fff; padding: 8px; font-weight: bold; border: 1px solid #ddd;">환산채 시정</th>
<th colspan="3" style="background-color: #009A44; color: #fff; padding: 8px; font-weight: bold; border: 1px solid #ddd;">박현만 시정</th>
</tr>
<tr style="line-height: 1.8;">
<td style="width: 20%; padding: 12px 5px; border: 1px solid #ddd; vertical-align: top;">
<span style="font-size: 0.75rem; color: #777;">초대</span><br/>
<a href="조태환.html" style="color: #0055AA; font-weight: bold; text-decoration: none; font-size: 1.05rem;">조태환</a>
</td>
<td style="width: 20%; padding: 12px 5px; border: 1px solid #ddd; vertical-align: top;">
<span style="font-size: 0.75rem; color: #777;">제2대</span><br/>
<a href="민경훈.html" style="color: #0055AA; font-weight: bold; text-decoration: none; font-size: 1.05rem;">민경훈</a>
</td>
<td style="width: 20%; padding: 12px 5px; border: 1px solid #ddd; vertical-align: top;">
<span style="font-size: 0.75rem; color: #777;">제3대</span><br/>
<a href="백동현.html" style="color: #0055AA; font-weight: bold; text-decoration: none; font-size: 1.05rem;">백동현</a>
</td>
<td style="width: 20%; padding: 12px 5px; border: 1px solid #ddd; vertical-align: top;">
<span style="font-size: 0.75rem; color: #777;">제4대</span><br/>
<a href="장석주.html" style="color: #0055AA; font-weight: bold; text-decoration: none; font-size: 1.05rem;">장석주</a>
</td>
<td style="width: 20%; padding: 12px 5px; border: 1px solid #ddd; vertical-align: top;">
<span style="font-size: 0.75rem; color: #777;">제5대</span><br/>
<a href="남기영.html" style="color: #0055AA; font-weight: bold; text-decoration: none; font-size: 1.05rem;">남기영</a>
</td>
</tr>
<tr>
<th colspan="1" style="background-color: #0095DA; color: #fff; padding: 8px; font-weight: bold; border: 1px solid #ddd;">윤대환 시정</th>
<th colspan="4" style="background-color: #019E33; color: #fff; padding: 8px; font-weight: bold; border: 1px solid #ddd;">박현만 시정 </th>
</tr>
<tr style="line-height: 1.8;">
<td style="padding: 12px 5px; border: 1px solid #ddd; vertical-align: top;">
<span style="font-size: 0.75rem; color: #777;">제6대</span><br/>
<a href="강견태.html" style="color: #0055AA; font-weight: bold; text-decoration: none; font-size: 1.05rem;">강견태</a>
</td>
<td style="padding: 12px 5px; border: 1px solid #ddd; vertical-align: top;">
<span style="font-size: 0.75rem; color: #777;">제7대</span><br/>
<a href="오진명.html" style="color: #0055AA; font-weight: bold; text-decoration: none; font-size: 1.05rem;">오진명</a>
</td>
<td style="padding: 12px 5px; border: 1px solid #ddd; vertical-align: top;">
<span style="font-size: 0.75rem; color: #777;">제8대</span><br/>
<a href="하태경.html" style="color: #0055AA; font-weight: bold; text-decoration: none; font-size: 1.05rem;">하태경</a>
</td>
<td style="padding: 12px 5px; border: 1px solid #ddd; vertical-align: top;">
<span style="font-size: 0.75rem; color: #777;">제9대</span><br/>
<a href="임성국.html" style="color: #0055AA; font-weight: bold; text-decoration: none; font-size: 1.05rem;">임성국</a>
</td>
<td style="padding: 12px 5px; border: 1px solid #ddd; vertical-align: top;">
<span style="font-size: 0.75rem; color: #777;">제10대</span><br/>
<a href="서병철.html" style="color: #0055AA; font-weight: bold; text-decoration: none; font-size: 1.05rem;">서병철</a>
</td>
</tr>
<tr>
<th colspan="4" style="background-color: #008CCD; color: #fff; padding: 8px; font-weight: bold; border: 1px solid #ddd;">김성민 시정</th>
<th colspan="1" style="background-color: #004EA2; color: #fff; padding: 8px; font-weight: bold; border: 1px solid #ddd;">박효빈 시정</th>
</tr>
<tr style="line-height: 1.8;">
<td style="padding: 12px 5px; border: 1px solid #ddd; vertical-align: top;">
<span style="font-size: 0.75rem; color: #777;">제11대</span><br/>
<a href="신응진.html" style="color: #0055AA; font-weight: bold; text-decoration: none; font-size: 1.05rem;">신응진</a>
</td>
<td style="padding: 12px 5px; border: 1px solid #ddd; vertical-align: top;">
<span style="font-size: 0.75rem; color: #777;">제12대</span><br/>
<a href="차민호.html" style="color: #0055AA; font-weight: bold; text-decoration: none; font-size: 1.05rem;">차민호</a>
</td>
<td style="padding: 12px 5px; border: 1px solid #ddd; vertical-align: top;">
<span style="font-size: 0.75rem; color: #777;">제13대</span><br/>
<a href="구본성.html" style="color: #0055AA; font-weight: bold; text-decoration: none; font-size: 1.05rem;">구본성</a>
</td>
<td style="padding: 12px 5px; border: 1px solid #ddd; vertical-align: top;">
<span style="font-size: 0.75rem; color: #777;">제14대</span><br/>
<a href="유은태.html" style="color: #0055AA; font-weight: bold; text-decoration: none; font-size: 1.05rem;">유은태</a>
</td>
<td style="padding: 12px 5px; border: 1px solid #ddd; vertical-align: top;">
<span style="font-size: 0.75rem; color: #777;">제15대</span><br/>
<a href="고성진.html" style="color: #0055AA; font-weight: bold; text-decoration: none; font-size: 1.05rem;">고성진</a>
</td>
</tr>
<tr>
<th colspan="5" style="background-color: #004EA2; color: #fff; padding: 8px; font-weight: bold; border: 1px solid #ddd;">박효빈 시정 </th>
</tr>
<tr style="line-height: 1.8;">
<td style="padding: 12px 5px; border: 2px solid #7777AA; vertical-align: top; background-color: #fdfbf7;">
<span style="font-size: 0.75rem; color: #777;">제16대</span><br/>
<strong style="color: #E6B422; font-size: 1.1rem; text-shadow: 1px 1px 0px rgba(0,0,0,0.1);">강휴석</strong>
</td>
<td colspan="4" style="padding: 12px 5px; border: 1px solid #ddd; background-color: #f8f9fa;"></td>
</tr>
</table>
</details>
</div>
    `;
    
    // 현재 스크립트 태그가 위치한 곳에 HTML 코드를 렌더링합니다.
    document.currentScript.insertAdjacentHTML('beforebegin', template);
})();