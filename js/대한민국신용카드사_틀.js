document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("korea-credit-cards-nav-container");
    if (container) {
        container.innerHTML = `
        <!-- 대한민국의 신용카드사 내비게이션 -->
        <div class="mb-4 border border-[#ccc] shadow-sm" style="font-size: 0.9em;">
            <div class="nav-header">
                <span style="display: inline-flex; width: 27px; padding: 1px; background: rgba(45,47,52,.2); vertical-align: middle; margin-right: 5px;">
                    <img src="이미지/대한민국_국기.webp" alt="태극기" style="width: 100%;" onerror="this.style.display='none'">
                </span>
                <a href="대한민국.html" class="text-black no-underline hover:underline">대한민국</a>의 <a href="신용카드사.html" class="text-black no-underline hover:underline">신용카드사</a>
            </div>
            <div class="bg-[#f9f9f9]">
                <div onclick="toggleNav('card-nav', 'card-label')" class="cursor-pointer text-center p-1 text-xs text-gray-500 hover:bg-gray-200 transition-colors select-none">
                    [<span id="card-label">펼치기</span>]
                </div>
                <div id="card-nav" style="max-height: 0px; overflow: hidden; transition: max-height 0.3s ease-out;">
                    <table class="w-full m-0 border-collapse">
                        <!-- 전문계 카드사 -->
                        <tr><td colspan="2" class="nav-section-title">전문계 카드사</td></tr>
                        <tr>
                            <td class="nav-sub-title">기업계</td>
                            <td class="nav-content">
                                <a href="비씨카드.html" class="wiki-link">비씨카드</a> | <a href="삼성카드.html" class="wiki-link">삼성카드</a> | <a href="현대카드.html" class="wiki-link">현대카드</a> | <a href="롯데카드.html" class="wiki-link">롯데카드</a>
                            </td>
                        </tr>
                        <tr>
                            <td class="nav-sub-title">은행계</td>
                            <td class="nav-content">
                                <a href="우리카드.html" class="wiki-link">우리카드</a> | <a href="하나카드.html" class="wiki-link">하나카드</a> | <a href="신한카드.html" class="wiki-link">신한카드</a> | <a href="KB국민카드.html" class="wiki-link">KB국민카드</a>
                            </td>
                        </tr>
                        <!-- 신용카드업 겸영은행 -->
                        <tr><td colspan="2" class="nav-section-title">신용카드업 겸영은행</td></tr>
                        <tr>
                            <td class="nav-sub-title">시중은행</td>
                            <td class="nav-content">
                                <a href="수협은행_카드.html" class="wiki-link">수협은행</a> | <a href="한국씨티은행_카드.html" class="wiki-link">한국씨티은행</a> | <a href="NH농협카드.html" class="wiki-link">NH농협카드</a> | <a href="IBK기업은행_카드.html" class="wiki-link">IBK기업은행</a> | <a href="iM뱅크_카드.html" class="wiki-link">iM뱅크</a>
                            </td>
                        </tr>
                        <tr>
                            <td class="nav-sub-title">지방은행</td>
                            <td class="nav-content">
                                <a href="BNK부산은행_카드.html" class="wiki-link">BNK부산은행</a> | <a href="광주은행_카드.html" class="wiki-link">광주은행</a> | <a href="제주은행_카드.html" class="wiki-link">제주은행</a> | <a href="전북은행_카드.html" class="wiki-link">전북은행</a> | <a href="BNK경남은행_카드.html" class="wiki-link">BNK경남은행</a> | <strong><a href="효빈은행_카드.html" class="wiki-link">효빈은행</a></strong> | <a href="덕북은행_카드.html" class="wiki-link">덕북은행</a>
                            </td>
                        </tr>
                        <!-- 기타 -->
                        <tr><td colspan="2" class="nav-section-title">기타</td></tr>
                        <tr>
                            <td class="nav-sub-title">기타</td>
                            <td class="nav-content">
                                <a href="갤러리아백화점.html" class="wiki-link">갤러리아</a> | <a href="현대백화점.html" class="wiki-link">현대백화점</a> | <a href="KDB캐피탈.html" class="wiki-link">KDB캐피탈</a>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        `;
    }
});