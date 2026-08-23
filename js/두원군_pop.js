/**
 * 덕빈남도 두원군 인구 추이 및 읍면동별 통계 테이블 생성 함수
 */
function render_두원군_PopTable(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const html = `
    <div class="두원군-pop-wrapper" style="font-family: 'Noto Sans KR', sans-serif; color: #333; max-width: 900px; margin: 0 auto;">
        
        <!-- 원본 HTML 내용 그대로 유지 (방천군, 합산 차트 등 손실 없음) -->
        <h3 class="text-xl font-bold mt-6 mb-2 border-b-2 border-gray-200" id="s-3-4" style="border-color: #0f766e;">3.4. 현대 (두원읍 승격과 인구 소멸의 늪)</h3>
<p class="mb-4 leading-relaxed">
    광복 이후 1960년 인구 7만 5천 명을 넘기며 정점을 찍었던 두원군은, <strong>1979년</strong> '군청 소재지 특례' 규정에 힘입어 군의 본진인 두원면이 <strong><a class="wiki-link text-blue-600 hover:underline" href="두원읍.html">두원읍(邑)</a>으로 간신히 승격</strong>하며 행정 중심지로서의 뼈대를 다졌다.
</p>
<p class="mb-4 leading-relaxed">
    하지만 농어촌의 한계를 극복하지 못하고 1980년대부터 인구가 눈사태처럼 빠져나가기 시작했다. 2026년 현재 인구는 2만 8천 명대까지 무너졌으며, 두원읍(8천 명대)과 구 승린현의 본진이었던 <a class="wiki-link text-blue-600 hover:underline" href="승린면.html">승린면</a>(5천 명대)을 제외한 나머지 6개 면은 모조리 인구 2천 명대의 껍데기만 남은 초소형 면으로 쪼그라들었다. 
</p>
<p class="mb-4 leading-relaxed">
<del>사실상 인구 2천 명대 면들은 언제 강제 통합당해도 이상하지 않은 수준이지만, 1914년 통폐합 때도 살아남았다는 지독한(?) 고을 부심 때문에 면사무소 간판을 필사적으로 사수하고 있다.</del>
</p>
<div class="overflow-x-auto mt-8 mb-8">
<table class="w-full border-collapse border border-gray-300 text-sm text-center">
<thead>
<tr>
<th class="p-3 text-white font-bold text-lg" colspan="3" style="background-color: #0f766e;">
                    두원군 행정구역 변천사
                </th>
</tr>
<tr class="bg-gray-100 text-gray-700">
<th class="p-2 border border-gray-300 w-1/4">시대 / 연도</th>
<th class="p-2 border border-gray-300 w-1/3">두원 권역 (서부/군청 본진)</th>
<th class="p-2 border border-gray-300">구(舊) 승린 권역 (동부 평야)</th>
</tr>
</thead>
<tbody class="text-gray-700">
<tr>
<th class="p-2 border border-gray-300 bg-teal-50 text-teal-900 font-bold">고려 시대</th>
<td class="p-2 border border-gray-300 font-bold">두원현 (杜原縣)</td>
<td class="p-2 border border-gray-300 font-bold text-[#0f766e]">승린현 (勝隣縣) 병립</td>
</tr>
<tr>
<th class="p-2 border border-gray-300 bg-teal-50 text-teal-900 font-bold">조선 시대</th>
<td class="p-2 border border-gray-300 font-bold text-[#0f766e]" colspan="2">
                    두원군 (杜原郡) 일원화<br/><span class="text-xs font-normal text-gray-600">※ 승린현이 두원군으로 통폐합되어 일개 면으로 강등</span>
</td>
</tr>
<tr>
<th class="p-2 border border-gray-300 bg-teal-50 text-teal-900 font-bold">1895년 (26부제)</th>
<td class="p-2 border border-gray-300 font-bold" colspan="2">덕주부 3등군 두원군</td>
</tr>
<tr>
<th class="p-2 border border-gray-300 bg-teal-50 text-teal-900 font-bold">1914년 (일제강점기)</th>
<td class="p-2 border border-gray-300 font-bold bg-teal-100 text-[#0f766e] text-base" colspan="2">
                    두원군 (杜原郡)<br/><span class="text-xs font-normal text-gray-600">※ 부군면 통폐합 속에서 원래 영토 100% 완벽 보존</span>
</td>
</tr>
<tr>
<th class="p-2 border border-gray-300 bg-teal-50 text-teal-900 font-bold">1979년 (읍 승격)</th>
<td class="p-2 border border-gray-300 font-bold text-[#0f766e]">
<a class="wiki-link text-blue-600 hover:underline" href="두원읍.html">두원읍</a> 승격<br/><span class="text-xs font-normal text-gray-500">※ 군청 소재지 특례</span>
</td>
<td class="p-2 border border-gray-300">승린면 등 면 단위 유지</td>
</tr>
<tr>
<th class="p-2 border border-gray-300 bg-teal-50 text-teal-900 font-bold">현재 (2026년)</th>
<td class="p-2 border border-gray-300 font-bold" colspan="2">
<a class="wiki-link text-blue-600 hover:underline" href="덕빈남도.html">덕빈남도</a> 두원군 (1읍 7면)<br/><span class="text-xs font-normal text-gray-600">※ 인구 2.8만 명의 소멸 고위험 지역으로 전락</span>
</td>
</tr>
</tbody>
</table>
</div>
<div class="overflow-x-auto mt-6 mb-8">
<table class="w-full border-collapse border border-gray-300 text-sm">
<thead>
<tr>
<th class="p-3 text-white font-bold text-lg text-center" colspan="2" style="background-color: #0f766e;">
                    두원군 관할 구역 상세 (총 1읍 7면, 70개 법정리 원형 보존)
                </th>
</tr>
<tr class="bg-gray-100 text-gray-700 text-center">
<th class="p-2 border border-gray-300 w-1/4">구분</th>
<th class="p-2 border border-gray-300">상세 관할 구역 (법정리 단위 전체)</th>
</tr>
</thead>
<tbody class="text-gray-700 text-left">
<tr>
<th class="p-2 border border-gray-300 bg-teal-50 text-teal-900 text-center font-bold">
<a class="wiki-link text-blue-600 hover:underline" href="두원읍.html">두원읍</a> (본진)
                </th>
<td class="p-2 border border-gray-300 font-bold text-[#0f766e]">읍내리, 중심리, 시장리, 역전리, 구읍리, 문화리, 해안리, 신흥리, 설채리</td>
</tr>
<tr>
<th class="p-2 border border-gray-300 bg-gray-50 text-center font-bold">
<a class="wiki-link text-blue-600 hover:underline" href="남면.html">남면</a>
</th>
<td class="p-2 border border-gray-300">수내과리, 포구리, 항동리, 어촌리, 송죽리, 덕진리</td>
</tr>
<tr>
<th class="p-2 border border-gray-300 bg-gray-50 text-center font-bold">
<a class="wiki-link text-blue-600 hover:underline" href="서운면.html">서운면</a>
</th>
<td class="p-2 border border-gray-300">서운리, 산막리, 계곡리, 휴양리, 명암리, 운서리, 동화리, 중평리, 장촌리, 산북리, 성현리, 평촌리, 청암리</td>
</tr>
<tr>
<th class="p-2 border border-gray-300 bg-gray-50 text-center font-bold">
<a class="wiki-link text-blue-600 hover:underline" href="선문면.html">선문면</a>
</th>
<td class="p-2 border border-gray-300">선문리, 산정리, 운봉리, 미산리, 월성리, 천곡리, 봉황리, 매화리, 학당리, 대곡리, 소곡리, 용평리, 이목리, 장림리, 구석리</td>
</tr>
<tr>
<th class="p-2 border border-gray-300 bg-gray-50 text-center font-bold">
<a class="wiki-link text-blue-600 hover:underline" href="대선면.html">대선면</a>
</th>
<td class="p-2 border border-gray-300">대선리, 공단리, 공업리, 물류리, 창고리, 가곡리, 상선리</td>
</tr>
<tr>
<th class="p-2 border border-gray-300 bg-gray-50 text-center font-bold">
<a class="wiki-link text-blue-600 hover:underline" href="총선면.html">총선면</a>
</th>
<td class="p-2 border border-gray-300">총선리, 남선리, 북선리, 동선리, 서선리</td>
</tr>
<tr>
<th class="p-2 border border-gray-300 bg-teal-50 text-teal-900 text-center font-bold border-t-2 border-t-teal-400">
<a class="wiki-link text-blue-600 hover:underline" href="승린면.html">승린면</a> (구 승린현)
                </th>
<td class="p-2 border border-gray-300 border-t-2 border-t-teal-400 font-bold text-[#0f766e]">승린리, 농공리, 평야리, 대동리, 수창리, 송정리, 구포리, 남창리, 북창리, 신포리, 강변리</td>
</tr>
<tr>
<th class="p-2 border border-gray-300 bg-gray-50 text-center font-bold">
<a class="wiki-link text-blue-600 hover:underline" href="신면.html">신면</a>
</th>
<td class="p-2 border border-gray-300">신동리, 신서리, 신남리, 신북리</td>
</tr>
</tbody>
</table>
</div>
<div class="overflow-x-auto mt-6 mb-8">
<table class="w-full border-collapse border border-gray-300 text-sm">
<thead>
<tr>
<th class="p-3 text-white font-bold text-lg text-center" colspan="2" style="background-color: #0f766e;">
                    두원군 역사 연혁 상세
                </th>
</tr>
<tr class="bg-gray-100 text-gray-700 text-center">
<th class="p-2 border border-gray-300 w-24">연도</th>
<th class="p-2 border border-gray-300">주요 내용</th>
</tr>
</thead>
<tbody class="text-gray-700">
<tr><td class="p-2 border border-gray-300 font-bold bg-teal-50 text-teal-900 text-center">고려 시대</td><td class="p-2 border border-gray-300"><strong>두원현(杜原縣)</strong>과 <strong>승린현(勝隣縣)</strong>으로 병립하였으며, 고려청자 생산의 중심지로 대번영했다.</td></tr>
<tr><td class="p-2 border border-gray-300 font-bold bg-teal-50 text-teal-900 text-center">조선 시대</td><td class="p-2 border border-gray-300">지방 행정 개편에 따라 승린현이 <strong>두원군(杜原郡)으로 통폐합 일원화</strong>되었다.</td></tr>
<tr><td class="p-2 border border-gray-300 font-bold bg-teal-50 text-teal-900 text-center">1895년</td><td class="p-2 border border-gray-300"><strong>26부제</strong> 시행으로 <strong>덕주부(德州府) 관할의 3등군 두원군</strong>으로 편성되었다.</td></tr>
<tr><td class="p-2 border border-gray-300 font-bold bg-teal-50 text-teal-900 text-center">1914년</td><td class="p-2 border border-gray-300 font-bold text-[#0f766e]">부군면 통폐합의 칼바람 속에서 <strong>단 한 뼘의 영토 변화 없이 원래 영역을 100% 완벽 보존</strong>했다.</td></tr>
<tr><td class="p-2 border border-gray-300 font-bold bg-gray-50 text-center">1960년</td><td class="p-2 border border-gray-300">인구 <strong>75,293명</strong>을 기록하며 현대 역사상 최대 인구 정점을 찍었다.</td></tr>
<tr><td class="p-2 border border-gray-300 font-bold bg-gray-50 text-center text-[#0f766e]">1979년</td><td class="p-2 border border-gray-300 font-bold">군청 소재지 승격 특례에 따라 중심지 <strong>두원면이 <a class="wiki-link text-blue-600 hover:underline" href="두원읍.html">두원읍(邑)</a>으로 승격</strong>되었다.</td></tr>
<tr><td class="p-2 border border-gray-300 font-bold bg-gray-50 text-center text-red-600">2000년대 이후</td><td class="p-2 border border-gray-300">청장년층의 지속적인 이탈로 면 단위 통합 논의가 꾸준히 제기되는 심각한 쇠락을 겪고 있다.</td></tr>
<tr><td class="p-2 border border-gray-300 font-bold bg-teal-50 text-teal-900 text-center">현재</td><td class="p-2 border border-gray-300">인구 2.8만 명의 소규모 농어촌 지자체로 명맥을 유지하며, 고려청자 관광과 수산업 부흥에 사활을 걸고 있다.</td></tr>
</tbody>
</table>
</div>

        
        <!-- 신규 2026.4 읍면동 막대그래프 -->
        <div style="margin: 30px auto; border: 2px solid #e3ba3a; border-radius: 4px; background-color: #fff; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <div style="background-color: #e3ba3a; color: white; padding: 12px; text-align: center; font-weight: bold; font-size: 1.1em;">
                덕빈남도 두원군 읍면동별 인구 통계
            </div>
            <div style="display: flex; flex-direction: column;">
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 82.9%; background-color: #e3ba3a;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">두원읍 8,294명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 56.1%; background-color: #e3ba3a;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">승린면 5,612명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 25.0%; background-color: #e3ba3a;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">서운면 2,504명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 24.0%; background-color: #e3ba3a;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">신면 2,403명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 23.8%; background-color: #e3ba3a;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">남면 2,383명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 23.6%; background-color: #e3ba3a;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">선문면 2,361명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 23.1%; background-color: #e3ba3a;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">대선면 2,305명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 22.4%; background-color: #e3ba3a;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">총선면 2,239명</div>
                </div>
            </div>
            <div style="padding: 10px; font-size: 0.75em; color: #666; background-color: #f9f9f9; text-align: center; border-top: 1px solid #ddd;">
                2026년 4월 기준, 그래프 최대 값은 10,000명
            </div>
        </div>
        <!-- 신규 2026.4 읍면동 표 -->
        <div style="margin: 30px auto; overflow-x: auto;">
            <table style="width: 100%; border-collapse: collapse; text-align: center; font-size: 0.85em; border: 1px solid #ccc;">
                <thead>
                    <tr>
                        <th style="background-color: #e3ba3a; color: white; padding: 10px; border: 1px solid #ccc;">광역시도</th>
                        <th style="background-color: #e3ba3a; color: white; padding: 10px; border: 1px solid #ccc;">시군구</th>
                        <th style="background-color: #e3ba3a; color: white; padding: 10px; border: 1px solid #ccc;">읍면동</th>
                        <th style="background-color: #e3ba3a; color: white; padding: 10px; border: 1px solid #ccc;">합계 : 2026.4</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="background-color: #f1f3f5; font-weight: bold;">
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">두원군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">-</td>
                        <td style="padding: 8px; border: 1px solid #ccc; color: #d6001c;">28,101</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">두원군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">두원읍</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">8,294</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">두원군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">승린면</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">5,612</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">두원군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">서운면</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">2,504</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">두원군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">신면</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">2,403</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">두원군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">남면</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">2,383</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">두원군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">선문면</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">2,361</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">두원군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">대선면</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">2,305</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">두원군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">총선면</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">2,239</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- 연도별 변천사 종합 표 (통합) -->
        <div style="margin: 30px auto; overflow-x: auto;">
            <div style="font-weight: bold; margin-bottom: 10px; font-size: 1.1em; text-align: center;">연도별 행정구역 인구 변천사 종합표</div>
            <table style="width: max-content !important; min-width: 100% !important; table-layout: auto !important; border-collapse: collapse; text-align: right; font-size: 0.75em; white-space: nowrap; border: 1px solid #ccc;">
                <thead>
                    <tr style="background-color: #e3ba3a; color: white; text-align: center;">
                        <th style="padding: 8px; border: 1px solid #ccc;">구분</th><th style="padding: 8px; border: 1px solid #ccc;">1966년</th><th style="padding: 8px; border: 1px solid #ccc;">1970년</th><th style="padding: 8px; border: 1px solid #ccc;">1975년</th><th style="padding: 8px; border: 1px solid #ccc;">1980년</th><th style="padding: 8px; border: 1px solid #ccc;">1985년</th><th style="padding: 8px; border: 1px solid #ccc;">1990년</th><th style="padding: 8px; border: 1px solid #ccc;">1995년</th><th style="padding: 8px; border: 1px solid #ccc;">2000년</th><th style="padding: 8px; border: 1px solid #ccc;">2005년</th><th style="padding: 8px; border: 1px solid #ccc;">2010년</th><th style="padding: 8px; border: 1px solid #ccc;">2015년</th><th style="padding: 8px; border: 1px solid #ccc;">2020년</th><th style="padding: 8px; border: 1px solid #ccc;">2025년</th><th style="padding: 8px; border: 1px solid #ccc;">2026.4</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="background-color: #f1f3f5; font-weight: bold;"><td style="padding: 6px; border: 1px solid #ccc; text-align: center; color: #555;">덕빈남도 (참고)</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2107862</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2136197</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2161395</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2136141</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2119803</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2115803</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2083724</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2061567</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2044060</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2034003</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2041389</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2029083</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2015432</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2017439</td></tr>
                    <tr style="background-color: #fdfaf5; font-weight: bold;"><td style="padding: 6px; border: 1px solid #ccc; text-align: center;">두원군</td><td style="padding: 6px; border: 1px solid #ccc;">74704</td><td style="padding: 6px; border: 1px solid #ccc;">69566</td><td style="padding: 6px; border: 1px solid #ccc;">65426</td><td style="padding: 6px; border: 1px solid #ccc;">68458</td><td style="padding: 6px; border: 1px solid #ccc;">66915</td><td style="padding: 6px; border: 1px solid #ccc;">60019</td><td style="padding: 6px; border: 1px solid #ccc;">55321</td><td style="padding: 6px; border: 1px solid #ccc;">48766</td><td style="padding: 6px; border: 1px solid #ccc;">43003</td><td style="padding: 6px; border: 1px solid #ccc;">43673</td><td style="padding: 6px; border: 1px solid #ccc;">38952</td><td style="padding: 6px; border: 1px solid #ccc;">30777</td><td style="padding: 6px; border: 1px solid #ccc;">28131</td><td style="padding: 6px; border: 1px solid #ccc; color:#d6001c;">28,101</td></tr>
                </tbody>
            </table>
        </div>
    </div>
    `;
    container.innerHTML = html;
}
