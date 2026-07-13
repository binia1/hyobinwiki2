/**
     * 파일명: js/중구행정.js
     * 설명: 효빈광역시 중구 행정구역 전체 내비게이션 자동 생성
     * 특징: 2단 분리형 헤더 구조, 중구 투톤 색상(#9F8040, #BB9955), 조유동2가 구청 뱃지 적용, 표 찌그러짐 방지
     */
    (function() {
        // STREAMING_CHUNK:Initializing Jung-gu colors and containers...
        // 1. 중구 메인 색상 2종 설정 (투톤 테마)
        var headerColor = "#9F8040"; // 헤더 배경색 (진한 황금색)
        var adminColor = "#BB9955";  // 행정동/테이블헤더 배경색 (밝은 황금색)
        
        var containers = document.querySelectorAll(".hb-junggu-nav");

        // 2. 각 컨테이너마다 HTML 주입
        containers.forEach(function(container, index) {
            // STREAMING_CHUNK:Generating unique IDs...
            var uniqueNavId = "jungguNav_" + index;
            var uniqueLabelId = "jungguLabel_" + index;

            // STREAMING_CHUNK:Structuring CSS and HTML template...
            var navHTML = `
            <style>
                /* 공통 테이블 스타일 (table-layout: fixed로 찌그러짐 완벽 방지) */
                .hb-table { width: 100%; border-collapse: collapse; text-align: center; table-layout: fixed; }
                .hb-table th, .hb-table td { border: 1px solid #ccc; padding: 10px; vertical-align: middle; word-break: keep-all; }
                
                /* 테이블 헤더 및 행정동 (밝은 황금색 적용) */
                .hb-th-bg { background-color: ${adminColor}; color: white; font-weight: bold; }
                .hb-admin-bg { background-color: ${adminColor}; color: white; font-weight: bold; }
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
                
                /* 헤더 스타일 (2단 분리형, 진한 황금색 적용) */
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
                        <img src="이미지/중구_흰색로고.webp" alt="📂" style="height: 44px; margin-right: 12px;" onerror="this.outerHTML='<span style=\\'font-size:32px; margin-right:12px;\\'>📂</span>'">
                        <div style="text-align: left; line-height: 1.2;">
                            <div style="font-size: 14px; font-weight: 500;">효빈광역시 중구</div>
                            <div style="font-size: 22px; font-weight: 900; letter-spacing: 1px;">행정구역</div>
                        </div>
                    </div>
                    <!-- 하단: 접기/펼치기 버튼 -->
                    <div class="nav-header-bottom">
                        <span id="${uniqueLabelId}">[ 접기 ]</span>
                    </div>
                </div>
                
                <!-- STREAMING_CHUNK:Table Data mapping for Jung-gu (5 columns 20% each)... -->
                <!-- 본문 테이블 구역 (중구는 5열 구조, 각 20% 분할) -->
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
                        
                        <!-- 궁영동 구역 -->
                        <tr>
                            <td class="hb-admin-bg" rowspan="2"><a href="궁영동.html">궁영동</a></td>
                            <td class="hb-legal-bg"><a href="궁정동.html">궁정동</a></td>
                            <td class="hb-legal-bg"><a href="도람동.html">도람동</a></td>
                            <td class="hb-legal-bg"><a href="만실동.html">만실동</a></td>
                            <td class="hb-legal-bg"><a href="영동1가.html">영동1가</a></td>
                        </tr>
                        <tr>
                            <td colspan="4" class="hb-legal-bg"><a href="영동2가.html">영동2가</a></td>
                        </tr>
                        
                        <!-- 신덕동 구역 -->
                        <tr>
                            <td class="hb-admin-bg"><a href="신덕동.html">신덕동</a></td>
                            <td colspan="4" class="hb-legal-bg"><a href="신덕동.html">신덕동</a></td>
                        </tr>
                        
                        <!-- 내항동 구역 -->
                        <tr>
                            <td class="hb-admin-bg"><a href="내항동.html">내항동</a></td>
                            <td colspan="2" class="hb-legal-bg"><a href="내항동.html">내항동</a></td>
                            <td colspan="2" class="hb-legal-bg"><a href="명일동.html">명일동</a></td>
                        </tr>
                        
                        <!-- 내조동 구역 -->
                        <tr>
                            <td class="hb-admin-bg"><a href="내조1동.html">내조1동</a></td>
                            <td colspan="4" rowspan="2" class="hb-legal-bg"><a href="내조동.html">내조동</a></td>
                        </tr>
                        <tr><td class="hb-admin-bg"><a href="내조2동.html">내조2동</a></td></tr>
                        
                        <!-- 고도동 구역 -->
                        <tr>
                            <td class="hb-admin-bg" rowspan="2"><a href="고도동.html">고도동</a></td>
                            <td class="hb-legal-bg"><a href="고도동.html">고도동</a></td>
                            <td class="hb-legal-bg"><a href="시남동.html">시남동</a></td>
                            <td class="hb-legal-bg"><a href="시북동.html">시북동</a></td>
                            <td class="hb-legal-bg"><a href="십덕동.html">십덕동</a></td>
                        </tr>
                        <tr>
                            <td colspan="4" class="hb-legal-bg"><a href="우이동.html">우이동</a></td>
                        </tr>
                        
                        <!-- 약맥동 구역 -->
                        <tr>
                            <td class="hb-admin-bg" rowspan="2"><a href="약맥동.html">약맥동</a></td>
                            <td class="hb-legal-bg"><a href="삼각동.html">삼각동</a></td>
                            <td class="hb-legal-bg"><a href="목동.html">목동</a></td>
                            <td class="hb-legal-bg"><a href="약맥동.html">약맥동</a></td>
                            <td class="hb-legal-bg"><a href="오주동.html">오주동</a></td>
                        </tr>
                        <tr>
                            <td colspan="4" class="hb-legal-bg"><a href="일향동.html">일향동</a></td>
                        </tr>
                        
                        <!-- 유내동 구역 -->
                        <tr>
                            <td class="hb-admin-bg"><a href="유내동.html">유내동</a></td>
                            <td class="hb-legal-bg"><a href="유내동.html">유내동</a></td>
                            <td class="hb-legal-bg"><a href="경동.html">경동</a></td>
                            <td class="hb-legal-bg"><a href="리사동.html">리사동</a></td>
                            <td class="hb-legal-bg"><a href="정동.html">정동</a></td>
                        </tr>
                        
                        <!-- 중앙동 구역 -->
                        <tr>
                            <td class="hb-admin-bg" rowspan="5"><a href="중앙동.html">중앙동</a></td>
                            <td class="hb-legal-bg"><a href="심동1가.html">심동1가</a></td>
                            <td class="hb-legal-bg"><a href="심동2가.html">심동2가</a></td>
                            <td class="hb-legal-bg"><a href="중앙로1가.html">중앙로1가</a></td>
                            <td class="hb-legal-bg"><a href="중앙로2가.html">중앙로2가</a></td>
                        </tr>
                        <tr>
                            <td class="hb-legal-bg"><a href="중앙로3가.html">중앙로3가</a></td>
                            <td class="hb-legal-bg"><a href="중앙로4가.html">중앙로4가</a></td>
                            <td class="hb-legal-bg"><a href="중앙로5가.html">중앙로5가</a></td>
                            <td class="hb-legal-bg"><a href="중앙로6가.html">중앙로6가</a></td>
                        </tr>
                        <tr>
                            <td class="hb-legal-bg"><a href="지유동1가.html">지유동1가</a></td>
                            <td class="hb-legal-bg"><a href="지유동2가.html">지유동2가</a></td>
                            <td class="hb-legal-bg"><a href="훈동.html">훈동</a></td>
                            <td class="hb-legal-bg"><a href="원동1가.html">원동1가</a></td>
                        </tr>
                        <tr>
                            <td class="hb-legal-bg"><a href="원동2가.html">원동2가</a></td>
                            <td class="hb-legal-bg"><a href="원동3가.html">원동3가</a></td>
                            <td class="hb-legal-bg"><a href="원동4가.html">원동4가</a></td>
                            <td class="hb-legal-bg"><a href="창선동1가.html">창선동1가</a></td>
                        </tr>
                        <tr>
                            <td class="hb-legal-bg"><a href="창선동2가.html">창선동2가</a></td>
                            <td class="hb-legal-bg"><a href="창선동3가.html">창선동3가</a></td>
                            <td class="hb-legal-bg"><a href="소장동1가.html">소장동1가</a></td>
                            <td class="hb-legal-bg"><a href="소장동2가.html">소장동2가</a></td>
                        </tr>
                        
                        <!-- 중정동 구역 -->
                        <tr>
                            <td class="hb-admin-bg" rowspan="2"><a href="중정동.html">중정동</a></td>
                            <td class="hb-legal-bg"><a href="완동1가.html">완동1가</a></td>
                            <td class="hb-legal-bg"><a href="완동2가.html">완동2가</a></td>
                            <td class="hb-legal-bg"><a href="완동3가.html">완동3가</a></td>
                            <td class="hb-legal-bg"><a href="오석동.html">오석동</a></td>
                        </tr>
                        <tr>
                            <td class="hb-legal-bg"><a href="중동1가.html">중동1가</a></td>
                            <td class="hb-legal-bg"><a href="중동2가.html">중동2가</a></td>
                            <td class="hb-legal-bg"><a href="중동3가.html">중동3가</a></td>
                            <td class="hb-legal-bg"><a href="중보로.html">중보로</a></td>
                        </tr>
                        
                        <!-- 조유동 구역 (조유동2가 구청 뱃지 추가) -->
                        <tr>
                            <td class="hb-admin-bg" rowspan="3"><a href="조유동.html">조유동</a></td>
                            <td class="hb-legal-bg"><a href="조유동1가.html">조유동1가</a></td>
                            <td class="hb-legal-bg"><span class="badge badge-gu">구청</span><a href="조유동2가.html">조유동2가</a></td>
                            <td class="hb-legal-bg"><a href="조유동3가.html">조유동3가</a></td>
                            <td class="hb-legal-bg"><a href="조유동4가.html">조유동4가</a></td>
                        </tr>
                        <tr>
                            <td class="hb-legal-bg"><a href="조유동5가.html">조유동5가</a></td>
                            <td class="hb-legal-bg"><a href="천석동1가.html">천석동1가</a></td>
                            <td class="hb-legal-bg"><a href="천석동2가.html">천석동2가</a></td>
                            <td class="hb-legal-bg"><a href="천석동3가.html">천석동3가</a></td>
                        </tr>
                        <tr>
                            <td colspan="4" class="hb-legal-bg"><a href="서남동.html">서남동</a></td>
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