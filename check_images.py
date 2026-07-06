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
                    # 외부 링크(http:// 등)나 Base64 데이터는 제외
                    if src.startswith(('http://', 'https://', 'data:')):
                        continue
                        
                    # '이미지/' 폴더 구조 감안: 두 가지 경로를 모두 확인
                    # 1) HTML 문서가 있는 위치 기준 경로
                    html_dir = os.path.dirname(html_file)
                    path_from_html = os.path.normpath(os.path.join(html_dir, src))
                    
                    # 2) 스크립트를 실행한 최상위(루트) 기준 경로 
                    # (예: 하위 폴더의 HTML에서 src="이미지/사진.png"를 호출했을 때 루트의 이미지 폴더를 참조하는 경우)
                    path_from_root = os.path.normpath(os.path.join(directory, src))
                    
                    # 2. 실제 이미지 파일 존재 여부 확인
                    if not (os.path.exists(path_from_html) or os.path.exists(path_from_root)):
                        if html_file not in missing_reports:
                            missing_reports[html_file] = []
                        missing_reports[html_file].append(src)
                        total_missing_count += 1
                        
        except Exception as e:
            print(f"⚠️ 파일을 읽는 중 오류 발생 ({html_file}): {e}")

    # 3. 결과 출력
    if not missing_reports:
        print("✅ 완벽합니다! '이미지/' 폴더 내의 모든 파일이 정상적으로 연결되어 있습니다.")
    else:
        print("🚨 누락된 이미지 파일 목록 🚨")
        print("-" * 50)
        for html_file, missing_imgs in missing_reports.items():
            print(f"📄 문서: {html_file}")
            for img in missing_imgs:
                # 찾을 수 없는 경로 출력
                print(f"   ❌ 찾을 수 없음: {img}")
        print("-" * 50)
        print(f"총 {len(missing_reports)}개의 문서에서 {total_missing_count}개의 이미지가 누락되었습니다.")

if __name__ == "__main__":
    # 스크립트가 위치한 폴더를 최상위 폴더로 간주하고 실행
    check_missing_images(".")