/**
 * 덕빈남도 매산군 인구 추이 및 읍면동별 통계 테이블 생성 함수
 */
function render_매산군_PopTable(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const html = `
    <div class="매산군-pop-wrapper" style="font-family: 'Noto Sans KR', sans-serif; color: #333; max-width: 900px; margin: 0 auto;">
        
        <!-- 원본 HTML 내용 그대로 유지 (방천군, 합산 차트 등 손실 없음) -->
        <h2 id="s-5">5. 인구</h2><div id="pop-chart-매산군" style="margin: 20px auto; max-width: 480px; border: 2px solid #A0FFF9; border-radius: 4px; font-family: 'Noto Sans KR', sans-serif; background-color: #fff; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
<div style="padding: 15px 10px; border-bottom: 1px solid #A0FFF9; text-align: center; background-color: #fff;">
<div style="display: flex; align-items: center; justify-content: center; gap: 8px;">
<span style="font-size: 1.1em; font-weight: 900; color: #111;">덕빈남도 매산군 인구 추이</span>
</div>
<div style="font-size: 0.8em; color: #666; margin-top: 5px;">(1949년~현재)</div>
</div>
<div style="display: flex; flex-direction: column;">
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 81.9%; background-color: #A0FFF9; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                1949년 122,938명
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 89.4%; background-color: #A0FFF9; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                1955년 134,224명
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 94.8%; background-color: #A0FFF9; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                1960년 142,341명  (정점)
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 57.0%; background-color: #A0FFF9; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                1966년 85,644명
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 65.4%; background-color: #A0FFF9; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                1970년 98,193명
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 68.2%; background-color: #A0FFF9; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                1975년 102,325명
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 70.1%; background-color: #A0FFF9; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                1980년 105,293명
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 73.8%; background-color: #A0FFF9; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                1985년 110,766명
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 76.3%; background-color: #A0FFF9; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                1990년 114,497명
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 74.1%; background-color: #A0FFF9; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                1995년 111,283명
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 70.1%; background-color: #A0FFF9; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                2000년 105,293명
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 73.3%; background-color: #A0FFF9; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                2005년 110,099명
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 74.3%; background-color: #A0FFF9; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                2010년 111,493명
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 71.3%; background-color: #A0FFF9; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                2015년 107,099명
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 67.3%; background-color: #A0FFF9; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                2020년 100,954명
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 68.1%; background-color: #A0FFF9; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                2025년 102,204명
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 68.8%; background-color: #A0FFF9; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                2026년 4월 103,221명
            </div>
</div>
</div>
<div style="padding: 12px 10px; font-size: 0.75em; color: #666; background-color: #f9f9f9; text-align: center; line-height: 1.6; border-top: 1px solid #ddd;">
        인구는 현재 행정구역이 아닌 해당 연도 행정구역 기준, 그래프 최대 값은 15만 명<br/>
        1949-1990: 통계청 인구총조사, 1995-현재: 행정안전부 주민등록인구통계 (외국인 미포함)
    </div>
</div>
<p>
            총 인구는 <strong>102,204명</strong>으로, 군 단위 지자체 중에서는 상당히 큰 규모이다. 대현읍(3.6만), 신운읍(2.5만), 율주읍(1.9만) 등 읍 지역의 인구 집중도가 매우 높으며, 면 지역은 상대적으로 인구가 적다.
        </p>
<table class="data-table text-center text-xs w-full border-collapse border border-gray-300">
<thead>
<tr>
<th class="border border-gray-300 p-2 bg-gray-100">순번</th>
<th class="border border-gray-300 p-2 bg-gray-100">읍/면</th>
<th class="border border-gray-300 p-2 bg-gray-100">인구 (명)</th>
<th class="border border-gray-300 p-2 bg-gray-100">비고</th>
</tr>
</thead>
<tbody>
<tr><td class="border border-gray-300 p-2">1</td><td class="border border-gray-300 p-2 font-bold text-[#0044cc]">대현읍</td><td class="border border-gray-300 p-2">32,629</td><td class="border border-gray-300 p-2">군청 소재지 </td></tr>
<tr><td class="border border-gray-300 p-2">2</td><td class="border border-gray-300 p-2 font-bold text-[#0044cc]">신운읍</td><td class="border border-gray-300 p-2">25,101</td><td class="border border-gray-300 p-2"></td></tr>
<tr><td class="border border-gray-300 p-2">3</td><td class="border border-gray-300 p-2 font-bold text-[#0044cc]">율주읍</td><td class="border border-gray-300 p-2">19,101</td><td class="border border-gray-300 p-2"></td></tr>
<tr><td class="border border-gray-300 p-2">4</td><td class="border border-gray-300 p-2">조건면</td><td class="border border-gray-300 p-2">5,101</td><td class="border border-gray-300 p-2"></td></tr>
<tr><td class="border border-gray-300 p-2">5</td><td class="border border-gray-300 p-2">육산면</td><td class="border border-gray-300 p-2">4,698</td><td class="border border-gray-300 p-2"></td></tr>
<tr><td class="border border-gray-300 p-2">6</td><td class="border border-gray-300 p-2">우곡면</td><td class="border border-gray-300 p-2">3,295</td><td class="border border-gray-300 p-2"></td></tr>
<tr><td class="border border-gray-300 p-2">7</td><td class="border border-gray-300 p-2">이율면</td><td class="border border-gray-300 p-2">2,892</td><td class="border border-gray-300 p-2"></td></tr>
<tr><td class="border border-gray-300 p-2">8</td><td class="border border-gray-300 p-2">덕신면</td><td class="border border-gray-300 p-2">2,489</td><td class="border border-gray-300 p-2"></td></tr>
<tr><td class="border border-gray-300 p-2">9</td><td class="border border-gray-300 p-2">채산면</td><td class="border border-gray-300 p-2">2,086</td><td class="border border-gray-300 p-2"></td></tr>
<tr><td class="border border-gray-300 p-2">10</td><td class="border border-gray-300 p-2">무천면</td><td class="border border-gray-300 p-2">1,873</td><td class="border border-gray-300 p-2"></td></tr>
<tr><td class="border border-gray-300 p-2">11</td><td class="border border-gray-300 p-2">강운면</td><td class="border border-gray-300 p-2">1,599</td><td class="border border-gray-300 p-2"></td></tr>
<tr><td class="border border-gray-300 p-2">12</td><td class="border border-gray-300 p-2">군선면</td><td class="border border-gray-300 p-2">1,340</td><td class="border border-gray-300 p-2">매산군 인구 최하위</td></tr>
<tr class="font-bold bg-gray-100">
<td class="border border-gray-300 p-2" colspan="2">총합 (3읍 9면)</td>
<td class="border border-gray-300 p-2 text-[#bb0033]">102,204</td>
<td class="border border-gray-300 p-2">-</td>
</tr>
</tbody>
</table>

        
        <!-- 신규 2026.4 읍면동 막대그래프 -->
        <div style="margin: 30px auto; border: 2px solid #A0FFF9; border-radius: 4px; background-color: #fff; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <div style="background-color: #A0FFF9; color: white; padding: 12px; text-align: center; font-weight: bold; font-size: 1.1em;">
                덕빈남도 매산군 읍면동별 인구 통계
            </div>
            <div style="display: flex; flex-direction: column;">
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 65.9%; background-color: #A0FFF9;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">대현읍 32,948명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 49.4%; background-color: #A0FFF9;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">신운읍 24,682명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 40.0%; background-color: #A0FFF9;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">율주읍 19,999명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 9.8%; background-color: #A0FFF9;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">조건면 4,891명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 9.0%; background-color: #A0FFF9;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">육산면 4,512명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 7.6%; background-color: #A0FFF9;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">이율면 3,821명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 6.4%; background-color: #A0FFF9;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">우곡면 3,214명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 4.8%; background-color: #A0FFF9;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">덕신면 2,412명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 4.1%; background-color: #A0FFF9;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">채산면 2,027명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 3.7%; background-color: #A0FFF9;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">강운면 1,832명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 3.2%; background-color: #A0FFF9;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">무천면 1,600명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 2.6%; background-color: #A0FFF9;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">군선면 1,283명</div>
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
                        <th style="background-color: #A0FFF9; color: white; padding: 10px; border: 1px solid #ccc;">광역시도</th>
                        <th style="background-color: #A0FFF9; color: white; padding: 10px; border: 1px solid #ccc;">시군구</th>
                        <th style="background-color: #A0FFF9; color: white; padding: 10px; border: 1px solid #ccc;">읍면동</th>
                        <th style="background-color: #A0FFF9; color: white; padding: 10px; border: 1px solid #ccc;">합계 : 2026.4</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="background-color: #f1f3f5; font-weight: bold;">
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">매산군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">-</td>
                        <td style="padding: 8px; border: 1px solid #ccc; color: #d6001c;">103,221</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">매산군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">대현읍</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">32,948</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">매산군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">신운읍</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">24,682</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">매산군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">율주읍</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">19,999</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">매산군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">조건면</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">4,891</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">매산군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">육산면</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">4,512</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">매산군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">이율면</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">3,821</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">매산군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">우곡면</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">3,214</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">매산군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕신면</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">2,412</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">매산군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">채산면</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">2,027</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">매산군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">강운면</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">1,832</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">매산군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">무천면</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">1,600</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">매산군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">군선면</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">1,283</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- 연도별 변천사 종합 표 (통합) -->
        <div style="margin: 30px auto; overflow-x: auto;">
            <div style="font-weight: bold; margin-bottom: 10px; font-size: 1.1em; text-align: center;">연도별 행정구역 인구 변천사 종합표</div>
            <table style="width: max-content !important; min-width: 100% !important; table-layout: auto !important; border-collapse: collapse; text-align: right; font-size: 0.75em; white-space: nowrap; border: 1px solid #ccc;">
                <thead>
                    <tr style="background-color: #A0FFF9; color: white; text-align: center;">
                        <th style="padding: 8px; border: 1px solid #ccc;">구분</th><th style="padding: 8px; border: 1px solid #ccc;">1966년</th><th style="padding: 8px; border: 1px solid #ccc;">1970년</th><th style="padding: 8px; border: 1px solid #ccc;">1975년</th><th style="padding: 8px; border: 1px solid #ccc;">1980년</th><th style="padding: 8px; border: 1px solid #ccc;">1985년</th><th style="padding: 8px; border: 1px solid #ccc;">1990년</th><th style="padding: 8px; border: 1px solid #ccc;">1995년</th><th style="padding: 8px; border: 1px solid #ccc;">2000년</th><th style="padding: 8px; border: 1px solid #ccc;">2005년</th><th style="padding: 8px; border: 1px solid #ccc;">2010년</th><th style="padding: 8px; border: 1px solid #ccc;">2015년</th><th style="padding: 8px; border: 1px solid #ccc;">2020년</th><th style="padding: 8px; border: 1px solid #ccc;">2025년</th><th style="padding: 8px; border: 1px solid #ccc;">2026.4</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="background-color: #f1f3f5; font-weight: bold;"><td style="padding: 6px; border: 1px solid #ccc; text-align: center; color: #555;">덕빈남도 (참고)</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2107862</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2136197</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2161395</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2136141</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2119803</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2115803</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2083724</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2061567</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2044060</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2034003</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2041389</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2029083</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2015432</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2017439</td></tr>
                    <tr style="background-color: #fdfaf5; font-weight: bold;"><td style="padding: 6px; border: 1px solid #ccc; text-align: center;">매산군</td><td style="padding: 6px; border: 1px solid #ccc;">85644</td><td style="padding: 6px; border: 1px solid #ccc;">98193</td><td style="padding: 6px; border: 1px solid #ccc;">102325</td><td style="padding: 6px; border: 1px solid #ccc;">105293</td><td style="padding: 6px; border: 1px solid #ccc;">110766</td><td style="padding: 6px; border: 1px solid #ccc;">114497</td><td style="padding: 6px; border: 1px solid #ccc;">111283</td><td style="padding: 6px; border: 1px solid #ccc;">105293</td><td style="padding: 6px; border: 1px solid #ccc;">110099</td><td style="padding: 6px; border: 1px solid #ccc;">111493</td><td style="padding: 6px; border: 1px solid #ccc;">107099</td><td style="padding: 6px; border: 1px solid #ccc;">100954</td><td style="padding: 6px; border: 1px solid #ccc;">102204</td><td style="padding: 6px; border: 1px solid #ccc; color:#d6001c;">103,221</td></tr>
                </tbody>
            </table>
        </div>
    </div>
    `;
    container.innerHTML = html;
}
