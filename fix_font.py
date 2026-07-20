import glob
import os

# HTML 파일들이 위치한 폴더 경로 (현재 폴더 기준 모든 html 파일)
target_files = "./*.html"

# 찾을 원본 문자열 (현재 nav 클래스)
old_nav_class = 'class="bg-[#7777AA] text-white p-3 flex justify-between items-center shadow-md sticky top-0 z-50"'

# 바꿀 문자열 (font-sans 추가)
new_nav_class = 'class="font-sans bg-[#7777AA] text-white p-3 flex justify-between items-center shadow-md sticky top-0 z-50"'

# 지정한 경로의 모든 HTML 파일 목록 가져오기
html_list = glob.glob(target_files)
modified_count = 0

for file_path in html_list:
    try:
        # 파일 읽기
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read()

        # 원본 문자열이 존재하는지 확인
        if old_nav_class in content:
            # 문자열 교체
            updated_content = content.replace(old_nav_class, new_nav_class)
            
            # 덮어쓰기
            with open(file_path, 'w', encoding='utf-8') as file:
                file.write(updated_content)
            
            print(f"✅ 폰트 수정 완료: {os.path.basename(file_path)}")
            modified_count += 1
        else:
            print(f"⏩ 변경 대상 없음 (또는 이미 수정됨): {os.path.basename(file_path)}")

    except Exception as e:
        print(f"❌ 오류 발생 ({os.path.basename(file_path)}): {e}")

print("-" * 40)
print(f"🎉 총 {modified_count}개의 문서에 font-sans 클래스가 적용되었습니다.")