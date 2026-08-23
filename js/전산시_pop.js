/**
 * 덕빈북도 전산시 인구 추이 및 읍면동별 통계 테이블 생성 함수
 */
function render_전산시_PopTable(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const html = `
    <div class="전산시-pop-wrapper" style="font-family: 'Noto Sans KR', sans-serif; color: #333; max-width: 900px; margin: 0 auto;">
        
        <!-- 원본 HTML 내용 그대로 유지 (방천군, 합산 차트 등 손실 없음) -->
        <h3 class="text-xl font-bold mt-6 mb-2 border-b-2 border-gray-200" id="s-4-3" style="border-color: #059669;">4.3. 근현대 (인구 폭발과 시 승격의 기적)</h3>
<ul class="list-disc ml-6 text-sm leading-relaxed mb-6">
<li><strong>1950년대:</strong> <strong><a class="wiki-link text-blue-600 hover:underline" href="상빈선.html">상빈선</a></strong> 철도가 전산군을 관통하며 개통하면서 지역 발전의 혁명적인 전기를 맞이했다. 물류와 여객이 모여들며 교통 요충지로 급부상했다.</li>
<li><strong>1979년:</strong> 전산군의 심장부인 전산면이 <strong>전산읍</strong>으로 승격하였다.</li>
<li><strong>1990년대:</strong> 전산읍 일대에 대규모 주거지 및 신도시 개발이 몰빵(...)되면서, 외곽 면 지역 인구를 모조리 빨아들임과 동시에 외지인 유입이 겹치며 전산읍 인구가 폭발적으로 증가했다.</li>
<li><strong>2009년:</strong> 마침내 구 전산읍 단일 인구가 5만 명을 돌파하며, 전산군이 <strong>전산시로 전격 승격</strong>되었다. <del>경축</del><br/>특징적으로 승격 당시 전산시 전체 인구는 옆 동네 <a class="wiki-link text-blue-600 hover:underline" href="낭원군.html">낭원군</a>보다 한참 적었음에도 불구하고, '동(읍) 지역 인구 5만 명 이상'이라는 지방자치법 시 승격 요건을 아슬아슬하게 충족해 시 타이틀을 따낸 <strong>덕빈북도 내 매우 특이한 행정 개편 사례</strong>로 꼽힌다. <del>머릿수 밀린 낭원군 오열</del></li>
<li><strong>2009년 (동시 승격):</strong> 전산시 승격으로 인해 도농복합시 특례 규정(도농복합시에는 읍을 1개 둘 수 있음)이 적용되어, 구 산진군의 읍내였던 해진면이 <strong><a class="wiki-link text-blue-600 hover:underline" href="해진읍.html">해진읍</a></strong>으로 승격하며 옛 영광을 일부 되찾았다.</li>
</ul>
<div class="overflow-x-auto mt-8 mb-8">
<table class="w-full border-collapse border border-gray-300 text-sm text-center">
<thead>
<tr>
<th class="p-3 text-white font-bold text-lg border" colspan="3" style="background-color: #059669; border-color: #047857;">
                    전산시 행정구역 변천사 요약
                </th>
</tr>
<tr class="bg-gray-100 text-gray-700">
<th class="p-2 border border-gray-300 w-1/4">시대 / 연도</th>
<th class="p-2 border border-gray-300 w-1/3">내륙 (구 전양군) 지역</th>
<th class="p-2 border border-gray-300">해안 (구 산진군) 지역</th>
</tr>
</thead>
<tbody class="text-gray-700">
<tr>
<th class="p-2 border border-gray-300 bg-emerald-50 text-emerald-900 font-bold">1895년<br/>(26부제)</th>
<td class="p-2 border border-gray-300 font-bold">빈주부 4등군 전양군</td>
<td class="p-2 border border-gray-300 font-bold">빈주부 5등군 산진군</td>
</tr>
<tr>
<th class="p-2 border border-gray-300 bg-emerald-50 text-emerald-900 font-bold">1896년<br/>(13도제)</th>
<td class="p-2 border border-gray-300 font-bold">덕빈북도 전양군</td>
<td class="p-2 border border-gray-300 font-bold">덕빈북도 산진군</td>
</tr>
<tr>
<th class="p-2 border border-gray-300 bg-emerald-50 text-emerald-900 font-bold">1914년<br/>(일제강점기)</th>
<td class="p-2 border border-gray-300 font-bold bg-emerald-100 text-[#059669]" colspan="2">
                    덕빈북도 전산군 (全山郡)<br/><span class="text-xs font-normal text-gray-500">(전양군 + 산진군 명칭 변경 통폐합)</span>
</td>
</tr>
<tr>
<th class="p-2 border border-gray-300 bg-emerald-50 text-emerald-900 font-bold">1979년<br/>(읍 승격기)</th>
<td class="p-2 border border-gray-300 text-[#059669]">
<strong>전산읍 승격</strong> (구 읍내면)
                </td>
<td class="p-2 border border-gray-300 text-gray-500">
                    해진면 유지
                </td>
</tr>
<tr>
<th class="p-2 border border-gray-300 bg-emerald-50 text-emerald-900 font-bold">2009년<br/>(시 승격)</th>
<td class="p-2 border border-gray-300 font-bold text-base text-[#059669] bg-emerald-50">
                    전산시 승격 출범<br/><span class="text-xs font-normal text-gray-600">※ 전산읍 인구 5만 돌파</span>
</td>
<td class="p-2 border border-gray-300 font-bold text-[#059669]">
                    해진읍 승격<br/><span class="text-xs font-normal text-gray-600">※ 도농복합시 특례 적용</span>
</td>
</tr>
</tbody>
</table>
</div>
<div class="overflow-x-auto mt-6 mb-8">
<table class="w-full border-collapse border border-gray-300 text-sm">
<thead>
<tr>
<th class="p-3 text-white font-bold text-lg border text-center" colspan="2" style="background-color: #059669; border-color: #047857;">
                    전산시 근현대 연혁 상세
                </th>
</tr>
<tr class="bg-gray-100 text-gray-700 text-center">
<th class="p-2 border border-gray-300 w-24">연도</th>
<th class="p-2 border border-gray-300">주요 내용</th>
</tr>
</thead>
<tbody class="text-gray-700">
<tr><td class="p-2 border border-gray-300 font-bold bg-emerald-50 text-emerald-900 text-center">1895년</td><td class="p-2 border border-gray-300">26부제 시행으로 <strong>빈주부(彬州府)</strong> 관할의 4등군 <strong>전양군(全陽郡)</strong>과 5등군 <strong>산진군(山珍郡)</strong>으로 나뉘어 편성되었다.</td></tr>
<tr><td class="p-2 border border-gray-300 font-bold bg-emerald-50 text-emerald-900 text-center">1896년</td><td class="p-2 border border-gray-300">13도제 복원으로 <strong>덕빈북도 전양군</strong>과 <strong>산진군</strong>으로 각각 재편되었다.</td></tr>
<tr><td class="p-2 border border-gray-300 font-bold bg-gray-50 text-center">1914년</td><td class="p-2 border border-gray-300 font-bold text-[#059669]">부군면 통폐합에 따라 전양군과 산진군이 통합되며 <strong>전산군(全山郡)</strong>으로 명칭이 변경 신설되었다.</td></tr>
<tr><td class="p-2 border border-gray-300 font-bold bg-gray-50 text-center">1950년대</td><td class="p-2 border border-gray-300"><a class="wiki-link text-blue-600 hover:underline" href="상빈선.html">상빈선</a> 철도가 개통되어 전산역과 해진역이 영업을 개시하며 교통 요충지로 발돋움했다.</td></tr>
<tr><td class="p-2 border border-gray-300 font-bold bg-gray-50 text-center">1979년</td><td class="p-2 border border-gray-300">전산군의 중심지인 전산면이 <strong>전산읍</strong>으로 승격되었다.</td></tr>
<tr><td class="p-2 border border-gray-300 font-bold bg-gray-50 text-center">1990년대</td><td class="p-2 border border-gray-300">전산읍 일대(현재의 전산3동 등)를 중심으로 대규모 신도시 및 택지 개발이 이루어지며 인구가 쏠리기 시작했다.</td></tr>
<tr><td class="p-2 border border-gray-300 font-bold bg-emerald-50 text-emerald-900 text-center">2009년</td><td class="p-2 border border-gray-300 font-bold text-[#059669]">구 전산읍 인구가 5만 명을 돌파하며 <strong>전산시</strong>로 승격되었다. 도농복합시 특례 규정에 따라 산진군의 구읍이었던 해진면이 <strong>해진읍</strong>으로 동시 승격하였다.</td></tr>
</tbody>
</table>
</div>

        
        <!-- 신규 2026.4 읍면동 막대그래프 -->
        <div style="margin: 30px auto; border: 2px solid #FF7F27; border-radius: 4px; background-color: #fff; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <div style="background-color: #FF7F27; color: white; padding: 12px; text-align: center; font-weight: bold; font-size: 1.1em;">
                덕빈북도 전산시 읍면동별 인구 통계
            </div>
            <div style="display: flex; flex-direction: column;">
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 67.5%; background-color: #FF7F27;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">전산3동 33,758명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 22.1%; background-color: #FF7F27;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">전산2동 11,047명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 20.0%; background-color: #FF7F27;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">전산4동 10,014명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 14.1%; background-color: #FF7F27;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">전산1동 7,052명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 10.8%; background-color: #FF7F27;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">해진읍 5,412명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 6.4%; background-color: #FF7F27;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">고진면 3,187명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 4.2%; background-color: #FF7F27;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">송강면 2,083명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 3.9%; background-color: #FF7F27;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">백목면 1,974명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 3.9%; background-color: #FF7F27;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">상면 1,956명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 2.4%; background-color: #FF7F27;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">하면 1,203명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 2.3%; background-color: #FF7F27;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">수판면 1,171명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 1.8%; background-color: #FF7F27;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">신산면 914명</div>
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
                        <th style="background-color: #FF7F27; color: white; padding: 10px; border: 1px solid #ccc;">광역시도</th>
                        <th style="background-color: #FF7F27; color: white; padding: 10px; border: 1px solid #ccc;">시군구</th>
                        <th style="background-color: #FF7F27; color: white; padding: 10px; border: 1px solid #ccc;">읍면동</th>
                        <th style="background-color: #FF7F27; color: white; padding: 10px; border: 1px solid #ccc;">합계 : 2026.4</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="background-color: #f1f3f5; font-weight: bold;">
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">전산시</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">-</td>
                        <td style="padding: 8px; border: 1px solid #ccc; color: #d6001c;">79,771</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">전산시</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">전산3동</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">33,758</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">전산시</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">전산2동</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">11,047</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">전산시</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">전산4동</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">10,014</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">전산시</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">전산1동</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">7,052</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">전산시</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">해진읍</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">5,412</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">전산시</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">고진면</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">3,187</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">전산시</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">송강면</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">2,083</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">전산시</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">백목면</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">1,974</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">전산시</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">상면</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">1,956</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">전산시</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">하면</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">1,203</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">전산시</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">수판면</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">1,171</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">전산시</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">신산면</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">914</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- 연도별 변천사 종합 표 (통합) -->
        <div style="margin: 30px auto; overflow-x: auto;">
            <div style="font-weight: bold; margin-bottom: 10px; font-size: 1.1em; text-align: center;">연도별 행정구역 인구 변천사 종합표</div>
            <table style="width: max-content !important; min-width: 100% !important; table-layout: auto !important; border-collapse: collapse; text-align: right; font-size: 0.75em; white-space: nowrap; border: 1px solid #ccc;">
                <thead>
                    <tr style="background-color: #FF7F27; color: white; text-align: center;">
                        <th style="padding: 8px; border: 1px solid #ccc;">구분</th><th style="padding: 8px; border: 1px solid #ccc;">1966년</th><th style="padding: 8px; border: 1px solid #ccc;">1970년</th><th style="padding: 8px; border: 1px solid #ccc;">1975년</th><th style="padding: 8px; border: 1px solid #ccc;">1980년</th><th style="padding: 8px; border: 1px solid #ccc;">1985년</th><th style="padding: 8px; border: 1px solid #ccc;">1990년</th><th style="padding: 8px; border: 1px solid #ccc;">1995년</th><th style="padding: 8px; border: 1px solid #ccc;">2000년</th><th style="padding: 8px; border: 1px solid #ccc;">2005년</th><th style="padding: 8px; border: 1px solid #ccc;">2010년</th><th style="padding: 8px; border: 1px solid #ccc;">2015년</th><th style="padding: 8px; border: 1px solid #ccc;">2020년</th><th style="padding: 8px; border: 1px solid #ccc;">2025년</th><th style="padding: 8px; border: 1px solid #ccc;">2026.4</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="background-color: #f1f3f5; font-weight: bold;"><td style="padding: 6px; border: 1px solid #ccc; text-align: center; color: #555;">덕빈북도 (참고)</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">3608524</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">4021985</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">4475727</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">4715950</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">3132578</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">3259806</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">3160756</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">3226894</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">3275615</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">3351587</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">3390580</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">3462447</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">3523123</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">3535361</td></tr>
                    <tr style="background-color: #fdfaf5; font-weight: bold;"><td style="padding: 6px; border: 1px solid #ccc; text-align: center;">전산시</td><td style="padding: 6px; border: 1px solid #ccc;">108422</td><td style="padding: 6px; border: 1px solid #ccc;">113023</td><td style="padding: 6px; border: 1px solid #ccc;">103921</td><td style="padding: 6px; border: 1px solid #ccc;">100000</td><td style="padding: 6px; border: 1px solid #ccc;">92321</td><td style="padding: 6px; border: 1px solid #ccc;">93821</td><td style="padding: 6px; border: 1px solid #ccc;">90232</td><td style="padding: 6px; border: 1px solid #ccc;">90102</td><td style="padding: 6px; border: 1px solid #ccc;">83721</td><td style="padding: 6px; border: 1px solid #ccc;">79321</td><td style="padding: 6px; border: 1px solid #ccc;">75232</td><td style="padding: 6px; border: 1px solid #ccc;">78273</td><td style="padding: 6px; border: 1px solid #ccc;">79314</td><td style="padding: 6px; border: 1px solid #ccc; color:#d6001c;">79,771</td></tr>
                </tbody>
            </table>
        </div>
    </div>
    `;
    container.innerHTML = html;
}
