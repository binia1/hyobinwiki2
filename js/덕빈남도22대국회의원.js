document.addEventListener("DOMContentLoaded", function() {
    const html = `
    <table class="nav-table" style="border: 2px solid #335566; width: 100%; border-collapse: collapse; margin: 15px 0 25px 0; font-size: 0.9rem;">
        <tbody>
            <tr>
                <td class="nav-header" style="background-color: #335566; padding: 8px; text-align: center;">
                    <a href="제22대_국회의원.html" class="wiki-link white" style="display:inline-flex; align-items:center; gap:4px; color: white; font-weight: bold; text-decoration: none;">
                        <img src="이미지/국회휘장.svg" width="20" alt="국회 휘장" style="display:block;" onerror="this.style.display='none'">
                        <span>덕빈남도 제22대 국회의원</span>
                    </a>
                </td>
            </tr>
            <tr>
                <td style="padding: 0; border: 1px solid #ddd;">
                    <details style="border: none; margin: 0;" open>
                        <summary style="cursor: pointer; background: #f0f0f0; padding: 5px; text-align: center; font-size: 0.85rem; font-weight: bold; color: #333; list-style: none;">[ 펼치기 · 접기 ]</summary>
                        <div style="padding: 5px;">
                             <table style="width: 100%; text-align: center; border-collapse: collapse;">
                                <tbody>
                                    <!-- 1열 -->
                                    <tr class="bg-gray-100" style="color: white;">
                                        <td class="w-1/4" style="padding: 6px 4px; border: 1px solid #ddd; background-color: #E61E2B !important;"><a href="고포군·곡천군·인곡군·관수군.html" class="wiki-link white" style="color:white; text-decoration:none; font-weight:bold;">고포·곡천·인곡·관수</a></td>
                                        <td class="w-1/4" style="padding: 6px 4px; border: 1px solid #ddd; background-color: #003B96 !important;"><a href="낙주시·원안군_갑.html" class="wiki-link white" style="color:white; text-decoration:none; font-weight:bold;">낙주·원안 갑</a></td>
                                        <td class="w-1/4" style="padding: 6px 4px; border: 1px solid #ddd; background-color: #003B96 !important;"><a href="낙주시·원안군_을.html" class="wiki-link white" style="color:white; text-decoration:none; font-weight:bold;">낙주·원안 을</a></td>
                                        <td class="w-1/4" style="padding: 6px 4px; border: 1px solid #ddd; background-color: #003B96 !important;"><a href="덕주시_갑.html" class="wiki-link white" style="color:white; text-decoration:none; font-weight:bold;">덕주 갑</a></td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 10px 4px; border: 1px solid #ddd;"><a href="고진남.html" class="wiki-link" style="color:#E61E2B; font-weight:bold; text-decoration:none;">고진남</a> (3선)</td>
                                        <td style="padding: 10px 4px; border: 1px solid #ddd;"><a href="고관영.html" class="wiki-link" style="color:#003B96; font-weight:bold; text-decoration:none;">고관영</a> (초선)</td>
                                        <td style="padding: 10px 4px; border: 1px solid #ddd;"><a href="서유원.html" class="wiki-link" style="color:#003B96; font-weight:bold; text-decoration:none;">서유원</a> (3선)</td>
                                        <td style="padding: 10px 4px; border: 1px solid #ddd;"><a href="유성태.html" class="wiki-link" style="color:#003B96; font-weight:bold; text-decoration:none;">유성태</a> (초선)</td>
                                    </tr>
                                    <!-- 2열 -->
                                    <tr class="bg-gray-100" style="color: white;">
                                        <td style="padding: 6px 4px; border: 1px solid #ddd; background-color: #003B96 !important;"><a href="덕주시_을.html" class="wiki-link white" style="color:white; text-decoration:none; font-weight:bold;">덕주 을</a></td>
                                        <td style="padding: 6px 4px; border: 1px solid #ddd; background-color: #003B96 !important;"><a href="두원군·운진군.html" class="wiki-link white" style="color:white; text-decoration:none; font-weight:bold;">두원·운진</a></td>
                                        <td style="padding: 6px 4px; border: 1px solid #ddd; background-color: #747474 !important;"><a href="마진시·분주군.html" class="wiki-link white" style="color:white; text-decoration:none; font-weight:bold;">마진·분주</a></td>
                                        <td style="padding: 6px 4px; border: 1px solid #ddd; background-color: #003B96 !important;"><a href="매산군·매성시.html" class="wiki-link white" style="color:white; text-decoration:none; font-weight:bold;">매산·매성</a></td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 10px 4px; border: 1px solid #ddd;"><a href="신규진.html" class="wiki-link" style="color:#003B96; font-weight:bold; text-decoration:none;">신규진</a> (초선)</td>
                                        <td style="padding: 10px 4px; border: 1px solid #ddd;"><a href="박파란.html" class="wiki-link" style="color:#003B96; font-weight:bold; text-decoration:none;">박파란</a> (초선)</td>
                                        <td style="padding: 10px 4px; border: 1px solid #ddd;"><a href="고수안.html" class="wiki-link" style="color:#747474; font-weight:bold; text-decoration:none;">고수안</a> (재선)</td>
                                        <td style="padding: 10px 4px; border: 1px solid #ddd;"><a href="금신만.html" class="wiki-link" style="color:#003B96; font-weight:bold; text-decoration:none;">금신만</a> (재선)</td>
                                    </tr>
                                    <!-- 3열 -->
                                    <tr class="bg-gray-100" style="color: white;">
                                        <td style="padding: 6px 4px; border: 1px solid #ddd; background-color: #003B96 !important;"><a href="방산시·석창군_갑.html" class="wiki-link white" style="color:white; text-decoration:none; font-weight:bold;">방산·석창 갑</a></td>
                                        <td style="padding: 6px 4px; border: 1px solid #ddd; background-color: #003B96 !important;"><a href="방산시·석창군_을.html" class="wiki-link white" style="color:white; text-decoration:none; font-weight:bold;">방산·석창 을</a></td>
                                        <td style="padding: 6px 4px; border: 1px solid #ddd; background-color: #E61E2B !important;"><a href="비천시·하정시.html" class="wiki-link white" style="color:white; text-decoration:none; font-weight:bold;">비천·하정</a></td>
                                        <td class="bg-white border-none" style="background-color: white; border: none !important;"></td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 10px 4px; border: 1px solid #ddd;"><a href="송원민.html" class="wiki-link" style="color:#003B96; font-weight:bold; text-decoration:none;">송원민</a> (초선)</td>
                                        <td style="padding: 10px 4px; border: 1px solid #ddd;"><a href="주은태.html" class="wiki-link" style="color:#003B96; font-weight:bold; text-decoration:none;">주은태</a> (초선)</td>
                                        <td style="padding: 10px 4px; border: 1px solid #ddd;"><a href="구진내.html" class="wiki-link" style="color:#E61E2B; font-weight:bold; text-decoration:none;">구진내</a> (초선)</td>
                                        <td class="border-none" style="border: none !important;"></td>
                                    </tr>
                                    <!-- 하단 링크 -->
                                    <tr>
                                        <td colspan="4" style="background-color: #f9f9f9; padding: 12px 0 8px 0; font-size: 0.9em; border: 1px solid #ddd;">
                                            <a href="제22대_덕빈남도_국회의원_선거.html" class="wiki-link" style="color: #0022AA; font-weight: bold; text-decoration: none;">선거 결과 전체 보기</a>
                                        </td>
                                    </tr>
                                 </tbody>
                             </table>
                        </div>
                    </details>
                </td>
            </tr>
        </tbody>
    </table>
    `;

    // 동일한 ID가 여러 개 있어도 에러 안 나고 전부 다 그려주도록 무적의 querySelectorAll 사용
    const containers = document.querySelectorAll('[id="deokbinnam-assembly-22-nav-container"]');
    containers.forEach(container => {
        container.innerHTML = html;
    });
});