document.addEventListener("DOMContentLoaded", function() {
    const minseon7EduNavHTML = `
    <div style="border: 1px solid #ccc; border-radius: 2px; margin-bottom: 20px; box-shadow: 0 1px 2px rgba(0,0,0,0.1); background-color: #fff; overflow: hidden;">
        <!-- 상단 배너 영역 -->
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
                <div style="position: absolute; right: -25px; bottom: -10px; width: 80px; height: 60%; background-color: #004EA2; transform: skewX(-30deg);"></div>
            </div>

            <!-- 중앙 타이틀 영역 -->
            <div style="position: relative; z-index: 10; display: flex; align-items: center; background: white; padding: 0 20px; box-shadow: 0 0 15px 15px white;">
                <img alt="대한민국 국장" src="이미지/대한민국_국장.svg" style="width: 45px; vertical-align: middle; margin-right: 15px;"/>
                <div style="display: inline-block; vertical-align: middle; text-align: left; line-height: 1.2;">
                    <div style="font-size: 0.85em; font-weight: bold; color: #333;">대한민국 민선 7기</div>
                    <div style="font-size: 1.3em; font-weight: 900; letter-spacing: -1px; color: #000;">교육감</div>
                </div>
            </div>
        </div>

        <details class="wiki-folder" open="" style="margin: 0; border: none;">
            <summary class="wiki-folder-summary" style="border: none; border-bottom: 1px solid #ccc; background-color: #f8f9fa; padding: 8px; font-weight: bold; text-align: center; cursor: pointer; color: #333; list-style: none;">[ 펼치기 · 접기 ]</summary>
            <div class="wiki-folder-content" style="padding: 0;">
                <table style="width: 100%; border-collapse: collapse; text-align: center; font-size: 0.9em; table-layout: fixed; margin: 0;">
                    <tbody>
                        
                        <!-- 1열 -->
                        <tr style="color: white; font-weight: bold;">
                            <td style="background-color: #00A3A6; padding: 6px; border: 1px solid #ddd;">서울</td>
                            <td style="background-color: #00A3A6; padding: 6px; border: 1px solid #ddd;">부산</td>
                            <td style="background-color: #E61E8C; padding: 6px; border: 1px solid #ddd;">대구</td>
                            <td style="background-color: #00A3A6; padding: 6px; border: 1px solid #ddd;">인천</td>
                        </tr>
                        <tr style="background-color: #fff;">
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="조희연.html" style="color: #00A3A6; text-decoration: none;">조희연</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="김석준.html" style="color: #00A3A6; text-decoration: none;">김석준</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="강은희.html" style="color: #E61E8C; text-decoration: none;">강은희</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="도성훈.html" style="color: #00A3A6; text-decoration: none;">도성훈</a></td>
                        </tr>

                        <!-- 2열 -->
                        <tr style="color: white; font-weight: bold;">
                            <td style="background-color: #00A3A6; padding: 6px; border: 1px solid #ddd;">광주</td>
                            <td style="background-color: #777777; padding: 6px; border: 1px solid #ddd;">대전</td>
                            <td style="background-color: #00A3A6; padding: 6px; border: 1px solid #ddd;">울산</td>
                            <td style="background-color: #00A3A6; padding: 6px; border: 1px solid #ddd;">세종</td>
                        </tr>
                        <tr style="background-color: #fff;">
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="장휘국.html" style="color: #00A3A6; text-decoration: none;">장휘국</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="설동호.html" style="color: #777777; text-decoration: none;">설동호</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="노옥희.html" style="color: #00A3A6; text-decoration: none;">노옥희</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="최교진.html" style="color: #00A3A6; text-decoration: none;">최교진</a></td>
                        </tr>

                        <!-- 3열 -->
                        <tr style="color: white; font-weight: bold;">
                            <td style="background-color: #00A3A6; padding: 6px; border: 1px solid #ddd;">경기</td>
                            <td style="background-color: #00A3A6; padding: 6px; border: 1px solid #ddd;">강원</td>
                            <td style="background-color: #00A3A6; padding: 6px; border: 1px solid #ddd;">충북</td>
                            <td style="background-color: #00A3A6; padding: 6px; border: 1px solid #ddd;">충남</td>
                        </tr>
                        <tr style="background-color: #fff;">
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="이재정.html" style="color: #00A3A6; text-decoration: none;">이재정</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="민병희.html" style="color: #00A3A6; text-decoration: none;">민병희</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="김병우.html" style="color: #00A3A6; text-decoration: none;">김병우</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="김지철.html" style="color: #00A3A6; text-decoration: none;">김지철</a></td>
                        </tr>

                        <!-- 4열 -->
                        <tr style="color: white; font-weight: bold;">
                            <td style="background-color: #00A3A6; padding: 6px; border: 1px solid #ddd;">전북</td>
                            <td style="background-color: #00A3A6; padding: 6px; border: 1px solid #ddd;">전남</td>
                            <td style="background-color: #E61E8C; padding: 6px; border: 1px solid #ddd;">경북</td>
                            <td style="background-color: #00A3A6; padding: 6px; border: 1px solid #ddd;">경남</td>
                        </tr>
                        <tr style="background-color: #fff;">
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="김승환.html" style="color: #00A3A6; text-decoration: none;">김승환</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="장석웅.html" style="color: #00A3A6; text-decoration: none;">장석웅</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="임종식.html" style="color: #E61E8C; text-decoration: none;">임종식</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="박종훈.html" style="color: #00A3A6; text-decoration: none;">박종훈</a></td>
                        </tr>

                        <!-- 5열 (제주 및 창작 지역) -->
                        <tr style="color: white; font-weight: bold;">
                            <td style="background-color: #00A3A6; padding: 6px; border: 1px solid #ddd;">제주</td>
                            <td style="background-color: #00A3A6; padding: 6px; border: 1px solid #ddd;">효빈</td>
                            <td style="background-color: #00A3A6; padding: 6px; border: 1px solid #ddd;">덕북</td>
                            <td style="background-color: #00A3A6; padding: 6px; border: 1px solid #ddd;">덕남</td>
                        </tr>
                        <tr style="background-color: #fff;">
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="이석문.html" style="color: #00A3A6; text-decoration: none;">이석문</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="민송현.html" style="color: #00A3A6; text-decoration: none; font-weight: bold;">민송현</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="권상민.html" style="color: #00A3A6; text-decoration: none; font-weight: bold;">권상민</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="우미현.html" style="color: #00A3A6; text-decoration: none; font-weight: bold;">우미현</a></td>
                        </tr>
                        
                        <!-- 선거 정보 및 하단 네비게이션 -->
                        <tr style="background-color: #fff; border-top: 1px solid #ddd;">
                            <td colspan="4" style="padding: 15px 10px 10px 10px; font-size: 0.85em; color: #555; text-align: center; line-height: 1.6;">
                                <a href="제7회_전국동시지방선거.html" style="color: #0275d8; text-decoration: none;">제7회 전국동시지방선거</a><br/>
                                임기: 2018년 7월 1일 ~ 2022년 6월 30일
                            </td>
                        </tr>
                        <tr style="background-color: #f8f9fa; border-top: 1px solid #ddd;">
                            <td colspan="4" style="padding: 10px; font-size: 0.8em; color: #555; text-align: center; word-break: keep-all;">
                                <a href="민선_4기.html" style="color: #333; text-decoration: none;">민선 4기</a> · 
                                <a href="민선_5기.html" style="color: #333; text-decoration: none;">민선 5기</a> · 
                                <a href="민선_6기.html" style="color: #333; text-decoration: none;">민선 6기</a> · 
                                <a href="민선_8기.html" style="color: #333; text-decoration: none;">민선 8기</a> · 
                                <a href="민선_9기.html" style="color: #333; text-decoration: none;">민선 9기</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </details>
    </div>
    `;

    const container = document.querySelector(".minseon7-edu-nav-container");
    if (container) {
        container.innerHTML = minseon7EduNavHTML;
    }
});