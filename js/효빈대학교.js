document.currentScript.insertAdjacentHTML('beforebegin', `
<style>
    /* 원본 디자인을 유지하기 위한 독립 CSS */
    .hbnu-isolate-box details { border: 1px solid #aaa; border-radius: 4px; padding: 0; margin-bottom: 10px; background: white; display: block; }
    .hbnu-isolate-box summary { font-weight: bold; padding: 0.5em; cursor: pointer; background-color: #eee; list-style: none; display: flex; justify-content: center; align-items: center; }
    .hbnu-isolate-box summary::-webkit-details-marker { display: none; }
    .hbnu-isolate-box summary::after { content: " [ 펼치기 · 접기 ]"; font-size: 0.8em; margin-left: 5px; color: #555; }
    .hbnu-isolate-box details[open] { padding: 0; }
    .hbnu-isolate-box details[open] summary { border-bottom: 1px solid #aaa; }
    
    .hbnu-isolate-box .wiki-table { border-collapse: collapse; width: 100%; margin: 0; border: 1px solid #ccc; table-layout: fixed; font-size: 13.5px; }
    .hbnu-isolate-box .wiki-table td { padding: 8px; border: 1px solid #ccc; background: white; width: 25%; word-break: keep-all; vertical-align: middle; }
    .hbnu-isolate-box .wiki-table-center { text-align: center; }
    
    .hbnu-isolate-box .wiki-link { font-weight: bold; cursor: pointer; text-decoration: none; color: #3344aa; }
    .hbnu-isolate-box .wiki-link:hover { text-decoration: underline; }
</style>

<div class="hbnu-isolate-box" style="font-family: 'Noto Sans KR', sans-serif; clear: both; width: 100%;">
    <div style="background-image: linear-gradient(to right, #3344aa, #2a3a8c, #2a3a8c, #3344aa); color: white; padding: 20px; text-align: center; border-radius: 5px; margin-bottom: 0px;">
        <img alt="효빈대학교 로고" onerror="this.style.display='none'" src="이미지/효빈대_로고.webp" style="width: 220px; display: inline-block;"/>
    </div>
    <details>
        <summary></summary>
        <div style="padding: 0.5rem; border: 1px solid #e5e7eb; border-top: 0; background-color: white;">
            <table class="wiki-table" style="margin: 0; width: 100%;">
                <tr>
                    <td colspan="4" style="background-color: #3344aa; text-align: center; font-weight: bold; color: white;">대학 정보</td>
                </tr>
                <tr>
                    <td class="wiki-table-center"><a class="wiki-link" onclick="goToLink('효빈대학교_역사.html')">역사</a></td>
                    <td class="wiki-table-center"><a class="wiki-link" onclick="goToLink('효빈대학교_상징.html')">상징</a></td>
                    <td class="wiki-table-center"><a class="wiki-link" onclick="goToLink('효빈대학교_학부.html')">학부</a></td>
                    <td class="wiki-table-center"><a class="wiki-link" onclick="goToLink('효빈대학교_대학원.html')">대학원</a></td>
                </tr>
                <tr>
                    <td class="wiki-table-center"><a class="wiki-link" onclick="goToLink('효빈대학교_캠퍼스.html')">캠퍼스</a></td>
                    <td class="wiki-table-center"><a class="wiki-link" onclick="goToLink('효빈대학교_동아리.html')">동아리</a></td>
                    <td class="wiki-table-center"><a class="wiki-link" onclick="goToLink('효빈대학교_언론.html')">학내 언론</a></td>
                    <td class="wiki-table-center"><a class="wiki-link" onclick="goToLink('효빈대학교_교류대학.html')">교류 대학</a></td>
                </tr>
                <tr>
                    <td colspan="4" style="background-color: #3344aa; text-align: center; font-weight: bold; color: white;">시설 정보</td>
                </tr>
                <tr>
                    <td class="wiki-table-center"><a class="wiki-link" onclick="goToLink('효빈대학교_시설.html')">부속 시설</a></td>
                    <td class="wiki-table-center"><a class="wiki-link" onclick="goToLink('효빈대학교_박물관.html')">박물관</a></td>
                    <td class="wiki-table-center" colspan="2"><a class="wiki-link" onclick="goToLink('효빈대학교병원.html')">효빈대학교병원</a></td>
                </tr>
                <tr>
                    <td class="wiki-table-center"><a class="wiki-link" onclick="goToLink('효빈대학교_중앙도서관.html')">중앙도서관</a></td>
                    <td class="wiki-table-center"><a class="wiki-link" onclick="goToLink('베르데홀.html')">베르데 홀</a></td>
                    <td class="wiki-table-center" colspan="2"><a class="wiki-link" onclick="goToLink('효빈대학교_교내철도.html')">교내철도(HBNU Rail)</a></td>
                </tr>
                <tr>
                    <td colspan="4" style="background-color: #3344aa; text-align: center; font-weight: bold; color: white;">교육 시설</td>
                </tr>
                <tr>
                    <td class="wiki-table-center" colspan="2"><a class="wiki-link" onclick="goToLink('효빈대부설고등학교.html')">부설고등학교</a></td>
                    <td class="wiki-table-center" colspan="2"><a class="wiki-link" onclick="goToLink('효빈대부설중학교.html')">부설중학교</a></td>
                </tr>
                <tr>
                    <td class="wiki-table-center" colspan="2"><a class="wiki-link" onclick="goToLink('효빈대학교_과학영재교육원.html')">과학영재교육원</a></td>
                    <td class="wiki-table-center" colspan="2"><a class="wiki-link" onclick="goToLink('효빈대학교_평생교육원.html')">평생교육원</a></td>
                </tr>
                <tr>
                    <td colspan="4" style="background-color: #3344aa; text-align: center; font-weight: bold; color: white;">기타 정보</td>
                </tr>
                <tr>
                    <td class="wiki-table-center"><a class="wiki-link" onclick="goToLink('효빈대학교_출신인물.html')">출신 인물</a></td>
                    <td class="wiki-table-center"><a class="wiki-link" onclick="goToLink('효빈대학교_주변상권.html')">주변 상권</a></td>
                    <td class="wiki-table-center"><a class="wiki-link" onclick="goToLink('효빈대학교_입시.html')">입시</a></td>
                    <td class="wiki-table-center"><a class="wiki-link" onclick="goToLink('효빈대학교.html#s-9')">사건 사고</a></td>
                </tr>
            </table>
        </div>
    </details>
</div>
`);