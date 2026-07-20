import glob
import os
import re

# 1. 완벽하게 제외할 27개 문서 목록 (.\ 기호가 있든 없든 파일명으로 정확히 감지)
EXCLUDED_FILES = {
    "HJ몰_공식홈페이지.html",
    "profile.html",
    "개발문의.html",
    "공지.html",
    "그루터기.html",
    "다중계정검사.html",
    "문의.html",
    "신고.html",
    "인스타그램 계정전환.html",
    "인스타그램 내활동.html",
    "인스타그램 릴스.html",
    "인스타그램 만들기.html",
    "인스타그램 메시지.html",
    "인스타그램 알림.html",
    "인스타그램 탐색.html",
    "제재소명.html",
    "토론문의.html",
    "통합_블로그.html",
    "통합_유튜브.html",
    "통합_유튜브_홈.html",
    "효빈광역시청 블로그.html",
    "효빈광역시청 엑스.html",
    "효빈광역시청 유튜브.html",
    "효빈광역시청 인스타그램.html",
    "효빈광역시청 페이스북.html",
    "효빈블라인드.html",
    "효빈시버스페이지.html",
}

# 2. 요청하신 완벽한 표준 NAV HTML 코드
NEW_NAV_HTML = """<nav class="bg-[#7777AA] text-white p-3 flex justify-between items-center shadow-md sticky top-0 z-50">
    <div class="flex items-center gap-2">
        <div class="nav-logo-box">H</div>
        <a href="index.html" class="font-bold text-xl cursor-pointer no-underline text-white">HyobinWiki</a>
        <div class="hidden md:flex gap-3 text-sm opacity-90 ml-4">
            <a href="index.html" class="hover:underline font-bold text-white no-underline">대문</a>
            <a href="최근_변경.html" class="hover:underline text-white no-underline">최근 변경</a>
            <a href="최근_토론.html" class="hover:underline text-white no-underline">최근 토론</a>
        </div>
    </div>
    <div class="flex flex-col items-end gap-1">
        <div class="flex items-center gap-2">
            <div class="hidden lg:flex items-center gap-1 mr-2">
                <a href="편집요청.html" class="bg-[#666699] hover:bg-[#555588] text-white text-xs px-2 py-1 rounded transition-colors no-underline font-bold">편집요청</a>
                <a href="최근_토론.html" class="bg-[#666699] hover:bg-[#555588] text-white text-xs px-2 py-1 rounded transition-colors no-underline font-bold">토론</a>
                <a href="역사.html" class="bg-[#666699] hover:bg-[#555588] text-white text-xs px-2 py-1 rounded transition-colors no-underline font-bold">역사</a>
                <a href="즐겨찾기.html" class="bg-[#666699] hover:bg-[#555588] text-yellow-300 text-xs px-2 py-1 rounded transition-colors no-underline font-bold" title="즐겨찾기">★</a>
                <a href="더보기.html" class="bg-[#666699] hover:bg-[#555588] text-white text-xs px-2 py-1 rounded transition-colors no-underline font-bold flex items-center gap-1">더보기 <span class="text-[9px]">▼</span></a>
            </div>
            
            <!-- 검색창 (Enter 작동 유지) -->
            <input type="text" id="headerSearchInput" placeholder="문서 검색" class="p-1 px-3 rounded text-black text-sm focus:outline-none border-none shadow-inner w-32 md:w-48" onkeypress="if(event.keyCode==13) { handleSearch('headerSearchInput'); }">
            <button onclick="handleSearch('headerSearchInput')" class="bg-[#555588] p-1 px-3 rounded text-xs transition-colors shadow-inner font-bold">🔍</button>
        </div>
        <div class="flex gap-1" id="auth-buttons">
            <button onclick="toggleModal('loginModal')" class="bg-[#666699] hover:bg-[#555588] text-white text-xs px-2 py-0.5 rounded transition-colors" id="btn-login">로그인</button>
            <button onclick="toggleModal('settingsModal')" class="bg-[#666699] hover:bg-[#555588] text-white text-xs px-2 py-0.5 rounded transition-colors">설정</button>
        </div>
    </div>
</nav>"""


def replace_nav_in_all_files(target_dir="."):
    html_files = glob.glob(
        os.path.join(target_dir, "**/*.html"), recursive=True
    )
    print(f"총 {len(html_files)}개의 HTML 파일 조사를 시작합니다...")

    modified_count = 0
    skipped_count = 0
    missing_nav_count = 0

    # <nav>...</nav> 영역 전체를 찾기 위한 정규표현식 패턴
    nav_pattern = re.compile(r"<nav\b[^>]*>.*?</nav>", re.DOTALL | re.IGNORECASE)

    for file_path in html_files:
        # 경로에서 파일명만 추출 (예: .\HJ몰_공식홈페이지.html -> HJ몰_공식홈페이지.html)
        file_name = os.path.basename(file_path).strip()

        # [핵심 방어 1] 지정하신 27개 제외 목록에 포함된 파일이면 즉시 건너뜀
        if file_name in EXCLUDED_FILES:
            skipped_count += 1
            print(f"🛡️ 보호(제외됨): {file_name}")
            continue

        try:
            with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
                content = f.read()

            # [핵심 방어 2] <nav> 태그가 존재하는 문서만 정확히 1회 교체
            if nav_pattern.search(content):
                new_content = nav_pattern.sub(NEW_NAV_HTML, content, count=1)
                with open(file_path, "w", encoding="utf-8") as f:
                    f.write(new_content)
                modified_count += 1
            else:
                missing_nav_count += 1

        except Exception as e:
            print(f"❌ 파일 처리 오류 ({file_name}): {e}")

    print("\n" + "=" * 50)
    print("🎉 상단 네비게이션 바(NAV) 일괄 교체 작업 완료!")
    print(f"✅ 완벽한 새 코드로 교체된 문서 수 : {modified_count}개")
    print(f"🛡️ 손상 없이 안전하게 제외된 문서 수 : {skipped_count}개")
    if missing_nav_count > 0:
        print(f"⚠️ <nav> 태그가 없어 건너뛴 문서 수 : {missing_nav_count}개")
    print("=" * 50)


if __name__ == "__main__":
    # 스크립트를 실행할 폴더 경로 (현재 폴더에서 실행 시 ".")
    replace_nav_in_all_files(".")