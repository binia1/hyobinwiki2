import os
import glob
import re
import pandas as pd

def categorize_selector(selector, media_query=None):
    """선택자 이름을 분석하여 어떤 용도의 스타일인지 자동 분류합니다."""
    # 소문자로 변환하여 검색 효율성 증가
    sel_lower = selector.lower()
    
    if media_query:
        return "📱 반응형 (@media)"
    elif any(keyword in sel_lower for keyword in ['modal', 'overlay', 'popup']):
        return "🔲 모달/팝업"
    elif any(keyword in sel_lower for keyword in ['guide', 'structure', 'notice', 'recent-changes', 'table']):
        return "📋 안내표/테이블/규정"
    elif any(keyword in sel_lower for keyword in ['btn', 'link', 'cursor', 'hover']):
        return "🔘 버튼/링크/상호작용"
    elif any(keyword in sel_lower for keyword in ['nav', 'header', 'footer', 'logo']):
        return "🧭 네비게이션/헤더"
    elif any(keyword in sel_lower for keyword in ['txt-', 'font-', 'line-', 'word-']):
        return "🔤 텍스트/타이포그래피"
    elif any(keyword in sel_lower for keyword in ['container', 'box', 'body', 'main', 'details']):
        return "📦 레이아웃/컨테이너"
    else:
        return "⚙️ 기타 일반 스타일"

def parse_css_pure_regex(css_text, file_name):
    """cssutils 없이 정규표현식만으로 CSS를 초고속 파싱합니다."""
    extracted = []
    
    # 1. 방해되는 CSS 주석 제거 (/* ... */)
    css_text = re.sub(r'/\*.*?\*/', '', css_text, flags=re.DOTALL)
    
    # 2. @media 쿼리 블록 1차 추출
    # 패턴: @media (조건) { .클래스 { 속성 } }
    media_pattern = re.compile(r'(@media[^{]+)\{((?:[^{}]*\{[^{}]*\}[^{}]*)*)\}')
    
    for media_match in media_pattern.finditer(css_text):
        media_cond = media_match.group(1).strip()
        inner_css = media_match.group(2)
        
        # 미디어 쿼리 내부의 일반 블록 추출
        for sel, props in re.findall(r'([^{}]+)\{([^{}]+)\}', inner_css):
            selector = sel.strip().replace('\n', ' ')
            if not selector or selector.startswith('@'): continue
            cat = categorize_selector(selector, media_cond)
            
            # 속성: 값 추출
            for p_match in re.finditer(r'([a-zA-Z0-9_-]+)\s*:\s*([^;}]+)(?:;|$)', props):
                extracted.append({
                    "Category": cat,
                    "MediaQuery": media_cond,
                    "Selector": selector,
                    "Property": p_match.group(1).strip(),
                    "Value": p_match.group(2).strip(),
                    "FirstFoundFile": file_name
                })
                
    # 3. 파싱 완료된 미디어 쿼리 블록은 원본 텍스트에서 삭제
    css_text = media_pattern.sub('', css_text)
    
    # 4. 남은 일반 CSS 블록 추출
    for sel, props in re.findall(r'([^{}]+)\{([^{}]+)\}', css_text):
        selector = sel.strip().replace('\n', ' ')
        if not selector or selector.startswith('@'): continue
        cat = categorize_selector(selector, None)
        
        for p_match in re.finditer(r'([a-zA-Z0-9_-]+)\s*:\s*([^;}]+)(?:;|$)', props):
            extracted.append({
                "Category": cat,
                "MediaQuery": "General",
                "Selector": selector,
                "Property": p_match.group(1).strip(),
                "Value": p_match.group(2).strip(),
                "FirstFoundFile": file_name
            })
            
    return extracted

def analyze_all_wiki_styles(wiki_folder_path):
    all_parsed_data = []
    
    target_files = glob.glob(os.path.join(wiki_folder_path, "**/*.html"), recursive=True)
    target_files += glob.glob(os.path.join(wiki_folder_path, "**/*.css"), recursive=True)
    
    print(f"📁 총 {len(target_files)}개 문서에서 CSS 고속 파싱을 시작합니다...")
    
    for idx, file_path in enumerate(target_files):
        file_name = os.path.basename(file_path)
        try:
            with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
                content = f.read()
                
                # HTML 파일인 경우 <style> 태그 안쪽만 긁어옴
                if file_path.endswith('.html'):
                    styles = re.findall(r'<style[^>]*>(.*?)</style>', content, re.DOTALL | re.IGNORECASE)
                    css_text = " ".join(styles)
                else:
                    css_text = content
                    
                if not css_text.strip():
                    continue
                
                # 초고속 파싱 함수 호출
                rules = parse_css_pure_regex(css_text, file_name)
                all_parsed_data.extend(rules)
                
        except Exception as e:
            print(f"⚠️ 오류 ({file_name}): {e}")
            
        # 진행 상황 표시 (500개 단위)
        if (idx + 1) % 500 == 0:
            print(f"   ... {idx + 1}개 문서 파싱 완료")
            
    # DataFrame 생성 및 중복 제거
    df_all = pd.DataFrame(all_parsed_data)
    df_unique = df_all.drop_duplicates(subset=["MediaQuery", "Selector", "Property", "Value"]).copy()
    
    # 예쁘게 정렬
    df_unique.sort_values(by=["Category", "MediaQuery", "Selector", "Property"], inplace=True)
    
    return df_unique

# ==========================================
# 실행 부분
# ==========================================
wiki_path = "."  # 현재 폴더 및 하위 폴더 전체에서 찾기

df_result = analyze_all_wiki_styles(wiki_path)

# --- 통계 요약 ---
print("\n=== 📊 [위키 스타일 UI 카테고리별 통계] ===")
summary = df_result.groupby("Category").size().reset_index(name="고유 속성 수")
print(summary.to_string(index=False))

# --- 엑셀 파일 저장 ---
excel_filename = "효빈위키_UI_스타일_자동분류.xlsx"
print(f"\n📦 파싱된 데이터를 엑셀 파일({excel_filename})로 저장합니다...")

with pd.ExcelWriter(excel_filename, engine='openpyxl') as writer:
    # 1. 요약 시트
    summary.to_excel(writer, sheet_name="1_분류_요약", index=False)
    # 2. 전체 상세 데이터 시트
    df_result.to_excel(writer, sheet_name="2_전체_상세목록", index=False)

print("🎉 모든 작업이 성공적으로 완료되었습니다!")