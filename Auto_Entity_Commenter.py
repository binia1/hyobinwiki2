import os
import json
import glob
import random
from bs4 import BeautifulSoup

TARGET_FOLDER = "./wiki_pages/"
OUTPUT_JSON = "youtube_regionDB.json"

# --- 찰진 템플릿 사전 ---
YT_TITLE_TEMPLATES = [
    "🎥 [{location} 탐방] 여기 안 가보면 후회합니다!",
    "🚨 [현장출동] {location} 인근 민원, 직접 해결하러 갔습니다",
    "[VLOG] {person} 주무관의 피말리는 하루 (feat. {location})",
    "🎤 시민분들께 직접 들었습니다! {region}의 진짜 매력은?",
    "🚌 {region} 교통망 대개편! 앞으로 어떻게 바뀔까?",
    "🔥 요즘 핫하다는 {location}, 저희가 직접 가봤습니다",
    "🍽️ {region} 숨은 맛집 TOP 3 (시장님 단골집 포함)",
    "💡 {region} 시민이라면 무조건 챙겨야 할 혜택 총정리!"
]

SHORTS_TEMPLATES = [
    "1분 안에 보는 {location} 요약 ⏱️",
    "{person} 시장님 제로투 댄스 직캠 ㅋㅋㅋ",
    "{region} 퇴근길 야경 폼 미쳤다 🌃",
    "민원인 레전드 썰 풉니다 #shorts",
    "{location} 주차장 꿀팁 대방출 🚗",
    "이게 {region} 클라스지 ㄷㄷ"
]

