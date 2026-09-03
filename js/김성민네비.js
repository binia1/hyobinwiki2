document.addEventListener("DOMContentLoaded", function() {
    
    // 더불어민주당 메인 컬러 및 텍스트/링크 컬러 설정
    const minjooBlue = "#004EA2";
    const linkColor = "#0066cc";
    const borderColor = "#ddd";
    const thTextColor = "#333";

    const kimSeongMinNavHTML = `
    <div style="border: 1px solid #ccc; border-radius: 0px; margin-bottom: 20px; box-shadow: 0 1px 2px rgba(0,0,0,0.1); background-color: #fff; overflow: hidden; font-family: sans-serif;">
        
        <!-- 상단 배너 영역 -->
        <div style="background-color: ${minjooBlue}; padding: 15px; display: flex; align-items: center; justify-content: center; gap: 15px; border-bottom: 1px solid #ccc;">
            
            <!-- 원본 사진을 CSS로 스텐실 처리 -->
            <div style="width: 50px; height: 50px; background-color: #004EA2; border: 1px solid rgba(255,255,255,0.3); display: flex; justify-content: center; align-items: center; overflow: hidden; border-radius: 2px;">
                <!-- 지정된 이미지 경로 규칙 적용 -->
                <img src="이미지/김성민.webp" style="width: 100%; height: 100%; object-fit: cover; filter: grayscale(100%) contrast(500%) brightness(1.2); mix-blend-mode: multiply;" alt="김성민">
            </div>
            
            <!-- 중앙 구분선 -->
            <div style="width: 1px; height: 40px; background-color: rgba(255,255,255,0.5);"></div>
            
            <!-- 우측 타이틀 텍스트 -->
            <div style="text-align: left; line-height: 1.3; color: #fff;">
                <div style="font-size: 1.4em; font-weight: 900; letter-spacing: -0.5px;">김성민</div>
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
                                <a href="김성민_생애.html" style="color: ${linkColor}; text-decoration: none;">생애</a> · 
                                <a href="김성민_정치_활동.html" style="color: ${linkColor}; text-decoration: none;">정치 활동</a> · 
                                <a href="김성민_선거_이력.html" style="color: ${linkColor}; text-decoration: none;">선거 이력</a> · 
                                <a href="김성민_여담.html" style="color: ${linkColor}; text-decoration: none;">여담 (덕업일치 연대기)</a>
                            </td> 
                        </tr>

                        <!-- 2. 주요 업적 (인간 백정 모드) -->
                        <tr style="border-bottom: 1px solid ${borderColor};">
                            <th style="width: 18%; background-color: #fff; color: ${thTextColor}; padding: 12px 10px; font-weight: bold; text-align: center; border-right: 1px solid ${borderColor}; word-break: keep-all;">
                                주요 행정 및 업적
                            </th>
                            <td style="padding: 12px 15px; background-color: #fff; line-height: 1.6;">
                                <a href="7호선_전차_사수_작전.html" style="color: ${linkColor}; text-decoration: none;">7호선 전차 사수 작전 (행정 바리케이드)</a> · 
                                <a href="중구_원도심_재개발.html" style="color: ${linkColor}; text-decoration: none;">중구 원도심 부활 마스터플랜</a> · 
                                <a href="효빈교통공사_설립.html" style="color: ${linkColor}; text-decoration: none;">효빈교통공사 독립 분사 (6호선 중전철 사수)</a>
                            </td>
                        </tr>

                        <!-- 3. 소속 정당 -->
                        <tr style="border-bottom: 1px solid ${borderColor};">
                            <th style="width: 18%; background-color: #fff; color: ${thTextColor}; padding: 12px 10px; font-weight: bold; text-align: center; border-right: 1px solid ${borderColor}; word-break: keep-all;">
                                소속 정당
                            </th>
                            <td style="padding: 12px 15px; background-color: #fff; line-height: 1.6;">
                                <a href="더불어민주당.html" style="color: ${linkColor}; text-decoration: none;">더불어민주당</a>
                            </td>
                        </tr>

                        <!-- 4. 비판 및 사건사고 -->
                        <tr>
                            <th style="width: 18%; background-color: #fff; color: ${thTextColor}; padding: 12px 10px; font-weight: bold; text-align: center; border-right: 1px solid ${borderColor}; word-break: keep-all;">
                                비판 및 논란
                            </th>
                            <td style="padding: 12px 15px; background-color: #fff; line-height: 1.6;">
                                <a href="김성민_시장직_중도_사퇴_논란.html" style="color: ${linkColor}; text-decoration: none;">시장직 중도 사퇴 및 국회의원 출마 논란</a> · 
                                <a href="소홍문_가짜뉴스_공작_사건.html" style="color: ${linkColor}; text-decoration: none;">소홍문의 효빈교통공사 분사 억지 논란 공작</a>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </details>
    </div>
    `;

    // 클래스명 "kimseongmin-nav-container"를 가진 요소를 찾아 HTML을 삽입합니다.
    const container = document.querySelector(".kimseongmin-nav-container");
    if (container) {
        container.innerHTML = kimSeongMinNavHTML;
    } else {
        console.warn("김성민 둘러보기 틀을 삽입할 '.kimseongmin-nav-container' 요소를 찾을 수 없습니다.");
    }
});