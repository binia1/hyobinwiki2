import os
from bs4 import BeautifulSoup

def replace_placeholders_with_local_links(directory):
    # 타겟이 될 플레이스홀더 도메인 목록
    target_domains = ['placehold.co', 'via.placeholder.com', 'dummyimage.com']
    
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.html'):
                filepath = os.path.join(root, file)
                
                with open(filepath, 'r', encoding='utf-8') as f:
                    soup = BeautifulSoup(f, 'html.parser')

                is_modified = False
                
                # 모든 img 태그 검사
                for img in soup.find_all('img'):
                    src = img.get('src', '')
                    onerror_attr = img.get('onerror', '')
                    alt_text = img.get('alt', '').strip()
                    
                    # 1. src 속성에 쓸데없는 플레이스홀더 도메인이 들어있다면 교체
                    if any(domain in src for domain in target_domains):
                        korean_name = alt_text if alt_text else "이름없음"
                        # 강제로 올바른 이미지 경로로 교체 (webp 확장자 적용)
                        img['src'] = f"이미지/{korean_name}.webp"
                        is_modified = True
                    
                    # 2. onerror 속성에 플레이스홀더 도메인이 숨어있다면 속성 자체를 삭제 (원인 해결)
                    if any(domain in onerror_attr for domain in target_domains):
                        del img['onerror']
                        is_modified = True
                        
                # 수정된 사항이 있다면 원본 덮어쓰기
                if is_modified:
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(str(soup))
                    print(f"🔄 교체 및 정리 완료: {filepath}")

if __name__ == "__main__":
    # 스크립트를 실행하는 현재 폴더를 기준으로 모두 탐색합니다.
    target_dir = './' 
    print("플레이스홀더를 로컬 이미지 경로로 교체하고 onerror 속성을 제거합니다...")
    replace_placeholders_with_local_links(target_dir)
    print("✨ 모든 교체 작업이 끝났습니다.")