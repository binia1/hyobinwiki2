document.addEventListener("DOMContentLoaded", function() {
    const heritageSection = document.getElementById("korea-world-heritage-section");
    if (!heritageSection) return;

    const templateHtml = `
    <style>
        .heritage-nav-box {
            border: 1px solid #ccc;
            margin-top: 10px; margin-bottom: 30px;
            font-family: 'Noto Sans KR', sans-serif;
            font-size: 0.85rem;
            border-collapse: collapse;
            width: 100%;
            box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        }
        .heritage-top-band {
            display: flex; height: 12px; width: 100%;
        }
        .heritage-top-band > div:nth-child(1) { flex: 1.2; background: #000; position: relative; }
        .heritage-top-band > div:nth-child(1)::after { content:''; position:absolute; top:0; right:-10px; width:20px; height:100%; background:#000; transform:skewX(-45deg); z-index:2; }
        .heritage-top-band > div:nth-child(2) { flex: 0.5; background: #fff; z-index:1; }
        .heritage-top-band > div:nth-child(3) { flex: 4; background: #fff; }
        .heritage-top-band > div:nth-child(4) { flex: 1.5; background: #d32f2f; transform:skewX(-20deg); margin-left:-5px; }
        .heritage-top-band > div:nth-child(5) { flex: 1; background: #1976d2; margin-left:-5px; }

        .heritage-nav-header {
            display: flex; justify-content: center; align-items: center;
            border-bottom: 1px solid #ccc; padding: 12px;
            background-color: #fff; text-align: center;
        }
        .heritage-title {
            display: flex; align-items: center; justify-content: center; gap: 10px;
            font-weight: 900; font-size: 1.15rem; line-height: 1.2;
        }
        .heritage-toggle {
            text-align: center; font-size: 0.8rem; font-weight: bold; padding: 6px; 
            background: #fff; border-bottom: 1px solid #222;
        }
        .heritage-category {
            background-color: #231f20; color: #fff;
            text-align: center; font-weight: bold; padding: 8px; font-size: 1rem;
            border-bottom: 1px solid #ccc;
        }
        .heritage-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            background-color: #fff;
        }
        .heritage-item {
            padding: 15px 10px; border: 1px solid #e0e0e0; text-align: center;
        }
        .heritage-year {
            background-color: #231f20; color: #fff;
            display: inline-block; padding: 2px 6px;
            font-size: 0.75rem; font-weight: 900; border-radius: 2px;
            margin-bottom: 6px; letter-spacing: -0.5px;
        }
        .heritage-name {
            color: #0077cc; font-weight: bold; text-decoration: none; display: block;
            margin-top: 2px; font-size: 0.95rem; word-break: keep-all;
        }
        .heritage-name:hover { text-decoration: underline; color: #0055a5; }
        .heritage-footer {
            background-color: #231f20; color: #fff; text-align: center;
            padding: 8px; font-weight: bold; font-size: 0.85rem;
        }
        .h-highlight { font-weight: 900; color: #d32f2f; margin-top: 4px; }
        
        @media (max-width: 768px) {
            .heritage-grid { grid-template-columns: 1fr 1fr; }
        }
    </style>
    
    <div class="heritage-nav-box">
        <div class="heritage-top-band">
            <div></div><div></div><div></div><div></div><div></div>
        </div>
        <div class="heritage-nav-header">
            <div class="heritage-title">
                <span style="font-size:2rem;">🏛️</span>
                <span style="text-align: left;">대한민국의<br>세계유산</span>
            </div>
        </div>
        <div class="heritage-toggle">[ 펼치기 · 접기 ]</div>
        
        <div class="heritage-category">문화유산</div>
        <div class="heritage-grid">
            <div class="heritage-item"><span class="heritage-year">1995년</span><br><a href="석굴암과 불국사.html" class="heritage-name">석굴암과 불국사</a></div>
            <div class="heritage-item"><span class="heritage-year">1995년</span><br><a href="해인사 장경판전.html" class="heritage-name">해인사 장경판전</a></div>
            <div class="heritage-item"><span class="heritage-year">1995년</span><br><a href="종묘.html" class="heritage-name">종묘</a></div>
            
            <div class="heritage-item"><span class="heritage-year">1997년</span><br><a href="창덕궁.html" class="heritage-name">창덕궁</a></div>
            <div class="heritage-item"><span class="heritage-year">1997년</span><br><a href="수원화성.html" class="heritage-name">수원화성</a></div>
            <div class="heritage-item"><span class="heritage-year">2000년</span><br><a href="경주역사유적지구.html" class="heritage-name">경주역사유적지구</a></div>
            
            <div class="heritage-item"><span class="heritage-year">2000년</span><br><a href="#" class="heritage-name">고창, 화순, 강화의<br>고인돌 유적</a></div>
            <div class="heritage-item"><span class="heritage-year">2009년</span><br><a href="조선왕릉.html" class="heritage-name">조선왕릉</a></div>
            <div class="heritage-item"><span class="heritage-year">2010년</span><br><a href="#" class="heritage-name">한국의 역사마을<br><span style="font-size:0.75rem; color:#555;">: 하회와 양동</span></a></div>
            
            <div class="heritage-item"><span class="heritage-year">2014년</span><br><a href="남한산성.html" class="heritage-name">남한산성</a></div>
            <div class="heritage-item"><span class="heritage-year">2015년</span><br><a href="백제역사유적지구.html" class="heritage-name">백제역사유적지구</a></div>
            <div class="heritage-item"><span class="heritage-year">2018년</span><br><a href="산사, 한국의 산지승원.html" class="heritage-name">산사, 한국의 산지승원</a></div>
            
            <div class="heritage-item"><span class="heritage-year">2019년</span><br><a href="한국의 서원.html" class="heritage-name">한국의 서원</a></div>
            <div class="heritage-item"><span class="heritage-year">2023년</span><br><a href="가야고분군.html" class="heritage-name">가야고분군</a><a href="비마리유적지구.html" class="heritage-name h-highlight">비마리 유적지구</a></div>
            <div class="heritage-item"><span class="heritage-year">2025년</span><br><a href="반구천의 암각화.html" class="heritage-name">반구천의 암각화</a></div>
        </div>

        <div class="heritage-category">자연유산</div>
        <div class="heritage-grid" style="grid-template-columns: repeat(2, 1fr);">
            <div class="heritage-item"><span class="heritage-year">2007년</span><br><a href="제주 화산섬과 용암동굴.html" class="heritage-name">제주 화산섬과 용암동굴</a></div>
            <div class="heritage-item"><span class="heritage-year">2021년</span><br><a href="한국의 갯벌.html" class="heritage-name">한국의 갯벌</a></div>
        </div>
        
        <div class="heritage-footer">
            둘러보기 틀: 대한민국의 세계유산 잠정목록
        </div>
    </div>
    `;
    heritageSection.innerHTML = templateHtml;
});