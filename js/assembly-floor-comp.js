(function() {
    document.addEventListener('DOMContentLoaded', function() {
        const container = document.getElementById('hw-assembly-floor-container');
        if (!container) return;

        // 접기/펼치기 토글 함수
        window.toggleAssemblyFloor = function(id) {
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
                #hw-assembly-floor-container {
                    font-family: 'Noto Sans KR', sans-serif;
                    max-width: 580px;
                    margin: 0 auto 30px auto;
                }
                
                /* 박스 기본 디자인 */
                #hw-assembly-floor-container .hw-floor-box {
                    border: 1px solid #ccc; background: #fff; box-shadow: 0 1px 3px rgba(0,0,0,0.1);
                }

                /* 헤더 사선 패턴 배경 (선명한 그라데이션 활용) */
                #hw-assembly-floor-container .hw-floor-header {
                    background: linear-gradient(120deg, 
                        #0f4b8f 0%, #0f4b8f 4%, 
                        #6ea4ce 4.1%, #6ea4ce 8%, 
                        #ffffff 8.1%, #ffffff 91.9%, 
                        #4cb188 92%, #4cb188 96%, 
                        #1a7a51 96.1%, #1a7a51 100%
                    );
                    padding: 12px; display: flex; justify-content: center; align-items: center; border-bottom: 1px solid #ccc;
                }

                /* 헤더 내부 로고 및 텍스트 */
                #hw-assembly-floor-container .hw-header-content {
                    display: flex; align-items: center; gap: 12px; background: rgba(255,255,255,0.9); padding: 4px 16px; border-radius: 8px;
                }
                #hw-assembly-floor-container .hw-assembly-logo {
                    height: 35px; object-fit: contain;
                }

                /* 토글 버튼 및 섹션 타이틀 */
                #hw-assembly-floor-container .hw-toggle-row {
                    text-align: center; padding: 10px; border-bottom: 1px solid #ccc; background: #fdfdfd; cursor: pointer; user-select: none; line-height: 1.5;
                }
                #hw-assembly-floor-container .hw-toggle-row:hover { background: #f4f4f4; }
                
                #hw-assembly-floor-container .hw-section-title {
                    background: #e9ecef; text-align: center; padding: 6px; font-size: 0.9rem; font-weight: bold; color: #333; border-bottom: 1px solid #ccc; border-top: 1px solid #ccc;
                }
                #hw-assembly-floor-container .hw-section-title.first { border-top: none; }

                /* 정당별 블록 디자인 */
                #hw-assembly-floor-container .hw-party-row {
                    display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 20px 0; border-bottom: 1px solid white;
                }
                #hw-assembly-floor-container .hw-flex-row { display: flex; border-bottom: 1px solid white; }
                
                /* 다중 분할 열 레이아웃 (3분할) */
                #hw-assembly-floor-container .hw-party-col {
                    flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 15px 0; border-right: 1px solid white;
                }
                #hw-assembly-floor-container .hw-party-col:last-child { border-right: none; }
                
                /* 로고 및 의석수 뱃지 */
                #hw-assembly-floor-container .hw-party-logo { height: 40px; object-fit: contain; margin-bottom: 8px; }
                #hw-assembly-floor-container .hw-party-logo.sm { height: 28px; }
                #hw-assembly-floor-container .hw-filter-white { filter: brightness(0) invert(1); } /* 색상 로고를 흰색으로 변환 */
                
                #hw-assembly-floor-container .hw-seat-badge {
                    display: inline-block; background: white; font-weight: 900; font-size: 0.95rem; padding: 2px 14px; border-radius: 4px; box-shadow: 0 1px 2px rgba(0,0,0,0.2);
                }

                /* 텍스트 전용 타이틀 (무소속, 재적 등) */
                #hw-assembly-floor-container .hw-text-title {
                    color: white; font-weight: 900; font-size: 1.1rem; margin-right: 10px; display: inline-block;
                }
                
                /* 무소속 & 재적 & 푸터 블록 */
                #hw-assembly-floor-container .hw-bottom-row {
                    display: flex; justify-content: center; align-items: center; padding: 10px; border-bottom: 1px solid #ccc;
                }
                #hw-assembly-floor-container .hw-footer-row {
                    background: #f8f9fa; text-align: center; padding: 8px; font-size: 0.85rem; color: #555;
                }
            </style>

            <div class="hw-floor-box">
                <!-- 헤더 영역 -->
                <div class="hw-floor-header">
                    <div class="hw-header-content">
                        <img src="이미지/svg/국회로고.svg" onerror="this.style.display='none'" class="hw-assembly-logo" alt="국회 로고">
                        <div style="text-align: left; line-height: 1.1;">
                            <div style="font-size: 0.8rem; color: #555; font-weight: bold;">대한민국 국회</div>
                            <div style="font-size: 1.4rem; font-weight: 900; color: #000; letter-spacing: -0.5px;">원내 구성</div>
                        </div>
                    </div>
                </div>
                
                <!-- 토글 영역 -->
                <div class="hw-toggle-row" onclick="toggleAssemblyFloor('assembly-floor-body')">
                    <span style="color: #333; font-size: 0.9rem; font-weight: bold;">[ 펼치기 · 접기 ]</span><br>
                    <div style="margin-top: 4px; display: inline-flex; align-items: center; gap: 6px;">
                        <span style="background: #002255; color: white; padding: 2px 6px; border-radius: 3px; font-size: 0.85rem; font-weight: bold;">제22대 국회</span> 
                        <span style="font-size: 0.9rem; font-weight: bold; color: #333;">2024.5.30. ~ 2028.5.29.</span>
                    </div>
                </div>            
                
                <!-- 본문 (펼침/접기 타겟) -->
                <div id="assembly-floor-body" style="display: block;">
                    
                    <!-- 여당 (더불어민주당) -->
                    <div class="hw-section-title first">여당</div>
                    <div class="hw-party-row" style="background-color: #004ea2;">
                        <img src="이미지/svg/더불어민주당_로고_화이트.svg" onerror="this.style.display='none'" class="hw-party-logo" alt="더불어민주당">
                        <!-- 의석수 196석으로 수정 -->
                        <span class="hw-seat-badge" style="color: #004ea2;">196석</span>
                    </div>
                    
                    <!-- 야당 (국민의힘) -->
                    <div class="hw-section-title">야당</div>
                    <div class="hw-party-row" style="background-color: #E61E2B;">
                        <img src="이미지/svg/국민의힘_가로_로고_흰색.svg" onerror="this.style.display='none'" class="hw-party-logo" alt="국민의힘">
                        <!-- 의석수 116석으로 수정 -->
                        <span class="hw-seat-badge" style="color: #E61E2B;">116석</span>
                    </div>
                    
                    <!-- 3분할 열 1 (조국, 진보, 개혁) -->
                    <div class="hw-flex-row">
                        <div class="hw-party-col" style="background-color: #0073CF;">
                            <img src="이미지/svg/조국혁신당_로고_화이트.svg" onerror="this.style.display='none'" class="hw-party-logo sm" alt="조국혁신당">
                            <span class="hw-seat-badge" style="color: #0073CF;">12석</span>
                        </div>
                        <div class="hw-party-col" style="background-color: #d6001c;">
                            <img src="이미지/svg/진보당_로고_화이트.svg" onerror="this.style.display='none'" class="hw-party-logo sm" alt="진보당">
                            <!-- 의석수 6석으로 수정 -->
                            <span class="hw-seat-badge" style="color: #d6001c;">6석</span>
                        </div>
                        <div class="hw-party-col" style="background-color: #FF7210;">
                            <img src="이미지/svg/개혁신당_로고.svg" onerror="this.style.display='none'" class="hw-party-logo sm hw-filter-white" alt="개혁신당">
                            <span class="hw-seat-badge" style="color: #FF7210;">3석</span>
                        </div>
                    </div>

                    <!-- 3분할 열 2 (기본, 사민, 빈칸 휘장) -->
                    <div class="hw-flex-row" style="border-bottom: 0;">
                        <div class="hw-party-col" style="background-color: #00D2C3;">
                            <img src="이미지/svg/기본소득당로고.svg" onerror="this.style.display='none'" class="hw-party-logo sm hw-filter-white" alt="기본소득당">
                            <span class="hw-seat-badge" style="color: #00D2C3;">1석</span>
                        </div>
                        <div class="hw-party-col" style="background-color: #F58400;">
                            <img src="이미지/svg/사회민주당_로고.svg" onerror="this.style.display='none'" class="hw-party-logo sm hw-filter-white" alt="사회민주당">
                            <span class="hw-seat-badge" style="color: #F58400;">1석</span>
                        </div>
                        <div class="hw-party-col" style="background-color: #ffffff;">
                            <img src="이미지/svg/국회휘장.svg" onerror="this.style.display='none'" style="height: 35px; object-fit: contain;" alt="국회 휘장">
                        </div>
                    </div>

                    <!-- 무소속 블록 -->
                    <div class="hw-bottom-row" style="background-color: #888888; border-top: 1px solid white;">
                        <span class="hw-text-title">무소속</span>
                        <!-- 의석수 9석으로 수정 -->
                        <span class="hw-seat-badge" style="color: #888888;">9석</span>
                    </div>

                    <!-- 재적 블록 -->
                    <div class="hw-bottom-row" style="background-color: #ffffff;">
                        <span class="hw-text-title" style="color: #333;">재적</span>
                        <span class="hw-seat-badge" style="background-color: #552222; color: white;">344석</span>
                    </div>

                    <!-- 푸터 -->
                    <div class="hw-footer-row">
                        정당 구분 (<u style="font-weight: bold;">원내</u> · 원외 · 창준위)
                    </div>

                </div>
            </div>
        `;

        container.innerHTML = template;
    });
})();