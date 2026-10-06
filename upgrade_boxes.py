import glob
import os
from bs4 import BeautifulSoup

# 사용자가 지정한 정확한 자치단체 지역 목록
TARGET_REGIONS = [
    "낙주시",
    "덕주시",
    "조전구",
    "덕산구",
    "방산시",
    "마진시",
    "운진군",
    "매산군",
    "매성시",
    "비천시",
    "석창군",
    "하정시",
    "관수군",
    "분주군",
    "곡천군",
    "인곡군",
    "원안군",
    "두원군",
    "고포군",
    "서해시",
    "장기구",
    "약산시",
    "가원구",
    "천성구",
    "강주시",
    "천주시",
    "궁하구",
    "군천시",
    "빈주시",
    "빈성구",
    "계성시",
    "낭원군",
    "서진시",
    "전산시",
    "기도군",
    "선곡군",
    "덕현군",
    "상안군",
    "저천군",
    "반양군",
    "치원군",
    "모제군",
    "청엽구",
    "안천구",
    "남구",
    "창전구",
    "서구",
    "탄성군",
    "동구",
    "중구",
]


def safe_batch_update():
  html_files = glob.glob("*.html")
  success_count = 0

  print("지역 메인 문서만 정확히 선별하여 인포박스 개편을 시작합니다...\n")

  for file_path in html_files:
    filename = os.path.basename(file_path)
    base_name, ext = os.path.splitext(filename)

    # 괄호 앞의 순수 지역명 추출 (예: "하정시(효빈)" -> "하정시")
    pure_region = base_name.split("(")[0].strip()

    # [핵심 방어 로직] 파일명이 정확히 지역명이거나 '지역명(효빈)'으로 시작하는 메인 문서만 허용
    # "하정시_시내버스.html", "하정시_역사.html" 같은 부속 문자는 철저히 걸러냅니다.
    if pure_region in TARGET_REGIONS and (
        base_name == pure_region or base_name.startswith(pure_region + "(")
    ):
      matched_region = pure_region
    else:
      continue  # 시내버스 문서 등은 절대 건드리지 않고 패스!

    with open(file_path, "r", encoding="utf-8") as f:
      soup = BeautifulSoup(f.read(), "html.parser")

    old_infobox = soup.find("aside", class_="infobox") or soup.find(
        "table",
        style=lambda x: x and ("float: right" in x or "max-width" in x),
    )

    if not old_infobox:
      print(f"[건너뜀] {filename}: 인포박스가 없습니다.")
      continue

    inner_table = old_infobox.find("table")
    if inner_table:
      rows_html = "".join([str(tr) for tr in inner_table.find_all("tr")])
    else:
      rows_html = "".join([str(tr) for tr in old_infobox.find_all("tr")])

    new_infobox_html = f"""
        <table style="border-collapse: collapse; text-align: center; background-color: #ffffff; border: 1px solid #ccc; float: right; max-width: 430px; width: 100%; margin: 0 0 20px 20px; font-family: 'Noto Sans KR', sans-serif; font-size: 13px;">
        <tbody>
            <tr>
                <td colspan="4" style="padding: 8px; font-weight: bold; color: #fff; background-color: #7799CC; border: 1px solid #ccc; font-size: 14px;">
                    효빈광역시 및 지방자치단체
                </td>
            </tr>
            <tr>
                <td colspan="4" style="padding: 12px; border: 1px solid #ccc; background-color: #fff;">
                    <div style="display: flex; align-items: center; justify-content: center; gap: 15px;">
                        <div style="width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; overflow: hidden;">
                            <img alt="{matched_region} 로고" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';" src="이미지/{matched_region}.webp" style="max-height: 100%; object-fit: contain;"/>
                            <span style="display:none; font-size:10px; color:#aaa; font-weight:bold;">{matched_region}<br>LOGO</span>
                        </div>
                        <div style="text-align: left; line-height: 1.2;">
                            <strong style="font-size: 1.4em; color: #111;">{matched_region}</strong><br/>
                            <span style="font-size: 0.85em; color: #555;">Local Government</span>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td colspan="4" style="padding: 0; border: 1px solid #ccc;">
                    <div style="height: 250px; overflow: hidden; position: relative;">
                        <iframe src="https://binia1.github.io/mymap/" style="width: 160%; height: 160%; border: none; position: absolute; top: 0; left: 0; transform: scale(0.625); transform-origin: 0 0;"></iframe>
                    </div>
                </td>
            </tr>
            <tr>
                <td colspan="4" style="padding: 6px; border: 1px solid #ccc; background: white;">
                    <img alt="{matched_region}청" onerror="this.style.display='none'" src="이미지/{matched_region}청.webp" style="max-width:100%; margin: 0 auto; display:block;"/>
                </td>
            </tr>
            {rows_html}
        </tbody>
        </table>
        """

    old_infobox.replace_with(BeautifulSoup(new_infobox_html, "html.parser"))

    with open(file_path, "w", encoding="utf-8") as f:
      f.write(str(soup))

    print(f"[안전 변환 완료] {filename}")
    success_count += 1

  print(
      f"\n✨ 작업 완료! 다른 부속 문서는 건드리지 않고, 오직 지정된 지역 메인"
      f" 문서 {success_count}개만 깔끔하게 개편되었습니다."
  )


if __name__ == "__main__":
  safe_batch_update()