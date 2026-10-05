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
        const container = document.getElementById("muse-members-nav-container");
        if (!container) return;

        // μ's 멤버별 퍼스널 컬러 및 정보 데이터
        const members = [
            { name: "코사카 호노카", cv: "닛타 에미", color: "#E2732D" },
            { name: "아야세 에리", cv: "난죠 요시노", color: "#36B3DD" },
            { name: "미나미 코토리", cv: "우치다 아야", color: "#8C9395" },
            { name: "소노다 우미", cv: "미모리 스즈코", color: "#1660A5" },
            { name: "호시조라 린", cv: "이이다 리호", color: "#F1C51F" },
            { name: "니시키노 마키", cv: "Pile", color: "#CC3554" },
            { name: "토죠 노조미", cv: "쿠스다 아이나", color: "#744791" },
            { name: "코이즈미 하나요", cv: "쿠보 유리카", color: "#54AB48" },
            { name: "야자와 니코", cv: "토쿠이 소라", color: "#F172A3" },
            { empty: true } // 2번째 줄 마지막 빈 칸 처리용
        ];

        // 1. 현재 페이지 제목이나 URL에서 캐릭터 이름 감지
        const currentContext = document.title + decodeURIComponent(window.location.href);
        const activeMember = members.find(m => !m.empty && currentContext.includes(m.name));
        
        // 감지된 캐릭터가 있으면 그 색상을, 없으면 뮤즈 기본 핑크색 사용
        const themeColor = activeMember ? activeMember.color : "#E6007E"; 
        
        // 배경색에 따른 텍스트 색상 대비 처리 (밝은 색상일 땐 글씨를 어둡게)
        const isLightColor = ["#F1C51F", "#8C9395"].includes(themeColor);
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

                tableHtml += `
                    <td class="border border-gray-200 p-2 align-middle" style="${cellStyle}">
                        <a href="${m.name}_애니메이션.html" class="${textClass}" style="${linkStyle}">${m.name}</a><br/>
                        <span class="text-xs text-gray-500 font-normal">(CV. ${m.cv})</span>
                    </td>
                `;
                colCount += 1;
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
                    <div class="text-base tracking-wide">μ's (뮤즈)</div>
                    <div class="text-xs opacity-90 mt-0.5">등장인물</div>
                    <button id="btn-muse-members" onclick="toggleTable('muse-members-body', 'btn-muse-members')" class="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs font-normal bg-black bg-opacity-10 hover:bg-opacity-20 px-2 py-1 rounded transition-colors duration-200" style="color: ${headerTextColor};">
                        [ 접기 ]
                    </button>
                </div>
                <!-- 바디 영역 -->
                <div id="muse-members-body">
                    ${tableHtml}
                </div>
            </div>
        `;
    });
})();