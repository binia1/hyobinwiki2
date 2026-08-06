(function() {
    const template = `
<div style="border: 1px solid #ccc; font-family: 'Noto Sans KR', sans-serif; background-color: #fff; max-width: 100%; box-sizing: border-box; clear: both; margin: 30px 0;">
    <div style="background-image: linear-gradient(120deg, #fff 5%, #000 5.1% 9%, #fff 9.1% 10%, #000 10.1% 14%, #fff 14.1% 15%, #000 15.1% 19%, #fff 19.1% 81%, #cd313a 81.1% 90%, #0047a0 90.1%); padding: 20px 0; text-align: center; border-bottom: 1px solid #ccc;">
        <img src="이미지/대한민국_국장.svg" alt="대한민국 국장" onerror="this.outerHTML='<span style=\\'font-size:30px;\\'>🇰🇷</span>'" style="height: 50px; display: inline-block; vertical-align: middle; margin-right: 15px;">
        <div style="display: inline-block; vertical-align: middle; text-align: left; line-height: 1.2;">
            <div style="font-size: 0.9em; font-weight: bold; color: #000;">대한민국</div>
            <div style="font-size: 1.4em; font-weight: 900; letter-spacing: -1px; color: #000;">광역자치단체 부단체장</div>
        </div>
    </div>
    <details open style="margin: 0; padding: 0;">
        <summary style="background-color: #333; color: #fff; text-align: center; padding: 10px 0; font-size: 0.9rem; font-weight: bold; cursor: pointer; list-style: none; outline: none;">
            [ 펼치기 · 접기 ]
        </summary>
        <div style="padding: 0;">
            <table style="width: 100%; border-collapse: collapse; text-align: center; font-size: 0.9rem; margin: 0; background-color: #fff; table-layout: fixed;">
                <!-- ROW 1 Headers -->
                <tr style="color: #fff; font-weight: bold;">
                    <th style="background-color: #ae1932; padding: 10px; border: 1px solid #ddd;">서울</th>
                    <th style="background-color: #e5007f; padding: 10px; border: 1px solid #ddd;">부산</th>
                    <th style="background-color: #008837; padding: 10px; border: 1px solid #ddd;">대구</th>
                    <th style="background-color: #0079c1; padding: 10px; border: 1px solid #ddd;">인천</th>
                    <th style="background-color: #005bab; padding: 10px; border: 1px solid #ddd;">광주</th>
                </tr>
                <!-- ROW 1 Data -->
                <tr style="background-color: #fff;">
                    <td style="padding: 15px 5px; border: 1px solid #ddd; line-height: 1.6;">
                        <span style="color:#ae1932; font-weight:bold;">공석</span> <span style="font-size: 0.8rem; color: #555;">(행정1)</span><br>
                        <span style="color:#ae1932; font-weight:bold;">김성보</span> <span style="font-size: 0.8rem; color: #555;">(행정2)</span><br>
                        <span style="color:#ae1932; font-weight:bold;">박찬구</span> <span style="font-size: 0.8rem; color: #555;">(정무)</span>
                    </td>
                    <td style="padding: 15px 5px; border: 1px solid #ddd; line-height: 1.6;">
                        <span style="color:#e5007f; font-weight:bold;">김경덕</span> <span style="font-size: 0.8rem; color: #555;">(행정)</span><br>
                        <span style="color:#e5007f; font-weight:bold;">오석근</span> <span style="font-size: 0.8rem; color: #555;">(미래혁신)</span>
                    </td>
                    <td style="padding: 15px 5px; border: 1px solid #ddd; line-height: 1.6;">
                        <span style="color:#008837; font-weight:bold;">김정기</span> <span style="font-size: 0.8rem; color: #555;">(행정)</span><br>
                        <span style="color:#008837; font-weight:bold;">공석</span> <span style="font-size: 0.8rem; color: #555;">(경제)</span>
                    </td>
                    <td style="padding: 15px 5px; border: 1px solid #ddd; line-height: 1.6;">
                        <span style="color:#0079c1; font-weight:bold;">공석</span> <span style="font-size: 0.8rem; color: #555;">(행정)</span><br>
                        <span style="color:#0079c1; font-weight:bold;">남영희</span> <span style="font-size: 0.8rem; color: #555;">(글로벌도시정무)</span>
                    </td>
                    <td style="padding: 15px 5px; border: 1px solid #ddd; line-height: 1.6;">
                        <span style="color:#005bab; font-weight:bold;">공석</span> <span style="font-size: 0.8rem; color: #555;">(행정)</span><br>
                        <span style="color:#005bab; font-weight:bold;">고광완</span> <span style="font-size: 0.8rem; color: #555;">(문화산업)</span><br>
                        <span style="color:#005bab; font-weight:bold;">공석</span> <span style="font-size: 0.8rem; color: #555;">(안전민생)</span><br>
                        <span style="color:#005bab; font-weight:bold;">황기연</span> <span style="font-size: 0.8rem; color: #555;">(경제농림)</span>
                    </td>
                </tr>
                <!-- ROW 2 Headers -->
                <tr style="color: #fff; font-weight: bold;">
                    <th style="background-color: #00ae4d; padding: 10px; border: 1px solid #ddd;">대전</th>
                    <th style="background-color: #008c95; padding: 10px; border: 1px solid #ddd;">울산</th>
                    <th style="background-color: #01a0c6; padding: 10px; border: 1px solid #ddd;">세종</th>
                    <th style="background-color: #004097; padding: 10px; border: 1px solid #ddd;">경기</th>
                    <th style="background-color: #d50037; padding: 10px; border: 1px solid #ddd;">강원</th>
                </tr>
                <!-- ROW 2 Data -->
                <tr style="background-color: #fff;">
                    <td style="padding: 15px 5px; border: 1px solid #ddd; line-height: 1.6;">
                        <span style="color:#00ae4d; font-weight:bold;">공석</span> <span style="font-size: 0.8rem; color: #555;">(행정)</span><br>
                        <span style="color:#00ae4d; font-weight:bold;">지영한</span> <span style="font-size: 0.8rem; color: #555;">(정무경제과학)</span>
                    </td>
                    <td style="padding: 15px 5px; border: 1px solid #ddd; line-height: 1.6;">
                        <span style="color:#008c95; font-weight:bold;">서남교</span> <span style="font-size: 0.8rem; color: #555;">(행정)</span><br>
                        <span style="color:#008c95; font-weight:bold;">신민식</span> <span style="font-size: 0.8rem; color: #555;">(경제)</span>
                    </td>
                    <td style="padding: 15px 5px; border: 1px solid #ddd; line-height: 1.6;">
                        <span style="color:#01a0c6; font-weight:bold;">공석</span> <span style="font-size: 0.8rem; color: #555;">(행정)</span><br>
                        <span style="color:#01a0c6; font-weight:bold;">박성수</span> <span style="font-size: 0.8rem; color: #555;">(경제)</span>
                    </td>
                    <td style="padding: 15px 5px; border: 1px solid #ddd; line-height: 1.6;">
                        <span style="color:#004097; font-weight:bold;">김성중</span> <span style="font-size: 0.8rem; color: #555;">(행정1)</span><br>
                        <span style="color:#004097; font-weight:bold;">공석</span> <span style="font-size: 0.8rem; color: #555;">(행정2)</span><br>
                        <span style="color:#004097; font-weight:bold;">주형철</span> <span style="font-size: 0.8rem; color: #555;">(경제)</span>
                    </td>
                    <td style="padding: 15px 5px; border: 1px solid #ddd; line-height: 1.6;">
                        <span style="color:#d50037; font-weight:bold;">여중협</span> <span style="font-size: 0.8rem; color: #555;">(행정)</span><br>
                        <span style="color:#d50037; font-weight:bold;">신원철</span> <span style="font-size: 0.8rem; color: #555;">(경제)</span>
                    </td>
                </tr>
                <!-- ROW 3 Headers -->
                <tr style="color: #fff; font-weight: bold;">
                    <th style="background-color: #724598; padding: 10px; border: 1px solid #ddd;">충북</th>
                    <th style="background-color: #8c8c70; padding: 10px; border: 1px solid #ddd;">충남</th>
                    <th style="background-color: #024694; padding: 10px; border: 1px solid #ddd;">전북</th>
                    <th style="background-color: #0071bb; padding: 10px; border: 1px solid #ddd;">경북</th>
                    <th style="background-color: #f15a38; padding: 10px; border: 1px solid #ddd;">경남</th>
                </tr>
                <!-- ROW 3 Data -->
                <tr style="background-color: #fff;">
                    <td style="padding: 15px 5px; border: 1px solid #ddd; line-height: 1.6;">
                        <span style="color:#724598; font-weight:bold;">이동옥</span> <span style="font-size: 0.8rem; color: #555;">(행정)</span><br>
                        <span style="color:#724598; font-weight:bold;">이복원</span> <span style="font-size: 0.8rem; color: #555;">(경제)</span>
                    </td>
                    <td style="padding: 15px 5px; border: 1px solid #ddd; line-height: 1.6;">
                        <span style="color:#8c8c70; font-weight:bold;">홍종완</span> <span style="font-size: 0.8rem; color: #555;">(행정)</span><br>
                        <span style="color:#8c8c70; font-weight:bold;">구본영</span> <span style="font-size: 0.8rem; color: #555;">(정무)</span>
                    </td>
                    <td style="padding: 15px 5px; border: 1px solid #ddd; line-height: 1.6;">
                        <span style="color:#024694; font-weight:bold;">공석</span> <span style="font-size: 0.8rem; color: #555;">(행정)</span><br>
                        <span style="color:#024694; font-weight:bold;">고정삼</span> <span style="font-size: 0.8rem; color: #555;">(경제)</span>
                    </td>
                    <td style="padding: 15px 5px; border: 1px solid #ddd; line-height: 1.6;">
                        <span style="color:#0071bb; font-weight:bold;">황명석</span> <span style="font-size: 0.8rem; color: #555;">(행정)</span><br>
                        <span style="color:#0071bb; font-weight:bold;">양금희</span> <span style="font-size: 0.8rem; color: #555;">(경제)</span>
                    </td>
                    <td style="padding: 15px 5px; border: 1px solid #ddd; line-height: 1.6;">
                        <span style="color:#f15a38; font-weight:bold;">박일웅</span> <span style="font-size: 0.8rem; color: #555;">(행정)</span><br>
                        <span style="color:#f15a38; font-weight:bold;">공석</span> <span style="font-size: 0.8rem; color: #555;">(경제)</span>
                    </td>
                </tr>
                <!-- ROW 4 Headers -->
                <tr style="color: #fff; font-weight: bold;">
                    <th style="background-color: #868686; padding: 10px; border: 1px solid #ddd;">제주</th>
                    <th style="background-color: #7777AA; padding: 10px; border: 2px solid #7777AA;">효빈</th>
                    <th style="background-color: #4AD898; color: #000; padding: 10px; border: 2px solid #4AD898;">덕북</th>
                    <th style="background-color: #335566; padding: 10px; border: 2px solid #335566;">덕남</th>
                    <th style="border: none; background-color: transparent;"></th>
                </tr>
                <!-- ROW 4 Data -->
                <tr style="background-color: #fff;">
                    <td style="padding: 15px 5px; border: 1px solid #ddd; line-height: 1.6;">
                        <span style="color:#555; font-weight:bold;">박천수</span> <span style="font-size: 0.8rem; color: #555;">(행정)</span><br>
                        <span style="color:#555; font-weight:bold;">공석</span> <span style="font-size: 0.8rem; color: #555;">(기후경제)</span>
                    </td>
                    <td style="padding: 15px 5px; border: 1px solid #ddd; background-color: #f4f4fa; line-height: 1.6;">
                        <span style="color:#7777AA; font-weight:bold;">강휴석</span> <span style="font-size: 0.8rem; color: #555;">(행정)</span><br>
                        <span style="color:#7777AA; font-weight:bold;">최대현</span> <span style="font-size: 0.8rem; color: #555;">(경제)</span>
                    </td>
                    <td style="padding: 15px 5px; border: 1px solid #ddd; background-color: #ebfcf4; line-height: 1.6;">
                        <span style="color:#20a161; font-weight:bold;">구일태</span> <span style="font-size: 0.8rem; color: #555;">(행정)</span><br>
                        <span style="color:#20a161; font-weight:bold;">서일석</span> <span style="font-size: 0.8rem; color: #555;">(경제)</span>
                    </td>
                    <td style="padding: 15px 5px; border: 1px solid #ddd; background-color: #f0f8ff; line-height: 1.6;">
                        <span style="color:#335566; font-weight:bold;">강은혁</span> <span style="font-size: 0.8rem; color: #555;">(행정)</span><br>
                        <span style="color:#335566; font-weight:bold;">주양문</span> <span style="font-size: 0.8rem; color: #555;">(경제)</span>
                    </td>
                    <td style="border: none; background-color: transparent;"></td>
                </tr>
            </table>
        </div>
    </details>
</div>
    `;
    
    // 현재 스크립트 태그가 위치한 곳에 HTML 코드를 렌더링합니다.
    document.currentScript.insertAdjacentHTML('beforebegin', template);
})();