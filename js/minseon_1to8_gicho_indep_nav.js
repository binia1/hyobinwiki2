document.addEventListener("DOMContentLoaded", function() {
    
    const indepGray = "#808080"; 
    const linkColor = "#0066cc";
    const borderColor = "#ddd";

    // 1~8기 통합 데이터 (요청하신 추가 인원 모두 포함)
    const termsData = [
        {
            term: 1,
            names: ["강현중", "곽윤섭", "국승록", "권용한", "김길준", "김두관", "김병로", "김세웅", "김영완", "김용욱", "김일동", "김재홍", "김종철", "김진영", "김창일", "나인수", "문경규", "문광웅", "민병채", "박일재", "배응기", "변익규", "손유섭", "송진섭", "신창현", "심재덕", "양재호", "엄태항", "오광협", "유영", "유천수", "윤석천", "이시종", "이영근", "이재용", "이재현", "이진환", "임경순", "임수진", "정동호", "정용규", "정해걸", "조상도", "조형래", "하계열", "하일청", "조원형"],
            footer: '<a href="한나라당.html" style="color: #fff; text-decoration: none;">한나라당</a> · <a href="새정치국민회의.html" style="color: #fff; text-decoration: none;">새정치국민회의</a> · <a href="자유민주연합.html" style="color: #fff; text-decoration: none;">자유민주연합</a> · <a href="국민신당.html" style="color: #fff; text-decoration: none;">국민신당</a> · <a href="무소속.html" style="color: #fff; text-decoration: none;">무소속</a>'
        },
        {
            term: 2,
            names: ["장정식", "이정규", "진영호", "박현양", "김영희", "심재덕", "백청수", "이현직", "민병채", "황종국", "임경순", "권희필", "이건표", "정상헌", "김행기", "유병돈", "강근호", "최진영", "조한용", "국승록", "이호종", "임득춘", "임명환", "이철규", "김옥현", "주승용", "문경규", "이재현", "이의상", "김주환", "이원식", "박팔용", "정동호", "김진영", "엄태항", "이여형", "최재영", "배응기", "이영근", "이규상", "박대해", "박대석", "이인준", "전나명", "박진구", "김병로", "정주환", "정용규", "강석정", "강상주", "김태환", "정명환"],
            footer: '<a href="한나라당.html" style="color: #fff; text-decoration: none;">한나라당</a> · <a href="새천년민주당.html" style="color: #fff; text-decoration: none;">새천년민주당</a> · <a href="자유민주연합.html" style="color: #fff; text-decoration: none;">자유민주연합</a> · <a href="한국미래연합.html" style="color: #fff; text-decoration: none;">한국미래연합</a> · <a href="민주노동당.html" style="color: #fff; text-decoration: none;">민주노동당</a> · <a href="무소속.html" style="color: #fff; text-decoration: none;">무소속</a>'
        },
        {
            term: 3,
            names: ["유영", "이기재", "박홍섭", "추재엽", "김동식", "정종흔", "임충빈", "임창선", "박신원", "이정문", "이교범", "양재수", "한택수", "류종수", "임경순", "김창수", "박병호", "이건표", "박수광", "유명호", "오영희", "이시우", "김행기", "송병태", "최진영", "김종규", "김진억", "장재영", "신정훈", "하승완", "고길호", "김인규", "이석형", "이영남", "이신학", "정재원", "박팔용", "박인원", "권영창", "이태근", "박영언", "배대윤", "김문곤", "이진복", "김영오", "박대해", "박대석", "이인준", "오근섭", "권철현", "한우상", "진석규", "강상주", "오산기"],
            footer: '<a href="한나라당.html" style="color: #fff; text-decoration: none;">한나라당</a> · <a href="민주당.html" style="color: #fff; text-decoration: none;">민주당</a> · <a href="열린우리당.html" style="color: #fff; text-decoration: none;">열린우리당</a> · <a href="국민중심당.html" style="color: #fff; text-decoration: none;">국민중심당</a> · <a href="무소속.html" style="color: #fff; text-decoration: none;">무소속</a>'
        },
        {
            term: 4,
            names: ["한인수", "추재엽", "김형수", "정동일", "이익진", "안덕수", "이효선", "오세창", "이대엽", "임충빈", "서정석", "김문원", "이진용", "김기열", "박종기", "황종국", "임각수", "유명호", "황일봉", "전주언", "이건식", "최중근", "강광", "이성웅", "신정훈", "노관규", "박우량", "이청", "이석형", "전완준", "서중현", "김형렬", "최병국", "백상승", "신현국", "김주영", "이태근", "박영언", "엄태항", "권영택", "배상도", "고봉복", "이성식", "조정화", "이위준", "조용수", "김종간", "정영석", "양동인", "정현태", "김대수", "민영만", "강은한"],
            footer: '<a href="한나라당.html" style="color: #fff; text-decoration: none;">한나라당</a> · <a href="민주당.html" style="color: #fff; text-decoration: none;">민주당</a> · <a href="자유선진당.html" style="color: #fff; text-decoration: none;">자유선진당</a> · <a href="국민중심연합.html" style="color: #fff; text-decoration: none;">국민중심연합</a> · <a href="무소속.html" style="color: #fff; text-decoration: none;">무소속</a>'
        },
        {
            term: 5,
            names: ["문충실", "진익철", "전년성", "유천호", "김철민", "김학규", "허필홍", "임각수", "정상혁", "이석화", "이건식", "홍낙표", "임정엽", "송영선", "이성웅", "임성훈", "조충훈", "김충석", "허남석", "박우량", "김일태", "강성호", "성백영", "한동수", "정영석", "조길우", "오규석", "정현태", "하성식"],
            footer: '<a href="새누리당.html" style="color: #fff; text-decoration: none;">새누리당</a> · <a href="새정치민주연합.html" style="color: #fff; text-decoration: none;">새정치민주연합</a> · <a href="통합진보당.html" style="color: #fff; text-decoration: none;">통합진보당</a> · <a href="정의당.html" style="color: #fff; text-decoration: none;">정의당</a> · <a href="무소속.html" style="color: #fff; text-decoration: none;">무소속</a>'
        },
        {
            term: 6,
            names: ["고길호", "권영세", "김문오", "김성제", "김영만", "김종규", "박우섭", "심규언", "심민", "안병호", "안상수", "오규석", "오영호", "원경희", "유두석", "이상복", "이용부", "이정백", "이현준", "임광원", "임우진", "정현복", "조길형", "최명희", "최수일", "최양식", "하계열", "한규호", "강준혁", "강은한", "남연석", "남기하"],
            footer: '<a href="더불어민주당.html" style="color: #fff; text-decoration: none;">더불어민주당</a> · <a href="자유한국당.html" style="color: #fff; text-decoration: none;">자유한국당</a> · <a href="바른미래당.html" style="color: #fff; text-decoration: none;">바른미래당</a> · <a href="민주평화당.html" style="color: #fff; text-decoration: none;">민주평화당</a> · <a href="무소속.html" style="color: #fff; text-decoration: none;">무소속</a>'
        },
        {
            term: 7,
            names: ["강인규", "김광철", "김문오", "김병수", "김산", "김영만", "김주수", "김한근", "서대석", "송귀근", "심민", "엄태항", "오규석", "오태완", "유기상", "유두석", "윤화섭", "이정훈", "장영수", "정종순", "정현복", "조광한", "최기문", "한정우", "황인홍", "윤재민", "남연석", "남기하", "강준혁"],
            footer: '<a href="더불어민주당.html" style="color: #fff; text-decoration: none;">더불어민주당</a> · <a href="국민의힘.html" style="color: #fff; text-decoration: none;">국민의힘</a> · <a href="무소속.html" style="color: #fff; text-decoration: none;">무소속</a>'
        },
        {
            term: 8,
            names: ["강진원", "구인모", "김기재", "김명기", "김윤철", "김희수", "노관규", "남한권", "박희영", "신현국", "심민", "오태완", "조병길", "조규일", "최기문", "최명서", "윤재민", "김태수", "백수안", "강준영"],
            footer: '<a href="국민의힘.html" style="color: #fff; text-decoration: none;">국민의힘</a> · <a href="더불어민주당.html" style="color: #fff; text-decoration: none;">더불어민주당</a> · <a href="조국혁신당.html" style="color: #fff; text-decoration: none;">조국혁신당</a> · <a href="개혁신당.html" style="color: #fff; text-decoration: none;">개혁신당</a> · <a href="무소속.html" style="color: #fff; text-decoration: none;">무소속</a>'
        }
    ];

    // 배열 순회하며 HTML 주입
    termsData.forEach(data => {
        // ID가 문서에 존재할 경우에만 렌더링
        const container = document.getElementById(`minseon${data.term}-gicho-indep-nav-container`);
        if (!container) return;

        // 중복 제거 및 가나다순 정렬
        const sortedNames = Array.from(new Set(data.names)).sort((a, b) => a.localeCompare(b, 'ko'));

        let tableRowsHTML = '';
        const columns = 5;
        for (let i = 0; i < sortedNames.length; i += columns) {
            tableRowsHTML += '<tr style="background-color: #fff;">';
            for (let j = 0; j < columns; j++) {
                const index = i + j;
                if (index < sortedNames.length) {
                    tableRowsHTML += `<td style="padding: 10px 5px; border: 1px solid ${borderColor}; width: 20%; line-height: 1.3;"><a href="${sortedNames[index]}.html" style="color: ${linkColor}; text-decoration: none;">${sortedNames[index]}</a></td>`;
                } else {
                    tableRowsHTML += `<td style="padding: 10px 5px; border: 1px solid ${borderColor}; width: 20%; background-color: #f8f9fa;"></td>`;
                }
            }
            tableRowsHTML += '</tr>';
        }

        const navHTML = `
        <div style="border: 1px solid ${indepGray}; border-radius: 2px; margin-bottom: 20px; box-shadow: 0 1px 2px rgba(0,0,0,0.1); background-color: #fff; overflow: hidden; font-family: sans-serif;">
            <div style="background-color: ${indepGray}; padding: 12px 15px; text-align: center; display: flex; align-items: center; justify-content: center; gap: 12px; color: #fff;">
                <div style="display: inline-flex; align-items: center; gap: 8px; border: 1px solid rgba(255,255,255,0.7); padding: 4px 10px 4px 6px; border-radius: 2px;">
                    <div style="background-color: #1A365D; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 1px solid #fff; box-shadow: 0 0 2px rgba(0,0,0,0.3);">
                        <div style="background-color: #FFD700; width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 0.65em; color: #333; box-shadow: 0 0 2px rgba(255,215,0,0.8); letter-spacing: -1px;">
                            자치
                        </div>
                    </div>
                    <div style="text-align: left; line-height: 1.2; padding-left: 6px; border-left: 1px solid rgba(255,255,255,0.7);">
                        <div style="font-size: 0.8em; font-weight: bold; letter-spacing: -0.5px;">무소속</div>
                        <div style="font-size: 1.1em; font-weight: 900; letter-spacing: -0.5px;">민선 ${data.term}기 기초자치단체장</div>
                    </div>
                </div>
            </div>
            <details class="wiki-folder" open="" style="margin: 0; border: none;">
                <summary class="wiki-folder-summary" style="border: none; border-bottom: 1px solid ${borderColor}; background-color: #fff; padding: 8px; font-weight: bold; text-align: center; cursor: pointer; color: #333; list-style: none;">[ 펼치기 · 접기 ]</summary>
                <div class="wiki-folder-content" style="padding: 0;">
                    <table style="width: 100%; border-collapse: collapse; text-align: center; font-size: 0.9em; table-layout: fixed; margin: 0;">
                        <tbody>
                            ${tableRowsHTML}
                            <tr>
                                <td colspan="5" style="background-color: ${indepGray}; color: #fff; padding: 8px; border: 1px solid ${indepGray}; font-weight: bold; text-align: center; font-size: 0.85em; word-break: keep-all;">
                                    ${data.footer}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </details>
        </div>
        `;
        
        container.innerHTML = navHTML;
    });
});