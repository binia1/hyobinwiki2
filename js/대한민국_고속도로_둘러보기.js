document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("korea-highway-nav-container");
    
    if (container) {
        container.innerHTML = `
        <style>
            /* 고속도로 노선 틀 전용 스타일 */
            .highway-frame { width: 100%; border: 2px solid #3f3f7f; margin: 20px 0; background-color: var(--wiki-bg, #fff); font-family: 'Noto Sans KR', sans-serif; }
            .highway-header { 
                padding: 8px 10px; 
                background-image: linear-gradient(120deg, #fff 5%, #000 5.1% 9%, #fff 9.1% 10%, #000 10.1% 14%, #fff 14.1% 15%, #000 15.1% 19%, #fff 19.1% 81%, #cd313a 81.1% 90%, #0047a0 90.1%);
                display: flex; align-items: center; justify-content: center;
            }
            .highway-content { padding: 0; font-size: 0.85rem; }
            .highway-table { width: 100%; border-collapse: collapse; margin: 0; }
            .highway-table th, .highway-table td { border: 1px solid #ccc; padding: 8px; vertical-align: middle; }
            .highway-table th { background-color: #f5f5f5; color: #333; text-align: center; width: 12%; font-weight: bold; }
            .highway-table td { text-align: left; line-height: 1.8; color: var(--wiki-text, #333); background-color: var(--wiki-bg, #fff); }
            .highway-table a { color: #0022AA; text-decoration: none; font-weight: bold; }
            .highway-table a:hover { text-decoration: underline; }
            .hw-icon { width: auto; height: 18px; vertical-align: middle; margin-right: 2px; display: inline-block; }
            
            /* 다크모드 대응 */
            [data-theme='dark'] .highway-frame { border-color: #555588; background-color: #1a1a1a; }
            [data-theme='dark'] .highway-table th { background-color: #2a2a2a; color: #ddd; border-color: #444; }
            [data-theme='dark'] .highway-table td { border-color: #444; background-color: #1e1e1e; }
            [data-theme='dark'] .highway-table a { color: #88aaff; }
        </style>

        <div class="highway-frame">
            <div class="highway-header">
                <div style="display: inline-flex; vertical-align: middle; margin-right: 12px;">
                    <img src="이미지/대한민국_고속국도.webp" style="height: 40px; width: auto;" alt="고속국도 아이콘">
                </div>
                <div style="display: inline-flex; vertical-align: middle; text-align: left; line-height: 1.2;">
                    <span style="color:black; font-size: 0.9em; text-shadow: 1px 1px 2px rgba(255,255,255,0.8);">대한민국의</span><br>
                    <span style="color:black; font-size: 1.3em; font-weight: 900; text-shadow: 1px 1px 2px rgba(255,255,255,0.8);">고속도로</span>
                </div>
            </div>
            <div class="highway-content">
                <details open style="margin:0;">
                    <summary style="background-color: #f0f0f0; padding: 6px; text-align: center; cursor: pointer; font-size: 0.85rem; color: #555; font-weight: bold; border-bottom: 1px solid #ccc; list-style: none;">
                        [ 펼치기 · 접기 ]
                    </summary>
                    <table class="highway-table">
                        <tr>
                            <th>남북</th>
                            <td>
                                <img src="이미지/대한민국_고속국도.webp" class="hw-icon"> <a href="경부고속도로.html">경부선</a> | 
                                <img src="이미지/대한민국_고속국도.webp" class="hw-icon"> <a href="서해안고속도로.html">서해안선</a> | 
                                <img src="이미지/대한민국_고속국도.webp" class="hw-icon"> <a href="덕북고속도로.html">덕북선</a> | 
                                <img src="이미지/대한민국_고속국도.webp" class="hw-icon"> <a href="덕빈고속도로.html">덕빈선</a> | 
                                <img src="이미지/대한민국_고속국도.webp" class="hw-icon"> <a href="빈주부산고속도로.html">빈주부산선</a> | 
                                <img src="이미지/대한민국_고속국도.webp" class="hw-icon"> <a href="운진의정부고속도로.html">운진의정부선</a> | 
                                <img src="이미지/대한민국_고속국도.webp" class="hw-icon"> <a href="효빈빈주고속도로.html">효빈빈주선</a> | 
                                <img src="이미지/대한민국_고속국도.webp" class="hw-icon"> <a href="익산평택고속도로.html">익산평택선</a><span style="color:#888; font-size:0.8em;">/</span><a href="평택파주고속도로.html">평택파주선</a> | 
                                <img src="이미지/대한민국_고속국도.webp" class="hw-icon"> <a href="호남고속도로.html">호남선</a><span style="color:#888; font-size:0.8em;">/</span><a href="논산천안고속도로.html">논산천안선</a> | 
                                <img src="이미지/대한민국_고속국도.webp" class="hw-icon"> <a href="순천완주고속도로.html">순천완주선</a> | 
                                <img src="이미지/대한민국_고속국도.webp" class="hw-icon"> <a href="세종포천고속도로.html">세종포천선</a> | 
                                <img src="이미지/대한민국_고속국도.webp" class="hw-icon"> <a href="중부고속도로.html">중부선</a><span style="color:#888; font-size:0.8em;">/</span><a href="통영대전고속도로.html">통영대전선</a> | 
                                <img src="이미지/대한민국_고속국도.webp" class="hw-icon"> <a href="제2중부고속도로.html">제2중부선</a> | 
                                <img src="이미지/대한민국_고속국도.webp" class="hw-icon"> <a href="중부내륙고속도로.html">중부내륙선</a> | 
                                <img src="이미지/대한민국_고속국도.webp" class="hw-icon"> <a href="중앙고속도로.html">중앙선</a> | 
                                <img src="이미지/대한민국_고속국도.webp" class="hw-icon"> <a href="동해고속도로.html">동해선</a>
                            </td>
                        </tr>
                        <tr>
                            <th>동서</th>
                            <td>
                                <img src="이미지/대한민국_고속국도.webp" class="hw-icon"> <a href="남해고속도로.html">남해선</a> | 
                                <img src="이미지/대한민국_고속국도.webp" class="hw-icon"> <a href="천주전주고속도로.html">천주전주선</a> | 
                                <img src="이미지/대한민국_고속국도.webp" class="hw-icon"> <a href="서해춘천고속도로.html">서해춘천선</a> | 
                                <img src="이미지/대한민국_고속국도.webp" class="hw-icon"> <a href="약산포항고속도로.html">약산포항선</a> | 
                                <img src="이미지/대한민국_고속국도.webp" class="hw-icon"> <a href="광주대구고속도로.html">광주대구선</a><span style="color:#888; font-size:0.8em;">/</span><a href="무안광주고속도로.html">무안광주선</a> | 
                                <img src="이미지/대한민국_고속국도.webp" class="hw-icon"> <a href="함양울산고속도로.html">함양울산선</a> | 
                                <img src="이미지/대한민국_고속국도.webp" class="hw-icon"> <a href="울산고속도로.html">울산선</a> | 
                                <img src="이미지/대한민국_고속국도.webp" class="hw-icon"> <a href="새만금포항고속도로.html">새만금포항선</a> | 
                                <img src="이미지/대한민국_고속국도.webp" class="hw-icon"> <a href="서산영덕고속도로.html">서산영덕선</a> | 
                                <img src="이미지/대한민국_고속국도.webp" class="hw-icon"> <a href="당진청주고속도로.html">당진청주선</a> | 
                                <img src="이미지/대한민국_고속국도.webp" class="hw-icon"> <a href="평택제천고속도로.html">평택제천선</a> | 
                                <img src="이미지/대한민국_고속국도.webp" class="hw-icon"> <a href="영동고속도로.html">영동선</a> | 
                                <img src="이미지/대한민국_고속국도.webp" class="hw-icon"> <a href="광주원주고속도로.html">광주원주선</a> | 
                                <img src="이미지/대한민국_고속국도.webp" class="hw-icon"> <a href="서울양양고속도로.html">서울양양선</a> | 
                                <img src="이미지/대한민국_고속국도.webp" class="hw-icon"> <a href="제2경인고속도로.html">제2경인선</a> | 
                                <img src="이미지/대한민국_고속국도.webp" class="hw-icon"> <a href="경인고속도로.html">경인선</a> | 
                                <img src="이미지/대한민국_고속국도.webp" class="hw-icon"> <a href="인천국제공항고속도로.html">인천국제공항선</a> | 
                                <img src="이미지/대한민국_고속국도.webp" class="hw-icon"> <del style="color:#aaa;"><a href="계양강화고속도로.html" style="color:inherit; font-weight:normal;">계양강화선</a></del>
                            </td>
                        </tr>
                        <tr>
                            <th>순환</th>
                            <td>
                                <img src="이미지/대한민국_고속국도.webp" class="hw-icon"> <a href="수도권제1순환고속도로.html">수도권제1순환선</a> | 
                                <img src="이미지/대한민국_고속국도.webp" class="hw-icon"> <a href="대전남부순환고속도로.html">대전남부순환선</a> | 
                                <img src="이미지/대한민국_고속국도.webp" class="hw-icon"> <a href="수도권제2순환고속도로.html">수도권제2순환선</a> | 
                                <img src="이미지/대한민국_고속국도.webp" class="hw-icon"> <a href="광주외곽순환고속도로.html">광주외곽순환선</a> | 
                                <img src="이미지/대한민국_고속국도.webp" class="hw-icon"> <a href="부산외곽순환고속도로.html">부산외곽순환선</a> | 
                                <img src="이미지/대한민국_고속국도.webp" class="hw-icon"> <a href="대구외곽순환고속도로.html">대구외곽순환선</a> | 
                                <img src="이미지/대한민국_고속국도.webp" class="hw-icon"> <a href="효빈외곽순환고속도로.html">효빈외곽순환선</a>
                            </td>
                        </tr>
                        <tr>
                            <th>지선</th>
                            <td>
                                <img src="이미지/대한민국_고속국도.webp" class="hw-icon"> <a href="남해고속도로제1지선.html">남해제1지선</a> | 
                                <img src="이미지/대한민국_고속국도.webp" class="hw-icon"> <a href="남해고속도로제2지선.html">남해제2지선</a> | 
                                <img src="이미지/대한민국_고속국도.webp" class="hw-icon"> <a href="남해고속도로제3지선.html">남해제3지선</a> | 
                                <img src="이미지/대한민국_고속국도.webp" class="hw-icon"> <del style="color:#aaa;"><a href="함양울산고속도로지선.html" style="color:inherit; font-weight:normal;">함양울산지선</a></del> | 
                                <img src="이미지/대한민국_고속국도.webp" class="hw-icon"> <a href="서천공주고속도로.html">서천공주선</a> | 
                                <img src="이미지/대한민국_고속국도.webp" class="hw-icon"> <a href="평택시흥고속도로.html">평택시흥선</a> | 
                                <img src="이미지/대한민국_고속국도.webp" class="hw-icon"> <a href="용인서울고속도로.html">용인서울선</a><span style="color:#888; font-size:0.8em;">/</span><a href="오산화성고속도로.html">오산화성선</a> | 
                                <img src="이미지/대한민국_고속국도.webp" class="hw-icon"> <a href="익산평택고속도로지선.html">익산평택지선</a> | 
                                <img src="이미지/대한민국_고속국도.webp" class="hw-icon"> <del style="color:#aaa;"><a href="새만금포항고속도로.html#s-3.2.3" style="color:inherit; font-weight:normal;">새만금포항지선</a></del> | 
                                <img src="이미지/대한민국_고속국도.webp" class="hw-icon"> <a href="새만금포항고속도로지선.html">새만금포항지선<span style="font-size:0.8em; font-weight:normal;">(익산~완주)</span></a> | 
                                <img src="이미지/대한민국_고속국도.webp" class="hw-icon"> <a href="호남고속도로지선.html">호남지선</a> | 
                                <img src="이미지/대한민국_고속국도.webp" class="hw-icon"> <a href="고창담양고속도로.html">고창담양선</a> | 
                                <img src="이미지/대한민국_고속국도.webp" class="hw-icon"> <del style="color:#aaa;"><a href="강진광주고속도로.html" style="color:inherit; font-weight:normal;">강진광주선</a></del> | 
                                <img src="이미지/대한민국_고속국도.webp" class="hw-icon"> <del style="color:#aaa;"><a href="세종포천고속도로_오송지선.html" style="color:inherit; font-weight:normal;">세종포천오송지선</a></del> | 
                                <img src="이미지/대한민국_고속국도.webp" class="hw-icon"> <a href="상주영천고속도로.html">상주영천선</a> | 
                                <img src="이미지/대한민국_고속국도.webp" class="hw-icon"> <a href="서산영덕고속도로.html#서산영덕고속도로지선">서산영덕지선</a> | 
                                <img src="이미지/대한민국_고속국도.webp" class="hw-icon"> <a href="중부내륙고속도로지선.html">중부내륙지선</a> | 
                                <img src="이미지/대한민국_고속국도.webp" class="hw-icon"> <a href="중앙고속도로지선.html">중앙지선</a> | 
                                <img src="이미지/대한민국_고속국도.webp" class="hw-icon"> <a href="효빈서해고속도로.html">효빈서해선</a>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" style="background-color: #f9f9f9; text-align: center; font-size: 0.8rem; color: #666;">
                                <sup>y</sup>: 예비타당성조사 또는 타당성재조사 통과 / <sup>m</sup>: 민자적격성조사 통과 / <i>기울임</i>: 기존노선 연장
                            </td>
                        </tr>
                        <tr>
                            <th style="background-color: #e9e9e9;">검토단계</th>
                            <td>
                                <a href="강화간성고속도로.html">강화간성고속도로</a> | 
                                <a href="광주영암고속도로.html">광주영암고속도로</a> | 
                                <a href="당진광명고속도로.html">당진광명고속도로</a> | 
                                <a href="보령보은고속도로.html">보령보은고속도로</a> | 
                                <a href="보령울진고속도로.html">보령울진고속도로</a> | 
                                <a href="서창장수고속도로.html">서창장수고속도로</a> | 
                                <a href="영천양구고속도로.html">영천양구고속도로</a> | 
                                <a href="태안안성고속도로.html">태안안성고속도로</a> | 
                                <a href="팔공산_관통_고속도로.html">팔공산 관통 고속도로</a>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" style="background-color: #f5f5f5; font-size: 0.85rem; text-align: center;">
                                <a href="고속도로.html">고속국도</a> | <a href="국도.html">국도</a> | <a href="국가지원지방도.html">국가지원지방도</a> | <a href="지방도.html">지방도</a> | <a href="서울특별시도.html">서울특별시도</a> | <a href="광역시도.html">광역시도</a> | <a href="시도.html">시도</a> | <a href="군도.html">군도</a>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" style="text-align: center; font-size: 0.8rem; color: #666; padding-top: 10px;">
                                <a href="대한민국의_고속도로.html">지정해제 구간</a><br>
                                기존 노선 연장은 <a href="고속도로.html">공사중인 구간 목록</a> 및 각 고속도로 문서 참조
                            </td>
                        </tr>
                    </table>
                </details>
            </div>
        </div>
        `;
    }
});