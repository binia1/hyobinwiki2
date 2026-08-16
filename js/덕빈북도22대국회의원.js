document.addEventListener("DOMContentLoaded", function() {
    // 정당별 배경색 보조 스타일 주입
    const styleId = 'deokbinbuk-assembly-22-nav-style';
    if (!document.getElementById(styleId)) {
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
            .bg-minju { background-color: #004EA2 !important; }
            .bg-ppp { background-color: #E61E2B !important; }
            .bg-jinbo { background-color: #D6001C !important; }
        `;
        document.head.appendChild(style);
    }

    const html = `
    <table class="nav-table" style="border: 2px solid #2ECC71; width: 100%; border-collapse: collapse; margin: 15px 0 25px 0; font-size: 0.9rem;">
        <tbody>
            <tr>
                <td class="nav-header" style="background-color: #2ECC71; padding: 8px; text-align: center;">
                    <a class="wiki-link white" href="제22대_국회의원.html" style="display:inline-flex; align-items:center; gap:4px; color: white; font-weight: bold; text-decoration: none;">
                        <img alt="국회 휘장" src="이미지/국회휘장.svg" style="display:block;" width="20" onerror="this.style.display='none'"/>
                        <span>덕빈북도 제22대 국회의원</span>
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
                                    <tr class="bg-minju" style="color: white;">
                                        <td style="width: 25%; padding: 6px 4px; border: 1px solid #ddd;"><a class="wiki-link white" href="강주시·기도군_갑.html" style="color:white; text-decoration:none; font-weight:bold;">강주·기도 갑</a></td>
                                        <td style="width: 25%; padding: 6px 4px; border: 1px solid #ddd;"><a class="wiki-link white" href="강주시·기도군_을.html" style="color:white; text-decoration:none; font-weight:bold;">강주·기도 을</a></td>
                                        <td style="width: 25%; padding: 6px 4px; border: 1px solid #ddd;"><a class="wiki-link white" href="계성시·반양군.html" style="color:white; text-decoration:none; font-weight:bold;">계성·반양</a></td>
                                        <td style="width: 25%; padding: 6px 4px; border: 1px solid #ddd;"><a class="wiki-link white" href="군천시(선거구).html" style="color:white; text-decoration:none; font-weight:bold;">군천</a></td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 10px 4px; border: 1px solid #ddd;"><a class="wiki-link" href="오시연.html" style="color:#004EA2; font-weight:bold; text-decoration:none;">오시연</a> (3선)</td>
                                        <td style="padding: 10px 4px; border: 1px solid #ddd;"><a class="wiki-link" href="고상철.html" style="color:#004EA2; font-weight:bold; text-decoration:none;">고상철</a> (재선)</td>
                                        <td style="padding: 10px 4px; border: 1px solid #ddd;"><a class="wiki-link" href="남소현.html" style="color:#004EA2; font-weight:bold; text-decoration:none;">남소현</a> (초선)</td>
                                        <td style="padding: 10px 4px; border: 1px solid #ddd;"><a class="wiki-link" href="위서은.html" style="color:#004EA2; font-weight:bold; text-decoration:none;">위서은</a> (초선)</td>
                                    </tr>
                                    <!-- 2열 -->
                                    <tr class="bg-minju" style="color: white;">
                                        <td style="padding: 6px 4px; border: 1px solid #ddd;"><a class="wiki-link white" href="낭원군(선거구).html" style="color:white; text-decoration:none; font-weight:bold;">낭원</a></td>
                                        <td class="bg-ppp" style="padding: 6px 4px; border: 1px solid #ddd;"><a class="wiki-link white" href="덕현군·치원군·저천군.html" style="color:white; text-decoration:none; font-weight:bold;">덕현·치원·저천</a></td>
                                        <td class="bg-minju" style="padding: 6px 4px; border: 1px solid #ddd;"><a class="wiki-link white" href="빈주시_갑.html" style="color:white; text-decoration:none; font-weight:bold;">빈주 갑</a></td>
                                        <td style="padding: 6px 4px; border: 1px solid #ddd;"><a class="wiki-link white" href="빈주시_을.html" style="color:white; text-decoration:none; font-weight:bold;">빈주 을</a></td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 10px 4px; border: 1px solid #ddd;"><a class="wiki-link" href="오선온.html" style="color:#004EA2; font-weight:bold; text-decoration:none;">오선온</a> (재선)</td>
                                        <td style="padding: 10px 4px; border: 1px solid #ddd;"><a class="wiki-link" href="강동혁.html" style="color:#E61E2B; font-weight:bold; text-decoration:none;">강동혁</a> (3선)</td>
                                        <td style="padding: 10px 4px; border: 1px solid #ddd;"><a class="wiki-link" href="박현언.html" style="color:#004EA2; font-weight:bold; text-decoration:none;">박현언</a> (초선)</td>
                                        <td style="padding: 10px 4px; border: 1px solid #ddd;"><a class="wiki-link" href="고한선.html" style="color:#004EA2; font-weight:bold; text-decoration:none;">고한선</a> (4선)</td>
                                    </tr>
                                    <!-- 3열 -->
                                    <tr class="bg-minju" style="color: white;">
                                        <td style="padding: 6px 4px; border: 1px solid #ddd;"><a class="wiki-link white" href="빈주시_병.html" style="color:white; text-decoration:none; font-weight:bold;">빈주 병</a></td>
                                        <td style="padding: 6px 4px; border: 1px solid #ddd;"><a class="wiki-link white" href="빈주시_정.html" style="color:white; text-decoration:none; font-weight:bold;">빈주 정</a></td>
                                        <td style="padding: 6px 4px; border: 1px solid #ddd;"><a class="wiki-link white" href="서해시_갑.html" style="color:white; text-decoration:none; font-weight:bold;">서해 갑</a></td>
                                        <td style="padding: 6px 4px; border: 1px solid #ddd;"><a class="wiki-link white" href="서해시_을.html" style="color:white; text-decoration:none; font-weight:bold;">서해 을</a></td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 10px 4px; border: 1px solid #ddd;"><a class="wiki-link" href="유상미.html" style="color:#004EA2; font-weight:bold; text-decoration:none;">유상미</a> (재선)</td>
                                        <td style="padding: 10px 4px; border: 1px solid #ddd;"><a class="wiki-link" href="박신언.html" style="color:#004EA2; font-weight:bold; text-decoration:none;">박신언</a> (재선)</td>
                                        <td style="padding: 10px 4px; border: 1px solid #ddd;"><a class="wiki-link" href="김세솔.html" style="color:#004EA2; font-weight:bold; text-decoration:none;">김세솔</a> (초선)</td>
                                        <td style="padding: 10px 4px; border: 1px solid #ddd;"><a class="wiki-link" href="김수연.html" style="color:#004EA2; font-weight:bold; text-decoration:none;">김수연</a> (초선)</td>
                                    </tr>
                                    <!-- 4열 -->
                                    <tr class="bg-minju" style="color: white;">
                                        <td class="bg-jinbo" style="padding: 6px 4px; border: 1px solid #ddd;"><a class="wiki-link white" href="약산시·선곡군_갑.html" style="color:white; text-decoration:none; font-weight:bold;">약산·선곡 갑</a></td>
                                        <td style="padding: 6px 4px; border: 1px solid #ddd;"><a class="wiki-link white" href="약산시·선곡군_을.html" style="color:white; text-decoration:none; font-weight:bold;">약산·선곡 을</a></td>
                                        <td class="bg-ppp" style="padding: 6px 4px; border: 1px solid #ddd;"><a class="wiki-link white" href="전산시·모제군·서진시·상안군.html" style="color:white; text-decoration:none; font-weight:bold;">전산·모제·서진·상안</a></td>
                                        <td style="padding: 6px 4px; border: 1px solid #ddd;"><a class="wiki-link white" href="천주시_갑.html" style="color:white; text-decoration:none; font-weight:bold;">천주 갑</a></td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 10px 4px; border: 1px solid #ddd;"><a class="wiki-link" href="소산현.html" style="color:#D6001C; font-weight:bold; text-decoration:none;">소산현</a> (초선)</td>
                                        <td style="padding: 10px 4px; border: 1px solid #ddd;"><a class="wiki-link" href="구신원.html" style="color:#004EA2; font-weight:bold; text-decoration:none;">구신원</a> (3선)</td>
                                        <td style="padding: 10px 4px; border: 1px solid #ddd;"><a class="wiki-link" href="나두길.html" style="color:#E61E2B; font-weight:bold; text-decoration:none;">나두길</a> (4선)</td>
                                        <td style="padding: 10px 4px; border: 1px solid #ddd;"><a class="wiki-link" href="고규미.html" style="color:#004EA2; font-weight:bold; text-decoration:none;">고규미</a> (재선)</td>
                                    </tr>
                                    <!-- 5열 -->
                                    <tr class="bg-minju" style="color: white;">
                                        <td style="padding: 6px 4px; border: 1px solid #ddd;"><a class="wiki-link white" href="천주시_을.html" style="color:white; text-decoration:none; font-weight:bold;">천주 을</a></td>
                                        <td class="bg-white border-none" colspan="3" style="background-color: white; border: none !important;"></td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 10px 4px; border: 1px solid #ddd;"><a class="wiki-link" href="하성민.html" style="color:#004EA2; font-weight:bold; text-decoration:none;">하성민</a> (재선)</td>
                                        <td class="border-none" colspan="3" style="border: none !important;"></td>
                                    </tr>
                                    <!-- 하단 링크 -->
                                    <tr>
                                        <td style="background-color: #f9f9f9; padding: 12px 0 8px 0; font-size: 0.9em; border: 1px solid #ddd;" colspan="4">
                                            <a class="wiki-link" href="덕빈북도_제22대총선_결과.html" style="color: #0022AA; font-weight: bold; text-decoration: none;">선거 결과 전체 보기</a>
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

    // ★★★ 핵심 마법: 기존 문서들 1도 안 고쳐도 됨! ★★★
    // querySelectorAll('[id="..."]') 를 쓰면, HTML 규칙을 무시하고
    // 문서 안에 id="deokbinbuk-assembly-22-nav-container" 인 놈들을 싹 다 긁어옵니다.
    const containers = document.querySelectorAll('[id="deokbinbuk-assembly-22-nav-container"]');
    containers.forEach(container => {
        container.innerHTML = html;
    });
});