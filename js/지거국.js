document.addEventListener("DOMContentLoaded", () => {
    // 효빈대학.js와 충돌하지 않도록 고유 ID인 jigeoguk-zone만 타겟팅
    const container = document.getElementById('jigeoguk-zone');
    
    if (container) {
        container.innerHTML = `
        <div class="nw-box">
            <div class="nw-title">국가거점국립대학교<br/><span style="font-size: 10px; font-weight: normal;">Flagship Korean National Universities</span></div>
            <details class="nw-details" open="">
                <summary class="nw-fold">[ 펼치기 · 접기 ]</summary>
                <table class="nw-grid-table">
                    <tr><th>강원</th><th>대구·경북</th><th>경남</th><th>부산·경남</th><th>서울</th></tr>
                    <tr>
                        <td><img src="이미지/svg/강원대.svg" style="height:50px; margin:0 auto 5px;"/><br/><a class="nw-link nw-bold">강원대학교</a></td>
                        <td><img src="이미지/svg/경북대.svg" style="height:50px; margin:0 auto 5px;"/><br/><a class="nw-link nw-bold">경북대학교</a></td>
                        <td><img src="이미지/svg/경상국립대학교_로고.svg" style="height:50px; margin:0 auto 5px;"/><br/><a class="nw-link nw-bold">경상국립대학교</a></td>
                        <td><img src="이미지/svg/부산대.svg" style="height:50px; margin:0 auto 5px;"/><br/><a class="nw-link nw-bold">부산대학교</a></td>
                        <td><img src="이미지/svg/서울대.svg" style="height:50px; margin:0 auto 5px;"/><br/><a class="nw-link nw-bold">서울대학교</a></td>
                    </tr>
                    <tr><th>전남광주</th><th>전북</th><th>제주</th><th>대전·세종</th><th>충북·세종</th></tr>
                    <tr>
                        <td><img src="이미지/svg/전남대.svg" style="height:50px; margin:0 auto 5px;"/><br/><a class="nw-link nw-bold">전남대학교</a></td>
                        <td><img src="이미지/svg/전북대_로고.svg" style="height:50px; margin:0 auto 5px;"/><br/><a class="nw-link nw-bold">전북대학교</a></td>
                        <td><img src="이미지/svg/제주대.svg" style="height:50px; margin:0 auto 5px;"/><br/><a class="nw-link nw-bold">제주대학교</a></td>
                        <td><img src="이미지/svg/충남대.svg" style="height:50px; margin:0 auto 5px;"/><br/><a class="nw-link nw-bold">충남대학교</a></td>
                        <td><img src="이미지/svg/충북대.svg" style="height:50px; margin:0 auto 5px;"/><br/><a class="nw-link nw-bold">충북대학교</a></td>
                    </tr>
                    <tr><th>효빈</th><th>덕북</th><th>덕남</th><td colspan="2" style="background:transparent; border:none; padding:0;"></td></tr>
                    <tr>
                        <td><img src="이미지/효빈대_로고.webp" style="height:50px; margin:0 auto 5px;"/><br/><a class="nw-link nw-highlight" onclick="goToLink('효빈대학교.html')" style="color:#3344aa;">효빈대학교</a></td>
                        <td><img src="이미지/덕북대_로고.webp" style="height:50px; margin:0 auto 5px;"/><br/><a class="nw-link nw-hyobin" onclick="goToLink('덕북대학교.html')">덕북대학교</a></td>
                        <td><img src="이미지/국립덕남대학교_UI.webp" style="height:50px; margin:0 auto 5px;"/><br/><a class="nw-link nw-hyobin" onclick="goToLink('덕남대학교.html')">덕남대학교</a></td>
                        <td colspan="2" style="background:transparent; border:none; padding:0;"></td>
                    </tr>
                </table>
            </details>
        </div>
        `;
    }
});