/**
 * 덕빈남도 인곡군 인구 추이 및 읍면동별 통계 테이블 생성 함수
 */
function render_인곡군_PopTable(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const html = `
    <div class="인곡군-pop-wrapper" style="font-family: 'Noto Sans KR', sans-serif; color: #333; max-width: 900px; margin: 0 auto;">
        
        <!-- 원본 HTML 내용 그대로 유지 (방천군, 합산 차트 등 손실 없음) -->
        <h3 class="text-xl font-bold mt-6 mb-2 border-b-2 border-gray-200" id="s-3-4" style="border-color: #047857;">3.4. 현대 (인곡읍 승격과 인구 감소)</h3>
<p class="mb-4 leading-relaxed">
    광복 이후 1960년대 초반, 간척 사업을 통해 평야(대건면 일대)가 크게 확장되고 어업이 호황을 누리며 인구가 폭발적으로 증가했다. 1966년에는 무려 <strong>12만 632명</strong>이라는 지역 역사상 최대 전성기를 구가했다.
</p>
<p class="mb-4 leading-relaxed">
    이러한 군세 확장에 힘입어 <strong>1963년</strong>, 군의 중심지인 <strong>인곡면이 <a class="wiki-link text-blue-600 hover:underline" href="인곡읍.html">인곡읍(邑)</a>으로 당당하게 승격</strong>하며 행정 및 상업의 굳건한 코어로 자리 잡았다. 
</p>
<p class="mb-4 leading-relaxed">
    하지만 1970년대 이후 철도가 빗겨가고 산업화의 흐름에서 소외되면서, 일자리를 찾아 청년층이 대도시로 썰물처럼 빠져나갔다. 현재(2026년 기준) 인구는 3만 6천 명대까지 무너졌으며, 전체 인구의 30%가 인곡읍에 몰려 있고 최북단 <a class="wiki-link text-blue-600 hover:underline" href="고신면.html">고신면</a>은 인구 1천 명 붕괴를 걱정하는 등 지방 소멸 위기의 최전선에서 고군분투하고 있다.
</p>
<div class="overflow-x-auto mt-8 mb-8">
<table class="w-full border-collapse border border-gray-300 text-sm text-center">
<thead>
<tr>
<th class="p-3 text-white font-bold text-lg" colspan="3" style="background-color: #047857;">
                    인곡군 행정구역 변천사 (100% 영토 보존의 위엄)
                </th>
</tr>
<tr class="bg-gray-100 text-gray-700">
<th class="p-2 border border-gray-300 w-1/4">시대 / 연도</th>
<th class="p-2 border border-gray-300 w-1/3">행정구역 명칭</th>
<th class="p-2 border border-gray-300">특이사항 및 비고</th>
</tr>
</thead>
<tbody class="text-gray-700">
<tr>
<th class="p-2 border border-gray-300 bg-emerald-50 text-emerald-900 font-bold">고려 시대</th>
<td class="p-2 border border-gray-300 font-bold">인곡현 (仁谷縣)</td>
<td class="p-2 border border-gray-300">해안 방어 및 물류 요충지</td>
</tr>
<tr>
<th class="p-2 border border-gray-300 bg-emerald-50 text-emerald-900 font-bold">조선 시대</th>
<td class="p-2 border border-gray-300 font-bold">인곡군 (仁谷郡)</td>
<td class="p-2 border border-gray-300">수군 진영 설치 등 독립 고을 유지</td>
</tr>
<tr>
<th class="p-2 border border-gray-300 bg-emerald-50 text-emerald-900 font-bold">1895년 (26부제)</th>
<td class="p-2 border border-gray-300 font-bold">덕주부 4등군 인곡군</td>
<td class="p-2 border border-gray-300">갑오개혁에 따른 행정구역 개편</td>
</tr>
<tr>
<th class="p-2 border border-gray-300 bg-emerald-50 text-emerald-900 font-bold">1896년 (15도제)</th>
<td class="p-2 border border-gray-300 font-bold">덕빈남도 인곡군</td>
<td class="p-2 border border-gray-300">현행 도(道) 단위 체계 편입</td>
</tr>
<tr>
<th class="p-2 border border-gray-300 bg-emerald-50 text-emerald-900 font-bold">1914년 (통폐합)</th>
<td class="p-2 border border-gray-300 font-bold bg-emerald-100 text-[#047857] text-base">인곡군 (仁谷郡)</td>
<td class="p-2 border border-gray-300 font-bold">★ 타 고을 병합/분할 없이 1914년 이전 영역 100% 완벽 보존</td>
</tr>
<tr>
<th class="p-2 border border-gray-300 bg-emerald-50 text-emerald-900 font-bold">1963년 (읍 승격)</th>
<td class="p-2 border border-gray-300 font-bold text-[#047857]"><a class="wiki-link text-blue-600 hover:underline" href="인곡읍.html">인곡읍</a> 승격</td>
<td class="p-2 border border-gray-300">군청 소재지인 인곡면이 읍으로 승격</td>
</tr>
<tr>
<th class="p-2 border border-gray-300 bg-emerald-50 text-emerald-900 font-bold">현재 (2026년)</th>
<td class="p-2 border border-gray-300 font-bold">덕빈남도 인곡군 (1읍 6면)</td>
<td class="p-2 border border-gray-300">총 64개 법정리 원형 그대로 유지 중</td>
</tr>
</tbody>
</table>
</div>
<div class="overflow-x-auto mt-6 mb-8">
<table class="w-full border-collapse border border-gray-300 text-sm">
<thead>
<tr>
<th class="p-3 text-white font-bold text-lg text-center" colspan="2" style="background-color: #047857;">
                    인곡군 관할 구역 상세 (1914년 원형 100% 보존, 1읍 6면)
                </th>
</tr>
<tr class="bg-gray-100 text-gray-700 text-center">
<th class="p-2 border border-gray-300 w-1/4">구분</th>
<th class="p-2 border border-gray-300">상세 관할 구역 (법정리 단위 전체)</th>
</tr>
</thead>
<tbody class="text-gray-700 text-left">
<tr>
<th class="p-2 border border-gray-300 bg-emerald-50 text-emerald-900 text-center font-bold"><a class="wiki-link text-blue-600 hover:underline" href="인곡읍.html">인곡읍 (본진)</a></th>
<td class="p-2 border border-gray-300 font-bold text-[#047857]">중앙리, 역전리, 신흥리, 구룡리, 동산리, 서부리, 남산리, 북평리, 화계리, 평천리, 대동리, 소야리</td>
</tr>
<tr>
<th class="p-2 border border-gray-300 bg-gray-50 text-center font-bold"><a class="wiki-link text-blue-600 hover:underline" href="속류면.html">속류면</a></th>
<td class="p-2 border border-gray-300">속류리, 미아리, 말우리, 한길리, 고소리, 종람리, 소유리, 하애리, 미산리, 대산리, 청평리, 용담리, 서강리, 영산리, 가천리</td>
</tr>
<tr>
<th class="p-2 border border-gray-300 bg-gray-50 text-center font-bold"><a class="wiki-link text-blue-600 hover:underline" href="대건면.html">대건면</a></th>
<td class="p-2 border border-gray-300">건평리, 대흥리, 공단리, 첨단리, 산곡리, 이곡리, 장재리</td>
</tr>
<tr>
<th class="p-2 border border-gray-300 bg-gray-50 text-center font-bold"><a class="wiki-link text-blue-600 hover:underline" href="거남면.html">거남면</a></th>
<td class="p-2 border border-gray-300">거남리, 백마리, 석산리, 웅포리, 해변리, 용호리, 신창리, 장곡리, 동촌리</td>
</tr>
<tr>
<th class="p-2 border border-gray-300 bg-gray-50 text-center font-bold"><a class="wiki-link text-blue-600 hover:underline" href="고신면.html">고신면</a></th>
<td class="p-2 border border-gray-300">고천리, 신천리, 구암리, 신평리</td>
</tr>
<tr>
<th class="p-2 border border-gray-300 bg-gray-50 text-center font-bold"><a class="wiki-link text-blue-600 hover:underline" href="시오면.html">시오면</a></th>
<td class="p-2 border border-gray-300">시내리, 오성리, 호수리, 봉화리, 소정리, 칠곡리, 매화리, 산수리, 남촌리, 북촌리, 중평리</td>
</tr>
<tr>
<th class="p-2 border border-gray-300 bg-gray-50 text-center font-bold"><a class="wiki-link text-blue-600 hover:underline" href="낭염면.html">낭염면</a></th>
<td class="p-2 border border-gray-300">낭산리, 염전리, 귀두리, 피방리, 간자리, 삼선리</td>
</tr>
</tbody>
</table>
</div>
<div class="overflow-x-auto mt-6 mb-8">
<table class="w-full border-collapse border border-gray-300 text-sm">
<thead>
<tr>
<th class="p-3 text-white font-bold text-lg text-center" colspan="2" style="background-color: #047857;">
                    인곡군 역사 연혁 상세
                </th>
</tr>
<tr class="bg-gray-100 text-gray-700 text-center">
<th class="p-2 border border-gray-300 w-24">연도</th>
<th class="p-2 border border-gray-300">주요 내용</th>
</tr>
</thead>
<tbody class="text-gray-700">
<tr><td class="p-2 border border-gray-300 font-bold bg-emerald-50 text-emerald-900 text-center">고려 시대</td><td class="p-2 border border-gray-300">어질고 온화한 골짜기라는 의미로 <strong>인곡현(仁谷縣)</strong>이라는 이름이 정착되었다.</td></tr>
<tr><td class="p-2 border border-gray-300 font-bold bg-emerald-50 text-emerald-900 text-center">조선 시대</td><td class="p-2 border border-gray-300">서해안 방어를 위한 수군 진영이 설치되며 <strong>인곡군(仁谷郡)</strong>으로 기능했다.</td></tr>
<tr><td class="p-2 border border-gray-300 font-bold bg-emerald-50 text-emerald-900 text-center">1895년</td><td class="p-2 border border-gray-300"><strong>26부제</strong> 시행으로 <strong>덕주부(德州府) 관할의 4등군 인곡군</strong>으로 편성되었다.</td></tr>
<tr><td class="p-2 border border-gray-300 font-bold bg-emerald-50 text-emerald-900 text-center">1914년</td><td class="p-2 border border-gray-300 font-bold text-[#047857]">부군면 통폐합의 칼바람 속에서 <strong>단 한 뼘의 영토 변화 없이 원래 영역을 100% 완벽 보존</strong>했다.</td></tr>
<tr><td class="p-2 border border-gray-300 font-bold bg-gray-50 text-center text-[#047857]">1963년</td><td class="p-2 border border-gray-300 font-bold">인구 증가와 상업 팽창에 힘입어 중심지인 <strong>인곡면이 <a class="wiki-link text-blue-600 hover:underline" href="인곡읍.html">인곡읍(邑)</a>으로 승격</strong>되었다.</td></tr>
<tr><td class="p-2 border border-gray-300 font-bold bg-gray-50 text-center">1966년</td><td class="p-2 border border-gray-300">인구 <strong>120,632명</strong>을 기록하며 인곡군 역사상 최대 인구 정점을 찍었다.</td></tr>
<tr><td class="p-2 border border-gray-300 font-bold bg-gray-50 text-center text-red-600">1990년대 이후</td><td class="p-2 border border-gray-300"><strong>철도 및 교통 소외</strong>로 인해 청년층이 썰물처럼 빠져나가며 심각한 쇠퇴기에 접어들었다.</td></tr>
<tr><td class="p-2 border border-gray-300 font-bold bg-emerald-50 text-emerald-900 text-center">현재</td><td class="p-2 border border-gray-300">인구 3.6만 명 선을 간신히 방어하며 소멸 위기를 극복하기 위한 농수산물 특화와 관광 사업에 사활을 걸고 있다.</td></tr>
</tbody>
</table>
</div>

        
        <!-- 신규 2026.4 읍면동 막대그래프 -->
        <div style="margin: 30px auto; border: 2px solid #4cd2e2; border-radius: 4px; background-color: #fff; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <div style="background-color: #4cd2e2; color: white; padding: 12px; text-align: center; font-weight: bold; font-size: 1.1em;">
                덕빈남도 인곡군 읍면동별 인구 통계
            </div>
            <div style="display: flex; flex-direction: column;">
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 22.8%; background-color: #4cd2e2;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">인곡읍 11,375명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 11.2%; background-color: #4cd2e2;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">거남면 5,612명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 10.4%; background-color: #4cd2e2;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">속류면 5,214명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 10.3%; background-color: #4cd2e2;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">시오면 5,142명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 9.7%; background-color: #4cd2e2;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">대건면 4,871명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 6.7%; background-color: #4cd2e2;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">낭염면 3,327명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 2.0%; background-color: #4cd2e2;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">고신면 994명</div>
                </div>
            </div>
            <div style="padding: 10px; font-size: 0.75em; color: #666; background-color: #f9f9f9; text-align: center; border-top: 1px solid #ddd;">
                2026년 4월 기준, 그래프 최대 값은 50,000명
            </div>
        </div>
        <!-- 신규 2026.4 읍면동 표 -->
        <div style="margin: 30px auto; overflow-x: auto;">
            <table style="width: 100%; border-collapse: collapse; text-align: center; font-size: 0.85em; border: 1px solid #ccc;">
                <thead>
                    <tr>
                        <th style="background-color: #4cd2e2; color: white; padding: 10px; border: 1px solid #ccc;">광역시도</th>
                        <th style="background-color: #4cd2e2; color: white; padding: 10px; border: 1px solid #ccc;">시군구</th>
                        <th style="background-color: #4cd2e2; color: white; padding: 10px; border: 1px solid #ccc;">읍면동</th>
                        <th style="background-color: #4cd2e2; color: white; padding: 10px; border: 1px solid #ccc;">합계 : 2026.4</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="background-color: #f1f3f5; font-weight: bold;">
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">인곡군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">-</td>
                        <td style="padding: 8px; border: 1px solid #ccc; color: #d6001c;">36,535</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">인곡군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">인곡읍</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">11,375</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">인곡군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">거남면</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">5,612</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">인곡군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">속류면</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">5,214</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">인곡군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">시오면</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">5,142</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">인곡군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">대건면</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">4,871</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">인곡군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">낭염면</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">3,327</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">인곡군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">고신면</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">994</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- 연도별 변천사 종합 표 (통합) -->
        <div style="margin: 30px auto; overflow-x: auto;">
            <div style="font-weight: bold; margin-bottom: 10px; font-size: 1.1em; text-align: center;">연도별 행정구역 인구 변천사 종합표</div>
            <table style="width: max-content !important; min-width: 100% !important; table-layout: auto !important; border-collapse: collapse; text-align: right; font-size: 0.75em; white-space: nowrap; border: 1px solid #ccc;">
                <thead>
                    <tr style="background-color: #4cd2e2; color: white; text-align: center;">
                        <th style="padding: 8px; border: 1px solid #ccc;">구분</th><th style="padding: 8px; border: 1px solid #ccc;">1966년</th><th style="padding: 8px; border: 1px solid #ccc;">1970년</th><th style="padding: 8px; border: 1px solid #ccc;">1975년</th><th style="padding: 8px; border: 1px solid #ccc;">1980년</th><th style="padding: 8px; border: 1px solid #ccc;">1985년</th><th style="padding: 8px; border: 1px solid #ccc;">1990년</th><th style="padding: 8px; border: 1px solid #ccc;">1995년</th><th style="padding: 8px; border: 1px solid #ccc;">2000년</th><th style="padding: 8px; border: 1px solid #ccc;">2005년</th><th style="padding: 8px; border: 1px solid #ccc;">2010년</th><th style="padding: 8px; border: 1px solid #ccc;">2015년</th><th style="padding: 8px; border: 1px solid #ccc;">2020년</th><th style="padding: 8px; border: 1px solid #ccc;">2025년</th><th style="padding: 8px; border: 1px solid #ccc;">2026.4</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="background-color: #f1f3f5; font-weight: bold;"><td style="padding: 6px; border: 1px solid #ccc; text-align: center; color: #555;">덕빈남도 (참고)</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2107862</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2136197</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2161395</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2136141</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2119803</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2115803</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2083724</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2061567</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2044060</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2034003</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2041389</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2029083</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2015432</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2017439</td></tr>
                    <tr style="background-color: #fdfaf5; font-weight: bold;"><td style="padding: 6px; border: 1px solid #ccc; text-align: center;">인곡군</td><td style="padding: 6px; border: 1px solid #ccc;">120632</td><td style="padding: 6px; border: 1px solid #ccc;">111283</td><td style="padding: 6px; border: 1px solid #ccc;">105289</td><td style="padding: 6px; border: 1px solid #ccc;">101283</td><td style="padding: 6px; border: 1px solid #ccc;">96316</td><td style="padding: 6px; border: 1px solid #ccc;">85293</td><td style="padding: 6px; border: 1px solid #ccc;">76695</td><td style="padding: 6px; border: 1px solid #ccc;">61283</td><td style="padding: 6px; border: 1px solid #ccc;">59582</td><td style="padding: 6px; border: 1px solid #ccc;">50221</td><td style="padding: 6px; border: 1px solid #ccc;">44454</td><td style="padding: 6px; border: 1px solid #ccc;">37314</td><td style="padding: 6px; border: 1px solid #ccc;">36442</td><td style="padding: 6px; border: 1px solid #ccc; color:#d6001c;">36,535</td></tr>
                </tbody>
            </table>
        </div>
    </div>
    `;
    container.innerHTML = html;
}
