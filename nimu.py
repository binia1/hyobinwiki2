import pandas as pd
from io import StringIO
import re

# 천주시 데이터를 그대로 복사해옵니다. (시장님이 주신 엑셀 표)
cheonju_data = """행정표준코드	광역단체	시군구	행정동/읍면	한자명	영어명	인구	하위 행정구역	소재지(행정복지센터/읍면사무소)	면적	인구밀도	국회의원 선거구	국회의원 당선인 (정당/선수)	도의원 선거구	도의원 당선인 (정당/선수)	기초의원 선거구	지역구 기초의원 (정당/선수)	관할 법정구역(법정동/리) 개수	관할법정동리
7811011106	덕빈북도	천주시 궁하구	아이1동	啞異1洞	Ai 1(il)-dong	23,222명	51통 229반	아이로 22	3.4㎢	6,830.0명/㎢	천주시 을	하성민 (더불어민주당/재선)	천주 2	강현서 (더불어민주당/재선)	천주시 라	최하은(민주), 임기안(민주)	1개	아이동(일부)
7811011107	덕빈북도	천주시 궁하구	아이2동	啞異2洞	Ai 2(i)-dong	43,111명	95통 427반	아이대로 100	3.0㎢	14,370.3명/㎢	천주시 을	하성민 (더불어민주당/재선)	천주 3	윤소희 (더불어민주당/초선)	천주시 마	강동현(민주), 조민수(민주), 오수연(무소속)	1개	아이동(일부)
7811021101	덕빈북도	천주시 천성구	관아동	官衙洞	Gwana-dong	4,431명	10통 45반	관아길 12	2.3㎢	1,926.5명/㎢	천주시 갑	고규미 (더불어민주당/초선)	천주 6	고우진 (더불어민주당/재선)	천주시 자	안동민(민주), 민은수(조국)	1개	관아동
7811021102	덕빈북도	천주시 천성구	대뢰1동	大牢1洞	Daeroe 1(il)-dong	6,711명	15통 67반	대뢰로 15	0.6㎢	11,185.0명/㎢	천주시 갑	고규미 (더불어민주당/초선)	천주 7	박세인 (진보당/초선)	천주시 차	전성태(민주), 홍태현(민주), 유우택(민주)	1개	대뢰동(일부)
7811021103	덕빈북도	천주시 천성구	대뢰2동	大牢2洞	Daeroe 2(i)-dong	20,021명	44통 198반	대뢰로 55	1.2㎢	16,684.2명/㎢	천주시 갑	고규미 (더불어민주당/초선)	천주 7	박세인 (진보당/초선)	천주시 차	전성태(민주), 홍태현(민주), 유우택(민주)	1개	대뢰동(일부)
7811021104	덕빈북도	천주시 천성구	대뢰3동	大牢3洞	Daeroe 3(sam)-dong	30,200명	67통 301반	대뢰로 100	2.7㎢	11,185.2명/㎢	천주시 갑	고규미 (더불어민주당/초선)	천주 7	박세인 (진보당/초선)	천주시 차	전성태(민주), 홍태현(민주), 유우택(민주)	1개	대뢰동(일부)
7811021105	덕빈북도	천주시 천성구	마야동	麻弥洞	Maya-dong	12,322명	27통 121반	마야로 8	4.5㎢	2,738.2명/㎢	천주시 갑	고규미 (더불어민주당/초선)	천주 5	이가은 (더불어민주당/초선)	천주시 사	오우진(민주), 서태현(민주), 신진우(무소속)	1개	마야동
7811021106	덕빈북도	천주시 천성구	복주동	福珠洞	Bokju-dong	23,132명	51통 229반	복주로 22	5.2㎢	4,448.5명/㎢	천주시 갑	고규미 (더불어민주당/초선)	천주 8	강수안 (더불어민주당/재선)	천주시 카	고준호(민주), 문동건(민주), 백지환(민주)	1개	복주동
7811022501	덕빈북도	천주시 천성구	인자읍	燐子邑	Inja-eup	23,002명	104행정리 540반	인자로 100	24.3㎢	946.6명/㎢	천주시 갑	고규미 (더불어민주당/초선)	천주 6	고우진 (더불어민주당/재선)	천주시 아	권상훈(민주), 황영식(민주)	8개	인자리 외 7
7811021114	덕빈북도	천주시 천성구	천성동	千聖洞	Cheonseong-dong	34,881명	77통 346반	천성대로 1	16.8㎢	2,076.3명/㎢	천주시 갑	고규미 (더불어민주당/초선)	천주 5	이가은 (더불어민주당/초선)	천주시 사	오우진(민주), 서태현(민주), 신진우(무소속)	1개	천성동
7811021115	덕빈북도	천주시 천성구	팔호동	八湖洞	Palho-dong	22,002명	48통 216반	팔호로 30	6.4㎢	3,437.8명/㎢	천주시 갑	고규미 (더불어민주당/초선)	천주 9	오가영 (더불어민주당/초선)	천주시 타	손본석(민주), 배성훈(민주), 서유민(진보)	1개	팔호동
7811023101	덕빈북도	천주시 천성구	백로면	白鷺面	Baekro-myeon	2,322명	10행정리 52반	백로길 10	58.3㎢	39.8명/㎢	천주시 갑	고규미 (더불어민주당/초선)	천주 5	이가은 (더불어민주당/초선)	천주시 사	오우진(민주), 서태현(민주), 신진우(무소속)	5개	백로리 외 4
7811023102	덕빈북도	천주시 천성구	엽월면	葉月面	Yeobwol-myeon	6,422명	29행정리 150반	엽월로 44	35.5㎢	180.9명/㎢	천주시 갑	고규미 (더불어민주당/초선)	천주 6	고우진 (더불어민주당/재선)	천주시 아	권상훈(민주), 황영식(민주)	7개	엽월리 외 6
"""

