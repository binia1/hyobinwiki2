import os
import shutil

def restore_originals(root_dir="."):
    print("🚑 긴급 복구: .bak 파일을 찐 순정 원본 .html로 롤백합니다...")
    
    restored_count = 0
    
    for dirpath, _, filenames in os.walk(root_dir):
        for filename in filenames:
            # .bak 파일만 찾기
            if filename.endswith(".bak"):
                bak_path = os.path.join(dirpath, filename)
                
                # .bak 글자를 떼어내서 원래 html 파일 이름 만들기
                original_html_path = bak_path[:-4]
                
                # 반쯤 꼬인 html을 순정 .bak 파일 내용으로 강력하게 덮어쓰기
                shutil.copy2(bak_path, original_html_path)
                print(f"✅ 롤백 완료: {original_html_path} (순정 원본 부활)")
                restored_count += 1
                
    print(f"\n🎉 휴... 총 {restored_count}개의 파일이 꼬이기 전 찐 원본으로 복구되었습니다!")

if __name__ == "__main__":
    restore_originals()