import os
import json
import time
import re
from bs4 import BeautifulSoup
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler

# --- 기본 설정 ---
WIKI_PATH = './'
RESULT_FILE = '분류.html'
JS_OUTPUT_PATH = './assets/js_paths.js'
SPA_LOG_PATH = './new_spa_aliases.txt'

# 1. [고정 구역] 수동으로 설정한 별칭 (기존 Node.js MANUAL_ALIASES 완벽 이식)
MANUAL_ALIASES = {
    "럽라": "lovelive_nav", "러브라이브": "lovelive_nav", "뮤즈": "lovelive_muse_nav", "니지동": "lovelive_niji_nav",
    "리에라": "lovelive_liella_nav", "하스노소라": "lovelive_hasu_nav", "방도리": "bangdream-nav", "뱅드림": "bangdream-nav",
    "미개통": "틀_미개통노선도", "효빈미개통": "틀_미개통노선도", "덕남미개통": "노선도_덕남권", "덕북미개통": "노선도_덕북권",
    "효빈전철": "틀_효빈광역시전철노선", "효빈교통": "틀_효빈광역시의_교통", "효빈버스": "효빈시내버스목록",
    "안천구": "안천구행정", "남구": "남구행정", "동구": "동구행정", "서구": "서구행정", "북구": "북구행정", "중구": "중구행정",
    "창전구": "창전구행정", "청엽구": "청엽구행정", "탄성군": "탄성군행정", "시장": "민선효빈광역시장", "효빈시장": "전체효빈광역시장",
    "국회의원": "효빈22대국회의원", "느금마": "neugumma"
}

# 2. [고정 구역] 문서 설명 데이터 (기존 Node.js MANUAL_SPECIFIC_DB 이식)
MANUAL_SPECIFIC_DB = {
    "ad_logic": { "title": "스크립트:ad_logic", "categories": ["시스템 스크립트"], "overview": "배너 광고(AdSense) 송출 및 위치 제어를 담당하는 루트 스크립트입니다." },
    "틀_미개통노선도": { "title": "틀:미개통노선도 (효빈권)", "categories": ["노선도 틀", "효빈광역시 틀"], "overview": "효빈광역시 관내 공사중/계획중인 전철 노선 상태를 시각화합니다." }
}

# 3. [자동 스캔 구역] 스캔할 디렉토리 및 무시 파일
DIRECTORIES_TO_SCAN = [
    {'dir': './', 'prefix': ''},
    {'dir': './assets', 'prefix': 'assets/'},
    {'dir': './js', 'prefix': 'js/'}
]
IGNORE_FILES = ['build_index.js', 'build_js_index.js', 'separate_univ.py', 'auto_wiki_index.py', 'auto_category.py']

# 🛡️ 4. 기존 150개 동적 리스트 고정
DYNAMIC_LIST = [
    ["간호대 - 한의관", "효빈대_A선_역_템플릿.html?id=A03"], ["강갑수", "두청운수_빌런_기사_목록.html?villain=강갑수"],
    ["강대호", "두청운수_피해_사례집.html?victim=강대호"], ["강주항역", "빈주권광역철도_역사_템플릿.html?station=강주항"],
    ["계성진백역", "빈주권광역철도_역사_템플릿.html?station=계성진백"], ["고송강변", "창전선_역사_템플릿.html?station=고송강변"],
    ["고송경찰서", "창전선_역사_템플릿.html?station=고송경찰서"], ["관동4가역", "빈주1호선_역사_템플릿.html?station=관동4가"],
    ["교통대학 기지", "효빈대_B선_역_템플릿.html?id=B01"], ["규암로2가역", "덕주1호선_역사_템플릿.html?station=규암로2가"],
    ["김만석", "두청운수_피해_사례집.html?victim=김만석"], ["김칠성", "두청운수_빌런_기사_목록.html?villain=김칠성"],
    ["남장기역", "빈주2호선_역사_템플릿.html?station=남장기"], ["남전고등학교", "북구_고등학교_템플릿.html?id=namjeon"],
    ["내성역", "빈주1호선_역사_템플릿.html?station=내성"], ["늑골역", "빈주2호선_역사_템플릿.html?station=늑골"],
    ["대운동장", "효빈대_B선_역_템플릿.html?id=B12"], ["대학본부·충승당", "효빈대_A선_역_템플릿.html?id=A07"],
    ["덕남대역", "덕주1호선_역사_템플릿.html?station=덕남대"], ["덕남도청역", "덕주1호선_역사_템플릿.html?station=덕남도청"],
    ["동습역", "빈주1호선_역사_템플릿.html?station=동습"], ["동원역", "빈주1호선_역사_템플릿.html?station=동원"],
    ["명태역", "빈주권광역철도_역사_템플릿.html?station=명태"], ["문성역", "빈주권광역철도_역사_템플릿.html?station=문성"],
    ["미술사회대", "효빈대_B선_역_템플릿.html?id=B04"], ["민산역", "빈주2호선_역사_템플릿.html?station=민산"],
    ["박상구", "두청운수_피해_사례집.html?victim=박상구"], ["박성역", "빈주권광역철도_역사_템플릿.html?station=박성"],
    ["박현역", "덕주1호선_역사_템플릿.html?station=박현"], ["방거역", "빈주권광역철도_역사_템플릿.html?station=방거"],
    ["배칠두", "두청운수_빌런_기사_목록.html?villain=배칠두"], ["백남역", "빈주권광역철도_역사_템플릿.html?station=백남"],
    ["법전원", "효빈대_B선_역_템플릿.html?id=B05"], ["베르데홀", "효빈대_B선_역_템플릿.html?id=B09"],
    ["보건진료소", "효빈대_B선_역_템플릿.html?id=B11"], ["본부·충승당", "효빈대_B선_역_템플릿.html?id=B13"],
    ["부남역", "빈주권광역철도_역사_템플릿.html?station=부남"], ["북고송", "창전선_역사_템플릿.html?station=북고송"],
    ["북부 기숙사", "효빈대_B선_역_템플릿.html?id=B10"], ["북예역", "빈주권광역철도_역사_템플릿.html?station=북예"],
    ["북장기역", "빈주1호선_역사_템플릿.html?station=북장기"], ["빈주동신역", "빈주1호선_역사_템플릿.html?station=빈주동신"],
    ["사능고등학교", "북구_고등학교_템플릿.html?id=saneung"], ["사증역", "빈주1호선_역사_템플릿.html?station=사증"],
    ["사회복지대", "효빈대_B선_역_템플릿.html?id=B03"], ["산남고등학교", "북구_고등학교_템플릿.html?id=sannam"],
    ["삼은역", "덕주1호선_역사_템플릿.html?station=삼은"], ["상과대 학생회관", "효빈대_B선_역_템플릿.html?id=B14"],
    ["상과대. 학생회관", "효빈대_A선_역_템플릿.html?id=A08"], ["상두역", "빈주권광역철도_역사_템플릿.html?station=상두"],
    ["서나역", "빈주권광역철도_역사_템플릿.html?station=서나"], ["서비마역", "청엽선 통합 역 템플릿.html?station=서비마"],
    ["서원동1가역", "빈주1호선_역사_템플릿.html?station=서원동1가"], ["서원동2가역", "빈주1호선_역사_템플릿.html?station=서원동2가"],
    ["석서역", "빈주권광역철도_역사_템플릿.html?station=석서"], ["소창고등학교", "북구_고등학교_템플릿.html?id=sochang"],
    ["수곡역", "빈주1호선_역사_템플릿.html?station=수곡"], ["수옥역", "빈주2호선_역사_템플릿.html?station=수옥"],
    ["수의대·동물병원", "효빈대_A선_역_템플릿.html?id=A01"], ["승루역", "빈주2호선_역사_템플릿.html?station=승루"],
    ["시능역", "빈주1호선_역사_템플릿.html?station=시능"], ["신도역", "덕주1호선_역사_템플릿.html?station=신도"],
    ["신쌍엽", "창전선_역사_템플릿.html?station=신쌍엽"], ["신월삼역", "빈주2호선_역사_템플릿.html?station=신월삼"],
    ["신중역", "빈주2호선_역사_템플릿.html?station=신중"], ["신창전", "창전선_역사_템플릿.html?station=신창전"],
    ["신팔조", "창전선_역사_템플릿.html?station=신팔조"], ["심전역", "빈주권광역철도_역사_템플릿.html?station=심전"],
    ["쌍엽중앙", "창전선_역사_템플릿.html?station=쌍엽중앙"], ["아논역", "빈주권광역철도_역사_템플릿.html?station=아논"],
    ["애산역", "빈주권광역철도_역사_템플릿.html?station=애산"], ["약대 보건대", "효빈대_A선_역_템플릿.html?id=A04"],
    ["엄치돈", "두청운수_빌런_기사_목록.html?villain=엄치돈"], ["여연역", "빈주1호선_역사_템플릿.html?station=여연"],
    ["여초역", "빈주권광역철도_역사_템플릿.html?station=여초"], ["엽월대역", "청엽선 통합 역 템플릿.html?station=엽월대"],
    ["영목역", "덕주1호선_역사_템플릿.html?station=영목"], ["예술대", "효빈대_B선_역_템플릿.html?id=B07"],
    ["오내고등학교", "북구_고등학교_템플릿.html?id=onae"], ["완현역", "빈주권광역철도_역사_템플릿.html?station=완현"],
    ["우격역", "덕주1호선_역사_템플릿.html?station=우격"], ["우전중앙역", "청엽선 통합 역 템플릿.html?station=우전중앙"],
    ["우택중앙", "창전선_역사_템플릿.html?station=우택중앙"], ["웅읍역", "빈주2호선_역사_템플릿.html?station=웅읍"],
    ["원명중앙역", "덕주1호선_역사_템플릿.html?station=원명중앙"], ["월삼역", "빈주권광역철도_역사_템플릿.html?station=월삼"],
    ["이갑수", "두청운수_피해_사례집.html?victim=이갑수"], ["이남고등학교", "북구_고등학교_템플릿.html?id=inam"],
    ["이독사", "두청운수_빌런_기사_목록.html?villain=이독사"], ["인서고등학교", "북구_고등학교_템플릿.html?id=inseo"],
    ["입동2가역", "청엽선 통합 역 템플릿.html?station=입동2가"], ["자연대", "효빈대_B선_역_템플릿.html?id=B08"],
    ["장기구청역", "빈주1호선_역사_템플릿.html?station=장기구청"], ["장기중앙역", "빈주1호선_역사_템플릿.html?station=장기중앙"],
    ["정래원", "두청운수_피해_사례집.html?victim=정래원"], ["제가동2가역", "빈주2호선_역사_템플릿.html?station=제가동2가"],
    ["제가역", "빈주1호선_역사_템플릿.html?station=제가"], ["조만석", "두청운수_빌런_기사_목록.html?villain=조만석"],
    ["조영식", "두청운수_피해_사례집.html?victim=조영식"], ["조전구청역", "덕주1호선_역사_템플릿.html?station=조전구청"],
    ["조전역", "덕주1호선_역사_템플릿.html?station=조전"], ["조천산역", "덕주1호선_역사_템플릿.html?station=조천산"],
    ["주기역", "덕주1호선_역사_템플릿.html?station=주기"], ["주성역", "덕주1호선_역사_템플릿.html?station=주성"],
    ["주전중앙역", "빈주2호선_역사_템플릿.html?station=주전중앙"], ["중앙도서관", "효빈대_B선_역_템플릿.html?id=B02"],
    ["중앙동3가역", "빈주1호선_역사_템플릿.html?station=중앙동3가"], ["중은역", "빈주1호선_역사_템플릿.html?station=중은"],
    ["증림역", "빈주권광역철도_역사_템플릿.html?station=증림"], ["지미역", "빈주권광역철도_역사_템플릿.html?station=지미"],
    ["지산역", "빈주1호선_역사_템플릿.html?station=지산"], ["진백중앙", "창전선_역사_템플릿.html?station=진백중앙"],
    ["진희고등학교", "북구_고등학교_템플릿.html?id=jinhee"], ["창엽", "창전선_역사_템플릿.html?station=창엽"],
    ["천남역", "빈주권광역철도_역사_템플릿.html?station=천남"], ["천왕사고등학교", "북구_고등학교_템플릿.html?id=cheonwangsa"],
    ["청남고등학교", "북구_고등학교_템플릿.html?id=cheongnam"], ["청엽구민공원역", "청엽선 통합 역 템플릿.html?station=청엽구민공원"],
    ["청엽중앙역", "청엽선 통합 역 템플릿.html?station=청엽중앙"], ["최두식", "두청운수_피해_사례집.html?victim=최두식"],
    ["최말구", "두청운수_빌런_기사_목록.html?villain=최말구"], ["칠심중앙", "창전선_역사_템플릿.html?station=칠심중앙"],
    ["토목대 복지관", "효빈대_A선_역_템플릿.html?id=A06"], ["토정역", "빈주권광역철도_역사_템플릿.html?station=토정"],
    ["평전고등학교", "북구_고등학교_템플릿.html?id=pyeongjeon"], ["하원역", "빈주권광역철도_역사_템플릿.html?station=하원"],
    ["한상구", "두청운수_피해_사례집.html?victim=한상구"], ["허세풍", "두청운수_빌런_기사_목록.html?villain=허세풍"],
    ["호두역", "빈주권광역철도_역사_템플릿.html?station=호두"], ["화공 전기대", "효빈대_A선_역_템플릿.html?id=A05"],
    ["화면역", "빈주2호선_역사_템플릿.html?station=화면"], ["화주역", "덕주1호선_역사_템플릿.html?station=화주"],
    ["효빈대병원", "창전선_역사_템플릿.html?station=효빈대병원"], ["효빈동1가역", "청엽선 통합 역 템플릿.html?station=효빈동1가"],
    ["효빈동2가역", "청엽선 통합 역 템플릿.html?station=효빈동2가"], ["효빈북부공업고등학교", "북구_고등학교_템플릿.html?id=hbtech"],
    ["효빈북여자고등학교", "북구_고등학교_템플릿.html?id=hbgirls"], ["효빈제일고등학교", "북구_고등학교_템플릿.html?id=hbjeil"]
]

