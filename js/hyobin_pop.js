/**
 * 효빈광역시 인구 추이 및 통계 테이블 생성 함수
 * @param {string} containerId - 표를 넣을 HTML 요소의 ID
 */
function renderHyobinPopulationTable(containerId) {
    const container = document.getElementById(containerId);
    
    // 대상 컨테이너가 없으면 종료
    if (!container) {
        console.error("렌더링 오류: '" + containerId + "' 요소를 찾을 수 없습니다.");
        return;
    }

    // 통계 HTML 구조 (템플릿 리터럴)
    const html = `
    <div class="hyobin-pop-wrapper" style="font-family: 'Noto Sans KR', sans-serif; color: #333; max-width: 900px; margin: 0 auto;">
        
        <!-- 1. 효빈광역시 누적 인구 추이 그래프 (대구광역시 스타일 반영) -->
        <div style="margin: 20px auto; border: 2px solid #7777AA; border-radius: 4px; background-color: #fff; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <div style="padding: 15px 10px; border-bottom: 1px solid #7777AA; text-align: center; background-color: #f8f9fa;">
                <div style="font-size: 1.2em; font-weight: 900; color: #111;">효빈광역시 인구 추이</div>
                <div style="font-size: 0.85em; color: #666; margin-top: 5px;">(1949년 ~ 현재)</div>
            </div>
            
            <div style="display: flex; flex-direction: column;">
                
                <div style="padding: 8px; font-size: 0.85em; color: #7777AA; text-align: center; border-bottom: 1px solid #fff; background: #fff;">1949년 8월 15일 덕빈북도 효빈부 → <strong>효빈시</strong> 개칭</div>
                
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 13.17%; background-color: #7777AA;"></div>
                    <div style="position: absolute; top: 0; left: 13.17%; height: 100%; width: 3.04%; background-color: #9999CC;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.8);">
                        1949년 486,761명 <span style="font-size: 0.85em; font-weight: normal; margin-left: 5px;">(효빈시 395,311명 + 탄성군 91,450명)</span>
                    </div>
                </div>
                
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 15.33%; background-color: #7777AA;"></div>
                    <div style="position: absolute; top: 0; left: 15.33%; height: 100%; width: 3.21%; background-color: #9999CC;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.8);">
                        1955년 556,592명 <span style="font-size: 0.85em; font-weight: normal; margin-left: 5px;">(효빈시 460,096명 + 탄성군 96,496명)</span>
                    </div>
                </div>
                
                <div style="padding: 8px; font-size: 0.85em; color: #7777AA; text-align: center; border-bottom: 1px solid #fff; background: #fff;">1955년 1월 1일 탄성군 청엽면, 어간면 → <strong>효빈시</strong> 편입</div>
                
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 17.60%; background-color: #7777AA;"></div>
                    <div style="position: absolute; top: 0; left: 17.60%; height: 100%; width: 3.55%; background-color: #9999CC;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.8);">
                        1960년 634,833명 <span style="font-size: 0.85em; font-weight: normal; margin-left: 5px;">(효빈시 528,115명 + 탄성군 106,718명)</span>
                    </div>
                </div>

                <div style="padding: 8px; font-size: 0.85em; color: #7777AA; text-align: center; border-bottom: 1px solid #fff; background: #fff;">1963년 3월 1일 선곡군 야진읍 → <strong>탄성군</strong> 편입, 고송면 일부 및 창전면 전역 → <strong>효빈시</strong> 편입</div>
                
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 19.79%; background-color: #7777AA;"></div>
                    <div style="position: absolute; top: 0; left: 19.79%; height: 100%; width: 4.11%; background-color: #9999CC;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.8);">
                        1966년 717,327명 <span style="font-size: 0.85em; font-weight: normal; margin-left: 5px;">(효빈시 593,816명 + 탄성군 123,511명)</span>
                    </div>
                </div>

                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 29.24%; background-color: #7777AA;"></div>
                    <div style="position: absolute; top: 0; left: 29.24%; height: 100%; width: 5.67%; background-color: #9999CC;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.8);">
                        1970년 1,047,341명 <span style="font-size: 0.85em; font-weight: normal; margin-left: 5px;">(효빈시 877,225명 + 탄성군 170,116명)</span>
                    </div>
                </div>

                <div style="padding: 8px; font-size: 0.85em; color: #7777AA; text-align: center; border-bottom: 1px solid #fff; background: #fff;">
                    1971년 3월 15일 탄성군 당가면, 고송면 → <strong>효빈시</strong> 편입<br>
                    1973년 1월 1일 탄성군 중수면, 흑택면 일부 → <strong>효빈시</strong> 편입
                </div>

                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 41.17%; background-color: #7777AA;"></div>
                    <div style="position: absolute; top: 0; left: 41.17%; height: 100%; width: 8.66%; background-color: #9999CC;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.8);">
                        1975년 1,495,258명 <span style="font-size: 0.85em; font-weight: normal; margin-left: 5px;">(효빈시 1,235,343명 + 탄성군 259,915명)</span>
                    </div>
                </div>

                <div style="padding: 8px; font-size: 0.85em; color: #7777AA; text-align: center; border-bottom: 1px solid #fff; background: #fff;">1979년 5월 1일 탄성군 안천읍 → <strong>덕빈북도 안천시</strong> 승격 분리</div>

                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 50.48%; background-color: #7777AA;"></div>
                    <div style="position: absolute; top: 0; left: 50.48%; height: 100%; width: 3.68%; background-color: #555588;"></div>
                    <div style="position: absolute; top: 0; left: 54.16%; height: 100%; width: 3.06%; background-color: #9999CC;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.8);">
                        1980년 1,716,874명 <span style="font-size: 0.85em; font-weight: normal; margin-left: 5px;">(효빈시 1,514,404명 + 안천시 110,548명 + 탄성군 91,922명)</span>
                    </div>
                </div>

                <div style="padding: 8px; font-size: 0.85em; color: #7777AA; text-align: center; border-bottom: 1px solid #fff; background: #fff;">
                    1981년 7월 1일 덕빈북도 효빈시 → <strong>효빈직할시</strong> 승격 분리<br>
                    1981년 3월 1일 탄성군 이자읍 → <strong>효빈직할시 안천구</strong> 편입<br>
                    1983년 2월 15일 덕빈북도 안천시 → <strong>효빈직할시</strong> 편입
                </div>

                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 61.00%; background-color: #7777AA;"></div>
                    <div style="position: absolute; top: 0; left: 61.00%; height: 100%; width: 2.67%; background-color: #9999CC;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.8);">
                        1985년 1,910,361명 <span style="font-size: 0.85em; font-weight: normal; margin-left: 5px;">(효빈직할시 1,830,061명 + 탄성군 80,300명)</span>
                    </div>
                </div>

                <div style="padding: 8px; font-size: 0.85em; color: #7777AA; text-align: center; border-bottom: 1px solid #fff; background: #fff;">1986년 2월 13일 약산군 도향면, 정근면 → <strong>효빈직할시</strong>로 편입</div>

                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 68.21%; background-color: #7777AA;"></div>
                    <div style="position: absolute; top: 0; left: 68.21%; height: 100%; width: 3.79%; background-color: #9999CC;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.8);">
                        1990년 2,160,173명 <span style="font-size: 0.85em; font-weight: normal; margin-left: 5px;">(효빈직할시 2,046,376명 + 탄성군 113,797명)</span>
                    </div>
                </div>

                <div style="padding: 8px; font-size: 0.85em; color: #7777AA; text-align: center; border-bottom: 1px solid #fff; background: #fff;">
                    1995년 1월 1일 효빈직할시 → <strong>효빈광역시</strong> 개편<br>
                    1995년 3월 1일 덕빈북도 탄성군 → <strong>효빈광역시</strong> 편입
                </div>

                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 75.70%; background-color: #7777AA;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.8);">
                        1995년 2,271,111명 <span style="font-size: 0.85em; font-weight: normal; margin-left: 5px;">(효빈광역시 2,271,111명)</span>
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 80.05%; background-color: #7777AA;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.8);">
                        2000년 2,401,697명 <span style="font-size: 0.85em; font-weight: normal; margin-left: 5px;">(효빈광역시 2,401,697명)</span>
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 82.22%; background-color: #7777AA;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.8);">
                        2005년 2,466,659명 <span style="font-size: 0.85em; font-weight: normal; margin-left: 5px;">(효빈광역시 2,466,659명)</span>
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 86.14%; background-color: #7777AA;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.8);">
                        2010년 2,584,443명 <span style="font-size: 0.85em; font-weight: normal; margin-left: 5px;">(효빈광역시 2,584,443명)</span>
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 90.68%; background-color: #7777AA;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.8);">
                        2015년 2,720,665명 <span style="font-size: 0.85em; font-weight: normal; margin-left: 5px;">(효빈광역시 2,720,665명)</span>
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 94.42%; background-color: #7777AA;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.8);">
                        2020년 2,832,860명 <span style="font-size: 0.85em; font-weight: normal; margin-left: 5px;">(효빈광역시 2,832,860명)</span>
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 98.91%; background-color: #7777AA;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.8);">
                        2025년 2,967,406명 <span style="font-size: 0.85em; font-weight: normal; margin-left: 5px;">(효빈광역시 2,967,406명)</span>
                    </div>
                </div>
                <div style="position: relative; height: 36px; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 100.00%; background-color: #7777AA;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.8);">
                        2026년 4월 2,999,656명
                    </div>
                </div>
            </div>
            <div style="padding: 12px 10px; font-size: 0.75em; color: #666; background-color: #f9f9f9; text-align: center; line-height: 1.6; border-top: 1px solid #ddd;">
                인구는 현재 행정구역이 아닌 해당 연도 행정구역 기준, 그래프 최대 값은 300만 명<br>
                1949-1990: 통계청 인구총조사, 1995-현재: 행정안전부 주민등록인구통계 (외국인 미포함)
            </div>
        </div>

        <!-- 2. 효빈광역시 기초자치단체 인구 통계 막대그래프 -->
        <div style="margin: 30px auto; border: 2px solid #7777AA; border-radius: 4px; background-color: #fff; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <div style="background-color: #7777AA; color: white; padding: 12px; text-align: center; font-weight: bold; font-size: 1.1em; display: flex; align-items: center; justify-content: center; gap: 8px;">
                <div style="width: 20px; height: 20px; background: white; border-radius: 2px; display: flex; align-items: center; justify-content: center; overflow: hidden;">
                    <img src="이미지/hyobin1.webp" alt="로고" style="max-width: 100%; max-height: 100%; object-fit: contain;">
                </div>
                효빈광역시 기초자치단체 인구 통계
            </div>
            <div style="text-align: center; font-size: 11px; padding: 8px; border-bottom: 1px solid #e5e7eb; background: #f8f9fa; color: #333; cursor: pointer; font-weight: bold;">[ 펼치기 · 접기 ]</div>
            
            <div style="display: flex; flex-direction: column;">
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 92.8%; background-color: #7777AA;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">북구 556,832명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 79.0%; background-color: #7777AA;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">청엽구 474,231명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 76.9%; background-color: #7777AA;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">안천구 461,232명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 62.1%; background-color: #7777AA;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">남구 372,442명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 58.2%; background-color: #7777AA;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">창전구 349,231명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 46.6%; background-color: #7777AA;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">서구 279,323명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 43.2%; background-color: #7777AA;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">탄성군 259,231명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 27.8%; background-color: #7777AA;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">동구 166,922명</div>
                </div>
                <div style="position: relative; height: 32px; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 13.4%; background-color: #7777AA;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">중구 80,212명</div>
                </div>
            </div>
            <div style="padding: 10px; font-size: 0.75em; color: #666; background-color: #f9f9f9; text-align: center; border-top: 1px solid #ddd;">
                2026년 4월 기준 행정안전부 주민등록인구통계, 그래프 최대 값은 60만 명
            </div>
        </div>

        <!-- 3. 구군별 2025 vs 2026 비교 테이블 -->
        <div style="margin: 30px auto; overflow-x: auto;">
            <table style="width: 100%; border-collapse: collapse; text-align: center; font-size: 0.85em; border: 1px solid #ccc;">
                <thead>
                    <tr>
                        <th style="background-color: #7777AA; color: white; padding: 10px; border: 1px solid #ccc;">광역시</th>
                        <th style="background-color: #7777AA; color: white; padding: 10px; border: 1px solid #ccc;">시군구</th>
                        <th style="background-color: #7777AA; color: white; padding: 10px; border: 1px solid #ccc;">합계 : 2025.1</th>
                        <th style="background-color: #7777AA; color: white; padding: 10px; border: 1px solid #ccc;">합계 : 2026.4</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="background-color: #f1f3f5; font-weight: bold;">
                        <td style="padding: 8px; border: 1px solid #ccc;">효빈광역시</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">-</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">2,873,940</td>
                        <td style="padding: 8px; border: 1px solid #ccc; color: #d6001c;">2,999,656</td>
                    </tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">효빈광역시</td><td style="padding: 8px; border: 1px solid #ccc;">북구</td><td style="padding: 8px; border: 1px solid #ccc;">528,434</td><td style="padding: 8px; border: 1px solid #ccc;">556,832</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">효빈광역시</td><td style="padding: 8px; border: 1px solid #ccc;">청엽구</td><td style="padding: 8px; border: 1px solid #ccc;">454,085</td><td style="padding: 8px; border: 1px solid #ccc;">474,231</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">효빈광역시</td><td style="padding: 8px; border: 1px solid #ccc;">안천구</td><td style="padding: 8px; border: 1px solid #ccc;">436,280</td><td style="padding: 8px; border: 1px solid #ccc;">461,232</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">효빈광역시</td><td style="padding: 8px; border: 1px solid #ccc;">남구</td><td style="padding: 8px; border: 1px solid #ccc;">365,917</td><td style="padding: 8px; border: 1px solid #ccc;">372,442</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">효빈광역시</td><td style="padding: 8px; border: 1px solid #ccc;">창전구</td><td style="padding: 8px; border: 1px solid #ccc;">355,355</td><td style="padding: 8px; border: 1px solid #ccc;">349,231</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">효빈광역시</td><td style="padding: 8px; border: 1px solid #ccc;">서구</td><td style="padding: 8px; border: 1px solid #ccc;">251,381</td><td style="padding: 8px; border: 1px solid #ccc;">279,323</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">효빈광역시</td><td style="padding: 8px; border: 1px solid #ccc;">탄성군</td><td style="padding: 8px; border: 1px solid #ccc;">232,662</td><td style="padding: 8px; border: 1px solid #ccc;">259,231</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">효빈광역시</td><td style="padding: 8px; border: 1px solid #ccc;">동구</td><td style="padding: 8px; border: 1px solid #ccc;">176,022</td><td style="padding: 8px; border: 1px solid #ccc;">166,922</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">효빈광역시</td><td style="padding: 8px; border: 1px solid #ccc;">중구</td><td style="padding: 8px; border: 1px solid #ccc;">73,804</td><td style="padding: 8px; border: 1px solid #ccc;">80,212</td></tr>
                </tbody>
            </table>
        </div>

        <!-- 4. 연도별 구군별 인구 변천사 테이블 (1966~2025) -->
        <div style="margin: 30px auto; overflow-x: auto;">
            <div style="font-weight: bold; margin-bottom: 10px; font-size: 1.1em; text-align: center;">연도별 행정구역 인구 변천사 (1966~2025)</div>
            <table style="width: 100%; border-collapse: collapse; text-align: right; font-size: 0.75em; white-space: nowrap; border: 1px solid #ccc;">
                <thead>
                    <tr style="background-color: #7777AA; color: white; text-align: center;">
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
                    <tr style="background-color: #eef2ff; font-weight: bold;">
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center;">덕빈북도</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">3,608,524명</td><td style="padding: 6px; border: 1px solid #ccc;">4,021,985명</td><td style="padding: 6px; border: 1px solid #ccc;">4,475,727명</td><td style="padding: 6px; border: 1px solid #ccc;">4,715,950명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">3,132,578명</td><td style="padding: 6px; border: 1px solid #ccc;">3,259,806명</td><td style="padding: 6px; border: 1px solid #ccc;">3,160,756명</td><td style="padding: 6px; border: 1px solid #ccc;">3,226,894명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">3,275,615명</td><td style="padding: 6px; border: 1px solid #ccc;">3,351,587명</td><td style="padding: 6px; border: 1px solid #ccc;">3,390,580명</td><td style="padding: 6px; border: 1px solid #ccc;">3,462,447명</td><td style="padding: 6px; border: 1px solid #ccc;">3,523,123명</td>
                    </tr>
                    <tr style="background-color: #f8f9fa; font-weight: bold;">
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center;">효빈광역시</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">593,816명</td><td style="padding: 6px; border: 1px solid #ccc;">877,225명</td><td style="padding: 6px; border: 1px solid #ccc;">1,235,343명</td><td style="padding: 6px; border: 1px solid #ccc;">1,514,404명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">1,830,061명</td><td style="padding: 6px; border: 1px solid #ccc;">2,046,376명</td><td style="padding: 6px; border: 1px solid #ccc;">2,271,111명</td><td style="padding: 6px; border: 1px solid #ccc;">2,401,697명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">2,466,659명</td><td style="padding: 6px; border: 1px solid #ccc;">2,584,443명</td><td style="padding: 6px; border: 1px solid #ccc;">2,720,665명</td><td style="padding: 6px; border: 1px solid #ccc;">2,832,860명</td><td style="padding: 6px; border: 1px solid #ccc; color:#d6001c;">2,967,406명</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center; font-weight: bold; background: #fdfdfd;">중구</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">163,198명</td><td style="padding: 6px; border: 1px solid #ccc;">205,691명</td><td style="padding: 6px; border: 1px solid #ccc;">140,848명</td><td style="padding: 6px; border: 1px solid #ccc;">188,366명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">162,808명</td><td style="padding: 6px; border: 1px solid #ccc;">132,613명</td><td style="padding: 6px; border: 1px solid #ccc;">105,530명</td><td style="padding: 6px; border: 1px solid #ccc;">94,880명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">83,187명</td><td style="padding: 6px; border: 1px solid #ccc;">82,857명</td><td style="padding: 6px; border: 1px solid #ccc;">80,928명</td><td style="padding: 6px; border: 1px solid #ccc;">71,547명</td><td style="padding: 6px; border: 1px solid #ccc;">79,801명</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center; font-weight: bold; background: #fdfdfd;">남구</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">260,309명</td><td style="padding: 6px; border: 1px solid #ccc;">373,267명</td><td style="padding: 6px; border: 1px solid #ccc;">460,548명</td><td style="padding: 6px; border: 1px solid #ccc;">227,448명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">221,394명</td><td style="padding: 6px; border: 1px solid #ccc;">287,037명</td><td style="padding: 6px; border: 1px solid #ccc;">299,970명</td><td style="padding: 6px; border: 1px solid #ccc;">300,772명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">319,260명</td><td style="padding: 6px; border: 1px solid #ccc;">331,197명</td><td style="padding: 6px; border: 1px solid #ccc;">345,852명</td><td style="padding: 6px; border: 1px solid #ccc;">359,632명</td><td style="padding: 6px; border: 1px solid #ccc;">371,889명</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center; font-weight: bold; background: #fdfdfd;">서구</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">170,309명</td><td style="padding: 6px; border: 1px solid #ccc;">298,267명</td><td style="padding: 6px; border: 1px solid #ccc;">170,548명</td><td style="padding: 6px; border: 1px solid #ccc;">227,448명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">241,394명</td><td style="padding: 6px; border: 1px solid #ccc;">287,037명</td><td style="padding: 6px; border: 1px solid #ccc;">279,970명</td><td style="padding: 6px; border: 1px solid #ccc;">260,772명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">234,260명</td><td style="padding: 6px; border: 1px solid #ccc;">212,197명</td><td style="padding: 6px; border: 1px solid #ccc;">240,852명</td><td style="padding: 6px; border: 1px solid #ccc;">252,632명</td><td style="padding: 6px; border: 1px solid #ccc;">270,388명</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center; font-weight: bold; background: #fdfdfd;">안천시-&gt;안천구</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">110,548명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">227,448명</td><td style="padding: 6px; border: 1px solid #ccc;">257,037명</td><td style="padding: 6px; border: 1px solid #ccc;">319,970명</td><td style="padding: 6px; border: 1px solid #ccc;">346,772명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">331,260명</td><td style="padding: 6px; border: 1px solid #ccc;">343,197명</td><td style="padding: 6px; border: 1px solid #ccc;">370,852명</td><td style="padding: 6px; border: 1px solid #ccc;">415,212명</td><td style="padding: 6px; border: 1px solid #ccc;">450,286명</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center; font-weight: bold; background: #fdfdfd;">탄성군</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">123,511명</td><td style="padding: 6px; border: 1px solid #ccc;">170,116명</td><td style="padding: 6px; border: 1px solid #ccc;">259,915명</td><td style="padding: 6px; border: 1px solid #ccc;">91,922명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">80,300명</td><td style="padding: 6px; border: 1px solid #ccc;">113,797명</td><td style="padding: 6px; border: 1px solid #ccc;">119,956명</td><td style="padding: 6px; border: 1px solid #ccc;">154,281명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">178,353명</td><td style="padding: 6px; border: 1px solid #ccc;">188,899명</td><td style="padding: 6px; border: 1px solid #ccc;">202,747명</td><td style="padding: 6px; border: 1px solid #ccc;">230,339명</td><td style="padding: 6px; border: 1px solid #ccc;">255,102명</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center; font-weight: bold; background: #fdfdfd;">동구</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">230,548명</td><td style="padding: 6px; border: 1px solid #ccc;">247,448명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">267,394명</td><td style="padding: 6px; border: 1px solid #ccc;">237,037명</td><td style="padding: 6px; border: 1px solid #ccc;">215,970명</td><td style="padding: 6px; border: 1px solid #ccc;">211,323명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">205,260명</td><td style="padding: 6px; border: 1px solid #ccc;">191,197명</td><td style="padding: 6px; border: 1px solid #ccc;">182,852명</td><td style="padding: 6px; border: 1px solid #ccc;">180,212명</td><td style="padding: 6px; border: 1px solid #ccc;">171,012명</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center; font-weight: bold; background: #fdfdfd;">북구</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">232,851명</td><td style="padding: 6px; border: 1px solid #ccc;">273,146명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">202,175명</td><td style="padding: 6px; border: 1px solid #ccc;">281,541명</td><td style="padding: 6px; border: 1px solid #ccc;">309,805명</td><td style="padding: 6px; border: 1px solid #ccc;">359,353명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">404,559명</td><td style="padding: 6px; border: 1px solid #ccc;">462,505명</td><td style="padding: 6px; border: 1px solid #ccc;">483,119명</td><td style="padding: 6px; border: 1px solid #ccc;">510,263명</td><td style="padding: 6px; border: 1px solid #ccc;">548,537명</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center; font-weight: bold; background: #fdfdfd;">청엽구</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">350,548명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">507,448명</td><td style="padding: 6px; border: 1px solid #ccc;">327,037명</td><td style="padding: 6px; border: 1px solid #ccc;">349,970명</td><td style="padding: 6px; border: 1px solid #ccc;">366,772명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">395,260명</td><td style="padding: 6px; border: 1px solid #ccc;">441,197명</td><td style="padding: 6px; border: 1px solid #ccc;">452,611명</td><td style="padding: 6px; border: 1px solid #ccc;">460,811명</td><td style="padding: 6px; border: 1px solid #ccc;">470,043명</td>
                    </tr>
                    <tr>
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center; font-weight: bold; background: #fdfdfd;">창전구</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">-</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">-</td><td style="padding: 6px; border: 1px solid #ccc;">237,037명</td><td style="padding: 6px; border: 1px solid #ccc;">269,970명</td><td style="padding: 6px; border: 1px solid #ccc;">306,772명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">315,260명</td><td style="padding: 6px; border: 1px solid #ccc;">331,197명</td><td style="padding: 6px; border: 1px solid #ccc;">360,852명</td><td style="padding: 6px; border: 1px solid #ccc;">352,212명</td><td style="padding: 6px; border: 1px solid #ccc;">350,348명</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    `;

    // 생성한 HTML을 컨테이너에 주입
    container.innerHTML = html;
}