document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("hyobin-univ-dept-nav-container");
    
    if (container) {
        container.innerHTML = `
        <style>
            .hyobin-wiki-table {
                width: 100%;
                border-collapse: collapse;
                border: 2px solid #1478c8;
                font-family: 'Malgun Gothic', sans-serif;
                font-size: 14px;
                background-color: transparent;
            }
            .hyobin-wiki-table th, .hyobin-wiki-table td {
                border: 1px solid #ccc;
                padding: 6px 10px;
                word-break: keep-all;
            }
            .hyobin-wiki-table a {
                text-decoration: none;
                color: #0275d8;
            }
            .hyobin-wiki-table a:hover {
                text-decoration: underline;
            }
            .hyobin-wiki-table .title-bar {
                background-color: #1478c8;
                text-align: center;
            }
            .hyobin-wiki-table .title-bar a {
                color: #ffffff;
                font-weight: bold;
            }
            .hyobin-wiki-details {
                margin: 0;
            }
            .hyobin-wiki-summary {
                cursor: pointer;
                text-align: center;
                padding: 5px;
                font-size: 13px;
                color: #555;
            }
            .inner-table {
                width: 100%;
                border-collapse: collapse;
                margin-top: -1px;
            }
            .inner-table th, .inner-table td {
                border: 1px solid #ddd;
                padding: 6px 10px;
            }
            .bg-inmun { background-color: #005484; color: #ffffff; text-align: center; }
            .bg-inmun a { color: #ffffff !important; }
            .bg-society { background-color: #F8E77F; color: #000000; text-align: center; }
            .bg-society a { color: #000000 !important; }
            .bg-nature { background-color: #FFD700; color: #000000; text-align: center; }
            .bg-nature a { color: #000000 !important; }
            .bg-eng { background-color: #FFA500; color: #ffffff; text-align: center; }
            .bg-eng a { color: #ffffff !important; }
            .bg-medi { background-color: #16AA52; color: #ffffff; text-align: center; }
            .bg-medi a { color: #ffffff !important; }
            .bg-art { background-color: #E2A6B4; color: #ffffff; text-align: center; }
            .bg-art a { color: #ffffff !important; }
            .bg-edu { background-color: #00B5E3; color: #ffffff; text-align: center; }
            .bg-edu a { color: #ffffff !important; }
            .bg-etc { background-color: gray; color: #ffffff; text-align: center; }
            .bg-etc a { color: #ffffff !important; }
            .footnote { font-size: 12px; color: #333; line-height: 1.5; }
        </style>

        <table class="hyobin-wiki-table">
            <tr>
                <td class="title-bar">
                    <a href="학과.html">고등교육기관의 학과</a>
                </td>
            </tr>
            <tr>
                <td style="padding: 0;">
                    <details class="hyobin-wiki-details" open>
                        <summary class="hyobin-wiki-summary">[ 펼치기 · 접기 ]</summary>
                        <table class="inner-table">
                            <!-- 인문계열 -->
                            <tr>
                                <th colspan="2" class="bg-inmun">인문계열</th>
                            </tr>
                            <tr>
                                <th class="bg-inmun" style="width: 90px;"><a href="어문계열.html">어문</a></th>
                                <td><a href="국어국문학과.html">국어국문학과</a> · <a href="기타어문학과.html">기타어문학과</a> · <a href="노어노문학과.html">노어노문학과</a> · <a href="독어독문학과.html">독어독문학과</a> · <a href="불어불문학과.html">불어불문학과</a> · <a href="서어서문학과.html">서어서문학과</a> · <a href="영어영문학과.html">영어영문학과</a> · <a href="인도어과.html">인도어과</a> · <a href="일어일문학과.html">일어일문학과</a> · <a href="중어중문학과.html">중어중문학과</a>(<a href="대외한어과.html">대외한어과</a>) · <a href="한문학과.html">한문학과</a></td>
                            </tr>
                            <tr>
                                <th class="bg-inmun"><a href="인문대학.html">인문</a></th>
                                <td><a href="고고학과.html">고고학과</a> · <a href="문화재보존학과.html">문화재보존학과</a> · <a href="문화콘텐츠학과.html">문화콘텐츠학과</a> · <a href="미술사학과.html">미술사학과</a> · <a href="사학과.html">사학과</a> · <a href="신학과.html">신학과</a> · <a href="언어학과.html">언어학과</a> · <a href="종교학과.html">종교학과</a> · <a href="불교학과.html">불교학과</a> · <a href="철학과.html">철학과</a> (<a href="유학과.html">유학과</a> · <a href="PPE.html">PPE</a>) · <a href="한국학과.html">한국학과</a></td>
                            </tr>

                            <!-- 사회계열 -->
                            <tr>
                                <th colspan="2" class="bg-society">사회계열</th>
                            </tr>
                            <tr>
                                <th class="bg-society"><a href="법과대학.html">법학</a></th>
                                <td><a href="법학과.html">법학과</a></td>
                            </tr>
                            <tr>
                                <th class="bg-society"><a href="사회과학대학.html">사회과학</a></th>
                                <td><a href="공공정책학과.html">공공정책학과</a> · <a href="관광학과.html">관광학과</a> · <a href="국제개발협력학과.html">국제개발협력학과</a> · <a href="국제학부.html">국제학부</a> · <a href="군사학과.html">군사학과</a>* · <a href="경제학과.html">경제학과</a>(<a href="PPE.html">PPE</a>) · <a href="경찰행정학과.html">경찰행정학과</a> · <a href="문화인류학과.html">문화인류학과</a> · <a href="문헌정보학과.html">문헌정보학과</a>* · <a href="범죄학과.html">범죄학과</a> · <a href="북한학과.html">북한학과</a> · <a href="부동산학과.html">부동산학과</a> · <a href="부사관과.html">부사관과</a> · <a href="비서학과.html">비서학과</a> · <a href="사회복지학과.html">사회복지학과</a>* · <a href="사회학과.html">사회학과</a> · <a href="심리학과.html">심리학과</a> · <a href="아동가족학과.html">아동가족학과</a> · <a href="여성학과.html">여성학과</a> · <a href="장례지도과.html">장례지도과</a> · <a href="정치외교학과.html">정치외교학과</a>(<a href="PPE.html">PPE</a>) · <a href="지리학과.html">지리학과</a> · <a href="지적학과.html">지적학과</a> · <a href="지역개발학과.html">지역개발학과</a> · <a href="행정학과.html">행정학과</a> · <a href="미디어커뮤니케이션학과.html">미디어커뮤니케이션학과</a>(<a href="광고홍보학과.html">광고홍보학과</a>)</td>
                            </tr>
                            <tr>
                                <th class="bg-society"><a href="상과대학.html">상경</a></th>
                                <td><a href="경영학과.html">경영학과</a> · <a href="금융보험학과.html">금융보험학과</a> · <a href="무역학과.html">무역학과</a> · <a href="세무학과.html">세무학과</a> · <a href="유통물류학과.html">유통물류학과</a> · <a href="회계학과.html">회계학과</a></td>
                            </tr>

                            <!-- 자연계열 -->
                            <tr>
                                <th colspan="2" class="bg-nature">자연계열</th>
                            </tr>
                            <tr>
                                <th class="bg-nature"><a href="농과대학.html">농림</a><a href="수산대학.html">수산</a></th>
                                <td><a href="산림과학과.html">산림과학과</a> · <a href="수산생명의학과.html">수산생명의학과</a>* · <a href="수산자원학과.html">수산자원학과</a> · <a href="식물자원학과.html">식물자원학과</a> · <a href="식물의학과.html">식물의학과</a> · <a href="원예학과.html">원예학과</a></td>
                            </tr>
                            <tr>
                                <th class="bg-nature">생물화학</th>
                                <td><a href="말특수동물학과.html">말특수동물학과</a> · <a href="생명공학과.html">생명공학과</a> · <a href="생명과학과.html">생명과학과</a> · <a href="수의학과.html">수의학과</a>* · <a href="애완동물과.html">애완동물과</a> · <a href="제약공학과.html">제약공학과</a> · <a href="축산학과.html">축산학과</a> · <a href="화학과.html">화학과</a></td>
                            </tr>
                            <tr>
                                <th class="bg-nature"><a href="생활과학대학.html">생활과학</a></th>
                                <td><a href="소비자학과.html">소비자학과</a> · <a href="식품영양학과.html">식품영양학과</a>* · <a href="의류의상학과.html">의류의상학과</a> · <a href="조리과학과.html">조리과학과</a>(<a href="제과제빵과.html">제과제빵과</a>) · <a href="주거환경학과.html">주거환경학과</a></td>
                            </tr>
                            <tr>
                                <th class="bg-nature">수리물리</th>
                                <td><a href="물리학과.html">물리학과</a> · <a href="수학과.html">수학과</a> · <a href="지구환경과학과.html">지구환경과학과</a>(<a href="대기과학과.html">대기과학과</a>/<a href="지질학과.html">지질학과</a>/<a href="해양학과.html">해양학과</a>) · <a href="천문학과.html">천문학과</a> · <a href="통계학과.html">통계학과</a></td>
                            </tr>

                            <!-- 공학계열 -->
                            <tr>
                                <th colspan="2" class="bg-eng">공학계열</th>
                            </tr>
                            <tr>
                                <th class="bg-eng"><a href="기계공학.html">기계</a></th>
                                <td><a href="기계공학과.html">기계공학과</a> · <a href="기전공학과.html">기전공학과</a> · <a href="금형공학과.html">금형공학과</a> · <a href="드론학과.html">드론학과</a> · <a href="로봇공학과.html">로봇공학과</a> · <a href="설비공학과.html">설비공학과</a> · <a href="원자력공학과.html">원자력공학과</a> · <a href="자동차공학과.html">자동차공학과</a> · <a href="조선해양공학과.html">조선해양공학과</a> · <a href="항공우주공학과.html">항공우주공학과</a></td>
                            </tr>
                            <tr>
                                <th class="bg-eng"><a href="전기공학.html">전기</a><a href="전자공학.html">전자</a></th>
                                <td><a href="광공학과.html">광공학과</a> · <a href="반도체학과.html">반도체학과</a> · <a href="정보통신공학과.html">정보통신공학과</a> · <a href="전기전자공학과.html">전기전자공학과</a> · <a href="제어계측공학과.html">제어계측공학과</a> · <a href="정보보안학과.html">정보보안학과</a> · <a href="인공지능학과.html">인공지능학과</a> · <a href="컴퓨터공학과.html">컴퓨터공학과</a></td>
                            </tr>
                            <tr>
                                <th class="bg-eng"><a href="토목공학.html">토목</a></th>
                                <td><a href="건축공학과.html">건축공학과</a> · <a href="건축학과.html">건축학과</a>* · <a href="공간정보공학과.html">공간정보공학과</a> · <a href="교통공학과.html">교통공학과</a> · <a href="도시공학과.html">도시공학과</a> · <a href="안전공학과.html">안전공학과</a> · <a href="조경학과.html">조경학과</a> · <a href="철도공학과.html">철도공학과</a> · <a href="토목공학과.html">토목공학과</a> · <a href="환경공학과.html">환경공학과</a></td>
                            </tr>
                            <tr>
                                <th class="bg-eng"><a href="화학공학.html">화공</a></th>
                                <td><a href="고분자공학과.html">고분자공학과</a> · <a href="나노공학과.html">나노공학과</a> · <a href="재료공학과.html">재료공학과</a> · <a href="섬유공학과.html">섬유공학과</a> · <a href="식품공학과.html">식품공학과</a> · <a href="에너지공학과.html">에너지공학과</a> · <a href="화학공학과.html">화학공학과</a></td>
                            </tr>
                            <tr>
                                <th class="bg-eng">학제간연구</th>
                                <td><a href="국방기술학과.html">국방기술학과</a> · <a href="기관학과.html">기관학과</a> · <a href="산업공학과.html">산업공학과</a> · <a href="소방학과.html">소방학과</a> · <a href="예술공학과.html">예술공학과</a> · <a href="출판인쇄과.html">출판인쇄과</a> · <a href="철도운전관제과.html">철도운전관제과</a> · <a href="특수장비과.html">특수장비과</a> · <a href="항공운항과.html">항공운항과</a> · <a href="항공정비과.html">항공정비과</a> · <a href="항해학과.html">항해학과</a> · <a href="해양공학과.html">해양공학과</a> · <a href="융합인문공학과.html">융합인문공학과</a></td>
                            </tr>

                            <!-- 의약계열 -->
                            <tr>
                                <th colspan="2" class="bg-medi">의약계열</th>
                            </tr>
                            <tr>
                                <th class="bg-medi"><a href="의과대학.html">의학</a></th>
                                <td><a href="의학과.html">의학과</a>* · <a href="치의학과.html">치의학과</a>* · <a href="한의학과.html">한의학과</a>*</td>
                            </tr>
                            <tr>
                                <th class="bg-medi"><a href="간호대학.html">간호</a></th>
                                <td><a href="간호학과.html">간호학과</a>*</td>
                            </tr>
                            <tr>
                                <th class="bg-medi"><a href="약학대학.html">약학</a></th>
                                <td><a href="약학과.html">약학과</a>* · <a href="한약학과.html">한약학과</a>*</td>
                            </tr>
                            <tr>
                                <th class="bg-medi"><a href="보건과학대학.html">보건</a></th>
                                <td><a href="보건행정학과.html">보건행정학과</a>* · <a href="건강관리학과.html">건강관리학과</a> · <a href="안경광학과.html">안경광학과</a>* · <a href="방사선학과.html">방사선학과</a>* · <a href="응급구조학과.html">응급구조학과</a>* · <a href="임상병리학과.html">임상병리학과</a>* · <a href="치위생학과.html">치위생학과</a>* · <a href="치기공학과.html">치기공학과</a>* · <a href="의공학과.html">의공학과</a> · <a href="물리치료학과.html">물리치료학과</a>* · <a href="작업치료학과.html">작업치료학과</a>* · <a href="재활학과.html">재활학과</a> · <a href="언어치료학과.html">언어치료학과</a>* · <a href="디지털헬스케어학과.html">디지털헬스케어학과</a> · <a href="요양보호학과.html">요양보호학과</a></td>
                            </tr>

                            <!-- 예체능계열 -->
                            <tr>
                                <th colspan="2" class="bg-art">예체능계열</th>
                            </tr>
                            <tr>
                                <th class="bg-art"><a href="미술대학.html">디자인</a></th>
                                <td><a href="산업디자인학과.html">산업디자인학과</a> · <a href="시각디자인학과.html">시각디자인학과</a> · <a href="실내디자인학과.html">실내디자인학과</a> · <a href="패션디자인학과.html">패션디자인학과</a></td>
                            </tr>
                            <tr>
                                <th class="bg-art"><a href="체육대학.html">무용체육</a></th>
                                <td><a href="경호학과.html">경호학과</a> · <a href="무용학과.html">무용학과</a> · <a href="태권도학과.html">태권도학과</a> · <a href="스포츠의학과.html">스포츠의학과</a> · <a href="체육학과.html">체육학과</a></td>
                            </tr>
                            <tr>
                                <th class="bg-art"><a href="미술대학.html">미술조형</a></th>
                                <td><a href="동양화과.html">동양화과</a> · <a href="보석감정과.html">보석감정과</a> · <a href="서양화과.html">서양화과</a> · <a href="조소과.html">조소과</a> · <a href="종교미술학과.html">종교미술학과</a> · <a href="판화과.html">판화과</a></td>
                            </tr>
                            <tr>
                                <th class="bg-art"><a href="예술대학.html">연극영화</a></th>
                                <td><a href="공연제작과.html">공연제작과</a> · <a href="극작과.html">극작과</a> · <a href="영화영상학과.html">영화영상학과</a>(<a href="유튜버학과.html">유튜버학과</a>) · <a href="연극학과.html">연극학과</a></td>
                            </tr>
                            <tr>
                                <th class="bg-art"><a href="음악대학.html">음악</a></th>
                                <td><a href="국악과.html">국악과</a> · <a href="교회음악과.html">교회음악과</a> · <a href="기악과.html">기악과</a> · <a href="성악과.html">성악과</a> · <a href="실용음악과.html">실용음악과</a> · <a href="영상음악과.html">영상음악과</a> · <a href="음악학과.html">음악학과</a> · <a href="음향과.html">음향과</a> · <a href="작곡과.html">작곡과</a> · <a href="K-POP과.html">K-POP과</a></td>
                            </tr>
                            <tr>
                                <th class="bg-art"><a href="예술대학.html">응용예술</a></th>
                                <td><a href="게임학과.html">게임학과</a> · <a href="귀금속공예과.html">귀금속공예과</a> · <a href="도예과.html">도예과</a> · <a href="디지털아트학과.html">디지털아트학과</a> · <a href="만화애니메이션학과.html">만화애니메이션학과</a> · <a href="모델과.html">모델과</a> · <a href="목형과.html">목형과</a> · <a href="미용학과.html">미용학과</a> · <a href="사진학과.html">사진학과</a> · <a href="문예창작과.html">문예창작과</a> · <a href="웹소설과.html">웹소설과</a></td>
                            </tr>

                            <!-- 교육계열 -->
                            <tr>
                                <th colspan="2" class="bg-edu">교육계열</th>
                            </tr>
                            <tr>
                                <th class="bg-edu"><a href="교육일반.html">교육일반</a></th>
                                <td><a href="교육학과.html">교육학과</a>* · <a href="교육공학과.html">교육공학과</a>* · <a href="유아교육과.html">유아교육과</a>* · <a href="초등교육과.html">초등교육과</a>* · <a href="특수교육과.html">특수교육과</a>*</td>
                            </tr>
                            <tr>
                                <th class="bg-edu"><a href="언어문학.html">언어문학</a></th>
                                <td><a href="국어교육과.html">국어교육과</a>* · <a href="영어교육과.html">영어교육과</a>* · <a href="외국어교육과.html">외국어교육과</a>* (<a href="독어교육과.html">독어교육과</a>/<a href="불어교육과.html">불어교육과</a>/<a href="일어교육과.html">일어교육과</a>/<a href="중국어교육과.html">중국어교육과</a>) · <a href="한문교육과.html">한문교육과</a>*</td>
                            </tr>
                            <tr>
                                <th class="bg-edu"><a href="예술체육.html">예술체육</a></th>
                                <td><a href="미술교육과.html">미술교육과</a>* · <a href="음악교육과.html">음악교육과</a>* · <a href="체육교육과.html">체육교육과</a>*</td>
                            </tr>
                            <tr>
                                <th class="bg-edu"><a href="인문사회.html">인문사회</a></th>
                                <td><a href="역사교육과.html">역사교육과</a>* · <a href="지리교육과.html">지리교육과</a>* · <a href="일반사회교육과.html">일반사회교육과</a>* · <a href="윤리교육과.html">윤리교육과</a>* · <a href="종교교육과.html">종교교육과</a>* · <a href="문헌정보교육과.html">문헌정보교육과</a>* · <a href="경영금융교육과.html">경영금융교육과</a>*</td>
                            </tr>
                            <tr>
                                <th class="bg-edu"><a href="자연공학.html">자연공학</a></th>
                                <td><a href="과학교육과.html">과학교육과</a>* (<a href="물리교육과.html">물리교육과</a>/<a href="화학교육과.html">화학교육과</a>/<a href="생물교육과.html">생물교육과</a>/<a href="지구과학교육과.html">지구과학교육과</a>) · <a href="수학교육과.html">수학교육과</a>* · <a href="기술가정교육과.html">기술가정교육과</a>* (<a href="기술교육과.html">기술교육과</a>/<a href="가정교육과.html">가정교육과</a>) · <a href="수해양산업교육과.html">수해양산업교육과</a>* · <a href="농업교육과.html">농업교육과</a>* · <a href="환경교육과.html">환경교육과</a>* · <a href="컴퓨터교육과.html">컴퓨터교육과</a>* · <a href="공업교육과.html">공업교육과</a>* (<a href="건설공학교육과.html">건설공학교육과</a>/<a href="기계교육과.html">기계교육과</a>/<a href="전기전자교육과.html">전기전자교육과</a>/<a href="화학공학교육과.html">화학공학교육과</a>)</td>
                            </tr>
                            <tr>
                                <th class="bg-edu"><a href="비사범계열.html">비사범계열</a></th>
                                <td><a href="평생교육학과.html">평생교육학과</a>* · <a href="한국어교육학과.html">한국어교육학과</a>* · <a href="TESOL학과.html">TESOL학과</a>*</td>
                            </tr>

                            <!-- 기타계열 -->
                            <tr>
                                <th colspan="2" class="bg-etc">기타계열</th>
                            </tr>
                            <tr>
                                <th class="bg-etc">자율</th>
                                <td><a href="자유전공학부.html">자유전공학부</a> · <a href="교양학부.html">교양학부</a></td>
                            </tr>
                            <tr>
                                <th class="bg-etc">특성화</th>
                                <td><a href="계약학과.html">계약학과</a> · <a href="특성화학과.html">특성화 학과</a> · <a href="첨단학과.html">첨단학과</a></td>
                            </tr>
                            <tr>
                                <th class="bg-etc">기타</th>
                                <td><a href="간판학과.html">간판학과</a> · <a href="면허부여학과.html">면허 부여 학과</a>* · <a href="유일한학과.html">유일한 학과</a> · <a href="실존하지않는학과.html">실존하지 않는 학과</a></td>
                            </tr>
                            <tr>
                                <td colspan="2" class="footnote">
                                    * 표시가 있는 학과는 특정 직업에 대한 자격을 부여함(해당 학과를 졸업할 경우 임용되는 형태이거나(군사과 등), 전문자격이 부여되거나(교육과 등), 전문자격 시험을 응시할 수 있는 (의학과 등) 경우로 한정) + 예외적으로 자격을 부여하지 않는 학과중에서도 MOU를 맺는 경우가 있다.
                                </td>
                            </tr>
                        </table>
                    </details>
                </td>
            </tr>
        </table>
        `;
    }
});