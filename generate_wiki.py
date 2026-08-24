import os
import re
import csv
import io

# 원본 데이터 (TSV 형식 그대로 유지)
RAW_DATA = """브랜드	매장명	개점일	광역자치단체	운영사	주소	기타서비스	개요	위치적 특징	층별안내	연계교통	여담	상태	폐점일(폐점한곳 한정)
이마트	서해점	2003년 08월 31일	덕빈북도	이마트	덕빈북도 서해시 좌산동 23-15	일렉트로마트, 노브랜드, 스타벅스, 크린토피아	서해시 좌산동에 위치한 이마트 매장으로, 서해시 상권의 핵심을 담당하고 있는 메인 점포다.	서해시 구도심과 신항동 산업단지 사이에 위치하여 퇴근길 직장인들과 가족 단위 쇼핑객들의 접근성이 뛰어나다.	1층: 신선/가공식품/푸드코트, 2층: 일상용품/의류/일렉트로마트, 3~4층: 주차장	간선 101,107,110,209,좌산01	항만 노동자와 해군 가족들이 박스 떼기로 물건을 털어가는 서해시 상권의 영원한 터줏대감. ~~주말 오후에 차를 끌고 가면 주차장 진입로에서 인생의 덧없음을 느낄 수 있다.~~ 명절 전날에는 카트 범퍼카 레이싱이 열린다(...)	영업중	
이마트	약산점	2005년 04월 22일	덕빈북도	이마트	덕빈북도 약산시 역석동 104-2	문화센터, 약국, 안경점, 전기차충전소	약산시 역석동에 위치한 대형마트. 지역 주민들의 생활 물가를 방어하는 핵심 점포이자 훌륭한 여름철 피서지.	약산시 구도심 인근에 위치하며, 주거 밀집 지역과 맞닿아 있어 이른바 '슬세권' 도보 접근성이 높다.	지하1층: 신선/가공식품, 1층: 화장품/패션/생활용품, 2층: 문화센터/옥내주차장, 3층: 옥상주차장	간선 110,143,143,250,501,122,501,550,551	효빈광역시와 맞닿은 교통의 결절점 약산시에 위치해 있어, 주말마다 효빈에서 원정 쇼핑을 오는 얌체(?) 고객들로 붐빈다. 주변 아파트 단지 주민들의 영혼의 안식처이자 여름철 최고의 피서지. ~~에어컨을 얼마나 빵빵하게 트는지 냉동고기 코너에 가면 패딩이 마렵다.~~	영업중	
이마트	궁하점	2003년 05월 30일	덕빈북도	이마트	덕빈북도 천주시 궁하구 궁하동 55-12	일렉트로마트, 몰리스펫샵, 문화센터, 버거킹	천주시 궁하구에 위치한 이마트 지점. 천주시 부도심의 상권을 멱살 잡고 캐리하는 우량 매장이다.	빈효선 궁하역 초역세권으로 바로 연결되어 있어, 천주시민뿐 아니라 인근 외곽 지역에서도 지하철을 타고 원정을 온다.	1층: 농수산/축산/델리/푸드코트, 2층: 패션/가전/토이킹덤, 3층~5층: 전용주차장	빈효광역선 궁하역, 버스 1000번, 200번, 201번, 202번, 203번, 205번, 209번, 210번, 211번, 213번, 215번, 218번, 500번, 502번, 503번, 505번, 510번, 301번, 304번, 306번, 319번, 궁하 03번	빈효광역선 궁하역 초역세권 버프로 천주시 뚜벅이 쇼핑객들의 압도적인 지지를 받고 있다. 천주 시민들은 물론 인근 낭원군에서도 지하철 타고 원정을 온다. ~~천주시청 공무원들이 퇴근길에 델리 코너를 싹쓸이해간다는 전설이 있다.~~	영업중	
이마트	대뢰점	2006년 04월 21일	덕빈북도	이마트	덕빈북도 천주시 천성구 대뢰동 201	노브랜드, 스피드메이트, 동물병원	과거 월마트를 인수하여 개점한 점포로, 넓은 단층형 구조가 특징이라 카트 끌고 다니기 제일 편한 매장으로 꼽힌다.	천성구 외곽에 위치하여 자가용 접근이 용이하며, 광활한 대형 주차장을 완비하고 있어 주말 대량 구매 객들이 선호한다.	1층: 식품/생활/가전/패션 (단층형 넓은 특화매장), 2층: 옥상주차장	빈효광역선 대뢰역, 버스 100번, 200번, 30-1번	**원래는 월마트 대뢰점이었으나, 2006년 이마트가 월마트 코리아를 꿀꺽하면서 이마트로 간판을 갈아끼웠다.** 천주시 외곽에 위치해 있지만, 특유의 광활한 단층형 서양식 창고 구조 덕분에 카트 끌기가 예술적으로 편하다. ~~어쩐지 매장 구석에서 코스트코의 묘한 스멜이 느껴진다.~~	영업중	
이마트	강주점	2002년 07월 20일	덕빈북도	이마트	덕빈북도 강주시 심전동 88-9	푸드코트, 플레이타임(키즈카페), 배스킨라빈스	2002년 한일 월드컵 열기와 함께 개점하여 강주시민들의 오랜 사랑을 받아온 지역 밀착 친화형 매장이다.	강주항과 인접한 심전동에 위치해 있어 해산물과 수산물 코너의 신선도가 유독 뛰어나다는 지역 내 카더라가 있다.	지하1층: 식품관/푸드코트, 1층: 의류/가전/생활잡화, 2층~3층: 주차장	빈주광역선 심전역, 버스 22,30,110, 심전01,심전03	2002 한일 월드컵 4강 신화의 뜨거운 열기가 채 가시기도 전에 야심 차게 개점한 강주시의 역사적인 매장. 연식이 꽤 오래되어 지역 맘카페에서는 잊을 만하면 리뉴얼 떡밥이 점화된다(...) 항구도시 강주답게 수산물 코너의 선도가 미쳤다는 카더라가 있다.	영업중	
이마트	군천점	2006년 04월 17일	덕빈북도	이마트	덕빈북도 군천시 애음동 402-1	노브랜드, 전기차충전소, 치과, 세탁소	옛 월마트 부지를 재활용하여 넓은 주차 폭과 큼직큼직한 동선 등 서구형 마트의 장점을 그대로 흡수한 점포다.	애음동 대규모 주거단지 한가운데 있어 가족 단위 고객의 방문율이 압도적이며, 하교 시간엔 학생들의 간식 러시가 이어진다.	1층: 신선/가공식품/즉석조리, 2층: 가전/생활/의류/푸드코트, 3층: 옥상주차장	시내버스 100번, 200번, 110번, 130번, 160번, 180번, 910번, 920번, 301번, 302번, 303번, 304번, 305번, 애음 11번, 애음 12번	**이곳 역시 과거 월마트였던 곳.** 이마트로 간판이 바뀐 지 십수 년이 지났건만, 군천시 토박이 어르신들은 아직도 택시 타면 "월마트로 가주쇼!"라고 외친다(...) 거대한 주차 폭 덕분에 문콕 스트레스가 없는 것이 최고의 장점.	영업중	
이마트	계성점	2005년 04월 16일	덕빈북도	이마트	덕빈북도 계성시 마시동 11-4	스타벅스, 약국, 모두투어(여행사)	계성시의 유일한 이마트로, 높은 인구 밀도를 바탕으로 평일 주말 가리지 않고 붐비는 계성시 상권의 핵심 흑자 점포다.	일반철도 북계성역 바로 앞 상업지구에 위치하여 계성시 내 어디서든 접근하기 쉽고, 철도 환승객들도 쏠쏠하게 이용한다.	1층: 신선식품/델리/푸드코트, 2층: 일상용품/패션/문구완구, 3층~4층: 주차장	일반열차 북계성역, 102번, 209번, 210번, 마시 01번, 마시 02번	북계성역 바로 코앞에 있어서 열차 기다리던 승객들이 시간 때우러 들어왔다가 양손 무겁게 나간다는 마성의 점포. 계성시 상권을 나홀로 하드캐리하고 있는 알짜배기 흑자 매장이다. ~~사실상 계성시의 유일한 대형 테마파크 취급을 받는다.~~	영업중	
이마트	공항점	2007년 04월 22일	덕빈북도	이마트	덕빈북도 기도군 염곡읍 염곡리 77-1	환전소, 캐리어 보관소, 여행용품 특화존	효빈국제공항과 인접해 있어 공항 상주직원 및 여행객, 염곡읍 주민들을 모두 타겟으로 하는 이색적인 특수 매장.	공항으로 들어가는 길목에 위치하여 출국 전후 여행객들이 비상식량이나 캐리어, 생필품을 조달하는 최후의 보루로 쓰인다.	1층: 식품/여행용품/여행사/푸드코트, 2층: 의류/가전/생활, 3층: 옥상주차장	330번, 331번, 332번, 333번, 334번, 335번, 주길 21번 (간선 333번 포함)	효빈국제공항으로 들어가는 길목에 알박기를 제대로 시전한 특수 매장. 여행사 직원, 승무원, 출국을 앞두고 컵라면과 고추장을 사재기하는 여행객들의 최후의 보루다. ~~매장 안에 캐리어 끌고 다니는 사람이 카트 끄는 사람보다 많을 지경.~~	영업중	
이마트	조전점	2000년 03월 22일	덕빈남도	이마트	덕빈남도 덕주시 조전구 조전동 333	일렉트로마트, 노브랜드, 빕스(VIPS)	덕주시 조전구의 터줏대감으로, 새천년에 개점하여 주변 마트들의 공세 속에서도 굳건히 매출 상위권을 기록 중이다.	덕주1호선 조전역 초역세권이며, 주변 대형 아파트 단지를 든든한 배후 수요로 두고 있어 유동 인구가 마를 날이 없다.	지하1층: 식품/델리, 1층: 생활용품/패션/푸드홀, 2층: 일렉트로마트/주차장, 3층: 주차장	덕주1호선 조전역, 버스 100번,200번,300번,400번, 15번,16번	덕주1호선 개통과 함께 새천년에 개점한 덕주시 유통업계의 훌륭한 고인물. 조전구 3대장 마트(이마트, 롯데, 홈플) 전쟁의 최선봉장으로, 주말 저녁이면 타임 세일을 노리는 하이에나들의 눈치 게임이 치열하다.	영업중	
이마트	낙주점	2002년 01월 29일	덕빈남도	이마트	덕빈남도 낙주시 이달동 59-22	탑텐, 다이소, 이마트 문화센터	낙주시 이달동 신시가지 개발의 신호탄과 함께 들어서서 지역 상권을 크게 부흥시킨 일등 공신 대형 마트.	교통의 요지인 낙주 시내버스의 주요 결절점에 있어 환승 겸 들르는 유동인구가 매우 많아 입지 조건이 사기적이다.	1층: 농수산/가공식품, 2층: 의류/생활용품, 3층: 문화센터/옥내주차장, 4층: 옥상주차장	8100번, 902번, 101번, 이달 41번	낙주시 이달동 신시가지 개발 시기에 완벽하게 무임승차(...)하여 대박을 친 매장. 낙주 시내버스들이 모조리 집결하는 환승 거점이라 버스 기다리다 홀린 듯이 들어가게 된다. ~~할인행사 날에는 낙주시민 절반이 이곳에 모인다는 소문이 있다.~~	영업중	
이마트	방산점	2007년 04월 01일	덕빈남도	이마트	덕빈남도 방산시 청전동 120	안경점, 스피드메이트, 크린토피아	방산시 내 유일무이한 이마트로 지역 내에서 독점적인 지위를 누리며 상권 블랙홀 역할을 제대로 하고 있다.	청전동 중심상가에 위치해 방산시민들은 물론, 인근 읍면 지역에서도 주말마다 원정 쇼핑을 쏟아져 들어오는 거점 매장.	지하1층: 주차장, 1층: 신선/가공식품/푸드홀, 2층: 패션/가전/장난감	1번, 3번, 12번, 16번, 121번, 122번, 131번	방산시 유일무이한 이마트. 마땅한 대형 경쟁사가 없어서 지역 상권을 블랙홀처럼 빨아들이며 독점 수준으로 꿀을 빨고 있다. 주변 읍면 지역 주민들의 주말 나들이 1순위 코스로 각광받는 중.	영업중	
이마트	운진점	2012년 03월 22일	덕빈남도	이마트	덕빈남도 운진군 운진읍 중앙리 4-8	약국, 농기구 특화존, 시외버스 무인발권기	운진군의 얼마 없는 핵심 문화·상업 시설로, 주말이면 군민들의 나들이 장소 및 데이트 코스(...)로도 맹활약하는 곳.	일반철도 운진역 및 버스터미널과 가까워 읍내뿐 아니라 외곽 면 단위 주민들의 접근성이 뛰어나다.	1층: 식품/잡화/푸드코트/농기자재 (단층형 특화 매장), 옥상: 옥상주차장	일반철도 운진역, 버스 1번, 4번, 5번, 6번, 9번, 운진101번	군(郡) 단위에 기적처럼 입점한 매우 귀하신 대형마트. 운진군 군민들에게는 마트 그 이상, 복합 문화공간이자 만남의 광장 역할을 한다. ~~농기구 특화존이 유독 인기가 많은 것을 보면 읍면 단위 마트의 짙은 향기가 난다.~~	영업중	
이마트	하정점	2007년 01월 02일	덕빈남도	이마트	덕빈남도 하정시 하정동 250-1	문화센터, 플레이타임, 대형 서점	하정시의 중심부에 위치하여 우수한 교육 및 주거 인프라와 훌륭한 시너지를 내고 있는 우량 점포.	학교 및 대형 학원가 밀집 지역 인근에 있어 학용품 및 문구류 회전율이 매우 높고, 교육 관련 행사가 잦은 편이다.	1층: 식품관/델리, 2층: 생활용품/문구완구, 3층: 의류/서점/문화센터, 4~5층: 주차장	101번, 103번, 108번, 117번, 900번, 11번,13번, 교육 11번	하정시 중심 상권 학원가 밀집 지역에 위치해 있어 하교 시간이 되면 중고등학생들의 시식 코너 러시가 펼쳐진다. 문화센터와 대형 서점 버프로 교육열 높은 학부모들의 성지로 불린다.	영업중	
롯데마트	서해점	2004년 08월 12일	덕빈북도	롯데쇼핑	덕빈북도 서해시 우궁동 10-33	토이저러스, 하이마트, 다이소, 롭스	서해시 우궁동의 대규모 아파트 단지를 배후로 둔 롯데마트의 핵심 지점으로 쾌적한 쇼핑 환경을 자랑한다.	인근 이마트 서해점과 길 하나를 두고 상권을 양분하여 피 터지게 싸우는 중이며, 토이저러스 버프로 어린이 방문객이 특히 많다.	1층: 식품/델리/푸드코트, 2층: 하이마트/토이저러스/생활용품, 3~4층: 주차장	910번, 100번, 101번, 102번, 107번, 209번, 210번, 211번, 서해 11번, 서해 12번, 우궁 21번, 우궁 22번	서해시 상권에서 이마트 서해점과 길 하나를 사이에 두고 피 터지는 출혈 경쟁을 벌이는 전투적인 매장. 거대한 토이저러스가 입점해 있어 주말마다 자녀들의 등쌀에 밀려 지갑이 털리는 부모님들의 탄식이 끊이지 않는다(...)	영업중	
롯데마트	약산점	2008년 05월 20일	덕빈북도	롯데쇼핑	덕빈북도 약산시 장곡읍 입주리 99	하이마트, 롯데문화센터, 펫가든	약산시와 효빈광역시의 경계 관문에 위치하여 약산시민은 물론 효빈 외곽 주민들의 수요까지 쪽쪽 빨아들이는 알짜 지점.	효빈1호선 장곡역과 비를 안 맞고 바로 연결된 초역세권으로, 원정 쇼핑객과 대중교통 이용객의 비율이 기형적으로 높다.	지하1층: 식품/푸드코트, 1층: 잡화/패션의류, 2층: 하이마트/문화센터/펫가든, 3층: 주차장	효빈1호선 장곡역,101번, 220번, 270번, 301번, 320번, 370번, 455번, 531번, 570번, 3000번, 4000번, 장곡순환 01번, 장곡순환 02번, 장곡순환 03번	효빈1호선 장곡역과 비 안 맞고 바로 연결되는 사기적인 초역세권을 자랑한다. 효빈광역시에서 지하철 타고 원정 쇼핑을 오는 고객이 더 많다는 주객전도의 현장. ~~주말만 되면 장곡역 일대는 카트 끌고 다니는 사람들로 마비된다.~~	영업중	
롯데마트	천성점	2005년 09월 09일	덕빈북도	롯데쇼핑	덕빈북도 천주시 천성구 복주동 502-1	룸바이홈, 토이저러스, 스팀세차장	천성구의 중심 상권에 위치해 있으며, 수차례의 지속적인 매장 리뉴얼을 통해 깔끔하고 세련된 환경을 유지하고 있다.	천주시청과 가깝고 복주동 상업지구 정중앙에 위치해 있어 평일 낮에도 유동 인구가 끊이지 않는 목 좋은 곳이다.	지하1층: 식품/와인코너/델리, 1층: 의류/화장품/잡화, 2층: 홈퍼니싱(룸바이홈)/토이저러스, 3~4층: 주차장	102번, 108번, 110번, 123번, 126번, 132번, 503번, 436번, 천성 13번	2005년 9월 9일에 개점하여 당시 숫자 '9' 마케팅을 신나게 우려먹었던 전적이 있다. 천성구 중심가라 접근성이 좋아 평일 낮에도 유동 인구가 미어터지는 알짜 점포. 주차장 진입로가 다소 좁아 초보 운전자들의 무덤으로 통한다.	영업중	
롯데마트	군천점	2010년 02월 10일	덕빈북도	롯데쇼핑	덕빈북도 군천시 하강동 44-7	다이소, 안경점, 치과, 약국	과거 쏠쏠하게 장사 잘되던 GS마트 시절의 탄탄한 단골 고객층을 그대로 물려받아 안정적인 캐시카우 역할을 하는 점포.	군천시 하강동 주거단지 한가운데 박혀있어 굳이 차를 안 끌고 나와도 되는 '슬세권' 도보 쇼핑객이 압도적으로 많다.	1층: 신선식품/가공식품/푸드코트, 2층: 일상용품/다이소/패션, 3층: 옥상주차장	110번, 140번, 170번, 601번, 602번, 603번, 604번, 605번, 606번, 고옥 41번	**본래 쏠쏠하게 장사 잘되던 GS마트였으나, 2010년 롯데쇼핑이 GS리테일 마트 부문을 인수합병하면서 하루아침에 롯데 간판을 달게 되었다.** ~~군천시 주민들은 아직도 조리식품 코너는 GS 시절 퀄리티가 훨씬 혜자였다며 눈물을 훔친다.~~	영업중	
롯데마트	전산점	2004년 08월 25일	덕빈북도	롯데쇼핑	덕빈북도 전산시 전산동 700	하이마트, 스피드메이트, 펠리체(미용실)	전산시 최초의 대형마트 타이틀을 달고 개점하여 지역민들에게 높은 인지도와 충성도를 확보하고 있는 상징적인 점포.	전산시 중심 십자 교차로에 위치해 접근이 쉬우며, 답답한 주차타워 대신 광활한 평면 주차장을 보유하고 있어 초보 운전자들에게 성지(?)로 불린다.	1층: 식품/가전/패션 (단층형 특화구조), 실외: 초특대형 평면주차장	900번, 100번, 102번, 103번, 201번, 202번, 304번, 305번, 409번, 410번, 501번, 502번, 503번, 10번, 11번	전산시 최초의 대형마트 1호점이라는 근본 타이틀을 지니고 있다. 답답한 주차타워 대신 광활하고 넓은 평면 주차장을 보유하고 있어, 주차에 트라우마가 있는 초보 운전자들에게는 거의 종교 시설급 성지로 추앙받는다.	영업중	
롯데마트	낭원점	2007년 12월 14일	덕빈북도	롯데쇼핑	덕빈북도 낭원군 낭원읍 광전리 15-2	토이저러스, 다이소, 푸드홀	낭원군 내에서 사실상 백화점 역할까지 도맡아 하며 군민들의 쇼핑과 문화생활을 전부 커버하는 낭원읍 최고의 핫플레이스.	거의 모든 군내 시내버스가 롯데마트 앞을 지나가는 교통의 결절점에 위치해 있어 버스 환승객들의 방문율이 가히 사기적이다.	1층: 신선식품/가공/델리/푸드홀, 2층: 토이저러스/생활잡화/의류, 3층: 옥상주차장	900번, 910번, 101번, 101-1번, 110번, 150번, 160번, 202번, 202-1번, 202-2번, 207번, 207-1번, 207-2번, 207-3번, 207-4번, 209번, 209-1번, 209-2번, 209-3번, 210번, 210-1번, 504번, 504-1번, 504-2번, 505번, 505-1번, 505-2번, 506번, 506-1번, 506-2번, 506-3번, 510번, 511-2번, 512번, 512-1번, 낭원 13번, 낭원 14번	버스 연계가 가히 폭력적인 수준이다. 낭원군 시내버스가 롯데마트 앞을 안 지나가면 간첩이라는 농담이 있을 정도. 사실상 군내 유일의 복합쇼핑몰 역할을 도맡아 하며 군민들의 문화생활을 독점 중이다.	영업중	
롯데마트	조전점	2002년 04월 18일	덕빈남도	롯데쇼핑	덕빈남도 덕주시 조전구 조전동 312-5	하이마트, 롯데문화센터, 플레이타임	인근의 이마트, 홈플러스와 함께 이른바 '조전구 마트 삼국지'를 형성하며 박터지게 경쟁 중인 전투적인 점포.	덕주1호선 조전구청역 바로 앞에 위치해 있으며 주변 상업 인프라와 빽빽하게 맞물려 있어 퇴근 시간대 유동 인구가 어마어마하다.	지하2층~지하1층: 주차장, 1층: 식품관/푸드코트/잡화, 2층: 하이마트/의류/문화센터/키즈카페	덕주1호선 조전구청역,버스210번,300번,410번, 17번,16번	'조전구 마트 삼국지'의 한 축. 덕주1호선 조전구청역 바로 앞이라는 미친 입지 덕분에 퇴근 시간대 유동 인구가 어마어마하다. 인근 이마트를 견제하느라 전단지 할인 품목이 매주 박터지게 겹치는 치킨게임을 구경할 수 있다.	영업중	
롯데마트	낙주점	2006년 10월 27일	덕빈남도	롯데쇼핑	덕빈남도 낙주시 삼채동 88-1	토이저러스, 보틀벙커, 다이소	매장 규모가 웬만한 복합쇼핑몰 뺨치게 크고 넓기로 유명하며, 최근 리뉴얼로 초대형 와인 전문점인 보틀벙커를 입점시켰다.	삼채동 신시가지 한가운데 위치해 구매력이 높은 젊은 세대와 신혼부부의 유입이 특히 활발한 알짜 상권이다.	1층: 신선식품/보틀벙커/푸드코트, 2층: 패션/뷰티/다이소, 3층: 토이저러스/주차장, 4층: 주차장	B2번, 100번, 104번, 107번, 901번, 삼채 21번	매장 규모가 웬만한 복합쇼핑몰 뺨치게 크고 웅장하여 낙주시민들의 자부심(?)으로 통한다. 최근 초대형 와인 전문점 보틀벙커까지 입점시키면서 신시가지 젊은 부부들의 와인 성지로 맹활약 중.	영업중	
롯데마트	비천점	2009년 06월 04일	덕빈남도	롯데쇼핑	덕빈남도 비천시 성두동 45	하이마트, 약국, 세탁소	비천시가 자랑하는 구 GS마트 출신 점포로, 비천시 구도심의 상권을 꽉 잡고 놓지 않는 굳건한 터줏대감 역할을 한다.	비천시청 바로 인근에 자리하여 행정타운 및 구시가지 거주민들의 발길이 잦으며, 전통적인 상권의 중심지에 박혀있다.	1층: 농수산/가공/생활/푸드코트, 2층: 패션/잡화/하이마트, 3층: 옥상주차장	900번, 10번, 11번, 14번, 501번, 502번, 503번, 504번, 505번, 506번, 507번, 508번, 509번, 510번, 511번, 512번, 비천 01번	**이곳 역시 2010년 합병된 구 GS마트 출신 점포.** GS 시절 인수 직전까지 거액을 들여 매장 리뉴얼을 싹 해놨는데, 직후에 롯데로 매각되는 바람에 롯데가 손 안 대고 고스란히 꿀을 빤 전설적인 곳이다(...)	영업중	
롯데마트	매성점	2011년 01월 20일	덕빈남도	롯데쇼핑	덕빈남도 매성시 근암동 102-4	문화센터, 룸바이홈, 하이마트	대형 마트 붐이 막바지일 무렵 비교적 늦게 개점한 탓에, 현재까지도 매우 깔끔한 시설과 쾌적한 쇼핑 환경을 자랑한다.	매성시 신규 택지지구 초입에 위치해 인구 유입이 활발하며, 유독 비정상적으로 많은 인근 학교의 학생 및 학부모 방문이 많다.	지하1층: 전용주차장, 1층: 신선/가공식품/델리, 2층: 리빙(룸바이홈)/가전(하이마트)/문화센터	1번, 10번, 13번, 21번, 22번, 26번, 101번, 102번	10만 인구를 아슬아슬하게 방어 중인 매성시의 한 줄기 빛. 대형 마트 붐 막바지인 2011년에 비교적 늦게 개점한 탓에 시설이 유독 깔끔하다. 신규 택지지구 초입이라 매성시로 유입된 신혼부부들의 아지트가 되었다.	영업중	
홈플러스	서해점	2003년 11월 05일	덕빈북도	홈플러스	덕빈북도 서해시 방부동 210-9	홈플러스 문화센터, 마이홈플러스, 다이소	서해시 3대 마트(이마트, 롯데, 홈플) 전쟁의 든든한 한 축을 담당하며, 특히 주류와 육류 코너 라인업이 좋다는 맘카페의 호평이 많다.	서해시 방부동 주거단지 밀집 지역 최중심에 위치하여, 주말 나들이 겸 걸어 나오는 가족 단위의 도보 방문객이 타 마트 대비 월등히 높다.	1층: 식품관/몽블랑제/푸드코트, 2층: 의류/잡화/다이소/완구, 3층: 문화센터/주차장, 4~5층: 주차장	900번, 100번, 101번, 104번, 109번, 110번, 207번, 208번, 801번, 802번, 803번, 804번, 805번, 서해 11번, 서해 12번, 방부 31번	서해시 3대 마트 전쟁의 든든한 한 축. 특히 주류와 수입 맥주 코너 라인업이 예술적이라는 지역 주당들의 극찬이 자자하다. 서해시 방부동 주거단지 한가운데 박혀 있어 저녁 먹고 산책 겸 걸어나온 슬세권 도보 방문객이 지천에 널렸다.	영업중	
홈플러스	빈성점	2008년 09월 11일	덕빈북도	홈플러스	덕빈북도 빈주시 빈성구 차당동 55	몽블랑제, 애슐리, 스팀세차장	프랑스 까르푸로 시작해 이랜드 홈에버를 거쳐 홈플러스로 최종 안착한, 한국 대형마트 유통사의 산증인격 점포다.	빈주1,2호선 이은역과 도보로 약간 거리는 있지만, 빈성구 내 주요 간선도로망과 완벽하게 맞닿아 있어 자가용 접근은 타의 추종을 불허한다.	지하1층: 식품/몽블랑제, 1층: 패션/잡화/애슐리/푸드코트, 2~3층: 주차장	빈주1,2호선 이은역(좀걸리긴하나, 가장가까운역이다), 210번, 861번, 822번, 800번, 600번, 빈성02, 빈성05	**원래 2000년대 초반 프랑스 까르푸로 시작했다가, 이랜드 계열의 홈에버로 간판을 갈고, 결국 2008년 홈플러스에 인수된 다사다난한 한국 대형마트 유통사의 산증인.** ~~까르푸 시절 특유의 경사도 극악인 무빙워크와 카트 두 대가 교행하기 힘든 좁은 통로가 아직도 손님들의 종아리를 혹사시킨다.~~	영업중	
홈플러스	장기점	2005년 03월 02일	덕빈북도	홈플러스	덕빈북도 빈주시 장기구 장기동 304-2	문화센터, 다이소, 탑텐, 동물병원	빈주시 장기지구의 폭발적인 인구 증가 혜택을 온몸으로 받으며 성장한 홈플러스의 알짜배기 간판 매장이다.	빈주1호선 장기역과 바로 연결되는 초역세권인데다, 무수한 버스 노선이 경유하는 교통의 대동맥에 위치해 평일과 주말을 가리지 않고 터져나간다.	지하1층: 식품/푸드코트, 1층: 일상용품/의류/다이소, 2층: 문화센터/주차장, 3층: 주차장	"빈주1호선 장기역, 600(급행), 601(급행), 빈주-강주 직행좌석,110, 204, 405, 501, 장기05, 장기06, 장기07, 빈성12"	빈주시 장기지구의 폭발적인 인구 펌핑 혜택을 온몸으로 들이마시며 성장한 알짜배기 매장. 빈주1호선 장기역 초역세권에 버스 노선도 어마어마해서, 주말 점심시간만 되면 주차장 진입로에서부터 눈치 싸움이 벌어진다.	영업중	
홈플러스	약산점	2001년 07월 19일	덕빈북도	홈플러스	덕빈북도 약산시 약산동 12-1	홈플러스 메가푸드마켓, 문화센터, 다이소	구 까르푸 매장이었으나, 최근 홈플러스 메가푸드마켓으로 전면 리뉴얼하여 식품 코너의 규모와 질을 극대화한 전략 점포다.	효빈1호선 약산시청역 초역세권이며, 무수히 많은 시내/광역 버스가 거쳐 가는 명실상부 약산시 최고의 노른자 상권에 알박기를 시전했다.	지하1층: 메가푸드마켓(식품관 특화), 1층: 리빙/패션/다이소/푸드코트, 2~3층: 전용주차장	효빈1호선 약산시청역, 9000번, 4004번, 7777번, 1000번, 2000번, 3000번, 4000번, 100번,  102번, 102-1번, 110번, 110-1번, 111번, 121번, 142번, 142-1번, 143번, 150번, 150-1번, 200번, 200-1번, 401번, 425번, 500번, 500-1번, 501번, 525번, 555번, 560번, Y-1번, Y-8번, Y-10번	**이곳 역시 구 까르푸 매장 출신.** 하지만 최근 홈플러스 메가푸드마켓으로 전면 리뉴얼하여 환골탈태했다. 효빈1호선 약산시청역 바로 앞에 있는데다 버스 번호 라인업이 어질어질할 정도로 많아서 약산시 교통의 알파이자 오메가로 불린다.	영업중	
홈플러스	천성점	2004년 10월 21일	덕빈북도	홈플러스	덕빈북도 천주시 천성구 천성동 88-5	스피드메이트, 탑텐, 몽블랑제	천성구 주민들에게 단순한 마트를 넘어 랜드마크이자 만남의 광장 역할을 하는 대형 할인점.	빈효광역선 천주시청역과 천성구 중심 대형 교차로를 동시에 끼고 있어 차량과 도보 유동 인구를 모두 쓸어 담기 최적화된 위치를 선점했다.	1층: 신선/가공식품/푸드홀, 2층: 의류/스포츠/생활잡화, 3층~4층: 전용주차장	빈효광역선 천주시청역, 1000번, 103번, 106번, 117번, 125번, 137번, 506번, 512번, 400번, 407번, 414번, 419번, 420번, 422번, 424번, 천성 05번	단순한 마트를 넘어 천성구 주민들의 거대한 랜드마크이자 만남의 광장 역할을 톡톡히 한다. 천주시청 앞 대형 교차로를 끼고 있어 접근성은 최고지만, 그만큼 퇴근길 헬게이트의 중심에 서 있는 애증의 장소.	영업중	
홈플러스	강주점	2007년 12월 06일	덕빈북도	홈플러스	덕빈북도 강주시 문성동 204	문화센터, 약국, 안경점, 플레이타임	강주시 유일의 홈플러스 매장으로, 유독 프로그램 퀄리티가 좋기로 소문난 문화센터를 필두로 탄탄한 충성 고객층을 유지 중이다.	빈주광역선 문성역 인근 주거 지구 한가운데 박혀있어, 인근 거주민들의 퇴근길 찬거리 장보기 수요를 독식하고 있다.	1층: 식품관/푸드코트, 2층: 문화센터/패션/가전/키즈카페, 3~5층: 실내주차장	빈주광역선 문성역, 버스 10,20,110, 문성01,문성02,문성03	강주시 유일의 홈플러스. 이곳의 핵심 코어는 다름 아닌 '문화센터'. 강사 라인업과 프로그램 퀄리티가 미친 수준이라 학기 초만 되면 수강신청 서버가 터져나가는 피켓팅 전쟁이 일어난다(...)	영업중	
홈플러스	계성점	2006년 08월 24일	덕빈북도	홈플러스	덕빈북도 계성시 천동 61-2	몽블랑제, 다이소, 크린토피아	까르푸에서 홈에버 테크트리를 탄 지점 중 하나로, 당시의 다소 독특한 내부 동선 구조가 남아있는 것이 특징이다.	빈주광역선 호두역과 인접하여 대중교통 접근성이 우수하며, 계성시 특유의 높은 인구 밀도 덕분에 면적 대비 방문객 수가 엄청나다.	지하1층: 식품/생활잡화/몽블랑제, 1층: 의류/문구/다이소/푸드코트, 2~4층: 옥내주차장	빈주광역선 호두역, 100번, 106번, 207번, 208번, 호두 01번, 호두 02번	**이곳도 까르푸-홈에버-홈플러스 테크트리를 정석으로 밟은 지점 중 하나.** 내부 리모델링을 거쳤음에도 옛 까르푸 시절의 기묘한 층별 동선 구조 흔적이 묘하게 남아있어 단골들의 향수(?)를 자극한다.	영업중	
홈플러스	서진점	2008년 11월 13일	덕빈북도	홈플러스	덕빈북도 서진시 아은동 100-3	문화센터, 몽블랑제, 스팀세차장	2008년 홈플러스의 대규모 홈에버 인수전 당시 대대적인 내외부 리뉴얼을 거쳐 완전히 환골탈태한 서진시의 대표 대형 마트.	아은동을 관통하는 주요 왕복 8차선 간선도로변에 위치하여 자가용을 이끌고 박스 떼기로 대량 구매를 하러 오는 외곽 거주 고객들이 주를 이룬다.	1층: 식품/델리/푸드코트, 2층: 의류/생활/가전, 3층: 문화센터/실내주차장, 4층: 옥상주차장	900번, 100번, 101번, 110번, 아은 11번, 아은 12번, 서진 13번	2008년 홈플러스의 홈에버 인수전 이후 대대적인 수술을 거쳐 재오픈한 서진시의 대표 마트. 왕복 8차선 대로변에 위치해 있어 박스 떼기로 식자재를 털어가는 외곽 거주 고객들의 방문 비중이 압도적으로 높다.	영업중	
홈플러스	덕주중앙점	2002년 05월 15일	덕빈남도	홈플러스	덕빈남도 덕주시 덕산구 무영동 50-1	문화센터, 마이홈플러스, 플레이타임	덕주시 덕산구 전체 수요를 훌륭하게 방어해 내고 있는 홈플러스의 중추 매장으로, 개점 이래 꾸준히 우수한 실적을 뽐내는 효자 점포다.	이름은 '덕주중앙점'이나 실제로는 무영동에 위치하는 페이크를 치고 있지만, 덕주1호선 주기역 앞 대로변에 있어 상징성과 가시성이 매우 뛰어나다.	지하1층: 신선/가공식품/델리, 1층: 패션/가전/잡화/푸드코트, 2층: 문화센터/키즈카페, 3~4층: 주차장	덕주1호선 주기역, 버스 130번, 210번, 310번, 7번, 1번	**이름은 분명 '덕주중앙점'인데 실제 위치는 덕산구 무영동에 있는 희대의 페이크 지점.** 덕주1호선 주기역 앞 대로변에 있어 가시성은 끝내주며, 개점 이래 꾸준히 덕산구 수요를 쪽쪽 빨아먹는 효자 매장이다.	영업중	
홈플러스	덕주조전점	2009년 04월 10일	덕빈남도	홈플러스	덕빈남도 덕주시 조전구 조전동 330-2	홈플러스 메가푸드마켓, 애슐리, 다이소	대형 마트 3사가 피 튀기게 싸우는 조전구 격전지에서 생존하기 위해 최근 과감한 투자를 단행, '메가푸드마켓'으로 화려하게 변신했다.	덕주1호선 우격역 초역세권이며, 반경 1km 내에 경쟁사 마트들이 포진해 있어 주말마다 전단지 할인 전쟁이 발발하는 최전방 스팟이다.	1층: 메가푸드마켓(식품관 특화)/애슐리, 2층: 리빙/가전/패션/다이소, 3~4층: 주차장	덕주1호선 우격역, 버스 240번,350번,14번	조전구 마트 삼국지(이마트, 롯데, 홈플)의 마지막 퍼즐 조각. 경쟁에서 살아남기 위해 최근 '메가푸드마켓'으로 화려하게 폼체인지를 감행했다. ~~반경 1km 내에 3사가 옹기종기 모여 있어 소비자 입장에서는 카탈로그 비교하며 간 보는 재미가 쏠쏠하다.~~	영업중	
홈플러스	마진점	2010년 01월 28일	덕빈남도	홈플러스	덕빈남도 마진시 마진동 402-8	스피드메이트, 탑텐, 몽블랑제	마진시의 한 줄기 빛과 같은 대형 복합 쇼핑 시설로, 쇼핑 인프라가 부족한 마진 시민들의 주말 여가와 외식을 대부분 책임지고 있다.	마진시 구도심의 사실상 유일한 대형 할인점으로 상권 내 뚜렷한 경쟁자가 전무하여 압도적이고 독점적인 위치에서 영업 중이다.	1층: 신선/가공식품/베이커리/푸드코트, 2층: 의류/문구/가전, 3~5층: 실내 및 옥상주차장	1번, 3번, 4번,17번,19번, 20번,64번, 71번, 91번	시내에 뚜렷한 대형 경쟁자가 없어 마진시 쇼핑 인프라를 사실상 독점 중인 최강자. 마진 시민들의 주말 여가, 외식, 장보기를 모조리 책임지고 있는 한 줄기 빛과 같은 구세주 취급을 받는다.	영업중	
이마트	우전점	2000년 10월 02일	효빈광역시	이마트	효빈광역시 청엽구 우전동 15-4	(폐점)	과거 청엽구 주민들의 핫플레이스였으나, 우전동 일대의 대규모 주상복합 재개발 프로젝트에 편입되면서 22년간의 영업을 마치고 역사 속으로 사라졌다.	청엽구 노른자위 땅에 있었던 터라, 마트 폐점 후 화려한 고층 주상복합이 들어섰다.	(폐점 전) 지하1층: 식품, 1층: 생활/의류, 2~4층: 주차장	(폐점)	과거 효빈광역시 청엽구 주민들의 주말 핫플레이스였으나, 우전동 일대의 대규모 주상복합 재개발 프로젝트의 마수를 피하지 못하고 22년간의 영업을 끝으로 장렬히 산화했다. ~~현재 그 자리엔 으리으리한 고층 아파트가 솟아있다.~~	폐점	2022년 04월 22일
홈플러스	평당점	2004년 07월 22일	효빈광역시	홈플러스	효빈광역시 남구 평당동 77-1	(폐점)	한때 남구 평당동 상권의 주축이었지만, 오프라인 유통시장 침체와 온라인 전환 타격을 견디지 못하고 구조조정의 칼바람을 맞아 폐점했다.	주변 상권의 쇠퇴와 함께 유동 인구가 줄어들며 수익성이 악화된 것이 치명적이었다.	(폐점 전) 1층: 식품, 2층: 생활, 3층: 주차장	(폐점)	한때 효빈 남구 상권의 주축이었으나, 유통시장 침체와 온라인 쇼핑 전환의 직격탄을 맞고 2018년 구조조정의 칼바람에 썰려나간 비운의 점포.	폐점	2018년 08월 30일
롯데마트	덕현점	2001년 09월 22일	효빈광역시	롯데쇼핑	효빈광역시 동구 덕현동 88-2	(폐점)	동구 덕현동 주민들의 사랑방 역할을 했으나, 2020년 롯데쇼핑의 대규모 오프라인 매장 구조조정(효율화) 정책의 타겟이 되어 아쉽게 문을 닫았다.	동구 원도심에 위치해 접근성은 좋았으나, 낡은 시설과 주차난 문제로 경쟁력을 상실해갔다.	(폐점 전) 1층: 식품/델리, 2층: 하이마트/토이저러스, 3층: 주차장	(폐점)	동구 원도심 주민들의 든든한 사랑방이었으나, 2020년 롯데쇼핑의 피도 눈물도 없는 오프라인 점포 구조조정(효율화) 명단에 오르며 셔터를 내렸다. ~~건물 노후화와 헬게이트 주차장 문제로 이미 한계에 다다랐다는 평이 많았다.~~	폐점	2020년 04월 04일
롯데마트	안천점	2000년 07월 21일	효빈광역시	롯데쇼핑	효빈광역시 안천구 안천동 302-1	(폐점)	새천년의 시작과 함께 야심 차게 문을 열었으나, 안천구 내 신축 대형마트들과의 출혈 경쟁에서 밀리면서 비교적 일찍 영업을 종료했다.	상권 내 더 크고 주차가 편한 경쟁 마트들이 속속 들어서면서 애매한 입지가 발목을 잡았다.	(폐점 전) 지하1층: 식품, 1층: 잡화, 2층: 주차장	(폐점)	새천년의 시작과 함께 야심 차게 문을 열었으나, 안천구 내에 더 크고 아름다운 신축 대형마트들이 속속 들어서면서 경쟁에서 처참하게 밀려 일찌감치 백기를 들었다.	폐점	2017년 10월 22일
이마트	비천점	2002년 11월 08일	덕빈남도	이마트	덕빈남도 비천시 비천동 9-10	(폐점)	비천시가 항만 물류로 잘나가던 리즈 시절에는 잘나갔으나, 산업 구조 재편으로 비천시 인구가 감소하며 직격탄을 맞고 2014년에 일찌감치 짐을 쌌다.	비천동 구 상권의 중심지였으나, 도시 전체의 쇠퇴 바람을 대형 마트도 피해 가지 못했다.	(폐점 전) 1층: 식품, 2층: 의류, 3층: 옥상주차장	(폐점)	항만 물류로 잘나가던 비천시의 리즈 시절을 함께했으나, 비천시 산업 구조 쇠퇴와 인구 감소의 쓰나미를 버티지 못하고 2014년에 눈물을 머금고 조기 철수했다. ~~쇠락하는 지방 도시의 슬픈 단면을 보여준 사례.~~	폐점	2014년 05월 17일
롯데마트	빈주점	2003년 04월 10일	덕빈북도	롯데쇼핑	덕빈북도 빈주시 빈성구 압전동 10-2	(폐점)	빈주시 구도심인 빈성구에 개점했으나, 좁은 매장 면적과 고질적인 매출 부진으로 인해 10년 만에 일찍 폐점 크리를 맞은 비운의 점포.	빈성구 중심가라 유동 인구는 많았으나, 차량 진입로가 헬게이트라 고객 불만이 높았다.	(폐점 전) 지하1층: 식품, 1층: 잡화, 2층: 주차장	(폐점)	빈주시 구도심인 빈성구 한가운데 개점했으나, 코딱지만한 매장 면적과 극악의 차량 진입로 설계 탓에 고객 불만이 폭주했고, 결국 고질적인 적자에 시달리다 10년 만에 쓸쓸히 폐점 크리를 맞았다.	폐점	2013년 04월 10일
이마트	빈주점	1999년 04월 10일	덕빈북도	이마트	덕빈북도 빈주시 가원구 주전동 55-6	(폐점)	90년대 후반에 개점한 역사 깊은 1세대 대형마트였으나, 건물 노후화 및 가원구 신상권으로의 중심 이동에 밀려 2017년에 역사의 뒤안길로 사라졌다.	당시엔 파격적인 서구형 마트였으나, 시간이 흐르며 주차 공간 협소 문제가 치명적인 단점으로 작용했다.	(폐점 전) 1층: 식품, 2층: 의류/가전, 3층: 주차장	(폐점)	90년대 후반 1세대 대형마트의 위용을 뽐내던 고인물 점포. 그러나 세월의 풍파로 건물은 노후화되고 빈주시 상권의 중심이 신시가지로 이동하면서 2017년에 역사의 뒤안길로 사라졌다. ~~폐점 날 단골 주민들의 아쉬운 한숨이 가득했다고.~~	폐점	2017년 04월 22일
홈플러스	서해천로점	2001년 03월 12일	덕빈북도	홈플러스	덕빈북도 서해시 천로동 80-2	(폐점)	서해시 천로동에 있던 점포로, 같은 서해시 내에 위치한 서해점과의 거리 간섭(이른바 상권 팀킬) 및 실적 악화 문제로 2022년 구조조정 때 정리되었다.	홈플러스 서해점과 너무 가까운 상권에 위치해 제 살 깎아먹기 경쟁을 하다가 결국 폐점 수순을 밟았다.	(폐점 전) 지하1층: 식품, 1층: 잡화, 2층: 주차장	(폐점)	같은 서해시 내에 있는 홈플러스 서해점과 거리가 너무 가까워 상권을 깎아먹는 역대급 '팀킬'을 시전하다가, 2022년 회사 사정이 어려워지자 칼같이 정리 해고(?) 당한 불쌍한 점포.	폐점	2022년 02월 17일
이마트	천주점	2000년 09월 22일	덕빈북도	이마트	덕빈북도 천주시 천성구 비원동 11-5	(폐점)	천주시 초창기 대형 상권을 이끌던 옛 향수를 간직한 곳이었으나, 건물의 심각한 노후화와 인근 홈플러스, 롯데마트의 공격적인 리뉴얼을 버티지 못하고 폐점했다.	천성구 구도심의 비좁은 부지에 지어진 탓에 주차와 시설 확장에 한계가 뚜렷했다.	(폐점 전) 1층: 식품관, 2층: 일상용품, 3층: 옥상주차장	(폐점)	천주시 1세대 대형 상권을 이끌던 향수 가득한 곳이었으나, 건물의 심각한 노후화와 협소한 주차장 탓에, 인근 홈플러스와 롯데마트의 매서운 리뉴얼 공세를 버티지 못하고 2019년 최종 패배를 선언했다.	폐점	2019년 05월 12일"""

