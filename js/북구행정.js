/**
     * 파일명: js/북구행정.js (HTML 내장 버전)
     * 설명: 효빈광역시 북구 행정구역(행정동/법정동) 전체 내비게이션 자동 생성
     * 특징: 사진과 완벽하게 동일한 2단 분리형 헤더 구조 및 북구 전용 색상(#7799CC) 적용
     */
    (function() {
        // 1. 북구 메인 색상 및 컨테이너 찾기
        var bukguColor = "#7799CC";
        var containers = document.querySelectorAll(".hb-bukgu-nav");

        // 2. 각 컨테이너마다 HTML 주입
        containers.forEach(function(container, index) {
            // 고유 ID 생성 (접기/펼치기 기능 충돌 방지)
            var uniqueNavId = "bukguNav_" + index;
            var uniqueLabelId = "bukguLabel_" + index;

            // 내비게이션 디자인 및 구조 템플릿 구성 (사진 헤더 구조 반영)
            var navHTML = `
            <style>
                /* 공통 테이블 스타일 */
                .hb-table { width: 100%; border-collapse: collapse; text-align: center; }
                .hb-table th, .hb-table td { border: 1px solid #ccc; padding: 10px; vertical-align: middle; }
                
                /* 테이블 헤더 및 행정동 (북구 색상 적용) */
                .hb-th-bg { background-color: ${bukguColor}; color: white; font-weight: bold; }
                .hb-admin-bg { background-color: ${bukguColor}; color: white; font-weight: bold; }
                .hb-admin-bg a { color: white; text-decoration: none; }
                .hb-admin-bg a:hover { text-decoration: underline; }
                
                /* 법정동 및 빈칸 */
                .hb-legal-bg { background-color: white; }
                .hb-legal-bg a { color: #0056b3; text-decoration: none; }
                .hb-legal-bg a:hover { text-decoration: underline; }
                .hb-empty-bg { background-color: #e5e7eb; } /* 빈칸 옅은 회색 */
                
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
                .badge-si { background-color: #008080; } /* 시청: 청록색 */
                .badge-gu { background-color: #28a745; } /* 구청: 초록색 */
                
                /* ★ 사진과 동일한 구조의 헤더 스타일 ★ */
                .nav-box { border: 1px solid ${bukguColor}; overflow: hidden; background-color: white; }
                .nav-header-container { cursor: pointer; }
                .nav-header-top { 
                    background-color: ${bukguColor}; 
                    color: white; 
                    display: flex; 
                    justify-content: center; 
                    align-items: center; 
                    padding: 16px 0; 
                }
                .nav-header-bottom { 
                    background-color: ${bukguColor}; 
                    color: white; 
                    text-align: center; 
                    padding: 6px 0; 
                    font-size: 13px; 
                    font-weight: bold; 
                    border-top: 1px solid rgba(255, 255, 255, 0.4); /* 흰색 가로선 */
                }
            </style>
            
            <div class="nav-box rounded">
                <!-- 헤더 구역 (클릭 시 전체 토글) -->
                <div class="nav-header-container" onclick="toggleNav('${uniqueNavId}', '${uniqueLabelId}')">
                    <!-- 상단: 로고 및 타이틀 (중앙 정렬) -->
                    <div class="nav-header-top">
                        <img src="이미지/북구_흰색로고.webp" alt="📂" style="height: 44px; margin-right: 12px;" onerror="this.outerHTML='<span style=\\'font-size:32px; margin-right:12px;\\'>📂</span>'">
                        <div style="text-align: left; line-height: 1.2;">
                            <div style="font-size: 14px; font-weight: 500;">효빈광역시 북구</div>
                            <div style="font-size: 22px; font-weight: 900; letter-spacing: 1px;">행정구역</div>
                        </div>
                    </div>
                    <!-- 하단: 접기/펼치기 버튼 -->
                    <div class="nav-header-bottom">
                        <span id="${uniqueLabelId}">[ 접기 ]</span>
                    </div>
                </div>
                
                <!-- 본문 테이블 구역 -->
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
                        
                        <tr>
                            <td class="hb-admin-bg" rowspan="2"><a href="사능1동.html">사능1동</a></td>
                            <td class="hb-legal-bg"><a href="사능동.html">사능동1가</a></td>
                            <td class="hb-legal-bg"><a href="사능동.html">사능동2가</a>(일부)</td>
                            <td class="hb-legal-bg"><a href="사능동.html">사능동3가</a></td>
                        </tr>
                        <tr>
                            <td class="hb-legal-bg"><a href="생곡동.html">생곡동</a></td>
                            <td class="hb-legal-bg"><a href="치남동.html">치남동</a></td>
                            <td class="hb-empty-bg"></td>
                        </tr>
                        <tr>
                            <td class="hb-admin-bg"><a href="사능2동.html">사능2동</a></td>
                            <td colspan="3" class="hb-legal-bg"><a href="사능동.html">사능동2가</a>(일부)</td>
                        </tr>
                        
                        <tr>
                            <td class="hb-admin-bg"><a href="고송1동.html">고송1동</a></td>
                            <td rowspan="8" colspan="3" class="hb-legal-bg">
                                <span class="badge badge-si">시청</span><a href="고송동.html">고송동</a>
                            </td>
                        </tr>
                        <tr><td class="hb-admin-bg"><a href="고송2동.html">고송2동</a></td></tr>
                        <tr><td class="hb-admin-bg"><a href="고송3동.html">고송3동</a></td></tr>
                        <tr><td class="hb-admin-bg"><a href="고송4동.html">고송4동</a></td></tr>
                        <tr><td class="hb-admin-bg"><a href="고송5동.html">고송5동</a></td></tr>
                        <tr><td class="hb-admin-bg"><a href="고송6동.html">고송6동</a></td></tr>
                        <tr><td class="hb-admin-bg"><a href="고송7동.html">고송7동</a></td></tr>
                        <tr><td class="hb-admin-bg"><a href="고송8동.html">고송8동</a></td></tr>
                        
                        <tr>
                            <td class="hb-admin-bg"><a href="진희동.html">진희동</a></td>
                            <td class="hb-legal-bg"><a href="진희동.html">진희동</a></td>
                            <td class="hb-legal-bg"><a href="입희동.html">입희동</a></td>
                            <td class="hb-empty-bg"></td>
                        </tr>
                        <tr>
                            <td class="hb-admin-bg"><a href="청능동.html">청능동</a></td>
                            <td class="hb-legal-bg"><a href="청능동.html">청능동</a></td>
                            <td class="hb-legal-bg"><a href="입선동.html">입선동</a></td>
                            <td class="hb-legal-bg"><a href="입희동.html">입희동</a>(일부)</td>
                        </tr>
                        
                        <tr>
                            <td class="hb-admin-bg"><a href="중수1동.html">중수1동</a></td>
                            <td rowspan="4" colspan="3" class="hb-legal-bg">
                                <span class="badge badge-gu">구청</span><a href="중수동.html">중수동</a>
                            </td>
                        </tr>
                        <tr><td class="hb-admin-bg"><a href="중수2동.html">중수2동</a></td></tr>
                        <tr><td class="hb-admin-bg"><a href="중수3동.html">중수3동</a></td></tr>
                        <tr><td class="hb-admin-bg"><a href="중수4동.html">중수4동</a></td></tr>
                        
                        <tr>
                            <td class="hb-admin-bg"><a href="오내1동.html">오내1동</a></td>
                            <td rowspan="2" colspan="3" class="hb-legal-bg"><a href="오내동.html">오내동</a></td>
                        </tr>
                        <tr><td class="hb-admin-bg"><a href="오내2동.html">오내2동</a></td></tr>
                        
                        <tr>
                            <td class="hb-admin-bg"><a href="남전동.html">남전동</a></td>
                            <td colspan="3" class="hb-legal-bg"><a href="남전동.html">남전동</a></td>
                        </tr>
                        <tr>
                            <td class="hb-admin-bg"><a href="천왕사동.html">천왕사동</a></td>
                            <td class="hb-legal-bg"><a href="천왕사동.html">천왕사동</a></td>
                            <td class="hb-legal-bg"><a href="해서동.html">해서동</a></td>
                            <td class="hb-empty-bg"></td>
                        </tr>
                        <tr>
                            <td class="hb-admin-bg"><a href="소조동.html">소조동</a></td>
                            <td colspan="3" class="hb-legal-bg"><a href="소조동.html">소조동</a></td>
                        </tr>
                        <tr>
                            <td class="hb-admin-bg"><a href="포산동.html">포산동</a></td>
                            <td colspan="3" class="hb-legal-bg"><a href="포산동.html">포산동</a></td>
                        </tr>
                        <tr>
                            <td class="hb-admin-bg"><a href="산고동.html">산고동</a></td>
                            <td class="hb-legal-bg"><a href="서도동.html">서도동</a></td>
                            <td class="hb-legal-bg"><a href="추산동.html">추산동</a></td>
                            <td class="hb-legal-bg"><a href="사연동.html">사연동</a></td>
                        </tr>
                        
                        <tr>
                            <td class="hb-admin-bg" rowspan="4"><a href="채산동.html">채산동</a></td>
                            <td class="hb-legal-bg"><a href="아진동.html">아진동</a></td>
                            <td class="hb-legal-bg"><a href="곡진동.html">곡진동</a></td>
                            <td class="hb-legal-bg"><a href="평전동.html">평전동</a></td>
                        </tr>
                        <tr>
                            <td class="hb-legal-bg"><a href="등기동.html">등기동</a></td>
                            <td class="hb-legal-bg"><a href="수포동.html">수포동</a></td>
                            <td class="hb-legal-bg"><a href="아자동.html">아자동</a></td>
                        </tr>
                        <tr>
                            <td class="hb-legal-bg"><a href="신영동.html">신영동</a></td>
                            <td class="hb-legal-bg"><a href="실본동.html">실본동</a></td>
                            <td class="hb-legal-bg"><a href="채산동.html">채산동</a></td>
                        </tr>
                        <tr>
                            <td class="hb-legal-bg"><a href="습지동.html">습지동</a></td>
                            <td class="hb-empty-bg"></td>
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