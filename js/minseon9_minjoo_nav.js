document.addEventListener("DOMContentLoaded", function() {
    
    // 더불어민주당 브랜드 메인 컬러 및 테두리 색상
    const minjooBlue = "#004EA2";
    const linkColor = "#0066cc";
    const borderColor = "#ddd";

    const minjooMinseon9NavHTML = `
    <div style="border: 1px solid ${minjooBlue}; border-radius: 2px; margin-bottom: 20px; box-shadow: 0 1px 2px rgba(0,0,0,0.1); background-color: #fff; overflow: hidden; font-family: sans-serif;">
        
        <!-- 상단 헤더 영역 (더불어민주당 로고 + 타이틀) -->
        <div style="background-color: ${minjooBlue}; padding: 12px 15px; text-align: center; display: flex; align-items: center; justify-content: center; gap: 12px; color: #fff;">
            
            <!-- 더불어민주당 깃발 로고 배지 -->
            <div style="background-color: #fff; color: ${minjooBlue}; padding: 3px 8px; border-radius: 3px; font-weight: 900; font-size: 0.85em; display: inline-flex; flex-direction: column; align-items: center; justify-content: center; line-height: 1.1; box-shadow: 0 1px 3px rgba(0,0,0,0.2);">
                <span style="font-size: 0.65em; letter-spacing: -0.5px; opacity: 0.9;">더불어</span>
                <span style="font-size: 1.05em; font-weight: 900; letter-spacing: -1px;">민주당</span>
            </div>
            
            <!-- 타이틀 텍스트 -->
            <div style="text-align: left; line-height: 1.2;">
                <div style="font-size: 1.15em; font-weight: 900; letter-spacing: -0.5px;">민선 9기 광역자치단체장</div>
            </div>
        </div>

        <!-- 펼치기 / 접기 영역 -->
        <details class="wiki-folder" open="" style="margin: 0; border: none;">
            <summary class="wiki-folder-summary" style="border: none; border-bottom: 1px solid ${borderColor}; background-color: #fff; padding: 8px; font-weight: bold; text-align: center; cursor: pointer; color: #333; list-style: none;">[ 펼치기 · 접기 ]</summary>
            
            <div class="wiki-folder-content" style="padding: 0;">
                <table style="width: 100%; border-collapse: collapse; text-align: center; font-size: 0.9em; table-layout: fixed; margin: 0;">
                    <tbody>
                        
                        <!-- 1행: 강수성, 김상욱, 김영산, 민형배 -->
                        <tr style="background-color: #fff;">
                            <td style="padding: 10px 5px; border: 1px solid ${borderColor}; background-color: #f0f4ff;">
                                <a href="강수성.html" style="color: ${linkColor}; text-decoration: none; font-weight: bold;">강수성</a>
                            </td>
                            <td style="padding: 10px 5px; border: 1px solid ${borderColor};">
                                <a href="김상욱.html" style="color: ${linkColor}; text-decoration: none;">김상욱</a>
                            </td>
                            <td style="padding: 10px 5px; border: 1px solid ${borderColor}; background-color: #f0f4ff;">
                                <a href="김영산.html" style="color: ${linkColor}; text-decoration: none; font-weight: bold;">김영산</a>
                            </td>
                            <td style="padding: 10px 5px; border: 1px solid ${borderColor};">
                                <a href="민형배.html" style="color: ${linkColor}; text-decoration: none;">민형배</a>
                            </td>
                        </tr>

                        <!-- 2행: 박수현, 박찬대, 박효빈, 신용한 -->
                        <tr style="background-color: #fff;">
                            <td style="padding: 10px 5px; border: 1px solid ${borderColor};">
                                <a href="박수현.html" style="color: ${linkColor}; text-decoration: none;">박수현</a>
                            </td>
                            <td style="padding: 10px 5px; border: 1px solid ${borderColor};">
                                <a href="박찬대.html" style="color: ${linkColor}; text-decoration: none;">박찬대</a>
                            </td>
                            <td style="padding: 10px 5px; border: 1px solid ${borderColor}; background-color: #f0f4ff;">
                                <a href="박효빈.html" style="color: ${linkColor}; text-decoration: none; font-weight: bold;">박효빈</a>
                            </td>
                            <td style="padding: 10px 5px; border: 1px solid ${borderColor};">
                                <a href="신용한.html" style="color: ${linkColor}; text-decoration: none;">신용한</a>
                            </td>
                        </tr>

                        <!-- 3행: 우상호, 위성곤, 이원택, 전재수 -->
                        <tr style="background-color: #fff;">
                            <td style="padding: 10px 5px; border: 1px solid ${borderColor};">
                                <a href="우상호.html" style="color: ${linkColor}; text-decoration: none;">우상호</a>
                            </td>
                            <td style="padding: 10px 5px; border: 1px solid ${borderColor};">
                                <a href="위성곤.html" style="color: ${linkColor}; text-decoration: none;">위성곤</a>
                            </td>
                            <td style="padding: 10px 5px; border: 1px solid ${borderColor};">
                                <a href="이원택.html" style="color: ${linkColor}; text-decoration: none;">이원택</a>
                            </td>
                            <td style="padding: 10px 5px; border: 1px solid ${borderColor};">
                                <a href="전재수.html" style="color: ${linkColor}; text-decoration: none;">전재수</a>
                            </td>
                        </tr>

                        <!-- 4행: 조상호, 추미애, 허태정, (빈 칸) -->
                        <tr style="background-color: #fff;">
                            <td style="padding: 10px 5px; border: 1px solid ${borderColor};">
                                <a href="조상호.html" style="color: ${linkColor}; text-decoration: none;">조상호</a>
                            </td>
                            <td style="padding: 10px 5px; border: 1px solid ${borderColor};">
                                <a href="추미애.html" style="color: ${linkColor}; text-decoration: none;">추미애</a>
                            </td>
                            <td style="padding: 10px 5px; border: 1px solid ${borderColor};">
                                <a href="허태정.html" style="color: ${linkColor}; text-decoration: none;">허태정</a>
                            </td>
                            <td style="padding: 10px 5px; border: 1px solid ${borderColor}; background-color: #f8f9fa;"></td>
                        </tr>

                        <!-- 하단 정당 이동 바 (국민의힘) -->
                        <tr>
                            <td colspan="4" style="background-color: ${minjooBlue}; color: #fff; padding: 8px; border: 1px solid ${minjooBlue}; font-weight: bold; text-align: center;">
                                <a href="국민의힘_민선9기.html" style="color: #fff; text-decoration: none;">국민의힘</a>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </details>
    </div>
    `;

    // 클래스명 "minseon9-minjoo-nav-container" 또는 ID "minseon9-minjoo-nav-container" 요소에 연결
    const container = document.getElementById("minseon9-minjoo-nav-container") || document.querySelector(".minseon9-minjoo-nav-container");
    if (container) {
        container.innerHTML = minjooMinseon9NavHTML;
    } else {
        console.warn("더불어민주당 민선 9기 광역자치단체장 둘러보기 틀을 삽입할 '.minseon9-minjoo-nav-container' 요소를 찾을 수 없습니다.");
    }
});