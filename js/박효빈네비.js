document.addEventListener("DOMContentLoaded", function() {
    
    // 더불어민주당 메인 컬러 및 텍스트/링크 컬러 설정
    const minjooBlue = "#004EA2";
    const linkColor = "#0066cc";
    const borderColor = "#ddd";
    const thTextColor = "#333";

    const parkHyoBinNavHTML = `
    <div style="border: 1px solid #ccc; border-radius: 0px; margin-bottom: 20px; box-shadow: 0 1px 2px rgba(0,0,0,0.1); background-color: #fff; overflow: hidden; font-family: sans-serif;">
        
        <!-- 상단 배너 영역 (김동연 틀 디자인 완벽 반영) -->
        <div style="background-color: ${minjooBlue}; padding: 15px; display: flex; align-items: center; justify-content: center; gap: 15px; border-bottom: 1px solid #ccc;">
            
            <!-- 원본 사진을 CSS로 스텐실 처리 -->
            <div style="width: 50px; height: 50px; background-color: #004EA2; border: 1px solid rgba(255,255,255,0.3); display: flex; justify-content: center; align-items: center; overflow: hidden; border-radius: 2px;">
                <!-- src 경로에 실제 가지고 계신 사진 파일명(예: 이미지/박효빈.png)을 넣어주세요 -->
                <img src="이미지/박효빈면상.png" style="width: 100%; height: 100%; object-fit: cover; filter: grayscale(100%) contrast(500%) brightness(1.2); mix-blend-mode: multiply;" alt="박효빈">
            </div>
            
            <!-- 중앙 구분선 -->
            <div style="width: 1px; height: 40px; background-color: rgba(255,255,255,0.5);"></div>
            
            <!-- 우측 타이틀 텍스트 -->
            <div style="text-align: left; line-height: 1.3; color: #fff;">
                <div style="font-size: 1.4em; font-weight: 900; letter-spacing: -0.5px;">박효빈</div>
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
                                <a href="박효빈_생애.html" style="color: ${linkColor}; text-decoration: none;">생애</a> · 
                                <a href="박효빈_정치.html" style="color: ${linkColor}; text-decoration: none;">정치</a> · 
                                <a href="박효빈_효빈광역시정.html" style="color: ${linkColor}; text-decoration: none;">효빈광역시장 시절</a> · 
                                <a href="가족돌봄청년.html" style="color: ${linkColor}; text-decoration: none;">가족돌봄청년</a>
                            </td> 
                        </tr>

                        <!-- 2. 효빈광역시장 -->
                        <tr style="border-bottom: 1px solid ${borderColor};">
                            <th style="width: 18%; background-color: #fff; color: ${thTextColor}; padding: 12px 10px; font-weight: bold; text-align: center; border-right: 1px solid ${borderColor}; word-break: keep-all;">
                                효빈광역시장
                            </th>
                            <td style="padding: 12px 15px; background-color: #fff; line-height: 1.6;">
                                <a href="박효빈_정책.html" style="color: ${linkColor}; text-decoration: none;">정책</a> · 
                                <a href="효빈 패스.html" style="color: ${linkColor}; text-decoration: none;">효빈 패스</a> · 
                                <a href="블루_버드_멘토단.html" style="color: ${linkColor}; text-decoration: none;">블루 버드 멘토단</a> · 
                                <a href="케손시티 메트로 사업.html" style="color: ${linkColor}; text-decoration: none;">효빈광역시 케손시티 메트로 협약</a> · 
                                <a href="L-Project.html" style="color: ${linkColor}; text-decoration: none;">L-Project (애니메이션 특화도시)</a> · 
                                <a href="당가동_르네상스.html" style="color: ${linkColor}; text-decoration: none;">당가동 르네상스</a>
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
                                비판 및 사건사고
                            </th>
                            <td style="padding: 12px 15px; background-color: #fff; line-height: 1.6;">
                                <a href="박효빈_사건사고.html" style="color: ${linkColor}; text-decoration: none;">사건사고</a> · 
                                <a href="박효빈_논란_및_비판.html" style="color: ${linkColor}; text-decoration: none;">비판 및 논란</a>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </details>
    </div>
    `;

    // 클래스명 "parkhyobin-nav-container"를 가진 요소를 찾아 HTML을 삽입합니다.
    const container = document.querySelector(".parkhyobin-nav-container");
    if (container) {
        container.innerHTML = parkHyoBinNavHTML;
    } else {
        console.warn("박효빈 둘러보기 틀을 삽입할 '.parkhyobin-nav-container' 요소를 찾을 수 없습니다.");
    }
});