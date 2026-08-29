document.addEventListener("DOMContentLoaded", function() {
    const minseon4NavHTML = `
    <div style="border: 1px solid #ccc; border-radius: 2px; margin-bottom: 20px; box-shadow: 0 1px 2px rgba(0,0,0,0.1); background-color: #fff; overflow: hidden;">
        
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
                <div style="position: absolute; right: -25px; bottom: -10px; width: 80px; height: 60%; background-color: #004EA2; transform: skewX(-30deg);"></div>
            </div>

            <!-- 중앙 타이틀 영역 -->
            <div style="position: relative; z-index: 10; display: flex; align-items: center; background: white; padding: 0 20px; box-shadow: 0 0 15px 15px white;">
                <img alt="대한민국 국장" onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Emblem_of_South_Korea.svg/100px-Emblem_of_South_Korea.svg.webp'" src="이미지/대한민국_국장.svg" style="width: 45px; vertical-align: middle; margin-right: 15px;"/>
                <div style="display: inline-block; vertical-align: middle; text-align: left; line-height: 1.2;">
                    <div style="font-size: 0.85em; font-weight: bold; color: #333;">대한민국 민선 4기</div>
                    <div style="font-size: 1.3em; font-weight: 900; letter-spacing: -1px; color: #000;">광역자치단체장</div>
                </div>
            </div>
        </div>

        <details class="wiki-folder" open="" style="margin: 0; border: none;">
            <summary class="wiki-folder-summary" style="border: none; border-bottom: 1px solid #ccc; background-color: #f8f9fa; padding: 8px; font-weight: bold; text-align: center; cursor: pointer; color: #333; list-style: none;">[ 펼치기 · 접기 ]</summary>
            <div class="wiki-folder-content" style="padding: 0;">
                <table style="width: 100%; border-collapse: collapse; text-align: center; font-size: 0.9em; table-layout: fixed; margin: 0;">
                    <tbody>
                        
                        <!-- 1열 (서울, 부산, 대구, 인천 - 모두 파란색) -->
                        <tr style="color: white; font-weight: bold;">
                            <td style="background-color: #0088CC; padding: 6px; border: 1px solid #ddd;">서울</td>
                            <td style="background-color: #0088CC; padding: 6px; border: 1px solid #ddd;">부산</td>
                            <td style="background-color: #0088CC; padding: 6px; border: 1px solid #ddd;">대구</td>
                            <td style="background-color: #0088CC; padding: 6px; border: 1px solid #ddd;">인천</td>
                        </tr>
                        <tr style="background-color: #fff;">
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="오세훈.html" style="color: #0088CC; text-decoration: none;">오세훈</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="허남식.html" style="color: #0088CC; text-decoration: none;">허남식</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="김범일.html" style="color: #0088CC; text-decoration: none;">김범일</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="안상수.html" style="color: #0088CC; text-decoration: none;">안상수</a></td>
                        </tr>

                        <!-- 2열 (광주, 대전, 울산, 경기) -->
                        <tr style="color: white; font-weight: bold;">
                            <td style="background-color: #009933; padding: 6px; border: 1px solid #ddd;">광주</td>
                            <td style="background-color: #0088CC; padding: 6px; border: 1px solid #ddd;">대전</td>
                            <td style="background-color: #0088CC; padding: 6px; border: 1px solid #ddd;">울산</td>
                            <td style="background-color: #0088CC; padding: 6px; border: 1px solid #ddd;">경기</td>
                        </tr>
                        <tr style="background-color: #fff;">
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="박광태.html" style="color: #009933; text-decoration: none;">박광태</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="박성효.html" style="color: #0088CC; text-decoration: none;">박성효</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="박맹우.html" style="color: #0088CC; text-decoration: none;">박맹우</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="김문수.html" style="color: #0088CC; text-decoration: none;">김문수</a></td>
                        </tr>

                        <!-- 3열 (강원, 충북, 충남, 전북) -->
                        <tr style="color: white; font-weight: bold;">
                            <td style="background-color: #0088CC; padding: 6px; border: 1px solid #ddd;">강원</td>
                            <td style="background-color: #0088CC; padding: 6px; border: 1px solid #ddd;">충북</td>
                            <td style="background-color: #000000; padding: 6px; border: 1px solid #ddd;">충남</td>
                            <td style="background-color: #009933; padding: 6px; border: 1px solid #ddd;">전북</td>
                        </tr>
                        <tr style="background-color: #fff;">
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="김진선.html" style="color: #0088CC; text-decoration: none;">김진선</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="정우택.html" style="color: #0088CC; text-decoration: none;">정우택</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd; line-height: 1.3;">
                                <a href="이인화.html" style="color: #000000; text-decoration: none; font-weight: bold;">이인화</a><br>
                                <span style="display: inline-block; background-color: black; color: white; font-size: 0.75em; padding: 2px 5px; margin-top: 3px; font-weight: bold; border-radius: 1px; letter-spacing: -0.5px;">권한대행</span>
                            </td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="김완주.html" style="color: #009933; text-decoration: none;">김완주</a></td>
                        </tr>

                        <!-- 4열 (전남, 경북, 경남, 제주) -->
                        <tr style="color: white; font-weight: bold;">
                            <td style="background-color: #009933; padding: 6px; border: 1px solid #ddd;">전남</td>
                            <td style="background-color: #0088CC; padding: 6px; border: 1px solid #ddd;">경북</td>
                            <td style="background-color: #0088CC; padding: 6px; border: 1px solid #ddd;">경남</td>
                            <td style="background-color: #777777; padding: 6px; border: 1px solid #ddd;">제주</td>
                        </tr>
                        <tr style="background-color: #fff;">
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="박준영.html" style="color: #009933; text-decoration: none;">박준영</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="김관용.html" style="color: #0088CC; text-decoration: none;">김관용</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="김태호.html" style="color: #0088CC; text-decoration: none;">김태호</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="김태환.html" style="color: #777777; text-decoration: none;">김태환</a></td>
                        </tr>

                        <!-- 5열 (가상지역: 효빈, 덕북, 덕남) -->
                        <tr style="color: white; font-weight: bold;">
                            <td style="background-color: #009933; padding: 6px; border: 1px solid #ddd;">효빈</td>
                            <td style="background-color: #009933; padding: 6px; border: 1px solid #ddd;">덕북</td>
                            <td style="background-color: #009933; padding: 6px; border: 1px solid #ddd;">덕남</td>
                            <td style="background-color: #f8f9fa; border: 1px solid #ddd;"></td>
                        </tr>
                        <tr style="background-color: #fff;">
                            <td style="padding: 10px 5px; border: 1px solid #ddd; ;"><a href="박현만.html" style="color: #009933; text-decoration: none; font-weight: bold;">박현만</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd; ;"><a href="한광호.html" style="color: #009933; text-decoration: none; font-weight: bold;">한광호</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd; ;"><a href="강응현.html" style="color: #009933; text-decoration: none; font-weight: bold;">강응현</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd; background-color: #f8f9fa;"></td>
                        </tr>

                        <!-- 유고사항 표기 -->
                        <tr style="background-color: #fff; border-top: 1px solid #ddd;">
                            <td colspan="4" style="padding: 15px 10px; font-size: 0.85em; color: #333; text-align: center; line-height: 1.6;">
                                * 효빈광역시장 <a href="윤대환.html" style="color: #0088CC; text-decoration: none; font-weight: bold;">윤대환</a> 당선무효 (2007.11.30.)<br>
                                * 충청남도지사 <a href="이완구.html" style="color: #0088CC; text-decoration: none; font-weight: bold;">이완구</a> 사퇴 (2009.12.3.)
                            </td>
                        </tr>
                        
                        <!-- 선거 정보 및 하단 네비게이션 -->
                        <tr style="background-color: #fff; border-top: 1px solid #ddd;">
                            <td colspan="4" style="padding: 15px 10px 10px 10px; font-size: 0.85em; color: #555; text-align: center; line-height: 1.6;">
                                <a href="제4회_전국동시지방선거.html" style="color: #0275d8; text-decoration: none;">제4회 전국동시지방선거</a><br/>
                                임기: 2006년 7월 1일 ~ 2010년 6월 30일
                            </td>
                        </tr>
                        <tr style="background-color: #f8f9fa; border-top: 1px solid #ddd;">
                            <td colspan="4" style="padding: 10px; font-size: 0.8em; color: #555; text-align: center; word-break: keep-all;">
                                <a href="1960-1961.html" style="color: #333; text-decoration: none;">1960-1961</a> · 
                                <a href="민선 1기.html" style="color: #333; text-decoration: none;">민선 1기</a> · 
                                <a href="민선 2기.html" style="color: #333; text-decoration: none;">민선 2기</a> · 
                                <a href="민선 3기.html" style="color: #333; text-decoration: none;">민선 3기</a> · 
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

    const container = document.querySelector(".minseon4-nav-container");
    if (container) {
        container.innerHTML = minseon4NavHTML;
    }
});ㅋ