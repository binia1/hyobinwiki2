import csv
import json

# 파일 이름 설정
csv_file_path = 'mcd_data.csv'  # 복붙 시 발생하는 탭(TSV) 형식
js_file_path = 'js/mcdonalds_data.js'

mcdonalds_data = []
search_array = []
url_mapping = {}

try:
    delimiter_char = '\t' if csv_file_path.endswith('.tsv') else ','
    
    with open(csv_file_path, mode='r', encoding='utf-8-sig') as f:
        reader = csv.DictReader(f, delimiter=delimiter_char)
        
        for row_index, row in enumerate(reader, start=1):
            store_id = row.get('지점명', '').strip()
            if not store_id:
                continue
            
            # 날짜 포맷 자연스러운 서술체 변환 (YYYY-MM-DD -> YYYY년 M월 D일)
            raw_date = row.get('개점일', '').strip()
            open_date_kr = raw_date
            if '-' in raw_date:
                try:
                    y, m, d = raw_date.split('-')
                    open_date_kr = f"{y}년 {int(m)}월 {int(d)}일"
                except:
                    pass
                
            # 16개 열 완벽 매핑 (여담, 특이사항 분리)
            store_data = {
                "id": store_id,
                "region": row.get('광역단체', '').strip(),
                "district": row.get('기초단체(구/군)', '').strip(),
                "type": row.get('구분', '').strip(),
                "openDate": open_date_kr,
                "address": row.get('주소', '').strip(),
                "transit": row.get('연계교통', '').strip(),
                "hours": row.get('영업시간', '').strip(),
                "phone": row.get('전화번호', '').strip(),
                "services": row.get('제공 서비스', '').strip(),
                "special": row.get('특이사항', '').strip(), # 특이사항 단독
                "drip": row.get('드립', '').strip(),
                "trivia": row.get('여담', '').strip(), # 여담 단독
                "meme": row.get('씹덕밈(?)', '').strip(),
                "bus": row.get('버스노선', '').strip(),
                "engName": row.get('영어명', '').strip()
            }
            mcdonalds_data.append(store_data)

            display_name = store_id if store_id.endswith("점") else f"{store_id}점"
            full_title = f"맥도날드 {display_name}"
            href_url = f"맥도날드_매장_템플릿.html?store={store_id}"

            search_array.append({
                "title": full_title,
                "href": href_url
            })

            url_mapping[store_id] = href_url
            url_mapping[display_name] = href_url
            url_mapping[full_title] = href_url

    with open(js_file_path, mode='w', encoding='utf-8') as f:
        f.write("// 🍔 1. 맥도날드 매장 통합 데이터베이스\n")
        f.write(f"const mcdonaldsData = {json.dumps(mcdonalds_data, ensure_ascii=False, indent=2)};\n\n")
        f.write("// 🔍 2. 검색창 자동완성용 배열\n")
        f.write(f"const mcdSearchIndex = {json.dumps(search_array, ensure_ascii=False, indent=2)};\n\n")
        f.write("// 🔗 3. 문서 내부 링크 매핑용 객체\n")
        f.write("const mcdUrlMapping = {\n")
        for k, v in url_mapping.items():
            f.write(f'  "{k}": "{v}",\n')
        f.write("};\n")

    print(f"✅ 파싱 성공! 날짜 변환 및 16개 열 분리가 완료된 {len(mcdonalds_data)}개의 매장 데이터가 생성되었습니다.")

except FileNotFoundError:
    print(f"❌ 오류: '{csv_file_path}' 파일을 찾을 수 없습니다.")
except Exception as e:
    print(f"❌ 파싱 중 치명적인 오류 발생: {e}")