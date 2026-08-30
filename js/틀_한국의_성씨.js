(function() {
    // 1. 스타일 주입
    if (!document.getElementById('style-korean-surnames')) {
        const style = document.createElement('style');
        style.id = 'style-korean-surnames';
        style.textContent = `
            .surnames-wrapper {
                border: 1px solid #ccc;
                margin-bottom: 20px;
                background-color: #fff;
                border-radius: 2px;
                overflow: hidden;
            }
            .surnames-summary {
                background-color: #00A495;
                color: white;
                padding: 10px;
                text-align: center;
                cursor: pointer;
                list-style: none;
                display: block;
            }
            .surnames-summary::-webkit-details-marker { display: none; }
            .surnames-title {
                font-size: 1.15rem;
                font-weight: bold;
                margin-bottom: 5px;
            }
            .surnames-toggle {
                font-size: 0.85rem;
                background: #fff;
                color: #333;
                padding: 5px;
                border-bottom: 1px solid #ccc;
                font-weight: bold;
                text-align: center;
                cursor: pointer;
            }
            .surnames-notes {
                background: #fff;
                text-align: center;
                padding: 8px 10px;
                font-size: 0.8rem;
                border-bottom: 1px solid #e0e0e0;
                color: #555;
            }
            .surnames-green { color: #6EBB10; font-weight: bold; }
            .surnames-table {
                width: 100%;
                border-collapse: collapse;
                background: #fff;
                font-size: 0.85rem;
            }
            .surnames-table th {
                background-color: #00A495;
                color: white;
                width: 40px;
                text-align: center;
                border: 1px solid #e0e0e0;
                border-left: none;
                font-weight: bold;
            }
            .surnames-table td {
                border: 1px solid #e0e0e0;
                padding: 6px 12px;
                line-height: 1.8;
                border-right: none;
                word-break: keep-all;
            }
            .surnames-link { color: #0275d8; text-decoration: none; }
            .surnames-link:hover { text-decoration: underline; }
            .surnames-rare { color: #6EBB10; text-decoration: none; }
            .surnames-rare:hover { text-decoration: underline; }
            .surnames-sep { color: #999; margin: 0 4px; }
        `;
        document.head.appendChild(style);
    }

    // 2. 성씨 데이터 (별표 *가 붙은 것은 100명 미만 희귀 성씨)
    const surnameData = [
        { c: 'ㄱ', items: "가, 간, 갈, 감, 강, *강전, *개, 견, 경, 계, 고, *곡, 공, 곽, 관, 교, 구, 국, *군, 궁, 궉, 권, 근, 금, 기, 길, 김" },
        { c: 'ㄴ', items: "나, *난, 남, 남궁, 낭, 내, 노, *뇌, *누" },
        { c: 'ㄷ', items: "다, 단, *담, 당, 대, 도, *독, 독고, 돈, 동, 동방, 두, 등, *등정" },
        { c: 'ㄹ', items: "라, *란, 랑, 려, 로, *뢰, 류, 리, 림" },
        { c: 'ㅁ', items: "마, 만, 망절, 매, 맹, 명, 모, 목, *묘, 무, *무본, 묵, 문, 미, 민" },
        { c: 'ㅂ', items: "박, 반, 방, 배, 백, 번, *범, 변, 보, 복, 봉, 부, *비, 빈, 빙" },
        { c: 'ㅅ', items: "사, 사공, 산, 삼, 상, 서, 서문, 석, 선, 선우, 설, *섭, 성, 소, 소봉, 손, 송, 수, 순, 승, 시, 신, 심, 십" },
        { c: 'ㅇ', items: "아, 안, 애, 야, 양, 어, *어금, 엄, 여, 연, 염, 엽, 영, 예, 오, 옥, 온, 옹, 완, 왕, *요, 용, 우, 운, 원, 위, 유, 육, 윤, 은, 음, 이, 인, 임" },
        { c: 'ㅈ', items: "자, 잠, 장, 장곡, 저, 전, 점, 정, 제, 제갈, 조, 종, 좌, 주, 준, 즙, 증, 지, 진" },
        { c: 'ㅊ', items: "차, 창, 채, 천, 초, *총, 최, 추" },
        { c: 'ㅋ', items: "쾌" },
        { c: 'ㅌ', items: "탁, 탄, 탕, 태" },
        { c: 'ㅍ', items: "판, 팽, 편, 평, *포, 표, 풍, 피, 필" },
        { c: 'ㅎ', items: "하, 학, 한, 함, 해, 허, *혁, 현, 형, 호, 홍, 화, 환, 황, 황목, 황보, *후, 흥" }
    ];

    // 3. 테이블 행(<tr>) 동적 생성
    let tableRowsHTML = '';
    surnameData.forEach(row => {
        let namesHTML = row.items.split(', ').map(name => {
            if (name.startsWith('*')) {
                let actualName = name.substring(1);
                return `<a href="${actualName}.html" class="surnames-rare">${actualName}</a>`;
            } else {
                return `<a href="${name}.html" class="surnames-link">${name}</a>`;
            }
        }).join('<span class="surnames-sep">·</span>');
        
        tableRowsHTML += `
            <tr>
                <th>${row.c}</th>
                <td>${namesHTML}</td>
            </tr>
        `;
    });

    // 4. 최종 HTML 템플릿 결합
    const templateHTML = `
        <details class="surnames-wrapper" open>
            <summary class="surnames-summary">
                <div class="surnames-title">한국의 성씨</div>
            </summary>
            <div class="surnames-toggle">[ 펼치기 · 접기 ]</div>
            <div class="surnames-notes">
                • <span class="surnames-green">초록색</span>: 2015년 기준으로 총 인구 100명 미만인 성씨 
                &nbsp;&nbsp;&nbsp;&nbsp; 
                • 같은 한글 + 다른 한자는 합산, 다른 한글 + 같은 한자는 별도
            </div>
            <table class="surnames-table">
                <tbody>
                    ${tableRowsHTML}
                </tbody>
            </table>
        </details>
    `;

    // 5. DOM에 삽입
    const targetDiv = document.getElementById('template-korean-surnames');
    if (targetDiv) {
        targetDiv.innerHTML = templateHTML;
    } else if (document.currentScript) {
        document.currentScript.insertAdjacentHTML('afterend', templateHTML);
    }
})();