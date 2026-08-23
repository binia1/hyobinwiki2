/**
 * 덕빈남도 인구 추이 및 통계 테이블 생성 함수
 * @param {string} containerId - 표를 넣을 HTML 요소의 ID
 */
function renderDeoknamPopTable(containerId) {
    const container = document.getElementById(containerId);
    
    if (!container) {
        console.error("렌더링 오류: '" + containerId + "' 요소를 찾을 수 없습니다.");
        return;
    }

    const html = `
    <div class="deoknam-pop-wrapper" style="font-family: 'Noto Sans KR', sans-serif; color: #333; max-width: 900px; margin: 0 auto;">
        
        <!-- 1. 덕빈남도 전체 인구 추이 그래프 -->
        <div style="margin: 20px auto; border: 2px solid #335566; border-radius: 4px; background-color: #fff; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <div style="padding: 15px 10px; border-bottom: 1px solid #335566; text-align: center; background-color: #f8f9fa;">
                <div style="font-size: 1.2em; font-weight: 900; color: #111;">덕빈남도 인구 추이</div>
                <div style="font-size: 0.85em; color: #666; margin-top: 5px;">(1949년 ~ 현재)</div>
            </div>
            
            <div style="display: flex; flex-direction: column;">
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 62.1%; background-color: #335566; z-index: 1;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                        1949년 1,552,233명
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 71.0%; background-color: #335566; z-index: 1;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                        1955년 1,774,738명
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 76.7%; background-color: #335566; z-index: 1;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                        1960년 1,918,517명
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 84.3%; background-color: #335566; z-index: 1;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                        1966년 2,107,862명
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 85.4%; background-color: #335566; z-index: 1;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                        1970년 2,136,197명
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 86.5%; background-color: #335566; z-index: 1;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                        1975년 2,161,395명 (정점)
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 85.4%; background-color: #335566; z-index: 1;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                        1980년 2,136,141명
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 84.8%; background-color: #335566; z-index: 1;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                        1985년 2,119,803명
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 84.6%; background-color: #335566; z-index: 1;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                        1990년 2,115,803명
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 83.3%; background-color: #335566; z-index: 1;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                        1995년 2,083,724명
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 82.5%; background-color: #335566; z-index: 1;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                        2000년 2,061,567명
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 81.8%; background-color: #335566; z-index: 1;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                        2005년 2,044,060명
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 81.4%; background-color: #335566; z-index: 1;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                        2010년 2,034,003명
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 81.7%; background-color: #335566; z-index: 1;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                        2015년 2,041,389명
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 81.2%; background-color: #335566; z-index: 1;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                        2020년 2,029,083명
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 80.6%; background-color: #335566; z-index: 1;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                        2025년 2,015,432명
                    </div>
                </div>
                <div style="position: relative; height: 36px; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 80.6%; background-color: #335566; z-index: 1;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                        2026년 4월 2,013,958명
                    </div>
                </div>
            </div>
            <div style="padding: 12px 10px; font-size: 0.75em; color: #666; background-color: #f9f9f9; text-align: center; line-height: 1.6; border-top: 1px solid #ddd;">
                인구는 현재 행정구역이 아닌 해당 연도 행정구역 기준, 그래프 최대 값은 250만 명<br>
                1949-1990: 통계청 인구총조사, 1995-현재: 행정안전부 주민등록인구통계 (외국인 미포함)
            </div>
        </div>

        <!-- 2. 덕빈남도 기초자치단체 인구 통계 막대그래프 -->
        <div style="margin: 30px auto; border: 2px solid #335566; border-radius: 4px; background-color: #fff; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <div style="background-color: #335566; color: white; padding: 12px; text-align: center; font-weight: bold; font-size: 1.1em; display: flex; align-items: center; justify-content: center; gap: 8px;">
                <div style="width: 20px; height: 20px; background: white; border-radius: 2px; display: flex; align-items: center; justify-content: center; overflow: hidden;">
                    <img src="이미지/덕빈남도_로고.webp" alt="로고" style="max-width: 100%; max-height: 100%; object-fit: contain;" onerror="this.style.display='none'">
                </div>
                덕빈남도 기초자치단체 인구 통계
            </div>
            <div style="text-align: center; font-size: 11px; padding: 8px; border-bottom: 1px solid #e5e7eb; background: #f8f9fa; color: #333; cursor: pointer; font-weight: bold;">[ 펼치기 · 접기 ]</div>
            
            <div style="display: flex; flex-direction: column;">
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 95.2%; background-color: #335566;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">덕주시 523,503명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 60.2%; background-color: #335566;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">낙주시 331,203명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 40.1%; background-color: #335566;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">방산시 220,314명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 22.5%; background-color: #335566;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">운진군 123,921명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 22.0%; background-color: #335566;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">마진시 121,122명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 18.8%; background-color: #335566;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">매산군 103,221명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 18.2%; background-color: #335566;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">매성시 100,123명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 15.0%; background-color: #335566;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">비천시 82,384명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 14.6%; background-color: #335566;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">석창군 80,234명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 13.3%; background-color: #335566;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">하정시 73,293명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 9.1%; background-color: #335566;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">관수군 50,322명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 7.8%; background-color: #335566;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">분주군 43,001명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 7.2%; background-color: #335566;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">곡천군 39,521명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 6.6%; background-color: #335566;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">인곡군 36,535명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 5.9%; background-color: #335566;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">원안군 32,501명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 5.1%; background-color: #335566;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">두원군 28,101명</div>
                </div>
                <div style="position: relative; height: 32px; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 4.5%; background-color: #335566;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">고포군 24,659명</div>
                </div>
            </div>
            <div style="padding: 10px; font-size: 0.75em; color: #666; background-color: #f9f9f9; text-align: center; border-top: 1px solid #ddd;">
                2026년 4월 기준 행정안전부 주민등록인구통계, 그래프 최대 값은 55만 명
            </div>
        </div>

        <!-- 3. 시군구별 2025 vs 2026 비교 테이블 (덕빈남도) -->
        <div style="margin: 30px auto; overflow-x: auto;">
            <table style="width: 100%; border-collapse: collapse; text-align: center; font-size: 0.85em; border: 1px solid #ccc;">
                <thead>
                    <tr>
                        <th style="background-color: #335566; color: white; padding: 10px; border: 1px solid #ccc;">광역시도</th>
                        <th style="background-color: #335566; color: white; padding: 10px; border: 1px solid #ccc;">시군구</th>
                        <th style="background-color: #335566; color: white; padding: 10px; border: 1px solid #ccc;">합계 : 2025.1</th>
                        <th style="background-color: #335566; color: white; padding: 10px; border: 1px solid #ccc;">합계 : 2026.4</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="background-color: #eaf2f5; font-weight: bold;">
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">-</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">2,015,432</td>
                        <td style="padding: 8px; border: 1px solid #ccc; color: #d6001c;">2,013,958</td>
                    </tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td><td style="padding: 8px; border: 1px solid #ccc;">덕주시 덕산구</td><td style="padding: 8px; border: 1px solid #ccc;">234,342</td><td style="padding: 8px; border: 1px solid #ccc;">235,311</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td><td style="padding: 8px; border: 1px solid #ccc;">덕주시 조전구</td><td style="padding: 8px; border: 1px solid #ccc;">286,890</td><td style="padding: 8px; border: 1px solid #ccc;">288,192</td></tr>
                    <tr style="background-color: #fafbfc; font-weight: bold; color: #555;"><td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td><td style="padding: 8px; border: 1px solid #ccc;">(덕주시 소계)</td><td style="padding: 8px; border: 1px solid #ccc;">521,232</td><td style="padding: 8px; border: 1px solid #ccc;">523,503</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td><td style="padding: 8px; border: 1px solid #ccc;">낙주시</td><td style="padding: 8px; border: 1px solid #ccc;">329,081</td><td style="padding: 8px; border: 1px solid #ccc;">331,203</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td><td style="padding: 8px; border: 1px solid #ccc;">방산시</td><td style="padding: 8px; border: 1px solid #ccc;">217,344</td><td style="padding: 8px; border: 1px solid #ccc;">220,314</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td><td style="padding: 8px; border: 1px solid #ccc;">운진군</td><td style="padding: 8px; border: 1px solid #ccc;">122,232</td><td style="padding: 8px; border: 1px solid #ccc;">123,921</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td><td style="padding: 8px; border: 1px solid #ccc;">마진시</td><td style="padding: 8px; border: 1px solid #ccc;">124,453</td><td style="padding: 8px; border: 1px solid #ccc;">121,122</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td><td style="padding: 8px; border: 1px solid #ccc;">매산군</td><td style="padding: 8px; border: 1px solid #ccc;">102,204</td><td style="padding: 8px; border: 1px solid #ccc;">103,221</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td><td style="padding: 8px; border: 1px solid #ccc;">매성시</td><td style="padding: 8px; border: 1px solid #ccc;">100,422</td><td style="padding: 8px; border: 1px solid #ccc;">100,123</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td><td style="padding: 8px; border: 1px solid #ccc;">비천시</td><td style="padding: 8px; border: 1px solid #ccc;">85,422</td><td style="padding: 8px; border: 1px solid #ccc;">82,384</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td><td style="padding: 8px; border: 1px solid #ccc;">석창군</td><td style="padding: 8px; border: 1px solid #ccc;">80,041</td><td style="padding: 8px; border: 1px solid #ccc;">80,234</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td><td style="padding: 8px; border: 1px solid #ccc;">하정시</td><td style="padding: 8px; border: 1px solid #ccc;">77,311</td><td style="padding: 8px; border: 1px solid #ccc;">73,293</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td><td style="padding: 8px; border: 1px solid #ccc;">관수군</td><td style="padding: 8px; border: 1px solid #ccc;">50,231</td><td style="padding: 8px; border: 1px solid #ccc;">50,322</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td><td style="padding: 8px; border: 1px solid #ccc;">분주군</td><td style="padding: 8px; border: 1px solid #ccc;">43,121</td><td style="padding: 8px; border: 1px solid #ccc;">43,001</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td><td style="padding: 8px; border: 1px solid #ccc;">곡천군</td><td style="padding: 8px; border: 1px solid #ccc;">40,411</td><td style="padding: 8px; border: 1px solid #ccc;">39,521</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td><td style="padding: 8px; border: 1px solid #ccc;">인곡군</td><td style="padding: 8px; border: 1px solid #ccc;">36,442</td><td style="padding: 8px; border: 1px solid #ccc;">36,535</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td><td style="padding: 8px; border: 1px solid #ccc;">원안군</td><td style="padding: 8px; border: 1px solid #ccc;">32,123</td><td style="padding: 8px; border: 1px solid #ccc;">32,501</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td><td style="padding: 8px; border: 1px solid #ccc;">두원군</td><td style="padding: 8px; border: 1px solid #ccc;">28,131</td><td style="padding: 8px; border: 1px solid #ccc;">28,101</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">덕빈남도</td><td style="padding: 8px; border: 1px solid #ccc;">고포군</td><td style="padding: 8px; border: 1px solid #ccc;">25,231</td><td style="padding: 8px; border: 1px solid #ccc;">24,659</td></tr>
                </tbody>
            </table>
        </div>

        <!-- 4. 연도별 구군별 인구 변천사 테이블 (1966~2026.4) -->
        <div style="margin: 30px auto; overflow-x: auto;">
            <div style="font-weight: bold; margin-bottom: 10px; font-size: 1.1em; text-align: center;">연도별 행정구역 인구 변천사 (1966~2026.4)</div>
            <table style="width: max-content !important; min-width: 100% !important; table-layout: auto !important; border-collapse: collapse; text-align: right; font-size: 0.75em; white-space: nowrap; border: 1px solid #ccc;">
                <thead>
                    <tr style="background-color: #335566; color: white; text-align: center;">
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
                    <tr>
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center; font-weight: bold; background: #fdfdfd;">덕주군-&gt;덕주시</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">104,391명</td><td style="padding: 6px; border: 1px solid #ccc;">125,928명</td><td style="padding: 6px; border: 1px solid #ccc;">148,056명</td><td style="padding: 6px; border: 1px solid #ccc;">201,283명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">233,975명</td><td style="padding: 6px; border: 1px solid #ccc;">252,938명</td><td style="padding: 6px; border: 1px solid #ccc;">362,123명</td><td style="padding: 6px; border: 1px solid #ccc;">382,451명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">412,947명</td><td style="padding: 6px; border: 1px solid #ccc;">441,923명</td><td style="padding: 6px; border: 1px solid #ccc;">474,843명</td><td style="padding: 6px; border: 1px solid #ccc;">501,235명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">521,232명</td><td style="padding: 6px; border: 1px solid #ccc;">523,503명</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center; font-weight: bold; background: #fdfdfd;">덕산군</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">135,293명</td><td style="padding: 6px; border: 1px solid #ccc;">141,283명</td><td style="padding: 6px; border: 1px solid #ccc;">144,929명</td><td style="padding: 6px; border: 1px solid #ccc;">112,938명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">91,562명</td><td style="padding: 6px; border: 1px solid #ccc;">81,283명</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td>
                    </tr>
                    <tr><td style="padding: 6px; border: 1px solid #ccc; text-align: center; color: #555;">↳ 덕주시 덕산구</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">227,013명</td><td style="padding: 6px; border: 1px solid #ccc;">234,342명</td><td style="padding: 6px; border: 1px solid #ccc;">235,311명</td></tr>
                    <tr><td style="padding: 6px; border: 1px solid #ccc; text-align: center; color: #555;">↳ 덕주시 조전구</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">274,222명</td><td style="padding: 6px; border: 1px solid #ccc;">286,890명</td><td style="padding: 6px; border: 1px solid #ccc;">288,192명</td></tr>
                    
                    <tr>
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center; font-weight: bold; background: #fdfdfd;">낙주군-&gt;낙주시</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">141,035명</td><td style="padding: 6px; border: 1px solid #ccc;">145,281명</td><td style="padding: 6px; border: 1px solid #ccc;">158,096명</td><td style="padding: 6px; border: 1px solid #ccc;">161,392명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">89,394명</td><td style="padding: 6px; border: 1px solid #ccc;">112,013명</td><td style="padding: 6px; border: 1px solid #ccc;">218,293명</td><td style="padding: 6px; border: 1px solid #ccc;">241,451명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">260,986명</td><td style="padding: 6px; border: 1px solid #ccc;">275,812명</td><td style="padding: 6px; border: 1px solid #ccc;">292,468명</td><td style="padding: 6px; border: 1px solid #ccc;">308,526명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">329,081명</td><td style="padding: 6px; border: 1px solid #ccc;">331,203명</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center; font-weight: bold; background: #fdfdfd;">낙산군</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">103,838명</td><td style="padding: 6px; border: 1px solid #ccc;">103,270명</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center; font-weight: bold; background: #fdfdfd;">방산군-&gt;방산시</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">146,996명</td><td style="padding: 6px; border: 1px solid #ccc;">154,291명</td><td style="padding: 6px; border: 1px solid #ccc;">156,695명</td><td style="padding: 6px; border: 1px solid #ccc;">79,771명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">84,966명</td><td style="padding: 6px; border: 1px solid #ccc;">90,797명</td><td style="padding: 6px; border: 1px solid #ccc;">202,391명</td><td style="padding: 6px; border: 1px solid #ccc;">185,293명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">184,855명</td><td style="padding: 6px; border: 1px solid #ccc;">188,382명</td><td style="padding: 6px; border: 1px solid #ccc;">201,887명</td><td style="padding: 6px; border: 1px solid #ccc;">205,089명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">217,344명</td><td style="padding: 6px; border: 1px solid #ccc;">220,314명</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center; font-weight: bold; background: #fdfdfd;">방천군</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">83,167명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">88,532명</td><td style="padding: 6px; border: 1px solid #ccc;">94,496명</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center; font-weight: bold; background: #fdfdfd;">마진군-&gt;마진시</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">147,582명</td><td style="padding: 6px; border: 1px solid #ccc;">152,938명</td><td style="padding: 6px; border: 1px solid #ccc;">159,441명</td><td style="padding: 6px; border: 1px solid #ccc;">152,938명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">151,706명</td><td style="padding: 6px; border: 1px solid #ccc;">155,293명</td><td style="padding: 6px; border: 1px solid #ccc;">158,293명</td><td style="padding: 6px; border: 1px solid #ccc;">151,293명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">146,918명</td><td style="padding: 6px; border: 1px solid #ccc;">138,689명</td><td style="padding: 6px; border: 1px solid #ccc;">136,516명</td><td style="padding: 6px; border: 1px solid #ccc;">130,677명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">124,453명</td><td style="padding: 6px; border: 1px solid #ccc;">121,122명</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center; font-weight: bold; background: #fdfdfd;">하정군-&gt;하정시</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">108,306명</td><td style="padding: 6px; border: 1px solid #ccc;">123,188명</td><td style="padding: 6px; border: 1px solid #ccc;">122,689명</td><td style="padding: 6px; border: 1px solid #ccc;">107,335명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">86,157명</td><td style="padding: 6px; border: 1px solid #ccc;">71,586명</td><td style="padding: 6px; border: 1px solid #ccc;">111,283명</td><td style="padding: 6px; border: 1px solid #ccc;">98,281명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">93,479명</td><td style="padding: 6px; border: 1px solid #ccc;">89,532명</td><td style="padding: 6px; border: 1px solid #ccc;">84,914명</td><td style="padding: 6px; border: 1px solid #ccc;">81,932명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">77,311명</td><td style="padding: 6px; border: 1px solid #ccc;">73,293명</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center; font-weight: bold; background: #fdfdfd;">하산군</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">95,987명</td><td style="padding: 6px; border: 1px solid #ccc;">80,323명</td><td style="padding: 6px; border: 1px solid #ccc;">68,793명</td><td style="padding: 6px; border: 1px solid #ccc;">64,057명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">56,234명</td><td style="padding: 6px; border: 1px solid #ccc;">53,697명</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center; font-weight: bold; background: #fdfdfd;">비천군-&gt;비천시</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">87,888명</td><td style="padding: 6px; border: 1px solid #ccc;">89,915명</td><td style="padding: 6px; border: 1px solid #ccc;">96,864명</td><td style="padding: 6px; border: 1px solid #ccc;">94,929명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">96,397명</td><td style="padding: 6px; border: 1px solid #ccc;">91,025명</td><td style="padding: 6px; border: 1px solid #ccc;">131,283명</td><td style="padding: 6px; border: 1px solid #ccc;">138,291명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">98,048명</td><td style="padding: 6px; border: 1px solid #ccc;">99,436명</td><td style="padding: 6px; border: 1px solid #ccc;">94,775명</td><td style="padding: 6px; border: 1px solid #ccc;">90,662명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">85,422명</td><td style="padding: 6px; border: 1px solid #ccc;">82,384명</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center; font-weight: bold; background: #fdfdfd;">비원군</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">61,289명</td><td style="padding: 6px; border: 1px solid #ccc;">66,043명</td><td style="padding: 6px; border: 1px solid #ccc;">65,449명</td><td style="padding: 6px; border: 1px solid #ccc;">57,462명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">58,896명</td><td style="padding: 6px; border: 1px solid #ccc;">54,268명</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center; font-weight: bold; background: #fdfdfd;">매성시</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">72,139명</td><td style="padding: 6px; border: 1px solid #ccc;">95,293명</td><td style="padding: 6px; border: 1px solid #ccc;">113,485명</td><td style="padding: 6px; border: 1px solid #ccc;">131,293명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">139,151명</td><td style="padding: 6px; border: 1px solid #ccc;">151,293명</td><td style="padding: 6px; border: 1px solid #ccc;">143,291명</td><td style="padding: 6px; border: 1px solid #ccc;">140,293명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">142,914명</td><td style="padding: 6px; border: 1px solid #ccc;">134,474명</td><td style="padding: 6px; border: 1px solid #ccc;">122,583명</td><td style="padding: 6px; border: 1px solid #ccc;">110,753명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">100,422명</td><td style="padding: 6px; border: 1px solid #ccc;">100,123명</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center; font-weight: bold; background: #fdfdfd;">매산군</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">85,644명</td><td style="padding: 6px; border: 1px solid #ccc;">98,193명</td><td style="padding: 6px; border: 1px solid #ccc;">102,325명</td><td style="padding: 6px; border: 1px solid #ccc;">105,293명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">110,766명</td><td style="padding: 6px; border: 1px solid #ccc;">114,497명</td><td style="padding: 6px; border: 1px solid #ccc;">111,283명</td><td style="padding: 6px; border: 1px solid #ccc;">105,293명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">110,099명</td><td style="padding: 6px; border: 1px solid #ccc;">111,493명</td><td style="padding: 6px; border: 1px solid #ccc;">107,099명</td><td style="padding: 6px; border: 1px solid #ccc;">100,954명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">102,204명</td><td style="padding: 6px; border: 1px solid #ccc;">103,221명</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center; font-weight: bold; background: #fdfdfd;">운진군</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">77,629명</td><td style="padding: 6px; border: 1px solid #ccc;">79,565명</td><td style="padding: 6px; border: 1px solid #ccc;">82,754명</td><td style="padding: 6px; border: 1px solid #ccc;">85,293명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">85,681명</td><td style="padding: 6px; border: 1px solid #ccc;">90,226명</td><td style="padding: 6px; border: 1px solid #ccc;">91,283명</td><td style="padding: 6px; border: 1px solid #ccc;">98,451명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">104,021명</td><td style="padding: 6px; border: 1px solid #ccc;">105,854명</td><td style="padding: 6px; border: 1px solid #ccc;">113,644명</td><td style="padding: 6px; border: 1px solid #ccc;">119,049명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">122,232명</td><td style="padding: 6px; border: 1px solid #ccc;">123,921명</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center; font-weight: bold; background: #fdfdfd;">석창군</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">86,627명</td><td style="padding: 6px; border: 1px solid #ccc;">78,283명</td><td style="padding: 6px; border: 1px solid #ccc;">77,168명</td><td style="padding: 6px; border: 1px solid #ccc;">66,888명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">63,722명</td><td style="padding: 6px; border: 1px solid #ccc;">66,473명</td><td style="padding: 6px; border: 1px solid #ccc;">62,382명</td><td style="padding: 6px; border: 1px solid #ccc;">61,283명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">62,025명</td><td style="padding: 6px; border: 1px solid #ccc;">62,953명</td><td style="padding: 6px; border: 1px solid #ccc;">67,347명</td><td style="padding: 6px; border: 1px solid #ccc;">74,637명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">80,041명</td><td style="padding: 6px; border: 1px solid #ccc;">80,234명</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center; font-weight: bold; background: #fdfdfd;">분주군</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">108,527명</td><td style="padding: 6px; border: 1px solid #ccc;">100,670명</td><td style="padding: 6px; border: 1px solid #ccc;">95,055명</td><td style="padding: 6px; border: 1px solid #ccc;">93,039명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">85,077명</td><td style="padding: 6px; border: 1px solid #ccc;">70,103명</td><td style="padding: 6px; border: 1px solid #ccc;">60,324명</td><td style="padding: 6px; border: 1px solid #ccc;">57,854명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">58,184명</td><td style="padding: 6px; border: 1px solid #ccc;">56,295명</td><td style="padding: 6px; border: 1px solid #ccc;">54,835명</td><td style="padding: 6px; border: 1px solid #ccc;">48,062명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">43,121명</td><td style="padding: 6px; border: 1px solid #ccc;">43,001명</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center; font-weight: bold; background: #fdfdfd;">원안군</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">106,282명</td><td style="padding: 6px; border: 1px solid #ccc;">100,758명</td><td style="padding: 6px; border: 1px solid #ccc;">98,834명</td><td style="padding: 6px; border: 1px solid #ccc;">91,283명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">84,786명</td><td style="padding: 6px; border: 1px solid #ccc;">78,886명</td><td style="padding: 6px; border: 1px solid #ccc;">75,041명</td><td style="padding: 6px; border: 1px solid #ccc;">71,195명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">63,504명</td><td style="padding: 6px; border: 1px solid #ccc;">48,121명</td><td style="padding: 6px; border: 1px solid #ccc;">44,122명</td><td style="padding: 6px; border: 1px solid #ccc;">40,122명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">32,123명</td><td style="padding: 6px; border: 1px solid #ccc;">32,501명</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center; font-weight: bold; background: #fdfdfd;">두원군</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">74,704명</td><td style="padding: 6px; border: 1px solid #ccc;">69,566명</td><td style="padding: 6px; border: 1px solid #ccc;">65,426명</td><td style="padding: 6px; border: 1px solid #ccc;">68,458명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">66,915명</td><td style="padding: 6px; border: 1px solid #ccc;">60,019명</td><td style="padding: 6px; border: 1px solid #ccc;">55,321명</td><td style="padding: 6px; border: 1px solid #ccc;">48,766명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">43,003명</td><td style="padding: 6px; border: 1px solid #ccc;">43,673명</td><td style="padding: 6px; border: 1px solid #ccc;">38,952명</td><td style="padding: 6px; border: 1px solid #ccc;">30,777명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">28,131명</td><td style="padding: 6px; border: 1px solid #ccc;">28,101명</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center; font-weight: bold; background: #fdfdfd;">고포군</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">78,118명</td><td style="padding: 6px; border: 1px solid #ccc;">80,926명</td><td style="padding: 6px; border: 1px solid #ccc;">76,795명</td><td style="padding: 6px; border: 1px solid #ccc;">78,308명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">73,051명</td><td style="padding: 6px; border: 1px solid #ccc;">70,739명</td><td style="padding: 6px; border: 1px solid #ccc;">66,834명</td><td style="padding: 6px; border: 1px solid #ccc;">65,646명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">60,595명</td><td style="padding: 6px; border: 1px solid #ccc;">52,823명</td><td style="padding: 6px; border: 1px solid #ccc;">42,692명</td><td style="padding: 6px; border: 1px solid #ccc;">33,932명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">25,231명</td><td style="padding: 6px; border: 1px solid #ccc;">24,659명</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center; font-weight: bold; background: #fdfdfd;">곡천군</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">119,095명</td><td style="padding: 6px; border: 1px solid #ccc;">108,558명</td><td style="padding: 6px; border: 1px solid #ccc;">96,886명</td><td style="padding: 6px; border: 1px solid #ccc;">88,438명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">77,129명</td><td style="padding: 6px; border: 1px solid #ccc;">79,315명</td><td style="padding: 6px; border: 1px solid #ccc;">73,389명</td><td style="padding: 6px; border: 1px solid #ccc;">69,150명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">59,455명</td><td style="padding: 6px; border: 1px solid #ccc;">54,179명</td><td style="padding: 6px; border: 1px solid #ccc;">49,582명</td><td style="padding: 6px; border: 1px solid #ccc;">44,728명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">40,411명</td><td style="padding: 6px; border: 1px solid #ccc;">39,521명</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center; font-weight: bold; background: #fdfdfd;">관수군</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">149,698명</td><td style="padding: 6px; border: 1px solid #ccc;">133,912명</td><td style="padding: 6px; border: 1px solid #ccc;">126,366명</td><td style="padding: 6px; border: 1px solid #ccc;">111,293명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">95,552명</td><td style="padding: 6px; border: 1px solid #ccc;">88,293명</td><td style="padding: 6px; border: 1px solid #ccc;">84,215명</td><td style="padding: 6px; border: 1px solid #ccc;">85,293명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">83,445명</td><td style="padding: 6px; border: 1px solid #ccc;">80,143명</td><td style="padding: 6px; border: 1px solid #ccc;">70,676명</td><td style="padding: 6px; border: 1px solid #ccc;">63,634명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">50,231명</td><td style="padding: 6px; border: 1px solid #ccc;">50,322명</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center; font-weight: bold; background: #fdfdfd;">인곡군</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">120,632명</td><td style="padding: 6px; border: 1px solid #ccc;">111,283명</td><td style="padding: 6px; border: 1px solid #ccc;">105,289명</td><td style="padding: 6px; border: 1px solid #ccc;">101,283명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">96,316명</td><td style="padding: 6px; border: 1px solid #ccc;">85,293명</td><td style="padding: 6px; border: 1px solid #ccc;">76,695명</td><td style="padding: 6px; border: 1px solid #ccc;">61,283명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">59,582명</td><td style="padding: 6px; border: 1px solid #ccc;">50,221명</td><td style="padding: 6px; border: 1px solid #ccc;">44,454명</td><td style="padding: 6px; border: 1px solid #ccc;">37,314명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">36,442명</td><td style="padding: 6px; border: 1px solid #ccc;">36,535명</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    `;

    container.innerHTML = html;
}