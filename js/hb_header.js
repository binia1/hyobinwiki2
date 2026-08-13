/**
 * 파일명: js/hb_header.js
 * 설명: 효빈위키 공통 상단 네비게이션 바
 */

// 🚨 주의: 여기에 절대 window.handleSearch 를 직접 만들지 마세요!
// 선생님이 만드신 hb_wiki_core.js의 performSmartMove가 알아서 완벽하게 처리해 줍니다!

(function() {
    var headerContainer = document.getElementById("hb-header-container");
    if (headerContainer) {
        headerContainer.innerHTML = `
<nav class="font-sans bg-[#7777AA] text-white p-3 flex justify-between items-center shadow-md sticky top-0 z-50">
<div class="flex items-center gap-2">
<div class="nav-logo-box">H</div>
<a class="font-bold text-xl cursor-pointer no-underline text-white" href="index.html">HyobinWiki</a>
<div class="hidden md:flex gap-3 text-sm opacity-90 ml-4">
<a class="hover:underline font-bold text-white no-underline" href="index.html">대문</a>
<a class="hover:underline text-white no-underline" href="최근_변경.html">최근 변경</a>
<a class="hover:underline text-white no-underline" href="최근_토론.html">최근 토론</a>
</div>
</div>
<div class="flex flex-col items-end gap-1">
<div class="flex items-center gap-2">
<div class="hidden lg:flex items-center gap-1 mr-2">
<a class="bg-[#666699] hover:bg-[#555588] text-white text-xs px-2 py-1 rounded transition-colors no-underline font-bold" href="편집요청.html">편집요청</a>
<a class="bg-[#666699] hover:bg-[#555588] text-white text-xs px-2 py-1 rounded transition-colors no-underline font-bold" href="최근_토론.html">토론</a>
<a class="bg-[#666699] hover:bg-[#555588] text-white text-xs px-2 py-1 rounded transition-colors no-underline font-bold" href="역사.html">역사</a>
<a class="bg-[#666699] hover:bg-[#555588] text-yellow-300 text-xs px-2 py-1 rounded transition-colors no-underline font-bold" href="즐겨찾기.html" title="즐겨찾기">★</a>
<a class="bg-[#666699] hover:bg-[#555588] text-white text-xs px-2 py-1 rounded transition-colors no-underline font-bold flex items-center gap-1" href="더보기.html">더보기 <span class="text-[9px]">▼</span></a>
</div>
<!-- core.js의 자동완성(attachAutocomplete)이 완벽하게 작동하도록 랩핑 씌움 -->
<div id="hb-header-search-wrap" style="position: relative; display: flex; align-items: center;">
    <input class="p-1 px-3 rounded text-black text-sm focus:outline-none border-none shadow-inner w-32 md:w-48" id="headerSearchInput" onkeypress="if(event.keyCode==13) { handleSearch('headerSearchInput'); }" placeholder="문서 검색" type="text"/>
    <button class="bg-[#555588] p-1 px-3 rounded text-xs transition-colors shadow-inner font-bold ml-1" onclick="handleSearch('headerSearchInput')">🔍</button>
</div>
</div>
<div class="flex gap-1" id="auth-buttons">
<button class="bg-[#666699] hover:bg-[#555588] text-white text-xs px-2 py-0.5 rounded transition-colors" id="btn-login" onclick="toggleModal('loginModal')">로그인</button>
<button class="bg-[#666699] hover:bg-[#555588] text-white text-xs px-2 py-0.5 rounded transition-colors" onclick="toggleModal('settingsModal')">설정</button>
</div>
</div>
</nav>
        `;
    }
})();