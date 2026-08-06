(function() {
    const template = `
<style id="deokbinnam-univ-style">
    .hbn-univ-wrapper { width: 100%; overflow-x: auto; margin-bottom: 1rem; border: 1px solid #ccc; font-family: 'Noto Sans KR', sans-serif; }
    .hbn-univ-table { width: 100%; min-width: 700px; border-collapse: collapse; font-size: 0.85rem; }
    
    /* 헤더 스타일 (덕빈남도 컬러 적용) */
    .hbn-univ-thead th { background-color: #335566; color: white; padding: 12px; position: relative; border-bottom: 2px solid #243d4a; }
    .hbn-univ-header-content { display: flex; align-items: center; justify-content: center; gap: 10px; }
    .hbn-univ-logo { max-height: 32px; width: auto; filter: brightness(0) invert(1); }
    .hbn-univ-title { font-weight: bold; font-size: 1.25em; letter-spacing: 1px; }
    .hbn-toggle-btn { font-size: 0.8rem; cursor: pointer; margin-left: 15px; background: rgba(255,255,255,0.2); padding: 2px 6px; border-radius: 4px; user-select: none; }
    .hbn-toggle-btn:hover { background: rgba(255,255,255,0.4); }

    /* 대분류 스타일 (4년제/전문대) */
    .hbn-category-row { background-color: #f1f5f9; font-weight: bold; text-align: center; border-bottom: 1px solid #ccc; }
    .hbn-category-title { padding: 8px; color: #333; font-size: 1em; }

    /* 본문 스타일 */
    .hbn-univ-tbody { transition: all 0.2s; }
    .hbn-univ-tbody.hidden { display: none; }
    .hbn-univ-tbody th, .hbn-univ-tbody td { border: 1px solid #e5e7eb; padding: 8px 10px; vertical-align: middle; }
    
    /* 초성 셀 스타일 */
    .hbn-td-initial { background-color: #f8fafc; text-align: center; font-weight: bold; width: 3rem; color: #475569; border-right: 2px solid #335566 !important; }
    .hbn-td-content { text-align: left; line-height: 1.6; }
    
    /* 비고/안내 행 */
    .hbn-note-row { background-color: #ffffff; padding: 10px; font-size: 12px; border-bottom: 1px solid #ccc; line-height: 1.5; color: #666; text-align: center; }

    /* 링크 및 장식 */
    .hbn-link { color: #000; text-decoration: none; font-weight: 500; }
    .hbn-link:hover { text-decoration: underline; color: #335566; }
    .hbn-sep { margin: 0 8px; color: #cbd5e1; }
    .hbn-univ-wrapper del { color: #999; font-size: 0.85em; }

    /* 다크모드 대응 */
    [data-theme='dark'] .hbn-category-row { background-color: #2d2f34; border-color: #444; }
    [data-theme='dark'] .hbn-category-title { color: #eee; }
    [data-theme='dark'] .hbn-univ-tbody th, [data-theme='dark'] .hbn-univ-tbody td { border-color: #444; background-color: #1f2023; color: #eee; }
    [data-theme='dark'] .hbn-td-initial { background-color: #2d2f34; color: #ccc; }
    [data-theme='dark'] .hbn-note-row { background-color: #1f2023; border-color: #444; color: #aaa; }
    [data-theme='dark'] .hbn-link { color: #7cb1ff; }
</style>
<div class="hbn-univ-wrapper">
<table class="hbn-univ-table">
<thead class="hbn-univ-thead">
<tr>
<th colspan="2">
<div class="hbn-univ-header-content">
<img alt="덕빈남도 로고" class="hbn-univ-logo" onerror="this.outerHTML='<span style=\\'font-size:1.5rem;\\'>🏙️</span>'" src="이미지/덕빈남도_로고.webp">
<span class="hbn-univ-title">덕빈남도의 대학 목록</span>
<span class="hbn-toggle-btn" id="hbn-univ-toggle" onclick="toggleDeokbinnamTable()">[접기]</span>
</div>
</th>
</tr>
</thead>
<tbody class="hbn-univ-tbody" id="deokbinnam-univ-tbody">
<tr>
<td class="hbn-note-row" colspan="2">
    덕빈남도 내 소재한 대학교 및 전문대학 목록입니다. 가나다 초성 순으로 정렬되었습니다. <br/>
    <del>방산시에서 전차 지나가는 소리나 대포 쏘는 소리가 들려도 덤덤해지면 당신도 진정한 덕남인</del>
</td>
</tr>
<tr class="hbn-category-row">
<td class="hbn-category-title" colspan="2">🏫 4년제 대학교</td>
</tr>
<tr>
<td class="hbn-td-initial">ㄴ</td>
<td class="hbn-td-content">
    <a class="hbn-link" href="낙주대학교.html">낙주대학교</a>
</td>
</tr>
<tr>
<td class="hbn-td-initial">ㄷ</td>
<td class="hbn-td-content">
    <a class="hbn-link" href="덕남대학교.html">덕남대학교</a> <del>덕남산악회 등반을 환영합니다</del> <span class="hbn-sep">|</span>
    <a class="hbn-link" href="덕주교육대학교.html">덕주교육대학교</a> <span class="hbn-sep">|</span>
    <a class="hbn-link" href="덕주대학교.html">덕주대학교</a>
</td>
</tr>
<tr>
<td class="hbn-td-initial">ㅁ</td>
<td class="hbn-td-content">
    <a class="hbn-link" href="마진해양대학.html">마진해양대학</a>
</td>
</tr>
<tr>
<td class="hbn-td-initial">ㅂ</td>
<td class="hbn-td-content">
    <a class="hbn-link" href="방산대학교.html">방산대학교</a>
</td>
</tr>
<tr>
<td class="hbn-td-initial">ㅎ</td>
<td class="hbn-td-content">
    <a class="hbn-link" href="한국국방기술대학교.html">한국국방기술대학교</a> <del>취업 깡패</del>
</td>
</tr>
<tr class="hbn-category-row">
<td class="hbn-category-title" colspan="2">🎓 전문대학</td>
</tr>
<tr>
<td class="hbn-td-initial">ㄷ</td>
<td class="hbn-td-content">
    <a class="hbn-link" href="덕남도립대학.html">덕남도립대학</a> <span class="hbn-sep">|</span>
    <a class="hbn-link" href="덕빈보건대학.html">덕빈보건대학</a> <span class="hbn-sep">|</span>
    <a class="hbn-link" href="덕빈폴리텍대학.html">덕빈폴리텍대학</a>
</td>
</tr>
<tr>
<td class="hbn-td-initial">ㅇ</td>
<td class="hbn-td-content">
    <a class="hbn-link" href="인곡과학대학.html">인곡과학대학</a>
</td>
</tr>
</tbody>
</table>
</div>
<script>
    function toggleDeokbinnamTable() {
        const tbody = document.getElementById('deokbinnam-univ-tbody');
        const btn = document.getElementById('hbn-univ-toggle');
        
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