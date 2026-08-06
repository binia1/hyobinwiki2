(function() {
    const template = `
<div style="border: 1px solid #4AD898; width: 100%; box-sizing: border-box; font-family: sans-serif; background: white; margin-bottom: 25px;">
<div style="background: #4AD898; color: white; display: flex; align-items: center; justify-content: center; padding: 12px; border-bottom: 1px solid #4AD898;">
<div style="display: flex; align-items: center; gap: 15px; border: 1px solid white; padding: 5px 20px;">
<img alt="덕북 로고" src="이미지/덕북로고.webp" style="height: 30px; filter: brightness(0) invert(1);"/>
<div style="display: flex; flex-direction: column; line-height: 1.2; text-align: left;">
<span style="font-size: 13px; font-weight: bold;">덕빈북도</span>
<span style="font-size: 20px; font-weight: bold;">기초자치단체</span>
</div>
</div>
</div>
<div id="guLabel" onclick="toggleNav('guNav', 'guLabel')" style="text-align: center; font-size: 13px; font-weight: bold; padding: 8px; border-bottom: 1px solid #4AD898; background: #688372; color: white; cursor: pointer; user-select: none;">[ 접기 ]</div>
<div id="guNav" style="max-height: 2000px; overflow: hidden; transition: max-height 0.35s ease-in-out;">
<table style="width: 100%; border-collapse: collapse; text-align: center; font-size: 13px; table-layout: fixed;">
<tbody>
<tr>
<th colspan="3" style="background-color: #4AD898; color: white; padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; font-size: 14px;">자치시</th>
</tr>
<tr>
<td style="padding: 15px; border: 1px solid #e5e7eb; background: white;">
<a href="빈주시.html" style="text-decoration: none; color: black; display: flex; flex-direction: column; align-items: center; gap: 6px;">
<img alt="빈주시" src="이미지/빈주시.webp" style="height: 30px; object-fit: contain;"/>
<div style="display: flex; align-items: center; gap: 4px;"><span style="background: #4AD898; color: white; padding: 2px 5px; border-radius: 2px; font-size: 10px; font-weight: bold;">도청</span><span style="font-weight: bold;">빈주시</span></div>
</a>
</td>
<td style="padding: 15px; border: 1px solid #e5e7eb; background: white;">
<a href="강주시.html" style="text-decoration: none; color: black; display: flex; flex-direction: column; align-items: center; gap: 6px;">
<img alt="강주시" src="이미지/강주시.webp" style="height: 30px; object-fit: contain;"/>
<span style="font-weight: 500;">강주시</span>
</a>
</td>
<td style="padding: 15px; border: 1px solid #e5e7eb; background: white;">
<a href="계성시.html" style="text-decoration: none; color: black; display: flex; flex-direction: column; align-items: center; gap: 6px;">
<img alt="계성시" src="이미지/계성시.webp" style="height: 30px; object-fit: contain;"/>
<span style="font-weight: 500;">계성시</span>
</a>
</td>
</tr>
<tr>
<td style="padding: 15px; border: 1px solid #e5e7eb; background: white;">
<a href="군천시.html" style="text-decoration: none; color: black; display: flex; flex-direction: column; align-items: center; gap: 6px;">
<img alt="군천시" src="이미지/군천시.webp" style="height: 30px; object-fit: contain;"/>
<span style="font-weight: 500;">군천시</span>
</a>
</td>
<td style="padding: 15px; border: 1px solid #e5e7eb; background: white;">
<a href="서진시.html" style="text-decoration: none; color: black; display: flex; flex-direction: column; align-items: center; gap: 6px;">
<img alt="서진시" src="이미지/서진시.webp" style="height: 30px; object-fit: contain;"/>
<span style="font-weight: 500;">서진시</span>
</a>
</td>
<td style="padding: 15px; border: 1px solid #e5e7eb; background: white;">
<a href="서해시.html" style="text-decoration: none; color: black; display: flex; flex-direction: column; align-items: center; gap: 6px;">
<img alt="서해시" src="이미지/서해시.webp" style="height: 30px; object-fit: contain;"/>
<span style="font-weight: 500;">서해시</span>
</a>
</td>
</tr>
<tr>
<td style="padding: 15px; border: 1px solid #e5e7eb; background: white;">
<a href="약산시.html" style="text-decoration: none; color: black; display: flex; flex-direction: column; align-items: center; gap: 6px;">
<img alt="약산시" src="이미지/약산시.webp" style="height: 30px; object-fit: contain;"/>
<span style="font-weight: 500;">약산시</span>
</a>
</td>
<td style="padding: 15px; border: 1px solid #e5e7eb; background: white;">
<a href="전산시.html" style="text-decoration: none; color: black; display: flex; flex-direction: column; align-items: center; gap: 6px;">
<img alt="전산시" src="이미지/전산시.webp" style="height: 30px; object-fit: contain;"/>
<span style="font-weight: 500;">전산시</span>
</a>
</td>
<td style="padding: 15px; border: 1px solid #e5e7eb; background: white;">
<a href="천주시.html" style="text-decoration: none; color: black; display: flex; flex-direction: column; align-items: center; gap: 6px;">
<img alt="천주시" src="이미지/천주시.webp" style="height: 30px; object-fit: contain;"/>
<span style="font-weight: 500;">천주시</span>
</a>
</td>
</tr>
<tr>
<th colspan="3" style="background-color: #2ECC71; color: white; padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; font-size: 14px;">자치군</th>
</tr>
<tr>
<td style="padding: 15px; border: 1px solid #e5e7eb; background: white;">
<a href="기도군.html" style="text-decoration: none; color: black; display: flex; flex-direction: column; align-items: center; gap: 6px;">
<img alt="기도군" src="이미지/기도군.webp" style="height: 30px; object-fit: contain;"/>
<span style="font-weight: 500;">기도군</span>
</a>
</td>
<td style="padding: 15px; border: 1px solid #e5e7eb; background: white;">
<a href="낭원군.html" style="text-decoration: none; color: black; display: flex; flex-direction: column; align-items: center; gap: 6px;">
<img alt="낭원군" src="이미지/낭원군.webp" style="height: 30px; object-fit: contain;"/>
<span style="font-weight: 500;">낭원군</span>
</a>
</td>
<td style="padding: 15px; border: 1px solid #e5e7eb; background: white;">
<a href="덕현군.html" style="text-decoration: none; color: black; display: flex; flex-direction: column; align-items: center; gap: 6px;">
<img alt="덕현군" src="이미지/덕현군.webp" style="height: 30px; object-fit: contain;"/>
<span style="font-weight: 500;">덕현군</span>
</a>
</td>
</tr>
<tr>
<td style="padding: 15px; border: 1px solid #e5e7eb; background: white;">
<a href="모제군.html" style="text-decoration: none; color: black; display: flex; flex-direction: column; align-items: center; gap: 6px;">
<img alt="모제군" src="이미지/모제군.webp" style="height: 30px; object-fit: contain;"/>
<span style="font-weight: 500;">모제군</span>
</a>
</td>
<td style="padding: 15px; border: 1px solid #e5e7eb; background: white;">
<a href="반양군.html" style="text-decoration: none; color: black; display: flex; flex-direction: column; align-items: center; gap: 6px;">
<img alt="반양군" src="이미지/반양군.webp" style="height: 30px; object-fit: contain;"/>
<span style="font-weight: 500;">반양군</span>
</a>
</td>
<td style="padding: 15px; border: 1px solid #e5e7eb; background: white;">
<a href="상안군.html" style="text-decoration: none; color: black; display: flex; flex-direction: column; align-items: center; gap: 6px;">
<img alt="상안군" src="이미지/상안군.webp" style="height: 30px; object-fit: contain;"/>
<span style="font-weight: 500;">상안군</span>
</a>
</td>
</tr>
<tr>
<td style="padding: 15px; border: 1px solid #e5e7eb; background: white;">
<a href="선곡군.html" style="text-decoration: none; color: black; display: flex; flex-direction: column; align-items: center; gap: 6px;">
<img alt="선곡군" src="이미지/선곡군.webp" style="height: 30px; object-fit: contain;"/>
<span style="font-weight: 500;">선곡군</span>
</a>
</td>
<td style="padding: 15px; border: 1px solid #e5e7eb; background: white;">
<a href="저천군.html" style="text-decoration: none; color: black; display: flex; flex-direction: column; align-items: center; gap: 6px;">
<img alt="저천군" src="이미지/저천군.webp" style="height: 30px; object-fit: contain;"/>
<span style="font-weight: 500;">저천군</span>
</a>
</td>
<td style="padding: 15px; border: 1px solid #e5e7eb; background: white;">
<a href="치원군.html" style="text-decoration: none; color: black; display: flex; flex-direction: column; align-items: center; gap: 6px;">
<img alt="치원군" src="이미지/치원군.webp" style="height: 30px; object-fit: contain;"/>
<span style="font-weight: 500;">치원군</span>
</a>
</td>
</tr>
</tbody>
</table>
<div style="background-color: #4AD898; color: white; padding: 12px; font-size: 12px; text-align: center; line-height: 1.8;">
                                서울 · 광주 · 부산 · 대구 · 효빈 · 인천 · 대전 · 울산 · 세종<br/>
                                경기 · 충북 · 충남 · 경북 · 경남 · 덕남 · 덕북 · 강원 · 전북 · 제주<br/>
</div>
</div>
</div>
    `;
    
    // 현재 스크립트 태그가 위치한 곳에 HTML 코드를 렌더링합니다.
    document.currentScript.insertAdjacentHTML('beforebegin', template);
})();