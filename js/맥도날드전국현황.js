document.addEventListener("DOMContentLoaded", function() {
    const mcdNavHtml = `
    <div style="border: 2px solid #DB0007; margin-bottom: 25px; font-family: 'Noto Sans KR', sans-serif;">
        <div style="background-color: #DB0007; color: white; padding: 12px; display: flex; align-items: center; justify-content: center; gap: 15px; border-bottom: 1px solid rgba(255,255,255,0.4);">
            <img src="이미지/맥도날드_로고.webp" style="height: 42px; filter: drop-shadow(1px 1px 2px rgba(0,0,0,0.3));">
            <div style="text-align: left; line-height: 1.1;">
                <div style="font-size: 0.85rem; font-weight: bold;">맥도날드</div>
                <div style="font-size: 1.4rem; font-weight: 900; letter-spacing: -0.5px;">전국 지역별 지점</div>
            </div>
        </div>
        <div style="background-color: #DB0007; color: white; text-align: center; padding: 8px; font-size: 0.95rem; font-weight: bold; cursor: pointer;" onclick="const content = document.getElementById('mcd-nav-content'); content.style.display = content.style.display === 'none' ? 'block' : 'none';">
            [ 펼치기 · 접기 ]
        </div>
        <div id="mcd-nav-content" style="display: none; background-color: #fff;">
            <table style="width: 100%; border-collapse: collapse; text-align: center; margin: 0; table-layout: fixed; border: none !important;">
                <tbody>
                    <tr>
                        <td style="border: 1px solid #e0e0e0; padding: 12px;"><a href="서울_맥도날드.html" style="color: #333; text-decoration: none; font-weight: bold;">서울</a></td>
                        <td style="border: 1px solid #e0e0e0; padding: 12px;"><a href="부산_맥도날드.html" style="color: #333; text-decoration: none; font-weight: bold;">부산</a></td>
                        <td style="border: 1px solid #e0e0e0; padding: 12px;"><a href="인천_맥도날드.html" style="color: #333; text-decoration: none; font-weight: bold;">인천</a></td>
                        <td style="border: 1px solid #e0e0e0; padding: 12px;"><a href="대구_맥도날드.html" style="color: #333; text-decoration: none; font-weight: bold;">대구</a></td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #e0e0e0; padding: 12px;"><a href="대전_맥도날드.html" style="color: #333; text-decoration: none; font-weight: bold;">대전</a></td>
                        <td style="border: 1px solid #e0e0e0; padding: 12px;"><a href="광주_맥도날드.html" style="color: #333; text-decoration: none; font-weight: bold;">광주</a></td>
                        <td style="border: 1px solid #e0e0e0; padding: 12px;"><a href="울산_맥도날드.html" style="color: #333; text-decoration: none; font-weight: bold;">울산</a></td>
                        <td style="border: 1px solid #e0e0e0; padding: 12px;"><a href="세종_맥도날드.html" style="color: #333; text-decoration: none; font-weight: bold;">세종</a></td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #e0e0e0; padding: 12px;"><a href="경기_맥도날드.html" style="color: #333; text-decoration: none; font-weight: bold;">경기</a></td>
                        <td style="border: 1px solid #e0e0e0; padding: 12px;"><a href="강원_맥도날드.html" style="color: #333; text-decoration: none; font-weight: bold;">강원</a></td>
                        <td style="border: 1px solid #e0e0e0; padding: 12px;"><a href="충북_맥도날드.html" style="color: #333; text-decoration: none; font-weight: bold;">충북</a></td>
                        <td style="border: 1px solid #e0e0e0; padding: 12px;"><a href="충남_맥도날드.html" style="color: #333; text-decoration: none; font-weight: bold;">충남</a></td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #e0e0e0; padding: 12px;"><a href="전북_맥도날드.html" style="color: #333; text-decoration: none; font-weight: bold;">전북</a></td>
                        <td style="border: 1px solid #e0e0e0; padding: 12px;"><a href="경북_맥도날드.html" style="color: #333; text-decoration: none; font-weight: bold;">경북</a></td>
                        <td style="border: 1px solid #e0e0e0; padding: 12px;"><a href="경남_맥도날드.html" style="color: #333; text-decoration: none; font-weight: bold;">경남</a></td>
                        <td style="border: 1px solid #e0e0e0; padding: 12px;"><a href="제주_맥도날드.html" style="color: #333; text-decoration: none; font-weight: bold;">제주</a></td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #e0e0e0; padding: 12px;"><a href="효빈광역시_맥도날드.html" style="color: #333; text-decoration: none; font-weight: bold;">효빈</a></td>
                        <td style="border: 1px solid #e0e0e0; padding: 12px;"><a href="덕빈북도_맥도날드.html" style="color: #333; text-decoration: none; font-weight: bold;">덕북</a></td>
                        <td style="border: 1px solid #e0e0e0; padding: 12px;"><a href="덕빈남도_맥도날드.html" style="color: #333; text-decoration: none; font-weight: bold;">덕남</a></td>
                        <td style="border: 1px solid #e0e0e0; padding: 12px; background-color: #f9f9fa;"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    `;
    
    const categoryBox = document.querySelector('.category-box');
    if(categoryBox) {
        categoryBox.insertAdjacentHTML('afterend', mcdNavHtml);
    }
});