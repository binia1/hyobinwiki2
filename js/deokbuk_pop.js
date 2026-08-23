/**
 * 덕빈북도 인구 추이 및 통계 테이블 생성 함수 (효빈권역 제외 버전)
 * @param {string} containerId - 표를 넣을 HTML 요소의 ID
 */
function renderDeokbukPopTable(containerId) {
    const container = document.getElementById(containerId);
    
    if (!container) {
        console.error("렌더링 오류: '" + containerId + "' 요소를 찾을 수 없습니다.");
        return;
    }

    const html = `
    <div class="deokbuk-pop-wrapper" style="font-family: 'Noto Sans KR', sans-serif; color: #333; max-width: 900px; margin: 0 auto;">
        
        <!-- 1. 덕빈북도 인구 추이 (단일 막대) -->
        <div style="margin: 20px auto; border: 2px solid #4AD898; border-radius: 4px; background-color: #fff; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <div style="padding: 15px 10px; border-bottom: 1px solid #4AD898; text-align: center; background-color: #f8f9fa;">
                <div style="font-size: 1.2em; font-weight: 900; color: #111;">덕빈북도 인구 추이</div>
                <div style="font-size: 0.85em; color: #666; margin-top: 5px;">(1949년 ~ 현재)</div>
            </div>
            
            <div style="display: flex; flex-direction: column;">
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 43.0%; background-color: #4AD898; z-index: 1;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                        1949년 2,152,062명
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 48.0%; background-color: #4AD898; z-index: 1;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                        1955년 2,398,775명
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 63.7%; background-color: #4AD898; z-index: 1;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                        1960년 3,186,699명
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 72.2%; background-color: #4AD898; z-index: 1;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                        1966년 3,608,524명
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 80.4%; background-color: #4AD898; z-index: 1;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                        1970년 4,021,985명
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 89.5%; background-color: #4AD898; z-index: 1;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                        1975년 4,475,727명
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 94.3%; background-color: #4AD898; z-index: 1;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                        1980년 4,715,950명 (정점)
                    </div>
                </div>
                
                <div style="padding: 10px; font-size: 0.85em; background-color: #fff; color: #333; border-bottom: 1px solid #fff; line-height: 1.5; text-align: center;">
                    <span style='color: #4AD898; font-weight: bold;'>1981년 7월 1일</span> 효빈시 &rarr; <span style='font-weight: bold;'>효빈직할시</span> 승격 분리
                </div>
                
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 62.7%; background-color: #4AD898; z-index: 1;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                        1985년 3,132,578명
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 65.2%; background-color: #4AD898; z-index: 1;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                        1990년 3,259,806명
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 63.2%; background-color: #4AD898; z-index: 1;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                        1995년 3,160,756명
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 64.5%; background-color: #4AD898; z-index: 1;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                        2000년 3,226,894명
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 65.5%; background-color: #4AD898; z-index: 1;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                        2005년 3,275,615명
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 67.0%; background-color: #4AD898; z-index: 1;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                        2010년 3,351,587명
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 67.8%; background-color: #4AD898; z-index: 1;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                        2015년 3,390,580명
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 69.2%; background-color: #4AD898; z-index: 1;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                        2020년 3,462,447명
                    </div>
                </div>
                <div style="position: relative; height: 36px; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 70.5%; background-color: #4AD898; z-index: 1;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; z-index: 2; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.6), -1px -1px 2px rgba(0,0,0,0.6); font-size: 0.9em; font-weight: bold;">
                        2025년 3,523,123명
                    </div>
                </div>
            </div>
            <div style="padding: 12px 10px; font-size: 0.75em; color: #666; background-color: #f9f9f9; text-align: center; line-height: 1.6; border-top: 1px solid #ddd;">
                인구는 현재 행정구역이 아닌 해당 연도 행정구역 기준, 그래프 최대 값은 500만 명<br>
                1949-1990: 통계청 인구총조사, 1995-현재: 행정안전부 주민등록인구통계 (외국인 미포함)
            </div>
        </div>

        <!-- 2. 덕빈북도 기초자치단체 인구 통계 막대그래프 -->
        <div style="margin: 30px auto; border: 2px solid #4AD898; border-radius: 4px; background-color: #fff; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <div style="background-color: #4AD898; color: white; padding: 12px; text-align: center; font-weight: bold; font-size: 1.1em; display: flex; align-items: center; justify-content: center; gap: 8px;">
                <div style="width: 20px; height: 20px; background: white; border-radius: 2px; display: flex; align-items: center; justify-content: center; overflow: hidden;">
                    <img src="이미지/덕북로고.webp" alt="로고" style="max-width: 100%; max-height: 100%; object-fit: contain;" onerror="this.style.display='none'">
                </div>
                덕빈북도 기초자치단체 인구 통계
            </div>
            <div style="text-align: center; font-size: 11px; padding: 8px; border-bottom: 1px solid #e5e7eb; background: #f8f9fa; color: #333; cursor: pointer; font-weight: bold;">[ 펼치기 · 접기 ]</div>
            
            <div style="display: flex; flex-direction: column;">
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 98.9%; background-color: #4AD898;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">빈주시 840,783명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 62.9%; background-color: #4AD898;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">천주시 534,714명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 51.0%; background-color: #4AD898;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">서해시 433,202명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 37.6%; background-color: #4AD898;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">약산시 319,899명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 29.5%; background-color: #4AD898;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">강주시 251,132명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 27.6%; background-color: #4AD898;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">군천시 234,321명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 22.8%; background-color: #4AD898;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">계성시 194,211명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 17.6%; background-color: #4AD898;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">낭원군 149,917명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 12.7%; background-color: #4AD898;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">서진시 107,710명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 9.4%; background-color: #4AD898;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">전산시 79,771명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 8.9%; background-color: #4AD898;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">기도군 76,012명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 7.9%; background-color: #4AD898;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">선곡군 66,793명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 6.9%; background-color: #4AD898;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">덕현군 58,862명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 4.9%; background-color: #4AD898;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">상안군 41,651명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 4.6%; background-color: #4AD898;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">저천군 39,445명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 4.6%; background-color: #4AD898;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">치원군 38,849명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 4.5%; background-color: #4AD898;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">반양군 38,302명</div>
                </div>
                <div style="position: relative; height: 32px; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 3.5%; background-color: #4AD898;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">모제군 29,787명</div>
                </div>
            </div>
            <div style="padding: 10px; font-size: 0.75em; color: #666; background-color: #f9f9f9; text-align: center; border-top: 1px solid #ddd;">
                2026년 4월 기준 행정안전부 주민등록인구통계, 그래프 최대 값은 85만 명
            </div>
        </div>

        <!-- 3. 시군구별 2025 vs 2026 비교 테이블 (순수 덕빈북도 지역) -->
        <div style="margin: 30px auto; overflow-x: auto;">
            <table style="width: 100%; border-collapse: collapse; text-align: center; font-size: 0.85em; border: 1px solid #ccc;">
                <thead>
                    <tr>
                        <th style="background-color: #4AD898; color: white; padding: 10px; border: 1px solid #ccc;">광역시도</th>
                        <th style="background-color: #4AD898; color: white; padding: 10px; border: 1px solid #ccc;">시군구</th>
                        <th style="background-color: #4AD898; color: white; padding: 10px; border: 1px solid #ccc;">합계 : 2025.1</th>
                        <th style="background-color: #4AD898; color: white; padding: 10px; border: 1px solid #ccc;">합계 : 2026.4</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="background-color: #f1f3f5; font-weight: bold;">
                        <td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">-</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">3,526,334</td>
                        <td style="padding: 8px; border: 1px solid #ccc; color: #d6001c;">3,535,361</td>
                    </tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td><td style="padding: 8px; border: 1px solid #ccc;">강주시</td><td style="padding: 8px; border: 1px solid #ccc;">255,914</td><td style="padding: 8px; border: 1px solid #ccc;">251,132</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td><td style="padding: 8px; border: 1px solid #ccc;">계성시</td><td style="padding: 8px; border: 1px solid #ccc;">193,963</td><td style="padding: 8px; border: 1px solid #ccc;">194,211</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td><td style="padding: 8px; border: 1px solid #ccc;">군천시</td><td style="padding: 8px; border: 1px solid #ccc;">233,243</td><td style="padding: 8px; border: 1px solid #ccc;">234,321</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td><td style="padding: 8px; border: 1px solid #ccc;">기도군</td><td style="padding: 8px; border: 1px solid #ccc;">75,274</td><td style="padding: 8px; border: 1px solid #ccc;">76,012</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td><td style="padding: 8px; border: 1px solid #ccc;">낭원군</td><td style="padding: 8px; border: 1px solid #ccc;">149,864</td><td style="padding: 8px; border: 1px solid #ccc;">149,917</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td><td style="padding: 8px; border: 1px solid #ccc;">덕현군</td><td style="padding: 8px; border: 1px solid #ccc;">58,875</td><td style="padding: 8px; border: 1px solid #ccc;">58,862</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td><td style="padding: 8px; border: 1px solid #ccc;">모제군</td><td style="padding: 8px; border: 1px solid #ccc;">29,823</td><td style="padding: 8px; border: 1px solid #ccc;">29,787</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td><td style="padding: 8px; border: 1px solid #ccc;">반양군</td><td style="padding: 8px; border: 1px solid #ccc;">38,372</td><td style="padding: 8px; border: 1px solid #ccc;">38,302</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td><td style="padding: 8px; border: 1px solid #ccc;">빈주시 가원구</td><td style="padding: 8px; border: 1px solid #ccc;">298,557</td><td style="padding: 8px; border: 1px solid #ccc;">305,312</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td><td style="padding: 8px; border: 1px solid #ccc;">빈주시 빈성구</td><td style="padding: 8px; border: 1px solid #ccc;">199,816</td><td style="padding: 8px; border: 1px solid #ccc;">197,861</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td><td style="padding: 8px; border: 1px solid #ccc;">빈주시 장기구</td><td style="padding: 8px; border: 1px solid #ccc;">338,967</td><td style="padding: 8px; border: 1px solid #ccc;">337,610</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td><td style="padding: 8px; border: 1px solid #ccc;">상안군</td><td style="padding: 8px; border: 1px solid #ccc;">41,660</td><td style="padding: 8px; border: 1px solid #ccc;">41,651</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td><td style="padding: 8px; border: 1px solid #ccc;">서진시</td><td style="padding: 8px; border: 1px solid #ccc;">110,511</td><td style="padding: 8px; border: 1px solid #ccc;">107,710</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td><td style="padding: 8px; border: 1px solid #ccc;">서해시</td><td style="padding: 8px; border: 1px solid #ccc;">432,053</td><td style="padding: 8px; border: 1px solid #ccc;">433,202</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td><td style="padding: 8px; border: 1px solid #ccc;">선곡군</td><td style="padding: 8px; border: 1px solid #ccc;">66,511</td><td style="padding: 8px; border: 1px solid #ccc;">66,793</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td><td style="padding: 8px; border: 1px solid #ccc;">약산시</td><td style="padding: 8px; border: 1px solid #ccc;">319,490</td><td style="padding: 8px; border: 1px solid #ccc;">319,899</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td><td style="padding: 8px; border: 1px solid #ccc;">저천군</td><td style="padding: 8px; border: 1px solid #ccc;">40,479</td><td style="padding: 8px; border: 1px solid #ccc;">39,445</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td><td style="padding: 8px; border: 1px solid #ccc;">전산시</td><td style="padding: 8px; border: 1px solid #ccc;">79,314</td><td style="padding: 8px; border: 1px solid #ccc;">79,771</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td><td style="padding: 8px; border: 1px solid #ccc;">천주시 궁하구</td><td style="padding: 8px; border: 1px solid #ccc;">254,726</td><td style="padding: 8px; border: 1px solid #ccc;">258,593</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td><td style="padding: 8px; border: 1px solid #ccc;">천주시 천성구</td><td style="padding: 8px; border: 1px solid #ccc;">271,239</td><td style="padding: 8px; border: 1px solid #ccc;">276,121</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">덕빈북도</td><td style="padding: 8px; border: 1px solid #ccc;">치원군</td><td style="padding: 8px; border: 1px solid #ccc;">37,683</td><td style="padding: 8px; border: 1px solid #ccc;">38,849</td></tr>
                </tbody>
            </table>
        </div>

        <!-- 4. 연도별 구군별 인구 변천사 테이블 (1966~2025, 순수 덕빈북도) -->
        <div style="margin: 30px auto; overflow-x: auto;">
            <div style="font-weight: bold; margin-bottom: 10px; font-size: 1.1em; text-align: center;">연도별 행정구역 인구 변천사 (1966~2025)</div>
            <table style="width: max-content !important; min-width: 100% !important; table-layout: auto !important; border-collapse: collapse; text-align: right; font-size: 0.75em; white-space: nowrap; border: 1px solid #ccc;">
                <thead>
                    <tr style="background-color: #4AD898; color: white; text-align: center;">
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
                    </tr>
                </thead>
                <tbody>
                    <tr style="background-color: #eafbf2; font-weight: bold;">
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center;">덕빈북도</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">3,608,524명</td><td style="padding: 6px; border: 1px solid #ccc;">4,021,985명</td><td style="padding: 6px; border: 1px solid #ccc;">4,475,727명</td><td style="padding: 6px; border: 1px solid #ccc;">4,715,950명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">3,132,578명</td><td style="padding: 6px; border: 1px solid #ccc;">3,259,806명</td><td style="padding: 6px; border: 1px solid #ccc;">3,160,756명</td><td style="padding: 6px; border: 1px solid #ccc;">3,226,894명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">3,275,615명</td><td style="padding: 6px; border: 1px solid #ccc;">3,351,587명</td><td style="padding: 6px; border: 1px solid #ccc;">3,390,580명</td><td style="padding: 6px; border: 1px solid #ccc;">3,462,447명</td><td style="padding: 6px; border: 1px solid #ccc; color:#d6001c;">3,523,123명</td>
                    </tr>
                    
                    <tr>
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center; font-weight: bold; background: #fdfdfd;">빈주시</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">262,421명</td><td style="padding: 6px; border: 1px solid #ccc;">298,121명</td><td style="padding: 6px; border: 1px solid #ccc;">334,234명</td><td style="padding: 6px; border: 1px solid #ccc;">383,881명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">433,921명</td><td style="padding: 6px; border: 1px solid #ccc;">517,302명</td><td style="padding: 6px; border: 1px solid #ccc;">669,694명</td><td style="padding: 6px; border: 1px solid #ccc;">723,133명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">746,576명</td><td style="padding: 6px; border: 1px solid #ccc;">781,583명</td><td style="padding: 6px; border: 1px solid #ccc;">802,526명</td><td style="padding: 6px; border: 1px solid #ccc;">828,328명</td><td style="padding: 6px; border: 1px solid #ccc;">834,129명</td>
                    </tr>
                    <tr><td style="padding: 6px; border: 1px solid #ccc; text-align: center;">가원구</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">263,921명</td><td style="padding: 6px; border: 1px solid #ccc;">265,283명</td><td style="padding: 6px; border: 1px solid #ccc;">270,211명</td><td style="padding: 6px; border: 1px solid #ccc;">273,482명</td><td style="padding: 6px; border: 1px solid #ccc;">284,414명</td><td style="padding: 6px; border: 1px solid #ccc;">295,346명</td></tr>
                    <tr><td style="padding: 6px; border: 1px solid #ccc; text-align: center;">빈성구</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">459,212명</td><td style="padding: 6px; border: 1px solid #ccc;">481,293명</td><td style="padding: 6px; border: 1px solid #ccc;">231,991명</td><td style="padding: 6px; border: 1px solid #ccc;">223,921명</td><td style="padding: 6px; border: 1px solid #ccc;">211,869명</td><td style="padding: 6px; border: 1px solid #ccc;">199,816명</td></tr>
                    <tr><td style="padding: 6px; border: 1px solid #ccc; text-align: center;">장기구</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">279,381명</td><td style="padding: 6px; border: 1px solid #ccc;">305,123명</td><td style="padding: 6px; border: 1px solid #ccc;">332,045명</td><td style="padding: 6px; border: 1px solid #ccc;">338,967명</td></tr>
                    
                    <tr>
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center; font-weight: bold; background: #fdfdfd;">빈성군</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">194,282명</td><td style="padding: 6px; border: 1px solid #ccc;">194,023명</td><td style="padding: 6px; border: 1px solid #ccc;">184,723명</td><td style="padding: 6px; border: 1px solid #ccc;">170,192명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">154,212명</td><td style="padding: 6px; border: 1px solid #ccc;">142,392명</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">194,679명</td>
                    </tr>
                    
                    <tr>
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center; font-weight: bold; background: #fdfdfd;">천주시</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">121,023명</td><td style="padding: 6px; border: 1px solid #ccc;">142,422명</td><td style="padding: 6px; border: 1px solid #ccc;">155,721명</td><td style="padding: 6px; border: 1px solid #ccc;">152,723명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">167,312명</td><td style="padding: 6px; border: 1px solid #ccc;">172,832명</td><td style="padding: 6px; border: 1px solid #ccc;">182,932명</td><td style="padding: 6px; border: 1px solid #ccc;">439,032명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">464,291명</td><td style="padding: 6px; border: 1px solid #ccc;">489,312명</td><td style="padding: 6px; border: 1px solid #ccc;">499,823명</td><td style="padding: 6px; border: 1px solid #ccc;">511,943명</td><td style="padding: 6px; border: 1px solid #ccc;">525,965명</td>
                    </tr>
                    <tr><td style="padding: 6px; border: 1px solid #ccc; text-align: center;">천성구</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">263,711명</td><td style="padding: 6px; border: 1px solid #ccc;">271,239명</td></tr>
                    <tr><td style="padding: 6px; border: 1px solid #ccc; text-align: center;">궁하구</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">248,232명</td><td style="padding: 6px; border: 1px solid #ccc;">254,726명</td></tr>
                    
                    <tr>
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center; font-weight: bold; background: #fdfdfd;">궁하시</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">75,621명</td><td style="padding: 6px; border: 1px solid #ccc;">102,392명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">115,012명</td><td style="padding: 6px; border: 1px solid #ccc;">120,240명</td><td style="padding: 6px; border: 1px solid #ccc;">140,239명</td><td style="padding: 6px; border: 1px solid #ccc;">-</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">180,317명</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center; font-weight: bold; background: #fdfdfd;">천성군</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">165,031명</td><td style="padding: 6px; border: 1px solid #ccc;">173,482명</td><td style="padding: 6px; border: 1px solid #ccc;">114,921명</td><td style="padding: 6px; border: 1px solid #ccc;">93,821명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">89,999명</td><td style="padding: 6px; border: 1px solid #ccc;">89,492명</td><td style="padding: 6px; border: 1px solid #ccc;">94,838명</td><td style="padding: 6px; border: 1px solid #ccc;">-</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">126,799명</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center; font-weight: bold; background: #fdfdfd;">서해시</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">83,923명</td><td style="padding: 6px; border: 1px solid #ccc;">104,924명</td><td style="padding: 6px; border: 1px solid #ccc;">141,421명</td><td style="padding: 6px; border: 1px solid #ccc;">172,412명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">194,922명</td><td style="padding: 6px; border: 1px solid #ccc;">221,284명</td><td style="padding: 6px; border: 1px solid #ccc;">334,283명</td><td style="padding: 6px; border: 1px solid #ccc;">372,326명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">382,839명</td><td style="padding: 6px; border: 1px solid #ccc;">402,321명</td><td style="padding: 6px; border: 1px solid #ccc;">412,421명</td><td style="padding: 6px; border: 1px solid #ccc;">420,303명</td><td style="padding: 6px; border: 1px solid #ccc;">432,053명</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center; font-weight: bold; background: #fdfdfd;">압일군</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">182,321명</td><td style="padding: 6px; border: 1px solid #ccc;">174,623명</td><td style="padding: 6px; border: 1px solid #ccc;">168,384명</td><td style="padding: 6px; border: 1px solid #ccc;">142,831명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">123,294명</td><td style="padding: 6px; border: 1px solid #ccc;">102,472명</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">114,999명</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center; font-weight: bold; background: #fdfdfd;">강주시</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">154,282명</td><td style="padding: 6px; border: 1px solid #ccc;">163,823명</td><td style="padding: 6px; border: 1px solid #ccc;">188,382명</td><td style="padding: 6px; border: 1px solid #ccc;">209,281명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">223,232명</td><td style="padding: 6px; border: 1px solid #ccc;">243,232명</td><td style="padding: 6px; border: 1px solid #ccc;">309,283명</td><td style="padding: 6px; border: 1px solid #ccc;">295,941명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">282,599명</td><td style="padding: 6px; border: 1px solid #ccc;">278,428명</td><td style="padding: 6px; border: 1px solid #ccc;">274,257명</td><td style="padding: 6px; border: 1px solid #ccc;">265,086명</td><td style="padding: 6px; border: 1px solid #ccc;">255,914명</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center; font-weight: bold; background: #fdfdfd;">강산군</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">122,345명</td><td style="padding: 6px; border: 1px solid #ccc;">132,223명</td><td style="padding: 6px; border: 1px solid #ccc;">113,022명</td><td style="padding: 6px; border: 1px solid #ccc;">93,821명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">84,221명</td><td style="padding: 6px; border: 1px solid #ccc;">76,611명</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">55,418명</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center; font-weight: bold; background: #fdfdfd;">서진시</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">103,234명</td><td style="padding: 6px; border: 1px solid #ccc;">132,812명</td><td style="padding: 6px; border: 1px solid #ccc;">152,832명</td><td style="padding: 6px; border: 1px solid #ccc;">173,231명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">177,382명</td><td style="padding: 6px; border: 1px solid #ccc;">160,665명</td><td style="padding: 6px; border: 1px solid #ccc;">152,306명</td><td style="padding: 6px; border: 1px solid #ccc;">148,127명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">143,947명</td><td style="padding: 6px; border: 1px solid #ccc;">135,588명</td><td style="padding: 6px; border: 1px solid #ccc;">127,229명</td><td style="padding: 6px; border: 1px solid #ccc;">118,870명</td><td style="padding: 6px; border: 1px solid #ccc;">110,511명</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center; font-weight: bold; background: #fdfdfd;">상안군</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">132,921명</td><td style="padding: 6px; border: 1px solid #ccc;">121,514명</td><td style="padding: 6px; border: 1px solid #ccc;">110,106명</td><td style="padding: 6px; border: 1px solid #ccc;">98,699명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">87,291명</td><td style="padding: 6px; border: 1px solid #ccc;">81,588명</td><td style="padding: 6px; border: 1px solid #ccc;">75,884명</td><td style="padding: 6px; border: 1px solid #ccc;">64,476명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">56,615명</td><td style="padding: 6px; border: 1px solid #ccc;">48,753명</td><td style="padding: 6px; border: 1px solid #ccc;">43,512명</td><td style="padding: 6px; border: 1px solid #ccc;">40,123명</td><td style="padding: 6px; border: 1px solid #ccc;">41,660명</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center; font-weight: bold; background: #fdfdfd;">계성시</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">76,942명</td><td style="padding: 6px; border: 1px solid #ccc;">93,842명</td><td style="padding: 6px; border: 1px solid #ccc;">113,234명</td><td style="padding: 6px; border: 1px solid #ccc;">124,342명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">144,232명</td><td style="padding: 6px; border: 1px solid #ccc;">164,521명</td><td style="padding: 6px; border: 1px solid #ccc;">173,642명</td><td style="padding: 6px; border: 1px solid #ccc;">188,423명</td><td style="padding: 6px; border: 1px solid #ccc;">193,963명</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center; font-weight: bold; background: #fdfdfd;">반양군</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">164,232명</td><td style="padding: 6px; border: 1px solid #ccc;">175,133명</td><td style="padding: 6px; border: 1px solid #ccc;">171,624명</td><td style="padding: 6px; border: 1px solid #ccc;">173,245명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">112,831명</td><td style="padding: 6px; border: 1px solid #ccc;">94,734명</td><td style="padding: 6px; border: 1px solid #ccc;">61,498명</td><td style="padding: 6px; border: 1px solid #ccc;">55,717명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">49,935명</td><td style="padding: 6px; border: 1px solid #ccc;">44,084명</td><td style="padding: 6px; border: 1px solid #ccc;">38,232명</td><td style="padding: 6px; border: 1px solid #ccc;">36,452명</td><td style="padding: 6px; border: 1px solid #ccc;">38,372명</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center; font-weight: bold; background: #fdfdfd;">약산시</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">78,432명</td><td style="padding: 6px; border: 1px solid #ccc;">243,742명</td><td style="padding: 6px; border: 1px solid #ccc;">248,987명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">254,232명</td><td style="padding: 6px; border: 1px solid #ccc;">261,977명</td><td style="padding: 6px; border: 1px solid #ccc;">269,721명</td><td style="padding: 6px; border: 1px solid #ccc;">294,775명</td><td style="padding: 6px; border: 1px solid #ccc;">319,490명</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center; font-weight: bold; background: #fdfdfd;">약천군</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">182,123명</td><td style="padding: 6px; border: 1px solid #ccc;">194,512명</td><td style="padding: 6px; border: 1px solid #ccc;">194,621명</td><td style="padding: 6px; border: 1px solid #ccc;">198,421명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">201,321명</td><td style="padding: 6px; border: 1px solid #ccc;">152,631명</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">133,773명</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center; font-weight: bold; background: #fdfdfd;">전산시</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">108,422명</td><td style="padding: 6px; border: 1px solid #ccc;">113,023명</td><td style="padding: 6px; border: 1px solid #ccc;">103,921명</td><td style="padding: 6px; border: 1px solid #ccc;">100,000명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">92,321명</td><td style="padding: 6px; border: 1px solid #ccc;">93,821명</td><td style="padding: 6px; border: 1px solid #ccc;">90,232명</td><td style="padding: 6px; border: 1px solid #ccc;">90,102명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">83,721명</td><td style="padding: 6px; border: 1px solid #ccc;">79,321명</td><td style="padding: 6px; border: 1px solid #ccc;">75,232명</td><td style="padding: 6px; border: 1px solid #ccc;">78,273명</td><td style="padding: 6px; border: 1px solid #ccc;">79,314명</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center; font-weight: bold; background: #fdfdfd;">군천시</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">93,941명</td><td style="padding: 6px; border: 1px solid #ccc;">131,432명</td><td style="padding: 6px; border: 1px solid #ccc;">203,912명</td><td style="padding: 6px; border: 1px solid #ccc;">193,041명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">201,934명</td><td style="padding: 6px; border: 1px solid #ccc;">213,492명</td><td style="padding: 6px; border: 1px solid #ccc;">220,123명</td><td style="padding: 6px; border: 1px solid #ccc;">223,921명</td><td style="padding: 6px; border: 1px solid #ccc;">233,243명</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center; font-weight: bold; background: #fdfdfd;">군양군</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">173,617명</td><td style="padding: 6px; border: 1px solid #ccc;">194,821명</td><td style="padding: 6px; border: 1px solid #ccc;">184,723명</td><td style="padding: 6px; border: 1px solid #ccc;">194,822명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">104,728명</td><td style="padding: 6px; border: 1px solid #ccc;">74,824명</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">33,408명</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center; font-weight: bold; background: #fdfdfd;">기도군</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">94,821명</td><td style="padding: 6px; border: 1px solid #ccc;">83,727명</td><td style="padding: 6px; border: 1px solid #ccc;">81,273명</td><td style="padding: 6px; border: 1px solid #ccc;">79,999명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">71,321명</td><td style="padding: 6px; border: 1px solid #ccc;">60,382명</td><td style="padding: 6px; border: 1px solid #ccc;">63,721명</td><td style="padding: 6px; border: 1px solid #ccc;">58,273명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">57,263명</td><td style="padding: 6px; border: 1px solid #ccc;">60,192명</td><td style="padding: 6px; border: 1px solid #ccc;">64,552명</td><td style="padding: 6px; border: 1px solid #ccc;">71,283명</td><td style="padding: 6px; border: 1px solid #ccc;">75,274명</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center; font-weight: bold; background: #fdfdfd;">낭원군</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">114,521명</td><td style="padding: 6px; border: 1px solid #ccc;">112,031명</td><td style="padding: 6px; border: 1px solid #ccc;">101,231명</td><td style="padding: 6px; border: 1px solid #ccc;">91,402명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">104,921명</td><td style="padding: 6px; border: 1px solid #ccc;">114,921명</td><td style="padding: 6px; border: 1px solid #ccc;">123,949명</td><td style="padding: 6px; border: 1px solid #ccc;">130,212명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">135,503명</td><td style="padding: 6px; border: 1px solid #ccc;">140,321명</td><td style="padding: 6px; border: 1px solid #ccc;">145,212명</td><td style="padding: 6px; border: 1px solid #ccc;">149,202명</td><td style="padding: 6px; border: 1px solid #ccc;">149,864명</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center; font-weight: bold; background: #fdfdfd;">덕현군</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">103,842명</td><td style="padding: 6px; border: 1px solid #ccc;">92,832명</td><td style="padding: 6px; border: 1px solid #ccc;">82,931명</td><td style="padding: 6px; border: 1px solid #ccc;">82,315명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">79,321명</td><td style="padding: 6px; border: 1px solid #ccc;">77,281명</td><td style="padding: 6px; border: 1px solid #ccc;">74,213명</td><td style="padding: 6px; border: 1px solid #ccc;">69,299명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">66,472명</td><td style="padding: 6px; border: 1px solid #ccc;">61,244명</td><td style="padding: 6px; border: 1px solid #ccc;">60,312명</td><td style="padding: 6px; border: 1px solid #ccc;">57,261명</td><td style="padding: 6px; border: 1px solid #ccc;">58,875명</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center; font-weight: bold; background: #fdfdfd;">모제군</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">87,521명</td><td style="padding: 6px; border: 1px solid #ccc;">75,212명</td><td style="padding: 6px; border: 1px solid #ccc;">67,212명</td><td style="padding: 6px; border: 1px solid #ccc;">60,012명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">53,912명</td><td style="padding: 6px; border: 1px solid #ccc;">48,281명</td><td style="padding: 6px; border: 1px solid #ccc;">41,245명</td><td style="padding: 6px; border: 1px solid #ccc;">36,696명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">33,212명</td><td style="padding: 6px; border: 1px solid #ccc;">30,591명</td><td style="padding: 6px; border: 1px solid #ccc;">29,210명</td><td style="padding: 6px; border: 1px solid #ccc;">28,718명</td><td style="padding: 6px; border: 1px solid #ccc;">29,823명</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center; font-weight: bold; background: #fdfdfd;">선곡군</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">91,842명</td><td style="padding: 6px; border: 1px solid #ccc;">82,312명</td><td style="padding: 6px; border: 1px solid #ccc;">75,892명</td><td style="padding: 6px; border: 1px solid #ccc;">70,831명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">68,213명</td><td style="padding: 6px; border: 1px solid #ccc;">67,823명</td><td style="padding: 6px; border: 1px solid #ccc;">65,212명</td><td style="padding: 6px; border: 1px solid #ccc;">63,245명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">65,231명</td><td style="padding: 6px; border: 1px solid #ccc;">65,518명</td><td style="padding: 6px; border: 1px solid #ccc;">64,912명</td><td style="padding: 6px; border: 1px solid #ccc;">65,930명</td><td style="padding: 6px; border: 1px solid #ccc;">66,511명</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center; font-weight: bold; background: #fdfdfd;">저천군</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">164,232명</td><td style="padding: 6px; border: 1px solid #ccc;">133,294명</td><td style="padding: 6px; border: 1px solid #ccc;">102,356명</td><td style="padding: 6px; border: 1px solid #ccc;">94,622명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">86,887명</td><td style="padding: 6px; border: 1px solid #ccc;">79,153명</td><td style="padding: 6px; border: 1px solid #ccc;">71,418명</td><td style="padding: 6px; border: 1px solid #ccc;">67,551명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">63,684명</td><td style="padding: 6px; border: 1px solid #ccc;">55,949명</td><td style="padding: 6px; border: 1px solid #ccc;">52,082명</td><td style="padding: 6px; border: 1px solid #ccc;">48,214명</td><td style="padding: 6px; border: 1px solid #ccc;">40,479명</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center; font-weight: bold; background: #fdfdfd;">치원군</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">84,241명</td><td style="padding: 6px; border: 1px solid #ccc;">79,780명</td><td style="padding: 6px; border: 1px solid #ccc;">75,318명</td><td style="padding: 6px; border: 1px solid #ccc;">60,123명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">54,821명</td><td style="padding: 6px; border: 1px solid #ccc;">50,342명</td><td style="padding: 6px; border: 1px solid #ccc;">48,921명</td><td style="padding: 6px; border: 1px solid #ccc;">46,394명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">43,329명</td><td style="padding: 6px; border: 1px solid #ccc;">38,392명</td><td style="padding: 6px; border: 1px solid #ccc;">37,582명</td><td style="padding: 6px; border: 1px solid #ccc;">35,342명</td><td style="padding: 6px; border: 1px solid #ccc;">37,683명</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    `;

    container.innerHTML = html;
}