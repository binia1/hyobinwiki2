// assets/nav_admin.js

document.addEventListener('DOMContentLoaded', function() {
    // 1. 대한민국의 광역자치단체 (광주광역시 삭제 및 SVG 매핑 완전 이식)
    const nationalHTML = `
<div style="border: 1px solid #335566; width: 100%; box-sizing: border-box; font-family: sans-serif; background: white; margin-bottom: 25px; border-radius: 4px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
        <div style="display: flex; justify-content: space-between; align-items: stretch; border-bottom: 1px solid #335566; background: white; height: 50px;">
            <div style="width: 15%; background: linear-gradient(115deg, #000 25%, transparent 25%, transparent 35%, #000 35%, #000 55%, transparent 55%, transparent 65%, #000 65%, #000 85%, transparent 85%);"></div>
            <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; line-height: 1.2;">
                <div style="font-size: 11px; font-weight: normal; color: black; display: flex; align-items: center; justify-content: center; gap: 5px; border: 1px solid #ddd; padding: 2px 6px; border-radius: 2px; background: #fafafa;">
                    <span style="font-size:13px;">🇰🇷</span> 대한민국
                </div>
                <div style="font-size: 16px; font-weight: bold; color: black; letter-spacing: 1px; margin-top: 3px;">광역자치단체</div>
            </div>
            <div style="width: 15%; background: linear-gradient(115deg, #CD2E3A 45%, #0047A0 45%);"></div>
        </div>
        <div id="natLabel" onclick="toggleNav('natNav', 'natLabel')" style="text-align: center; font-size: 12px; font-weight: bold; padding: 10px; border-bottom: 1px solid #335566; color: #444; background: #f1f3f5; cursor: pointer; user-select: none;">[ 접기 ]</div>
        <div id="natNav" style="max-height: 2000px; overflow: hidden; transition: max-height 0.35s ease-in-out;">
            <table style="width: 100%; border-collapse: collapse; text-align: center; font-size: 13px;">
                <tbody>
                    <tr>
                        <th style="background-color: #CD2E3A; color: white; padding: 12px; border: 1px solid white; width: 50%;">특별시</th>
                        <th style="background-color: #CD2E3A; color: white; padding: 12px; border: 1px solid white; width: 50%;">통합특별시</th>
                    </tr>
                    <tr>
                        <td style="padding: 20px 12px; border: 1px solid #e5e7eb; background: white; vertical-align: middle;">
                            <a href="https://namu.wiki/w/서울특별시" style="text-decoration: none; color: #CD2E3A; display: inline-flex; flex-direction: column; align-items: center;" target="_blank">
                                <img src="이미지/svg/서울특별시.svg" style="height: 30px; object-fit: contain; margin-bottom: 8px;" onerror="this.style.display='none'">
                                <div style="display: flex; align-items: center; gap: 4px;"><span style="background: #CD2E3A; color: white; padding: 1px 5px; border-radius: 2px; font-size: 11px; font-weight: bold;">수도</span><span style="font-weight: bold; font-size: 14px;">서울특별시</span></div>
                            </a>
                        </td>
                        <td style="padding: 20px 12px; border: 1px solid #e5e7eb; background: white; vertical-align: middle;">
                            <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
                                <a href="https://namu.wiki/w/전남광주통합특별시" style="text-decoration: none; color: #0047A0; display: flex; flex-direction: column; align-items: center;" target="_blank">
                                    <img src="이미지/svg/전남광주통합특별시.svg" style="height: 30px; object-fit: contain; margin-bottom: 8px;" onerror="this.style.display='none'">
                                    <span style="font-weight: bold;">전남광주통합특별시</span>
                                </a>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th colspan="2" style="background-color: #CD2E3A; color: white; padding: 10px; border: 1px solid white; font-weight: bold;">광역시</th>
                    </tr>
                    <tr>
                        <td colspan="2" style="padding: 20px 12px; border: 1px solid #e5e7eb; background: white;">
                            <div style="display: flex; justify-content: space-around; flex-wrap: wrap; gap: 20px;">
                                <a href="https://namu.wiki/w/부산광역시" style="text-decoration: none; color: #E6007E; display: flex; flex-direction: column; align-items: center;" target="_blank">
                                    <img src="이미지/svg/부산광역시.svg" style="height: 28px; margin-bottom: 8px;" onerror="this.style.display='none'">
                                    <span style="font-weight: bold;">부산광역시</span>
                                </a>
                                <a href="https://namu.wiki/w/대구광역시" style="text-decoration: none; color: #009933; display: flex; flex-direction: column; align-items: center;" target="_blank">
                                    <img src="이미지/svg/대구광역시.svg" style="height: 28px; margin-bottom: 8px;" onerror="this.style.display='none'">
                                    <span style="font-weight: bold;">대구광역시</span>
                                </a>
                                <a href="https://namu.wiki/w/인천광역시" style="text-decoration: none; color: #0066B3; display: flex; flex-direction: column; align-items: center;" target="_blank">
                                    <img src="이미지/svg/인천광역시.svg" style="height: 28px; margin-bottom: 8px;" onerror="this.style.display='none'">
                                    <span style="font-weight: bold;">인천광역시</span>
                                </a>
                                <a href="https://namu.wiki/w/대전광역시" style="text-decoration: none; color: #00A651; display: flex; flex-direction: column; align-items: center;" target="_blank">
                                    <img src="이미지/svg/대전광역시.svg" style="height: 28px; margin-bottom: 8px;" onerror="this.style.display='none'">
                                    <span style="font-weight: bold;">대전광역시</span>
                                </a>
                                <a href="https://namu.wiki/w/울산광역시" style="text-decoration: none; color: #0088A8; display: flex; flex-direction: column; align-items: center;" target="_blank">
                                    <img src="이미지/svg/울산광역시.svg" style="height: 28px; margin-bottom: 8px;" onerror="this.style.display='none'">
                                    <span style="font-weight: bold;">울산광역시</span>
                                </a>
                                <a href="효빈광역시.html" style="text-decoration: none; color: #7777AA; display: flex; flex-direction: column; align-items: center;">
                                    <img src="이미지/효빈광역시_흰색로고.webp" style="height: 28px; margin-bottom: 8px; filter: invert(47%) sepia(8%) saturate(1814%) hue-rotate(195deg) brightness(91%) contrast(85%);" onerror="this.src='이미지/hyobin1.webp'">
                                    <span style="font-weight: bold;">효빈광역시</span>
                                </a>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th colspan="2" style="background-color: #CD2E3A; color: white; padding: 10px; border: 1px solid white; font-weight: bold;">특별자치시</th>
                    </tr>
                    <tr>
                        <td colspan="2" style="padding: 20px 12px; border: 1px solid #e5e7eb; background: white;">
                            <div style="display: flex; justify-content: center;">
                                <a href="https://namu.wiki/w/세종특별자치시" style="text-decoration: none; color: #0099D8; display: flex; flex-direction: column; align-items: center;">
                                    <img src="이미지/svg/세종특별자치시.svg" style="height: 28px; margin-bottom: 8px;" onerror="this.style.display='none'">
                                    <span style="font-weight: bold;">세종특별자치시</span>
                                </a>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th colspan="2" style="background-color: #0047A0; color: white; padding: 10px; border: 1px solid white; font-weight: bold;">도</th>
                    </tr>
                    <tr>
                        <td colspan="2" style="padding: 20px 12px; border: 1px solid #e5e7eb; background: white;">
                            <div style="display: flex; justify-content: space-around; flex-wrap: wrap; gap: 20px;">
                                <a href="https://namu.wiki/w/경기도" style="text-decoration: none; color: #003366; display: flex; flex-direction: column; align-items: center;">
                                    <img src="이미지/svg/경기도.svg" style="height: 24px; margin-bottom: 8px;" onerror="this.style.display='none'">
                                    <span style="font-weight: bold;">경기도</span>
                                </a>
                                <a href="https://namu.wiki/w/충청북도" style="text-decoration: none; color: #662288; display: flex; flex-direction: column; align-items: center;">
                                    <img src="이미지/svg/충청북도.svg" style="height: 28px; margin-bottom: 8px;" onerror="this.style.display='none'">
                                    <span style="font-weight: bold;">충청북도</span>
                                </a>
                                <a href="https://namu.wiki/w/충청남도" style="text-decoration: none; color: #444444; display: flex; flex-direction: column; align-items: center;">
                                    <img src="이미지/svg/충청남도.svg" style="height: 28px; margin-bottom: 8px;" onerror="this.style.display='none'">
                                    <span style="font-weight: bold;">충청남도</span>
                                </a>

                                <a href="https://namu.wiki/w/경상북도" style="text-decoration: none; color: #0066CC; display: flex; flex-direction: column; align-items: center;">
                                    <img src="이미지/svg/경상북도.svg" style="height: 28px; margin-bottom: 8px;" onerror="this.style.display='none'">
                                    <span style="font-weight: bold;">경상북도</span>
                                </a>
                                <a href="https://namu.wiki/w/경상남도" style="text-decoration: none; color: #FF6600; display: flex; flex-direction: column; align-items: center;">
                                    <img src="이미지/svg/경상남도.svg" style="height: 28px; margin-bottom: 8px;" onerror="this.style.display='none'">
                                    <span style="font-weight: bold;">경상남도</span>
                                </a>
                                <a href="덕빈북도.html" style="text-decoration: none; color: #4AD898; display: flex; flex-direction: column; align-items: center;">
                                    <img src="이미지/덕북로고.webp" style="height: 28px; margin-bottom: 8px;" onerror="this.style.display='none'">
                                    <span style="font-weight: bold;">덕빈북도</span>
                                </a>
                                <a href="덕빈남도.html" style="text-decoration: none; color: #335566; display: flex; flex-direction: column; align-items: center;">
                                    <img src="이미지/덕빈남도_로고.webp" style="height: 28px; margin-bottom: 8px;" onerror="this.style.display='none'">
                                    <span style="font-weight: bold;">덕빈남도</span>
                                </a>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th colspan="2" style="background-color: #0047A0; color: white; padding: 10px; border: 1px solid white; font-weight: bold;">특별자치도</th>
                    </tr>
                    <tr>
                        <td colspan="2" style="padding: 20px 12px; border: 1px solid #e5e7eb; background: white;">
                            <div style="display: flex; justify-content: space-around; flex-wrap: wrap; gap: 20px;">
                                <a href="https://namu.wiki/w/강원특별자치도" style="text-decoration: none; color: #CD2E3A; display: flex; flex-direction: column; align-items: center;">
                                    <img src="이미지/svg/강원도.svg" style="height: 26px; margin-bottom: 8px;" onerror="this.style.display='none'">
                                    <span style="font-weight: bold;">강원특별자치도</span>
                                </a>
                                <a href="https://namu.wiki/w/전북특별자치도" style="text-decoration: none; color: #0047A0; display: flex; flex-direction: column; align-items: center;">
                                    <img src="이미지/svg/전북특별자치도.svg" style="height: 26px; margin-bottom: 8px;" onerror="this.style.display='none'">
                                    <span style="font-weight: bold;">전북특별자치도</span>
                                </a>
                                <a href="https://namu.wiki/w/제주특별자치도" style="text-decoration: none; color: #333333; display: flex; flex-direction: column; align-items: center;">
                                    <img src="이미지/svg/제주특별자치도.svg" style="height: 26px; margin-bottom: 8px;" onerror="this.style.display='none'">
                                    <span style="font-weight: bold;">제주특별자치도</span>
                                </a>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th colspan="2" style="background-color: #808080; color: white; padding: 10px; border: 1px solid white; font-weight: bold;">미수복지역*</th>
                    </tr>
                    <tr>
                        <td colspan="2" style="padding: 20px 12px; border: 1px solid #e5e7eb; background: #fafafa;">
                            <div style="display: flex; justify-content: space-around; flex-wrap: wrap; gap: 20px;">
                                <a href="#" style="text-decoration: none; color: #003399; display: flex; flex-direction: column; align-items: center;">
                                    <img src="이미지/svg/황해도.svg" style="height: 32px; margin-bottom: 8px;" onerror="this.style.display='none'">
                                    <span style="font-weight: bold;">황해도</span>
                                </a>
                                <a href="#" style="text-decoration: none; color: #003399; display: flex; flex-direction: column; align-items: center;">
                                    <img src="이미지/svg/평안북도.svg" style="height: 32px; margin-bottom: 8px;" onerror="this.style.display='none'">
                                    <span style="font-weight: bold;">평안북도</span>
                                </a>
                                <a href="#" style="text-decoration: none; color: #009933; display: flex; flex-direction: column; align-items: center;">
                                    <img src="이미지/svg/평안남도.svg" style="height: 32px; margin-bottom: 8px;" onerror="this.style.display='none'">
                                    <span style="font-weight: bold;">평안남도</span>
                                </a>
                                <a href="#" style="text-decoration: none; color: #CC0000; display: flex; flex-direction: column; align-items: center;">
                                    <img src="이미지/svg/함경북도.svg" style="height: 32px; margin-bottom: 8px;" onerror="this.style.display='none'">
                                    <span style="font-weight: bold;">함경북도</span>
                                </a>
                                <a href="#" style="text-decoration: none; color: #660066; display: flex; flex-direction: column; align-items: center;">
                                    <img src="이미지/svg/함경남도.svg" style="height: 32px; margin-bottom: 8px;" onerror="this.style.display='none'">
                                    <span style="font-weight: bold;">함경남도</span>
                                </a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div style="background-color: #808080; color: white; padding: 10px; font-size: 11px; text-align: center;">
                * 대한민국이 실효 지배하지 않는 미수복지역은 자치 기능이 없는 명목상 행정구역이므로 실질적인 광역자치단체는 아니다.
            </div>
        </div>
    </div>`;

    // 2. 덕빈남도 기초자치단체
    const hyobinHTML = `
    <div style="border: 1px solid #335566; width: 100%; box-sizing: border-box; font-family: sans-serif; background: white; margin-bottom: 25px; border-radius: 4px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
        <div style="background: #335566; color: white; display: flex; align-items: center; justify-content: center; padding: 12px; border-bottom: 1px solid #335566;">
            <div style="display: flex; align-items: center; gap: 15px; border: 1px solid white; padding: 5px 20px;">
                <img src="이미지/덕빈남도_로고.webp" style="height: 30px; filter: brightness(0) invert(1);" alt="덕남 로고" onerror="this.outerHTML='<span style=\\'font-size:24px;\\'>🏙️</span>'">
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
                                <img src="이미지/매성시.webp" style="height: 30px; object-fit: contain;" alt="매성시" onerror="this.style.display='none'">
                                <span style="font-weight: 500;">매성시</span>
                            </a>
                        </td>
                        <td style="padding: 15px; border: 1px solid #e5e7eb; background: white;">
                            <a href="비천시.html" style="text-decoration: none; color: black; display: flex; flex-direction: column; align-items: center; gap: 6px;">
                                <img src="이미지/비천시.webp" style="height: 30px; object-fit: contain;" alt="비천시" onerror="this.style.display='none'">
                                <span style="font-weight: 500;">비천시</span>
                            </a>
                        </td>
                        <td style="padding: 15px; border: 1px solid #e5e7eb; background: white;">
                            <a href="방산시.html" style="text-decoration: none; color: black; display: flex; flex-direction: column; align-items: center; gap: 6px;">
                                <img src="이미지/방산시.webp" style="height: 30px; object-fit: contain;" alt="방산시" onerror="this.style.display='none'">
                                <span style="font-weight: 500;">방산시</span>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 15px; border: 1px solid #e5e7eb; background: white;">
                            <a href="마진시.html" style="text-decoration: none; color: black; display: flex; flex-direction: column; align-items: center; gap: 6px;">
                                <img src="이미지/마진시.webp" style="height: 30px; object-fit: contain;" alt="마진시" onerror="this.style.display='none'">
                                <span style="font-weight: 500;">마진시</span>
                            </a>
                        </td>
                        <td style="padding: 15px; border: 1px solid #e5e7eb; background: white;">
                            <a href="하정시.html" style="text-decoration: none; color: black; display: flex; flex-direction: column; align-items: center; gap: 6px;">
                                <img src="이미지/하정시.webp" style="height: 30px; object-fit: contain;" alt="하정시" onerror="this.style.display='none'">
                                <span style="font-weight: 500;">하정시</span>
                            </a>
                        </td>
                        <td style="padding: 15px; border: 1px solid #e5e7eb; background: white;">
                            <a href="낙주시.html" style="text-decoration: none; color: black; display: flex; flex-direction: column; align-items: center; gap: 6px;">
                                <img src="이미지/낙주시.webp" style="height: 30px; object-fit: contain;" alt="낙주시" onerror="this.style.display='none'">
                                <span style="font-weight: 500;">낙주시</span>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 15px; border: 1px solid #e5e7eb; background: white;">
                            <a href="덕주시.html" style="text-decoration: none; color: black; display: flex; flex-direction: column; align-items: center; gap: 6px;">
                                <img src="이미지/덕주시.webp" style="height: 30px; object-fit: contain;" alt="덕주시" onerror="this.style.display='none'">
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
                                <img src="이미지/곡천군.webp" style="height: 30px; object-fit: contain;" alt="곡천군" onerror="this.style.display='none'">
                                <span style="font-weight: 500;">곡천군</span>
                            </a>
                        </td>
                        <td style="padding: 15px; border: 1px solid #e5e7eb; background: white;">
                            <a href="매산군.html" style="text-decoration: none; color: black; display: flex; flex-direction: column; align-items: center; gap: 6px;">
                                <img src="이미지/매산군.webp" style="height: 30px; object-fit: contain;" alt="매산군" onerror="this.style.display='none'">
                                <span style="font-weight: 500;">매산군</span>
                            </a>
                        </td>
                        <td style="padding: 15px; border: 1px solid #e5e7eb; background: white;">
                            <a href="석창군.html" style="text-decoration: none; color: black; display: flex; flex-direction: column; align-items: center; gap: 6px;">
                                <img src="이미지/석창군.webp" style="height: 30px; object-fit: contain;" alt="석창군" onerror="this.style.display='none'">
                                <span style="font-weight: 500;">석창군</span>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 15px; border: 1px solid #e5e7eb; background: white;">
                            <a href="분주군.html" style="text-decoration: none; color: black; display: flex; flex-direction: column; align-items: center; gap: 6px;">
                                <img src="이미지/분주군.webp" style="height: 30px; object-fit: contain;" alt="분주군" onerror="this.style.display='none'">
                                <span style="font-weight: 500;">분주군</span>
                            </a>
                        </td>
                        <td style="padding: 15px; border: 1px solid #e5e7eb; background: white;">
                            <a href="고포군.html" style="text-decoration: none; color: black; display: flex; flex-direction: column; align-items: center; gap: 6px;">
                                <img src="이미지/고포군.webp" style="height: 30px; object-fit: contain;" alt="고포군" onerror="this.style.display='none'">
                                <span style="font-weight: 500;">고포군</span>
                            </a>
                        </td>
                        <td style="padding: 15px; border: 1px solid #e5e7eb; background: white;">
                            <a href="인곡군.html" style="text-decoration: none; color: black; display: flex; flex-direction: column; align-items: center; gap: 6px;">
                                <img src="이미지/인곡군.webp" style="height: 30px; object-fit: contain;" alt="인곡군" onerror="this.style.display='none'">
                                <span style="font-weight: 500;">인곡군</span>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 15px; border: 1px solid #e5e7eb; background: white;">
                            <a href="관수군.html" style="text-decoration: none; color: black; display: flex; flex-direction: column; align-items: center; gap: 6px;">
                                <img src="이미지/관수군.webp" style="height: 30px; object-fit: contain;" alt="관수군" onerror="this.style.display='none'">
                                <span style="font-weight: 500;">관수군</span>
                            </a>
                        </td>
                        <td style="padding: 15px; border: 1px solid #e5e7eb; background: white;">
                            <a href="운진군.html" style="text-decoration: none; color: black; display: flex; flex-direction: column; align-items: center; gap: 6px;">
                                <img src="이미지/운진군.webp" style="height: 30px; object-fit: contain;" alt="운진군" onerror="this.style.display='none'">
                                <span style="font-weight: 500;">운진군</span>
                            </a>
                        </td>
                        <td style="padding: 15px; border: 1px solid #e5e7eb; background: white;">
                            <a href="두원군.html" style="text-decoration: none; color: black; display: flex; flex-direction: column; align-items: center; gap: 6px;">
                                <img src="이미지/두원군.webp" style="height: 30px; object-fit: contain;" alt="두원군" onerror="this.style.display='none'">
                                <span style="font-weight: 500;">두원군</span>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 15px; border: 1px solid #e5e7eb; background: white;">
                            <a href="원안군.html" style="text-decoration: none; color: black; display: flex; flex-direction: column; align-items: center; gap: 6px;">
                                <img src="이미지/원안군.webp" style="height: 30px; object-fit: contain;" alt="원안군" onerror="this.style.display='none'">
                                <span style="font-weight: 500;">원안군</span>
                            </a>
                        </td>
                        <td style="background: #fafafa; border: 1px solid #e5e7eb;"></td>
                        <td style="background: #fafafa; border: 1px solid #e5e7eb;"></td>
                    </tr>
                </tbody>
            </table>
            <div style="background-color: #fafafa; color: #555; padding: 12px; font-size: 12px; text-align: center; line-height: 1.8; border-top: 1px solid #e5e7eb;">
                서울 · 광주 · 부산 · 대구 · 효빈 · 인천 · 대전 · 울산 · 세종<br>
                경기 · 충북 · 충남 · 경북 · 경남 · 덕남 · 덕북 · 강원 · 전북 · 제주<br>
            </div>
        </div>
    </div>`;

    const nationalTarget = document.getElementById('load-national-nav');
    const hyobinTarget = document.getElementById('load-hyobin-nav');
    
    if (nationalTarget) nationalTarget.innerHTML = nationalHTML;
    if (hyobinTarget) hyobinTarget.innerHTML = hyobinHTML;
});