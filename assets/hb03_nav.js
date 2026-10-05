document.addEventListener("DOMContentLoaded", function() {
    
    // 퍼스널 컬러 (스틸 마인드 블루) 및 텍스트/링크 컬러 설정
    const mainBlue = "#4682B4"; 
    const linkColor = "#4682B4"; // 링크 색상도 테마에 맞게 통일
    const borderColor = "#ddd";
    const thTextColor = "#333";

    const parkHyoBin03NavHTML = `
    <div style="border: 1px solid #ccc; border-radius: 0px; margin-bottom: 20px; box-shadow: 0 1px 2px rgba(0,0,0,0.1); background-color: #fff; overflow: hidden; font-family: 'Noto Sans KR', sans-serif;">
        
        <!-- 상단 배너 영역 -->
        <div style="background-color: ${mainBlue}; padding: 15px; display: flex; align-items: center; justify-content: center; gap: 15px; border-bottom: 1px solid #ccc;">
            
            <!-- 아이콘 영역: 로고가 묻히지 않도록 배경을 흰색으로 처리하고 필터 제거 -->
            <div style="width: 50px; height: 50px; background-color: #ffffff; border: 2px solid rgba(255,255,255,0.8); display: flex; justify-content: center; align-items: center; overflow: hidden; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.2);">
                <img src="이미지/박효빈_아이콘.webp" style="width: 90%; height: 90%; object-fit: contain;" alt="박효빈 아이콘">
            </div>
            
            <!-- 중앙 구분선 -->
            <div style="width: 1px; height: 40px; background-color: rgba(255,255,255,0.5);"></div>
            
            <!-- 우측 타이틀 텍스트 -->
            <div style="text-align: left; line-height: 1.3; color: #fff;">
                <div style="font-size: 1.4em; font-weight: 900; letter-spacing: -0.5px;">박효빈 (2003)</div>
                <div style="font-size: 0.9em; font-weight: bold; letter-spacing: -0.5px; opacity: 0.9;">관련 문서 둘러보기</div>
            </div>
        </div>

        <details class="wiki-folder" open="" style="margin: 0; border: none;">
            <summary class="wiki-folder-summary" style="border: none; border-bottom: 1px solid ${borderColor}; background-color: #f9f9f9; padding: 8px; font-weight: bold; text-align: center; cursor: pointer; color: #333; list-style: none;">[ 펼치기 · 접기 ]</summary>
            
            <div class="wiki-folder-content" style="padding: 0;">
                <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.9em; margin: 0;">
                    <tbody>
                        
                        <!-- 1. 메인 및 생애 -->
                        <tr style="border-bottom: 1px solid ${borderColor};">
                            <th style="width: 18%; background-color: #f4f8fb; color: ${thTextColor}; padding: 12px 10px; font-weight: bold; text-align: center; border-right: 1px solid ${borderColor}; word-break: keep-all;">
                                생애 및 학업
                            </th>
                            <td style="padding: 12px 15px; background-color: #fff; line-height: 1.6;">
                                <a href="박효빈(03).html" style="color: ${linkColor}; text-decoration: none; font-weight: bold;">박효빈(2003)</a> · 
                                <a href="박효빈_생애와_성장.html" style="color: ${linkColor}; text-decoration: none;">생애와 성장</a> · 
                                <a href="박효빈_생기부_및_입시분석.html" style="color: ${linkColor}; text-decoration: none;">생기부 및 입시분석</a> · 
                                <a href="박효빈_대학생활.html" style="color: ${linkColor}; text-decoration: none;">대학 생활과 탐구</a>
                            </td> 
                        </tr>

                        <!-- 2. 근로 및 실무 -->
                        <tr style="border-bottom: 1px solid ${borderColor};">
                            <th style="width: 18%; background-color: #f4f8fb; color: ${thTextColor}; padding: 12px 10px; font-weight: bold; text-align: center; border-right: 1px solid ${borderColor}; word-break: keep-all;">
                                근로 및 실무
                            </th>
                            <td style="padding: 12px 15px; background-color: #fff; line-height: 1.6;">
                                <a href="박효빈_알바_및_근로.html" style="color: ${linkColor}; text-decoration: none;">알바 및 근로 전설</a> · 
                                <a href="박효빈_지역아동센터_멘토링.html" style="color: ${linkColor}; text-decoration: none;">지역아동센터 멘토링 전설</a>
                            </td>
                        </tr>

                        <!-- 3. 취미 및 여담 -->
                        <tr style="border-bottom: 1px solid ${borderColor};">
                            <th style="width: 18%; background-color: #f4f8fb; color: ${thTextColor}; padding: 12px 10px; font-weight: bold; text-align: center; border-right: 1px solid ${borderColor}; word-break: keep-all;">
                                취미 및 여담
                            </th>
                            <td style="padding: 12px 15px; background-color: #fff; line-height: 1.6;">
                                <a href="박효빈_여담_및_취미.html" style="color: ${linkColor}; text-decoration: none;">여담 및 취미</a> · 
                                <a href="박효빈_성지순례_연대기.html" style="color: ${linkColor}; text-decoration: none;">일본 성지순례 연대기</a>
                            </td>
                        </tr>

                        <!-- 4. 관련 세계관 및 기타 -->
                        <tr>
                            <th style="width: 18%; background-color: #f4f8fb; color: ${thTextColor}; padding: 12px 10px; font-weight: bold; text-align: center; border-right: 1px solid ${borderColor}; word-break: keep-all;">
                                관련 문서
                            </th>
                            <td style="padding: 12px 15px; background-color: #fff; line-height: 1.6;">
                                <a href="ㅈ포초_빌런목록.html" style="color: ${linkColor}; text-decoration: none;">ㅈ포초 및 관련 빌런 목록</a> · 
                                <a href="효빈위키.html" style="color: ${linkColor}; text-decoration: none;">효빈위키</a>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </details>
    </div>
    `;

    // 클래스명 "parkhyobin03-nav-container"를 가진 요소를 찾아 HTML을 삽입합니다.
    const container = document.querySelector(".parkhyobin03-nav-container");
    if (container) {
        container.innerHTML = parkHyoBin03NavHTML;
    } else {
        console.warn("박효빈(03) 둘러보기 틀을 삽입할 '.parkhyobin03-nav-container' 요소를 찾을 수 없습니다.");
    }
});