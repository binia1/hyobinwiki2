document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("korail-depots-nav-container");
    
    if (container) {
        container.innerHTML = `
        <!-- 둘러보기 틀 (한국철도공사의 차량정비단 · 차량사업소) -->
        <details open style="width: 100%; max-width: 900px; margin: 0 auto; font-family: 'Malgun Gothic', 'Apple SD Gothic Neo', sans-serif; font-size: 12.5px; color: #333; border: 1px solid #ccc; border-collapse: collapse; line-height: 1.5; background-color: #fff; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">

            <summary style="list-style: none; display: block; cursor: pointer; outline: none;">
                <div style="text-align: center; padding: 12px 10px 8px 10px; background-color: #fff; border-bottom: 1px solid #e5e5e5;">
                    <div style="font-size: 28px; font-weight: 900; color: #0054a6; letter-spacing: -1.5px; margin-bottom: 2px; font-style: italic; font-family: Arial, sans-serif;">
                        <a href="한국철도공사.html" style="text-decoration: none; color: inherit;">K<span style="color:#00a2d1;">O</span>RAIL</a>
                    </div>
                    <div style="font-size: 13.5px; font-weight: bold; color: #0054a6;">
                        <span style="color: #003da5;">한국철도공사의</span> <a href="차량정비단·차량사업소.html" style="text-decoration: none; color: #0275d8;">차량정비단·차량사업소</a>
                    </div>
                </div>

                <div style="background-color: #fff; padding: 7px; text-align: center; border-bottom: 1px solid #ccc; font-size: 12.5px; color: #333; font-weight: bold;">
                    [ 펼치기 · 접기 ]
                </div>
            </summary>

            <!-- 1. 고속철도 KTX -->
            <div style="background-color: #00338d; color: #fff; font-weight: bold; font-size: 13px; text-align: center; padding: 6px; border-bottom: 1px solid #fff;">
                <a href="고속철도.html" style="text-decoration: none; color: inherit;">고속철도</a> <a href="KTX.html" style="text-decoration: none; color: inherit; font-style: italic; font-size: 15px; font-family: Arial, sans-serif; margin-left: 4px;">KTX<span style="color: #e61e2b;">+</span></a>
            </div>
            
            <table style="width: 100%; border-collapse: collapse; text-align: center; table-layout: fixed;">
                <tr>
                    <td style="width: 50%; background-color: #00338d; color: white; font-weight: bold; padding: 5px; font-size: 12.5px; border-right: 1px solid #fff; border-bottom: 1px solid #ccc;">
                        중정비<sup style="font-size: 9px; font-weight: normal;">[중]</sup>
                    </td>
                    <td style="width: 50%; background-color: #00338d; color: white; font-weight: bold; padding: 5px; font-size: 12.5px; border-bottom: 1px solid #ccc;">
                        경정비 및 주박
                    </td>
                </tr>
                <tr>
                    <td style="padding: 10px 5px; border-right: 1px solid #ccc; border-bottom: 1px solid #ccc; color: #0275d8; word-break: keep-all; line-height: 1.7;">
                        <a href="수도권철도차량정비단.html" style="text-decoration: none; color: inherit;">수도단</a> | 
                        <a href="울산차량사업소.html" style="text-decoration: none; color: inherit;">울산</a> | 
                        <a href="호남철도차량정비단.html" style="text-decoration: none; color: inherit;">호남단</a><br>
                        <a href="덕빈철도차량정비단.html" style="text-decoration: none; color: inherit;">덕빈단</a> | 
                        <a href="효빈일반철도차량정비단.html" style="text-decoration: none; color: inherit;">효빈일반단</a>
                    </td>
                    <td style="padding: 10px 5px; border-bottom: 1px solid #ccc; color: #0275d8; word-break: keep-all; line-height: 1.7;">
                        <a href="강릉차량사업소.html" style="text-decoration: none; color: inherit;">강릉</a> | 
                        <a href="광명주박기지.html" style="text-decoration: none; color: inherit;">광명</a><sup style="font-size:9.5px; color:#555;">[주박]</sup> | 
                        <a href="부발차량사업소.html" style="text-decoration: none; color: inherit;">부발</a> | 
                        <a href="부산철도차량정비단.html" style="text-decoration: none; color: inherit;">부산단 고속차량운영처</a> | 
                        <a href="수서차량사업소.html" style="text-decoration: none; color: inherit;"><span style="text-decoration: underline;">수서</span></a><br>
                        <a href="청량리차량사업소.html" style="text-decoration: none; color: inherit;">청량리</a><sup style="font-size:9.5px; color:#555;">[주박]</sup> | 
                        <a href="이문차량사업소.html" style="text-decoration: none; color: inherit;">이문</a> | 
                        <a href="병점차량사업소.html" style="text-decoration: none; color: inherit;">병점</a><sup style="font-size:9.5px; color:#555;">[주박]</sup> | 
                        <a href="송산차량사업소.html" style="text-decoration: none; color: inherit;">송산</a> | 
                        <a href="순천차량사업소.html" style="text-decoration: none; color: inherit;">순천</a> | 
                        <a href="평택지제역.html" style="text-decoration: none; color: inherit;"><span style="text-decoration: underline;"><del style="color:#0275d8;">지제</del></span></a> | 
                        <a href="목포차량사업소.html" style="text-decoration: none; color: inherit;">목포</a><br>
                        <a href="빈주역.html" style="text-decoration: none; color: inherit;">빈주</a><sup style="font-size:9.5px; color:#555;">[주박]</sup> | 
                        <a href="계성차량사업소.html" style="text-decoration: none; color: inherit;">계성</a><sup style="font-size:9.5px; color:#555;">[주박]</sup> | 
                        <a href="매성역.html" style="text-decoration: none; color: inherit;">매성</a><sup style="font-size:9.5px; color:#555;">[주박]</sup>
                    </td>
                </tr>
            </table>

            <!-- 2. 일반열차 · 관광열차 -->
            <div style="background-color: #0054a6; color: #fff; font-weight: bold; font-size: 13px; text-align: center; padding: 6px; border-bottom: 1px solid #fff;">
                <a href="일반열차.html" style="text-decoration: none; color: inherit;">일반열차 · 관광열차</a>
            </div>

            <table style="width: 100%; border-collapse: collapse; text-align: center; table-layout: fixed;">
                <tr>
                    <td style="width: 25%; background-color: #21869e; color: white; font-weight: bold; font-style: italic; padding: 6px; border-right: 1px solid #fff; border-bottom: 1px solid #ccc;"><a href="누리로.html" style="text-decoration: none; color: inherit;">누리로</a></td>
                    <td style="width: 25%; background-color: #169c78; color: white; font-weight: bold; padding: 6px; border-right: 1px solid #fff; border-bottom: 1px solid #ccc;"><a href="동해산타열차.html" style="text-decoration: none; color: inherit;">동해산타열차</a></td>
                    <td colspan="2" style="width: 50%; background-color: #c30e2e; color: white; font-weight: bold; font-style: italic; padding: 6px; border-bottom: 1px solid #ccc;"><a href="ITX-새마을.html" style="text-decoration: none; color: inherit;">ITX-새마을</a></td>
                </tr>
                <tr>
                    <td colspan="2" style="padding: 10px 5px; border-right: 1px solid #ccc; border-bottom: 1px solid #ccc; color: #0275d8; line-height: 1.6;">
                        <a href="강릉차량사업소.html" style="text-decoration: none; color: inherit;">강릉</a> | 
                        <a href="대구차량사업소.html" style="text-decoration: none; color: inherit;">대구</a><sup style="font-size:9.5px; color:#555;">[주박]</sup> | 
                        <a href="이문차량사업소.html" style="text-decoration: none; color: inherit;">이문</a><sup style="font-size:9.5px; color:#555;">[중]</sup>
                    </td>
                    <td colspan="2" style="padding: 10px 5px; border-bottom: 1px solid #ccc; color: #0275d8; line-height: 1.6;">
                        <a href="대구차량사업소.html" style="text-decoration: none; color: inherit;">대구</a><sup style="font-size:9.5px; color:#555;">[주박]</sup> | 
                        <a href="대전차량사업소.html" style="text-decoration: none; color: inherit;">대전</a><sup style="font-size:9.5px; color:#555;">[주박]</sup> | 
                        <a href="서울차량사업소.html" style="text-decoration: none; color: inherit;">서울</a> | 
                        <a href="부산차량사업소.html" style="text-decoration: none; color: inherit;">부산</a> | 
                        <a href="여수차량사업소.html" style="text-decoration: none; color: inherit;">여수</a><sup style="font-size:9.5px; color:#555;">[주박]</sup> | 
                        <a href="이문차량사업소.html" style="text-decoration: none; color: inherit;">이문</a><sup style="font-size:9.5px; color:#555;">[중]</sup><br>
                        <a href="효빈일반철도차량정비단.html" style="text-decoration: none; color: inherit;">효빈일반단</a> | 
                        <a href="빈주차량사업소.html" style="text-decoration: none; color: inherit;">빈주</a> | 
                        <a href="계성차량사업소.html" style="text-decoration: none; color: inherit;">계성</a> | 
                        <a href="매성차량사업소.html" style="text-decoration: none; color: inherit;">매성</a>
                    </td>
                </tr>
                <tr>
                    <td colspan="2" style="width: 50%; background-color: #c30e2e; color: white; font-weight: bold; font-style: italic; padding: 6px; border-right: 1px solid #fff; border-bottom: 1px solid #ccc;"><a href="ITX-마음.html" style="text-decoration: none; color: inherit;">ITX-마음</a></td>
                    <td colspan="2" style="width: 50%; background-color: #219e5c; color: white; font-weight: bold; font-style: italic; padding: 6px; border-bottom: 1px solid #ccc;"><a href="ITX-청춘.html" style="text-decoration: none; color: inherit;">ITX-청춘</a></td>
                </tr>
                <tr>
                    <td colspan="2" style="padding: 10px 5px; border-right: 1px solid #ccc; border-bottom: 1px solid #ccc; color: #0275d8; line-height: 1.6;">
                        <a href="강릉차량사업소.html" style="text-decoration: none; color: inherit;">강릉</a><sup style="font-size:9.5px; color:#555;">[주박]</sup> | 
                        <a href="서울차량사업소.html" style="text-decoration: none; color: inherit;">서울</a> | 
                        <a href="대구차량사업소.html" style="text-decoration: none; color: inherit;">대구</a><sup style="font-size:9.5px; color:#555;">[주박]</sup> | 
                        <a href="대전차량사업소.html" style="text-decoration: none; color: inherit;">대전</a><sup style="font-size:9.5px; color:#555;">[주박]</sup> | 
                        <a href="부산차량사업소.html" style="text-decoration: none; color: inherit;">부산</a> | 
                        <a href="이문차량사업소.html" style="text-decoration: none; color: inherit;">이문</a><sup style="font-size:9.5px; color:#555;">[중]</sup><br>
                        <a href="제천차량사업소.html" style="text-decoration: none; color: inherit;">제천</a><sup style="font-size:9.5px; color:#555;">[주박]</sup> | 
                        <a href="청량리차량사업소.html" style="text-decoration: none; color: inherit;">청량리</a><sup style="font-size:9.5px; color:#555;">[주박]</sup> | 
                        <a href="대전철도차량정비단.html" style="text-decoration: none; color: inherit;">대전단 본단</a><sup style="font-size:9.5px; color:#555;">[중]</sup> | 
                        <a href="익산차량사업소.html" style="text-decoration: none; color: inherit;">익산</a> | 
                        <a href="여수차량사업소.html" style="text-decoration: none; color: inherit;">여수</a> | 
                        <a href="영주차량사업소.html" style="text-decoration: none; color: inherit;">영주</a> | 
                        <a href="순천차량사업소.html" style="text-decoration: none; color: inherit;">순천</a><br>
                        <a href="효빈일반철도차량정비단.html" style="text-decoration: none; color: inherit;">효빈일반단</a> | 
                        <a href="빈주차량사업소.html" style="text-decoration: none; color: inherit;">빈주</a> | 
                        <a href="매성차량사업소.html" style="text-decoration: none; color: inherit;">매성</a> | 
                        <a href="풍영차량사업소.html" style="text-decoration: none; color: inherit;">풍영</a>
                    </td>
                    <td colspan="2" style="padding: 10px 5px; border-bottom: 1px solid #ccc; color: #0275d8; line-height: 1.6;">
                        <a href="평내차량사업소.html" style="text-decoration: none; color: inherit;">평내</a><sup style="font-size:9.5px; color:#555;">[중]</sup>
                    </td>
                </tr>
            </table>

            <!-- 3. 광역전철 -->
            <div style="background-color: #0054a6; color: #fff; font-weight: bold; font-size: 13px; text-align: center; padding: 6px; border-bottom: 1px solid #fff;">
                <a href="광역전철.html" style="text-decoration: none; color: inherit;">광역전철</a>
            </div>

            <table style="width: 100%; border-collapse: collapse; text-align: center; table-layout: fixed; font-size: 12px;">
                <tr>
                    <td style="width: 25%; background-color: #0052a4; color: white; font-weight: bold; padding: 5px; border-right: 1px solid #fff; border-bottom: 1px solid #ccc;"><a href="수도권 전철 1호선.html" style="text-decoration: none; color: inherit;"><span style="font-size: 10.5px; font-weight: normal;">수도권 전철</span><br>1호선</a></td>
                    <td style="width: 25%; background-color: #77c4a3; color: white; font-weight: bold; padding: 5px; border-right: 1px solid #fff; border-bottom: 1px solid #ccc;"><a href="수도권 전철 경의·중앙선.html" style="text-decoration: none; color: inherit;"><span style="font-size: 10.5px; font-weight: normal;">수도권 전철</span><br>경의·중앙선</a></td>
                    <td style="width: 25%; background-color: #ef7c1c; color: white; font-weight: bold; padding: 5px; border-right: 1px solid #fff; border-bottom: 1px solid #ccc;"><a href="수도권 전철 3호선.html" style="text-decoration: none; color: inherit;"><span style="font-size: 10.5px; font-weight: normal;">수도권 전철</span><br>3호선</a></td>
                    <td style="width: 25%; background-color: #00a4e3; color: white; font-weight: bold; padding: 5px; border-bottom: 1px solid #ccc;"><a href="수도권 전철 4호선.html" style="text-decoration: none; color: inherit;"><span style="font-size: 10.5px; font-weight: normal;">수도권 전철</span><br>4호선</a></td>
                </tr>
                <tr>
                    <td style="padding: 8px 3px; border-right: 1px solid #ccc; border-bottom: 1px solid #ccc; color: #0275d8; line-height: 1.6; vertical-align: middle;">
                        <a href="구로차량사업소.html" style="text-decoration: none; color: inherit;">구로</a><sup style="font-size:9px; color:#555;">[폐]</sup> | 
                        <a href="병점차량사업소.html" style="text-decoration: none; color: inherit;">병점</a><sup style="font-size:9px; color:#555;">[폐]</sup><br>
                        <a href="이문차량사업소.html" style="text-decoration: none; color: inherit;">이문</a> | 
                        <a href="시흥철도차량정비단.html" style="text-decoration: none; color: inherit; font-weight: bold;">시흥단</a><sup style="font-size:9px; color:#555;">[중][타][폐]</sup><br>
                        <a href="성북차량사업소.html" style="text-decoration: none; color: inherit;">성북분소</a><sup style="font-size:9px; color:#555;">[주박]</sup>
                    </td>
                    <td style="padding: 8px 3px; border-right: 1px solid #ccc; border-bottom: 1px solid #ccc; color: #0275d8; line-height: 1.6; vertical-align: middle;">
                        <a href="용문차량사업소.html" style="text-decoration: none; color: inherit;">용문</a> | 
                        <a href="문산차량사업소.html" style="text-decoration: none; color: inherit;">문산</a><sup style="font-size:9px; color:#555;">[중][폐]</sup><br>
                        <a href="시흥철도차량정비단.html" style="text-decoration: none; color: inherit; font-weight: bold;">시흥단</a><sup style="font-size:9px; color:#555;">[중][타][폐]</sup>
                    </td>
                    <td style="padding: 8px 3px; border-right: 1px solid #ccc; border-bottom: 1px solid #ccc; color: #0275d8; line-height: 1.6; vertical-align: middle;">
                        <a href="구로차량사업소.html" style="text-decoration: none; color: inherit;">구로</a><sup style="font-size:9px; color:#555;">[배속][타]</sup><br>
                        <a href="지축차량사업소.html" style="text-decoration: none; color: inherit;"><span style="text-decoration: underline;">지축</span></a><sup style="font-size:9px; color:#555;">[실무][중][폐]</sup>
                    </td>
                    <td style="padding: 8px 3px; border-bottom: 1px solid #ccc; color: #0275d8; line-height: 1.6; vertical-align: middle;">
                        <a href="시흥철도차량정비단.html" style="text-decoration: none; color: inherit; font-weight: bold;">시흥단</a><sup style="font-size:9px; color:#555;">[중][폐]</sup><br>
                        <a href="안산차량사업소.html" style="text-decoration: none; color: inherit;">안산분소</a><sup style="font-size:9px; color:#555;">[주박]</sup> | 
                        <a href="창동차량사업소.html" style="text-decoration: none; color: inherit;"><span style="text-decoration: underline;">창동</span></a><sup style="font-size:9px; color:#555;">[주박]</sup><span style="color:#000; font-size:10px;">◆</span>
                    </td>
                </tr>

                <tr>
                    <td style="background-color: #fabe00; color: white; font-weight: bold; padding: 5px; border-right: 1px solid #fff; border-bottom: 1px solid #ccc;"><a href="수도권 전철 수인·분당선.html" style="text-decoration: none; color: inherit;"><span style="font-size: 10.5px; font-weight: normal;">수도권 전철</span><br>수인·분당선</a></td>
                    <td style="background-color: #178c72; color: white; font-weight: bold; padding: 5px; border-right: 1px solid #fff; border-bottom: 1px solid #ccc;"><a href="수도권 전철 경춘선.html" style="text-decoration: none; color: inherit;"><span style="font-size: 10.5px; font-weight: normal;">수도권 전철</span><br>경춘선</a></td>
                    <td style="background-color: #0054a6; color: white; font-weight: bold; padding: 5px; border-right: 1px solid #fff; border-bottom: 1px solid #ccc;"><a href="수도권 전철 경강선.html" style="text-decoration: none; color: inherit;"><span style="font-size: 10.5px; font-weight: normal;">수도권 전철</span><br>경강선</a></td>
                    <td style="background-color: #0054a6; color: white; font-weight: bold; padding: 5px; border-bottom: 1px solid #ccc;"><a href="동해선 광역전철.html" style="text-decoration: none; color: inherit;"><span style="font-size: 10.5px; font-weight: normal;">동남권 전철</span><br>동해선</a></td>
                </tr>
                <tr>
                    <td style="padding: 8px 3px; border-right: 1px solid #ccc; border-bottom: 1px solid #ccc; color: #0275d8; line-height: 1.6;">
                        <a href="분당차량사업소.html" style="text-decoration: none; color: inherit;">분당</a> | 
                        <a href="시흥철도차량정비단.html" style="text-decoration: none; color: inherit; font-weight: bold;">시흥단</a><sup style="font-size:9px; color:#555;">[중][폐]</sup>
                    </td>
                    <td style="padding: 8px 3px; border-right: 1px solid #ccc; border-bottom: 1px solid #ccc; color: #0275d8; line-height: 1.6;">
                        <a href="평내차량사업소.html" style="text-decoration: none; color: inherit;">평내</a><sup style="font-size:9px; color:#555;">[중][폐]</sup>
                    </td>
                    <td style="padding: 8px 3px; border-right: 1px solid #ccc; border-bottom: 1px solid #ccc; color: #0275d8; line-height: 1.6;">
                        <a href="부발차량사업소.html" style="text-decoration: none; color: inherit;">부발</a> | 
                        <a href="문산차량사업소.html" style="text-decoration: none; color: inherit;">문산</a><sup style="font-size:9px; color:#555;">[중][타][폐]</sup>
                    </td>
                    <td style="padding: 8px 3px; border-bottom: 1px solid #ccc; color: #0275d8; line-height: 1.6;">
                        <a href="울산차량사업소.html" style="text-decoration: none; color: inherit;">울산</a><sup style="font-size:9px; color:#555;">[중]</sup>
                    </td>
                </tr>

                <tr>
                    <td style="background-color: #8fc31f; color: white; font-weight: bold; padding: 5px; border-right: 1px solid #fff; border-bottom: 1px solid #ccc;"><a href="수도권 전철 서해선.html" style="text-decoration: none; color: inherit;"><span style="font-size: 10.5px; font-weight: normal;">수도권 전철</span><br>서해선</a></td>
                    <td style="background-color: #0054a6; color: white; font-weight: bold; padding: 5px; border-right: 1px solid #fff; border-bottom: 1px solid #ccc;"><a href="대구권 광역철도.html" style="text-decoration: none; color: inherit;"><span style="font-size: 10.5px; font-weight: normal;">대구권 전철</span><br>대경선</a></td>
                    <td colspan="2" style="background-color: #a9cf38; color: white; font-weight: bold; padding: 5px; border-bottom: 1px solid #ccc;"><a href="충청권 광역철도.html" style="text-decoration: none; color: inherit;"><del style="color: #fff;">충청권 광역철도</del></a></td>
                </tr>
                <tr>
                    <td style="padding: 8px 3px; border-right: 1px solid #ccc; border-bottom: 1px solid #ccc; color: #0275d8; line-height: 1.6;">
                        <a href="시흥철도차량정비단.html" style="text-decoration: none; color: inherit; font-weight: bold;">시흥단</a><sup style="font-size:9px; color:#555;">[중][타][폐]</sup> | 
                        <a href="송산차량사업소.html" style="text-decoration: none; color: inherit;"><span style="text-decoration: underline;"><del style="color:#0275d8;">송산</del></span></a>
                    </td>
                    <td style="padding: 8px 3px; border-right: 1px solid #ccc; border-bottom: 1px solid #ccc; color: #0275d8; line-height: 1.6;">
                        <a href="대구차량사업소.html" style="text-decoration: none; color: inherit;">대구</a> | 
                        <a href="울산차량사업소.html" style="text-decoration: none; color: inherit;">울산</a><sup style="font-size:9px; color:#555;">[중][타]</sup>
                    </td>
                    <td colspan="2" style="padding: 8px 3px; border-bottom: 1px solid #ccc; color: #0275d8; line-height: 1.6;">
                        <a href="대전차량사업소.html" style="text-decoration: none; color: inherit;">대전</a> | 
                        <a href="대전철도차량정비단.html" style="text-decoration: none; color: inherit;"><del style="color:#0275d8;">대전단 본단</del></a><sup style="font-size:9px; color:#555;">[중]</sup>
                    </td>
                </tr>

                <!-- 효빈권 · 빈주권 광역전철 (고유 색상 완벽 적용) -->
                <tr>
                    <td colspan="2" style="background-color: #6677CC; color: white; font-weight: bold; padding: 5px; border-right: 1px solid #fff; border-bottom: 1px solid #ccc;">
                        <a href="빈효선 광역전철.html" style="text-decoration: none; color: inherit;"><span style="font-size: 10.5px; font-weight: normal;">효빈권 전철</span><br>빈효선</a>
                    </td>
                    <td colspan="2" style="background-color: #005BAC; color: white; font-weight: bold; padding: 5px; border-bottom: 1px solid #ccc;">
                        <a href="빈주권 광역철도.html" style="text-decoration: none; color: inherit;"><span style="font-size: 10.5px; font-weight: normal;">빈주권 전철</span><br>빈주권 광역철도(빈주선)</a>
                    </td>
                </tr>
                <tr>
                    <td colspan="2" style="padding: 8px 3px; border-right: 1px solid #ccc; border-bottom: 1px solid #ccc; color: #0275d8; line-height: 1.6;">
                        <a href="고남차량사업소.html" style="text-decoration: none; color: inherit;">고남</a> | 
                        <a href="효빈항차량주박기지.html" style="text-decoration: none; color: inherit;">효빈항</a><sup style="font-size:9px; color:#555;">[주박]</sup> | 
                        <a href="치원차량사업소.html" style="text-decoration: none; color: inherit;"><del style="color:#0275d8;">치원</del></a>
                    </td>
                    <td colspan="2" style="padding: 8px 3px; border-bottom: 1px solid #ccc; color: #0275d8; line-height: 1.6;">
                        <a href="계성차량사업소.html" style="text-decoration: none; color: inherit;">계성</a> | 
                        <a href="풍영차량사업소.html" style="text-decoration: none; color: inherit;">풍영</a>
                    </td>
                </tr>
            </table>

            <!-- 4. 수도권 광역급행철도 -->
            <div style="background-color: #9b5582; color: #fff; font-weight: bold; font-size: 13px; text-align: center; padding: 6px; border-bottom: 1px solid #fff;">
                <a href="수도권 광역급행철도.html" style="text-decoration: none; color: inherit;">수도권 광역급행철도</a>
            </div>
            
            <table style="width: 100%; border-collapse: collapse; text-align: center; table-layout: fixed; font-size: 12px;">
                <tr>
                    <td style="width: 50%; background-color: #12b59b; color: white; font-weight: bold; padding: 5px; border-right: 1px solid #fff; border-bottom: 1px solid #ccc;"><a href="수도권 광역급행철도 B노선.html" style="text-decoration: none; color: inherit;"><del style="color: #fff;">GTX-B</del></a></td>
                    <td style="width: 50%; background-color: #e04338; color: white; font-weight: bold; padding: 5px; border-bottom: 1px solid #ccc;"><a href="수도권 광역급행철도 C노선.html" style="text-decoration: none; color: inherit;"><del style="color: #fff;">GTX-C</del></a></td>
                </tr>
                <tr>
                    <td style="padding: 8px 5px; border-right: 1px solid #ccc; border-bottom: 1px solid #ccc; color: #0275d8;">
                        <a href="마석차량사업소.html" style="text-decoration: none; color: inherit;"><span style="text-decoration: underline;"><del style="color:#0275d8;">마석</del></span></a>
                    </td>
                    <td style="padding: 8px 5px; border-bottom: 1px solid #ccc; color: #0275d8;">
                        <a href="덕정차량사업소.html" style="text-decoration: none; color: inherit;"><span style="text-decoration: underline;"><del style="color:#0275d8;">덕정</del></span></a> | 
                        <a href="병점차량사업소.html" style="text-decoration: none; color: inherit;"><del style="color:#0275d8;">병점</del></a><sup style="font-size:9px; color:#555;">[주박]</sup>
                    </td>
                </tr>
            </table>

            <!-- 5. 기관차 · 객차 · 발전차 · 화차 -->
            <div style="background-color: #0054a6; color: #fff; font-weight: bold; font-size: 13px; text-align: center; padding: 6px; border-bottom: 1px solid #ccc;">
                <a href="철도차량.html" style="text-decoration: none; color: inherit;">기관차 · 객차 · 발전차 · 화차</a>
            </div>
            
            <div style="padding: 12px 10px; text-align: center; font-size: 12.5px; color: #0275d8; border-bottom: 1px solid #ccc; line-height: 1.8; word-break: keep-all;">
                <a href="가야차량사업소.html" style="text-decoration: none; color: inherit;">가야</a> | 
                <a href="광주차량사업소.html" style="text-decoration: none; color: inherit;">광주</a> | 
                <a href="동해차량사업소.html" style="text-decoration: none; color: inherit;">동해</a> | 
                <a href="대전차량사업소.html" style="text-decoration: none; color: inherit;">대전</a> | 
                <a href="대전철도차량정비단.html" style="text-decoration: none; color: inherit;">대전단 본단</a><sup style="font-size:9.5px; color:#555;">[중][폐]</sup> | 
                <a href="대전철도차량정비단.html" style="text-decoration: none; color: inherit;">대전단 전기차량정비부</a><sup style="font-size:9.5px; color:#555;">[중]</sup> | 
                <a href="마산차량사업소.html" style="text-decoration: none; color: inherit;">마산</a> | 
                <a href="목포차량사업소.html" style="text-decoration: none; color: inherit;">목포</a> | 
                <a href="부곡차량사업소.html" style="text-decoration: none; color: inherit;">부곡</a> | 
                <a href="부산철도차량정비단.html" style="text-decoration: none; color: inherit;">부산단 일반차량중정비</a><sup style="font-size:9.5px; color:#555;">[중]</sup><br>
                <a href="부산신항차량사업소.html" style="text-decoration: none; color: inherit;">부산신항</a> | 
                <a href="수색차량사업소.html" style="text-decoration: none; color: inherit;">수색</a> | 
                <a href="순천차량사업소.html" style="text-decoration: none; color: inherit;">순천</a> | 
                <a href="여수차량사업소.html" style="text-decoration: none; color: inherit;">여수</a> | 
                <a href="영주차량사업소.html" style="text-decoration: none; color: inherit;">영주</a> | 
                <a href="오송차량사업소.html" style="text-decoration: none; color: inherit;">오송</a><sup style="font-size:9.5px; color:#555;">[KR]</sup> | 
                <a href="익산차량사업소.html" style="text-decoration: none; color: inherit;">익산</a> | 
                <a href="제천차량사업소.html" style="text-decoration: none; color: inherit;">제천</a> | 
                <a href="제천조차장.html" style="text-decoration: none; color: inherit;">제천조</a> | 
                <a href="천안차량사업소.html" style="text-decoration: none; color: inherit;">천안</a><sup style="font-size:9.5px; color:#555;">[주재]</sup> | 
                <a href="청량리차량사업소.html" style="text-decoration: none; color: inherit;">청량리</a> | 
                <a href="포항차량사업소.html" style="text-decoration: none; color: inherit;">포항</a> | 
                <a href="경주차량사업소.html" style="text-decoration: none; color: inherit;">경주</a><span style="color:#000; font-size:10px;">◆</span><br>
                <a href="효빈일반철도차량정비단.html" style="text-decoration: none; color: inherit;">효빈일반단</a> | 
                <a href="빈주차량사업소.html" style="text-decoration: none; color: inherit;">빈주</a> | 
                <a href="풍영차량사업소.html" style="text-decoration: none; color: inherit;">풍영</a> | 
                <a href="서해차량사업소.html" style="text-decoration: none; color: inherit;">서해</a> | 
                <a href="운진역.html" style="text-decoration: none; color: inherit;">운진</a> | 
                <a href="매성역.html" style="text-decoration: none; color: inherit;">매성</a> | 
                <a href="천주역.html" style="text-decoration: none; color: inherit;">천주</a> | 
                <a href="군천역.html" style="text-decoration: none; color: inherit;">군천</a> | 
                <a href="효빈차량사업소.html" style="text-decoration: none; color: inherit;">효빈</a>
            </div>

            <!-- 6. 범례 설명 -->
            <div style="padding: 12px 10px; text-align: center; font-size: 11px; color: #333; background-color: #fff; line-height: 1.9;">
                <div>[중] 중정비 가능한 기지</div>
                <div>[타] 타 노선의 중정비 기지</div>
                <div>[주박] 주박용 기지 또는 주재</div>
                <div>[폐] 폐차선이 설치되어 있어 불용차량 폐차가 가능한 기지</div>
                <div><span style="text-decoration: underline;">밑줄</span>: 한국철도공사 소유가 아닌 차량기지</div>
                <div><i>기울임체</i>: 한국철도공사와 타 회사가 공동으로 소유하는 차량기지</div>
                <div><del>취소선</del>: 미개통</div>
                <div>◆: 폐업 또는 폐업 예정</div>
                <div>[KR] 국가철도공단</div>
            </div>
            
            <!-- 7. 하단 링크 -->
            <div style="padding: 8px 10px; text-align: center; font-size: 12px; color: #0275d8; background-color: #fff; border-top: 1px solid #ccc;">
                <a href="다른 지역 차량사업소 보기.html" style="text-decoration: none; color: inherit;">다른 지역 차량사업소 보기</a>
            </div>

        </details>
        `;
    }
});