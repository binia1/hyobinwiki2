(function() {
    const template = `
<style id="deokbin-univ-style">
    .hb-univ-wrapper { width: 100%; overflow-x: auto; margin-bottom: 1rem; border: 1px solid #ccc; }
    .hb-univ-table { width: 100%; min-width: 700px; border-collapse: collapse; font-size: 0.85rem; }
    
    /* 헤더 스타일 */
    .hb-univ-thead th { background-color: #37B484; color: white; padding: 12px; position: relative; border-bottom: 2px solid #2d936c; }
    .hb-univ-header-content { display: flex; align-items: center; justify-content: center; gap: 10px; }
    .hb-univ-logo { max-height: 32px; width: auto; }
    .hb-univ-title { font-weight: bold; font-size: 1.25em; letter-spacing: 1px; }
    .hb-toggle-btn { font-size: 0.8rem; cursor: pointer; margin-left: 15px; background: rgba(255,255,255,0.2); padding: 2px 6px; border-radius: 4px; user-select: none; }
    .hb-toggle-btn:hover { background: rgba(255,255,255,0.4); }

    /* 대분류 스타일 (4년제/전문대) */
    .hb-category-row { background-color: #f1f5f9; font-weight: bold; text-align: center; border-bottom: 1px solid #ccc; }
    .hb-category-title { padding: 8px; color: #333; font-size: 1em; }

    /* 본문 스타일 */
    .hb-univ-tbody { transition: all 0.2s; }
    .hb-univ-tbody.hidden { display: none; }
    .hb-univ-tbody th, .hb-univ-tbody td { border: 1px solid #e5e7eb; padding: 8px 10px; vertical-align: middle; }
    
    /* 초성 셀 스타일 */
    .hb-td-initial { background-color: #f8fafc; text-align: center; font-weight: bold; width: 3rem; color: #475569; border-right: 2px solid #37B484 !important; }
    .hb-td-content { text-align: left; line-height: 1.6; }
    
    /* 비고/안내 행 */
    .hb-note-row { background-color: #ffffff; padding: 10px; font-size: 12px; border-bottom: 1px solid #ccc; line-height: 1.5; color: #666; text-align: center; }

    /* 링크 및 장식 */
    .hb-link { color: #000; text-decoration: none; font-weight: 500; }
    .hb-link:hover { text-decoration: underline; color: #37B484; }
    .hb-sep { margin: 0 8px; color: #cbd5e1; }
    del { color: #999; font-size: 0.85em; }
</style>
<div class="hb-univ-wrapper">
<table class="hb-univ-table">
<thead class="hb-univ-thead">
<tr>
<th colspan="2">
<div class="hb-univ-header-content">
<img alt="덕빈북도" class="hb-univ-logo" onerror="this.style.display='none'" src="이미지/덕북로고.webp">
<span class="hb-univ-title">덕빈북도의 대학 목록</span>
<span class="hb-toggle-btn" id="hb-univ-toggle" onclick="toggleDeokbinTable()">[접기]</span>
</div>
</th>
</tr>
</thead>
<tbody class="hb-univ-tbody" id="deokbin-univ-tbody">
<tr>
<td class="hb-note-row" colspan="2">
                    덕빈북도 내 소재한 대학교 및 전문대학 목록입니다. 가나다 초성 순으로 정렬되었습니다. <br/>
<del>수험생 여러분, 원서 영역에서 건승을 빕니다. 눈치 싸움 실패하면 덕북벌판에서 양 쳐야 할지도(...)</del>
</td>
</tr>
<tr class="hb-category-row">
<td class="hb-category-title" colspan="2">🏫 4년제 대학교</td>
</tr>
<tr>
<td class="hb-td-initial">ㄱ</td>
<td class="hb-td-content">
<a class="hb-link" href="강주가톨릭대학교.html">강주가톨릭대학교</a> <span class="hb-sep">|</span>
<a class="hb-link" href="국립서해대학교.html">국립서해대학교</a> <span class="hb-sep">|</span>
<a class="hb-link" href="서해해양대학교.html">국립서해해양대학교</a> <span class="hb-sep">|</span>
<a class="hb-link" href="군천대학교.html">군천대학교</a>
</td>
</tr>
<tr>
<td class="hb-td-initial">ㄷ</td>
<td class="hb-td-content">
<a class="hb-link" href="덕북대학교.html">덕북대학교</a> <del>덕빈북도의 자존심</del> <span class="hb-sep">|</span>
<a class="hb-link" href="덕북과학기술대학교.html">덕북과학기술대학교</a> <span class="hb-sep">|</span>
<a class="hb-link" href="덕북외국어대학교.html">덕북외국어대학교</a>
</td>
</tr>
<tr>
<td class="hb-td-initial">ㅂ</td>
<td class="hb-td-content">
<a class="hb-link" href="빈주대학교.html">빈주대학교</a> <span class="hb-sep">|</span>
<a class="hb-link" href="빈주교육대학교.html">빈주교육대학교</a> <del>임용고시 합격률 실화냐</del>
</td>
</tr>
<tr>
<td class="hb-td-initial">ㅅ</td>
<td class="hb-td-content">
<a class="hb-link" href="선빈대학교.html">선빈대학교</a>
</td>
</tr>
<tr>
<td class="hb-td-initial">ㅇ</td>
<td class="hb-td-content">
<a class="hb-link" href="약산대학교.html">약산대학교</a>
</td>
</tr>
<tr>
<td class="hb-td-initial">ㅈ</td>
<td class="hb-td-content">
<a class="hb-link" href="저소대학교.html">저소대학교</a>
</td>
</tr>
<tr>
<td class="hb-td-initial">ㅊ</td>
<td class="hb-td-content">
<a class="hb-link" href="천주대학교.html">천주대학교</a>
</td>
</tr>
<tr>
<td class="hb-td-initial">ㅎ</td>
<td class="hb-td-content">
<a class="hb-link" href="효빈대학교.html">효빈대학교</a> (
                    <a class="hb-link" href="효빈대학교.html">천주캠퍼스</a> <span class="hb-sep">·</span>
<a class="hb-link" href="효빈대학교.html">강주캠퍼스</a> <span class="hb-sep">·</span>
<a class="hb-link" href="효빈대학교.html">낭원캠퍼스</a>
                    ) <del>캠퍼스가 도 전역에 깔려있다</del>
</td>
</tr>
<tr class="hb-category-row">
<td class="hb-category-title" colspan="2">🎓 전문대학</td>
</tr>
<tr>
<td class="hb-td-initial">ㄱ</td>
<td class="hb-td-content">
<a class="hb-link" href="계성문화대학.html">계성문화대학</a>
</td>
</tr>
<tr>
<td class="hb-td-initial">ㄷ</td>
<td class="hb-td-content">
<a class="hb-link" href="덕북도립대학.html">덕북도립대학</a> <span class="hb-sep">|</span>
<a class="hb-link" href="덕북예술대학.html">덕북예술대학</a> <del>예술혼을 불태우다 등록금도 불타면 안 되는데</del>
</td>
</tr>
<tr>
<td class="hb-td-initial">ㅂ</td>
<td class="hb-td-content">
<a class="hb-link" href="빈주보건대학.html">빈주보건대학</a>
</td>
</tr>
<tr>
<td class="hb-td-initial">ㅅ</td>
<td class="hb-td-content">
<a class="hb-link" href="서진대학.html">서진대학</a>
</td>
</tr>
<tr>
<td class="hb-td-initial">ㅊ</td>
<td class="hb-td-content">
<a class="hb-link" href="천주폴리텍대학.html">천주폴리텍대학</a> <del>취업 사관학교</del>
</td>
</tr>
</tbody>
</table>
</div>
<script>
    function toggleDeokbinTable() {
        const tbody = document.getElementById('deokbin-univ-tbody');
        const btn = document.getElementById('hb-univ-toggle');
        
        if (tbody.classList.contains('hidden')) {
            tbody.classList.remove('hidden');
            btn.textContent = '[접기]';
        } else {
            tbody.classList.add('hidden');
            btn.textContent = '[펼치기]';
        }
    }
</script>
    `;
    
    // 현재 스크립트 태그가 위치한 곳에 HTML 코드를 렌더링합니다.
    document.currentScript.insertAdjacentHTML('beforebegin', template);
})();