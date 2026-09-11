document.addEventListener("DOMContentLoaded", () => {
    const containers = document.querySelectorAll(".sanggeup-hospital-container");
    if (containers.length === 0) return;

    const templateHTML = `
    <style>
        .s-hospital-wrapper {
            border: 2px solid #003764;
            font-family: 'Malgun Gothic', 'Apple SD Gothic Neo', sans-serif;
            background-color: #fff;
            color: #333;
            margin-bottom: 20px;
            box-sizing: border-box;
            width: 100%;
        }
        .s-hospital-wrapper a {
            color: #286da4;
            text-decoration: none;
        }
        .s-hospital-wrapper a:hover {
            text-decoration: underline;
        }
        .s-hospital-header {
            background-color: #003764;
            color: #fff;
            text-align: center;
            padding: 16px 10px;
            font-size: 1.3em;
            font-weight: bold;
        }
        /* 로고와 글자를 중앙에 나란히 배치하기 위한 설정 */
        .s-header-top {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
            margin-bottom: 8px;
        }
        .s-header-top img {
            height: 32px;
            /* 원본 색상 유지를 위해 filter 속성 없음 */
        }
        .s-header-top span {
            font-size: 1.1em;
            letter-spacing: 1px;
        }
        .s-region-summary {
            cursor: pointer;
            background-color: #f8f9fa;
            padding: 10px;
            text-align: center;
            font-weight: bold;
            list-style: none;
            font-size: 1.15em;
            border-top: 1px solid #ddd;
        }
        .s-region-summary::-webkit-details-marker {
            display: none; 
        }
        .s-sub-region {
            background-color: #003764;
            color: #fff;
            text-align: center;
            padding: 7px;
            font-weight: bold;
            font-size: 1.1em;
            margin-top: -1px;
        }
        .s-city-bar {
            color: #fff;
            text-align: center;
            padding: 6px;
            font-size: 0.95em;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5px;
        }
        .s-city-bar img {
            height: 15px;
            filter: brightness(0) invert(1);
        }
        .s-table {
            width: 100%;
            border-collapse: collapse;
            table-layout: fixed;
        }
        .s-table td {
            background-color: #bdcce0;
            border: 1px solid #fff;
            padding: 10px 8px;
            text-align: center;
            font-size: 1.05em;
            width: 50%;
        }
        .s-table td.empty-cell {
            background-color: #fff;
        }
        
        /* City Colors */
        .bg-seoul { background-color: #ae1932; }
        .bg-incheon { background-color: #0079c1; }
        .bg-gyeonggi { background-color: #004097; }
        .bg-gangwon { background-color: #D50037; }
        .bg-chungbuk { background-color: #724598; }
        .bg-daejeon { background-color: #00ae4d; }
        .bg-chungnam { background-color: #8C8C70; }
        .bg-jeonbuk { background-color: #024694; }
        .bg-jeonnam { background-color: #003595; }
        .bg-daegu { background-color: #008837; }
        .bg-busan { background-color: #E5007F; }
        .bg-ulsan { background-color: #008c95; }
        .bg-gyeongnam { background-color: #f05a39; }
        
        /* Fictional Region Colors */
        .bg-hyobin { background-color: #7777aa; }
        .bg-deokbuk { background-color: #4AD898; }
        .bg-deoknam { background-color: #335566; }
    </style>

    <div class="s-hospital-wrapper">
        <div class="s-hospital-header">
            <div class="s-header-top">
                <img src="이미지/대한민국_정부_로고.svg" alt="보건복지부 마크">
                <span>보건복지부</span>
            </div>
            <div>제5기 (’24~’26년) 상급종합병원</div>
        </div>

        <!-- 수도권 -->
        <details>
            <summary class="s-region-summary">수도권</summary>
            
            <div class="s-sub-region">서울권</div>
            <div class="s-city-bar bg-seoul">
                <img src="이미지/서울특별시.svg" alt="서울특별시"> 서울특별시 소재 상급종합병원
            </div>
            <table class="s-table">
                <tr>
                    <td><a href="강북삼성병원.html">강북삼성병원</a></td>
                    <td><a href="건국대학교병원.html">건국대학교병원</a></td>
                </tr>
                <tr>
                    <td><a href="경희대학교병원.html">경희대학교병원</a></td>
                    <td><a href="고려대 구로병원.html">고려대 구로병원</a></td>
                </tr>
                <tr>
                    <td><a href="삼성서울병원.html">삼성서울병원</a></td>
                    <td><a href="서울대병원.html">서울대병원</a></td>
                </tr>
                <tr>
                    <td><a href="강남세브란스병원.html">강남세브란스병원</a></td>
                    <td><a href="세브란스병원.html">세브란스병원</a></td>
                </tr>
                <tr>
                    <td><a href="이대목동병원.html">이대목동병원</a></td>
                    <td><a href="서울아산병원.html">서울아산병원</a></td>
                </tr>
                <tr>
                    <td><a href="중앙대병원.html">중앙대병원</a></td>
                    <td><a href="고려대 안암병원.html">고려대 안암병원</a></td>
                </tr>
                <tr>
                    <td><a href="서울성모병원.html">서울성모병원</a></td>
                    <td><a href="한양대병원.html">한양대병원</a></td>
                </tr>
            </table>

            <div class="s-sub-region">경기서북부권</div>
            <div class="s-city-bar bg-incheon">
                <img src="이미지/인천광역시.svg" alt="인천광역시"> 인천광역시 소재 상급종합병원
            </div>
            <table class="s-table">
                <tr>
                    <td><a href="인천성모병원.html">인천성모병원</a></td>
                    <td><a href="길병원.html">길병원</a></td>
                </tr>
                <tr>
                    <td><a href="인하대병원.html">인하대병원</a></td>
                    <td class="empty-cell"></td>
                </tr>
            </table>
            
            <div class="s-city-bar bg-gyeonggi">
                <img src="이미지/경기도.svg" alt="경기도"> 경기도 소재 상급종합병원
            </div>
            <table class="s-table">
                <tr>
                    <td><a href="순천향대 부천병원.html">순천향대 부천병원</a></td>
                    <td class="empty-cell"></td>
                </tr>
            </table>

            <div class="s-sub-region">경기남부권</div>
            <div class="s-city-bar bg-gyeonggi">
                <img src="이미지/경기도.svg" alt="경기도"> 경기도 소재 상급종합병원
            </div>
            <table class="s-table">
                <tr>
                    <td><a href="성빈센트병원.html">성빈센트병원</a></td>
                    <td><a href="고려대 안산병원.html">고려대 안산병원</a></td>
                </tr>
                <tr>
                    <td><a href="분당서울대병원.html">분당서울대병원</a></td>
                    <td><a href="아주대병원.html">아주대병원</a></td>
                </tr>
                <tr>
                    <td><a href="한림대 성심병원.html">한림대 성심병원</a></td>
                    <td class="empty-cell"></td>
                </tr>
            </table>
        </details>

        <!-- 강원권 -->
        <details>
            <summary class="s-region-summary">강원권</summary>
            
            <div class="s-sub-region">강원권</div>
            <div class="s-city-bar bg-gangwon">
                <img src="이미지/강원특별자치도.svg" alt="강원특별자치도"> 강원특별자치도 소재 상급종합병원
            </div>
            <table class="s-table">
                <tr>
                    <td><a href="강릉아산병원.html">강릉아산병원</a></td>
                    <td><a href="원주세브란스기독병원.html">원주세브란스기독병원</a></td>
                </tr>
            </table>
        </details>

        <!-- 충청권 -->
        <details>
            <summary class="s-region-summary">충청권</summary>
            
            <div class="s-sub-region">충청권</div>
            <div class="s-city-bar bg-chungbuk">
                <img src="이미지/충청북도.svg" alt="충청북도"> 충청북도 소재 상급종합병원
            </div>
            <table class="s-table">
                <tr>
                    <td><a href="충북대병원.html">충북대병원</a></td>
                    <td class="empty-cell"></td>
                </tr>
            </table>

            <div class="s-city-bar bg-daejeon">
                <img src="이미지/대전광역시.svg" alt="대전광역시"> 대전광역시 소재 상급종합병원
            </div>
            <table class="s-table">
                <tr>
                    <td><a href="건양대학교병원.html">건양대학교병원</a></td>
                    <td><a href="충남대병원.html">충남대병원</a></td>
                </tr>
            </table>

            <div class="s-city-bar bg-chungnam">
                <img src="이미지/충청남도.svg" alt="충청남도"> 충청남도 소재 상급종합병원
            </div>
            <table class="s-table">
                <tr>
                    <td><a href="단국대학교병원.html">단국대학교병원</a></td>
                    <td><a href="순천향대 천안병원.html">순천향대 천안병원</a></td>
                </tr>
            </table>
        </details>

        <!-- 호남·제주권 -->
        <details>
            <summary class="s-region-summary">호남·제주권</summary>
            
            <div class="s-sub-region">전북권</div>
            <div class="s-city-bar bg-jeonbuk">
                <img src="이미지/전북특별자치도.svg" alt="전북특별자치도"> 전북특별자치도 소재 상급종합병원
            </div>
            <table class="s-table">
                <tr>
                    <td><a href="원광대병원.html">원광대병원</a></td>
                    <td><a href="전북대병원.html">전북대병원</a></td>
                </tr>
            </table>

            <div class="s-sub-region">전남권</div>
            <div class="s-city-bar bg-jeonnam">
                <img src="이미지/전남광주통합특별시.svg" alt="전남광주통합특별시"> 전남광주통합특별시 소재 상급종합병원
            </div>
            <table class="s-table">
                <tr>
                    <td><a href="전남대병원.html">전남대병원</a></td>
                    <td><a href="조선대병원.html">조선대병원</a></td>
                </tr>
                <tr>
                    <td><a href="화순전남대병원.html">화순전남대병원</a></td>
                    <td class="empty-cell"></td>
                </tr>
            </table>
        </details>

        <!-- 영남권 -->
        <details>
            <summary class="s-region-summary">영남권</summary>
            
            <div class="s-sub-region">경북권</div>
            <div class="s-city-bar bg-daegu">
                <img src="이미지/대구광역시.svg" alt="대구광역시"> 대구광역시 소재 상급종합병원
            </div>
            <table class="s-table">
                <tr>
                    <td><a href="경북대병원.html">경북대병원</a></td>
                    <td><a href="계명대 동산병원.html">계명대 동산병원</a></td>
                </tr>
                <tr>
                    <td><a href="대구가톨릭대병원.html">대구가톨릭대병원</a></td>
                    <td><a href="영남대병원.html">영남대병원</a></td>
                </tr>
                <tr>
                    <td><a href="칠곡경북대병원.html">칠곡경북대병원</a></td>
                    <td class="empty-cell"></td>
                </tr>
            </table>

            <div class="s-sub-region">경남동부권</div>
            <div class="s-city-bar bg-busan">
                <img src="이미지/부산광역시.svg" alt="부산광역시"> 부산광역시 소재 상급종합병원
            </div>
            <table class="s-table">
                <tr>
                    <td><a href="고신대학교 복음병원.html">고신대학교 복음병원</a></td>
                    <td><a href="동아대병원.html">동아대병원</a></td>
                </tr>
                <tr>
                    <td><a href="부산대병원.html">부산대병원</a></td>
                    <td><a href="인제대 부산백병원.html">인제대 부산백병원</a></td>
                </tr>
            </table>
            
            <div class="s-city-bar bg-ulsan">
                <img src="이미지/울산광역시.svg" alt="울산광역시"> 울산광역시 소재 상급종합병원
            </div>
            <table class="s-table">
                <tr>
                    <td><a href="울산대병원.html">울산대병원</a></td>
                    <td class="empty-cell"></td>
                </tr>
            </table>

            <div class="s-sub-region">경남서부권</div>
            <div class="s-city-bar bg-gyeongnam">
                <img src="이미지/경상남도.svg" alt="경상남도"> 경상남도 소재 상급종합병원
            </div>
            <table class="s-table">
                <tr>
                    <td><a href="경상국립대병원.html">경상국립대병원</a></td>
                    <td><a href="양산부산대병원.html">양산부산대병원</a></td>
                </tr>
            </table>
        </details>

        <!-- 덕빈권 (추가 설정 권역) -->
        <details open>
            <summary class="s-region-summary">덕빈권</summary>
            
            <div class="s-sub-region">덕북권</div>
            <div class="s-city-bar bg-hyobin">
                <img src="이미지/logo.webp" alt="효빈광역시"> 효빈광역시 소재 상급종합병원
            </div>
            <table class="s-table">
                <tr>
                    <td><a href="효빈대학교병원.html">효빈대학교병원</a></td>
                    <td><a href="엽월대학교병원.html">엽월대학교병원</a></td>
                </tr>
                <tr>
                    <td><a href="삼선대학교병원.html">삼선대학교병원</a></td>
                    <td class="empty-cell"></td>
                </tr>
            </table>

            <div class="s-city-bar bg-deokbuk">
                <img src="이미지/덕북로고.webp" alt="덕빈북도"> 덕빈북도 소재 상급종합병원
            </div>
            <table class="s-table">
                <tr>
                    <td><a href="덕북대학교병원.html">덕북대학교병원</a></td>
                    <td><a href="천주효빈대병원.html">천주효빈대병원</a></td>
                </tr>
            </table>

            <div class="s-sub-region">덕남권</div>
            <div class="s-city-bar bg-deoknam">
                <img src="이미지/덕빈남도_로고.webp" alt="덕빈남도"> 덕빈남도 소재 상급종합병원
            </div>
            <table class="s-table">
                <tr>
                    <td><a href="덕남대학교병원.html">덕남대학교병원</a></td>
                    <td><a href="낙주대학교병원.html">낙주대학교병원</a></td>
                </tr>
            </table>
        </details>

    </div>
    `;

    containers.forEach(container => {
        container.innerHTML = templateHTML;
    });
});