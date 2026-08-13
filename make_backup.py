import os
import shutil

def create_new_backup(root_dir="."):
    print("💾 [새로운 세이브 포인트 생성] 현재 완벽한 상태를 백업합니다...")
    backup_count = 0

    for dirpath, _, filenames in os.walk(root_dir):
        # js 폴더 안의 파일들은 백업할 필요 없으니 패스
        if 'js' in dirpath.split(os.sep):
            continue

        for filename in filenames:
            # 오직 .html 파일만 찾아서 덮어쓰기 백업 진행
            if filename.endswith(".html"):
                filepath = os.path.join(dirpath, filename)
                backup_path = filepath + ".bak"

                # 기존의 낡은 .bak 파일을 지우고 현재의 완벽한 상태로 덮어쓰기!
                shutil.copy2(filepath, backup_path)
                print(f"  └─ ✅ [세이브 완료] {filename} -> 최신 상태로 백업됨")
                backup_count += 1

    print(f"\n🎉 총 {backup_count}개의 파일이 새로운 세이브 포인트(.bak)로 저장되었습니다!")
    print("이제 안심하고 다음 작업(학교 분리 스크립트)을 맘껏 돌리셔도 됩니다!")

if __name__ == "__main__":
    create_new_backup()