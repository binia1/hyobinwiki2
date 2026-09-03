document.addEventListener("DOMContentLoaded", function() {
    
    // 더불어민주당 메인 컬러 및 텍스트/링크 컬러 설정
    const minjooBlue = "#004EA2";
    const linkColor = "#0066cc";
    const borderColor = "#ddd";
    const thTextColor = "#333";

    const parkHyunManNavHTML = `
    <div style="border: 1px solid #ccc; border-radius: 0px; margin-bottom: 20px; box-shadow: 0 1px 2px rgba(0,0,0,0.1); background-color: #fff; overflow: hidden; font-family: sans-serif;">
        
        <!-- 상단 배너 영역 -->
        <div style="background-color: ${minjooBlue}; padding: 15px; display: flex; align-items: center; justify-content: center; gap: 15px; border-bottom: 1px solid #ccc;">
            
            <!-- 원본 사진을 CSS로 스텐실 처리 -->
            <div style="width: 50px; height: 50px; background-color: #004EA2; border: 1px solid rgba(255,255,255,0.3); display: flex; justify-content: center; align-items: center; overflow: hidden; border-radius: 2px;">
                <!-- 지정된 이미지 경로 규칙 적용 -->
                <img src="이미지/박현만면상.webp" style="width: 100%; height: 100%; object-fit: cover; filter: grayscale(100%) contrast(500%) brightness(1.2); mix-blend-mode: multiply;" alt="박현만">
            </div>
            
            <!-- 중앙 구분선 -->
            <div style="width: 1px; height: 40px; background-color: rgba(255,255,255,0.5);"></div>
            
            <!-- 우측 타이틀 텍스트 -->
            <div style="text-align: left; line-height: 1.3; color: #fff;">
                <div style="font-size: 1.4em; font-weight: 900; letter-spacing: -0.5px;">박현만</div>
                <div style="font-size: 0.9em; font-weight: bold; letter-spacing: -0.5px; opacity: 0.9;">관련 문서</div>
            </div>
        </div>

        <details class="wiki-folder" open="" style="margin: 0; border: none;">
            <summary class="wiki-folder-summary" style="border: none; border-bottom: 1px solid ${borderColor}; background-color: #fff; padding: 8px; font-weight: bold; text-align: center; cursor: pointer; color: #333; list-style: none;">[ 펼치기 · 접기 ]</summary>
            
            <div class="wiki-folder-content" style="padding: 0;">
                <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.9em; margin: 0;">
                    <tbody>
                        
                        <!-- 1. 생애 및 활동 -->
                        <tr style="border-bottom: 1px solid ${borderColor};">
                            <th style="width: 18%; background-color: #fff; color: ${thTextColor}; padding: 12px 10px; font-weight: bold; text-align: center; border-right: 1px solid ${borderColor}; word-break: keep-all;">
                                생애 및 활동
                            </th>
                            <td style="padding: 12px 15px; background-color: #fff; line-height: 1.6;">
                                <a href="박현만_생애.html" style="color: ${linkColor}; text-decoration: none;">생애 (유년기 및 정계 입문)</a> · 
                                <a href="박현만_정치.html" style="color: ${linkColor}; text-decoration: none;">정치 및 국회의원 시절</a> · 
                                <a href="박현만_저술_활동.html" style="color: ${linkColor}; text-decoration: none;">저술 활동</a> · 
                                <a href="박현만_선거_이력.html" style="color: ${linkColor}; text-decoration: none;">선거 이력</a> · 
                                <a href="박현만_여담.html" style="color: ${linkColor}; text-decoration: none;">여담 (Oldtype Archives)</a>
                            </td> 
                        </tr>

                        <!-- 2. 주요 행정 및 업적 (효빈 중흥의 아버지) -->
                        <tr style="border-bottom: 1px solid ${borderColor};">
                            <th style="width: 18%; background-color: #fff; color: ${thTextColor}; padding: 12px 10px; font-weight: bold; text-align: center; border-right: 1px solid ${borderColor}; word-break: keep-all;">
                                주요 행정 및 업적
                            </th>
                            <td style="padding: 12px 15px; background-color: #fff; line-height: 1.6;">
                                <a href="스타더스트_작전.html" style="color: ${linkColor}; text-decoration: none;">스타더스트 작전 (대복구 시대)</a> · 
                                <a href="철도망의_수호와_부활.html" style="color: ${linkColor}; text-decoration: none;">철도망의 수호와 부활 (2·4·5·6·7호선, 빈효선)</a> · 
                                <a href="HAF.html" style="color: ${linkColor}; text-decoration: none;">HAF 창설 및 서브컬처 수도화</a>
                            </td>
                        </tr>

                        <!-- 3. 관련 인물 및 사건 -->
                        <tr style="border-bottom: 1px solid ${borderColor};">
                            <th style="width: 18%; background-color: #fff; color: ${thTextColor}; padding: 12px 10px; font-weight: bold; text-align: center; border-right: 1px solid ${borderColor}; word-break: keep-all;">
                                관련 인물 및 사건
                            </th>
                            <td style="padding: 12px 15px; background-color: #fff; line-height: 1.6;">
                                <a href="3표의_비극.html" style="color: ${linkColor}; text-decoration: none;">3표의 비극 (2006)</a> · 
                                <a href="윤대환.html" style="color: ${linkColor}; text-decoration: none;">윤대환 (숙적)</a> · 
                                <a href="한바다.html" style="color: ${linkColor}; text-decoration: none;">한바다 (마스코트 / 양녀)</a> · 
                                <a href="박효빈.html" style="color: ${linkColor}; text-decoration: none;">박효빈 (후계자)</a>
                            </td>
                        </tr>

                        <!-- 4. 소속 정당 -->
                        <tr>
                            <th style="width: 18%; background-color: #fff; color: ${thTextColor}; padding: 12px 10px; font-weight: bold; text-align: center; border-right: 1px solid ${borderColor}; word-break: keep-all;">
                                소속 정당
                            </th>
                            <td style="padding: 12px 15px; background-color: #fff; line-height: 1.6;">
                                <a href="더불어민주당.html" style="color: ${linkColor}; text-decoration: none;">더불어민주당</a>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </details>
    </div>
    `;

    // 클래스명 "parkhyunman-nav-container"를 가진 요소를 찾아 HTML을 삽입합니다.
    const container = document.querySelector(".parkhyunman-nav-container");
    if (container) {
        container.innerHTML = parkHyunManNavHTML;
    } else {
        console.warn("박현만 둘러보기 틀을 삽입할 '.parkhyunman-nav-container' 요소를 찾을 수 없습니다.");
    }
});