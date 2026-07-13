/**
     * 파일명: js/동구행정.js (HTML 내장 버전)
     * 설명: 효빈광역시 동구 행정구역 전체 내비게이션 자동 생성
     * 특징: 2단 분리형 헤더 구조, 동구 전용 색상(#FF9922), 덕현동 구청 뱃지 적용
     */
    (function() {
        // STREAMING_CHUNK:Initializing Dong-gu color and containers...
        // 1. 동구 메인 색상 및 컨테이너 찾기
        var dongguColor = "#FF9922";
        var containers = document.querySelectorAll(".hb-donggu-nav");

        // 2. 각 컨테이너마다 HTML 주입
        containers.forEach(function(container, index) {
            // STREAMING_CHUNK:Generating unique IDs...
            var uniqueNavId = "dongguNav_" + index;
            var uniqueLabelId = "dongguLabel_" + index;

            // STREAMING_CHUNK:Structuring CSS and HTML template...
            var navHTML = `
            <style>
                /* 공통 테이블 스타일 */
                .hb-table { width: 100%; border-collapse: collapse; text-align: center; }
                .hb-table th, .hb-table td { border: 1px solid #ccc; padding: 10px; vertical-align: middle; }
                
                /* 테이블 헤더 및 행정동 (동구 색상 적용, 텍스트는 흰색) */
                .hb-th-bg { background-color: ${dongguColor}; color: white; font-weight: bold; }
                .hb-admin-bg { background-color: ${dongguColor}; color: white; font-weight: bold; }
                .hb-admin-bg a { color: white; text-decoration: none; }
                .hb-admin-bg a:hover { text-decoration: underline; }
                
                /* 법정동 및 빈칸 */
                .hb-legal-bg { background-color: white; }
                .hb-legal-bg a { color: #0056b3; text-decoration: none; }
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
                .nav-box { border: 1px solid ${dongguColor}; overflow: hidden; background-color: white; }
                .nav-header-container { cursor: pointer; }
                .nav-header-top { 
                    background-color: ${dongguColor}; 
                    color: white; 
                    display: flex; 
                    justify-content: center; 
                    align-items: center; 
                    padding: 16px 0; 
                }
                .nav-header-bottom { 
                    background-color: ${dongguColor}; 
                    color: white; 
                    text-align: center; 
                    padding: 6px 0; 
                    font-size: 13px; 
                    font-weight: bold; 
                    /* 얇은 반투명 흰색 가로선 */
                    border-top: 1px solid rgba(255, 255, 255, 0.4); 
                }
            </style>
            
            <div class="nav-box rounded">
                <!-- STREAMING_CHUNK:Header Section... -->
                <!-- 헤더 구역 (클릭 시 전체 토글) -->
                <div class="nav-header-container" onclick="toggleNav('${uniqueNavId}', '${uniqueLabelId}')">
                    <!-- 상단: 로고 및 타이틀 -->
                    <div class="nav-header-top">
                        <img src="이미지/동구_흰색로고.webp" alt="📂" style="height: 44px; margin-right: 12px;" onerror="this.outerHTML='<span style=\\'font-size:32px; margin-right:12px;\\'>📂</span>'">
                        <div style="text-align: left; line-height: 1.2;">
                            <div style="font-size: 14px; font-weight: 500;">효빈광역시 동구</div>
                            <div style="font-size: 22px; font-weight: 900; letter-spacing: 1px;">행정구역</div>
                        </div>
                    </div>
                    <!-- 하단: 접기/펼치기 버튼 -->
                    <div class="nav-header-bottom">
                        <span id="${uniqueLabelId}">[ 접기 ]</span>
                    </div>
                </div>
                
                <!-- STREAMING_CHUNK:Table Data mapping for Dong-gu (5 columns)... -->
                <!-- 본문 테이블 구역 (동구는 5열 구조) -->
                <div id="${uniqueNavId}" class="nav-box-body" style="transition: max-height 0.3s ease-out; overflow: hidden; max-height: 2000px;">
                    <table class="hb-table text-sm border-t-0">
                        <colgroup>
                            <col style="width: 20%;">
                            <col style="width: 20%;">
                            <col style="width: 20%;">
                            <col style="width: 20%;">
                            <col style="width: 20%;">
                        </colgroup>
                        <tr>
                            <th class="hb-th-bg border-t-0">행정동</th>
                            <th colspan="4" class="hb-th-bg border-t-0">법정동</th>
                        </tr>
                        
                        <!-- 사가당동 구역 -->
                        <tr>
                            <td class="hb-admin-bg"><a href="사가당동.html">사가당1동</a></td>
                            <td colspan="4" rowspan="4" class="hb-legal-bg"><a href="사가당동.html">사가당동</a></td>
                        </tr>
                        <tr><td class="hb-admin-bg"><a href="사가당동.html">사가당2동</a></td></tr>
                        <tr><td class="hb-admin-bg"><a href="사가당동.html">사가당3동</a></td></tr>
                        <tr><td class="hb-admin-bg"><a href="사가당동.html">사가당4동</a></td></tr>
                        
                        <!-- 전천동 구역 -->
                        <tr>
                            <td class="hb-admin-bg"><a href="전천동.html">전천동</a></td>
                            <td colspan="4" class="hb-legal-bg"><a href="전천동.html">전천동</a></td>
                        </tr>
                        
                        <!-- 덕현동 구역 (구청 뱃지 추가 및 rowspan 9로 수정) -->
                        <tr>
                            <td class="hb-admin-bg"><a href="덕현동.html">덕현1동</a></td>
                            <td colspan="4" rowspan="9" class="hb-legal-bg">
                                <span class="badge badge-gu">구청</span><a href="덕현동.html">덕현동</a>
                            </td>
                        </tr>
                        <tr><td class="hb-admin-bg"><a href="덕현동.html">덕현2동</a></td></tr>
                        <tr><td class="hb-admin-bg"><a href="덕현동.html">덕현3동</a></td></tr>
                        <tr><td class="hb-admin-bg"><a href="덕현동.html">덕현4동</a></td></tr>
                        <tr><td class="hb-admin-bg"><a href="덕현동.html">덕현5동</a></td></tr>
                        <tr><td class="hb-admin-bg"><a href="덕현동.html">덕현6동</a></td></tr>
                        <tr><td class="hb-admin-bg"><a href="덕현동.html">덕현7동</a></td></tr>
                        <tr><td class="hb-admin-bg"><a href="덕현동.html">덕현9동</a></td></tr>
                        <tr><td class="hb-admin-bg"><a href="덕현동.html">덕현11동</a></td></tr>
                    </table>
                </div>
            </div>
            `;
            
            // STREAMING_CHUNK:Injecting HTML into DOM...
            container.innerHTML = navHTML;
        });

        // STREAMING_CHUNK:Toggle functionality...
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