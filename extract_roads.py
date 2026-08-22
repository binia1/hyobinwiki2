import json
import os
from bs4 import BeautifulSoup

def extract_wiki_navboxes_to_separate_js(html_file_path, output_dir):
    # 결과물을 저장할 폴더 생성 (없으면 생성)
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    with open(html_file_path, 'r', encoding='utf-8') as f:
        html_content = f.read()

    soup = BeautifulSoup(html_content, 'html.parser')
    navboxes = soup.find_all('div', class_='wiki-navbox')
    
    count = 0

    for navbox in navboxes:
        header = navbox.find('div', class_='wiki-navbox-header')
        if not header:
            continue
            
        title_sub = header.find('div', class_='title-sub').text.strip()
        title_main = header.find('div', class_='title-main').text.strip()
        
        style = header.get('style', '')
        color = ""
        if "background-color" in style:
            color = style.split('background-color:')[1].split(';')[0].strip()

        table = navbox.find('table', class_='wiki-navbox-table')
        roads_data = {}
        
        if table:
            rows = table.find_all('tr')
            for row in rows:
                th = row.find('th')
                td = row.find('td')
                
                if th and td:
                    consonant = th.text.strip()
                    links = []
                    for a_tag in td.find_all('a'):
                        classes = a_tag.get('class', [])
                        link_class = classes[0] if classes else ""
                        links.append({
                            "name": a_tag.text.strip(),
                            "url": a_tag.get('href', ''),
                            "type": link_class
                        })
                    roads_data[consonant] = links

        single_data = {
            "region": title_sub,
            "title": title_main,
            "themeColor": color,
            "roadsByConsonant": roads_data
        }

        # 파일명으로 사용할 수 없거나 띄어쓰기를 언더바로 변경
        safe_filename = f"{title_sub}_{title_main}".replace(" ", "_") + ".js"
        output_js_path = os.path.join(output_dir, safe_filename)

        js_content = "const roadTemplate = " + json.dumps(single_data, ensure_ascii=False, indent=4) + ";\n\n"
        js_content += "export default roadTemplate;\n"

        with open(output_js_path, 'w', encoding='utf-8') as f:
            f.write(js_content)
        
        count += 1

    print(f"✅ 추출 완료! 총 {count}개의 개별 JS 파일이 '{output_dir}' 폴더에 저장되었습니다.")

if __name__ == "__main__":
    # 'js_templates' 라는 폴더 안에 각각의 파일을 생성합니다.
    extract_wiki_navboxes_to_separate_js('도로틀.html', 'js_templates')