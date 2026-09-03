document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("savezone-nav-container");
    if (!container) return;

    const templateHTML = `
    <div style="border: 1px solid var(--wiki-border, #ccc); border-top: 2px solid #FF6600; margin: 15px 0; font-size: 0.9rem; text-align: center; background: var(--wiki-bg, #fff); width: 100%;">
        
        <!-- 로고 영역 -->
        <div style="padding: 10px; display: flex; justify-content: center; align-items: center;">
            <img src="이미지/세이브존.webp" alt="세이브존" style="height: 24px; object-fit: contain;" 
                 onerror="this.outerHTML='<span style=\\'color:#1A237E; font-weight:900; font-size:1.2rem; font-style:italic;\\'>SZ <span style=\\'color:#FF6600;\\'>SAVE ZONE</span></span>'">
        </div>
        
        <!-- 접기/펼치기 토글 버튼 -->
        <div style="border-top: 1px solid var(--wiki-border, #ccc); padding: 8px; cursor: pointer; user-select: none; font-weight: bold; font-size: 0.85rem; background-color: var(--wiki-gray-bg, #f9f9f9);" 
             onclick="const content = document.getElementById('savezone-nav-content'); 
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
        <div id="savezone-nav-content" style="border-top: 1px solid var(--wiki-border, #ccc); padding: 12px; line-height: 1.8;">
            <a href="세이브존_화정점.html" class="wiki-link" style="color: var(--wiki-link, #0022AA); text-decoration: none;">화정점</a> |
            <a href="세이브존_울산점.html" class="wiki-link" style="color: var(--wiki-link, #0022AA); text-decoration: none;">울산점</a> |
            <a href="세이브존_노원점.html" class="wiki-link" style="color: var(--wiki-link, #0022AA); text-decoration: none;">노원점</a> |
            <a href="세이브존_성남점.html" class="wiki-link" style="color: var(--wiki-link, #0022AA); text-decoration: none;">성남점</a> |
            <a href="세이브존_광명점.html" class="wiki-link" style="color: var(--wiki-link, #0022AA); text-decoration: none;">광명점</a> |
            <a href="세이브존_대전점.html" class="wiki-link" style="color: var(--wiki-link, #0022AA); text-decoration: none;">대전점</a> |
            <a href="세이브존_해운대점.html" class="wiki-link" style="color: var(--wiki-link, #0022AA); text-decoration: none;">해운대점</a> |
            <a href="세이브존_부천상동점.html" class="wiki-link" style="color: var(--wiki-link, #0022AA); text-decoration: none;">부천상동점</a> |
            <a href="세이브존_전주코아점.html" class="wiki-link" style="color: var(--wiki-link, #0022AA); text-decoration: none;">전주코아점</a> |
            <a href="세이브존_효빈사가당점.html" class="wiki-link" style="color: var(--wiki-link, #0022AA); text-decoration: none; font-weight: bold;">효빈사가당점</a>
        </div>
        
    </div>
    `;

    container.innerHTML = templateHTML;
});