# HTML 템플릿
HTML_TEMPLATE = """<!DOCTYPE html>
<html lang="ko">
<head>
    <link href="이미지/효빈위키아이콘.webp" rel="icon"/>
    <meta charset="utf-8"/>
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <title>[[BRAND]] [[STORE_NAME]] - 효빈위키</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap');
        
        :root { 
            --wiki-main: #7777AA; 
            --wiki-border: #ccc; 
            --wiki-bg: #ffffff; 
            --wiki-text: #373a3c; 
            --wiki-gray-bg: #F9F9FA; 
            --wiki-link: #0022AA;
            --emart-yellow: #fcb417;
            --lotte-red: #E60012;
            --homeplus-red: #e60013;
        }

        body { font-family: 'Noto Sans KR', sans-serif; background-color: var(--wiki-bg); color: var(--wiki-text); line-height: 1.6; word-break: keep-all; margin: 0; }
        .wiki-container { max-width: 1300px; margin: 0 auto; padding: 20px 40px; border-left: 1px solid var(--wiki-border); border-right: 1px solid var(--wiki-border); min-height: 100vh; background-color: var(--wiki-bg); }

        .txt-lvl-1 { font-size: var(--font-h1) !important; font-weight: 900 !important; color: #000000; line-height: 1.1; letter-spacing: -1.5px; margin-bottom: 0; } 
        .title-area { display: flex; justify-content: space-between; align-items: flex-end; border-bottom: 2px solid #ccc; margin-bottom: 20px; padding-bottom: 10px; }

        h2 { font-size: 1.8rem !important; font-weight: 700; border-bottom: 1px solid var(--wiki-border); padding-bottom: 5px; margin-top: 2.5rem; display: flex; align-items: center; gap: 10px; color: [[BRAND_COLOR]]; clear: both; }
        h2::before { content: ""; display: inline-block; width: 5px; height: 1.8rem; background: [[BRAND_COLOR]]; }
        h3 { font-size: 1.4rem !important; font-weight: 700; margin-top: 1.8rem; border-left: 4px solid [[BRAND_COLOR]]; padding-left: 12px; color: [[BRAND_COLOR]]; }

        .wiki-btn { border: 1px solid #ccc; background: white; padding: 4px 12px; border-radius: 4px; font-size: var(--font-small); font-weight: bold; color: #555; cursor: pointer; transition: all 0.2s; display: inline-flex; align-items: center; gap: 4px; text-decoration: none !important; line-height: 1.2; }
        .wiki-btn:hover { background: #f0f0f0; color: #000; border-color: #999; }

        table { border-collapse: collapse !important; width: 100% !important; margin: 15px 0; border: 1px solid [[BRAND_COLOR]] !important; table-layout: auto !important; font-size: 0.85rem; }
        th, td { border: 1px solid #ddd !important; padding: 8px 12px; text-align: center; vertical-align: middle; }
        th { background-color: [[BRAND_COLOR]] !important; color: [[TH_TEXT_COLOR]] !important; font-weight: bold; }
        td { border-color: #e5e5e5 !important; }

        .infobox { border: 2px solid [[BRAND_COLOR]]; background-color: #fff; width: 100%; max-width: 450px; font-size: 0.82rem; margin-bottom: 20px; float: right; margin-left: 20px; border-radius: 4px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }
        .infobox-title { background-color: [[TITLE_BG_COLOR]]; color: [[TITLE_TEXT_COLOR]]; padding: 15px 10px; text-align: center; font-size: 1.2rem !important; font-weight: bold; border-bottom: 1px solid #eee; display: flex; align-items: center; justify-content: center; gap: 10px; }
        .infobox-image { text-align: center; padding: 0; border-bottom: 1px solid [[BRAND_COLOR]]; background: white; }
        .infobox-image img { width: 100%; display: block; }
        .infobox table { border: none !important; margin: 0 !important; width: 100% !important; }
        .infobox th { background-color: [[BRAND_COLOR]] !important; color: [[TH_TEXT_COLOR]] !important; width: 100px; text-align: center; padding: 6px 8px; border: 1px solid #ccc !important; font-weight: bold; }
        .infobox td { text-align: left; padding: 6px 8px; border: 1px solid #ccc !important; }

        .wiki-link { color: var(--wiki-link); font-weight: bold; cursor: pointer; text-decoration: none; }
        .wiki-link:hover { text-decoration: underline; }
        .category-box { background: #f9f9f9; border: 1px solid var(--wiki-border); padding: 8px 12px; font-size: 0.8rem; margin: 15px 0; border-radius: 4px; }
        
        .toc { display: inline-block; min-width: 300px; border: 1px solid var(--wiki-border); background: var(--wiki-gray-bg); padding: 15px; border-radius: 4px; margin-bottom: 20px; }
        .toc-title { text-align: center; font-weight: bold; border-bottom: 1px solid var(--wiki-border); margin-bottom: 10px; padding-bottom: 5px; }
        .toc ul { list-style: none; padding: 0; margin: 0; font-size: 0.9rem; }
        .toc ul li { margin-bottom: 4px; }
        .toc ul ul { margin-top: 4px; margin-left: 20px; }
        
        .del-text { text-decoration: line-through; color: #999; }
        .small-text { font-size: 0.8em; color: #666; display: block; margin-top: 2px; }
        
        .transport-badge { display: inline-block !important; padding: 2px 6px !important; border-radius: 4px !important; color: white !important; font-size: 0.85rem !important; font-weight: bold !important; margin-right: 4px !important; margin-bottom: 4px !important; text-decoration: none !important; background-color: #555; }
        .nav-logo-box { width: 30px; height: 30px; background: white; color: var(--wiki-main); border-radius: 4px; font-weight: 900; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; }   
    </style>
    <script src="ad_logic.js"></script>
    <link rel="stylesheet" href="wiki_font_standard.css">
</head>        
<body>
<div id="wiki-msg-box" style="position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%); background: rgba(0,0,0,0.8); color: white; padding: 10px 24px; border-radius: 50px; font-size: 14px; z-index: 10000; display: none;"></div>

<nav class="font-sans bg-[#7777AA] text-white p-3 flex justify-between items-center shadow-md sticky top-0 z-50">
    <div class="flex items-center gap-2">
        <div class="nav-logo-box">H</div>
        <a href="index.html" class="font-bold text-xl cursor-pointer no-underline text-white">HyobinWiki</a>
        <div class="hidden md:flex gap-3 text-sm opacity-90 ml-4">
            <a href="index.html" class="hover:underline font-bold text-white no-underline">대문</a>
            <a href="최근_변경.html" class="hover:underline text-white no-underline">최근 변경</a>
            <a href="최근_토론.html" class="hover:underline text-white no-underline">최근 토론</a>
        </div>
    </div>
</nav>

<div class="wiki-container shadow-lg">
    <div class="title-area">
        <div class="txt-lvl-1" id="doc-title">[[BRAND]] [[STORE_NAME]] [[CLOSED_TITLE]]</div>
        <div class="flex gap-2 mb-1">
            <button onclick="location.href='토론.html'" style="background-color:#ffffff; color:#373a3c; border:1px solid #cccccc !important; border-radius:4px; padding:6px 12px; margin:0 2px; font-size:14px; cursor:pointer;">토론</button>
            <button onclick="location.href='수정.html'" style="background-color:#0275d8; color:#ffffff; border:1px solid #0275d8 !important; border-radius:4px; padding:6px 12px; margin:0 2px; font-size:14px; cursor:pointer;">편집</button>
            <button onclick="location.href='역사.html'" style="background-color:#ffffff; color:#373a3c; border:1px solid #cccccc !important; border-radius:4px; padding:6px 12px; margin:0 2px; font-size:14px; cursor:pointer;">역사</button>
        </div>
    </div>

    <div class="category-box">
        <span class="font-bold text-[#7777AA]">분류:</span>
        <a class="wiki-link" href="[[BRAND]]_지점_[[REGION_SHORT]].html">[[BRAND]]/지점/[[REGION_SHORT]]</a> | 
        <a class="wiki-link" href="[[YEAR]]년_개업.html">[[YEAR]]년 개업</a>
        [[CLOSED_CAT]]
    </div>

    <div class="no-autolink mb-4">
        <div id="[[NAV_CONTAINER_ID]]"></div>
        <script src="[[NAV_SCRIPT_URL]]"></script>
    </div>

    <div class="flex flex-col md:flex-row justify-between items-start gap-8 mb-12 mt-4">
        <aside class="infobox shrink-0 order-1 md:order-2 [[CLOSED_CSS]]">
            <div class="infobox-title">
                <img alt="[[BRAND]] 로고" onerror="this.style.display='none';" src="[[LOGO_URL]]" style="height: 25px;"/>
                <div style="text-align: left;">
                    <span style="font-size: 1.1rem; color: [[LOGO_TEXT_COLOR]];">[[BRAND]]</span> <span style="font-size: 1.1rem;">[[STORE_NAME]]</span><br/>
                </div>
            </div>
            <div class="infobox-image" style="padding: 0;">
                <img alt="[[BRAND]] [[STORE_NAME]] 전경" src="이미지/[[BRAND]]_[[STORE_NAME]]_전경.webp" onerror="this.src='https://via.placeholder.com/450x250?text=No+Image'"/>
            </div>
            <table>
                <tr><th>개점일</th><td><a class="wiki-link" href="[[YEAR]]년.html">[[YEAR]]년</a> [[MONTH_DAY]]</td></tr>
                [[CLOSED_ROW]]
                <tr><th>운영사</th><td><a class="wiki-link" href="[[OPERATOR]].html">[[OPERATOR]]</a></td></tr>
                <tr><th>주소</th><td>
                    <div style="margin-bottom: 5px;">[지도: [[BRAND]] [[STORE_NAME]]]</div>
                    [[ADDRESS]]
                </td></tr>
                <tr><th>기타 서비스</th><td>
                    [[SERVICES_HTML]]
                </td></tr>
            </table>
        </aside>

        <div class="toc shrink-0 shadow-sm h-fit order-2 md:order-1" id="toc-box">
            <div class="toc-title">목차</div>
            <ul>
                <li>1. <a class="wiki-link" href="#s-1">개요</a></li>
                <li>2. <a class="wiki-link" href="#s-2">특징</a></li>
                <li>3. <a class="wiki-link" href="#s-3">층별안내</a></li>
                <li>4. <a class="wiki-link" href="#s-4">연계 교통</a></li>
                <li>5. <a class="wiki-link" href="#s-5">여담</a></li>
            </ul>
        </div>
    </div>

    <h2 id="s-1">1. 개요</h2>
    <p>[[OVERVIEW]]</p>

    <h2 id="s-2">2. 특징</h2>
    <p>[[FEATURES]]</p>

    <h2 id="s-3">3. 층별안내</h2>
    <table>
        <tr>
            <th style="width: 20%;">층</th>
            <th>시설</th>
        </tr>
        [[FLOORS_HTML]]
    </table>

    <h2 id="s-4">4. 연계 교통</h2>
    <p>
        [[TRANSIT_HTML]]
    </p>

    <h2 id="s-5">5. 여담</h2>
    <ul style="list-style-type: disc; padding-left: 20px;">
        [[TRIVIA_HTML]]
    </ul>

    <div id="footer-container"></div>
    <script src="assets/load-footer.js"></script>
</div>
<script src="assets/wiki_index.js"></script>
<script src="assets/hb_wiki_core.js"></script>
<script src="assets/hb_index_scripts.js"></script>
<script src="assets/jana.js"></script>
</body>
</html>"""