# 5. 읍/면/동/리 및 버스 노선 대규모 맵핑
EXTRA_MAPPINGS = {
    "약산군": "약산시.html", "야진면": "야진읍.html", "야진리": "야진읍.html", "신리": "야진읍.html", "미우리": "야진읍.html",
    "원심리": "야진읍.html", "아득리": "야진읍.html", "록구리": "서목읍.html", "마희리": "서목읍.html", "음일리": "서목읍.html",
    "잠금리": "서목읍.html", "입리": "서목읍.html", "소춘리": "서목읍.html", "일회리": "서목읍.html", "파래리": "서목읍.html",
    "조산리": "서목읍.html", "미로리": "도향면.html", "반주리": "도향면.html", "시초리": "도향면.html", "초반리": "도향면.html",
    "춘일경리": "도향면.html", "하공리": "도향면.html", "일일리": "도향면.html", "벽천리": "도향면.html", "분음리": "도향면.html",
    "일하리": "도향면.html", "영왕리": "도향면.html", "소전면": "소원면.html", "원남면": "소원면.html", "소원리": "소원면.html",
    "라면리": "소원면.html", "윤부리": "소원면.html", "부우리": "소원면.html", "구생리": "정근면.html", "사촌리": "정근면.html",
    "촌주리": "정근면.html", "처구리": "정근면.html", "안경리": "정근면.html", "익목리": "정근면.html", "층부리": "정근면.html",
    "회층리": "정근면.html", "명현리": "흑택면.html", "은염리": "흑택면.html", "보습리": "흑택면.html", "고해리": "고해읍.html",
    "천가리": "고해읍.html", "율일리": "고해읍.html", "장심리": "고해읍.html", "이와리": "고해읍.html", "모제읍": "모제군.html#s-10.1",
    "괴천면": "모제군.html#s-10.2", "청해면": "모제군.html#s-10.3", "장어면": "모제군.html#s-10.4", "약궁면": "모제군.html#s-10.5",
    "양광면": "모제군.html#s-10.6", "부진읍": "덕현군.html#s-14.1", "덕현읍": "덕현군.html#s-14.2", "화원면": "덕현군.html#s-14.3",
    "북견면": "덕현군.html#s-14.4", "흑성면": "덕현군.html#s-14.5", "망정면": "덕현군.html#s-14.6", "삽곡읍": "반양군.html#s-14.1",
    "반양읍": "반양군.html#s-14.2", "하원면": "반양군.html#s-14.3", "토정면": "반양군.html#s-14.4", "복구면": "반양군.html#s-14.5",
    "북부면": "반양군.html#s-14.6", "수상면": "반양군.html#s-14.7", "인와면": "반양군.html#s-14.8", "적판면": "반양군.html#s-14.9",
    "상안읍": "상안군.html#s-11.1", "이부면": "상안군.html#s-11.3", "태서면": "상안군.html#s-11.4", "낙산면": "상안군.html#s-11.5",
    "패총면": "상안군.html#s-11.6", "승정면": "상안군.html#s-11.7", "사류면": "상안군.html#s-11.8", "일채면": "상안군.html#s-11.9",
    "낭원읍": "낭원군.html#s-14.1", "전포읍": "낭원군.html#s-14.2", "판주읍": "낭원군.html#s-14.3", "토진읍": "낭원군.html#s-14.4",
    "백성면": "낭원군.html#s-14.5", "내덕면": "낭원군.html#s-14.6", "명향면": "낭원군.html#s-14.7", "빙천면": "낭원군.html#s-14.8",
    "풍성면": "낭원군.html#s-14.9", "미전면": "낭원군.html#s-14.10", "상곡면": "낭원군.html#s-14.11", "초건면": "낭원군.html#s-14.12",
    "우입면": "낭원군.html#s-14.13", "은진원리": "고해읍.html", "선곡읍": "선곡군.html#s-11.1", "기도읍": "기도군.html#s-14.2",
    "염곡면": "기도군.html#s-14.1", "염곡읍": "기도군.html#s-14.1", "하포면": "기도군.html#s-14.3", "진경면": "기도군.html#s-14.4",
    "주길면": "기도군.html#s-14.5", "삼면": "기도군.html#s-14.6", "용야면": "기도군.html#s-14.7", "고관면": "기도군.html#s-14.8",
    "하미면": "선곡군.html#s-11.2", "귀총면": "선곡군.html#s-11.3", "해로면": "선곡군.html#s-11.4", "원전면": "선곡군.html#s-11.5",
    "남소면": "선곡군.html#s-11.6", "동구면": "선곡군.html#s-11.7", "인채면": "선곡군.html#s-11.8", "우목면": "선곡군.html#s-11.9",
    "우구읍": "저천군.html#s-14.1", "저천읍": "저천군.html#s-14.2", "산백읍": "저천군.html#s-14.3", "색성면": "저천군.html#s-14.4",
    "동면": "야진읍.html", "송남면": "저천군.html#s-14.6", "송북면": "저천군.html#s-14.7", "이좌면": "저천군.html#s-14.8",
    "외산면": "저천군.html#s-14.9", "치원읍": "치원군.html#s-14.1", "후등면": "치원군.html#s-14.2", "백생면": "치원군.html#s-14.3",
    "근해면": "치원군.html#s-14.4", "봉월면": "치원군.html#s-14.5", "산전면": "치원군.html#s-14.6", "채화면": "치원군.html#s-14.7",
    "이식리": "고해읍.html", "정명리": "고해읍.html", "전추리": "고해읍.html", "계층리": "도변읍.html", "표명리": "도변읍.html",
    "잠재리": "도변읍.html", "조일리": "도변읍.html", "탄성리": "탄성읍.html", "공리": "탄성읍.html", "고무리": "탄성읍.html",
    "미성리": "탄성읍.html", "성규리": "탄성읍.html", "명무리": "탄성읍.html", "무성리": "탄성읍.html", "궁정동": "궁영동.html",
    "도람동": "궁영동.html", "영동1가": "궁영동.html", "영동2가": "궁영동.html", "만실동": "궁영동.html", "명일동": "내항동.html",
    "시남동": "고도동.html", "시북동": "고도동.html", "십덕동": "고도동.html", "우이동": "고도동.html", "삼각동": "약맥동.html",
    "목동": "약맥동.html", "오주동": "약맥동.html", "일향동": "약맥동.html", "경동": "유내동.html", "리사동": "유내동.html",
    "정동": "유내동.html", "심동1가": "중앙동.html", "심동2가": "중앙동.html", "창선동1가": "중앙동.html", "창선동2가": "중앙동.html",
    "창선동3가": "중앙동.html", "원동1가": "중앙동.html", "원동2가": "중앙동.html", "원동3가": "중앙동.html", "원동4가": "중앙동.html",
    "소장동1가": "중앙동.html", "소장동2가": "중앙동.html", "지유동1가": "중앙동.html", "지유동2가": "중앙동.html", "훈동": "중앙동.html",
    "완동1가": "중정동.html", "완동2가": "중정동.html", "완동3가": "중정동.html", "중동1가": "중정동.html", "중동2가": "중정동.html",
    "중동3가": "중정동.html", "오석동": "중정동.html", "서남동": "조유동.html", "조유동1가": "조유동.html", "조유동2가": "조유동.html",
    "조유동3가": "조유동.html", "조유동4가": "조유동.html", "조유동5가": "조유동.html", "천석동1가": "조유동.html", "천석동2가": "조유동.html",
    "천석동3가": "조유동.html", "아자동": "채산동.html", "평전동": "채산동.html", "신영동": "채산동.html", "곡진동": "채산동.html",
    "아진동": "채산동.html", "습지동": "채산동.html", "등기동": "채산동.html", "수포동": "채산동.html", "실본동": "채산동.html",
    "서도동": "산고동.html", "추산동": "산고동.html", "사연동": "산고동.html", "해서동": "천왕사동.html", "생곡동": "사능동.html",
    "치남동": "사능동.html", "입선동": "청능동.html", "당선1동": "당선동.html", "당선2동": "당선동.html", "당선3동": "당선동.html",
    "당선4동": "당선동.html", "과진1동": "과진동.html", "과진2동": "과진동.html", "과진3동": "과진동.html", "과진4동": "과진동.html",
    "과진5동": "과진동.html", "과진6동": "과진동.html", "과진7동": "과진동.html", "청덕1동": "청덕동.html", "청덕2동": "청덕동.html",
    "청덕3동": "청덕동.html", "사복1동": "사복동.html", "사복2동": "사복동.html", "고송1동": "고송동.html", "고송2동": "고송동.html",
    "고송3동": "고송동.html", "고송4동": "고송동.html", "고송5동": "고송동.html", "고송6동": "고송동.html", "고송7동": "고송동.html",
    "고송8동": "고송동.html", "중수1동": "중수동.html", "중수2동": "중수동.html", "중수3동": "중수동.html", "중수4동": "중수동.html",
    "오내1동": "오내동.html", "오내2동": "오내동.html", "청엽1동": "청엽동.html", "청엽2동": "청엽동.html", "청엽3동": "청엽동.html",
    "청엽4동": "청엽동.html", "청엽5동": "청엽동.html", "청엽6동": "청엽동.html", "우전1동": "우전동.html", "우전2동": "우전동.html",
    "우전3동": "우전동.html", "마잡1동": "마잡동.html", "마잡2동": "마잡동.html", "당가1동": "당가동.html", "당가2동": "당가동.html",
    "안천1동": "안천동.html", "안천2동": "안천동.html", "안천3동": "안천동.html", "안천4동": "안천동.html", "안천5동": "안천동.html",
    "안천6동": "안천동.html", "안천7동": "안천동.html", "이자1동": "이자동.html", "이자2동": "이자동.html", "이자3동": "이자동.html",
    "이자4동": "이자동.html", "서증동": "마잡동.html", "하가동": "뇌전동.html", "치장동": "뇌전동.html", "팔월동": "뇌전동.html",
    "세익동": "뇌전동.html", "상가동": "뇌전동.html", "융문동": "칠채동.html", "서수동": "칠채동.html", "능릉동": "칠채동.html",
    "월삼동": "칠채동.html", "남동": "칠채동.html", "정치동": "칠채동.html", "영색무동": "칠채동.html", "제택동": "악부동.html",
    "무로동": "악부동.html", "타천동": "악부동.html", "천본동": "악부동.html", "초음동": "악부동.html", "군청동": "악부동.html",
    "광상동": "악부동.html", "일화동": "악부동.html", "팔망성동": "악부동.html", "천문동": "악부동.html", "하구동": "북택동.html",
    "추자동": "이십기동.html", "리의동": "이십기동.html", "심회동": "이십기동.html", "상점동": "백합동.html", "창전1동": "창전동.html",
    "창전2동": "창전동.html", "창전3동": "창전동.html", "창전4동": "창전동.html", "창전5동": "창전동.html", "쌍엽1동": "쌍엽동.html",
    "쌍엽2동": "쌍엽동.html", "칠심1동": "칠심동.html", "칠심2동": "칠심동.html", "칠심3동": "칠심동.html", "장곡읍": "약산시.html#장곡읍",
    "원강읍": "약산시.html#원강읍", "화소읍": "약산시.html#화소읍", "성가면": "약산시.html#성가면", "광정면": "약산시.html#광정면",
    "홍하면": "약산시.html#홍하면", "근강면": "약산시.html#근강면", "약산1동": "약산시.html#약산1동", "약산2동": "약산시.html#약산2동",
    "역석동": "약산시.html#역석동", "우부동": "약산시.html#우부동", "삼미동": "약산시.html#삼미동", "산형동": "약산시.html#산형동",
    "해진읍": "전산시.html#해진읍", "고진면": "전산시.html#고진면", "백목면": "전산시.html#백목면", "상면": "전산시.html#상면",
    "송강면": "전산시.html#송강면", "수판면": "마진시.html#수판면", "신산면": "전산시.html#신산면", "하면": "전산시.html#하면",
    "전산1동": "전산시.html#전산1동", "전산2동": "전산시.html#전산2동", "전산3동": "전산시.html#전산3동", "전산4동": "전산시.html#전산4동",
    "중앙동(빈주)": "빈성구.html#중앙동", "동신동": "빈성구.html#동신동", "이은동": "빈성구.html#이은동", "시능동": "빈성구.html#시능동",
    "차당동": "빈성구.html#차당동", "여사동": "빈성구.html#여사동", "지산동": "빈성구.html#지산동", "고전면": "빈성구.html#고전면",
    "남면(빈주)": "빈성구.html#남면", "동면(빈주)": "빈성구.html#동면", "송원읍": "장기구.html#송원읍", "오택읍": "장기구.html#오택읍",
    "서면": "장기구.html#서면", "노동면": "장기구.html#노동면", "장기1동": "장기구.html#장기1동", "장기2동": "장기구.html#장기2동",
    "장기3동": "장기구.html#장기3동", "장기4동": "장기구.html#장기4동", "장기5동": "장기구.html#장기5동", "월삼1동": "장기구.html#월삼1동",
    "월삼2동": "장기구.html#월삼2동", "월삼3동": "장기구.html#월삼3동", "대정동": "장기구.html#대정동", "미천동": "장기구.html#미천동",
    "동습동": "장기구.html#동습동", "황명동": "장기구.html#황명동", "천조읍": "가원구.html#천조읍", "동태면": "가원구.html#동태면",
    "현권면": "가원구.html#현권면", "육미면": "가원구.html#육미면", "상만1동": "가원구.html#상만1동", "상만2동": "가원구.html#상만2동",
    "상만3동": "가원구.html#상만3동", "천남1동": "가원구.html#천남1동", "천남2동": "가원구.html#천남2동", "천남3동": "가원구.html#천남3동",
    "주전1동": "가원구.html#주전1동", "주전2동": "가원구.html#주전2동", "수옥동": "가원구.html#수옥동", "아천동": "가원구.html#아천동",
    "풍은동": "가원구.html#풍은동", "서원동": "가원구.html#서원동", "원변읍": "서해시.html#원변읍", "번전읍": "서해시.html#번전읍",
    "압일읍": "서해시.html#압일읍", "문진읍": "서해시.html#문진읍", "우곡면": "매산군.html#s-12-6", "지중면": "서해시.html#지중면",
    "북야면": "서해시.html#북야면", "방부1동": "서해시.html#방부12동", "방부2동": "서해시.html#방부12동", "우궁1동": "서해시.html#우궁12동",
    "우궁2동": "서해시.html#우궁12동", "천로1동": "서해시.html#천로14동", "천로2동": "서해시.html#천로14동", "천로3동": "서해시.html#천로14동",
    "천로4동": "서해시.html#천로14동", "서해동": "서해시.html#서해동", "좌산1동": "서해시.html#좌산12동", "좌산2동": "서해시.html#좌산12동",
    "신항동": "서해시.html#신항동", "통마동": "서해시.html#통마동", "무원동": "덕산구.html#무원동", "해안동": "서해시.html#해안동",
    "상포동": "서해시.html#상포동", "서앙동": "서해시.html#서앙동", "포구동": "서해시.html#포구동", "서진1동": "서진시.html#서진1동",
    "서진2동": "서진시.html#서진23동", "서진3동": "서진시.html#서진23동", "서목동": "서진시.html#서목동", "아은1동": "서진시.html#아은1동",
    "아은2동": "서진시.html#아은2동", "아은3동": "서진시.html#아은3동", "서진4동": "서진시.html#서진4동", "진목1동": "서진시.html#진목1동",
    "진목2동": "서진시.html#진목2동", "사추동": "서진시.html#사추동", "남진재동": "서진시.html#남진재동", "신득읍": "군천시.html#신득읍",
    "남강면": "군천시.html#남강면", "남오면": "군천시.html#남오면", "오조면": "군천시.html#오조면", "을차면": "군천시.html#을차면",
    "조빈면": "군천시.html#조빈면", "한동면": "군천시.html#한동면", "군천동": "군천시.html#군천동", "중동": "군천시.html#중동",
    "남민1동": "군천시.html#남민1동", "남민2동": "군천시.html#남민2동", "남민3동": "군천시.html#남민3동", "하강동": "군천시.html#하강동",
    "고옥동": "군천시.html#고옥동", "호택동": "군천시.html#호택동", "애음1동": "군천시.html#애음1동", "애음2동": "군천시.html#애음2동",
    "애음3동": "군천시.html#애음3동", "현해1동": "군천시.html#현해1동", "현해2동": "군천시.html#현해2동", "청성읍": "강주시.html#청성읍",
    "갈원면": "강주시.html#갈원면", "곡전면": "강주시.html#곡전면", "공문면": "강주시.html#공문면", "금상면": "강주시.html#금상면",
    "북예면": "강주시.html#북예면", "석동면": "강주시.html#석동면", "석북면": "강주시.html#석북면", "석서면": "강주시.html#석서면",
    "풍영면": "강주시.html#풍영면", "풍원면": "강주시.html#풍원면", "중앙동(강주)": "강주시.html#중앙동", "광릉동": "강주시.html#광릉동",
    "심전1동": "강주시.html#심전1동", "심전2동": "강주시.html#심전2동", "삼랑동": "강주시.html#삼랑동", "석성동": "강주시.html#석성동",
    "야판동": "강주시.html#야판동", "문성1동": "강주시.html#문성1동", "문성2동": "강주시.html#문성2동", "자유동": "강주시.html#자유동",
    "입포동": "강주시.html#입포동", "백택동": "강주시.html#백택동", "좌구동": "강주시.html#좌구동", "과탐동": "강주시.html#과탐동",
    "춘일동": "강주시.html#춘일동", "탕산동": "강주시.html#탕산동", "종상동": "강주시.html#종상동", "계성1동": "계성시.html#계성1동",
    "계성2동": "계성시.html#계성2동", "진백1동": "계성시.html#진백1동", "진백2동": "계성시.html#진백2동", "천1동": "계성시.html#천1동",
    "천2동": "계성시.html#천2동", "천3동": "계성시.html#천3동", "마시1동": "계성시.html#마시1동", "마시2동": "계성시.html#마시2동",
    "원명읍": "덕산구.html#원명읍", "학전면": "덕산구.html#학전면", "덕구면": "덕산구.html#덕구면", "전진면": "덕산구.html#전진면",
    "구부면": "덕산구.html#구부면", "정중면": "덕산구.html#정중면", "중앙동(덕주)": "덕산구.html#중앙동", "주기동": "덕산구.html#주기동",
    "상미동": "덕산구.html#상미동", "갑고동": "덕산구.html#갑고동", "무영동": "덕산구.html#무영동", "화주1동": "덕산구.html#화주동",
    "화주2동": "덕산구.html#화주동", "화주3동": "덕산구.html#화주동", "화진1동": "덕산구.html#화진동", "화진2동": "덕산구.html#화진동",
    "영목1동": "덕산구.html#영목동", "영목2동": "덕산구.html#영목동", "영목3동": "덕산구.html#영목동", "영석동": "덕산구.html#영석동",
    "팔원읍": "조전구.html#팔원읍", "하기읍": "조전구.html#하기읍", "명리면": "조전구.html#명리면", "시산면": "조전구.html#시산면",
    "지출면": "조전구.html#지출면", "조전1동": "조전구.html#조전동", "조전2동": "조전구.html#조전동", "조전3동": "조전구.html#조전동",
    "조전4동": "조전구.html#조전동", "삼삼동": "조전구.html#삼삼동", "매촌동": "조전구.html#매촌동", "금당동": "조전구.html#금당동",
    "모은동": "조전구.html#모은동", "주규동": "조전구.html#주규동", "박현동": "조전구.html#박현동", "애남동": "조전구.html#애남동",
    "진적읍": "낙주시.html#진적읍", "길산읍": "낙주시.html#길산읍", "흥림면": "낙주시.html#흥림면", "경영면": "낙주시.html#경영면",
    "산언면": "낙주시.html#산언면", "진류면": "낙주시.html#진류면", "대상면": "낙주시.html#대상면", "기좌면": "낙주시.html#기좌면",
    "우색면": "낙주시.html#우색면", "지기면": "낙주시.html#지기면", "낙주동": "낙주시.html#낙주동", "엽산동": "낙주시.html#엽산동",
    "회삼1동": "낙주시.html#회삼동", "회삼2동": "낙주시.html#회삼동", "삼채1동": "낙주시.html#삼채동", "삼채2동": "낙주시.html#삼채동",
    "삼채3동": "낙주시.html#삼채동", "이달1동": "낙주시.html#이달동", "이달2동": "낙주시.html#이달동", "토마동": "낙주시.html#토마동",
    "판창1동": "낙주시.html#판창동", "판창2동": "낙주시.html#판창동", "천풍동": "낙주시.html#천풍동", "이파동": "낙주시.html#이파동",
    "고규동": "낙주시.html#고규동", "서중읍": "방산시.html#서중읍", "동공면": "방산시.html#동공면", "석원면": "방산시.html#석원면",
    "양복면": "방산시.html#양복면", "냉천면": "방산시.html#냉천면", "약원면": "방산시.html#약원면", "무산면": "방산시.html#무산면",
    "계촌면": "방산시.html#계촌면", "정수면": "방산시.html#정수면", "청전1동": "방산시.html#청전1동", "청전2동": "방산시.html#청전2동",
    "주강1동": "방산시.html#주강1동", "주강2동": "방산시.html#주강2동", "탕천동": "방산시.html#탕천동", "미강동": "방산시.html#미강동",
    "장수동": "방산시.html#장수동", "도수동": "방산시.html#도수동", "약신동": "방산시.html#약신동", "매복동": "방산시.html#매복동",
    "근암1동": "매성시.html#s-12-1", "근암2동": "매성시.html#s-12-1", "매성1동": "매성시.html#s-12-1", "매성2동": "매성시.html#s-12-1",
    "개서동": "매성시.html#s-12-1", "우음동": "매성시.html#s-12-1", "조천동": "매성시.html#s-12-1", "상강동": "매성시.html#s-12-2",
    "규래동": "매성시.html#s-12-2", "식곡동": "매성시.html#s-12-3", "별당읍": "하정시.html#별당읍", "구주면": "하정시.html#구주면",
    "팔봉면": "하정시.html#팔봉면", "등전면": "하정시.html#등전면", "귀선면": "하정시.html#귀선면", "산동면": "하정시.html#산동면",
    "산서면": "하정시.html#산서면", "하정동": "하정시.html#하정동", "규산동": "하정시.html#규산동", "해성동": "하정시.html#해성동",
    "율진동": "하정시.html#율진동", "동석동": "하정시.html#동석동", "벽산읍": "비천시.html#벽산읍", "서군면": "비천시.html#서군면",
    "소육면": "비천시.html#소육면", "수국면": "비천시.html#수국면", "괴성면": "비천시.html#괴성면", "고녕면": "비천시.html#고녕면",
    "진격산면": "비천시.html#진격산면", "구락면": "비천시.html#구락면", "성두동": "비천시.html#성두동", "비천동": "비천시.html#비천동",
    "부음동": "비천시.html#부음동", "구승동": "비천시.html#구승동", "괴림동": "비천시.html#괴림동", "은암동": "비천시.html#은암동",
    "운진읍": "운진군.html#s-12-1", "운남면": "운진군.html#s-12-2", "금산면": "운진군.html#s-12-3", "사내면": "운진군.html#s-12-4",
    "신운면": "운진군.html#s-12-5", "산인면": "운진군.html#s-12-6", "산곶면": "운진군.html#s-12-7", "도군면": "운진군.html#s-12-8",
    "분주읍": "분주군.html#s-12-1", "신안면": "분주군.html#s-12-2", "원구면": "분주군.html#s-12-3", "대자면": "분주군.html#s-12-4",
    "나천면": "분주군.html#s-12-5", "정남면": "분주군.html#s-12-6", "하권면": "분주군.html#s-12-7", "이복면": "분주군.html#s-12-8",
    "평미면": "분주군.html#s-12-9", "정동면": "분주군.html#s-12-10", "대현읍": "매산군.html#s-12-1", "신운읍": "매산군.html#s-12-2",
    "율주읍": "매산군.html#s-12-3", "이율면": "매산군.html#s-12-4", "육산면": "매산군.html#s-12-5", "조건면": "매산군.html#s-12-7",
    "덕신면": "매산군.html#s-12-8", "채산면": "매산군.html#s-12-9", "군선면": "매산군.html#s-12-10", "석창읍": "석창군.html#s-12-1",
    "대흥면": "석창군.html#s-12-2", "읍악면": "석창군.html#s-12-3", "오안면": "석창군.html#s-12-4", "조취면": "석창군.html#s-12-5",
    "명성면": "석창군.html#s-12-6", "외진면": "석창군.html#s-12-7", "언정면": "석창군.html#s-12-8", "고산면": "석창군.html#s-12-9",
    "두원읍": "두원군.html#s-12-1", "승린면": "두원군.html#s-12-2", "서운면": "두원군.html#s-12-3", "남면(두원)": "두원군.html#s-12-4",
    "신면": "두원군.html#s-12-5", "선문면": "두원군.html#s-12-6", "대선면": "두원군.html#s-12-7", "총선면": "두원군.html#s-12-8",
    "인곡읍": "인곡군.html#s-12-1", "거남면": "인곡군.html#s-12-2", "속류면": "인곡군.html#s-12-3", "대건면": "인곡군.html#s-12-4",
    "시오면": "인곡군.html#s-12-5", "낭염면": "인곡군.html#s-12-6", "고신면": "인곡군.html#s-12-7", "천대읍": "마진시.html#천대읍",
    "유록면": "마진시.html#유록면", "상정면": "마진시.html#상정면", "팔현면": "마진시.html#팔현면", "장병면": "마진시.html#장병면",
    "상본면": "마진시.html#상본면", "명야면": "마진시.html#명야면", "고사면": "마진시.html#고사면", "마진1동": "마진시.html#마진1동",
    "마진2동": "마진시.html#마진2동", "월석동": "마진시.html#월석동", "곡천읍": "곡천군.html#s-12-1", "북동면": "곡천군.html#s-12-2",
    "사곡면": "곡천군.html#s-12-3", "하서면": "곡천군.html#s-12-4", "하북면": "곡천군.html#s-12-5", "용수면": "곡천군.html#s-12-6",
    "중곡면": "곡천군.html#s-12-7", "남천면": "곡천군.html#s-12-8", "고포읍": "고포군.html#s-12-1", "동원면": "고포군.html#s-12-2",
    "포선면": "고포군.html#s-12-3", "대산면": "고포군.html#s-12-4", "신성면": "고포군.html#s-12-6", "관수읍": "관수군.html#s-12-1",
    "북원읍": "관수군.html#s-12-2", "금담면": "관수군.html#s-12-3", "금진면": "관수군.html#s-12-4", "여원면": "관수군.html#s-12-5",
    "극산면": "관수군.html#s-12-6", "황강면": "관수군.html#s-12-7", "실주면": "관수군.html#s-12-8", "조원면": "관수군.html#s-12-9",
    "원단면": "관수군.html#s-12-10", "원안읍": "원안군.html#s-12-1", "상능읍": "원안군.html#s-12-2", "개색면": "원안군.html#s-12-3",
    "소귀면": "원안군.html#s-12-4", "막자면": "원안군.html#s-12-5", "소궁면": "원안군.html#s-12-6", "노국면": "원안군.html#s-12-7",
    "산음면": "원안군.html#s-12-8", "소운면": "원안군.html#s-12-9",
    "bus 151": "bus_150.html#151", "bus151": "bus_150.html#151", "bus_151": "bus_150.html#151", "151번": "bus_150.html#151", "효빈_버스_151": "bus_150.html#151", "효빈 버스 151": "bus_150.html#151", "효빈버스151": "bus_150.html#151",
    "bus 154": "bus_150.html#154", "bus154": "bus_150.html#154", "bus_154": "bus_150.html#154", "154번": "bus_150.html#154", "효빈_버스_154": "bus_150.html#154", "효빈 버스 154": "bus_150.html#154", "효빈버스154": "bus_150.html#154",
    "bus 191": "bus_190.html#191", "bus191": "bus_190.html#191", "bus_191": "bus_190.html#191", "191번": "bus_190.html#191", "효빈_버스_191": "bus_190.html#191", "효빈 버스 191": "bus_190.html#191", "효빈버스191": "bus_190.html#191",
    "bus 192": "bus_190.html#192", "bus192": "bus_190.html#192", "bus_192": "bus_190.html#192", "192번": "bus_190.html#192", "효빈_버스_192": "bus_190.html#192", "효빈 버스 192": "bus_190.html#192", "효빈버스192": "bus_190.html#192",
    "bus 193": "bus_190.html#193", "bus193": "bus_190.html#193", "bus_193": "bus_190.html#193", "193번": "bus_190.html#193", "효빈_버스_193": "bus_190.html#193", "효빈 버스 193": "bus_190.html#193", "효빈버스193": "bus_190.html#193",
    "bus 194": "bus_190.html#194", "bus194": "bus_190.html#194", "bus_194": "bus_190.html#194", "194번": "bus_190.html#194", "효빈_버스_194": "bus_190.html#194", "효빈 버스 194": "bus_190.html#194", "효빈버스194": "bus_190.html#194",
    "bus 221": "bus_220.html#221", "bus221": "bus_220.html#221", "bus_221": "bus_220.html#221", "221번": "bus_220.html#221", "효빈_버스_221": "bus_220.html#221", "효빈 버스 221": "bus_220.html#221", "효빈버스221": "bus_220.html#221",
    "bus 222": "bus_220.html#222", "bus222": "bus_220.html#222", "bus_222": "bus_220.html#222", "222번": "bus_220.html#222", "효빈_버스_222": "bus_220.html#222", "효빈 버스 222": "bus_220.html#222", "효빈버스222": "bus_220.html#222",
    "bus 2222": "bus_220.html#222", "bus2222": "bus_220.html#222", "bus_2222": "bus_220.html#222", "2222번": "bus_220.html#222", "효빈_버스_2222": "bus_220.html#222", "효빈 버스 2222": "bus_220.html#222", "효빈버스2222": "bus_220.html#222",
    "bus 231": "bus_230.html#231", "bus231": "bus_230.html#231", "bus_231": "bus_230.html#231", "231번": "bus_230.html#231", "효빈_버스_231": "bus_230.html#231", "효빈 버스 231": "bus_230.html#231", "효빈버스231": "bus_230.html#231",
    "bus 232": "bus_230.html#232", "bus232": "bus_230.html#232", "bus_232": "bus_230.html#232", "232번": "bus_230.html#232", "효빈_버스_232": "bus_230.html#232", "효빈 버스 232": "bus_230.html#232", "효빈버스232": "bus_230.html#232",
    "bus 251": "bus_250.html#251", "bus251": "bus_250.html#251", "bus_251": "bus_250.html#251", "251번": "bus_250.html#251", "효빈_버스_251": "bus_250.html#251", "효빈 버스 251": "bus_250.html#251", "효빈버스251": "bus_250.html#251",
    "bus 258": "bus_250.html#258", "bus258": "bus_250.html#258", "bus_258": "bus_250.html#258", "258번": "bus_250.html#258", "효빈_버스_258": "bus_250.html#258", "효빈 버스 258": "bus_250.html#258", "효빈버스258": "bus_250.html#258",
    "bus 261": "bus_260.html#261", "bus261": "bus_260.html#261", "bus_261": "bus_260.html#261", "261번": "bus_260.html#261", "효빈_버스_261": "bus_260.html#261", "효빈 버스 261": "bus_260.html#261", "효빈버스261": "bus_260.html#261",
    "bus 262": "bus_260.html#261", "bus262": "bus_260.html#261", "262번": "bus_260.html#261", "효빈_버스_262": "bus_260.html#261", "효빈 버스 262": "bus_260.html#261", "효빈버스262": "bus_260.html#261",
    "bus 291": "bus_290.html#291", "bus291": "bus_290.html#291", "bus_291": "bus_290.html#291", "291번": "bus_290.html#291", "효빈_버스_291": "bus_290.html#291", "효빈 버스 291": "bus_290.html#291", "효빈버스291": "bus_290.html#291",
    "bus 292": "bus_290.html#292", "bus292": "bus_290.html#292", "bus_292": "bus_290.html#292", "292번": "bus_290.html#292", "효빈_버스_292": "bus_290.html#292", "효빈 버스 292": "bus_290.html#292", "효빈버스292": "bus_290.html#292",
    "bus 331": "bus_330.html#331", "bus331": "bus_330.html#331", "bus_331": "bus_330.html#331", "331번": "bus_330.html#331", "효빈_버스_331": "bus_330.html#331", "효빈 버스 331": "bus_330.html#331", "효빈버스331": "bus_330.html#331",
    "bus 334": "bus_330.html#334", "bus334": "bus_330.html#334", "bus_334": "bus_330.html#334", "334번": "bus_330.html#334", "효빈_버스_334": "bus_330.html#334", "효빈 버스 334": "bus_330.html#334", "효빈버스334": "bus_330.html#334",
    "bus 471": "bus_470.html#471", "bus471": "bus_470.html#471", "bus_471": "bus_470.html#471", "471번": "bus_470.html#471", "효빈_버스_471": "bus_470.html#471", "효빈 버스 471": "bus_470.html#471", "효빈버스471": "bus_470.html#471",
    "bus 472": "bus_470.html#472", "bus472": "bus_470.html#472", "bus_472": "bus_470.html#472", "472번": "bus_470.html#472", "효빈_버스_472": "bus_470.html#472", "효빈 버스 472": "bus_470.html#472", "효빈버스472": "bus_470.html#472",
    "bus 491": "bus_490.html#491", "bus491": "bus_490.html#491", "bus_491": "bus_490.html#491", "491번": "bus_490.html#491", "효빈_버스_491": "bus_490.html#491", "효빈 버스 491": "bus_490.html#491", "효빈버스491": "bus_490.html#491",
    "bus 492": "bus_490.html#492", "bus492": "bus_490.html#492", "bus_492": "bus_490.html#492", "492번": "bus_490.html#492", "효빈_버스_492": "bus_490.html#492", "효빈 버스 492": "bus_490.html#492", "효빈버스492": "bus_490.html#492",
    "bus 551": "bus_550.html#551", "bus551": "bus_550.html#551", "bus_551": "bus_550.html#551", "551번": "bus_550.html#551", "효빈_버스_551": "bus_550.html#551", "효빈 버스 551": "bus_550.html#551", "효빈버스551": "bus_550.html#551",
    "bus 552": "bus_550.html#552", "bus552": "bus_550.html#552", "bus_552": "bus_550.html#552", "552번": "bus_550.html#552", "효빈_버스_552": "bus_550.html#552", "효빈 버스 552": "bus_550.html#552", "효빈버스552": "bus_550.html#552",
    "bus 581": "bus_580.html#581", "bus581": "bus_580.html#581", "bus_581": "bus_580.html#581", "581번": "bus_580.html#581", "효빈_버스_581": "bus_580.html#581", "효빈 버스 581": "bus_580.html#581", "효빈버스581": "bus_580.html#581",
    "bus 582": "bus_580.html#582", "bus582": "bus_580.html#582", "bus_582": "bus_580.html#582", "582번": "bus_580.html#582", "효빈_버스_582": "bus_580.html#582", "효빈 버스 582": "bus_580.html#582", "효빈버스582": "bus_580.html#582",
    "bus 591": "bus_590.html#591", "bus591": "bus_590.html#591", "bus_591": "bus_590.html#591", "591번": "bus_590.html#591", "효빈_버스_591": "bus_590.html#591", "효빈 버스 591": "bus_590.html#591", "효빈버스591": "bus_590.html#591",
    "bus 592": "bus_590.html#592", "bus592": "bus_590.html#592", "bus_592": "bus_590.html#592", "592번": "bus_590.html#592", "효빈_버스_592": "bus_590.html#592", "효빈 버스 592": "bus_590.html#592", "효빈버스592": "bus_590.html#592"
}

