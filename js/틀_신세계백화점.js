document.addEventListener("DOMContentLoaded", function() {
    
    const shinsegaeNavHTML = `
    <div style="border: 1px solid #ccc; border-radius: 2px; margin-bottom: 20px; box-shadow: 0 1px 2px rgba(0,0,0,0.1); background-color: #fff; overflow: hidden; font-family: sans-serif;">
        
        <!-- 상단 배너 영역 (사진의 SHINSEGAE 로고 디자인 완벽 반영) -->
        <div style="padding: 15px; text-align: center; border-bottom: 1px solid #ccc; display: flex; align-items: center; justify-content: center; gap: 15px; background-color: #fff;">
            <div style="font-family: 'Times New Roman', Times, serif; font-size: 1.4em; letter-spacing: 1px; color: #000; padding-top: 2px;">SHINSEGAE</div>
            <div style="width: 1px; height: 35px; background-color: #ccc;"></div>
            <div style="text-align: left; line-height: 1.2;">
                <div style="font-size: 1.1em; font-weight: 900; color: #000; letter-spacing: -0.5px;">신세계백화점</div>
                <div style="font-size: 0.75em; color: #555; letter-spacing: -0.5px; margin-top: 2px;">관련 문서</div>
            </div>
        </div>

        <details class="wiki-folder" open="" style="margin: 0; border: none;">
            <summary class="wiki-folder-summary" style="border: none; border-bottom: 1px solid #ccc; background-color: #f8f9fa; padding: 8px; font-weight: bold; text-align: center; cursor: pointer; color: #333; list-style: none;">[ 펼치기 · 접기 ]</summary>
            
            <div class="wiki-folder-content" style="padding: 0;">
                <table style="width: 100%; border-collapse: collapse; text-align: center; font-size: 0.9em; table-layout: fixed; margin: 0;">
                    <tbody>
                        
                        <!-- 1. 점포 (유저 제공 양식 반영: 수도권/지방권 분류 및 다크 테마 헤더) -->
                        <tr>
                            <th colspan="2" style="background-color: #3b3b3b; color: #fff; padding: 7px; border: 1px solid #ccc; font-weight: bold;">점포</th>
                        </tr>
                        
                        <!-- 수도권 -->
                        <tr style="background-color: #fff; border-bottom: 1px solid #eee;">
                            <th style="width: 20%; background-color: #2d2d2d; color: #fff; border: 1px solid #ccc; padding: 10px; font-weight: bold;">수도권</th>
                            <td style="padding: 10px; border: 1px solid #ccc; text-align: left; word-break: keep-all; line-height: 1.8;">
                                <a href="https://namu.wiki/w/신세계백화점%20본점" target="_blank" style="color: #333; text-decoration: none;">본점</a> · 
                                <a href="https://namu.wiki/w/신세계백화점%20강남점" target="_blank" style="color: #333; text-decoration: none;">강남점</a> · 
                                <a href="https://namu.wiki/w/신세계백화점%20타임스퀘어점" target="_blank" style="color: #333; text-decoration: none;">타임스퀘어점</a> · 
                                <a href="https://namu.wiki/w/신세계백화점%20경기점" target="_blank" style="color: #333; text-decoration: none;">경기점</a> · 
                                <a href="https://namu.wiki/w/신세계백화점%20의정부점" target="_blank" style="color: #333; text-decoration: none;">의정부점</a> · 
                                <a href="https://namu.wiki/w/스타필드%20하남" target="_blank" style="color: #333; text-decoration: none;">스타필드 하남점</a>
                            </td>
                        </tr>
                        
                        <!-- 지방권 (가상 지역 추가됨) -->
                        <tr style="background-color: #fff;">
                            <th style="width: 20%; background-color: #2d2d2d; color: #fff; border: 1px solid #ccc; padding: 10px; font-weight: bold;">지방권</th>
                            <td style="padding: 10px; border: 1px solid #ccc; text-align: left; word-break: keep-all; line-height: 1.8;">
                                <a href="https://namu.wiki/w/신세계백화점%20센텀시티점" target="_blank" style="color: #333; text-decoration: none;">센텀시티점</a> · 
                                <a href="https://namu.wiki/w/대구신세계" target="_blank" style="color: #333; text-decoration: none;">대구신세계</a> · 
                                <a href="https://namu.wiki/w/대전신세계%20Art%20&%20Science" target="_blank" style="color: #333; text-decoration: none;">대전신세계 Art & Science</a> · 
                                <a href="https://namu.wiki/w/광주신세계" target="_blank" style="color: #333; text-decoration: none;">광주신세계</a> · 
                                <a href="효빈신세계백화점.html" style="color: #004EA2; text-decoration: none; font-weight: bold;">효빈신세계</a> · 
                                <a href="빈주신세계백화점.html" style="color: #004EA2; text-decoration: none; font-weight: bold;">빈주점</a> · 
                                <a href="https://namu.wiki/w/신세계백화점%20김해점" target="_blank" style="color: #333; text-decoration: none;">김해점</a> · 
                                <a href="https://namu.wiki/w/신세계백화점%20마산점" target="_blank" style="color: #333; text-decoration: none;">마산점</a> · 
                                <a href="https://namu.wiki/w/신세계백화점%20천안아산점" target="_blank" style="color: #333; text-decoration: none;">천안아산점</a>
                            </td>
                        </tr>

                        <!-- 2. 개점 준비 중인 점포 -->
                        <tr>
                            <th colspan="2" style="background-color: #3b3b3b; color: #fff; padding: 7px; border: 1px solid #ccc; font-weight: bold;">개점 준비 중인 점포</th>
                        </tr>
                        <tr style="background-color: #fff;">
                            <td colspan="2" style="padding: 10px; border: 1px solid #ccc; text-align: center; word-break: keep-all; line-height: 1.6;">
                                <a href="#" style="color: #333; text-decoration: none;">수서점</a> · 
                                <a href="#" style="color: #333; text-decoration: none;">송도점</a>
                            </td>
                        </tr>

                        <!-- 3. 신세계 스타일마켓 -->
                        <tr>
                            <th colspan="2" style="background-color: #3b3b3b; color: #fff; padding: 7px; border: 1px solid #ccc; font-weight: bold;">신세계 스타일마켓</th>
                        </tr>
                        <tr style="background-color: #fff;">
                            <td colspan="2" style="padding: 10px; border: 1px solid #ccc; text-align: center; word-break: keep-all; line-height: 1.6;">
                                <a href="#" style="color: #333; text-decoration: none;">대전점</a>
                            </td>
                        </tr>

                        <!-- 4. 신세계 푸드마켓 -->
                        <tr>
                            <th colspan="2" style="background-color: #3b3b3b; color: #fff; padding: 7px; border: 1px solid #ccc; font-weight: bold;">신세계 푸드마켓</th>
                        </tr>
                        <tr style="background-color: #fff;">
                            <td colspan="2" style="padding: 10px; border: 1px solid #ccc; text-align: center; word-break: keep-all; line-height: 1.6;">
                                <a href="#" style="color: #333; text-decoration: none;">도곡점</a>
                            </td>
                        </tr>

                        <!-- 5. 신세계 팩토리스토어 -->
                        <tr>
                            <th colspan="2" style="background-color: #3b3b3b; color: #fff; padding: 7px; border: 1px solid #ccc; font-weight: bold;">신세계 팩토리스토어</th>
                        </tr>
                        <tr style="background-color: #fff;">
                            <td colspan="2" style="padding: 12px 10px; border: 1px solid #ccc; text-align: center; word-break: keep-all; line-height: 2.0;">
                                <a href="#" style="color: #333; text-decoration: none;">가산점</a> · 
                                <a href="#" style="color: #333; text-decoration: none;">강남점</a> · 
                                <a href="#" style="color: #333; text-decoration: none;">고양점</a> · 
                                <a href="#" style="color: #333; text-decoration: none;">기장점</a> · 
                                <a href="#" style="color: #333; text-decoration: none;">광양점</a> · 
                                <a href="#" style="color: #333; text-decoration: none;">대구점</a> · 
                                <a href="#" style="color: #333; text-decoration: none;">대전점</a> · 
                                <a href="#" style="color: #333; text-decoration: none;">센텀점</a> · 
                                <a href="#" style="color: #333; text-decoration: none;">수원점</a> · 
                                <a href="#" style="color: #333; text-decoration: none;">시흥점</a><br/>
                                <a href="#" style="color: #333; text-decoration: none;">스타필드마켓 경산점</a> · 
                                <a href="#" style="color: #333; text-decoration: none;">스타필드마켓 죽전점</a> · 
                                <a href="#" style="color: #333; text-decoration: none;">스타필드마켓 일산점</a> · 
                                <a href="#" style="color: #333; text-decoration: none;">안성점</a> · 
                                <a href="#" style="color: #333; text-decoration: none;">여주점</a><br/>
                                <a href="#" style="color: #333; text-decoration: none;">여주 프리미엄빌리지점</a> · 
                                <a href="#" style="color: #333; text-decoration: none;">천안아산점</a> · 
                                <a href="#" style="color: #333; text-decoration: none;">천안터미널점</a> · 
                                <a href="#" style="color: #333; text-decoration: none;">타임스퀘어점</a> · 
                                <a href="#" style="color: #333; text-decoration: none;">파주점</a>
                            </td>
                        </tr>

                        <!-- 6. 하우스오브신세계 -->
                        <tr>
                            <th colspan="2" style="background-color: #3b3b3b; color: #fff; padding: 7px; border: 1px solid #ccc; font-weight: bold;">하우스오브신세계</th>
                        </tr>
                        <tr style="background-color: #fff;">
                            <td colspan="2" style="padding: 10px; border: 1px solid #ccc; text-align: center; word-break: keep-all; line-height: 1.6;">
                                <a href="#" style="color: #333; text-decoration: none;">청담</a>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </details>
    </div>
    `;

    // HTML에 작성한 id "shinsegae-nav-container"를 찾습니다.
    const container = document.getElementById("shinsegae-nav-container");
    if (container) {
        container.innerHTML = shinsegaeNavHTML;
    } else {
        // 혹시 id 대신 class로 선언한 경우를 위한 안전 장치
        const fallbackContainer = document.querySelector(".shinsegae-nav-container");
        if(fallbackContainer) {
            fallbackContainer.innerHTML = shinsegaeNavHTML;
        }
    }
});