import os
import asyncio
from playwright.async_api import async_playwright
from bs4 import BeautifulSoup

async def process_file(page, filename):
    # 로컬 파일을 file:// 경로로 열기
    file_path = f"file://{os.path.abspath(filename)}"
    try:
        await page.goto(file_path)
        
        # networkidle 대신 load 상태까지만 기다림
        await page.wait_for_load_state("load")
        
        # 추가로 0.5초만 더 기다려줘서 스크립트가 DOM을 완전히 그리게 함
        await page.wait_for_timeout(500)
        
        # 렌더링 끝난 HTML 가져오기
        content = await page.content()
        return content
    except Exception as e:
        print(f"오류 발생 ({filename}): {e}")
        return None
async def main():
    report_file = 'final_analysis_report.txt'
    basic_scripts = ["assets/wiki_index.js", "assets/hb_wiki_core.js", "assets/hb_index_scripts.js", "assets/jana.js"]
    
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        
        with open(report_file, 'w', encoding='utf-8') as f:
            f.write("최종 렌더링된 JS 연동 파일 구조 분석 리포트\n\n")
            
            for filename in os.listdir('.'):
                if filename.endswith('.html'):
                    # 1. 커스텀 JS 감지 (파싱 전 1차 필터링)
                    with open(filename, 'r', encoding='utf-8') as hf:
                        soup = BeautifulSoup(hf, 'html.parser')
                    
                    is_custom = False
                    for script in soup.find_all('script'):
                        src = script.get('src')
                        if (src and src not in basic_scripts) or (not src and script.string and script.string.strip()):
                            is_custom = True
                            break
                    
                    if not is_custom:
                        continue
                    
                    print(f"렌더링 및 분석 중: {filename}")
                    
                    # 2. 브라우저로 렌더링 후 HTML 가져오기
                    rendered_html = await process_file(page, filename)
                    
                    # 3. 렌더링된 HTML 파싱
                    soup = BeautifulSoup(rendered_html, 'html.parser')
                    
                    f.write(f"--- 파일: {filename} (렌더링 완료) ---\n")
                    for tag in soup.find_all(['header', 'main', 'section', 'nav', 'div']):
                        if tag.name == 'div' and not (tag.get('id') or tag.get('class')):
                            continue
                        tag_id = tag.get('id', '')
                        tag_class = " ".join(tag.get('class', []))
                        f.write(f"[{tag.name.upper()}] ID: {tag_id} | Class: {tag_class}\n")
                    f.write("\n")
        
        await browser.close()
    
    print(f"\n모든 작업이 완료되었습니다. 결과 파일: {report_file}")

if __name__ == "__main__":
    asyncio.run(main())