document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("korail-depots-nav-container");
    
    if (container) {
        container.innerHTML = `
        <!-- 둘러보기 틀 (한국철도공사 빈주권 광역철도 차량사업소) -->
        <details open style="width: 100%; max-width: 900px; margin: 0 auto; font-family: 'Malgun Gothic', 'Apple SD Gothic Neo', sans-serif; font-size: 12px; color: #333; border: 1px solid #ccc; border-collapse: collapse; line-height: 1.5; background-color: #fff;">

            <summary style="list-style: none; display: block; cursor: pointer; outline: none;">
                <div style="text-align: center; padding: 15px 10px; background-color: #fff; border-bottom: 1px solid #ccc;">
                    <div style="font-size: 26px; font-weight: 900; color: #0052a4; letter-spacing: -1.5px; margin-bottom: 5px; font-style: italic;">
                        <a href="/w/한국철도공사" style="text-decoration: none; color: inherit;">KORAIL</a>
                    </div>
                    <div style="font-size: 15px; font-weight: bold; color: #0052a4;">
                        <a href="/w/한국철도공사/차량사업소" style="text-decoration: none; color: inherit;">한국철도공사의 차량정비단 · 차량사업소</a>
                    </div>
                </div>

                <div style="background-color: #f9f9f9; padding: 6px; text-align: center; border-bottom: 1px solid #ccc; font-size: 11px; color: #333; font-weight: bold;">
                    [ 펼치기 · 접기 클릭 ]
                </div>
            </summary>

            <div style="background-color: #0052a4; color: #fff; font-weight: bold; font-size: 13px; text-align: center; padding: 6px; border-bottom: 1px solid #ccc;">
                <a href="/w/고속철도" style="text-decoration: none; color: inherit;">고속철도</a>
            </div>
            
            <table style="width: 100%; border-collapse: collapse; text-align: center; table-layout: fixed;">
                <tr>
                    <!-- KTX -->
                    <td style="width: 50%; background-color: #002c5f; color: white; font-weight: bold; padding: 6px; font-style: italic; font-size: 16px; letter-spacing: -1px; border-right: 1px solid #ccc; border-bottom: 1px solid #ccc;"><a href="/w/KTX" style="text-decoration: none; color: inherit;">KTX</a></td>
                    <!-- SRT -->
                    <td style="width: 50%; background-color: #5d2b45; color: white; font-weight: bold; padding: 6px; font-style: italic; font-size: 16px; letter-spacing: -1px; border-bottom: 1px solid #ccc;"><a href="/w/SRT" style="text-decoration: none; color: inherit;">SRT</a></td>
                </tr>
                <tr>
                    <td style="padding: 12px 5px; border-right: 1px solid #ccc; border-bottom: 1px solid #ccc; color: #0052a4; word-break: keep-all; line-height: 1.6;">
                        <a href="/w/강릉차량사업소" style="text-decoration: none; color: inherit;">강릉</a> | 
                        <a href="/w/광명주박기지" style="text-decoration: none; color: inherit;">광명</a><span style="font-size:10px; color:#555;">[주박]</span> | 
                        <a href="/w/부발차량사업소" style="text-decoration: none; color: inherit;">부발</a> | 
                        <a href="/w/부산철도차량정비단" style="text-decoration: none; color: inherit;">부산단 고속차량운영처</a> | 
                        <a href="/w/수도권철도차량정비단" style="text-decoration: none; color: inherit;">수도단</a><span style="font-size:10px; color:#555;">[중]</span><br>
                        <a href="/w/울산차량사업소" style="text-decoration: none; color: inherit;">울산</a><span style="font-size:10px; color:#555;">[중]</span> | 
                        <a href="/w/청량리차량사업소" style="text-decoration: none; color: inherit;">청량리</a><span style="font-size:10px; color:#555;">[주박]</span> | 
                        <a href="/w/이문차량사업소" style="text-decoration: none; color: inherit;">이문</a><span style="font-size:10px; color:#555;">[주박]</span> | 
                        <a href="/w/호남철도차량정비단" style="text-decoration: none; color: inherit;">호남단</a><span style="font-size:10px; color:#555;">[중]</span><br>
                        <a href="/w/병점차량사업소" style="text-decoration: none; color: inherit;">병점</a><span style="font-size:10px; color:#555;">[주박]</span> | 
                        <a href="/w/송산차량사업소" style="text-decoration: none; color: inherit;">송산</a> | 
                        <a href="/w/순천차량사업소" style="text-decoration: none; color: inherit;">순천</a><br>
                        <a href="덕빈철도차량정비단.html" style="text-decoration: none; color: inherit;">덕빈단</a> | 
                        <a href="효빈일반철도차량정비단.html" style="text-decoration: none; color: inherit;">효빈일반단</a> | 
                        <a href="빈주역.html" style="text-decoration: none; color: inherit;">빈주</a><span style="font-size:10px; color:#555;">[주박]</span> | 
                        <a href="계성차량사업소.html" style="text-decoration: none; color: inherit;">계성</a><span style="font-size:10px; color:#555;">[주박]</span> | 
                        <a href="매성역.html" style="text-decoration: none; color: inherit;">매성</a><span style="font-size:10px; color:#555;">[주박]</span>
                    </td>
                    <td style="padding: 12px 5px; border-bottom: 1px solid #ccc; color: #0052a4; word-break: keep-all; line-height: 1.6;">
                        <a href="/w/부산철도차량정비단" style="text-decoration: none; color: inherit;">부산단 고속차량운영처</a> | 
                        <a href="/w/수서차량사업소" style="text-decoration: none; color: inherit;">수서(정비시선)</a> | 
                        <a href="/w/호남철도차량정비단" style="text-decoration: none; color: inherit;">호남단</a><span style="font-size:10px; color:#555;">[중]</span> | 
                        <a href="/w/평택지제역" style="text-decoration: none; color: inherit;">평택지제</a><br>
                        <a href="덕빈철도차량정비단.html" style="text-decoration: none; color: inherit;">덕빈단</a> | 
                        <a href="효빈일반철도차량정비단.html" style="text-decoration: none; color: inherit;">효빈일반단</a> | 
                        <a href="계성차량사업소.html" style="text-decoration: none; color: inherit;">계성</a><span style="font-size:10px; color:#555;">[주박]</span>
                    </td>
                </tr>
            </table>

            <div style="background-color: #0052a4; color: #fff; font-weight: bold; font-size: 13px; text-align: center; padding: 6px; border-bottom: 1px solid #ccc;">
                <a href="/w/일반열차" style="text-decoration: none; color: inherit;">일반열차 · 관광열차</a>
            </div>

            <table style="width: 100%; border-collapse: collapse; text-align: center; table-layout: fixed;">
                <tr>
                    <td style="width: 25%; background-color: #00a6a0; color: white; font-weight: bold; font-style: italic; padding: 6px; border-right: 1px solid #fff; border-bottom: 1px solid #ccc;"><a href="/w/누리로" style="text-decoration: none; color: inherit;">누리로</a></td>
                    <td style="width: 25%; background-color: #189c7c; color: white; font-weight: bold; padding: 6px; border-right: 1px solid #fff; border-bottom: 1px solid #ccc;"><a href="/w/동해산타열차" style="text-decoration: none; color: inherit;">동해산타열차</a></td>
                    <td style="width: 50%; background-color: #d1122a; color: white; font-weight: bold; font-style: italic; padding: 6px; border-bottom: 1px solid #ccc;" colspan="2"><a href="/w/ITX-새마을" style="text-decoration: none; color: inherit;">ITX-새마을</a></td>
                </tr>
                <tr>
                    <td style="padding: 10px 5px; border-right: 1px solid #ccc; border-bottom: 1px solid #ccc; color: #0052a4; line-height: 1.5;">
                        <a href="/w/강릉차량사업소" style="text-decoration: none; color: inherit;">강릉</a> | 
                        <a href="/w/대구차량사업소" style="text-decoration: none; color: inherit;">대구</a><span style="font-size:10px; color:#555;">[주박]</span> | 
                        <a href="/w/이문차량사업소" style="text-decoration: none; color: inherit;">이문</a><span style="font-size:10px; color:#555;">[중]</span>
                    </td>
                    <td style="padding: 10px 5px; border-right: 1px solid #ccc; border-bottom: 1px solid #ccc; color: #0052a4; line-height: 1.5;">
                        <!-- 동해산타열차 소속 비어있음 -->
                    </td>
                    <td colspan="2" style="padding: 10px 5px; border-bottom: 1px solid #ccc; color: #0052a4; line-height: 1.5;">
                        <a href="/w/대전차량사업소" style="text-decoration: none; color: inherit;">대전</a><span style="font-size:10px; color:#555;">[주박]</span> | 
                        <a href="/w/서울차량사업소" style="text-decoration: none; color: inherit;">서울</a> | 
                        <a href="/w/부산차량사업소" style="text-decoration: none; color: inherit;">부산</a> | 
                        <a href="/w/이문차량사업소" style="text-decoration: none; color: inherit;">이문</a><span style="font-size:10px; color:#555;">[중]</span><br>
                        <a href="효빈일반철도차량정비단.html" style="text-decoration: none; color: inherit;">효빈일반단</a> | 
                        <a href="빈주차량사업소.html" style="text-decoration: none; color: inherit;">빈주</a> | 
                        <a href="계성차량사업소.html" style="text-decoration: none; color: inherit;">계성</a> | 
                        <a href="매성차량사업소.html" style="text-decoration: none; color: inherit;">매성</a>
                    </td>
                </tr>
                <tr>
                    <td colspan="2" style="width: 50%; background-color: #d1122a; color: white; font-weight: bold; font-style: italic; padding: 6px; border-right: 1px solid #fff; border-bottom: 1px solid #ccc;"><a href="/w/ITX-마음" style="text-decoration: none; color: inherit;">ITX-마음</a></td>
                    <td colspan="2" style="width: 50%; background-color: #00a368; color: white; font-weight: bold; font-style: italic; padding: 6px; border-bottom: 1px solid #ccc;"><a href="/w/ITX-청춘" style="text-decoration: none; color: inherit;">ITX-청춘</a></td>
                </tr>
                <tr>
                    <td colspan="2" style="padding: 10px 5px; border-right: 1px solid #ccc; border-bottom: 1px solid #ccc; color: #0052a4; line-height: 1.6;">
                        <a href="/w/강릉차량사업소" style="text-decoration: none; color: inherit;">강릉</a><span style="font-size:10px; color:#555;">[주박]</span> | 
                        <a href="/w/서울차량사업소" style="text-decoration: none; color: inherit;">서울</a> | 
                        <a href="/w/대구차량사업소" style="text-decoration: none; color: inherit;">대구</a><span style="font-size:10px; color:#555;">[주박]</span> | 
                        <a href="/w/부산차량사업소" style="text-decoration: none; color: inherit;">부산</a> | 
                        <a href="/w/이문차량사업소" style="text-decoration: none; color: inherit;">이문</a><span style="font-size:10px; color:#555;">[중]</span> | 
                        <a href="/w/청량리차량사업소" style="text-decoration: none; color: inherit;">청량리</a><span style="font-size:10px; color:#555;">[주박]</span><br>
                        <a href="/w/대전철도차량정비단" style="text-decoration: none; color: inherit;">대전단 본단</a><span style="font-size:10px; color:#555;">[중]</span> | 
                        <a href="/w/제천차량사업소" style="text-decoration: none; color: inherit;">제천</a> | 
                        <a href="/w/익산차량사업소" style="text-decoration: none; color: inherit;">익산</a> | 
                        <a href="/w/여수차량사업소" style="text-decoration: none; color: inherit;">여수</a> | 
                        <a href="/w/영주차량사업소" style="text-decoration: none; color: inherit;">영주</a><br>
                        <a href="효빈일반철도차량정비단.html" style="text-decoration: none; color: inherit;">효빈일반단</a> | 
                        <a href="빈주차량사업소.html" style="text-decoration: none; color: inherit;">빈주</a> | 
                        <a href="매성차량사업소.html" style="text-decoration: none; color: inherit;">매성</a> | 
                        <a href="풍영차량사업소.html" style="text-decoration: none; color: inherit;">풍영</a>
                    </td>
                    <td colspan="2" style="padding: 10px 5px; border-bottom: 1px solid #ccc; color: #0052a4; line-height: 1.6;">
                        <a href="/w/평내차량사업소" style="text-decoration: none; color: inherit;">평내</a><span style="font-size:10px; color:#555;">[중]</span>
                    </td>
                </tr>
            </table>

            <div style="background-color: #0052a4; color: #fff; font-weight: bold; font-size: 13px; text-align: center; padding: 6px; border-bottom: 1px solid #ccc;">
                <a href="/w/광역전철" style="text-decoration: none; color: inherit;">광역전철</a>
            </div>

            <table style="width: 100%; border-collapse: collapse; text-align: center; table-layout: fixed; font-size: 11px;">
                <tr>
                    <td style="width: 25%; background-color: #0052a4; color: white; font-weight: bold; padding: 5px; border-right: 1px solid #fff; border-bottom: 1px solid #ccc;"><a href="/w/수도권 전철 1호선" style="text-decoration: none; color: inherit;">수도권 전철<br>1호선</a></td>
                    <td style="width: 25%; background-color: #77c4a3; color: white; font-weight: bold; padding: 5px; border-right: 1px solid #fff; border-bottom: 1px solid #ccc;"><a href="/w/수도권 전철 경의·중앙선" style="text-decoration: none; color: inherit;">수도권 전철<br>경의·중앙선</a></td>
                    <td style="width: 25%; background-color: #f37321; color: white; font-weight: bold; padding: 5px; border-right: 1px solid #fff; border-bottom: 1px solid #ccc;"><a href="/w/수도권 전철 3호선" style="text-decoration: none; color: inherit;">수도권 전철<br>3호선</a></td>
                    <td style="width: 25%; background-color: #00a2d1; color: white; font-weight: bold; padding: 5px; border-bottom: 1px solid #ccc;"><a href="/w/수도권 전철 4호선" style="text-decoration: none; color: inherit;">수도권 전철<br>4호선</a></td>
                </tr>
                <tr>
                    <td style="padding: 8px 3px; border-right: 1px solid #ccc; border-bottom: 1px solid #ccc; color: #0052a4; line-height: 1.5; vertical-align: top;">
                        <a href="/w/구로차량사업소" style="text-decoration: none; color: inherit;">구로</a><span style="font-size:9px; color:#555;">[폐]</span> | 
                        <a href="/w/병점차량사업소" style="text-decoration: none; color: inherit;">병점</a><span style="font-size:9px; color:#555;">[폐]</span><br>
                        <a href="/w/이문차량사업소" style="text-decoration: none; color: inherit;">이문</a> | 
                        <a href="/w/시흥차량사업소" style="text-decoration: none; color: inherit;">시흥단</a><span style="font-size:9px; color:#555;">[중][티][폐]</span><br>
                        <a href="/w/성북차량사업소" style="text-decoration: none; color: inherit;">성북분소</a><span style="font-size:9px; color:#555;">[주박]</span>
                    </td>
                    <td style="padding: 8px 3px; border-right: 1px solid #ccc; border-bottom: 1px solid #ccc; color: #0052a4; line-height: 1.5; vertical-align: top;">
                        <a href="/w/용문차량사업소" style="text-decoration: none; color: inherit;">용문</a> | 
                        <a href="/w/문산차량사업소" style="text-decoration: none; color: inherit;">문산</a><span style="font-size:9px; color:#555;">[중][폐]</span><br>
                        <a href="/w/시흥차량사업소" style="text-decoration: none; color: inherit;">시흥단</a><span style="font-size:9px; color:#555;">[중][티][폐]</span>
                    </td>
                    <td style="padding: 8px 3px; border-right: 1px solid #ccc; border-bottom: 1px solid #ccc; color: #0052a4; line-height: 1.5; vertical-align: top;">
                        <a href="/w/수서차량사업소" style="text-decoration: none; color: inherit;"><span style="text-decoration: underline;">수서</span></a><span style="font-size:9px; color:#555;">[배속][티]</span><br>
                        <a href="/w/지축차량사업소" style="text-decoration: none; color: inherit;"><span style="text-decoration: underline;">지축</span></a><span style="font-size:9px; color:#555;">[위탁][중][폐]</span>
                    </td>
                    <td style="padding: 8px 3px; border-bottom: 1px solid #ccc; color: #0052a4; line-height: 1.5; vertical-align: top;">
                        <a href="/w/시흥차량사업소" style="text-decoration: none; color: inherit;">시흥단</a><span style="font-size:9px; color:#555;">[중][폐]</span><br>
                        <a href="/w/안산차량사업소" style="text-decoration: none; color: inherit;">안산분소</a><span style="font-size:9px; color:#555;">[주박]</span> | 
                        <a href="/w/창동차량사업소" style="text-decoration: none; color: inherit;"><span style="text-decoration: underline;">창동</span></a><span style="font-size:9px; color:#555;">[주박]</span>◆
                    </td>
                </tr>

                <tr>
                    <td style="background-color: #fabe00; color: white; font-weight: bold; padding: 5px; border-right: 1px solid #fff; border-bottom: 1px solid #ccc;"><a href="/w/수도권 전철 수인·분당선" style="text-decoration: none; color: inherit;">수도권 전철<br>수인·분당선</a></td>
                    <td style="background-color: #0c8e72; color: white; font-weight: bold; padding: 5px; border-right: 1px solid #fff; border-bottom: 1px solid #ccc;"><a href="/w/수도권 전철 경춘선" style="text-decoration: none; color: inherit;">수도권 전철<br>경춘선</a></td>
                    <td style="background-color: #0054a6; color: white; font-weight: bold; padding: 5px; border-right: 1px solid #fff; border-bottom: 1px solid #ccc;"><a href="/w/수도권 전철 경강선" style="text-decoration: none; color: inherit;">수도권 전철<br>경강선</a></td>
                    <td style="background-color: #003da5; color: white; font-weight: bold; padding: 5px; border-bottom: 1px solid #ccc;"><a href="/w/동해선 광역전철" style="text-decoration: none; color: inherit;">동남권 전철<br>동해선</a></td>
                </tr>
                <tr>
                    <td style="padding: 8px 3px; border-right: 1px solid #ccc; border-bottom: 1px solid #ccc; color: #0052a4; line-height: 1.5;">
                        <a href="/w/분당차량사업소" style="text-decoration: none; color: inherit;">분당</a> | 
                        <a href="/w/시흥차량사업소" style="text-decoration: none; color: inherit;">시흥단</a><span style="font-size:9px; color:#555;">[중][폐]</span>
                    </td>
                    <td style="padding: 8px 3px; border-right: 1px solid #ccc; border-bottom: 1px solid #ccc; color: #0052a4; line-height: 1.5;">
                        <a href="/w/평내차량사업소" style="text-decoration: none; color: inherit;">평내</a><span style="font-size:9px; color:#555;">[중][폐]</span>
                    </td>
                    <td style="padding: 8px 3px; border-right: 1px solid #ccc; border-bottom: 1px solid #ccc; color: #0052a4; line-height: 1.5;">
                        <a href="/w/부발차량사업소" style="text-decoration: none; color: inherit;">부발</a> | 
                        <a href="/w/문산차량사업소" style="text-decoration: none; color: inherit;">문산</a><span style="font-size:9px; color:#555;">[중][티][폐]</span>
                    </td>
                    <td style="padding: 8px 3px; border-bottom: 1px solid #ccc; color: #0052a4; line-height: 1.5;">
                        <a href="/w/울산차량사업소" style="text-decoration: none; color: inherit;">울산</a><span style="font-size:9px; color:#555;">[중]</span>
                    </td>
                </tr>

                <tr>
                    <td style="background-color: #81a914; color: white; font-weight: bold; padding: 5px; border-right: 1px solid #fff; border-bottom: 1px solid #ccc;"><a href="/w/수도권 전철 서해선" style="text-decoration: none; color: inherit;">수도권 전철<br>서해선</a></td>
                    <td style="background-color: #003da5; color: white; font-weight: bold; padding: 5px; border-right: 1px solid #fff; border-bottom: 1px solid #ccc;"><a href="/w/대구권 광역철도" style="text-decoration: none; color: inherit;">대구권 전철<br>대경선</a></td>
                    <td style="background-color: #a7b529; color: white; font-weight: bold; padding: 5px; border-right: 1px solid #fff; border-bottom: 1px solid #ccc;"><a href="/w/충청권 광역철도" style="text-decoration: none; color: inherit;">충청권 광역철도</a></td>
                    <td style="background-color: #6677cc; color: white; font-weight: bold; padding: 5px; border-bottom: 1px solid #ccc;"><a href="빈효선.html" style="text-decoration: none; color: inherit;">효빈권 전철<br>빈효선</a></td>
                </tr>
                <tr>
                    <td style="padding: 8px 3px; border-right: 1px solid #ccc; border-bottom: 1px solid #ccc; color: #0052a4; line-height: 1.5;">
                        <a href="/w/시흥차량사업소" style="text-decoration: none; color: inherit;">시흥단</a><span style="font-size:9px; color:#555;">[중][티][폐]</span> | 
                        <a href="/w/송산차량사업소" style="text-decoration: none; color: inherit;">송산</a>
                    </td>
                    <td style="padding: 8px 3px; border-right: 1px solid #ccc; border-bottom: 1px solid #ccc; color: #0052a4; line-height: 1.5;">
                        <a href="/w/대구차량사업소" style="text-decoration: none; color: inherit;">대구</a> | 
                        <a href="/w/울산차량사업소" style="text-decoration: none; color: inherit;">울산</a><span style="font-size:9px; color:#555;">[중][티]</span>
                    </td>
                    <td style="padding: 8px 3px; border-right: 1px solid #ccc; border-bottom: 1px solid #ccc; color: #0052a4; line-height: 1.5;">
                        <a href="/w/대전차량사업소" style="text-decoration: none; color: inherit;">대전</a> | 
                        <a href="/w/대전철도차량정비단" style="text-decoration: none; color: inherit;">대전단 본단</a><span style="font-size:9px; color:#555;">[중]</span>
                    </td>
                    <td style="padding: 8px 3px; border-bottom: 1px solid #ccc; color: #0052a4; line-height: 1.5;">
                        <a href="고남차량사업소.html" style="text-decoration: none; color: inherit;">고남</a> | 
                        <a href="효빈항차량주박기지.html" style="text-decoration: none; color: inherit;">효빈항</a><span style="font-size:9px; color:#555;">[주박]</span> | 
                        <del style="color:#888;"><a href="치원차량사업소.html" style="text-decoration: none; color: inherit;">치원</a></del>
                    </td>
                </tr>
                
                <tr>
                    <td colspan="4" style="background-color: #0052a4; color: white; font-weight: bold; padding: 5px; border-bottom: 1px solid #ccc;">
                        <a href="빈주광역철도.html" style="text-decoration: none; color: inherit;">빈주권 전철<br>빈주권 광역철도(빈주선)</a>
                    </td>
                </tr>
                <tr>
                    <td colspan="4" style="padding: 8px 3px; border-bottom: 1px solid #ccc; color: #0052a4; line-height: 1.5;">
                        <a href="계성차량사업소.html" style="text-decoration: none; color: inherit;">계성</a> | 
                        <a href="풍영차량사업소.html" style="text-decoration: none; color: inherit;">풍영</a>
                    </td>
                </tr>
            </table>

            <div style="background-color: #935a84; color: #fff; font-weight: bold; font-size: 13px; text-align: center; padding: 6px; border-bottom: 1px solid #ccc;">
                <a href="/w/수도권 광역급행철도" style="text-decoration: none; color: inherit;">수도권 광역급행철도</a>
            </div>
            
            <table style="width: 100%; border-collapse: collapse; text-align: center; table-layout: fixed; font-size: 11px;">
                <tr>
                    <td style="width: 50%; background-color: #2a3e6a; color: white; font-weight: bold; padding: 5px; border-right: 1px solid #fff; border-bottom: 1px solid #ccc;"><a href="/w/수도권 광역급행철도 B노선" style="text-decoration: none; color: inherit;">GTX-B</a></td>
                    <td style="width: 50%; background-color: #008d62; color: white; font-weight: bold; padding: 5px; border-bottom: 1px solid #ccc;"><a href="/w/수도권 광역급행철도 C노선" style="text-decoration: none; color: inherit;">GTX-C</a></td>
                </tr>
                <tr>
                    <td style="padding: 8px 5px; border-right: 1px solid #ccc; border-bottom: 1px solid #ccc; color: #0052a4;">
                        <del style="color:#888;"><a href="/w/마석역" style="text-decoration: none; color: inherit;">마석</a></del>
                    </td>
                    <td style="padding: 8px 5px; border-bottom: 1px solid #ccc; color: #0052a4;">
                        <del style="color:#888;"><a href="/w/덕정역" style="text-decoration: none; color: inherit;">덕정</a></del> | 
                        <del style="color:#888;"><a href="/w/병점차량사업소" style="text-decoration: none; color: inherit;">병점</a></del><span style="font-size:9px; color:#555;">[주박]</span>
                    </td>
                </tr>
            </table>

            <div style="background-color: #0052a4; color: #fff; font-weight: bold; font-size: 13px; text-align: center; padding: 6px; border-bottom: 1px solid #ccc;">
                <a href="/w/철도차량" style="text-decoration: none; color: inherit;">기관차 · 객차 · 발전차 · 화차</a>
            </div>
            
            <div style="padding: 15px 10px; text-align: center; font-size: 12px; color: #0052a4; border-bottom: 1px solid #ccc; line-height: 1.8; word-break: keep-all;">
                <a href="/w/가야차량사업소" style="text-decoration: none; color: inherit;">가야</a> | 
                <a href="/w/광주차량사업소" style="text-decoration: none; color: inherit;">광주</a> | 
                <a href="/w/동해차량사업소" style="text-decoration: none; color: inherit;">동해</a> | 
                <a href="/w/대전차량사업소" style="text-decoration: none; color: inherit;">대전</a> | 
                <a href="/w/대전철도차량정비단" style="text-decoration: none; color: inherit;">대전단 본단</a><span style="font-size:10px; color:#555;">[중][폐]</span> | 
                <a href="/w/대전철도차량정비단" style="text-decoration: none; color: inherit;">대전단 전기차량정비부</a><span style="font-size:10px; color:#555;">[중]</span> | 
                <a href="/w/마산차량사업소" style="text-decoration: none; color: inherit;">마산</a> | 
                <a href="/w/목포차량사업소" style="text-decoration: none; color: inherit;">목포</a> | 
                <a href="/w/부곡차량사업소" style="text-decoration: none; color: inherit;">부곡</a> | 
                <a href="/w/부산철도차량정비단" style="text-decoration: none; color: inherit;">부산단 일반차량중정비</a><span style="font-size:10px; color:#555;">[중]</span><br>
                <a href="/w/부산신항차량사업소" style="text-decoration: none; color: inherit;">부산신항</a> | 
                <a href="/w/수색차량사업소" style="text-decoration: none; color: inherit;">수색</a> | 
                <a href="/w/순천차량사업소" style="text-decoration: none; color: inherit;">순천</a> | 
                <a href="/w/여수차량사업소" style="text-decoration: none; color: inherit;">여수</a> | 
                <a href="/w/영주차량사업소" style="text-decoration: none; color: inherit;">영주</a> | 
                <a href="/w/오송차량사업소" style="text-decoration: none; color: inherit;">오송</a><span style="font-size:10px; color:#555;">[KR]</span> | 
                <a href="/w/익산차량사업소" style="text-decoration: none; color: inherit;">익산</a> | 
                <a href="/w/제천차량사업소" style="text-decoration: none; color: inherit;">제천</a> | 
                <a href="/w/제천조차장" style="text-decoration: none; color: inherit;">제천조</a> | 
                <a href="/w/천안차량사업소" style="text-decoration: none; color: inherit;">천안</a><span style="font-size:10px; color:#555;">[주박]</span> | 
                <a href="/w/청량리차량사업소" style="text-decoration: none; color: inherit;">청량리</a> | 
                <a href="/w/포항차량사업소" style="text-decoration: none; color: inherit;">포항</a><br>
                <a href="효빈일반철도차량정비단.html" style="text-decoration: none; color: inherit;">효빈일반단</a> | 
                <a href="빈주차량사업소.html" style="text-decoration: none; color: inherit;">빈주</a> | 
                <a href="풍영차량사업소.html" style="text-decoration: none; color: inherit;">풍영</a> | 
                <a href="서해차량사업소.html" style="text-decoration: none; color: inherit;">서해</a> | 
                <a href="운진역.html" style="text-decoration: none; color: inherit;">운진</a> | 
                <a href="비천역.html" style="text-decoration: none; color: inherit;">비천</a> | 
                <a href="천주역.html" style="text-decoration: none; color: inherit;">천주</a> | 
                <a href="군천역.html" style="text-decoration: none; color: inherit;">군천</a> | 
                <a href="효빈차량사업소.html" style="text-decoration: none; color: inherit;">효빈</a>
            </div>

            <div style="padding: 15px 10px; text-align: center; font-size: 11px; color: #555; background-color: #fff; line-height: 1.6;">
                <span style="display:inline-block; margin-right: 12px;">[중] 중정비 가능한 기지</span>
                <span style="display:inline-block; margin-right: 12px;">[티] 타 노선의 중정비 기지</span>
                <span style="display:inline-block; margin-right: 12px;">[주박] 주박용 기지 또는 주재</span>
                <span style="display:inline-block; margin-right: 12px;">[폐] 폐차선이 설치되어 있어 불용차량 유치가 가능한 기지</span><br>
                <span style="display:inline-block; margin-right: 12px;"><span style="text-decoration: underline;">밑줄</span>: 한국철도공사 소유가 아닌 차량기지</span>
                <span style="display:inline-block; margin-right: 12px;"><del>취소선</del>: 미개통</span>
                <span style="display:inline-block; margin-right: 12px;">◆: 폐역 또는 폐역 예정</span>
                <span style="display:inline-block;">[KR] 국가철도공단</span>
            </div>
            
            <div style="padding: 10px; text-align: center; font-size: 11px; color: #0052a4; background-color: #f9f9f9; border-top: 1px solid #ccc;">
                <a href="/w/분류:한국철도공사의 차량사업소" style="text-decoration: none; color: inherit;">다른 지역 차량사업소 보기</a>
            </div>

        </details>
        `;
    }
});