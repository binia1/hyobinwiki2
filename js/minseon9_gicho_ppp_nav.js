document.addEventListener("DOMContentLoaded", function() {
    
    // 국민의힘 브랜드 메인 컬러 및 테두리/링크 색상
    const pppRed = "#E61E2B";
    const linkColor = "#0066cc";
    const borderColor = "#ddd";

    // 기존 단체장 명단 + 추가 요청된 단체장 명단 통합
    const rawNames = [
        // 기존 명단 (94명)
        "강기윤", "강성태", "강철호", "공한수", "권기창", "권오상", "김경대", "김경호", "김길성", "김길수",
        "김대권", "김덕현", "김동일", "김문근", "김병삼", "김성수", "김성제", "김영길", "김영욱", "김용판",
        "김장호", "김재욱", "김진열", "김찬진", "김학홍", "김현기", "김현수", "김홍열", "나동연", "류규하",
        "박동식", "박상수", "박용선", "박용철", "박정주", "박형덕", "배낙호", "백성현", "백영현", "서강석",
        "서태원", "성낙인", "송인헌", "신계용", "신상진", "신영재", "심재국", "안병구", "안병윤", "안재민",
        "엄승용", "오도창", "우성진", "유명현", "윤경희", "윤일현", "윤희신", "이기재", "이근수", "이동석",
        "이민근", "이병선", "이상일", "이상호", "이수희", "이순걸", "이완섭", "이용우", "이응우", "이재호",
        "이충우", "이현재", "임현철", "장준용", "전성수", "전진선", "정영철", "조재구", "조주홍", "조현일",
        "주낙영", "주석수", "진병영", "차석호", "천기옥", "최기영", "최원철", "최유철", "최재구", "최재형",
        "최재훈", "최진봉", "하학열", "황병직",

        // 추가 요청된 명단 (6명)
        "김철호", "박성진", "고정화", "문석준", "문양인", "신태양"
    ];

    // 한국어 가나다순 정렬
    const sortedNames = Array.from(new Set(rawNames)).sort((a, b) => a.localeCompare(b, 'ko'));

    // 5열(Columns) 테이블 셀 생성
    let tableRowsHTML = '';
    const columns = 5;
    for (let i = 0; i < sortedNames.length; i += columns) {
        tableRowsHTML += '<tr style="background-color: #fff;">';
        for (let j = 0; j < columns; j++) {
            const index = i + j;
            if (index < sortedNames.length) {
                const name = sortedNames[index];
                tableRowsHTML += `
                    <td style="padding: 10px 5px; border: 1px solid ${borderColor}; width: 20%; line-height: 1.3;">
                        <a href="${name}.html" style="color: ${linkColor}; text-decoration: none;">${name}</a>
                    </td>`;
            } else {
                tableRowsHTML += `<td style="padding: 10px 5px; border: 1px solid ${borderColor}; width: 20%; background-color: #f8f9fa;"></td>`;
            }
        }
        tableRowsHTML += '</tr>';
    }

    const minseon9GichoPPPNavHTML = `
    <div style="border: 1px solid ${pppRed}; border-radius: 2px; margin-bottom: 20px; box-shadow: 0 1px 2px rgba(0,0,0,0.1); background-color: #fff; overflow: hidden; font-family: sans-serif;">
        
        <!-- 상단 헤더 영역 (국민의힘 로고 + 타이틀) -->
        <div style="background-color: ${pppRed}; padding: 12px 15px; text-align: center; display: flex; align-items: center; justify-content: center; gap: 12px; color: #fff;">
            
            <!-- 국민의힘 로고 배지 (흰색 아이콘/로고타입) -->
            <div style="background-color: #fff; color: ${pppRed}; padding: 3px 8px; border-radius: 3px; font-weight: 900; font-size: 0.85em; display: inline-flex; flex-direction: column; align-items: center; justify-content: center; line-height: 1.1; box-shadow: 0 1px 3px rgba(0,0,0,0.2);">
                <span style="font-size: 0.65em; letter-spacing: -0.5px; opacity: 0.9;">국민의</span>
                <span style="font-size: 1.05em; font-weight: 900; letter-spacing: -1px;">힘</span>
            </div>
            
            <!-- 타이틀 텍스트 -->
            <div style="text-align: left; line-height: 1.2;">
                <div style="font-size: 1.15em; font-weight: 900; letter-spacing: -0.5px;">민선 9기 기초자치단체장</div>
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
                            <td colspan="5" style="background-color: ${pppRed}; color: #fff; padding: 8px; border: 1px solid ${pppRed}; font-weight: bold; text-align: center; font-size: 0.9em;">
                                <a href="더불어민주당.html" style="color: #fff; text-decoration: none;">더불어민주당</a> · 
                                <a href="국민의힘.html" style="color: #fff; text-decoration: none;">국민의힘</a> · 
                                <a href="조국혁신당.html" style="color: #fff; text-decoration: none;">조국혁신당</a> · 
                                <a href="무소속.html" style="color: #fff; text-decoration: none;">무소속</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </details>
    </div>
    `;

    const container = document.getElementById("minseon9-gicho-ppp-nav-container") || 
                      document.querySelector(".minseon9-gicho-ppp-nav-container");
    if (container) {
        container.innerHTML = minseon9GichoPPPNavHTML;
    } else {
        console.warn("국민의힘 민선 9기 기초자치단체장 둘러보기 틀을 삽입할 '.minseon9-gicho-ppp-nav-container' 또는 '#minseon9-gicho-ppp-nav-container' 요소를 찾을 수 없습니다.");
    }
});