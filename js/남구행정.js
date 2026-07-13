/**
     * 파일명: js/남구행정.js (HTML 내장 버전)
     * 설명: 효빈광역시 남구 행정구역 전체 내비게이션 자동 생성
     * 특징: 2단 분리형 헤더 구조, 남구 전용 색상(#DDBBFF), 평당동 구청 뱃지 적용
     */
    (function() {
        // STREAMING_CHUNK:Initializing Nam-gu color and containers...
        // 1. 남구 메인 색상 및 컨테이너 찾기
        var namguColor = "#DDBBFF";
        var containers = document.querySelectorAll(".hb-namgu-nav");

        // 2. 각 컨테이너마다 HTML 주입
        containers.forEach(function(container, index) {
            // STREAMING_CHUNK:Generating unique IDs...
            var uniqueNavId = "namguNav_" + index;
            var uniqueLabelId = "namguLabel_" + index;

            // STREAMING_CHUNK:Structuring CSS and HTML template...
            var navHTML = `
            <style>
                /* 공통 테이블 스타일 */
                .hb-table { width: 100%; border-collapse: collapse; text-align: center; }
                .hb-table th, .hb-table td { border: 1px solid #ccc; padding: 10px; vertical-align: middle; }
                
                /* 테이블 헤더 및 행정동 (남구 색상 적용, 밝은 배경이라 글씨는 #333) */
                .hb-th-bg { background-color: ${namguColor}; color: #333; font-weight: bold; }
                .hb-admin-bg { background-color: ${namguColor}; color: #333; font-weight: bold; }
                .hb-admin-bg a { color: #333; text-decoration: none; }
                .hb-admin-bg a:hover { text-decoration: underline; }
                
                /* 법정동 및 빈칸 */
                .hb-legal-bg { background-color: white; }
                .hb-legal-bg a { color: #0056b3; text-decoration: none; }
                .hb-legal-bg a:hover { text-decoration: underline; }
                .hb-empty-bg { background-color: #e5e7eb; } 
                
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
                .nav-box { border: 1px solid ${namguColor}; overflow: hidden; background-color: white; }
                .nav-header-container { cursor: pointer; }
                .nav-header-top { 
                    background-color: ${namguColor}; 
                    color: #333; 
                    display: flex; 
                    justify-content: center; 
                    align-items: center; 
                    padding: 16px 0; 
                }
                .nav-header-bottom { 
                    background-color: ${namguColor}; 
                    color: #333; 
                    text-align: center; 
                    padding: 6px 0; 
                    font-size: 13px; 
                    font-weight: bold; 
                    /* 밝은 배경에 맞춰 구분선은 반투명 검은색으로 처리 */
                    border-top: 1px solid rgba(0, 0, 0, 0.15); 
                }
            </style>
            
            <div class="nav-box rounded">
                <!-- STREAMING_CHUNK:Header Section... -->
                <!-- 헤더 구역 (클릭 시 전체 토글) -->
                <div class="nav-header-container" onclick="toggleNav('${uniqueNavId}', '${uniqueLabelId}')">
                    <!-- 상단: 로고 및 타이틀 -->
                    <div class="nav-header-top">
                        <img src="이미지/남구_흰색로고.webp" alt="📂" style="height: 44px; margin-right: 12px;" onerror="this.outerHTML='<span style=\\'font-size:32px; margin-right:12px;\\'>📂</span>'">
                        <div style="text-align: left; line-height: 1.2;">
                            <div style="font-size: 14px; font-weight: 500;">효빈광역시 남구</div>
                            <div style="font-size: 22px; font-weight: 900; letter-spacing: 1px;">행정구역</div>
                        </div>
                    </div>
                    <!-- 하단: 접기/펼치기 버튼 -->
                    <div class="nav-header-bottom">
                        <span id="${uniqueLabelId}">[ 접기 ]</span>
                    </div>
                </div>
                
                <!-- STREAMING_CHUNK:Table Data mapping for Nam-gu (5 columns)... -->
                <!-- 본문 테이블 구역 (남구는 5열 구조) -->
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
                        
                        <!-- 항동 구역 -->
                        <tr>
                            <td class="hb-admin-bg"><a href="항동.html">항1동</a></td>
                            <td colspan="4" class="hb-legal-bg"><a href="항동.html">항동1가</a>(일부)</td>
                        </tr>
                        <tr>
                            <td class="hb-admin-bg"><a href="항동.html">항2동</a></td>
                            <td colspan="2" class="hb-legal-bg"><a href="항동1가.html">항동1가</a>(서부)</td>
                            <td colspan="2" class="hb-legal-bg"><a href="항동2가.html">항동2가</a>(서부)</td>
                        </tr>
                        <tr>
                            <td class="hb-admin-bg"><a href="항동.html">항3동</a></td>
                            <td class="hb-legal-bg"><a href="항동1가.html">항동1가</a>(중서부)</td>
                            <td class="hb-legal-bg"><a href="항동2가.html">항동2가</a>(동부)</td>
                            <td colspan="2" class="hb-legal-bg"><a href="항동3가.html">항동3가</a>(서부)</td>
                        </tr>
                        <tr>
                            <td class="hb-admin-bg"><a href="항동.html">항4동</a></td>
                            <td colspan="2" class="hb-legal-bg"><a href="항동1가.html">항동1가</a>(중동부)</td>
                            <td colspan="2" class="hb-legal-bg"><a href="항동3가.html">항동3가</a>(동부)</td>
                        </tr>
                        
                        <!-- 곽산동 구역 -->
                        <tr>
                            <td class="hb-admin-bg"><a href="곽산동.html">곽산1~2동</a></td>
                            <td colspan="4" class="hb-legal-bg"><a href="곽산동.html">곽산동</a></td>
                        </tr>
                        
                        <!-- 어간동 구역 -->
                        <tr>
                            <td class="hb-admin-bg"><a href="어간동.html">어간1~3동</a></td>
                            <td colspan="2" class="hb-legal-bg"><a href="어간동.html">어간동</a></td>
                            <td colspan="2" class="hb-legal-bg"><a href="운양동.html">운양동</a>(어간3동)</td>
                        </tr>
                        
                        <!-- 평당동 구역 (구청 뱃지 추가) -->
                        <tr>
                            <td class="hb-admin-bg"><a href="평당동.html">평당1~7동</a></td>
                            <td colspan="4" class="hb-legal-bg">
                                <span class="badge badge-gu">구청</span><a href="평당동.html">평당동</a>
                            </td>
                        </tr>
                        
                        <!-- 고당동 구역 -->
                        <tr>
                            <td class="hb-admin-bg"><a href="고당동.html">고당동</a></td>
                            <td colspan="2" class="hb-legal-bg"><a href="고간동.html">고간동</a></td>
                            <td colspan="2" class="hb-legal-bg"><a href="평당동.html">평당동</a>(일부)</td>
                        </tr>
                        
                        <!-- 월천동 구역 -->
                        <tr>
                            <td class="hb-admin-bg"><a href="월천동.html">월천동</a></td>
                            <td class="hb-legal-bg"><a href="월천동.html">월천동</a></td>
                            <td class="hb-legal-bg"><a href="신흥동.html">신흥동</a></td>
                            <td class="hb-legal-bg"><a href="박산동.html">박산동</a></td>
                            <td class="hb-legal-bg"><a href="포장동.html">포장동</a></td>
                        </tr>
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