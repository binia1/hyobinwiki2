document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("deokbinnamdo-bus-company-nav-container");
    
    if (container) {
        container.innerHTML = `
        <style>
            /* 외부 스타일 충돌 방지용 독립 CSS */
            .dn-company-container { border: 1px solid #ccc; margin: 15px 0; font-size: 0.9rem; border-radius: 4px; overflow: hidden; background: #fff; font-family: 'Noto Sans KR', sans-serif; }
            .dn-company-summary { list-style: none; cursor: pointer; user-select: none; display: block; }
            .dn-company-summary::-webkit-details-marker { display: none; }
            
            /* 덕빈남도 메인 헤더 (덕빈북도 터미널 틀과 동일한 감성) */
            .dn-company-header { background-color: #335566; color: white; padding: 14px; font-size: 1.3rem; display: flex; align-items: center; justify-content: center; gap: 12px; }
            
            /* 펼치기·접기 토글 서브바 */
            .dn-company-toggle { background-color: #26404d; color: white; padding: 4px; font-size: 0.85rem; text-align: center; border-bottom: 2px solid #fff; font-weight: bold; }
            .dn-company-toggle:hover { background-color: #1f3844; }
            
            /* 테이블 스타일 */
            .dn-company-table { width: 100%; border-collapse: collapse; text-align: left; margin: 0; table-layout: fixed; }
            .dn-company-table th, .dn-company-table td { border: 1px solid #ccc; padding: 8px 12px; vertical-align: middle; }
            .dn-company-table .region-header { text-align: center; font-weight: bold; width: 15%; }
            .dn-company-table .company-list { background-color: #fff; width: 35%; color: #333; }
            .dn-company-table a { color: #0022AA; text-decoration: none; font-weight: bold; }
            .dn-company-table a:hover { text-decoration: underline; }
        </style>

        <details class="dn-company-container" open>
            <summary class="dn-company-summary">
                <div class="dn-company-header">
                    <img alt="덕빈남도 로고" onerror="this.style.display='none'" src="이미지/덕빈남도_로고.webp" style="max-height: 32px; width: auto; background: white; border-radius: 9999px; padding: 2px;"/>
                    <span style="font-weight: 900; text-shadow: 1px 1px 3px rgba(0,0,0,0.5);">덕빈남도 시내/농어촌버스 회사</span>
                </div>
                <div class="dn-company-toggle">[ 펼치기 · 접기 ]</div>
            </summary>
            <div>
                <table class="dn-company-table">
                    <tbody>
                        <tr>
                            <td class="region-header" style="background-color: #ff9ea9; color: #000;">덕주시</td>
                            <td class="company-list"><a href="덕주시_시내버스.html">덕주교통</a> · <a href="덕주시_시내버스.html">덕산여객</a> · <a href="덕주시_시내버스.html">조전운수</a></td>
                            <td class="region-header" style="background-color: #bb0033; color: #fff;">낙주시</td>
                            <td class="company-list"><a href="낙주시_시내버스.html">낙주시내버스공사</a></td>
                        </tr>
                        <tr>
                            <td class="region-header" style="background-color: #FFF442; color:#000;">방산시</td>
                            <td class="company-list"><a href="방산시_시내버스.html">방산여객</a> · <a href="방산시_시내버스.html">서중교통</a></td>
                            <td class="region-header" style="background-color: #ff99be; color: #000;">마진시</td>
                            <td class="company-list"><a href="마진시_시내버스.html">마진여객</a> · <a href="마진시_시내버스.html">천대교통</a></td>
                        </tr>
                        <tr>
                            <td class="region-header" style="background-color: #74F466; color:#000;">비천시</td>
                            <td class="company-list"><a href="비천시_시내버스.html">비천여객</a> · <a href="비천시_시내버스.html">비천항만교통</a></td>
                            <td class="region-header" style="background-color: #ff3b72; color: #fff;">하정시</td>
                            <td class="company-list"><a href="하정시_시내버스.html">하정여객</a></td>
                        </tr>
                        <tr>
                            <td class="region-header" style="background-color: #FF6E90; color: #fff;">매성시</td>
                            <td class="company-list"><a href="매성시_시내버스.html">매성여객</a></td>
                            <td class="region-header" style="background-color: #bbff64; color:#000;">운진군</td>
                            <td class="company-list"><a href="운진군_농어촌버스.html">운진여객</a></td>
                        </tr>
                        <tr>
                            <td class="region-header" style="background-color: #A0FFF9; color:#000;">매산군</td>
                            <td class="company-list"><a href="매산군_농어촌버스.html">매산여객</a></td>
                            <td class="region-header" style="background-color: #0000A0; color: #fff;">석창군</td>
                            <td class="company-list"><a href="석창군_농어촌버스.html">석창여객</a></td>
                        </tr>
                        <tr>
                            <td class="region-header" style="background-color: #FF3535; color: #fff;">분주군</td>
                            <td class="company-list"><a href="분주군_농어촌버스.html">분주여객</a></td>
                            <td class="region-header" style="background-color: #FF51C4; color: #fff;">곡천군</td>
                            <td class="company-list"><a href="곡천군_농어촌버스.html">곡천여객</a></td>
                        </tr>
                        <tr>
                            <td class="region-header" style="background-color: #4cd2e2; color:#000;">인곡군</td>
                            <td class="company-list"><a href="인곡군_농어촌버스.html">인곡여객</a></td>
                            <td class="region-header" style="background-color: #00aabb; color: #fff;">원안군</td>
                            <td class="company-list"><a href="원안군_농어촌버스.html">원안교통</a></td>
                        </tr>
                        <tr>
                            <td class="region-header" style="background-color: #e49dfd; color:#000;">관수군</td>
                            <td class="company-list"><a href="관수군_농어촌버스.html">관수여객</a> · <a href="관수군_농어촌버스.html">북원교통</a></td>
                            <td class="region-header" style="background-color: #e3ba3a; color:#000;">두원군</td>
                            <td class="company-list"><a href="두원군_농어촌버스.html">두원여객</a></td>
                        </tr>
                        <tr>
                            <td class="region-header" style="background-color: #B2FFDD; color:#000;">고포군</td>
                            <td class="company-list" colspan="3"><a href="고포군_농어촌버스.html">고포여객</a> · <a href="고포군_농어촌버스.html">고포군 공영버스</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </details>
        `;
    }
});