def generate_youtube_data_from_html(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f, 'html.parser')

    # 1. 문서 기본 정보 및 전체 텍스트 추출
    title_raw = soup.title.get_text(strip=True) if soup.title else "알 수 없음"
    region_name = title_raw.split('-')[0].strip()
    short_name = region_name.replace("광역시청", "").replace("시청", "").replace("구청", "").replace("군청", "")
    full_text = soup.get_text(separator=" ", strip=True)
    
    # 2. 구조적 텍스트 파싱 (풍성한 재료 확보)
    paragraphs = [p.get_text(strip=True) for p in soup.find_all('p') if len(p.get_text(strip=True)) > 20]
    
    facilities, events, characters, people, locations = [], [], [], [], []
    current_section = ""
    
    for element in soup.find_all(['h2', 'h3', 'li']):
        if element.name in ['h2', 'h3']:
            current_section = element.get_text(strip=True)
        elif element.name == 'li':
            text = element.get_text(strip=True)
            item_name = text.split(':')[0].split('(')[0].strip()
            
            if any(k in current_section for k in ['시설', '기관', '관광', '명소']):
                if 2 < len(item_name) < 20: facilities.append(item_name)
            elif any(k in current_section for k in ['행사', '문화', '축제']):
                events.append(text)
            elif any(k in current_section for k in ['마스코트', '캐릭터', '인물']):
                if 1 < len(item_name) < 10: characters.append(item_name)
            elif any(k in current_section for k in ['인물', '출신', '의원']):
                if 1 < len(item_name) < 10: people.append(item_name)
            elif any(k in current_section for k in ['행정구역', '지리']):
                if 1 < len(item_name) < 10: locations.append(item_name)

    # 소개글 생성
    desc = paragraphs[0] if paragraphs else f"{region_name}의 모든 것을 담은 공식 채널입니다."
    if len(desc) > 120: desc = desc[:117] + "..."

    handle = f"@{short_name}_Official"
    
    # 세계관 빌런 감지
    villains = []
    if "윤대환" in full_text: villains.append("윤대환")
    if "윤재훈" in full_text: villains.append("윤재훈")

    # -----------------------------------------------------
    # 🌟 [강력해진 커뮤니티 게시글 생성기] 최소 5개 생성
    # -----------------------------------------------------
    posts = []
    
    # 게시글 1: 환영 인사
    posts.append({
        "id": f"post_{short_name}_1",
        "text": f"📢 <b>[공지] {region_name} 공식 채널 새단장!</b><br><br>시민 여러분 안녕하세요! 앞으로 우리 {short_name}의 생생한 소식과 유익한 혜택들을 이곳에서 가장 먼저 알려드리겠습니다. 구독과 알림 설정 잊지 마세요! 👍",
        "img": f"이미지/{short_name} 전경.png",
        "likes": random.randint(3000, 15000),
        "comments": generate_comments(region_name, short_name, full_text, villains, "welcome")
    })

    # 게시글 2: 행사/축제 또는 주요 소식
    event_text = events[0] if events else f"{region_name} 시민 화합의 장"
    posts.append({
        "id": f"post_{short_name}_2",
        "text": f"🎊 <b>[행사 안내] {event_text.split(':')[0]}</b> 🎊<br><br>오래 기다리셨습니다! 드디어 우리 지역의 대표 행사가 개최됩니다. 가족, 친구들과 함께 오셔서 즐거운 시간 보내세요. 상세 일정은 프로필 링크 참고!",
        "img": f"이미지/{short_name} 행사.png",
        "likes": random.randint(5000, 25000),
        "comments": generate_comments(region_name, short_name, full_text, villains, "event")
    })

    # 게시글 3~5: 본문(paragraphs) 내용을 활용한 진짜 정보글
    for i in range(3, 6):
        # 본문에서 문단을 뽑아오되, 없으면 기본 문구 생성
        p_text = paragraphs[i] if i < len(paragraphs) else f"{region_name}의 발전을 위해 오늘도 최선을 다하고 있습니다."
        img_target = random.choice(facilities) if facilities else f"{short_name} 풍경"
        
        posts.append({
            "id": f"post_{short_name}_{i}",
            "text": f"💡 <b>[{short_name} 시정 브리핑]</b><br><br>{p_text}<br><br>살기 좋은 도시를 만들기 위해 여러분의 소중한 의견을 댓글로 남겨주세요!",
            "img": f"이미지/{img_target.replace(' ', '')}.png", # 공백 제거 이미지명
            "likes": random.randint(1000, 8000),
            "comments": generate_comments(region_name, short_name, full_text, villains, "news")
        })

    # -----------------------------------------------------
    # 🌟 [다채로운 동영상 및 쇼츠 생성기]
    # -----------------------------------------------------
    videos = []
    # 추출한 지역/시설 이름을 바탕으로 최소 8개 이상의 영상 생성
    pool_for_videos = facilities + locations + ["시청 앞", "전통시장", "주요 번화가"]
    random.shuffle(pool_for_videos)
    
    for i in range(8):
        loc = pool_for_videos[i % len(pool_for_videos)]
        person = random.choice(people) if people else "신입"
        title = random.choice(YT_TITLE_TEMPLATES).format(location=loc, region=short_name, person=person)
        videos.append({
            "img": f"이미지/{short_name}영상{i+1}.png",
            "title": title,
            "views": f"{random.randint(1, 99)}.{random.randint(1, 9)}만회",
            "time": f"{random.randint(1, 11)}개월 전",
            "duration": f"{random.randint(4, 25)}:{random.randint(10, 59):02d}"
        })

    shorts = []
    for i in range(6):
        loc = random.choice(pool_for_videos)
        person = random.choice(people) if people else "시장"
        title = random.choice(SHORTS_TEMPLATES).format(location=loc, region=short_name, person=person)
        shorts.append({
            "img": f"이미지/{short_name}쇼츠{i+1}.png",
            "title": title,
            "views": f"{random.randint(10, 500)}만회"
        })

    # 최종 객체 반환
    return {
        "name": region_name,
        "handle": handle,
        "subs": f"{random.randint(10, 90)}.{random.randint(1, 9)}만",
        "logo": f"이미지/{short_name}.png",
        "banner": f"이미지/{short_name}전경.png",
        "desc": desc,
        "posts": posts, # 이제 배열로 들어갑니다!
        "videos": videos,
        "shorts": shorts
    }

