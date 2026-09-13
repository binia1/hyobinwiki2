document.addEventListener("DOMContentLoaded", function() {
    const minseon5EduNavHTML = `
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
                    <div style="font-size: 0.85em; font-weight: bold; color: #333;">대한민국 민선 5기</div>
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
                            <td style="background-color: #E61E8C; padding: 6px; border: 1px solid #ddd;">서울</td>
                            <td style="background-color: #E61E8C; padding: 6px; border: 1px solid #ddd;">부산</td>
                            <td style="background-color: #E61E8C; padding: 6px; border: 1px solid #ddd;">대구</td>
                            <td style="background-color: #E61E8C; padding: 6px; border: 1px solid #ddd;">인천</td>
                        </tr>
                        <tr style="background-color: #fff;">
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="문용린.html" style="color: #E61E8C; text-decoration: none;">문용린</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="임혜경.html" style="color: #E61E8C; text-decoration: none;">임혜경</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="우동기.html" style="color: #E61E8C; text-decoration: none;">우동기</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="나근형.html" style="color: #E61E8C; text-decoration: none;">나근형</a></td>
                        </tr>

                        <!-- 2열 -->
                        <tr style="color: white; font-weight: bold;">
                            <td style="background-color: #00A3A6; padding: 6px; border: 1px solid #ddd;">광주</td>
                            <td style="background-color: #E61E8C; padding: 6px; border: 1px solid #ddd;">대전</td>
                            <td style="background-color: #E61E8C; padding: 6px; border: 1px solid #ddd;">울산</td>
                            <td style="background-color: #000000; padding: 6px; border: 1px solid #ddd;">세종</td>
                        </tr>
                        <tr style="background-color: #fff;">
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="장휘국.html" style="color: #00A3A6; text-decoration: none;">장휘국</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="김신호.html" style="color: #E61E8C; text-decoration: none;">김신호</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="김복만.html" style="color: #E61E8C; text-decoration: none;">김복만</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd; line-height: 1.3;">
                                <a href="전우홍.html" style="color: #000000; text-decoration: none; font-weight: bold;">전우홍</a><br>
                                <span style="display: inline-block; background-color: black; color: white; font-size: 0.75em; padding: 2px 5px; margin-top: 3px; font-weight: bold; border-radius: 1px; letter-spacing: -0.5px;">권한대행</span>
                            </td>
                        </tr>

                        <!-- 3열 -->
                        <tr style="color: white; font-weight: bold;">
                            <td style="background-color: #000000; padding: 6px; border: 1px solid #ddd;">경기</td>
                            <td style="background-color: #00A3A6; padding: 6px; border: 1px solid #ddd;">강원</td>
                            <td style="background-color: #000000; padding: 6px; border: 1px solid #ddd;">충북</td>
                            <td style="background-color: #E61E8C; padding: 6px; border: 1px solid #ddd;">충남</td>
                        </tr>
                        <tr style="background-color: #fff;">
                            <td style="padding: 10px 5px; border: 1px solid #ddd; line-height: 1.3;">
                                <a href="고경모.html" style="color: #000000; text-decoration: none; font-weight: bold;">고경모</a><br>
                                <span style="display: inline-block; background-color: black; color: white; font-size: 0.75em; padding: 2px 5px; margin-top: 3px; font-weight: bold; border-radius: 1px; letter-spacing: -0.5px;">권한대행</span>
                            </td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="민병희.html" style="color: #00A3A6; text-decoration: none;">민병희</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd; line-height: 1.3;">
                                <a href="김대성.html" style="color: #000000; text-decoration: none; font-weight: bold;">김대성</a><br>
                                <span style="display: inline-block; background-color: black; color: white; font-size: 0.75em; padding: 2px 5px; margin-top: 3px; font-weight: bold; border-radius: 1px; letter-spacing: -0.5px;">권한대행</span>
                            </td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="김종성.html" style="color: #E61E8C; text-decoration: none;">김종성</a></td>
                        </tr>

                        <!-- 4열 -->
                        <tr style="color: white; font-weight: bold;">
                            <td style="background-color: #00A3A6; padding: 6px; border: 1px solid #ddd;">전북</td>
                            <td style="background-color: #00A3A6; padding: 6px; border: 1px solid #ddd;">전남</td>
                            <td style="background-color: #E61E8C; padding: 6px; border: 1px solid #ddd;">경북</td>
                            <td style="background-color: #E61E8C; padding: 6px; border: 1px solid #ddd;">경남</td>
                        </tr>
                        <tr style="background-color: #fff;">
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="김승환.html" style="color: #00A3A6; text-decoration: none;">김승환</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="장만채.html" style="color: #00A3A6; text-decoration: none;">장만채</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="이영우.html" style="color: #E61E8C; text-decoration: none;">이영우</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="고영진.html" style="color: #E61E8C; text-decoration: none;">고영진</a></td>
                        </tr>

                        <!-- 5열 (제주 및 창작 지역) -->
                        <tr style="color: white; font-weight: bold;">
                            <td style="background-color: #E61E8C; padding: 6px; border: 1px solid #ddd;">제주</td>
                            <td style="background-color: #00A3A6; padding: 6px; border: 1px solid #ddd;">효빈</td>
                            <td style="background-color: #00A3A6; padding: 6px; border: 1px solid #ddd;">덕북</td>
                            <td style="background-color: #E61E8C; padding: 6px; border: 1px solid #ddd;">덕남</td>
                        </tr>
                        <tr style="background-color: #fff;">
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="양성언.html" style="color: #E61E8C; text-decoration: none;">양성언</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="민송현.html" style="color: #00A3A6; text-decoration: none; font-weight: bold;">민송현</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="안명진.html" style="color: #00A3A6; text-decoration: none; font-weight: bold;">안명진</a></td>
                            <td style="padding: 10px 5px; border: 1px solid #ddd;"><a href="장태산.html" style="color: #E61E8C; text-decoration: none; font-weight: bold;">장태산</a></td>
                        </tr>
                        
                        <!-- 유고사항 표기 -->
                        <tr style="background-color: #fff; border-top: 1px solid #ddd;">
                            <td colspan="4" style="padding: 15px; font-size: 0.85em; color: #333; text-align: center; line-height: 1.8;">
                                * 서울특별시교육감 <a href="곽노현.html" style="color: #00A3A6; text-decoration: none;">곽노현</a> 당선무효 (2012.9.27.)<br>
                                * 세종특별자치시교육감 <a href="신정균.html" style="color: #E61E8C; text-decoration: none;">신정균</a> 사망 (2013.8.27.)<br>
                                * 경기도교육감 <a href="김상곤.html" style="color: #00A3A6; text-decoration: none;">김상곤</a> 사퇴 (2014.3.1.)<br>
                                * 충청북도교육감 <a href="이기용.html" style="color: #E61E8C; text-decoration: none;">이기용</a> 사퇴 (2014.3.5.)
                            </td>
                        </tr>

                        <!-- 선거 정보 및 하단 네비게이션 -->
                        <tr style="background-color: #f8f9fa; border-top: 1px solid #ddd;">
                            <td colspan="4" style="padding: 15px 10px 10px 10px; font-size: 0.85em; color: #555; text-align: center; line-height: 1.6;">
                                <a href="제5회_전국동시지방선거.html" style="color: #0275d8; text-decoration: none;">제5회 전국동시지방선거</a><br/>
                                임기: 2010년 7월 1일 ~ 2014년 6월 30일
                            </td>
                        </tr>
                        <tr style="background-color: #f8f9fa; border-top: 1px solid #ddd;">
                            <td colspan="4" style="padding: 10px; font-size: 0.8em; color: #555; text-align: center; word-break: keep-all;">
                                <a href="민선_4기.html" style="color: #333; text-decoration: none;">민선 4기</a> · 
                                <a href="민선_6기.html" style="color: #333; text-decoration: none;">민선 6기</a> · 
                                <a href="민선_7기.html" style="color: #333; text-decoration: none;">민선 7기</a> · 
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

    const container = document.querySelector(".minseon5-edu-nav-container");
    if (container) {
        container.innerHTML = minseon5EduNavHTML;
    }
});