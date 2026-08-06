(function() {
    const template = `
<div style="border: 1px solid #335566; width: 100%; box-sizing: border-box; font-family: sans-serif; background: white; margin-bottom: 25px; border-radius: 4px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
<div style="background: #335566; color: white; display: flex; align-items: center; justify-content: center; padding: 12px; border-bottom: 1px solid #335566;">
<div style="display: flex; align-items: center; gap: 15px; border: 1px solid white; padding: 5px 20px;">
<img alt="덕남 로고" onerror="this.outerHTML='<span style=>🏙️</span>'" src="이미지/덕빈남도_로고.webp" style="height: 30px; filter: brightness(0) invert(1);"/>
<div style="display: flex; flex-direction: column; line-height: 1.2; text-align: left;">
<span style="font-size: 13px; font-weight: bold;">덕빈남도</span>
<span style="font-size: 20px; font-weight: bold;">기초자치단체</span>
</div>
</div>
</div>
<div id="guLabel" onclick="toggleNav('guNav', 'guLabel')" style="text-align: center; font-size: 13px; font-weight: bold; padding: 8px; border-bottom: 1px solid #335566; background: #243d4a; color: white; cursor: pointer; user-select: none;">[ 접기 ]</div>
<div id="guNav" style="max-height: 2000px; overflow: hidden; transition: max-height 0.35s ease-in-out;">
<table style="width: 100%; border-collapse: collapse; text-align: center; font-size: 13px; table-layout: fixed;">
<tbody>
<tr>
<th colspan="3" style="background-color: #335566; color: white; padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; font-size: 14px;">자치시</th>
</tr>
<tr>
<td style="padding: 15px; border: 1px solid #e5e7eb; background: white;">
<a href="매성시.html" style="text-decoration: none; color: black; display: flex; flex-direction: column; align-items: center; gap: 6px;">
<img alt="매성시" onerror="this.style.display='none'" src="이미지/매성시.webp" style="height: 30px; object-fit: contain;"/>
<span style="font-weight: 500;">매성시</span>
</a>
</td>
<td style="padding: 15px; border: 1px solid #e5e7eb; background: white;">
<a href="비천시.html" style="text-decoration: none; color: black; display: flex; flex-direction: column; align-items: center; gap: 6px;">
<img alt="비천시" onerror="this.style.display='none'" src="이미지/비천시.webp" style="height: 30px; object-fit: contain;"/>
<span style="font-weight: 500;">비천시</span>
</a>
</td>
<td style="padding: 15px; border: 1px solid #e5e7eb; background: white;">
<a href="방산시.html" style="text-decoration: none; color: black; display: flex; flex-direction: column; align-items: center; gap: 6px;">
<img alt="방산시" onerror="this.style.display='none'" src="이미지/방산시.webp" style="height: 30px; object-fit: contain;"/>
<span style="font-weight: 500;">방산시</span>
</a>
</td>
</tr>
<tr>
<td style="padding: 15px; border: 1px solid #e5e7eb; background: white;">
<a href="마진시.html" style="text-decoration: none; color: black; display: flex; flex-direction: column; align-items: center; gap: 6px;">
<img alt="마진시" onerror="this.style.display='none'" src="이미지/마진시.webp" style="height: 30px; object-fit: contain;"/>
<span style="font-weight: 500;">마진시</span>
</a>
</td>
<td style="padding: 15px; border: 1px solid #e5e7eb; background: white;">
<a href="하정시.html" style="text-decoration: none; color: black; display: flex; flex-direction: column; align-items: center; gap: 6px;">
<img alt="하정시" onerror="this.style.display='none'" src="이미지/하정시.webp" style="height: 30px; object-fit: contain;"/>
<span style="font-weight: 500;">하정시</span>
</a>
</td>
<td style="padding: 15px; border: 1px solid #e5e7eb; background: white;">
<a href="낙주시.html" style="text-decoration: none; color: black; display: flex; flex-direction: column; align-items: center; gap: 6px;">
<img alt="낙주시" onerror="this.style.display='none'" src="이미지/낙주시.webp" style="height: 30px; object-fit: contain;"/>
<span style="font-weight: 500;">낙주시</span>
</a>
</td>
</tr>
<tr>
<td style="padding: 15px; border: 1px solid #e5e7eb; background: white;">
<a href="덕주시.html" style="text-decoration: none; color: black; display: flex; flex-direction: column; align-items: center; gap: 6px;">
<img alt="덕주시" onerror="this.style.display='none'" src="이미지/덕주시.webp" style="height: 30px; object-fit: contain;"/>
<div style="display: flex; align-items: center; gap: 4px;"><span style="background: #335566; color: white; padding: 2px 5px; border-radius: 2px; font-size: 10px; font-weight: bold;">도청</span><span style="font-weight: bold;">덕주시</span></div>
</a>
</td>
<td style="background: #fafafa; border: 1px solid #e5e7eb;"></td>
<td style="background: #fafafa; border: 1px solid #e5e7eb;"></td>
</tr>
<tr>
<th colspan="3" style="background-color: #446677; color: white; padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; font-size: 14px;">자치군</th>
</tr>
<tr>
<td style="padding: 15px; border: 1px solid #e5e7eb; background: white;">
<a href="곡천군.html" style="text-decoration: none; color: black; display: flex; flex-direction: column; align-items: center; gap: 6px;">
<img alt="곡천군" onerror="this.style.display='none'" src="이미지/곡천군.webp" style="height: 30px; object-fit: contain;"/>
<span style="font-weight: 500;">곡천군</span>
</a>
</td>
<td style="padding: 15px; border: 1px solid #e5e7eb; background: white;">
<a href="매산군.html" style="text-decoration: none; color: black; display: flex; flex-direction: column; align-items: center; gap: 6px;">
<img alt="매산군" onerror="this.style.display='none'" src="이미지/매산군.webp" style="height: 30px; object-fit: contain;"/>
<span style="font-weight: 500;">매산군</span>
</a>
</td>
<td style="padding: 15px; border: 1px solid #e5e7eb; background: white;">
<a href="석창군.html" style="text-decoration: none; color: black; display: flex; flex-direction: column; align-items: center; gap: 6px;">
<img alt="석창군" onerror="this.style.display='none'" src="이미지/석창군.webp" style="height: 30px; object-fit: contain;"/>
<span style="font-weight: 500;">석창군</span>
</a>
</td>
</tr>
<tr>
<td style="padding: 15px; border: 1px solid #e5e7eb; background: white;">
<a href="분주군.html" style="text-decoration: none; color: black; display: flex; flex-direction: column; align-items: center; gap: 6px;">
<img alt="분주군" onerror="this.style.display='none'" src="이미지/분주군.webp" style="height: 30px; object-fit: contain;"/>
<span style="font-weight: 500;">분주군</span>
</a>
</td>
<td style="padding: 15px; border: 1px solid #e5e7eb; background: white;">
<a href="고포군.html" style="text-decoration: none; color: black; display: flex; flex-direction: column; align-items: center; gap: 6px;">
<img alt="고포군" onerror="this.style.display='none'" src="이미지/고포군.webp" style="height: 30px; object-fit: contain;"/>
<span style="font-weight: 500;">고포군</span>
</a>
</td>
<td style="padding: 15px; border: 1px solid #e5e7eb; background: white;">
<a href="인곡군.html" style="text-decoration: none; color: black; display: flex; flex-direction: column; align-items: center; gap: 6px;">
<img alt="인곡군" onerror="this.style.display='none'" src="이미지/인곡군.webp" style="height: 30px; object-fit: contain;"/>
<span style="font-weight: 500;">인곡군</span>
</a>
</td>
</tr>
<tr>
<td style="padding: 15px; border: 1px solid #e5e7eb; background: white;">
<a href="관수군.html" style="text-decoration: none; color: black; display: flex; flex-direction: column; align-items: center; gap: 6px;">
<img alt="관수군" onerror="this.style.display='none'" src="이미지/관수군.webp" style="height: 30px; object-fit: contain;"/>
<span style="font-weight: 500;">관수군</span>
</a>
</td>
<td style="padding: 15px; border: 1px solid #e5e7eb; background: white;">
<a href="운진군.html" style="text-decoration: none; color: black; display: flex; flex-direction: column; align-items: center; gap: 6px;">
<img alt="운진군" onerror="this.style.display='none'" src="이미지/운진군.webp" style="height: 30px; object-fit: contain;"/>
<span style="font-weight: 500;">운진군</span>
</a>
</td>
<td style="padding: 15px; border: 1px solid #e5e7eb; background: white;">
<a href="두원군.html" style="text-decoration: none; color: black; display: flex; flex-direction: column; align-items: center; gap: 6px;">
<img alt="두원군" onerror="this.style.display='none'" src="이미지/두원군.webp" style="height: 30px; object-fit: contain;"/>
<span style="font-weight: 500;">두원군</span>
</a>
</td>
</tr>
<tr>
<td style="padding: 15px; border: 1px solid #e5e7eb; background: white;">
<a href="원안군.html" style="text-decoration: none; color: black; display: flex; flex-direction: column; align-items: center; gap: 6px;">
<img alt="원안군" onerror="this.style.display='none'" src="이미지/원안군.webp" style="height: 30px; object-fit: contain;"/>
<span style="font-weight: 500;">원안군</span>
</a>
</td>
<td style="background: #fafafa; border: 1px solid #e5e7eb;"></td>
<td style="background: #fafafa; border: 1px solid #e5e7eb;"></td>
</tr>
</tbody>
</table>
<div style="background-color: #fafafa; color: #555; padding: 12px; font-size: 12px; text-align: center; line-height: 1.8; border-top: 1px solid #e5e7eb;">
                        서울 · 광주 · 부산 · 대구 · 효빈 · 인천 · 대전 · 울산 · 세종<br/>
                        경기 · 충북 · 충남 · 경북 · 경남 · 덕남 · 덕북 · 강원 · 전북 · 제주<br/>
</div>
</div>
</div>
    `;
    
    // 현재 스크립트 태그가 위치한 곳에 HTML 코드를 렌더링합니다.
    document.currentScript.insertAdjacentHTML('beforebegin', template);
})();