def generate_comments(region_name, short_name, full_text, villains, post_type):
    """각 게시글 성격에 맞는 찰진 댓글을 무더기로 생성합니다."""
    comments = []
    
    # 1. 빌런 깽판 (확률적으로 등장)
    if villains and random.random() > 0.3:
        v = random.choice(villains)
        text = "어린놈의 시장이 시키드나! 내 두청운수나 돌려내!! 팍 씨!" if v == "윤대환" else "시청놈들 땅장사 해먹고 내 땅만 똥값 만들었네 아오 빡쳐"
        comments.append({
            "author": f"전직시장_{v}" if v=="윤대환" else f"진짜왕_{v}",
            "handle": f"@{v}_Official",
            "text": text,
            "time": "1시간 전",
            "isVillain": True,
            "replies": [{
                "author": region_name,
                "handle": f"@{short_name}_Official",
                "text": f"@{v}_Official 수감자님, 통신 장비 무단 사용으로 교정센터 노역(귤박스 포장 1,000개)이 추가되었습니다. ^^",
                "time": "방금 전",
                "isOfficial": True
            }]
        })

    # 2. 오타쿠 성지순례 밈 (문서에 키워드가 있을 경우 폭주)
    if any(m in full_text for m in ["치사토", "천성구", "봇치", "후등면", "마야", "카스미", "뱅드림", "성지"]):
        meme_texts = [
            f"여기 완전 밴도리 성지 떴다 ㅋㅋㅋ 주말에 {short_name} 코스 돌러 갑니다.",
            f"{short_name}청 앞 표지판에서 굿즈 인증샷 찍는 애들 개많음 ㅋㅋㅋ",
            "성지순례 왔습니다. 우리 애들 잘 부탁드립니다 ㅠㅠ",
            f"담당자님 일 잘하시네 ㅋㅋㅋ 오타쿠 니즈 100% 파악 완료"
        ]
        for _ in range(random.randint(2, 4)):
            comments.append({"author": "성지순례객", "handle": f"@anime_fan_{random.randint(10,99)}", "text": random.choice(meme_texts), "time": f"{random.randint(1,5)}시간 전", "isVillain": False})

    # 3. 찰진 지역 주민 반응
    citizen_texts = [
        f"시장님 {short_name} 교통 체증 좀 제발 해결해주세요 출퇴근 지옥입니다 ㅠㅠ",
        f"영상 퀄리티 무엇? {region_name} 세금 달달하게 잘 쓰네 폼 미쳤다 ㅋㅋㅋ",
        "우리 동네 나오니까 신기하네 ㅋㅋ 구독 누르고 갑니다.",
        "청년 지원금 정책 더 확대해 주시면 안 되나요? 살기 너무 팍팍해요.",
        f"이번 행사는 역대급 혜자네요. {short_name} 공무원분들 고생 많으셨습니다!",
        "시내버스 도색 바꾼 건 진짜 신의 한 수 ㅋㅋㅋ 윤대환 똥색 버스 진짜 토악질 나왔음",
        "행사 라인업 폼 미쳤네 무조건 오픈런 달립니다 ㅋㅋㅋ",
        "쇼츠 편집자 누구임? 보너스 좀 챙겨줘라 ㅋㅋㅋ 개웃기네"
    ]
    
    random.shuffle(citizen_texts)
    # 한 게시물당 일반 댓글 6~10개 무작위 생성
    for i in range(random.randint(6, 10)):
        comments.append({
            "author": f"{short_name}토박이", 
            "handle": f"@citizen_{random.randint(1000,9999)}",
            "text": citizen_texts[i % len(citizen_texts)],
            "time": f"{random.randint(1,23)}시간 전", 
            "isVillain": False
        })
        
    random.shuffle(comments)
    return comments

def run_youtube_parser():
    files = glob.glob(os.path.join(TARGET_FOLDER, "*.html"))
    db = {}
    
    print(f"🚀 {len(files)}개 HTML 문서에서 극한의 유튜브 데이터를 추출합니다...")
    for file_path in files:
        filename = os.path.basename(file_path)
        try:
            region_key = BeautifulSoup(open(file_path, 'r', encoding='utf-8').read(), 'html.parser').title.get_text(strip=True).split('-')[0].strip()
            db[region_key] = generate_youtube_data_from_html(file_path)
            print(f"✅ 파싱 성공: {region_key} (게시글 5개, 다량의 댓글/영상 생성됨)")
        except Exception as e:
            print(f"❌ 분석 실패 ({filename}): {e}")

    with open(OUTPUT_JSON, 'w', encoding='utf-8') as f:
        json.dump(db, f, ensure_ascii=False, indent=4)
        
    print(f"\n🎉 성공! 완전 무장한 '{OUTPUT_JSON}' 파일이 완성되었습니다.")

if __name__ == "__main__":
    run_youtube_parser()