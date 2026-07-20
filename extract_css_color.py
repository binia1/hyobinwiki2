import os
import glob
import re
from collections import defaultdict
import pandas as pd
import json

def analyze_all_wiki_css(wiki_folder_path):
    master_hex_dict = defaultdict(set)
    detailed_data = []

    target_files = glob.glob(os.path.join(wiki_folder_path, "**/*.html"), recursive=True)
    target_files += glob.glob(os.path.join(wiki_folder_path, "**/*.css"), recursive=True)
    
    print(f"🔍 총 {len(target_files)}개 문서의 분석을 시작합니다... (잠시만 기다려주세요)")

    block_pattern = re.compile(r'([^{]+)\{\s*([^}]+)\s*\}')
    var_pattern = re.compile(r'(--[a-zA-Z0-9_-]+)\s*:\s*([^;]+);')
    short_hex_pattern = re.compile(r'^#[0-9a-f]{3}$')

    for file_path in target_files:
        file_name = os.path.basename(file_path)
        
        try:
            with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
                content = f.read()
                
                if file_path.endswith('.html'):
                    styles = re.findall(r'<style[^>]*>(.*?)</style>', content, re.DOTALL | re.IGNORECASE)
                    css_text = " ".join(styles)
                else:
                    css_text = content  

                if not css_text.strip():
                    continue

                for selector, block_content in block_pattern.findall(css_text):
                    selector = selector.strip()
                    
                    for var_name, val in var_pattern.findall(block_content):
                        val = val.strip().lower()
                        
                        if not val.startswith('#'):
                            continue
                            
                        if short_hex_pattern.match(val):
                            val = '#' + ''.join([c*2 for c in val[1:]])
                            
                        var_name = var_name.strip()
                        
                        master_hex_dict[val].add(var_name)
                        
                        detailed_data.append({
                            "FileName": file_name,
                            "FilePath": file_path,
                            "Selector": selector,
                            "Variable": var_name,
                            "HexCode": val
                        })
                        
        except Exception as e:
            print(f"⚠️ 오류 발생 ({file_name}): {e}")

    sorted_hex_dict = {k: sorted(list(v)) for k, v in sorted(master_hex_dict.items())}
    df_report = pd.DataFrame(detailed_data)
    
    return sorted_hex_dict, df_report

# ==========================================
# 실행 및 엑셀/CSV 파일 추출 부분
# ==========================================
wiki_path = "."  # 현재 폴더 및 하위 폴더 전체에서 찾기
hex_dict, df = analyze_all_wiki_css(wiki_path)

# 1. 딕셔너리 데이터를 엑셀로 보기 쉽게 DataFrame으로 변환
dict_rows = []
for hex_code, var_list in hex_dict.items():
    dict_rows.append({
        "HexCode (색상코드)": hex_code,
        "매핑된 CSS 변수 개수": len(var_list),
        "사용된 CSS 변수명 목록": ", ".join(var_list)
    })
df_dict = pd.DataFrame(dict_rows)

# 2. 엑셀 파일 하나에 멀티 시트로 깔끔하게 저장
excel_filename = "효빈위키_CSS_색상변수_통합분석.xlsx"
json_filename = "효빈위키_CSS_색상사전.json"

print("\n📦 데이터를 파일로 추출하는 중...")

with pd.ExcelWriter(excel_filename, engine='openpyxl') as writer:
    # 시트 1: 색상별로 어떤 변수가 묶여있는지 정리된 통합 사전
    df_dict.to_excel(writer, sheet_name="1_색상별_통합사전", index=False)
    
    # 시트 2: 3만 7천 건에 달하는 파일별/선택자별 전체 파싱 상세 내역
    df.to_excel(writer, sheet_name="2_전체_상세내역(37760건)", index=False)

# 3. 개발/코딩용 JSON 파일도 같이 저장 (필요할 때 복붙용)
with open(json_filename, "w", encoding="utf-8") as f:
    json.dump(hex_dict, f, indent=4, ensure_ascii=False)

# --- 콘솔에는 잘리지 않을 정도의 깔끔한 요약표만 출력 ---
print(f"\n🎉 추출 완료! 아래 파일들이 현재 폴더에 생성되었습니다.")
print(f" 📊 엑셀 파일: [{excel_filename}] (시트 2개로 분할 저장됨)")
print(f" 📜 JSON 파일: [{json_filename}] (코드 백업/개발용)")
print("-" * 50)
print(f"✅ 총 고유 색상 코드 수: {len(df_dict)}개")
print(f"✅ 총 파싱된 변수 선언 건수: {len(df)}건")
print("\n[색상별 통합 사전 미리보기 - 상위 5개만]")
print(df_dict.head(5).to_string(index=False))