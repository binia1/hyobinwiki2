import json
import os
import re
from collections import defaultdict

def extract_json_block(text, start_idx, start_char='{', end_char='}'):
    idx = text.find(start_char, start_idx)
    if idx == -1: return None, -1, -1
    depth = 0
    in_string = False
    escape = False
    for i in range(idx, len(text)):
        char = text[i]
        if escape: escape = False; continue
        if char == '\\': escape = True; continue
        if char == '"': in_string = not in_string; continue
        if not in_string:
            if char == start_char: depth += 1
            elif char == end_char:
                depth -= 1
                if depth == 0: return text[idx:i+1], idx, i
    return None, -1, -1

def deep_analyze_duplicates(input_file, output_report_file):
    if not os.path.exists(input_file):
        print(f"오류: {input_file} 파일을 찾을 수 없습니다.")
        return

    with open(input_file, 'r', encoding='utf-8') as f:
        content = f.read()

    alias_idx = content.find("window.HB_WIKI_ALIASES")
    if alias_idx == -1:
        print("ALIASES 데이터를 찾을 수 없습니다.")
        return

    aliases_raw, _, _ = extract_json_block(content, alias_idx, '{', '}')

    # 주석 및 불필요한 쉼표 제거
    aliases_clean = re.sub(r'/\*[\s\S]*?\*/', '', aliases_raw)
    aliases_clean = re.sub(r'(?<!:)//.*', '', aliases_clean)
    aliases_clean = re.sub(r',\s*([\]}])', r'\1', aliases_clean)

    # 딕셔너리로 바로 덮어쓰지 않고, 모든 (키, 값) 쌍을 리스트로 수집하는 특수 함수
    def catch_all_pairs(ordered_pairs):
        return ordered_pairs

    try:
        raw_pairs = json.loads(aliases_clean, object_pairs_hook=catch_all_pairs)
    except Exception as e:
        print(f"분석 중 에러: {e}")
        return

    # 키를 기준으로 값들을 그룹화
    key_map = defaultdict(list)
    for k, v in raw_pairs:
        key_map[k].append(v)

    safe_dups = []
    danger_dups = []

    for key, values in key_map.items():
        if len(values) > 1:
            # 중복된 값들의 종류를 확인 (예: ["입희역.html", "입희역.html"] -> 1종류 / ["A.html", "B.html"] -> 2종류)
            unique_values = list(set(values))
            
            if len(unique_values) == 1:
                # 연결된 HTML 파일이 완전히 똑같음 -> 안전한 찌꺼기
                safe_dups.append((key, unique_values[0], len(values)))
            else:
                # 이름은 같은데 연결된 HTML이 다름 -> 링크 마비 위험!
                danger_dups.append((key, unique_values))

    # 리포트 작성
    report = []
    report.append("🚨 ALIASES (단축어) 초정밀 충돌 분석 리포트 🚨")
    report.append("=" * 55)

    if danger_dups:
        report.append(f"\n❌ [위험한 충돌] {len(danger_dups)}건 발견!! (수동 수정 권장)")
        report.append("설명: 같은 이름에 서로 다른 HTML 파일이 연결되어 있습니다. 이대로 두면 하나가 무작위로 삭제되어 링크가 깨집니다.\n")
        for key, vals in danger_dups:
            report.append(f" ⚠️ 단축어 '{key}'가 다음 여러 파일에 동시에 연결되어 있습니다:")
            for v in vals:
                report.append(f"    👉 {v}")
    else:
        report.append("\n✅ [위험한 충돌 없음]")
        report.append("설명: 연결된 파일이 달라서 링크가 마비될 위험이 있는 항목은 단 하나도 없습니다! 안심하셔도 됩니다.")

    report.append("\n" + "-" * 55)
    
    if safe_dups:
        report.append(f"\n🟢 [안전한 중복] {len(safe_dups)}건 발견")
        report.append("설명: 제목과 HTML 파일이 100% 똑같이 여러 번 복사된 단순 찌꺼기입니다. 파이썬 정렬 코드를 돌리면 알아서 깔끔하게 1개로 합쳐집니다.\n")
        for key, val, count in safe_dups:
            report.append(f"  - '{key}': '{val}' (총 {count}번 작성됨)")
    else:
        report.append("\n🟢 [안전한 중복] 발견되지 않음.")

    # 텍스트 파일로 저장
    with open(output_report_file, 'w', encoding='utf-8') as f:
        f.write("\n".join(report))
        
    print("✅ 정밀 분석 완료! 터미널 대신 'danger_report.txt' 파일에 결과를 저장했습니다.")
    print("파일을 열어서 ❌ [위험한 충돌] 항목이 있는지 확인해 보세요!")

# 실행
deep_analyze_duplicates('wiki_index.js', 'danger_report.txt')