def build_js_index():
    """기존 Node.js 스크립트를 완벽 대체하여 js_paths.js와 SPA 스니펫 로그를 생성합니다."""
    previously_scanned = {}
    
    if os.path.exists(JS_OUTPUT_PATH):
        try:
            with open(JS_OUTPUT_PATH, 'r', encoding='utf-8') as f:
                content = f.read()
                match = re.search(r'window\.filePaths\s*=\s*(\{.*?\});', content, re.DOTALL)
                if match:
                    previously_scanned = json.loads(match.group(1))
        except Exception as e:
            print("[경고] 기존 인덱스 파싱 실패. 처음부터 스캔합니다.")
            
    file_paths = {}
    spa_snippets = []
    
    for scan_info in DIRECTORIES_TO_SCAN:
        d = scan_info['dir']
        prefix = scan_info['prefix']
        if os.path.exists(d):
            for file in os.listdir(d):
                if file.endswith('.js') and file not in IGNORE_FILES and os.path.isfile(os.path.join(d, file)):
                    name_without_ext = file[:-3]
                    file_paths[name_without_ext] = prefix
                    
                    if name_without_ext not in previously_scanned and name_without_ext not in MANUAL_ALIASES:
                        spa_snippets.append(f'    "{name_without_ext}": "틀_뷰어_SPA.html#{name_without_ext}",')

    sorted_file_paths = dict(sorted(file_paths.items()))
    combined_alias = {**MANUAL_ALIASES, **EXTRA_MAPPINGS}
    
    current_time_str = time.strftime('%Y. %m. %d. %p %I:%M:%S').replace("AM", "오전").replace("PM", "오후")
    js_content = f"""/**
 * HyobinWiki JS Master Index (Auto-Generated & Fixed Aliases)
 * 업데이트: {current_time_str}
 */

window.filePaths = {json.dumps(sorted_file_paths, ensure_ascii=False, indent=4)};
window.aliasMap = {json.dumps(combined_alias, ensure_ascii=False, indent=4)};
window.specificDB = {json.dumps(MANUAL_SPECIFIC_DB, ensure_ascii=False, indent=4)};
"""
    with open(JS_OUTPUT_PATH, 'w', encoding='utf-8') as f:
        f.write(js_content)
        
    if spa_snippets:
        log_content = "// 이번에 새롭게 추가된 JS 파일들의 SPA 링크입니다.\n// 아래 코드를 복사해서 MANUAL_ALIASES(파이썬 코드 내) 안에 붙여넣으세요.\n// 한 번 추출된 파일은 다음 실행부터 이 텍스트 파일에 나오지 않습니다.\n\n"
        log_content += '\n'.join(spa_snippets) + '\n'
        with open(SPA_LOG_PATH, 'w', encoding='utf-8') as f:
            f.write(log_content)
        print(f"🔥 새롭게 발견된 {len(spa_snippets)}개의 SPA 링크가 [{SPA_LOG_PATH}]에 추출되었습니다.")
    else:
        with open(SPA_LOG_PATH, 'w', encoding='utf-8') as f:
            f.write("// 이번 실행에서 새롭게 추가할 JS 파일이 없습니다.\n")

    return combined_alias

