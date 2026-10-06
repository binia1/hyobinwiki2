import glob
import os
from bs4 import BeautifulSoup


def batch_upgrade_infoboxes():
  # 현재 폴더의 모든 HTML 파일 검색
  html_files = glob.glob("*.html")
  success_count = 0

  print(
      f"총 {len(html_files)}개의 HTML 파일을 감지했습니다. 인포박스 일괄 개편을"
      " 시작합니다...\n"
  )

  for file_path in html_files:
    with open(file_path, "r", encoding="utf-8") as f:
      soup = BeautifulSoup(f.read(), "html.parser")

    # 1. 기존 인포박스 찾기 (<aside class="infobox"> 또는 구형 테이블 형태)
    old_infobox = soup.find("aside", class_="infobox") or soup.find(
        "table",
        style=lambda x: x and ("float: right" in x or "max-width: 430px" in x),
    )

    if not old_infobox:
      continue  # 인포박스가 없는 문서는 건너뜁니다.

    # 2. 기존 인포박스 내부의 행(tr 데이터)을 추출하여 데이터 유실 방지
    inner_table = old_infobox.find("table")
    if inner_table:
      rows_html = "".join([str(tr) for tr in inner_table.find_all("tr")])
    else:
      rows_html = "".join([str(tr) for tr in old_infobox.find_all("tr")])

    # 3. 파일 이름에서 지역명 추출 (예: "북구(효빈).html" -> "북구")
    base_name = os.path.basename(file_path)
    region_name = base_name.split(".")[0].split("(")[0].strip()

    # 4. 덕빈남도/북구 스타일의 통일된 깔끔한 테이블 인포박스 템플릿
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
                            <img alt="{region_name} 로고" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';" src="이미지/{region_name}.webp" style="max-height: 100%; object-fit: contain;"/>
                            <span style="display:none; font-size:10px; color:#aaa; font-weight:bold;">{region_name}<br>LOGO</span>
                        </div>
                        <div style="text-align: left; line-height: 1.2;">
                            <strong style="font-size: 1.4em; color: #111;">{region_name}</strong><br/>
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
                    <img alt="{region_name}청" onerror="this.style.display='none'" src="이미지/{region_name}청.webp" style="max-width:100%; margin: 0 auto; display:block;"/>
                </td>
            </tr>
            <!-- 기존 지역별 고유 데이터 행들 안전 삽입 -->
            {rows_html}
        </tbody>
        </table>
        """

    # 5. 기존 인포박스를 새 인포박스로 교체
    new_soup_fragment = BeautifulSoup(new_infobox_html, "html.parser")
    old_infobox.replace_with(new_soup_fragment)

    # 6. 파일 덮어쓰기 저장
    with open(file_path, "w", encoding="utf-8") as f:
      f.write(str(soup))

    print(
        f"[성공] {region_name} ({base_name}) 인포박스 스타일 일괄 개편 완료!"
    )
    success_count += 1

  print(
      f"\n✨ 작업 완료! 총 {success_count}개 지역의 인포박스가 깔끔하게"
      " 리팩터링되었습니다."
  )


if __name__ == "__main__":
  batch_upgrade_infoboxes()