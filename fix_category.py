import glob
import re

# 기존의 빈 category-box가 없던 옛날 패턴도 한 번에 잡히도록 변경
pattern = r'(?:<div class="category-box mb-6"></div>\s*)?<div class="bg-gray-100 p-2 text-sm border mb-4">\s*<span class="font-bold text-\[[^\]]+\]">분류:</span>(.*?)</div>'
replacement = r'<div class="category-box border border-[#ccc] p-3 rounded mb-6">\n  <span class="font-bold text-[#FF5800]">분류:</span>\1\n</div>'

count = 0
for file_path in glob.glob('*.html'):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_content, n = re.subn(pattern, replacement, content, flags=re.DOTALL)
    if n > 0:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"수정됨 ({n}건): {file_path}")
        count += 1

print(f"\n총 {count}개 파일 수정 완료!")