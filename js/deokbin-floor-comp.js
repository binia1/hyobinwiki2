(function() {
    document.addEventListener('DOMContentLoaded', function() {
        const container = document.getElementById('hw-deokbin-floor-container');
        if (!container) return;

        // 접기/펼치기 토글 함수 전역 등록
        window.toggleDeokbinFloor = function(id) {
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
                #hw-deokbin-floor-container {
                    font-family: 'Noto Sans KR', sans-serif;
                    max-width: 580px;
                    margin: 0 auto 30px auto;
                }
                
                /* 박스 기본 디자인 */
                #hw-deokbin-floor-container .hw-floor-box {
                    border: 1px solid #ccc; background: #fff; margin-bottom: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);
                }

                /* 사선 포인트가 들어간 헤더 디자인 (이미지 완벽 구현) */
                #hw-deokbin-floor-container .hw-floor-header {
                    position: relative; background: #fff; padding: 12px; display: flex; justify-content: center; align-items: center; gap: 12px; border-bottom: 1px solid #ccc; overflow: hidden;
                }
                #hw-deokbin-floor-container .hw-floor-header::before {
                    content: ''; position: absolute; left: -25px; top: 0; bottom: 0; width: 60px; background: #4ad898; transform: skewX(-30deg);
                }
                #hw-deokbin-floor-container .hw-floor-header::after {
                    content: ''; position: absolute; right: -25px; top: 0; bottom: 0; width: 60px; background: #4ad898; transform: skewX(-30deg);
                }

                /* 토글 버튼 및 섹션 타이틀 */
                #hw-deokbin-floor-container .hw-toggle-row {
                    text-align: center; padding: 10px; border-bottom: 1px solid #ccc; background: #fdfdfd; cursor: pointer; user-select: none;
                }
                #hw-deokbin-floor-container .hw-toggle-row:hover { background: #f4f4f4; }
                #hw-deokbin-floor-container .hw-section-title {
                    background: #e9ecef; text-align: center; padding: 6px; font-size: 0.9rem; font-weight: bold; color: #333; border-bottom: 1px solid #ccc;
                }

                /* 정당별 블록 디자인 */
                #hw-deokbin-floor-container .hw-party-block {
                    display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 20px 0; border-bottom: 1px solid #ccc;
                }
                #hw-deokbin-floor-container .hw-flex-row { display: flex; border-bottom: 1px solid #ccc; }
                #hw-deokbin-floor-container .hw-party-col {
                    flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 15px 0; border-right: 1px solid rgba(255,255,255,0.2);
                }
                #hw-deokbin-floor-container .hw-party-col:last-child { border-right: none; }
                
                /* 로고 및 의석수 뱃지 */
                #hw-deokbin-floor-container .hw-party-logo { height: 35px; object-fit: contain; margin-bottom: 8px; }
                #hw-deokbin-floor-container .hw-party-logo.sm { height: 25px; }
                #hw-deokbin-floor-container .hw-seat-badge {
                    display: inline-block; background: white; font-weight: 900; font-size: 0.95rem; padding: 2px 14px; border-radius: 2px; box-shadow: 0 1px 2px rgba(0,0,0,0.2);
                }

                /* 재적 블록 및 과거 의회 필터 */
                #hw-deokbin-floor-container .hw-total-block {
                    background: #4ad898; color: white; display: flex; justify-content: center; align-items: center; padding: 10px; gap: 10px; font-weight: bold; font-size: 1rem;
                }
                #hw-deokbin-floor-container .hw-past-council { filter: grayscale(80%) opacity(85%); }
            </style>

            <!-- 제13대 의회 원내구성 템플릿 (최신) -->
            <div class="hw-floor-box">
                <div class="hw-floor-header">
                    <img src="이미지/svg/덕빈북도.svg" onerror="this.style.display='none'" style="height: 35px; object-fit: contain; z-index: 1;">
                    <div style="text-align: left; line-height: 1.1; z-index: 1;">
                        <div style="font-size: 0.85rem; color: #333; font-weight: bold;">덕빈북도의회</div>
                        <div style="font-size: 1.3rem; font-weight: 900; color: #000; letter-spacing: -0.5px;">원내 구성</div>
                    </div>
                </div>
                
                <div class="hw-toggle-row" onclick="toggleDeokbinFloor('deokbin-floor-13')">
                    <span style="color: #666; font-size: 0.85rem; font-weight: bold;">[ 펼치기 · 접기 ]</span><br>
                    <div style="margin-top: 5px; display: inline-flex; align-items: center; gap: 6px;">
                        <span style="background: #4ad898; color: white; padding: 2px 6px; border-radius: 3px; font-size: 0.8rem; font-weight: bold;">제13대 의회</span> 
                        <span style="font-size: 0.9rem; font-weight: bold; color: #333;">2026.7.1. ~ 2030.6.30.</span>
                    </div>
                </div>            
                
                <div id="deokbin-floor-13" style="display: block;">
                    <div class="hw-section-title">도지사 소속 정당</div>
                    
                    <div class="hw-party-block" style="background-color: #004ea2;">
                        <img src="이미지/svg/더불어민주당_로고_화이트.svg" onerror="this.style.display='none'" class="hw-party-logo" alt="더불어민주당">
                        <span class="hw-seat-badge" style="color: #004ea2;">59석</span>
                    </div>
                    
                    <div class="hw-section-title">기타 정당</div>
                    
                    <div class="hw-flex-row">
                        <div class="hw-party-col" style="background-color: #E61E2B;">
                            <img src="이미지/svg/국민의힘_가로_로고_흰색.svg" onerror="this.style.display='none'" class="hw-party-logo sm" alt="국민의힘">
                            <span class="hw-seat-badge" style="color: #E61E2B;">5석</span>
                        </div>
                        <div class="hw-party-col" style="background-color: #d6001c;">
                            <img src="이미지/svg/진보당_로고_화이트.svg" onerror="this.style.display='none'" class="hw-party-logo sm" alt="진보당">
                            <span class="hw-seat-badge" style="color: #d6001c;">3석</span>
                        </div>
                    </div>
                    
                    <div class="hw-total-block">
                        <span>재적</span>
                        <span class="hw-seat-badge" style="color: #4ad898; font-size: 0.9rem; padding: 1px 10px;">67석</span>
                    </div>
                </div>
            </div>

            <!-- 제12대 의회 원내구성 템플릿 (과거, 기본 숨김) -->
            <div class="hw-floor-box">
                <div class="hw-toggle-row" onclick="toggleDeokbinFloor('deokbin-floor-12')">
                    <span style="color: #888; font-size: 0.85rem; font-weight: bold;">[ 이전 의회 (제12대) 원내 구성 펼치기 · 접기 ]</span><br>
                    <div style="margin-top: 5px; display: inline-flex; align-items: center; gap: 6px;">
                        <span style="background: #888; color: white; padding: 2px 6px; border-radius: 3px; font-size: 0.8rem; font-weight: bold;">제12대 의회</span> 
                        <span style="font-size: 0.9rem; font-weight: bold; color: #666;">2022.7.1. ~ 2026.6.30.</span>
                    </div>
                </div>            
                
                <div id="deokbin-floor-12" class="hw-past-council" style="display: none;">
                    <div class="hw-section-title">도지사 소속 정당</div>
                    
                    <div class="hw-party-block" style="background-color: #004ea2;">
                        <img src="이미지/svg/더불어민주당_로고_화이트.svg" onerror="this.style.display='none'" class="hw-party-logo" alt="더불어민주당">
                        <span class="hw-seat-badge" style="color: #004ea2;">54석</span>
                    </div>
                    
                    <div class="hw-section-title">기타 정당</div>
                    
                    <div class="hw-flex-row">
                        <div class="hw-party-col" style="background-color: #E61E2B;">
                            <img src="이미지/svg/국민의힘_가로_로고_흰색.svg" onerror="this.style.display='none'" class="hw-party-logo sm" alt="국민의힘">
                            <span class="hw-seat-badge" style="color: #E61E2B;">8석</span>
                        </div>
                        <div class="hw-party-col" style="background-color: #0073CF;">
                            <img src="이미지/svg/조국혁신당_로고_화이트.svg" onerror="this.style.display='none'" class="hw-party-logo sm" alt="조국혁신당">
                            <span class="hw-seat-badge" style="color: #0073CF;">2석</span>
                        </div>
                        <div class="hw-party-col" style="background-color: #d6001c;">
                            <img src="이미지/svg/진보당_로고_화이트.svg" onerror="this.style.display='none'" class="hw-party-logo sm" alt="진보당">
                            <span class="hw-seat-badge" style="color: #d6001c;">2석</span>
                        </div>
                    </div>

                    <div class="hw-party-block" style="background-color: #888888; padding: 12px 0;">
                        <span style="color: white; font-weight: bold; font-size: 1rem; margin-bottom: 6px;">공석</span>
                        <span class="hw-seat-badge" style="color: #888888;">1석</span>
                    </div>
                    
                    <div class="hw-total-block">
                        <span>재적</span>
                        <span class="hw-seat-badge" style="color: #4ad898; font-size: 0.9rem; padding: 1px 10px;">66석</span>
                    </div>
                </div>
            </div>
        `;

        container.innerHTML = template;
    });
})();