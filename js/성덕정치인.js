/* 파일 경로: js/성덕정치인.js */

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("otaku-politicians-nav-container");
    if (!container) return;

    // 1. 네비게이션 전용 디자인(CSS) 주입 (CSS 변수 사용 금지, 하드코딩 적용)
    const navStyle = `
    <style>
        /* 성덕 정치인 틀 전용 스타일 */
        .nw-frame-otaku { border: 2px solid #4A148C; background: #ffffff; border-radius: 8px; padding: 12px; margin: 0 auto 20px; text-align: center; box-shadow: 0 4px 12px rgba(74, 20, 140, 0.15); }
        .nw-title-otaku { background: linear-gradient(135deg, #4A148C, #7B1FA2); margin: -5px -10px 15px; padding: 12px; border-bottom: 2px solid #311B92; display: flex; justify-content: center; align-items: center; border-top-left-radius: 6px; border-top-right-radius: 6px; font-weight: 900; font-size: 1.25rem; color: #ffffff; letter-spacing: 0.5px; text-shadow: 1px 1px 2px rgba(0,0,0,0.3); }
        .nw-box-otaku { border: 2px solid #7B1FA2; margin-bottom: 10px; background: #fff; border-radius: 4px; overflow: hidden; }
        .nw-box-otaku summary { background-color: #7B1FA2; color: white; font-weight: bold; cursor: pointer; padding: 10px; display: flex; justify-content: center; align-items: center; gap: 10px; list-style: none; font-size: 1rem; outline: none; transition: background 0.2s; }
        .nw-box-otaku summary:hover { background-color: #4A148C; }
        .nw-box-otaku summary::-webkit-details-marker { display: none; }
        
        .nw-tbl-otaku { width: 100%; border-collapse: collapse; table-layout: fixed; font-size: 0.9rem; word-break: keep-all; }
        .nw-tbl-otaku th, .nw-tbl-otaku td { border: 1px solid #CE93D8; padding: 12px 6px; vertical-align: middle; text-align: center; }
        .nw-tbl-otaku th { background-color: #F3E5F5; color: #4A148C; font-weight: bold; line-height: 1.4; }
        .nw-tbl-otaku td { background-color: #FAFAFA; }
        
        /* 인물 사진 및 카드 스타일 */
        .nw-img-otaku { width: 85px; height: 85px; object-fit: cover; border-radius: 8px; margin: 0 auto 6px; display: block; border: 2px solid #E1BEE7; transition: transform 0.2s, box-shadow 0.2s; background-color: #ffffff; }
        .nw-link-otaku:hover .nw-img-otaku { transform: scale(1.08); border-color: #9C27B0; box-shadow: 0 4px 8px rgba(156, 39, 176, 0.4); }
        .nw-link-otaku { color: #333; text-decoration: none; font-weight: bold; display: flex; flex-direction: column; align-items: center; font-size: 0.95rem; }
        .nw-link-otaku:hover { text-decoration: underline; color: #7B1FA2; }
        .nw-subtext-otaku { font-size: 0.75rem; color: #666; font-weight: normal; margin-top: 4px; line-height: 1.2; word-break: keep-all; }
        
        /* 플렉스 그룹 배치 */
        .flex-group-otaku { display: flex; justify-content: center; gap: 15px; flex-wrap: wrap; padding: 5px 0; }
        .flex-group-otaku .nw-link-otaku { flex: 0 1 18%; min-width: 105px; }
    </style>
    `;

    // 2. HTML 구조 주입 (효빈·덕북·덕남 성덕 정치인 및 관계자 총망라)
    const navHtml = `
        <div class="nw-frame-otaku">
            <div class="nw-title-otaku">
                ✨ 덕빈권(효빈·덕북·덕남) 성덕(성공한 덕후) 정치인 연합
            </div>
            
            <details id="nw-otaku-box" class="nw-box-otaku" open>
                <summary>🏛️ 덕업일치를 이룬 지역의 수장 및 대표자들 ▼</summary>
                <table class="nw-tbl-otaku">
                    <colgroup>
                        <col style="width: 14%;">
                        <col style="width: 86%;">
                    </colgroup>
                    
                    <!-- 광역자치단체장 -->
                    <tr>
                        <th>광역<br>자치단체장<br><span style="font-size: 0.75em; font-weight: normal;">(행정 최고위)</span></th>
                        <td>
                            <div class="flex-group-otaku">
                                <a href="박효빈.html" class="nw-link-otaku">
                                    <img src="이미지/박효빈.webp" class="nw-img-otaku" onerror="this.style.display='none'">
                                    박효빈
                                    <span class="nw-subtext-otaku">(효빈광역시장 / 잡덕 끝판왕)</span>
                                </a>
                                <a href="김영산.html" class="nw-link-otaku">
                                    <img src="이미지/김영산.webp" class="nw-img-otaku" onerror="this.style.display='none'">
                                    김영산
                                    <span class="nw-subtext-otaku">(덕빈남도지사 / 아사카 카린 오시)</span>
                                </a>
                            </div>
                        </td>
                    </tr>

                    <!-- 광역 부단체장 -->
                    <tr>
                        <th>광역<br>부단체장<br><span style="font-size: 0.75em; font-weight: normal;">(시정 2인자)</span></th>
                        <td>
                            <div class="flex-group-otaku">
                                <a href="강휴석.html" class="nw-link-otaku">
                                    <img src="이미지/강휴석.webp" class="nw-img-otaku" onerror="this.style.display='none'">
                                    강휴석
                                    <span class="nw-subtext-otaku">(효빈 행정부시장 / 선 타는 즈라·하나마루 오시)</span>
                                </a>
                                <a href="최대현.html" class="nw-link-otaku">
                                    <img src="이미지/최대현.webp" class="nw-img-otaku" onerror="this.style.display='none'">
                                    최대현
                                    <span class="nw-subtext-otaku">(효빈 경제부시장 / 1조의 사나이·양다리 P)</span>
                                </a>
                            </div>
                        </td>
                    </tr>

                    <!-- 국회의원 -->
                    <tr>
                        <th>국회의원<br><span style="font-size: 0.75em; font-weight: normal;">(입법부 엘리트)</span></th>
                        <td>
                            <div class="flex-group-otaku">
                                <a href="김성민.html" class="nw-link-otaku">
                                    <img src="이미지/김성민.webp" class="nw-img-otaku" onerror="this.style.display='none'">
                                    김성민
                                    <span class="nw-subtext-otaku">(효빈 중·동구 / 노조미&메이 오시)</span>
                                </a>
                                <a href="지선진.html" class="nw-link-otaku">
                                    <img src="이미지/지선진.webp" class="nw-img-otaku" onerror="this.style.display='none'">
                                    지선진
                                    <span class="nw-subtext-otaku">(효빈 서구 / 학생회장 콜렉터)</span>
                                </a>
                                <a href="박청권.html" class="nw-link-otaku">
                                    <img src="이미지/박청권.webp" class="nw-img-otaku" onerror="this.style.display='none'">
                                    박청권
                                    <span class="nw-subtext-otaku">(효빈 탄성 / 니시키노 마키 오시)</span>
                                </a>
                                <a href="남소현.html" class="nw-link-otaku">
                                    <img src="이미지/남소현.webp" class="nw-img-otaku" onerror="this.style.display='none'">
                                    남소현
                                    <span class="nw-subtext-otaku">(덕북 계성·반양 / 이마이 리사 오시)</span>
                                </a>
                                <a href="송원민.html" class="nw-link-otaku">
                                    <img src="이미지/송원민.webp" class="nw-img-otaku" onerror="this.style.display='none'">
                                    송원민
                                    <span class="nw-subtext-otaku">(덕남 방산·석창 갑 / 카스밍 오시)</span>
                                </a>
                            </div>
                        </td>
                    </tr>

                    <!-- 기초자치단체장 -->
                    <tr>
                        <th>기초<br>자치단체장<br><span style="font-size: 0.75em; font-weight: normal;">(현장 행정 책임자)</span></th>
                        <td>
                            <div class="flex-group-otaku">
                                <!-- 효빈권 -->
                                <a href="성선설.html" class="nw-link-otaku">
                                    <img src="이미지/성선설.webp" class="nw-img-otaku" onerror="this.style.display='none'">
                                    성선설
                                    <span class="nw-subtext-otaku">(탄성군수 / 현실판 쿠로사와 루비)</span>
                                </a>
                                <a href="김지언.html" class="nw-link-otaku">
                                    <img src="이미지/김지언.webp" class="nw-img-otaku" onerror="this.style.display='none'">
                                    김지언
                                    <span class="nw-subtext-otaku">(효빈 북구청장 / 세이나 오시)</span>
                                </a>
                                <!-- 덕북권 -->
                                <a href="오현주.html" class="nw-link-otaku">
                                    <img src="이미지/오현주.webp" class="nw-img-otaku" onerror="this.style.display='none'">
                                    오현주
                                    <span class="nw-subtext-otaku">(계성시장 / 라나 맘)</span>
                                </a>
                                <a href="유진태.html" class="nw-link-otaku">
                                    <img src="이미지/유진태.webp" class="nw-img-otaku" onerror="this.style.display='none'">
                                    유진태
                                    <span class="nw-subtext-otaku">(치원군수 / 노동자 봇치)</span>
                                </a>
                                <a href="박아상.html" class="nw-link-otaku">
                                    <img src="이미지/박아상.webp" class="nw-img-otaku" onerror="this.style.display='none'">
                                    박아상
                                    <span class="nw-subtext-otaku">(약산시장 / 유키 세츠나 오시)</span>
                                </a>
                                <a href="이재성.html" class="nw-link-otaku">
                                    <img src="이미지/이재성.webp" class="nw-img-otaku" onerror="this.style.display='none'">
                                    이재성
                                    <span class="nw-subtext-otaku">(빈주시장 / 와타나베 요우 오시)</span>
                                </a>
                                <a href="장은재.html" class="nw-link-otaku">
                                    <img src="이미지/장은재.webp" class="nw-img-otaku" onerror="this.style.display='none'">
                                    장은재
                                    <span class="nw-subtext-otaku">(전산시장 / 쿠라타 마시로 오시)</span>
                                </a>
                                <a href="강미소.html" class="nw-link-otaku">
                                    <img src="이미지/강미소.webp" class="nw-img-otaku" onerror="this.style.display='none'">
                                    강미소
                                    <span class="nw-subtext-otaku">(상안군수 / 아야&치사토 오시)</span>
                                </a>
                                <!-- 덕남권 -->
                                <a href="정동혁.html" class="nw-link-otaku">
                                    <img src="이미지/정동혁.webp" class="nw-img-otaku" onerror="this.style.display='none'">
                                    정동혁
                                    <span class="nw-subtext-otaku">(덕주시장 / 리사&니코 오시)</span>
                                </a>
                                <a href="이재원.html" class="nw-link-otaku">
                                    <img src="이미지/이재원.webp" class="nw-img-otaku" onerror="this.style.display='none'">
                                    이재원
                                    <span class="nw-subtext-otaku">(방산시장 / 더블 카스미 오시)</span>
                                </a>
                                <a href="오세윤.html" class="nw-link-otaku">
                                    <img src="이미지/오세윤.webp" class="nw-img-otaku" onerror="this.style.display='none'">
                                    오세윤
                                    <span class="nw-subtext-otaku">(매성시장 / 호시미 준나 오시)</span>
                                </a>
                                <a href="최현수.html" class="nw-link-otaku">
                                    <img src="이미지/최현수.webp" class="nw-img-otaku" onerror="this.style.display='none'">
                                    최현수
                                    <span class="nw-subtext-otaku">(낙주시장 / 와카미야 이브 오시)</span>
                                </a>
                                <a href="최민규.html" class="nw-link-otaku">
                                    <img src="이미지/최민규.webp" class="nw-img-otaku" onerror="this.style.display='none'">
                                    최민규
                                    <span class="nw-subtext-otaku">(석창군수 / 츠루마키 코코로 오시)</span>
                                </a>
                                <a href="윤재민.html" class="nw-link-otaku">
                                    <img src="이미지/윤재민.webp" class="nw-img-otaku" onerror="this.style.display='none'">
                                    윤재민
                                    <span class="nw-subtext-otaku">(원안군수 / 샤이니 아재·마리 오시)</span>
                                </a>
                                <a href="서윤수.html" class="nw-link-otaku">
                                    <img src="이미지/서윤수.webp" class="nw-img-otaku" onerror="this.style.display='none'">
                                    서윤수
                                    <span class="nw-subtext-otaku">(관수군수 / 시마무라 우즈키 오시)</span>
                                </a>
                                <a href="주언일.html" class="nw-link-otaku">
                                    <img src="이미지/주언일.webp" class="nw-img-otaku" onerror="this.style.display='none'">
                                    주언일
                                    <span class="nw-subtext-otaku">(곡천군수 / 미나토 유키나 오시)</span>
                                </a>
                                <a href="김태수.html" class="nw-link-otaku">
                                    <img src="이미지/김태수.webp" class="nw-img-otaku" onerror="this.style.display='none'">
                                    김태수
                                    <span class="nw-subtext-otaku">(분주군수 / 야자와 니코 오시)</span>
                                </a>
                            </div>
                        </td>
                    </tr>

                    <!-- 지방의원 -->
                    <tr>
                        <th>지방의원<br><span style="font-size: 0.75em; font-weight: normal;">(시·구·군의회)</span></th>
                        <td>
                            <div class="flex-group-otaku">
                                <a href="노정미.html" class="nw-link-otaku">
                                    <img src="이미지/노정미.webp" class="nw-img-otaku" onerror="this.style.display='none'">
                                    노정미
                                    <span class="nw-subtext-otaku">(효빈시의원 / 현실판 노조미)</span>
                                </a>
                                <a href="지민성.html" class="nw-link-otaku">
                                    <img src="이미지/지민성.webp" class="nw-img-otaku" onerror="this.style.display='none'">
                                    지민성
                                    <span class="nw-subtext-otaku">(효빈시의원 / 뱅드림 전도사)</span>
                                </a>
                                <a href="안예리.html" class="nw-link-otaku">
                                    <img src="이미지/안예리.webp" class="nw-img-otaku" onerror="this.style.display='none'">
                                    안예리
                                    <span class="nw-subtext-otaku">(서구의원 / 현실판 에리)</span>
                                </a>
                                <a href="성예지.html" class="nw-link-otaku">
                                    <img src="이미지/성예지.webp" class="nw-img-otaku" onerror="this.style.display='none'">
                                    성예지
                                    <span class="nw-subtext-otaku">(계성시의원 / 파르페 암살자)</span>
                                </a>
                                <a href="유소현.html" class="nw-link-otaku">
                                    <img src="이미지/유소현.webp" class="nw-img-otaku" onerror="this.style.display='none'">
                                    유소현
                                    <span class="nw-subtext-otaku">(계성시의원 / 분노의 서류 투척)</span>
                                </a>
                                <a href="염세현.html" class="nw-link-otaku">
                                    <img src="이미지/염세현.webp" class="nw-img-otaku" onerror="this.style.display='none'">
                                    염세현
                                    <span class="nw-subtext-otaku">(치원군의원 / 파란 피의 료 오시)</span>
                                </a>
                            </div>
                        </td>
                    </tr>

                    <!-- 차세대 주자 & 원로·참모진 -->
                    <tr>
                        <th>차세대·원로<br>및 핵심 참모<br><span style="font-size: 0.75em; font-weight: normal;">(성덕 생태계)</span></th>
                        <td>
                            <div class="flex-group-otaku">
                                <a href="김시연.html" class="nw-link-otaku">
                                    <img src="이미지/김시연.webp" class="nw-img-otaku" onerror="this.style.display='none'">
                                    김시연
                                    <span class="nw-subtext-otaku">(효빈대 단대장 / 합법 얀데레·아유무 오시)</span>
                                </a>
                                <a href="박현만.html" class="nw-link-otaku">
                                    <img src="이미지/박현만.webp" class="nw-img-otaku" onerror="this.style.display='none'">
                                    박현만
                                    <span class="nw-subtext-otaku">(전 효빈시장 / 1세대 우주세기 건덕후)</span>
                                </a>
                                <a href="민부선.html" class="nw-link-otaku">
                                    <img src="이미지/민부선.webp" class="nw-img-otaku" onerror="this.style.display='none'">
                                    민부선
                                    <span class="nw-subtext-otaku">(효빈대 총장 / 마리&엠마 오시)</span>
                                </a>
                                <a href="오다구.html" class="nw-link-otaku">
                                    <img src="이미지/오다구.webp" class="nw-img-otaku" onerror="this.style.display='none'">
                                    오다구
                                    <span class="nw-subtext-otaku">(전 효빈도시공사 사장 / 효빈 서브컬처의 아버지)</span>
                                </a>
                                <a href="천비서실장.html" class="nw-link-otaku">
                                    <img src="이미지/천_비서실장.webp" class="nw-img-otaku" onerror="this.style.display='none'">
                                    천 비서실장
                                    <span class="nw-subtext-otaku">(효빈시장 비서실장 / 치카리코 오시)</span>
                                </a>
                            </div>
                        </td>
                    </tr>
                </table>
            </details>
        </div>
    `;

    container.innerHTML = navStyle + navHtml;
});