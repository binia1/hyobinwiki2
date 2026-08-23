/**
 * 덕빈남도 덕주시 조전구 인구 추이 및 읍면동별 통계 테이블 생성 함수
 */
function render_조전구_PopTable(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const html = `
    <div class="조전구-pop-wrapper" style="font-family: 'Noto Sans KR', sans-serif; color: #333; max-width: 900px; margin: 0 auto;">
        
        <!-- 1. 조전구 역대 인구 차트 -->
        <div style="margin: 20px auto; border: 2px solid #ff9ea9; border-radius: 4px; background-color: #fff; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <div style="padding: 15px 10px; border-bottom: 1px solid #ff9ea9; text-align: center; background-color: #f8f9fa;">
                <div style="font-size: 1.2em; font-weight: 900; color: #111;">덕빈남도 덕주시 조전구 인구 추이</div>
                <div style="font-size: 0.85em; color: #666; margin-top: 5px;">(2020년 ~ 현재)</div>
            </div>
            <div style="display: flex; flex-direction: column;">
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 91.4%; background-color: #ff9ea9;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.6);">2020년 274,222명</div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 95.6%; background-color: #ff9ea9;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.6);">2025년 286,890명</div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 96.1%; background-color: #ff9ea9;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.6);">2026년 4월 288,192명</div>
                </div>
            </div>
            <div style="padding: 12px 10px; font-size: 0.75em; color: #666; background-color: #f9f9f9; text-align: center; border-top: 1px solid #ddd;">
                그래프 최대 값은 300,000명
            </div>
        </div>

        <!-- 2. 2026.4 읍면동 막대그래프 -->
        <div style="margin: 30px auto; border: 2px solid #ff9ea9; border-radius: 4px; background-color: #fff; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <div style="background-color: #ff9ea9; color: white; padding: 12px; text-align: center; font-weight: bold; font-size: 1.1em; display: flex; align-items: center; justify-content: center; gap: 8px;">
                <div style="width: 20px; height: 20px; background: white; border-radius: 2px; display: flex; align-items: center; justify-content: center; overflow: hidden;">
                    <img src="이미지/조전구.webp" alt="로고" style="max-width: 100%; max-height: 100%; object-fit: contain;" onerror="this.style.display='none';">
                </div>
                덕빈남도 덕주시 조전구 읍면동별 인구 통계 (2026년 4월)
            </div>
            <div style="text-align: center; font-size: 11px; padding: 8px; border-bottom: 1px solid #e5e7eb; background: #f8f9fa; color: #333; cursor: pointer; font-weight: bold;">[ 펼치기 · 접기 ]</div>
            
            <div style="display: flex; flex-direction: column;">
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 54.6%; background-color: #ff9ea9;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">조전3동 54,624명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 41.5%; background-color: #ff9ea9;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">박현동 41,523명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 34.7%; background-color: #ff9ea9;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">조전1동 34,732명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 33.7%; background-color: #ff9ea9;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">조전4동 33,741명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 25.0%; background-color: #ff9ea9;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">조전2동 24,981명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 24.0%; background-color: #ff9ea9;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">팔원읍 23,984명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 19.7%; background-color: #ff9ea9;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">애남동 19,714명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 13.2%; background-color: #ff9ea9;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">금당동 13,212명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 11.7%; background-color: #ff9ea9;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">하기읍 11,745명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 7.8%; background-color: #ff9ea9;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">매촌동 7,843명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 5.4%; background-color: #ff9ea9;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">삼삼동 5,412명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 5.3%; background-color: #ff9ea9;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">명리면 5,292명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 4.8%; background-color: #ff9ea9;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">모은동 4,831명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 4.7%; background-color: #ff9ea9;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">주규동 4,683명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 1.1%; background-color: #ff9ea9;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">지출면 1,134명</div>
                </div>
                <div style="position: relative; height: 32px; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 0.7%; background-color: #ff9ea9;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">시산면 741명</div>
                </div>
            </div>
            <div style="padding: 10px; font-size: 0.75em; color: #666; background-color: #f9f9f9; text-align: center; border-top: 1px solid #ddd;">
                2026년 4월 기준, 그래프 최대 값은 100,000명
            </div>
        </div>

        <!-- 3. 신규 2026.4 읍면동 표 -->
        <div style="margin: 30px auto; overflow-x: auto;">
            <table style="width: 100%; table-layout: auto !important; border-collapse: collapse; text-align: center; font-size: 0.85em; border: 1px solid #ccc;">
                <thead>
                    <tr>
                        <th style="background-color: #ff9ea9; color: white; padding: 10px; border: 1px solid #ccc;">광역시도</th>
                        <th style="background-color: #ff9ea9; color: white; padding: 10px; border: 1px solid #ccc;">시군구</th>
                        <th style="background-color: #ff9ea9; color: white; padding: 10px; border: 1px solid #ccc;">읍면동</th>
                        <th style="background-color: #ff9ea9; color: white; padding: 10px; border: 1px solid #ccc;">합계 : 2026.4</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="background-color: #f1f3f5; font-weight: bold;">
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">덕주시 조전구</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">-</td>
                        <td style="padding: 8px; border: 1px solid #ccc; color: #d6001c;">288,192</td>
                    </tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td><td style="padding: 8px; border: 1px solid #ccc;">덕주시 조전구</td><td style="padding: 8px; border: 1px solid #ccc;">조전3동</td><td style="padding: 8px; border: 1px solid #ccc;">54,624</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td><td style="padding: 8px; border: 1px solid #ccc;">덕주시 조전구</td><td style="padding: 8px; border: 1px solid #ccc;">박현동</td><td style="padding: 8px; border: 1px solid #ccc;">41,523</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td><td style="padding: 8px; border: 1px solid #ccc;">덕주시 조전구</td><td style="padding: 8px; border: 1px solid #ccc;">조전1동</td><td style="padding: 8px; border: 1px solid #ccc;">34,732</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td><td style="padding: 8px; border: 1px solid #ccc;">덕주시 조전구</td><td style="padding: 8px; border: 1px solid #ccc;">조전4동</td><td style="padding: 8px; border: 1px solid #ccc;">33,741</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td><td style="padding: 8px; border: 1px solid #ccc;">덕주시 조전구</td><td style="padding: 8px; border: 1px solid #ccc;">조전2동</td><td style="padding: 8px; border: 1px solid #ccc;">24,981</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td><td style="padding: 8px; border: 1px solid #ccc;">덕주시 조전구</td><td style="padding: 8px; border: 1px solid #ccc;">팔원읍</td><td style="padding: 8px; border: 1px solid #ccc;">23,984</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td><td style="padding: 8px; border: 1px solid #ccc;">덕주시 조전구</td><td style="padding: 8px; border: 1px solid #ccc;">애남동</td><td style="padding: 8px; border: 1px solid #ccc;">19,714</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td><td style="padding: 8px; border: 1px solid #ccc;">덕주시 조전구</td><td style="padding: 8px; border: 1px solid #ccc;">금당동</td><td style="padding: 8px; border: 1px solid #ccc;">13,212</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td><td style="padding: 8px; border: 1px solid #ccc;">덕주시 조전구</td><td style="padding: 8px; border: 1px solid #ccc;">하기읍</td><td style="padding: 8px; border: 1px solid #ccc;">11,745</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td><td style="padding: 8px; border: 1px solid #ccc;">덕주시 조전구</td><td style="padding: 8px; border: 1px solid #ccc;">매촌동</td><td style="padding: 8px; border: 1px solid #ccc;">7,843</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td><td style="padding: 8px; border: 1px solid #ccc;">덕주시 조전구</td><td style="padding: 8px; border: 1px solid #ccc;">삼삼동</td><td style="padding: 8px; border: 1px solid #ccc;">5,412</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td><td style="padding: 8px; border: 1px solid #ccc;">덕주시 조전구</td><td style="padding: 8px; border: 1px solid #ccc;">명리면</td><td style="padding: 8px; border: 1px solid #ccc;">5,292</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td><td style="padding: 8px; border: 1px solid #ccc;">덕주시 조전구</td><td style="padding: 8px; border: 1px solid #ccc;">모은동</td><td style="padding: 8px; border: 1px solid #ccc;">4,831</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td><td style="padding: 8px; border: 1px solid #ccc;">덕주시 조전구</td><td style="padding: 8px; border: 1px solid #ccc;">주규동</td><td style="padding: 8px; border: 1px solid #ccc;">4,683</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td><td style="padding: 8px; border: 1px solid #ccc;">덕주시 조전구</td><td style="padding: 8px; border: 1px solid #ccc;">지출면</td><td style="padding: 8px; border: 1px solid #ccc;">1,134</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td><td style="padding: 8px; border: 1px solid #ccc;">덕주시 조전구</td><td style="padding: 8px; border: 1px solid #ccc;">시산면</td><td style="padding: 8px; border: 1px solid #ccc;">741</td></tr>
                </tbody>
            </table>
        </div>

        <!-- 4. 연도별 변천사 종합 표 (통합) -->
        <div style="margin: 30px auto; overflow-x: auto;">
            <div style="font-weight: bold; margin-bottom: 10px; font-size: 1.1em; text-align: center;">연도별 행정구역 인구 변천사 종합표</div>
            <table style="width: max-content !important; min-width: 100% !important; table-layout: auto !important; border-collapse: collapse; text-align: right; font-size: 0.75em; white-space: nowrap; border: 1px solid #ccc;">
                <thead>
                    <tr style="background-color: #ff9ea9; color: white; text-align: center;">
                        <th style="padding: 8px; border: 1px solid #ccc;">구분</th><th style="padding: 8px; border: 1px solid #ccc;">1966년</th><th style="padding: 8px; border: 1px solid #ccc;">1970년</th><th style="padding: 8px; border: 1px solid #ccc;">1975년</th><th style="padding: 8px; border: 1px solid #ccc;">1980년</th><th style="padding: 8px; border: 1px solid #ccc;">1985년</th><th style="padding: 8px; border: 1px solid #ccc;">1990년</th><th style="padding: 8px; border: 1px solid #ccc;">1995년</th><th style="padding: 8px; border: 1px solid #ccc;">2000년</th><th style="padding: 8px; border: 1px solid #ccc;">2005년</th><th style="padding: 8px; border: 1px solid #ccc;">2010년</th><th style="padding: 8px; border: 1px solid #ccc;">2015년</th><th style="padding: 8px; border: 1px solid #ccc;">2020년</th><th style="padding: 8px; border: 1px solid #ccc;">2025년</th><th style="padding: 8px; border: 1px solid #ccc;">2026.4</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="background-color: #f1f3f5; font-weight: bold;">
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center; color: #555;">덕빈남도 (참고)</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2,107,862</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2,136,197</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2,161,395</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2,136,141</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2,119,803</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2,115,803</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2,083,724</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2,061,567</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2,044,060</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2,034,003</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2,041,389</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2,029,083</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2,015,432</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2,017,439</td>
                    </tr>
                    <tr style="background-color: #fffeee; font-weight: bold;">
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center; font-weight: bold; background: #fdfdfd;">덕주시 조전구</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">274,222</td><td style="padding: 6px; border: 1px solid #ccc;">286,890</td><td style="padding: 6px; border: 1px solid #ccc; color:#d6001c; font-weight: bold;">288,192명</td>
                    </tr>
                    <tr style="background-color: #ffffff; font-weight: normal;">
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center; font-weight: bold; background: #fdfdfd;">덕산군</td><td style="padding: 6px; border: 1px solid #ccc;">135,293</td><td style="padding: 6px; border: 1px solid #ccc;">141,283</td><td style="padding: 6px; border: 1px solid #ccc;">144,929</td><td style="padding: 6px; border: 1px solid #ccc;">112,938</td><td style="padding: 6px; border: 1px solid #ccc;">91,562</td><td style="padding: 6px; border: 1px solid #ccc;">81,283</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc; color:#d6001c; font-weight: bold;">-</td>
                    </tr>
                    <tr style="background-color: #ffffff; font-weight: normal;">
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center; font-weight: bold; background: #fdfdfd;">덕산구</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">227,013</td><td style="padding: 6px; border: 1px solid #ccc;">234,342</td><td style="padding: 6px; border: 1px solid #ccc; color:#d6001c; font-weight: bold;">-</td>
                    </tr>
                    <tr style="background-color: #ffffff; font-weight: normal;">
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center; font-weight: bold; background: #fdfdfd;">덕주시</td><td style="padding: 6px; border: 1px solid #ccc;">104,391</td><td style="padding: 6px; border: 1px solid #ccc;">125,928</td><td style="padding: 6px; border: 1px solid #ccc;">148,056</td><td style="padding: 6px; border: 1px solid #ccc;">201,283</td><td style="padding: 6px; border: 1px solid #ccc;">233,975</td><td style="padding: 6px; border: 1px solid #ccc;">252,938</td><td style="padding: 6px; border: 1px solid #ccc;">362,123</td><td style="padding: 6px; border: 1px solid #ccc;">382,451</td><td style="padding: 6px; border: 1px solid #ccc;">412,947</td><td style="padding: 6px; border: 1px solid #ccc;">441,923</td><td style="padding: 6px; border: 1px solid #ccc;">474,843</td><td style="padding: 6px; border: 1px solid #ccc;">501,235</td><td style="padding: 6px; border: 1px solid #ccc;">521,232</td><td style="padding: 6px; border: 1px solid #ccc; color:#d6001c; font-weight: bold;">-</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    `;
    container.innerHTML = html;
}