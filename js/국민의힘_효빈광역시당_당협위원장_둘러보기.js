document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("ppp-hyobin-nav-container");
    
    if (container) {
        container.innerHTML = `
        <div style="margin-bottom: 20px; font-family: 'Noto Sans KR', sans-serif;">
            <div style="border: 2px solid #00BFFF; border-radius: 2px; overflow: hidden; background-color: white;">
                
                <!-- 상단 헤더 (빨간색) -->
                <div style="background-color: #E61E2B; text-align: center; padding: 12px;">
                    <span style="display:inline-flex; align-items:center; justify-content:center; gap:6px;">
                        <!-- 국민의힘 당 로고 (좌측 상단, 우측 하단이 잘린 사각형 정확히 구현) -->
                        <a class="wiki-link" href="국민의힘.html" style="color:white; display:flex; align-items:center; text-decoration:none;">
                            <svg width="22" height="22" viewBox="0 0 100 100" fill="white" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10,35 L35,10 H90 V65 L65,90 H10 Z" />
                            </svg>
                        </a>
                        <a class="wiki-link" href="국민의힘.html" style="color:white; font-weight:900; font-size: 1.15rem; text-decoration: none; letter-spacing: -0.5px;" class="hover:underline">
                            국민의힘 효빈광역시당 당협위원장
                        </a>
                    </span>
                </div>
                
                <!-- 펼치기/접기 바 (빨간색) -->
                <details open style="margin: 0;">
                    <summary style="background-color: #E61E2B; color: white; text-align: center; padding: 6px; cursor: pointer; font-size: 0.9rem; font-weight: bold; list-style: none; border-top: 1px solid rgba(255,255,255,0.3);">
                        [ 펼치기 · 접기 ]
                    </summary>
                    
                    <div style="padding: 0;">
                        <!-- 위원장 목록 테이블 -->
                        <table style="width: 100%; text-align: center; border-collapse: collapse; table-layout: fixed;">
                            <!-- 시당위원장 (전체 너비 4칸 차지) -->
                            <tr>
                                <td colspan="4" style="background-color: #00BFFF; padding: 8px; border: 1px solid #ddd; font-weight: bold; color: white;">시당위원장</td>
                            </tr>
                            <tr>
                                <td colspan="4" style="padding: 10px 8px; border: 1px solid #ddd; background-color: #fff;">
                                    <a href="재진숙.html" style="color: #0055AA; text-decoration: none; font-weight: 500;" class="hover:underline">재진숙</a>
                                </td>
                            </tr>
                            
                            <!-- 1열 -->
                            <tr>
                                <td style="background-color: #00BFFF; padding: 8px; border: 1px solid #ddd; font-weight: bold; width: 25%;"><a href="중구-동구.html" style="color: white; text-decoration: none;">중구·동구</a></td>
                                <td style="background-color: #00BFFF; padding: 8px; border: 1px solid #ddd; font-weight: bold; width: 25%;"><a href="서구(선거구).html" style="color: white; text-decoration: none;">서구</a></td>
                                <td style="background-color: #00BFFF; padding: 8px; border: 1px solid #ddd; font-weight: bold; width: 25%;"><a href="남구_갑(효빈).html" style="color: white; text-decoration: none;">남구 갑</a></td>
                                <td style="background-color: #00BFFF; padding: 8px; border: 1px solid #ddd; font-weight: bold; width: 25%;"><a href="남구_을(효빈).html" style="color: white; text-decoration: none;">남구 을</a></td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 8px; border: 1px solid #ddd; background-color: #fff;"><a href="주민우.html" style="color: #0055AA; text-decoration: none; font-weight: 500;" class="hover:underline">주민우</a></td>
                                <td style="padding: 10px 8px; border: 1px solid #ddd; background-color: #fff;"><a href="기규택.html" style="color: #0055AA; text-decoration: none; font-weight: 500;" class="hover:underline">기규택</a></td>
                                <td style="padding: 10px 8px; border: 1px solid #ddd; background-color: #fff;"><a href="권영성.html" style="color: #0055AA; text-decoration: none; font-weight: 500;" class="hover:underline">권영성</a></td>
                                <td style="padding: 10px 8px; border: 1px solid #ddd; background-color: #fff;"><a href="개성동.html" style="color: #0055AA; text-decoration: none; font-weight: 500;" class="hover:underline">개성동</a></td>
                            </tr>
                            <!-- 2열 -->
                            <tr>
                                <td style="background-color: #00BFFF; padding: 8px; border: 1px solid #ddd; font-weight: bold;"><a href="북구_갑(효빈).html" style="color: white; text-decoration: none;">북구 갑</a></td>
                                <td style="background-color: #00BFFF; padding: 8px; border: 1px solid #ddd; font-weight: bold;"><a href="북구_을(효빈).html" style="color: white; text-decoration: none;">북구 을</a></td>
                                <td style="background-color: #00BFFF; padding: 8px; border: 1px solid #ddd; font-weight: bold;"><a href="북구_병(효빈).html" style="color: white; text-decoration: none;">북구 병</a></td>
                                <td style="background-color: #00BFFF; padding: 8px; border: 1px solid #ddd; font-weight: bold;"><a href="안천구_갑.html" style="color: white; text-decoration: none;">안천 갑</a></td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 8px; border: 1px solid #ddd; background-color: #fff;"><a href="신항문.html" style="color: #0055AA; text-decoration: none; font-weight: 500;" class="hover:underline">신항문</a></td>
                                <td style="padding: 10px 8px; border: 1px solid #ddd; background-color: #fff;"><a href="오한길.html" style="color: #0055AA; text-decoration: none; font-weight: 500;" class="hover:underline">오한길</a></td>
                                <td style="padding: 10px 8px; border: 1px solid #ddd; background-color: #fff;"><a href="유줄리.html" style="color: #0055AA; text-decoration: none; font-weight: 500;" class="hover:underline">유줄리</a></td>
                                <td style="padding: 10px 8px; border: 1px solid #ddd; background-color: #fff;"><a href="조경원.html" style="color: #0055AA; text-decoration: none; font-weight: 500;" class="hover:underline">조경원</a></td>
                            </tr>
                            <!-- 3열 -->
                            <tr>
                                <td style="background-color: #00BFFF; padding: 8px; border: 1px solid #ddd; font-weight: bold;"><a href="안천구_을.html" style="color: white; text-decoration: none;">안천 을</a></td>
                                <td style="background-color: #00BFFF; padding: 8px; border: 1px solid #ddd; font-weight: bold;"><a href="청엽구_갑.html" style="color: white; text-decoration: none;">청엽 갑</a></td>
                                <td style="background-color: #00BFFF; padding: 8px; border: 1px solid #ddd; font-weight: bold;"><a href="청엽구_을.html" style="color: white; text-decoration: none;">청엽 을</a></td>
                                <td style="background-color: #00BFFF; padding: 8px; border: 1px solid #ddd; font-weight: bold;"><a href="창전구_갑.html" style="color: white; text-decoration: none;">창전 갑</a></td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 8px; border: 1px solid #ddd; background-color: #fff;"><a href="재진숙.html" style="color: #0055AA; text-decoration: none; font-weight: 500;" class="hover:underline">재진숙</a></td>
                                <td style="padding: 10px 8px; border: 1px solid #ddd; background-color: #fff;"><a href="원춘석.html" style="color: #0055AA; text-decoration: none; font-weight: 500;" class="hover:underline">원춘석</a></td>
                                <td style="padding: 10px 8px; border: 1px solid #ddd; background-color: #fff;"><a href="김상언.html" style="color: #0055AA; text-decoration: none; font-weight: 500;" class="hover:underline">김상언</a></td>
                                <td style="padding: 10px 8px; border: 1px solid #ddd; background-color: #fff;"><a href="윤재훈.html" style="color: #0055AA; text-decoration: none; font-weight: 500;" class="hover:underline">윤재훈</a></td>
                            </tr>
                            <!-- 4열 -->
                            <tr>
                                <td style="background-color: #00BFFF; padding: 8px; border: 1px solid #ddd; font-weight: bold;"><a href="창전구_을.html" style="color: white; text-decoration: none;">창전 을</a></td>
                                <td style="background-color: #00BFFF; padding: 8px; border: 1px solid #ddd; font-weight: bold;"><a href="탄성군(선거구).html" style="color: white; text-decoration: none;">탄성</a></td>
                                <td colspan="2" style="background-color: #fff; border: 1px solid #ddd;"></td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 8px; border: 1px solid #ddd; background-color: #fff;"><a href="성주현.html" style="color: #0055AA; text-decoration: none; font-weight: 500;" class="hover:underline">성주현</a></td>
                                <td style="padding: 10px 8px; border: 1px solid #ddd; background-color: #fff;"><a href="정철규.html" style="color: #0055AA; text-decoration: none; font-weight: 500;" class="hover:underline">정철규</a></td>
                                <td colspan="2" style="background-color: #fff; border: 1px solid #ddd;"></td>
                            </tr>
                        </table>

                        <!-- 하단 푸터 (타 정당 및 지역) -->
                        <div style="background-color: #E61E2B; padding: 12px; text-align: center; line-height: 1.6;">
                            <div style="color: white; font-size: 0.85rem; font-weight: bold; margin-bottom: 4px;">
                                더불어민주당 · 조국혁신당 · 진보당 · 개혁신당 · 새미래민주당 · 정의당
                            </div>
                            <div style="color: white; font-size: 0.8rem;">
                                전남광주 · 부산 · 대구 · 인천 · 대전 · 울산 · 세종 · 경기 · 강원 · 충북 · 충남 · 전북 · 경북 · 경남 · 제주 · 효빈 · 덕북 · 덕남
                            </div>
                        </div>
                    </div>
                </details>
            </div>
        </div>
        `;
    }
});