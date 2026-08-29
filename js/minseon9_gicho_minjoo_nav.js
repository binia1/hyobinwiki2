document.addEventListener("DOMContentLoaded", function() {
    
    const minjooBlue = "#004EA2";
    const linkColor = "#0066cc";
    const borderColor = "#ddd";

    // 기존 이미지의 단체장 명단 + 추가 요청된 단체장 명단 통합
    const rawNames = [
        // 이미지 내 기존 명단 (119명)
        "강석주", "강성휘", "공영민", "구자열", "구재용",
        "권익현", "김기재", "김동욱", "김명식", "김미경",
        "김병내", "김보라", "김산", "김세훈", "김왕규",
        "김원기", "김이강", "김재준", "김정식", "김정중",
        "김제선", "김중남", "김진규", "김찬술", "김철우",
        "김철훈", "김태석", "김한종", "류경기", "류경완",
        "류삼영", "명현관", "문정우", "민경선", "박관열",
        "박병규", "박상준", "박승원", "박운기", "박재범",
        "박종원", "박준희", "박형우", "변광용", "서영학",
        "서준오", "서태경", "성수석", "손배찬", "손화정",
        "손훈모", "신동화", "신수정", "심덕섭", "양충모",
        "오세현", "우성빈", "우승희", "유동균", "유승광",
        "유보화", "유찬종", "유희태", "육동한", "윤병태",
        "이기형", "이남오", "이동권", "이병래", "이상천",
        "이승로", "이장섭", "이재각", "이재영", "이재준",
        "이정학", "이학수", "임병택", "임지락", "임택",
        "장기수", "장길선", "장세일", "장신상", "장인홍",
        "장정민", "전문학", "전춘성", "정덕영", "정명근",
        "정명희", "정성주", "정영두", "정용래", "정창수",
        "조병옥", "조상래", "조용익", "조용호", "조유진",
        "조지훈", "진교훈", "차준택", "최기찬", "최대호",
        "최동민", "최상기", "최승준", "최영일", "최원용",
        "최정호", "최현덕", "최훈식", "한대희", "한득수",
        "함명준", "황규철", "황인호", "황인홍",

        // 추가 요청된 명단 (34명)
        "구성연", "부서원", "오전희", "김지언", "권상남", "이규희", "전역헌", "성선설", "한성민", "오현주",
        "이성민", "조민규", "정우혁", "고태훈", "진기현", "노준석", "이재성", "강미소", "최정아", "이지현",
        "박아상", "장은재", "김민철", "유진태", "오세윤", "전지호", "최민규", "이재원", "주언일", "서윤수",
        "김도연", "이영진", "정동혁", "최현수"
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
                    <td style="padding: 10px 5px; border: 1px solid ${borderColor}; width: 20%;">
                        <a href="${name}.html" style="color: ${linkColor}; text-decoration: none;">${name}</a>
                    </td>`;
            } else {
                tableRowsHTML += `<td style="padding: 10px 5px; border: 1px solid ${borderColor}; width: 20%; background-color: #f8f9fa;"></td>`;
            }
        }
        tableRowsHTML += '</tr>';
    }

    const minseon9GichoNavHTML = `
    <div style="border: 1px solid ${minjooBlue}; border-radius: 2px; margin-bottom: 20px; box-shadow: 0 1px 2px rgba(0,0,0,0.1); background-color: #fff; overflow: hidden; font-family: sans-serif;">
        
        <!-- 상단 헤더 영역 (더불어민주당 로고 + 타이틀) -->
        <div style="background-color: ${minjooBlue}; padding: 12px 15px; text-align: center; display: flex; align-items: center; justify-content: center; gap: 12px; color: #fff;">
            
            <!-- 더불어민주당 깃발 로고 배지 -->
            <div style="background-color: #fff; color: ${minjooBlue}; padding: 3px 8px; border-radius: 3px; font-weight: 900; font-size: 0.85em; display: inline-flex; flex-direction: column; align-items: center; justify-content: center; line-height: 1.1; box-shadow: 0 1px 3px rgba(0,0,0,0.2);">
                <span style="font-size: 0.65em; letter-spacing: -0.5px; opacity: 0.9;">더불어</span>
                <span style="font-size: 1.05em; font-weight: 900; letter-spacing: -1px;">민주당</span>
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
                            <td colspan="5" style="background-color: ${minjooBlue}; color: #fff; padding: 8px; border: 1px solid ${minjooBlue}; font-weight: bold; text-align: center; font-size: 0.9em;">
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

    const container = document.getElementById("minseon9-gicho-minjoo-nav-container") || 
                      document.querySelector(".minseon9-gicho-minjoo-nav-container");
    if (container) {
        container.innerHTML = minseon9GichoNavHTML;
    } else {
        console.warn("더불어민주당 민선 9기 기초자치단체장 둘러보기 틀을 삽입할 '.minseon9-gicho-minjoo-nav-container' 또는 '#minseon9-gicho-minjoo-nav-container' 요소를 찾을 수 없습니다.");
    }
});