def get_extended_category(title, url):
    if "틀_뷰어_SPA" in url:
        if any(x in title for x in ["관내", "행정", "구역"]): return "틀/SPA 뷰어 (행정)"
        if any(x in title for x in ["버스", "교통", "노선"]): return "틀/SPA 뷰어 (교통)"
        return "틀/SPA 뷰어"
    if "bus" in url.lower() or "번" in title or "버스" in title: return "교통/버스 노선"
    
    if ".html" in url:
        is_district = any(title.endswith(x) for x in ["읍", "면", "동", "리", "가"]) or "동(" in title
        is_city = any(title.endswith(x) for x in ["시", "군", "구"])
        
        if is_district:
            doc_name = url.split('.html')[0].split('/')[-1]
            return f"행정구역 (읍면동리)/{doc_name}"
            
        if is_city: 
            return "지리/행정구역 (시군구)"
        return "지리/지역 정보"
        
    return "기타/참조 문서"

def get_dynamic_category(url):
    if "역사_템플릿" in url: return "교통/철도역"
    if "빌런" in url: return "인물/빌런"
    if "피해_사례집" in url: return "인물/피해자"
    if "고등학교_템플릿" in url: return "교육기관/고등학교"
    if "효빈대" in url: return "효빈대학교/시설"
    return "기타"

