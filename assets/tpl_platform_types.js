document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("tpl-platform-types");
    if (!container) return;

    // 테마 색상 하드코딩
    const mainColor = "#000000"; // 메인 헤더 및 테두리 (검은색)
    const subColor = "#777777";  // 서브 헤더 배경 (회색)

    const template = `
        <div style="border: 2px solid ${mainColor}; border-radius: 4px; overflow: hidden; margin: 20px 0; font-family: 'Noto Sans KR', sans-serif;">
            
            <!-- 타이틀 헤더 영역 -->
            <div style="background-color: ${mainColor}; color: white; padding: 10px 15px; display: flex; justify-content: center; align-items: center; position: relative;">
                <div class="font-bold text-lg flex items-center gap-2">
                    <span>🚉</span>
                    <span>철도역 승강장의 유형</span>
                </div>
                <!-- 토글 버튼 -->
                <button id="btn-platform" onclick="toggleTable('body-platform', 'btn-platform')" 
                        class="text-xs font-bold text-black bg-white px-2 py-1 rounded hover:bg-gray-200 transition-colors"
                        style="position: absolute; right: 15px;">
                    [접기]
                </button>
            </div>

            <!-- 본문 테이블 영역 -->
            <div id="body-platform" class="bg-white">
                <table class="w-full border-collapse text-center text-sm" style="table-layout: fixed; margin: 0 !important;">
                    <!-- 3분할과 5분할을 모두 균등하게 맞추기 위한 15분할 colgroup -->
                    <colgroup>
                        <col span="15" style="width: 6.666%;">
                    </colgroup>
                    <tbody>
                        <!-- 첫 번째 카테고리: 높이에 따른 구분 -->
                        <tr>
                            <th colspan="15" class="text-white font-bold py-2 border-b border-gray-300" style="background-color: ${subColor};">
                                승강장의 높이에 따른 구분
                            </th>
                        </tr>
                        <tr class="bg-white">
                            <!-- 15 ÷ 3 = 5칸씩 할당 -->
                            <td colspan="5" class="py-2 border border-gray-300">
                                <a href="저상홈.html" class="text-[#0275d8] font-bold hover:underline">저상홈</a>
                            </td>
                            <td colspan="5" class="py-2 border border-gray-300">
                                <a href="중상홈.html" class="text-[#0275d8] font-bold hover:underline">중상홈</a>
                            </td>
                            <td colspan="5" class="py-2 border border-gray-300">
                                <a href="고상홈.html" class="text-[#0275d8] font-bold hover:underline">고상홈</a>
                            </td>
                        </tr>

                        <!-- 두 번째 카테고리: 형태에 따른 구분 -->
                        <tr>
                            <th colspan="15" class="text-white font-bold py-2 border-y border-gray-300" style="background-color: ${subColor};">
                                승강장의 형태에 따른 구분
                            </th>
                        </tr>
                        <tr class="bg-white">
                            <!-- 15 ÷ 5 = 3칸씩 할당 -->
                            <td colspan="3" class="py-2 border border-gray-300">
                                <a href="상대식_승강장.html" class="text-[#0275d8] font-bold hover:underline">상대식</a>
                            </td>
                            <td colspan="3" class="py-2 border border-gray-300">
                                <a href="섬식_승강장.html" class="text-[#0275d8] font-bold hover:underline">섬식</a>
                            </td>
                            <td colspan="3" class="py-2 border border-gray-300">
                                <a href="두단식_승강장.html" class="text-[#0275d8] font-bold hover:underline">두단식</a>
                            </td>
                            <td colspan="3" class="py-2 border border-gray-300">
                                <a href="단선_승강장.html" class="text-[#0275d8] font-bold hover:underline">단선 승강장</a>
                            </td>
                            <td colspan="3" class="py-2 border border-gray-300">
                                <a href="철도역 승강장의 유형.html" class="text-[#0275d8] font-bold hover:underline">기타 형태</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `;

    container.innerHTML = template;

    // 접기/펼치기 토글 함수 전역 등록 (중복 방지)
    if (typeof window.toggleTable !== 'function') {
        window.toggleTable = function(targetId, btnId) {
            const target = document.getElementById(targetId);
            const btn = document.getElementById(btnId);
            if (target.style.display === 'none') {
                target.style.display = 'block';
                btn.innerText = '[접기]';
            } else {
                target.style.display = 'none';
                btn.innerText = '[펼치기]';
            }
        };
    }
});