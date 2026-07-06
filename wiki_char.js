/* 파일명: wiki_char.js (업그레이드 버전) */
function renderCharTable(data) {
    // targetId가 있으면 그걸 쓰고, 없으면 기본값('char-profile-area') 사용
    const targetId = data.targetId || 'char-profile-area';
    const container = document.getElementById(targetId);
    
    if (!container) return; // 그릴 곳이 없으면 중단

    // 일본어 이름이 있으면 표시, 없으면 숨김
    const jpNameRow = data.jpName ? `<tr><th class="key-cell">일본어명</th><td class="value-cell">${data.jpName}</td></tr>` : '';
    
    // 이름 뒤에 .html을 붙여서 자동으로 링크 생성
    const charLink = `${data.name}.html`;

    const html = `
    <table class="char-wiki-table">
        <tr class="char-header-row">
            <th colspan="2">${data.lineNum}호선 공식 마스코트: <a href="${charLink}" class="wiki-link" style="color:black;">${data.name}</a> (${data.hanjaName}, ${data.engName})</th>
        </tr>
        <tr>
            <td colspan="2" class="char-image-cell">
                <div class="char-photos">
                    <div class="char-photo-box">
                        <img src="이미지/${data.imgBasic}" alt="기본형" style="width:100%; height:100%; object-fit:contain;">
                        <div class="char-photo-label">기본형</div>
                    </div>
                    <div class="char-photo-box">
                        <img src="이미지/${data.imgSD}" alt="SD 버전" style="width:100%; height:100%; object-fit:contain;">
                        <div class="char-photo-label">효빈메트로 쁘띠 버전</div>
                    </div>
                </div>
            </td>
        </tr>
        <tr><th class="key-cell">성명</th><td class="value-cell"><a href="${charLink}" class="wiki-link">${data.name}</a> (${data.hanjaName} / ${data.engName})</td></tr>
        <tr><th class="key-cell">나이</th><td class="value-cell">${data.age}</td></tr>
        ${jpNameRow}
        <tr><th class="key-cell">출신지</th><td class="value-cell">${data.origin}</td></tr>
        <tr><th class="key-cell">학력</th><td class="value-cell">${data.school}</td></tr>
        <tr><th class="key-cell">현재직</th><td class="value-cell">${data.job}</td></tr>
        <tr>
            <th class="key-cell">노선</th>
            <td class="value-cell"><span style="color:var(--wiki-line-color); font-weight:900;">${data.lineNum}호선</span> (${data.colorCode})</td>
        </tr>
    </table>
    `;
    container.innerHTML = html;
}