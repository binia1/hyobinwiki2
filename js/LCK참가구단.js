document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("lck-teams-nav-container");
    
    if (container) {
        container.innerHTML = `
        <style>
            /* LCK 틀 전용 5열 격자 완벽 구현 CSS */
            .lck-container { border: 1px solid #ccc; margin: 15px 0; border-radius: 4px; overflow: hidden; background: #fff; font-family: 'Noto Sans KR', sans-serif; }
            .lck-summary { display: block; cursor: pointer; user-select: none; }
            .lck-summary::-webkit-details-marker { display: none; }
            
            /* LCK 블랙 헤더 (정렬 및 간격 디테일 튜닝) */
            .lck-header { background-color: #111; padding: 14px; border-bottom: 3px solid #00BFFF; display: flex; justify-content: center; }
            .lck-header-inner { display: flex; align-items: center; gap: 12px; }
            .lck-logo { color: #fff; font-size: 2.2rem; font-weight: 900; font-style: italic; line-height: 1; letter-spacing: -1.5px; }
            .lck-title-box { display: flex; flex-direction: column; text-align: left; }
            .lck-title-small { color: #aaa; font-size: 0.75rem; line-height: 1.2; letter-spacing: -0.5px; margin-bottom: 2px; }
            .lck-title-large { color: #fff; font-size: 1.2rem; font-weight: bold; line-height: 1.2; letter-spacing: -0.5px; }
            
            /* 펼치기·접기 토글 바 */
            .lck-toggle { background-color: #f9f9f9; color: #444; padding: 6px; font-size: 0.8rem; text-align: center; font-weight: bold; border-bottom: 1px solid #ccc; }
            .lck-toggle:hover { background-color: #ebebeb; }
            
            /* 5열 격자(Grid) 구조 100% 고정 (테두리 깨짐 원천 차단) */
            .lck-grid { display: flex; flex-wrap: wrap; border-left: 1px solid #ccc; background-color: #fff; }
            
            /* 각 팀 아이템 (정확히 20% 넓이로 분할하여 1줄에 5개씩 꽉 채움) */
            .lck-item { width: 20%; display: flex; flex-direction: column; border-right: 1px solid #ccc; border-bottom: 1px solid #ccc; box-sizing: border-box; }
            
            /* 팀 로고 박스 */
            .lck-item-logo { background-color: #fff; padding: 10px; display: flex; align-items: center; justify-content: center; height: 75px; }
            .lck-item-logo img { max-height: 45px; max-width: 90%; object-fit: contain; }
            
            /* 팀 이름 컬러 바 (높이 고정, 텍스트 넘침 방지) */
            .lck-item-name { 
                height: 38px; 
                display: flex; 
                align-items: center; 
                justify-content: center; 
                text-align: center; 
                font-weight: bold; 
                font-size: 0.75rem; 
                color: #fff; 
                line-height: 1.2; 
                padding: 4px;
                word-break: keep-all;
                letter-spacing: -0.5px;
            }
            .lck-item-name a { color: inherit; text-decoration: none; display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; }
            .lck-item-name a:hover { text-decoration: underline; }
            
            /* 과거 참가 구단 바 */
            .lck-past { background-color: #f5f5f5; color: #555; text-align: center; padding: 8px; font-size: 0.85rem; font-weight: bold; cursor: pointer; }
            .lck-past:hover { background-color: #ebebeb; }
            
            /* 모바일/태블릿 접속 시 자동 대응 */
            @media (max-width: 768px) {
                .lck-item { width: 33.333%; }
            }
            @media (max-width: 480px) {
                .lck-item { width: 50%; }
            }
        </style>

        <details class="lck-container" open>
            <summary class="lck-summary">
                <div class="lck-header">
                    <div class="lck-header-inner">
                        <div class="lck-logo">LCK</div>
                        <div class="lck-title-box">
                            <span class="lck-title-small">리그 오브 레전드 챔피언스 코리아</span>
                            <span class="lck-title-large">참가 구단</span>
                        </div>
                    </div>
                </div>
                <div class="lck-toggle">[ 펼치기 · 접기 ]</div>
            </summary>
            
            <div class="lck-grid">
                <!-- 1. Gen.G -->
                <div class="lck-item">
                    <div class="lck-item-logo"><img alt="Gen.G" onerror="this.style.display='none'" src="이미지/GenG.svg"/></div>
                    <div class="lck-item-name" style="background-color: #000000; color:#AA8A00;">Gen.G</div>
                </div>
                <!-- 2. T1 -->
                <div class="lck-item">
                    <div class="lck-item-logo"><img alt="T1" onerror="this.style.display='none'" src="이미지/T1.svg"/></div>
                    <div class="lck-item-name" style="background-color: #E2012D;">T1</div>
                </div>
                <!-- 3. HLE -->
                <div class="lck-item">
                    <div class="lck-item-logo"><img alt="Hanwha Life Esports" onerror="this.style.display='none'" src="이미지/HLE.svg"/></div>
                    <div class="lck-item-name" style="background-color: #FF6600;">Hanwha Life Esports</div>
                </div>
                <!-- 4. DK -->
                <div class="lck-item">
                    <div class="lck-item-logo"><img alt="Dplus KIA" onerror="this.style.display='none'" src="이미지/DK.svg"/></div>
                    <div class="lck-item-name" style="background-color: #000000;">Dplus KIA</div>
                </div>
                <!-- 5. KT -->
                <div class="lck-item">
                    <div class="lck-item-logo"><img alt="KT Rolster" onerror="this.style.display='none'" src="이미지/KT.svg"/></div>
                    <div class="lck-item-name" style="background-color: #FF0000;">KT Rolster</div>
                </div>
                <!-- 6. FOX -->
                <div class="lck-item">
                    <div class="lck-item-logo"><img alt="FearX" onerror="this.style.display='none'" src="이미지/FOX.svg"/></div>
                    <div class="lck-item-name" style="background-color: #222222; color:#FFD700;">FearX</div>
                </div>
                <!-- 7. KDF -->
                <div class="lck-item">
                    <div class="lck-item-logo"><img alt="Kwangdong Freecs" onerror="this.style.display='none'" src="이미지/KDF.svg"/></div>
                    <div class="lck-item-name" style="background-color: #C41E3A;">Kwangdong Freecs</div>
                </div>
                <!-- 8. NS -->
                <div class="lck-item">
                    <div class="lck-item-logo"><img alt="Nongshim RedForce" onerror="this.style.display='none'" src="이미지/NS.svg"/></div>
                    <div class="lck-item-name" style="background-color: #E3000F;">Nongshim RedForce</div>
                </div>
                <!-- 9. DRX -->
                <div class="lck-item">
                    <div class="lck-item-logo"><img alt="DRX" onerror="this.style.display='none'" src="이미지/DRX.svg"/></div>
                    <div class="lck-item-name" style="background-color: #5A8DF3;">DRX</div>
                </div>
                <!-- 10. BRO -->
                <div class="lck-item">
                    <div class="lck-item-logo"><img alt="OKSavingsBank BRION" onerror="this.style.display='none'" src="이미지/BRO.svg"/></div>
                    <div class="lck-item-name" style="background-color: #005A32;">OKSavingsBank BRION</div>
                </div>
                <!-- 11. 효빈 AQUORS (3번째 줄 첫 칸에 자연스럽게 안착) -->
                <div class="lck-item">
                    <div class="lck-item-logo"><img alt="Hyobin AQUORS" onerror="this.style.display='none'" src="이미지/효빈아쿠아.webp"/></div>
                    <div class="lck-item-name" style="background-color: #00BFFF;">
                        <a href="효빈 아쿠아즈 e스포츠.html">Hyobin AQUORS</a>
                    </div>
                </div>
            </div>
            <!-- 하단 바 -->
            <div class="lck-past">과거 참가 구단</div>
        </details>
        `;
    }
});