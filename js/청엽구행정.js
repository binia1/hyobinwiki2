/**
     * 파일명: js/청엽구행정.js
     * 설명: 효빈광역시 청엽구 행정구역 전체 내비게이션 자동 생성
     * 특징: 2단 분리형 헤더 구조, 청엽구 전용 색상(#006699), 청엽동 구청 뱃지 적용
     */
    (function() {
        // 1. 청엽구 메인 색상 및 컨테이너 찾기
        var cheongyeopColor = "#006699";
        var containers = document.querySelectorAll(".hb-cheongyeopgu-nav");

        // 2. 각 컨테이너마다 HTML 주입
        containers.forEach(function(container, index) {
            // 고유 ID 생성
            var uniqueNavId = "cheongyeopguNav_" + index;
            var uniqueLabelId = "cheongyeopguLabel_" + index;

            // 내비게이션 디자인 및 구조 템플릿 구성
            var navHTML = `
            <style>
                /* 공통 테이블 스타일 */
                .hb-table { width: 100%; border-collapse: collapse; text-align: center; }
                .hb-table th, .hb-table td { border: 1px solid #ccc; padding: 10px; vertical-align: middle; }
                
                /* 테이블 헤더 및 행정동 (청엽구 색상 적용, 텍스트는 흰색) */
                .hb-th-bg { background-color: ${cheongyeopColor}; color: white; font-weight: bold; }
                .hb-admin-bg { background-color: ${cheongyeopColor}; color: white; font-weight: bold; }
                .hb-admin-bg a { color: white; text-decoration: none; }
                .hb-admin-bg a:hover { text-decoration: underline; }
                
                /* 법정동 및 빈칸 */
                .hb-legal-bg { background-color: white; line-height: 1.4; }
                .hb-legal-bg a { color: #0056b3; text-decoration: none; display: inline-block; }
                .hb-legal-bg a:hover { text-decoration: underline; }
                
                /* 뱃지 스타일 */
                .badge { 
                    display: inline-block; 
                    padding: 3px 6px; 
                    border-radius: 4px; 
                    color: white; 
                    font-size: 11px; 
                    font-weight: bold; 
                    margin-right: 6px; 
                    line-height: 1; 
                    vertical-align: middle; 
                }
                .badge-gu { background-color: #28a745; } /* 구청: 초록색 */
                
                /* 헤더 스타일 (2단 분리형) */
                .nav-box { border: 1px solid ${cheongyeopColor}; overflow: hidden; background-color: white; }
                .nav-header-container { cursor: pointer; }
                .nav-header-top { 
                    background-color: ${cheongyeopColor}; 
                    color: white; 
                    display: flex; 
                    justify-content: center; 
                    align-items: center; 
                    padding: 16px 0; 
                }
                .nav-header-bottom { 
                    background-color: ${cheongyeopColor}; 
                    color: white; 
                    text-align: center; 
                    padding: 6px 0; 
                    font-size: 13px; 
                    font-weight: bold; 
                    border-top: 1px solid rgba(255, 255, 255, 0.4); 
                }
            </style>
            
            <div class="nav-box rounded">
                <!-- 헤더 구역 (클릭 시 전체 토글) -->
                <div class="nav-header-container" onclick="toggleNav('${uniqueNavId}', '${uniqueLabelId}')">
                    <!-- 상단: 로고 및 타이틀 -->
                    <div class="nav-header-top">
                        <img src="이미지/청엽구_흰색로고.webp" alt="📂" style="height: 44px; margin-right: 12px;" onerror="this.outerHTML='<span style=\\'font-size:32px; margin-right:12px;\\'>📂</span>'">
                        <div style="text-align: left; line-height: 1.2;">
                            <div style="font-size: 14px; font-weight: 500;">효빈광역시 청엽구</div>
                            <div style="font-size: 22px; font-weight: 900; letter-spacing: 1px;">행정구역</div>
                        </div>
                    </div>
                    <!-- 하단: 접기/펼치기 버튼 -->
                    <div class="nav-header-bottom">
                        <span id="${uniqueLabelId}">[ 접기 ]</span>
                    </div>
                </div>
                
                <!-- 본문 테이블 구역 (청엽구는 4열 구조) -->
                <div id="${uniqueNavId}" class="nav-box-body" style="transition: max-height 0.3s ease-out; overflow: hidden; max-height: 2000px;">
                    <table class="hb-table text-sm border-t-0">
                        <colgroup>
                            <col style="width: 25%;">
                            <col style="width: 25%;">
                            <col style="width: 25%;">
                            <col style="width: 25%;">
                        </colgroup>
                        <tr>
                            <th class="hb-th-bg border-t-0">행정동</th>
                            <th colspan="3" class="hb-th-bg border-t-0">법정동</th>
                        </tr>
                        
                        <!-- 동리동 구역 -->
                        <tr>
                            <td class="hb-admin-bg"><a href="동리동.html">동리동</a></td>
                            <td colspan="3" class="hb-legal-bg"><a href="동리동.html">동리동</a></td>
                        </tr>
                        
                        <!-- 등동 구역 -->
                        <tr>
                            <td class="hb-admin-bg"><a href="등동.html">등동</a></td>
                            <td colspan="3" class="hb-legal-bg"><a href="등동.html">등동</a></td>
                        </tr>
                        
                        <!-- 마잡동 구역 -->
                        <tr>
                            <td class="hb-admin-bg"><a href="마잡1동.html">마잡1동</a></td>
                            <td class="hb-legal-bg"><a href="마잡동.html">마잡동</a></td>
                            <td class="hb-legal-bg"><a href="헌이송동.html">헌이송동</a></td>
                            <td class="hb-legal-bg"><a href="서증동.html">서증동</a></td>
                        </tr>
                        <tr>
                            <td class="hb-admin-bg"><a href="마잡2동.html">마잡2동</a></td>
                            <td colspan="3" class="hb-legal-bg"><a href="마잡동.html">마잡동</a>(일부)</td>
                        </tr>
                        
                        <!-- 비마리동 구역 -->
                        <tr>
                            <td class="hb-admin-bg"><a href="비마리동.html">비마리동</a></td>
                            <td class="hb-legal-bg"><a href="비마동.html">비마동</a></td>
                            <td colspan="2" class="hb-legal-bg"><a href="사노동.html">사노동</a></td>
                        </tr>
                        
                        <!-- 우전동 구역 -->
                        <tr>
                            <td class="hb-admin-bg"><a href="우전1동.html">우전1동</a></td>
                            <td colspan="3" rowspan="3" class="hb-legal-bg"><a href="우전동.html">우전동</a></td>
                        </tr>
                        <tr><td class="hb-admin-bg"><a href="우전2동.html">우전2동</a></td></tr>
                        <tr><td class="hb-admin-bg"><a href="우전3동.html">우전3동</a></td></tr>
                        
                        <!-- 우택동 구역 -->
                        <tr>
                            <td class="hb-admin-bg"><a href="우택동.html">우택동</a></td>
                            <td colspan="3" class="hb-legal-bg"><a href="우택동.html">우택동</a></td>
                        </tr>
                        
                        <!-- 입빈동 구역 -->
                        <tr>
                            <td class="hb-admin-bg"><a href="입빈동.html">입빈동</a></td>
                            <td class="hb-legal-bg">
                                <a href="효빈동1가.html">효빈동1가</a><br/>
                                <a href="효빈동2가.html">효빈동2가</a>
                            </td>
                            <td colspan="2" class="hb-legal-bg">
                                <a href="입동.html">입동1가</a><br/>
                                <a href="입동.html">입동2가</a><br/>
                                <a href="입동.html">입동3가</a>
                            </td>
                        </tr>
                        
                        <!-- 청엽동 구역 (구청 뱃지 추가) -->
                        <tr>
                            <td class="hb-admin-bg"><a href="청엽1동.html">청엽1동</a></td>
                            <td colspan="3" rowspan="6" class="hb-legal-bg">
                                <span class="badge badge-gu">구청</span><a href="청엽동.html">청엽동</a>
                            </td>
                        </tr>
                        <tr><td class="hb-admin-bg"><a href="청엽2동.html">청엽2동</a></td></tr>
                        <tr><td class="hb-admin-bg"><a href="청엽3동.html">청엽3동</a></td></tr>
                        <tr><td class="hb-admin-bg"><a href="청엽4동.html">청엽4동</a></td></tr>
                        <tr><td class="hb-admin-bg"><a href="청엽5동.html">청엽5동</a></td></tr>
                        <tr><td class="hb-admin-bg"><a href="청엽6동.html">청엽6동</a></td></tr>
                    </table>
                </div>
            </div>
            `;
            
            container.innerHTML = navHTML;
        });

        // 공통 토글 기능
        if (typeof window.toggleNav === 'undefined') {
            window.toggleNav = function(id, labelId) {
                var content = document.getElementById(id);
                var label = document.getElementById(labelId);
                
                if (!content) return;

                if (!content.style.maxHeight) {
                    content.style.maxHeight = '2000px'; 
                }

                if (content.style.maxHeight === '0px') {
                    content.style.maxHeight = '2000px';
                    if(label) label.innerText = '[ 접기 ]';
                } else {
                    content.style.maxHeight = '0px';
                    if(label) label.innerText = '[ 펼치기 ]';
                }
            };
        }
    })();