/**
 * 효빈광역시 동구 인구 추이 및 행정동별 통계 테이블 생성 함수
 * @param {string} containerId - 표를 넣을 HTML 요소의 ID
 */
function renderDongguPopTable(containerId) {
    const container = document.getElementById(containerId);
    
    if (!container) {
        console.error("렌더링 오류: '" + containerId + "' 요소를 찾을 수 없습니다.");
        return;
    }

    const html = `
    <div class="donggu-pop-wrapper" style="font-family: 'Noto Sans KR', sans-serif; color: #333; max-width: 900px; margin: 0 auto;">
        
        <!-- 1. 효빈광역시 동구 인구 추이 막대그래프 (1973 ~ 현재) -->
        <div style="margin: 20px auto; border: 2px solid #FF9922; border-radius: 4px; background-color: #fff; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <div style="padding: 15px 10px; border-bottom: 1px solid #FF9922; text-align: center; background-color: #f8f9fa;">
                <div style="font-size: 1.2em; font-weight: 900; color: #111;">효빈광역시 동구 인구 추이</div>
                <div style="font-size: 0.85em; color: #666; margin-top: 5px;">(1973년 ~ 현재)</div>
            </div>
            
            <div style="display: flex; flex-direction: column;">
                <div style="padding: 8px; font-size: 0.85em; color: #FF9922; text-align: center; border-bottom: 1px solid #fff; background: #fff;">
                    1973년 1월 2일 효빈시 <strong>동구</strong> 설치
                </div>
                
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 76.8%; background-color: #FF9922;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.6);">
                        1975년 230,548명
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 82.5%; background-color: #FF9922;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.6);">
                        1980년 247,448명
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 89.1%; background-color: #FF9922;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.6);">
                        1985년 267,394명 (정점)
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 79.0%; background-color: #FF9922;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.6);">
                        1990년 237,037명
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 72.0%; background-color: #FF9922;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.6);">
                        1995년 215,970명
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 70.4%; background-color: #FF9922;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.6);">
                        2000년 211,323명
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 68.4%; background-color: #FF9922;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.6);">
                        2005년 205,260명
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 63.7%; background-color: #FF9922;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.6);">
                        2010년 191,197명
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 60.9%; background-color: #FF9922;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.6);">
                        2015년 182,852명
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 60.1%; background-color: #FF9922;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.6);">
                        2020년 180,212명
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 57.0%; background-color: #FF9922;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.6);">
                        2025년 4월 171,012명
                    </div>
                </div>
                <div style="position: relative; height: 36px; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 55.6%; background-color: #FF9922;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.6);">
                        2026년 4월 166,922명
                    </div>
                </div>
            </div>
            <div style="padding: 12px 10px; font-size: 0.75em; color: #666; background-color: #f9f9f9; text-align: center; line-height: 1.6; border-top: 1px solid #ddd;">
                인구는 현재 행정구역이 아닌 해당 연도 행정구역 기준, 그래프 최대 값은 30만 명<br>
                1966-1990: 통계청 인구총조사, 1995-현재: 행정안전부 주민등록인구통계 (외국인 미포함)
            </div>
        </div>

        <!-- 2. 효빈광역시 동구 행정동별 인구 통계 막대그래프 -->
        <div style="margin: 30px auto; border: 2px solid #FF9922; border-radius: 4px; background-color: #fff; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <div style="background-color: #FF9922; color: white; padding: 12px; text-align: center; font-weight: bold; font-size: 1.1em; display: flex; align-items: center; justify-content: center; gap: 8px;">
                <div style="width: 20px; height: 20px; background: white; border-radius: 2px; display: flex; align-items: center; justify-content: center; overflow: hidden;">
                    <img src="이미지/동구.webp" alt="로고" style="max-width: 100%; max-height: 100%; object-fit: contain;" onerror="this.style.display='none';">
                </div>
                효빈광역시 동구 행정동별 인구 통계
            </div>
            <div style="text-align: center; font-size: 11px; padding: 8px; border-bottom: 1px solid #e5e7eb; background: #f8f9fa; color: #333; cursor: pointer; font-weight: bold;">[ 펼치기 · 접기 ]</div>
            
            <div style="display: flex; flex-direction: column;">
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 77.8%; background-color: #FF9922;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">덕현2동 19,448명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 67.3%; background-color: #FF9922;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">전천동 16,825명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 62.0%; background-color: #FF9922;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">사가당1동 15,492명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 57.7%; background-color: #FF9922;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">덕현6동 14,419명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 55.9%; background-color: #FF9922;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">사가당3동 13,978명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 53.7%; background-color: #FF9922;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">덕현11동 13,437명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 48.7%; background-color: #FF9922;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">덕현1동 12,180명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 45.3%; background-color: #FF9922;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">사가당4동 11,333명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 41.1%; background-color: #FF9922;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">덕현5동 10,279명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 40.5%; background-color: #FF9922;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">덕현3동 10,119명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 36.9%; background-color: #FF9922;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">덕현4동 9,217명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 32.5%; background-color: #FF9922;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">덕현7동 8,123명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 31.9%; background-color: #FF9922;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">사가당2동 7,980명</div>
                </div>
                <div style="position: relative; height: 32px; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 16.4%; background-color: #FF9922;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">덕현9동 4,092명</div>
                </div>
            </div>
            <div style="padding: 10px; font-size: 0.75em; color: #666; background-color: #f9f9f9; text-align: center; border-top: 1px solid #ddd;">
                2026년 4월 기준 행정안전부 주민등록인구통계, 그래프 최대 값은 25,000명
            </div>
        </div>

        <!-- 3. 행정동별 상세 인구 테이블 -->
        <div style="margin: 30px auto; overflow-x: auto;">
            <table style="width: 100%; border-collapse: collapse; text-align: center; font-size: 0.85em; border: 1px solid #ccc;">
                <thead>
                    <tr>
                        <th style="background-color: #FF9922; color: white; padding: 10px; border: 1px solid #ccc;">광역시도</th>
                        <th style="background-color: #FF9922; color: white; padding: 10px; border: 1px solid #ccc;">시군구</th>
                        <th style="background-color: #FF9922; color: white; padding: 10px; border: 1px solid #ccc;">읍면동</th>
                        <th style="background-color: #FF9922; color: white; padding: 10px; border: 1px solid #ccc;">합계 : 2026.4</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="background-color: #f1f3f5; font-weight: bold;">
                        <td style="padding: 8px; border: 1px solid #ccc;">효빈광역시</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">동구</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">-</td>
                        <td style="padding: 8px; border: 1px solid #ccc; color: #d6001c;">166,922</td>
                    </tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">효빈광역시</td><td style="padding: 8px; border: 1px solid #ccc;">동구</td><td style="padding: 8px; border: 1px solid #ccc;">덕현11동</td><td style="padding: 8px; border: 1px solid #ccc;">13,437</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">효빈광역시</td><td style="padding: 8px; border: 1px solid #ccc;">동구</td><td style="padding: 8px; border: 1px solid #ccc;">덕현1동</td><td style="padding: 8px; border: 1px solid #ccc;">12,180</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">효빈광역시</td><td style="padding: 8px; border: 1px solid #ccc;">동구</td><td style="padding: 8px; border: 1px solid #ccc;">덕현2동</td><td style="padding: 8px; border: 1px solid #ccc;">19,448</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">효빈광역시</td><td style="padding: 8px; border: 1px solid #ccc;">동구</td><td style="padding: 8px; border: 1px solid #ccc;">덕현3동</td><td style="padding: 8px; border: 1px solid #ccc;">10,119</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">효빈광역시</td><td style="padding: 8px; border: 1px solid #ccc;">동구</td><td style="padding: 8px; border: 1px solid #ccc;">덕현4동</td><td style="padding: 8px; border: 1px solid #ccc;">9,217</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">효빈광역시</td><td style="padding: 8px; border: 1px solid #ccc;">동구</td><td style="padding: 8px; border: 1px solid #ccc;">덕현5동</td><td style="padding: 8px; border: 1px solid #ccc;">10,279</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">효빈광역시</td><td style="padding: 8px; border: 1px solid #ccc;">동구</td><td style="padding: 8px; border: 1px solid #ccc;">덕현6동</td><td style="padding: 8px; border: 1px solid #ccc;">14,419</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">효빈광역시</td><td style="padding: 8px; border: 1px solid #ccc;">동구</td><td style="padding: 8px; border: 1px solid #ccc;">덕현7동</td><td style="padding: 8px; border: 1px solid #ccc;">8,123</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">효빈광역시</td><td style="padding: 8px; border: 1px solid #ccc;">동구</td><td style="padding: 8px; border: 1px solid #ccc;">덕현9동</td><td style="padding: 8px; border: 1px solid #ccc;">4,092</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">효빈광역시</td><td style="padding: 8px; border: 1px solid #ccc;">동구</td><td style="padding: 8px; border: 1px solid #ccc;">사가당1동</td><td style="padding: 8px; border: 1px solid #ccc;">15,492</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">효빈광역시</td><td style="padding: 8px; border: 1px solid #ccc;">동구</td><td style="padding: 8px; border: 1px solid #ccc;">사가당2동</td><td style="padding: 8px; border: 1px solid #ccc;">7,980</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">효빈광역시</td><td style="padding: 8px; border: 1px solid #ccc;">동구</td><td style="padding: 8px; border: 1px solid #ccc;">사가당3동</td><td style="padding: 8px; border: 1px solid #ccc;">13,978</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">효빈광역시</td><td style="padding: 8px; border: 1px solid #ccc;">동구</td><td style="padding: 8px; border: 1px solid #ccc;">사가당4동</td><td style="padding: 8px; border: 1px solid #ccc;">11,333</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">효빈광역시</td><td style="padding: 8px; border: 1px solid #ccc;">동구</td><td style="padding: 8px; border: 1px solid #ccc;">전천동</td><td style="padding: 8px; border: 1px solid #ccc;">16,825</td></tr>
                </tbody>
            </table>
        </div>

        <!-- 4. 연도별 동구 인구 변천사 테이블 (1966~2026.4) -->
        <div style="margin: 30px auto; overflow-x: auto;">
            <div style="font-weight: bold; margin-bottom: 10px; font-size: 1.1em; text-align: center;">연도별 행정구역 인구 변천사 (1966~2026.4)</div>
            <table style="width: max-content !important; min-width: 100% !important; table-layout: auto !important; border-collapse: collapse; text-align: right; font-size: 0.75em; white-space: nowrap; border: 1px solid #ccc;">
                <thead>
                    <tr style="background-color: #FF9922; color: white; text-align: center;">
                        <th style="padding: 8px; border: 1px solid #ccc;">구분</th>
                        <th style="padding: 8px; border: 1px solid #ccc;">1966</th>
                        <th style="padding: 8px; border: 1px solid #ccc;">1970</th>
                        <th style="padding: 8px; border: 1px solid #ccc;">1975</th>
                        <th style="padding: 8px; border: 1px solid #ccc;">1980</th>
                        <th style="padding: 8px; border: 1px solid #ccc;">1985</th>
                        <th style="padding: 8px; border: 1px solid #ccc;">1990</th>
                        <th style="padding: 8px; border: 1px solid #ccc;">1995</th>
                        <th style="padding: 8px; border: 1px solid #ccc;">2000</th>
                        <th style="padding: 8px; border: 1px solid #ccc;">2005</th>
                        <th style="padding: 8px; border: 1px solid #ccc;">2010</th>
                        <th style="padding: 8px; border: 1px solid #ccc;">2015</th>
                        <th style="padding: 8px; border: 1px solid #ccc;">2020</th>
                        <th style="padding: 8px; border: 1px solid #ccc;">2025</th>
                        <th style="padding: 8px; border: 1px solid #ccc;">2026.4</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="background-color: #f1f3f5; font-weight: bold;">
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center; color: #555;">효빈광역시 (참고)</td>
                        <td style="padding: 6px; border: 1px solid #ccc; color: #555;">593,816명</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">877,225명</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">1,235,343명</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">1,514,404명</td>
                        <td style="padding: 6px; border: 1px solid #ccc; color: #555;">1,830,061명</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2,046,376명</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2,271,111명</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2,401,697명</td>
                        <td style="padding: 6px; border: 1px solid #ccc; color: #555;">2,466,659명</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2,584,443명</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2,720,665명</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2,832,860명</td>
                        <td style="padding: 6px; border: 1px solid #ccc; color: #555;">2,967,406명</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2,999,656명</td>
                    </tr>
                    <tr style="background-color: #f6fdf6; font-weight: bold;">
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center;">효빈광역시 동구</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">230,548명</td><td style="padding: 6px; border: 1px solid #ccc;">247,448명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">267,394명</td><td style="padding: 6px; border: 1px solid #ccc;">237,037명</td><td style="padding: 6px; border: 1px solid #ccc;">215,970명</td><td style="padding: 6px; border: 1px solid #ccc;">211,323명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">205,260명</td><td style="padding: 6px; border: 1px solid #ccc;">191,197명</td><td style="padding: 6px; border: 1px solid #ccc;">182,852명</td><td style="padding: 6px; border: 1px solid #ccc;">180,212명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">171,012명</td><td style="padding: 6px; border: 1px solid #ccc; color:#d6001c;">166,922명</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    `;

    container.innerHTML = html;
}