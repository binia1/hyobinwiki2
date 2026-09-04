document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("starfield-nav-container");
    if (!container) return;

    const templateHTML = `
    <div style="border: 1px solid #ccc; margin: 15px 0; font-size: 0.85rem; text-align: center; background: #fff; width: 100%; border-radius: 4px; overflow: hidden;">
        
        <!-- 타이틀 영역 (이미지 로고 디자인 완벽 구현) -->
        <div style="background-color: #fff; padding: 15px; display: flex; justify-content: center; align-items: center; gap: 12px; border-bottom: 1px solid #ccc;">
            <div style="color: #CE0024; font-family: 'Brush Script MT', 'Dancing Script', cursive; font-size: 2.2rem; line-height: 1; padding-bottom: 5px;">Starfield</div>
            <div style="border-left: 2px solid #CE0024; padding-left: 12px; text-align: left; line-height: 1.2;">
                <div style="color: #CE0024; font-weight: 900; font-size: 1.15rem; letter-spacing: -0.5px;">스타필드</div>
                <div style="color: #CE0024; font-size: 0.85rem; font-weight: normal; letter-spacing: 0.5px;">Starfield</div>
            </div>
        </div>
        
        <!-- 접기/펼치기 토글 버튼 -->
        <div style="padding: 8px; cursor: pointer; user-select: none; font-weight: bold; font-size: 0.85rem; background-color: #fff; color: #CE0024; border-bottom: 1px solid #eee;" 
             onclick="const content = document.getElementById('starfield-nav-content'); 
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
        
        <!-- 지점 목록 내용 (완벽한 3열 테이블 레이아웃 및 텍스트 색상 반영) -->
        <div id="starfield-nav-content" style="background-color: #fff;">
            <table style="width: 100%; border-collapse: collapse; margin: 0; border: none; table-layout: fixed;">
                <tbody>
                    <!-- 스타필드 -->
                    <tr>
                        <td colspan="3" style="background-color: #CE0024; color: #fff; font-weight: bold; padding: 8px; border: 1px solid #CE0024;">스타필드</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #eee; padding: 10px; width: 33.33%;"><a href="스타필드_하남.html" style="color: #555; text-decoration: none;">하남</a></td>
                        <td style="border: 1px solid #eee; padding: 10px; width: 33.33%;"><a href="스타필드_코엑스몰.html" style="color: #555; text-decoration: none;">코엑스몰</a></td>
                        <td style="border: 1px solid #eee; padding: 10px; width: 33.33%;"><a href="스타필드_고양.html" style="color: #CE0024; text-decoration: none;">고양</a></td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #eee; padding: 10px;"><a href="스타필드_안성.html" style="color: #555; text-decoration: none;">안성</a></td>
                        <td style="border: 1px solid #eee; padding: 10px;"><a href="스타필드_수원.html" style="color: #555; text-decoration: none;">수원</a></td>
                        <td style="border: 1px solid #eee; padding: 10px;"><a href="스타필드_청라.html" style="color: #555; text-decoration: none;">청라(예정)</a></td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #eee; padding: 10px;"><a href="스타필드_창원.html" style="color: #CE0024; text-decoration: none;">창원(예정)</a></td>
                        <td style="border: 1px solid #eee; padding: 10px;"><a href="스타필드_광주.html" style="color: #555; text-decoration: none;">광주(예정)</a></td>
                        <td style="border: 1px solid #eee; padding: 10px; background-color: #fff5f5;"><a href="스타필드_효빈.html" style="color: #CE0024; text-decoration: none; font-weight: 900;">효빈(예정)</a></td>
                    </tr>

                    <!-- 스타필드시티 -->
                    <tr>
                        <td colspan="3" style="background-color: #CE0024; color: #fff; font-weight: bold; padding: 8px; border: 1px solid #CE0024;">스타필드시티</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #eee; padding: 10px;"><a href="스타필드시티_위례.html" style="color: #CE0024; text-decoration: none;">위례</a></td>
                        <td style="border: 1px solid #eee; padding: 10px;"><a href="스타필드시티_부천.html" style="color: #555; text-decoration: none;">부천</a></td>
                        <td style="border: 1px solid #eee; padding: 10px;"><a href="스타필드시티_명지.html" style="color: #CE0024; text-decoration: none;">명지</a></td>
                    </tr>

                    <!-- 스타필드마켓 -->
                    <tr>
                        <td colspan="3" style="background-color: #CE0024; color: #fff; font-weight: bold; padding: 8px; border: 1px solid #CE0024;">스타필드마켓</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #eee; padding: 10px;"><a href="스타필드마켓_죽전.html" style="color: #CE0024; text-decoration: none;">죽전</a></td>
                        <td style="border: 1px solid #eee; padding: 10px;"><a href="스타필드마켓_일산.html" style="color: #555; text-decoration: none;">일산</a></td>
                        <td style="border: 1px solid #eee; padding: 10px;"><a href="스타필드마켓_동탄.html" style="color: #CE0024; text-decoration: none;">동탄</a></td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #eee; padding: 10px;"><a href="스타필드마켓_경산.html" style="color: #CE0024; text-decoration: none;">경산</a></td>
                        <td style="border: 1px solid #eee; padding: 10px;"><a href="스타필드마켓_월계.html" style="color: #555; text-decoration: none;">월계</a></td>
                        <td style="border: 1px solid #eee; padding: 10px;"></td>
                    </tr>

                    <!-- 스타필드 빌리지 -->
                    <tr>
                        <td colspan="3" style="background-color: #CE0024; color: #fff; font-weight: bold; padding: 8px; border: 1px solid #CE0024;">스타필드 빌리지</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #eee; padding: 10px;"><a href="스타필드_빌리지_운정.html" style="color: #CE0024; text-decoration: none;">운정</a></td>
                        <td style="border: 1px solid #eee; padding: 10px;"><a href="스타필드_빌리지_청주.html" style="color: #CE0024; text-decoration: none;">청주</a></td>
                        <td style="border: 1px solid #eee; padding: 10px;"></td>
                    </tr>

                    <!-- 스타필드 에비뉴 -->
                    <tr>
                        <td colspan="3" style="background-color: #CE0024; color: #fff; font-weight: bold; padding: 8px; border: 1px solid #CE0024;">스타필드 에비뉴</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #eee; padding: 10px;"><a href="스타필드_에비뉴_그랑서울.html" style="color: #CE0024; text-decoration: none;">그랑서울</a></td>
                        <td style="border: 1px solid #eee; padding: 10px;"></td>
                        <td style="border: 1px solid #eee; padding: 10px;"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    `;

    container.innerHTML = templateHTML;
});