BRAND_CONFIG = {
    "이마트": {"color": "var(--emart-yellow)", "title_bg": "var(--emart-yellow)", "title_text": "#fff", "th_text": "#fff", "logo": "이미지/이마트_로고.webp", "logo_text_color": "#fff"},
    "롯데마트": {"color": "var(--lotte-red)", "title_bg": "#fff", "title_text": "#000", "th_text": "#fff", "logo": "이미지/롯데마트_로고.svg", "logo_text_color": "var(--lotte-red)"},
    "홈플러스": {"color": "var(--homeplus-red)", "title_bg": "var(--homeplus-red)", "title_text": "#fff", "th_text": "#fff", "logo": "이미지/홈플러스_로고.webp", "logo_text_color": "#fff"}
}

NAV_MAPPING = {
    ("덕빈북도", "이마트"): ("emart-deokbinbuk-branches-nav-container", "js/덕빈북도_이마트지점.js"),
    ("덕빈남도", "이마트"): ("emart-deokbinnam-branches-nav-container", "js/덕빈남도_이마트지점.js"),
    ("효빈광역시", "이마트"): ("emart-hyobin-branches-nav-container", "js/이마트효빈지점목록.js"),
    ("덕빈북도", "롯데마트"): ("lotte-mart-deokbinbuk-nav-container", "js/덕빈북도_롯데마트지점.js"),
    ("덕빈남도", "롯데마트"): ("lotte-mart-deokbinnam-nav-container", "js/덕빈남도_롯데마트지점.js"),
    ("효빈광역시", "롯데마트"): ("lotte-mart-branch-nav-container", "js/롯데마트_지점_둘러보기.js"),
    ("덕빈북도", "홈플러스"): ("homeplus-deokbinbuk-branch-nav-container", "js/덕빈북도_홈플러스지점.js"),
    ("덕빈남도", "홈플러스"): ("homeplus-deokbinnam-branch-nav-container", "js/덕빈남도_홈플러스지점.js"),
    ("효빈광역시", "홈플러스"): ("homeplus-branch-nav-container", "js/홈플러스_지점_둘러보기.js")
}

