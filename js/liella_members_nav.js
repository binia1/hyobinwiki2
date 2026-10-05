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
        const container = document.getElementById("liella-members-nav-container");
        if (!container) return;

        // Liella! 멤버별 퍼스널 컬러 및 정보 데이터
        const members = [
            { name: "시부야 카논", cv: "다테 사유리", color: "#FF7F27" },
            { name: "탕 쿠쿠", cv: "Liyuu", color: "#0096CC" },
            { name: "아라시 치사토", cv: "미사키 나코", color: "#FF7296" },
            { name: "헤안나 스미레", cv: "페이튼 나오미", color: "#74F466" },
            { name: "하즈키 렌", cv: "아오야마 나기사", color: "#00008B" },
            { name: "사쿠라코지 키나코", cv: "스즈하라 노조미", color: "#F5D23B" },
            { name: "요네메 메이", cv: "야부시마 아카네", color: "#FF3333" },
            { name: "와카나 시키", cv: "오오쿠마 와카나", color: "#A4D5D3" },
            { name: "오니츠카 나츠미", cv: "에모리 아야", color: "#FF5194" },
            { empty: true }, // 2번째 줄 마지막 빈 칸 처리용
            { name: "빈 마르가레테", cv: "유이나", color: "#B072CE", colspan: 2 },
            { name: "오니츠카 토마리", cv: "사카쿠라 사쿠라", color: "#58DBC3", colspan: 3 }
        ];

        // 1. 현재 페이지 제목이나 URL에서 캐릭터 이름 감지 (자동화 핵심)
        const currentContext = document.title + decodeURIComponent(window.location.href);
        const activeMember = members.find(m => !m.empty && currentContext.includes(m.name));
        
        // 감지된 캐릭터가 있으면 그 색상을, 없으면 슈퍼스타 기본 보라색 사용
        const themeColor = activeMember ? activeMember.color : "#9D88E5"; 
        
        // 배경색에 따른 텍스트 색상 대비 처리 (밝은 색상일 땐 글씨를 어둡게)
        const isLightColor = ["#74F466", "#F5D23B", "#A4D5D3", "#58DBC3"].includes(themeColor);
        const headerTextColor = isLightColor ? "#1f2937" : "#ffffff";

        // 2. 동적 테이블 생성 (5칸 20% 분할 레이아웃)
        let tableHtml = '<table class="w-full border-collapse bg-white text-center"><colgroup><col style="width: 20%;"><col style="width: 20%;"><col style="width: 20%;"><col style="width: 20%;"><col style="width: 20%;"></colgroup><tbody><tr>';
        
        let colCount = 0;
        members.forEach((m, index) => {
            if (m.empty) {
                // 빈 칸 렌더링
                tableHtml += `<td class="border border-gray-200 p-2 align-middle bg-gray-50"></td>`;
                colCount += 1;
            } else {
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
            }

            // 5칸이 차면 다음 줄로 넘김 (마지막 줄 제외)
            if (colCount % 5 === 0 && index !== members.length - 1) {
                tableHtml += '</tr><tr>';
            }
        });
        tableHtml += '</tr></tbody></table>';

        // 3. 최종 HTML 주입
        container.innerHTML = `
            <div class="w-full max-w-4xl mx-auto mb-6 text-sm border-2 rounded-t" style="border-color: ${themeColor};">
                <!-- 헤더 영역 -->
                <div class="relative py-2 flex flex-col justify-center items-center font-bold" style="background-color: ${themeColor}; color: ${headerTextColor};">
                    <div class="text-base tracking-wide">러브 라이브! 슈퍼스타!! (Liella!)</div>
                    <div class="text-xs opacity-90 mt-0.5">등장인물</div>
                    <button id="btn-liella-members" onclick="toggleTable('liella-members-body', 'btn-liella-members')" class="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs font-normal bg-black bg-opacity-10 hover:bg-opacity-20 px-2 py-1 rounded transition-colors duration-200" style="color: ${headerTextColor};">
                        [ 접기 ]
                    </button>
                </div>
                <!-- 바디 영역 -->
                <div id="liella-members-body">
                    ${tableHtml}
                </div>
            </div>
        `;
    });
})();