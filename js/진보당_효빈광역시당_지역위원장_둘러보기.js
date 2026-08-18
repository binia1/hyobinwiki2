document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("jinbo-hyobin-nav-container");
    
    if (container) {
        container.innerHTML = `
        <div style="margin-bottom: 20px; font-family: 'Noto Sans KR', sans-serif;">
            <div style="border: 2px solid #D6001C; border-radius: 2px; overflow: hidden; background-color: white;">
                
                <!-- 상단 헤더 (빨간색) -->
                <div style="background-color: #D6001C; text-align: center; padding: 12px;">
                    <span style="display:inline-flex; align-items:center; justify-content:center; gap:6px;">
                        <!-- 진보당 말풍선 로고 (SVG 직접 구현) -->
                        <a class="wiki-link" href="진보당.html" style="color:white; display:flex; align-items:center; text-decoration:none;">
                            <svg width="22" height="22" viewBox="0 0 100 100" fill="white" xmlns="http://www.w3.org/2000/svg">
                                <path d="M 15 15 H 90 V 80 H 35 L 10 95 L 25 80 H 15 Z" />
                            </svg>
                        </a>
                        <a class="wiki-link" href="진보당.html" style="color:white; font-weight:900; font-size: 1.15rem; text-decoration: none; letter-spacing: -0.5px;" class="hover:underline">
                            진보당 효빈광역시당 지역위원장
                        </a>
                    </span>
                </div>
                
                <!-- 펼치기/접기 바 (빨간색) -->
                <details open style="margin: 0;">
                    <summary style="background-color: #D6001C; color: white; text-align: center; padding: 6px; cursor: pointer; font-size: 0.9rem; font-weight: bold; list-style: none; border-top: 1px solid rgba(255,255,255,0.3);">
                        [ 펼치기 · 접기 ]
                    </summary>
                    
                    <div style="padding: 0;">
                        <!-- 위원장 목록 테이블 -->
                        <table style="width: 100%; text-align: center; border-collapse: collapse; table-layout: fixed;">
                            <!-- 시당위원장 -->
                            <tr>
                                <td colspan="3" style="background-color: #CDE8F9; padding: 8px; border: 1px solid #ddd; font-weight: bold; color: #D6001C;">시당위원장</td>
                            </tr>
                            <tr>
                                <td colspan="3" style="padding: 10px 8px; border: 1px solid #ddd; background-color: #fff;">
                                    <a href="지소현.html" style="color: #0055AA; text-decoration: none; font-weight: 500;" class="hover:underline">지소현</a>
                                </td>
                            </tr>
                            
                            <!-- 1열 -->
                            <tr>
                                <td style="background-color: #CDE8F9; padding: 8px; border: 1px solid #ddd; font-weight: bold; color: #D6001C; width: 33.33%;">중</td>
                                <td style="background-color: #CDE8F9; padding: 8px; border: 1px solid #ddd; font-weight: bold; color: #D6001C; width: 33.33%;">동</td>
                                <td style="background-color: #CDE8F9; padding: 8px; border: 1px solid #ddd; font-weight: bold; color: #D6001C; width: 33.33%;">서</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 8px; border: 1px solid #ddd; background-color: #fff;"><a href="고건현.html" style="color: #0055AA; text-decoration: none; font-weight: 500;" class="hover:underline">고건현</a></td>
                                <td style="padding: 10px 8px; border: 1px solid #ddd; background-color: #fff;"><a href="송은천.html" style="color: #0055AA; text-decoration: none; font-weight: 500;" class="hover:underline">송은천</a></td>
                                <td style="padding: 10px 8px; border: 1px solid #ddd; background-color: #fff;"><a href="임지운.html" style="color: #0055AA; text-decoration: none; font-weight: 500;" class="hover:underline">임지운</a></td>
                            </tr>
                            
                            <!-- 2열 -->
                            <tr>
                                <td style="background-color: #CDE8F9; padding: 8px; border: 1px solid #ddd; font-weight: bold; color: #D6001C;">남</td>
                                <td style="background-color: #CDE8F9; padding: 8px; border: 1px solid #ddd; font-weight: bold; color: #D6001C;">북</td>
                                <td style="background-color: #CDE8F9; padding: 8px; border: 1px solid #ddd; font-weight: bold; color: #D6001C;">안천</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 8px; border: 1px solid #ddd; background-color: #FFFF99;"><a href="신원임.html" style="color: #0055AA; text-decoration: none; font-weight: 500;" class="hover:underline">신원임</a></td>
                                <td style="padding: 10px 8px; border: 1px solid #ddd; background-color: #fff; line-height: 1.6;">
                                    <a href="박성임.html" style="color: #0055AA; text-decoration: none; font-weight: 500;" class="hover:underline">박성임</a><br>
                                    <a href="노태훈.html" style="color: #0055AA; text-decoration: none; font-weight: 500;" class="hover:underline">노태훈</a>
                                </td>
                                <td style="padding: 10px 8px; border: 1px solid #ddd; background-color: #fff;"><a href="김예인.html" style="color: #0055AA; text-decoration: none; font-weight: 500;" class="hover:underline">김예인</a></td>
                            </tr>
                            
                            <!-- 3열 -->
                            <tr>
                                <td style="background-color: #CDE8F9; padding: 8px; border: 1px solid #ddd; font-weight: bold; color: #D6001C;">청엽</td>
                                <td style="background-color: #CDE8F9; padding: 8px; border: 1px solid #ddd; font-weight: bold; color: #D6001C;">창전</td>
                                <td style="background-color: #CDE8F9; padding: 8px; border: 1px solid #ddd; font-weight: bold; color: #D6001C;">탄성</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 8px; border: 1px solid #ddd; background-color: #fff; line-height: 1.6;">
                                    <a href="우은미.html" style="color: #0055AA; text-decoration: none; font-weight: 500;" class="hover:underline">우은미</a><br>
                                    <a href="서규철.html" style="color: #0055AA; text-decoration: none; font-weight: 500;" class="hover:underline">서규철</a>
                                </td>
                                <td style="padding: 10px 8px; border: 1px solid #ddd; background-color: #fff;"><a href="윤혜주.html" style="color: #0055AA; text-decoration: none; font-weight: 500;" class="hover:underline">윤혜주</a></td>
                                <td style="padding: 10px 8px; border: 1px solid #ddd; background-color: #fff;"><a href="마연주.html" style="color: #0055AA; text-decoration: none; font-weight: 500;" class="hover:underline">마연주</a></td>
                            </tr>
                        </table>

                        <!-- 하단 푸터 (타 정당 및 지역) -->
                        <div style="background-color: #D6001C; padding: 12px; text-align: center; line-height: 1.6;">
                            <div style="color: white; font-size: 0.85rem; font-weight: bold; margin-bottom: 4px;">
                                더불어민주당 · 국민의힘 · 조국혁신당 · 새미래민주당 · 정의당
                            </div>
                            <div style="color: white; font-size: 0.8rem;">
                                서울 · 전남광주 · 부산 · 대구 · 인천 · 대전 · 경기 · 강원 · 충북 · 충남 · 전북 · 경북 · 경남 · 제주 · 효빈 · 덕북 · 덕남
                            </div>
                        </div>
                    </div>
                </details>
            </div>
        </div>
        `;
    }
});