def parse_strike(text):
    return re.sub(r'~~(.*?)~~', r'<span class="del-text">\1</span>', text)

def generate_pages():
    f = io.StringIO(RAW_DATA.strip())
    reader = csv.reader(f, delimiter='\t')
    header = next(reader)
    
    for fields in reader:
        if len(fields) == 0 or not fields[0].strip(): continue
        
        while len(fields) < 14: fields.append("")
            
        brand = fields[0].strip()
        store_name = fields[1].strip()
        open_date = fields[2].strip() 
        region_full = fields[3].strip()
        operator = fields[4].strip()
        address = fields[5].strip()
        services = fields[6].strip()
        overview = parse_strike(fields[7].strip())
        features = parse_strike(fields[8].strip())
        floors = fields[9].strip()
        transit = fields[10].strip().replace('\n', ' ')
        trivia = parse_strike(fields[11].strip().replace('\n', ' '))
        status = fields[12].strip()
        close_date = fields[13].strip()

        b_conf = BRAND_CONFIG.get(brand, BRAND_CONFIG["이마트"])
        nav_id, nav_js = NAV_MAPPING.get((region_full, brand), ("nav-container", "js/nav.js"))
        region_short = "효빈" if "효빈" in region_full else ("덕북" if "덕북" in region_full else "덕남")
        year = open_date[:4] if len(open_date) >= 4 else "알수없음"
        month_day = open_date[5:] if len(open_date) > 5 else ""
        
        is_closed = (status == "폐점")
        closed_title = "<span style='color:red; font-size:0.7em;'>(폐점)</span>" if is_closed else ""
        closed_css = "style='filter: grayscale(100%); opacity: 0.85;'" if is_closed else ""
        closed_row = f"<tr><th>폐점일</th><td><span style='color:red; font-weight:bold;'>{close_date}</span></td></tr>" if is_closed else ""
        closed_cat = f" | <a class='wiki-link' href='폐점한_상업시설.html'>폐점한 상업시설</a>" if is_closed else ""

        services_html = ""
        for s in services.split(','):
            if s.strip():
                services_html += f"<span style='border: 1px solid #666; border-radius: 10px; padding: 2px 6px; font-size: 0.8em; color: #666; font-weight: bold; margin-right: 4px; display: inline-block; margin-bottom: 4px;'>{s.strip()}</span> "

        floors_html = ""
        for f_info in floors.split(','):
            if ':' in f_info:
                f_n, f_desc = f_info.split(':', 1)
                floors_html += f"<tr><td style='background-color: {b_conf['color']}; color: {b_conf['th_text']}; font-weight: bold; text-align: center;'>{f_n.strip()}</td><td style='text-align: left;'>{f_desc.strip()}</td></tr>\n        "

        transit_html = ""
        for t in transit.split(','):
            t = t.strip()
            if t: transit_html += f"<span class='transport-badge'>{t}</span> "

        trivia_list = [t.strip() + "." for t in trivia.split('. ') if t.strip()]
        trivia_html = ""
        for t in trivia_list:
            if t != ".": trivia_html += f"<li style='margin-bottom: 8px;'>{t}</li>\n        "

        page_html = HTML_TEMPLATE
        page_html = page_html.replace('[[BRAND]]', brand)
        page_html = page_html.replace('[[STORE_NAME]]', store_name)
        page_html = page_html.replace('[[BRAND_COLOR]]', b_conf['color'])
        page_html = page_html.replace('[[TITLE_BG_COLOR]]', b_conf['title_bg'])
        page_html = page_html.replace('[[TITLE_TEXT_COLOR]]', b_conf['title_text'])
        page_html = page_html.replace('[[TH_TEXT_COLOR]]', b_conf['th_text'])
        page_html = page_html.replace('[[LOGO_URL]]', b_conf['logo'])
        page_html = page_html.replace('[[LOGO_TEXT_COLOR]]', b_conf['logo_text_color'])
        
        page_html = page_html.replace('[[CLOSED_TITLE]]', closed_title)
        page_html = page_html.replace('[[CLOSED_CSS]]', closed_css)
        page_html = page_html.replace('[[CLOSED_ROW]]', closed_row)
        page_html = page_html.replace('[[CLOSED_CAT]]', closed_cat)

        page_html = page_html.replace('[[REGION_SHORT]]', region_short)
        page_html = page_html.replace('[[YEAR]]', year)
        page_html = page_html.replace('[[MONTH_DAY]]', month_day)
        page_html = page_html.replace('[[OPERATOR]]', operator)
        page_html = page_html.replace('[[ADDRESS]]', address)
        
        page_html = page_html.replace('[[NAV_CONTAINER_ID]]', nav_id)
        page_html = page_html.replace('[[NAV_SCRIPT_URL]]', nav_js)
        
        page_html = page_html.replace('[[SERVICES_HTML]]', services_html)
        page_html = page_html.replace('[[OVERVIEW]]', overview)
        page_html = page_html.replace('[[FEATURES]]', features)
        page_html = page_html.replace('[[FLOORS_HTML]]', floors_html)
        page_html = page_html.replace('[[TRANSIT_HTML]]', transit_html)
        page_html = page_html.replace('[[TRIVIA_HTML]]', trivia_html)

        filename = f"{brand}_{store_name}.html".replace(" ", "_")
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(page_html)

if __name__ == "__main__":
    generate_pages()
    print("완성!")