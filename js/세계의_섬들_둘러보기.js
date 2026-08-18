(function() {
    const navHtml = `
        <div class="border-2 rounded mb-8 mt-4 overflow-hidden" style="border-color: #add8f6; background-color: var(--wiki-bg, #fff);">
            <details class="group" open>
                <summary class="cursor-pointer list-none text-center outline-none border-b border-[#ccc]">
                    <div class="py-2.5 flex items-center justify-center gap-2" style="background-color: #add8f6;">
                        <span class="text-xl">🌍</span>
                        <span class="font-bold text-lg text-black">세계의 섬</span>
                    </div>
                    <div class="py-1 text-sm bg-[#f9f9f9] text-[#0055AA] font-bold border-t border-[#ccc]">
                        <span class="group-open:hidden">[ 펼치기 ]</span>
                        <span class="hidden group-open:inline">[ 접기 ]</span>
                    </div>
                </summary>
                
                <div class="p-2 text-[0.8rem] text-center border-b border-[#ccc] text-gray-700 bg-white">
                    *: 제도나 열도, 섬의 일부만 점유하거나 통제하고 있는 경우 &nbsp;&nbsp;&nbsp; <sup>1</sup>: 범주 내에서 면적이 가장 큰 섬이나 제도
                </div>
                
                <style>
                    .island-table th { border: 1px solid #ccc; vertical-align: middle; color: #000; font-weight: bold; }
                    .island-table td { border: 1px solid #ccc; vertical-align: middle; background-color: #fff; }
                    .island-table a { color: #0055AA; text-decoration: none; }
                    .island-table a:hover { text-decoration: underline; }
                    .nav-sup { font-size: 0.75em; color: #555; }
                </style>

                <table class="w-full text-[0.85rem] m-0 border-none table-fixed island-table" style="border-collapse: collapse;">
                    <colgroup>
                        <col style="width: 14%;">
                        <col style="width: 86%;">
                    </colgroup>
                    <tbody>
                        <!-- 동아시아 -->
                        <tr><th colspan="2" class="bg-[#F8A1A4] py-1.5 text-[0.95rem]">동아시아</th></tr>
                        <tr>
                            <th class="bg-[#F8A1A4] py-2">🇰🇷 대한민국</th>
                            <td class="p-2 leading-relaxed">
                                <a href="#">제주도</a><sup class="nav-sup">1</sup> · <a href="#">거제도</a> · <a href="#">진도</a> · <a href="#">강화도</a> · <a href="#">남해도</a> · <a href="#">영종도</a> · <a href="#">안면도</a> · <a href="#">완도</a> · <a href="#">울릉도</a> · <a href="#">돌산도</a> · <a href="#">거금도</a> · <a href="#">창선도</a> · <a href="#">자은도</a> · <a href="#">압해도</a> · <a href="#">교동도</a> · <a href="#">고금도</a> · <a href="#">임자도</a> · <a href="#">백령도</a> · <a href="#">용호도</a> · <a href="#">비금도</a> · <a href="#">칠발도</a> · <a href="#">도초도</a> · <a href="#">석모도</a> · <a href="#">청산도</a> · <a href="#">보길도</a> · <a href="#">암태도</a> · <a href="#">신지도</a> · <a href="#">금호도</a> · <a href="#">나로도</a> · <a href="#">장산도</a> · <a href="#">노화도</a> · <a href="#">영흥도</a> · <a href="#">가덕도</a> · <a href="#">덕적도</a> · <a href="#">하의도</a> · <a href="#">흑산도</a> · <a href="#">한산도</a> · <a href="#">욕지도</a> · <a href="#">독도</a> · <a href="#">백마도</a> · <a href="#">선유도</a> · <a href="#">밤섬</a> · <a href="#">여의도</a> · <a href="#">노들섬</a> · <a href="#">서래섬</a> · <a href="#">당정섬</a> · <a href="#">남이섬</a> · <a href="#">뱀섬</a> · <a href="#">영도</a> · <a href="#">붕어섬</a> · <a href="#">묘도</a> · <a href="#">육도</a> · <a href="#">금구도</a> · <a href="#">대부도</a> · <a href="#">제부도</a> · <a href="#">풍도</a> · <a href="#">국화도</a> · <a href="#">격렬비열도</a> · <a href="#">저도</a> · <a href="#">오륙도</a> · <a href="#">조약도</a> · <a href="#">생일도</a> · <a href="#">여서도</a> · <a href="#">소록도</a> · <a href="#">사량도</a> · <a href="#">소매물도</a> · <a href="#">좌사리제도</a> · <a href="#">칠천도</a> · <a href="#">오동도</a> · <a href="#">지심도</a> · <a href="#">외도</a> · <a href="#">망산도</a> · <a href="#">을숙도</a> · <a href="#">추자도</a> · <a href="#">차귀도</a> · <a href="#">비양도</a> · <a href="#">범섬</a> · <a href="#">문섬</a> · <a href="#">섶섬</a> · <a href="#">우도</a> · <a href="#">고군산군도</a> · <a href="#">어청도</a> · <a href="#">십이동파도</a> · <a href="#">금란도</a> · <a href="#">대청도</a> · <a href="#">가의도</a> · <a href="#">실미도</a> · <a href="#">팔미도</a> · <a href="#">운염도</a> · <a href="#">안마 군도</a> · <a href="#">굴업도</a> · <a href="#">자월도</a> · <a href="#">신시모도</a> · <a href="#">관매도</a> · <a href="#">여자도</a> · <a href="#">해금강</a> · <a href="#">우도(창원)</a> · <a href="#">대저도</a> · <a href="#">눌차도</a> · <a href="#">둔치도</a> · <a href="#">고파도</a> · <a href="#">외연도</a> · <a href="#">우무도</a> · <a href="#">원산도</a> · <a href="#">유부도</a> · <a href="#">녹도</a> · <a href="#">삽시도</a> · <a href="#">덕도</a> · <a href="#">동백섬</a> · <a href="#">맥도</a> · <a href="#">명지도</a> · <a href="#">중사도</a> · <a href="#">진우도</a> · <a href="#">다려도</a> · <a href="#">가파도</a> · <a href="#">마라도</a> · <a href="#">사수도</a> · <a href="#">토끼섬</a> · <a href="#">형제섬</a> · <a href="#">노랑섬</a> · <a href="#">대무의도</a> · <a href="#">매도랑</a> · <a href="#">물치도</a> · <a href="#">볼음도</a> · <a href="#">증도(신안)</a> · <a href="#">거문도</a> · <a href="#">까막섬</a> · <a href="#">가우도</a> · <a href="#">가거도</a> · <a href="#">구굴도</a> · <a href="#">고도</a> · <a href="#">금오도</a> · <a href="#">노력도</a> · <a href="#">눌옥도</a> · <a href="#">도초도</a> · <a href="#">모황도</a> · <a href="#">삼학도</a> · <a href="#">소안도</a> · <a href="#">영산도</a> · <a href="#">우이도</a> · <a href="#">지죽도</a> · <a href="#">탄도</a> · <a href="#">홍도</a> · <a href="#">금란도</a> · <a href="#">무녀도</a> · <a href="#">위도</a> · <a href="#">빙도</a> · <a href="#">문갑도</a> · <a href="#">미법도</a> · <a href="#">신시도</a> · <a href="#">시루섬</a> · <a href="#">서검도</a> · <a href="#">사렴도</a> · <a href="#">사승봉도</a> · <a href="#">선갑도</a> · <a href="#">선재도</a> · <a href="#">세어도</a> · <a href="#">소무의도</a> · <a href="#">소청도</a> · <a href="#">수수떼기</a> · <a href="#">승봉도</a> · <a href="#">아암도</a> · <a href="#">연평도</a> · <a href="#">이작도</a> · <a href="#">잠진도</a> · <a href="#">장봉도</a> · <a href="#">조름섬</a> · <a href="#">주문도</a> · <a href="#">팔미도</a> · <a href="#">해녀도</a> · <a href="#">하의도</a> · <a href="#">하태도</a> · <a href="#">우도(서해 5도)</a> · <a href="#">장고도</a> · <a href="#">고구마섬</a> · <a href="#">고하도</a> · <a href="#">두미도</a> · <a href="#">추봉도</a> · <a href="#">나치도</a> · <a href="#">방축도</a> · <a href="#">아두섬</a> · <a href="#">넙도</a> · <a href="#">칠산도</a> · <a href="#">신진도</a> · <a href="#">주도</a> · <a href="#">효자도</a> · <a href="#">마진도</a> · <a href="#">황도(태안)</a> · <a href="#">황도(보령)</a> · <a href="#">백일도</a> · <a href="#">호도</a> · <a href="#">개야도</a> · <a href="#">연도(여수)</a> · <a href="#">연도(군산)</a> · <a href="#">야미도</a> · <a href="#">입파도</a> · <a href="#">비안도</a> · <a href="#">월미도</a> · <a href="#">평일도</a> · <a href="#">시산도</a> · <a href="#">금당도</a> · <a href="#">암태도</a> · <a href="#">안좌도</a> · <a href="#">솔섬</a> · <a href="#">대형제도·소형제도</a> · <a href="#">대죽도·소죽도</a> · <a href="#">가막도</a> · <a href="#">신의도</a> · 
                                <strong><a href="기도(섬).html">기도</a></strong> · <strong><a href="인채도.html">인채도</a></strong> · <strong><a href="고포도.html">고포도</a></strong> · <strong><a href="중만도.html">중만도</a></strong> · <strong><a href="포상도.html">포상도</a></strong> · <strong><a href="황운도.html">황운도</a></strong> · <strong><a href="신단도.html">신단도</a></strong> · <strong><a href="휴소도.html">휴소도</a></strong> · <strong><a href="부리도.html">부리도</a></strong>
                            </td>
                        </tr>
                        <tr>
                            <th class="bg-[#F8A1A4] py-2">🇰🇵 북한</th>
                            <td class="p-2 leading-relaxed">
                                <a href="#">비단섬</a><sup class="nav-sup">1</sup> · <a href="#">초도</a> · <a href="#">가도</a> · <a href="#">기린도</a> · <a href="#">반성열도</a> · <a href="#">봉곳도</a> · <a href="#">창린도</a> · <a href="#">능라도</a> · <a href="#">석도</a> · <a href="#">소수압도</a> · <a href="#">소초도</a> · <a href="#">소화도</a> · <a href="#">순위도</a> · <a href="#">신미도</a> · <a href="#">대계도</a> · <a href="#">대수압도</a> · <a href="#">대초도</a> · <a href="#">대화도</a> · <a href="#">두로도</a> · <a href="#">황금평</a> · <a href="#">황토도</a> · <a href="#">마양도</a> · <a href="#">마합도</a> · <a href="#">양각도</a> · <a href="#">양도</a> · <a href="#">어화도</a> · <a href="#">여도</a> · <a href="#">용매도</a> · <a href="#">우리도</a> · <a href="#">운무도</a> · <a href="#">웅도</a> · <a href="#">월내도</a> · <a href="#">위화도</a> · <a href="#">검동도</a> · <a href="#">관마도</a> · <a href="#">구리도</a> · <a href="#">다사도</a> · <a href="#">벌등도</a> · <a href="#">어적도</a> · <a href="#">유초도</a> · <a href="#">임도</a> · <a href="#">막사도</a>
                            </td>
                        </tr>
                        <tr>
                            <th class="bg-[#F8A1A4] py-2">🇹🇼 대만</th>
                            <td class="p-2 leading-relaxed">
                                <a href="#">타이완섬</a><sup class="nav-sup">1</sup> · <a href="#">진먼섬</a> · <a href="#">란위섬</a> · <a href="#">뤼다오섬</a> · <a href="#">둥사 군도</a> · <a href="#">타이핑다오</a>
                            </td>
                        </tr>
                        <tr>
                            <th class="bg-[#F8A1A4] py-2">🇯🇵 일본</th>
                            <td class="p-2 leading-relaxed">
                                <a href="#">혼슈</a><sup class="nav-sup">1</sup> · <a href="#">홋카이도</a> · <a href="#">규슈</a> · <a href="#">시코쿠</a> · <a href="#">오키나와섬</a> · <a href="#">사도섬</a> · <a href="#">아마미오섬</a> · <a href="#">쓰시마섬</a> · <a href="#">아와지섬</a> · <a href="#">야쿠섬</a> · <a href="#">다네가섬</a> · <a href="#">이리오모테섬</a> · <a href="#">이시가키섬</a> · <a href="#">리시리섬</a> · <a href="#">나카도리섬</a> · <a href="#">히라도섬</a> · <a href="#">미야코섬</a> · <a href="#">쇼도섬</a> · <a href="#">오쿠시리섬</a> · <a href="#">오쿠노시마섬</a> · <a href="#">이키섬</a> · <a href="#">야시로섬</a> · <a href="#">오키노에라부섬</a> · <a href="#">에타섬</a> · <a href="#">구라하시섬</a> · <a href="#">오사키카미섬</a> · <a href="#">하카타섬</a> · <a href="#">이즈오섬</a> · <a href="#">하시마섬</a> · <a href="#">히메섬</a> · <a href="#">요나구니섬</a> · <a href="#">이츠쿠시마섬</a> · <a href="#">오미섬</a> · <a href="#">이쿠치섬</a> · <a href="#">나오시마섬</a> · <a href="#">도시마섬</a> · <a href="#">니지마섬</a> · <a href="#">미야케섬</a> · <a href="#">미쿠라섬</a> · <a href="#">고즈섬</a> · <a href="#">하치조섬</a> · <a href="#">아오가섬</a> · <a href="#">오가사와라 제도</a>(<a href="#">하하지마 열도</a> · <a href="#">무코지마 열도</a> · <a href="#">가잔 열도</a>(<a href="#">이오지마</a>) · <a href="#">미나미토리섬</a>) · <a href="#">오키 제도</a> · <a href="#">토리시마섬</a> · <a href="#">마게섬</a> · <a href="#">우니섬</a> · <a href="#">레분섬</a> · <a href="#">이헤야이제나 제도</a> · <a href="#">게라마 제도</a> · <a href="#">아구니 제도</a> · <a href="#">사키시마</a> · <a href="#">고토 열도</a>(<a href="#">후쿠에섬</a> · <a href="#">히사카섬</a> · <a href="#">나루섬</a> · <a href="#">와카마쓰섬</a> · <a href="#">나카도리섬</a> · <a href="#">오지카섬</a> · <a href="#">우쿠지마섬</a>)
                            </td>
                        </tr>
                        <tr>
                            <th class="bg-[#F8A1A4] py-2">🇨🇳 중국</th>
                            <td class="p-2 leading-relaxed">
                                <a href="#">하이난섬</a><sup class="nav-sup">1</sup> · <a href="#">홍콩섬</a> · <a href="#">콜로아느섬</a> · <a href="#">타이파섬</a> · <a href="#">웨량섬</a> · <a href="#">창허섬</a> · <a href="#">란타우섬</a> · <a href="#">샤먼섬</a> · <a href="#">구랑위</a> · <a href="#">충밍섬</a> · <a href="#">핑탄섬</a> · <a href="#">마완</a> · <a href="#">스프래틀리 군도</a>* · <a href="#">파라셀 군도</a> · <a href="#">완산 군도</a> · <a href="#">창산 군도</a> · <a href="#">먀오다오 군도</a> · <a href="#">저우산 군도</a> · <a href="#">장산 군도</a>
                            </td>
                        </tr>

                        <!-- 동남아시아 -->
                        <tr><th colspan="2" class="bg-[#FFCCA9] py-1.5 text-[0.95rem]">동남아시아</th></tr>
                        <tr>
                            <th class="bg-[#FFCCA9] py-2">🇹🇱 동티모르</th>
                            <td class="p-2 leading-relaxed"><a href="#">티모르섬</a>*<sup class="nav-sup">1</sup> · <a href="#">아타우루 섬</a></td>
                        </tr>
                        <tr>
                            <th class="bg-[#FFCCA9] py-2">🇲🇾 말레이시아</th>
                            <td class="p-2 leading-relaxed"><a href="#">스프래틀리 군도</a>* · <a href="#">라부안</a> · <a href="#">세바틱 섬</a>* · <a href="#">보르네오(칼리만탄)</a>*<sup class="nav-sup">1</sup> · <a href="#">피낭섬</a> · <a href="#">랑카얀섬</a></td>
                        </tr>
                        <tr>
                            <th class="bg-[#FFCCA9] py-2">🇻🇳 베트남</th>
                            <td class="p-2 leading-relaxed"><a href="#">깟바섬</a> · <a href="#">꼰선 섬</a> · <a href="#">박롱비 섬</a> · <a href="#">푸꾸옥섬</a><sup class="nav-sup">1</sup> · <a href="#">혼문 섬</a> · <a href="#">혼쩨 섬</a> · <a href="#">쯔엉사 군도</a>*</td>
                        </tr>
                        <tr>
                            <th class="bg-[#FFCCA9] py-2">🇸🇬 싱가포르</th>
                            <td class="p-2 leading-relaxed"><a href="#">싱가포르 섬(폴라우 우종)</a><sup class="nav-sup">1</sup> · <a href="#">센토사 섬</a> · <a href="#">페드라 브랑카 섬</a></td>
                        </tr>
                        <tr>
                            <th class="bg-[#FFCCA9] py-2">🇮🇩 인도네시아</th>
                            <td class="p-2 leading-relaxed"><a href="#">뉴기니섬</a>*<sup class="nav-sup">1</sup> · <a href="#">보르네오섬</a>* · <a href="#">수마트라섬</a> · <a href="#">술라웨시섬</a> · <a href="#">자바섬</a> · <a href="#">티모르섬</a>* · <a href="#">할마헤라섬</a> · <a href="#">스람섬</a> · <a href="#">숨바와섬</a> · <a href="#">플로레스섬</a> · <a href="#">요스수다르소섬</a> · <a href="#">방카섬</a> · <a href="#">숨바섬</a> · <a href="#">부루섬</a> · <a href="#">발리섬</a> · <a href="#">니아스섬</a> · <a href="#">롬복섬</a> · <a href="#">벨리퉁섬</a> · <a href="#">마두라섬</a> · <a href="#">부톤섬</a> · <a href="#">웨타르섬</a> · <a href="#">와이게오섬</a> · <a href="#">얌데나섬</a> · <a href="#">탈리아부섬</a> · <a href="#">무나섬</a> · <a href="#">오비섬</a> · <a href="#">펠렝섬</a> · <a href="#">야펜섬</a> · <a href="#">모로타이섬</a> · <a href="#">바탐섬</a> · <a href="#">부톤섬</a> · <a href="#">세바틱 섬</a>*</td>
                        </tr>
                        <tr>
                            <th class="bg-[#FFCCA9] py-2">🇹🇭 태국</th>
                            <td class="p-2 leading-relaxed"><a href="#">푸껫</a><sup class="nav-sup">1</sup> · <a href="#">사멧섬</a> · <a href="#">따오섬</a> · <a href="#">코 타푸</a> · <a href="#">사무이섬</a> · <a href="#">팡안섬</a></td>
                        </tr>
                        <tr>
                            <th class="bg-[#FFCCA9] py-2">🇵🇭 필리핀</th>
                            <td class="p-2 leading-relaxed"><a href="#">루손섬</a><sup class="nav-sup">1</sup> · <a href="#">민다나오섬</a> · <a href="#">비사야 제도</a> · <a href="#">팔라완섬</a> · <a href="#">보라카이섬</a> · <a href="#">네그로스섬</a> · <a href="#">세부섬</a> · <a href="#">사마르섬</a> · <a href="#">민도로섬</a> · <a href="#">레이테섬</a> · <a href="#">보홀섬</a> · <a href="#">마스바테섬</a> · <a href="#">파나이섬</a> · <a href="#">술루 제도</a> · <a href="#">칼라얀 군도</a>*</td>
                        </tr>

                        <!-- 남아시아 -->
                        <tr><th colspan="2" class="bg-[#E3DDCB] py-1.5 text-[0.95rem]">남아시아</th></tr>
                        <tr>
                            <th class="bg-[#E3DDCB] py-2">🇧🇩 방글라데시</th>
                            <td class="p-2 leading-relaxed"><a href="#">볼라섬</a><sup class="nav-sup">1</sup> · <a href="#">모헤시칼리섬</a></td>
                        </tr>
                        <tr>
                            <th class="bg-[#E3DDCB] py-2">🇱🇰 스리랑카</th>
                            <td class="p-2 leading-relaxed"><a href="#">실론(스리랑카)섬</a><sup class="nav-sup">1</sup></td>
                        </tr>
                        <tr>
                            <th class="bg-[#E3DDCB] py-2">🇮🇳 인도</th>
                            <td class="p-2 leading-relaxed"><a href="#">안다만 제도</a><sup class="nav-sup">1</sup> · <a href="#">니코바르 제도</a> · <a href="#">스리하리코타</a> · <a href="#">노스센티널섬</a> · <a href="#">사우스센티널섬</a></td>
                        </tr>
                        <tr>
                            <th class="bg-[#E3DDCB] py-2">🇵🇰 파키스탄</th>
                            <td class="p-2 leading-relaxed"><a href="#">아스톨라섬</a><sup class="nav-sup">1</sup></td>
                        </tr>

                        <!-- 서아시아 -->
                        <tr><th colspan="2" class="bg-[#84A7D3] py-1.5 text-[0.95rem]">서아시아</th></tr>
                        <tr>
                            <th class="bg-[#84A7D3] py-2">🇧🇭 바레인</th>
                            <td class="p-2 leading-relaxed"><a href="#">바레인섬</a><sup class="nav-sup">1</sup> · <a href="#">음안나섬</a></td>
                        </tr>
                        <tr>
                            <th class="bg-[#84A7D3] py-2">🇸🇦 사우디아라비아</th>
                            <td class="p-2 leading-relaxed"><a href="#">파라산 군도</a><sup class="nav-sup">1</sup></td>
                        </tr>
                        <tr>
                            <th class="bg-[#84A7D3] py-2">🇸🇾 시리아</th>
                            <td class="p-2 leading-relaxed"><a href="#">아르와드섬</a><sup class="nav-sup">1</sup></td>
                        </tr>
                        <tr>
                            <th class="bg-[#84A7D3] py-2">🇦🇪 아랍에미리트</th>
                            <td class="p-2 leading-relaxed"><a href="#">더 월드</a> · <a href="#">야스섬</a> · <a href="#">팜 아일랜드</a></td>
                        </tr>
                        <tr>
                            <th class="bg-[#84A7D3] py-2">🇾🇪 예멘</th>
                            <td class="p-2 leading-relaxed"><a href="#">소코트라섬</a><sup class="nav-sup">1</sup> · <a href="#">페림섬</a></td>
                        </tr>
                        <tr>
                            <th class="bg-[#84A7D3] py-2">🇴🇲 오만</th>
                            <td class="p-2 leading-relaxed"><a href="#">마시라섬</a><sup class="nav-sup">1</sup></td>
                        </tr>
                        <tr>
                            <th class="bg-[#84A7D3] py-2">🇮🇷 이란</th>
                            <td class="p-2 leading-relaxed"><a href="#">케슘섬</a><sup class="nav-sup">1</sup> · <a href="#">호르무즈섬</a> · <a href="#">아부무사섬</a> · <a href="#">키쉬섬</a> · <a href="#">카르그섬</a> · <a href="#">라라크섬</a> · <a href="#">라반섬</a> · <a href="#">톤브섬</a> · <a href="#">시리섬</a> · <a href="#">파로르섬</a> · <a href="#">헨감섬</a></td>
                        </tr>
                        <tr>
                            <th class="bg-[#84A7D3] py-2">🇰🇼 쿠웨이트</th>
                            <td class="p-2 leading-relaxed"><a href="#">부비얀 섬</a><sup class="nav-sup">1</sup> · <a href="#">파일라카 섬</a></td>
                        </tr>

                        <!-- 서유럽 -->
                        <tr><th colspan="2" class="bg-[#98E0AD] py-1.5 text-[0.95rem]">서유럽</th></tr>
                        <tr>
                            <th class="bg-[#98E0AD] py-2">🇳🇱 네덜란드</th>
                            <td class="p-2 leading-relaxed"><a href="#">아루바</a> · <a href="#">퀴라소</a> · <a href="#">사바</a> · <a href="#">보네르</a> · <a href="#">신트외스타티위스</a> · <a href="#">세인트마틴섬</a>* · <a href="#">서프리슬란트 제도</a><sup class="nav-sup">1</sup></td>
                        </tr>
                        <tr>
                            <th class="bg-[#98E0AD] py-2">🇮🇪 아일랜드</th>
                            <td class="p-2 leading-relaxed"><a href="#">아일랜드섬</a>*<sup class="nav-sup">1</sup> · <a href="#">스켈리그 마이클</a> · <a href="#">토리섬</a></td>
                        </tr>
                        <tr>
                            <th class="bg-[#98E0AD] py-2">🇬🇧 영국</th>
                            <td class="p-2 leading-relaxed"><a href="#">아일랜드섬</a>* · <a href="#">그레이트브리튼섬</a><sup class="nav-sup">1</sup> · <a href="#">와이트섬</a> · <a href="#">몬트세랫</a> · <a href="#">버뮤다</a> · <a href="#">케이맨 제도</a> · <a href="#">포클랜드 제도</a> · <a href="#">세인트헬레나</a> · <a href="#">어센션섬</a> · <a href="#">터크스 케이커스 제도</a> · <a href="#">트리스탄다쿠냐</a> · <a href="#">앵귈라</a> · <a href="#">채널 제도</a> · <a href="#">맨섬</a> · <a href="#">비숍 록</a></td>
                        </tr>
                        <tr>
                            <th class="bg-[#98E0AD] py-2">🇫🇷 프랑스</th>
                            <td class="p-2 leading-relaxed"><a href="#">코르시카섬</a> · <a href="#">누벨칼레도니</a><sup class="nav-sup">1</sup> · <a href="#">몽생미셸</a> · <a href="#">마르티니크</a> · <a href="#">마요트</a> · <a href="#">레위니옹</a> · <a href="#">왈리스 푸투나</a> · <a href="#">프랑스령 폴리네시아</a> · <a href="#">케르겔렌 제도</a> · <a href="#">과들루프</a> · <a href="#">생피에르 미클롱</a> · <a href="#">클리퍼턴섬</a> · <a href="#">세인트마틴섬</a>* · <a href="#">생바르텔레미</a> · <a href="#">프랑스령 남방 및 남극 지역</a></td>
                        </tr>

                        <!-- 중부유럽 -->
                        <tr><th colspan="2" class="bg-[#3E92B6] py-1.5 text-[0.95rem]">중부유럽</th></tr>
                        <tr>
                            <th class="bg-[#3E92B6] py-2">🇩🇪 독일</th>
                            <td class="p-2 leading-relaxed"><a href="#">뤼겐섬</a><sup class="nav-sup">1</sup> · <a href="#">우제돔섬</a>* · <a href="#">페마른섬</a> · <a href="#">쥘트섬</a> · <a href="#">푀르섬</a> · <a href="#">펠보름섬</a> · <a href="#">헬골란트섬</a></td>
                        </tr>
                        <tr>
                            <th class="bg-[#3E92B6] py-2">🇵🇱 폴란드</th>
                            <td class="p-2 leading-relaxed"><a href="#">우제돔섬</a>* · <a href="#">볼린섬</a><sup class="nav-sup">1</sup></td>
                        </tr>

                        <!-- 남유럽 -->
                        <tr><th colspan="2" class="bg-[#E2A6B4] py-1.5 text-[0.95rem]">남유럽</th></tr>
                        <tr>
                            <th class="bg-[#E2A6B4] py-2">🇬🇷 그리스</th>
                            <td class="p-2 leading-relaxed"><a href="#">크레타섬</a><sup class="nav-sup">1</sup> · <a href="#">에비아섬</a> · <a href="#">레스보스섬</a> · <a href="#">케팔로니아섬</a> · <a href="#">키오스섬</a> · <a href="#">렘노스섬</a> · <a href="#">산토리니섬</a> · <a href="#">사모스섬</a> · <a href="#">델로스섬</a> · <a href="#">낙소스섬</a> · <a href="#">자킨토스섬</a> · <a href="#">타소스섬</a> · <a href="#">안드로스섬</a> · <a href="#">레프카다섬</a> · <a href="#">카르파토스섬</a> · <a href="#">키티라섬</a> · <a href="#">코르푸섬</a> · <a href="#">히오스섬</a> · <a href="#">사모트라키섬</a> · <a href="#">도데카니사 제도</a>(<a href="#">로도스섬</a> · <a href="#">코스섬</a> · <a href="#">파트모스섬</a> · <a href="#">카스텔로리조섬</a>)</td>
                        </tr>
                        <tr>
                            <th class="bg-[#E2A6B4] py-2">🇲🇹 몰타</th>
                            <td class="p-2 leading-relaxed"><a href="#">몰타섬</a><sup class="nav-sup">1</sup> · <a href="#">고조섬</a> · <a href="#">코미노섬</a> · <a href="#">필플라섬</a> · <a href="#">마노엘섬</a> · <a href="#">세인트 폴섬</a></td>
                        </tr>
                        <tr>
                            <th class="bg-[#E2A6B4] py-2">🇪🇸 스페인</th>
                            <td class="p-2 leading-relaxed"><a href="#">마요르카섬</a><sup class="nav-sup">1</sup> · <a href="#">메노르카섬</a> · <a href="#">이비사섬</a> · <a href="#">포르멘테라섬</a> · <a href="#">테네리페섬</a> · <a href="#">그란카나리아섬</a> · <a href="#">라팔마섬</a> · <a href="#">란사로테섬</a> · <a href="#">카브레라섬</a> · <a href="#">푸에르테벤투라섬</a> · <a href="#">라고메라섬</a> · <a href="#">엘이에로섬</a></td>
                        </tr>
                        <tr>
                            <th class="bg-[#E2A6B4] py-2">🇮🇹 이탈리아</th>
                            <td class="p-2 leading-relaxed"><a href="#">시칠리아</a><sup class="nav-sup">1</sup> · <a href="#">사르데냐</a> · <a href="#">엘바섬</a> · <a href="#">카프리섬</a> · <a href="#">토스카나 제도</a>(<a href="#">엘바섬</a> · <a href="#">질리오섬</a> · <a href="#">카프라이아섬</a> · <a href="#">몬테크리스토섬</a> · <a href="#">피아노사섬</a> · <a href="#">지안누트리섬</a> · <a href="#">고르고나섬</a>) · <a href="#">판텔레리아섬</a> · <a href="#">펠라지에 제도</a>(<a href="#">람페두사섬</a> · <a href="#">람피오네섬</a> · <a href="#">리노사섬</a>)</td>
                        </tr>
                        <tr>
                            <th class="bg-[#E2A6B4] py-2">🇨🇾 키프로스</th>
                            <td class="p-2 leading-relaxed"><a href="#">키프로스섬</a>*<sup class="nav-sup">1</sup></td>
                        </tr>
                        <tr>
                            <th class="bg-[#E2A6B4] py-2">🇭🇷 크로아티아</th>
                            <td class="p-2 leading-relaxed"><a href="#">크르크섬</a><sup class="nav-sup">1</sup> · <a href="#">코르출라섬</a> · <a href="#">브라치섬</a> · <a href="#">흐바르섬</a> · <a href="#">라브섬</a> · <a href="#">파그섬</a> · <a href="#">로시니섬</a> · <a href="#">우글랸섬</a> · <a href="#">치오보섬</a> · <a href="#">무르테르섬</a> · <a href="#">비스섬</a> · <a href="#">츠레스섬</a> · <a href="#">비르섬</a> · <a href="#">파슈만섬</a> · <a href="#">솔타섬</a> · <a href="#">두기오토크섬</a> · <a href="#">믈레트섬</a> · <a href="#">라스토보섬</a> · <a href="#">이주섬</a> · <a href="#">시판섬</a> · <a href="#">프리비크섬</a> · <a href="#">실바섬</a> · <a href="#">즐라린섬</a></td>
                        </tr>
                        <tr>
                            <th class="bg-[#E2A6B4] py-2">🇹🇷 튀르키예</th>
                            <td class="p-2 leading-relaxed"><a href="#">괵체아다섬</a><sup class="nav-sup">1</sup> · <a href="#">보즈자아다섬</a> · <a href="#">뷔위카다섬</a></td>
                        </tr>
                        <tr>
                            <th class="bg-[#E2A6B4] py-2">🇵🇹 포르투갈</th>
                            <td class="p-2 leading-relaxed"><a href="#">아소르스 제도</a><sup class="nav-sup">1</sup> · <a href="#">마데이라 제도</a></td>
                        </tr>

                        <!-- 동유럽 -->
                        <tr><th colspan="2" class="bg-[#EBBC6B] py-1.5 text-[0.95rem]">동유럽</th></tr>
                        <tr>
                            <th class="bg-[#EBBC6B] py-2">🇱🇻 라트비아</th>
                            <td class="p-2 leading-relaxed"><a href="#">쿤진살라섬</a><sup class="nav-sup">1</sup> · <a href="#">킵살라섬</a></td>
                        </tr>
                        <tr>
                            <th class="bg-[#EBBC6B] py-2">🇷🇺 러시아</th>
                            <td class="p-2 leading-relaxed"><a href="#">사할린섬</a><sup class="nav-sup">1</sup> · <a href="#">쿠릴 열도</a>(<a href="#">시무시르 섬</a> · <a href="#">시코탄섬</a> · <a href="#">우루프 섬</a> · <a href="#">이투루프섬</a> · <a href="#">쿠나시르섬</a> · <a href="#">파라무시르 섬</a> · <a href="#">하보마이 군도</a>) · <a href="#">노바야제믈랴</a> · <a href="#">노보시비르스크 제도</a> · <a href="#">브란겔랴섬</a> · <a href="#">유즈니섬</a> · <a href="#">모네론섬</a> · <a href="#">코틀린섬</a> · <a href="#">고글란트섬</a> · <a href="#">다이오메드 제도</a>* · <a href="#">루스키섬</a> · <a href="#">벨콥스키섬</a> · <a href="#">제믈랴프란차이오시파</a> · <a href="#">코만도르스키예 제도</a> · <a href="#">콜구예프 섬</a> · <a href="#">베르호투로바섬</a></td>
                        </tr>
                        <tr>
                            <th class="bg-[#EBBC6B] py-2">🇱🇹 리투아니아</th>
                            <td class="p-2 leading-relaxed"><a href="#">키아울레스 누가나섬</a><sup class="nav-sup">1</sup> · <a href="#">루스네섬</a></td>
                        </tr>
                        <tr>
                            <th class="bg-[#EBBC6B] py-2">🇪🇪 에스토니아</th>
                            <td class="p-2 leading-relaxed"><a href="#">사레마섬</a><sup class="nav-sup">1</sup> · <a href="#">무후섬</a> · <a href="#">보름시섬</a> · <a href="#">히우마섬</a> · <a href="#">루흐누섬</a></td>
                        </tr>
                        <tr>
                            <th class="bg-[#EBBC6B] py-2">🇺🇦 우크라이나</th>
                            <td class="p-2 leading-relaxed"><a href="#">즈미이니섬</a></td>
                        </tr>

                        <!-- 북유럽 -->
                        <tr><th colspan="2" class="bg-[#00B5E3] py-1.5 text-[0.95rem]">북유럽</th></tr>
                        <tr>
                            <th class="bg-[#00B5E3] py-2">🇳🇴 노르웨이</th>
                            <td class="p-2 leading-relaxed"><a href="#">스발바르 제도</a><sup class="nav-sup">1</sup> · <a href="#">크발뢰위아섬</a> · <a href="#">트롬쇠위아섬</a> · <a href="#">우튀위아섬</a> · <a href="#">얀마옌섬</a> · <a href="#">부베섬</a></td>
                        </tr>
                        <tr>
                            <th class="bg-[#00B5E3] py-2">🇩🇰 덴마크</th>
                            <td class="p-2 leading-relaxed"><a href="#">그린란드섬</a><sup class="nav-sup">1</sup> · <a href="#">셸란섬</a> · <a href="#">벤쉬셀티섬</a> · <a href="#">퓐섬</a> · <a href="#">롤란섬</a> · <a href="#">보른홀름섬</a> · <a href="#">팔스테르섬</a> · <a href="#">모르스섬</a> · <a href="#">알스섬</a> · <a href="#">랑엘란섬</a> · <a href="#">묀섬</a> · <a href="#">아마게르섬</a> · <a href="#">살트홀름섬</a> · <a href="#">삼쇠섬</a></td>
                        </tr>
                        <tr>
                            <th class="bg-[#00B5E3] py-2">🇸🇪 스웨덴</th>
                            <td class="p-2 leading-relaxed"><a href="#">고틀란드섬</a><sup class="nav-sup">1</sup> · <a href="#">오루스트섬</a> · <a href="#">히싱엔섬</a> · <a href="#">베름되섬</a> · <a href="#">쇠른섬</a> · <a href="#">욀란드섬</a></td>
                        </tr>
                        <tr>
                            <th class="bg-[#00B5E3] py-2">🇮🇸 아이슬란드</th>
                            <td class="p-2 leading-relaxed"><a href="#">아이슬란드섬</a><sup class="nav-sup">1</sup></td>
                        </tr>
                        <tr>
                            <th class="bg-[#00B5E3] py-2">🇫🇮 핀란드</th>
                            <td class="p-2 leading-relaxed"><a href="#">파스타 올란드</a>*<sup class="nav-sup">1</sup></td>
                        </tr>

                        <!-- 북아메리카 -->
                        <tr><th colspan="2" class="bg-[#DAAADB] py-1.5 text-[0.95rem]">북아메리카</th></tr>
                        <tr>
                            <th class="bg-[#DAAADB] py-2">🇬🇩 그레나다</th>
                            <td class="p-2 leading-relaxed"><a href="#">그레나다섬</a>*<sup class="nav-sup">1</sup> · <a href="#">카리아쿠섬</a></td>
                        </tr>
                        <tr>
                            <th class="bg-[#DAAADB] py-2">🇩🇴 도미니카 공화국</th>
                            <td class="p-2 leading-relaxed"><a href="#">히스파니올라섬</a>*<sup class="nav-sup">1</sup></td>
                        </tr>
                        <tr>
                            <th class="bg-[#DAAADB] py-2">🇲🇽 멕시코</th>
                            <td class="p-2 leading-relaxed"><a href="#">티뷰론섬</a><sup class="nav-sup">1</sup> · <a href="#">코수멜섬</a></td>
                        </tr>
                        <tr>
                            <th class="bg-[#DAAADB] py-2">🇺🇸 미국</th>
                            <td class="p-2 leading-relaxed"><a href="#">하와이 제도</a><sup class="nav-sup">1</sup> · <a href="#">푸에르토 리코</a> · <a href="#">괌</a> · <a href="#">알류샨 열도</a> · <a href="#">마리아나 제도</a> · <a href="#">리시안스키 섬</a> · <a href="#">다이오메드 제도</a>* · <a href="#">아메리칸 사모아</a> · <a href="#">라인 제도</a> · <a href="#">채널 제도</a> · <a href="#">미국령 버진아일랜드</a> · <a href="#">맨해튼</a> · <a href="#">롱아일랜드</a> · <a href="#">염소 섬</a> · <a href="#">샌환 제도</a> · <a href="#">낸터켓</a></td>
                        </tr>
                        <tr>
                            <th class="bg-[#DAAADB] py-2">🇭🇹 아이티</th>
                            <td class="p-2 leading-relaxed"><a href="#">히스파니올라섬</a>*<sup class="nav-sup">1</sup> · <a href="#">토르투가섬</a></td>
                        </tr>
                        <tr>
                            <th class="bg-[#DAAADB] py-2">🇭🇳 온두라스</th>
                            <td class="p-2 leading-relaxed"><a href="#">로아탄섬</a><sup class="nav-sup">1</sup> · <a href="#">우틸라섬</a> · <a href="#">과나하섬</a></td>
                        </tr>
                        <tr>
                            <th class="bg-[#DAAADB] py-2">🇯🇲 자메이카</th>
                            <td class="p-2 leading-relaxed"><a href="#">자메이카섬</a><sup class="nav-sup">1</sup></td>
                        </tr>
                        <tr>
                            <th class="bg-[#DAAADB] py-2">🇨🇦 캐나다</th>
                            <td class="p-2 leading-relaxed"><a href="#">멜빌섬</a> · <a href="#">빅토리아섬</a> · <a href="#">벨처 제도</a> · <a href="#">데번섬</a> · <a href="#">엘즈미어섬</a> · <a href="#">배서스트섬</a> · <a href="#">콘월리스섬</a> · <a href="#">배핀섬</a><sup class="nav-sup">1</sup> · <a href="#">뉴펀들랜드섬</a> · <a href="#">뱅크스섬</a> · <a href="#">밴쿠버 섬</a> · <a href="#">액슬하이버그 섬</a> · <a href="#">케이프브레턴섬</a> · <a href="#">앙티코스티섬</a></td>
                        </tr>
                        <tr>
                            <th class="bg-[#DAAADB] py-2">🇨🇺 쿠바</th>
                            <td class="p-2 leading-relaxed"><a href="#">쿠바섬</a><sup class="nav-sup">1</sup> · <a href="#">카요라르고델수르섬</a> · <a href="#">후벤투드섬</a></td>
                        </tr>

                        <!-- 남아메리카 -->
                        <tr><th colspan="2" class="bg-[#6AB048] py-1.5 text-[0.95rem]">남아메리카</th></tr>
                        <tr>
                            <th class="bg-[#6AB048] py-2">🇻🇪 베네수엘라</th>
                            <td class="p-2 leading-relaxed"><a href="#">베네수엘라 연방 속지</a><sup class="nav-sup">1</sup> · <a href="#">마르가리타섬</a></td>
                        </tr>
                        <tr>
                            <th class="bg-[#6AB048] py-2">🇧🇷 브라질</th>
                            <td class="p-2 leading-relaxed"><a href="#">마라조섬</a><sup class="nav-sup">1</sup> · <a href="#">바나나우 섬</a> · <a href="#">케이마다 그란지섬</a></td>
                        </tr>
                        <tr>
                            <th class="bg-[#6AB048] py-2">🇦🇷 아르헨티나</th>
                            <td class="p-2 leading-relaxed"><a href="#">로스에스타도스섬</a> · <a href="#">티에라델푸에고</a>*<sup class="nav-sup">1</sup></td>
                        </tr>
                        <tr>
                            <th class="bg-[#6AB048] py-2">🇪🇨 에콰도르</th>
                            <td class="p-2 leading-relaxed"><a href="#">갈라파고스 제도</a><sup class="nav-sup">1</sup></td>
                        </tr>
                        <tr>
                            <th class="bg-[#6AB048] py-2">🇨🇱 칠레</th>
                            <td class="p-2 leading-relaxed"><a href="#">티에라델푸에고</a>*<sup class="nav-sup">1</sup> · <a href="#">이스터섬</a> · <a href="#">디에고 라미레스 제도</a> · <a href="#">후안페르난데스 제도</a> · <a href="#">칠로에섬</a></td>
                        </tr>
                        <tr>
                            <th class="bg-[#6AB048] py-2">🇨🇴 콜롬비아</th>
                            <td class="p-2 leading-relaxed"><a href="#">산안드레스섬</a><sup class="nav-sup">1</sup> · <a href="#">프로비덴시아섬</a> · <a href="#">산타크루즈섬</a></td>
                        </tr>

                        <!-- 아프리카 -->
                        <tr><th colspan="2" class="bg-[#FFFA99] py-1.5 text-[0.95rem]">아프리카</th></tr>
                        <tr>
                            <th class="bg-[#FFFA99] py-2">🇬🇲 감비아</th>
                            <td class="p-2 leading-relaxed"><a href="#">쿤타 킨테섬</a></td>
                        </tr>
                        <tr>
                            <th class="bg-[#FFFA99] py-2">🇿🇦 남아프리카 공화국</th>
                            <td class="p-2 leading-relaxed"><a href="#">로벤섬</a> · <a href="#">프린스 에드워드 제도</a><sup class="nav-sup">1</sup></td>
                        </tr>
                        <tr>
                            <th class="bg-[#FFFA99] py-2">🇲🇬 마다가스카르</th>
                            <td class="p-2 leading-relaxed"><a href="#">마다가스카르섬</a><sup class="nav-sup">1</sup> · <a href="#">노지베섬</a> · <a href="#">생트마리섬</a> · <a href="#">주앙데노바섬</a></td>
                        </tr>
                        <tr>
                            <th class="bg-[#FFFA99] py-2">🇲🇺 모리셔스</th>
                            <td class="p-2 leading-relaxed"><a href="#">모리셔스섬</a><sup class="nav-sup">1</sup> · <a href="#">로드리게스섬</a></td>
                        </tr>
                        <tr>
                            <th class="bg-[#FFFA99] py-2">🇸🇹 상투메 프린시페</th>
                            <td class="p-2 leading-relaxed"><a href="#">상투메섬</a> · <a href="#">프린시페섬</a></td>
                        </tr>
                        <tr>
                            <th class="bg-[#FFFA99] py-2">🇸🇨 세이셸</th>
                            <td class="p-2 leading-relaxed"><a href="#">마에섬</a> · <a href="#">생피에르섬</a></td>
                        </tr>
                        <tr>
                            <th class="bg-[#FFFA99] py-2">🇬🇶 적도 기니</th>
                            <td class="p-2 leading-relaxed"><a href="#">비오코섬</a><sup class="nav-sup">1</sup> · <a href="#">코리스코섬</a> · <a href="#">엘로베이그란데섬</a> · <a href="#">엘로베이치코섬</a> · <a href="#">안노본섬</a></td>
                        </tr>
                        <tr>
                            <th class="bg-[#FFFA99] py-2">🇨🇻 카보베르데</th>
                            <td class="p-2 leading-relaxed"><a href="#">산티아구섬</a><sup class="nav-sup">1</sup> · <a href="#">산투안탕섬</a> · <a href="#">보아비스타섬</a> · <a href="#">포구섬</a> · <a href="#">상니콜라우섬</a> · <a href="#">마이우섬</a> · <a href="#">살섬</a> · <a href="#">상비센트섬</a></td>
                        </tr>
                        <tr>
                            <th class="bg-[#FFFA99] py-2">🇹🇿 탄자니아</th>
                            <td class="p-2 leading-relaxed"><a href="#">잔지바르</a><sup class="nav-sup">1</sup> · <a href="#">펨바섬</a> · <a href="#">우케레웨섬</a> · <a href="#">마피아섬</a></td>
                        </tr>
                        <tr>
                            <th class="bg-[#FFFA99] py-2">🇹🇳 튀니지</th>
                            <td class="p-2 leading-relaxed"><a href="#">제르바섬</a></td>
                        </tr>

                        <!-- 오세아니아 -->
                        <tr><th colspan="2" class="bg-[#94F6F6] py-1.5 text-[0.95rem]">오세아니아</th></tr>
                        <tr>
                            <th class="bg-[#94F6F6] py-2">🇳🇿 뉴질랜드</th>
                            <td class="p-2 leading-relaxed"><a href="#">뉴질랜드</a>(<a href="#">남섬</a><sup class="nav-sup">1</sup> · <a href="#">북섬</a>) · <a href="#">쿡 제도</a> · <a href="#">니우에</a> · <a href="#">토켈라우</a> · <a href="#">채텀 제도</a> · <a href="#">뉴질랜드 남극 연안 섬</a></td>
                        </tr>
                        <tr>
                            <th class="bg-[#94F6F6] py-2">🇰🇮 키리바시</th>
                            <td class="p-2 leading-relaxed"><a href="#">키리티마티 섬</a><sup class="nav-sup">1</sup> · <a href="#">마라케이섬</a> · <a href="#">캐롤라인섬</a> · <a href="#">노스타라와 제도</a> · <a href="#">아바이앙섬</a> · <a href="#">타비테우에아섬</a> · <a href="#">타라와섬</a> · <a href="#">캔턴섬</a> · <a href="#">바나바섬</a></td>
                        </tr>
                        <tr>
                            <th class="bg-[#94F6F6] py-2">🇹🇴 통가</th>
                            <td class="p-2 leading-relaxed"><a href="#">통가타푸섬</a><sup class="nav-sup">1</sup> · <a href="#">에우아섬</a> · <a href="#">하파이 제도</a> · <a href="#">바바우 제도</a> · <a href="#">니우아섬</a></td>
                        </tr>
                        <tr>
                            <th class="bg-[#94F6F6] py-2">🇹🇻 투발루</th>
                            <td class="p-2 leading-relaxed"><a href="#">푸나푸티섬</a> · <a href="#">나누메아섬</a> · <a href="#">누이섬</a> · <a href="#">누쿠페타우섬</a> · <a href="#">누쿨라엘라에섬</a> · <a href="#">바이투푸섬</a><sup class="nav-sup">1</sup> · <a href="#">나누망가섬</a> · <a href="#">니울라키타섬</a> · <a href="#">니우타오섬</a></td>
                        </tr>
                        <tr>
                            <th class="bg-[#94F6F6] py-2">🇵🇬 파푸아뉴기니</th>
                            <td class="p-2 leading-relaxed"><a href="#">뉴기니섬</a>*<sup class="nav-sup">1</sup> · <a href="#">뉴브리튼섬</a> · <a href="#">뉴아일랜드섬</a> · <a href="#">부건빌섬</a> · <a href="#">비스마르크 제도</a> · <a href="#">애드미럴티 제도</a> · <a href="#">당트르카스토 제도</a></td>
                        </tr>
                        <tr>
                            <th class="bg-[#94F6F6] py-2">🇫🇯 피지</th>
                            <td class="p-2 leading-relaxed"><a href="#">비티 레부섬</a><sup class="nav-sup">1</sup> · <a href="#">바누아 레부섬</a> · <a href="#">로투마섬</a></td>
                        </tr>
                        <tr>
                            <th class="bg-[#94F6F6] py-2">🇦🇺 호주</th>
                            <td class="p-2 leading-relaxed"><a href="#">캥거루섬</a> · <a href="#">태즈메이니아섬</a><sup class="nav-sup">1</sup> · <a href="#">멜빌섬</a> · <a href="#">배서스트섬</a> · <a href="#">코코스 제도</a> · <a href="#">크리스마스섬</a> · <a href="#">허드 맥도널드 제도</a></td>
                        </tr>

                        <!-- 남극 -->
                        <tr><th colspan="2" class="bg-[#AAAEEB] py-1.5 text-[0.95rem]">남극</th></tr>
                        <tr>
                            <th class="bg-[#AAAEEB] py-2">🇦🇶 남극</th>
                            <td class="p-2 leading-relaxed"><a href="#">킹 조지섬</a> · <a href="#">페테르 1세섬</a> · <a href="#">조인빌섬</a> · <a href="#">사우스셰틀랜드 제도</a><sup class="nav-sup">1</sup></td>
                        </tr>
                    </tbody>
                </table>
            </details>
        </div>
    `;

    // 현재 스크립트 위치 뒤에 삽입
    const currentScript = document.currentScript;
    if (currentScript) {
        currentScript.insertAdjacentHTML('afterend', navHtml);
    } else {
        document.write(navHtml);
    }
})();