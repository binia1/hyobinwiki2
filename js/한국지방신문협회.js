document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("local-press-association-nav-container");

    if (container) {
        // 직접 작성해주신 원본 HTML 코드 (수정 절대 없음)
        container.innerHTML = `
        <!-- 한국지방신문협회 회원사 틀 -->
        <details class="mb-4">
            <summary style="text-align: center; background-color: #0047a0; color: white; background-image: linear-gradient(120deg, #fff 5%, #000 5.1% 9%, #fff 9.1% 10%, #000 10.1% 14%, #fff 14.1% 15%, #000 15.1% 19%, #fff 19.1% 81%, #cd313a 81.1% 90%, #0047a0 90.1%); border: 1px solid #ccc;">
                <span class="font-bold text-black drop-shadow-md">
                    <img class="inline align-middle border border-gray-300" src="이미지/대한민국_국기.webp" width="20"/>
                    <a class="text-black no-underline hover:underline" href="한국지방신문협회.html">한국지방신문협회</a> 회원사
                </span>
            </summary>
            <div class="details-content bg-white text-sm">
                <table class="namu-table text-center text-xs mb-0">
                    <tr>
                        <td width="16.6%"><a class="wiki-link" href="강원일보.html">강원일보</a></td>
                        <td width="16.6%"><a class="wiki-link" href="경남신문.html">경남신문</a></td>
                        <td width="16.6%"><a class="wiki-link" href="경인일보.html">경인일보</a></td>
                        <td width="16.6%"><a class="wiki-link" href="광주일보.html">광주일보</a></td>
                        <td width="16.6%"><a class="wiki-link" href="대전일보.html">대전일보</a></td>
                        <td width="16.6%"><a class="wiki-link" href="매일신문.html">매일신문</a></td>
                    </tr>
                    <tr>
                        <td><a class="wiki-link" href="부산일보.html">부산일보</a></td>
                        <td><a class="wiki-link" href="전북일보.html">전북일보</a></td>
                        <td><a class="wiki-link" href="제주일보.html">제주일보</a></td>
                        <td class="bg-[#003399] text-white font-bold"><a class="text-white hover:underline" href="효빈일보.html">효빈일보</a></td>
                        <td><a class="wiki-link" href="덕북일보.html">덕북일보</a></td>
                        <td><a class="wiki-link" href="덕남일보.html">덕남일보</a></td>
                    </tr>
                </table>
            </div>
        </details>
        `;
    }
});