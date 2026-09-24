/**
 * 덕빈북도 반양군 인구 추이 및 읍면동별 통계 테이블 생성 함수
 */
function render_반양군_PopTable(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const html = `
    <div class="반양군-pop-wrapper" style="font-family: 'Noto Sans KR', sans-serif; color: #333; max-width: 900px; margin: 0 auto;">
        
        <h2 id="s-3">3. 인구</h2>
        <div id="pop-chart-반양군" style="margin: 20px auto; max-width: 480px; border: 2px solid #D81C2F; border-radius: 4px; font-family: 'Noto Sans KR', sans-serif; background-color: #fff; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <div style="padding: 15px 10px; border-bottom: 1px solid #D81C2F; text-align: center; background-color: #fff;">
                <div style="display: flex; align-items: center; justify-content: center; gap: 8px;">
                    <span style="font-size: 1.1em; font-weight: 900; color: #111;">덕빈북도 반양군 인구 추이</span>
                </div>
                <div style="font-size: 0.8em; color: #666; margin-top: 5px;">(1949년~현재)</div>
            </div>
            <div style="display: flex; flex-direction: column;">
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 62.3%; background-color: #D81C2F; z-index: 1;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 3px rgba(0,0,0,0.8), -1px -1px 3px rgba(0,0,0,0.8); font-size: 0.9em; font-weight: bold;">
                        1949년 124,610명
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 70.7%; background-color: #D81C2F; z-index: 1;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 3px rgba(0,0,0,0.8), -1px -1px 3px rgba(0,0,0,0.8); font-size: 0.9em; font-weight: bold;">
                        1955년 141,338명
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 75.5%; background-color: #D81C2F; z-index: 1;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 3px rgba(0,0,0,0.8), -1px -1px 3px rgba(0,0,0,0.8); font-size: 0.9em; font-weight: bold;">
                        1960년 151,088명
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 82.1%; background-color: #D81C2F; z-index: 1;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 3px rgba(0,0,0,0.8), -1px -1px 3px rgba(0,0,0,0.8); font-size: 0.9em; font-weight: bold;">
                        1966년 164,232명
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 87.6%; background-color: #D81C2F; z-index: 1;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 3px rgba(0,0,0,0.8), -1px -1px 3px rgba(0,0,0,0.8); font-size: 0.9em; font-weight: bold;">
                        1970년 175,133명
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 85.8%; background-color: #D81C2F; z-index: 1;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 3px rgba(0,0,0,0.8), -1px -1px 3px rgba(0,0,0,0.8); font-size: 0.9em; font-weight: bold;">
                        1975년 171,624명
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 86.6%; background-color: #D81C2F; z-index: 1;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 3px rgba(0,0,0,0.8), -1px -1px 3px rgba(0,0,0,0.8); font-size: 0.9em; font-weight: bold;">
                        1980년 173,245명  (정점)
                    </div>
                </div>
                <div style="padding: 10px; font-size: 0.85em; background-color: #fff; color: #333; border-bottom: 1px solid #fff; line-height: 1.5; text-align: center;">
                    <span style="color: #0066cc;">1983년 2월 15일</span> 반양군 계성읍, 마시면 → <span style="color: #0066cc; font-weight: bold;">덕빈북도 계성시</span> 승격 분리
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 46.4%; background-color: #D81C2F; z-index: 1;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 3px rgba(0,0,0,0.8), -1px -1px 3px rgba(0,0,0,0.8); font-size: 0.9em; font-weight: bold;">
                        1985년 92,831명
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 38.4%; background-color: #D81C2F; z-index: 1;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 3px rgba(0,0,0,0.8), -1px -1px 3px rgba(0,0,0,0.8); font-size: 0.9em; font-weight: bold;">
                        1990년 76,734명
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 30.7%; background-color: #D81C2F; z-index: 1;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 3px rgba(0,0,0,0.8), -1px -1px 3px rgba(0,0,0,0.8); font-size: 0.9em; font-weight: bold;">
                        1995년 61,498명
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 27.9%; background-color: #D81C2F; z-index: 1;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 3px rgba(0,0,0,0.8), -1px -1px 3px rgba(0,0,0,0.8); font-size: 0.9em; font-weight: bold;">
                        2000년 55,717명
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 25.0%; background-color: #D81C2F; z-index: 1;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 3px rgba(0,0,0,0.8), -1px -1px 3px rgba(0,0,0,0.8); font-size: 0.9em; font-weight: bold;">
                        2005년 49,935명
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 22.0%; background-color: #D81C2F; z-index: 1;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 3px rgba(0,0,0,0.8), -1px -1px 3px rgba(0,0,0,0.8); font-size: 0.9em; font-weight: bold;">
                        2010년 44,084명
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 19.1%; background-color: #D81C2F; z-index: 1;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 3px rgba(0,0,0,0.8), -1px -1px 3px rgba(0,0,0,0.8); font-size: 0.9em; font-weight: bold;">
                        2015년 38,232명
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 18.2%; background-color: #D81C2F; z-index: 1;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 3px rgba(0,0,0,0.8), -1px -1px 3px rgba(0,0,0,0.8); font-size: 0.9em; font-weight: bold;">
                        2020년 36,452명
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 19.2%; background-color: #D81C2F; z-index: 1;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 3px rgba(0,0,0,0.8), -1px -1px 3px rgba(0,0,0,0.8); font-size: 0.9em; font-weight: bold;">
                        2025년 38,372명
                    </div>
                </div>
            </div>
            <div style="padding: 12px 10px; font-size: 0.75em; color: #666; background-color: #f9f9f9; text-align: center; line-height: 1.6; border-top: 1px solid #ddd;">
                인구는 현재 행정구역이 아닌 해당 연도 행정구역 기준, 그래프 최대 값은 20만 명<br/>
                1949-1990: 통계청 인구총조사, 1995-현재: 행정안전부 주민등록인구통계 (외국인 미포함)
            </div>
        </div>

        <!-- 2026.4 읍면동 막대그래프 -->
        <div style="margin: 30px auto; border: 2px solid #D81C2F; border-radius: 4px; background-color: #fff; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <div style="background-color: #D81C2F; color: white; padding: 12px; text-align: center; font-weight: bold; font-size: 1.1em;">
                덕빈북도 반양군 읍면동별 인구 통계
            </div>
            <div style="display: flex; flex-direction: column;">
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 92.1%; background-color: #D81C2F;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">삽곡읍 9,209명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 89.2%; background-color: #D81C2F;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">반양읍 8,916명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 68.5%; background-color: #D81C2F;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">하원면 6,854명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 55.7%; background-color: #D81C2F;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">토정면 5,574명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 29.0%; background-color: #D81C2F;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">복구면 2,904명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 15.7%; background-color: #D81C2F;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">북부면 1,566명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 11.2%; background-color: #D81C2F;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">수상면 1,123명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 11.2%; background-color: #D81C2F;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">인와면 1,123명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 10.3%; background-color: #D81C2F;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">적판면 1,033명</div>
                </div>
            </div>
            <div style="padding: 10px; font-size: 0.75em; color: #666; background-color: #f9f9f9; text-align: center; border-top: 1px solid #ddd;">
                2026년 4월 기준, 그래프 최대 값은 10,000명
            </div>
        </div>

        <!-- 2026.4 읍면동 표 -->
        <div style="margin: 30px auto; overflow-x: auto;">
            <table style="width: 100%; border-collapse: collapse; text-align: center; font-size: 0.85em; border: 1px solid #ccc;">
                <thead>
                    <tr>
                        <th style="background-color: #D81C2F; color: white; padding: 10px; border: 1px solid #ccc;">광역시도</th>
                        <th style="background-color: #D81C2F; color: white; padding: 10px; border: 1px solid #ccc;">시군구</th>
                        <th style="background-color: #D81C2F; color: white; padding: 10px; border: 1px solid #ccc;">읍면동</th>
                        <th style="background-color: #D81C2F; color: white; padding: 10px; border: 1px solid #ccc;">합계 : 2026.4</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="background-color: #f1f3f5; font-weight: bold;">
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">반양군</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">-</td>
                        <td style="padding: 8px; border: 1px solid #ccc; color: #d6001c;">38,302</td>
                    </tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td><td style="padding: 8px; border: 1px solid #ccc;">반양군</td><td style="padding: 8px; border: 1px solid #ccc;">삽곡읍</td><td style="padding: 8px; border: 1px solid #ccc;">9,209</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td><td style="padding: 8px; border: 1px solid #ccc;">반양군</td><td style="padding: 8px; border: 1px solid #ccc;">반양읍</td><td style="padding: 8px; border: 1px solid #ccc;">8,916</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td><td style="padding: 8px; border: 1px solid #ccc;">반양군</td><td style="padding: 8px; border: 1px solid #ccc;">하원면</td><td style="padding: 8px; border: 1px solid #ccc;">6,854</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td><td style="padding: 8px; border: 1px solid #ccc;">반양군</td><td style="padding: 8px; border: 1px solid #ccc;">토정면</td><td style="padding: 8px; border: 1px solid #ccc;">5,574</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td><td style="padding: 8px; border: 1px solid #ccc;">반양군</td><td style="padding: 8px; border: 1px solid #ccc;">복구면</td><td style="padding: 8px; border: 1px solid #ccc;">2,904</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td><td style="padding: 8px; border: 1px solid #ccc;">반양군</td><td style="padding: 8px; border: 1px solid #ccc;">북부면</td><td style="padding: 8px; border: 1px solid #ccc;">1,566</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td><td style="padding: 8px; border: 1px solid #ccc;">반양군</td><td style="padding: 8px; border: 1px solid #ccc;">수상면</td><td style="padding: 8px; border: 1px solid #ccc;">1,123</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td><td style="padding: 8px; border: 1px solid #ccc;">반양군</td><td style="padding: 8px; border: 1px solid #ccc;">인와면</td><td style="padding: 8px; border: 1px solid #ccc;">1,123</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td><td style="padding: 8px; border: 1px solid #ccc;">반양군</td><td style="padding: 8px; border: 1px solid #ccc;">적판면</td><td style="padding: 8px; border: 1px solid #ccc;">1,033</td></tr>
                </tbody>
            </table>
        </div>

        <!-- 연도별 변천사 종합 표 (14. 하위 행정구역 2025년 기준 완벽 일치) -->
        <div style="margin: 30px auto; overflow-x: auto;">
            <div style="font-weight: bold; margin-bottom: 10px; font-size: 1.1em; text-align: center;">연도별 행정구역 인구 변천사 종합표</div>
            <table style="width: max-content !important; min-width: 100% !important; table-layout: auto !important; border-collapse: collapse; text-align: right; font-size: 0.75em; white-space: nowrap; border: 1px solid #ccc;">
                <thead>
                    <tr style="background-color: #D81C2F; color: white; text-align: center;">
                        <th style="padding: 8px; border: 1px solid #ccc;">구분</th>
                        <th style="padding: 8px; border: 1px solid #ccc;">1966년</th>
                        <th style="padding: 8px; border: 1px solid #ccc;">1970년</th>
                        <th style="padding: 8px; border: 1px solid #ccc;">1975년</th>
                        <th style="padding: 8px; border: 1px solid #ccc;">1980년</th>
                        <th style="padding: 8px; border: 1px solid #ccc;">1985년</th>
                        <th style="padding: 8px; border: 1px solid #ccc;">1990년</th>
                        <th style="padding: 8px; border: 1px solid #ccc;">1995년</th>
                        <th style="padding: 8px; border: 1px solid #ccc;">2000년</th>
                        <th style="padding: 8px; border: 1px solid #ccc;">2005년</th>
                        <th style="padding: 8px; border: 1px solid #ccc;">2010년</th>
                        <th style="padding: 8px; border: 1px solid #ccc;">2015년</th>
                        <th style="padding: 8px; border: 1px solid #ccc;">2020년</th>
                        <th style="padding: 8px; border: 1px solid #ccc;">2025년</th>
                        <th style="padding: 8px; border: 1px solid #ccc;">2026.4</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="background-color: #f1f3f5; font-weight: bold;">
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center; color: #555;">덕빈북도 (참고)</td>
                        <td style="padding: 6px; border: 1px solid #ccc; color: #555;">3608524</td>
                        <td style="padding: 6px; border: 1px solid #ccc; color: #555;">4011985</td>
                        <td style="padding: 6px; border: 1px solid #ccc; color: #555;">4505727</td>
                        <td style="padding: 6px; border: 1px solid #ccc; color: #555;">4715950</td>
                        <td style="padding: 6px; border: 1px solid #ccc; color: #555;">3112578</td>
                        <td style="padding: 6px; border: 1px solid #ccc; color: #555;">3241806</td>
                        <td style="padding: 6px; border: 1px solid #ccc; color: #555;">3160756</td>
                        <td style="padding: 6px; border: 1px solid #ccc; color: #555;">3226894</td>
                        <td style="padding: 6px; border: 1px solid #ccc; color: #555;">3275615</td>
                        <td style="padding: 6px; border: 1px solid #ccc; color: #555;">3351587</td>
                        <td style="padding: 6px; border: 1px solid #ccc; color: #555;">3390580</td>
                        <td style="padding: 6px; border: 1px solid #ccc; color: #555;">3462447</td>
                        <td style="padding: 6px; border: 1px solid #ccc; color: #555;">3523123</td>
                        <td style="padding: 6px; border: 1px solid #ccc; color: #555;">3535361</td>
                    </tr>
                    <tr style="background-color: #fdfaf5; font-weight: bold;">
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center;">반양군</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">164232</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">175133</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">171624</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">173245</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">92831</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">76734</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">61498</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">55717</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">49935</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">44084</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">38232</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">36452</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">38372</td>
                        <td style="padding: 6px; border: 1px solid #ccc; color:#d6001c;">38,302</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center;">삽곡읍</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">25,427</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">27,031</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">25,981</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">24,812</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">22,242</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">18,342</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">15,427</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">14,133</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">12,477</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">11,157</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">9,762</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">9,145</td>
                        <td style="padding: 6px; border: 1px solid #ccc; font-weight: bold;">9,124</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">9,209</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center;">반양읍</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">14,519</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">14,245</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">13,842</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">13,421</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">12,821</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">11,531</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">11,291</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">10,642</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">9,842</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">9,351</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">8,842</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">8,637</td>
                        <td style="padding: 6px; border: 1px solid #ccc; font-weight: bold;">8,915</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">8,916</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center;">하원면</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">21,884</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">20,879</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">18,957</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">17,214</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">14,414</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">12,114</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">9,245</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">9,471</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">8,474</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">7,432</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">6,351</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">6,092</td>
                        <td style="padding: 6px; border: 1px solid #ccc; font-weight: bold;">6,715</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">6,854</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center;">토정면</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">18,953</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">18,892</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">16,913</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">15,142</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">12,812</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">10,212</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">7,963</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">7,739</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">6,731</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">5,741</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">4,838</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">4,632</td>
                        <td style="padding: 6px; border: 1px solid #ccc; font-weight: bold;">5,450</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">5,574</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center;">복구면</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">16,841</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">17,914</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">15,849</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">14,312</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">11,812</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">9,412</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">7,054</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">5,746</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">5,093</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">4,163</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">3,365</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">2,941</td>
                        <td style="padding: 6px; border: 1px solid #ccc; font-weight: bold;">2,933</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">2,904</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center;">북부면</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">11,888</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">11,105</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">10,126</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">9,142</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">7,812</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">6,212</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">4,829</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">3,178</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">2,845</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">2,478</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">1,947</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">1,625</td>
                        <td style="padding: 6px; border: 1px solid #ccc; font-weight: bold;">1,665</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">1,566</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center;">수상면</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">8,572</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">8,984</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">8,034</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">7,422</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">6,312</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">4,812</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">2,776</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">2,054</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">1,936</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">1,562</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">1,179</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">1,212</td>
                        <td style="padding: 6px; border: 1px solid #ccc; font-weight: bold;">1,234</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">1,123</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center;">인와면</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">4,539</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">5,027</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">4,078</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">3,812</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">3,312</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">2,912</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">1,821</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">1,623</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">1,428</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">1,180</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">936</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">1,112</td>
                        <td style="padding: 6px; border: 1px solid #ccc; font-weight: bold;">1,212</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">1,123</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center;">적판면</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">2,196</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">2,809</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">2,229</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">1,601</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">1,294</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">1,187</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">1,092</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">1,131</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">1,109</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">1,020</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">1,012</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">1,056</td>
                        <td style="padding: 6px; border: 1px solid #ccc; font-weight: bold;">1,124</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">1,033</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center; color: #888;">흑전면 (수몰)</td>
                        <td style="padding: 6px; border: 1px solid #ccc; color: #888;">3,184</td>
                        <td style="padding: 6px; border: 1px solid #ccc; color: #888;">3,142</td>
                        <td style="padding: 6px; border: 1px solid #ccc; color: #888;">2,044</td>
                        <td style="padding: 6px; border: 1px solid #ccc; color: #888;">1,122</td>
                        <td style="padding: 6px; border: 1px solid #ccc; color: #888;">-</td>
                        <td style="padding: 6px; border: 1px solid #ccc; color: #888;">-</td>
                        <td style="padding: 6px; border: 1px solid #ccc; color: #888;">-</td>
                        <td style="padding: 6px; border: 1px solid #ccc; color: #888;">-</td>
                        <td style="padding: 6px; border: 1px solid #ccc; color: #888;">-</td>
                        <td style="padding: 6px; border: 1px solid #ccc; color: #888;">-</td>
                        <td style="padding: 6px; border: 1px solid #ccc; color: #888;">-</td>
                        <td style="padding: 6px; border: 1px solid #ccc; color: #888;">-</td>
                        <td style="padding: 6px; border: 1px solid #ccc; color: #888;">-</td>
                        <td style="padding: 6px; border: 1px solid #ccc; color: #888;">-</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center; color: #0066cc;">계성읍 (분리)</td>
                        <td style="padding: 6px; border: 1px solid #ccc; color: #0066cc;">28,142</td>
                        <td style="padding: 6px; border: 1px solid #ccc; color: #0066cc;">35,018</td>
                        <td style="padding: 6px; border: 1px solid #ccc; color: #0066cc;">41,500</td>
                        <td style="padding: 6px; border: 1px solid #ccc; color: #0066cc;">51,124</td>
                        <td style="padding: 6px; border: 1px solid #ccc; color: #0066cc;">-</td>
                        <td style="padding: 6px; border: 1px solid #ccc; color: #0066cc;">-</td>
                        <td style="padding: 6px; border: 1px solid #ccc; color: #0066cc;">-</td>
                        <td style="padding: 6px; border: 1px solid #ccc; color: #0066cc;">-</td>
                        <td style="padding: 6px; border: 1px solid #ccc; color: #0066cc;">-</td>
                        <td style="padding: 6px; border: 1px solid #ccc; color: #0066cc;">-</td>
                        <td style="padding: 6px; border: 1px solid #ccc; color: #0066cc;">-</td>
                        <td style="padding: 6px; border: 1px solid #ccc; color: #0066cc;">-</td>
                        <td style="padding: 6px; border: 1px solid #ccc; color: #0066cc;">-</td>
                        <td style="padding: 6px; border: 1px solid #ccc; color: #0066cc;">-</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center; color: #0066cc;">마시면 (분리)</td>
                        <td style="padding: 6px; border: 1px solid #ccc; color: #0066cc;">8,087</td>
                        <td style="padding: 6px; border: 1px solid #ccc; color: #0066cc;">10,087</td>
                        <td style="padding: 6px; border: 1px solid #ccc; color: #0066cc;">12,071</td>
                        <td style="padding: 6px; border: 1px solid #ccc; color: #0066cc;">14,121</td>
                        <td style="padding: 6px; border: 1px solid #ccc; color: #0066cc;">-</td>
                        <td style="padding: 6px; border: 1px solid #ccc; color: #0066cc;">-</td>
                        <td style="padding: 6px; border: 1px solid #ccc; color: #0066cc;">-</td>
                        <td style="padding: 6px; border: 1px solid #ccc; color: #0066cc;">-</td>
                        <td style="padding: 6px; border: 1px solid #ccc; color: #0066cc;">-</td>
                        <td style="padding: 6px; border: 1px solid #ccc; color: #0066cc;">-</td>
                        <td style="padding: 6px; border: 1px solid #ccc; color: #0066cc;">-</td>
                        <td style="padding: 6px; border: 1px solid #ccc; color: #0066cc;">-</td>
                        <td style="padding: 6px; border: 1px solid #ccc; color: #0066cc;">-</td>
                        <td style="padding: 6px; border: 1px solid #ccc; color: #0066cc;">-</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    `;
    container.innerHTML = html;
}