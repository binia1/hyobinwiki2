import glob
import os
from bs4 import BeautifulSoup

# 사용자가 직접 지정한 변환 대상 시·군·구 목록
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


def batch_upgrade_target_infoboxes():
  html_files = glob.glob("*.html")
  success_count = 0

  print(
      "지정된 자치단체 문서들만 탐색하여 인포박스 개편을 시작합니다...\n"
  )

  for file_path in html_files:
    filename = os.path.basename(file_path)

    # 파일 이름에 지정한 지역명이 포함되어 있는지 확인 (예: 중구.html, 중구(효빈).html 등 대응)
    matched_region = None
    for region in TARGET_REGIONS:
      if region in filename:
        matched_region = region
        break

    if not matched_region:
      continue  # 목록에 없는 지역 파일은 거들지도 않고 패스합니다!

    with open(file_path, "r", encoding="utf-8") as f:
      soup = BeautifulSoup(f.read(), "html.parser")

    # 1. 기존 인포박스 찾기 (<aside> 또는 기존 <table> 형태)
    old_infobox = soup.find("aside", class_="infobox") or soup.find(
        "table",
        style=lambda x: x and ("float: right" in x or "max-width" in x),
    )

    if not old_infobox:
      print(f"[건너뜀] {filename}: 파일 내에 인포박스가 존재하지 않습니다.")
      continue

    # 2. 기존 인포박스 내부의 행(tr 데이터)을 안전하게 추출
    inner_table = old_infobox.find("table")
    if inner_table:
      rows_html = "".join([str(tr) for tr in inner_table.find_all("tr")])
    else:
      rows_html = "".join([str(tr) for tr in old_infobox.find_all("tr")])

    # 3. 덕빈남도/북구 스타일의 통일된 단단한 테이블 인포박스 구조 생성
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
            <!-- 추출한 기존 고유 데이터 행 삽입 -->
            {rows_html}
        </tbody>
        </table>
        """

    # 4. 기존 인포박스를 새 디자인 구조로 교체 후 저장
    old_infobox.replace_with(BeautifulSoup(new_infobox_html, "html.parser"))

    with open(file_path, "w", encoding="utf-8") as f:
      f.write(str(soup))

    print(f"[성공] '{matched_region}' ({filename}) 인포박스 리팩터링 완료!")
    success_count += 1

  print(
      f"\n✨ 작업 완료! 대상 지역 중 총 {success_count}개 문서의 인포박스가"
      " 깔끔하게 통일되었습니다."
  )


if __name__ == "__main__":
  batch_upgrade_target_infoboxes()