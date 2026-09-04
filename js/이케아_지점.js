document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("ikea-nav-container");
    if (!container) return;

    const templateHTML = `
    <div style="border: 1px solid #ccc; margin: 15px 0; font-size: 0.85rem; text-align: center; background: #fff; width: 100%;">
        
        <!-- 타이틀 영역 -->
        <div style="background-color: #0058A3; padding: 12px; display: flex; justify-content: center; align-items: center; gap: 15px; border-bottom: 1px solid #0058A3;">
            <div style="background-color: #FBD914; color: #0058A3; padding: 3px 18px; border-radius: 40px; font-weight: 900; font-size: 1.5rem; letter-spacing: 1px; border: 2px solid #0058A3; outline: 2px solid #FBD914; line-height: 1;">IKEA</div>
            <div style="text-align: left; line-height: 1.2;">
                <div style="color: #FBD914; font-weight: bold; font-size: 1.15rem;">이케아코리아 매장</div>
                <div style="color: #ffffff; font-size: 0.85rem; letter-spacing: 0.5px;">IKEA KOREA</div>
            </div>
        </div>
        
        <!-- 접기/펼치기 토글 버튼 -->
        <div style="padding: 6px; cursor: pointer; user-select: none; font-weight: bold; font-size: 0.85rem; background-color: #fff; color: #333; border-bottom: 1px solid #eee;" 
             onclick="const content = document.getElementById('ikea-nav-content'); 
                      const text = this.querySelector('span'); 
                      if(content.style.display === 'none') { 
                          content.style.display = 'block'; 
                          text.innerText = '[ 접기 ]'; 
                      } else { 
                          content.style.display = 'none'; 
                          text.innerText = '[ 펼치기 ]'; 
                      }">
            <span>[ 접기 ]</span>
        </div>
        
        <!-- 지점 목록 내용 (6열 구조로 분할 최적화) -->
        <div id="ikea-nav-content" style="background-color: #fff;">
            <table style="width: 100%; border-collapse: collapse; margin: 0; border: none; table-layout: fixed;">
                <tbody>
                    <!-- 1번째 줄: 3분할 -->
                    <tr>
                        <td colspan="2" style="border: 1px solid #eee; padding: 10px; width: 33.33%;"><a href="이케아_광명점.html" class="wiki-link" style="color: #333; text-decoration: none;">광명점</a></td>
                        <td colspan="2" style="border: 1px solid #eee; padding: 10px; width: 33.33%;"><a href="이케아_고양점.html" class="wiki-link" style="color: #333; text-decoration: none;">고양점</a></td>
                        <td colspan="2" style="border: 1px solid #eee; padding: 10px; width: 33.33%;"><a href="이케아_기흥점.html" class="wiki-link" style="color: #333; text-decoration: none;">기흥점</a></td>
                    </tr>
                    <!-- 2번째 줄: 3분할 -->
                    <tr>
                        <td colspan="2" style="border: 1px solid #eee; padding: 10px;"><a href="이케아_동부산점.html" class="wiki-link" style="color: #333; text-decoration: none;">동부산점</a></td>
                        <td colspan="2" style="border: 1px solid #eee; padding: 10px;"><a href="이케아_강동점.html" class="wiki-link" style="color: #333; text-decoration: none;">강동점</a></td>
                        <td colspan="2" style="border: 1px solid #eee; padding: 10px; background-color: #f4f8ff;"><a href="이케아_효빈점.html" class="wiki-link" style="color: #0058A3; text-decoration: none; font-weight: 900;">효빈점</a></td>
                    </tr>
                    <!-- 3번째 줄: 2분할 (효빈점 추가로 인해 송도점/광주점 병합) -->
                    <tr>
                        <td colspan="3" style="border: 1px solid #eee; padding: 10px;"><a href="이케아_롯데_광주점.html" class="wiki-link" style="color: #333; text-decoration: none;">롯데 광주점</a></td>
                        <td colspan="3" style="border: 1px solid #eee; padding: 10px;"><a href="현대프리미엄아울렛_송도점.html" class="wiki-link" style="color: #333; text-decoration: none;">현대프리미엄아울렛 송도점</a></td>
                    </tr>

                    <!-- 개점 예정 매장 타이틀 -->
                    <tr>
                        <td colspan="6" style="background-color: #0058A3; color: #FBD914; font-weight: bold; padding: 8px; border: 1px solid #0058A3;">개점 예정 매장</td>
                    </tr>
                    <!-- 개점 예정 매장: 2분할 -->
                    <tr>
                        <td colspan="3" style="border: 1px solid #eee; padding: 10px;">
                            <a href="신세계백화점_대구점.html" class="wiki-link" style="color: #333; text-decoration: none;">신세계백화점 대구점</a><br>
                            <span style="font-size: 0.75rem; color: #666;">(2026년 예정)</span>
                        </td>
                        <td colspan="3" style="border: 1px solid #eee; padding: 10px;">
                            <a href="현대프리미엄아울렛_대전점.html" class="wiki-link" style="color: #333; text-decoration: none;">현대프리미엄아울렛 대전점</a><br>
                            <span style="font-size: 0.75rem; color: #666;">(2026년 예정)</span>
                        </td>
                    </tr>

                    <!-- 폐점한 매장 타이틀 -->
                    <tr>
                        <td colspan="6" style="background-color: #0058A3; color: #FBD914; font-weight: bold; padding: 8px; border: 1px solid #0058A3;">폐점한 매장</td>
                    </tr>
                    <!-- 폐점한 매장: 3분할 -->
                    <tr>
                        <td colspan="2" style="border: 1px solid #eee; padding: 10px;">
                            <a href="Lab_성수점.html" class="wiki-link" style="color: #333; text-decoration: none;">Lab 성수점</a><br>
                            <span style="font-size: 0.75rem; color: #666;">(2021년 폐점)</span>
                        </td>
                        <td colspan="2" style="border: 1px solid #eee; padding: 10px;">
                            <a href="플래닝_스튜디오_천호점.html" class="wiki-link" style="color: #333; text-decoration: none;">플래닝 스튜디오 천호점</a><br>
                            <span style="font-size: 0.75rem; color: #666;">(2022년 폐점)</span>
                        </td>
                        <td colspan="2" style="border: 1px solid #eee; padding: 10px;">
                            <a href="플래닝_스튜디오_신도림점.html" class="wiki-link" style="color: #333; text-decoration: none;">플래닝 스튜디오 신도림점</a><br>
                            <span style="font-size: 0.75rem; color: #666;">(2022년 폐점)</span>
                        </td>
                    </tr>

                    <!-- 하단 국가 표기 -->
                    <tr>
                        <td colspan="6" style="background-color: #0058A3; color: #fff; padding: 6px; font-size: 0.8rem; border: 1px solid #0058A3;">
                            대한민국 · 일본
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    `;
    container.innerHTML = templateHTML;
});