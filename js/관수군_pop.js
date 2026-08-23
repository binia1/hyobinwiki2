/**
 * 덕빈남도 관수군 인구 추이 및 읍면동별 통계 테이블 생성 함수
 */
function render_관수군_PopTable(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const html = `
    <div class="관수군-pop-wrapper" style="font-family: 'Noto Sans KR', sans-serif; color: #333; max-width: 900px; margin: 0 auto;">
        
        <!-- 원본 HTML 내용 그대로 유지 (방천군, 합산 차트 등 손실 없음) -->
        <h2 id="s-5">5. 인구</h2><div id="pop-chart-관수군" style="margin: 20px auto; max-width: 480px; border: 2px solid #e49dfd; border-radius: 4px; font-family: 'Noto Sans KR', sans-serif; background-color: #fff; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
<div style="padding: 15px 10px; border-bottom: 1px solid #e49dfd; text-align: center; background-color: #fff;">
<div style="display: flex; align-items: center; justify-content: center; gap: 8px;">
<span style="font-size: 1.1em; font-weight: 900; color: #111;">덕빈남도 관수군 인구 추이</span>
</div>
<div style="font-size: 0.8em; color: #666; margin-top: 5px;">(1949년~현재)</div>
</div>
<div style="display: flex; flex-direction: column;">
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 47.9%; background-color: #e49dfd; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                1949년 71,938명
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 63.9%; background-color: #e49dfd; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                1955년 95,874명
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 75.2%; background-color: #e49dfd; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                1960년 112,938명
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 99.7%; background-color: #e49dfd; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                1966년 149,698명  (정점)
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 89.2%; background-color: #e49dfd; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                1970년 133,912명
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 84.2%; background-color: #e49dfd; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                1975년 126,366명
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 74.1%; background-color: #e49dfd; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                1980년 111,293명
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 63.7%; background-color: #e49dfd; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                1985년 95,552명
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 58.8%; background-color: #e49dfd; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                1990년 88,293명
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 56.1%; background-color: #e49dfd; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                1995년 84,215명
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 56.8%; background-color: #e49dfd; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                2000년 85,293명
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 55.6%; background-color: #e49dfd; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                2005년 83,445명
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 53.4%; background-color: #e49dfd; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                2010년 80,143명
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 47.1%; background-color: #e49dfd; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                2015년 70,676명
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 42.4%; background-color: #e49dfd; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                2020년 63,634명
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 33.4%; background-color: #e49dfd; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                2025년 50,231명
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 33.5%; background-color: #e49dfd; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                2026년 4월 50,322명
            </div>
</div>
</div>
<div style="padding: 12px 10px; font-size: 0.75em; color: #666; background-color: #f9f9f9; text-align: center; line-height: 1.6; border-top: 1px solid #ddd;">
        인구는 현재 행정구역이 아닌 해당 연도 행정구역 기준, 그래프 최대 값은 15만 명<br/>
        1949-1990: 통계청 인구총조사, 1995-현재: 행정안전부 주민등록인구통계 (외국인 미포함)
    </div>
</div>
<p>
            관수군의 총인구는 <strong>50,231명</strong>으로, 덕빈남도 내 중위권의 인구 규모를 갖는다. 인구의 절반 이상(68.5%)이 두 읍 지역(<a class="wiki-link" href="관수읍.html">관수읍</a> 18,417명, <a class="wiki-link" href="북원읍.html">북원읍</a> 16,014명)에 집중되어 있다. 인구가 가장 적은 곳은 <strong><a class="wiki-link" href="원단면.html">원단면</a>(717명)</strong>으로, 소멸 위험이 높은 지역이다.
        </p>
<table class="data-table text-center text-xs">
<thead>
<tr><th>행정구역</th><th>구분</th><th>인구 (명)</th><th>인구 비중 (%)</th></tr>
</thead>
<tbody>
<tr><td><a class="wiki-link" href="관수읍.html">관수읍</a></td><td>읍</td><td>18,417</td><td>36.7%</td></tr>
<tr><td><a class="wiki-link" href="북원읍.html">북원읍</a></td><td>읍</td><td>16,014</td><td>31.9%</td></tr>
<tr><td><a class="wiki-link" href="금담면.html">금담면</a></td><td>면</td><td>4,136</td><td>8.2%</td></tr>
<tr><td><a class="wiki-link" href="금진면.html">금진면</a></td><td>면</td><td>2,733</td><td>5.4%</td></tr>
<tr><td><a class="wiki-link" href="여원면.html">여원면</a></td><td>면</td><td>2,329</td><td>4.6%</td></tr>
<tr><td><a class="wiki-link" href="극산면.html">극산면</a></td><td>면</td><td>1,926</td><td>3.8%</td></tr>
<tr><td><a class="wiki-link" href="황강면.html">황강면</a></td><td>면</td><td>1,523</td><td>3.0%</td></tr>
<tr><td><a class="wiki-link" href="실주면.html">실주면</a></td><td>면</td><td>1,313</td><td>2.6%</td></tr>
<tr><td><a class="wiki-link" href="조원면.html">조원면</a></td><td>면</td><td>1,123</td><td>2.2%</td></tr>
<tr><td><a class="wiki-link" href="원단면.html">원단면</a></td><td>면</td><td>717</td><td>1.4%</td></tr>
<tr class="font-bold bg-gray-100"><td>총합</td><td>2읍 8면</td><td>50,231</td><td>100.0%</td></tr>
</tbody>
</table>

        
        <!-- 신규 2026.4 읍면동 막대그래프 -->
        <div style="margin: 30px auto; border: 2px solid #e49dfd; border-radius: 4px; background-color: #fff; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <div style="background-color: #e49dfd; color: white; padding: 12px; text-align: center; font-weight: bold; font-size: 1.1em;">
                덕빈남도 관수군 읍면동별 인구 통계
            </div>
            <div style="display: flex; flex-direction: column;">
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 37.4%; background-color: #e49dfd;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">관수읍 18,721명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 32.4%; background-color: #e49dfd;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">북원읍 16,212명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 8.0%; background-color: #e49dfd;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">금담면 3,991명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 5.4%; background-color: #e49dfd;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">금진면 2,684명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 4.5%; background-color: #e49dfd;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">여원면 2,261명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 3.8%; background-color: #e49dfd;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">극산면 1,883명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 2.9%; background-color: #e49dfd;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">황강면 1,444명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 2.6%; background-color: #e49dfd;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">실주면 1,279명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 2.1%; background-color: #e49dfd;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">조원면 1,066명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 1.6%; background-color: #e49dfd;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">원단면 781명</div>
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
                        <th style="background-color: #e49dfd; color: white; padding: 10px; border: 1px solid #ccc;">광역시도</th>
                        <th style="background-color: #e49dfd; color: white; padding: 10px; border: 1px solid #ccc;">시군구</th>
                        <th style="background-color: #e49dfd; color: white; padding: 10px; border: 1px solid #ccc;">읍면동</th>
                        <th style="background-color: #e49dfd; color: white; padding: 10px; border: 1px solid #ccc;">합계 : 2026.4</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="background-color: #f1f3f5; font-weight: bold;">
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">관수군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">-</td>
                        <td style="padding: 8px; border: 1px solid #ccc; color: #d6001c;">50,322</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">관수군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">관수읍</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">18,721</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">관수군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">북원읍</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">16,212</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">관수군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">금담면</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">3,991</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">관수군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">금진면</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">2,684</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">관수군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">여원면</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">2,261</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">관수군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">극산면</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">1,883</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">관수군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">황강면</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">1,444</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">관수군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">실주면</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">1,279</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">관수군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">조원면</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">1,066</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">관수군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">원단면</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">781</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- 연도별 변천사 종합 표 (통합) -->
        <div style="margin: 30px auto; overflow-x: auto;">
            <div style="font-weight: bold; margin-bottom: 10px; font-size: 1.1em; text-align: center;">연도별 행정구역 인구 변천사 종합표</div>
            <table style="width: max-content !important; min-width: 100% !important; table-layout: auto !important; border-collapse: collapse; text-align: right; font-size: 0.75em; white-space: nowrap; border: 1px solid #ccc;">
                <thead>
                    <tr style="background-color: #e49dfd; color: white; text-align: center;">
                        <th style="padding: 8px; border: 1px solid #ccc;">구분</th><th style="padding: 8px; border: 1px solid #ccc;">1966년</th><th style="padding: 8px; border: 1px solid #ccc;">1970년</th><th style="padding: 8px; border: 1px solid #ccc;">1975년</th><th style="padding: 8px; border: 1px solid #ccc;">1980년</th><th style="padding: 8px; border: 1px solid #ccc;">1985년</th><th style="padding: 8px; border: 1px solid #ccc;">1990년</th><th style="padding: 8px; border: 1px solid #ccc;">1995년</th><th style="padding: 8px; border: 1px solid #ccc;">2000년</th><th style="padding: 8px; border: 1px solid #ccc;">2005년</th><th style="padding: 8px; border: 1px solid #ccc;">2010년</th><th style="padding: 8px; border: 1px solid #ccc;">2015년</th><th style="padding: 8px; border: 1px solid #ccc;">2020년</th><th style="padding: 8px; border: 1px solid #ccc;">2025년</th><th style="padding: 8px; border: 1px solid #ccc;">2026.4</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="background-color: #f1f3f5; font-weight: bold;"><td style="padding: 6px; border: 1px solid #ccc; text-align: center; color: #555;">덕빈남도 (참고)</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2107862</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2136197</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2161395</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2136141</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2119803</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2115803</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2083724</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2061567</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2044060</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2034003</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2041389</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2029083</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2015432</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2017439</td></tr>
                    <tr style="background-color: #fdfaf5; font-weight: bold;"><td style="padding: 6px; border: 1px solid #ccc; text-align: center;">관수군</td><td style="padding: 6px; border: 1px solid #ccc;">149698</td><td style="padding: 6px; border: 1px solid #ccc;">133912</td><td style="padding: 6px; border: 1px solid #ccc;">126366</td><td style="padding: 6px; border: 1px solid #ccc;">111293</td><td style="padding: 6px; border: 1px solid #ccc;">95552</td><td style="padding: 6px; border: 1px solid #ccc;">88293</td><td style="padding: 6px; border: 1px solid #ccc;">84215</td><td style="padding: 6px; border: 1px solid #ccc;">85293</td><td style="padding: 6px; border: 1px solid #ccc;">83445</td><td style="padding: 6px; border: 1px solid #ccc;">80143</td><td style="padding: 6px; border: 1px solid #ccc;">70676</td><td style="padding: 6px; border: 1px solid #ccc;">63634</td><td style="padding: 6px; border: 1px solid #ccc;">50231</td><td style="padding: 6px; border: 1px solid #ccc; color:#d6001c;">50,322</td></tr>
                </tbody>
            </table>
        </div>
    </div>
    `;
    container.innerHTML = html;
}
