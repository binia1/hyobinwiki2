/**
 * 효빈광역시 북구 인구 추이 및 행정동별 통계 테이블 생성 함수
 * @param {string} containerId - 표를 넣을 HTML 요소의 ID
 */
function renderBukguPopTable(containerId) {
    const container = document.getElementById(containerId);
    
    if (!container) {
        console.error("렌더링 오류: '" + containerId + "' 요소를 찾을 수 없습니다.");
        return;
    }

    const html = `
    <div class="bukgu-pop-wrapper" style="font-family: 'Noto Sans KR', sans-serif; color: #333; max-width: 900px; margin: 0 auto;">
        
        <!-- 1. 효빈광역시 북구 인구 추이 막대그래프 (1971 ~ 현재) -->
        <div style="margin: 20px auto; border: 2px solid #7799CC; border-radius: 4px; background-color: #fff; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <div style="padding: 15px 10px; border-bottom: 1px solid #7799CC; text-align: center; background-color: #f8f9fa;">
                <div style="font-size: 1.2em; font-weight: 900; color: #111;">효빈광역시 북구 인구 추이</div>
                <div style="font-size: 0.85em; color: #666; margin-top: 5px;">(1971년 ~ 현재)</div>
            </div>
            
            <div style="display: flex; flex-direction: column;">
                <div style="padding: 8px; font-size: 0.85em; color: #7799CC; text-align: center; border-bottom: 1px solid #fff; background: #fff;">
                    1971년 1월 2일 효빈시 <strong>북구</strong> 설치
                </div>
                <div style="padding: 8px; font-size: 0.85em; color: #7799CC; text-align: center; border-bottom: 1px solid #fff; background: #fff;">
                    1973년 1월 2일 탄성군 중수면 편입 및 북구 사가당동 <strong>동구</strong> 이관
                </div>
                
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 38.8%; background-color: #7799CC;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.6);">
                        1975년 232,851명
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 45.5%; background-color: #7799CC;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.6);">
                        1980년 273,146명
                    </div>
                </div>
                
                <div style="padding: 8px; font-size: 0.85em; color: #7799CC; text-align: center; border-bottom: 1px solid #fff; background: #fff;">
                    1983년 4월 1일 북구 뇌전동, 당가1~3동, 북택동 &rarr; <strong>안천구</strong> 이관
                </div>
                
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 33.7%; background-color: #7799CC;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.6);">
                        1985년 202,175명
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 46.9%; background-color: #7799CC;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.6);">
                        1990년 281,541명
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 51.6%; background-color: #7799CC;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.6);">
                        1995년 309,805명
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 59.9%; background-color: #7799CC;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.6);">
                        2000년 359,353명
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 67.4%; background-color: #7799CC;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.6);">
                        2005년 404,559명
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 77.1%; background-color: #7799CC;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.6);">
                        2010년 462,505명
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 80.5%; background-color: #7799CC;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.6);">
                        2015년 483,119명
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 85.0%; background-color: #7799CC;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.6);">
                        2020년 510,263명
                    </div>
                </div>
                <div style="position: relative; height: 36px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 91.4%; background-color: #7799CC;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.6);">
                        2025년 4월 548,537명
                    </div>
                </div>
                <div style="position: relative; height: 36px; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 92.8%; background-color: #7799CC;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.6);">
                        2026년 4월 556,832명
                    </div>
                </div>
            </div>
            <div style="padding: 12px 10px; font-size: 0.75em; color: #666; background-color: #f9f9f9; text-align: center; line-height: 1.6; border-top: 1px solid #ddd;">
                인구는 현재 행정구역이 아닌 해당 연도 행정구역 기준, 그래프 최대 값은 60만 명<br>
                1966-1990: 통계청 인구총조사, 1995-현재: 행정안전부 주민등록인구통계 (외국인 미포함)
            </div>
        </div>

        <!-- 2. 효빈광역시 북구 행정동별 인구 통계 막대그래프 -->
        <div style="margin: 30px auto; border: 2px solid #7799CC; border-radius: 4px; background-color: #fff; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <div style="background-color: #7799CC; color: white; padding: 12px; text-align: center; font-weight: bold; font-size: 1.1em; display: flex; align-items: center; justify-content: center; gap: 8px;">
                <div style="width: 20px; height: 20px; background: white; border-radius: 2px; display: flex; align-items: center; justify-content: center; overflow: hidden;">
                    <img src="이미지/북구.webp" alt="로고" style="max-width: 100%; max-height: 100%; object-fit: contain;" onerror="this.style.display='none';">
                </div>
                효빈광역시 북구 행정동별 인구 통계
            </div>
            <div style="text-align: center; font-size: 11px; padding: 8px; border-bottom: 1px solid #e5e7eb; background: #f8f9fa; color: #333; cursor: pointer; font-weight: bold;">[ 펼치기 · 접기 ]</div>
            
            <div style="display: flex; flex-direction: column;">
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 88.6%; background-color: #7799CC;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">고송6동 53,139명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 77.9%; background-color: #7799CC;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">고송1동 46,729명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 74.7%; background-color: #7799CC;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">고송7동 44,820명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 68.8%; background-color: #7799CC;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">중수4동 41,283명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 55.5%; background-color: #7799CC;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">중수3동 33,295명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 51.5%; background-color: #7799CC;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">고송4동 30,873명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 51.4%; background-color: #7799CC;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">중수1동 30,848명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 44.6%; background-color: #7799CC;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">중수2동 26,741명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 44.2%; background-color: #7799CC;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">오내2동 26,534명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 44.0%; background-color: #7799CC;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">오내1동 26,390명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 41.1%; background-color: #7799CC;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">진희동 24,655명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 31.5%; background-color: #7799CC;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">고송5동 18,909명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 31.5%; background-color: #7799CC;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">고송8동 18,904명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 30.7%; background-color: #7799CC;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">소조동 18,444명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 23.7%; background-color: #7799CC;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">포산동 14,192명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 23.0%; background-color: #7799CC;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">남전동 13,806명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 22.7%; background-color: #7799CC;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">천왕사동 13,615명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 21.4%; background-color: #7799CC;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">청능동 12,823명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 20.4%; background-color: #7799CC;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">고송2동 12,241명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 20.2%; background-color: #7799CC;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">채산동 12,115명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 17.2%; background-color: #7799CC;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">사능2동 10,303명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 15.4%; background-color: #7799CC;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">사능1동 9,262명</div>
                </div>
                <div style="position: relative; height: 32px; border-bottom: 1px solid #fff; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 14.1%; background-color: #7799CC;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">고송3동 8,473명</div>
                </div>
                <div style="position: relative; height: 32px; background-color: #888888;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 14.1%; background-color: #7799CC;"></div>
                    <div style="position: absolute; top: 0; left: 10px; height: 100%; display: flex; align-items: center; color: #fff; font-size: 0.9em; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">산고동 8,438명</div>
                </div>
            </div>
            <div style="padding: 10px; font-size: 0.75em; color: #666; background-color: #f9f9f9; text-align: center; border-top: 1px solid #ddd;">
                2026년 4월 기준 행정안전부 주민등록인구통계, 그래프 최대 값은 60,000명
            </div>
        </div>

        <!-- 3. 행정동별 상세 인구 테이블 -->
        <div style="margin: 30px auto; overflow-x: auto;">
            <table style="width: 100%; border-collapse: collapse; text-align: center; font-size: 0.85em; border: 1px solid #ccc;">
                <thead>
                    <tr>
                        <th style="background-color: #7799CC; color: white; padding: 10px; border: 1px solid #ccc;">광역시도</th>
                        <th style="background-color: #7799CC; color: white; padding: 10px; border: 1px solid #ccc;">시군구</th>
                        <th style="background-color: #7799CC; color: white; padding: 10px; border: 1px solid #ccc;">읍면동</th>
                        <th style="background-color: #7799CC; color: white; padding: 10px; border: 1px solid #ccc;">합계 : 2026.4</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="background-color: #f1f3f5; font-weight: bold;">
                        <td style="padding: 8px; border: 1px solid #ccc;">효빈광역시</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">북구</td>
                        <td style="padding: 8px; border: 1px solid #ccc;">-</td>
                        <td style="padding: 8px; border: 1px solid #ccc; color: #d6001c;">556,832</td>
                    </tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">효빈광역시</td><td style="padding: 8px; border: 1px solid #ccc;">북구</td><td style="padding: 8px; border: 1px solid #ccc;">고송1동</td><td style="padding: 8px; border: 1px solid #ccc;">46,729</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">효빈광역시</td><td style="padding: 8px; border: 1px solid #ccc;">북구</td><td style="padding: 8px; border: 1px solid #ccc;">고송2동</td><td style="padding: 8px; border: 1px solid #ccc;">12,241</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">효빈광역시</td><td style="padding: 8px; border: 1px solid #ccc;">북구</td><td style="padding: 8px; border: 1px solid #ccc;">고송3동</td><td style="padding: 8px; border: 1px solid #ccc;">8,473</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">효빈광역시</td><td style="padding: 8px; border: 1px solid #ccc;">북구</td><td style="padding: 8px; border: 1px solid #ccc;">고송4동</td><td style="padding: 8px; border: 1px solid #ccc;">30,873</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">효빈광역시</td><td style="padding: 8px; border: 1px solid #ccc;">북구</td><td style="padding: 8px; border: 1px solid #ccc;">고송5동</td><td style="padding: 8px; border: 1px solid #ccc;">18,909</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">효빈광역시</td><td style="padding: 8px; border: 1px solid #ccc;">북구</td><td style="padding: 8px; border: 1px solid #ccc;">고송6동</td><td style="padding: 8px; border: 1px solid #ccc;">53,139</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">효빈광역시</td><td style="padding: 8px; border: 1px solid #ccc;">북구</td><td style="padding: 8px; border: 1px solid #ccc;">고송7동</td><td style="padding: 8px; border: 1px solid #ccc;">44,820</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">효빈광역시</td><td style="padding: 8px; border: 1px solid #ccc;">북구</td><td style="padding: 8px; border: 1px solid #ccc;">고송8동</td><td style="padding: 8px; border: 1px solid #ccc;">18,904</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">효빈광역시</td><td style="padding: 8px; border: 1px solid #ccc;">북구</td><td style="padding: 8px; border: 1px solid #ccc;">남전동</td><td style="padding: 8px; border: 1px solid #ccc;">13,806</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">효빈광역시</td><td style="padding: 8px; border: 1px solid #ccc;">북구</td><td style="padding: 8px; border: 1px solid #ccc;">사능1동</td><td style="padding: 8px; border: 1px solid #ccc;">9,262</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">효빈광역시</td><td style="padding: 8px; border: 1px solid #ccc;">북구</td><td style="padding: 8px; border: 1px solid #ccc;">사능2동</td><td style="padding: 8px; border: 1px solid #ccc;">10,303</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">효빈광역시</td><td style="padding: 8px; border: 1px solid #ccc;">북구</td><td style="padding: 8px; border: 1px solid #ccc;">산고동</td><td style="padding: 8px; border: 1px solid #ccc;">8,438</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">효빈광역시</td><td style="padding: 8px; border: 1px solid #ccc;">북구</td><td style="padding: 8px; border: 1px solid #ccc;">소조동</td><td style="padding: 8px; border: 1px solid #ccc;">18,444</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">효빈광역시</td><td style="padding: 8px; border: 1px solid #ccc;">북구</td><td style="padding: 8px; border: 1px solid #ccc;">오내1동</td><td style="padding: 8px; border: 1px solid #ccc;">26,390</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">효빈광역시</td><td style="padding: 8px; border: 1px solid #ccc;">북구</td><td style="padding: 8px; border: 1px solid #ccc;">오내2동</td><td style="padding: 8px; border: 1px solid #ccc;">26,534</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">효빈광역시</td><td style="padding: 8px; border: 1px solid #ccc;">북구</td><td style="padding: 8px; border: 1px solid #ccc;">중수1동</td><td style="padding: 8px; border: 1px solid #ccc;">30,848</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">효빈광역시</td><td style="padding: 8px; border: 1px solid #ccc;">북구</td><td style="padding: 8px; border: 1px solid #ccc;">중수2동</td><td style="padding: 8px; border: 1px solid #ccc;">26,741</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">효빈광역시</td><td style="padding: 8px; border: 1px solid #ccc;">북구</td><td style="padding: 8px; border: 1px solid #ccc;">중수3동</td><td style="padding: 8px; border: 1px solid #ccc;">33,295</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">효빈광역시</td><td style="padding: 8px; border: 1px solid #ccc;">북구</td><td style="padding: 8px; border: 1px solid #ccc;">중수4동</td><td style="padding: 8px; border: 1px solid #ccc;">41,283</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">효빈광역시</td><td style="padding: 8px; border: 1px solid #ccc;">북구</td><td style="padding: 8px; border: 1px solid #ccc;">진희동</td><td style="padding: 8px; border: 1px solid #ccc;">24,655</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">효빈광역시</td><td style="padding: 8px; border: 1px solid #ccc;">북구</td><td style="padding: 8px; border: 1px solid #ccc;">채산동</td><td style="padding: 8px; border: 1px solid #ccc;">12,115</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">효빈광역시</td><td style="padding: 8px; border: 1px solid #ccc;">북구</td><td style="padding: 8px; border: 1px solid #ccc;">천왕사동</td><td style="padding: 8px; border: 1px solid #ccc;">13,615</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">효빈광역시</td><td style="padding: 8px; border: 1px solid #ccc;">북구</td><td style="padding: 8px; border: 1px solid #ccc;">청능동</td><td style="padding: 8px; border: 1px solid #ccc;">12,823</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ccc;">효빈광역시</td><td style="padding: 8px; border: 1px solid #ccc;">북구</td><td style="padding: 8px; border: 1px solid #ccc;">포산동</td><td style="padding: 8px; border: 1px solid #ccc;">14,192</td></tr>
                </tbody>
            </table>
        </div>

        <!-- 4. 연도별 북구 인구 변천사 테이블 (1975~2026.4) -->
        <div style="margin: 30px auto; overflow-x: auto;">
            <div style="font-weight: bold; margin-bottom: 10px; font-size: 1.1em; text-align: center;">연도별 행정구역 인구 변천사 (1975~2026.4)</div>
            <table style="width: 100%; border-collapse: collapse; text-align: right; font-size: 0.75em; white-space: nowrap; border: 1px solid #ccc;">
                <thead>
                    <tr style="background-color: #7799CC; color: white; text-align: center;">
                        <th style="padding: 8px; border: 1px solid #ccc;">구분</th>
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
                        <td style="padding: 6px; border: 1px solid #ccc; color: #555;">1,235,343명</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">1,514,404명</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">1,830,061명</td>
                        <td style="padding: 6px; border: 1px solid #ccc; color: #555;">2,046,376명</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2,271,111명</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2,401,697명</td>
                        <td style="padding: 6px; border: 1px solid #ccc; color: #555;">2,466,659명</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2,584,443명</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2,720,665명</td>
                        <td style="padding: 6px; border: 1px solid #ccc; color: #555;">2,832,860명</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2,967,406명</td><td style="padding: 6px; border: 1px solid #ccc; color: #555;">2,999,656명</td>
                    </tr>
                    <tr style="background-color: #fcfcfc; font-weight: bold;">
                        <td style="padding: 6px; border: 1px solid #ccc; text-align: center;">효빈광역시 북구</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">232,851명</td><td style="padding: 6px; border: 1px solid #ccc;">273,146명</td><td style="padding: 6px; border: 1px solid #ccc;">202,175명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">281,541명</td><td style="padding: 6px; border: 1px solid #ccc;">309,805명</td><td style="padding: 6px; border: 1px solid #ccc;">359,353명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">404,559명</td><td style="padding: 6px; border: 1px solid #ccc;">462,505명</td><td style="padding: 6px; border: 1px solid #ccc;">483,119명</td>
                        <td style="padding: 6px; border: 1px solid #ccc;">510,263명</td><td style="padding: 6px; border: 1px solid #ccc;">548,537명</td><td style="padding: 6px; border: 1px solid #ccc; color:#d6001c;">556,832명</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    `;

    container.innerHTML = html;
}