def get_js_dynamic_categories():
    js_path = os.path.join(WIKI_PATH, 'assets', '10대_효빈시의원_목록.js')
    results = []
    if not os.path.exists(js_path): return results
    try:
        with open(js_path, 'r', encoding='utf-8') as f: content = f.read()
        member_blocks = re.findall(r'"([가-힣]+)":\s*\{(.*?)\}', content, re.DOTALL)
        for name, block in member_blocks:
            cats = ["효빈광역시의원"]
            party = re.search(r'party:\s*"([^"]+)"', block)
            if party: cats.append(f"{party.group(1)} 소속")
            district = re.search(r'district:\s*"([^"]+)"', block)
            if district:
                dist_name = district.group(1).split()[0]
                cats.append(f"{dist_name}의 정치")
                if "비례" not in dist_name: cats.append(f"{dist_name} 출신")
            birth = re.search(r'birth:\s*\'(\d{4})년', block)
            if birth: cats.append(f"{birth.group(1)}년 출생")
            history = re.search(r'history:\s*"([^"]+)"', block)
            if history:
                first_line = history.group(1).split('<br>')[0]
                school_match = re.search(r'([가-힣a-zA-Z]+(?:대학교|고등학교|중학교|초등학교))', first_line)
                if school_match: cats.append(f"{school_match.group(1)} 출신")
            results.append({"title": name, "url": f"10대_시의원.html#{name}", "cats": cats})
    except Exception as e: print(f"⚠️ JS 파일 파싱 오류: {e}")
    return results

