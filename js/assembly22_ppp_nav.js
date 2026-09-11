document.addEventListener("DOMContentLoaded", function() {
    
    // 국민의힘 브랜드 메인 컬러 및 테두리/링크 스타일 정의
    const pppRed = "#E61E2B"; // 국민의힘 당색
    const linkColor = "#0066cc";
    const borderColor = "#ddd";

    // 기존 제22대 국회의원 명단 + 추가 명단 통합
    const rawNames = [
        // 기존 국회의원 명단
        "강대식", "강명구", "강민국", "강선영", "강승규", "고동진", "곽규택", "구자근",
        "권영세", "권영진", "김건", "김기웅", "김기현", "김대식", "김도읍", "김미애",
        "김민전", "김상훈", "김석기", "김선교", "김성원", "김소희", "김승수", "김예지",
        "김용태", "김위상", "김은혜", "김장겸", "김재섭", "김정재", "김종양", "김태규",
        "김태호", "김형동", "김희정", "나경원", "박대출", "박덕흠", "박상웅", "박성민",
        "박성훈", "박수민", "박수영", "박정하", "박정훈", "박준태", "박충권", "박형수",
        "배준영", "배현진", "백종헌", "서명옥", "서범수", "서일준", "서지영", "서천호",
        "성일종", "송석준", "송언석", "신동욱", "신성범", "안상훈", "안철수", "엄태영",
        "우재준", "유상범", "유영하", "유용원", "유의동", "윤상현", "윤영석", "윤용근",
        "윤재옥", "윤한홍", "이달희", "이만희", "이성권", "이소희", "이양수", "이인선",
        "이상휘", "이종배", "이종욱", "이진숙", "이철규", "이헌승", "임이자", "임종득",
        "장동혁", "정동만", "정성국", "정연욱", "정점식", "정희용", "조경태", "조배숙",
        "조승환", "조은희", "조정훈", "조지연", "주진우", "주호영", "진종오", "최보윤",
        "최수진", "최은석", "최형두", "한기호", "한지아", "홍철호", "황보장", "황영철",

        // 덕빈권 의원 추가 (4명)
        "고진남", "구진내", "나두길", "강동혁"
    ];

    // 중복 제거 및 가나다순 정렬
    const sortedNames = Array.from(new Set(rawNames)).sort((a, b) => {
        return a.localeCompare(b, 'ko');
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

    const assembly22PPPNavHTML = `
    <div style="border: 1px solid ${pppRed}; border-radius: 2px; margin-bottom: 20px; box-shadow: 0 1px 2px rgba(0,0,0,0.1); background-color: #fff; overflow: hidden; font-family: sans-serif;">
        
        <!-- 상단 헤더 영역 -->
        <div style="background-color: ${pppRed}; padding: 12px 15px; text-align: center; display: flex; align-items: center; justify-content: center; gap: 12px; color: #fff;">
            
            <!-- 국민의힘 로고 배지 (흰색 아이콘/로고타입) -->
            <div style="background-color: #fff; color: ${pppRed}; padding: 4px 10px; border-radius: 3px; font-weight: 900; font-size: 0.85em; display: inline-flex; flex-direction: column; align-items: center; justify-content: center; line-height: 1.1; box-shadow: 0 1px 3px rgba(0,0,0,0.2);">
                <span style="font-size: 0.65em; letter-spacing: -0.5px; opacity: 0.9;">국민의</span>
                <span style="font-size: 1.05em; font-weight: 900; letter-spacing: -1px;">힘</span>
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
                            <td colspan="5" style="background-color: ${pppRed}; color: #fff; padding: 8px; border: 1px solid ${pppRed}; font-weight: bold; text-align: center; font-size: 0.85em; word-break: keep-all;">
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

    const container = document.getElementById("assembly22-ppp-nav-container") || 
                      document.querySelector(".assembly22-ppp-nav-container");
    if (container) {
        container.innerHTML = assembly22PPPNavHTML;
    } else {
        console.warn("국민의힘 제22대 국회의원 둘러보기 틀을 삽입할 컨테이너 요소를 찾을 수 없습니다.");
    }
});