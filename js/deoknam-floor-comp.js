(function() {
    document.addEventListener('DOMContentLoaded', function() {
        const container = document.getElementById('hw-deoknam-floor-container');
        if (!container) return;

        // 접기/펼치기 토글 함수
        window.toggleDeoknamFloor = function(id) {
            const el = document.getElementById(id);
            if (el.style.display === 'none') {
                el.style.display = 'block';
            } else {
                el.style.display = 'none';
            }
        };

        // 캡슐화된 스타일 및 템플릿
        const template = `
            <style>
                /* 전체 컨테이너 캡슐화 */
                #hw-deoknam-floor-container {
                    font-family: 'Noto Sans KR', sans-serif;
                    max-width: 580px;
                    margin: 0 auto 30px auto;
                }
                
                /* 박스 기본 디자인 */
                #hw-deoknam-floor-container .hw-floor-box {
                    border: 1px solid #ccc; background: #fff; box-shadow: 0 1px 3px rgba(0,0,0,0.1); margin-bottom: 20px;
                }

                /* 사선 포인트가 들어간 헤더 디자인 (덕빈남도 테마: #335566) */
                #hw-deoknam-floor-container .hw-floor-header {
                    position: relative; background: #fff; padding: 12px; display: flex; justify-content: center; align-items: center; gap: 12px; border-bottom: 1px solid #ccc; overflow: hidden;
                }
                #hw-deoknam-floor-container .hw-floor-header::before {
                    content: ''; position: absolute; left: -25px; top: 0; bottom: 0; width: 60px; background: #335566; transform: skewX(-30deg);
                }
                #hw-deoknam-floor-container .hw-floor-header::after {
                    content: ''; position: absolute; right: -25px; top: 0; bottom: 0; width: 60px; background: #335566; transform: skewX(-30deg);
                }

                /* 토글 버튼 및 섹션 타이틀 */
                #hw-deoknam-floor-container .hw-toggle-row {
                    text-align: center; padding: 10px; border-bottom: 1px solid #ccc; background: #fdfdfd; cursor: pointer; user-select: none;
                }
                #hw-deoknam-floor-container .hw-toggle-row:hover { background: #f4f4f4; }
                #hw-deoknam-floor-container .hw-section-title {
                    background: #e9ecef; text-align: center; padding: 6px; font-size: 0.9rem; font-weight: bold; color: #333; border-bottom: 1px solid #ccc;
                }

                /* 정당별 블록 디자인 */
                #hw-deoknam-floor-container .hw-party-block {
                    display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 20px 0; border-bottom: 1px solid #ccc;
                }
                #hw-deoknam-floor-container .hw-flex-row { display: flex; border-bottom: 1px solid #ccc; }
                
                /* 다중 분할 열 레이아웃 */
                #hw-deoknam-floor-container .hw-party-col {
                    flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 15px 0; border-right: 1px solid rgba(255,255,255,0.2);
                }
                #hw-deoknam-floor-container .hw-party-col:last-child { border-right: none; }
                
                /* 로고 및 의석수 뱃지 */
                #hw-deoknam-floor-container .hw-party-logo { height: 35px; object-fit: contain; margin-bottom: 8px; }
                #hw-deoknam-floor-container .hw-party-logo.sm { height: 25px; }
                #hw-deoknam-floor-container .hw-seat-badge {
                    display: inline-block; background: white; font-weight: 900; font-size: 0.95rem; padding: 2px 14px; border-radius: 2px; box-shadow: 0 1px 2px rgba(0,0,0,0.2);
                }
                #hw-deoknam-floor-container .hw-text-logo {
                    color: white; font-weight: 900; font-size: 1.1rem; margin-bottom: 8px; line-height: 25px;
                }

                /* 재적 블록 및 과거 의회 필터 */
                #hw-deoknam-floor-container .hw-total-block {
                    background: #335566; color: white; display: flex; justify-content: center; align-items: center; padding: 10px; gap: 10px; font-weight: bold; font-size: 1rem;
                }
                #hw-deoknam-floor-container .hw-past-council { filter: grayscale(80%) opacity(85%); }
            </style>

            <!-- 제13대 의회 원내구성 템플릿 (최신) -->
            <div class="hw-floor-box">
                <!-- 헤더 영역 -->
                <div class="hw-floor-header">
                    <img src="이미지/svg/덕빈남도.svg" onerror="this.style.display='none'" style="height: 35px; object-fit: contain; z-index: 1;" alt="덕빈남도 로고">
                    <div style="text-align: left; line-height: 1.1; z-index: 1;">
                        <div style="font-size: 0.85rem; color: #333; font-weight: bold;">덕빈남도의회</div>
                        <div style="font-size: 1.3rem; font-weight: 900; color: #000; letter-spacing: -0.5px;">원내 구성</div>
                    </div>
                </div>
                
                <!-- 토글 영역 -->
                <div class="hw-toggle-row" onclick="toggleDeoknamFloor('deoknam-floor-13')">
                    <span style="color: #666; font-size: 0.85rem; font-weight: bold;">[ 펼치기 · 접기 ]</span><br>
                    <div style="margin-top: 5px; display: inline-flex; align-items: center; gap: 6px;">
                        <span style="background: #335566; color: white; padding: 2px 6px; border-radius: 3px; font-size: 0.8rem; font-weight: bold;">제13대 의회</span> 
                        <span style="font-size: 0.9rem; font-weight: bold; color: #333;">2026.7.1. ~ 2030.6.30.</span>
                    </div>
                </div>            
                
                <!-- 본문 (펼침/접기 타겟) -->
                <div id="deoknam-floor-13" style="display: block;">
                    <div class="hw-section-title">도지사 소속 정당</div>
                    
                    <div class="hw-party-block" style="background-color: #004ea2;">
                        <img src="이미지/svg/더불어민주당_로고_화이트.svg" onerror="this.style.display='none'" class="hw-party-logo" alt="더불어민주당">
                        <span class="hw-seat-badge" style="color: #004ea2;">28석</span>
                    </div>
                    
                    <div class="hw-section-title">기타 정당</div>
                    
                    <div class="hw-flex-row">
                        <div class="hw-party-col" style="background-color: #E61E2B;">
                            <img src="이미지/svg/국민의힘_가로_로고_흰색.svg" onerror="this.style.display='none'" class="hw-party-logo sm" alt="국민의힘">
                            <span class="hw-seat-badge" style="color: #E61E2B;">13석</span>
                        </div>
                        <div class="hw-party-col" style="background-color: #808080;">
                            <span class="hw-text-logo">무소속</span>
                            <span class="hw-seat-badge" style="color: #808080;">4석</span>
                        </div>
                    </div>
                    
                    <div class="hw-total-block">
                        <span>재적</span>
                        <span class="hw-seat-badge" style="color: #335566; font-size: 0.9rem; padding: 1px 10px;">45석</span>
                        <span style="font-size: 0.85rem; opacity: 0.8;">(정원 45석)</span>
                    </div>
                </div>
            </div>

            <!-- 제12대 의회 원내구성 템플릿 (과거, 기본 숨김) -->
            <div class="hw-floor-box">
                <div class="hw-toggle-row" onclick="toggleDeoknamFloor('deoknam-floor-12')">
                    <span style="color: #888; font-size: 0.85rem; font-weight: bold;">[ 이전 의회 (제12대) 원내 구성 펼치기 · 접기 ]</span><br>
                    <div style="margin-top: 5px; display: inline-flex; align-items: center; gap: 6px;">
                        <span style="background: #888; color: white; padding: 2px 6px; border-radius: 3px; font-size: 0.8rem; font-weight: bold;">제12대 의회</span> 
                        <span style="font-size: 0.9rem; font-weight: bold; color: #666;">2022.7.1. ~ 2026.6.30.</span>
                    </div>
                </div>            
                
                <div id="deoknam-floor-12" class="hw-past-council" style="display: none;">
                    <div class="hw-section-title">도지사 소속 정당</div>
                    
                    <div class="hw-party-block" style="background-color: #004ea2;">
                        <img src="이미지/svg/더불어민주당_로고_화이트.svg" onerror="this.style.display='none'" class="hw-party-logo" alt="더불어민주당">
                        <span class="hw-seat-badge" style="color: #004ea2;">27석</span>
                    </div>
                    
                    <div class="hw-section-title">기타 정당</div>
                    
                    <div class="hw-flex-row">
                        <div class="hw-party-col" style="background-color: #E61E2B;">
                            <img src="이미지/svg/국민의힘_가로_로고_흰색.svg" onerror="this.style.display='none'" class="hw-party-logo sm" alt="국민의힘">
                            <span class="hw-seat-badge" style="color: #E61E2B;">16석</span>
                        </div>
                        <div class="hw-party-col" style="background-color: #808080;">
                            <span class="hw-text-logo">무소속</span>
                            <span class="hw-seat-badge" style="color: #808080;">2석</span>
                        </div>
                    </div>
                    
                    <div class="hw-total-block">
                        <span>재적</span>
                        <span class="hw-seat-badge" style="color: #335566; font-size: 0.9rem; padding: 1px 10px;">45석</span>
                        <span style="font-size: 0.85rem; opacity: 0.8;">(정원 45석)</span>
                    </div>
                </div>
            </div>
        `;

        container.innerHTML = template;
    });
})();