def assign_category(cat_full, item_data, category_map, sub_categories):
    """🔥 부모 카테고리 자동 생성 로직 초정밀 업그레이드"""
    parent = None
    
    # 1. 기존 '/' 명시적 하위 분류
    if '/' in cat_full:
        parent = cat_full.split('/')[0]
    else:
        # 2. 'YYYY년' 연도별 묶음
        year_match = re.match(r'^(\d{4}년(?:대)?)\s', cat_full)
        if year_match:
            parent = year_match.group(1)
            
        # 3. '~의 ~' 패턴 (예: "효빈광역시의 국회의원" -> "효빈광역시")
        elif '의 ' in cat_full:
            candidate = cat_full.split('의 ')[0]
            if 1 < len(candidate) <= 15:
                parent = candidate
                
        # 4. 'OO OO' 띄어쓰기 패턴 (예: "더불어민주당 소속" -> "더불어민주당")
        elif ' ' in cat_full:
            candidate = cat_full.split(' ')[0]
            if 1 < len(candidate) <= 15:
                parent = candidate

    # 부모 카테고리가 자기 자신과 똑같으면 방어 (루프 방지)
    if parent == cat_full:
        parent = None

    # 추출된 부모가 있다면 연결
    if parent:
        if parent not in sub_categories: 
            sub_categories[parent] = []
        if cat_full not in sub_categories[parent]: 
            sub_categories[parent].append(cat_full)
        if parent not in category_map: 
            category_map[parent] = []

    if cat_full not in category_map: 
        category_map[cat_full] = []
    
    # URL 충돌 방지 로직 유지 (title과 url이 둘 다 동일해야 중복 취급)
    if not any(d['title'] == item_data['title'] and d['url'] == item_data['url'] for d in category_map[cat_full]):
        category_map[cat_full].append(item_data)