def get_party_badge(party_str):
    if not party_str or pd.isna(party_str): return ""
    if '민주' in party_str: return f'<span class="bg-[#004EA2] text-white px-1.5 py-0.5 rounded text-[10px] font-bold">더불어민주당</span>'
    elif '국민의힘' in party_str or '국힘' in party_str: return f'<span class="bg-[#e61e2b] text-white px-1.5 py-0.5 rounded text-[10px] font-bold">국민의힘</span>'
    elif '진보' in party_str: return f'<span class="bg-[#d6001c] text-white px-1.5 py-0.5 rounded text-[10px] font-bold">진보당</span>'
    elif '조국혁신당' in party_str or '조국' in party_str: return f'<span class="bg-[#0073CF] text-white px-1.5 py-0.5 rounded text-[10px] font-bold">조국혁신당</span>'
    else: return f'<span class="bg-[#999999] text-white px-1.5 py-0.5 rounded text-[10px] font-bold">{party_str.split("/")[0] if "/" in party_str else party_str}</span>'

def parse_politician(raw_str):
    if pd.isna(raw_str) or not str(raw_str).strip(): return ""
    match = re.match(r'(.*?)\s*\((.*?)/(.*?)\)', str(raw_str))
    if match:
        name, party, term = match.groups()
        badge = get_party_badge(party)
        return f'<tr><td class="w-[45%] border-r border-b border-[var(--wiki-border)] p-1">{badge}</td><td class="w-[55%] border-b border-[var(--wiki-border)] p-1 font-bold text-xs">{name.strip()} <span class="text-[9px] font-normal text-gray-600">({term.strip()})</span></td></tr>'
    return f'<tr><td colspan="2" class="p-1 font-bold text-xs">{raw_str}</td></tr>'

df = pd.read_csv(StringIO(cheonju_data), sep='\t')

with open('천주시_수작업용_인포박스.txt', 'w', encoding='utf-8') as f:
    for _, row in df.iterrows():
        dong = row['행정동/읍면']
        sigungu = str(row['시군구']).split()[-1]
        
        rep_local_raw = str(row['지역구 기초의원 (정당/선수)'])
        rep_local_html = "".join([parse_politician(l.strip()) for l in rep_local_raw.split(',')] if rep_local_raw.lower() != 'nan' else [])

        infobox_html = f"""
<!-- {dong} 인포박스 복사본 -->
<aside class="infobox" style="border: 2px solid #8B4993;">
    <div class="infobox-header" style="background-color: #8B4993; color: white; padding: 8px; text-align: center; font-weight: bold; font-size: 1.1em;">
        덕빈북도 {sigungu} 행정구역<br>{dong}<br>
        <span style="font-size:0.6em">{row['영어명']} | {row['한자명']}</span>
    </div>
    <table class="w-full text-sm border-collapse m-0 table-fixed">
        <colgroup><col style="width: 35%;"/><col style="width: 65%;"/></colgroup>
        <tbody>
            <tr>
                <td colspan="2" style="padding:0;">
                    <div style="width: 100%; height: 250px; overflow: hidden; position: relative; border-bottom: 1px solid var(--wiki-border);">
                        <iframe src="https://binia1.github.io/mymap/" style="width: 160%; height: 160%; border: none; position: absolute; top: 0; left: 0; transform: scale(0.625); transform-origin: 0 0;"></iframe>
                    </div>
                </td>
            </tr>
            <tr><th>광역자치단체</th><td><a class="wiki-link" href="덕빈북도.html">덕빈북도</a></td></tr>
            <tr><th>기초자치단체</th><td><a class="wiki-link" href="{sigungu}.html">{sigungu}</a></td></tr>
            <tr><th>행정표준코드</th><td class="font-bold text-xs">{row['행정표준코드']}</td></tr>
            <tr><th>관할 법정구역</th><td class="text-xs">{row['관할법정동리']}</td></tr>
            <tr><th>하위 행정구역</th><td class="text-xs">{row['하위 행정구역']}</td></tr>
            <tr><th>면적</th><td>{row['면적']}</td></tr>
            <tr><th>인구</th><td>{row['인구']}</td></tr>
            <tr><th>인구밀도</th><td>{row['인구밀도']}</td></tr>
            <tr>
                <th class="align-middle">정치</th>
                <td class="p-0 border-0">
                    <table class="w-full m-0 border-none table-fixed text-center">
                        <tbody>
                            <tr><td class="bg-[#333] text-white font-bold py-1 border-b text-[11px]" colspan="2">국회의원 | {row['국회의원 선거구']}</td></tr>
                            {parse_politician(row['국회의원 당선인 (정당/선수)'])}
                            <tr><td class="bg-[#555] text-white font-bold py-1 border-b text-[11px]" colspan="2">광역의원 | {row['도의원 선거구']}</td></tr>
                            {parse_politician(row['도의원 당선인 (정당/선수)'])}
                            <tr><td class="bg-[#777] text-white font-bold py-1 border-b text-[11px]" colspan="2">기초의원 | {row['기초의원 선거구']}</td></tr>
                            {rep_local_html}
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr><th>소재지</th><td class="text-xs text-left pl-2">{row['소재지(행정복지센터/읍면사무소)']}</td></tr>
        </tbody>
    </table>
</aside>
<div style="clear: right; margin-bottom: 20px;"></div>
"""
        f.write(infobox_html + "\n\n")

print("천주시 전용 인포박스 템플릿(천주시_수작업용_인포박스.txt) 생성 완료!")