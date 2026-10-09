document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("koroad-test-centers-nav");
    if (!container) return;

    // 한국도로교통공단 메인 컬러 (관공서 스타일)
    const primaryGreen = "#0eb04b";
    const primaryBlue = "#1D3A8E";
    const linkColor = "#0275d8";
    const borderColor = "#d1d5db";

    const htmlTemplate = `
        <div class="w-full mb-5 font-sans" style="border: 2px solid ${primaryGreen}; border-radius: 4px; overflow: hidden; background-color: #ffffff;">
            <!-- 헤더 영역 -->
            <div class="flex justify-center items-center relative p-3 bg-white" style="border-bottom: 1px solid ${borderColor};">
                <img src="이미지/svg/한국도로교통공단_로고.svg" alt="한국도로교통공단" class="h-6 mr-2" onerror="this.style.display='none'">
                <span class="text-lg font-bold" style="color: ${primaryGreen};">운전면허시험장</span>
                <button onclick="const body = document.getElementById('koroad-test-centers-body'); body.style.display = body.style.display === 'none' ? 'table-row-group' : 'none';" 
                        class="absolute right-3 px-2 py-1 text-xs font-bold rounded text-white transition-colors" 
                        style="background-color: ${primaryGreen}; border: 1px solid #0b933e; cursor: pointer;">
                    접기/펼치기
                </button>
            </div>

            <!-- 테이블 영역 (가로 7분할) -->
            <table class="w-full text-center text-sm border-collapse" style="table-layout: fixed; word-break: keep-all;">
                <colgroup>
                    <col style="width: 14.28%;">
                    <col style="width: 14.28%;">
                    <col style="width: 14.28%;">
                    <col style="width: 14.28%;">
                    <col style="width: 14.28%;">
                    <col style="width: 14.28%;">
                    <col style="width: 14.28%;">
                </colgroup>
                <tbody id="koroad-test-centers-body">
                    
                    <!-- 1열: 서울, 전남광주 -->
                    <tr>
                        <th colspan="4" class="p-2 font-bold text-white" style="background-color: ${primaryGreen}; border: 1px solid ${borderColor};">서울특별시</th>
                        <th colspan="3" class="p-2 font-bold text-white" style="background-color: ${primaryGreen}; border: 1px solid ${borderColor};">전남광주통합특별시</th>
                    </tr>
                    <tr>
                        <td class="p-2" style="border: 1px solid ${borderColor};"><a href="도봉운전면허시험장.html" style="color: ${linkColor}; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">도봉</a></td>
                        <td class="p-2" style="border: 1px solid ${borderColor};"><a href="강남운전면허시험장.html" style="color: ${linkColor}; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">강남</a></td>
                        <td class="p-2" style="border: 1px solid ${borderColor};"><a href="서부운전면허시험장.html" style="color: ${linkColor}; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">서부</a></td>
                        <td class="p-2" style="border: 1px solid ${borderColor};"><a href="강서운전면허시험장.html" style="color: ${linkColor}; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">강서</a></td>
                        <td class="p-2" style="border: 1px solid ${borderColor};"><a href="전남운전면허시험장.html" style="color: ${linkColor}; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">전남</a></td>
                        <td class="p-2" style="border: 1px solid ${borderColor};"><a href="광양운전면허시험장.html" style="color: ${linkColor}; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">광양</a></td>
                        <td class="p-2" style="border: 1px solid ${borderColor};"><a href="광주운전면허시험장.html" style="color: ${linkColor}; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">광주</a></td>
                    </tr>

                    <!-- 2열: 부산, 대구, 인천, 대전, 울산, 세종 -->
                    <tr>
                        <th colspan="2" class="p-2 font-bold text-white" style="background-color: ${primaryGreen}; border: 1px solid ${borderColor};">부산광역시</th>
                        <th colspan="1" class="p-2 font-bold text-white" style="background-color: ${primaryGreen}; border: 1px solid ${borderColor};">대구광역시</th>
                        <th colspan="1" class="p-2 font-bold text-white" style="background-color: ${primaryGreen}; border: 1px solid ${borderColor};">인천광역시</th>
                        <th colspan="1" class="p-2 font-bold text-white" style="background-color: ${primaryGreen}; border: 1px solid ${borderColor};">대전광역시</th>
                        <th colspan="1" class="p-2 font-bold text-white" style="background-color: ${primaryGreen}; border: 1px solid ${borderColor};">울산광역시</th>
                        <th colspan="1" class="p-2 font-bold text-white" style="background-color: ${primaryGreen}; border: 1px solid ${borderColor};">세종특별자치시</th>
                    </tr>
                    <tr>
                        <td class="p-2" style="border: 1px solid ${borderColor};"><a href="북부운전면허시험장.html" style="color: ${linkColor}; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">북부</a></td>
                        <td class="p-2" style="border: 1px solid ${borderColor};"><a href="남부운전면허시험장.html" style="color: ${linkColor}; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">남부</a></td>
                        <td class="p-2" style="border: 1px solid ${borderColor};"><a href="대구운전면허시험장.html" style="color: ${linkColor}; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">대구</a></td>
                        <td class="p-2" style="border: 1px solid ${borderColor};"><a href="인천운전면허시험장.html" style="color: ${linkColor}; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">인천</a></td>
                        <td class="p-2" style="border: 1px solid ${borderColor};"><a href="대전운전면허시험장.html" style="color: ${linkColor}; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">대전</a></td>
                        <td class="p-2" style="border: 1px solid ${borderColor};"><a href="울산운전면허시험장.html" style="color: ${linkColor}; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">울산</a></td>
                        <td class="p-2" style="border: 1px solid ${borderColor}; color: #888;">-</td>
                    </tr>

                    <!-- 3열: 경기, 충남, 충북, 경남 -->
                    <tr>
                        <th colspan="3" class="p-2 font-bold text-white" style="background-color: ${primaryBlue}; border: 1px solid ${borderColor};">경기도</th>
                        <th colspan="1" class="p-2 font-bold text-white" style="background-color: ${primaryBlue}; border: 1px solid ${borderColor};">충청남도</th>
                        <th colspan="2" class="p-2 font-bold text-white" style="background-color: ${primaryBlue}; border: 1px solid ${borderColor};">충청북도</th>
                        <th colspan="1" class="p-2 font-bold text-white" style="background-color: ${primaryBlue}; border: 1px solid ${borderColor};">경상남도</th>
                    </tr>
                    <tr>
                        <td class="p-2" style="border: 1px solid ${borderColor};"><a href="의정부운전면허시험장.html" style="color: ${linkColor}; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">의정부</a></td>
                        <td class="p-2" style="border: 1px solid ${borderColor};"><a href="용인운전면허시험장.html" style="color: ${linkColor}; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">용인</a></td>
                        <td class="p-2" style="border: 1px solid ${borderColor};"><a href="안산운전면허시험장.html" style="color: ${linkColor}; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">안산</a></td>
                        <td class="p-2" style="border: 1px solid ${borderColor};"><a href="예산운전면허시험장.html" style="color: ${linkColor}; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">예산</a></td>
                        <td class="p-2" style="border: 1px solid ${borderColor};"><a href="청주운전면허시험장.html" style="color: ${linkColor}; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">청주</a></td>
                        <td class="p-2" style="border: 1px solid ${borderColor};"><a href="충주운전면허시험장.html" style="color: ${linkColor}; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">충주</a></td>
                        <td class="p-2" style="border: 1px solid ${borderColor};"><a href="마산운전면허시험장.html" style="color: ${linkColor}; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">마산</a></td>
                    </tr>

                    <!-- 4열: 경북, 전북, 강원 -->
                    <tr>
                        <th colspan="2" class="p-2 font-bold text-white" style="background-color: ${primaryBlue}; border: 1px solid ${borderColor};">경상북도</th>
                        <th colspan="1" class="p-2 font-bold text-white" style="background-color: ${primaryBlue}; border: 1px solid ${borderColor};">전북특별자치도</th>
                        <th colspan="4" class="p-2 font-bold text-white" style="background-color: ${primaryBlue}; border: 1px solid ${borderColor};">강원특별자치도</th>
                    </tr>
                    <tr>
                        <td class="p-2" style="border: 1px solid ${borderColor};"><a href="포항운전면허시험장.html" style="color: ${linkColor}; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">포항</a></td>
                        <td class="p-2" style="border: 1px solid ${borderColor};"><a href="문경운전면허시험장.html" style="color: ${linkColor}; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">문경</a></td>
                        <td class="p-2" style="border: 1px solid ${borderColor};"><a href="전북운전면허시험장.html" style="color: ${linkColor}; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">전북</a></td>
                        <td class="p-2" style="border: 1px solid ${borderColor};"><a href="강릉운전면허시험장.html" style="color: ${linkColor}; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">강릉</a></td>
                        <td class="p-2" style="border: 1px solid ${borderColor};"><a href="원주운전면허시험장.html" style="color: ${linkColor}; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">원주</a></td>
                        <td class="p-2" style="border: 1px solid ${borderColor};"><a href="춘천운전면허시험장.html" style="color: ${linkColor}; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">춘천</a></td>
                        <td class="p-2" style="border: 1px solid ${borderColor};"><a href="태백운전면허시험장.html" style="color: ${linkColor}; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">태백</a></td>
                    </tr>

                    <!-- 5열: 제주 및 효빈 세계관 지역 (제주, 효빈, 덕빈북, 덕빈남) -->
                    <tr>
                        <th colspan="2" class="p-2 font-bold text-white" style="background-color: ${primaryBlue}; border: 1px solid ${borderColor};">제주특별자치도</th>
                        <th colspan="2" class="p-2 font-bold text-white" style="background-color: ${primaryBlue}; border: 1px solid ${borderColor};">효빈광역시</th>
                        <th colspan="2" class="p-2 font-bold text-white" style="background-color: ${primaryBlue}; border: 1px solid ${borderColor};">덕빈북도</th>
                        <th colspan="1" class="p-2 font-bold text-white" style="background-color: ${primaryBlue}; border: 1px solid ${borderColor};">덕빈남도</th>
                    </tr>
                    <tr>
                        <td colspan="2" class="p-2" style="border: 1px solid ${borderColor};"><a href="제주운전면허시험장.html" style="color: ${linkColor}; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">제주</a></td>
                        <td colspan="2" class="p-2" style="border: 1px solid ${borderColor};"><a href="효빈운전면허시험장.html" style="color: ${linkColor}; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">효빈</a></td>
                        <td class="p-2" style="border: 1px solid ${borderColor};"><a href="빈주운전면허시험장.html" style="color: ${linkColor}; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">빈주</a></td>
                        <td class="p-2" style="border: 1px solid ${borderColor};"><a href="낭원운전면허시험장.html" style="color: ${linkColor}; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">낭원</a></td>
                        <td class="p-2" style="border: 1px solid ${borderColor};"><a href="덕남운전면허시험장.html" style="color: ${linkColor}; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">덕남</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;

    container.innerHTML = htmlTemplate;
});