def generate_wiki_index():
    combined_alias = build_js_index()
    print("✅ [SPA 인덱싱 완료] js_paths.js 업데이트 성공")

    category_map = {}
    sub_categories = {}
    html_files = [f for f in os.listdir(WIKI_PATH) if f.endswith('.html') and f != RESULT_FILE]
    bad_classes = ['wiki-container', 'wiki-content', 'view-section', 'wiki-footer', 'wiki-paragraph', 'wiki-heading', 'quote', 'comment', 'body-text']
    
    for filename in html_files:
        try:
            with open(os.path.join(WIKI_PATH, filename), 'r', encoding='utf-8') as f:
                soup = BeautifulSoup(f, 'html.parser')
                view_sections = soup.find_all('div', class_='view-section')
                person_views = [v for v in view_sections if v.get('id', '').startswith('view-') and v.get('id') != 'view-home']
                
                target_blocks = []
                if person_views:
                    for view in person_views:
                        name = view.get('id').replace('view-', '')
                        target_blocks.append({'title': name, 'url': f"{filename}#{name}", 'soup': view})
                else:
                    doc_title = soup.title.string.replace(' - 효빈위키', '').strip() if soup.title else filename.replace('.html', '')
                    target_blocks.append({'title': doc_title, 'url': filename, 'soup': soup})

                for block in target_blocks:
                    final_categories = []
                    cat_boxes = list(block['soup'].find_all('div', class_=re.compile(r'category-box|classification-box|wiki-context-area')))
                    for tag in block['soup'].find_all(['div', 'p']):
                        if tag.text and ('분류:' in tag.text or '분류 :' in tag.text):
                            tag_classes = tag.get('class', [])
                            if isinstance(tag_classes, str): tag_classes = [tag_classes]
                            is_bad = False
                            parent_node = tag
                            while parent_node:
                                p_classes = parent_node.get('class', [])
                                if isinstance(p_classes, str): p_classes = [p_classes]
                                if any(bc in p_classes for bc in bad_classes):
                                    if not any(good in p_classes for good in ['category-box', 'classification-box']):
                                        is_bad = True
                                        break
                                parent_node = parent_node.parent
                            
                            if not is_bad and not tag.find(['div', 'p']):
                                if tag not in cat_boxes: cat_boxes.append(tag)
                    
                    for cb in cat_boxes:
                        a_tags = cb.find_all('a')
                        if a_tags: raw_cat_list = [a.get_text(strip=True) for a in a_tags if '분류' not in a.get_text(strip=True)]
                        else:
                            full_text = cb.get_text(separator=' ')
                            raw_cat = full_text.split('분류:')[1] if '분류:' in full_text else full_text.split('분류 :')[1] if '분류 :' in full_text else full_text
                            raw_cat_list = [c.strip() for c in raw_cat.split('|')]
                            
                        for c in raw_cat_list:
                            clean_c = c.split('\n')[0].strip()
                            if clean_c and len(clean_c) <= 30 and '{' not in clean_c and '}' not in clean_c and '=' not in clean_c:
                                if not any(end in clean_c for end in ['다.', '요.', '까?', '죠.', '습니다']):
                                    final_categories.append(clean_c)
                    
                    for cat_full in list(set(final_categories)):
                        assign_category(cat_full, {'title': block['title'], 'url': block['url']}, category_map, sub_categories)
        except Exception as e:
            continue

    for title, url in DYNAMIC_LIST:
        cat_full = get_dynamic_category(url)
        assign_category(cat_full, {'title': title, 'url': url}, category_map, sub_categories)

    for item in get_js_dynamic_categories():
        for cat_full in item["cats"]:
            assign_category(cat_full, {'title': item["title"], 'url': item["url"]}, category_map, sub_categories)

    for title, url in combined_alias.items():
        cat_full = get_extended_category(title, url)
        assign_category(cat_full, {'title': title, 'url': url}, category_map, sub_categories)

    json_cat_map = json.dumps(category_map, ensure_ascii=False)
    json_sub_cat = json.dumps(sub_categories, ensure_ascii=False)

    # 🔥 ad_logic.js 추가 적용된 HTML 템플릿
    html_content = f"""<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>분류 - 효빈위키</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;800&display=swap');
        
        :root {{ 
            --wiki-main: #7777AA; 
            --wiki-border: #ccc; 
            --wiki-bg: #ffffff; 
            --wiki-text: #373a3c; 
            --wiki-gray-bg: #f9f9f9; 
            --wiki-link: #0022aa; 
            --wiki-visited: #800080;
            --wiki-table-header: #7777AA; 
        }}

        body {{ font-family: 'Noto Sans KR', sans-serif; background-color: var(--wiki-bg); color: var(--wiki-text); line-height: 1.6; word-break: keep-all; margin: 0; }}
        .wiki-container {{ max-width: 1300px; margin: 0 auto; padding: 20px 40px; border-left: 1px solid var(--wiki-border); border-right: 1px solid var(--wiki-border); min-height: 100vh; background-color: var(--wiki-bg); }}

        .txt-lvl-1 {{ font-size: 2.8rem !important; font-weight: 800; color: #000; margin-bottom: 0.5rem; line-height: 1.1; letter-spacing: -1px; }} 
        h2 {{ font-size: 1.6rem !important; font-weight: 700 !important; border-bottom: 2px solid var(--wiki-table-header); padding-bottom: 8px; margin-top: 3rem; margin-bottom: 1.2rem; display: block; }}
        
        a.wiki-link {{ color: var(--wiki-link); text-decoration: none; cursor: pointer; }}
        a.wiki-link:hover {{ text-decoration: underline; }}
        a.wiki-link:visited {{ color: var(--wiki-visited); }}

        .wiki-tool-group {{ display: flex; gap: 4px; margin-bottom: 15px; justify-content: flex-end; }}
        .wiki-tool-btn {{ padding: 4px 12px; font-size: 13px; border: 1px solid #ccc; background: linear-gradient(to bottom, #fff, #eee); cursor: pointer; border-radius: 2px; color: #333; text-decoration: none; }}

        .search-bar {{ border: 1px solid #ccc; padding: 4px 8px; font-size: 14px; width: 250px; }}
        .search-btn {{ background-color: #555588; color: white; border: none; padding: 4px 10px; cursor: pointer; font-size: 14px; }}
        .inner-search {{ width: 100%; border: 1px solid var(--wiki-border); padding: 10px 14px; border-radius: 4px; margin-bottom: 20px; font-size: 15px; outline: none; transition: border 0.2s; }}
        .inner-search:focus {{ border-color: var(--wiki-main); box-shadow: 0 0 5px rgba(119, 119, 170, 0.3); }}

        .cat-grid {{ display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 12px; list-style: none; padding: 0; }}
        .cat-grid li {{ margin-bottom: 5px; }}
        .sub-box {{ border: 1px solid var(--wiki-border); background: var(--wiki-gray-bg); padding: 20px; margin-bottom: 30px; border-radius: 4px; }}
        .sub-box h3 {{ margin-top: 0; font-size: 1.2rem; font-weight: bold; border-bottom: 1px solid #ddd; padding-bottom: 10px; margin-bottom: 15px; }}
        .doc-list {{ display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; list-style: none; padding: 0; }}
        .doc-list li::before {{ content: "📄 "; font-size: 0.8em; }}
        .tag-badge {{ background-color: #999; color: white; font-size: 0.7rem; padding: 2px 5px; border-radius: 3px; margin-left: 5px; vertical-align: middle; }}
    </style>
</head>
<body>
    <nav class="bg-[#7777AA] text-white p-2 px-4 flex justify-between items-center shadow-md sticky top-0 z-50 h-14">
        <div class="flex items-center gap-4 cursor-pointer" onclick="location.href='index.html'">
            <span class="font-bold text-xl tracking-tight">HyobinWiki</span>
        </div>
        <div class="flex items-center gap-1">
            <input type="text" id="searchInput" placeholder="여기에서 검색" class="search-bar rounded-sm text-black" onkeypress="if(event.keyCode==13) handleSearch()">
            <button onclick="handleSearch()" class="search-btn rounded-sm">🔍</button>
        </div>
    </nav>

    <div class="wiki-container shadow-lg pt-6">
        <div class="flex justify-between items-end border-b-2 border-gray-400 pb-2 mb-6">
            <div class="txt-lvl-1" id="page-title">분류: 전체</div>
            <div class="wiki-tool-group">
                <a href="#전체" class="wiki-tool-btn">전체 분류 보기</a>
                <a href="#" class="wiki-tool-btn">역사</a>
            </div>
        </div>

        <div>
            <input type="text" id="innerSearch" placeholder="현재 화면에서 분류/문서 검색..." class="inner-search" onkeyup="filterItems()">
        </div>

        <div id="app" class="min-h-[500px]"></div>
        
        <div id="footer-container"></div>
    </div>

    <script src="assets/wiki_index.js"></script>
    <script src="secret_search.js"></script>
    <script src="assets/hb_wiki_core.js?v=2"></script>
    <script src="assets/hb_index_scripts.js"></script>
    <script src="assets/jana.js"></script>
    <script src="assets/load-footer.js"></script>
    <script src="ad_logic.js"></script>

    <script>
        function handleSearch() {{
            const query = document.getElementById('searchInput').value.trim();
            if (query) window.location.href = query + '.html';
        }}

        function filterItems() {{
            const query = document.getElementById('innerSearch').value.toLowerCase();
            document.querySelectorAll('.cat-grid li, .doc-list li').forEach(li => {{
                const text = li.innerText.toLowerCase();
                li.style.display = text.includes(query) ? '' : 'none';
            }});
            document.querySelectorAll('h2').forEach(h2 => {{
                const ul = h2.nextElementSibling;
                if(ul && (ul.classList.contains('doc-list') || ul.classList.contains('cat-grid'))) {{
                    const visibleItems = Array.from(ul.querySelectorAll('li')).filter(li => li.style.display !== 'none');
                    h2.style.display = visibleItems.length > 0 ? '' : 'none';
                }}
            }});
            const subBox = document.querySelector('.sub-box');
            if (subBox) {{
                const visibleSubs = Array.from(subBox.querySelectorAll('li')).filter(li => li.style.display !== 'none');
                subBox.style.display = visibleSubs.length > 0 ? '' : 'none';
            }}
        }}

        const categoryMap = {json_cat_map};
        const subCategories = {json_sub_cat};

        const CHOSUNG = ['ㄱ','ㄲ','ㄴ','ㄷ','ㄸ','ㄹ','ㅁ','ㅂ','ㅃ','ㅅ','ㅆ','ㅇ','ㅈ','ㅉ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ'];
        function getChosung(text) {{
            if (!text) return "#";
            const first = text.trim().charAt(0);
            const code = first.charCodeAt(0);
            if (code >= 44032 && code <= 55203) return CHOSUNG[Math.floor((code - 44032) / 588)];
            return first.match(/[a-zA-Z0-9]/) ? first.toUpperCase() : "#";
        }}

        function render() {{
            const app = document.getElementById('app');
            const pageTitle = document.getElementById('page-title');
            const hash = decodeURIComponent(window.location.hash.substring(1));
            const searchInput = document.getElementById('innerSearch');
            if (searchInput) searchInput.value = '';

            if (!hash || hash === "전체") {{
                pageTitle.innerText = "분류: 전체";
                let html = '<p class="mb-6">이 위키에 존재하는 모든 분류의 목록입니다. 하위 분류 및 문서를 보려면 각 항목을 클릭하세요.</p>';
                
                const catGrouped = {{}};
                Object.keys(categoryMap).forEach(cat => {{
                    const cho = getChosung(cat);
                    if (!catGrouped[cho]) catGrouped[cho] = [];
                    catGrouped[cho].push(cat);
                }});

                Object.keys(catGrouped).sort().forEach(cho => {{
                    html += `<h2>${{cho}}</h2><ul class="cat-grid mb-8">`;
                    catGrouped[cho].sort().forEach(cat => {{
                        const docCnt = categoryMap[cat] ? categoryMap[cat].length : 0;
                        const subCnt = subCategories[cat] ? subCategories[cat].length : 0;
                        let countText = `문서 ${{docCnt}}개`;
                        if(subCnt > 0) countText += `, 하위분류 ${{subCnt}}개`;
                        html += `<li><a href="#${{cat}}" class="wiki-link font-bold text-lg">📁 분류:${{cat}}</a> <span class="text-sm text-gray-500">(${{countText}})</span></li>`;
                    }});
                    html += '</ul>';
                }});
                app.innerHTML = html;
            }} else if (categoryMap[hash]) {{
                pageTitle.innerText = `분류: ${{hash}}`;
                let html = '';

                // [추가된 부분] 상위 분류 찾기
                let parentCategory = null;
                for (const parent in subCategories) {{
                    if (subCategories[parent].includes(hash)) {{
                        parentCategory = parent;
                        break;
                    }}
                }}
                
                if (parentCategory) {{
                    html += `<div style="margin-bottom: 15px;"><a href="#${{parentCategory}}" class="wiki-tool-btn inline-block font-bold" style="color: #444; border-color: #999;">↖ 상위 분류(${{parentCategory}})로 돌아가기</a></div>`;
                }} else {{
                    html += `<div style="margin-bottom: 15px;"><a href="#전체" class="wiki-tool-btn inline-block font-bold" style="color: #444; border-color: #999;">↖ 전체 분류 목록으로 돌아가기</a></div>`;
                }}

                if (subCategories[hash] && subCategories[hash].length > 0) {{
                    html += `<div class="sub-box"><h3>이 분류의 하위 분류 <span class="text-sm font-normal text-gray-500">(${{subCategories[hash].length}}개)</span></h3><ul class="cat-grid" style="grid-template-columns: repeat(4, 1fr);">`;
                    subCategories[hash].sort().forEach(sub => {{
                        const subDocCnt = categoryMap[sub] ? categoryMap[sub].length : 0;
                        const subSubCnt = subCategories[sub] ? subCategories[sub].length : 0;
                        let subCountText = `문서 ${{subDocCnt}}개`;
                        if(subSubCnt > 0) subCountText += `, 하위분류 ${{subSubCnt}}개`;
                        html += `<li><a href="#${{sub}}" class="wiki-link">📂 ${{sub.split('/').pop()}}</a> <span class="text-xs text-gray-500">(${{subCountText}})</span></li>`;
                    }});
                    html += `</ul></div>`;
                }}

                html += `<p class="mb-6 font-bold text-gray-600">다음은 이 분류에 속하는 문서 ${{categoryMap[hash].length}}개입니다.</p>`;
                const grouped = {{}};
                categoryMap[hash].forEach(d => {{
                    const cho = getChosung(d.title);
                    if (!grouped[cho]) grouped[cho] = [];
                    grouped[cho].push(d);
                }});

                Object.keys(grouped).sort().forEach(cho => {{
                    html += `<h2>${{cho}}</h2><ul class="doc-list mb-8">`;
                    grouped[cho].sort((a,b) => a.title.localeCompare(b.title)).forEach(d => {{
                        const tag = (d.url.includes('?') || d.url.includes('#')) ? '<span class="tag-badge">동적</span>' : '';
                        html += `<li><a href="${{d.url}}" class="wiki-link">${{d.title}}</a>${{tag}}</li>`;
                    }});
                    html += `</ul>`;
                }});
                app.innerHTML = html;
            }} else {{
                pageTitle.innerText = "분류 찾을 수 없음";
                app.innerHTML = `<p class="text-red-500 font-bold">해당 분류가 존재하지 않습니다.</p>`;
            }}
            window.scrollTo(0, 0);
            filterItems();
        }}
        window.addEventListener('hashchange', render);
        render();
    </script>
</body>
</html>"""

    with open(RESULT_FILE, 'w', encoding='utf-8') as out:
        out.write(html_content)
    
    print(f"✅ [업데이트 완료] 분류.html 재생성 성공! ({time.strftime('%H:%M:%S')})")

