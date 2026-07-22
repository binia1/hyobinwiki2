import os
import glob
import re
import pandas as pd

def extract_font_sizes_from_css(css_text, file_name, is_inline=False):
    """CSS 텍스트에서 font-size 속성만 추출합니다."""
    extracted = []
    
    # 1. 인라인 스타일인 경우 (style="...")
    if is_inline:
        # 인라인 스타일 텍스트에서 속성 추출
        for p_match in re.finditer(r'([a-zA-Z0-9_-]+)\s*:\s*([^;}]+)(?:;|$)', css_text):
            prop = p_match.group(1).strip().lower()
            if prop == 'font-size' or prop == 'font':
                extracted.append({
                    "파일 이름": file_name,
                    "적용 위치": "HTML 인라인 태그 (style=...)",
                    "선택자 (Selector)": "인라인 적용",
                    "속성": prop,
                    "값 (Size)": p_match.group(2).strip()
                })
        return extracted

    # 2. 일반 CSS 및 <style> 태그인 경우
    # 방해되는 CSS 주석 제거
    css_text = re.sub(r'/\*.*?\*/', '', css_text, flags=re.DOTALL)
    
    # @media 쿼리 처리
    media_pattern = re.compile(r'(@media[^{]+)\{((?:[^{}]*\{[^{}]*\}[^{}]*)*)\}')
    
    for media_match in media_pattern.finditer(css_text):
        media_cond = media_match.group(1).strip()
        inner_css = media_match.group(2)
        
        for sel, props in re.findall(r'([^{}]+)\{([^{}]+)\}', inner_css):
            selector = sel.strip().replace('\n', ' ')
            if not selector or selector.startswith('@'): continue
            
            for p_match in re.finditer(r'([a-zA-Z0-9_-]+)\s*:\s*([^;}]+)(?:;|$)', props):
                prop = p_match.group(1).strip().lower()
                # font-size 또는 font 단축 속성만 추출
                if prop == 'font-size' or prop == 'font':
                    extracted.append({
                        "파일 이름": file_name,
                        "적용 위치": f"반응형 ({media_cond})",
                        "선택자 (Selector)": selector,
                        "속성": prop,
                        "값 (Size)": p_match.group(2).strip()
                    })
                    
    # 파싱 완료된 미디어 쿼리 삭제
    css_text = media_pattern.sub('', css_text)
    
    # 남은 일반 CSS 블록 처리
    for sel, props in re.findall(r'([^{}]+)\{([^{}]+)\}', css_text):
        selector = sel.strip().replace('\n', ' ')
        if not selector or selector.startswith('@'): continue
        
        for p_match in re.finditer(r'([a-zA-Z0-9_-]+)\s*:\s*([^;}]+)(?:;|$)', props):
            prop = p_match.group(1).strip().lower()
            if prop == 'font-size' or prop == 'font':
                extracted.append({
                    "파일 이름": file_name,
                    "적용 위치": "일반 스타일",
                    "선택자 (Selector)": selector,
                    "속성": prop,
                    "값 (Size)": p_match.group(2).strip()
                })
                
    return extracted

def analyze_all_font_sizes(wiki_folder_path):
    all_parsed_data = []
    
    # 하위 폴더의 모든 html, css 파일 검색
    target_files = glob.glob(os.path.join(wiki_folder_path, "**/*.html"), recursive=True)
    target_files += glob.glob(os.path.join(wiki_folder_path, "**/*.css"), recursive=True)
    
    print(f"📁 총 {len(target_files)}개 문서에서 폰트 크기(font-size) 조사를 시작합니다...")
    
    for idx, file_path in enumerate(target_files):
        file_name = os.path.basename(file_path)
        try:
            with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
                content = f.read()
                
            if file_path.endswith('.html'):
                # 1. <style> 태그 안의 내용 추출
                styles = re.findall(r'<style[^>]*>(.*?)</style>', content, re.DOTALL | re.IGNORECASE)
                for style_content in styles:
                    if style_content.strip():
                        all_parsed_data.extend(extract_font_sizes_from_css(style_content, file_name))
                
                # 2. 인라인 style 속성 추출 (예: <div style="font-size: 12px;">)
                inline_styles = re.findall(r'style\s*=\s*["\']([^"\']+)["\']', content, re.IGNORECASE)
                for inline_content in inline_styles:
                    if 'font' in inline_content.lower():
                        all_parsed_data.extend(extract_font_sizes_from_css(inline_content, file_name, is_inline=True))
                        
            elif file_path.endswith('.css'):
                if content.strip():
                    all_parsed_data.extend(extract_font_sizes_from_css(content, file_name))
                    
        except Exception as e:
            print(f"⚠️ 오류 ({file_name}): {e}")
            
        if (idx + 1) % 500 == 0:
            print(f"   ... {idx + 1}개 문서 파싱 완료")
            
    # DataFrame 생성
    df_all = pd.DataFrame(all_parsed_data)
    
    # 데이터가 없을 경우 처리
    if df_all.empty:
        print("📭 font-size 속성을 찾지 못했습니다.")
        return None
        
    # 중복 제거 및 정렬
    df_unique = df_all.drop_duplicates().copy()
    df_unique.sort_values(by=["값 (Size)", "파일 이름", "선택자 (Selector)"], inplace=True)
    
    return df_unique

# ==========================================
# 실행 부분
# ==========================================
wiki_path = "."  # 현재 폴더 (원하는 경로로 수정 가능)

df_result = analyze_all_font_sizes(wiki_path)

if df_result is not None:
    # --- 통계 요약 (어떤 크기가 제일 많이 쓰였는지) ---
    print("\n=== 📊 [폰트 크기(font-size) 사용 통계] ===")
    summary = df_result.groupby("값 (Size)").size().reset_index(name="사용 횟수")
    summary = summary.sort_values(by="사용 횟수", ascending=False)
    print(summary.head(10).to_string(index=False)) # 상위 10개 출력
    print("...")
    
    # --- 엑셀 파일 저장 ---
    excel_filename = "효빈위키_폰트크기_추출결과.xlsx"
    print(f"\n📦 파싱된 데이터를 엑셀 파일({excel_filename})로 저장합니다...")

    with pd.ExcelWriter(excel_filename, engine='openpyxl') as writer:
        summary.to_excel(writer, sheet_name="1_크기별_통계", index=False)
        df_result.to_excel(writer, sheet_name="2_전체_상세목록", index=False)

    print("🎉 모든 작업이 성공적으로 완료되었습니다!")