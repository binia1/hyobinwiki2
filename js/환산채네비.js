document.addEventListener("DOMContentLoaded", function() {
    
    // 더불어민주당 메인 컬러 및 텍스트/링크 컬러 설정
    const minjooBlue = "#004EA2";
    const linkColor = "#0066cc";
    const borderColor = "#ddd";
    const thTextColor = "#333";

    const hwanSanChaeNavHTML = `
    <div style="border: 1px solid #ccc; border-radius: 0px; margin-bottom: 20px; box-shadow: 0 1px 2px rgba(0,0,0,0.1); background-color: #fff; overflow: hidden; font-family: sans-serif;">
        
        <!-- 상단 배너 영역 -->
        <div style="background-color: ${minjooBlue}; padding: 15px; display: flex; align-items: center; justify-content: center; gap: 15px; border-bottom: 1px solid #ccc;">
            
            <!-- 원본 사진을 CSS로 스텐실 처리 -->
            <div style="width: 50px; height: 50px; background-color: ${minjooBlue}; border: 1px solid rgba(255,255,255,0.3); display: flex; justify-content: center; align-items: center; overflow: hidden; border-radius: 2px;">
                <!-- 지정된 이미지 경로 규칙 적용 -->
<img src="이미지/환산채얼굴.webp" style="width: 100%; height: 100%; object-fit: cover; filter: grayscale(100%) contrast(400%) brightness(1.1) drop-shadow(0px 0px 2px rgba(0,0,0,0.5));" alt="환산채">
            </div>
            
            <!-- 중앙 구분선 -->
            <div style="width: 1px; height: 40px; background-color: rgba(255,255,255,0.5);"></div>
            
            <!-- 우측 타이틀 텍스트 -->
            <div style="text-align: left; line-height: 1.3; color: #fff;">
                <div style="font-size: 1.4em; font-weight: 900; letter-spacing: -0.5px;">환산채</div>
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
                                <a href="환산채_생애.html" style="color: ${linkColor}; text-decoration: none;">생애</a> · 
                                <a href="환산채_국회의원_활동.html" style="color: ${linkColor}; text-decoration: none;">국회의원 활동 (4선 중진)</a> · 
                                <a href="환산채_선거_이력.html" style="color: ${linkColor}; text-decoration: none;">선거 이력</a> · 
                                <a href="환산채_여담.html" style="color: ${linkColor}; text-decoration: none;">여담 (파스파레 밈)</a>
                            </td> 
                        </tr>

                        <!-- 2. 시장 재임 및 행정 -->
                        <tr style="border-bottom: 1px solid ${borderColor};">
                            <th style="width: 18%; background-color: #fff; color: ${thTextColor}; padding: 12px 10px; font-weight: bold; text-align: center; border-right: 1px solid ${borderColor}; word-break: keep-all;">
                                시장 재임 및 행정
                            </th>
                            <td style="padding: 12px 15px; background-color: #fff; line-height: 1.6;">
                                <a href="환산채_시장_재임.html" style="color: ${linkColor}; text-decoration: none;">시장 재임 (제9대 관선·민선 1기)</a> · 
                                <a href="효빈도시공사_철도_통합.html" style="color: ${linkColor}; text-decoration: none;">효빈도시공사 철도 통합 (나비효과)</a> · 
                                <a href="환산채_결자해지.html" style="color: ${linkColor}; text-decoration: none;">결자해지 (효빈교통공사 분사 지지)</a>
                            </td>
                        </tr>

                        <!-- 3. 관련 인물 -->
                        <tr style="border-bottom: 1px solid ${borderColor};">
                            <th style="width: 18%; background-color: #fff; color: ${thTextColor}; padding: 12px 10px; font-weight: bold; text-align: center; border-right: 1px solid ${borderColor}; word-break: keep-all;">
                                관련 인물
                            </th>
                            <td style="padding: 12px 15px; background-color: #fff; line-height: 1.6;">
                                <a href="박현만.html" style="color: ${linkColor}; text-decoration: none;">박현만 (후계자 및 아끼는 후배)</a> · 
                                <a href="김성민.html" style="color: ${linkColor}; text-decoration: none;">김성민 (교통공사 분사 조력)</a> · 
                                <a href="박효빈.html" style="color: ${linkColor}; text-decoration: none;">박효빈 (증손자뻘 후임 시장)</a> · 
                                <a href="윤대환.html" style="color: ${linkColor}; text-decoration: none;">윤대환 (행정 시스템을 망친 원흉)</a>
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

    // 클래스명 "hwansanchae-nav-container"를 가진 요소를 찾아 HTML을 삽입합니다.
    const container = document.querySelector(".hwansanchae-nav-container");
    if (container) {
        container.innerHTML = hwanSanChaeNavHTML;
    } else {
        console.warn("환산채 둘러보기 틀을 삽입할 '.hwansanchae-nav-container' 요소를 찾을 수 없습니다.");
    }
});