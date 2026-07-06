// [ad_logic.js]
const checkSidebarAndInitAd = setInterval(() => {
    const adContainer = document.getElementById("ad-container"); // 사이드바 코드에 넣은 ID
    
    if (adContainer) {
        clearInterval(checkSidebarAndInitAd); // 사이드바가 나타나면 반복 종료

        // 랜덤 광고 목록
    const ads = [
        { title: "효빈지하철 2호선 하루빈과 함께!", img: "이미지/하루빈 2호선래핑.webp", link: "효빈도시철도.html" },
        { title: "제17회 효빈 애니메이션 페스티벌", img: "이미지/HAF2026포스터.webp", link: "HAF.html" },
        { title: "박효빈 시장의 발전 계획", img: "이미지/효빈광역시청.webp", link: "박효빈.html" },
        { title: "즐거운 일상의 시작, 효빈교통공사!", img: "이미지/효빈광역시광고.webp", link: "효빈교통공사.html" },
        { title: "제작진이 WD-40을 들이마시고 만든 쁘띠 레일루미네!", img: "이미지/쁘띠레일루미네.webp", link: "쁘띠 레일루미네.html" },
{ title: "펜타곤시티 입주민 모집: 길 잃을 걱정 없는 5각형의 미학", img: "이미지/펜타곤시티.webp", link: "산곡건설.html" },
    { title: "철근보다 감성을 붓습니다. 산곡건설, 당신의 로망을 시공합니다.", img: "이미지/산곡건설.webp", link: "산곡건설.html" },
    { title: "스퀘어시티 입주 시작: 세상에서 가장 완벽한 폴리곤을 소유하세요.", img: "이미지/스퀘어시티.webp", link: "산곡건설.html" },
    { title: "HUDC의 아파트가 지겨울 때, 튼튼한 기하학의 산곡건설", img: "이미지/산곡건설_로고.webp", link: "산곡건설.html" },
    { title: "80년의 궤적, 1mm의 오차 없는 철도 부품 기술의 정점", img: "이미지/회주기업_사옥.webp", link: "회주공업.html" },
{ title: "글로벌 인재와 실무 기술의 만남, 대찬대학교", img: "이미지/대찬대학교.webp", link: "대찬대학교.html" },
{ title: "당신의 최애가 달립니다! 칠양여객 이타샤 버스", img: "이미지/시즈쿠간선버스.webp", link: "칠양여객.html" },
       { 
    title: "【신규 역장 특전】 지금 접속 시 무료 300연차 & 사능동 소금빵 500개 지급! 리세마라 0티어 [UR 골든 아워 박라미] 확정 획득 찬스!", 
    img: "이미지/레일루미네_스마일_페스티벌.webp", 
    link: "레일루미네_스마일 페스티벌.html" 
  },{ 
    title: "🚨국회의원도 기겁한 논란의 그 게임! '효빈 집 침실' 배경 풀더빙 상호작용 업데이트! 당장 플레이하세요", 
    img: "이미지/효빈집침실.webp", 
    link: "레일루미네_스마일 페스티벌.html" 
  },{ 
    title: "\"선배님 이름 조별과제에서 뺍니다? 찡긋~💕\" 어뮤즈의 광견 [SSR 전노아] 한정 픽업 진행 중! (지금 다운로드)", 
    img: "이미지/전노아 과잠2.webp", 
    link: "레일루미네_스마일_페스티벌_게임.html" 
  },{ 
    title: "Lv.1 짬처리 역무원 박빛나 ➡️ Lv.99 단말기 퀵드로우 마스터! 당신만의 철도 미소녀를 육성하세요!", 
    img: "이미지/박빛나.webp", 
    link: "레일루미네_스마일_페스티벌_게임.html" 
  },{ 
  title: "🚨[경보] \"오빠... 방금 다른 역무원 뽑은 거야...?\" GPS 우정 팔찌 위치 추적 가동! [UR 흑묘 임세하] 픽업", 
  img: "이미지/임세하.webp", 
  link: "임세하.html" 
},
{ 
  title: "정비복 속에 봉인된 B87의 압도적 중장갑! 효빈대 기계공학과 수석의 끈적한(?) 특별 과외가 시작됩니다!", 
  img: "이미지/임세하 수영복.webp", 
  link: "임세하.html" 
},
{ 
  title: "【신규 유저 보상】 지금 가입 시 '부활의 영약 WD-40' 100개 & 퍼지바 500개 즉시 지급! 3천만원짜리 모터를 수리하세요!", 
  img: "이미지/임세하 프로필.webp", 
  link: "임세하.html" 
} ];

        const randomAd = ads[Math.floor(Math.random() * ads.length)];
        
        adContainer.innerHTML = `
            <a href="${randomAd.link}" style="text-decoration:none; color:inherit;">
                <img src="${randomAd.img}" style="width:100%; border-radius:4px; margin-bottom:5px;">
                <p style="font-size:0.8rem; margin:0;">${randomAd.title}</p>
            </a>
        `;
    }
}, 500); // 0.5초마다 사이드바가 생성되었는지 체크

