document.currentScript.insertAdjacentHTML('beforebegin', `
<div class="gradient-box">
<!-- 학교 로고/심볼 이미지 -->
<img alt="빈주대학교 로고" src="이미지/빈주대학교_UI.webp" style="width: 250px; display: inline-block;"/>
</div>
<details>
<summary></summary>
<div class="p-2 border border-t-0 bg-white">
<table class="wiki-table" style="margin: 0; width: 100%;">
<tr>
<td class="text-center font-bold text-white" colspan="4" style="background-color: #002366;">대학 정보</td>
</tr>
<tr>
<td class="wiki-table-center"><a class="wiki-link text-[#002366]" onclick="goToLink('빈주대학교_역사.html')">역사</a></td>
<td class="wiki-table-center"><a class="wiki-link text-[#002366]" onclick="goToLink('빈주대학교_캠퍼스.html')">캠퍼스</a></td>
<td class="wiki-table-center"><a class="wiki-link text-[#002366]" onclick="goToLink('빈주대학교_출신인물.html')">출신 인물</a></td>
</tr>
</table>
</div>
</details>
`);