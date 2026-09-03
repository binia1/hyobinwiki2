document.addEventListener("DOMContentLoaded", function() {
    
    // 국민의힘 메인 컬러 및 텍스트/링크 컬러 설정
    const pppRed = "#E61E2B";
    const linkColor = "#cc1111";
    const borderColor = "#ddd";
    const thTextColor = "#333";

    const yoonDaeHwanNavHTML = `
    <div style="border: 1px solid #ccc; border-radius: 0px; margin-bottom: 20px; box-shadow: 0 1px 2px rgba(0,0,0,0.1); background-color: #fff; overflow: hidden; font-family: sans-serif;">
        
        <!-- 상단 배너 영역 -->
        <div style="background-color: ${pppRed}; padding: 15px; display: flex; align-items: center; justify-content: center; gap: 15px; border-bottom: 1px solid #ccc;">
            
            <!-- 원본 사진을 CSS로 스텐실 처리 -->
            <div style="width: 50px; height: 50px; background-color: ${pppRed}; border: 1px solid rgba(255,255,255,0.3); display: flex; justify-content: center; align-items: center; overflow: hidden; border-radius: 2px;">
                <!-- 지정된 이미지 경로 규칙 적용 -->
                <img src="이미지/윤대환_지랄면상.webp" style="width: 100%; height: 100%; object-fit: cover; filter: grayscale(100%) contrast(500%) brightness(1.2); mix-blend-mode: multiply;" alt="윤대환">
            </div>
            
            <!-- 중앙 구분선 -->
            <div style="width: 1px; height: 40px; background-color: rgba(255,255,255,0.5);"></div>
            
            <!-- 우측 타이틀 텍스트 -->
            <div style="text-align: left; line-height: 1.3; color: #fff;">
                <div style="font-size: 1.4em; font-weight: 900; letter-spacing: -0.5px;">윤대환</div>
                <div style="font-size: 0.9em; font-weight: bold; letter-spacing: -0.5px; opacity: 0.9;">관련 문서</div>
            </div>
        </div>

        <details class="wiki-folder" open="" style="margin: 0; border: none;">
            <summary class="wiki-folder-summary" style="border: none; border-bottom: 1px solid ${borderColor}; background-color: #fff; padding: 8px; font-weight: bold; text-align: center; cursor: pointer; color: #333; list-style: none;">[ 펼치기 · 접기 ]</summary>
            
            <div class="wiki-folder-content" style="padding: 0;">
                <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.9em; margin: 0;">
                    <tbody>
                        
                        <!-- 1. 생애 및 정치 -->
                        <tr style="border-bottom: 1px solid ${borderColor};">
                            <th style="width: 18%; background-color: #fff; color: ${thTextColor}; padding: 12px 10px; font-weight: bold; text-align: center; border-right: 1px solid ${borderColor}; word-break: keep-all;">
                                생애 및 정치
                            </th>
                            <td style="padding: 12px 15px; background-color: #fff; line-height: 1.6;">
                                <a href="윤대환_생애.html" style="color: ${linkColor}; text-decoration: none;">생애 (두청운수 일가)</a> · 
                                <a href="3표의_비극.html" style="color: ${linkColor}; text-decoration: none;">3표의 비극 (2006년 지방선거)</a> · 
                                <a href="효빈의_암흑기.html" style="color: ${linkColor}; text-decoration: none;">효빈의 암흑기 (2006~2010)</a>
                            </td> 
                        </tr>

                        <!-- 2. 시정 실책 및 폭정 -->
                        <tr style="border-bottom: 1px solid ${borderColor};">
                            <th style="width: 18%; background-color: #fff; color: ${thTextColor}; padding: 12px 10px; font-weight: bold; text-align: center; border-right: 1px solid ${borderColor}; word-break: keep-all;">
                                시정 실책 및 폭정
                            </th>
                            <td style="padding: 12px 15px; background-color: #fff; line-height: 1.6;">
                                <a href="윤대환_시정_실책_및_살인미수_사건.html" style="color: ${linkColor}; text-decoration: none;">시정 실책 및 살인미수 사건</a> · 
                                <a href="두청운수_게이트.html" style="color: ${linkColor}; text-decoration: none;">두청운수 게이트 (75인승·요금조작)</a> · 
                                <a href="광역철도_중단사건.html" style="color: ${linkColor}; text-decoration: none;">광역철도 중단사건 (빈효선 사태)</a> · 
                                <a href="윤대환의_서브컬처_탄압.html" style="color: ${linkColor}; text-decoration: none;">서브컬처 탄압</a> · 
                                <a href="돈불라_강요_사건.html" style="color: ${linkColor}; text-decoration: none;">돈불라 강요 사건</a>
                            </td>
                        </tr>

                        <!-- 3. 주요 사건사고 -->
                        <tr style="border-bottom: 1px solid ${borderColor};">
                            <th style="width: 18%; background-color: #fff; color: ${thTextColor}; padding: 12px 10px; font-weight: bold; text-align: center; border-right: 1px solid ${borderColor}; word-break: keep-all;">
                                사건사고 및 범죄
                            </th>
                            <td style="padding: 12px 15px; background-color: #fff; line-height: 1.6;">
                                <a href="2007년_1월_붉은_겨울_참사.html" style="color: ${linkColor}; text-decoration: none;">2007년 1월 붉은 겨울 참사</a> · 
                                <a href="비서관_재떨이_살인미수_사건.html" style="color: ${linkColor}; text-decoration: none;">비서관 재떨이 살인미수 사건</a> · 
                                <a href="윤대환_이웃도시_거지_망언_파동.html" style="color: ${linkColor}; text-decoration: none;">이웃도시 거지 망언 파동</a> · 
                                <a href="윤대환_노조_탄압사건.html" style="color: ${linkColor}; text-decoration: none;">효빈의료원 노조 탄압사건</a> · 
                                <a href="윤대환·윤재훈_레일루미네_성우_SNS_협박_및_명예훼손_사건.html" style="color: ${linkColor}; text-decoration: none;">레일루미네 성우 SNS 협박 사건</a>
                            </td>
                        </tr>

                        <!-- 4. 관련 인물 및 집단 -->
                        <tr style="border-bottom: 1px solid ${borderColor};">
                            <th style="width: 18%; background-color: #fff; color: ${thTextColor}; padding: 12px 10px; font-weight: bold; text-align: center; border-right: 1px solid ${borderColor}; word-break: keep-all;">
                                관련 인물 및 단체
                            </th>
                            <td style="padding: 12px 15px; background-color: #fff; line-height: 1.6;">
                                <a href="윤재훈.html" style="color: ${linkColor}; text-decoration: none;">윤재훈 (장남)</a> · 
                                <a href="두청운수.html" style="color: ${linkColor}; text-decoration: none;">두청운수 (만악의 근원)</a> · 
                                <a href="박현만.html" style="color: ${linkColor}; text-decoration: none;">박현만 (숙적)</a> · 
                                <a href="오갈매.html" style="color: ${linkColor}; text-decoration: none;">오갈매 (피해자)</a>
                            </td>
                        </tr>

                        <!-- 5. 소속 정당 -->
                        <tr>
                            <th style="width: 18%; background-color: #fff; color: ${thTextColor}; padding: 12px 10px; font-weight: bold; text-align: center; border-right: 1px solid ${borderColor}; word-break: keep-all;">
                                소속 정당
                            </th>
                            <td style="padding: 12px 15px; background-color: #fff; line-height: 1.6;">
                                <a href="국민의힘.html" style="color: ${linkColor}; text-decoration: none;">국민의힘</a>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </details>
    </div>
    `;

    // 클래스명 "yoondaehwan-nav-container"를 가진 요소를 찾아 HTML을 삽입합니다.
    const container = document.querySelector(".yoondaehwan-nav-container");
    if (container) {
        container.innerHTML = yoonDaeHwanNavHTML;
    } else {
        console.warn("윤대환 둘러보기 틀을 삽입할 '.yoondaehwan-nav-container' 요소를 찾을 수 없습니다.");
    }
});