document.addEventListener("DOMContentLoaded", function() {
    
    const minseon1960NavHTML = `
    <div style="border: 1px solid #ccc; border-radius: 2px; margin-bottom: 20px; box-shadow: 0 1px 2px rgba(0,0,0,0.1); background-color: #fff; overflow: hidden; max-width: 900px; margin: 0 auto; font-family: 'Malgun Gothic', 'Apple SD Gothic Neo', sans-serif;">
        
        <!-- 상단 배너 영역 (사선 패턴 디자인) -->
        <div style="position: relative; padding: 18px 15px; text-align: center; border-bottom: 1px solid #ccc; background-color: #fff; overflow: hidden; display: flex; align-items: center; justify-content: center; min-height: 50px;">
            
            <!-- 좌측 검은색 사선 패턴 -->
            <div style="position: absolute; left: -10px; top: 0; bottom: 0; width: 120px; display: flex; align-items: center;">
                <div style="width: 22px; height: 150%; background-color: black; transform: skewX(-30deg); margin-left: 10px;"></div>
                <div style="width: 22px; height: 150%; background-color: black; transform: skewX(-30deg); margin-left: 8px;"></div>
                <div style="width: 35px; height: 150%; background-color: black; transform: skewX(-30deg); margin-left: 8px;"></div>
            </div>

            <!-- 우측 빨간색/파란색 패턴 -->
            <div style="position: absolute; right: -10px; top: 0; bottom: 0; width: 150px;">
                <div style="position: absolute; right: 20px; top: 0; width: 65px; height: 150%; background-color: #E61E2B; transform: skewX(-30deg) translateY(-10%);"></div>
                <div style="position: absolute; right: -25px; bottom: -10px; width: 80px; height: 60%; background-color: #000080; transform: skewX(-30deg);"></div>
            </div>

            <!-- 중앙 타이틀 영역 -->
            <div style="position: relative; z-index: 10; display: flex; align-items: center; background: white; padding: 0 20px; box-shadow: 0 0 15px 15px white;">
                <img alt="대한민국 국장" onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Emblem_of_South_Korea.svg/100px-Emblem_of_South_Korea.svg.webp'" src="이미지/대한민국_국장.svg" style="width: 45px; vertical-align: middle; margin-right: 15px;"/>
                <div style="display: inline-block; vertical-align: middle; text-align: left; line-height: 1.2;">
                    <div style="font-size: 0.85em; font-weight: bold; color: #333;">대한민국 1960-1961</div>
                    <div style="font-size: 1.3em; font-weight: 900; letter-spacing: -1px; color: #000;">광역자치단체장</div>
                </div>
            </div>
        </div>

        <details class="wiki-folder" open="" style="margin: 0; border: none;">
            <summary class="wiki-folder-summary" style="border: none; border-bottom: 1px solid #ccc; background-color: #f8f9fa; padding: 8px; font-weight: bold; text-align: center; cursor: pointer; color: #333; list-style: none;">[ 펼치기 · 접기 ]</summary>
            
            <div class="wiki-folder-content" style="padding: 0;">
                <table style="width: 100%; border-collapse: collapse; text-align: center; font-size: 0.9em; table-layout: fixed; margin: 0;">
                    <tbody>
                        
                        <!-- 1열 (서울:남색, 경기:남색, 강원:남색, 충북:회색) -->
                        <tr style="color: white; font-weight: bold;">
                            <td style="background-color: #000080; padding: 6px; border: 1px solid #ddd;">서울</td>
                            <td style="background-color: #000080; padding: 6px; border: 1px solid #ddd;">경기</td>
                            <td style="background-color: #000080; padding: 6px; border: 1px solid #ddd;">강원</td>
                            <td style="background-color: #888888; padding: 6px; border: 1px solid #ddd;">충북</td>
                        </tr>
                        <tr style="background-color: #fff;">
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="김상돈.html" style="color: #000080; text-decoration: none;">김상돈</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="신광균.html" style="color: #000080; text-decoration: none;">신광균</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="박영록.html" style="color: #000080; text-decoration: none;">박영록</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="조대연.html" style="color: #888888; text-decoration: none;">조대연</a></td>
                        </tr>

                        <!-- 2열 (충남:초록, 전북:남색, 전남:초록, 경북:남색) -->
                        <tr style="color: white; font-weight: bold;">
                            <td style="background-color: #008000; padding: 6px; border: 1px solid #ddd;">충남</td>
                            <td style="background-color: #000080; padding: 6px; border: 1px solid #ddd;">전북</td>
                            <td style="background-color: #008000; padding: 6px; border: 1px solid #ddd;">전남</td>
                            <td style="background-color: #000080; padding: 6px; border: 1px solid #ddd;">경북</td>
                        </tr>
                        <tr style="background-color: #fff;">
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="이기세.html" style="color: #008000; text-decoration: none;">이기세</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="김상술.html" style="color: #000080; text-decoration: none;">김상술</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="민영남.html" style="color: #008000; text-decoration: none;">민영남</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="이호근.html" style="color: #000080; text-decoration: none;">이호근</a></td>
                        </tr>

                        <!-- 3열 (경남:초록, 제주:회색, 덕북:남색, 덕남:회색) -->
                        <tr style="color: white; font-weight: bold;">
                            <td style="background-color: #008000; padding: 6px; border: 1px solid #ddd;">경남</td>
                            <td style="background-color: #888888; padding: 6px; border: 1px solid #ddd;">제주</td>
                            <td style="background-color: #000080; padding: 6px; border: 1px solid #ddd;">덕북</td>
                            <td style="background-color: #888888; padding: 6px; border: 1px solid #ddd;">덕남</td>
                        </tr>
                        <tr style="background-color: #fff;">
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="이기주.html" style="color: #008000; text-decoration: none;">이기주</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="강성익.html" style="color: #888888; text-decoration: none;">강성익</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd; "><a href="조용철.html" style="color: #000080; text-decoration: none; font-weight: bold;">조용철</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd; "><a href="강석훈.html" style="color: #888888; text-decoration: none; font-weight: bold;">강석훈</a></td>
                        </tr>

                        <!-- 선거 정보 및 하단 네비게이션 -->
                        <tr style="background-color: #fff; border-top: 1px solid #ddd;">
                            <td colspan="4" style="padding: 15px 10px 10px 10px; font-size: 0.85em; color: #555; text-align: center; line-height: 1.6;">
                                <a href="1960년_지방선거.html" style="color: #0275d8; text-decoration: none;">1960년 지방선거</a><br/>
                                임기: 1960년 12월 29일 ~ 1961년 5월 24일
                            </td>
                        </tr>
                        <tr style="background-color: #f8f9fa; border-top: 1px solid #ddd;">
                            <td colspan="4" style="padding: 10px; font-size: 0.8em; color: #555; text-align: center; word-break: keep-all;">
                                <span style="font-weight:bold; color: #000;">1960-1961</span> · 
                                <a href="민선 1기.html" style="color: #333; text-decoration: none;">민선 1기</a> · 
                                <a href="민선 2기.html" style="color: #333; text-decoration: none;">민선 2기</a> · 
                                <a href="민선 3기.html" style="color: #333; text-decoration: none;">민선 3기</a> · 
                                <a href="민선 4기.html" style="color: #333; text-decoration: none;">민선 4기</a> · 
                                <a href="민선 5기.html" style="color: #333; text-decoration: none;">민선 5기</a> · 
                                <a href="민선 6기.html" style="color: #333; text-decoration: none;">민선 6기</a> · 
                                <a href="민선 7기.html" style="color: #333; text-decoration: none;">민선 7기</a> · 
                                <a href="민선 8기.html" style="color: #333; text-decoration: none;">민선 8기</a> · 
                                <a href="민선 9기.html" style="color: #333; text-decoration: none;">민선 9기</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </details>
    </div>
    `;

    const container = document.querySelector(".minseon1960-nav-container");
    if (container) {
        container.innerHTML = minseon1960NavHTML;
    }
});