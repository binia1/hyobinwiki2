document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('kcg-nav-template');
    if (!container) return;

    // 테마 하드코딩 색상 (해양경찰 네이비 블루)
    const mainColor = '#142354';
    const borderColor = '#c0c0c0';
    const linkColor = '#0275d8'; // 파란색 하이퍼링크

    const templateHTML = `
        <div style="border: 2px solid ${mainColor}; border-radius: 6px; overflow: hidden; margin: 30px 0; font-family: 'Noto Sans KR', sans-serif; font-size: 0.9rem; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
            
            <!-- 헤더 영역 -->
            <div style="background-color: ${mainColor}; color: #ffffff; text-align: center; padding: 15px 10px 10px 10px; position: relative;">
                <div class="flex flex-col items-center justify-center gap-2">
                    <!-- 로고 이미지 (엑스박스 방지 처리) -->
                    <img src="이미지/해양경찰.webp" alt="해양경찰 마크" style="height: 40px; object-fit: contain;" onerror="this.style.display='none'">
                    <span style="font-size: 1.15rem; font-weight: 900; letter-spacing: -0.5px;">대한민국 해양경찰</span>
                </div>
                
                <!-- 접기/펼치기 토글 버튼 -->
                <button onclick="
                    const body = document.getElementById('kcg-nav-body'); 
                    if(body.style.display === 'none') {
                        body.style.display = 'table-row-group'; 
                        this.innerText = '[ 접기 ]';
                    } else {
                        body.style.display = 'none'; 
                        this.innerText = '[ 펼치기 ]';
                    }
                " style="background: transparent; border: none; color: #ffffff; font-size: 0.85rem; cursor: pointer; margin-top: 8px; font-weight: 500; opacity: 0.8; transition: opacity 0.2s;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.8'">
                    [ 접기 ]
                </button>
            </div>
            
            <!-- 테이블 영역 -->
            <table class="w-full border-collapse text-center bg-white" style="table-layout: fixed;">
                <colgroup>
                    <col style="width: 22%;">
                    <col style="width: 78%;">
                </colgroup>
                <tbody id="kcg-nav-body">
                    <tr>
                        <th style="background-color: #888888; color: #ffffff; border: 1px solid ${borderColor}; padding: 10px; font-weight: 700; word-break: keep-all;">해양경찰위원회</th>
                        <td style="border: 1px solid ${borderColor}; padding: 10px; color: #555;">-</td>
                    </tr>
                    <tr>
                        <th style="background-color: ${mainColor}; color: #ffffff; border: 1px solid ${borderColor}; padding: 10px; font-weight: 700; word-break: keep-all;">해양경찰청</th>
                        <td class="text-left" style="border: 1px solid ${borderColor}; padding: 10px 15px; word-break: keep-all; line-height: 1.8;">
                            <a href="해양경찰교육원.html" class="hover:underline font-medium" style="color: ${linkColor};">해양경찰교육원</a> · 
                            <a href="중앙해양특수구조단.html" class="hover:underline font-medium" style="color: ${linkColor};">중앙해양특수구조단</a> · 
                            <a href="해양경찰정비창.html" class="hover:underline font-medium" style="color: ${linkColor};">해양경찰정비창</a>
                        </td>
                    </tr>
                    <tr>
                        <th style="background-color: ${mainColor}; color: #ffffff; border: 1px solid ${borderColor}; padding: 10px; font-weight: 700; word-break: keep-all;">지방해양경찰청</th>
                        <td class="text-left" style="border: 1px solid ${borderColor}; padding: 10px 15px; word-break: keep-all; line-height: 1.8;">
                            <a href="중부지방해양경찰청.html" class="hover:underline font-medium" style="color: ${linkColor};">중부지방해양경찰청</a> · 
                            <a href="서남지방해양경찰청.html" class="hover:underline font-bold" style="color: ${linkColor};">서남지방해양경찰청</a> · 
                            <a href="남해지방해양경찰청.html" class="hover:underline font-medium" style="color: ${linkColor};">남해지방해양경찰청</a> · 
                            <a href="동해지방해양경찰청.html" class="hover:underline font-medium" style="color: ${linkColor};">동해지방해양경찰청</a> · 
                            <a href="제주지방해양경찰청.html" class="hover:underline font-medium" style="color: ${linkColor};">제주지방해양경찰청</a>
                        </td>
                    </tr>
                    <tr>
                        <th style="background-color: ${mainColor}; color: #ffffff; border: 1px solid ${borderColor}; padding: 10px; font-weight: 700; word-break: keep-all;">기능 조직</th>
                        <td class="text-left" style="border: 1px solid ${borderColor}; padding: 10px 15px; word-break: keep-all; line-height: 1.8;">
                            <a href="VTS.html" class="hover:underline font-medium" style="color: ${linkColor};">해상교통관제센터</a> · 
                            <a href="해양경찰특공대.html" class="hover:underline font-medium" style="color: ${linkColor};">해양경찰특공대</a> · 
                            <a href="해양경찰구조대.html" class="hover:underline font-medium" style="color: ${linkColor};">해양경찰구조대</a> · 
                            <a href="서해5도특별경비단.html" class="hover:underline font-medium" style="color: ${linkColor};">서해5도특별경비단</a> · 
                            <a href="광역수사대.html" class="hover:underline font-medium" style="color: ${linkColor};">광역수사대</a> · 
                            <a href="과학수사대.html" class="hover:underline font-medium" style="color: ${linkColor};">과학수사대</a> · 
                            <a href="국제범죄수사대.html" class="hover:underline font-medium" style="color: ${linkColor};">국제범죄수사대</a> · 
                            <a href="마약범죄수사대.html" class="hover:underline font-medium" style="color: ${linkColor};">마약수사대</a> · 
                            <a href="해양오염방제과.html" class="hover:underline font-medium" style="color: ${linkColor};">해양오염방제과</a> · 
                            <a href="특수기동대.html" class="hover:underline font-medium" style="color: ${linkColor};">특수기동대</a> · 
                            <a href="경찰항공대.html" class="hover:underline font-medium" style="color: ${linkColor};">경찰항공대</a> · 
                            <a href="해상교통경찰.html" class="hover:underline font-medium" style="color: ${linkColor};">해상교통경찰</a> · 
                            <a href="해양경찰청_수사국.html" class="hover:underline font-medium" style="color: ${linkColor};">수사국</a>, 
                            <a href="해양경찰청_정보외사국.html" class="hover:underline font-medium" style="color: ${linkColor};">정보외사국</a> · 
                            <a href="수사심의위원회.html" class="hover:underline font-medium" style="color: ${linkColor};">수사심의위원회</a> · 
                            <a href="중앙구조본부.html" class="hover:underline font-medium" style="color: ${linkColor};">중앙구조본부</a>
                        </td>
                    </tr>
                    
                    <!-- 푸터 참조 (colspan 활용) -->
                    <tr>
                        <td colspan="2" class="bg-gray-50" style="border: 1px solid ${borderColor}; padding: 12px; font-size: 0.85rem; color: #555;">
                            <strong style="margin-right: 5px;">cf.</strong> 
                            <a href="검찰청.html" class="hover:underline" style="color: ${linkColor};">검찰청</a> · 
                            <a href="경찰청.html" class="hover:underline" style="color: ${linkColor};">경찰청</a> · 
                            <a href="소방청.html" class="hover:underline" style="color: ${linkColor};">소방청</a> · 
                            <a href="군_형사사법기관.html" class="hover:underline" style="color: ${linkColor};">군 형사사법기관</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;
    
    container.innerHTML = templateHTML;
});