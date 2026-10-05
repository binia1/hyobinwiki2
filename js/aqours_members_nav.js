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
        const container = document.getElementById("aqours-members-nav-container");
        if (!container) return;

        // Aqours 멤버별 퍼스널 컬러 및 정보 데이터
        const members = [
            { name: "타카미 치카", cv: "이나미 안쥬", color: "#F08300" },
            { name: "사쿠라우치 리코", cv: "아이다 리카코", color: "#FB6372" },
            { name: "마츠우라 카난", cv: "스와 나나카", color: "#13E8AE" },
            { name: "쿠로사와 다이아", cv: "코미야 아리사", color: "#F23B4C" },
            { name: "와타나베 요우", cv: "사이토 슈카", color: "#49B9F9" },
            { name: "츠시마 요시코", cv: "코바야시 아이카", color: "#898989" },
            { name: "쿠니키다 하나마루", cv: "타카츠키 카나코", color: "#E6D617" },
            { name: "오하라 마리", cv: "스즈키 아이나", color: "#AE58CD" },
            { name: "쿠로사와 루비", cv: "후리하타 아이", color: "#EA5B76" },
            { empty: true } // 2번째 줄 마지막 빈 칸 처리용
        ];

        // 1. 현재 페이지 제목이나 URL에서 캐릭터 이름 감지
        const currentContext = document.title + decodeURIComponent(window.location.href);
        const activeMember = members.find(m => !m.empty && currentContext.includes(m.name));
        
        // 감지된 캐릭터가 있으면 그 색상을, 없으면 아쿠아 기본 물색(파란색) 사용
        const themeColor = activeMember ? activeMember.color : "#0098EB"; 
        
        // 배경색에 따른 텍스트 색상 대비 처리 (밝은 색상일 땐 글씨를 어둡게)
        const isLightColor = ["#E6D617", "#13E8AE"].includes(themeColor);
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
                    <div class="text-base tracking-wide">Aqours (아쿠아)</div>
                    <div class="text-xs opacity-90 mt-0.5">등장인물</div>
                    <button id="btn-aqours-members" onclick="toggleTable('aqours-members-body', 'btn-aqours-members')" class="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs font-normal bg-black bg-opacity-10 hover:bg-opacity-20 px-2 py-1 rounded transition-colors duration-200" style="color: ${headerTextColor};">
                        [ 접기 ]
                    </button>
                </div>
                <!-- 바디 영역 -->
                <div id="aqours-members-body">
                    ${tableHtml}
                </div>
            </div>
        `;
    });
})();