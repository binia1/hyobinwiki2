document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("kleague1-teams-nav-container");
    
    if (container) {
        container.innerHTML = `
        <style>
            /* K리그1 틀 전용 5열 격자 완벽 구현 CSS */
            .kl-container { border: 1px solid #ccc; margin: 15px 0; border-radius: 4px; overflow: hidden; background: #fff; font-family: 'Noto Sans KR', sans-serif; }
            .kl-summary { display: block; cursor: pointer; user-select: none; }
            .kl-summary::-webkit-details-marker { display: none; }
            
            /* K리그 네이비 헤더 */
            .kl-header { background-color: #0F1F38; padding: 14px; border-bottom: 3px solid #D31145; display: flex; flex-direction: column; align-items: center; justify-content: center; }
            .kl-logo { color: #fff; font-size: 1.8rem; font-weight: 900; font-style: italic; line-height: 1.2; letter-spacing: -1px; margin-bottom: 4px; }
            .kl-logo span { color: #D31145; } /* K 포인트 컬러 */
            .kl-season { color: #fff; font-size: 1.1rem; font-weight: bold; letter-spacing: -0.5px; }
            
            /* 펼치기·접기 토글 바 */
            .kl-toggle { background-color: #f9f9f9; color: #444; padding: 6px; font-size: 0.8rem; text-align: center; font-weight: bold; border-bottom: 1px solid #ccc; }
            .kl-toggle:hover { background-color: #ebebeb; }
            
            /* 5열 격자(Grid) 구조 100% 고정 */
            .kl-grid { display: flex; flex-wrap: wrap; border-left: 1px solid #ccc; background-color: #fff; }
            
            /* 각 팀 아이템 (정확히 20% 넓이로 분할하여 1줄에 5개씩 꽉 채움) */
            .kl-item { width: 20%; display: flex; flex-direction: column; border-right: 1px solid #ccc; border-bottom: 1px solid #ccc; box-sizing: border-box; }
            
            /* 팀 로고 박스 */
            .kl-item-logo { background-color: #fff; padding: 10px; display: flex; align-items: center; justify-content: center; height: 75px; }
            .kl-item-logo img { max-height: 50px; max-width: 90%; object-fit: contain; }
            
            /* 팀 이름 컬러 바 */
            .kl-item-name { 
                height: 38px; 
                display: flex; 
                align-items: center; 
                justify-content: center; 
                text-align: center; 
                font-weight: bold; 
                font-size: 0.9rem; 
                color: #fff; 
                line-height: 1.2; 
                padding: 4px;
                word-break: keep-all;
                letter-spacing: -0.5px;
            }
            .kl-item-name a { color: inherit; text-decoration: none; display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; }
            .kl-item-name a:hover { text-decoration: underline; }
            
            /* 모바일/태블릿 접속 시 자동 대응 */
            @media (max-width: 768px) {
                .kl-item { width: 33.333%; }
            }
            @media (max-width: 480px) {
                .kl-item { width: 50%; }
            }
        </style>

        <details class="kl-container" open>
            <summary class="kl-summary">
                <div class="kl-header">
                    <div class="kl-logo"><span>K</span> LEAGUE 1</div>
                    <div class="kl-season">2026 시즌 참가 구단</div>
                </div>
                <div class="kl-toggle">[ 펼치기 · 접기 ]</div>
            </summary>
            
            <div class="kl-grid">
                <!-- 1. 강원 -->
                <div class="kl-item">
                    <div class="kl-item-logo"><img alt="강원 FC" onerror="this.style.display='none'" src="이미지/강원FC_로고.svg"/></div>
                    <div class="kl-item-name" style="background-color: #FF6600;">강원</div>
                </div>
                <!-- 2. 광주 -->
                <div class="kl-item">
                    <div class="kl-item-logo"><img alt="광주 FC" onerror="this.style.display='none'" src="이미지/광주FC_로고.svg"/></div>
                    <div class="kl-item-name" style="background-color: #FFA500;">광주</div>
                </div>
                <!-- 3. 김천 -->
                <div class="kl-item">
                    <div class="kl-item-logo"><img alt="김천 상무" onerror="this.style.display='none'" src="이미지/김천상무_로고.svg"/></div>
                    <div class="kl-item-name" style="background-color: #D31145;">김천</div>
                </div>
                <!-- 4. 대전 -->
                <div class="kl-item">
                    <div class="kl-item-logo"><img alt="대전 하나 시티즌" onerror="this.style.display='none'" src="이미지/대전하나시티즌_로고.svg"/></div>
                    <div class="kl-item-name" style="background-color: #007A5E;">대전</div>
                </div>
                <!-- 5. 덕빈 FC -->
                <div class="kl-item">
                    <div class="kl-item-logo"><img alt="덕빈 FC" onerror="this.style.display='none'" src="이미지/덕빈FC_로고.webp"/></div>
                    <div class="kl-item-name" style="background-color: #5D2279;">
                        <a href="덕빈 FC.html">덕빈</a>
                    </div>
                </div>
                <!-- 6. 부천 -->
                <div class="kl-item">
                    <div class="kl-item-logo"><img alt="부천 FC 1995" onerror="this.style.display='none'" src="이미지/부천FC_로고.svg"/></div>
                    <div class="kl-item-name" style="background-color: #A6192E;">부천</div>
                </div>
                <!-- 7. 서울 -->
                <div class="kl-item">
                    <div class="kl-item-logo"><img alt="FC 서울" onerror="this.style.display='none'" src="이미지/FC서울_로고.svg"/></div>
                    <div class="kl-item-name" style="background-color: #E31837;">서울</div>
                </div>
                <!-- 8. 안양 -->
                <div class="kl-item">
                    <div class="kl-item-logo"><img alt="FC 안양" onerror="this.style.display='none'" src="이미지/FC안양_로고.svg"/></div>
                    <div class="kl-item-name" style="background-color: #4B2E83;">안양</div>
                </div>
                <!-- 9. 울산 -->
                <div class="kl-item">
                    <div class="kl-item-logo"><img alt="울산 HD" onerror="this.style.display='none'" src="이미지/울산HD_로고.svg"/></div>
                    <div class="kl-item-name" style="background-color: #005BAC;">울산</div>
                </div>
                <!-- 10. 인천 -->
                <div class="kl-item">
                    <div class="kl-item-logo"><img alt="인천 유나이티드" onerror="this.style.display='none'" src="이미지/인천유나이티드_로고.svg"/></div>
                    <div class="kl-item-name" style="background-color: #005BAC;">인천</div>
                </div>
                <!-- 11. 전북 -->
                <div class="kl-item">
                    <div class="kl-item-logo"><img alt="전북 현대 모터스" onerror="this.style.display='none'" src="이미지/전북현대_로고.svg"/></div>
                    <div class="kl-item-name" style="background-color: #007A5E;">전북</div>
                </div>
                <!-- 12. 제주 -->
                <div class="kl-item">
                    <div class="kl-item-logo"><img alt="제주 유나이티드" onerror="this.style.display='none'" src="이미지/제주유나이티드_로고.svg"/></div>
                    <div class="kl-item-name" style="background-color: #FF6600;">제주</div>
                </div>
                <!-- 13. 포항 -->
                <div class="kl-item">
                    <div class="kl-item-logo"><img alt="포항 스틸러스" onerror="this.style.display='none'" src="이미지/포항스틸러스_로고.svg"/></div>
                    <div class="kl-item-name" style="background-color: #E31837;">포항</div>
                </div>
                <!-- 14. 효빈 -->
                <div class="kl-item">
                    <div class="kl-item-logo"><img alt="효빈 레인보우 아쿠아드" onerror="this.style.display='none'" src="이미지/레인보우아쿠아드로고.webp"/></div>
                    <div class="kl-item-name" style="background-color: #00AEEF;">
                        <a href="효빈 레인보우 아쿠아드.html">효빈</a>
                    </div>
                </div>
            </div>
        </details>
        `;
    }
});