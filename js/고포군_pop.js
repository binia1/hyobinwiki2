/**
 * 덕빈남도 고포군 인구 추이 및 읍면동별 통계 테이블 생성 함수
 */
function render_고포군_PopTable(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const html = `
    <div class="고포군-pop-wrapper" style="font-family: 'Noto Sans KR', sans-serif; color: #333; max-width: 900px; margin: 0 auto;">
        
        <!-- 원본 HTML 내용 그대로 유지 (방천군, 합산 차트 등 손실 없음) -->
        <h2 id="s-5">5. 인구</h2><div id="pop-chart-고포군" style="margin: 20px auto; max-width: 480px; border: 2px solid #B2FFDD; border-radius: 4px; font-family: 'Noto Sans KR', sans-serif; background-color: #fff; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
<div style="padding: 15px 10px; border-bottom: 1px solid #B2FFDD; text-align: center; background-color: #fff;">
<div style="display: flex; align-items: center; justify-content: center; gap: 8px;">
<span style="font-size: 1.1em; font-weight: 900; color: #111;">덕빈남도 고포군 인구 추이</span>
</div>
<div style="font-size: 0.8em; color: #666; margin-top: 5px;">(1949년~현재)</div>
</div>
<div style="display: flex; flex-direction: column;">
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 61.4%; background-color: #B2FFDD; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                1949년 55,293명
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 68.1%; background-color: #B2FFDD; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                1955년 61,332명
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 75.9%; background-color: #B2FFDD; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                1960년 68,293명
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 86.8%; background-color: #B2FFDD; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                1966년 78,118명
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 89.9%; background-color: #B2FFDD; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                1970년 80,926명  (정점)
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 85.3%; background-color: #B2FFDD; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                1975년 76,795명
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 87.0%; background-color: #B2FFDD; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                1980년 78,308명
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 81.2%; background-color: #B2FFDD; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                1985년 73,051명
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 78.6%; background-color: #B2FFDD; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                1990년 70,739명
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 74.3%; background-color: #B2FFDD; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                1995년 66,834명
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 72.9%; background-color: #B2FFDD; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                2000년 65,646명
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 67.3%; background-color: #B2FFDD; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                2005년 60,595명
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 58.7%; background-color: #B2FFDD; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                2010년 52,823명
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 47.4%; background-color: #B2FFDD; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                2015년 42,692명
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 37.7%; background-color: #B2FFDD; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                2020년 33,932명
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 28.0%; background-color: #B2FFDD; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                2025년 25,231명
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 27.4%; background-color: #B2FFDD; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                2026년 4월 24,659명
            </div>
</div>
</div>
<div style="padding: 12px 10px; font-size: 0.75em; color: #666; background-color: #f9f9f9; text-align: center; line-height: 1.6; border-top: 1px solid #ddd;">
        인구는 현재 행정구역이 아닌 해당 연도 행정구역 기준, 그래프 최대 값은 9만 명<br/>
        1949-1990: 통계청 인구총조사, 1995-현재: 행정안전부 주민등록인구통계 (외국인 미포함)
    </div>
</div>
<p>
            고포군의 총인구는 <strong>25,231명</strong>으로, 덕빈남도 내 최저 인구 기록을 가지고 있다. 인구의 64.6%가 군청 소재지인 <strong><a class="wiki-link" href="고포읍.html">고포읍</a>(16,311명)</strong>에 집중되어 있어, 도시화가 극도로 편중된 구조를 보인다. 나머지 면 지역은 모두 인구 3,000명 미만의 작은 섬 마을로 구성되어 있으며, <strong><a class="wiki-link" href="신성면.html">신성면</a>(1,164명)</strong>은 인구가 가장 적어 소규모 섬 개발이 시급한 상황이다.
        </p>
<table class="data-table text-center text-xs">
<thead>
<tr><th>행정구역</th><th>구분</th><th>인구 (명)</th><th>인구 비중 (%)</th></tr>
</thead>
<tbody>
<tr><td><a class="wiki-link" href="고포읍.html">고포읍</a></td><td>읍</td><td>16,311</td><td>64.6%</td></tr>
<tr><td><a class="wiki-link" href="동원면.html">동원면</a></td><td>면</td><td>2,280</td><td>9.0%</td></tr>
<tr><td><a class="wiki-link" href="포선면.html">포선면</a></td><td>면</td><td>2,055</td><td>8.1%</td></tr>
<tr><td><a class="wiki-link" href="대산면.html">대산면</a></td><td>면</td><td>1,822</td><td>7.2%</td></tr>
<tr><td><a class="wiki-link" href="북부면.html">북부면</a></td><td>면</td><td>1,599</td><td>6.3%</td></tr>
<tr><td><a class="wiki-link" href="신성면.html">신성면</a></td><td>면</td><td>1,164</td><td>4.6%</td></tr>
<tr class="font-bold bg-gray-100"><td>총합</td><td>1읍 5면</td><td>25,231</td><td>100.0%</td></tr>
</tbody>
</table>

        
        <!-- 신규 2026.4 읍면동 막대그래프 -->
        <div style="margin: 30px auto; border: 2px solid #B2FFDD; border-radius: 4px; background-color: #fff; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <div style="background-color: #B2FFDD; color: white; padding: 12px; text-align: center; font-weight: bold; font-size: 1.1em;">
                덕빈남도 고포군 읍면동별 인구 통계
            </div>
            <div style="display: flex; flex-direction: column;">
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 31.9%; background-color: #B2FFDD;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">고포읍 15,943명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 4.5%; background-color: #B2FFDD;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">동원면 2,227명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 4.1%; background-color: #B2FFDD;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">포선면 2,027명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 3.6%; background-color: #B2FFDD;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">대산면 1,781명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 3.1%; background-color: #B2FFDD;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">북부면 1,548명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 2.3%; background-color: #B2FFDD;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">신성면 1,133명</div>
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
                        <th style="background-color: #B2FFDD; color: white; padding: 10px; border: 1px solid #ccc;">광역시도</th>
                        <th style="background-color: #B2FFDD; color: white; padding: 10px; border: 1px solid #ccc;">시군구</th>
                        <th style="background-color: #B2FFDD; color: white; padding: 10px; border: 1px solid #ccc;">읍면동</th>
                        <th style="background-color: #B2FFDD; color: white; padding: 10px; border: 1px solid #ccc;">합계 : 2026.4</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="background-color: #f1f3f5; font-weight: bold;">
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">고포군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">-</td>
                        <td style="padding: 8px; border: 1px solid #ccc; color: #d6001c;">24,659</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">고포군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">고포읍</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">15,943</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">고포군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">동원면</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">2,227</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">고포군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">포선면</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">2,027</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">고포군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">대산면</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">1,781</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">고포군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">북부면</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">1,548</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">고포군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">신성면</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">1,133</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- 연도별 변천사 종합 표 (통합) -->
        <div style="margin: 30px auto; overflow-x: auto;">
            <div style="font-weight: bold; margin-bottom: 10px; font-size: 1.1em; text-align: center;">연도별 행정구역 인구 변천사 종합표</div>
            <table style="width: max-content !important; min-width: 100% !important; table-layout: auto !important; border-collapse: collapse; text-align: right; font-size: 0.75em; white-space: nowrap; border: 1px solid #ccc;">
                <thead>
                    <tr style="background-color: #B2FFDD; color: white; text-align: center;">
                        <th style="padding: 8px; border: 1px solid #ccc;">구분</th><th style="padding: 8px; border: 1px solid #ccc;">1966년</th><th style="padding: 8px; border: 1px solid #ccc;">1970년</th><th style="padding: 8px; border: 1px solid #ccc;">1975년</th><th style="padding: 8px; border: 1px solid #ccc;">1980년</th><th style="padding: 8px; border: 1px solid #ccc;">1985년</th><th style="padding: 8px; border: 1px solid #ccc;">1990년</th><th style="padding: 8px; border: 1px solid #ccc;">1995년</th><th style="padding: 8px; border: 1px solid #ccc;">2000년</th><th style="padding: 8px; border: 1px solid #ccc;">2005년</th><th style="padding: 8px; border: 1px solid #ccc;">2010년</th><th style="padding: 8px; border: 1px solid #ccc;">2015년</th><th style="padding: 8px; border: 1px solid #ccc;">2020년</th><th style="padding: 8px; border: 1px solid #ccc;">2025년</th><th style="padding: 8px; border: 1px solid #ccc;">2026.4</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="background-color: #f1f3f5; font-weight: bold;"><td style="padding: 6px; border: 1px solid #ccc; text-align: center; color: #555;">덕빈남도 (참고)</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2107862</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2136197</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2161395</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2136141</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2119803</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2115803</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2083724</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2061567</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2044060</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2034003</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2041389</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2029083</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2015432</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2017439</td></tr>
                    <tr style="background-color: #fdfaf5; font-weight: bold;"><td style="padding: 6px; border: 1px solid #ccc; text-align: center;">고포군</td><td style="padding: 6px; border: 1px solid #ccc;">78118</td><td style="padding: 6px; border: 1px solid #ccc;">80926</td><td style="padding: 6px; border: 1px solid #ccc;">76795</td><td style="padding: 6px; border: 1px solid #ccc;">78308</td><td style="padding: 6px; border: 1px solid #ccc;">73051</td><td style="padding: 6px; border: 1px solid #ccc;">70739</td><td style="padding: 6px; border: 1px solid #ccc;">66834</td><td style="padding: 6px; border: 1px solid #ccc;">65646</td><td style="padding: 6px; border: 1px solid #ccc;">60595</td><td style="padding: 6px; border: 1px solid #ccc;">52823</td><td style="padding: 6px; border: 1px solid #ccc;">42692</td><td style="padding: 6px; border: 1px solid #ccc;">33932</td><td style="padding: 6px; border: 1px solid #ccc;">25231</td><td style="padding: 6px; border: 1px solid #ccc; color:#d6001c;">24,659</td></tr>
                </tbody>
            </table>
        </div>
    </div>
    `;
    container.innerHTML = html;
}