last_trigger_time = 0

class WikiFileHandler(FileSystemEventHandler):
    def on_modified(self, event):
        global last_trigger_time
        if (event.src_path.endswith('.html') or event.src_path.endswith('.js')) and RESULT_FILE not in event.src_path and 'js_paths.js' not in event.src_path and 'new_spa_aliases.txt' not in event.src_path:
            current_time = time.time()
            if current_time - last_trigger_time > 2: 
                last_trigger_time = current_time
                filename = os.path.basename(event.src_path)
                print(f"\n🔄 변경 감지됨: {filename} -> 통합 자동화 엔진 재가동!")
                generate_wiki_index()

if __name__ == "__main__":
    print("\n=======================================================")
    print(" 🚀 효빈위키 통합 자동화 엔진 (Node.js 기능 완벽 이식판) ")
    print("=======================================================\n")
    
    generate_wiki_index()
    
    event_handler = WikiFileHandler()
    observer = Observer()
    observer.schedule(event_handler, path=WIKI_PATH, recursive=False)
    observer.start()
    
    print("\n👀 [감시견 모드 켜짐] 폴더를 지켜보고 있습니다. (종료: Ctrl + C)\n")
    
    try:
        while True: time.sleep(1)
    except KeyboardInterrupt:
        print("\n👋 자동화 엔진을 종료합니다. 수고하셨습니다!")
        observer.stop()
    observer.join()