/**
 * 효빈광역시 북구 고등학교 둘러보기 틀 생성 스크립트
 * - 제외: 은월고, 추산고, 남전여고
 * - 개별 문서가 있는 학교: 직접 링크
 * - 템플릿 사용 학교: 템플릿 페이지로 파라미터 전달
 */

document.addEventListener("DOMContentLoaded", function() {
    renderBukguHighSchoolTable("bukgu-highschool-nav");
    
    // 템플릿 페이지용: URL 파라미터 체크 및 학교 렌더링 로직 연동
    // 만약 현재 페이지가 템플릿 페이지이고, changeSchool 함수가 존재한다면 실행
    if (typeof changeSchool === 'function') {
        const urlParams = new URLSearchParams(window.location.search);
        const schoolKey = urlParams.get('school');
        if (schoolKey) {
            changeSchool(schoolKey);
        }
    }
});

function renderBukguHighSchoolTable(targetId) {
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    // 학교 데이터 리스트
    // type: 'boy'(남고), 'girl'(여고), 'coed'(공학)
    // prefix: '※'(자사고), '⊙'(자공고), '▣'(특목고), '◈'(특성화고), ''(일반)
    // key: 템플릿 페이지에서 사용할 데이터 키 (개별 문서가 없는 경우 필수)
    // directLink: 개별 문서가 있는 경우 파일명
    const schools = [
        // 1. 개별 문서가 있는 학교들 (기존 생성)
        { name: "고송고", link: "고송고등학교.html", type: "boy", prefix: "" },
        { name: "고송여고", link: "고송여자고등학교.html", type: "girl", prefix: "" },
        { name: "서신고", link: "서신고등학교.html", type: "coed", prefix: "⊙" },
        { name: "중수고", link: "중수고등학교.html", type: "boy", prefix: "" },
        { name: "중수여고", link: "중수여자고등학교.html", type: "girl", prefix: "" },
        { name: "토모고", link: "토모고등학교.html", type: "coed", prefix: "" },
        { name: "효빈예고", link: "효빈예술고등학교.html", type: "coed", prefix: "▣" },
        { name: "효빈종합고", link: "효빈종합고등학교.html", type: "coed", prefix: "▣" },

        // 2. 템플릿 페이지를 사용하는 학교들 (표 데이터 반영)
        { name: "인서고", key: "inseo", type: "coed", prefix: "" },
        { name: "소창고", key: "sochang", type: "coed", prefix: "" },
        { name: "효빈북여고", key: "hbgirls", type: "girl", prefix: "" },
        { name: "효빈북부공고", key: "hbtech", type: "coed", prefix: "◈" },
        { name: "오내고", key: "onae", type: "coed", prefix: "" },
        { name: "남전고", key: "namjeon", type: "coed", prefix: "" },
        { name: "진희고", key: "jinhee", type: "coed", prefix: "" },
        { name: "이남고", key: "inam", type: "boy", prefix: "" },
        { name: "산남고", key: "sannam", type: "coed", prefix: "" },
        { name: "청남고", key: "cheongnam", type: "coed", prefix: "※" },
        { name: "사능고", key: "saneung", type: "coed", prefix: "" },
        { name: "평전고", key: "pyeongjeon", type: "coed", prefix: "" },
        { name: "천왕사고", key: "cheonwangsa", type: "coed", prefix: "" },
        { name: "효빈제일고", key: "hbjeil", type: "coed", prefix: "" }
    ];

    // 가나다 순 정렬
    schools.sort((a, b) => a.name.localeCompare(b.name));

    // HTML 구조 생성
    let html = `
        <div class="nav-box rounded overflow-hidden shadow-sm" style="border: 2px solid var(--wiki-main);">
            <div class="nav-box-header cursor-default" style="background-color: #373a3c;">
                <span>효빈광역시 북구의 고등학교</span>
            </div>
            <div class="bg-white p-2 text-center text-xs border-b border-[#ccc]">
                <div class="mb-1">
                    <span class="bg-boy px-1 border border-gray-200">남자고등학교</span>, 
                    <span class="bg-girl px-1 border border-gray-200">여자고등학교</span>, 
                    이외 남녀공학
                </div>
                <div class="font-bold text-[#FF9922]">※: 자사고, ⊙: 자공고, ▣: 특목고, ◈: 특성화고, 이외 일반계고</div>
            </div>
            <table class="school-table">
                <tbody>
    `;

    // 5열 테이블 생성
    let columns = 5;
    let rowCount = Math.ceil(schools.length / columns);

    for (let i = 0; i < rowCount; i++) {
        html += "<tr>";
        for (let j = 0; j < columns; j++) {
            let index = i * columns + j;
            if (index < schools.length) {
                const s = schools[index];
                let cellClass = "";
                if (s.type === "boy") cellClass = 'class="bg-boy"';
                else if (s.type === "girl") cellClass = 'class="bg-girl"';
                
                // 링크 생성 로직
                let href = "#";
                let onclick = "";
                
                if (s.link) {
                    // 개별 문서로 직접 이동
                    href = s.link;
                } else if (s.key) {
                    // 템플릿 페이지로 이동 (쿼리 파라미터 포함)
                    // 현재 페이지가 템플릿 페이지라면, 페이지 이동 없이 함수만 호출
                    if (window.location.pathname.includes("북구_고등학교_템플릿.html") && typeof changeSchool === 'function') {
                        href = "javascript:void(0);";
                        onclick = `onclick="changeSchool('${s.key}')"`;
                    } else {
                        // 다른 페이지에서는 템플릿 페이지로 이동
                        href = `북구_고등학교_템플릿.html?school=${s.key}`;
                    }
                }

                html += `<td ${cellClass}>${s.prefix}<a href="${href}" ${onclick} class="wiki-link">${s.name}</a></td>`;
            } else {
                html += "<td></td>";
            }
        }
        html += "</tr>";
    }

    html += `
                </tbody>
            </table>
        </div>
    `;

    targetElement.innerHTML = html;
}