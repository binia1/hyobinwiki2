/**
 * 덕빈북도 모제군 인구 추이 및 읍면동별 통계 테이블 생성 함수
 */
function render_모제군_PopTable(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const html = `
    <div class="모제군-pop-wrapper" style="font-family: 'Noto Sans KR', sans-serif; color: #333; max-width: 900px; margin: 0 auto;">
        
        <!-- 원본 HTML 내용 그대로 유지 (방천군, 합산 차트 등 손실 없음) -->
        <h3 class="text-xl font-bold mt-6 mb-2 border-b-2 border-gray-200" id="s-4-5" style="border-color: #4f46e5;">4.5. 21세기 (반도체 클러스터와 인구 반등의 기적)</h3>
<p class="mb-4 leading-relaxed">
    읍 승격 이후로도 인구 유출을 막지 못해 2020년에는 2만 8천 명 선까지 붕괴되며 소멸 고위험 지자체로 전락하는 듯했다. 그러나 <strong>2010년대 중반 이후</strong>, 모제군의 운명을 바꿀 거대한 변화가 찾아왔다.
</p>
<p class="mb-4 leading-relaxed">
    관내 <strong><a class="wiki-link text-blue-600 hover:underline" href="약궁면.html">약궁면</a></strong> 일대에 넓고 저렴한 공장 부지를 무기로 <strong>반도체 후공정(OSAT)·패키징·장비·소재 기업 등 4~6개의 알짜 협력사 클러스터</strong>가 대거 조성된 것이다. 효빈시와 빈주시에 밀집한 첨단 산업의 낙수 효과를 톡톡히 빨아들인 결과였다.
</p>
<p class="mb-4 leading-relaxed">
    이 반도체 클러스터 조성으로 양질의 청년 일자리가 대거 창출되면서, 모제군의 <strong>경제와 인구 구조가 완전히 뒤바뀌었다.</strong> 끝없이 곤두박질치던 인구 그래프가 2020년을 기점으로 V자 반등을 시작하여 <strong>2025년 기준 29,823명</strong>을 기록, 3만 명 고지 탈환을 눈앞에 두고 있다. 전통적인 늙은 농촌에서 <strong>젊은 반도체 배후 도시</strong>로 완벽한 환골탈태를 이뤄낸 셈이다.
</p>
<div class="overflow-x-auto mt-8 mb-8">
<table class="w-full border-collapse border border-gray-300 text-sm text-center">
<thead>
<tr>
<th class="p-3 text-white font-bold text-lg" colspan="3" style="background-color: #4f46e5;">
                    모제군 행정구역 변천사
                </th>
</tr>
<tr class="bg-gray-100 text-gray-700">
<th class="p-2 border border-gray-300 w-1/4">시대 / 연도</th>
<th class="p-2 border border-gray-300 w-1/3">모제 (본진) 권역</th>
<th class="p-2 border border-gray-300">구(舊) 송원군 (편입) 권역</th>
</tr>
</thead>
<tbody class="text-gray-700">
<tr>
<th class="p-2 border border-gray-300 bg-indigo-50 text-indigo-900 font-bold">조선 시대</th>
<td class="p-2 border border-gray-300 font-bold">모제현 (茅堤縣)</td>
<td class="p-2 border border-gray-300 font-bold">송원군 (松原郡) 일부</td>
</tr>
<tr>
<th class="p-2 border border-gray-300 bg-indigo-50 text-indigo-900 font-bold">1895년<br/>(26부제)</th>
<td class="p-2 border border-gray-300 font-bold">빈주부 4등군 모제군</td>
<td class="p-2 border border-gray-300 font-bold">빈주부 4등군 송원군</td>
</tr>
<tr>
<th class="p-2 border border-gray-300 bg-indigo-50 text-indigo-900 font-bold">1914년<br/>(일제강점기)</th>
<td class="p-2 border border-gray-300 font-bold bg-indigo-100 text-[#4f46e5] text-base" colspan="2">
                    모제군 (茅堤郡)<br/><span class="text-xs font-normal text-gray-600">※ 구 송원군 남부(괴천면, 장어면 일부) 흡수 병합</span>
</td>
</tr>
<tr>
<th class="p-2 border border-gray-300 bg-indigo-50 text-indigo-900 font-bold">1979년<br/>(특례 승격)</th>
<td class="p-2 border border-gray-300">
<strong>모제읍</strong> 승격<br/><span class="text-xs font-normal text-gray-600">※ 군청 소재지 특례 적용</span>
</td>
<td class="p-2 border border-gray-300">
                    면(面) 단위 잔류
                </td>
</tr>
<tr>
<th class="p-2 border border-gray-300 bg-indigo-50 text-indigo-900 font-bold">현재 (2026년)</th>
<td class="p-2 border border-gray-300 font-bold" colspan="2">
                    덕빈북도 모제군 (1읍 4면)<br/><span class="text-xs font-normal text-gray-600">※ 약궁면 반도체 클러스터로 인구 V자 반등 중</span>
</td>
</tr>
</tbody>
</table>
</div>
<div class="overflow-x-auto mt-6 mb-8">
<table class="w-full border-collapse border border-gray-300 text-sm">
<thead>
<tr>
<th class="p-3 text-white font-bold text-lg text-center" colspan="2" style="background-color: #4f46e5;">
                    모제군 역사 연혁 상세
                </th>
</tr>
<tr class="bg-gray-100 text-gray-700 text-center">
<th class="p-2 border border-gray-300 w-24">시대 / 연도</th>
<th class="p-2 border border-gray-300">주요 내용</th>
</tr>
</thead>
<tbody class="text-gray-700">
<tr><td class="p-2 border border-gray-300 font-bold bg-indigo-50 text-indigo-900 text-center">조선 시대</td><td class="p-2 border border-gray-300">독립된 <strong>모제현(茅堤縣)</strong>으로 승격되어 현령(縣令)이 파견되었다.</td></tr>
<tr><td class="p-2 border border-gray-300 font-bold bg-indigo-50 text-indigo-900 text-center">1895년</td><td class="p-2 border border-gray-300">26부제 시행으로 <strong>빈주부(彬州府)</strong> 관할의 4등군 <strong>모제군</strong>으로 편성되었다.</td></tr>
<tr><td class="p-2 border border-gray-300 font-bold bg-indigo-50 text-indigo-900 text-center">1896년</td><td class="p-2 border border-gray-300">13도제 복원으로 <strong>덕빈북도 모제군</strong>으로 재편되었다.</td></tr>
<tr><td class="p-2 border border-gray-300 font-bold bg-indigo-50 text-indigo-900 text-center">1914년</td><td class="p-2 border border-gray-300 font-bold text-[#4f46e5]">일제의 부군면 통폐합 과정에서 이웃 <strong>송원군</strong>의 남부 지역(괴천면, 장어면 일대)을 흡수 병합했다.</td></tr>
<tr><td class="p-2 border border-gray-300 font-bold bg-gray-50 text-center">1960년대</td><td class="p-2 border border-gray-300">인구 8만 명을 돌파하며 지역의 전성기를 누렸다.</td></tr>
<tr><td class="p-2 border border-gray-300 font-bold bg-gray-50 text-center text-[#4f46e5]">1979년</td><td class="p-2 border border-gray-300 font-bold">지방행정 규정 개정(군청 소재지 특례)으로 모제면이 인구 요건과 무관하게 <strong>모제읍(邑)</strong>으로 자동 승격되었다.</td></tr>
<tr><td class="p-2 border border-gray-300 font-bold bg-gray-50 text-center">1990~2010년</td><td class="p-2 border border-gray-300">극심한 이촌향도로 인구가 8만 명대에서 3만 명대까지 지속적으로 추락했다.</td></tr>
<tr><td class="p-2 border border-gray-300 font-bold bg-indigo-50 text-indigo-900 text-center">2010년대 중반</td><td class="p-2 border border-gray-300 font-bold text-[#4f46e5]"><a class="wiki-link text-blue-600 hover:underline" href="약궁면.html">약궁면</a> 일대에 반도체 후공정·장비 등 협력사 클러스터가 대거 조성되기 시작했다.</td></tr>
<tr><td class="p-2 border border-gray-300 font-bold bg-indigo-50 text-indigo-900 text-center">2020~2025년</td><td class="p-2 border border-gray-300">반도체 기업 입주에 따른 청년 인구 유입으로 수십 년간 이어지던 인구 감소세가 꺾이고 <strong>V자 반등</strong>(28,718명 ➔ 29,823명)에 성공했다.</td></tr>
</tbody>
</table>
</div>

        
        <!-- 신규 2026.4 읍면동 막대그래프 -->
        <div style="margin: 30px auto; border: 2px solid #A664A0; border-radius: 4px; background-color: #fff; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <div style="background-color: #A664A0; color: white; padding: 12px; text-align: center; font-weight: bold; font-size: 1.1em;">
                덕빈북도 모제군 읍면동별 인구 통계
            </div>
            <div style="display: flex; flex-direction: column;">
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 21.2%; background-color: #A664A0;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">모제읍 10,586명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 17.0%; background-color: #A664A0;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">약궁면 8,521명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 8.5%; background-color: #A664A0;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">장어면 4,258명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 6.5%; background-color: #A664A0;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">청해면 3,254명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 3.5%; background-color: #A664A0;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">양광면 1,766명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 2.8%; background-color: #A664A0;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">괴천면 1,402명</div>
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
                        <th style="background-color: #A664A0; color: white; padding: 10px; border: 1px solid #ccc;">광역시도</th>
                        <th style="background-color: #A664A0; color: white; padding: 10px; border: 1px solid #ccc;">시군구</th>
                        <th style="background-color: #A664A0; color: white; padding: 10px; border: 1px solid #ccc;">읍면동</th>
                        <th style="background-color: #A664A0; color: white; padding: 10px; border: 1px solid #ccc;">합계 : 2026.4</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="background-color: #f1f3f5; font-weight: bold;">
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">모제군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">-</td>
                        <td style="padding: 8px; border: 1px solid #ccc; color: #d6001c;">29,787</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">모제군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">모제읍</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">10,586</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">모제군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">약궁면</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">8,521</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">모제군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">장어면</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">4,258</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">모제군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">청해면</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">3,254</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">모제군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">양광면</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">1,766</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">모제군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">괴천면</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">1,402</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- 연도별 변천사 종합 표 (통합) -->
        <div style="margin: 30px auto; overflow-x: auto;">
            <div style="font-weight: bold; margin-bottom: 10px; font-size: 1.1em; text-align: center;">연도별 행정구역 인구 변천사 종합표</div>
            <table style="width: max-content !important; min-width: 100% !important; table-layout: auto !important; border-collapse: collapse; text-align: right; font-size: 0.75em; white-space: nowrap; border: 1px solid #ccc;">
                <thead>
                    <tr style="background-color: #A664A0; color: white; text-align: center;">
                        <th style="padding: 8px; border: 1px solid #ccc;">구분</th><th style="padding: 8px; border: 1px solid #ccc;">1966년</th><th style="padding: 8px; border: 1px solid #ccc;">1970년</th><th style="padding: 8px; border: 1px solid #ccc;">1975년</th><th style="padding: 8px; border: 1px solid #ccc;">1980년</th><th style="padding: 8px; border: 1px solid #ccc;">1985년</th><th style="padding: 8px; border: 1px solid #ccc;">1990년</th><th style="padding: 8px; border: 1px solid #ccc;">1995년</th><th style="padding: 8px; border: 1px solid #ccc;">2000년</th><th style="padding: 8px; border: 1px solid #ccc;">2005년</th><th style="padding: 8px; border: 1px solid #ccc;">2010년</th><th style="padding: 8px; border: 1px solid #ccc;">2015년</th><th style="padding: 8px; border: 1px solid #ccc;">2020년</th><th style="padding: 8px; border: 1px solid #ccc;">2025년</th><th style="padding: 8px; border: 1px solid #ccc;">2026.4</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="background-color: #f1f3f5; font-weight: bold;"><td style="padding: 6px; border: 1px solid #ccc; text-align: center; color: #555;">덕빈북도 (참고)</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">3608524</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">4021985</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">4475727</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">4715950</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">3132578</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">3259806</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">3160756</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">3226894</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">3275615</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">3351587</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">3390580</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">3462447</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">3523123</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">3535361</td></tr>
                    <tr style="background-color: #fdfaf5; font-weight: bold;"><td style="padding: 6px; border: 1px solid #ccc; text-align: center;">모제군</td><td style="padding: 6px; border: 1px solid #ccc;">87521</td><td style="padding: 6px; border: 1px solid #ccc;">75212</td><td style="padding: 6px; border: 1px solid #ccc;">67212</td><td style="padding: 6px; border: 1px solid #ccc;">60012</td><td style="padding: 6px; border: 1px solid #ccc;">53912</td><td style="padding: 6px; border: 1px solid #ccc;">48281</td><td style="padding: 6px; border: 1px solid #ccc;">41245</td><td style="padding: 6px; border: 1px solid #ccc;">36696</td><td style="padding: 6px; border: 1px solid #ccc;">33212</td><td style="padding: 6px; border: 1px solid #ccc;">30591</td><td style="padding: 6px; border: 1px solid #ccc;">29210</td><td style="padding: 6px; border: 1px solid #ccc;">28718</td><td style="padding: 6px; border: 1px solid #ccc;">29823</td><td style="padding: 6px; border: 1px solid #ccc; color:#d6001c;">29,787</td></tr>
                </tbody>
            </table>
        </div>
    </div>
    `;
    container.innerHTML = html;
}
