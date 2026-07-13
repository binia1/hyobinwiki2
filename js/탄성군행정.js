/**
     * 파일명: js/탄성군행정.js
     * 설명: 효빈광역시 탄성군 행정구역 전체 내비게이션 자동 생성
     * 특징: 사진(울주군)과 동일한 표 구조(3열 데이터), 탄성군 전용 투톤 색상 적용, 군청 뱃지
     */
    (function() {
        // STREAMING_CHUNK:Initializing Tanseong-gun colors and containers...
        // 1. 탄성군 메인 색상 2종 설정
        var headerColor = "#6B8E23"; // 헤더 배경색 (어두운 녹색)
        var sideColor = "#9ACD32";   // 읍/면 사이드 배경색 (밝은 연두색)
        
        var containers = document.querySelectorAll(".hb-tanseonggun-nav");

        // 2. 각 컨테이너마다 HTML 주입
        containers.forEach(function(container, index) {
            // STREAMING_CHUNK:Generating unique IDs...
            var uniqueNavId = "tanseonggunNav_" + index;
            var uniqueLabelId = "tanseonggunLabel_" + index;

            // STREAMING_CHUNK:Structuring CSS and HTML template...
            var navHTML = `
            <style>
                /* 공통 테이블 스타일 */
                .hb-table { width: 100%; border-collapse: collapse; text-align: center; }
                .hb-table th, .hb-table td { border: 1px solid #ccc; padding: 10px; vertical-align: middle; }
                
                /* 좌측 카테고리 (읍/면) - 밝은 연두색 적용 */
                .hb-category-bg { background-color: ${sideColor}; color: white; font-weight: bold; font-size: 1.05em; }
                
                /* 법정동 및 빈칸 */
                .hb-legal-bg { background-color: white; line-height: 1.4; }
                .hb-legal-bg a { color: #0056b3; text-decoration: none; display: inline-block; }
                .hb-legal-bg a:hover { text-decoration: underline; }
                .hb-empty-bg { background-color: #f9f9f9; } 
                
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
                .badge-gun { background-color: #1a8f35; } /* 군청: 진한 초록색 */
                
                /* 헤더 스타일 (2단 분리형) - 어두운 녹색 적용 */
                .nav-box { border: 1px solid ${headerColor}; overflow: hidden; background-color: white; }
                .nav-header-container { cursor: pointer; }
                .nav-header-top { 
                    background-color: ${headerColor}; 
                    color: white; 
                    display: flex; 
                    justify-content: center; 
                    align-items: center; 
                    padding: 16px 0; 
                }
                .nav-header-bottom { 
                    background-color: ${headerColor}; 
                    color: white; 
                    text-align: center; 
                    padding: 6px 0; 
                    font-size: 13px; 
                    font-weight: bold; 
                    border-top: 1px solid rgba(255, 255, 255, 0.4); 
                }
            </style>
            
            <div class="nav-box rounded">
                <!-- STREAMING_CHUNK:Header Section... -->
                <!-- 헤더 구역 (클릭 시 전체 토글) -->
                <div class="nav-header-container" onclick="toggleNav('${uniqueNavId}', '${uniqueLabelId}')">
                    <!-- 상단: 로고 및 타이틀 -->
                    <div class="nav-header-top">
                        <img src="이미지/탄성군_흰색로고.webp" alt="📂" style="height: 44px; margin-right: 12px;" onerror="this.outerHTML='<span style=\\'font-size:32px; margin-right:12px;\\'>📂</span>'">
                        <div style="text-align: left; line-height: 1.2;">
                            <div style="font-size: 14px; font-weight: 500;">효빈광역시 탄성군</div>
                            <div style="font-size: 22px; font-weight: 900; letter-spacing: 1px;">행정구역</div>
                        </div>
                    </div>
                    <!-- 하단: 접기/펼치기 버튼 -->
                    <div class="nav-header-bottom">
                        <span id="${uniqueLabelId}">[ 접기 ]</span>
                    </div>
                </div>
                
                <!-- STREAMING_CHUNK:Table Data mapping for Tanseong-gun (Category + 3 Data columns)... -->
                <!-- 본문 테이블 구역 (사진과 동일한 좌측 카테고리 + 우측 3열 구조) -->
                <div id="${uniqueNavId}" class="nav-box-body" style="transition: max-height 0.3s ease-out; overflow: hidden; max-height: 2000px;">
                    <table class="hb-table text-sm border-t-0">
                        <colgroup>
                            <col style="width: 20%;">
                            <col style="width: 26.6%;">
                            <col style="width: 26.6%;">
                            <col style="width: 26.6%;">
                        </colgroup>
                        
                        <!-- 읍 Section -->
                        <tr>
                            <th class="hb-category-bg border-t-0" rowspan="2">읍</th>
                            <td class="hb-legal-bg border-t-0">
                                <span class="badge badge-gun">군청</span><a href="탄성읍.html">탄성읍</a>
                            </td>
                            <td class="hb-legal-bg border-t-0"><a href="도변읍.html">도변읍</a></td>
                            <td class="hb-legal-bg border-t-0"><a href="야진읍.html">야진읍</a></td>
                        </tr>
                        <tr>
                            <td class="hb-legal-bg"><a href="서목읍.html">서목읍</a></td>
                            <td class="hb-legal-bg"><a href="고해읍.html">고해읍</a></td>
                            <td class="hb-empty-bg"></td>
                        </tr>
                        
                        <!-- 면 Section -->
                        <tr>
                            <th class="hb-category-bg" rowspan="2">면</th>
                            <td class="hb-legal-bg"><a href="도향면.html">도향면</a></td>
                            <td class="hb-legal-bg"><a href="흑택면.html">흑택면</a></td>
                            <td class="hb-legal-bg"><a href="정근면.html">정근면</a></td>
                        </tr>
                        <tr>
                            <td class="hb-legal-bg"><a href="소원면.html">소원면</a></td>
                            <td class="hb-empty-bg"></td>
                            <td class="hb-empty-bg"></td>
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