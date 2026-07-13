/**
     * 파일명: js/안천구행정.js
     * 설명: 효빈광역시 안천구 행정구역 전체 내비게이션 자동 생성
     * 특징: 2단 분리형 헤더 구조, 안천구 전용 색상(#39C5BB), 본청 및 출장소 뱃지 적용
     */
    (function() {
        // 1. 안천구 메인 색상 및 컨테이너 찾기
        var ancheonColor = "#39C5BB";
        var containers = document.querySelectorAll(".hb-ancheongu-nav");

        // 2. 각 컨테이너마다 HTML 주입
        containers.forEach(function(container, index) {
            // 고유 ID 생성
            var uniqueNavId = "ancheonguNav_" + index;
            var uniqueLabelId = "ancheonguLabel_" + index;

            // 내비게이션 디자인 및 구조 템플릿 구성
            var navHTML = `
            <style>
                /* 공통 테이블 스타일 */
                .hb-table { width: 100%; border-collapse: collapse; text-align: center; }
                .hb-table th, .hb-table td { border: 1px solid #ccc; padding: 10px; vertical-align: middle; }
                
                /* 테이블 헤더 및 행정동 (안천구 색상 적용, 텍스트는 흰색) */
                .hb-th-bg { background-color: ${ancheonColor}; color: white; font-weight: bold; }
                .hb-admin-bg { background-color: ${ancheonColor}; color: white; font-weight: bold; }
                .hb-admin-bg a { color: white; text-decoration: none; }
                .hb-admin-bg a:hover { text-decoration: underline; }
                
                /* 법정동 및 빈칸 */
                .hb-legal-bg { background-color: white; line-height: 1.4; }
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
                .badge-gu { background-color: #28a745; } /* 구청(본청): 초록색 */
                .badge-branch { background-color: #007bff; } /* 출장소: 파란색 */
                
                /* 헤더 스타일 (2단 분리형) */
                .nav-box { border: 1px solid ${ancheonColor}; overflow: hidden; background-color: white; }
                .nav-header-container { cursor: pointer; }
                .nav-header-top { 
                    background-color: ${ancheonColor}; 
                    color: white; 
                    display: flex; 
                    justify-content: center; 
                    align-items: center; 
                    padding: 16px 0; 
                }
                .nav-header-bottom { 
                    background-color: ${ancheonColor}; 
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
                        <img src="이미지/안천구_흰색로고.webp" alt="📂" style="height: 44px; margin-right: 12px;" onerror="this.outerHTML='<span style=\\'font-size:32px; margin-right:12px;\\'>📂</span>'">
                        <div style="text-align: left; line-height: 1.2;">
                            <div style="font-size: 14px; font-weight: 500;">효빈광역시 안천구</div>
                            <div style="font-size: 22px; font-weight: 900; letter-spacing: 1px;">행정구역</div>
                        </div>
                    </div>
                    <!-- 하단: 접기/펼치기 버튼 -->
                    <div class="nav-header-bottom">
                        <span id="${uniqueLabelId}">[ 접기 ]</span>
                    </div>
                </div>
                
                <!-- 본문 테이블 구역 (안천구는 4열 구조) -->
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
                        
                        <!-- 뇌전동 구역 -->
                        <tr>
                            <td class="hb-admin-bg" rowspan="2"><a href="뇌전동.html">뇌전동</a></td>
                            <td class="hb-legal-bg"><a href="치장동.html">치장동</a></td>
                            <td class="hb-legal-bg"><a href="팔월동.html">팔월동</a></td>
                            <td class="hb-legal-bg"><a href="세익동.html">세익동</a></td>
                        </tr>
                        <tr>
                            <td class="hb-legal-bg"><a href="뇌전동.html">뇌전동</a></td>
                            <td class="hb-legal-bg"><a href="하가동.html">하가동</a></td>
                            <td class="hb-legal-bg"><a href="상가동.html">상가동</a></td>
                        </tr>
                        
                        <!-- 당가동 구역 -->
                        <tr>
                            <td class="hb-admin-bg"><a href="당가1동.html">당가1동</a></td>
                            <td colspan="3" rowspan="2" class="hb-legal-bg"><a href="당가동.html">당가동</a></td>
                        </tr>
                        <tr><td class="hb-admin-bg"><a href="당가2동.html">당가2동</a></td></tr>
                        
                        <!-- 북택동 구역 -->
                        <tr>
                            <td class="hb-admin-bg"><a href="북택동.html">북택동</a></td>
                            <td class="hb-legal-bg"><a href="북택동.html">북택동</a></td>
                            <td colspan="2" class="hb-legal-bg"><a href="하구동.html">하구동</a></td>
                        </tr>
                        
                        <!-- 안천동 구역 (본청 뱃지) -->
                        <tr>
                            <td class="hb-admin-bg"><a href="안천1동.html">안천1동</a></td>
                            <td colspan="3" rowspan="7" class="hb-legal-bg">
                                <span class="badge badge-gu">구청</span><a href="안천동.html">안천동</a>
                            </td>
                        </tr>
                        <tr><td class="hb-admin-bg"><a href="안천2동.html">안천2동</a></td></tr>
                        <tr><td class="hb-admin-bg"><a href="안천3동.html">안천3동</a></td></tr>
                        <tr><td class="hb-admin-bg"><a href="안천4동.html">안천4동</a></td></tr>
                        <tr><td class="hb-admin-bg"><a href="안천5동.html">안천5동</a></td></tr>
                        <tr><td class="hb-admin-bg"><a href="안천6동.html">안천6동</a></td></tr>
                        <tr><td class="hb-admin-bg"><a href="안천7동.html">안천7동</a></td></tr>
                        
                        <!-- 성저동 구역 -->
                        <tr>
                            <td class="hb-admin-bg"><a href="성저동.html">성저동</a></td>
                            <td colspan="3" class="hb-legal-bg"><a href="성저동.html">성저동</a></td>
                        </tr>
                        
                        <!-- 창건동 구역 -->
                        <tr>
                            <td class="hb-admin-bg"><a href="창건동.html">창건동</a></td>
                            <td colspan="3" class="hb-legal-bg"><a href="창건동.html">창건동</a></td>
                        </tr>
                        
                        <!-- 이자동 구역 (출장소 뱃지 및 빈칸 처리) -->
                        <tr>
                            <td class="hb-admin-bg"><a href="이자1동.html">이자1동</a></td>
                            <td class="hb-legal-bg">
                                <span class="badge badge-branch">출장소</span><a href="이자동.html">이자동</a>
                            </td>
                            <td class="hb-legal-bg"><a href="신동.html">신동</a></td>
                            <td class="hb-empty-bg"></td>
                        </tr>
                        <tr>
                            <td class="hb-admin-bg"><a href="이자2동.html">이자2동</a></td>
                            <td colspan="3" class="hb-legal-bg"><a href="이자동.html">이자동</a></td>
                        </tr>
                        <tr>
                            <td class="hb-admin-bg"><a href="이자3동.html">이자3동</a></td>
                            <td class="hb-legal-bg"><a href="이자동.html">이자동</a></td>
                            <td class="hb-legal-bg"><a href="탄자동.html">탄자동</a></td>
                            <td class="hb-empty-bg"></td>
                        </tr>
                        <tr>
                            <td class="hb-admin-bg"><a href="이자4동.html">이자4동</a></td>
                            <td colspan="3" class="hb-legal-bg"><a href="이자동.html">이자동</a></td>
                        </tr>
                        
                        <!-- 악부동 구역 -->
                        <tr>
                            <td class="hb-admin-bg" rowspan="4"><a href="악부동.html">악부동</a></td>
                            <td class="hb-legal-bg"><a href="악부동.html">악부동</a></td>
                            <td class="hb-legal-bg"><a href="제택동.html">제택동</a></td>
                            <td class="hb-legal-bg"><a href="무로동.html">무로동</a></td>
                        </tr>
                        <tr>
                            <td class="hb-legal-bg"><a href="타천동.html">타천동</a></td>
                            <td class="hb-legal-bg"><a href="천문동.html">천문동</a></td>
                            <td class="hb-legal-bg"><a href="팔망성동.html">팔망성동</a></td>
                        </tr>
                        <tr>
                            <td class="hb-legal-bg"><a href="천본동.html">천본동</a></td>
                            <td class="hb-legal-bg"><a href="군청동.html">군청동</a></td>
                            <td class="hb-legal-bg"><a href="일화동.html">일화동</a></td>
                        </tr>
                        <tr>
                            <td class="hb-legal-bg"><a href="초음동.html">초음동</a></td>
                            <td colspan="2" class="hb-legal-bg"><a href="광상동.html">광상동</a></td>
                        </tr>
                        
                        <!-- 이십기동 구역 -->
                        <tr>
                            <td class="hb-admin-bg" rowspan="2"><a href="이십기동.html">이십기동</a></td>
                            <td class="hb-legal-bg"><a href="이십기동.html">이십기동</a></td>
                            <td class="hb-legal-bg"><a href="추자동.html">추자동</a></td>
                            <td class="hb-legal-bg"><a href="리의동.html">리의동</a></td>
                        </tr>
                        <tr>
                            <td colspan="3" class="hb-legal-bg"><a href="심회동.html">심회동</a></td>
                        </tr>
                        
                        <!-- 백합동 구역 -->
                        <tr>
                            <td class="hb-admin-bg"><a href="백합동.html">백합동</a></td>
                            <td class="hb-legal-bg"><a href="백합동.html">백합동</a></td>
                            <td colspan="2" class="hb-legal-bg"><a href="상점동.html">상점동</a></td>
                        </tr>
                        
                        <!-- 칠채동 구역 (빈칸 처리) -->
                        <tr>
                            <td class="hb-admin-bg" rowspan="3"><a href="칠채동.html">칠채동</a></td>
                            <td class="hb-legal-bg"><a href="칠채동.html">칠채동</a></td>
                            <td class="hb-legal-bg"><a href="능릉동.html">능릉동</a></td>
                            <td class="hb-legal-bg"><a href="월삼동.html">월삼동</a></td>
                        </tr>
                        <tr>
                            <td class="hb-legal-bg"><a href="융문동.html">융문동</a></td>
                            <td class="hb-legal-bg"><a href="남동.html">남동</a></td>
                            <td class="hb-legal-bg"><a href="정치동.html">정치동</a></td>
                        </tr>
                        <tr>
                            <td class="hb-legal-bg"><a href="서수동.html">서수동</a></td>
                            <td class="hb-legal-bg"><a href="영색무동.html">영색무동</a></td>
                            <td class="hb-empty-bg"></td>
                        </tr>
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