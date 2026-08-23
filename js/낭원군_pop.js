/**
 * 덕빈북도 낭원군 인구 추이 및 읍면동별 통계 테이블 생성 함수
 */
function render_낭원군_PopTable(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const html = `
    <div class="낭원군-pop-wrapper" style="font-family: 'Noto Sans KR', sans-serif; color: #333; max-width: 900px; margin: 0 auto;">
        
        <!-- 원본 HTML 내용 그대로 유지 (방천군, 합산 차트 등 손실 없음) -->
        <h3 id="s-5-4">5.4. 인구</h3><div id="pop-chart-낭원군" style="margin: 20px auto; max-width: 480px; border: 2px solid #485EC6; border-radius: 4px; font-family: 'Noto Sans KR', sans-serif; background-color: #fff; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
<div style="padding: 15px 10px; border-bottom: 1px solid #485EC6; text-align: center; background-color: #fff;">
<div style="display: flex; align-items: center; justify-content: center; gap: 8px;">
<span style="font-size: 1.1em; font-weight: 900; color: #111;">덕빈북도 낭원군 인구 추이</span>
</div>
<div style="font-size: 0.8em; color: #666; margin-top: 5px;">(1949년~현재)</div>
</div>
<div style="display: flex; flex-direction: column;">
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 51.8%; background-color: #485EC6; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 3px rgba(0,0,0,0.8), -1px -1px 3px rgba(0,0,0,0.8); font-size: 0.9em; font-weight: bold;">
                1949년 77,737명
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 58.8%; background-color: #485EC6; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 3px rgba(0,0,0,0.8), -1px -1px 3px rgba(0,0,0,0.8); font-size: 0.9em; font-weight: bold;">
                1955년 88,190명
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 67.7%; background-color: #485EC6; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 3px rgba(0,0,0,0.8), -1px -1px 3px rgba(0,0,0,0.8); font-size: 0.9em; font-weight: bold;">
                1960년 101,556명
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 76.3%; background-color: #485EC6; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 3px rgba(0,0,0,0.8), -1px -1px 3px rgba(0,0,0,0.8); font-size: 0.9em; font-weight: bold;">
                1966년 114,521명
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 74.7%; background-color: #485EC6; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 3px rgba(0,0,0,0.8), -1px -1px 3px rgba(0,0,0,0.8); font-size: 0.9em; font-weight: bold;">
                1970년 112,031명
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 67.5%; background-color: #485EC6; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 3px rgba(0,0,0,0.8), -1px -1px 3px rgba(0,0,0,0.8); font-size: 0.9em; font-weight: bold;">
                1975년 101,231명
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 60.9%; background-color: #485EC6; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 3px rgba(0,0,0,0.8), -1px -1px 3px rgba(0,0,0,0.8); font-size: 0.9em; font-weight: bold;">
                1980년 91,402명
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 69.9%; background-color: #485EC6; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 3px rgba(0,0,0,0.8), -1px -1px 3px rgba(0,0,0,0.8); font-size: 0.9em; font-weight: bold;">
                1985년 104,921명
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 76.6%; background-color: #485EC6; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 3px rgba(0,0,0,0.8), -1px -1px 3px rgba(0,0,0,0.8); font-size: 0.9em; font-weight: bold;">
                1990년 114,921명
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 82.6%; background-color: #485EC6; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 3px rgba(0,0,0,0.8), -1px -1px 3px rgba(0,0,0,0.8); font-size: 0.9em; font-weight: bold;">
                1995년 123,949명
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 86.8%; background-color: #485EC6; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 3px rgba(0,0,0,0.8), -1px -1px 3px rgba(0,0,0,0.8); font-size: 0.9em; font-weight: bold;">
                2000년 130,212명
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 90.3%; background-color: #485EC6; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 3px rgba(0,0,0,0.8), -1px -1px 3px rgba(0,0,0,0.8); font-size: 0.9em; font-weight: bold;">
                2005년 135,503명
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 93.5%; background-color: #485EC6; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 3px rgba(0,0,0,0.8), -1px -1px 3px rgba(0,0,0,0.8); font-size: 0.9em; font-weight: bold;">
                2010년 140,321명
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 96.8%; background-color: #485EC6; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 3px rgba(0,0,0,0.8), -1px -1px 3px rgba(0,0,0,0.8); font-size: 0.9em; font-weight: bold;">
                2015년 145,212명
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 99.5%; background-color: #485EC6; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 3px rgba(0,0,0,0.8), -1px -1px 3px rgba(0,0,0,0.8); font-size: 0.9em; font-weight: bold;">
                2020년 149,202명
            </div>
</div>
<div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
<div style="position: absolute; top: 0; left: 0; height: 100%; width: 100.0%; background-color: #485EC6; z-index: 1;"></div>
<div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 3px rgba(0,0,0,0.8), -1px -1px 3px rgba(0,0,0,0.8); font-size: 0.9em; font-weight: bold;">
                2025년 149,864명  (정점)
            </div>
</div>
</div>
<div style="padding: 12px 10px; font-size: 0.75em; color: #666; background-color: #f9f9f9; text-align: center; line-height: 1.6; border-top: 1px solid #ddd;">
        인구는 현재 행정구역이 아닌 해당 연도 행정구역 기준, 그래프 최대 값은 15만 명<br/>
        1949-1990: 통계청 인구총조사, 1995-현재: 행정안전부 주민등록인구통계 (외국인 미포함)
    </div>
</div>
<p>총 인구 149,863명 중 읍 지역 인구가 109,211명(72.8%)에 달한다. 덕빈북도 내 군 단위 지역 중 인구 밀도가 가장 높으며 성장세가 매우 뚜렷하다.</p>
<table class="data-table text-center text-xs">
<thead>
<tr style="background-color: var(--wiki-main); color: #fff;"><th>행정구역</th><th>인구(명)</th><th>비율(%)</th><th>특징</th></tr>
</thead>
<tbody>
<tr><td>낭원읍</td><td>49,211</td><td>32.84%</td><td>군청 소재지, 최대 인구 지역</td></tr>
<tr><td>전포읍</td><td>41,332</td><td>27.58%</td><td>물류 및 산업 중심지</td></tr>
<tr><td>판주읍</td><td>20,122</td><td>13.43%</td><td>교통 거점</td></tr>
<tr><td>토진읍</td><td>10,221</td><td>6.82%</td><td>시 승격 대비 읍 승격</td></tr>
<tr><td>백성면</td><td>9,014</td><td>6.01%</td><td>농축산업 발달</td></tr>
<tr><td>내덕면</td><td>5,062</td><td>3.38%</td><td>자연 휴양지</td></tr>
<tr><td>명향면</td><td>3,212</td><td>2.14%</td><td>전통 마을</td></tr>
<tr><td>빙천면</td><td>2,421</td><td>1.62%</td><td>농업 지역</td></tr>
<tr><td>풍성면</td><td>2,411</td><td>1.61%</td><td>농업 지역</td></tr>
<tr><td>미전면</td><td>2,321</td><td>1.55%</td><td>농업 지역</td></tr>
<tr><td>상곡면</td><td>1,911</td><td>1.27%</td><td>농업 지역</td></tr>
<tr><td>초건면</td><td>1,422</td><td>0.95%</td><td>농업 지역</td></tr>
<tr><td>우입면</td><td>1,203</td><td>0.80%</td><td>농업 지역</td></tr>
<tr class="font-bold"><td>낭원군 합계</td><td>149,864</td><td>100.00%</td><td></td></tr>
</tbody>
</table>

        
        <!-- 신규 2026.4 읍면동 막대그래프 -->
        <div style="margin: 30px auto; border: 2px solid #485EC6; border-radius: 4px; background-color: #fff; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <div style="background-color: #485EC6; color: white; padding: 12px; text-align: center; font-weight: bold; font-size: 1.1em;">
                덕빈북도 낭원군 읍면동별 인구 통계
            </div>
            <div style="display: flex; flex-direction: column;">
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 99.1%; background-color: #485EC6;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">낭원읍 49,542명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 82.8%; background-color: #485EC6;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">전포읍 41,421명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 40.3%; background-color: #485EC6;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">판주읍 20,132명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 20.4%; background-color: #485EC6;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">토진읍 10,220명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 16.6%; background-color: #485EC6;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">백성면 8,322명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 13.0%; background-color: #485EC6;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">내덕면 6,521명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 6.4%; background-color: #485EC6;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">초건면 3,223명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 5.1%; background-color: #485EC6;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">우입면 2,534명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 4.6%; background-color: #485EC6;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">빙천면 2,322명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 4.2%; background-color: #485EC6;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">풍성면 2,123명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 2.6%; background-color: #485EC6;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">상곡면 1,323명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 2.3%; background-color: #485EC6;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">미전면 1,132명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 2.2%; background-color: #485EC6;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">명향면 1,102명</div>
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
                        <th style="background-color: #485EC6; color: white; padding: 10px; border: 1px solid #ccc;">광역시도</th>
                        <th style="background-color: #485EC6; color: white; padding: 10px; border: 1px solid #ccc;">시군구</th>
                        <th style="background-color: #485EC6; color: white; padding: 10px; border: 1px solid #ccc;">읍면동</th>
                        <th style="background-color: #485EC6; color: white; padding: 10px; border: 1px solid #ccc;">합계 : 2026.4</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="background-color: #f1f3f5; font-weight: bold;">
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">낭원군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">-</td>
                        <td style="padding: 8px; border: 1px solid #ccc; color: #d6001c;">149,917</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">낭원군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">낭원읍</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">49,542</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">낭원군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">전포읍</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">41,421</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">낭원군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">판주읍</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">20,132</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">낭원군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">토진읍</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">10,220</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">낭원군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">백성면</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">8,322</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">낭원군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">내덕면</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">6,521</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">낭원군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">초건면</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">3,223</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">낭원군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">우입면</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">2,534</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">낭원군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">빙천면</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">2,322</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">낭원군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">풍성면</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">2,123</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">낭원군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">상곡면</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">1,323</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">낭원군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">미전면</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">1,132</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">낭원군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">명향면</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">1,102</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- 연도별 변천사 종합 표 (통합) -->
        <div style="margin: 30px auto; overflow-x: auto;">
            <div style="font-weight: bold; margin-bottom: 10px; font-size: 1.1em; text-align: center;">연도별 행정구역 인구 변천사 종합표</div>
            <table style="width: max-content !important; min-width: 100% !important; table-layout: auto !important; border-collapse: collapse; text-align: right; font-size: 0.75em; white-space: nowrap; border: 1px solid #ccc;">
                <thead>
                    <tr style="background-color: #485EC6; color: white; text-align: center;">
                        <th style="padding: 8px; border: 1px solid #ccc;">구분</th><th style="padding: 8px; border: 1px solid #ccc;">1966년</th><th style="padding: 8px; border: 1px solid #ccc;">1970년</th><th style="padding: 8px; border: 1px solid #ccc;">1975년</th><th style="padding: 8px; border: 1px solid #ccc;">1980년</th><th style="padding: 8px; border: 1px solid #ccc;">1985년</th><th style="padding: 8px; border: 1px solid #ccc;">1990년</th><th style="padding: 8px; border: 1px solid #ccc;">1995년</th><th style="padding: 8px; border: 1px solid #ccc;">2000년</th><th style="padding: 8px; border: 1px solid #ccc;">2005년</th><th style="padding: 8px; border: 1px solid #ccc;">2010년</th><th style="padding: 8px; border: 1px solid #ccc;">2015년</th><th style="padding: 8px; border: 1px solid #ccc;">2020년</th><th style="padding: 8px; border: 1px solid #ccc;">2025년</th><th style="padding: 8px; border: 1px solid #ccc;">2026.4</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="background-color: #f1f3f5; font-weight: bold;"><td style="padding: 6px; border: 1px solid #ccc; text-align: center; color: #555;">덕빈북도 (참고)</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">3608524</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">4021985</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">4475727</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">4715950</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">3132578</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">3259806</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">3160756</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">3226894</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">3275615</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">3351587</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">3390580</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">3462447</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">3523123</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">3535361</td></tr>
                    <tr style="background-color: #fdfaf5; font-weight: bold;"><td style="padding: 6px; border: 1px solid #ccc; text-align: center;">낭원군</td><td style="padding: 6px; border: 1px solid #ccc;">114521</td><td style="padding: 6px; border: 1px solid #ccc;">112031</td><td style="padding: 6px; border: 1px solid #ccc;">101231</td><td style="padding: 6px; border: 1px solid #ccc;">91402</td><td style="padding: 6px; border: 1px solid #ccc;">104921</td><td style="padding: 6px; border: 1px solid #ccc;">114921</td><td style="padding: 6px; border: 1px solid #ccc;">123949</td><td style="padding: 6px; border: 1px solid #ccc;">130212</td><td style="padding: 6px; border: 1px solid #ccc;">135503</td><td style="padding: 6px; border: 1px solid #ccc;">140321</td><td style="padding: 6px; border: 1px solid #ccc;">145212</td><td style="padding: 6px; border: 1px solid #ccc;">149202</td><td style="padding: 6px; border: 1px solid #ccc;">149864</td><td style="padding: 6px; border: 1px solid #ccc; color:#d6001c;">149,917</td></tr>
                </tbody>
            </table>
        </div>
    </div>
    `;
    container.innerHTML = html;
}
