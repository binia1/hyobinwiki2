document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("moda-nav-container");
    if (!container) return;

    const templateHTML = `
    <div style="border: 1px solid var(--wiki-border, #ccc); margin: 15px 0; font-size: 0.9rem; text-align: center; background: var(--wiki-bg, #fff); width: 100%;">
        
        <!-- 타이틀 영역 -->
        <div style="padding: 10px; font-weight: bold; font-size: 1.25rem; color: #C00020; border-bottom: 1px solid var(--wiki-border, #ccc);">
            모다아울렛 지점
        </div>
        
        <!-- 접기/펼치기 토글 버튼 -->
        <div style="padding: 8px; cursor: pointer; user-select: none; font-weight: bold; font-size: 0.85rem; background-color: var(--wiki-gray-bg, #f9f9f9);" 
             onclick="const content = document.getElementById('moda-nav-content'); 
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
        
        <!-- 지점 목록 내용 -->
        <div id="moda-nav-content" style="border-top: 1px solid var(--wiki-border, #ccc); padding: 12px; line-height: 1.8;">
            <a href="모다아울렛_대구점.html" class="wiki-link" style="color: var(--wiki-link, #0022AA); text-decoration: none;">대구점</a> |
            <a href="모다아울렛_대전점.html" class="wiki-link" style="color: var(--wiki-link, #0022AA); text-decoration: none;">대전점</a> |
            <a href="모다아울렛_곤지암점.html" class="wiki-link" style="color: var(--wiki-link, #0022AA); text-decoration: none;">곤지암점</a> |
            <a href="모다아울렛_천안아산점.html" class="wiki-link" style="color: var(--wiki-link, #0022AA); text-decoration: none;">천안아산점</a> |
            <a href="모다아울렛_양산점.html" class="wiki-link" style="color: var(--wiki-link, #0022AA); text-decoration: none;">양산점</a> |
            <a href="모다아울렛_경주포항점.html" class="wiki-link" style="color: var(--wiki-link, #0022AA); text-decoration: none;">경주포항점</a> |
            <a href="모다아울렛_진주점.html" class="wiki-link" style="color: var(--wiki-link, #0022AA); text-decoration: none;">진주점</a> |
            <a href="모다아울렛_오산동탄점.html" class="wiki-link" style="color: var(--wiki-link, #0022AA); text-decoration: none;">오산동탄점</a> |
            <a href="모다아울렛_울산점.html" class="wiki-link" style="color: var(--wiki-link, #0022AA); text-decoration: none;">울산점</a> |
            <a href="모다아울렛_김천구미점.html" class="wiki-link" style="color: var(--wiki-link, #0022AA); text-decoration: none;">김천구미점</a> |
            <a href="모다아울렛_행담도서평택점.html" class="wiki-link" style="color: var(--wiki-link, #0022AA); text-decoration: none;">행담도서평택점</a> |
            <a href="모다아울렛_인천점.html" class="wiki-link" style="color: var(--wiki-link, #0022AA); text-decoration: none;">인천점</a> |
            <br>
            <a href="모다아울렛_순천점.html" class="wiki-link" style="color: var(--wiki-link, #0022AA); text-decoration: none;">순천점</a> |
            <a href="모다아울렛_구리남양주점.html" class="wiki-link" style="color: var(--wiki-link, #0022AA); text-decoration: none;">구리남양주점</a> |
            <a href="모다아울렛_부평점.html" class="wiki-link" style="color: var(--wiki-link, #0022AA); text-decoration: none;">부평점</a> |
            <a href="모다아울렛_충주점.html" class="wiki-link" style="color: var(--wiki-link, #0022AA); text-decoration: none;">충주점</a> |
            <a href="모다아울렛_전주김제점.html" class="wiki-link" style="color: var(--wiki-link, #0022AA); text-decoration: none;">전주김제점</a> |
            <a href="모다아울렛_시흥점.html" class="wiki-link" style="color: var(--wiki-link, #0022AA); text-decoration: none;">시흥점</a> |
            <a href="모다아울렛_춘천점.html" class="wiki-link" style="color: var(--wiki-link, #0022AA); text-decoration: none;">춘천점</a> |
            <a href="모다아울렛_고해점.html" class="wiki-link" style="color: var(--wiki-link, #0022AA); text-decoration: none; font-weight: bold;">고해점</a>
        </div>
        
    </div>
    `;

    container.innerHTML = templateHTML;
});