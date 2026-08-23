/**
 * 효빈광역시 서구 인구 추이 및 행정동별 통계 테이블 생성 함수
 * @param {string} containerId - 표를 넣을 HTML 요소의 ID
 */
function renderSeoguPopTable(containerId) {
    const container = document.getElementById(containerId);
    
    if (!container) {
        console.error("렌더링 오류: '" + containerId + "' 요소를 찾을 수 없습니다.");
        return;
    }

    const html = `
    <div class="seogu-pop-wrapper" style="font-family: 'Noto Sans KR', sans-serif; color: #333; max-width: 900px; margin: 0 auto;">
        
        <!-- 1. 효빈광역시 서구 인구 추이 막대그래프 (1966 ~ 현재) -->
        <div style="margin: 20px auto; border: 2px solid #00AABB; border-radius: 4px; background-color: #fff; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <div style="padding: 15px 10px; border-bottom: 1px solid #00AABB; text-align: center; background-color: #f8f9fa;">
                <div style="font-size: 1.2em; font-weight: 900; color: #111;">효빈광역시 서구 인구 추이</div>
                <div style="font-size: 0.85em; color: #666; margin-top: 5px;">(1966년 ~ 현재)</div>
            </div>
            
            <div style="display: flex; flex-direction: column;">
                <div style="padding: 8px; font-size: 0.85em; color: #00AABB; text-align: center; border-bottom: 1px solid #fff; background: #fff;">
                    1963년 1월 1일 효빈시 북부출장소, 탄성군 고송면 일부(과진리, 청덕리, 사복리) &rarr; <strong>서구</strong> 설치
                </div>
                
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 48.7%; background-color: #00AABB;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.6);">
                        1966년 170,309명
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 85.2%; background-color: #00AABB;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.6);">
                        1970년 298,267명 (정점)
                    </div>
                </div>
                
                <div style="padding: 8px; font-size: 0.85em; color: #00AABB; text-align: center; border-bottom: 1px solid #fff; background: #fff;">
                    1971년 3월 2일 효빈시 서구 일부 &rarr; <strong>효빈시 북구</strong> 이관
                </div>
                
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 48.7%; background-color: #00AABB;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.6);">
                        1975년 170,548명
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 65.0%; background-color: #00AABB;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.6);">
                        1980년 227,448명
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 69.0%; background-color: #00AABB;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.6);">
                        1985년 241,394명
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 82.0%; background-color: #00AABB;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.6);">
                        1990년 287,037명
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 80.0%; background-color: #00AABB;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.6);">
                        1995년 279,970명
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 74.5%; background-color: #00AABB;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.6);">
                        2000년 260,772명
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 66.9%; background-color: #00AABB;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.6);">
                        2005년 234,260명
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 60.6%; background-color: #00AABB;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.6);">
                        2010년 212,197명
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 68.8%; background-color: #00AABB;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.6);">
                        2015년 240,852명
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 72.2%; background-color: #00AABB;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.6);">
                        2020년 252,632명
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 77.3%; background-color: #00AABB;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.6);">
                        2025년 7월 270,388명
                    </div>
                </div>
                <div style="position: relative; height: 36px; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 79.8%; background-color: #00AABB;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.6);">
                        2026년 4월 279,323명
                    </div>
                </div>
            </div>
            <div style="padding: 12px 10px; font-size: 0.75em; color: #666; background-color: #f9f9f9; text-align: center; line-height: 1.6; border-top: 1px solid #ddd;">
                인구는 현재 행정구역이 아닌 해당 연도 행정구역 기준, 그래프 최대 값은 35만 명<br>
                1966-1990: 통계청 인구총조사, 1995-현재: 행정안전부 주민등록인구통계 (외국인 미포함)
            </div>
        </div>

        <!-- 2. 효빈광역시 서구 행정동별 인구 통계 막대그래프 -->
        <div style="margin: 30px auto; border: 2px solid #00AABB; border-radius: 4px; background-color: #fff; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <div style="background-color: #00AABB; color: white; padding: 12px; text-align: center; font-weight: bold; font-size: 1.1em; display: flex; align-items: center; justify-content: center; gap: 8px;">
                <div style="width: 20px; height: 20px; background: white; border-radius: 2px; display: flex; align-items: center; justify-content: center; overflow: hidden;">
                    <img src="이미지/서구.webp" alt="로고" style="max-width: 100%; max-height: 100%; object-fit: contain;" onerror="this.style.display='none';">
                </div>
                효빈광역시 서구 행정동별 인구 통계
            </div>
            <div style="text-align: center; font-size: 11px; padding: 8px; border-bottom: 1px solid #e5e7eb; background: #f8f9fa; color: #333; cursor: pointer; font-weight: bold;">[ 펼치기 · 접기 ]</div>
            
            <div style="display: flex; flex-direction: column;">
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 93.7%; background-color: #00AABB;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">청덕3동 32,785명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 82.9%; background-color: #00AABB;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">과진6동 29,014명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 73.7%; background-color: #00AABB;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">청덕1동 25,802명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 70.4%; background-color: #00AABB;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">사복2동 24,639명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 70.0%; background-color: #00AABB;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">당선3동 24,493명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 52.4%; background-color: #00AABB;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">사복1동 18,355명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 45.9%; background-color: #00AABB;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">당선4동 16,061명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 44.1%; background-color: #00AABB;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">당선2동 15,421명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 40.7%; background-color: #00AABB;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">당선1동 14,252명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 40.0%; background-color: #00AABB;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">과진3동 13,988명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 38.2%; background-color: #00AABB;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">과진2동 13,366명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 34.6%; background-color: #00AABB;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">과진5동 12,104명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 33.1%; background-color: #00AABB;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">청덕2동 11,582명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 28.8%; background-color: #00AABB;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">과진4동 10,068명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 22.1%; background-color: #00AABB;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">과진7동 7,729명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 14.7%; background-color: #00AABB;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">과진1동 5,139명</div>
                </div>
                <div style="position: relative; height: 32px; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 12.9%; background-color: #00AABB;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">북성동 4,525명</div>
                </div>
            </div>
            <div style="padding: 10px; font-size: 0.75em; color: #666; background-color: #f9f9f9; text-align: center; border-top: 1px solid #ddd;">
                2026년 4월 기준 행정안전부 주민등록인구통계, 그래프 최대 값은 35,000명
            </div>
        </div>

        <!-- 3. 행정동별 상세 인구 테이블 -->
        <div style="margin: 30px auto; overflow-x: auto;">
            <table style="width: 100%; border-collapse: collapse; text-align: center; font-size: 0.85em; border: 1px solid #ccc;">
                <thead>
                    <tr>
                        <th style="background-color: #00AABB; color: white; padding: 10px; border: 1px solid #ccc;">광역시도</th>
                        <th style="background-color: #00AABB; color: white; padding: 10px; border: 1px solid #ccc;">시군구</th>
                        <th style="background-color: #00AABB; color: white; padding: 10px; border: 1px solid #ccc;">읍면동</th>
                        <th style="background-color: #00AABB; color: white; padding: 10px; border: 1px solid #ccc;">합계 : 2026.4</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="background-color: #f1f3f5; font-weight: bold;">
                        <td style="padding: 8px; border: 1px solid #ccc;">효빈광역시</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">서구</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">-</td>
                        <td style="padding: 8px; border: 1px solid #ccc; color: #d6001c;">279,323</td>
                    </tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">효빈광역시</td><td style="padding: 8px; border: 1px solid #ccc;">서구</td><td style="padding: 8px; border: 1px solid #ccc;">과진1동</td><td style="padding: 8px; border: 1px solid #ccc;">5,139</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">효빈광역시</td><td style="padding: 8px; border: 1px solid #ccc;">서구</td><td style="padding: 8px; border: 1px solid #ccc;">과진2동</td><td style="padding: 8px; border: 1px solid #ccc;">13,366</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">효빈광역시</td><td style="padding: 8px; border: 1px solid #ccc;">서구</td><td style="padding: 8px; border: 1px solid #ccc;">과진3동</td><td style="padding: 8px; border: 1px solid #ccc;">13,988</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">효빈광역시</td><td style="padding: 8px; border: 1px solid #ccc;">서구</td><td style="padding: 8px; border: 1px solid #ccc;">과진4동</td><td style="padding: 8px; border: 1px solid #ccc;">10,068</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">효빈광역시</td><td style="padding: 8px; border: 1px solid #ccc;">서구</td><td style="padding: 8px; border: 1px solid #ccc;">과진5동</td><td style="padding: 8px; border: 1px solid #ccc;">12,104</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">효빈광역시</td><td style="padding: 8px; border: 1px solid #ccc;">서구</td><td style="padding: 8px; border: 1px solid #ccc;">과진6동</td><td style="padding: 8px; border: 1px solid #ccc;">29,014</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">효빈광역시</td><td style="padding: 8px; border: 1px solid #ccc;">서구</td><td style="padding: 8px; border: 1px solid #ccc;">과진7동</td><td style="padding: 8px; border: 1px solid #ccc;">7,729</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">효빈광역시</td><td style="padding: 8px; border: 1px solid #ccc;">서구</td><td style="padding: 8px; border: 1px solid #ccc;">당선1동</td><td style="padding: 8px; border: 1px solid #ccc;">14,252</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">효빈광역시</td><td style="padding: 8px; border: 1px solid #ccc;">서구</td><td style="padding: 8px; border: 1px solid #ccc;">당선2동</td><td style="padding: 8px; border: 1px solid #ccc;">15,421</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">효빈광역시</td><td style="padding: 8px; border: 1px solid #ccc;">서구</td><td style="padding: 8px; border: 1px solid #ccc;">당선3동</td><td style="padding: 8px; border: 1px solid #ccc;">24,493</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">효빈광역시</td><td style="padding: 8px; border: 1px solid #ccc;">서구</td><td style="padding: 8px; border: 1px solid #ccc;">당선4동</td><td style="padding: 8px; border: 1px solid #ccc;">16,061</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">효빈광역시</td><td style="padding: 8px; border: 1px solid #ccc;">서구</td><td style="padding: 8px; border: 1px solid #ccc;">북성동</td><td style="padding: 8px; border: 1px solid #ccc;">4,525</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">효빈광역시</td><td style="padding: 8px; border: 1px solid #ccc;">서구</td><td style="padding: 8px; border: 1px solid #ccc;">사복1동</td><td style="padding: 8px; border: 1px solid #ccc;">18,355</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">효빈광역시</td><td style="padding: 8px; border: 1px solid #ccc;">서구</td><td style="padding: 8px; border: 1px solid #ccc;">사복2동</td><td style="padding: 8px; border: 1px solid #ccc;">24,639</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">효빈광역시</td><td style="padding: 8px; border: 1px solid #ccc;">서구</td><td style="padding: 8px; border: 1px solid #ccc;">청덕1동</td><td style="padding: 8px; border: 1px solid #ccc;">25,802</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">효빈광역시</td><td style="padding: 8px; border: 1px solid #ccc;">서구</td><td style="padding: 8px; border: 1px solid #ccc;">청덕2동</td><td style="padding: 8px; border: 1px solid #ccc;">11,582</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">효빈광역시</td><td style="padding: 8px; border: 1px solid #ccc;">서구</td><td style="padding: 8px; border: 1px solid #ccc;">청덕3동</td><td style="padding: 8px; border: 1px solid #ccc;">32,785</td></tr>
                </tbody>
            </table>
        </div>

        <!-- 4. 연도별 서구 인구 변천사 테이블 (1966~2026.4) -->
        <div style="margin: 30px auto; overflow-x: auto;">
            <div style="font-weight: bold; margin-bottom: 10px; font-size: 1.1em; text-align: center;">연도별 행정구역 인구 변천사 (1966~2026.4)</div>
            <table style="width: max-content !important; min-width: 100% !important; table-layout: auto !important; border-collapse: collapse; text-align: right; font-size: 0.75em; white-space: nowrap; border: 1px solid #ccc;">
                <thead>
                    <tr style="background-color: #00AABB; color: white; text-align: center;">
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
                    <tr style="background-color: #f5fcfc; font-weight: bold;">
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center;">효빈광역시 서구</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">170,309명</td><td style="padding: 6px; border: 1px solid #ccc;">298,267명</td><td style="padding: 6px; border: 1px solid #ccc;">170,548명</td><td style="padding: 6px; border: 1px solid #ccc;">227,448명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">241,394명</td><td style="padding: 6px; border: 1px solid #ccc;">287,037명</td><td style="padding: 6px; border: 1px solid #ccc;">279,970명</td><td style="padding: 6px; border: 1px solid #ccc;">260,772명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">234,260명</td><td style="padding: 6px; border: 1px solid #ccc;">212,197명</td><td style="padding: 6px; border: 1px solid #ccc;">240,852명</td><td style="padding: 6px; border: 1px solid #ccc;">252,632명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">270,388명</td><td style="padding: 6px; border: 1px solid #ccc; color:#d6001c;">279,323명</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    `;

    container.innerHTML = html;
}