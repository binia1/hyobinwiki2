document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("hyobin-character-universe-nav-container");
    
    if (container) {
        container.innerHTML = `
        <style>
            /* 무지개 동호회 둘러보기 틀 전용 독립 CSS */
            .cu-container { border: 2px solid #673AB7; margin: 20px 0; border-radius: 6px; overflow: hidden; background: #fff; font-family: 'Noto Sans KR', sans-serif; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
            .cu-summary { background-color: #673AB7; color: white; padding: 12px; font-weight: bold; cursor: pointer; text-align: center; list-style: none; font-size: 1.1rem; user-select: none; }
            .cu-summary::-webkit-details-marker { display: none; }
            .cu-summary a { color: white; text-decoration: none; display: block; }
            .cu-summary a:hover { text-decoration: underline; }
            
            .cu-table { width: 100%; border-collapse: collapse; text-align: center; margin: 0; table-layout: fixed; }
            .cu-table th, .cu-table td { border: 1px solid #ddd; padding: 10px 4px; vertical-align: middle; }
            
            .cu-section-header { font-weight: bold; font-size: 0.95rem; background-color: #F8F9FA; color: #333; padding: 6px !important; letter-spacing: 1px; }
            
            .cu-link { text-decoration: none; color: #333; display: inline-flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px; font-size: 0.9rem; font-weight: 500; }
            .cu-link:hover { text-decoration: underline; color: #673AB7; }
            
            /* 캐릭터 사각형(모서리 둥근) 프로필 이미지로 변경 및 크기 확대 */
            .cu-img { width: 75px; height: 75px; border-radius: 8px; object-fit: cover; border: 1px solid #ccc; background-color: #fff; box-shadow: 0 2px 4px rgba(0,0,0,0.1); transition: transform 0.2s; }
            .cu-link:hover .cu-img { transform: scale(1.05); border-color: #673AB7; }
            
            .cu-subtext { font-size: 0.75rem; color: #777; font-weight: normal; margin-top: -2px; }
            
            .cu-footer { text-align: left; font-size: 0.85rem; color: #555; background-color: #F9F9FA; padding: 12px 15px; border-top: 1px solid #ccc; line-height: 1.6; }
            .cu-footer strong { color: #333; }
        </style>

        <details class="cu-container" open>
            <summary class="cu-summary">
                <a href="무지개_동호회.html">🌈 효빈대학교 무지개 동호회 (Rainbow Club) ▼</a>
            </summary>
            <div style="overflow-x: auto;">
                <table class="cu-table">
                    <!-- 1. 수뇌부 (Core 7) -->
                    <tr>
                        <th colspan="14" class="cu-section-header" style="border-bottom: 2px solid #673AB7;">수뇌부 (Core 7)</th>
                    </tr>
                    <tr>
                        <td colspan="2" style="background-color: #ED7D95; font-weight: bold;"><a href="김시연.html" style="color: white; text-decoration: none;">김시연</a></td>
                        <td colspan="2" style="background-color: #444444; font-weight: bold;"><a href="고소유.html" style="color: white; text-decoration: none;">고소유</a></td>
                        <td colspan="2" style="background-color: #01B7ED; font-weight: bold;"><a href="오이슬.html" style="color: white; text-decoration: none;">오이슬</a></td>
                        <td colspan="2" style="background-color: #E7D600; font-weight: bold;"><a href="나수미.html" style="color: #333; text-decoration: none;">나수미</a></td>
                        <td colspan="2" style="background-color: #D81C2F; font-weight: bold;"><a href="유채나.html" style="color: white; text-decoration: none;">유채나</a></td>
                        <td colspan="2" style="background-color: #A664A0; font-weight: bold;"><a href="고노애.html" style="color: white; text-decoration: none;">고노애</a></td>
                        <td colspan="2" style="background-color: #FF5800; font-weight: bold;"><a href="강하애.html" style="color: white; text-decoration: none;">강하애</a></td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <a href="김시연.html" class="cu-link"><img class="cu-img" onerror="this.src='이미지/김시연.webp'" src="이미지/김시연.webp"/>김시연</a><br/>
                            <span class="cu-subtext">(합법 얀데레)</span>
                        </td>
                        <td colspan="2">
                            <a href="고소유.html" class="cu-link"><img class="cu-img" onerror="this.src='이미지/고소유.webp'" src="이미지/고소유.webp"/>고소유</a><br/>
                            <span class="cu-subtext">(천연 탱커)</span>
                        </td>
                        <td colspan="2">
                            <a href="오이슬.html" class="cu-link"><img class="cu-img" onerror="this.src='이미지/오이슬.webp'" src="이미지/오이슬.webp"/>오이슬</a><br/>
                            <span class="cu-subtext">(참이슬 병나발좌)</span>
                        </td>
                        <td colspan="2">
                            <a href="나수미.html" class="cu-link"><img class="cu-img" onerror="this.src='이미지/나수미.webp'" src="이미지/나수미.webp"/>나수미</a><br/>
                            <span class="cu-subtext">(탄수화물 폭격기)</span>
                        </td>
                        <td colspan="2">
                            <a href="유채나.html" class="cu-link"><img class="cu-img" onerror="this.src='이미지/유채나.webp'" src="이미지/유채나.webp"/>유채나</a><br/>
                            <span class="cu-subtext">(스칼렛 스톰)</span>
                        </td>
                        <td colspan="2">
                            <a href="고노애.html" class="cu-link"><img class="cu-img" onerror="this.src='이미지/고노애.webp'" src="이미지/고노애.webp"/>고노애</a><br/>
                            <span class="cu-subtext">(수면 프로파일러)</span>
                        </td>
                        <td colspan="2">
                            <a href="강하애.html" class="cu-link"><img class="cu-img" onerror="this.src='이미지/강하애.webp'" src="이미지/강하애.webp"/>강하애</a><br/>
                            <span class="cu-subtext">(다쟈레 고문관)</span>
                        </td>
                    </tr>

                    <!-- 2. 확장 멤버 & 샌드백 듀오 -->
                    <tr>
                        <th colspan="12" class="cu-section-header" style="border-bottom: 2px solid #7777AA; border-top: 2px solid #ccc;">확장 멤버 (Extended 6)</th>
                        <th colspan="2" class="cu-section-header" style="border-bottom: 2px solid #555555; border-top: 2px solid #ccc;">샌드백 듀오</th>
                    </tr>
                    <tr>
                        <td colspan="2" style="background-color: #F8B6C4; font-weight: bold;"><a href="소남주.html" style="color: #333; text-decoration: none;">소남주</a></td>
                        <td colspan="2" style="background-color: #A9A8A9; font-weight: bold;"><a href="태미아.html" style="color: white; text-decoration: none;">태미아</a></td>
                        <td colspan="2" style="background-color: #485EC6; font-weight: bold;"><a href="조향림.html" style="color: white; text-decoration: none;">조향림</a></td>
                        <td colspan="2" style="background-color: #84C36E; font-weight: bold;"><a href="엠마_체레스떼.html" style="color: white; text-decoration: none;">엠마 체레스떼</a></td>
                        <td colspan="2" style="background-color: #E7AAC4; font-weight: bold;"><a href="천리내.html" style="color: #333; text-decoration: none;">천리내</a></td>
                        <td colspan="2" style="background-color: #37B484; font-weight: bold;"><a href="김시안.html" style="color: white; text-decoration: none;">김시안</a></td>
                        
                        <td colspan="1" style="background-color: #8B4513; font-weight: bold;"><a href="주성우.html" style="color: white; text-decoration: none;">주성우</a></td>
                        <td colspan="1" style="background-color: #333366; font-weight: bold;"><a href="은현성.html" style="color: white; text-decoration: none;">은현성</a></td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <a href="소남주.html" class="cu-link"><img class="cu-img" onerror="this.src='이미지/소남주.webp'" src="이미지/소남주.webp"/>소남주</a><br/>
                            <span class="cu-subtext">(대형 댕댕이)</span>
                        </td>
                        <td colspan="2">
                            <a href="태미아.html" class="cu-link"><img class="cu-img" onerror="this.src='이미지/태미아.webp'" src="이미지/태미아.webp"/>태미아</a><br/>
                            <span class="cu-subtext">(월반 천재)</span>
                        </td>
                        <td colspan="2">
                            <a href="조향림.html" class="cu-link"><img class="cu-img" onerror="this.src='이미지/조향림.webp'" src="이미지/조향림.webp"/>조향림</a><br/>
                            <span class="cu-subtext">(런웨이 서빙)</span>
                        </td>
                        <td colspan="2">
                            <a href="엠마_체레스떼.html" class="cu-link"><img class="cu-img" onerror="this.src='이미지/엠마_체레스떼.webp'" src="이미지/엠마_체레스떼.webp"/>엠마 체레스떼</a><br/>
                            <span class="cu-subtext">(하늘색 엠마망)</span>
                        </td>
                        <td colspan="2">
                            <a href="천리내.html" class="cu-link"><img class="cu-img" onerror="this.src='이미지/천리내.webp'" src="이미지/천리내.webp"/>천리내</a><br/>
                            <span class="cu-subtext">(이과 영재)</span>
                        </td>
                        <td colspan="2">
                            <a href="김시안.html" class="cu-link"><img class="cu-img" onerror="this.src='이미지/김시안.webp'" src="이미지/김시안.webp"/>김시안</a><br/>
                            <span class="cu-subtext">(명예 팩폭러)</span>
                        </td>
                        <td colspan="1">
                            <a href="주성우.html" class="cu-link"><img class="cu-img" onerror="this.src='이미지/주성우.webp'" src="이미지/주성우.webp"/>주성우</a><br/>
                            <span class="cu-subtext">(물리 방패)</span>
                        </td>
                        <td colspan="1">
                            <a href="은현성.html" class="cu-link"><img class="cu-img" onerror="this.src='이미지/은현성.webp'" src="이미지/은현성.webp"/>은현성</a><br/>
                            <span class="cu-subtext">(팩폭 소방수)</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="14" class="cu-footer">
                            * <strong>무지개 동호회(Rainbow Club)</strong>: 효빈대학교 사회과학관 학생회실 및 '아이 좋아 전 집'을 거점으로 활동하는 15인 규모의 최강 씹덕 카르텔.<br/>
                            * <strong>동맹 세력</strong>: 김성민 의원 일가, 박효빈 시장(물주), 아쿠아 어벤져스(석다연), 리에하스 연합(임은혜, 석루비) 등과 긴밀한 관계를 공유합니다.
                        </td>
                    </tr>
                </table>
            </div>
        </details>
        `;
    }
});