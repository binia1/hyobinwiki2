document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("bangdream-nav-container");
    if (!container) return;

    // 1. 방대한 밴드 및 멤버 데이터베이스 (누락 절대 방지용)
    const bandData = {
        "Poppin'Party": {
            bg: "#ff3377", color: "#FF3377",
            logo: "Poppin_party_logo.webp", image10th: "Poppin Party 10th.webp",
            members: [
                { name: "토야마 카스미", role: "기타 & 보컬", color: "#f52", textColor: "#FFF", hasCard: true },
                { name: "하나조노 타에", role: "기타", color: "#07d", textColor: "#FFF", hasCard: true },
                { name: "우시고메 리미", role: "베이스", color: "#f5b", textColor: "#FFF", hasCard: true },
                { name: "야마부키 사아야", role: "드럼", color: "#fc1", textColor: "#000", hasCard: true },
                { name: "이치가야 아리사", role: "키보드", color: "#a6d", textColor: "#FFF", hasCard: true }
            ]
        },
        "Afterglow": {
            bg: "#ee3344", color: "#ee3344",
            logo: "Afterglow(BanG Dream!) 로고.svg", image10th: "Afterglow 10th.webp",
            members: [
                { name: "미타케 란", role: "기타 & 보컬", color: "#e11", textColor: "#FFF", hasCard: true },
                { name: "아오바 모카", role: "기타", color: "#0a6", textColor: "#FFF", hasCard: true },
                { name: "우에하라 히마리", role: "베이스", color: "#f88", textColor: "#FFF", hasCard: true },
                { name: "우다가와 토모에", role: "드럼", color: "#b03", textColor: "#FFF", hasCard: true },
                { name: "하자와 츠구미", role: "키보드", color: "#fe8", textColor: "#000", hasCard: true }
            ]
        },
        "Pastel*Palettes": {
            bg: "#33ddaa", color: "#33ddaa",
            logo: "파스파레로고.svg", image10th: "Pastel Palettes 10th.webp",
            members: [
                { name: "마루야마 아야", role: "보컬", color: "#f8b", textColor: "#FFF", hasCard: true },
                { name: "히카와 히나", role: "기타", color: "#4cd", textColor: "#FFF", hasCard: true },
                { name: "시라사기 치사토", role: "베이스", color: "#fe8", textColor: "#000", hasCard: true },
                { name: "야마토 마야", role: "드럼", color: "#8d8", textColor: "#FFF", hasCard: true },
                { name: "와카미야 이브", role: "키보드", color: "#ddf", textColor: "#000", hasCard: true }
            ]
        },
        "Roselia": {
            bg: "#3344aa", color: "#3344aa",
            logo: "Roselia_logo.webp", image10th: "Roselia 10th.webp",
            members: [
                { name: "미나토 유키나", role: "보컬", color: "#82b", textColor: "#FFF", hasCard: true },
                { name: "히카와 사요", role: "기타", color: "#0aa", textColor: "#FFF", hasCard: true },
                { name: "이마이 리사", role: "베이스", color: "#d42", textColor: "#FFF", hasCard: true },
                { name: "우다가와 아코", role: "드럼", color: "#d08", textColor: "#FFF", hasCard: true },
                { name: "시로카네 린코", role: "키보드", color: "#ccc", textColor: "#000", hasCard: true }
            ]
        },
        "헬로, 해피 월드!": {
            bg: "#ffdd00", color: "#ffdd00", textShadow: "1px 1px 2px rgba(0,0,0,0.4)",
            logo: "Hello_happy_world_logo.webp", image10th: "Hello Happy World 10th.webp",
            members: [
                { name: "키타자와 하구미", role: "베이스", color: "#f82", textColor: "#FFF", hasCard: true },
                { name: "오쿠사와 미사키", displayName: "미셸", role: "DJ", color: "#000", textColor: "#FFF", hasCard: true },
                { name: "츠루마키 코코로", role: "보컬", color: "#fe0", textColor: "#000", hasCard: true },
                { name: "세타 카오루", role: "기타", color: "#a0c", textColor: "#FFF", hasCard: true },
                { name: "마츠바라 카논", role: "드럼", color: "#0ce", textColor: "#FFF", hasCard: true }
            ]
        },
        "Morfonica": {
            bg: "#ebf7ff", color: "#33aaff",
            logo: "morfonica_logo.webp", image10th: "Morfonica 10th.webp",
            members: [
                { name: "야시오 루이", role: "바이올린", color: "#4c8", textColor: "#FFF", hasCard: true },
                { name: "히로마치 나나미", role: "베이스", color: "#f84", textColor: "#FFF", hasCard: true },
                { name: "쿠라타 마시로", role: "보컬", color: "#28f", textColor: "#FFF", hasCard: true },
                { name: "후타바 츠쿠시", role: "드럼", color: "#f8a", textColor: "#FFF", hasCard: true },
                { name: "키리가야 토우코", role: "기타", color: "#f44", textColor: "#FFF", hasCard: true }
            ]
        },
        "RAISE A SUILEN": {
            bg: "#aaeeee", color: "#33cccc",
            logo: "RAISE_A_SUILEN_logo.webp", image10th: "RAISE A SUILEN 10th.webp",
            members: [
                { name: "파레오(BanG Dream!)", displayName: "파레오", role: "키보드", color: "#f8b", textColor: "#FFF", hasCard: true },
                { name: "마스킹(BanG Dream!)", displayName: "마스킹", role: "드럼", color: "#da4", textColor: "#FFF", hasCard: true },
                { name: "레이야(BanG Dream!)", displayName: "레이야", role: "보컬 & 베이스", color: "#c02", textColor: "#FFF", hasCard: true },
                { name: "츄츄(BanG Dream!)", displayName: "츄츄", role: "DJ", color: "#0cc", textColor: "#FFF", hasCard: true },
                { name: "록(BanG Dream!)", displayName: "록", role: "기타", color: "#aeb", textColor: "#FFF", hasCard: true }
            ]
        },
        "MyGO!!!!!": {
            bg: "#cbf1fe", color: "#0088bb",
            logo: "마이고.webp", image10th: "MyGO 10th.webp",
            members: [
                { name: "치하야 아논", role: "기타", color: "#f8a", textColor: "#FFF", hasCard: true, hasArea: true },
                { name: "나가사키 소요", role: "베이스", color: "#fd8", textColor: "#000", hasCard: true, hasArea: true },
                { name: "타카마츠 토모리", role: "보컬", color: "#7ba", textColor: "#FFF", hasCard: true, hasArea: true },
                { name: "시이나 타키", role: "드럼", color: "#889", textColor: "#FFF", hasCard: true, hasArea: true },
                { name: "카나메 라나", role: "기타", color: "#8d8", textColor: "#FFF", hasCard: true, hasArea: true }
            ]
        },
        "Ave Mujica": {
            bg: "#cc7b9e", color: "#881144",
            logo: "Ave_Mujica_logo.webp", image10th: "Ave Mujica 10th.webp",
            members: [
                { name: "토가와 사키코", displayName: "오블리비오니스", role: "키보드", color: "#358", textColor: "#FFF", hasCard: false },
                { name: "야하타 우미리", displayName: "티모리스", role: "베이스", color: "#567", textColor: "#FFF", hasCard: false },
                { name: "미스미 우이카", displayName: "돌로리스", role: "기타 & 보컬", color: "#614", textColor: "#FFF", hasCard: false },
                { name: "유텐지 냐무", displayName: "아모리스", role: "드럼", color: "#a47", textColor: "#FFF", hasCard: false },
                { name: "와카바 무츠미", displayName: "모르티스", role: "기타", color: "#797", textColor: "#FFF", hasCard: false }
            ]
        },
        "무겐다이 뮤타입": {
            bg: "#ffbbc4", color: "#ff7788",
            logo: "yumemita_logo.webp", image10th: "Yumemita 10th.webp",
            members: [
                { name: "미네츠키 리츠", role: "멤버", color: "#ff7788", textColor: "#FFF", hasCard: false },
                { name: "센고쿠 유노", role: "멤버", color: "#ff7788", textColor: "#FFF", hasCard: false },
                { name: "나카마치 아라레", role: "멤버", color: "#ff7788", textColor: "#FFF", hasCard: false },
                { name: "후지 미야코", role: "멤버", color: "#ff7788", textColor: "#FFF", hasCard: false },
                { name: "미야나가 노노카", role: "멤버", color: "#ff7788", textColor: "#FFF", hasCard: false }
            ]
        },
        "millsage": {
            bg: "#e8c9ff", color: "#AA22EE",
            logo: "millsage_logo.webp", image10th: "millsage.webp",
            members: [
                { name: "코토히라 나기", role: "멤버", color: "#AA22EE", textColor: "#FFF", hasCard: false },
                { name: "하마사키 마호로", role: "멤버", color: "#AA22EE", textColor: "#FFF", hasCard: false },
                { name: "시오미 호타루", role: "멤버", color: "#AA22EE", textColor: "#FFF", hasCard: false },
                { name: "이즈미 호우카", role: "멤버", color: "#AA22EE", textColor: "#FFF", hasCard: false },
                { name: "이자와 나츠메", role: "멤버", color: "#AA22EE", textColor: "#FFF", hasCard: false }
            ]
        },
        "일가 Dumb Rock!": {
            bg: "#FFAA33", color: "#FFAA33",
            logo: "Ikka_Dumb_Rock_logo.webp", image10th: "ikkadumbrock.webp",
            members: [
                { name: "야쿠라 요모기", role: "멤버", color: "#FFAA33", textColor: "#FFF", hasCard: false },
                { name: "우메자토 치에리", role: "멤버", color: "#FFAA33", textColor: "#FFF", hasCard: false },
                { name: "스가 라이카", role: "멤버", color: "#FFAA33", textColor: "#FFF", hasCard: false },
                { name: "시노미야 시즈쿠(BanG Dream!)", displayName: "시노미야 시즈쿠", role: "멤버", color: "#FFAA33", textColor: "#FFF", hasCard: false },
                { name: "마하시 미쿠", role: "멤버", color: "#FFAA33", textColor: "#FFF", hasCard: false }
            ]
        }
    };

    // 2. 현재 접속한 캐릭터의 소속 밴드 찾기
    const currentPageName = decodeURIComponent(window.location.pathname).split('/').pop() || document.title;
    let targetBand = "Poppin'Party"; // 기본값
    for (const [bandName, bandInfo] of Object.entries(bandData)) {
        for (const member of bandInfo.members) {
            if (currentPageName.includes(member.name) || (member.displayName && currentPageName.includes(member.displayName))) {
                targetBand = bandName;
                break;
            }
        }
    }
    const currentBandInfo = bandData[targetBand];

    // 3. 네비게이션 전용 디자인(CSS)
    const navStyle = `
    <style>
        .bd-wrapper { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; word-break: keep-all; line-height: 1.5; }
        .nw-link { color: inherit; text-decoration: none; }
        .nw-link:hover { text-decoration: underline; }
        .nw-del { text-decoration: line-through; color: #888; font-size: 0.85em; }
        
        .bd-main-frame { max-width: 800px; margin: 0 auto 20px; border: 2px solid #ffc02a; border-radius: 13px; overflow: hidden; background-color: #ff3b72; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
        .bd-main-header { background-image: linear-gradient(to bottom, #ffffff 10%, #ff3b72); text-align: center; padding: 15px 10px; }
        .bd-main-title-sub { color: #fff; font-size: 1rem; margin-top: 5px; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.3); }
        .bd-main-title { color: #e5004f; font-size: 1.8rem; font-weight: bold; font-style: italic; letter-spacing: 0.5px; }
        
        .bd-details { border-top: 1px solid rgba(255,255,255,0.4); }
        .bd-summary { background-color: transparent; color: #fff; font-weight: bold; font-size: 0.9rem; padding: 10px; text-align: center; cursor: pointer; list-style: none; outline: none; }
        .bd-summary::-webkit-details-marker { display: none; }
        .bd-summary:hover { background-color: rgba(255,255,255,0.1); }
        
        /* 전체 명단 행 스타일 */
        .bd-band-row { text-align: center; display: flex; flex-direction: column; border-bottom: 1px solid rgba(0,0,0,0.1); }
        .bd-band-logos { padding: 10px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 5px; }
        .bd-band-logo-img { max-height: 60px; object-fit: contain; }
        .bd-band-10th-img { width: 100%; object-fit: cover; border-radius: 4px; }
        .bd-band-members { display: flex; justify-content: space-evenly; flex-wrap: wrap; padding: 8px 0; gap: 5px; }
        .bd-member-item { flex: 1; min-width: 18%; font-size: 0.85rem; font-weight: bold; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px; }
        .bd-badge-container { display: flex; gap: 4px; align-items: center; justify-content: center; flex-wrap: wrap; margin-top: 2px; }
        .bd-badge { background: #fff; border-radius: 3px; font-size: 0.65rem; padding: 2px 4px; font-weight: bold; }
        
        /* 문서 테이블 스타일 */
        .bd-doc-table { width: 100%; border-collapse: collapse; font-size: 0.8rem; background: #fff; color: #212529; }
        [data-theme='dark'] .bd-doc-table { background: #2d2f34; color: #e0e0e0; }
        .bd-doc-table th, .bd-doc-table td { border: 1px solid #ddd; padding: 8px; vertical-align: middle; }
        [data-theme='dark'] .bd-doc-table th, [data-theme='dark'] .bd-doc-table td { border-color: #444; }
        .bd-doc-th-main { background-color: #ff3b72; color: #fff; font-weight: bold; text-align: center; }
        .bd-doc-th-sub { background-color: #fff; color: #212529; font-weight: bold; text-align: center; }
        [data-theme='dark'] .bd-doc-th-sub { background-color: #2d2f34; color: #e0e0e0; }
        
        /* 동적 하단 틀 스타일 */
        .bd-dynamic-frame { max-width: 800px; margin: 0 auto 20px; border: 2px solid ${currentBandInfo.color}; border-radius: 13px; overflow: hidden; background: #fff; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
        .bd-dynamic-header { background-color: ${currentBandInfo.color}; text-align: center; padding: 12px; }
        .bd-dynamic-list { display: flex; justify-content: space-around; padding: 15px 0; }
        .bd-dynamic-card { flex: 1; text-align: center; display: flex; flex-direction: column; align-items: center; border-right: 1px solid #eaeaea; padding: 0 5px; }
        [data-theme='dark'] .bd-dynamic-card { border-color: #444; }
        .bd-dynamic-card:last-child { border-right: none; }
        .bd-dynamic-img { width: 100%; max-width: 110px; object-fit: contain; margin-bottom: 8px; transition: transform 0.2s; }
        .bd-dynamic-img:hover { transform: scale(1.05); }
        .bd-name-tag { border-radius: 5px; font-size: 0.75rem; font-weight: bold; padding: 3px 6px; margin-bottom: 4px; display: inline-block; width: 85%; }
        .bd-role-text { font-size: 0.75rem; color: #555; margin-bottom: 8px; font-weight: bold; }
        [data-theme='dark'] .bd-role-text { color: #bbb; }
        .bd-btn-card { background-color: ${currentBandInfo.color}; color: #fff; border-radius: 3px; font-size: 0.75rem; padding: 2px 8px; font-weight: bold; display: inline-block; }
    </style>
    `;

    // 4. [상단] 전체 밴드 명단 HTML 자동 생성 (절대 누락 안됨!)
    let allBandsHtml = '';
    for (const [bName, bInfo] of Object.entries(bandData)) {
        let membersHtml = '';
        bInfo.members.forEach(m => {
            const dName = m.displayName || m.name;
            const cardBadge = m.hasCard ? `<a href="${m.name}/카드.html" class="nw-link"><span class="bd-badge" style="color: ${bInfo.color}; text-shadow:none;">카드</span></a>` : '';
            const areaBadge = m.hasArea ? `<a href="${m.name}/에어리어 대화.html" class="nw-link"><span class="bd-badge" style="color: ${bInfo.color}; text-shadow:none;">에어리어</span></a>` : '';
            const nameDrip = (dName === "미셸") ? '<br><span class="nw-del" style="font-size:0.7em; color:rgba(255,255,255,0.7); text-shadow:none;">안에 사람 있어요(...)</span>' : '';
            
            membersHtml += `
                <div class="bd-member-item">
                    <span><a href="${m.name}.html" class="nw-link">${dName}</a>${nameDrip}</span>
                    <div class="bd-badge-container">${cardBadge} ${areaBadge}</div>
                </div>
            `;
        });

        allBandsHtml += `
            <div class="bd-band-row" style="background-color: ${bInfo.bg}; color: #fff; text-shadow: ${bInfo.textShadow || 'none'};">
                <div class="bd-band-logos">
                    <a href="${bName}.html" class="nw-link"><img src="이미지/${bInfo.logo}" class="bd-band-logo-img" onerror="this.style.display='none';"></a>
                    <a href="${bName}.html" class="nw-link w-full"><img src="이미지/${bInfo.image10th}" class="bd-band-10th-img" onerror="this.style.display='none';"></a>
                </div>
                <div class="bd-band-members" style="background-color: ${bInfo.color}; color: #fff; text-shadow: none;">
                    ${membersHtml}
                </div>
            </div>
        `;
    }

    // 5. [하단] 현재 접속 캐릭터 소속 밴드 동적 HTML 생성
    let dynamicMembersHtml = '';
    currentBandInfo.members.forEach(m => {
        const dName = m.displayName || m.name;
        const nameDrip = (dName === "미셸") ? ' <span class="nw-del">안에 사람 있어요(...)</span>' : '';
        const cardLinkHtml = m.hasCard ? `<a href="${m.name}/카드.html" class="nw-link"><span class="bd-btn-card">카드</span></a>` : '';
        
        dynamicMembersHtml += `
            <div class="bd-dynamic-card">
                <a href="${m.name}.html" class="nw-link">
                    <img src="이미지/${dName} sd버전.webp" class="bd-dynamic-img" onerror="this.src='이미지/${m.name}.webp'; this.onerror=function(){this.style.display='none';};">
                    <span class="bd-name-tag" style="background-color: ${m.color}; color: ${m.textColor}; border: 1px solid ${m.color};">${dName}</span>
                </a>
                <div class="bd-role-text">${m.role}${nameDrip}</div>
                ${cardLinkHtml}
            </div>
        `;
    });

    // 6. 전체 HTML 조립 (위쪽 거대 둘러보기 틀 + 아래쪽 동적 밴드 틀)
    const navHtml = `
    <div class="bd-wrapper">
        
        <div class="bd-main-frame">
            <div class="bd-main-header">
                <a href="BanG Dream!.html" class="nw-link">
                    <img src="이미지/BanG Dream! 가로 로고.webp" alt="BanG Dream!" style="width: 200px;" onerror="this.style.display='none'; this.nextSibling.style.display='inline';"><span style="display:none; color:#e5004f; font-weight:bold; font-size:1.5rem;">BanG Dream!</span>
                </a>
                <div class="bd-main-title-sub">차세대 걸즈 밴드 프로젝트</div>
                <div class="bd-main-title">BanG Dream!</div>
            </div>

            <details class="bd-details" open>
                <summary class="bd-summary">[ 밴드 목록 열기 · 닫기 ]</summary>
                <div>
                    ${allBandsHtml}
                </div>
            </details>

            <details class="bd-details" open>
                <summary class="bd-summary">[ 관련 문서 열기 · 닫기 ]</summary>
                <table class="bd-doc-table">
                    <tr>
                        <th class="bd-doc-th-main" style="width: 20%;"><a href="BanG Dream!/음반.html" style="color: #fff; text-decoration: none;">음반</a></th>
                        <td colspan="4">
                            <a href="BanG Dream!/음반.html" class="nw-link">전체 음반</a> · <a href="BanG Dream!/음반/정규 음반.html" class="nw-link">정규 음반</a> · <a href="BanG Dream!/음반/비정규 음반.html" class="nw-link">비정규 음반</a> (<a href="BanG Dream!/음반/비정규 음반/디지털 싱글.html" class="nw-link">디지털 싱글</a>)<br>
                            <a href="BanG Dream!/음반/애니메이션 관련 음반.html" class="nw-link">애니메이션 관련 음반</a> · <a href="BanG Dream!/음반/인스트루멘탈 음반.html" class="nw-link">인스트루멘탈 음반</a><br>
                            <a href="BanG Dream!/음반/커버곡 관련 음반.html" class="nw-link">커버곡 관련 음반</a> · <a href="BanG Dream!/음반/음성 합성 엔진 관련 음반.html" class="nw-link">음성 합성 엔진 관련 음반</a><br>
                            <a href="BanG Dream!/음반.html" class="nw-link">콜라보레이션 음반</a> · <a href="BanG Dream!/음반.html" class="nw-link">기타</a>
                        </td>
                    </tr>
                    <tr>
                        <th class="bd-doc-th-main"><a href="BanG Dream!/라이브.html" style="color: #fff; text-decoration: none;">라이브</a></th>
                        <td colspan="4">
                            <a href="BanG Dream!/라이브/2015년.html" class="nw-link">2015년</a> · <a href="BanG Dream!/라이브/2016년.html" class="nw-link">2016년</a> · <a href="BanG Dream!/라이브/2017년.html" class="nw-link">2017년</a> · <a href="BanG Dream!/라이브/2018년.html" class="nw-link">2018년</a> · <a href="BanG Dream!/라이브/2019년.html" class="nw-link">2019년</a><br>
                            <a href="BanG Dream!/라이브/2020년.html" class="nw-link">2020년</a> · <a href="BanG Dream!/라이브/2021년.html" class="nw-link">2021년</a> · <a href="BanG Dream!/라이브/2022년.html" class="nw-link">2022년</a> · <a href="BanG Dream!/라이브/2023년.html" class="nw-link">2023년</a> · <a href="BanG Dream!/라이브/2024년.html" class="nw-link">2024년</a><br>
                            <a href="BanG Dream!/라이브/2025년.html" class="nw-link">2025년</a> (<a href="Roselia ASIA TOUR 「Neuweltfahrt」 in Seoul.html" class="nw-link">Roselia ASIA TOUR 「Neuweltfahrt」 in Seoul</a>)<br>
                            <a href="BanG Dream!/라이브/2026년.html" class="nw-link">2026년</a> · <a href="BanG Dream!/라이브.html" class="nw-link">팬미팅</a> · <a href="BanG Dream!/라이브.html" class="nw-link">기타</a>
                        </td>
                    </tr>
                    <tr>
                        <th rowspan="6" class="bd-doc-th-main" style="width: 10%;"><a href="BanG Dream!.html" style="color: #fff; text-decoration: none;">미디어<br>믹스</a></th>
                        <th class="bd-doc-th-sub" style="width: 10%;">라디오</th>
                        <td colspan="3">
                            <a href="BanG Dream!.html" class="nw-link">포핀 라디오!</a><br>
                            <a href="BanG Dream!.html" class="nw-link">Roselia의 RADIO SHOUT!</a><br>
                            <a href="BanG Dream!.html" class="nw-link">걸파 라디오 with Afterglow</a><br>
                            <a href="BanG Dream!.html" class="nw-link">Afterglow의 석양 STUDIO</a><br>
                            <a href="BanG Dream!.html" class="nw-link">RAISE A SUILEN의 RADIO R・I・O・T</a><br>
                            <a href="BanG Dream!.html" class="nw-link">걸즈 밴드 파티! presents 모니카 라디오</a><br>
                            <a href="BanG Dream!.html" class="nw-link">Pastel＊Palettes 슈와링 라디오</a><br>
                            <a href="BanG Dream!.html" class="nw-link">헬로, 해피 월드!의 Radio 스마일!</a><br>
                            <a href="BanG Dream!.html" class="nw-link">Dreamer's Tunes</a><br>
                            <a href="BanG Dream!.html" class="nw-link">뱅드림! 프로젝트 10주년 기념 「話しTARINAI！キズナラジオ！」</a>
                        </td>
                    </tr>
                    <tr>
                        <th class="bd-doc-th-sub">코믹스</th>
                        <td colspan="3">
                            <a href="BanG Dream!/서적.html" class="nw-link">［별의 고동］</a><br>
                            <a href="BanG Dream!/서적.html" class="nw-link">BanG Dream!</a><br>
                            <a href="BanG Dream!/서적.html" class="nw-link">4컷 뱅드림!</a><br>
                            <a href="BanG Dream!/서적.html" class="nw-link">뱅뱅드림드림</a><br>
                            <a href="BanG Dream!/서적.html" class="nw-link">걸즈 밴드 파티! Roselia Stage</a><br>
                            <a href="BanG Dream!/서적.html" class="nw-link">걸파☆피코 코믹 앤솔로지</a><br>
                            <a href="BanG Dream!/서적.html" class="nw-link">RAiSe! The story of my music</a><br>
                            <a href="BanG Dream!/서적.html" class="nw-link">뱅드림! 걸즈 밴드 파티! 이벤트 다이어리</a><br>
                            <a href="BanG Dream!/서적.html" class="nw-link">BanG Dream! It's MyGO!!!!! 비에 흔들리며 맑기를 바라다</a><br>
                            <a href="BanG Dream!/서적.html" class="nw-link">BanG Dream! Ave Mujica -manuscriptus-</a>
                        </td>
                    </tr>
                    <tr>
                        <th class="bd-doc-th-sub">소설</th>
                        <td colspan="3"><a href="BanG Dream!/서적.html" class="nw-link">BanG Dream! 뱅드림</a></td>
                    </tr>
                    <tr>
                        <th class="bd-doc-th-sub">애니메이션</th>
                        <td colspan="3">
                            TVA (<a href="BanG Dream!(애니메이션 1기).html" class="nw-link">1기</a> · <a href="BanG Dream!(애니메이션 2기).html" class="nw-link">2기</a> · <a href="BanG Dream!(애니메이션 3기).html" class="nw-link">3기</a> · <a href="BanG Dream! It's MyGO!!!!!.html" class="nw-link">It's MyGO!!!!!</a> · <a href="BanG Dream! Ave Mujica.html" class="nw-link">Ave Mujica</a> · <a href="BanG Dream! It's MyGO!!!!! / Ave Mujica.html" class="nw-link">BanG Dream! It's MyGO!!!!! / Ave Mujica(가제)</a> <span class="nw-del">빨리 방영좀(...)</span> · <a href="BanG Dream! YUME∞MITA.html" class="nw-link">YUME∞MITA</a>)<br>
                            단편 (<a href="뱅드림! 걸즈 밴드 파티! 5th Anniversary Animation -CiRCLE THANKS PARTY!-.html" class="nw-link">CiRCLE THANKS PARTY!</a> · <a href="BanG Dream! Morfonication.html" class="nw-link">Morfonication</a>)<br>
                            초단편 (<a href="파스텔 라이프.html" class="nw-link">파스텔 라이프</a> · <a href="BanG Dream! 걸파☆피코 시리즈.html" class="nw-link">걸파☆피코 시리즈</a> · <a href="원조! 뱅드림짱.html" class="nw-link">원조! 뱅드림짱</a>)
                        </td>
                    </tr>
                    <tr>
                        <th class="bd-doc-th-sub">극장판</th>
                        <td colspan="3">
                            FILM LIVE (<a href="BanG Dream! FILM LIVE.html" class="nw-link">1st</a> · <a href="BanG Dream! FILM LIVE 2nd Stage.html" class="nw-link">2nd</a>)<br>
                            Episode of Roselia (<a href="BanG Dream! Episode of Roselia Ⅰ : 약속.html" class="nw-link">I : 약속</a> · <a href="BanG Dream! Episode of Roselia Ⅱ : Song I am..html" class="nw-link">II : Song I am.</a>)<br>
                            <a href="BanG Dream! 팝핀' 드림!.html" class="nw-link">팝핀' 드림!</a><br>
                            It's MyGO!!!!! 극장판 (<a href="극장판 BanG Dream! It's MyGO!!!!! 전편: 봄의 양지, 방황하는 고양이.html" class="nw-link">전편</a> · <a href="극장판 BanG Dream! It's MyGO!!!!! 후편: 노래하자, 우리가 될 수 있는 노래 & FILM LIVE.html" class="nw-link">후편</a>)<br>
                            <a href="Ave Mujica prima aurora.html" class="nw-link">Ave Mujica prima aurora</a>
                        </td>
                    </tr>
                    <tr>
                        <th class="bd-doc-th-sub">게임</th>
                        <td colspan="3">
                            <a href="뱅드림! 걸즈 밴드 파티!.html" class="nw-link">걸즈 밴드 파티!</a><br>
                            <a href="뱅드림! 아워 노트.html" class="nw-link">아워 노트</a>
                        </td>
                    </tr>
                </table>
            </details>
            <div style="background-color: #ff3b72; padding: 10px; text-align: center;">
                <a href="나무위키:프로젝트/뱅드림!.html" style="color: #fff; text-decoration: none; font-weight: bold; font-size: 0.9rem;">나무위키 프로젝트</a>
            </div>
        </div>

        <div class="bd-dynamic-frame">
            <div class="bd-dynamic-header">
                <a href="${targetBand}.html" class="nw-link"><img src="이미지/${currentBandInfo.logo}" style="width: 25%; min-width: 150px;" onerror="this.style.display='none';"></a>
            </div>
            <div class="bd-dynamic-list bg-white dark:bg-[#2d2f34]">
                ${dynamicMembersHtml}
            </div>
        </div>
        
    </div>
    `;

    // 7. 컨테이너에 일괄 주입
    container.innerHTML = navStyle + navHtml;
});