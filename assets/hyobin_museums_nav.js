(function() {
    const renderHyobinMuseumsNav = () => {
        const container = document.getElementById('hyobin-museums-nav-container');
        if (!container) return;

        // 토글 함수 전역 스코프 등록 (중복 방지)
        window.toggleHyobinMuseumsBody = function(bodyId) {
            const body = document.getElementById(bodyId);
            const btn = document.getElementById(bodyId + '-btn');
            if (body.style.display === "none") {
                body.style.display = "table-row-group";
                if(btn) btn.textContent = "[ 펼치기 · 접기 ]";
            } else {
                body.style.display = "none";
                if(btn) btn.textContent = "[ 펼치기 · 접기 ]"; 
            }
        };

        container.innerHTML = `
<style>
    /* 효빈광역시 관내 박물관 틀 전용 스타일 */
    #hyobin-museums-nav-container a { text-decoration: none; word-break: keep-all; font-size: 12.5px; }
    #hyobin-museums-nav-container a:hover { text-decoration: underline; }
    #hyobin-museums-nav-container td { border: 1px solid #e5e7eb; padding: 8px 4px; vertical-align: middle; }
    #hyobin-museums-nav-container th { padding: 4px; border: 1px solid white; font-size: 14px; font-weight: bold; }
    #hyobin-museums-nav-container .link-blue { color: #0275d8; }
    #hyobin-museums-nav-container .link-red { color: #d81c2f; }
    #hyobin-museums-nav-container .link-gray { color: #ffffff; }
</style>

<table style="width: 100%; border-collapse: collapse; text-align: center; margin: 0; background: white; box-shadow: 0 1px 3px rgba(0,0,0,0.1); table-layout: fixed;">
    <colgroup>
        <col style="width: 25%;">
        <col style="width: 25%;">
        <col style="width: 25%;">
        <col style="width: 25%;">
    </colgroup>
    <thead>
        <tr>
            <td colspan="4" style="background-color: #7777aa; padding: 10px; border: 1px solid #7777aa;">
                <div style="border: 2px solid white; display: inline-flex; align-items: stretch; background: transparent; max-width: 95%;">
                    <!-- 왼쪽: 큰 로고 영역 -->
                    <div style="padding: 10px 16px; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0.05);">
                        <img src="이미지/효빈광역시_흰색로고.webp" style="height: 42px; width: auto; object-fit: contain;" onerror="this.style.display='none'">
                    </div>
                    <!-- 오른쪽: 타이틀 텍스트 영역 (경계선 딱 밀착) -->
                    <div style="border-left: 2px solid white; padding: 0 20px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 17px; letter-spacing: -0.5px; text-align: center;">
                        효빈광역시 관내 박물관
                    </div>
                </div>
            </td>
        </tr>
        <tr>
            <td id="hyobin-museums-body-btn" colspan="4" onclick="toggleHyobinMuseumsBody('hyobin-museums-body')" style="cursor: pointer; background: #ffffff; color: #0047a0; font-weight: bold; font-size: 13px; border: 1px solid #e5e7eb; padding: 8px; user-select: none;">
                [ 펼치기 · 접기 ]
            </td>
        </tr>
    </thead>
    <tbody id="hyobin-museums-body" style="display: table-row-group;">
        
        <!-- ================= 국립 ================= -->
        <tr>
            <th colspan="4" style="background-color: #003366; color: white;">국립</th>
        </tr>
        <tr>
            <td><a href="국립효빈해양관.html" class="link-blue">국립효빈해양관</a></td>
            <td><a href="국립효빈공업박물관.html" class="link-blue">국립효빈공업박물관</a></td>
            <td><a href="국립효빈박물관.html" class="link-blue">국립효빈박물관</a></td>
            <td><a href="국립효빈과학관.html" class="link-blue">국립효빈과학관</a></td>
        </tr>
        <tr>
            <td><a href="국립현대미술관 효빈관.html" class="link-blue">국립현대미술관 효빈관</a></td>
            <td><a href="국립효빈복지박물관.html" class="link-blue">국립효빈복지박물관</a></td>
            <td></td>
            <td></td>
        </tr>

        <!-- ================= 공립 ================= -->
        <tr>
            <th colspan="4" style="background-color: #f04a00; color: white;">공립</th>
        </tr>
        <tr>
            <td><a href="효빈시립미술관.html" class="link-blue">효빈시립미술관</a></td>
            <td><a href="효빈교육박물관.html" class="link-blue">효빈교육박물관</a></td>
            <td><a href="유소식물원.html" class="link-blue">유소식물원</a></td>
            <td><a href="효빈수목원.html" class="link-blue">효빈수목원</a></td>
        </tr>
        <tr>
            <td><del><a href="효빈테마식물원(예정).html" class="link-blue">효빈테마식물원(예정)</a></del></td>
            <td><a href="효빈수산박물관.html" class="link-blue">효빈수산박물관</a></td>
            <td><a href="효빈애니메이션 박물관.html" class="link-blue">효빈애니메이션 박물관</a></td>
            <td><a href="효빈철도박물관.html" class="link-blue">효빈철도박물관</a></td>
        </tr>
        <tr>
            <td><a href="효빈역사박물관.html" class="link-blue">효빈역사박물관</a></td>
            <td><a href="회주박물관.html" class="link-blue">회주박물관</a></td>
            <td><a href="전차기념박물관.html" class="link-blue">전차기념박물관</a></td>
            <td><a href="누마즈 교류기념관.html" class="link-blue">누마즈자매결연기념관</a></td>
        </tr>
        <tr>
            <td><a href="신덕전통떡박물관.html" class="link-blue">신덕 전통 떡 박물관</a></td>
            <td><a href="고송 애니메이션 아카이브.html" class="link-blue">고송 애니메이션 아카이브</a></td>
            <td><a href="사능 베이커리 뮤지엄.html" class="link-blue">사능 베이커리 뮤지엄</a></td>
            <td><a href="도람동_차고지.html" class="link-blue">도람동 전차차고지 복원 박물관</a></td>
        </tr>
        <tr>
            <td><a href="효빈간송미술관.html" class="link-blue">효빈간송미술관</a></td>
            <td><a href="효빈 동구 산업노동역사관.html" class="link-blue">효빈 동구 산업노동역사관</a></td>
            <td><a href="효빈해양역사·선박박물관.html" class="link-blue">효빈해양역사·선박박물관</a></td>
            <td><a href="효빈화폐금융박물관.html" class="link-blue">효빈화폐금융박물관</a></td>
        </tr>
        <tr>
            <td><a href="효빈어린이복합창의박물관.html" class="link-blue">효빈어린이복합창의박물관</a></td>
            <td><a href="서구 미래환경·생태뮤지엄&서구 트램 역사관.html" class="link-blue">서구 미래환경·생태뮤지엄&<br>서구 트램 역사관</a></td>
            <td><a href="북성 근대성곽 박물관.html" class="link-blue">북성 근대성곽 박물관</a></td>
            <td><a href="어부문화기념관.html" class="link-blue">어부문화기념관</a></td>
        </tr>
        <tr>
            <td><a href="서남해양경찰 역사관.html" class="link-blue">서남해양경찰 역사관</a></td>
            <td><a href="보통동 평범박물관.html" class="link-blue">보통동 ‘평범박물관’</a></td>
            <td></td>
            <td></td>
        </tr>

        <!-- ================= 사립 ================= -->
        <tr>
            <th colspan="4" style="background-color: #d81c2f; color: white;">사립</th>
        </tr>
        <tr>
            <td><a href="효빈이자미술관.html" class="link-red">효빈이자미술관</a></td>
            <td><a href="창선동 100년전 간판박물관.html" class="link-red">창선동 100년전 간판박물관</a></td>
            <td><a href="팔조 법과 문화 박물관.html" class="link-red">팔조 법과 문화 박물관</a></td>
            <td><a href="청엽 브레드 뮤지엄.html" class="link-red">청엽 브레드 뮤지엄</a></td>
        </tr>
        <tr>
            <td><a href="안천 중앙 역사문화관.html" class="link-red">안천 중앙 역사문화관</a></td>
            <td><a href="군청동 밀리터리 헤리티지 파크.html" class="link-red">군청동 밀리터리 헤리티지 파크</a></td>
            <td><a href="공리 생활사·석탄 아카이브관.html" class="link-red">공리 생활사·석탄 아카이브관</a></td>
            <td><a href="회주미술관.html" class="link-red">회주미술관</a></td>
        </tr>
        <tr>
            <td><a href="북구 중수 미디어아트 뮤지엄.html" class="link-red">북구 중수 미디어아트 뮤지엄</a></td>
            <td><a href="청엽 식음료·전통발효박물관.html" class="link-red">청엽 식음료·전통발효박물관</a></td>
            <td><a href="작은 마을 미니뮤지엄.html" class="link-red">작은 마을 미니뮤지엄</a></td>
            <td><a href="창전 해안 오르골 박물관.html" class="link-red">창전 해안 오르골 박물관</a></td>
        </tr>

        <!-- ================= 대학교 ================= -->
        <tr>
            <th colspan="4" style="background-color: #3b9b8b; color: white;">대학교</th>
        </tr>
        <tr>
            <td><a href="효빈대학교_박물관.html#s-2" class="link-blue">효빈대학교 철도애니메이션 박물관</a></td>
            <td><a href="효빈대학교_박물관.html#s-3" class="link-blue">효빈대학교 박물관</a></td>
            <td><a href="평안명대학교.html" class="link-blue">평안명대학교 박물관</a></td>
            <td><a href="삼선대학교.html" class="link-blue">삼선대학교 박물관</a></td>
        </tr>
        <tr>
            <td><a href="효빈해양대학교.html" class="link-blue">효빈해양대학 해양과학관</a></td>
            <td><a href="엽월대학교.html" class="link-blue">엽월대학교박물관</a></td>
            <td></td>
            <td></td>
        </tr>
        
        <!-- ================= 하단 푸터 (서브 네비게이션 및 광역자치단체 링크) ================= -->
        <tr>
            <td colspan="4" style="background-color: #7777aa; padding: 8px 6px; border: 1px solid #7777aa; font-size: 11.5px; color: white; line-height: 1.6;">
                <a href="효빈광역시 관련 문서.html" class="link-gray">관련 문서</a> · 
                <a href="효빈광역시 산하 기관.html" class="link-gray">산하 기관</a> · 
                <a href="효빈광역시 시설공단.html" class="link-gray">시설공단</a> · 
                <a href="효빈광역시 종합병원.html" class="link-gray">종합병원</a> · 
                <a href="효빈광역시 선수단.html" class="link-gray">선수단</a> · 
                <a href="효빈광역시 직속 도서관.html" class="link-gray">직속 도서관</a> · 
                <strong style="color: white; font-size: 12.5px;">관내 박물관</strong> · 
                <a href="효빈시립미술관.html" class="link-gray">시립 미술관</a> · 
                <a href="효빈광역시 재래시장.html" class="link-gray">재래시장</a> · 
                <a href="효빈광역시 전망대.html" class="link-gray">전망대</a> · 
                <a href="효빈광역시 관내 백화점.html" class="link-gray">관내 백화점</a>
            </td>
        </tr>
        <tr>
            <td colspan="4" style="background-color: #7777aa; padding: 6px; border: 1px solid #7777aa; font-size: 11px; color: white;">
                <a href="서울특별시.html" style="color: white; font-weight: normal;">서울</a> · 
                <a href="부산광역시.html" style="color: white; font-weight: normal;">부산</a> · 
                <a href="대구광역시.html" style="color: white; font-weight: normal;">대구</a> · 
                <a href="인천광역시.html" style="color: white; font-weight: normal;">인천</a> · 
                <a href="전남광주통합특별시.html" style="color: white; font-weight: normal;">광주</a> · 
                <a href="대전광역시.html" style="color: white; font-weight: normal;">대전</a> · 
                <a href="울산광역시.html" style="color: white; font-weight: normal;">울산</a> · 
                <a href="세종특별자치시.html" style="color: white; font-weight: normal;">세종</a> · 
                <a href="경기도.html" style="color: white; font-weight: normal;">경기</a> · 
                <a href="강원특별자치도.html" style="color: white; font-weight: normal;">강원</a> · 
                <a href="충청북도.html" style="color: white; font-weight: normal;">충북</a> · 
                <a href="충청남도.html" style="color: white; font-weight: normal;">충남</a> · 
                <a href="전북특별자치도.html" style="color: white; font-weight: normal;">전북</a> · 
                <a href="경상북도.html" style="color: white; font-weight: normal;">경북</a> · 
                <a href="경상남도.html" style="color: white; font-weight: normal;">경남</a> · 
                <a href="제주특별자치도.html" style="color: white; font-weight: normal;">제주</a> · 
                <a href="효빈광역시.html" style="color: white; font-weight: bold;">효빈</a> · 
                <a href="덕빈북도.html" style="color: white; font-weight: normal;">덕북</a> · 
                <a href="덕빈남도.html" style="color: white; font-weight: normal;">덕남</a>
            </td>
        </tr>
    </tbody>
</table>
        `;
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderHyobinMuseumsNav);
    } else {
        renderHyobinMuseumsNav();
    }
})();