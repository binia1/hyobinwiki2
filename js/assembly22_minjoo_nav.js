document.addEventListener("DOMContentLoaded", function() {
    
    // 더불어민주당 브랜드 메인 컬러 및 테두리/링크 스타일 정의
    const minjooBlue = "#004EA2";
    const linkColor = "#0066cc";
    const borderColor = "#ddd";

    // 기존 제22대 국회의원 명단 (158명) + 추가 명단 (35명) 통합
    const rawNames = [
        // 기존 국회의원 명단
        "강득구", "강준현", "고민정", "곽상언", "권칠승", "권향엽", "김교흥", "김기표",
        "김남국", "김남근", "김남준", "김남희", "김동아", "김문수", "김민석", "김병주",
        "김성범", "김성환", "김성회", "김승원", "김영배", "김영진", "김영호", "김영환",
        "김용만", "김용민", "김우영", "김원이", "김윤", "김윤덕", "김의겸", "김정호",
        "김주영", "김준혁", "김준환", "김태년", "김태선", "김한규", "김현", "김현정",
        "남인순", "노종면", "맹성규", "모경종", "문금주", "문대림", "문정복", "문진석",
        "민병덕", "민홍철", "박균택", "박민규", "박범계", "박상혁", "박선원", "박성준",
        "박용갑", "박정", "박정현", "박주민", "박지원1942", "박지원1987", "박지혜",
        "박해철", "박홍근", "박홍배", "박희승", "백승아", "백혜련", "복기왕", "부승찬",
        "서미화", "서삼석", "서영교", "서영석", "소병훈", "손명수", "송기헌", "송영길",
        "송옥주", "송재봉", "신정훈", "안규백", "안도걸", "안태준", "안호영", "양부남",
        "어기구", "염태영", "오기형", "오세희", "우원식", "유동수", "윤건영", "윤종군",
        "윤준병", "윤호중", "윤후덕", "이강일", "이개호", "이건태", "이광재", "이광희",
        "이기헌", "이상식", "이성윤", "이소영", "이수진", "이언주", "이연희", "이용선",
        "이용우", "이인영", "이재강", "이재관", "이재정", "이정문", "이정헌", "이주희",
        "이학영", "이해식", "이훈기", "임문영", "임미애", "임오경", "임호선", "장종태",
        "장철민", "전용기", "전은수", "전진숙", "전현희", "정동영", "정성호", "정일영",
        "정준호", "정진욱", "정청래", "정태호", "조계원", "조승래", "조인철", "주철현",
        "진선미", "진성준", "차지호", "채현일", "천준호", "최기상", "최민희", "한민수",
        "한병도", "한정애", "한준호", "허성무", "허영", "허종식", "홍기원", "황명선",
        "황정아", "황희",

        // 추가 요청된 명단 (35명)
        "김성민", "지선진", "고정민", "조상현", "원성준", "이찬대", "고선규", "신진영",
        "신수인", "소판권", "추산령", "노상현", "박청권", "고관영", "서유원", "유성태",
        "신규진", "박파란", "금신만", "송원민", "주은태", "오시연", "고상철", "남소현",
        "위서은", "오선온", "박현언", "고한선", "유상미", "박신언", "김세솔", "김수연",
        "구신원", "고규미", "하성민"
    ];

    // 중복 제거 및 가나다순 정렬 (박지원 동명이인 구분용 특수식 처리 반영)
    const sortedNames = Array.from(new Set(rawNames)).sort((a, b) => {
        const nameA = a.replace(/1942|1987/, '');
        const nameB = b.replace(/1942|1987/, '');
        if (nameA === nameB) return a.localeCompare(b, 'ko');
        return nameA.localeCompare(nameB, 'ko');
    });

    // 5열(Columns) 구조 생성
    let tableRowsHTML = '';
    const columns = 5;
    for (let i = 0; i < sortedNames.length; i += columns) {
        tableRowsHTML += '<tr style="background-color: #fff;">';
        for (let j = 0; j < columns; j++) {
            const index = i + j;
            if (index < sortedNames.length) {
                const nameKey = sortedNames[index];
                let displayName = nameKey;
                let linkTarget = `${nameKey}.html`;

                // 출생연도 표기가 포함된 박지원 구분
                if (nameKey === "박지원1942") {
                    displayName = `<span style="font-size:0.65em; color:${linkColor}; vertical-align:super; font-weight:bold; margin-right:1px;">1942</span>박지원`;
                    linkTarget = "박지원(1942).html";
                } else if (nameKey === "박지원1987") {
                    displayName = `<span style="font-size:0.65em; color:#e83e8c; vertical-align:super; font-weight:bold; margin-right:1px;">1987</span>박지원`;
                    linkTarget = "박지원(1987).html";
                }

                tableRowsHTML += `
                    <td style="padding: 10px 5px; border: 1px solid ${borderColor}; width: 20%; line-height: 1.3;">
                        <a href="${linkTarget}" style="color: ${linkColor}; text-decoration: none;">${displayName}</a>
                    </td>`;
            } else {
                tableRowsHTML += `<td style="padding: 10px 5px; border: 1px solid ${borderColor}; width: 20%; background-color: #f8f9fa;"></td>`;
            }
        }
        tableRowsHTML += '</tr>';
    }

    const assembly22MinjooNavHTML = `
    <div style="border: 1px solid ${minjooBlue}; border-radius: 2px; margin-bottom: 20px; box-shadow: 0 1px 2px rgba(0,0,0,0.1); background-color: #fff; overflow: hidden; font-family: sans-serif;">
        
        <!-- 상단 헤더 영역 (더불어민주당 로고 배지 + 타이틀) -->
        <div style="background-color: ${minjooBlue}; padding: 12px 15px; text-align: center; display: flex; align-items: center; justify-content: center; gap: 12px; color: #fff;">
            
            <!-- 더불어민주당 깃발 로고 배지 -->
            <div style="background-color: #fff; color: ${minjooBlue}; padding: 4px 10px; border-radius: 3px; font-weight: 900; font-size: 0.85em; display: inline-flex; flex-direction: column; align-items: center; justify-content: center; line-height: 1.1; box-shadow: 0 1px 3px rgba(0,0,0,0.2);">
                <span style="font-size: 0.65em; letter-spacing: -0.5px; opacity: 0.9;">더불어</span>
                <span style="font-size: 1.05em; font-weight: 900; letter-spacing: -1px;">민주당</span>
            </div>
            
            <!-- 타이틀 텍스트 -->
            <div style="text-align: left; line-height: 1.2;">
                <div style="font-size: 1.15em; font-weight: 900; letter-spacing: -0.5px;">제22대 국회의원</div>
            </div>
        </div>

        <!-- 펼치기 / 접기 영역 -->
        <details class="wiki-folder" open="" style="margin: 0; border: none;">
            <summary class="wiki-folder-summary" style="border: none; border-bottom: 1px solid ${borderColor}; background-color: #fff; padding: 8px; font-weight: bold; text-align: center; cursor: pointer; color: #333; list-style: none;">[ 펼치기 · 접기 ]</summary>
            
            <div class="wiki-folder-content" style="padding: 0;">
                <table style="width: 100%; border-collapse: collapse; text-align: center; font-size: 0.9em; table-layout: fixed; margin: 0;">
                    <tbody>
                        ${tableRowsHTML}

                        <!-- 하단 정당 이동 바 -->
                        <tr>
                            <td colspan="5" style="background-color: ${minjooBlue}; color: #fff; padding: 8px; border: 1px solid ${minjooBlue}; font-weight: bold; text-align: center; font-size: 0.85em; word-break: keep-all;">
                                <a href="더불어민주당.html" style="color: #fff; text-decoration: none;">더불어민주당</a> · 
                                <a href="국민의힘.html" style="color: #fff; text-decoration: none;">국민의힘</a> · 
                                <a href="조국혁신당.html" style="color: #fff; text-decoration: none;">조국혁신당</a> · 
                                <a href="진보당.html" style="color: #fff; text-decoration: none;">진보당</a> · 
                                <a href="개혁신당.html" style="color: #fff; text-decoration: none;">개혁신당</a> · 
                                <a href="기본소득당.html" style="color: #fff; text-decoration: none;">기본소득당</a> · 
                                <a href="사회민주당.html" style="color: #fff; text-decoration: none;">사회민주당</a> · 
                                <a href="무소속.html" style="color: #fff; text-decoration: none;">무소속</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </details>
    </div>
    `;

    const container = document.getElementById("assembly22-minjoo-nav-container") || 
                      document.querySelector(".assembly22-minjoo-nav-container") ||
                      document.getElementById("minjoo-22nd-assembly-nav-container") ||
                      document.querySelector(".minjoo-22nd-assembly-nav-container");
    if (container) {
        container.innerHTML = assembly22MinjooNavHTML;
    } else {
        console.warn("더불어민주당 제22대 국회의원 둘러보기 틀을 삽입할 컨테이너 요소를 찾을 수 없습니다.");
    }
});