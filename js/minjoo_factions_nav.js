document.addEventListener("DOMContentLoaded", function() {
    
    // 브랜드 및 링크 관련 컬러 정의
    const minjooBlue = "#004EA2";
    const headerPurple = "#58288B";
    const headerTeal = "#006B70";
    const linkColor = "#0066cc";
    const borderColor = "#ddd";

    const minjooFactionsNavHTML = `
    <div style="border: 1px solid ${minjooBlue}; border-radius: 2px; margin-bottom: 20px; box-shadow: 0 1px 2px rgba(0,0,0,0.1); background-color: #fff; overflow: hidden; font-family: sans-serif;">
        
        <!-- 상단 헤더 영역 (3단 분할 배너: 파랑 - 보라 - 청록) -->
        <div style="display: flex; height: 52px; text-align: center; color: #fff; font-weight: bold; align-items: center; justify-content: center; overflow: hidden;">
            <div style="flex: 1; background-color: ${minjooBlue}; height: 100%;"></div>
            
            <div style="flex: 1.3; background-color: ${headerPurple}; height: 100%; display: flex; align-items: center; justify-content: center; gap: 8px; padding: 0 10px;">
                <!-- 더불어민주당 로고 배지 -->
                <div style="background-color: #fff; color: ${minjooBlue}; padding: 3px 6px; border-radius: 2px; font-weight: 900; font-size: 0.7em; line-height: 1.1; box-shadow: 0 1px 2px rgba(0,0,0,0.2);">
                    <span style="font-size: 0.65em; display: block; letter-spacing: -0.5px;">더불어</span>
                    <span style="font-size: 1em; letter-spacing: -0.5px;">민주당</span>
                </div>
                <!-- 중앙 타이틀 -->
                <span style="font-size: 1.15em; font-weight: 900; letter-spacing: -0.5px; word-break: keep-all;">민주당의 계파 분류</span>
            </div>
            
            <div style="flex: 1; background-color: ${headerTeal}; height: 100%;"></div>
        </div>

        <!-- 펼치기 / 접기 영역 -->
        <details class="wiki-folder" open="" style="margin: 0; border: none;">
            <summary class="wiki-folder-summary" style="border: none; border-bottom: 1px solid ${borderColor}; background-color: #fff; padding: 8px; font-weight: bold; text-align: center; cursor: pointer; color: #333; list-style: none;">[ 펼치기 · 접기 ]</summary>
            
            <div class="wiki-folder-content" style="padding: 0;">
                <table style="width: 100%; border-collapse: collapse; text-align: center; font-size: 0.9em; table-layout: fixed; margin: 0;">
                    <tbody>
                        
                        <!-- 메인 헤더 행 (친명 2열, 중립 1열, 비명 1열) -->
                        <tr style="color: white; font-weight: bold;">
                            <td colspan="2" style="background-color: ${minjooBlue}; padding: 8px; border: 1px solid ${borderColor}; font-size: 1em; width: 50%;">친명</td>
                            <td style="background-color: ${minjooBlue}; padding: 8px; border: 1px solid ${borderColor}; font-size: 1em; width: 25%;">중립</td>
                            <td style="background-color: ${minjooBlue}; padding: 8px; border: 1px solid ${borderColor}; font-size: 1em; width: 25%;">비명</td>
                        </tr>

                        <!-- 1행 계파 목록 -->
                        <tr style="background-color: #fff; vertical-align: top;">
                            <!-- 친명 1: 원조 친명 -->
                            <td style="padding: 12px 5px; border: 1px solid ${borderColor}; line-height: 1.8;">
                                <div style="font-weight: bold; color: #111; margin-bottom: 6px;">원조 친명</div>
                                <a href="정성호.html" style="color: ${linkColor}; text-decoration: none;">정성호</a><br>
                                <a href="김영진.html" style="color: ${linkColor}; text-decoration: none;">김영진</a><br>
                                <a href="김병욱.html" style="color: ${linkColor}; text-decoration: none;">김병욱</a><br>
                                <a href="이규민.html" style="color: ${linkColor}; text-decoration: none;">이규민</a>
                            </td>
                            
                            <!-- 친명 2: 정부 내각 -->
                            <td style="padding: 12px 5px; border: 1px solid ${borderColor}; line-height: 1.8;">
                                <div style="font-weight: bold; color: #111; margin-bottom: 6px;">정부 내각</div>
                                <a href="박홍근.html" style="color: ${linkColor}; text-decoration: none;">박홍근</a><br>
                                <a href="정동영.html" style="color: ${linkColor}; text-decoration: none;">정동영</a><br>
                                <a href="안규백.html" style="color: ${linkColor}; text-decoration: none;">안규백</a><br>
                                <a href="권오을.html" style="color: ${linkColor}; text-decoration: none;">권오을</a>
                            </td>

                            <!-- 중립 1: 친청 -->
                            <td style="padding: 12px 5px; border: 1px solid ${borderColor}; line-height: 1.8;">
                                <div style="font-weight: bold; color: #111; margin-bottom: 6px;">친청</div>
                                <a href="최민희.html" style="color: ${linkColor}; text-decoration: none;">최민희</a><br>
                                <a href="한민수.html" style="color: ${linkColor}; text-decoration: none;">한민수</a><br>
                                <a href="문정복.html" style="color: ${linkColor}; text-decoration: none;">문정복</a><br>
                                <a href="이성윤.html" style="color: ${linkColor}; text-decoration: none;">이성윤</a>
                            </td>

                            <!-- 비명 1: 비명 친문 -->
                            <td style="padding: 12px 5px; border: 1px solid ${borderColor}; line-height: 1.8;">
                                <div style="font-weight: bold; color: #111; margin-bottom: 6px;">비명 친문</div>
                                <a href="임종석.html" style="color: ${linkColor}; text-decoration: none;">임종석</a><br>
                                <a href="고민정.html" style="color: ${linkColor}; text-decoration: none;">고민정</a><br>
                                <a href="노영민.html" style="color: ${linkColor}; text-decoration: none;">노영민</a><br>
                                <a href="전해철.html" style="color: ${linkColor}; text-decoration: none;">전해철</a>
                            </td>
                        </tr>

                        <!-- 2행 계파 목록 -->
                        <tr style="background-color: #fff; vertical-align: top;">
                            <!-- 친명 3: 친명 중진 -->
                            <td style="padding: 12px 5px; border: 1px solid ${borderColor}; line-height: 1.8;">
                                <div style="font-weight: bold; color: #111; margin-bottom: 6px;">친명 중진</div>
                                <a href="남인순.html" style="color: ${linkColor}; text-decoration: none;">남인순</a><br>
                                <a href="박지원.html" style="color: ${linkColor}; text-decoration: none;">박지원</a><br>
                                <a href="천준호.html" style="color: ${linkColor}; text-decoration: none;">천준호</a><br>
                                <a href="전재수.html" style="color: ${linkColor}; text-decoration: none;">전재수</a><br>
                                <a href="조상현.html" style="color: ${linkColor}; text-decoration: none;">조상현</a>
                            </td>

                            <!-- 친명 4: 친석 (박효빈 추가) -->
                            <td style="padding: 12px 5px; border: 1px solid ${borderColor}; line-height: 1.8;">
                                <div style="font-weight: bold; color: #111; margin-bottom: 6px;">친석</div>
                                <a href="한준호.html" style="color: ${linkColor}; text-decoration: none;">한준호</a><br>
                                <a href="강득구.html" style="color: ${linkColor}; text-decoration: none;">강득구</a><br>
                                <a href="채현일.html" style="color: ${linkColor}; text-decoration: none;">채현일</a><br>
                                <a href="박범계.html" style="color: ${linkColor}; text-decoration: none;">박범계</a><br>
                                <a href="박효빈.html" style="color: ${linkColor}; text-decoration: none; ">박효빈</a>
                            </td>

                            <!-- 중립 2: 친명 친문 -->
                            <td style="padding: 12px 5px; border: 1px solid ${borderColor}; line-height: 1.8;">
                                <div style="font-weight: bold; color: #111; margin-bottom: 6px;">친명 친문</div>
                                <a href="윤건영.html" style="color: ${linkColor}; text-decoration: none;">윤건영</a><br>
                                <a href="김태년.html" style="color: ${linkColor}; text-decoration: none;">김태년</a><br>
                                <a href="김보라.html" style="color: ${linkColor}; text-decoration: none;">김보라</a><br>
                                <a href="진성준.html" style="color: ${linkColor}; text-decoration: none;">진성준</a><br>
                                <a href="김지언.html" style="color: ${linkColor}; text-decoration: none;">김지언</a>
                            </td>

                            <!-- 비명 2: 초일회 출신 -->
                            <td style="padding: 12px 5px; border: 1px solid ${borderColor}; line-height: 1.8;">
                                <div style="font-weight: bold; color: #111; margin-bottom: 6px;">초일회 출신</div>
                                <a href="박광온.html" style="color: ${linkColor}; text-decoration: none;">박광온</a><br>
                                <a href="송갑석.html" style="color: ${linkColor}; text-decoration: none;">송갑석</a><br>
                                <a href="김철민.html" style="color: ${linkColor}; text-decoration: none;">김철민</a><br>
                                <a href="윤영찬.html" style="color: ${linkColor}; text-decoration: none;">윤영찬</a>
                            </td>
                        </tr>

                        <!-- 3행 계파 목록 -->
                        <tr style="background-color: #fff; vertical-align: top;">
                            <!-- 친명 5: 더민혁 -->
                            <td style="padding: 12px 5px; border: 1px solid ${borderColor}; line-height: 1.8;">
                                <div style="font-weight: bold; color: #111; margin-bottom: 6px;">더민혁</div>
                                <a href="김우영.html" style="color: ${linkColor}; text-decoration: none;">김우영</a><br>
                                <a href="김준혁.html" style="color: ${linkColor}; text-decoration: none;">김준혁</a><br>
                                <a href="부승찬.html" style="color: ${linkColor}; text-decoration: none;">부승찬</a><br>
                                <a href="양문석.html" style="color: ${linkColor}; text-decoration: none;">양문석</a>
                            </td>

                            <!-- 친명 6: 친송 (김성민 추가) -->
                            <td style="padding: 12px 5px; border: 1px solid ${borderColor}; line-height: 1.8;">
                                <div style="font-weight: bold; color: #111; margin-bottom: 6px;">친송</div>
                                <a href="김영호.html" style="color: ${linkColor}; text-decoration: none;">김영호</a><br>
                                <a href="이언주.html" style="color: ${linkColor}; text-decoration: none;">이언주</a><br>
                                <a href="박찬대.html" style="color: ${linkColor}; text-decoration: none;">박찬대</a><br>
                                <a href="김상욱.html" style="color: ${linkColor}; text-decoration: none;">김상욱</a><br>
                                <a href="김성민.html" style="color: ${linkColor}; text-decoration: none; ">김성민</a>
                            </td>

                            <!-- 중립 3: 박주민계 -->
                            <td style="padding: 12px 5px; border: 1px solid ${borderColor}; line-height: 1.8;">
                                <div style="font-weight: bold; color: #111; margin-bottom: 6px;">박주민계</div>
                                <a href="이재정.html" style="color: ${linkColor}; text-decoration: none;">이재정</a><br>
                                <a href="김용민.html" style="color: ${linkColor}; text-decoration: none;">김용민</a><br>
                                <a href="윤영덕.html" style="color: ${linkColor}; text-decoration: none;">윤영덕</a><br>
                                <a href="김남국.html" style="color: ${linkColor}; text-decoration: none;">김남국</a>
                            </td>

                            <!-- 비명 3: 당내 보수파 (서유원 추가) -->
                            <td style="padding: 12px 5px; border: 1px solid ${borderColor}; line-height: 1.8;">
                                <div style="font-weight: bold; color: #111; margin-bottom: 6px;">당내 보수파</div>
                                <a href="김동연.html" style="color: ${linkColor}; text-decoration: none;">김동연</a><br>
                                <a href="김부겸.html" style="color: ${linkColor}; text-decoration: none;">김부겸</a><br>
                                <a href="이광재.html" style="color: ${linkColor}; text-decoration: none;">이광재</a><br>
                                <a href="이인영.html" style="color: ${linkColor}; text-decoration: none;">이인영</a><br>
                                <a href="서유원.html" style="color: ${linkColor}; text-decoration: none; ">서유원</a>
                            </td>
                        </tr>

                        <!-- 하단 이동 영역 1: 현재 정당별 계파 -->
                        <tr style="background-color: #f8f9fa;">
                            <td colspan="4" style="padding: 10px 8px; border: 1px solid ${borderColor}; font-size: 0.85em; color: #333; text-align: center; word-break: keep-all; line-height: 1.5;">
                                <span style="font-weight: bold;">현재 정당별 계파</span> (
                                <a href="기타_진보계파.html" style="color: #333; text-decoration: none;">기타 진보</a> · 
                                <a href="정의당_계파.html" style="color: #333; text-decoration: none;">정의</a> · 
                                <a href="진보당_계파.html" style="color: #333; text-decoration: none;">진보</a> · 
                                <a href="기본소득당_계파.html" style="color: #333; text-decoration: none;">기본소득</a> · 
                                <a href="사회민주당_계파.html" style="color: #333; text-decoration: none;">사민</a> · 
                                <a href="조국혁신당_계파.html" style="color: #333; text-decoration: none;">혁신</a> · 
                                <a href="더불어민주당_계파.html" style="color: ${minjooBlue}; text-decoration: none; font-weight: bold;">민주</a> · 
                                <a href="새로운미래_계파.html" style="color: #333; text-decoration: none;">새민주</a> · 
                                <a href="개혁신당_계파.html" style="color: #333; text-decoration: none;">개혁</a> · 
                                <a href="국민의힘_계파.html" style="color: #333; text-decoration: none;">국민의힘</a>
                                )
                            </td>
                        </tr>

                        <!-- 하단 이동 영역 2: 계파 역사 -->
                        <tr style="background-color: #fff;">
                            <td colspan="4" style="padding: 10px 8px; border: 1px solid ${borderColor}; font-size: 0.85em; color: #333; text-align: center; word-break: keep-all; line-height: 1.5;">
                                <span style="font-weight: bold;">계파 역사</span> (
                                <a href="진보정당_계파역사.html" style="color: #333; text-decoration: none;">진보정당</a> · 
                                <a href="민주당계_계파역사.html" style="color: #333; text-decoration: none;">민주당계</a> · 
                                <a href="제3지대_계파역사.html" style="color: #333; text-decoration: none;">제3지대</a> · 
                                <a href="보수정당_계파역사.html" style="color: #333; text-decoration: none;">보수정당</a>
                                )
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </details>
    </div>
    `;

    const container = document.getElementById("minjoo-factions-nav-container") || 
                      document.querySelector(".minjoo-factions-nav-container");
    if (container) {
        container.innerHTML = minjooFactionsNavHTML;
    } else {
        console.warn("더불어민주당 계파 분류 둘러보기 틀을 삽입할 컨테이너 요소를 찾을 수 없습니다.");
    }
});