document.write(`
<style>
    /* 한국철도공사 지역본부 전용 틀 스타일 (나무위키 스타일 완벽 구현) */
    .kr-hq-table {
        width: 100%;
        border-collapse: collapse;
        border: 1px solid #c8c8c8;
        background-color: #ffffff;
        margin-bottom: 20px;
        text-align: center;
        font-family: sans-serif;
        box-shadow: 0 1px 3px rgba(0,0,0,0.02);
    }
    
    /* 상단 로고 및 헤더 영역 */
    .kr-hq-header-container {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 15px;
        border-bottom: 1px solid #c8c8c8;
    }
    .kr-hq-logo-box {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #d4d4d4; /* 이미지에 있는 내부 회색 테두리 */
        padding: 8px 25px;
        background-color: #fff;
    }
    
    /* KORAIL 이미지 로고 */
    .kr-hq-logo-img {
        height: 32px; /* 원본 로고 텍스트 크기와 비슷하게 맞춤 */
        width: auto;
        display: block;
    }
    
    /* 로고와 텍스트 사이의 구분선 */
    .kr-hq-divider {
        border-left: 1px solid #d4d4d4;
        height: 45px;
        margin: 0 20px;
    }
    
    /* 우측 텍스트 (한국철도공사 지역본부) */
    .kr-hq-title-box {
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .kr-hq-title-top {
        font-size: 14px;
        color: #0054A6;
        font-weight: bold;
        margin-bottom: 2px;
    }
    .kr-hq-title-bottom {
        font-size: 22px;
        color: #0054A6;
        font-weight: bold;
        letter-spacing: -0.5px;
        line-height: 1;
    }
    
    /* 펼치기·접기 토글 영역 */
    .kr-hq-summary {
        padding: 8px;
        background-color: #fff;
        border-bottom: 1px solid #c8c8c8;
        cursor: pointer;
        font-weight: bold;
        font-size: 14px;
        color: #222;
        list-style: none;
        outline: none;
    }
    .kr-hq-summary::-webkit-details-marker {
        display: none;
    }
    [data-theme='dark'] .kr-hq-summary {
        background-color: #222;
        color: #ddd;
        border-bottom-color: #444;
    }
    
    /* 하단 본부 링크 리스트 영역 */
    .kr-hq-content {
        padding: 15px 20px;
        line-height: 2;
        color: #999; /* 파이프(|) 기호 색상 */
        font-size: 14px;
        word-break: keep-all;
    }
    [data-theme='dark'] .kr-hq-content { background-color: #1a1a1c; }
    
    .kr-hq-link {
        color: #0054A6;
        text-decoration: none;
        padding: 0 4px;
    }
    .kr-hq-link:hover {
        text-decoration: underline;
    }
    [data-theme='dark'] .kr-hq-link { color: #5B9BD5; }
    
    /* 효빈/덕북/덕남 본부 강조용 클래스 */
    .kr-hq-link-new {
        font-weight: bold;
    }
</style>

<div class="no-autolink">
    <table class="kr-hq-table">
        <tr>
            <td>
                <!-- 1. 헤더 (로고 및 타이틀) -->
                <div class="kr-hq-header-container">
                    <div class="kr-hq-logo-box">
                        <img src="이미지/svg/코레일_로고.svg" alt="KORAIL" class="kr-hq-logo-img">
                        <div class="kr-hq-divider"></div>
                        <div class="kr-hq-title-box">
                            <span class="kr-hq-title-top">한국철도공사</span>
                            <span class="kr-hq-title-bottom">지역본부</span>
                        </div>
                    </div>
                </div>
                
                <!-- 2. 펼치기 접기 및 내용 (Details) -->
                <details open>
                    <summary class="kr-hq-summary">[ 펼치기 · 접기 ]</summary>
                    <div class="kr-hq-content">
                        <!-- 현실 기존 본부 -->
                        <a href="서울본부.html" class="kr-hq-link">서울본부</a> |
                        <a href="수도권서부본부.html" class="kr-hq-link">수도권서부본부</a> |
                        <a href="수도권동부본부.html" class="kr-hq-link">수도권동부본부</a> |
                        <a href="강원본부.html" class="kr-hq-link">강원본부</a> |
                        <a href="충북본부.html" class="kr-hq-link">충북본부</a> |
                        <a href="대전충남본부.html" class="kr-hq-link">대전충남본부</a> |
                        <a href="전북본부.html" class="kr-hq-link">전북본부</a> |
                        <a href="광주본부.html" class="kr-hq-link">광주본부</a> |
                        <a href="전남본부.html" class="kr-hq-link">전남본부</a> |
                        <a href="경북본부.html" class="kr-hq-link">경북본부</a> |
                        <a href="대구본부.html" class="kr-hq-link">대구본부</a> |
                        <a href="부산경남본부.html" class="kr-hq-link">부산경남본부</a> |
                        <a href="효빈본부.html" class="kr-hq-link">효빈본부</a> |
                        <a href="덕북본부.html" class="kr-hq-link">덕북본부</a> |
                        <a href="덕남본부.html" class="kr-hq-link">덕남본부</a>
                    </div>
                </details>
            </td>
        </tr>
    </table>
</div>
`);