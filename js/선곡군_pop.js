/**
 * 덕빈북도 선곡군 인구 추이 및 읍면동별 통계 테이블 생성 함수
 */
function render_선곡군_PopTable(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const html = `
    <div class="선곡군-pop-wrapper" style="font-family: 'Noto Sans KR', sans-serif; color: #333; max-width: 900px; margin: 0 auto;">
        
        <!-- 원본 HTML 내용 그대로 유지 (방천군, 합산 차트 등 손실 없음) -->
        <h3 class="text-xl font-bold mt-6 mb-2 border-b-2 border-gray-200" id="s-3-4" style="border-color: #0d9488;">3.4. 2000년대 이후 (기적의 인구 방어와 5호선)</h3>
<p class="mb-4 leading-relaxed">
    1970년대 이후 전국 농어촌이 이촌향도로 인구가 반토막 나는 뼈아픈 지방 소멸을 겪었지만, 선곡군은 <strong>단 한 번의 폭락 없이 75년간 6만 5천 명 선을 완벽하게 방어</strong>해 내는 기적을 썼다. (1949년 65,217명 ➔ 2025년 66,511명)
</p>
<p class="mb-4 leading-relaxed">
    이는 인접한 거대 메가시티 <a class="wiki-link text-blue-600 hover:underline" href="효빈광역시.html">효빈광역시</a>의 미친 집값을 버티지 못한 인구가 <strong>배후 교외 지역인 선곡군으로 지속 유입</strong>되었기 때문이다. 특히 2000년대 후반부터 대규모 주거 단지 개발이 추진되면서, 농어촌이었던 선곡군은 효빈시의 완벽한 베드타운으로 진화했다.
</p>
<p class="mb-4 leading-relaxed">
    여기에 화룡점정으로 <strong>2032년 <a class="wiki-link text-blue-600 hover:underline" href="5호선.html">효빈 5호선</a></strong>이 선곡읍, 하미면, 원전면 등으로 연장 개통될 예정이어서, 향후 선곡군은 역사상 가장 중요한 교통 혁신과 함께 '효빈권 위성도시'로서의 쐐기를 박을 전망이다.
</p>
<div class="overflow-x-auto mt-8 mb-8">
<table class="w-full border-collapse border border-gray-300 text-sm text-center">
<thead>
<tr>
<th class="p-3 text-white font-bold text-lg" colspan="3" style="background-color: #0d9488;">
                    선곡군 행정구역 변천사
                </th>
</tr>
<tr class="bg-gray-100 text-gray-700">
<th class="p-2 border border-gray-300 w-1/4">시대 / 연도</th>
<th class="p-2 border border-gray-300 w-1/3">선곡 (본진) 권역</th>
<th class="p-2 border border-gray-300">구(舊) 탄성군 영토 (야진·서목)</th>
</tr>
</thead>
<tbody class="text-gray-700">
<tr>
<th class="p-2 border border-gray-300 bg-teal-50 text-teal-900 font-bold">1895년<br/>(26부제)</th>
<td class="p-2 border border-gray-300 font-bold">빈주부 3등군 선곡군</td>
<td class="p-2 border border-gray-300 font-bold">빈주부 3등군 탄성군</td>
</tr>
<tr>
<th class="p-2 border border-gray-300 bg-teal-50 text-teal-900 font-bold">1896년<br/>(15도제)</th>
<td class="p-2 border border-gray-300 font-bold">덕빈북도 선곡군</td>
<td class="p-2 border border-gray-300 font-bold">덕빈북도 탄성군</td>
</tr>
<tr>
<th class="p-2 border border-gray-300 bg-teal-50 text-teal-900 font-bold">1914년<br/>(일제강점기)</th>
<td class="p-2 border border-gray-300 font-bold bg-teal-100 text-[#0d9488] text-base" colspan="2">
                    선곡군 (宣谷郡)<br/><span class="text-xs font-normal text-gray-600">※ 이웃 탄성군의 야진면·서목면을 선곡군으로 전격 흡수 병합</span>
</td>
</tr>
<tr>
<th class="p-2 border border-gray-300 bg-teal-50 text-teal-900 font-bold">1955년<br/>(야진읍 승격)</th>
<td class="p-2 border border-gray-300">
                    선곡면 (잔류)
                </td>
<td class="p-2 border border-gray-300 font-bold text-[#0d9488]">
                    야진읍 승격<br/><span class="text-xs font-normal text-gray-600">※ 군청 본진을 제치고 선(先) 승격</span>
</td>
</tr>
<tr>
<th class="p-2 border border-gray-300 bg-teal-50 text-teal-900 font-bold">1963년<br/>(영토 반환)</th>
<td class="p-2 border border-gray-300 font-bold">
                    선곡군 잔류
                </td>
<td class="p-2 border border-gray-300 font-bold text-red-600">
                    탄성군으로 환원<br/><span class="text-xs font-normal text-gray-600">※ 야진읍, 서목면 이탈</span>
</td>
</tr>
<tr>
<th class="p-2 border border-gray-300 bg-teal-50 text-teal-900 font-bold">현재 (2026년)</th>
<td class="p-2 border border-gray-300 font-bold" colspan="2">
                    덕빈북도 선곡군 (1읍 8면)<br/><span class="text-xs font-normal text-gray-600">※ 1973년 선곡읍 승격. 현재 효빈 배후도시로 성장 중</span>
</td>
</tr>
</tbody>
</table>
</div>
<div class="overflow-x-auto mt-6 mb-8">
<table class="w-full border-collapse border border-gray-300 text-sm">
<thead>
<tr>
<th class="p-3 text-white font-bold text-lg text-center" colspan="2" style="background-color: #0d9488;">
                    선곡군 역사 연혁 상세
                </th>
</tr>
<tr class="bg-gray-100 text-gray-700 text-center">
<th class="p-2 border border-gray-300 w-24">시대 / 연도</th>
<th class="p-2 border border-gray-300">주요 내용</th>
</tr>
</thead>
<tbody class="text-gray-700">
<tr><td class="p-2 border border-gray-300 font-bold bg-teal-50 text-teal-900 text-center">조선 시대</td><td class="p-2 border border-gray-300">독립된 고을인 <strong>선곡현(宣谷縣)</strong>으로 기능했다.</td></tr>
<tr><td class="p-2 border border-gray-300 font-bold bg-teal-50 text-teal-900 text-center">1895년</td><td class="p-2 border border-gray-300"><strong>26부제</strong> 시행으로 <strong>빈주부(彬州府)</strong> 관할의 3등군 <strong>선곡군</strong>으로 편성되었다.</td></tr>
<tr><td class="p-2 border border-gray-300 font-bold bg-teal-50 text-teal-900 text-center">1896년</td><td class="p-2 border border-gray-300"><strong>15도제</strong> 시행으로 <strong>덕빈북도 선곡군</strong>으로 재편되었다.</td></tr>
<tr><td class="p-2 border border-gray-300 font-bold bg-teal-50 text-teal-900 text-center">1914년</td><td class="p-2 border border-gray-300 font-bold text-[#0d9488]">일제의 부군면 통폐합 과정에서 이웃 <strong><a class="wiki-link text-blue-600 hover:underline" href="탄성군.html">탄성군</a></strong>의 일부 영토(야진면, 서목면)를 흡수 병합했다.</td></tr>
<tr><td class="p-2 border border-gray-300 font-bold bg-gray-50 text-center">1955년</td><td class="p-2 border border-gray-300">탄성군에서 편입되었던 야진면이 상권 발달로 <strong>야진읍(邑)</strong>으로 승격되었다.</td></tr>
<tr><td class="p-2 border border-gray-300 font-bold bg-gray-50 text-center text-red-600">1963년</td><td class="p-2 border border-gray-300">행정구역 조정으로 <strong>야진읍과 서목면이 다시 탄성군으로 환원</strong>되며 군세가 다소 축소되었다.</td></tr>
<tr><td class="p-2 border border-gray-300 font-bold bg-gray-50 text-center">1973년</td><td class="p-2 border border-gray-300">군청 소재지인 <strong>선곡면</strong>이 마침내 <strong><a class="wiki-link text-blue-600 hover:underline" href="선곡읍.html">선곡읍</a></strong>으로 승격되었다.</td></tr>
<tr><td class="p-2 border border-gray-300 font-bold bg-gray-50 text-center">2000년대 후반</td><td class="p-2 border border-gray-300"><a class="wiki-link text-blue-600 hover:underline" href="효빈광역시.html">효빈광역시</a>의 확장에 따른 배후 수요로 대규모 주거 단지 개발이 추진되었다.</td></tr>
<tr><td class="p-2 border border-gray-300 font-bold bg-teal-50 text-teal-900 text-center">2032년 (예정)</td><td class="p-2 border border-gray-300 font-bold text-[#0d9488]"><strong><a class="wiki-link text-blue-600 hover:underline" href="5호선.html">효빈 5호선</a></strong>(선곡읍, 하미면, 원전면) 개통이 확정되어, 군 역사상 최고의 광역 교통 혁신을 앞두고 있다.</td></tr>
</tbody>
</table>
</div>

        
        <!-- 신규 2026.4 읍면동 막대그래프 -->
        <div style="margin: 30px auto; border: 2px solid #D6D5CA; border-radius: 4px; background-color: #fff; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <div style="background-color: #D6D5CA; color: white; padding: 12px; text-align: center; font-weight: bold; font-size: 1.1em;">
                덕빈북도 선곡군 읍면동별 인구 통계
            </div>
            <div style="display: flex; flex-direction: column;">
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 44.6%; background-color: #D6D5CA;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">선곡읍 22,312명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 33.0%; background-color: #D6D5CA;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">하미면 16,504명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 14.2%; background-color: #D6D5CA;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">귀총면 7,123명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 11.0%; background-color: #D6D5CA;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">해로면 5,501명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 10.5%; background-color: #D6D5CA;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">원전면 5,254명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 6.7%; background-color: #D6D5CA;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">남소면 3,342명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 6.0%; background-color: #D6D5CA;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">동구면 3,023명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 4.8%; background-color: #D6D5CA;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">인채면 2,422명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 2.6%; background-color: #D6D5CA;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">우목면 1,312명</div>
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
                        <th style="background-color: #D6D5CA; color: white; padding: 10px; border: 1px solid #ccc;">광역시도</th>
                        <th style="background-color: #D6D5CA; color: white; padding: 10px; border: 1px solid #ccc;">시군구</th>
                        <th style="background-color: #D6D5CA; color: white; padding: 10px; border: 1px solid #ccc;">읍면동</th>
                        <th style="background-color: #D6D5CA; color: white; padding: 10px; border: 1px solid #ccc;">합계 : 2026.4</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="background-color: #f1f3f5; font-weight: bold;">
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">선곡군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">-</td>
                        <td style="padding: 8px; border: 1px solid #ccc; color: #d6001c;">66,793</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">선곡군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">선곡읍</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">22,312</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">선곡군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">하미면</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">16,504</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">선곡군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">귀총면</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">7,123</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">선곡군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">해로면</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">5,501</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">선곡군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">원전면</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">5,254</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">선곡군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">남소면</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">3,342</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">선곡군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">동구면</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">3,023</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">선곡군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">인채면</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">2,422</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">선곡군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">우목면</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">1,312</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- 연도별 변천사 종합 표 (통합) -->
        <div style="margin: 30px auto; overflow-x: auto;">
            <div style="font-weight: bold; margin-bottom: 10px; font-size: 1.1em; text-align: center;">연도별 행정구역 인구 변천사 종합표</div>
            <table style="width: max-content !important; min-width: 100% !important; table-layout: auto !important; border-collapse: collapse; text-align: right; font-size: 0.75em; white-space: nowrap; border: 1px solid #ccc;">
                <thead>
                    <tr style="background-color: #D6D5CA; color: white; text-align: center;">
                        <th style="padding: 8px; border: 1px solid #ccc;">구분</th><th style="padding: 8px; border: 1px solid #ccc;">1966년</th><th style="padding: 8px; border: 1px solid #ccc;">1970년</th><th style="padding: 8px; border: 1px solid #ccc;">1975년</th><th style="padding: 8px; border: 1px solid #ccc;">1980년</th><th style="padding: 8px; border: 1px solid #ccc;">1985년</th><th style="padding: 8px; border: 1px solid #ccc;">1990년</th><th style="padding: 8px; border: 1px solid #ccc;">1995년</th><th style="padding: 8px; border: 1px solid #ccc;">2000년</th><th style="padding: 8px; border: 1px solid #ccc;">2005년</th><th style="padding: 8px; border: 1px solid #ccc;">2010년</th><th style="padding: 8px; border: 1px solid #ccc;">2015년</th><th style="padding: 8px; border: 1px solid #ccc;">2020년</th><th style="padding: 8px; border: 1px solid #ccc;">2025년</th><th style="padding: 8px; border: 1px solid #ccc;">2026.4</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="background-color: #f1f3f5; font-weight: bold;"><td style="padding: 6px; border: 1px solid #ccc; text-align: center; color: #555;">덕빈북도 (참고)</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">3608524</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">4021985</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">4475727</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">4715950</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">3132578</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">3259806</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">3160756</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">3226894</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">3275615</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">3351587</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">3390580</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">3462447</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">3523123</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">3535361</td></tr>
                    <tr style="background-color: #fdfaf5; font-weight: bold;"><td style="padding: 6px; border: 1px solid #ccc; text-align: center;">선곡군</td><td style="padding: 6px; border: 1px solid #ccc;">91842</td><td style="padding: 6px; border: 1px solid #ccc;">82312</td><td style="padding: 6px; border: 1px solid #ccc;">75892</td><td style="padding: 6px; border: 1px solid #ccc;">70831</td><td style="padding: 6px; border: 1px solid #ccc;">68213</td><td style="padding: 6px; border: 1px solid #ccc;">67823</td><td style="padding: 6px; border: 1px solid #ccc;">65212</td><td style="padding: 6px; border: 1px solid #ccc;">63245</td><td style="padding: 6px; border: 1px solid #ccc;">65231</td><td style="padding: 6px; border: 1px solid #ccc;">65518</td><td style="padding: 6px; border: 1px solid #ccc;">64912</td><td style="padding: 6px; border: 1px solid #ccc;">65930</td><td style="padding: 6px; border: 1px solid #ccc;">66511</td><td style="padding: 6px; border: 1px solid #ccc; color:#d6001c;">66,793</td></tr>
                </tbody>
            </table>
        </div>
    </div>
    `;
    container.innerHTML = html;
}
