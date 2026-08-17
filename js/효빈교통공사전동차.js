document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("hyobin-metro-trains-nav-container");
    
    if (container) {
        container.innerHTML = `
        <table class="nav-table" style="border: 2px solid #0077DD; width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
                <td class="nav-header" style="background-color: #f8f9fa; padding: 10px; border-bottom: 1px solid #0077DD;">
                    <span class="nav-header-wrap" style="display:flex; justify-content: space-between; align-items:center; width: 100%;">
                        <span style="flex: 1;"></span>
                        <span style="display:inline-flex; align-items:center; gap:8px;">
                            <img src="이미지/효빈메트로_로고.webp" style="vertical-align: middle; display:block; height: 30px;" alt="효빈교통공사 로고">
                            <a href="효빈교통공사_전동차.html" class="wiki-link" style="color:#0077DD; font-size: 1.1em; font-weight: bold; text-decoration: none;">효빈교통공사의 전동차</a>
                        </span>
                        <span style="flex: 1;"></span>
                    </span>
                </td>
            </tr>
            <tr>
                <td style="padding: 0; background-color: #fff;">
                    <!-- 자체 펼치기/접기 기능 -->
                    <details open style="border: none; margin: 0;">
                        <summary style="font-weight: bold; padding: 0.5em; cursor: pointer; background-color: #eee; list-style: none; display: flex; justify-content: center; align-items: center; font-size: 0.85em; color: #555; border-bottom: 1px solid #ddd;">[ 펼치기 · 접기 ]</summary>
                        <div style="padding: 0;">
                            <table style="width: 100%; border-collapse: collapse; text-align: left;">
                                <tr>
                                    <th style="background-color: #0077DD; color: white; padding: 10px; width: 20%; text-align: center; border-bottom: 1px solid #ddd; border-right: 1px solid #ddd; font-weight: bold;">중전철</th>
                                    <td style="padding: 10px; border-bottom: 1px solid #ddd; line-height: 1.8;">
                                        <span class="ring-icon" style="border-color: #0077DD; color: #0077DD;">1</span>
                                        <a href="효빈교통공사_1000호대_전동차.html" class="wiki-link font-bold">1000호대</a>(현황)&nbsp;&nbsp;
                                        <span class="ring-icon" style="border-color: #00CCAA; color: #00CCAA;">2</span>
                                        <a href="효빈교통공사_2000호대_전동차.html" class="wiki-link font-bold">2000호대</a>(현황)&nbsp;&nbsp;
                                        <span class="ring-icon" style="border-color: #FFCC11; color: #FFCC11;">3</span>
                                        <a href="효빈교통공사_3000호대_전동차.html" class="wiki-link font-bold">3000호대</a>(현황)&nbsp;&nbsp;
                                        <span class="ring-icon" style="border-color: #FF5522; color: #FF5522;">4</span>
                                        <a href="효빈교통공사_4000호대_전동차.html" class="wiki-link font-bold">4000호대</a>(현황)&nbsp;&nbsp;
                                        <span class="ring-icon" style="border-color: #881188; color: #881188;">6</span>
                                        <a href="효빈교통공사_6000호대_전동차.html" class="wiki-link font-bold">6000호대</a>(현황)
                                    </td>
                                </tr>
                                <tr>
                                    <th style="background-color: #0077DD; color: white; padding: 10px; text-align: center; border-bottom: 1px solid #ddd; border-right: 1px solid #ddd; font-weight: bold;">경전철/기타</th>
                                    <td style="padding: 10px; border-bottom: 1px solid #ddd; line-height: 1.8;">
                                        <span class="ring-icon" style="border-color: #EE0022; color: #EE0022;">5</span>
                                        <a href="효빈교통공사_5000호대_전동차.html" class="wiki-link font-bold">5000호대</a>(철제)&nbsp;&nbsp;
                                        <span class="ring-icon" style="border-color: #FF8899; color: #FF8899;">7</span>
                                        <a href="효빈교통공사_7000호대_전동차.html" class="wiki-link font-bold">7000호대</a>(트램)&nbsp;&nbsp;
                                        <span class="ring-icon" style="border-color: #9856FF; color: #9856FF;">8</span>
                                        <a href="효빈교통공사_8000호대_전동차.html" class="wiki-link font-bold">8000호대</a>(고무)&nbsp;&nbsp;
                                        <span class="ring-icon text-sm" style="border-color: #33AAFF; color: #33AAFF;">창</span>
                                        <a href="효빈교통공사_C000호대_전동차.html" class="wiki-link font-bold">C000호대</a>(모노레일)
                                    </td>
                                </tr>
                                <tr>
                                    <th style="background-color: gray; color: white; padding: 10px; text-align: center; border-bottom: 1px solid #ddd; border-right: 1px solid #ddd; font-weight: bold;">퇴역 차량</th>
                                    <td style="padding: 10px; border-bottom: 1px solid #ddd; line-height: 1.8;">
                                        <span class="ring-icon" style="border-color: #0077DD; color: #0077DD;">1</span>
                                        <a href="효빈교통공사_1000호대_전동차.html" class="wiki-link" style="color: #6b7280;">100호대</a> <span style="font-size: 0.75rem; color: #9ca3af;">(1984~2013)</span>&nbsp;&nbsp;
                                        <span class="ring-icon" style="border-color: #00CCAA; color: #00CCAA;">2</span>
                                        <a href="효빈교통공사_2000호대_전동차.html" class="wiki-link" style="color: #6b7280;">200호대</a> <span style="font-size: 0.75rem; color: #9ca3af;">(1989~2014)</span>&nbsp;&nbsp;
                                        <span class="ring-icon" style="border-color: #FF8899; color: #FF8899;">7</span>
                                        <a href="효빈교통공사_7000호대_전동차.html" class="wiki-link" style="color: #6b7280;">구형 전차</a> <span style="font-size: 0.75rem; color: #9ca3af;">(1931~2009)</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2" style="background-color: #f3f4f6; text-align: center; padding: 8px; font-size: 0.9em;">
                                        <a href="효빈교통공사_전동차.html" class="wiki-link" style="color:#0077DD; font-weight:bold;">효빈교통공사 소속 전동차</a> · 
                                        <a href="틀_한국철도공사의_광역철도.html" class="wiki-link" style="color:#0077DD; font-weight:bold;">한국철도공사 빈효선/빈주권 차량</a>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </details>
                </td>
            </tr>
        </table>
        `;
    }
});