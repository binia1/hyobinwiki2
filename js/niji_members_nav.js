(function () {
    // 공통 토글 함수
    if (typeof window.toggleTable !== 'function') {
        window.toggleTable = function (targetId, btnId) {
            var target = document.getElementById(targetId);
            var btn = document.getElementById(btnId);
            if (target.style.display === 'none') {
                target.style.display = 'block';
                btn.innerText = '[ 접기 ]';
            } else {
                target.style.display = 'none';
                btn.innerText = '[ 펼치기 ]';
            }
        };
    }

    document.addEventListener("DOMContentLoaded", function () {
        const container = document.getElementById("niji-members-nav-container");
        if (!container) return;

        // 니지동 멤버별 퍼스널 컬러 및 정보 데이터 (효빈시 버스 도색 설정 반영)
        const members = [
            { name: "타카사키 유우", cv: "야노 히나키", color: "#1d1d1d" },
            { name: "우에하라 아유무", cv: "오오니시 아구리", color: "#ED7D95" },
            { name: "나카스 카스미", cv: "사가라 마유", color: "#E7D600" },
            { name: "오사카 시즈쿠", cv: "마에다 카오리", color: "#01B7ED" },
            { name: "아사카 카린", cv: "쿠보타 미유", color: "#485EC6" },
            { name: "미야시타 아이", cv: "무라카미 나츠미", color: "#FF5800" },
            { name: "코노에 카나타", cv: "키토 아카리", color: "#A664A0" },
            { name: "유키 세츠나", cv: "쿠스노키 토모리 → 하야시 코코", color: "#D81C2F" },
            { name: "엠마 베르데", cv: "사시데 마리아", color: "#84C36E" },
            { name: "텐노지 리나", cv: "타나카 치에미", color: "#5383C3" },
            { name: "미후네 시오리코", cv: "코이즈미 모에카", color: "#37B484" },
            { name: "미아 테일러", cv: "우치다 슈우", color: "#A9A89A" },
            { name: "쇼우 란쥬", cv: "호모토 아키나", color: "#F8C0C8", colspan: 4 }
        ];

        // 1. 현재 페이지 제목이나 URL에서 캐릭터 이름 감지 (자동화 핵심)
        const currentContext = document.title + decodeURIComponent(window.location.href);
        const activeMember = members.find(m => currentContext.includes(m.name));
        
        // 감지된 캐릭터가 있으면 그 캐릭터의 색상을, 없으면 기본 니지동 노란색 사용
        const themeColor = activeMember ? activeMember.color : "#FFD700"; 
        
        // 배경색에 따른 텍스트 색상 대비 처리 (밝은 색상일 땐 글씨를 어둡게)
        const isLightColor = ["#E7D600", "#F8C0C8", "#A9A89A"].includes(themeColor);
        const headerTextColor = isLightColor ? "#1f2937" : "#ffffff";

        // 2. 동적 테이블 생성
        let tableHtml = '<table class="w-full border-collapse bg-white text-center"><colgroup><col style="width: 25%;"><col style="width: 25%;"><col style="width: 25%;"><col style="width: 25%;"></colgroup><tbody><tr>';
        
        let colCount = 0;
        members.forEach((m, index) => {
            const isHighlight = activeMember && activeMember.name === m.name;
            
            // 현재 캐릭터 칸이면 굵은 테두리와 강조 효과, 아니면 기본 회색 바탕
            const cellStyle = isHighlight 
                ? `background-color: #fdfdfd; box-shadow: inset 0 0 0 2px ${m.color}; font-weight: 900;` 
                : `background-color: #f9fafb;`;
            
            const linkStyle = isHighlight ? `color: ${m.color};` : `color: #0275d8; font-weight: 500;`;
            const textClass = isHighlight ? "" : "hover:underline";
            const colspanAttr = m.colspan ? `colspan="${m.colspan}"` : "";

            tableHtml += `
                <td class="border border-gray-200 p-2 align-middle" ${colspanAttr} style="${cellStyle}">
                    <a href="${m.name}_애니메이션.html" class="${textClass}" style="${linkStyle}">${m.name}</a><br/>
                    <span class="text-xs text-gray-500 font-normal">(CV. ${m.cv})</span>
                </td>
            `;

            colCount += m.colspan || 1;
            // 4칸이 차면 다음 줄로 넘김 (마지막 멤버 제외)
            if (colCount % 4 === 0 && index !== members.length - 1) {
                tableHtml += '</tr><tr>';
            }
        });
        tableHtml += '</tr></tbody></table>';

        // 3. 최종 HTML 주입
        container.innerHTML = `
            <div class="w-full max-w-4xl mx-auto mb-6 text-sm border-2 rounded-t" style="border-color: ${themeColor};">
                <!-- 헤더 영역 -->
                <div class="relative py-2 flex flex-col justify-center items-center font-bold" style="background-color: ${themeColor}; color: ${headerTextColor};">
                    <div class="text-base tracking-wide">니지가사키 학원 스쿨 아이돌 동호회</div>
                    <div class="text-xs opacity-90 mt-0.5">등장인물</div>
                    <button id="btn-niji-members" onclick="toggleTable('niji-members-body', 'btn-niji-members')" class="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs font-normal bg-black bg-opacity-10 hover:bg-opacity-20 px-2 py-1 rounded transition-colors duration-200" style="color: ${headerTextColor};">
                        [ 접기 ]
                    </button>
                </div>
                <!-- 바디 영역 -->
                <div id="niji-members-body">
                    ${tableHtml}
                </div>
            </div>
        `;
    });
})();