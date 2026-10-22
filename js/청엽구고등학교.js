/**
 * 파일명: js/청엽구고등학교.js
 * 설명: 효빈광역시 청엽구의 고등학교 하단 내비게이션 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-청엽구고등학교-nav");
    containers.forEach(function(container) {
        container.innerHTML = `
<div class="nav-box rounded overflow-hidden shadow-sm" style="border: 2px solid #006699; background-color: #ffffff;">
<div class="nav-box-header cursor-default" style="background-color: #006699; color: #ffffff; padding: 8px; text-align: center; font-weight: bold;">
<span>효빈광역시 청엽구의 고등학교</span>
</div>
<div style="background-color: #ffffff; padding: 8px; text-align: center; font-size: 12px; border-bottom: 1px solid #ccc;">
<div style="margin-bottom: 4px; line-height: 1.8;">
<span style="background-color: #E7F1FF; color: #333333; padding: 2px 6px; border: 1px solid #ccc; border-radius: 3px;">남자고등학교</span>, 
                    <span style="background-color: #FFF0F5; color: #333333; padding: 2px 6px; border: 1px solid #ccc; border-radius: 3px;">여자고등학교</span>, 
                    <span style="background-color: #ffffff; color: #333333; padding: 2px 6px; border: 1px solid #ccc; border-radius: 3px; font-weight: bold;">이외 남녀공학</span>
                </div>
<div style="font-weight: bold; color: #7777AA; margin-top: 4px;">※: 자사고, ⊙: 자공고, ▣: 특목고, ◈: 특성화고, 이외 일반계고</div>
</div>
<table class="school-table" style="width: 100%; text-align: center; border-collapse: collapse; background-color: #ffffff; font-size: 13px;">
<tr>
<td style="border: 1px solid #ddd; padding: 6px; background-color: #E7F1FF;"><a class="wiki-link" href="동리고등학교.html" style="color: #333333;">동리고</a></td>
<td style="border: 1px solid #ddd; padding: 6px; background-color: #FFF0F5;"><a class="wiki-link" href="동리여자고등학교.html" style="color: #333333;">동리여고</a></td>
<td style="border: 1px solid #ddd; padding: 6px;"><a class="wiki-link" href="등동고등학교.html" style="color: #333333;">등동고</a></td>
<td style="border: 1px solid #ddd; padding: 6px;"><a class="wiki-link" href="모카고등학교.html" style="color: #333333;">모카고</a></td>
<td style="border: 1px solid #ddd; padding: 6px;"><a class="wiki-link" href="비마고등학교.html" style="color: #333333;">비마고</a></td>
</tr>
<tr>
<td style="border: 1px solid #ddd; padding: 6px;"><a class="wiki-link" href="빈동고등학교.html" style="color: #333333;">빈동고</a></td>
<td style="border: 1px solid #ddd; padding: 6px;"><a class="wiki-link" href="사노고등학교.html" style="color: #333333;">사노고</a></td>
<td style="border: 1px solid #ddd; padding: 6px;">◈<a class="wiki-link" href="송엽상업고등학교.html" style="color: #333333;">송엽상고</a></td>
<td style="border: 1px solid #ddd; padding: 6px;"><a class="wiki-link" href="승령고등학교.html" style="color: #333333;">승령고</a></td>
<td style="border: 1px solid #ddd; padding: 6px;"><a class="wiki-link" href="어장고등학교.html" style="color: #333333;">어장고</a></td>
</tr>
<tr>
<td style="border: 1px solid #ddd; padding: 6px;"><a class="wiki-link" href="우전고등학교.html" style="color: #333333;">우전고</a></td>
<td style="border: 1px solid #ddd; padding: 6px;"><a class="wiki-link" href="우택고등학교.html" style="color: #333333;">우택고</a></td>
<td style="border: 1px solid #ddd; padding: 6px;"><a class="wiki-link" href="입동고등학교.html" style="color: #333333;">입동고</a></td>
<td style="border: 1px solid #ddd; padding: 6px;"><a class="wiki-link" href="입빈고등학교.html" style="color: #333333;">입빈고</a></td>
<td style="border: 1px solid #ddd; padding: 6px; background-color: #FFF0F5;"><a class="wiki-link" href="청빈고등학교.html" style="color: #333333;">청빈고</a></td>
</tr>
<tr>
<td style="border: 1px solid #ddd; padding: 6px; background-color: #E7F1FF;"><a class="wiki-link" href="청엽고등학교.html" style="color: #333333;">청엽고</a></td>
<td style="border: 1px solid #ddd; padding: 6px;">▣<a class="wiki-link" href="청엽국제고등학교.html" style="color: #333333;">청엽국제고</a></td>
<td style="border: 1px solid #ddd; padding: 6px;">▣<a class="wiki-link" href="청엽외국어고등학교.html" style="color: #333333;">청엽외고</a></td>
<td style="border: 1px solid #ddd; padding: 6px;">◈<a class="wiki-link" href="색수고등학교.html" style="color: #333333;">색수고</a></td>
<td style="border: 2px solid #006699 !important; padding: 6px; font-weight: bold;">※<a class="wiki-link" href="팔천고등학교.html" style="color: #006699;">팔천고</a></td>
</tr>
<tr>
<td style="border: 1px solid #ddd; padding: 6px;"><a class="wiki-link" href="헌이송고등학교.html" style="color: #333333;">헌이송고</a></td>
<td style="border: 1px solid #ddd; padding: 6px;">◈<a class="wiki-link" href="헌이송공업고등학교.html" style="color: #333333;">헌이송공고</a></td>
<td style="border: 1px solid #ddd; padding: 6px;"></td>
<td style="border: 1px solid #ddd; padding: 6px;"></td>
<td style="border: 1px solid #ddd; padding: 6px;"></td>
</tr>
</table>
</div>
        `;
    });
});