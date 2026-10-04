/**
 * 파일명: js/hb_header.js
 * 설명: 효빈위키 공통 상단 네비게이션 바 (최종 완성본)
 */
(function() {
    function renderHeader() {
        var headerContainer = document.getElementById("hb-header-container");
        if (!headerContainer) return false;

        // 🚨 파란색 꼬리가 남는 원흉 제거! 
        // 억지로 준 배경색과 최소 높이를 없애고 내용물 크기에 딱 맞게 조절합니다.
        headerContainer.className = "w-full sticky top-0 z-50"; 
        headerContainer.style.display = "block";

        headerContainer.innerHTML = `
<nav class="font-sans bg-[#7777AA] text-white p-3 flex justify-between items-center shadow-md w-full">
    <div class="flex items-center gap-2">
        <div class="nav-logo-box text-[#7777AA] bg-white w-7 h-7 rounded flex items-center justify-center font-black text-lg">H</div>
        <a class="font-bold text-xl cursor-pointer no-underline text-white" href="대문.html">HyobinWiki</a>
        <div class="hidden md:flex gap-3 text-sm opacity-90 ml-4">
            <a class="hover:underline font-bold text-white no-underline" href="대문.html">대문</a>
            <a class="hover:underline text-white no-underline" href="최근_변경.html">최근 변경</a>
            <a class="hover:underline text-white no-underline" href="최근_토론.html">최근 토론</a>
            <!-- 내 즐겨찾기 하드코딩 유지 -->
            <a class="hover:underline font-bold text-yellow-300 no-underline ml-2" href="즐겨찾기.html">⭐ 내 즐겨찾기</a>
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
            
            <div id="hb-header-search-wrap" class="relative flex items-center">
                <input class="p-1 px-3 rounded text-black text-sm focus:outline-none border-none shadow-inner w-32 md:w-48" id="headerSearchInput" onkeypress="if(event.keyCode==13) { handleSearch('headerSearchInput'); }" placeholder="문서 검색" type="text"/>
                <button class="bg-[#555588] p-1 px-3 rounded text-xs transition-colors shadow-inner font-bold ml-1" onclick="handleSearch('headerSearchInput')">🔍</button>
            </div>
        </div>
        
        <div class="flex gap-1 mt-1" id="auth-buttons">
            <button class="bg-[#666699] hover:bg-[#555588] text-white text-xs px-2 py-0.5 rounded transition-colors" id="btn-login" onclick="toggleModal('loginModal')">로그인</button>
            <button class="bg-[#666699] hover:bg-[#555588] text-white text-xs px-2 py-0.5 rounded transition-colors" onclick="toggleModal('settingsModal')">설정</button>
        </div>
    </div>
</nav>
        `;
        return true;
    }

    if (!renderHeader()) {
        document.addEventListener("DOMContentLoaded", renderHeader);
    }
})();