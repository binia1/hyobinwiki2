import json
import os
import re

def extract_json_block(text, start_idx, start_char='{', end_char='}'):
    """괄호의 짝을 정확히 세어서 딱 JSON 블록만 추출하는 정밀 함수"""
    idx = text.find(start_char, start_idx)
    if idx == -1:
        return None, -1, -1
    
    depth = 0
    in_string = False
    escape = False
    
    for i in range(idx, len(text)):
        char = text[i]
        
        if escape:
            escape = False
            continue
        if char == '\\':
            escape = True
            continue
        if char == '"':
            in_string = not in_string
            continue
            
        if not in_string:
            if char == start_char:
                depth += 1
            elif char == end_char:
                depth -= 1
                if depth == 0:
                    return text[idx:i+1], idx, i
    return None, -1, -1

def sort_wiki_js(input_file, output_file):
    if not os.path.exists(input_file):
        print(f"오류: {input_file} 파일을 찾을 수 없습니다.")
        return

    with open(input_file, 'r', encoding='utf-8') as f:
        content = f.read()

    page_marker = "window.HB_WIKI_PAGES"
    alias_marker = "window.HB_WIKI_ALIASES"

    page_idx = content.find(page_marker)
    alias_idx = content.find(alias_marker)

    if page_idx == -1 or alias_idx == -1:
        print("데이터 마커를 찾을 수 없습니다.")
        return

    # 1. 정밀하게 PAGES 배열([]) 부분만 딱 잘라내기
    pages_raw, p_start, p_end = extract_json_block(content, page_idx, '[', ']')
    # 2. 정밀하게 ALIASES 객체({}) 부분만 딱 잘라내기
    aliases_raw, a_start, a_end = extract_json_block(content, alias_idx, '{', '}')

    def clean_and_parse(json_str):
        # 주석 및 꼬리 쉼표 안전하게 제거
        s = re.sub(r'/\*[\s\S]*?\*/', '', json_str)
        s = re.sub(r'(?<!:)//.*', '', s)
        s = re.sub(r',\s*([\]}])', r'\1', s)
        return json.loads(s)

    # 파싱 및 정렬 수행
    try:
        pages_list = clean_and_parse(pages_raw)
        aliases_dict = clean_and_parse(aliases_raw)
    except json.JSONDecodeError as e:
        print(f"❌ 파싱 에러 발생: {e}")
        return

    print(f"📊 [정렬 전 데이터 개수 확인]")
    print(f" - PAGES 항목: {len(pages_list)}개")
    print(f" - ALIASES 항목: {len(aliases_dict)}개 (※ 원본에 중복이 있었다면 여기서 개수가 줄어들 수 있습니다)")

    # 가나다순 정렬
    pages_list.sort(key=lambda x: x.get('title', ''))
    aliases_sorted = dict(sorted(aliases_dict.items()))

    # 다시 문자열로 변환
    new_pages_str = json.dumps(pages_list, ensure_ascii=False, indent=2)
    new_aliases_str = json.dumps(aliases_sorted, ensure_ascii=False, indent=2)

    # 원본 코드의 앞, 중간, 뒤 부분을 그대로 유지하면서 데이터만 교체! (데이터 증발 원천 차단)
    part1 = content[:p_start]                           # PAGES 시작 전까지의 원본
    part2 = content[p_end+1:a_start]                    # PAGES 끝부터 ALIASES 시작 전까지의 원본 (중간 코드)
    part3 = content[a_end+1:]                           # ALIASES 끝부터 파일 맨 끝까지의 원본 (꼬리말 등)

    new_content = part1 + new_pages_str + part2 + new_aliases_str + part3

    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(new_content)
        
    print(f"\n✅ 완벽하게 보존 및 정렬을 마쳤습니다. 결과 파일: {output_file}")

# 실행
sort_wiki_js('wiki_index.js', 'wiki_index_sorted.js')