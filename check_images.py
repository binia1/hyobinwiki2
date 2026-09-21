import os
import re
import glob

def check_missing_images(directory="."):
    # 1. 디렉토리 내의 모든 HTML 파일을 재귀적으로 찾음
    html_files = glob.glob(os.path.join(directory, "**", "*.html"), recursive=True)
    
    # <img> 태그의 src 속성을 추출하는 정규표현식
    img_pattern = re.compile(r'<img[^>]+src=["\']([^"\']+)["\']', re.IGNORECASE)
    
    missing_reports = {}
    total_html_count = len(html_files)
    total_missing_count = 0

    print(f"🔍 총 {total_html_count}개의 HTML 파일을 검사합니다...\n")

    for html_file in html_files:
        try:
            with open(html_file, 'r', encoding='utf-8') as f:
                content = f.read()
                
                # HTML 파일 내의 모든 이미지 경로 추출
                srcs = img_pattern.findall(content)
                
                for src in srcs:
                    # 외부 링크(http:// 등), Base64 데이터 제외
                    # 추가: 자바스크립트 템플릿 변수(${...})가 포함된 동적 경로 제외
                    if src.startswith(('http://', 'https://', 'data:')) or '${' in src:
                        continue
                        
                    # '이미지/' 폴더 구조 감안: 두 가지 경로를 모두 확인
                    # 1) HTML 문서가 있는 위치 기준 경로
                    html_dir = os.path.dirname(html_file)
                    path_from_html = os.path.normpath(os.path.join(html_dir, src))
                    
                    # 2) 스크립트를 실행한 최상위(루트) 기준 경로 
                    path_from_root = os.path.normpath(os.path.join(directory, src))
                    
                    # 2. 실제 이미지 파일 존재 여부 확인
                    if not (os.path.exists(path_from_html) or os.path.exists(path_from_root)):
                        if html_file not in missing_reports:
                            missing_reports[html_file] = []
                        missing_reports[html_file].append(src)
                        total_missing_count += 1
                        
        except Exception as e:
            print(f"⚠️ 파일을 읽는 중 오류 발생 ({html_file}): {e}")

    # 3. 텍스트 파일로 결과 저장 및 출력
    report_filename = "누락된_이미지_보고서.txt"
    
    with open(report_filename, "w", encoding="utf-8") as report_file:
        if not missing_reports:
            success_msg = "✅ 완벽합니다! '이미지/' 폴더 내의 모든 파일이 정상적으로 연결되어 있습니다.\n"
            print(success_msg)
            report_file.write(success_msg)
        else:
            report_file.write("🚨 누락된 이미지 파일 목록 🚨\n")
            report_file.write("-" * 50 + "\n")
            for html_file, missing_imgs in missing_reports.items():
                report_file.write(f"📄 문서: {html_file}\n")
                for img in missing_imgs:
                    report_file.write(f"   ❌ 찾을 수 없음: {img}\n")
            report_file.write("-" * 50 + "\n")
            
            summary_msg = f"총 {len(missing_reports)}개의 문서에서 {total_missing_count}개의 이미지가 누락되었습니다."
            report_file.write(summary_msg + "\n")
            
            # 터미널에는 요약 메세지만 출력
            print(f"🚨 {total_missing_count}개의 이미지가 누락되었습니다.")
            print(f"📂 상세 결과는 동일한 폴더에 생성된 '{report_filename}' 파일을 열어 확인해주세요!")

if __name__ == "__main__":
    # 스크립트가 위치한 폴더를 최상위 폴더로 간주하고 실행
    check_missing_images(".")