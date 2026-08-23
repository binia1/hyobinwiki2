/**
 * 덕빈북도 서진시 인구 추이 및 읍면동별 통계 테이블 생성 함수
 */
function render_서진시_PopTable(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const html = `
    <div class="서진시-pop-wrapper" style="font-family: 'Noto Sans KR', sans-serif; color: #333; max-width: 900px; margin: 0 auto;">
        
        <!-- 원본 HTML 내용 그대로 유지 (방천군, 합산 차트 등 손실 없음) -->
        <h3 class="text-xl font-bold mt-4 mb-2" id="s-5-4">5.4. 인구</h3><div id="pop-chart-서진시" style="margin: 20px auto; max-width: 480px; border: 2px solid #9CA5B9; border-radius: 4px; background-color: #fff; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
<div style="padding: 15px 10px; border-bottom: 1px solid #9CA5B9; text-align: center; background-color: #fff;">
<div style="display: flex; align-items: center; justify-content: center; gap: 8px;">
<span style="font-size: 1.1em; font-weight: 900; color: #111;">덕빈북도 서진시 인구 추이</span>
</div>
<div style="font-size: 0.8em; color: #666; margin-top: 5px;">(1949년~현재)</div>
</div>
<div style="display: flex; flex-direction: column;">
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 77.6%; background-color: #9CA5B9; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                1949년 162,991명 
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 86.8%; background-color: #9CA5B9; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                1955년 182,318명 
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 99.4%; background-color: #9CA5B9; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                1960년 208,843명 (정점)
            </div>
</div>
<div style="padding: 10px; font-size: 0.85em; background-color: #fff; color: #333; border-bottom: 1px solid #fff; line-height: 1.5; text-align: center;">
<span style="color: #0066cc;">1963년 1월 1일</span> 상안군 서진읍 → <span style="color: #0066cc; font-weight: bold;">덕빈북도 서진시</span> 승격 분리
        </div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 49.1%; background-color: #9CA5B9; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                1966년 103,234명 
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 63.2%; background-color: #9CA5B9; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                1970년 132,812명 
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 72.7%; background-color: #9CA5B9; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                1975년 152,832명 
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 82.4%; background-color: #9CA5B9; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                1980년 173,231명 
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 84.4%; background-color: #9CA5B9; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                1985년 177,382명 
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 76.5%; background-color: #9CA5B9; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                1990년 160,665명 
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 72.5%; background-color: #9CA5B9; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                1995년 152,306명 
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 70.5%; background-color: #9CA5B9; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                2000년 148,127명 
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 68.5%; background-color: #9CA5B9; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                2005년 143,947명 
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 64.5%; background-color: #9CA5B9; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                2010년 135,588명 
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 60.5%; background-color: #9CA5B9; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                2015년 127,229명 
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 56.6%; background-color: #9CA5B9; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                2020년 118,870명 
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 52.6%; background-color: #9CA5B9; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                2025년 110,511명 
            </div>
</div>
</div>
<div style="padding: 12px 10px; font-size: 0.75em; color: #666; background-color: #f9f9f9; text-align: center; line-height: 1.6; border-top: 1px solid #ddd;">
        인구는 현재 행정구역이 아닌 해당 연도 행정구역 기준, 그래프 최대 값은 21만 명<br/>
        1949-1990: 통계청 인구총조사, 1995-현재: 행정안전부 주민등록인구통계 (외국인 미포함)
    </div>
</div>
<p class="mb-2 leading-relaxed">서진시의 총 인구는 110,511명이며, 덕빈북도 내에서도 인구 규모가 작은 도시에 해당한다. 청년층 유출로 인한 고령화 문제가 심각한 수준이다.</p>
<table class="w-full max-w-2xl text-center text-sm border-collapse mb-4 shadow-sm">
<thead>
<tr style="background-color: var(--wiki-main); color: white;"><th class="border p-2">행정동</th><th class="border p-2">인구(명)</th><th class="border p-2">비고</th></tr>
</thead>
<tbody>
<tr><td class="border p-2 bg-blue-50 font-bold text-blue-700">아은3동</td><td class="border p-2 font-bold text-blue-700">20,133</td><td class="border p-2 text-left">시 최대 인구 밀집 지역 (신시가지 아파트 단지)</td></tr>
<tr><td class="border p-2">서진4동</td><td class="border p-2">14,445</td><td class="border p-2 text-left">서진권 내 신규 주거 지구</td></tr>
<tr><td class="border p-2">서목동</td><td class="border p-2">14,332</td><td class="border p-2 text-left">구도심 상업 중심</td></tr>
<tr><td class="border p-2">서진2·3동</td><td class="border p-2">10,481</td><td class="border p-2 text-left">구도심 노후 주거 지역</td></tr>
<tr><td class="border p-2 bg-blue-50">아은2동</td><td class="border p-2">10,412</td><td class="border p-2 text-left">신시가지 주거 및 교육 중심</td></tr>
<tr><td class="border p-2">진목2동</td><td class="border p-2">10,235</td><td class="border p-2 text-left">산업단지 배후 주거지</td></tr>
<tr><td class="border p-2 bg-blue-50">아은1동</td><td class="border p-2">8,289</td><td class="border p-2 text-left">신시가지 주거 지역</td></tr>
<tr><td class="border p-2">서진1동</td><td class="border p-2">7,763</td><td class="border p-2 text-left">구도심 행정 및 항만 중심</td></tr>
<tr><td class="border p-2">진목1동</td><td class="border p-2">6,214</td><td class="border p-2 text-left">산업단지 배후 주거지</td></tr>
<tr><td class="border p-2">사추동</td><td class="border p-2">4,986</td><td class="border p-2 text-left">외곽 지역</td></tr>
<tr><td class="border p-2 text-red-600 font-bold bg-red-50">남진재동</td><td class="border p-2 text-red-600 font-bold bg-red-50">3,221</td><td class="border p-2 text-left text-xs bg-red-50">외곽 지역 (한때 탄광촌/물류지로 번성했으나 급감 중)</td></tr>
<tr class="font-bold bg-gray-100"><td class="border p-2">서진시 전체</td><td class="border p-2">110,511</td><td class="border p-2 text-left">과거 최대 인구 약 20만 명</td></tr>
</tbody>
</table>

        
        <!-- 신규 2026.4 읍면동 막대그래프 -->
        <div style="margin: 30px auto; border: 2px solid #9CA5B9; border-radius: 4px; background-color: #fff; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <div style="background-color: #9CA5B9; color: white; padding: 12px; text-align: center; font-weight: bold; font-size: 1.1em;">
                덕빈북도 서진시 읍면동별 인구 통계
            </div>
            <div style="display: flex; flex-direction: column;">
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 41.3%; background-color: #9CA5B9;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">아은3동 20,650명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 27.9%; background-color: #9CA5B9;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">서진4동 13,950명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 27.4%; background-color: #9CA5B9;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">서목동 13,680명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 21.1%; background-color: #9CA5B9;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">아은2동 10,550명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 20.0%; background-color: #9CA5B9;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">서진2,3동 10,020명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 19.5%; background-color: #9CA5B9;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">진목2동 9,750명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 16.8%; background-color: #9CA5B9;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">아은1동 8,380명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 14.8%; background-color: #9CA5B9;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">서진1동 7,380명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 11.7%; background-color: #9CA5B9;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">진목1동 5,850명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 9.4%; background-color: #9CA5B9;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">사추동 4,680명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 5.6%; background-color: #9CA5B9;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">남진재동 2,820명</div>
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
                        <th style="background-color: #9CA5B9; color: white; padding: 10px; border: 1px solid #ccc;">광역시도</th>
                        <th style="background-color: #9CA5B9; color: white; padding: 10px; border: 1px solid #ccc;">시군구</th>
                        <th style="background-color: #9CA5B9; color: white; padding: 10px; border: 1px solid #ccc;">읍면동</th>
                        <th style="background-color: #9CA5B9; color: white; padding: 10px; border: 1px solid #ccc;">합계 : 2026.4</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="background-color: #f1f3f5; font-weight: bold;">
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">서진시</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">-</td>
                        <td style="padding: 8px; border: 1px solid #ccc; color: #d6001c;">107,710</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">서진시</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">아은3동</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">20,650</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">서진시</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">서진4동</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">13,950</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">서진시</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">서목동</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">13,680</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">서진시</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">아은2동</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">10,550</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">서진시</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">서진2,3동</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">10,020</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">서진시</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">진목2동</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">9,750</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">서진시</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">아은1동</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">8,380</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">서진시</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">서진1동</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">7,380</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">서진시</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">진목1동</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">5,850</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">서진시</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">사추동</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">4,680</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">서진시</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">남진재동</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">2,820</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- 연도별 변천사 종합 표 (통합) -->
        <div style="margin: 30px auto; overflow-x: auto;">
            <div style="font-weight: bold; margin-bottom: 10px; font-size: 1.1em; text-align: center;">연도별 행정구역 인구 변천사 종합표</div>
            <table style="width: max-content !important; min-width: 100% !important; table-layout: auto !important; border-collapse: collapse; text-align: right; font-size: 0.75em; white-space: nowrap; border: 1px solid #ccc;">
                <thead>
                    <tr style="background-color: #9CA5B9; color: white; text-align: center;">
                        <th style="padding: 8px; border: 1px solid #ccc;">구분</th><th style="padding: 8px; border: 1px solid #ccc;">1966년</th><th style="padding: 8px; border: 1px solid #ccc;">1970년</th><th style="padding: 8px; border: 1px solid #ccc;">1975년</th><th style="padding: 8px; border: 1px solid #ccc;">1980년</th><th style="padding: 8px; border: 1px solid #ccc;">1985년</th><th style="padding: 8px; border: 1px solid #ccc;">1990년</th><th style="padding: 8px; border: 1px solid #ccc;">1995년</th><th style="padding: 8px; border: 1px solid #ccc;">2000년</th><th style="padding: 8px; border: 1px solid #ccc;">2005년</th><th style="padding: 8px; border: 1px solid #ccc;">2010년</th><th style="padding: 8px; border: 1px solid #ccc;">2015년</th><th style="padding: 8px; border: 1px solid #ccc;">2020년</th><th style="padding: 8px; border: 1px solid #ccc;">2025년</th><th style="padding: 8px; border: 1px solid #ccc;">2026.4</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="background-color: #f1f3f5; font-weight: bold;"><td style="padding: 6px; border: 1px solid #ccc; text-align: center; color: #555;">덕빈북도 (참고)</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">3608524</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">4021985</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">4475727</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">4715950</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">3132578</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">3259806</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">3160756</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">3226894</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">3275615</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">3351587</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">3390580</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">3462447</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">3523123</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">3535361</td></tr>
                    <tr style="background-color: #fdfaf5; font-weight: bold;"><td style="padding: 6px; border: 1px solid #ccc; text-align: center;">서진시</td><td style="padding: 6px; border: 1px solid #ccc;">103234</td><td style="padding: 6px; border: 1px solid #ccc;">132812</td><td style="padding: 6px; border: 1px solid #ccc;">152832</td><td style="padding: 6px; border: 1px solid #ccc;">173231</td><td style="padding: 6px; border: 1px solid #ccc;">177382</td><td style="padding: 6px; border: 1px solid #ccc;">160665</td><td style="padding: 6px; border: 1px solid #ccc;">152306</td><td style="padding: 6px; border: 1px solid #ccc;">148127</td><td style="padding: 6px; border: 1px solid #ccc;">143947</td><td style="padding: 6px; border: 1px solid #ccc;">135588</td><td style="padding: 6px; border: 1px solid #ccc;">127229</td><td style="padding: 6px; border: 1px solid #ccc;">118870</td><td style="padding: 6px; border: 1px solid #ccc;">110511</td><td style="padding: 6px; border: 1px solid #ccc; color:#d6001c;">107,710</td></tr>
                </tbody>
            </table>
        </div>
    </div>
    `;
    container.innerHTML = html;
}
