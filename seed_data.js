import { collection, doc, setDoc } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';

export async function seedInitialData(db) {
    const appId = 'hyobin-wiki-full';

    // --- 1. 이미지 및 스타일 헬퍼 ---
    const IMAGE_MAP = {
      '효빈광역시': 'https://i.imgur.com/iYcyOlz.png',
      '남구': 'https://i.imgur.com/GKWRItK.png',
      '북구': 'https://i.imgur.com/kdSkuVp.png',
      '동구': 'https://i.imgur.com/WfloDcp.png',
      '서구': 'https://i.imgur.com/LzHidYM.png',
      '중구': 'https://i.imgur.com/GOBJzcQ.png',
      '안천구': 'https://i.imgur.com/7X32Jx0.png',
      '창전구': 'https://i.imgur.com/D9RghdZ.png',
      '청엽구': 'https://i.imgur.com/ocwoL8p.png',
      '탄성군': 'https://i.imgur.com/G7LbZmw.png'
    };

    const partyColor = {
      '민주당': '#004EA2',
      '국민의힘': '#E61E2B',
      '진보당': '#D6001C',
      '조국혁신당': '#0073CF',
      '무소속': '#808080',
      '진보': '#009900'
    };
    
    const partyStyle = (color, text) => `<span style="background-color:${color}; color:white; padding:1px 4px; border-radius:3px; font-size:10px; font-weight:bold; white-space:nowrap; display:inline-block;">${text}</span>`;

    // --- 2. 데이터 헬퍼 함수 ---
    const generateFoldingContent = (id, title, partyData) => {
        let rows = '';
        partyData.forEach(item => {
            rows += `
                <tr style="height: 25px;">
                    <td style="width: 100px; padding: 2px 8px; border: 1px solid #ddd;">
                        ${partyStyle(item.color, item.party)}
                    </td>
                    <td style="padding: 2px 8px; border: 1px solid #ddd; text-align: left;">
                        ${item.seats} ${item.note ? `<span style="font-size: 0.8em; color: #666;">(${item.note})</span>` : ''}
                    </td>
                </tr>
            `;
        });
        return `
            <tr class="border-b folding-header" data-target-id="${id}">
                <th class="bg-[#7777AA]" style="color:white; padding: 8px; cursor: pointer; text-align: left; width: 50%;">
                    ${title} 
                </th>
                <th class="bg-[#7777AA]" style="color:white; padding: 8px; cursor: pointer; text-align: right; width: 50%;">
                    <span class="folding-indicator" style="color:white; font-weight:normal; font-size: 11px;">[펼치기/접기]</span>
                </th>
            </tr>
            <tr class="folding-content hidden" id="${id}">
                <td colspan="2" style="padding: 0;">
                    <table style="width: 100%; border-collapse: collapse; font-size: 0.85rem;">${rows}</table>
                </td>
            </tr>
        `;
    };

    // --- 3. 행정구역 HTML 생성 ---
    const generateDistrictHtml = (name, color = "7777AA") => {
        const imageUrl = IMAGE_MAP[name] || `https://placehold.co/60x60/${color}/ffffff?text=${name.substring(0,2)}`;
        return `
          <div style="display: flex; flex-direction: column; align-items: center; margin: 10px; width: 80px;">
            <a href="#" data-wiki-title="${name}" style="text-decoration: none; color: inherit; display: flex; flex-direction: column; align-items: center; transition: transform 0.2s;">
              <div style="width: 60px; height: 60px; border: 1px solid #ddd; border-radius: 4px; overflow: hidden; background: white; display: flex; align-items: center; justify-content: center; margin-bottom: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
                <img src="${imageUrl}" alt="${name} 로고" onerror="this.onerror=null; this.src='https://placehold.co/60x60/cccccc/000000?text=${name} 로고 에러'" style="width: 100%; height: 100%; object-fit: contain; padding: 5px;">
              </div>
              <span style="font-weight: bold; color: #0645ad; font-size: 0.95em;">${name}</span>
            </a>
          </div>
        `;
    };
    const districts = ['중구', '동구', '서구', '남구', '북구', '청엽구', '안천구', '창전구'];
    const counties = ['탄성군'];
    const districtsHtml = districts.map(d => generateDistrictHtml(d, '555588')).join('');
    const countiesHtml = counties.map(c => generateDistrictHtml(c, '448844')).join('');

    // --- 4. 데이터셋 준비 (생략 없음) ---
    const cityCouncilData = [
        { party: '더불어민주당', color: partyColor['민주당'], seats: '34석', note: '지역구 30석, 비례대표 4석' },
        { party: '국민의힘', color: partyColor['국민의힘'], seats: '1석', note: '지역구 1석' },
        { party: '진보당', color: partyColor['진보당'], seats: '2석' },
        { party: '조국혁신당', color: partyColor['조국혁신당'], seats: '1석' },
    ];
    const nationalAssemblyData = [
        { party: '더불어민주당', color: partyColor['민주당'], seats: '13석' },
        { party: '진보당', color: partyColor['진보당'], seats: '1석' },
    ];
    const districtChiefData = [
        { party: '더불어민주당', color: partyColor['민주당'], seats: '8석' },
        { party: '조국혁신당', color: partyColor['조국혁신당'], seats: '1석' },
    ];

    // --- 5. 테이블 템플릿 (생략 없음) ---
    const WIKI_HEADER_TABLE_INTEGRATED = `
    <div class="wiki-infobox-container" style="float: right; margin-left: 10px; margin-bottom: 10px; width: 430px;">
      <table class="wiki-header-table" style="width: 100%; border-collapse: collapse;">
          <tbody style="border: 2px solid #7777AA;">
              <tr>
                  <td colspan="2" style="width: 100%; padding: 5px 10px; border-bottom: 1px solid #ddd; text-align: right; font-weight: bold; color: #373a3c; background-color: #f8f8f8;">
                      <span style="display: inline-flex; align-items: center; gap: 5px;">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/30px-Flag_of_South_Korea.svg.png" alt="대한민국 국기" style="height: 16px; width: auto;">
                          대한민국의 광역시
                      </span>
                  </td>
              </tr>
              <tr>
                  <td colspan="2" style="padding: 10px 15px; background-color: white; text-align: center; border-bottom: 1px solid #ddd;">
                      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px;">
                          <img src="https://i.imgur.com/iYcyOlz.png" alt="효빈광역시 휘장" style="width: 80px; height: 80px; display: block; border-radius: 5px;">
                          <div style="text-align: center;">
                              <div style="font-size: 1.5rem; font-weight: bold; color: #373a3c;">효빈광역시</div>
                              <div style="font-size: 1.0rem; font-weight: normal; color: #666;">孝彬廣域市<br>Hyobin Metropolitan City</div>
                          </div>
                      </div>
                  </td>
              </tr>
              <tr class="border-b"><th class="bg-[#E8E8F3] text-[#7777AA] p-2 border-r w-1/3">시청 소재지</th><td class="p-2">북구 효빈로 79 (고송8동)</td></tr>
              <tr class="border-b"><th class="bg-[#E8E8F3] text-[#7777AA] p-2 border-r">하위 행정구역</th><td class="p-2">8구 1군</td></tr>
              <tr class="border-b"><th class="bg-[#E8E8F3] text-[#7777AA] p-2 border-r">면적</th><td class="p-2">729.0㎢</td></tr>
              <tr class="border-b"><th class="bg-[#E8E8F3] text-[#7777AA] p-2 border-r">인구</th><td class="p-2">2,967,406명<br><span class="text-xs text-gray-400">(2025년 기준)</span></td></tr>
              <tr class="border-b"><th class="bg-[#E8E8F3] text-[#7777AA] p-2 border-r">인구 밀도</th><td class="p-2">4,070.5 명/㎢</td></tr>
              <tr class="border-b"><th class="bg-[#E8E8F3] text-[#7777AA] p-2 border-r">GRDP</th><td class="p-2">$1,058억 (2022)</td></tr>
              <tr class="border-b"><th class="bg-[#E8E8F3] text-[#7777AA] p-2 border-r">1인당 GRDP</th><td class="p-2">$36,341 (2022)</td></tr>
              <tr class="border-b"><th class="bg-[#E8E8F3] text-[#7777AA] p-2 border-r">시장</th>
                <td class="p-2 text-left">
                  <div style="display:flex; align-items:center; gap:4px; margin-bottom:2px;">
                    ${partyStyle(partyColor['민주당'], '더불어민주당')}
                    <strong>박효빈</strong> <span class="text-xs text-gray-500">(초선)</span>
                  </div>
                </td>
              </tr>
              <tr class="border-b"><th class="bg-[#E8E8F3] text-[#7777AA] p-2 border-r">부시장</th>
                <td class="p-2 text-left text-xs">
                  <div style="margin-bottom:3px; display:flex; align-items:center; gap:4px;">
                      <span style="display:inline-block; width:50px;"><strong>행정복지</strong></span>
                      ${partyStyle(partyColor['무소속'], '무소속')}
                      고성진 <span class="text-gray-500">(20대)</span>
                  </div>
                  <div style="display:flex; align-items:center; gap:4px;">
                      <span style="display:inline-block; width:50px;"><strong>경제문화</strong></span>
                      ${partyStyle(partyColor['무소속'], '무소속')}
                      우진현 <span class="text-xs text-gray-500">(7대)</span>
                  </div>
                </td>
              </tr>
              ${generateFoldingContent('folding-council', '시의회', cityCouncilData)}
              ${generateFoldingContent('folding-assembly', '국회의원', nationalAssemblyData)}
              ${generateFoldingContent('folding-district-chief', '구청장', districtChiefData)}
              <tr class="border-b"><th class="bg-[#E8E8F3] text-[#7777AA] p-2 border-r">교육감</th>
                <td class="p-2 text-left">
                  <div style="display:flex; align-items:center; gap:4px;">
                      ${partyStyle('#79D2CC', '진보')}
                      이남현 <span class="text-xs text-gray-500">(초선)</span>
                  </div>
                </td>
              </tr>
              <tr class="border-b"><th class="bg-[#E8E8F3] text-[#7777AA] p-2 border-r">상징</th>
                <td class="p-2 text-left text-xs">
                  <div><strong>시화</strong> 해바라기</div>
                  <div><strong>시목</strong> 오동나무</div>
                  <div><strong>시조</strong> 기러기</div>
                  <div><strong>시가</strong> 효빈시민찬가</div>
                </td>
              </tr>
              <tr class="border-b"><th class="bg-[#E8E8F3] text-[#7777AA] p-2 border-r">지역번호</th><td class="p-2">079</td></tr>
              <tr class="border-b"><th class="bg-[#E8E8F3] text-[#7777AA] p-2 border-r">IATA 코드</th><td class="p-2">HYB</td></tr>
              <tr class="border-b"><th class="bg-[#EE88F3] text-[#7777AA] p-2 border-r">ISO 3166-2</th><td class="p-2">KR-79</td></tr>
          </tbody>
      </table>
      <div style="width: 100%; margin-top: 10px;">
        <img src="https://placehold.co/430x200/cccccc/000000?text=지도+자리" alt="지도 자리" style="width:100%; display:block;">
      </div>
    </div>
    `;

    const ADMIN_HISTORY_TABLE = `
<h3 id="s-13-1" class="wiki-h3">13.1. 전체 행정구역 변천사</h3>
<table class="wiki-table w-full text-sm border-collapse border border-gray-300 my-4 text-center admin-history-table" style="min-width: 100%;">
    <thead class="bg-gray-100">
        <tr>
            <th class="border p-2" colspan="5" style="background-color: #E8E8F3; color: #7777AA;">효빈광역시 행정구역 변천사 (지역별)</th>
        </tr>
        <tr>
            <th class="border p-2" style="width: 10%; background-color: #f2f2f2;">지역 구분</th>
            <th class="border p-2" style="width: 25%; background-color: #f2f2f2;">시내 지역</th>
            <th class="border p-2" style="width: 25%; background-color: #f2f2f2;">탄성 지역</th>
            <th class="border p-2" style="width: 20%; background-color: #f2f2f2;">서목 지역</th>
            <th class="border p-2" style="width: 20%; background-color: #f2f2f2;">도향 지역</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th class="border p-1 bg-[#f2f2f2]" rowspan="2">구한말</th>
            <td class="border p-1" style="vertical-align: top;">덕빈북도<br>효빈군 (孝彬郡)</td>
            <td class="border p-1" style="vertical-align: top;">덕빈북도<br>탄성군 (彈城郡)</td>
            <td class="border p-1" style="vertical-align: top;">덕빈북도<br>선곡군 남내면</td>
            <td class="border p-1" style="vertical-align: top;">덕빈북도<br>약산군 향리면 등</td>
        </tr>
        <tr>
            <td class="border p-1" style="font-size: 0.8em; color: #777;">1896</td>
            <td class="border p-1" style="font-size: 0.8em; color: #777;">1896</td>
            <td class="border p-1" colspan="2" style="font-size: 0.8em; color: #777;">1896</td>
        </tr>
        <tr>
            <th class="border p-1 bg-[#f2f2f2]" rowspan="2">일제 강점기</th>
            <td class="border p-1">덕빈북도<br>효빈군 (孝彬郡)</td>
            <td class="border p-1">덕빈북도<br>탄성군 (彈城郡)</td>
            <td class="border p-1">덕빈북도<br>선곡군 서목면</td>
            <td class="border p-1">덕빈북도<br>약산군 도향면</td>
        </tr>
        <tr><td class="border p-1" colspan="4" style="font-size: 0.8em; color: #777;">1914 (부군면 통폐합)</td></tr>
        <tr>
            <th class="border p-1 bg-[#f2f2f2]" rowspan="2">일제 강점기 (승격)</th>
            <td class="border p-1">덕빈북도<br>효빈부 (孝彬부)</td>
            <td class="border p-1">덕빈북도<br>탄성군</td>
            <td class="border p-1">덕빈북도<br>선곡군</td>
            <td class="border p-1">덕빈북도<br>약산군</td>
        </tr>
        <tr><td class="border p-1" colspan="4" style="font-size: 0.8em; color: #777;">1935 (효빈읍이 효빈부로 승격)</td></tr>
        <tr>
            <th class="border p-1 bg-[#f2f2f2]" rowspan="6">대한민국</th>
            <td class="border p-1" style="vertical-align: top;">덕빈북도<br>효빈시 (孝彬시)</td>
            <td class="border p-1" style="vertical-align: top;">덕빈북도<br>탄성군</td>
            <td class="border p-1" style="vertical-align: top;">덕빈북도<br>탄성군 편입</td>
            <td class="border p-1" style="vertical-align: top;">덕빈북도<br>약산군</td>
        </tr>
        <tr>
            <td class="border p-1" style="font-size: 0.8em; color: #777;">1949</td>
            <td class="border p-1" style="font-size: 0.8em; color: #777;">1949</td>
            <td class="border p-1" style="font-size: 0.8em; color: #777;">1963</td>
            <td class="border p-1" style="font-size: 0.8em; color: #777;">1980</td>
        </tr>
        <tr>
            <td class="border p-1" style="vertical-align: top;">효빈직할시 (孝彬直轄市)</td>
            <td class="border p-1" style="vertical-align: top;">덕빈북도<br>탄성군</td>
            <td class="border p-1" colspan="2" style="vertical-align: top;">덕빈북도 약산군 등</td>
        </tr>
        <tr><td class="border p-1" colspan="4" style="font-size: 0.8em; color: #777;">1995 (효빈광역시 승격 및 탄성군 편입)</td></tr>
    </tbody>
</table>
`;

    const HISTORY_TIMELINE_TABLE = `
<h3 id="s-3-4" class="wiki-h3">3.4. 연혁 상세</h3>
<table class="wiki-table w-full text-sm border-collapse border border-gray-300 my-4 text-left admin-timeline-table" style="min-width: 100%;">
    <thead class="bg-[#E8E8F3]">
        <tr>
            <th class="border p-2 w-[80px] text-[#7777AA] text-center">연도</th>
            <th class="border p-2 text-[#7777AA] text-center">내용</th>
        </tr>
    </thead>
    <tbody>
        <tr><td class="border p-2 text-center font-bold">1914</td><td class="border p-2">부군면 통폐합으로 효빈군+탄성군 합군</td></tr>
        <tr><td class="border p-2 text-center font-bold">1949</td><td class="border p-2">효빈부 → <strong>효빈시</strong> 변경</td></tr>
        <tr><td class="border p-2 text-center font-bold">1981</td><td class="border p-2"><strong>효빈직할시로 승격</strong></td></tr>
        <tr><td class="border p-2 text-center font-bold">1995</td><td class="border p-2"><strong>효빈광역시로 변경</strong> 및 탄성군 편입</td></tr>
        <tr><td class="border p-2 text-center font-bold">2004</td><td class="border p-2">광역시청을 중구 중보로에서 북구 고송동으로 이전</td></tr>
    </tbody>
</table>
`;

    const CITY_STRUCTURE_TABLE = `
<table class="wiki-table w-full text-sm border-collapse border border-gray-300 my-4 text-center city-structure-table" style="min-width: 100%;">
    <thead class="bg-gray-100">
        <tr class="bg-[#E8E8F3]">
            <th class="border p-2 text-[#7777AA] w-[10%]">지역 구분</th>
            <th class="border p-2 text-[#373a3c]">도심</th>
            <th class="border p-2 text-[#373a3c]">부도심</th>
            <th class="border p-2 text-[#373a3c]">지역중심</th>
        </tr>
    </thead>
    <tbody>
        <tr><th class="border p-1 bg-[#f8f9fa]">중구</th><td class="border p-1" rowspan="2">중앙로 (원도심)</td><td class="border p-1">덕현지구</td><td class="border p-1">당선동</td></tr>
        <tr><th class="border p-1 bg-[#f8f9fa]">동구</th><td class="border p-1">과진지구</td><td class="border p-1">효빈대 대학로</td></tr>
        <tr><th class="border p-1 bg-[#f8f9fa]">서구</th><td class="border p-1">고송신도시</td><td class="border p-1">중수지구</td><td class="border p-1">사복동</td></tr>
        <tr><th class="border p-1 bg-[#f8f9fa]">남구</th><td class="border p-1">평당신도시</td><td class="border p-1">항동물류지구</td><td class="border p-1">오내동</td></tr>
        <tr><th class="border p-1 bg-[#f8f9fa]">북구</th><td class="border p-1">청엽지구</td><td class="border p-1">우전지구</td><td class="border p-1">입희동</td></tr>
    </tbody>
</table>
`;

    const RAIL_NETWORK_TABLE = `
<table class="wiki-table w-full text-sm border-collapse border border-gray-300 my-4 text-center rail-network-table" style="min-width: 100%;">
    <thead class="bg-[#E8E8F3]">
        <tr><th class="border p-2" colspan="3" style="background-color: #7777AA; color: white;">효빈광역시 관내 국가 철도</th></tr>
        <tr>
            <th class="border p-2" style="width: 20%; background-color: #f2f2f2;">노선</th>
            <th class="border p-2" style="width: 20%; background-color: #f2f2f2;">등급</th>
            <th class="border p-2" style="width: 60%; background-color: #f2f2f2;">탑승역 (관내 행선지)</th>
        </tr>
    </thead>
    <tbody>
        <tr class="bg-[#f8f9fa]"><th class="border p-1 text-left" colspan="3">고속철도</th></tr>
        <tr>
            <td class="border p-1">빈효고속선</td>
            <td class="border p-1"><span style="background-color: #E61E2B; color: white; padding: 2px 6px; border-radius: 4px; font-weight: bold; font-size: 11px;">KTX</span></td>
            <td class="border p-1 text-left">효빈역, 안천역</td>
        </tr>
        <tr>
            <td class="border p-1">빈효고속선</td>
            <td class="border p-1"><span style="background-color: #61A825; color: white; padding: 2px 6px; border-radius: 4px; font-weight: bold; font-size: 11px;">SRT</span></td>
            <td class="border p-1 text-left">효빈역, 안천역</td>
        </tr>
        <tr class="bg-[#f8f9fa]"><th class="border p-1 text-left" colspan="3">일반철도</th></tr>
        <tr>
            <td class="border p-1">빈효선 · 강빈선</td>
            <td class="border p-1"><span style="background-color: #E61E2B; color: white; padding: 2px 6px; border-radius: 4px; font-weight: bold; font-size: 11px;">ITX-새마을</span></td>
            <td class="border p-1 text-left">효빈역, 안천역</td>
        </tr>
    </tbody>
</table>
`;

    const URBAN_RAIL_TABLE = `
<h4 id="s-6-1-2-lines" class="wiki-h3">효빈권 전철 노선</h4>
<table class="wiki-table w-full text-sm border-collapse border border-gray-300 my-4 text-center rail-lines-table" style="min-width: 100%;">
    <thead class="bg-[#E8E8F3]">
        <tr><th class="border p-2" colspan="5" style="background-color: #7777AA; color: white;">도시철도 및 광역전철 (운행 중)</th></tr>
        <tr>
            <th class="border p-2" style="width: 20%; background-color: #f2f2f2;">1호선</th>
            <th class="border p-2" style="width: 20%; background-color: #f2f2f2;">2호선</th>
            <th class="border p-2" style="width: 20%; background-color: #f2f2f2;">3호선</th>
            <th class="border p-2" style="width: 20%; background-color: #f2f2f2;">4호선</th>
            <th class="border p-2" style="width: 20%; background-color: #f2f2f2;" rowspan="3">빈효선 광역전철</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border p-1" style="color: #E61E2B; font-weight: bold;">운행 중</td>
            <td class="border p-1" style="color: #004EA2; font-weight: bold;">운행 중</td>
            <td class="border p-1" style="color: #FFC000; font-weight: bold;">운행 중</td>
            <td class="border p-1" style="color: #009900; font-weight: bold;">운행 중</td>
        </tr>
        <tr class="bg-[#f2f2f2]">
            <th class="border p-2">5호선</th>
            <th class="border p-2">6호선</th>
            <th class="border p-2">7호선</th>
            <th class="border p-2">8호선</th>
        </tr>
        <tr>
            <td class="border p-1" style="color: #9933CC; font-weight: bold;">운행 중</td>
            <td class="border p-1" style="color: #008080; font-weight: bold;">운행 중</td>
            <td class="border p-1" style="color: #A52A2A; font-weight: bold;">운행 중</td>
            <td class="border p-1" style="color: #696969; font-weight: bold;">운행 중</td>
        </tr>
    </tbody>
</table>
`;

    // --- 6. 초기 데이터 조립 (본문 전체) ---
    const initialContent = `
          <h1 style="font-size: 2.5rem; font-weight: 800; color: #222; margin-bottom: 5px; line-height: 1.2;">
              효빈광역시
              <span style="font-size: 1.5rem; font-weight: normal; color: #777; margin-left: 10px;">(孝彬廣域市)</span>
          </h1>

          <div class="wiki-category-box" style="border: 1px solid #ccc; padding: 8px 12px; margin-bottom: 10px; border-radius: 4px; background-color: #fcfcfc; font-size: 0.9rem; color: #555;">
             <strong style="color: #373a3c;">분류:</strong> 
             <a href="#" data-wiki-title="효빈광역시" class="text-[#0645ad] hover:underline" style="margin-left: 5px;">효빈광역시</a> <span style="color:#ccc;">|</span>
             <a href="#" data-wiki-title="덕빈권" class="text-[#0645ad] hover:underline" style="margin-left: 5px;">덕빈권</a>
          </div>
          
          ${WIKI_HEADER_TABLE_INTEGRATED}

          <div class="toc-container toc-container-top inline-block border border-[#ccc] bg-[#f8f9fa] p-3 mb-4 min-w-[200px] rounded">
            <div class="toc-title font-bold text-center mb-2 border-b pb-1">목차</div>
            <ul class="toc-list text-sm pl-2 space-y-1 list-none">
              <li><a href="#s-1" class="text-[#0645ad] hover:underline">1.</a> <a href="#s-1" class="text-black hover:underline">개요</a></li>
              <li><a href="#s-2" class="text-[#0645ad] hover:underline">2.</a> <a href="#s-2" class="text-black hover:underline">상징</a>
                <ul class="toc-list-sub pl-4 space-y-1 list-none">
                    <li><a href="#s-2-1" class="text-[#0645ad] hover:underline">2.1.</a> <a href="#s-2-1" class="text-black hover:underline">휘장</a></li>
                    <li><a href="#s-2-2" class="text-[#0645ad] hover:underline">2.2.</a> <a href="#s-2-2" class="text-black hover:underline">슬로건</a></li>
                    <li><a href="#s-2-3" class="text-[#0645ad] hover:underline">2.3.</a> <a href="#s-2-3" class="text-black hover:underline">마스코트</a></li>
                </ul>
              </li>
              <li><a href="#s-3" class="text-[#0645ad] hover:underline">3.</a> <a href="#s-3" class="text-black hover:underline">역사</a>
                <ul class="toc-list-sub pl-4 space-y-1 list-none">
                    <li><a href="#s-3-1" class="text-[#0645ad] hover:underline">3.1.</a> <a href="#s-3-1" class="text-black hover:underline">조선시대</a></li>
                    <li><a href="#s-3-2" class="text-[#0645ad] hover:underline">3.2.</a> <a href="#s-3-2" class="text-black hover:underline">일제강점기 ~ 현대</a></li>
                </ul>
              </li>
              <li><a href="#s-4" class="text-[#0645ad] hover:underline">4.</a> <a href="#s-4" class="text-black hover:underline">지리</a>
                <ul class="toc-list-sub pl-4 space-y-1 list-none">
                    <li><a href="#s-4-1" class="text-[#0645ad] hover:underline">4.1.</a> <a href="#s-4-1" class="text-black hover:underline">자연환경</a></li>
                    <li><a href="#s-4-2" class="text-[#0645ad] hover:underline">4.2.</a> <a href="#s-4-2" class="text-black hover:underline">기후</a></li>
                    <li><a href="#s-4-3" class="text-[#0645ad] hover:underline">4.3.</a> <a href="#s-4-3" class="text-black hover:underline">인구</a></li>
                </ul>
              </li>
              <li><a href="#s-5" class="text-[#0645ad] hover:underline">5.</a> <a href="#s-5" class="text-black hover:underline">도시구조</a></li>
              <li><a href="#s-6" class="text-[#0645ad] hover:underline">6.</a> <a href="#s-6" class="text-black hover:underline">교통</a>
                <ul class="toc-list-sub pl-4 space-y-1 list-none">
                    <li><a href="#s-6-1" class="text-[#0645ad] hover:underline">6.1.</a> <a href="#s-6-1" class="text-black hover:underline">철도</a>
                      <ul class="toc-list-sub-2 pl-4 space-y-1 list-none">
                          <li><a href="#s-6-1-1" class="text-[#0645ad] hover:underline">6.1.1.</a> <a href="#s-6-1-1" class="text-black hover:underline">일반철도 및 고속철도</a></li>
                          <li><a href="#s-6-1-2" class="text-[#0645ad] hover:underline">6.1.2.</a> <a href="#s-6-1-2" class="text-black hover:underline">도시철도/광역철도</a></li>
                      </ul>
                    </li>
                    <li><a href="#s-6-2" class="text-[#0645ad] hover:underline">6.2.</a> <a href="#s-6-2" class="text-black hover:underline">도로권역</a></li>
                    <li><a href="#s-6-3" class="text-[#0645ad] hover:underline">6.3.</a> <a href="#s-6-3" class="text-black hover:underline">버스</a>
                      <ul class="toc-list-sub-2 pl-4 space-y-1 list-none">
                          <li><a href="#s-6-3-1" class="text-[#0645ad] hover:underline">6.3.1.</a> <a href="#s-6-3-1" class="text-black hover:underline">시내버스</a></li>
                          <li><a href="#s-6-3-2" class="text-[#0645ad] hover:underline">6.3.2.</a> <a href="#s-6-3-2" class="text-black hover:underline">시외/고속버스</a></li>
                      </ul>
                    </li>
                    <li><a href="#s-6-4" class="text-[#0645ad] hover:underline">6.4.</a> <a href="#s-6-4" class="text-black hover:underline">항만</a></li>
                    <li><a href="#s-6-5" class="text-[#0645ad] hover:underline">6.5.</a> <a href="#s-6-5" class="text-black hover:underline">항공</a></li>
                </ul>
              </li>
              <li><a href="#s-7" class="text-[#0645ad] hover:underline">7.</a> <a href="#s-7" class="text-black hover:underline">경제</a>
                <ul class="toc-list-sub pl-4 space-y-1 list-none">
                    <li><a href="#s-7-1" class="text-[#0645ad] hover:underline">7.1.</a> <a href="#s-7-1" class="text-black hover:underline">산업</a></li>
                    <li><a href="#s-7-2" class="text-[#0645ad] hover:underline">7.2.</a> <a href="#s-7-2" class="text-black hover:underline">상권</a></li>
                </ul>
              </li>
              <li><a href="#s-8" class="text-[#0645ad] hover:underline">8.</a> <a href="#s-8" class="text-black hover:underline">관광</a></li>
              <li><a href="#s-9" class="text-[#0645ad] hover:underline">9.</a> <a href="#s-9" class="text-black hover:underline">교육</a></li>
              <li><a href="#s-10" class="text-[#0645ad] hover:underline">10.</a> <a href="#s-10" class="text-black hover:underline">생활문화</a>
                <ul class="toc-list-sub pl-4 space-y-1 list-none">
                    <li><a href="#s-10-1" class="text-[#0645ad] hover:underline">10.1.</a> <a href="#s-10-1" class="text-black hover:underline">효빈광역시청</a></li>
                    <li><a href="#s-10-2" class="text-[#0645ad] hover:underline">10.2.</a> <a href="#s-10-2" class="text-black hover:underline">언론</a></li>
                    <li><a href="#s-10-3" class="text-[#0645ad] hover:underline">10.3.</a> <a href="#s-10-3" class="text-black hover:underline">의료기관</a></li>
                    <li><a href="#s-10-4" class="text-[#0645ad] hover:underline">10.4.</a> <a href="#s-10-4" class="text-black hover:underline">스포츠</a></li>
                </ul>
              </li>
              <li><a href="#s-11" class="text-[#0645ad] hover:underline">11.</a> <a href="#s-11" class="text-black hover:underline">정치</a>
                <ul class="toc-list-sub pl-4 space-y-1 list-none">
                    <li><a href="#s-11-1" class="text-[#0645ad] hover:underline">11.1.</a> <a href="#s-11-1" class="text-black hover:underline">국회의원 목록</a></li>
                    <li><a href="#s-11-2" class="text-[#0645ad] hover:underline">11.2.</a> <a href="#s-11-2" class="text-black hover:underline">역대 민선 효빈광역시장</a></li>
                    <li><a href="#s-11-3" class="text-[#0645ad] hover:underline">11.3.</a> <a href="#s-11-3" class="text-black hover:underline">최근 선거</a>
                      <ul class="toc-list-sub-2 pl-4 space-y-1 list-none">
                          <li><a href="#s-11-3-1" class="text-[#0645ad] hover:underline">11.3.1.</a> <a href="#s-11-3-1" class="text-black hover:underline">대통령 선거</a></li>
                          <li><a href="#s-11-3-2" class="text-[#0645ad] hover:underline">11.3.2.</a> <a href="#s-11-3-2" class="text-black hover:underline">총선</a></li>
                          <li><a href="#s-11-3-3" class="text-[#0645ad] hover:underline">11.3.3.</a> <a href="#s-11-3-3" class="text-black hover:underline">지선</a></li>
                      </ul>
                    </li>
                    <li><a href="#s-11-4" class="text-[#0645ad] hover:underline">11.4.</a> <a href="#s-11-4" class="text-black hover:underline">설명</a></li>
                </ul>
              </li>
              <li><a href="#s-12" class="text-[#0645ad] hover:underline">12.</a> <a href="#s-12" class="text-black hover:underline">군사</a></li>
              <li><a href="#s-13" class="text-[#0645ad] hover:underline">13.</a> <a href="#s-13" class="text-black hover:underline">하위 행정 구역</a>
                <ul class="toc-list-sub pl-4 space-y-1 list-none">
                    <li><a href="#s-13-1" class="text-[#0645ad] hover:underline">13.1.</a> <a href="#s-13-1" class="text-black hover:underline">전체 행정구역 변천사</a></li>
                </ul>
              </li>
              <li><a href="#s-14" class="text-[#0645ad] hover:underline">14.</a> <a href="#s-14" class="text-black hover:underline">여담</a></li>
              <li><a href="#s-15" class="text-[#0645ad] hover:underline">15.</a> <a href="#s-15" class="text-black hover:underline">협력 도시</a>
                <ul class="toc-list-sub pl-4 space-y-1 list-none">
                    <li><a href="#s-15-1" class="text-[#0645ad] hover:underline">15.1.</a> <a href="#s-15-1" class="text-black hover:underline">자매결연 도시</a></li>
                </ul>
              </li>
              <li><a href="#s-16" class="text-[#0645ad] hover:underline">16.</a> <a href="#s-16" class="text-black hover:underline">효빈광역시 지역을 본관으로 한 성씨</a></li>
              <li><a href="#s-17" class="text-[#0645ad] hover:underline">17.</a> <a href="#s-17" class="text-black hover:underline">둘러보기</a></li>
              <li><a href="#s-18" class="text-[#0645ad] hover:underline">18.</a> <a href="#s-18" class="text-black hover:underline">각주</a></li>
            </ul>
          </div>

          <h2 id="s-1" class="wiki-h2"><a href="#s-1" class="text-black no-underline">1.</a> 개요</h2>
          <p>대한민국의 광역시. 덕빈지역의 최대도시이자 효빈권의 중심도시이다.</p>

          <h2 id="s-2" class="wiki-h2"><a href="#s-2" class="text-black no-underline">2.</a> 상징</h2>
          <h3 id="s-2-1" class="wiki-h3">2.1. 휘장</h3>
          <div style="border: 1px solid #ccc; margin-bottom: 20px; border-radius: 4px; overflow: hidden; background-color: #f8f8f8;">
              <table class="wiki-table" style="width: 100%; margin: 0; border: none; background-color: white;">
                  <tr>
                      <td style="width: 120px; text-align: center; border: 1px solid #ddd; padding: 10px; vertical-align: middle;">
                          <img src="https://i.imgur.com/iYcyOlz.png" alt="효빈광역시 휘장" style="max-width: 100px; height: auto; display: block; margin: 0 auto; border: 1px solid #ddd; border-radius: 3px; object-fit: contain;">
                      </td>
                      <td style="border: 1px solid #ddd; padding: 10px; vertical-align: top; font-size: 0.95rem;">
                          <p>바다와 3면이 접해있는 항만 도시의 특성을 살려 하부는 푸른 물결 이미지를, 상부는 효빈의 초성 'ㅂ'을 노란색(밝은 미래)으로 형상화했다.</p>
                      </td>
                  </tr>
              </table>
          </div>
          <h3 id="s-2-2" class="wiki-h3">2.2. 슬로건</h3>
          <p><strong>"효빈 시민의 밝은 미래를 함께 열어간다"</strong> (2022년~)<br>민선 8기 박효빈 시장 취임과 함께 발표된 슬로건이다.</p>
          <h3 id="s-2-3" class="wiki-h3">2.3. 마스코트</h3>
          <p><strong>히버히</strong> - 효빈광역시의 시조(市鳥)인 기러기를 캐릭터화한 것이다.</p>

          <h2 id="s-3" class="wiki-h2"><a href="#s-3" class="text-black no-underline">3.</a> 역사</h2>
          <h3 id="s-3-1" class="wiki-h3">3.1. 조선시대</h3>
          <p>효빈 지역은 조선시대에는 '효빈군'과 '탄성군' 등으로 나뉘어 있었다.</p>
          <h3 id="s-3-2" class="wiki-h3">3.2. 일제강점기 ~ 현대</h3>
          <p>1914년 부군면통폐합으로 탄성군과 통합하였으며, 이후 비약적인 성장을 거듭했다.</p>

          <h2 id="s-4" class="wiki-h2"><a href="#s-4" class="text-black no-underline">4.</a> 지리</h2>
          <h3 id="s-4-1" class="wiki-h3">4.1. 자연환경</h3>
          <p>산이 매우 적은 해안 반도 지형으로, 동서 간의 지형적 대비가 뚜렷하며, 시내를 관통하는 <strong>효빈강</strong>이 있다.</p>
          <h3 id="s-4-2" class="wiki-h3">4.2. 기후</h3>
          <p>온난 습윤 기후(Cfa)에 속한다.</p>
          <h3 id="s-4-3" class="wiki-h3">4.3. 인구</h3>
          <p>현재도 인구가 꾸준히 늘어나는 도시로, 서울, 부산, 인천 다음으로 인구가 많다.</p>

          <h2 id="s-5" class="wiki-h2"><a href="#s-5" class="text-black no-underline">5.</a> 도시구조</h2>
          ${CITY_STRUCTURE_TABLE}
          <p>도시 지형이 평지이다 보니 <strong>다핵 구조</strong>를 띠고 있으며, 원도심, 고송지구, 청엽지구, 평당신도시 등의 다도심 체제로 운영된다.</p>

          <h2 id="s-6" class="wiki-h2"><a href="#s-6" class="text-black no-underline">6.</a> 교통</h2>
          <p>효빈은 전반적으로 철도교통 초강세를 보이고 있다. 시내 궤도 교통 이용률이 타 도시 대비 매우 높은 편이다.</p>

          <h3 id="s-6-1" class="wiki-h3">6.1. 철도</h3>
          ${RAIL_NETWORK_TABLE}
          <h4 id="s-6-1-1" class="wiki-h3">6.1.1. 일반철도 및 고속철도</h4>
          <ul class="list-disc ml-6">
            <li><strong>고속철도</strong>: 빈효고속선 (효빈역 정차)</li>
            <li><strong>일반철도</strong>: 빈효선, 강빈선, 내천선, 안빈선</li>
          </ul>

          <h4 id="s-6-1-2" class="wiki-h3">6.1.2. 도시철도/광역철도</h4>
          ${URBAN_RAIL_TABLE}
          <ul class="list-disc ml-6">
            <li>수도권 전철에 버금가는 <strong>빈효선 광역전철</strong>이 운행 중이다.</li>
            <li>특이하게도 1931년 개통된 <strong>노면전차(현 7호선)</strong>가 폐지되지 않고 현재까지 운행 중이다.</li>
          </ul>

          <h3 id="s-6-2" class="wiki-h3">6.2. 도로권역</h3>
          <p>주요 고속도로와 국도가 통과하며 인근 도시권과의 접근성이 우수하다.</p>

          <h3 id="s-6-3" class="wiki-h3">6.3. 버스</h3>
          <h4 id="s-6-3-1" class="wiki-h3">6.3.1. 시내버스</h4>
          <p>시내버스는 권역별 번호 체계를 따르며 준공영제가 시행 중이다.</p>
          <h4 id="s-6-3-2" class="wiki-h3">6.3.2. 시외/고속버스</h4>
          <p>효빈 종합버스터미널은 전국 주요 도시로 향하는 시외/고속버스 노선을 운영하고 있다.</p>

          <h3 id="s-6-4" class="wiki-h3">6.4. 항만</h3>
          <p>효빈항은 대한민국 5대 무역항 중 하나로, 서해안 최대 규모의 컨테이너 물동량을 처리한다.</p>

          <h3 id="s-6-5" class="wiki-h3">6.5. 항공</h3>
          <p>효빈 국제공항(HYB)이 위치하고 있다.</p>

          <h2 id="s-7" class="wiki-h2"><a href="#s-7" class="text-black no-underline">7.</a> 경제</h2>
          <h3 id="s-7-1" class="wiki-h3">7.1. 산업</h3>
          <p>제조업과 서비스업이 고루 발달했으며, 특히 하이테크 산업과 중공업이 경제를 이끌고 있다.</p>
          <h3 id="s-7-2" class="wiki-h3">7.2. 상권</h3>
          <p>원도심인 중구와 신도심인 남구 평당지구가 금융 및 상업의 중심지 역할을 한다.</p>

          <h2 id="s-8" class="wiki-h2"><a href="#s-8" class="text-black no-underline">8.</a> 관광</h2>
          <p>해양 관광 자원과 역사적인 개항장 문화 자산을 보유하고 있다.</p>

          <h2 id="s-9" class="wiki-h2"><a href="#s-9" class="text-black no-underline">9.</a> 교육</h2>
          <p>국립 효빈대학교, 효빈과학기술원(HIST) 등 다수의 대학이 소재한다.</p>

          <h2 id="s-10" class="wiki-h2"><a href="#s-10" class="text-black no-underline">10.</a> 생활문화</h2>
          <h3 id="s-10-1" class="wiki-h3">10.1. 효빈광역시청</h3>
          <p>효빈광역시청은 북구 고송동에 위치하며, 현재는 민선 8기 박효빈 시장이 이끌고 있다.</p>
          <h3 id="s-10-2" class="wiki-h3">10.2. 언론</h3>
          <p>지역을 기반으로 하는 주요 일간지와 방송사가 위치해 있다.</p>
          <h3 id="s-10-3" class="wiki-h3">10.3. 의료기관</h3>
          <p>남구 엽월대학교 병원, 북구 효빈대학교 병원 등 상급종합병원이 있다.</p>
          <h3 id="s-10-4" class="wiki-h3">10.4. 스포츠</h3>
          <p>KBO 리그 '회주 돌핀즈', K리그1 '효빈 레인보우 아쿠아드' 등의 프로 구단 연고지이다.</p>

          <h2 id="s-11" class="wiki-h2"><a href="#s-11" class="text-black no-underline">11.</a> 정치</h2>
          <h3 id="s-11-1" class="wiki-h3">11.1. 국회의원 목록</h3>
          <p>제22대 국회의원 총 14석 중 더불어민주당이 13석, 진보당이 1석을 차지하고 있다.</p>
          <h3 id="s-11-2" class="wiki-h3">11.2. 역대 민선 효빈광역시장</h3>
          <p>현 시장은 민선 8기 박효빈 시장이다.</p>
          <h3 id="s-11-3" class="wiki-h3">11.3. 최근 선거</h3>
          <h4 id="s-11-3-1" class="wiki-h3">11.3.1. 대통령 선거</h4>
          <p>호남 지역 못지않게 민주당계 정당 강세 지역으로, 대통령 선거에서도 해당 정당 후보에게 압도적인 지지를 보낸다.</p>
          <h4 id="s-11-3-2" class="wiki-h3">11.3.2. 총선</h4>
          <p>최근 제22대 총선에서도 더불어민주당이 13석, 진보당이 1석을 차지하며 보수 정당은 전멸했다.</p>
          <h4 id="s-11-3-3" class="wiki-h3">11.3.3. 지선</h4>
          <p>지방선거에서도 시장 및 구청장 다수가 민주당계 정당 소속이다.</p>
          <h3 id="s-11-4" class="wiki-h3">11.4. 설명</h3>
          <p>민주당계 정당 강세 지역이다.</p>

          <h2 id="s-12" class="wiki-h2"><a href="#s-12" class="text-black no-underline">12.</a> 군사</h2>
          <p>후방 지역으로 해군과 공군이 발달했다.</p>

          <h2 id="s-13" class="wiki-h2"><a href="#s-13" class="text-black no-underline">13.</a> 하위 행정 구역</h2>
          <p>효빈광역시는 <strong>8구 1군</strong> 체제이다.</p>
          
          <table class="wiki-table" style="width:100%; text-align:center; border: 1px solid #ccc; border-collapse: collapse; margin-top:10px; font-size: 0.95rem;">
            <thead>
                <tr>
                    <th colspan="2" style="background-color:#7777AA; color:white; padding: 10px; border: 1px solid #ccc; text-align: center;">
                        <span style="font-size:1.2em;">효빈광역시의 행정구역</span>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th style="background-color:#f8f9fa; width: 15%; padding: 10px; border: 1px solid #ccc; vertical-align: middle;">자치구<br>(8)</th>
                    <td style="padding: 15px; border: 1px solid #ccc; background: #fff;">
                        <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 5px;">
                           ${districtsHtml}
                        </div>
                    </td>
                </tr>
                <tr>
                    <th style="background-color:#f8f9fa; width: 15%; padding: 10px; border: 1px solid #ccc; vertical-align: middle;">자치군<br>(1)</th>
                    <td style="padding: 15px; border: 1px solid #ccc; background: #fff;">
                        <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 5px;">
                           ${countiesHtml}
                        </div>
                    </td>
                </tr>
            </tbody>
          </table>
          
          ${ADMIN_HISTORY_TABLE}
          ${HISTORY_TIMELINE_TABLE}

          <h2 id="s-14" class="wiki-h2"><a href="#s-14" class="text-black no-underline">14.</a> 여담</h2>
          <p>현 시장은 민선 8기 <strong>박효빈</strong> 시장으로, 도시 이름(효빈)과 시장 이름(효빈)이 같은 유일한 사례이다.</p>

          <h2 id="s-15" class="wiki-h2"><a href="#s-15" class="text-black no-underline">15.</a> 협력 도시</h2>
          <h3 id="s-15-1" class="wiki-h3">15.1. 자매결연 도시</h3>
          <p>일본의 누마즈시, 도쿄도 시부야구 등과 자매결연을 맺고 있다.</p>

          <h2 id="s-16" class="wiki-h2"><a href="#s-16" class="text-black no-underline">16.</a> 효빈광역시 지역을 본관으로 한 성씨</h2>
          <p>효빈 박씨, 효빈 상씨, 탄성 장씨, 안천 우씨 등의 본관이 있다.</p>

          <h2 id="s-17" class="wiki-h2"><a href="#s-17" class="text-black no-underline">17.</a> 둘러보기</h2>
          <p><small>(둘러보기 틀은 여기에 표시될 예정입니다.)</small></p>

          <h2 id="s-18" class="wiki-h2"><a href="#s-18" class="text-black no-underline">18.</a> 각주</h2>
          <p id="fn-1" style="font-size: 0.9em; margin-bottom: 5px;">
            <sup class="foot-note-marker"><a href="#fnref-1" style="text-decoration: none;">[1]</a></sup> 시민 대부분은 전차 만족도가 높았다.
          </p>
    `;

    // --- 7. 문서 저장 ---
    const initialData = {
        '효빈광역시': {
            content: initialContent,
            history: [{ rev: 56, user: 'System', time: new Date().toISOString(), summary: 'V30_STRUCTURE_UPDATE: TOC 및 본문 순서 재정렬 (1~17번)' }],
            discuss: [],
            lastUpdated: new Date().toISOString()
        }
    };
    
    // Batch write style (Loop)
    for (const [key, value] of Object.entries(initialData)) {
        await setDoc(doc(db, 'artifacts', appId, 'public', 'wiki_docs', key), value, { merge: true });
    }
    console.log("Seeding Done!");
}