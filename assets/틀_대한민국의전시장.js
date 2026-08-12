(function() {
    const template = `
<style>
    .krcv-wrapper {
        border: 2px solid #ccc;
        font-family: 'Noto Sans KR', sans-serif;
        background-color: #fff;
        max-width: 100%;
        box-sizing: border-box;
        clear: both;
        margin-bottom: 40px;
        overflow: hidden;
    }
    .krcv-header {
        background: linear-gradient(to right, #003478, #0052A5);
        color: #fff;
        padding: 12px 0;
        text-align: center;
        font-weight: 900;
        font-size: 1.1rem;
        letter-spacing: 1px;
    }
    .krcv-summary {
        background-color: #f8f9fa;
        color: #333;
        text-align: center;
        padding: 8px 0;
        font-size: 0.85rem;
        font-weight: bold;
        cursor: pointer;
        list-style: none;
        outline: none;
        border-bottom: 1px solid #ccc;
    }
    .krcv-summary::-webkit-details-marker { display: none; }
    
    .krcv-category {
        background-color: #f4f4f4;
        color: #333;
        font-weight: bold;
        font-size: 0.9rem;
        text-align: center;
        padding: 6px;
        border-bottom: 1px solid #ddd;
    }
    
    .krcv-row {
        display: flex;
        width: 100%;
        border-bottom: 1px solid #ddd;
        background: #fff;
    }
    .krcv-item {
        flex: 1;
        display: flex;
        flex-direction: column;
        border-right: 1px solid #ddd;
        min-width: 0;
    }
    .krcv-item:last-child {
        border-right: none;
    }
    
    .krcv-logo-box {
        height: 65px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        background: #fff;
    }
    .krcv-logo-img {
        max-height: 45px;
        max-width: 90%;
        object-fit: contain;
    }
    
    .krcv-label {
        color: #fff;
        font-size: 0.8rem;
        text-align: center;
        padding: 6px 4px;
        word-break: keep-all;
        line-height: 1.2;
    }
    .krcv-label a {
        color: #fff;
        text-decoration: none;
    }
    .krcv-label a:hover {
        text-decoration: underline;
    }
    .krcv-bold {
        font-weight: 900;
        font-size: 0.85rem;
    }

    .krcv-footer {
        background-color: #fafafa;
        text-align: center;
        padding: 12px;
        font-size: 0.75rem;
        color: #555;
        line-height: 1.6;
    }

    /* 다크모드 대응 */
    [data-theme='dark'] .krcv-wrapper { border-color: #444; }
    [data-theme='dark'] .krcv-summary, [data-theme='dark'] .krcv-category, [data-theme='dark'] .krcv-footer { background-color: #2d2f34; color: #eee; border-color: #444; }
    [data-theme='dark'] .krcv-row { border-color: #444; background: #1f2023; }
    [data-theme='dark'] .krcv-item { border-color: #444; }
    [data-theme='dark'] .krcv-logo-box { background: #fff; /* 로고 시인성을 위해 흰색 유지 또는 필터 적용 */ }
</style>

<div class="krcv-wrapper">
    <div class="krcv-header">
        🇰🇷 대한민국의 전시장
    </div>
    <details open style="margin: 0; padding: 0;">
        <summary class="krcv-summary">
            [ 펼치기 · 접기 ]
        </summary>
        
        <!-- 수도권 1열 -->
        <div class="krcv-category">수도권</div>
        <div class="krcv-row">
            <div class="krcv-item">
                <div class="krcv-logo-box"><img src="이미지/coex_로고.webp" class="krcv-logo-img" onerror="this.outerHTML='<span style=\\'font-weight:bold; color:#E5005A;\\'>coex</span>'"></div>
                <div class="krcv-label" style="background-color: #E5005A;">코엑스</div>
            </div>
            <div class="krcv-item">
                <div class="krcv-logo-box"><img src="이미지/coex_magok_로고.webp" class="krcv-logo-img" onerror="this.outerHTML='<span style=\\'font-weight:bold; color:#E5005A;\\'>coex magok</span>'"></div>
                <div class="krcv-label" style="background-color: #E5005A;">코엑스마곡컨벤션센터</div>
            </div>
            <div class="krcv-item">
                <div class="krcv-logo-box"><img src="이미지/aTcenter_로고.webp" class="krcv-logo-img" onerror="this.outerHTML='<span style=\\'font-weight:bold; color:#008B46;\\'>aT Center</span>'"></div>
                <div class="krcv-label" style="background-color: #008B46;">농수산물무역진흥센터</div>
            </div>
            <div class="krcv-item">
                <div class="krcv-logo-box"><img src="이미지/SETEC_로고.webp" class="krcv-logo-img" onerror="this.outerHTML='<span style=\\'font-weight:bold; color:#F37021;\\'>SETEC</span>'"></div>
                <div class="krcv-label" style="background-color: #F37021;">서울무역전시컨벤션센터</div>
            </div>
        </div>
        <!-- 수도권 2열 -->
        <div class="krcv-row">
            <div class="krcv-item">
                <div class="krcv-logo-box"><img src="이미지/songdo_로고.webp" class="krcv-logo-img" onerror="this.outerHTML='<span style=\\'font-weight:bold; color:#00A6C6;\\'>songdo convensia</span>'"></div>
                <div class="krcv-label" style="background-color: #00A6C6;">송도컨벤시아</div>
            </div>
            <div class="krcv-item">
                <div class="krcv-logo-box"><img src="이미지/KINTEX_로고.webp" class="krcv-logo-img" onerror="this.outerHTML='<span style=\\'font-weight:bold; color:#1F519B; font-size:1.2rem;\\'>KINTEX</span>'"></div>
                <div class="krcv-label krcv-bold" style="background-color: #1F519B;">한국국제전시장</div>
            </div>
            <div class="krcv-item">
                <div class="krcv-logo-box"><img src="이미지/suwon_convention_로고.webp" class="krcv-logo-img" onerror="this.outerHTML='<span style=\\'font-weight:bold; color:#E73828;\\'>수원컨벤션센터</span>'"></div>
                <div class="krcv-label" style="background-color: #E73828;">수원컨벤션센터</div>
            </div>
            <div class="krcv-item">
                <div class="krcv-logo-box"><img src="이미지/suwon_messe_로고.webp" class="krcv-logo-img" onerror="this.outerHTML='<span style=\\'font-weight:bold; color:#F37021;\\'>SUWON MESSE</span>'"></div>
                <div class="krcv-label" style="background-color: #F37021;">수원메쎄</div>
            </div>
        </div>

        <!-- 동남권 -->
        <div class="krcv-category">동남권</div>
        <div class="krcv-row">
            <div class="krcv-item">
                <div class="krcv-logo-box"><img src="이미지/bexco_로고.webp" class="krcv-logo-img" onerror="this.outerHTML='<span style=\\'font-weight:bold; color:#224289; font-size:1.2rem;\\'>bexco</span>'"></div>
                <div class="krcv-label krcv-bold" style="background-color: #224289;">벡스코</div>
            </div>
            <div class="krcv-item">
                <div class="krcv-logo-box"><img src="이미지/ueco_로고.webp" class="krcv-logo-img" onerror="this.outerHTML='<span style=\\'font-weight:bold; color:#008CCA; font-size:1.2rem;\\'>ueco</span>'"></div>
                <div class="krcv-label" style="background-color: #008CCA;">울산전시컨벤션센터</div>
            </div>
            <div class="krcv-item">
                <div class="krcv-logo-box"><img src="이미지/ceco_로고.webp" class="krcv-logo-img" onerror="this.outerHTML='<span style=\\'font-weight:bold; color:#004B87; font-size:1.2rem;\\'>CECO</span>'"></div>
                <div class="krcv-label" style="background-color: #004B87;">창원컨벤션센터</div>
            </div>
        </div>

        <!-- 대경권 -->
        <div class="krcv-category">대경권</div>
        <div class="krcv-row">
            <div class="krcv-item">
                <div class="krcv-logo-box"><img src="이미지/exco_로고.webp" class="krcv-logo-img" onerror="this.outerHTML='<span style=\\'font-weight:bold; color:#E4002B; font-size:1.2rem;\\'>exco</span>'"></div>
                <div class="krcv-label krcv-bold" style="background-color: #E4002B;">엑스코</div>
            </div>
            <div class="krcv-item">
                <div class="krcv-logo-box"><img src="이미지/gumico_로고.webp" class="krcv-logo-img" onerror="this.outerHTML='<span style=\\'font-weight:bold; color:#8B0066; font-size:1.2rem;\\'>GUMI CO</span>'"></div>
                <div class="krcv-label" style="background-color: #8B0066;">구미코</div>
            </div>
            <div class="krcv-item">
                <div class="krcv-logo-box"><img src="이미지/hico_로고.webp" class="krcv-logo-img" onerror="this.outerHTML='<span style=\\'font-weight:bold; color:#D0101A; font-size:1.2rem;\\'>HICO</span>'"></div>
                <div class="krcv-label" style="background-color: #D0101A;">경주화백컨벤션센터</div>
            </div>
        </div>

        <!-- 충청권 -->
        <div class="krcv-category">충청권</div>
        <div class="krcv-row">
            <div class="krcv-item">
                <div class="krcv-logo-box"><img src="이미지/dcc_로고.webp" class="krcv-logo-img" onerror="this.outerHTML='<span style=\\'font-weight:bold; color:#F37021; font-size:1.2rem;\\'>DCC</span>'"></div>
                <div class="krcv-label krcv-bold" style="background-color: #F37021;">대전컨벤션센터</div>
            </div>
            <div class="krcv-item">
                <div class="krcv-logo-box"><img src="이미지/osco_로고.webp" class="krcv-logo-img" onerror="this.outerHTML='<span style=\\'font-weight:bold; color:#6E328B; font-size:1.2rem;\\'>OSCO</span>'"></div>
                <div class="krcv-label" style="background-color: #6E328B;">청주오스코</div>
            </div>
        </div>

        <!-- 호남권 -->
        <div class="krcv-category">호남권</div>
        <div class="krcv-row">
            <div class="krcv-item">
                <div class="krcv-logo-box"><img src="이미지/kimdaejung_cc_로고.webp" class="krcv-logo-img" onerror="this.outerHTML='<span style=\\'font-weight:bold; color:#F37021; font-size:1.1rem;\\'>김대중컨벤션센터</span>'"></div>
                <div class="krcv-label krcv-bold" style="background-color: #F37021;">김대중컨벤션센터</div>
            </div>
            <div class="krcv-item">
                <div class="krcv-logo-box"><img src="이미지/gsco_로고.webp" class="krcv-logo-img" onerror="this.outerHTML='<span style=\\'font-weight:bold; color:#293375; font-size:1.2rem;\\'>GSCO</span>'"></div>
                <div class="krcv-label" style="background-color: #293375;">군산새만금컨벤션센터</div>
            </div>
        </div>

        <!-- 덕빈권 (추가 요청) -->
        <div class="krcv-category">덕빈권</div>
        <div class="krcv-row">
            <div class="krcv-item">
                <div class="krcv-logo-box"><img src="이미지/HSCO_로고.webp" class="krcv-logo-img" onerror="this.outerHTML='<span style=\\'font-weight:900; color:#005BAC; font-size:1.5rem; letter-spacing:1px;\\'>HSCO</span>'"></div>
                <div class="krcv-label krcv-bold" style="background-color: #005BAC;"><a href="HSCO.html">HSCO (효빈전시컨벤션센터)</a></div>
            </div>
            <div class="krcv-item">
                <div class="krcv-logo-box"><img src="이미지/BJCC_로고.webp" class="krcv-logo-img" onerror="this.outerHTML='<span style=\\'font-weight:bold; color:#008275; font-size:1.2rem;\\'>BJCC</span>'"></div>
                <div class="krcv-label" style="background-color: #008275;"><a href="빈주장기컨벤션센터.html">빈주 장기 컨벤션센터</a></div>
            </div>
            <div class="krcv-item">
                <div class="krcv-logo-box"><img src="이미지/NCCO_로고.webp" class="krcv-logo-img" onerror="this.outerHTML='<span style=\\'font-weight:bold; color:#C8102E; font-size:1.2rem;\\'>NCCO</span>'"></div>
                <div class="krcv-label" style="background-color: #C8102E;"><a href="낙주컨벤션센터.html">낙주컨벤션센터</a></div>
            </div>
        </div>

        <!-- 제주도 -->
        <div class="krcv-category">제주도</div>
        <div class="krcv-row">
            <div class="krcv-item">
                <div class="krcv-logo-box"><img src="이미지/icc_jeju_로고.webp" class="krcv-logo-img" onerror="this.outerHTML='<span style=\\'font-weight:bold; color:#E31837; font-size:1.2rem;\\'>ICC JEJU</span>'"></div>
                <div class="krcv-label krcv-bold" style="background-color: #E31837;">제주국제컨벤션센터</div>
            </div>
        </div>

        <div class="krcv-footer">
            지역별 최대 규모 전시장은 <strong>볼드체</strong><br>
            <span style="color: #2E8B57; font-weight: bold;">✉ 한국전시산업진흥회</span>에 등재된 전시장만 기재한다.
        </div>
    </details>
</div>
    `;
    
    document.currentScript.insertAdjacentHTML('beforebegin', template);
})();