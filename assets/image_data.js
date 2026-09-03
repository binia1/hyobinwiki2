// 이 파일은 Node.js 스크립트(update-archive.js)에 의해 자동 생성되었습니다.
// 직접 수정하지 마시고 스크립트를 다시 실행해 주세요.

const imageFiles = [
    {
        "file": "02.webp",
        "category": "bus"
    },
    {
        "file": "03.webp",
        "category": "bus"
    },
    {
        "file": "04.webp",
        "category": "bus"
    },
    {
        "file": "05 트리오 굿즈샵.webp",
        "category": "merch"
    },
    {
        "file": "05 트리오의 N빵.webp",
        "category": "food"
    },
    {
        "file": "05 트리오의 간식.webp",
        "category": "food"
    },
    {
        "file": "05 트리오의 휴식.webp",
        "category": "illustration"
    },
    {
        "file": "05.webp",
        "category": "bus"
    },
    {
        "file": "05년생 비밀 회동.webp",
        "category": "illustration"
    },
    {
        "file": "05년생 절친들의 밤.webp",
        "category": "etc"
    },
    {
        "file": "05년생의 비밀 아지트.webp",
        "category": "etc"
    },
    {
        "file": "05트리오_공부.webp",
        "category": "illustration"
    },
    {
        "file": "05트리오_노을공원.webp",
        "category": "landmark"
    },
    {
        "file": "05트리오_놀러감.webp",
        "category": "illustration"
    },
    {
        "file": "05트리오_지친모습.webp",
        "category": "illustration"
    },
    {
        "file": "05트리오_카페파티.webp",
        "category": "food"
    },
    {
        "file": "06.webp",
        "category": "bus"
    },
    {
        "file": "07.webp",
        "category": "bus"
    },
    {
        "file": "08.webp",
        "category": "bus"
    },
    {
        "file": "09.webp",
        "category": "bus"
    },
    {
        "file": "1000.webp",
        "category": "bus"
    },
    {
        "file": "100장짜리 PPT.webp",
        "category": "etc"
    },
    {
        "file": "1053Saaya-Yamabuki-Pure-thag9A.webp",
        "category": "etc"
    },
    {
        "file": "1099Saaya-Yamabuki-Happy-m4J50L.webp",
        "category": "etc"
    },
    {
        "file": "10원 단위 더치페이.webp",
        "category": "illustration"
    },
    {
        "file": "11.webp",
        "category": "bus"
    },
    {
        "file": "111.webp",
        "category": "bus"
    },
    {
        "file": "1111.webp",
        "category": "bus"
    },
    {
        "file": "112.webp",
        "category": "bus"
    },
    {
        "file": "1151idolizedRiko.webp",
        "category": "etc"
    },
    {
        "file": "1151Riko.webp",
        "category": "etc"
    },
    {
        "file": "12.webp",
        "category": "bus"
    },
    {
        "file": "123.webp",
        "category": "bus"
    },
    {
        "file": "12번버스.webp",
        "category": "bus"
    },
    {
        "file": "13.webp",
        "category": "bus"
    },
    {
        "file": "131.webp",
        "category": "bus"
    },
    {
        "file": "132.webp",
        "category": "bus"
    },
    {
        "file": "1369Yukina-Minato.webp",
        "category": "etc"
    },
    {
        "file": "14.webp",
        "category": "bus"
    },
    {
        "file": "141.webp",
        "category": "bus"
    },
    {
        "file": "143.webp",
        "category": "bus"
    },
    {
        "file": "1444Riko.webp",
        "category": "etc"
    },
    {
        "file": "15.webp",
        "category": "bus"
    },
    {
        "file": "151.webp",
        "category": "bus"
    },
    {
        "file": "16.webp",
        "category": "bus"
    },
    {
        "file": "161.webp",
        "category": "bus"
    },
    {
        "file": "17.webp",
        "category": "bus"
    },
    {
        "file": "171.webp",
        "category": "bus"
    },
    {
        "file": "172.webp",
        "category": "bus"
    },
    {
        "file": "173.webp",
        "category": "bus"
    },
    {
        "file": "18.webp",
        "category": "bus"
    },
    {
        "file": "181.webp",
        "category": "bus"
    },
    {
        "file": "19.webp",
        "category": "bus"
    },
    {
        "file": "191.webp",
        "category": "bus"
    },
    {
        "file": "1979년 당시 안천시 행정동 지도.webp",
        "category": "map"
    },
    {
        "file": "1983년 당시 안천시 행정동 지도.webp",
        "category": "map"
    },
    {
        "file": "1호선 고나미 케익.webp",
        "category": "food"
    },
    {
        "file": "1호선 굿즈샵.webp",
        "category": "merch"
    },
    {
        "file": "1호선 굿즈샵_창선점.webp",
        "category": "merch"
    },
    {
        "file": "1호선 기관사.webp",
        "category": "etc"
    },
    {
        "file": "1호선 콜라보카페.webp",
        "category": "merch"
    },
    {
        "file": "1호선 타에열차.webp",
        "category": "train"
    },
    {
        "file": "1호선_모형.webp",
        "category": "etc"
    },
    {
        "file": "1호선레고.webp",
        "category": "etc"
    },
    {
        "file": "1호선콜캎메뉴판.webp",
        "category": "etc"
    },
    {
        "file": "20.webp",
        "category": "bus"
    },
    {
        "file": "2000.webp",
        "category": "bus"
    },
    {
        "file": "2005트리오_굿즈샵.webp",
        "category": "merch"
    },
    {
        "file": "2005트리오_놀이공원.webp",
        "category": "landmark"
    },
    {
        "file": "2005트리오_바다1.webp",
        "category": "landscape"
    },
    {
        "file": "2005트리오_바다2.webp",
        "category": "landscape"
    },
    {
        "file": "2005트리오_바다3.webp",
        "category": "landscape"
    },
    {
        "file": "2005트리오_바다4.webp",
        "category": "landscape"
    },
    {
        "file": "2005트리오_시험공부1.webp",
        "category": "illustration"
    },
    {
        "file": "2005트리오_시험공부2.webp",
        "category": "illustration"
    },
    {
        "file": "2005트리오_호텔1.webp",
        "category": "facility_com"
    },
    {
        "file": "201701182323442345..webp",
        "category": "etc"
    },
    {
        "file": "2021년_부동산학과_강의실_사건.webp",
        "category": "school"
    },
    {
        "file": "2022년 10월 과잠 착용.webp",
        "category": "etc"
    },
    {
        "file": "2022년 10월 과잠 착용.webp",
        "category": "illustration"
    },
    {
        "file": "20230925_195908.webp",
        "category": "etc"
    },
    {
        "file": "2024 파마후.webp",
        "category": "etc"
    },
    {
        "file": "2024 파마후.webp",
        "category": "etc"
    },
    {
        "file": "219.webp",
        "category": "bus"
    },
    {
        "file": "22.webp",
        "category": "bus"
    },
    {
        "file": "221.webp",
        "category": "bus"
    },
    {
        "file": "222.webp",
        "category": "bus"
    },
    {
        "file": "2222.webp",
        "category": "bus"
    },
    {
        "file": "23.webp",
        "category": "bus"
    },
    {
        "file": "231.webp",
        "category": "bus"
    },
    {
        "file": "232.webp",
        "category": "bus"
    },
    {
        "file": "24.webp",
        "category": "bus"
    },
    {
        "file": "241.webp",
        "category": "bus"
    },
    {
        "file": "242.webp",
        "category": "bus"
    },
    {
        "file": "25.webp",
        "category": "bus"
    },
    {
        "file": "251.webp",
        "category": "bus"
    },
    {
        "file": "258.webp",
        "category": "bus"
    },
    {
        "file": "26.webp",
        "category": "bus"
    },
    {
        "file": "261.webp",
        "category": "bus"
    },
    {
        "file": "27.webp",
        "category": "bus"
    },
    {
        "file": "271.webp",
        "category": "bus"
    },
    {
        "file": "28.webp",
        "category": "bus"
    },
    {
        "file": "281.webp",
        "category": "bus"
    },
    {
        "file": "29.webp",
        "category": "bus"
    },
    {
        "file": "291.webp",
        "category": "bus"
    },
    {
        "file": "292.webp",
        "category": "bus"
    },
    {
        "file": "2호선 걸어다니는 장갑차.webp",
        "category": "etc"
    },
    {
        "file": "2호선 굿즈샵.webp",
        "category": "merch"
    },
    {
        "file": "2호선 역무원.webp",
        "category": "etc"
    },
    {
        "file": "2호선 열차.webp",
        "category": "train"
    },
    {
        "file": "2호선 콜라보카페.webp",
        "category": "merch"
    },
    {
        "file": "2호선 하루빈 컵케익.webp",
        "category": "food"
    },
    {
        "file": "2호선_쿠션.webp",
        "category": "etc"
    },
    {
        "file": "2호선모카열차.webp",
        "category": "train"
    },
    {
        "file": "2호선콜캎메뉴판.webp",
        "category": "etc"
    },
    {
        "file": "30.webp",
        "category": "bus"
    },
    {
        "file": "3000.webp",
        "category": "bus"
    },
    {
        "file": "306UR-Sakurauchi-Riko-私とあなた-二人だけの時間-薔薇のしらべ-GdT8b6.webp",
        "category": "etc"
    },
    {
        "file": "30렙 폭격기.webp",
        "category": "event"
    },
    {
        "file": "33.webp",
        "category": "bus"
    },
    {
        "file": "331.webp",
        "category": "bus"
    },
    {
        "file": "3333.webp",
        "category": "bus"
    },
    {
        "file": "34.webp",
        "category": "bus"
    },
    {
        "file": "341.webp",
        "category": "bus"
    },
    {
        "file": "35.webp",
        "category": "bus"
    },
    {
        "file": "351.webp",
        "category": "bus"
    },
    {
        "file": "36.webp",
        "category": "bus"
    },
    {
        "file": "361.webp",
        "category": "bus"
    },
    {
        "file": "37.webp",
        "category": "bus"
    },
    {
        "file": "371.webp",
        "category": "bus"
    },
    {
        "file": "38.webp",
        "category": "bus"
    },
    {
        "file": "381.webp",
        "category": "bus"
    },
    {
        "file": "39.webp",
        "category": "bus"
    },
    {
        "file": "391.webp",
        "category": "bus"
    },
    {
        "file": "3단 고기 도시락.webp",
        "category": "food"
    },
    {
        "file": "3단 고기 도시락의 온기.webp",
        "category": "food"
    },
    {
        "file": "3대 가족의 든든한 기둥.webp",
        "category": "person"
    },
    {
        "file": "3줄 요약의 달인.webp",
        "category": "document"
    },
    {
        "file": "3호선 굿즈샵.webp",
        "category": "merch"
    },
    {
        "file": "3호선 담당자.webp",
        "category": "etc"
    },
    {
        "file": "3호선 디저트.webp",
        "category": "food"
    },
    {
        "file": "3호선 박라미 피자.webp",
        "category": "food"
    },
    {
        "file": "3호선 사야열차.webp",
        "category": "train"
    },
    {
        "file": "3호선 안내판.webp",
        "category": "etc"
    },
    {
        "file": "3호선 콜라보카페.webp",
        "category": "merch"
    },
    {
        "file": "3호선 홍보대사.webp",
        "category": "etc"
    },
    {
        "file": "3호선마스코트_실루엣.webp",
        "category": "character"
    },
    {
        "file": "3호선콜캎메뉴판.webp",
        "category": "etc"
    },
    {
        "file": "40.webp",
        "category": "bus"
    },
    {
        "file": "4000.webp",
        "category": "bus"
    },
    {
        "file": "4004.webp",
        "category": "bus"
    },
    {
        "file": "441.webp",
        "category": "bus"
    },
    {
        "file": "45.webp",
        "category": "bus"
    },
    {
        "file": "451.webp",
        "category": "bus"
    },
    {
        "file": "46.webp",
        "category": "bus"
    },
    {
        "file": "461.webp",
        "category": "bus"
    },
    {
        "file": "47.webp",
        "category": "bus"
    },
    {
        "file": "471.webp",
        "category": "bus"
    },
    {
        "file": "48.webp",
        "category": "bus"
    },
    {
        "file": "481.webp",
        "category": "bus"
    },
    {
        "file": "49.webp",
        "category": "bus"
    },
    {
        "file": "491.webp",
        "category": "bus"
    },
    {
        "file": "492.webp",
        "category": "bus"
    },
    {
        "file": "4개 국어 프리토킹.webp",
        "category": "etc"
    },
    {
        "file": "4호선 굿즈샵.webp",
        "category": "merch"
    },
    {
        "file": "4호선 그라탕.webp",
        "category": "food"
    },
    {
        "file": "4호선 다로나 라멘.webp",
        "category": "food"
    },
    {
        "file": "4호선 짭라보카페(시정명령조치됨).webp",
        "category": "food"
    },
    {
        "file": "4호선 카스미열차.webp",
        "category": "train"
    },
    {
        "file": "4호선 콜라보카페.webp",
        "category": "merch"
    },
    {
        "file": "4호선 통제실의 지배자.webp",
        "category": "etc"
    },
    {
        "file": "4호선의 방패.webp",
        "category": "illustration"
    },
    {
        "file": "4호선콜캎메뉴판.webp",
        "category": "etc"
    },
    {
        "file": "50.webp",
        "category": "bus"
    },
    {
        "file": "502 화환 플럇.webp",
        "category": "etc"
    },
    {
        "file": "522.webp",
        "category": "bus"
    },
    {
        "file": "551.webp",
        "category": "bus"
    },
    {
        "file": "552.webp",
        "category": "bus"
    },
    {
        "file": "5555.webp",
        "category": "bus"
    },
    {
        "file": "56.webp",
        "category": "bus"
    },
    {
        "file": "561.webp",
        "category": "bus"
    },
    {
        "file": "57.webp",
        "category": "bus"
    },
    {
        "file": "571.webp",
        "category": "bus"
    },
    {
        "file": "58.webp",
        "category": "bus"
    },
    {
        "file": "581.webp",
        "category": "bus"
    },
    {
        "file": "59.webp",
        "category": "bus"
    },
    {
        "file": "591.webp",
        "category": "bus"
    },
    {
        "file": "592.webp",
        "category": "bus"
    },
    {
        "file": "5남매 샌드위치.webp",
        "category": "food"
    },
    {
        "file": "5호선 굿즈샵.webp",
        "category": "merch"
    },
    {
        "file": "5호선 떡볶이.webp",
        "category": "food"
    },
    {
        "file": "5호선 란열차.webp",
        "category": "train"
    },
    {
        "file": "5호선 마스코트.webp",
        "category": "character"
    },
    {
        "file": "5호선 콜라보카페.webp",
        "category": "merch"
    },
    {
        "file": "5호선_개통식_테이프커팅.webp",
        "category": "event"
    },
    {
        "file": "5호선_공사중단현장.webp",
        "category": "facility_gov"
    },
    {
        "file": "5호선_빨간색_전동차.webp",
        "category": "train"
    },
    {
        "file": "5호선콜캎메뉴판.webp",
        "category": "etc"
    },
    {
        "file": "6,7호선 광고.webp",
        "category": "logo"
    },
    {
        "file": "60.webp",
        "category": "bus"
    },
    {
        "file": "6000.webp",
        "category": "bus"
    },
    {
        "file": "612.webp",
        "category": "bus"
    },
    {
        "file": "632.webp",
        "category": "bus"
    },
    {
        "file": "66.webp",
        "category": "bus"
    },
    {
        "file": "661.webp",
        "category": "bus"
    },
    {
        "file": "6666.webp",
        "category": "bus"
    },
    {
        "file": "67.webp",
        "category": "bus"
    },
    {
        "file": "671.webp",
        "category": "bus"
    },
    {
        "file": "672.webp",
        "category": "bus"
    },
    {
        "file": "68.webp",
        "category": "bus"
    },
    {
        "file": "681.webp",
        "category": "bus"
    },
    {
        "file": "682.webp",
        "category": "bus"
    },
    {
        "file": "69.webp",
        "category": "bus"
    },
    {
        "file": "691.webp",
        "category": "bus"
    },
    {
        "file": "692.webp",
        "category": "bus"
    },
    {
        "file": "6남매의 방패.webp",
        "category": "illustration"
    },
    {
        "file": "6호선 굿즈샵.webp",
        "category": "merch"
    },
    {
        "file": "6호선 마스코트.webp",
        "category": "character"
    },
    {
        "file": "6호선 유키나열차.webp",
        "category": "train"
    },
    {
        "file": "6호선 중앙 통제실.webp",
        "category": "etc"
    },
    {
        "file": "6호선 치즈케익.webp",
        "category": "food"
    },
    {
        "file": "6호선 콜라보카페.webp",
        "category": "merch"
    },
    {
        "file": "6호선 콜캎메뉴판.webp",
        "category": "etc"
    },
    {
        "file": "6호선_개통식.webp",
        "category": "event"
    },
    {
        "file": "6호선_무츠미_광고.webp",
        "category": "logo"
    },
    {
        "file": "6호선_안전요원.webp",
        "category": "etc"
    },
    {
        "file": "6호선_출근길.webp",
        "category": "road"
    },
    {
        "file": "70.webp",
        "category": "bus"
    },
    {
        "file": "7000.webp",
        "category": "bus"
    },
    {
        "file": "7000원_갈색버스.webp",
        "category": "bus"
    },
    {
        "file": "752.webp",
        "category": "bus"
    },
    {
        "file": "753.webp",
        "category": "bus"
    },
    {
        "file": "77.webp",
        "category": "bus"
    },
    {
        "file": "771.webp",
        "category": "bus"
    },
    {
        "file": "7777.webp",
        "category": "bus"
    },
    {
        "file": "78.webp",
        "category": "bus"
    },
    {
        "file": "781.webp",
        "category": "bus"
    },
    {
        "file": "79.webp",
        "category": "bus"
    },
    {
        "file": "791.webp",
        "category": "bus"
    },
    {
        "file": "792.webp",
        "category": "bus"
    },
    {
        "file": "793.webp",
        "category": "bus"
    },
    {
        "file": "7호선 굿즈샵.webp",
        "category": "merch"
    },
    {
        "file": "7호선 근로장학생.webp",
        "category": "person"
    },
    {
        "file": "7호선 아논열차.webp",
        "category": "train"
    },
    {
        "file": "7호선 임세정 케이크.webp",
        "category": "food"
    },
    {
        "file": "7호선 임세정 콜라보카페.webp",
        "category": "merch"
    },
    {
        "file": "7호선 임세정 콜캎메뉴판.webp",
        "category": "character"
    },
    {
        "file": "7호선 임세하 모나카.webp",
        "category": "food"
    },
    {
        "file": "7호선 임세하 콜라보카페.webp",
        "category": "merch"
    },
    {
        "file": "7호선 임세하 콜캎메뉴판.webp",
        "category": "character"
    },
    {
        "file": "7호선_다이캐스트.webp",
        "category": "etc"
    },
    {
        "file": "7호선의 맏언니.webp",
        "category": "person"
    },
    {
        "file": "80.webp",
        "category": "bus"
    },
    {
        "file": "8000.webp",
        "category": "bus"
    },
    {
        "file": "81.webp",
        "category": "bus"
    },
    {
        "file": "842.webp",
        "category": "bus"
    },
    {
        "file": "88.webp",
        "category": "bus"
    },
    {
        "file": "881.webp",
        "category": "bus"
    },
    {
        "file": "8888.webp",
        "category": "bus"
    },
    {
        "file": "89.webp",
        "category": "bus"
    },
    {
        "file": "891.webp",
        "category": "bus"
    },
    {
        "file": "892.webp",
        "category": "bus"
    },
    {
        "file": "8a948b867a8398aa017aa4bb071f0054_medium..webp",
        "category": "etc"
    },
    {
        "file": "8표정.webp",
        "category": "illustration"
    },
    {
        "file": "8호선 굿즈샵.webp",
        "category": "merch"
    },
    {
        "file": "8호선 마스코트.webp",
        "category": "character"
    },
    {
        "file": "8호선 유리아 컵케익.webp",
        "category": "food"
    },
    {
        "file": "8호선 이브열차.webp",
        "category": "train"
    },
    {
        "file": "8호선 콜라보카페.webp",
        "category": "merch"
    },
    {
        "file": "8호선_개통식.webp",
        "category": "event"
    },
    {
        "file": "8호선_공사중단위기.webp",
        "category": "facility_gov"
    },
    {
        "file": "8호선콜캎메뉴판.webp",
        "category": "etc"
    },
    {
        "file": "90.webp",
        "category": "bus"
    },
    {
        "file": "9000.webp",
        "category": "bus"
    },
    {
        "file": "91.webp",
        "category": "bus"
    },
    {
        "file": "991.webp",
        "category": "bus"
    },
    {
        "file": "991Saaya-Yamabuki-Power-9kxZyh.webp",
        "category": "etc"
    },
    {
        "file": "9999.webp",
        "category": "bus"
    },
    {
        "file": "Afterglow 10th.webp",
        "category": "etc"
    },
    {
        "file": "Afterglow(BanG Dream!) 로고.svg",
        "category": "logo"
    },
    {
        "file": "AGT 무인운전 스캔.webp",
        "category": "etc"
    },
    {
        "file": "AI 사신 각성.webp",
        "category": "etc"
    },
    {
        "file": "AKG 헤드폰.webp",
        "category": "etc"
    },
    {
        "file": "AK백화점_효빈점.webp",
        "category": "facility_com"
    },
    {
        "file": "AK플라자_로고.svg",
        "category": "logo"
    },
    {
        "file": "Aqours 로고.svg",
        "category": "logo"
    },
    {
        "file": "arale_casual.webp",
        "category": "etc"
    },
    {
        "file": "ASMR 수집가.webp",
        "category": "etc"
    },
    {
        "file": "Ave Mujica 10th.webp",
        "category": "road"
    },
    {
        "file": "Ave_Mujica_logo.webp",
        "category": "road"
    },
    {
        "file": "Azusa Nakano.webp",
        "category": "etc"
    },
    {
        "file": "A씨.webp",
        "category": "etc"
    },
    {
        "file": "BanG Dream! 가로 로고.svg",
        "category": "logo"
    },
    {
        "file": "BLD.webp",
        "category": "etc"
    },
    {
        "file": "bnr_bluebird.webp",
        "category": "logo"
    },
    {
        "file": "bnr_hasunosora_104_1.webp",
        "category": "logo"
    },
    {
        "file": "bnr_lovelive.webp",
        "category": "logo"
    },
    {
        "file": "bnr_musical.webp",
        "category": "road"
    },
    {
        "file": "bnr_nijigasaki.webp",
        "category": "logo"
    },
    {
        "file": "bnr_sunshine.webp",
        "category": "logo"
    },
    {
        "file": "bnr_superstar.webp",
        "category": "logo"
    },
    {
        "file": "bnr_yohane.webp",
        "category": "logo"
    },
    {
        "file": "BRO.svg",
        "category": "logo"
    },
    {
        "file": "BURC의 빛.webp",
        "category": "etc"
    },
    {
        "file": "C++ 철야 코딩.webp",
        "category": "etc"
    },
    {
        "file": "C62모형.webp",
        "category": "etc"
    },
    {
        "file": "CCTV_원격공개.webp",
        "category": "etc"
    },
    {
        "file": "CGV 고송 내부.webp",
        "category": "facility_com"
    },
    {
        "file": "CGV_고송.webp",
        "category": "facility_com"
    },
    {
        "file": "CGV_덕현.webp",
        "category": "facility_com"
    },
    {
        "file": "CGV_도변.webp",
        "category": "facility_com"
    },
    {
        "file": "CGV_로고_화이트.svg",
        "category": "facility_com"
    },
    {
        "file": "CGV_이자.webp",
        "category": "facility_com"
    },
    {
        "file": "CGV_청엽.webp",
        "category": "facility_com"
    },
    {
        "file": "CGV_평당.webp",
        "category": "facility_com"
    },
    {
        "file": "CGV_효빈.webp",
        "category": "facility_com"
    },
    {
        "file": "CGV_효빈대.webp",
        "category": "facility_com"
    },
    {
        "file": "chikarico.webp",
        "category": "road"
    },
    {
        "file": "CTMHssnr..webp",
        "category": "etc"
    },
    {
        "file": "dangseon_platform_2.webp",
        "category": "etc"
    },
    {
        "file": "dangseon_platform_5.webp",
        "category": "etc"
    },
    {
        "file": "DB_프로미_로고.svg",
        "category": "logo"
    },
    {
        "file": "DFM.svg",
        "category": "logo"
    },
    {
        "file": "DK.svg",
        "category": "logo"
    },
    {
        "file": "DOLLCHESTRA.webp",
        "category": "etc"
    },
    {
        "file": "DRX.svg",
        "category": "logo"
    },
    {
        "file": "D_주무관.webp",
        "category": "person"
    },
    {
        "file": "express_bus_terminal_platform_3.webp",
        "category": "etc"
    },
    {
        "file": "express_bus_terminal_platform_5.webp",
        "category": "etc"
    },
    {
        "file": "FC서울_로고.svg",
        "category": "logo"
    },
    {
        "file": "FC안양_로고.svg",
        "category": "logo"
    },
    {
        "file": "FOX.svg",
        "category": "logo"
    },
    {
        "file": "FqNqDqoaQAEB_Ru.webp",
        "category": "etc"
    },
    {
        "file": "F_교수.webp",
        "category": "person"
    },
    {
        "file": "F는 Framing의 F.webp",
        "category": "etc"
    },
    {
        "file": "F학점 동맹.webp",
        "category": "school"
    },
    {
        "file": "galleria_hyobin_night.webp",
        "category": "etc"
    },
    {
        "file": "GE.webp",
        "category": "etc"
    },
    {
        "file": "Gemini_Generated_Image_vnkduqvnkduqvnkd.webp",
        "category": "etc"
    },
    {
        "file": "GenG.svg",
        "category": "logo"
    },
    {
        "file": "GS마트_로고.svg",
        "category": "facility_com"
    },
    {
        "file": "Guilty Kiss.webp",
        "category": "logo"
    },
    {
        "file": "gyeseong_station.webp",
        "category": "etc"
    },
    {
        "file": "HAF 진행.webp",
        "category": "event"
    },
    {
        "file": "HAF.webp",
        "category": "event"
    },
    {
        "file": "HAF2026포스터.webp",
        "category": "event"
    },
    {
        "file": "HAF_PASS_매진.webp",
        "category": "event"
    },
    {
        "file": "HAF_암표상_검거.webp",
        "category": "event"
    },
    {
        "file": "HAF_축제_현장.webp",
        "category": "event"
    },
    {
        "file": "HAF_코스프레.webp",
        "category": "event"
    },
    {
        "file": "HAF_코스프레_퍼레이드.webp",
        "category": "event"
    },
    {
        "file": "HAF_폐막_현장.webp",
        "category": "event"
    },
    {
        "file": "HAF_폭염.webp",
        "category": "event"
    },
    {
        "file": "HAF광고.webp",
        "category": "event"
    },
    {
        "file": "HAF의 여신.webp",
        "category": "event"
    },
    {
        "file": "HAF패스포트.webp",
        "category": "event"
    },
    {
        "file": "HAF현수기.webp",
        "category": "event"
    },
    {
        "file": "HBS_로고.webp",
        "category": "logo"
    },
    {
        "file": "HBUS_방송국.webp",
        "category": "facility_com"
    },
    {
        "file": "Hello Happy World 10th.webp",
        "category": "etc"
    },
    {
        "file": "Hello_happy_world_logo.webp",
        "category": "logo"
    },
    {
        "file": "HIST_UI.webp",
        "category": "logo"
    },
    {
        "file": "HJ몰_중수점.webp",
        "category": "etc"
    },
    {
        "file": "HLE.svg",
        "category": "logo"
    },
    {
        "file": "HSCO.webp",
        "category": "etc"
    },
    {
        "file": "HSCO_로고.webp",
        "category": "logo"
    },
    {
        "file": "HSCO_흰색로고.webp",
        "category": "logo"
    },
    {
        "file": "hyobin1.webp",
        "category": "etc"
    },
    {
        "file": "hyobin3.webp",
        "category": "etc"
    },
    {
        "file": "hyobin4.webp",
        "category": "etc"
    },
    {
        "file": "hyobin_store.webp",
        "category": "etc"
    },
    {
        "file": "H_교수.webp",
        "category": "person"
    },
    {
        "file": "ikkadumbrock.webp",
        "category": "etc"
    },
    {
        "file": "Ikka_Dumb_Rock_logo.webp",
        "category": "logo"
    },
    {
        "file": "image (2).webp",
        "category": "etc"
    },
    {
        "file": "image (3).webp",
        "category": "etc"
    },
    {
        "file": "image (4).webp",
        "category": "etc"
    },
    {
        "file": "image (5).webp",
        "category": "etc"
    },
    {
        "file": "image (6).webp",
        "category": "etc"
    },
    {
        "file": "image_9697df.webp",
        "category": "etc"
    },
    {
        "file": "IMG 0669.webp",
        "category": "etc"
    },
    {
        "file": "IMG_5182.webp",
        "category": "etc"
    },
    {
        "file": "IMG_5183.webp",
        "category": "etc"
    },
    {
        "file": "jungsu_platform_2.webp",
        "category": "etc"
    },
    {
        "file": "jungsu_platform_6.webp",
        "category": "etc"
    },
    {
        "file": "J_교수.webp",
        "category": "person"
    },
    {
        "file": "K-아재 입맛.webp",
        "category": "person"
    },
    {
        "file": "K-장녀와 셋째의 소주 한잔.webp",
        "category": "etc"
    },
    {
        "file": "K-장녀의 눈물.webp",
        "category": "etc"
    },
    {
        "file": "K-장녀의 등짝 스매싱.webp",
        "category": "etc"
    },
    {
        "file": "K-장녀의 아침.webp",
        "category": "etc"
    },
    {
        "file": "KBL_로고.svg",
        "category": "logo"
    },
    {
        "file": "KBO_로고.svg",
        "category": "logo"
    },
    {
        "file": "KCC_이지스_로고.svg",
        "category": "logo"
    },
    {
        "file": "KDF.svg",
        "category": "logo"
    },
    {
        "file": "KIA_타이거즈_로고.svg",
        "category": "logo"
    },
    {
        "file": "KT.svg",
        "category": "logo"
    },
    {
        "file": "kt_wiz_로고.svg",
        "category": "logo"
    },
    {
        "file": "KT_소닉붐_로고.svg",
        "category": "logo"
    },
    {
        "file": "LG_세이커스_로고.svg",
        "category": "logo"
    },
    {
        "file": "LG_트윈스_로고.svg",
        "category": "logo"
    },
    {
        "file": "LG마트_로고.svg",
        "category": "facility_com"
    },
    {
        "file": "logo.webp",
        "category": "logo"
    },
    {
        "file": "L_Project.webp",
        "category": "etc"
    },
    {
        "file": "mascot.webp",
        "category": "etc"
    },
    {
        "file": "millsage.webp",
        "category": "etc"
    },
    {
        "file": "millsage_logo.webp",
        "category": "logo"
    },
    {
        "file": "Mio Akiyama.webp",
        "category": "etc"
    },
    {
        "file": "miyako_casual.webp",
        "category": "etc"
    },
    {
        "file": "Morfonica 10th.webp",
        "category": "road"
    },
    {
        "file": "morfonica_logo.webp",
        "category": "road"
    },
    {
        "file": "MOU체결_화상회의.webp",
        "category": "event"
    },
    {
        "file": "mugendai_mewtype_arale.webp",
        "category": "etc"
    },
    {
        "file": "mugendai_mewtype_miyako.webp",
        "category": "etc"
    },
    {
        "file": "mugendai_mewtype_nonoka.webp",
        "category": "etc"
    },
    {
        "file": "mugendai_mewtype_ritsu.webp",
        "category": "etc"
    },
    {
        "file": "mugendai_mewtype_yuno.webp",
        "category": "etc"
    },
    {
        "file": "MyGO 10th.webp",
        "category": "etc"
    },
    {
        "file": "MyGO성우진.webp",
        "category": "person"
    },
    {
        "file": "M_교수.webp",
        "category": "person"
    },
    {
        "file": "NC_다이노스_로고.svg",
        "category": "logo"
    },
    {
        "file": "NC백화점_로고.svg",
        "category": "facility_com"
    },
    {
        "file": "NC백화점_효빈점.webp",
        "category": "facility_com"
    },
    {
        "file": "nfc.webp",
        "category": "etc"
    },
    {
        "file": "nonoka_casual.webp",
        "category": "etc"
    },
    {
        "file": "NS.svg",
        "category": "logo"
    },
    {
        "file": "Pastel Palettes 10th.webp",
        "category": "etc"
    },
    {
        "file": "Poppin Party 10th.webp",
        "category": "etc"
    },
    {
        "file": "Poppin_party_logo.pngParty_성우진.webp",
        "category": "logo"
    },
    {
        "file": "Poppin_party_logo.webp",
        "category": "logo"
    },
    {
        "file": "President-Moon.webp",
        "category": "etc"
    },
    {
        "file": "Project V의 은밀한 취미.webp",
        "category": "etc"
    },
    {
        "file": "PRX.webp",
        "category": "etc"
    },
    {
        "file": "QR 스나이퍼.webp",
        "category": "etc"
    },
    {
        "file": "RAISE A SUILEN 10th.webp",
        "category": "logo"
    },
    {
        "file": "RAISE_A_SUILEN_logo.webp",
        "category": "logo"
    },
    {
        "file": "redirect.svg",
        "category": "logo"
    },
    {
        "file": "Ritsu Tainaka.webp",
        "category": "etc"
    },
    {
        "file": "ritsu_casual.webp",
        "category": "etc"
    },
    {
        "file": "Roselia 10th.webp",
        "category": "etc"
    },
    {
        "file": "Roselia_logo.webp",
        "category": "logo"
    },
    {
        "file": "RRQ.webp",
        "category": "etc"
    },
    {
        "file": "sd.webp",
        "category": "character"
    },
    {
        "file": "seogu_logo_old.webp",
        "category": "logo"
    },
    {
        "file": "SK_나이츠_로고.svg",
        "category": "logo"
    },
    {
        "file": "SK슈가글라이더즈_로고.svg",
        "category": "logo"
    },
    {
        "file": "SK호크스_로고.svg",
        "category": "logo"
    },
    {
        "file": "sqld_합격기념_에리_카스미_리코.webp",
        "category": "character"
    },
    {
        "file": "SSG_랜더스_로고.svg",
        "category": "logo"
    },
    {
        "file": "SWJV64V3OZNCRFOLKW7P2YEWFY.webp",
        "category": "etc"
    },
    {
        "file": "sYLc0bd.webp",
        "category": "etc"
    },
    {
        "file": "S_교수.webp",
        "category": "person"
    },
    {
        "file": "S급 두뇌 풀가동.webp",
        "category": "etc"
    },
    {
        "file": "T03버스(콜라보) (2).webp",
        "category": "bus"
    },
    {
        "file": "T1.svg",
        "category": "logo"
    },
    {
        "file": "TLN.svg",
        "category": "logo"
    },
    {
        "file": "TS.svg",
        "category": "logo"
    },
    {
        "file": "Tsumugi Kotobuki.webp",
        "category": "etc"
    },
    {
        "file": "TV토론_박효빈_분노.webp",
        "category": "person"
    },
    {
        "file": "Ui Hirasawa.webp",
        "category": "logo"
    },
    {
        "file": "vr_CityHall.webp",
        "category": "etc"
    },
    {
        "file": "vr_Farm.webp",
        "category": "etc"
    },
    {
        "file": "vr_HAF.webp",
        "category": "event"
    },
    {
        "file": "vr_Harbor.webp",
        "category": "etc"
    },
    {
        "file": "Y2K 밀레니엄 고글.webp",
        "category": "etc"
    },
    {
        "file": "Yamabuki_Saaya_Signature.webp",
        "category": "etc"
    },
    {
        "file": "yamabuki_saya_0th.webp",
        "category": "etc"
    },
    {
        "file": "yamabuki_saya_1st.webp",
        "category": "etc"
    },
    {
        "file": "yamabuki_saya_2nd.webp",
        "category": "etc"
    },
    {
        "file": "yamabuki_saya_3rd.webp",
        "category": "etc"
    },
    {
        "file": "yamabuki_saya_5th.webp",
        "category": "etc"
    },
    {
        "file": "yamabuki_saya_6th.webp",
        "category": "etc"
    },
    {
        "file": "Yui Hirasawa.webp",
        "category": "logo"
    },
    {
        "file": "Yumemita 10th.webp",
        "category": "etc"
    },
    {
        "file": "yumemita_logo.webp",
        "category": "logo"
    },
    {
        "file": "yuno_casual.webp",
        "category": "etc"
    },
    {
        "file": "ZETA.svg",
        "category": "logo"
    },
    {
        "file": "[ワクワクなひととき] 山吹 沙綾 1.webp",
        "category": "etc"
    },
    {
        "file": "[花の咲く笑談] 山吹 沙綾 1.webp",
        "category": "etc"
    },
    {
        "file": "[내밀어진 손] 야마부키 사아야.webp",
        "category": "character"
    },
    {
        "file": "[미래의 고동을 느끼며] 야마부키 사아야 L2D.webp",
        "category": "character"
    },
    {
        "file": "[미래의 고동을 느끼며] 야마부키 사아야 SD.webp",
        "category": "character"
    },
    {
        "file": "고등학교 졸업사진(2021).webp",
        "category": "etc"
    },
    {
        "file": "다이어트후(2018).webp",
        "category": "etc"
    },
    {
        "file": "단기알바(모델하우스).webp",
        "category": "etc"
    },
    {
        "file": "대학입학 직후(2022).webp",
        "category": "etc"
    },
    {
        "file": "박효빈 2022편의점근장.webp",
        "category": "etc"
    },
    {
        "file": "박효빈 고1.webp",
        "category": "etc"
    },
    {
        "file": "박효빈 고2.webp",
        "category": "etc"
    },
    {
        "file": "박효빈 대2(2023).webp",
        "category": "etc"
    },
    {
        "file": "박효빈 중1.webp",
        "category": "etc"
    },
    {
        "file": "박효빈 중딩시절(돼지,2016).webp",
        "category": "etc"
    },
    {
        "file": "박효빈 초1.webp",
        "category": "etc"
    },
    {
        "file": "박효빈 초4(2013).webp",
        "category": "etc"
    },
    {
        "file": "박효빈(1살).webp",
        "category": "etc"
    },
    {
        "file": "박효빈(3살 추정(2005).webp",
        "category": "etc"
    },
    {
        "file": "박효빈(5~6세).webp",
        "category": "etc"
    },
    {
        "file": "박효빈(7세추정,2009).webp",
        "category": "etc"
    },
    {
        "file": "박효빈(뱃속(2002)).webp",
        "category": "etc"
    },
    {
        "file": "박효빈(초딩졸업사진,2015).webp",
        "category": "etc"
    },
    {
        "file": "박효빈, 마음고생심한시절, 잠깐여행(2024).webp",
        "category": "etc"
    },
    {
        "file": "박효빈2016(중1).webp",
        "category": "etc"
    },
    {
        "file": "박효빈_2세(2004).webp",
        "category": "etc"
    },
    {
        "file": "박효빈_5세(2007).webp",
        "category": "etc"
    },
    {
        "file": "박효빈_6세(2008).webp",
        "category": "etc"
    },
    {
        "file": "박효빈_개강모임(미침).webp",
        "category": "etc"
    },
    {
        "file": "박효빈_윤석열규탄시위.webp",
        "category": "etc"
    },
    {
        "file": "박효빈_중학졸업(2019).webp",
        "category": "etc"
    },
    {
        "file": "박효빈_청년정책포럼(2024).webp",
        "category": "etc"
    },
    {
        "file": "박효빈_카논등신대.webp",
        "category": "etc"
    },
    {
        "file": "박효빈_희망tv.webp",
        "category": "etc"
    },
    {
        "file": "박효빈맥날.webp",
        "category": "etc"
    },
    {
        "file": "중학교 졸업사진(2018, 살뺴기전).webp",
        "category": "etc"
    },
    {
        "file": "지아센 대청교 당시 애들이 찍어준사진(2024).webp",
        "category": "etc"
    },
    {
        "file": "칭다오 사변 당시(2019).webp",
        "category": "etc"
    },
    {
        "file": "お日さまに手を振って - 야마부키 사아야 각전.webp",
        "category": "character"
    },
    {
        "file": "ダレモ.webp",
        "category": "etc"
    },
    {
        "file": "ㄱ.webp",
        "category": "etc"
    },
    {
        "file": "ㄲ.webp",
        "category": "etc"
    },
    {
        "file": "ㄴ.webp",
        "category": "etc"
    },
    {
        "file": "ㄴㄴ.webp",
        "category": "etc"
    },
    {
        "file": "ㄷ.webp",
        "category": "etc"
    },
    {
        "file": "ㄸ.webp",
        "category": "etc"
    },
    {
        "file": "ㄹ.webp",
        "category": "etc"
    },
    {
        "file": "ㄹㄷ.webp",
        "category": "etc"
    },
    {
        "file": "ㅁ.webp",
        "category": "etc"
    },
    {
        "file": "ㅂ.webp",
        "category": "etc"
    },
    {
        "file": "ㅃ.webp",
        "category": "etc"
    },
    {
        "file": "ㅅ.webp",
        "category": "etc"
    },
    {
        "file": "ㅅㅎ.webp",
        "category": "etc"
    },
    {
        "file": "ㅆ.webp",
        "category": "etc"
    },
    {
        "file": "ㅇ.webp",
        "category": "etc"
    },
    {
        "file": "ㅇㅇ.webp",
        "category": "etc"
    },
    {
        "file": "ㅈ.webp",
        "category": "etc"
    },
    {
        "file": "ㅉ.webp",
        "category": "etc"
    },
    {
        "file": "ㅊ.webp",
        "category": "etc"
    },
    {
        "file": "ㅋ.webp",
        "category": "etc"
    },
    {
        "file": "ㅌ.webp",
        "category": "etc"
    },
    {
        "file": "ㅌㅎ.webp",
        "category": "etc"
    },
    {
        "file": "ㅍ.webp",
        "category": "etc"
    },
    {
        "file": "ㅍㅎ.webp",
        "category": "etc"
    },
    {
        "file": "ㅎ.webp",
        "category": "etc"
    },
    {
        "file": "ㅏ.webp",
        "category": "etc"
    },
    {
        "file": "ㅑ.webp",
        "category": "etc"
    },
    {
        "file": "ㅓ.webp",
        "category": "etc"
    },
    {
        "file": "ㅔ.webp",
        "category": "etc"
    },
    {
        "file": "ㅕ.webp",
        "category": "etc"
    },
    {
        "file": "ㅗ.webp",
        "category": "etc"
    },
    {
        "file": "ㅚ.webp",
        "category": "etc"
    },
    {
        "file": "ㅛ.webp",
        "category": "etc"
    },
    {
        "file": "ㅜ.webp",
        "category": "etc"
    },
    {
        "file": "ㅟ.webp",
        "category": "etc"
    },
    {
        "file": "ㅠ.webp",
        "category": "etc"
    },
    {
        "file": "ㅡ.webp",
        "category": "etc"
    },
    {
        "file": "ㅣ.webp",
        "category": "etc"
    },
    {
        "file": "全部をさらして生きてやる.webp",
        "category": "etc"
    },
    {
        "file": "名もなき何もかも.webp",
        "category": "etc"
    },
    {
        "file": "小指立てませんか.webp",
        "category": "etc"
    },
    {
        "file": "棘アリ.webp",
        "category": "etc"
    },
    {
        "file": "棘ナシ.webp",
        "category": "etc"
    },
    {
        "file": "極私的極彩色アンサー.webp",
        "category": "etc"
    },
    {
        "file": "気鬱、白濁す.webp",
        "category": "etc"
    },
    {
        "file": "爆ぜて咲く.webp",
        "category": "etc"
    },
    {
        "file": "空白とカタルシス.webp",
        "category": "etc"
    },
    {
        "file": "薄采ディスプレイ.webp",
        "category": "etc"
    },
    {
        "file": "視界の隅_朽ちる音.webp",
        "category": "etc"
    },
    {
        "file": "誰にもなれない私だから.webp",
        "category": "etc"
    },
    {
        "file": "運命に賭けたい論理.webp",
        "category": "etc"
    },
    {
        "file": "雑踏、僕らの街.webp",
        "category": "etc"
    },
    {
        "file": "가동사거리역_4호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "가동사거리역_6호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "가려지지 않는 D컵.webp",
        "category": "etc"
    },
    {
        "file": "가성비 쇼핑.webp",
        "category": "etc"
    },
    {
        "file": "가성비 수면.webp",
        "category": "etc"
    },
    {
        "file": "가식 진심 표정.webp",
        "category": "illustration"
    },
    {
        "file": "가원구청.webp",
        "category": "facility_gov"
    },
    {
        "file": "가을날의 피크닉.webp",
        "category": "etc"
    },
    {
        "file": "가족센터역_승강장.webp",
        "category": "station"
    },
    {
        "file": "가족을 지키는 방패.webp",
        "category": "person"
    },
    {
        "file": "가족을 향한 츤데레.webp",
        "category": "person"
    },
    {
        "file": "각 잡힌 스케줄.webp",
        "category": "etc"
    },
    {
        "file": "간선버스.webp",
        "category": "bus"
    },
    {
        "file": "간식 창고 털이범.webp",
        "category": "food"
    },
    {
        "file": "간이과세_배제업종.webp",
        "category": "etc"
    },
    {
        "file": "간이과세_비교표.webp",
        "category": "document"
    },
    {
        "file": "간이과세_세액계산흐름도.webp",
        "category": "document"
    },
    {
        "file": "간이과세_신고납부일정.webp",
        "category": "document"
    },
    {
        "file": "간이과세_업종별부가가치율.webp",
        "category": "etc"
    },
    {
        "file": "간이과세_예제문제_풀이.webp",
        "category": "etc"
    },
    {
        "file": "간이과세_의의.webp",
        "category": "etc"
    },
    {
        "file": "간호대 - 한의관역_승강장.webp",
        "category": "station"
    },
    {
        "file": "간호학과_교수.webp",
        "category": "person"
    },
    {
        "file": "갈색 음식 극혐.webp",
        "category": "food"
    },
    {
        "file": "감사원_로고.svg",
        "category": "logo"
    },
    {
        "file": "감성 스나이퍼.webp",
        "category": "etc"
    },
    {
        "file": "감성 캠핑의 밤.webp",
        "category": "etc"
    },
    {
        "file": "감성 파괴 극혐.webp",
        "category": "etc"
    },
    {
        "file": "감성 프레임 파괴.webp",
        "category": "etc"
    },
    {
        "file": "감성 행정 마스터피스.webp",
        "category": "etc"
    },
    {
        "file": "감성 행정의 선진국.webp",
        "category": "etc"
    },
    {
        "file": "감성과 엑셀의 괴리.webp",
        "category": "etc"
    },
    {
        "file": "감속기 분석 삼매경.webp",
        "category": "document"
    },
    {
        "file": "갑문역_승강장.webp",
        "category": "station"
    },
    {
        "file": "강갑수.webp",
        "category": "person"
    },
    {
        "file": "강견태.webp",
        "category": "person"
    },
    {
        "file": "강당.webp",
        "category": "etc"
    },
    {
        "file": "강대호.webp",
        "category": "etc"
    },
    {
        "file": "강덕수.webp",
        "category": "person"
    },
    {
        "file": "강동혁.webp",
        "category": "person"
    },
    {
        "file": "강미소.webp",
        "category": "person"
    },
    {
        "file": "강민서.webp",
        "category": "person"
    },
    {
        "file": "강민수.webp",
        "category": "person"
    },
    {
        "file": "강민혁.webp",
        "category": "person"
    },
    {
        "file": "강빈선_노선도.webp",
        "category": "map"
    },
    {
        "file": "강상현.webp",
        "category": "person"
    },
    {
        "file": "강성택.webp",
        "category": "person"
    },
    {
        "file": "강수성.webp",
        "category": "person"
    },
    {
        "file": "강수성_전면전_선포.webp",
        "category": "etc"
    },
    {
        "file": "강수아.webp",
        "category": "person"
    },
    {
        "file": "강수영.webp",
        "category": "person"
    },
    {
        "file": "강예선.webp",
        "category": "etc"
    },
    {
        "file": "강운역.webp",
        "category": "station"
    },
    {
        "file": "강원FC_로고.svg",
        "category": "logo"
    },
    {
        "file": "강원대.svg",
        "category": "logo"
    },
    {
        "file": "강원도.svg",
        "category": "logo"
    },
    {
        "file": "강원승.webp",
        "category": "person"
    },
    {
        "file": "강원특별자치도.svg",
        "category": "logo"
    },
    {
        "file": "강응현.webp",
        "category": "person"
    },
    {
        "file": "강제 착용 루돌프.webp",
        "category": "etc"
    },
    {
        "file": "강주가톨릭대학교.svg",
        "category": "school"
    },
    {
        "file": "강주시 시내버스.webp",
        "category": "bus"
    },
    {
        "file": "강주시.webp",
        "category": "etc"
    },
    {
        "file": "강주시청.webp",
        "category": "facility_gov"
    },
    {
        "file": "강주역.webp",
        "category": "station"
    },
    {
        "file": "강주역_광역전철_승강장.webp",
        "category": "station"
    },
    {
        "file": "강주역_승강장.webp",
        "category": "station"
    },
    {
        "file": "강주항역.webp",
        "category": "station"
    },
    {
        "file": "강주항역_승강장.webp",
        "category": "station"
    },
    {
        "file": "강준영.webp",
        "category": "person"
    },
    {
        "file": "강지훈_대표.webp",
        "category": "person"
    },
    {
        "file": "강철민_소방관.webp",
        "category": "facility_gov"
    },
    {
        "file": "강철의 역무원.webp",
        "category": "etc"
    },
    {
        "file": "강태양_선수.webp",
        "category": "person"
    },
    {
        "file": "강토리.webp",
        "category": "etc"
    },
    {
        "file": "강하애.webp",
        "category": "person"
    },
    {
        "file": "강하애_평소모습.webp",
        "category": "etc"
    },
    {
        "file": "강휴석.webp",
        "category": "person"
    },
    {
        "file": "개념체계.webp",
        "category": "etc"
    },
    {
        "file": "개미허리 콤플렉스.webp",
        "category": "etc"
    },
    {
        "file": "개민지.webp",
        "category": "etc"
    },
    {
        "file": "개성동.webp",
        "category": "etc"
    },
    {
        "file": "개추로.webp",
        "category": "road"
    },
    {
        "file": "개항지역_승강장.webp",
        "category": "station"
    },
    {
        "file": "갤러리아백화점_로고.svg",
        "category": "facility_com"
    },
    {
        "file": "갤러리아효빈.webp",
        "category": "character"
    },
    {
        "file": "갤럭시 S26+의 위력.webp",
        "category": "etc"
    },
    {
        "file": "건강보험공단역_승강장.webp",
        "category": "station"
    },
    {
        "file": "건카타 마스터.webp",
        "category": "etc"
    },
    {
        "file": "걸어다니는 스패너.webp",
        "category": "etc"
    },
    {
        "file": "결손금 공제.webp",
        "category": "document"
    },
    {
        "file": "결재를 향한 돌진.webp",
        "category": "etc"
    },
    {
        "file": "경기도.svg",
        "category": "logo"
    },
    {
        "file": "경남개발공사_핸드볼_로고.svg",
        "category": "facility_gov"
    },
    {
        "file": "경동역_승강장.webp",
        "category": "station"
    },
    {
        "file": "경북대.svg",
        "category": "logo"
    },
    {
        "file": "경빈선.webp",
        "category": "etc"
    },
    {
        "file": "경상국립대학교_로고.svg",
        "category": "school"
    },
    {
        "file": "경상남도.svg",
        "category": "logo"
    },
    {
        "file": "경상북도.svg",
        "category": "logo"
    },
    {
        "file": "경성대학교.svg",
        "category": "school"
    },
    {
        "file": "계성문화대학.svg",
        "category": "school"
    },
    {
        "file": "계성시 시내버스.webp",
        "category": "bus"
    },
    {
        "file": "계성시.webp",
        "category": "etc"
    },
    {
        "file": "계성시청.webp",
        "category": "facility_gov"
    },
    {
        "file": "계성역_승강장.webp",
        "category": "station"
    },
    {
        "file": "계성진백역.webp",
        "category": "station"
    },
    {
        "file": "계성진백역_승강장.webp",
        "category": "station"
    },
    {
        "file": "계성차량사업소_내부.webp",
        "category": "train"
    },
    {
        "file": "계엄령선포.webp",
        "category": "etc"
    },
    {
        "file": "계열사.webp",
        "category": "etc"
    },
    {
        "file": "고간로.webp",
        "category": "road"
    },
    {
        "file": "고관영.webp",
        "category": "person"
    },
    {
        "file": "고규미.webp",
        "category": "person"
    },
    {
        "file": "고나루.webp",
        "category": "person"
    },
    {
        "file": "고나미 1호선 래핑.webp",
        "category": "character"
    },
    {
        "file": "고나미 로고.webp",
        "category": "logo"
    },
    {
        "file": "고나미 메이드복.webp",
        "category": "character"
    },
    {
        "file": "고나미 사복.webp",
        "category": "character"
    },
    {
        "file": "고나미 수영복.webp",
        "category": "character"
    },
    {
        "file": "고나미 열차 내부.webp",
        "category": "train"
    },
    {
        "file": "고나미 태피.webp",
        "category": "merch"
    },
    {
        "file": "고나미 특별교육 역관광.webp",
        "category": "landmark"
    },
    {
        "file": "고나미 프로필.webp",
        "category": "character"
    },
    {
        "file": "고나미.webp",
        "category": "person"
    },
    {
        "file": "고나미sd.webp",
        "category": "character"
    },
    {
        "file": "고나미_넨도.webp",
        "category": "merch"
    },
    {
        "file": "고나미_노트.webp",
        "category": "character"
    },
    {
        "file": "고나미_볼펜.webp",
        "category": "character"
    },
    {
        "file": "고나미_아빠.webp",
        "category": "person"
    },
    {
        "file": "고나미_엄마.webp",
        "category": "person"
    },
    {
        "file": "고나미_지우개.webp",
        "category": "character"
    },
    {
        "file": "고나미_키링.webp",
        "category": "character"
    },
    {
        "file": "고나미_피규어.webp",
        "category": "merch"
    },
    {
        "file": "고나미가족.webp",
        "category": "person"
    },
    {
        "file": "고나미네소베리.webp",
        "category": "merch"
    },
    {
        "file": "고나미로.webp",
        "category": "road"
    },
    {
        "file": "고나미방.webp",
        "category": "character"
    },
    {
        "file": "고나미뱃지.webp",
        "category": "merch"
    },
    {
        "file": "고남역.webp",
        "category": "station"
    },
    {
        "file": "고남역_승강장.webp",
        "category": "station"
    },
    {
        "file": "고남역_역사.webp",
        "category": "station"
    },
    {
        "file": "고남차량사업소_지도.webp",
        "category": "map"
    },
    {
        "file": "고노애.webp",
        "category": "person"
    },
    {
        "file": "고노애_평소모습.webp",
        "category": "etc"
    },
    {
        "file": "고당역_승강장.webp",
        "category": "station"
    },
    {
        "file": "고도리역_승강장.webp",
        "category": "station"
    },
    {
        "file": "고도역_승강장.webp",
        "category": "station"
    },
    {
        "file": "고등학교 졸업사진(2021).webp",
        "category": "school"
    },
    {
        "file": "고무로.webp",
        "category": "road"
    },
    {
        "file": "고무역_승강장.webp",
        "category": "station"
    },
    {
        "file": "고미국.webp",
        "category": "person"
    },
    {
        "file": "고사인.webp",
        "category": "logo"
    },
    {
        "file": "고상면.webp",
        "category": "etc"
    },
    {
        "file": "고상철.webp",
        "category": "person"
    },
    {
        "file": "고선규.webp",
        "category": "person"
    },
    {
        "file": "고성진.webp",
        "category": "person"
    },
    {
        "file": "고소유.webp",
        "category": "person"
    },
    {
        "file": "고속철도공원.webp",
        "category": "bus"
    },
    {
        "file": "고송 아쿠아 1차.webp",
        "category": "facility_com"
    },
    {
        "file": "고송강변공원.webp",
        "category": "landmark"
    },
    {
        "file": "고송공원.webp",
        "category": "landmark"
    },
    {
        "file": "고송교차로역 승강장.webp",
        "category": "station"
    },
    {
        "file": "고송교차로역 승강장6.webp",
        "category": "station"
    },
    {
        "file": "고송교차로역점.webp",
        "category": "station"
    },
    {
        "file": "고송나루역 환승.webp",
        "category": "etc"
    },
    {
        "file": "고송나루역_3호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "고송나루역_6호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "고송남북로.webp",
        "category": "road"
    },
    {
        "file": "고송대로.webp",
        "category": "road"
    },
    {
        "file": "고송대로_교통통제.webp",
        "category": "bus"
    },
    {
        "file": "고송도서관.webp",
        "category": "school"
    },
    {
        "file": "고송동_아파트_현수막.webp",
        "category": "facility_com"
    },
    {
        "file": "고송동_외제차_길막시위.webp",
        "category": "event"
    },
    {
        "file": "고송병원.webp",
        "category": "facility_com"
    },
    {
        "file": "고송스퀘어_로고.svg",
        "category": "logo"
    },
    {
        "file": "고송신도시_전경.webp",
        "category": "landscape"
    },
    {
        "file": "고송역_승강장.webp",
        "category": "station"
    },
    {
        "file": "고송역나침반.webp",
        "category": "etc"
    },
    {
        "file": "고송지구_야경.webp",
        "category": "facility_com"
    },
    {
        "file": "고송해안로.webp",
        "category": "road"
    },
    {
        "file": "고송호반베르디움.webp",
        "category": "etc"
    },
    {
        "file": "고수안.webp",
        "category": "person"
    },
    {
        "file": "고수현.webp",
        "category": "person"
    },
    {
        "file": "고암로.webp",
        "category": "road"
    },
    {
        "file": "고유현.webp",
        "category": "person"
    },
    {
        "file": "고자년.webp",
        "category": "person"
    },
    {
        "file": "고장 난 안드로이드.webp",
        "category": "etc"
    },
    {
        "file": "고정민.webp",
        "category": "person"
    },
    {
        "file": "고정화.webp",
        "category": "person"
    },
    {
        "file": "고중로.webp",
        "category": "road"
    },
    {
        "file": "고지원.webp",
        "category": "person"
    },
    {
        "file": "고진남.webp",
        "category": "person"
    },
    {
        "file": "고창역_승강장.webp",
        "category": "station"
    },
    {
        "file": "고창역_전경.webp",
        "category": "station"
    },
    {
        "file": "고태훈.webp",
        "category": "person"
    },
    {
        "file": "고토 아키라.webp",
        "category": "etc"
    },
    {
        "file": "고토 히토리 애니 설정화.webp",
        "category": "etc"
    },
    {
        "file": "고토 히토리 원작.webp",
        "category": "etc"
    },
    {
        "file": "고토 히토리.webp",
        "category": "etc"
    },
    {
        "file": "고토_아키라.webp",
        "category": "etc"
    },
    {
        "file": "고토구.webp",
        "category": "etc"
    },
    {
        "file": "고판대.webp",
        "category": "person"
    },
    {
        "file": "고판대학교_로고_폐교.svg",
        "category": "school"
    },
    {
        "file": "고포군 농어촌버스.webp",
        "category": "bus"
    },
    {
        "file": "고포군.webp",
        "category": "etc"
    },
    {
        "file": "고포군청.webp",
        "category": "facility_gov"
    },
    {
        "file": "고하나.webp",
        "category": "person"
    },
    {
        "file": "고하루.webp",
        "category": "person"
    },
    {
        "file": "고한선.webp",
        "category": "etc"
    },
    {
        "file": "고해01.webp",
        "category": "bus"
    },
    {
        "file": "고해역_1호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "고해역_빈효선_승강장.webp",
        "category": "station"
    },
    {
        "file": "고해역_상인_항의.webp",
        "category": "station"
    },
    {
        "file": "고해역_성지순례.webp",
        "category": "station"
    },
    {
        "file": "고해역_전경.webp",
        "category": "station"
    },
    {
        "file": "고해역공원.webp",
        "category": "landmark"
    },
    {
        "file": "고해역철도공원.webp",
        "category": "landmark"
    },
    {
        "file": "고해차량사업소_지도.webp",
        "category": "map"
    },
    {
        "file": "고현민.webp",
        "category": "person"
    },
    {
        "file": "고화산.webp",
        "category": "person"
    },
    {
        "file": "곡전역.webp",
        "category": "station"
    },
    {
        "file": "곡전역_승강장.webp",
        "category": "station"
    },
    {
        "file": "곡천군 농어촌버스.webp",
        "category": "bus"
    },
    {
        "file": "곡천군.webp",
        "category": "etc"
    },
    {
        "file": "곡천군청.webp",
        "category": "facility_gov"
    },
    {
        "file": "골든 아워를 향해.webp",
        "category": "etc"
    },
    {
        "file": "골든 아워의 엑셀.webp",
        "category": "etc"
    },
    {
        "file": "골든 아워의 지배자.webp",
        "category": "etc"
    },
    {
        "file": "공구 상가 쇼핑.webp",
        "category": "facility_com"
    },
    {
        "file": "공구 상가 탕진.webp",
        "category": "facility_com"
    },
    {
        "file": "공리로.webp",
        "category": "road"
    },
    {
        "file": "공문과 팩폭.webp",
        "category": "etc"
    },
    {
        "file": "공문체 브리핑.webp",
        "category": "etc"
    },
    {
        "file": "공식_생일_굿즈_안요지_히메_2024.webp",
        "category": "merch"
    },
    {
        "file": "공식_생일_굿즈_안요지_히메_2025.webp",
        "category": "merch"
    },
    {
        "file": "공유기 대역폭 대첩.webp",
        "category": "etc"
    },
    {
        "file": "공은희.webp",
        "category": "etc"
    },
    {
        "file": "공주대.svg",
        "category": "logo"
    },
    {
        "file": "공하진.webp",
        "category": "etc"
    },
    {
        "file": "공항_귀국_아이들.webp",
        "category": "person"
    },
    {
        "file": "공항로.webp",
        "category": "road"
    },
    {
        "file": "공항버스.webp",
        "category": "bus"
    },
    {
        "file": "과거의 투쟁사.webp",
        "category": "etc"
    },
    {
        "file": "과남역_승강장.webp",
        "category": "station"
    },
    {
        "file": "과림역_승강장.webp",
        "category": "station"
    },
    {
        "file": "과림역_전경.webp",
        "category": "station"
    },
    {
        "file": "과송역_승강장.webp",
        "category": "station"
    },
    {
        "file": "과잠.webp",
        "category": "illustration"
    },
    {
        "file": "과진 아쿠아2차.webp",
        "category": "facility_com"
    },
    {
        "file": "과진아쿠아 1차.webp",
        "category": "facility_com"
    },
    {
        "file": "과진아쿠아2차.webp",
        "category": "facility_com"
    },
    {
        "file": "과진역_승강장.webp",
        "category": "station"
    },
    {
        "file": "과진역_역사.webp",
        "category": "station"
    },
    {
        "file": "과진점.webp",
        "category": "etc"
    },
    {
        "file": "과진중앙역_2호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "과진중앙역_승강장.webp",
        "category": "station"
    },
    {
        "file": "과진지구_전경.webp",
        "category": "facility_com"
    },
    {
        "file": "곽두환_당선무효.webp",
        "category": "person"
    },
    {
        "file": "곽산.webp",
        "category": "etc"
    },
    {
        "file": "곽산01.webp",
        "category": "bus"
    },
    {
        "file": "곽산고역_승강장.webp",
        "category": "station"
    },
    {
        "file": "곽산고역_전경.webp",
        "category": "station"
    },
    {
        "file": "곽산기계산업단지_전경.webp",
        "category": "facility_com"
    },
    {
        "file": "곽산역_1호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "곽산역_8호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "곽산역_전경.webp",
        "category": "station"
    },
    {
        "file": "곽산역승무본부.webp",
        "category": "facility_gov"
    },
    {
        "file": "곽산차량사업소_지도.webp",
        "category": "map"
    },
    {
        "file": "곽암해수욕장.webp",
        "category": "landmark"
    },
    {
        "file": "곽암해수욕장역_승강장.webp",
        "category": "station"
    },
    {
        "file": "곽암해수욕장역_역사.webp",
        "category": "station"
    },
    {
        "file": "관동4가역_승강장.webp",
        "category": "station"
    },
    {
        "file": "관수군 농어촌버스.webp",
        "category": "bus"
    },
    {
        "file": "관수군.webp",
        "category": "etc"
    },
    {
        "file": "관수군청.webp",
        "category": "facility_gov"
    },
    {
        "file": "관종의 무대 체질.webp",
        "category": "etc"
    },
    {
        "file": "광역 홍보물 제작.webp",
        "category": "etc"
    },
    {
        "file": "광역버스.webp",
        "category": "bus"
    },
    {
        "file": "광연대학교.svg",
        "category": "school"
    },
    {
        "file": "광연대학교.webp",
        "category": "school"
    },
    {
        "file": "광정01.webp",
        "category": "bus"
    },
    {
        "file": "광주.webp",
        "category": "etc"
    },
    {
        "file": "광주FC_로고.svg",
        "category": "logo"
    },
    {
        "file": "광주도시공사_핸드볼_로고.svg",
        "category": "facility_gov"
    },
    {
        "file": "괴성로.webp",
        "category": "road"
    },
    {
        "file": "교육청_로고.webp",
        "category": "logo"
    },
    {
        "file": "교육훈련비.webp",
        "category": "etc"
    },
    {
        "file": "교재분석_계산구조_흐름도.webp",
        "category": "document"
    },
    {
        "file": "교재분석_다단계과세_캐릭터표.webp",
        "category": "document"
    },
    {
        "file": "교재분석_부가가치_창출원리.webp",
        "category": "document"
    },
    {
        "file": "교재분석_부수재화_면세판정표.webp",
        "category": "document"
    },
    {
        "file": "교재분석_사업유형별_사업장.webp",
        "category": "document"
    },
    {
        "file": "교재분석_사업자등록정정_요약.webp",
        "category": "document"
    },
    {
        "file": "교재분석_신고납부기한_달력.webp",
        "category": "document"
    },
    {
        "file": "교재분석_신탁재산_납세의무자.webp",
        "category": "landmark"
    },
    {
        "file": "교재분석_용역종류14가지.webp",
        "category": "document"
    },
    {
        "file": "교재분석_재화의수입.webp",
        "category": "document"
    },
    {
        "file": "교재분석_총괄납부_사업자단위_비교.webp",
        "category": "document"
    },
    {
        "file": "교재분석_효빈중공업_계산.webp",
        "category": "document"
    },
    {
        "file": "교통공사_출범식.webp",
        "category": "bus"
    },
    {
        "file": "교통공사사무실.webp",
        "category": "bus"
    },
    {
        "file": "교통대_차량기지.webp",
        "category": "bus"
    },
    {
        "file": "교통대학 기지역_승강장.webp",
        "category": "bus"
    },
    {
        "file": "교통대학.webp",
        "category": "bus"
    },
    {
        "file": "구_칠천군사기지공원.webp",
        "category": "landmark"
    },
    {
        "file": "구글코리아방문.webp",
        "category": "character"
    },
    {
        "file": "구급차_갈색버스.webp",
        "category": "bus"
    },
    {
        "file": "구동음 감별사.webp",
        "category": "etc"
    },
    {
        "file": "구상민.webp",
        "category": "person"
    },
    {
        "file": "구상원.webp",
        "category": "person"
    },
    {
        "file": "구성연.webp",
        "category": "person"
    },
    {
        "file": "구세관역_승강장.webp",
        "category": "station"
    },
    {
        "file": "구시청앞역_승강장.webp",
        "category": "station"
    },
    {
        "file": "구신원.webp",
        "category": "person"
    },
    {
        "file": "구정원.webp",
        "category": "person"
    },
    {
        "file": "구진내.webp",
        "category": "person"
    },
    {
        "file": "구칠천군사기지앞역_승강장.webp",
        "category": "station"
    },
    {
        "file": "국도.webp",
        "category": "etc"
    },
    {
        "file": "국립덕남대학교_UI.webp",
        "category": "school"
    },
    {
        "file": "국립덕주교육대학교_UI.svg",
        "category": "school"
    },
    {
        "file": "국립서해대학교.svg",
        "category": "school"
    },
    {
        "file": "국립서해대학교.webp",
        "category": "school"
    },
    {
        "file": "국립서해해양대학교_UI.svg",
        "category": "school"
    },
    {
        "file": "국립천주대학교.svg",
        "category": "school"
    },
    {
        "file": "국제 사이모에 리그.webp",
        "category": "etc"
    },
    {
        "file": "국회휘장.svg",
        "category": "logo"
    },
    {
        "file": "군천대학교.svg",
        "category": "school"
    },
    {
        "file": "군천시 시내버스.webp",
        "category": "bus"
    },
    {
        "file": "군천시.webp",
        "category": "etc"
    },
    {
        "file": "군천시청.webp",
        "category": "facility_gov"
    },
    {
        "file": "군천역.webp",
        "category": "station"
    },
    {
        "file": "군천역_승강장.webp",
        "category": "station"
    },
    {
        "file": "군천항.webp",
        "category": "etc"
    },
    {
        "file": "궁영트램호텔.webp",
        "category": "train"
    },
    {
        "file": "궁정역_승강장.webp",
        "category": "station"
    },
    {
        "file": "궁하구청.webp",
        "category": "facility_gov"
    },
    {
        "file": "궁하역_빈효선_승강장.webp",
        "category": "station"
    },
    {
        "file": "궁하역_승강장.webp",
        "category": "station"
    },
    {
        "file": "궁하역_일반열차_승강장.webp",
        "category": "station"
    },
    {
        "file": "궁하역_전경.webp",
        "category": "station"
    },
    {
        "file": "궁하항.webp",
        "category": "etc"
    },
    {
        "file": "권기준.webp",
        "category": "person"
    },
    {
        "file": "권기택.webp",
        "category": "person"
    },
    {
        "file": "권상남.webp",
        "category": "person"
    },
    {
        "file": "권상민 교육감과 HAF 총괄 기획전경.webp",
        "category": "landscape"
    },
    {
        "file": "권상민 교육감과 윤간석 후보의 설전 현장.webp",
        "category": "person"
    },
    {
        "file": "권상민.webp",
        "category": "person"
    },
    {
        "file": "권영성.webp",
        "category": "person"
    },
    {
        "file": "권영진_반대.webp",
        "category": "etc"
    },
    {
        "file": "권이현.webp",
        "category": "person"
    },
    {
        "file": "규암로2가역_전경.webp",
        "category": "station"
    },
    {
        "file": "규정과 통제의 현장.webp",
        "category": "etc"
    },
    {
        "file": "그건 제 업무가 아닌데요.webp",
        "category": "etc"
    },
    {
        "file": "그립톡.webp",
        "category": "etc"
    },
    {
        "file": "극한의 생존왕.webp",
        "category": "etc"
    },
    {
        "file": "근강역_승강장.webp",
        "category": "station"
    },
    {
        "file": "근강역_역사.webp",
        "category": "station"
    },
    {
        "file": "근로장학생의 반란.webp",
        "category": "person"
    },
    {
        "file": "근로장학생의 하루.webp",
        "category": "person"
    },
    {
        "file": "근로장학센터.webp",
        "category": "facility_com"
    },
    {
        "file": "글로벌_애니메이션_특구.webp",
        "category": "character"
    },
    {
        "file": "금구역_전경.webp",
        "category": "station"
    },
    {
        "file": "금수저의 비애.webp",
        "category": "etc"
    },
    {
        "file": "금신만.webp",
        "category": "etc"
    },
    {
        "file": "금호타이어효빈.webp",
        "category": "etc"
    },
    {
        "file": "급행버스.webp",
        "category": "bus"
    },
    {
        "file": "기계 오타쿠 크로스.webp",
        "category": "character"
    },
    {
        "file": "기계공고 1학년.webp",
        "category": "etc"
    },
    {
        "file": "기계공고.webp",
        "category": "etc"
    },
    {
        "file": "기계공학과 1학년.webp",
        "category": "etc"
    },
    {
        "file": "기계공학과 에이스.webp",
        "category": "etc"
    },
    {
        "file": "기계실.webp",
        "category": "etc"
    },
    {
        "file": "기계와의 교감.webp",
        "category": "etc"
    },
    {
        "file": "기계와의 미친교감.webp",
        "category": "etc"
    },
    {
        "file": "기계와의 영혼 동기화.webp",
        "category": "etc"
    },
    {
        "file": "기계의 신 (Deus ex Machina).webp",
        "category": "etc"
    },
    {
        "file": "기규택.webp",
        "category": "etc"
    },
    {
        "file": "기도군 농어촌버스.webp",
        "category": "bus"
    },
    {
        "file": "기도군.webp",
        "category": "etc"
    },
    {
        "file": "기도군청.webp",
        "category": "facility_gov"
    },
    {
        "file": "기도역.webp",
        "category": "station"
    },
    {
        "file": "기랑공원.webp",
        "category": "landmark"
    },
    {
        "file": "기름때 묻은 얼굴.webp",
        "category": "etc"
    },
    {
        "file": "기부금.webp",
        "category": "etc"
    },
    {
        "file": "기상 시간 엄수.webp",
        "category": "etc"
    },
    {
        "file": "기술본부 산업관리.webp",
        "category": "facility_gov"
    },
    {
        "file": "기적의 다중회귀분석.webp",
        "category": "document"
    },
    {
        "file": "기적의_스탬프_랠리_포스터.webp",
        "category": "logo"
    },
    {
        "file": "기타오 애니.webp",
        "category": "etc"
    },
    {
        "file": "기타오.webp",
        "category": "etc"
    },
    {
        "file": "기획전입구.webp",
        "category": "etc"
    },
    {
        "file": "길산역.webp",
        "category": "station"
    },
    {
        "file": "김도빈.webp",
        "category": "person"
    },
    {
        "file": "김도연.webp",
        "category": "person"
    },
    {
        "file": "김도윤_보컬.webp",
        "category": "etc"
    },
    {
        "file": "김동식.webp",
        "category": "person"
    },
    {
        "file": "김만석.webp",
        "category": "person"
    },
    {
        "file": "김민준.webp",
        "category": "person"
    },
    {
        "file": "김민철.webp",
        "category": "person"
    },
    {
        "file": "김상빈.webp",
        "category": "person"
    },
    {
        "file": "김상언.webp",
        "category": "person"
    },
    {
        "file": "김서빈.webp",
        "category": "person"
    },
    {
        "file": "김성민.webp",
        "category": "person"
    },
    {
        "file": "김성민_가족사진.webp",
        "category": "person"
    },
    {
        "file": "김성민_요리시게_협약식.webp",
        "category": "event"
    },
    {
        "file": "김성빈.webp",
        "category": "person"
    },
    {
        "file": "김성송.webp",
        "category": "person"
    },
    {
        "file": "김세솔.webp",
        "category": "person"
    },
    {
        "file": "김소빈.webp",
        "category": "person"
    },
    {
        "file": "김소빈sd.webp",
        "category": "character"
    },
    {
        "file": "김소빈_근무.webp",
        "category": "character"
    },
    {
        "file": "김소빈_넨도.webp",
        "category": "merch"
    },
    {
        "file": "김소빈_노트.webp",
        "category": "character"
    },
    {
        "file": "김소빈_로고.webp",
        "category": "logo"
    },
    {
        "file": "김소빈_메이드.webp",
        "category": "character"
    },
    {
        "file": "김소빈_박빛나 왜곡.webp",
        "category": "character"
    },
    {
        "file": "김소빈_밥먹이기.webp",
        "category": "character"
    },
    {
        "file": "김소빈_볼펜.webp",
        "category": "character"
    },
    {
        "file": "김소빈_사복.webp",
        "category": "character"
    },
    {
        "file": "김소빈_수영복.webp",
        "category": "character"
    },
    {
        "file": "김소빈_아빠.webp",
        "category": "person"
    },
    {
        "file": "김소빈_엄마.webp",
        "category": "person"
    },
    {
        "file": "김소빈_졸린표정_투명.webp",
        "category": "character"
    },
    {
        "file": "김소빈_지우개.webp",
        "category": "character"
    },
    {
        "file": "김소빈_출근.webp",
        "category": "character"
    },
    {
        "file": "김소빈_취침.webp",
        "category": "character"
    },
    {
        "file": "김소빈_피규어.webp",
        "category": "merch"
    },
    {
        "file": "김소빈가족.webp",
        "category": "person"
    },
    {
        "file": "김소빈네소베리.webp",
        "category": "merch"
    },
    {
        "file": "김소빈방.webp",
        "category": "character"
    },
    {
        "file": "김소빈열차.webp",
        "category": "train"
    },
    {
        "file": "김소빈열차내부.webp",
        "category": "train"
    },
    {
        "file": "김수연.webp",
        "category": "person"
    },
    {
        "file": "김시안.webp",
        "category": "person"
    },
    {
        "file": "김시안_평소모습.webp",
        "category": "etc"
    },
    {
        "file": "김시연.webp",
        "category": "person"
    },
    {
        "file": "김시연_평소모습.webp",
        "category": "etc"
    },
    {
        "file": "김시율.webp",
        "category": "person"
    },
    {
        "file": "김언석.webp",
        "category": "person"
    },
    {
        "file": "김영산.webp",
        "category": "person"
    },
    {
        "file": "김지언.webp",
        "category": "person"
    },
    {
        "file": "김천상무_로고.svg",
        "category": "logo"
    },
    {
        "file": "김철수.webp",
        "category": "person"
    },
    {
        "file": "김철호.webp",
        "category": "etc"
    },
    {
        "file": "김칠성.webp",
        "category": "person"
    },
    {
        "file": "김태수.webp",
        "category": "person"
    },
    {
        "file": "김판석.webp",
        "category": "person"
    },
    {
        "file": "깁슨 레스폴 커스텀.webp",
        "category": "etc"
    },
    {
        "file": "까눌레 최저가 분석.webp",
        "category": "document"
    },
    {
        "file": "까르푸_로고.svg",
        "category": "logo"
    },
    {
        "file": "나가사키 소요.webp",
        "category": "etc"
    },
    {
        "file": "나두길.webp",
        "category": "road"
    },
    {
        "file": "나살리고등학교로고.svg",
        "category": "school"
    },
    {
        "file": "나살리중학교로고.svg",
        "category": "school"
    },
    {
        "file": "나수미.webp",
        "category": "etc"
    },
    {
        "file": "나수미_평소모습.webp",
        "category": "etc"
    },
    {
        "file": "나카노 아즈사.webp",
        "category": "character"
    },
    {
        "file": "나카마치 아라레.webp",
        "category": "etc"
    },
    {
        "file": "나카스 카스미 사복.webp",
        "category": "character"
    },
    {
        "file": "나카스 카스미 스쿠스타.webp",
        "category": "character"
    },
    {
        "file": "나카스 카스미 애니메이션.webp",
        "category": "character"
    },
    {
        "file": "나카스 카스미 이차원 페스.webp",
        "category": "event"
    },
    {
        "file": "나카스 카스미.webp",
        "category": "character"
    },
    {
        "file": "나카스카스미.webp",
        "category": "character"
    },
    {
        "file": "낙주대학교.svg",
        "category": "school"
    },
    {
        "file": "낙주시.webp",
        "category": "etc"
    },
    {
        "file": "낙주시청.webp",
        "category": "facility_gov"
    },
    {
        "file": "낙주역.webp",
        "category": "station"
    },
    {
        "file": "낙주역_승강장.webp",
        "category": "station"
    },
    {
        "file": "낙주점.webp",
        "category": "etc"
    },
    {
        "file": "낙주항.webp",
        "category": "etc"
    },
    {
        "file": "남강신호장.webp",
        "category": "station"
    },
    {
        "file": "남곡로.webp",
        "category": "road"
    },
    {
        "file": "남구 행정동 지도.webp",
        "category": "map"
    },
    {
        "file": "남구.webp",
        "category": "etc"
    },
    {
        "file": "남구_흰색로고.webp",
        "category": "logo"
    },
    {
        "file": "남구선관위역_승강장.webp",
        "category": "station"
    },
    {
        "file": "남구선관위역_전경.webp",
        "category": "station"
    },
    {
        "file": "남구청.webp",
        "category": "facility_gov"
    },
    {
        "file": "남구청역_1호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "남구청역_4호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "남구청역_8호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "남구청역_전경.webp",
        "category": "station"
    },
    {
        "file": "남궁도_창업자.webp",
        "category": "etc"
    },
    {
        "file": "남궁휘.webp",
        "category": "person"
    },
    {
        "file": "남기태.webp",
        "category": "person"
    },
    {
        "file": "남당역_승강장.webp",
        "category": "station"
    },
    {
        "file": "남부소방서역_승강장.webp",
        "category": "station"
    },
    {
        "file": "남부소방서역_전경.webp",
        "category": "station"
    },
    {
        "file": "남소역.webp",
        "category": "station"
    },
    {
        "file": "남소현.webp",
        "category": "person"
    },
    {
        "file": "남약산로.webp",
        "category": "road"
    },
    {
        "file": "남예서.webp",
        "category": "person"
    },
    {
        "file": "남우택역_승강장.webp",
        "category": "station"
    },
    {
        "file": "남우택역_창전선_승강장.webp",
        "category": "station"
    },
    {
        "file": "남장기역_승강장.webp",
        "category": "station"
    },
    {
        "file": "남장기역_전경.webp",
        "category": "station"
    },
    {
        "file": "남전역_승강장.webp",
        "category": "station"
    },
    {
        "file": "남주여객.webp",
        "category": "bus"
    },
    {
        "file": "납땜 인두기 장착.webp",
        "category": "etc"
    },
    {
        "file": "낫싱폰 유저.webp",
        "category": "etc"
    },
    {
        "file": "낭만 파괴자.webp",
        "category": "etc"
    },
    {
        "file": "낭원군 농어촌버스.webp",
        "category": "bus"
    },
    {
        "file": "낭원군.webp",
        "category": "etc"
    },
    {
        "file": "낭원군청.webp",
        "category": "facility_gov"
    },
    {
        "file": "낭원역.webp",
        "category": "station"
    },
    {
        "file": "낭원역_승강장.webp",
        "category": "station"
    },
    {
        "file": "내덕역.webp",
        "category": "station"
    },
    {
        "file": "내동신호장.webp",
        "category": "station"
    },
    {
        "file": "내삼여객.webp",
        "category": "bus"
    },
    {
        "file": "내성역_승강장.webp",
        "category": "station"
    },
    {
        "file": "내성중학교로고.webp",
        "category": "school"
    },
    {
        "file": "내조공원역_승강장.webp",
        "category": "station"
    },
    {
        "file": "내조역_1호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "내조역_7호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "내조초등학교.webp",
        "category": "school"
    },
    {
        "file": "내죽고등학교로고.webp",
        "category": "school"
    },
    {
        "file": "내항01.webp",
        "category": "bus"
    },
    {
        "file": "내항시장역_승강장.webp",
        "category": "station"
    },
    {
        "file": "내항역_2호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "내항역_7호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "내항차량사업소_지도.webp",
        "category": "map"
    },
    {
        "file": "냄새는 곤란합니다.webp",
        "category": "character"
    },
    {
        "file": "노동법과 엑셀 매크로.webp",
        "category": "road"
    },
    {
        "file": "노란색의 요정.webp",
        "category": "character"
    },
    {
        "file": "노상현.webp",
        "category": "person"
    },
    {
        "file": "노서현.webp",
        "category": "person"
    },
    {
        "file": "노이즈 캔슬링.webp",
        "category": "etc"
    },
    {
        "file": "노준석.webp",
        "category": "person"
    },
    {
        "file": "논리적 팩트 폭격.webp",
        "category": "event"
    },
    {
        "file": "논산시.svg",
        "category": "logo"
    },
    {
        "file": "뇌전01.webp",
        "category": "bus"
    },
    {
        "file": "뇌전공업단지_전경.webp",
        "category": "facility_com"
    },
    {
        "file": "뇌전역_승강장.webp",
        "category": "station"
    },
    {
        "file": "누마즈.webp",
        "category": "etc"
    },
    {
        "file": "누마즈_교류기념관.webp",
        "category": "etc"
    },
    {
        "file": "뉴코아아울렛_로고.svg",
        "category": "logo"
    },
    {
        "file": "느창역_대참사_애미나이_병신.webp",
        "category": "station"
    },
    {
        "file": "늑골역_승강장.webp",
        "category": "station"
    },
    {
        "file": "늑골역_전경.webp",
        "category": "station"
    },
    {
        "file": "늑마로.webp",
        "category": "road"
    },
    {
        "file": "능곡로.webp",
        "category": "road"
    },
    {
        "file": "능남역_승강장.webp",
        "category": "station"
    },
    {
        "file": "능남역_전경.webp",
        "category": "station"
    },
    {
        "file": "능릉역_승강장.webp",
        "category": "station"
    },
    {
        "file": "니나관.webp",
        "category": "etc"
    },
    {
        "file": "니시키노 마키.webp",
        "category": "character"
    },
    {
        "file": "니지동_효빈콜라보광고.webp",
        "category": "logo"
    },
    {
        "file": "니지스터디홀.webp",
        "category": "facility_com"
    },
    {
        "file": "니코 제미나이 참교육.webp",
        "category": "character"
    },
    {
        "file": "다꾸의 달인.webp",
        "category": "etc"
    },
    {
        "file": "다로나 4호선 래핑.webp",
        "category": "character"
    },
    {
        "file": "다로나 로고.webp",
        "category": "logo"
    },
    {
        "file": "다로나 메이드복.webp",
        "category": "character"
    },
    {
        "file": "다로나 사복.webp",
        "category": "character"
    },
    {
        "file": "다로나 수영복.webp",
        "category": "character"
    },
    {
        "file": "다로나 열차 내부.webp",
        "category": "train"
    },
    {
        "file": "다로나 태피.webp",
        "category": "merch"
    },
    {
        "file": "다로나 프로필.webp",
        "category": "character"
    },
    {
        "file": "다로나.webp",
        "category": "character"
    },
    {
        "file": "다로나sd.webp",
        "category": "character"
    },
    {
        "file": "다로나_넨도.webp",
        "category": "merch"
    },
    {
        "file": "다로나_노트.webp",
        "category": "character"
    },
    {
        "file": "다로나_볼펜.webp",
        "category": "character"
    },
    {
        "file": "다로나_아빠.webp",
        "category": "person"
    },
    {
        "file": "다로나_엄마.webp",
        "category": "person"
    },
    {
        "file": "다로나_지우개.webp",
        "category": "character"
    },
    {
        "file": "다로나_피규어.webp",
        "category": "merch"
    },
    {
        "file": "다로나_호루라기.webp",
        "category": "character"
    },
    {
        "file": "다로나가족.webp",
        "category": "person"
    },
    {
        "file": "다로나네소베리.webp",
        "category": "merch"
    },
    {
        "file": "다로나방.webp",
        "category": "character"
    },
    {
        "file": "다로나뱃지.webp",
        "category": "merch"
    },
    {
        "file": "다로준.webp",
        "category": "etc"
    },
    {
        "file": "다문화의 명절.webp",
        "category": "etc"
    },
    {
        "file": "다이버시티몰_로고.svg",
        "category": "logo"
    },
    {
        "file": "다이아.webp",
        "category": "character"
    },
    {
        "file": "다이아공원.webp",
        "category": "landmark"
    },
    {
        "file": "다이아공원1.webp",
        "category": "landmark"
    },
    {
        "file": "다이어리 찢고 나온 감성.webp",
        "category": "merch"
    },
    {
        "file": "다이어트후(2018).webp",
        "category": "etc"
    },
    {
        "file": "다중회귀분석 기초.webp",
        "category": "document"
    },
    {
        "file": "다크서클 컨실러.webp",
        "category": "etc"
    },
    {
        "file": "다테 사유리.webp",
        "category": "person"
    },
    {
        "file": "다판고등학교.webp",
        "category": "school"
    },
    {
        "file": "다판고로고.webp",
        "category": "logo"
    },
    {
        "file": "단기알바(모델하우스).webp",
        "category": "person"
    },
    {
        "file": "단말기 더블 퀵드로우.webp",
        "category": "etc"
    },
    {
        "file": "단말기 퀵드로우 준비.webp",
        "category": "etc"
    },
    {
        "file": "단체사진(7인).webp",
        "category": "illustration"
    },
    {
        "file": "단행본 3권 표지 일러스트.webp",
        "category": "illustration"
    },
    {
        "file": "단호한 거절.webp",
        "category": "etc"
    },
    {
        "file": "달려라_레일루미네_포스터.webp",
        "category": "logo"
    },
    {
        "file": "당 떨어지면 슬라임화.webp",
        "category": "etc"
    },
    {
        "file": "당가동_디저트_거리.webp",
        "category": "road"
    },
    {
        "file": "당가로.webp",
        "category": "road"
    },
    {
        "file": "당가아쿠아아파트.webp",
        "category": "facility_com"
    },
    {
        "file": "당가역_2호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "당가역_빈효선_승강장.webp",
        "category": "station"
    },
    {
        "file": "당가역_생일파티.webp",
        "category": "station"
    },
    {
        "file": "당가역_전경.webp",
        "category": "station"
    },
    {
        "file": "당가역마카롱.webp",
        "category": "food"
    },
    {
        "file": "당근마켓.webp",
        "category": "etc"
    },
    {
        "file": "당선 아쿠아 2차.webp",
        "category": "facility_com"
    },
    {
        "file": "당선 아쿠아 3차.webp",
        "category": "facility_com"
    },
    {
        "file": "당선 아쿠아 아파트 1차.webp",
        "category": "facility_com"
    },
    {
        "file": "당선_2동_메이드카페_타운.webp",
        "category": "facility_com"
    },
    {
        "file": "당선개꿀.webp",
        "category": "etc"
    },
    {
        "file": "당선아쿠아1차.webp",
        "category": "facility_com"
    },
    {
        "file": "당선원마을_승강장.webp",
        "category": "station"
    },
    {
        "file": "당선해안로.webp",
        "category": "road"
    },
    {
        "file": "당안역_승강장.webp",
        "category": "station"
    },
    {
        "file": "당찬로.webp",
        "category": "road"
    },
    {
        "file": "대광원로.webp",
        "category": "road"
    },
    {
        "file": "대교여객.webp",
        "category": "bus"
    },
    {
        "file": "대구광역시.svg",
        "category": "logo"
    },
    {
        "file": "대구광역시청_핸드볼_로고.svg",
        "category": "facility_gov"
    },
    {
        "file": "대구시청.webp",
        "category": "facility_gov"
    },
    {
        "file": "대도로.webp",
        "category": "road"
    },
    {
        "file": "대뢰역_승강장.webp",
        "category": "station"
    },
    {
        "file": "대뢰역_전경.webp",
        "category": "station"
    },
    {
        "file": "대백로.webp",
        "category": "road"
    },
    {
        "file": "대법원_판결_환호.webp",
        "category": "facility_gov"
    },
    {
        "file": "대산고속.webp",
        "category": "bus"
    },
    {
        "file": "대산신호장_전경.webp",
        "category": "station"
    },
    {
        "file": "대운동장역_승강장.webp",
        "category": "station"
    },
    {
        "file": "대자보.webp",
        "category": "document"
    },
    {
        "file": "대전광역시.svg",
        "category": "logo"
    },
    {
        "file": "대전역_전경.webp",
        "category": "station"
    },
    {
        "file": "대전하나시티즌_로고.svg",
        "category": "logo"
    },
    {
        "file": "대찬대학교.svg",
        "category": "school"
    },
    {
        "file": "대찬대학교.webp",
        "category": "school"
    },
    {
        "file": "대학본부·충승당역_승강장.webp",
        "category": "station"
    },
    {
        "file": "대학입학 직후(2022).webp",
        "category": "school"
    },
    {
        "file": "대한민국 대통령 문장.svg",
        "category": "logo"
    },
    {
        "file": "대한민국 대통령기.svg",
        "category": "logo"
    },
    {
        "file": "대한민국_검찰청_로고.svg",
        "category": "facility_gov"
    },
    {
        "file": "대한민국_경찰청_로고.svg",
        "category": "facility_gov"
    },
    {
        "file": "대한민국_고속국도.webp",
        "category": "bus"
    },
    {
        "file": "대한민국_공군_로고.svg",
        "category": "logo"
    },
    {
        "file": "대한민국_국기.webp",
        "category": "etc"
    },
    {
        "file": "대한민국_국장.svg",
        "category": "logo"
    },
    {
        "file": "대한민국_법무부_로고.svg",
        "category": "logo"
    },
    {
        "file": "대한민국_법원_로고.svg",
        "category": "facility_gov"
    },
    {
        "file": "대한민국_선거관리위원회_로고.svg",
        "category": "facility_gov"
    },
    {
        "file": "대한민국_소방청_로고.svg",
        "category": "facility_gov"
    },
    {
        "file": "대한민국_정부_로고.svg",
        "category": "logo"
    },
    {
        "file": "대합실.webp",
        "category": "etc"
    },
    {
        "file": "대흥역.webp",
        "category": "station"
    },
    {
        "file": "더불어민주당 8월 슬로건.webp",
        "category": "logo"
    },
    {
        "file": "더불어민주당 로고 화이트.svg",
        "category": "logo"
    },
    {
        "file": "더불어민주당 로고.svg",
        "category": "logo"
    },
    {
        "file": "더불어민주당 아이콘 흰색.svg",
        "category": "logo"
    },
    {
        "file": "덕남대역_전경.webp",
        "category": "station"
    },
    {
        "file": "덕남도립대학_UI.png",
        "category": "school"
    },
    {
        "file": "덕남도청.webp",
        "category": "facility_gov"
    },
    {
        "file": "덕남도청역_전경.webp",
        "category": "station"
    },
    {
        "file": "덕남로고흰색.webp",
        "category": "logo"
    },
    {
        "file": "덕남이.webp",
        "category": "etc"
    },
    {
        "file": "덕북고속도로.webp",
        "category": "bus"
    },
    {
        "file": "덕북과학기술대학교.svg",
        "category": "school"
    },
    {
        "file": "덕북과학기술대학교.webp",
        "category": "school"
    },
    {
        "file": "덕북대_로고.webp",
        "category": "logo"
    },
    {
        "file": "덕북대학교.webp",
        "category": "school"
    },
    {
        "file": "덕북도립대학.svg",
        "category": "school"
    },
    {
        "file": "덕북도청.webp",
        "category": "facility_gov"
    },
    {
        "file": "덕북로고.webp",
        "category": "logo"
    },
    {
        "file": "덕북로고흰색.webp",
        "category": "logo"
    },
    {
        "file": "덕북선_노선도.webp",
        "category": "map"
    },
    {
        "file": "덕북예술대학_UI.webp",
        "category": "school"
    },
    {
        "file": "덕빈FC_로고.webp",
        "category": "logo"
    },
    {
        "file": "덕빈고속.webp",
        "category": "bus"
    },
    {
        "file": "덕빈남도_도정슬로건.webp",
        "category": "logo"
    },
    {
        "file": "덕빈남도_로고.webp",
        "category": "logo"
    },
    {
        "file": "덕빈남도_시내버스.webp",
        "category": "bus"
    },
    {
        "file": "덕빈남도지도.webp",
        "category": "map"
    },
    {
        "file": "덕빈보건대학교.svg",
        "category": "school"
    },
    {
        "file": "덕빈북도-효빈광역시 지도.webp",
        "category": "map"
    },
    {
        "file": "덕빈북도_도정슬로건.webp",
        "category": "logo"
    },
    {
        "file": "덕빈북도_마스코트_두로.webp",
        "category": "road"
    },
    {
        "file": "덕빈선_노선도.webp",
        "category": "map"
    },
    {
        "file": "덕빈지방데이터청.webp",
        "category": "illustration"
    },
    {
        "file": "덕산구청.webp",
        "category": "facility_gov"
    },
    {
        "file": "덕성로.webp",
        "category": "road"
    },
    {
        "file": "덕주 1호선 마스코트.webp",
        "category": "character"
    },
    {
        "file": "덕주1호선_노선도.webp",
        "category": "map"
    },
    {
        "file": "덕주_1호선_이덕희_퍼스널_아이콘.svg",
        "category": "logo"
    },
    {
        "file": "덕주대학교_UI.svg",
        "category": "school"
    },
    {
        "file": "덕주도시철도공사_1000호대_전동차.webp",
        "category": "train"
    },
    {
        "file": "덕주도시철도공사_로고.webp",
        "category": "facility_gov"
    },
    {
        "file": "덕주시.webp",
        "category": "etc"
    },
    {
        "file": "덕주시_시내버스.webp",
        "category": "bus"
    },
    {
        "file": "덕주시청.webp",
        "category": "facility_gov"
    },
    {
        "file": "덕주역.webp",
        "category": "station"
    },
    {
        "file": "덕주역_덕주1호선.webp",
        "category": "station"
    },
    {
        "file": "덕주역_일반철도_승강장.webp",
        "category": "station"
    },
    {
        "file": "덕주역_전경.webp",
        "category": "station"
    },
    {
        "file": "덕주점.webp",
        "category": "etc"
    },
    {
        "file": "덕현군 농어촌버스.webp",
        "category": "bus"
    },
    {
        "file": "덕현군.webp",
        "category": "etc"
    },
    {
        "file": "덕현군청.webp",
        "category": "facility_gov"
    },
    {
        "file": "덕현역_3호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "덕현역_6호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "덕현역_승강장.webp",
        "category": "station"
    },
    {
        "file": "덕현중앙역_창전선_승강장.webp",
        "category": "station"
    },
    {
        "file": "덕현지구_전경.webp",
        "category": "facility_com"
    },
    {
        "file": "데뷔생방송.webp",
        "category": "facility_com"
    },
    {
        "file": "데이터 괴물 각성.webp",
        "category": "etc"
    },
    {
        "file": "데이터베이스의 신.webp",
        "category": "etc"
    },
    {
        "file": "데이트.webp",
        "category": "illustration"
    },
    {
        "file": "도람동차고지.webp",
        "category": "bus"
    },
    {
        "file": "도람역_전경.webp",
        "category": "station"
    },
    {
        "file": "도변 아쿠아 아파트.webp",
        "category": "facility_com"
    },
    {
        "file": "도변01.webp",
        "category": "bus"
    },
    {
        "file": "도변대로.webp",
        "category": "road"
    },
    {
        "file": "도변리.webp",
        "category": "etc"
    },
    {
        "file": "도변아쿠아_아파트.webp",
        "category": "facility_com"
    },
    {
        "file": "도변역_4호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "도변역_5호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "도변역_전경.webp",
        "category": "station"
    },
    {
        "file": "도변역건어물.webp",
        "category": "etc"
    },
    {
        "file": "도변요우점.webp",
        "category": "character"
    },
    {
        "file": "도변읍_전경.webp",
        "category": "landscape"
    },
    {
        "file": "도변이자로.webp",
        "category": "road"
    },
    {
        "file": "도산로.webp",
        "category": "road"
    },
    {
        "file": "도상현.webp",
        "category": "etc"
    },
    {
        "file": "도성로.webp",
        "category": "road"
    },
    {
        "file": "도시의 맥박.webp",
        "category": "etc"
    },
    {
        "file": "도쿄 성지순례 강행군.webp",
        "category": "etc"
    },
    {
        "file": "도쿄의금안을조심해.gif",
        "category": "etc"
    },
    {
        "file": "도탄로.webp",
        "category": "road"
    },
    {
        "file": "도향01.webp",
        "category": "bus"
    },
    {
        "file": "도향02.webp",
        "category": "bus"
    },
    {
        "file": "도향03.webp",
        "category": "bus"
    },
    {
        "file": "도향역_승강장.webp",
        "category": "station"
    },
    {
        "file": "도향역_전경.webp",
        "category": "station"
    },
    {
        "file": "도현정.webp",
        "category": "etc"
    },
    {
        "file": "독서실의 은밀한 낙.webp",
        "category": "etc"
    },
    {
        "file": "독일.svg",
        "category": "logo"
    },
    {
        "file": "돈불라 철거 작전.webp",
        "category": "etc"
    },
    {
        "file": "돈불라 화형식.webp",
        "category": "etc"
    },
    {
        "file": "돈불라.webp",
        "category": "etc"
    },
    {
        "file": "동갑내기 절친의 온기.webp",
        "category": "etc"
    },
    {
        "file": "동고송역_승강장.webp",
        "category": "station"
    },
    {
        "file": "동곡공업지구_전경.webp",
        "category": "facility_com"
    },
    {
        "file": "동곡역_2호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "동곡역_3호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "동구 행정동 지도.webp",
        "category": "map"
    },
    {
        "file": "동구.webp",
        "category": "etc"
    },
    {
        "file": "동구_흰색로고.webp",
        "category": "logo"
    },
    {
        "file": "동구대학교.webp",
        "category": "school"
    },
    {
        "file": "동구대학교_UI.webp",
        "category": "school"
    },
    {
        "file": "동구청.webp",
        "category": "facility_gov"
    },
    {
        "file": "동덕현역_4호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "동덕현역_5호선_플랫폼.webp",
        "category": "station"
    },
    {
        "file": "동리아쿠아아파트.webp",
        "category": "facility_com"
    },
    {
        "file": "동리역_승강장.webp",
        "category": "station"
    },
    {
        "file": "동생 바보 누나.webp",
        "category": "person"
    },
    {
        "file": "동생 바보.webp",
        "category": "person"
    },
    {
        "file": "동생 학원비 송금.webp",
        "category": "person"
    },
    {
        "file": "동생의 수난.webp",
        "category": "person"
    },
    {
        "file": "동습역_승강장.webp",
        "category": "station"
    },
    {
        "file": "동신역_승강장.webp",
        "category": "station"
    },
    {
        "file": "동신역_전경.webp",
        "category": "station"
    },
    {
        "file": "동양언어관.webp",
        "category": "etc"
    },
    {
        "file": "동원역_승강장.webp",
        "category": "station"
    },
    {
        "file": "동원차량사업소.webp",
        "category": "train"
    },
    {
        "file": "동태역(과거).webp",
        "category": "etc"
    },
    {
        "file": "동태역(현재).webp",
        "category": "etc"
    },
    {
        "file": "동효빈세무서.webp",
        "category": "etc"
    },
    {
        "file": "두미로.webp",
        "category": "road"
    },
    {
        "file": "두산_베어스_로고.svg",
        "category": "landmark"
    },
    {
        "file": "두산핸드볼_로고.svg",
        "category": "logo"
    },
    {
        "file": "두원군 농어촌버스.webp",
        "category": "bus"
    },
    {
        "file": "두원군.webp",
        "category": "etc"
    },
    {
        "file": "두원군청.webp",
        "category": "facility_gov"
    },
    {
        "file": "두원역.webp",
        "category": "station"
    },
    {
        "file": "두청운수 시외버스.webp",
        "category": "bus"
    },
    {
        "file": "두청운수 트라우마.webp",
        "category": "bus"
    },
    {
        "file": "두청운수.webp",
        "category": "bus"
    },
    {
        "file": "두청운수_단속현장.webp",
        "category": "bus"
    },
    {
        "file": "두청운수_멸망.webp",
        "category": "bus"
    },
    {
        "file": "드로잉하트페이튼.webp",
        "category": "etc"
    },
    {
        "file": "등기산_전경.webp",
        "category": "landmark"
    },
    {
        "file": "등기역_승강장.webp",
        "category": "station"
    },
    {
        "file": "등동 아쿠아 아파트.webp",
        "category": "facility_com"
    },
    {
        "file": "등동역_승강장.webp",
        "category": "station"
    },
    {
        "file": "디바 톤의 절대 명령.webp",
        "category": "etc"
    },
    {
        "file": "디바(D.Va)의 일갈.webp",
        "category": "etc"
    },
    {
        "file": "따뜻한 힐러.webp",
        "category": "etc"
    },
    {
        "file": "딱 한 번만요!.webp",
        "category": "etc"
    },
    {
        "file": "라디오 사연 당첨.webp",
        "category": "etc"
    },
    {
        "file": "라세나 구출 작전.webp",
        "category": "character"
    },
    {
        "file": "라세나 껌딱지.webp",
        "category": "character"
    },
    {
        "file": "라세나 로고.webp",
        "category": "logo"
    },
    {
        "file": "라세나 메이드복.webp",
        "category": "character"
    },
    {
        "file": "라세나 사복.webp",
        "category": "character"
    },
    {
        "file": "라세나 수영복.webp",
        "category": "character"
    },
    {
        "file": "라세나 열차 내부.webp",
        "category": "train"
    },
    {
        "file": "라세나 태피.webp",
        "category": "merch"
    },
    {
        "file": "라세나 프로필.webp",
        "category": "character"
    },
    {
        "file": "라세나 해변.webp",
        "category": "landmark"
    },
    {
        "file": "라세나.webp",
        "category": "person"
    },
    {
        "file": "라세나sd.webp",
        "category": "character"
    },
    {
        "file": "라세나_넨도.webp",
        "category": "merch"
    },
    {
        "file": "라세나_노트.webp",
        "category": "character"
    },
    {
        "file": "라세나_볼펜.webp",
        "category": "character"
    },
    {
        "file": "라세나_아빠.webp",
        "category": "person"
    },
    {
        "file": "라세나_엄마.webp",
        "category": "person"
    },
    {
        "file": "라세나_지우개.webp",
        "category": "character"
    },
    {
        "file": "라세나_플래너.webp",
        "category": "character"
    },
    {
        "file": "라세나_피규어.webp",
        "category": "merch"
    },
    {
        "file": "라세나가족.webp",
        "category": "person"
    },
    {
        "file": "라세나네소베리.webp",
        "category": "merch"
    },
    {
        "file": "라세나방.webp",
        "category": "character"
    },
    {
        "file": "라세나뱃지.webp",
        "category": "merch"
    },
    {
        "file": "라세하.webp",
        "category": "person"
    },
    {
        "file": "라준혁.webp",
        "category": "person"
    },
    {
        "file": "란 열차 내부.webp",
        "category": "train"
    },
    {
        "file": "란쥬머그컵.webp",
        "category": "merch"
    },
    {
        "file": "래핑버스.webp",
        "category": "bus"
    },
    {
        "file": "랩실_풍경.webp",
        "category": "landscape"
    },
    {
        "file": "러브 라이브! School idol project series 로고.webp",
        "category": "logo"
    },
    {
        "file": "러브 라이브! 니지가사키 학원 스쿨 아이돌 동호회.webp",
        "category": "character"
    },
    {
        "file": "러브라이버_인증.webp",
        "category": "etc"
    },
    {
        "file": "레스페 런칭기념.webp",
        "category": "etc"
    },
    {
        "file": "레스페_게임_선택.webp",
        "category": "etc"
    },
    {
        "file": "레스페_게임_퀘스트.webp",
        "category": "etc"
    },
    {
        "file": "레스페_게임화면.webp",
        "category": "document"
    },
    {
        "file": "레스페_로비.webp",
        "category": "etc"
    },
    {
        "file": "레스페_사전.webp",
        "category": "etc"
    },
    {
        "file": "레스페_상점.webp",
        "category": "etc"
    },
    {
        "file": "레스페_스토리1.webp",
        "category": "etc"
    },
    {
        "file": "레스페_스토리2.webp",
        "category": "etc"
    },
    {
        "file": "레이사와 아오이.webp",
        "category": "etc"
    },
    {
        "file": "레인보우아쿠아드로고.webp",
        "category": "facility_com"
    },
    {
        "file": "레일루미네.webp",
        "category": "etc"
    },
    {
        "file": "레일루미네_2005_트리오_근로장학.webp",
        "category": "illustration"
    },
    {
        "file": "레일루미네_2005_트리오_산책.webp",
        "category": "illustration"
    },
    {
        "file": "레일루미네_단체.webp",
        "category": "illustration"
    },
    {
        "file": "레일루미네_스마일_페스티벌.webp",
        "category": "event"
    },
    {
        "file": "레일루미네_특구.webp",
        "category": "etc"
    },
    {
        "file": "레일루미네_페스_로고.webp",
        "category": "event"
    },
    {
        "file": "렌카논1.webp",
        "category": "character"
    },
    {
        "file": "렌쿠쿠1.webp",
        "category": "character"
    },
    {
        "file": "로젤리아_음식점.webp",
        "category": "food"
    },
    {
        "file": "로젤리아아파트.webp",
        "category": "facility_com"
    },
    {
        "file": "록구산_전경.webp",
        "category": "landmark"
    },
    {
        "file": "롤랜드 앰프.webp",
        "category": "etc"
    },
    {
        "file": "롯데_자이언츠_로고.svg",
        "category": "logo"
    },
    {
        "file": "롯데마트_과진점.webp",
        "category": "facility_com"
    },
    {
        "file": "롯데마트_도변점.webp",
        "category": "facility_com"
    },
    {
        "file": "롯데마트_도변점_전경.webp",
        "category": "facility_com"
    },
    {
        "file": "롯데마트_로고.svg",
        "category": "facility_com"
    },
    {
        "file": "롯데마트_맥스_창전점_전경.webp",
        "category": "facility_com"
    },
    {
        "file": "롯데마트_맥스_천주점_전경.webp",
        "category": "facility_com"
    },
    {
        "file": "롯데마트_이자점.webp",
        "category": "facility_com"
    },
    {
        "file": "롯데마트_이자점_전경.webp",
        "category": "facility_com"
    },
    {
        "file": "롯데마트_진희점.webp",
        "category": "facility_com"
    },
    {
        "file": "롯데마트_진희점_전경.webp",
        "category": "facility_com"
    },
    {
        "file": "롯데마트_평당점.webp",
        "category": "facility_com"
    },
    {
        "file": "롯데마트_평당점_전경.webp",
        "category": "facility_com"
    },
    {
        "file": "롯데마트맥스.svg",
        "category": "facility_com"
    },
    {
        "file": "롯데마트맥스_로고.svg",
        "category": "facility_com"
    },
    {
        "file": "롯데면세점_로고.svg",
        "category": "logo"
    },
    {
        "file": "롯데몰_로고.svg",
        "category": "logo"
    },
    {
        "file": "롯데백화점_로고.svg",
        "category": "facility_com"
    },
    {
        "file": "롯데백화점_청엽점.webp",
        "category": "facility_com"
    },
    {
        "file": "롯데백화점_평당점.webp",
        "category": "facility_com"
    },
    {
        "file": "롯데백화점_효빈점.webp",
        "category": "facility_com"
    },
    {
        "file": "롯데시네마_과진.webp",
        "category": "facility_com"
    },
    {
        "file": "롯데시네마_도변.webp",
        "category": "facility_com"
    },
    {
        "file": "롯데시네마_로고_영문_백색.svg",
        "category": "facility_com"
    },
    {
        "file": "롯데시네마_사노.webp",
        "category": "facility_com"
    },
    {
        "file": "롯데시네마_우전.webp",
        "category": "facility_com"
    },
    {
        "file": "롯데시네마_이자.webp",
        "category": "facility_com"
    },
    {
        "file": "롯데시네마_창전.webp",
        "category": "facility_com"
    },
    {
        "file": "롯데시네마_평당.webp",
        "category": "facility_com"
    },
    {
        "file": "롯데시네마_효빈.webp",
        "category": "facility_com"
    },
    {
        "file": "롯데아울렛_로고.svg",
        "category": "logo"
    },
    {
        "file": "루비.webp",
        "category": "character"
    },
    {
        "file": "루비공원.webp",
        "category": "landmark"
    },
    {
        "file": "루비로.webp",
        "category": "road"
    },
    {
        "file": "루비루비루비.webp",
        "category": "character"
    },
    {
        "file": "루비루비사인.webp",
        "category": "logo"
    },
    {
        "file": "루비역_승강장.webp",
        "category": "station"
    },
    {
        "file": "루비역_전경.webp",
        "category": "station"
    },
    {
        "file": "루비역라면.webp",
        "category": "character"
    },
    {
        "file": "루파.webp",
        "category": "etc"
    },
    {
        "file": "리듬게임 쌉고수.webp",
        "category": "etc"
    },
    {
        "file": "리사역_전경.webp",
        "category": "station"
    },
    {
        "file": "리에라.webp",
        "category": "character"
    },
    {
        "file": "리에라몰.svg",
        "category": "logo"
    },
    {
        "file": "리에라몰.webp",
        "category": "character"
    },
    {
        "file": "리엘라스테이.webp",
        "category": "etc"
    },
    {
        "file": "리유_응원메시지.webp",
        "category": "etc"
    },
    {
        "file": "리의역_승강장.webp",
        "category": "station"
    },
    {
        "file": "리의역_전경.webp",
        "category": "station"
    },
    {
        "file": "리코 sss..webp",
        "category": "character"
    },
    {
        "file": "리코 경피..webp",
        "category": "character"
    },
    {
        "file": "리코 경피2..webp",
        "category": "character"
    },
    {
        "file": "리코.webp",
        "category": "character"
    },
    {
        "file": "리코넨도..webp",
        "category": "merch"
    },
    {
        "file": "리코리코리코.webp",
        "category": "character"
    },
    {
        "file": "리코리코사인.webp",
        "category": "logo"
    },
    {
        "file": "리코스탠딩투명.webp",
        "category": "character"
    },
    {
        "file": "리코아오조라..webp",
        "category": "character"
    },
    {
        "file": "릴스 100만 뷰 달성.webp",
        "category": "etc"
    },
    {
        "file": "립스틱 사수.webp",
        "category": "etc"
    },
    {
        "file": "릿꼬..webp",
        "category": "etc"
    },
    {
        "file": "마그넷.webp",
        "category": "etc"
    },
    {
        "file": "마기철_대표.webp",
        "category": "person"
    },
    {
        "file": "마낙선_노선도.webp",
        "category": "map"
    },
    {
        "file": "마닐라풍경.webp",
        "category": "landscape"
    },
    {
        "file": "마동철_선수.webp",
        "category": "person"
    },
    {
        "file": "마라탕 3단계.webp",
        "category": "food"
    },
    {
        "file": "마라탕 수혈 시간.webp",
        "category": "food"
    },
    {
        "file": "마라탕 수혈.webp",
        "category": "food"
    },
    {
        "file": "마루마루마루.webp",
        "category": "etc"
    },
    {
        "file": "마루마루사인.webp",
        "category": "logo"
    },
    {
        "file": "마루야마 아야.webp",
        "category": "character"
    },
    {
        "file": "마르카논1.webp",
        "category": "character"
    },
    {
        "file": "마리 이사장 빙의.webp",
        "category": "character"
    },
    {
        "file": "마리.webp",
        "category": "character"
    },
    {
        "file": "마맹호.webp",
        "category": "etc"
    },
    {
        "file": "마샬 JCM900 앰프.webp",
        "category": "road"
    },
    {
        "file": "마시로 열차 내부.webp",
        "category": "train"
    },
    {
        "file": "마야로.webp",
        "category": "road"
    },
    {
        "file": "마에다 카오리.webp",
        "category": "etc"
    },
    {
        "file": "마을버스.webp",
        "category": "bus"
    },
    {
        "file": "마이고.webp",
        "category": "etc"
    },
    {
        "file": "마이고_협약코믹스.webp",
        "category": "event"
    },
    {
        "file": "마잡역_2호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "마잡역_6호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "마잡차량사업소_지도.webp",
        "category": "map"
    },
    {
        "file": "마지막 남은 예산 사수.webp",
        "category": "etc"
    },
    {
        "file": "마진시.webp",
        "category": "etc"
    },
    {
        "file": "마진시_시내버스.webp",
        "category": "bus"
    },
    {
        "file": "마진시청.webp",
        "category": "facility_gov"
    },
    {
        "file": "마진역.webp",
        "category": "station"
    },
    {
        "file": "마진항.webp",
        "category": "etc"
    },
    {
        "file": "마진해양대학교_UI.svg",
        "category": "school"
    },
    {
        "file": "마츠바라 카논.webp",
        "category": "character"
    },
    {
        "file": "마츠우라 카난.webp",
        "category": "character"
    },
    {
        "file": "마카롱 극혐.webp",
        "category": "food"
    },
    {
        "file": "마케팅팀.webp",
        "category": "etc"
    },
    {
        "file": "마크로_로고.svg",
        "category": "logo"
    },
    {
        "file": "마현역_승강장.webp",
        "category": "station"
    },
    {
        "file": "마현역_전경.webp",
        "category": "station"
    },
    {
        "file": "만능 WD-40.webp",
        "category": "etc"
    },
    {
        "file": "만마루역_승강장.webp",
        "category": "station"
    },
    {
        "file": "만수르와 짠순이.webp",
        "category": "etc"
    },
    {
        "file": "만화애니메이션의전당.webp",
        "category": "character"
    },
    {
        "file": "맑은 곰탕의 여유.webp",
        "category": "etc"
    },
    {
        "file": "망가타임 키라라 맥스 표지.webp",
        "category": "etc"
    },
    {
        "file": "망한로.webp",
        "category": "road"
    },
    {
        "file": "매덕선_노선도.webp",
        "category": "map"
    },
    {
        "file": "매산군.webp",
        "category": "etc"
    },
    {
        "file": "매산군청.webp",
        "category": "facility_gov"
    },
    {
        "file": "매산여객 버스.webp",
        "category": "bus"
    },
    {
        "file": "매성시.webp",
        "category": "etc"
    },
    {
        "file": "매성시청.webp",
        "category": "facility_gov"
    },
    {
        "file": "매성여객 버스.webp",
        "category": "bus"
    },
    {
        "file": "매성역.webp",
        "category": "station"
    },
    {
        "file": "매성역_승강장.webp",
        "category": "station"
    },
    {
        "file": "매출이 복지다!.webp",
        "category": "etc"
    },
    {
        "file": "맥도날드 알바생.webp",
        "category": "person"
    },
    {
        "file": "맥도날드_로고.webp",
        "category": "logo"
    },
    {
        "file": "메가박스 고송점 내부.webp",
        "category": "facility_com"
    },
    {
        "file": "메가박스_HJ중수.webp",
        "category": "facility_com"
    },
    {
        "file": "메가박스_고송.webp",
        "category": "facility_com"
    },
    {
        "file": "메가박스_로고.webp",
        "category": "facility_com"
    },
    {
        "file": "메가박스_안천.webp",
        "category": "facility_com"
    },
    {
        "file": "메가박스_창전.webp",
        "category": "facility_com"
    },
    {
        "file": "메가박스_청엽.webp",
        "category": "facility_com"
    },
    {
        "file": "메가박스_탄성.webp",
        "category": "facility_com"
    },
    {
        "file": "메가박스_항동.webp",
        "category": "facility_com"
    },
    {
        "file": "메가박스_효빈.webp",
        "category": "facility_com"
    },
    {
        "file": "메가박스_효빈대.webp",
        "category": "facility_com"
    },
    {
        "file": "메가박스_효빈터미널.webp",
        "category": "bus"
    },
    {
        "file": "메뉴 선택 장애.webp",
        "category": "etc"
    },
    {
        "file": "메이드 카페 실습.webp",
        "category": "food"
    },
    {
        "file": "메카닉의 심장.webp",
        "category": "etc"
    },
    {
        "file": "멘탈 붕괴의 서막.webp",
        "category": "etc"
    },
    {
        "file": "멜론북스_로고.svg",
        "category": "logo"
    },
    {
        "file": "명안나.webp",
        "category": "person"
    },
    {
        "file": "명일역_승강장.webp",
        "category": "station"
    },
    {
        "file": "명절의 대가족.webp",
        "category": "person"
    },
    {
        "file": "명태역.webp",
        "category": "station"
    },
    {
        "file": "명태역_승강장.webp",
        "category": "station"
    },
    {
        "file": "모니터링.webp",
        "category": "etc"
    },
    {
        "file": "모다아울렛_로고.svg",
        "category": "logo"
    },
    {
        "file": "모델하우스_인파.webp",
        "category": "etc"
    },
    {
        "file": "모모세 긴코.webp",
        "category": "etc"
    },
    {
        "file": "모범생의 이중생활.webp",
        "category": "etc"
    },
    {
        "file": "모유빌딩.webp",
        "category": "etc"
    },
    {
        "file": "모의고사 멘토링.webp",
        "category": "etc"
    },
    {
        "file": "모제군 농어촌버스.webp",
        "category": "bus"
    },
    {
        "file": "모제군.webp",
        "category": "etc"
    },
    {
        "file": "모제군청.webp",
        "category": "facility_gov"
    },
    {
        "file": "모제역.webp",
        "category": "station"
    },
    {
        "file": "모제역_승강장.webp",
        "category": "station"
    },
    {
        "file": "모차르트.webp",
        "category": "etc"
    },
    {
        "file": "모카 열차 내부.webp",
        "category": "train"
    },
    {
        "file": "모터의 정령술사.webp",
        "category": "etc"
    },
    {
        "file": "모포로.webp",
        "category": "road"
    },
    {
        "file": "몽골.svg",
        "category": "logo"
    },
    {
        "file": "몽키스패너와 인두기.webp",
        "category": "etc"
    },
    {
        "file": "무거운 장비 운반.webp",
        "category": "etc"
    },
    {
        "file": "무기로.webp",
        "category": "road"
    },
    {
        "file": "무기역_승강장.webp",
        "category": "station"
    },
    {
        "file": "무기역_전경.webp",
        "category": "station"
    },
    {
        "file": "무능한 조원 저격.webp",
        "category": "etc"
    },
    {
        "file": "무단 촬영 엄금.webp",
        "category": "etc"
    },
    {
        "file": "무라노 사야카.webp",
        "category": "etc"
    },
    {
        "file": "무라노_사야카_극장판.webp",
        "category": "etc"
    },
    {
        "file": "무적의 늦둥이.webp",
        "category": "etc"
    },
    {
        "file": "무적의 보호막.webp",
        "category": "etc"
    },
    {
        "file": "무전기 노이즈.webp",
        "category": "etc"
    },
    {
        "file": "무죄입니다!.webp",
        "category": "etc"
    },
    {
        "file": "무한루프증거.webp",
        "category": "etc"
    },
    {
        "file": "문과 에이스들.webp",
        "category": "etc"
    },
    {
        "file": "문석준.webp",
        "category": "person"
    },
    {
        "file": "문성역.webp",
        "category": "station"
    },
    {
        "file": "문성역_승강장.webp",
        "category": "station"
    },
    {
        "file": "문수연.webp",
        "category": "person"
    },
    {
        "file": "문양인.webp",
        "category": "person"
    },
    {
        "file": "문언성.webp",
        "category": "person"
    },
    {
        "file": "문언성_DM.webp",
        "category": "etc"
    },
    {
        "file": "문이과 대충돌.webp",
        "category": "etc"
    },
    {
        "file": "문재인 대통령 취임 선서.webp",
        "category": "etc"
    },
    {
        "file": "문화제 라이브 페달보드.webp",
        "category": "character"
    },
    {
        "file": "문화회관역_승강장.webp",
        "category": "station"
    },
    {
        "file": "문화회관역_전경.webp",
        "category": "station"
    },
    {
        "file": "물리적 민원 해결.webp",
        "category": "etc"
    },
    {
        "file": "물리적 방어전.webp",
        "category": "illustration"
    },
    {
        "file": "뮤즈.svg",
        "category": "logo"
    },
    {
        "file": "뮤즈아파트.webp",
        "category": "facility_com"
    },
    {
        "file": "미국.svg",
        "category": "logo"
    },
    {
        "file": "미국인 할아버지의 유전자.webp",
        "category": "person"
    },
    {
        "file": "미기로.webp",
        "category": "road"
    },
    {
        "file": "미나미 코토리.webp",
        "category": "character"
    },
    {
        "file": "미나토 유키나.webp",
        "category": "character"
    },
    {
        "file": "미네츠키 리츠.webp",
        "category": "character"
    },
    {
        "file": "미소율.webp",
        "category": "etc"
    },
    {
        "file": "미소하 가족 개별 1컷 사진.webp",
        "category": "person"
    },
    {
        "file": "미소하 과잠.webp",
        "category": "character"
    },
    {
        "file": "미소하 긴수영복.webp",
        "category": "character"
    },
    {
        "file": "미소하 로고.webp",
        "category": "logo"
    },
    {
        "file": "미소하 메이드복.webp",
        "category": "character"
    },
    {
        "file": "미소하 수영복.webp",
        "category": "character"
    },
    {
        "file": "미소하 열차 내부.webp",
        "category": "train"
    },
    {
        "file": "미소하 태피.webp",
        "category": "merch"
    },
    {
        "file": "미소하 프로필.webp",
        "category": "character"
    },
    {
        "file": "미소하.webp",
        "category": "character"
    },
    {
        "file": "미소하sd.webp",
        "category": "character"
    },
    {
        "file": "미소하_넨도.webp",
        "category": "merch"
    },
    {
        "file": "미소하_노트.webp",
        "category": "character"
    },
    {
        "file": "미소하_볼펜.webp",
        "category": "character"
    },
    {
        "file": "미소하_분석노트.webp",
        "category": "document"
    },
    {
        "file": "미소하_아빠.webp",
        "category": "person"
    },
    {
        "file": "미소하_엄마.webp",
        "category": "person"
    },
    {
        "file": "미소하_지아센_멘토링.webp",
        "category": "character"
    },
    {
        "file": "미소하_지우개.webp",
        "category": "character"
    },
    {
        "file": "미소하_편의점_알바.webp",
        "category": "person"
    },
    {
        "file": "미소하_피규어.webp",
        "category": "merch"
    },
    {
        "file": "미소하가족.webp",
        "category": "person"
    },
    {
        "file": "미소하네소베리.webp",
        "category": "merch"
    },
    {
        "file": "미소하방.webp",
        "category": "character"
    },
    {
        "file": "미소하뱃지.webp",
        "category": "merch"
    },
    {
        "file": "미술사회대역_승강장.webp",
        "category": "station"
    },
    {
        "file": "미스미 우이카.webp",
        "category": "character"
    },
    {
        "file": "미아 테일러.webp",
        "category": "character"
    },
    {
        "file": "미아버거.webp",
        "category": "food"
    },
    {
        "file": "미야나가 노노카.webp",
        "category": "etc"
    },
    {
        "file": "미야시타 아이.webp",
        "category": "character"
    },
    {
        "file": "미타케 란.webp",
        "category": "character"
    },
    {
        "file": "미후네 시오리코.webp",
        "category": "character"
    },
    {
        "file": "민부선 총장.webp",
        "category": "etc"
    },
    {
        "file": "민부선.webp",
        "category": "etc"
    },
    {
        "file": "민산역_전경.webp",
        "category": "station"
    },
    {
        "file": "민송현.webp",
        "category": "etc"
    },
    {
        "file": "민원 완충 지대.webp",
        "category": "etc"
    },
    {
        "file": "민유나.webp",
        "category": "etc"
    },
    {
        "file": "민주당_당원증.webp",
        "category": "etc"
    },
    {
        "file": "민트초코단.webp",
        "category": "etc"
    },
    {
        "file": "밀레니엄 마스코트.webp",
        "category": "character"
    },
    {
        "file": "밀레니엄의 창조물.webp",
        "category": "etc"
    },
    {
        "file": "밀리오레_로고.svg",
        "category": "logo"
    },
    {
        "file": "바나나 극혐.webp",
        "category": "etc"
    },
    {
        "file": "바나나 테러 방어.webp",
        "category": "event"
    },
    {
        "file": "바우처택시.webp",
        "category": "bus"
    },
    {
        "file": "박_교수.webp",
        "category": "person"
    },
    {
        "file": "박라미 3호선 래핑.webp",
        "category": "character"
    },
    {
        "file": "박라미 과잠.webp",
        "category": "character"
    },
    {
        "file": "박라미 굿즈샵(공항).webp",
        "category": "merch"
    },
    {
        "file": "박라미 로고.webp",
        "category": "logo"
    },
    {
        "file": "박라미 메이드복.webp",
        "category": "character"
    },
    {
        "file": "박라미 수영복.webp",
        "category": "character"
    },
    {
        "file": "박라미 열차 내부.webp",
        "category": "train"
    },
    {
        "file": "박라미 태피.webp",
        "category": "merch"
    },
    {
        "file": "박라미 프로필.webp",
        "category": "character"
    },
    {
        "file": "박라미.webp",
        "category": "person"
    },
    {
        "file": "박라미sd.webp",
        "category": "character"
    },
    {
        "file": "박라미_넨도.webp",
        "category": "merch"
    },
    {
        "file": "박라미_노트.webp",
        "category": "character"
    },
    {
        "file": "박라미_볼펜.webp",
        "category": "character"
    },
    {
        "file": "박라미_엄마.webp",
        "category": "person"
    },
    {
        "file": "박라미_전신_놀란표정_투명.webp",
        "category": "character"
    },
    {
        "file": "박라미_전신_무표정_투명.webp",
        "category": "character"
    },
    {
        "file": "박라미_전신_부끄러운표정_투명.webp",
        "category": "character"
    },
    {
        "file": "박라미_전신_슬픈표정_투명.webp",
        "category": "character"
    },
    {
        "file": "박라미_전신_행복한표정_투명.webp",
        "category": "character"
    },
    {
        "file": "박라미_전신_화난표정_투명.webp",
        "category": "character"
    },
    {
        "file": "박라미_지우개.webp",
        "category": "character"
    },
    {
        "file": "박라미_파우치.webp",
        "category": "character"
    },
    {
        "file": "박라미_피규어.webp",
        "category": "merch"
    },
    {
        "file": "박라미가족.webp",
        "category": "person"
    },
    {
        "file": "박라미네소베리.webp",
        "category": "merch"
    },
    {
        "file": "박라미다로나 하루빈 .webp",
        "category": "character"
    },
    {
        "file": "박라미방.webp",
        "category": "character"
    },
    {
        "file": "박라미뱃지.webp",
        "category": "merch"
    },
    {
        "file": "박루이.webp",
        "category": "person"
    },
    {
        "file": "박빛나 SD.webp",
        "category": "character"
    },
    {
        "file": "박빛나.webp",
        "category": "person"
    },
    {
        "file": "박빛나sd.webp",
        "category": "character"
    },
    {
        "file": "박빛나_가족사진_참사.webp",
        "category": "person"
    },
    {
        "file": "박빛나_근무.webp",
        "category": "character"
    },
    {
        "file": "박빛나_긴장함_수정_v2_투명.webp",
        "category": "character"
    },
    {
        "file": "박빛나_긴장함_수정_투명.webp",
        "category": "character"
    },
    {
        "file": "박빛나_김소빈_근무.webp",
        "category": "character"
    },
    {
        "file": "박빛나_김소빈_물놀이.webp",
        "category": "character"
    },
    {
        "file": "박빛나_김소빈_스포츠.webp",
        "category": "character"
    },
    {
        "file": "박빛나_김소빈_이덕희_리겜.webp",
        "category": "character"
    },
    {
        "file": "박빛나_김소빈_해변.webp",
        "category": "landmark"
    },
    {
        "file": "박빛나_넨도.webp",
        "category": "merch"
    },
    {
        "file": "박빛나_노트.webp",
        "category": "character"
    },
    {
        "file": "박빛나_놀람_수정_투명.webp",
        "category": "character"
    },
    {
        "file": "박빛나_동물머리띠_수정_v2_투명.webp",
        "category": "merch"
    },
    {
        "file": "박빛나_동물머리띠_수정_투명.webp",
        "category": "merch"
    },
    {
        "file": "박빛나_로고.webp",
        "category": "logo"
    },
    {
        "file": "박빛나_먹여주기_수정_투명.webp",
        "category": "character"
    },
    {
        "file": "박빛나_메롱_수정_투명.webp",
        "category": "character"
    },
    {
        "file": "박빛나_메이드.webp",
        "category": "character"
    },
    {
        "file": "박빛나_무표정_수정2_투명.webp",
        "category": "character"
    },
    {
        "file": "박빛나_볼에바람넣기_수정_투명.webp",
        "category": "character"
    },
    {
        "file": "박빛나_볼펜.webp",
        "category": "character"
    },
    {
        "file": "박빛나_부끄러움_수정_투명.webp",
        "category": "character"
    },
    {
        "file": "박빛나_사복.webp",
        "category": "character"
    },
    {
        "file": "박빛나_수영복.webp",
        "category": "character"
    },
    {
        "file": "박빛나_슬픔_수정_v2_투명.webp",
        "category": "character"
    },
    {
        "file": "박빛나_슬픔_수정_투명.webp",
        "category": "character"
    },
    {
        "file": "박빛나_아빠.webp",
        "category": "person"
    },
    {
        "file": "박빛나_애교_수정_투명.webp",
        "category": "character"
    },
    {
        "file": "박빛나_엄마.webp",
        "category": "person"
    },
    {
        "file": "박빛나_윙크_수정_투명.webp",
        "category": "character"
    },
    {
        "file": "박빛나_입벌리기_수정_투명.webp",
        "category": "character"
    },
    {
        "file": "박빛나_입술내밀기_수정_투명.webp",
        "category": "character"
    },
    {
        "file": "박빛나_잠자기_수정_투명.webp",
        "category": "character"
    },
    {
        "file": "박빛나_전신_놀란표정_투명.webp",
        "category": "character"
    },
    {
        "file": "박빛나_전신_무표정_투명.webp",
        "category": "character"
    },
    {
        "file": "박빛나_전신_부끄러운표정_투명.webp",
        "category": "character"
    },
    {
        "file": "박빛나_전신_슬픈표정_투명.webp",
        "category": "character"
    },
    {
        "file": "박빛나_전신_행복한표정_투명.webp",
        "category": "character"
    },
    {
        "file": "박빛나_전신_화난표정_투명.webp",
        "category": "character"
    },
    {
        "file": "박빛나_지우개.webp",
        "category": "character"
    },
    {
        "file": "박빛나_질투_수정_투명.webp",
        "category": "character"
    },
    {
        "file": "박빛나_피곤함_수정_투명.webp",
        "category": "character"
    },
    {
        "file": "박빛나_피규어.webp",
        "category": "merch"
    },
    {
        "file": "박빛나_하루빈 왜곡한 쓰레기 이미지.webp",
        "category": "character"
    },
    {
        "file": "박빛나_하트_수정_투명.webp",
        "category": "character"
    },
    {
        "file": "박빛나_행복_수정_투명.webp",
        "category": "character"
    },
    {
        "file": "박빛나_화남_수정_투명.webp",
        "category": "character"
    },
    {
        "file": "박빛나가족.webp",
        "category": "person"
    },
    {
        "file": "박빛나네소베리.webp",
        "category": "merch"
    },
    {
        "file": "박빛나방.webp",
        "category": "character"
    },
    {
        "file": "박빛나열차.webp",
        "category": "train"
    },
    {
        "file": "박빛나열차내부.webp",
        "category": "train"
    },
    {
        "file": "박산역_2호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "박산역_8호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "박산역_전경.webp",
        "category": "station"
    },
    {
        "file": "박산중고등학교역_승강장.webp",
        "category": "station"
    },
    {
        "file": "박산중고등학교역_전경.webp",
        "category": "station"
    },
    {
        "file": "박상구.webp",
        "category": "etc"
    },
    {
        "file": "박성역.webp",
        "category": "station"
    },
    {
        "file": "박성역_승강장.webp",
        "category": "station"
    },
    {
        "file": "박성인.webp",
        "category": "person"
    },
    {
        "file": "박성임.webp",
        "category": "person"
    },
    {
        "file": "박성진.webp",
        "category": "person"
    },
    {
        "file": "박신언.webp",
        "category": "person"
    },
    {
        "file": "박신유.webp",
        "category": "person"
    },
    {
        "file": "박아밀라.webp",
        "category": "etc"
    },
    {
        "file": "박아상.webp",
        "category": "person"
    },
    {
        "file": "박윤나.webp",
        "category": "person"
    },
    {
        "file": "박이나.webp",
        "category": "person"
    },
    {
        "file": "박준서.webp",
        "category": "person"
    },
    {
        "file": "박지우.webp",
        "category": "person"
    },
    {
        "file": "박찬우.webp",
        "category": "person"
    },
    {
        "file": "박청권.webp",
        "category": "person"
    },
    {
        "file": "박파란.webp",
        "category": "person"
    },
    {
        "file": "박현만.webp",
        "category": "person"
    },
    {
        "file": "박현만_기자회견.webp",
        "category": "event"
    },
    {
        "file": "박현만_침통.webp",
        "category": "etc"
    },
    {
        "file": "박현언.webp",
        "category": "person"
    },
    {
        "file": "박현역_전경.webp",
        "category": "station"
    },
    {
        "file": "박효빈 2022편의점근장.webp",
        "category": "person"
    },
    {
        "file": "박효빈 고1.webp",
        "category": "person"
    },
    {
        "file": "박효빈 고2.webp",
        "category": "person"
    },
    {
        "file": "박효빈 굿즈.png.webp",
        "category": "merch"
    },
    {
        "file": "박효빈 대2(2023).webp",
        "category": "person"
    },
    {
        "file": "박효빈 시장 대학생 시절.webp",
        "category": "school"
    },
    {
        "file": "박효빈 시장 싸인.webp",
        "category": "facility_com"
    },
    {
        "file": "박효빈 중1.webp",
        "category": "person"
    },
    {
        "file": "박효빈 중딩시절(돼지,2016).webp",
        "category": "person"
    },
    {
        "file": "박효빈 초1.webp",
        "category": "person"
    },
    {
        "file": "박효빈 초4(2013).webp",
        "category": "person"
    },
    {
        "file": "박효빈(1살).webp",
        "category": "person"
    },
    {
        "file": "박효빈(3살 추정(2005).webp",
        "category": "person"
    },
    {
        "file": "박효빈(5~6세).webp",
        "category": "person"
    },
    {
        "file": "박효빈(7세추정,2009).webp",
        "category": "person"
    },
    {
        "file": "박효빈(뱃속(2002)).webp",
        "category": "person"
    },
    {
        "file": "박효빈(초딩졸업사진,2015).webp",
        "category": "person"
    },
    {
        "file": "박효빈, 마음고생심한시절, 잠깐여행(2024).webp",
        "category": "person"
    },
    {
        "file": "박효빈.webp",
        "category": "person"
    },
    {
        "file": "박효빈2016(중1).webp",
        "category": "person"
    },
    {
        "file": "박효빈20257월 몸사진.webp",
        "category": "person"
    },
    {
        "file": "박효빈_2세(2004).webp",
        "category": "person"
    },
    {
        "file": "박효빈_5세(2007).webp",
        "category": "person"
    },
    {
        "file": "박효빈_6세(2008).webp",
        "category": "person"
    },
    {
        "file": "박효빈_개강모임(미침).webp",
        "category": "person"
    },
    {
        "file": "박효빈_과잠.webp",
        "category": "person"
    },
    {
        "file": "박효빈_과잠1.webp",
        "category": "person"
    },
    {
        "file": "박효빈_국회포럼_사진.webp",
        "category": "event"
    },
    {
        "file": "박효빈_굳은살1.webp",
        "category": "person"
    },
    {
        "file": "박효빈_굳은살2.webp",
        "category": "person"
    },
    {
        "file": "박효빈_기자회견.webp",
        "category": "event"
    },
    {
        "file": "박효빈_김상욱_헬스장.webp",
        "category": "person"
    },
    {
        "file": "박효빈_김상욱_회동.webp",
        "category": "person"
    },
    {
        "file": "박효빈_당선_환호.webp",
        "category": "person"
    },
    {
        "file": "박효빈_대학생_효빈대_중앙도서관내.webp",
        "category": "school"
    },
    {
        "file": "박효빈_베라알바_현타.webp",
        "category": "person"
    },
    {
        "file": "박효빈_분노.webp",
        "category": "person"
    },
    {
        "file": "박효빈_브리핑.webp",
        "category": "person"
    },
    {
        "file": "박효빈_비판및논란(...)_？_여친(임세하)_수면중_터치(...).webp",
        "category": "event"
    },
    {
        "file": "박효빈_빵_셀카.webp",
        "category": "food"
    },
    {
        "file": "박효빈_사과.webp",
        "category": "event"
    },
    {
        "file": "박효빈_새벽방문.webp",
        "category": "person"
    },
    {
        "file": "박효빈_시장_A플러스_성적표.webp",
        "category": "facility_com"
    },
    {
        "file": "박효빈_시장_격노성명.webp",
        "category": "facility_com"
    },
    {
        "file": "박효빈_시장_연설.webp",
        "category": "facility_com"
    },
    {
        "file": "박효빈_시장_웃음.webp",
        "category": "facility_com"
    },
    {
        "file": "박효빈_유세.webp",
        "category": "event"
    },
    {
        "file": "박효빈_윤석열계엄령탄핵촉구_촛불시위.webp",
        "category": "event"
    },
    {
        "file": "박효빈_윤석열규탄시위.webp",
        "category": "event"
    },
    {
        "file": "박효빈_전재수_MOU.webp",
        "category": "event"
    },
    {
        "file": "박효빈_정책론_빡공_효빈대중앙도서관.webp",
        "category": "school"
    },
    {
        "file": "박효빈_정책발표.webp",
        "category": "person"
    },
    {
        "file": "박효빈_중학졸업(2019).webp",
        "category": "person"
    },
    {
        "file": "박효빈_청년간담회.webp",
        "category": "event"
    },
    {
        "file": "박효빈_청년정책포럼(2024).webp",
        "category": "event"
    },
    {
        "file": "박효빈_취임식.webp",
        "category": "event"
    },
    {
        "file": "박효빈_카논등신대.webp",
        "category": "person"
    },
    {
        "file": "박효빈_키다니(2024).webp",
        "category": "person"
    },
    {
        "file": "박효빈_희망tv.webp",
        "category": "person"
    },
    {
        "file": "박효빈맥날.webp",
        "category": "food"
    },
    {
        "file": "박효빈몸.png.webp",
        "category": "person"
    },
    {
        "file": "박효빈불복종.webp",
        "category": "person"
    },
    {
        "file": "박효빈시장 집무실.webp",
        "category": "facility_com"
    },
    {
        "file": "박효빈재선.webp",
        "category": "person"
    },
    {
        "file": "박효빈지지율.webp",
        "category": "person"
    },
    {
        "file": "반덕수.webp",
        "category": "etc"
    },
    {
        "file": "반양군 농어촌버스.webp",
        "category": "bus"
    },
    {
        "file": "반양군.webp",
        "category": "etc"
    },
    {
        "file": "반양군청.webp",
        "category": "facility_gov"
    },
    {
        "file": "반양역.webp",
        "category": "station"
    },
    {
        "file": "발레.webp",
        "category": "etc"
    },
    {
        "file": "발연기 사과.webp",
        "category": "event"
    },
    {
        "file": "밥솥 해체쇼.webp",
        "category": "etc"
    },
    {
        "file": "방거역.webp",
        "category": "station"
    },
    {
        "file": "방거역_승강장.webp",
        "category": "station"
    },
    {
        "file": "방도도서관.webp",
        "category": "school"
    },
    {
        "file": "방산대학교_UI.svg",
        "category": "school"
    },
    {
        "file": "방산시 시내버스.webp",
        "category": "bus"
    },
    {
        "file": "방산시.webp",
        "category": "illustration"
    },
    {
        "file": "방산시청.webp",
        "category": "facility_gov"
    },
    {
        "file": "방산역.webp",
        "category": "station"
    },
    {
        "file": "방산역_승강장.webp",
        "category": "station"
    },
    {
        "file": "방산항.webp",
        "category": "person"
    },
    {
        "file": "배도환.webp",
        "category": "person"
    },
    {
        "file": "배려석인형.webp",
        "category": "merch"
    },
    {
        "file": "배선 장인.webp",
        "category": "etc"
    },
    {
        "file": "배칠두.webp",
        "category": "person"
    },
    {
        "file": "배홍로.webp",
        "category": "road"
    },
    {
        "file": "백남역.webp",
        "category": "station"
    },
    {
        "file": "백남역_승강장.webp",
        "category": "station"
    },
    {
        "file": "백민우.webp",
        "category": "person"
    },
    {
        "file": "백수안.webp",
        "category": "person"
    },
    {
        "file": "백우진_연구원.webp",
        "category": "facility_gov"
    },
    {
        "file": "백천역_승강장.webp",
        "category": "station"
    },
    {
        "file": "백합공원역_승강장.webp",
        "category": "station"
    },
    {
        "file": "버거킹_로고.svg",
        "category": "logo"
    },
    {
        "file": "번영로.webp",
        "category": "road"
    },
    {
        "file": "번전역.webp",
        "category": "station"
    },
    {
        "file": "번전역_승강장.webp",
        "category": "station"
    },
    {
        "file": "법무법인청엽.webp",
        "category": "etc"
    },
    {
        "file": "법원로.webp",
        "category": "facility_gov"
    },
    {
        "file": "법전원역_승강장.webp",
        "category": "station"
    },
    {
        "file": "법카 기생충.webp",
        "category": "etc"
    },
    {
        "file": "법카의 진짜 주류.webp",
        "category": "etc"
    },
    {
        "file": "베르데홀 엠마 .webp",
        "category": "facility_com"
    },
    {
        "file": "베르데홀.webp",
        "category": "facility_com"
    },
    {
        "file": "베르데홀역_승강장.webp",
        "category": "station"
    },
    {
        "file": "베테랑의 여유.webp",
        "category": "etc"
    },
    {
        "file": "베트남.svg",
        "category": "logo"
    },
    {
        "file": "별 모양 헤어핀.webp",
        "category": "etc"
    },
    {
        "file": "별명 제조기.webp",
        "category": "etc"
    },
    {
        "file": "보건소.svg",
        "category": "facility_com"
    },
    {
        "file": "보건진료소역_승강장.webp",
        "category": "station"
    },
    {
        "file": "보도블록 실사 측정.webp",
        "category": "etc"
    },
    {
        "file": "보라빛 맑은 눈의 광인.webp",
        "category": "etc"
    },
    {
        "file": "보라색 테마 열차.webp",
        "category": "train"
    },
    {
        "file": "보몽로.webp",
        "category": "road"
    },
    {
        "file": "보몽역_승강장.webp",
        "category": "station"
    },
    {
        "file": "보몽역_아유무_광고.webp",
        "category": "station"
    },
    {
        "file": "보몽역_전경.webp",
        "category": "station"
    },
    {
        "file": "보통역_승강장.webp",
        "category": "station"
    },
    {
        "file": "보통의_거리.webp",
        "category": "road"
    },
    {
        "file": "보험료.webp",
        "category": "etc"
    },
    {
        "file": "복구역.webp",
        "category": "station"
    },
    {
        "file": "복권.webp",
        "category": "etc"
    },
    {
        "file": "복선무시_코드기만_증거.webp",
        "category": "etc"
    },
    {
        "file": "복수역_전경.webp",
        "category": "station"
    },
    {
        "file": "복지대학로.webp",
        "category": "school"
    },
    {
        "file": "복지와 통제의 조화.webp",
        "category": "etc"
    },
    {
        "file": "복지정책학과 1학년.webp",
        "category": "etc"
    },
    {
        "file": "복합쇼핑몰.webp",
        "category": "etc"
    },
    {
        "file": "본부. 충승당역_승강장.webp",
        "category": "station"
    },
    {
        "file": "볼륨감의 폭력 (2).webp",
        "category": "etc"
    },
    {
        "file": "볼륨감의 폭력.webp",
        "category": "etc"
    },
    {
        "file": "볼륨감의 폭력22.webp",
        "category": "etc"
    },
    {
        "file": "봄날의 벚꽃 출사.webp",
        "category": "etc"
    },
    {
        "file": "봇지마을역_승강장.webp",
        "category": "station"
    },
    {
        "file": "봉동역_승강장.webp",
        "category": "station"
    },
    {
        "file": "봉동역_전경.webp",
        "category": "station"
    },
    {
        "file": "봉인 해제, E급 장갑.webp",
        "category": "etc"
    },
    {
        "file": "부남역.webp",
        "category": "station"
    },
    {
        "file": "부남역_승강장.webp",
        "category": "station"
    },
    {
        "file": "부동산필승_기자.webp",
        "category": "person"
    },
    {
        "file": "부산.svg",
        "category": "logo"
    },
    {
        "file": "부산광역시.svg",
        "category": "logo"
    },
    {
        "file": "부산대.svg",
        "category": "logo"
    },
    {
        "file": "부산시설공단_핸드볼_로고.svg",
        "category": "facility_gov"
    },
    {
        "file": "부서원.webp",
        "category": "etc"
    },
    {
        "file": "부시도_라이더_협박.webp",
        "category": "etc"
    },
    {
        "file": "부시선라회동.webp",
        "category": "illustration"
    },
    {
        "file": "부자_동반_이동.webp",
        "category": "etc"
    },
    {
        "file": "부진순환로.webp",
        "category": "road"
    },
    {
        "file": "부진역_광역철도_승강장.webp",
        "category": "station"
    },
    {
        "file": "부진역_승강장.webp",
        "category": "station"
    },
    {
        "file": "부진역_전경.webp",
        "category": "station"
    },
    {
        "file": "부천FC_로고.svg",
        "category": "logo"
    },
    {
        "file": "부한역_승강장.webp",
        "category": "station"
    },
    {
        "file": "부한역_전경.webp",
        "category": "station"
    },
    {
        "file": "북견신호장.webp",
        "category": "station"
    },
    {
        "file": "북계성역.webp",
        "category": "station"
    },
    {
        "file": "북계성역_승강장.webp",
        "category": "station"
    },
    {
        "file": "북구 행정동 지도.webp",
        "category": "map"
    },
    {
        "file": "북구.webp",
        "category": "etc"
    },
    {
        "file": "북구_서부어린이회관_승강장.webp",
        "category": "station"
    },
    {
        "file": "북구_흰색로고.webp",
        "category": "logo"
    },
    {
        "file": "북구청.webp",
        "category": "facility_gov"
    },
    {
        "file": "북구청역 3번출구 .webp",
        "category": "facility_gov"
    },
    {
        "file": "북구청역_1호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "북구청역_6호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "북문로역_승강장.webp",
        "category": "station"
    },
    {
        "file": "북보로.webp",
        "category": "road"
    },
    {
        "file": "북부 기숙사역_승강장.webp",
        "category": "station"
    },
    {
        "file": "북예역.webp",
        "category": "station"
    },
    {
        "file": "북예역_승강장.webp",
        "category": "station"
    },
    {
        "file": "북장기역_승강장.webp",
        "category": "station"
    },
    {
        "file": "북택역_승강장.webp",
        "category": "station"
    },
    {
        "file": "북택역_전경.webp",
        "category": "station"
    },
    {
        "file": "북효빈역_2호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "북효빈역_3호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "북효빈역_일반열차_승강장.webp",
        "category": "station"
    },
    {
        "file": "북효빈역_일반열차_전경.webp",
        "category": "station"
    },
    {
        "file": "분 단위 시간표.webp",
        "category": "document"
    },
    {
        "file": "분덕역_승강장.webp",
        "category": "station"
    },
    {
        "file": "분주군 농어촌버스.webp",
        "category": "bus"
    },
    {
        "file": "분주군.webp",
        "category": "etc"
    },
    {
        "file": "분주군청.webp",
        "category": "facility_gov"
    },
    {
        "file": "붕우로.webp",
        "category": "road"
    },
    {
        "file": "블랙 커피 한 잔.webp",
        "category": "food"
    },
    {
        "file": "블루버드_멘토단.webp",
        "category": "etc"
    },
    {
        "file": "블루투스스피커.webp",
        "category": "etc"
    },
    {
        "file": "비 오는 날의 1호선.webp",
        "category": "etc"
    },
    {
        "file": "비 오는 날의 8호선.webp",
        "category": "etc"
    },
    {
        "file": "비 오는 날의 수채화.webp",
        "category": "etc"
    },
    {
        "file": "비글 막내의 성장.webp",
        "category": "etc"
    },
    {
        "file": "비동역_승강장.webp",
        "category": "station"
    },
    {
        "file": "비마리유적지구역_승강장.webp",
        "category": "station"
    },
    {
        "file": "비마역_승강장.webp",
        "category": "station"
    },
    {
        "file": "비밀 ASMR 폴더.webp",
        "category": "etc"
    },
    {
        "file": "비밀 폴더 '힐링'.webp",
        "category": "etc"
    },
    {
        "file": "비밀 폴더 관리.webp",
        "category": "etc"
    },
    {
        "file": "비밀의 성지순례.webp",
        "category": "etc"
    },
    {
        "file": "비상 구급상자.webp",
        "category": "etc"
    },
    {
        "file": "비스트로 정루.webp",
        "category": "etc"
    },
    {
        "file": "비싼 디저트 극혐.webp",
        "category": "food"
    },
    {
        "file": "비싼 디저트의 노예.webp",
        "category": "food"
    },
    {
        "file": "비천시 시내버스.webp",
        "category": "bus"
    },
    {
        "file": "비천시.webp",
        "category": "etc"
    },
    {
        "file": "비천시청.webp",
        "category": "facility_gov"
    },
    {
        "file": "비천역.webp",
        "category": "station"
    },
    {
        "file": "비천역_승강장.webp",
        "category": "station"
    },
    {
        "file": "비천항.webp",
        "category": "etc"
    },
    {
        "file": "비천항역.webp",
        "category": "station"
    },
    {
        "file": "비트코인.webp",
        "category": "etc"
    },
    {
        "file": "빈 마르가레테.webp",
        "category": "character"
    },
    {
        "file": "빈성구청.webp",
        "category": "facility_gov"
    },
    {
        "file": "빈전역_승강장.webp",
        "category": "station"
    },
    {
        "file": "빈전역_전경.webp",
        "category": "station"
    },
    {
        "file": "빈주 1호선 전동차.webp",
        "category": "train"
    },
    {
        "file": "빈주 2호선 신입.webp",
        "category": "etc"
    },
    {
        "file": "빈주 2호선 전동차.webp",
        "category": "train"
    },
    {
        "file": "빈주1호선 디저트세트.webp",
        "category": "food"
    },
    {
        "file": "빈주1호선 콜라보카페.webp",
        "category": "merch"
    },
    {
        "file": "빈주1호선_노선도.webp",
        "category": "map"
    },
    {
        "file": "빈주1호선콜캎메뉴판.webp",
        "category": "etc"
    },
    {
        "file": "빈주2호선 콜라보카페.webp",
        "category": "merch"
    },
    {
        "file": "빈주2호선 타로케익.webp",
        "category": "food"
    },
    {
        "file": "빈주2호선_노선도.webp",
        "category": "map"
    },
    {
        "file": "빈주2호선콜캎메뉴판.webp",
        "category": "etc"
    },
    {
        "file": "빈주_1호선_박빛나_퍼스널_아이콘.svg",
        "category": "logo"
    },
    {
        "file": "빈주_2호선_김소빈_퍼스널_아이콘.svg",
        "category": "logo"
    },
    {
        "file": "빈주광역전철_전동차.webp",
        "category": "train"
    },
    {
        "file": "빈주교육대학교.svg",
        "category": "school"
    },
    {
        "file": "빈주교육대학교.webp",
        "category": "school"
    },
    {
        "file": "빈주교육대학교_UI.svg",
        "category": "school"
    },
    {
        "file": "빈주권_노선도.webp",
        "category": "map"
    },
    {
        "file": "빈주권광역철도_노선도.webp",
        "category": "map"
    },
    {
        "file": "빈주대학교_UI.webp",
        "category": "school"
    },
    {
        "file": "빈주도시철도공사_로고.svg",
        "category": "facility_gov"
    },
    {
        "file": "빈주동신역_승강장.webp",
        "category": "station"
    },
    {
        "file": "빈주보건대학_UI.svg",
        "category": "school"
    },
    {
        "file": "빈주시 시내버스.webp",
        "category": "bus"
    },
    {
        "file": "빈주시.webp",
        "category": "etc"
    },
    {
        "file": "빈주시청.webp",
        "category": "facility_gov"
    },
    {
        "file": "빈주역_1호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "빈주역_2호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "빈주역_광역철도_승강장.webp",
        "category": "station"
    },
    {
        "file": "빈주역_일반철도_승강장.webp",
        "category": "station"
    },
    {
        "file": "빈주역_전경.webp",
        "category": "station"
    },
    {
        "file": "빈주의 빛.webp",
        "category": "etc"
    },
    {
        "file": "빈주의 아침.webp",
        "category": "etc"
    },
    {
        "file": "빈주장기점.webp",
        "category": "etc"
    },
    {
        "file": "빈주천조점.webp",
        "category": "etc"
    },
    {
        "file": "빈효고속선_노선도.webp",
        "category": "bus"
    },
    {
        "file": "빈효선 고해역 입구.webp",
        "category": "etc"
    },
    {
        "file": "빈효선 굿즈샵.webp",
        "category": "merch"
    },
    {
        "file": "빈효선 마스코트.webp",
        "category": "character"
    },
    {
        "file": "빈효선 마시로 열차.webp",
        "category": "train"
    },
    {
        "file": "빈효선 전노아 심해푸딩.webp",
        "category": "food"
    },
    {
        "file": "빈효선 콜라보카페.webp",
        "category": "merch"
    },
    {
        "file": "빈효선_개통식.webp",
        "category": "event"
    },
    {
        "file": "빈효선_노선도.webp",
        "category": "map"
    },
    {
        "file": "빈효선_운행모습.webp",
        "category": "etc"
    },
    {
        "file": "빈효선_전노아_열차.webp",
        "category": "train"
    },
    {
        "file": "빈효선_텅빈행사장.webp",
        "category": "event"
    },
    {
        "file": "빈효선광역전철.webp",
        "category": "etc"
    },
    {
        "file": "빈효선콜캎메뉴판.webp",
        "category": "etc"
    },
    {
        "file": "빙과호.webp",
        "category": "etc"
    },
    {
        "file": "빙천역_승강장.webp",
        "category": "station"
    },
    {
        "file": "빨간 리본의 천사.webp",
        "category": "etc"
    },
    {
        "file": "빨간 바인더의 악마.webp",
        "category": "etc"
    },
    {
        "file": "빵 하나로 세계 평화.webp",
        "category": "food"
    },
    {
        "file": "빵과_장미.webp",
        "category": "food"
    },
    {
        "file": "뼈 있는 생선 극혐.webp",
        "category": "etc"
    },
    {
        "file": "뼈해장국 특대.webp",
        "category": "etc"
    },
    {
        "file": "뿌리빛로.webp",
        "category": "road"
    },
    {
        "file": "쁘띠레일루미네.webp",
        "category": "etc"
    },
    {
        "file": "쁘띠레일루미네_키비주얼.webp",
        "category": "etc"
    },
    {
        "file": "사가당공원.webp",
        "category": "landmark"
    },
    {
        "file": "사가당공원역_승강장.webp",
        "category": "station"
    },
    {
        "file": "사가당병원.svg",
        "category": "facility_com"
    },
    {
        "file": "사가당역_3호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "사가당역_4호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "사가당역_승강장.webp",
        "category": "station"
    },
    {
        "file": "사각지대의 덕질.webp",
        "category": "etc"
    },
    {
        "file": "사각지대의 릴스.webp",
        "category": "etc"
    },
    {
        "file": "사내 체육대회.webp",
        "category": "event"
    },
    {
        "file": "사노역_1호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "사노역_6호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "사능고등학교.webp",
        "category": "school"
    },
    {
        "file": "사능동 로컬 빵집.webp",
        "category": "food"
    },
    {
        "file": "사능동 빵지순례 런.webp",
        "category": "food"
    },
    {
        "file": "사능동 빵지순례.webp",
        "category": "food"
    },
    {
        "file": "사능동.webp",
        "category": "etc"
    },
    {
        "file": "사능동1가역_승강장.webp",
        "category": "station"
    },
    {
        "file": "사능동3가역_승강장.webp",
        "category": "station"
    },
    {
        "file": "사능동의 오후.webp",
        "category": "etc"
    },
    {
        "file": "사능복지관.webp",
        "category": "etc"
    },
    {
        "file": "사능복지관역_승강장.webp",
        "category": "station"
    },
    {
        "file": "사능삼거리역_승강장.webp",
        "category": "station"
    },
    {
        "file": "사능역_승강장.webp",
        "category": "station"
    },
    {
        "file": "사능중학교.webp",
        "category": "school"
    },
    {
        "file": "사랑바위.webp",
        "category": "etc"
    },
    {
        "file": "사무실.webp",
        "category": "etc"
    },
    {
        "file": "사복 나들이.webp",
        "category": "illustration"
    },
    {
        "file": "사복역_승강장.webp",
        "category": "station"
    },
    {
        "file": "사복의 갭 모에.webp",
        "category": "illustration"
    },
    {
        "file": "사복의 청순함.webp",
        "category": "illustration"
    },
    {
        "file": "사사키 시온.webp",
        "category": "etc"
    },
    {
        "file": "사생활 데이터 보호.webp",
        "category": "etc"
    },
    {
        "file": "사시데마리아_성명.webp",
        "category": "character"
    },
    {
        "file": "사아야 애니..webp",
        "category": "character"
    },
    {
        "file": "사아야 열차 내부.webp",
        "category": "train"
    },
    {
        "file": "사야리미.webp",
        "category": "character"
    },
    {
        "file": "사야병원.webp",
        "category": "facility_com"
    },
    {
        "file": "사야역_승강장.webp",
        "category": "station"
    },
    {
        "file": "사연역_승강장.webp",
        "category": "station"
    },
    {
        "file": "사우나의 진실.webp",
        "category": "etc"
    },
    {
        "file": "사유리 버그 발생.webp",
        "category": "person"
    },
    {
        "file": "사유리 텐션 폭발.webp",
        "category": "person"
    },
    {
        "file": "사이버 펑크 미학.webp",
        "category": "etc"
    },
    {
        "file": "사이버안전.webp",
        "category": "etc"
    },
    {
        "file": "사이토 슈카.webp",
        "category": "person"
    },
    {
        "file": "사이토 스미레.webp",
        "category": "character"
    },
    {
        "file": "사중역_승강장.webp",
        "category": "station"
    },
    {
        "file": "사증역_승강장.webp",
        "category": "station"
    },
    {
        "file": "사쿠라 아야네.webp",
        "category": "person"
    },
    {
        "file": "사쿠라우치 리코.webp",
        "category": "character"
    },
    {
        "file": "사쿠라코지 키나코.webp",
        "category": "character"
    },
    {
        "file": "사회복지경영학과 과방.webp",
        "category": "school"
    },
    {
        "file": "사회복지대역_승강장.webp",
        "category": "station"
    },
    {
        "file": "사회복지정책론.webp",
        "category": "etc"
    },
    {
        "file": "사회복지정책론_수업_사회복지학대_내부.webp",
        "category": "etc"
    },
    {
        "file": "사회복지정책학과_과잠.webp",
        "category": "illustration"
    },
    {
        "file": "사회복지학 대학 7호관.webp",
        "category": "school"
    },
    {
        "file": "사회복지학대학_7호관.webp",
        "category": "school"
    },
    {
        "file": "산곡건설.webp",
        "category": "etc"
    },
    {
        "file": "산곡건설_로고.webp",
        "category": "logo"
    },
    {
        "file": "산취역_빈효선_승강장.webp",
        "category": "station"
    },
    {
        "file": "산취역_일반열차_상행_승강장.webp",
        "category": "station"
    },
    {
        "file": "산취역_일반열차_하행_승강장.webp",
        "category": "station"
    },
    {
        "file": "산취역_전경.webp",
        "category": "station"
    },
    {
        "file": "산취조향로.webp",
        "category": "road"
    },
    {
        "file": "산타 알바생.webp",
        "category": "person"
    },
    {
        "file": "산탄로.webp",
        "category": "road"
    },
    {
        "file": "산형역 외부 이미지.webp",
        "category": "etc"
    },
    {
        "file": "산형역_승강장.webp",
        "category": "station"
    },
    {
        "file": "산형역_전경.webp",
        "category": "station"
    },
    {
        "file": "산홍역_승강장.webp",
        "category": "station"
    },
    {
        "file": "삼각역_승강장.webp",
        "category": "station"
    },
    {
        "file": "삼선대학교.webp",
        "category": "school"
    },
    {
        "file": "삼선대학교_UI.webp",
        "category": "school"
    },
    {
        "file": "삼선의료원_로고.webp",
        "category": "facility_com"
    },
    {
        "file": "삼선의료원_전경.webp",
        "category": "facility_com"
    },
    {
        "file": "삼성_라이온즈_로고.svg",
        "category": "logo"
    },
    {
        "file": "삼성_썬더스_로고.svg",
        "category": "logo"
    },
    {
        "file": "삼성전자_효빈.webp",
        "category": "etc"
    },
    {
        "file": "삼은역_승강장.webp",
        "category": "station"
    },
    {
        "file": "삼은역_전경.webp",
        "category": "station"
    },
    {
        "file": "삼척시청_핸드볼_로고.svg",
        "category": "facility_gov"
    },
    {
        "file": "삽곡대학교.svg",
        "category": "school"
    },
    {
        "file": "삽곡역.webp",
        "category": "station"
    },
    {
        "file": "삽곡역_승강장.webp",
        "category": "station"
    },
    {
        "file": "상가역_승강장.webp",
        "category": "station"
    },
    {
        "file": "상공의 극대노 사자후.webp",
        "category": "etc"
    },
    {
        "file": "상과대 학생회관.webp",
        "category": "school"
    },
    {
        "file": "상과대 학생회관역_승강장.webp",
        "category": "station"
    },
    {
        "file": "상과대. 학생회관역_승강장.webp",
        "category": "station"
    },
    {
        "file": "상두역.webp",
        "category": "station"
    },
    {
        "file": "상두역_승강장.webp",
        "category": "station"
    },
    {
        "file": "상만역.webp",
        "category": "station"
    },
    {
        "file": "상만역_1호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "상만역_2호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "상무피닉스_로고.svg",
        "category": "logo"
    },
    {
        "file": "상빈선_노선도.webp",
        "category": "map"
    },
    {
        "file": "상서로.webp",
        "category": "road"
    },
    {
        "file": "상술현.webp",
        "category": "etc"
    },
    {
        "file": "상신고.webp",
        "category": "etc"
    },
    {
        "file": "상안군 농어촌버스.webp",
        "category": "bus"
    },
    {
        "file": "상안군.webp",
        "category": "etc"
    },
    {
        "file": "상안군청.webp",
        "category": "facility_gov"
    },
    {
        "file": "상안역.webp",
        "category": "station"
    },
    {
        "file": "상안역_승강장.webp",
        "category": "station"
    },
    {
        "file": "상원초등학교.webp",
        "category": "school"
    },
    {
        "file": "상원초등학교역_승강장.webp",
        "category": "station"
    },
    {
        "file": "상유하.webp",
        "category": "etc"
    },
    {
        "file": "상자로.webp",
        "category": "road"
    },
    {
        "file": "상자산_전경.webp",
        "category": "landmark"
    },
    {
        "file": "상정역.webp",
        "category": "station"
    },
    {
        "file": "상춘성.webp",
        "category": "etc"
    },
    {
        "file": "상하이풍경.webp",
        "category": "landscape"
    },
    {
        "file": "색수고등학교로고.svg",
        "category": "school"
    },
    {
        "file": "색수시장역_승강장.webp",
        "category": "station"
    },
    {
        "file": "색수중학교로고.svg",
        "category": "school"
    },
    {
        "file": "색수초등학교로고.svg",
        "category": "school"
    },
    {
        "file": "색수통.webp",
        "category": "etc"
    },
    {
        "file": "생곡초등학교.webp",
        "category": "school"
    },
    {
        "file": "생명 유지 장치.webp",
        "category": "etc"
    },
    {
        "file": "생명과학 1등급.webp",
        "category": "etc"
    },
    {
        "file": "생명수 수혈.webp",
        "category": "food"
    },
    {
        "file": "생일앨범리코.webp",
        "category": "merch"
    },
    {
        "file": "서고준.webp",
        "category": "person"
    },
    {
        "file": "서구 행정동 지도.webp",
        "category": "map"
    },
    {
        "file": "서구.webp",
        "category": "etc"
    },
    {
        "file": "서구_흰색로고.webp",
        "category": "logo"
    },
    {
        "file": "서구청.webp",
        "category": "facility_gov"
    },
    {
        "file": "서나역.webp",
        "category": "station"
    },
    {
        "file": "서나역_승강장.webp",
        "category": "station"
    },
    {
        "file": "서남시장.webp",
        "category": "facility_com"
    },
    {
        "file": "서남역_승강장.webp",
        "category": "station"
    },
    {
        "file": "서도역_승강장.webp",
        "category": "station"
    },
    {
        "file": "서류철 팩폭.webp",
        "category": "etc"
    },
    {
        "file": "서명.webp",
        "category": "logo"
    },
    {
        "file": "서목01.webp",
        "category": "bus"
    },
    {
        "file": "서목02.webp",
        "category": "bus"
    },
    {
        "file": "서목아쿠아1차아파트.webp",
        "category": "facility_com"
    },
    {
        "file": "서목아쿠아2차아파트.webp",
        "category": "facility_com"
    },
    {
        "file": "서목역_승강장.webp",
        "category": "station"
    },
    {
        "file": "서목역_전경.webp",
        "category": "station"
    },
    {
        "file": "서목읍주말농장.webp",
        "category": "etc"
    },
    {
        "file": "서목해양공단_전경.webp",
        "category": "facility_gov"
    },
    {
        "file": "서무련(남성).webp",
        "category": "person"
    },
    {
        "file": "서무련.webp",
        "category": "person"
    },
    {
        "file": "서무련_빗속사죄.webp",
        "category": "person"
    },
    {
        "file": "서무련_사죄시위.webp",
        "category": "event"
    },
    {
        "file": "서버실 대첩.webp",
        "category": "etc"
    },
    {
        "file": "서버실의 지배자.webp",
        "category": "etc"
    },
    {
        "file": "서수역_승강장.webp",
        "category": "station"
    },
    {
        "file": "서수진_원장.webp",
        "category": "person"
    },
    {
        "file": "서신포역_승강장.webp",
        "category": "station"
    },
    {
        "file": "서울대.svg",
        "category": "logo"
    },
    {
        "file": "서울시청.webp",
        "category": "facility_gov"
    },
    {
        "file": "서울시청_핸드볼_로고.svg",
        "category": "facility_gov"
    },
    {
        "file": "서울특별시.svg",
        "category": "logo"
    },
    {
        "file": "서원동1가역_승강장.webp",
        "category": "station"
    },
    {
        "file": "서원동2가역_승강장.webp",
        "category": "station"
    },
    {
        "file": "서유원.webp",
        "category": "person"
    },
    {
        "file": "서윤수.webp",
        "category": "person"
    },
    {
        "file": "서재.webp",
        "category": "etc"
    },
    {
        "file": "서중역.webp",
        "category": "station"
    },
    {
        "file": "서중역_승강장.webp",
        "category": "station"
    },
    {
        "file": "서중역_역사.webp",
        "category": "station"
    },
    {
        "file": "서지수_웹툰작가.webp",
        "category": "etc"
    },
    {
        "file": "서진고등학교.svg",
        "category": "school"
    },
    {
        "file": "서진대학_UI.svg",
        "category": "school"
    },
    {
        "file": "서진시 시내버스.webp",
        "category": "bus"
    },
    {
        "file": "서진시.webp",
        "category": "etc"
    },
    {
        "file": "서진시청.webp",
        "category": "facility_gov"
    },
    {
        "file": "서진역.webp",
        "category": "station"
    },
    {
        "file": "서진역_승강장.webp",
        "category": "station"
    },
    {
        "file": "서진항.webp",
        "category": "person"
    },
    {
        "file": "서팔역_승강장.webp",
        "category": "station"
    },
    {
        "file": "서팔역_전경.webp",
        "category": "station"
    },
    {
        "file": "서해경전철_노선도.webp",
        "category": "map"
    },
    {
        "file": "서해시 시내버스.webp",
        "category": "bus"
    },
    {
        "file": "서해시.webp",
        "category": "etc"
    },
    {
        "file": "서해시청.webp",
        "category": "facility_gov"
    },
    {
        "file": "서해역.webp",
        "category": "station"
    },
    {
        "file": "서해역_승강장.webp",
        "category": "station"
    },
    {
        "file": "서해점.webp",
        "category": "etc"
    },
    {
        "file": "서해항.webp",
        "category": "person"
    },
    {
        "file": "서해항역.webp",
        "category": "station"
    },
    {
        "file": "서해해양대학교.webp",
        "category": "school"
    },
    {
        "file": "석서역.webp",
        "category": "station"
    },
    {
        "file": "석서역_승강장.webp",
        "category": "station"
    },
    {
        "file": "석창군 농어촌버스.webp",
        "category": "bus"
    },
    {
        "file": "석창군.webp",
        "category": "etc"
    },
    {
        "file": "석창군청.webp",
        "category": "facility_gov"
    },
    {
        "file": "석창역.webp",
        "category": "station"
    },
    {
        "file": "석창역_승강장.webp",
        "category": "station"
    },
    {
        "file": "석화 상태.webp",
        "category": "etc"
    },
    {
        "file": "선곡군 농어촌버스.webp",
        "category": "bus"
    },
    {
        "file": "선곡군.webp",
        "category": "etc"
    },
    {
        "file": "선곡군청.webp",
        "category": "facility_gov"
    },
    {
        "file": "선곡역.webp",
        "category": "station"
    },
    {
        "file": "선빈대학교_UI.svg",
        "category": "school"
    },
    {
        "file": "선자대학교.webp",
        "category": "school"
    },
    {
        "file": "선자대학교_UI.webp",
        "category": "school"
    },
    {
        "file": "선행 데뷔의 여유.webp",
        "category": "etc"
    },
    {
        "file": "성덕과 숨덕의 조우.webp",
        "category": "character"
    },
    {
        "file": "성덕의 오타게.webp",
        "category": "character"
    },
    {
        "file": "성선민.webp",
        "category": "person"
    },
    {
        "file": "성선설.webp",
        "category": "person"
    },
    {
        "file": "성설로.webp",
        "category": "road"
    },
    {
        "file": "성예지.webp",
        "category": "person"
    },
    {
        "file": "성우 오디션() 의혹.webp",
        "category": "person"
    },
    {
        "file": "성우 오디션의혹.webp",
        "category": "person"
    },
    {
        "file": "성우_단체_방문.webp",
        "category": "person"
    },
    {
        "file": "성우_미소.webp",
        "category": "person"
    },
    {
        "file": "성주현.webp",
        "category": "person"
    },
    {
        "file": "성지언.webp",
        "category": "person"
    },
    {
        "file": "성택대학교 (2).webp",
        "category": "school"
    },
    {
        "file": "성택대학교.webp",
        "category": "school"
    },
    {
        "file": "성택대학교_UI.svg",
        "category": "school"
    },
    {
        "file": "세금.webp",
        "category": "etc"
    },
    {
        "file": "세금계산.webp",
        "category": "document"
    },
    {
        "file": "세금폭탄.webp",
        "category": "etc"
    },
    {
        "file": "세라스 야나기다 릴리엔펠트.webp",
        "category": "etc"
    },
    {
        "file": "세무조사.webp",
        "category": "etc"
    },
    {
        "file": "세무지구역_승강장.webp",
        "category": "station"
    },
    {
        "file": "세무지구역_전경.webp",
        "category": "station"
    },
    {
        "file": "세이브존_로고.svg",
        "category": "logo"
    },
    {
        "file": "세종특별자치시.svg",
        "category": "logo"
    },
    {
        "file": "세츠나급행버스.webp",
        "category": "bus"
    },
    {
        "file": "세타 카오루.webp",
        "category": "etc"
    },
    {
        "file": "세토 아사미.webp",
        "category": "etc"
    },
    {
        "file": "세하로.webp",
        "category": "road"
    },
    {
        "file": "센고쿠 유노.webp",
        "category": "etc"
    },
    {
        "file": "소금하우스 (2).webp",
        "category": "etc"
    },
    {
        "file": "소금하우스 (3).webp",
        "category": "etc"
    },
    {
        "file": "소금하우스 (4).webp",
        "category": "etc"
    },
    {
        "file": "소금하우스.webp",
        "category": "etc"
    },
    {
        "file": "소노_스카이거너스_로고.svg",
        "category": "logo"
    },
    {
        "file": "소노다 우미.webp",
        "category": "character"
    },
    {
        "file": "소득의 구분.webp",
        "category": "document"
    },
    {
        "file": "소맥 제조기.webp",
        "category": "food"
    },
    {
        "file": "소산현.webp",
        "category": "etc"
    },
    {
        "file": "소상리.webp",
        "category": "etc"
    },
    {
        "file": "소심대쪽의 일갈.webp",
        "category": "etc"
    },
    {
        "file": "소요중학교.webp",
        "category": "school"
    },
    {
        "file": "소원01.webp",
        "category": "bus"
    },
    {
        "file": "소원02.webp",
        "category": "bus"
    },
    {
        "file": "소원역_승강장.webp",
        "category": "station"
    },
    {
        "file": "소음·진동 감지기.webp",
        "category": "etc"
    },
    {
        "file": "소장역_승강장.webp",
        "category": "station"
    },
    {
        "file": "소장지구.webp",
        "category": "facility_com"
    },
    {
        "file": "소조로.webp",
        "category": "road"
    },
    {
        "file": "소조역_승강장.webp",
        "category": "station"
    },
    {
        "file": "소조역점.webp",
        "category": "station"
    },
    {
        "file": "소조역쿠키.webp",
        "category": "etc"
    },
    {
        "file": "소진로.webp",
        "category": "road"
    },
    {
        "file": "소진여객.webp",
        "category": "bus"
    },
    {
        "file": "소판권.webp",
        "category": "etc"
    },
    {
        "file": "소피.webp",
        "category": "etc"
    },
    {
        "file": "소하 맵 완성의 날.webp",
        "category": "etc"
    },
    {
        "file": "소하_소율_식사.webp",
        "category": "food"
    },
    {
        "file": "소하로.webp",
        "category": "road"
    },
    {
        "file": "소홍문.webp",
        "category": "etc"
    },
    {
        "file": "소흥로.webp",
        "category": "road"
    },
    {
        "file": "손수건.webp",
        "category": "person"
    },
    {
        "file": "송덕역_승강장.webp",
        "category": "station"
    },
    {
        "file": "송선민.webp",
        "category": "person"
    },
    {
        "file": "송선영.webp",
        "category": "person"
    },
    {
        "file": "송연우.webp",
        "category": "person"
    },
    {
        "file": "송우진_작가.webp",
        "category": "etc"
    },
    {
        "file": "송원민.webp",
        "category": "person"
    },
    {
        "file": "송원오택역.webp",
        "category": "station"
    },
    {
        "file": "송원오택역_승강장.webp",
        "category": "station"
    },
    {
        "file": "송재섭.webp",
        "category": "person"
    },
    {
        "file": "송지훈.webp",
        "category": "person"
    },
    {
        "file": "송천역_전경.webp",
        "category": "station"
    },
    {
        "file": "송포여객.webp",
        "category": "bus"
    },
    {
        "file": "송한유.webp",
        "category": "person"
    },
    {
        "file": "쇼우 란쥬.webp",
        "category": "character"
    },
    {
        "file": "쇼핑하는_아이들.webp",
        "category": "person"
    },
    {
        "file": "수곡역_승강장.webp",
        "category": "station"
    },
    {
        "file": "수구역_승강장.webp",
        "category": "station"
    },
    {
        "file": "수구역_전경.webp",
        "category": "station"
    },
    {
        "file": "수박로.webp",
        "category": "road"
    },
    {
        "file": "수선된 유니폼.webp",
        "category": "etc"
    },
    {
        "file": "수옥역_승강장.webp",
        "category": "station"
    },
    {
        "file": "수옥역_전경.webp",
        "category": "station"
    },
    {
        "file": "수의대·동물병원역_승강장.webp",
        "category": "station"
    },
    {
        "file": "수작업 서버 복구.webp",
        "category": "etc"
    },
    {
        "file": "수포역_승강장.webp",
        "category": "station"
    },
    {
        "file": "수포역_전경.webp",
        "category": "station"
    },
    {
        "file": "수포현대선_노선도.webp",
        "category": "map"
    },
    {
        "file": "수학 교실 멘토링.webp",
        "category": "etc"
    },
    {
        "file": "숙취의 아침.webp",
        "category": "etc"
    },
    {
        "file": "순환버스.webp",
        "category": "bus"
    },
    {
        "file": "숨 막히는 특별 교육.webp",
        "category": "etc"
    },
    {
        "file": "숨겨진 볼륨감.webp",
        "category": "etc"
    },
    {
        "file": "숨길 수 없는 볼륨.webp",
        "category": "etc"
    },
    {
        "file": "숨덕 사냥꾼의 본능.webp",
        "category": "etc"
    },
    {
        "file": "숨덕 탐지기 회피.webp",
        "category": "etc"
    },
    {
        "file": "숨덕 탐지기.webp",
        "category": "etc"
    },
    {
        "file": "숨덕의 눈물겨운 항쟁.webp",
        "category": "etc"
    },
    {
        "file": "슈카 텐션 폭발.webp",
        "category": "person"
    },
    {
        "file": "슈퍼스타 아파트.webp",
        "category": "facility_com"
    },
    {
        "file": "스리즈_부케.webp",
        "category": "etc"
    },
    {
        "file": "스마트폰을 들고 극대노한 윤간석 후보 (자료사진).webp",
        "category": "facility_com"
    },
    {
        "file": "스미카논1.webp",
        "category": "character"
    },
    {
        "file": "스미쿠쿠.webp",
        "category": "character"
    },
    {
        "file": "스즈키 아이나 텐션.webp",
        "category": "person"
    },
    {
        "file": "스즈키 아이나.webp",
        "category": "person"
    },
    {
        "file": "스즈키 쥰.webp",
        "category": "etc"
    },
    {
        "file": "스쿨아이돌힐스.webp",
        "category": "character"
    },
    {
        "file": "스쿨아이돌힐스_조감도.webp",
        "category": "map"
    },
    {
        "file": "스퀘어시티.webp",
        "category": "etc"
    },
    {
        "file": "스크린도어 점검.webp",
        "category": "character"
    },
    {
        "file": "스타필드_로고.svg",
        "category": "logo"
    },
    {
        "file": "스테인버그 오디오 인터페이스.webp",
        "category": "etc"
    },
    {
        "file": "스톱워치의 지배자.webp",
        "category": "etc"
    },
    {
        "file": "스튜디오_효빈_로고.webp",
        "category": "facility_com"
    },
    {
        "file": "스포트라이트의 중심.webp",
        "category": "etc"
    },
    {
        "file": "승남차량사업소_지도.webp",
        "category": "map"
    },
    {
        "file": "승남해수욕장_전경.webp",
        "category": "landmark"
    },
    {
        "file": "승남해수욕장역_승강장.webp",
        "category": "station"
    },
    {
        "file": "승루역_승강장.webp",
        "category": "station"
    },
    {
        "file": "승루역_전경.webp",
        "category": "station"
    },
    {
        "file": "승무본부의 기준점.webp",
        "category": "facility_gov"
    },
    {
        "file": "시간표 vs 3줄 요약.webp",
        "category": "document"
    },
    {
        "file": "시곡역_승강장.webp",
        "category": "station"
    },
    {
        "file": "시곡역_전경.webp",
        "category": "station"
    },
    {
        "file": "시남역_승강장.webp",
        "category": "station"
    },
    {
        "file": "시노와 미온.webp",
        "category": "etc"
    },
    {
        "file": "시능역_승강장.webp",
        "category": "station"
    },
    {
        "file": "시라사기 치사토.webp",
        "category": "character"
    },
    {
        "file": "시로역_2호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "시로역_5호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "시로카네 린코.webp",
        "category": "character"
    },
    {
        "file": "시민 헌장 배포.webp",
        "category": "person"
    },
    {
        "file": "시민_환호_현장.webp",
        "category": "person"
    },
    {
        "file": "시민규탄집회.webp",
        "category": "event"
    },
    {
        "file": "시민위로_서무련.webp",
        "category": "person"
    },
    {
        "file": "시방로.webp",
        "category": "road"
    },
    {
        "file": "시부야 카논.webp",
        "category": "character"
    },
    {
        "file": "시부야카논엔드카드.webp",
        "category": "merch"
    },
    {
        "file": "시부야카논잡지.webp",
        "category": "character"
    },
    {
        "file": "시부야풍경.webp",
        "category": "landscape"
    },
    {
        "file": "시북역_승강장.webp",
        "category": "station"
    },
    {
        "file": "시오리코지선버스.webp",
        "category": "bus"
    },
    {
        "file": "시의회_니코니코니.webp",
        "category": "facility_gov"
    },
    {
        "file": "시의회_본회의장.webp",
        "category": "facility_gov"
    },
    {
        "file": "시이나 타키.webp",
        "category": "character"
    },
    {
        "file": "시장님 성덕.webp",
        "category": "facility_com"
    },
    {
        "file": "시장님_인턴.webp",
        "category": "facility_com"
    },
    {
        "file": "시장님의 아이돌.webp",
        "category": "facility_com"
    },
    {
        "file": "시장님의 영원한 성덕.webp",
        "category": "facility_com"
    },
    {
        "file": "시장사저_집무실.webp",
        "category": "facility_com"
    },
    {
        "file": "시장사저_침실.webp",
        "category": "facility_com"
    },
    {
        "file": "시장실_피규어.webp",
        "category": "facility_com"
    },
    {
        "file": "시정 혁신의 쌍두마차.webp",
        "category": "etc"
    },
    {
        "file": "시정소식배경.webp",
        "category": "etc"
    },
    {
        "file": "시즈오카_직항_취항식.webp",
        "category": "event"
    },
    {
        "file": "시즈카스.webp",
        "category": "etc"
    },
    {
        "file": "시즈쿠 톤의 낭독.webp",
        "category": "character"
    },
    {
        "file": "시즈쿠간선버스.webp",
        "category": "bus"
    },
    {
        "file": "시청_뒤편_창고.webp",
        "category": "facility_gov"
    },
    {
        "file": "시청_소각장_검은연기.webp",
        "category": "facility_gov"
    },
    {
        "file": "시청로.webp",
        "category": "facility_gov"
    },
    {
        "file": "시청역_2호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "시청역_6호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "시청지하조사실.webp",
        "category": "facility_gov"
    },
    {
        "file": "시티투어버스.webp",
        "category": "bus"
    },
    {
        "file": "신거역_1호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "신거역_8호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "신거역_전경.webp",
        "category": "station"
    },
    {
        "file": "신규진.webp",
        "category": "person"
    },
    {
        "file": "신단성.webp",
        "category": "person"
    },
    {
        "file": "신덕역_4호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "신덕역_빈효선_승강장.webp",
        "category": "station"
    },
    {
        "file": "신덕역_전경.webp",
        "category": "station"
    },
    {
        "file": "신덕전통떡박물관.webp",
        "category": "etc"
    },
    {
        "file": "신도 아마네 카츠라기 이즈미 정식합류.webp",
        "category": "character"
    },
    {
        "file": "신도 아마네 카츠라기 이즈미.webp",
        "category": "character"
    },
    {
        "file": "신도 아마네.webp",
        "category": "etc"
    },
    {
        "file": "신도역_전경.webp",
        "category": "station"
    },
    {
        "file": "신득역.webp",
        "category": "station"
    },
    {
        "file": "신득역_승강장.webp",
        "category": "station"
    },
    {
        "file": "신방선.webp",
        "category": "illustration"
    },
    {
        "file": "신산역 전경.webp",
        "category": "landscape"
    },
    {
        "file": "신산역_승강장.webp",
        "category": "station"
    },
    {
        "file": "신세계_점장_기자회견.webp",
        "category": "event"
    },
    {
        "file": "신세계면세점_로고.svg",
        "category": "logo"
    },
    {
        "file": "신세계백화점_로고.svg",
        "category": "facility_com"
    },
    {
        "file": "신수인.webp",
        "category": "person"
    },
    {
        "file": "신쌍엽역_조감도.webp",
        "category": "map"
    },
    {
        "file": "신안군.svg",
        "category": "logo"
    },
    {
        "file": "신영신산업단지_전경.webp",
        "category": "facility_com"
    },
    {
        "file": "신영역_승강장.webp",
        "category": "station"
    },
    {
        "file": "신영차량사업소_지도.webp",
        "category": "map"
    },
    {
        "file": "신운역.webp",
        "category": "station"
    },
    {
        "file": "신원심.webp",
        "category": "person"
    },
    {
        "file": "신원임.webp",
        "category": "person"
    },
    {
        "file": "신원직.webp",
        "category": "person"
    },
    {
        "file": "신월삼역_승강장.webp",
        "category": "station"
    },
    {
        "file": "신월삼역_전경.webp",
        "category": "station"
    },
    {
        "file": "신은희.webp",
        "category": "person"
    },
    {
        "file": "신중역_승강장.webp",
        "category": "station"
    },
    {
        "file": "신중역_전경.webp",
        "category": "station"
    },
    {
        "file": "신진영.webp",
        "category": "person"
    },
    {
        "file": "신태양.webp",
        "category": "person"
    },
    {
        "file": "신항문.webp",
        "category": "person"
    },
    {
        "file": "신형 편성 발견!.webp",
        "category": "train"
    },
    {
        "file": "신흥역_2호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "신흥역_4호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "신흥역_8호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "신흥역_전경.webp",
        "category": "station"
    },
    {
        "file": "실무의 신.webp",
        "category": "etc"
    },
    {
        "file": "실습2.webp",
        "category": "etc"
    },
    {
        "file": "심동1가역_승강장.webp",
        "category": "station"
    },
    {
        "file": "심동2가역_승강장.webp",
        "category": "station"
    },
    {
        "file": "심동역_승강장.webp",
        "category": "station"
    },
    {
        "file": "심동해변.webp",
        "category": "landmark"
    },
    {
        "file": "심리술사의 프로파일링.webp",
        "category": "etc"
    },
    {
        "file": "심세리.webp",
        "category": "etc"
    },
    {
        "file": "심세이 - 복사본.webp",
        "category": "character"
    },
    {
        "file": "심세이.webp",
        "category": "person"
    },
    {
        "file": "심세이sd.webp",
        "category": "character"
    },
    {
        "file": "심세이_기부.webp",
        "category": "character"
    },
    {
        "file": "심세이_넨도.webp",
        "category": "merch"
    },
    {
        "file": "심세이_노트.webp",
        "category": "character"
    },
    {
        "file": "심세이_놀람_투명.webp",
        "category": "character"
    },
    {
        "file": "심세이_로고.webp",
        "category": "logo"
    },
    {
        "file": "심세이_먹여주기_투명.webp",
        "category": "character"
    },
    {
        "file": "심세이_무표정_투명.webp",
        "category": "character"
    },
    {
        "file": "심세이_볼펜.webp",
        "category": "character"
    },
    {
        "file": "심세이_부끄러움_투명.webp",
        "category": "character"
    },
    {
        "file": "심세이_사복.webp",
        "category": "character"
    },
    {
        "file": "심세이_수영복.webp",
        "category": "character"
    },
    {
        "file": "심세이_슬픔_투명.webp",
        "category": "character"
    },
    {
        "file": "심세이_아빠.webp",
        "category": "person"
    },
    {
        "file": "심세이_애교_투명.webp",
        "category": "character"
    },
    {
        "file": "심세이_엄마.webp",
        "category": "person"
    },
    {
        "file": "심세이_입술내밀기_투명.webp",
        "category": "character"
    },
    {
        "file": "심세이_잠자기_투명.webp",
        "category": "character"
    },
    {
        "file": "심세이_지우개.webp",
        "category": "character"
    },
    {
        "file": "심세이_질투_투명.webp",
        "category": "character"
    },
    {
        "file": "심세이_피규어.webp",
        "category": "merch"
    },
    {
        "file": "심세이_행복_투명.webp",
        "category": "character"
    },
    {
        "file": "심세이_화남_투명.webp",
        "category": "character"
    },
    {
        "file": "심세이가족.webp",
        "category": "person"
    },
    {
        "file": "심세이네소베리.webp",
        "category": "merch"
    },
    {
        "file": "심야의 국밥집.webp",
        "category": "etc"
    },
    {
        "file": "심원식.webp",
        "category": "person"
    },
    {
        "file": "심전역.webp",
        "category": "station"
    },
    {
        "file": "심전역_승강장.webp",
        "category": "station"
    },
    {
        "file": "심판의 프리렌 톤.webp",
        "category": "character"
    },
    {
        "file": "십덕로.webp",
        "category": "road"
    },
    {
        "file": "십덕아트파크.webp",
        "category": "etc"
    },
    {
        "file": "십덕역_승강장.webp",
        "category": "station"
    },
    {
        "file": "쌍엽병원.webp",
        "category": "facility_com"
    },
    {
        "file": "쌍엽역_승강장.webp",
        "category": "station"
    },
    {
        "file": "쌍엽중앙역_조감도.webp",
        "category": "map"
    },
    {
        "file": "쌍엽지구_전경.webp",
        "category": "facility_com"
    },
    {
        "file": "썩소 vs 맑눈광.webp",
        "category": "etc"
    },
    {
        "file": "썬더스네이크.webp",
        "category": "etc"
    },
    {
        "file": "쓰레기_줍는_코스어.webp",
        "category": "etc"
    },
    {
        "file": "쓰리잡의 영혼.webp",
        "category": "etc"
    },
    {
        "file": "아고라_식당.webp",
        "category": "food"
    },
    {
        "file": "아논 트램 내부.webp",
        "category": "train"
    },
    {
        "file": "아논역.webp",
        "category": "station"
    },
    {
        "file": "아논역_승강장.webp",
        "category": "station"
    },
    {
        "file": "아논타워.webp",
        "category": "landmark"
    },
    {
        "file": "아논타워_상권.webp",
        "category": "landmark"
    },
    {
        "file": "아논타워역_승강장.webp",
        "category": "station"
    },
    {
        "file": "아동 학대() 오해.webp",
        "category": "etc"
    },
    {
        "file": "아라시 치사토.webp",
        "category": "character"
    },
    {
        "file": "아라시 치사토_G매거진.webp",
        "category": "character"
    },
    {
        "file": "아라시 치사토_엔드카드.webp",
        "category": "merch"
    },
    {
        "file": "아랍에미리트.svg",
        "category": "logo"
    },
    {
        "file": "아사카 카린.webp",
        "category": "character"
    },
    {
        "file": "아사히신문_보도.webp",
        "category": "etc"
    },
    {
        "file": "아소로.webp",
        "category": "road"
    },
    {
        "file": "아야세 에리.webp",
        "category": "character"
    },
    {
        "file": "아오바 모카.webp",
        "category": "character"
    },
    {
        "file": "아와 스바루.webp",
        "category": "etc"
    },
    {
        "file": "아와관 식당.webp",
        "category": "food"
    },
    {
        "file": "아워노츠 나카마치 아라레.webp",
        "category": "etc"
    },
    {
        "file": "아워노츠 미네츠키 리츠.webp",
        "category": "character"
    },
    {
        "file": "아워노츠 미야나가 노노카.webp",
        "category": "etc"
    },
    {
        "file": "아워노츠 센고쿠 유노.webp",
        "category": "etc"
    },
    {
        "file": "아워노츠 후지 미야코.webp",
        "category": "etc"
    },
    {
        "file": "아이_좋아_전_집.webp",
        "category": "character"
    },
    {
        "file": "아이다_리카코_프로필.webp",
        "category": "character"
    },
    {
        "file": "아이대로.webp",
        "category": "road"
    },
    {
        "file": "아이들_크레페.webp",
        "category": "food"
    },
    {
        "file": "아이맘택시.webp",
        "category": "bus"
    },
    {
        "file": "아이미.webp",
        "category": "character"
    },
    {
        "file": "아이산로.webp",
        "category": "road"
    },
    {
        "file": "아이스크림공원 (2).webp",
        "category": "landmark"
    },
    {
        "file": "아이스크림공원.webp",
        "category": "landmark"
    },
    {
        "file": "아이역 내부.webp",
        "category": "character"
    },
    {
        "file": "아이역_승강장.webp",
        "category": "station"
    },
    {
        "file": "아이역_전경.webp",
        "category": "station"
    },
    {
        "file": "아이역점.webp",
        "category": "station"
    },
    {
        "file": "아이좌석버스.webp",
        "category": "bus"
    },
    {
        "file": "아자부 마이.webp",
        "category": "etc"
    },
    {
        "file": "아진역_승강장.webp",
        "category": "station"
    },
    {
        "file": "아쿠아_방문.webp",
        "category": "facility_com"
    },
    {
        "file": "아쿠아몰_로고.svg",
        "category": "facility_com"
    },
    {
        "file": "아쿠아퍼스트라이브_안짱의리더쉽.webp",
        "category": "facility_com"
    },
    {
        "file": "아키야마 미오.webp",
        "category": "character"
    },
    {
        "file": "악부01.webp",
        "category": "bus"
    },
    {
        "file": "안내데스크의 두 얼굴.webp",
        "category": "etc"
    },
    {
        "file": "안내방송 아이돌.webp",
        "category": "facility_com"
    },
    {
        "file": "안내방송 업데이트.webp",
        "category": "facility_com"
    },
    {
        "file": "안덕경.webp",
        "category": "person"
    },
    {
        "file": "안드로이드 마개조.webp",
        "category": "etc"
    },
    {
        "file": "안세영.webp",
        "category": "person"
    },
    {
        "file": "안신대학교_UI.svg",
        "category": "school"
    },
    {
        "file": "안요지 히메.webp",
        "category": "character"
    },
    {
        "file": "안요지_히메.webp",
        "category": "character"
    },
    {
        "file": "안요지_히메_105.webp",
        "category": "character"
    },
    {
        "file": "안요지_히메_극장판.webp",
        "category": "character"
    },
    {
        "file": "안원로.webp",
        "category": "road"
    },
    {
        "file": "안월대학교 (2).webp",
        "category": "school"
    },
    {
        "file": "안월대학교.webp",
        "category": "school"
    },
    {
        "file": "안월대학교_UI.svg",
        "category": "school"
    },
    {
        "file": "안일암.webp",
        "category": "person"
    },
    {
        "file": "안전모 착용 필수.webp",
        "category": "etc"
    },
    {
        "file": "안전선의 수호자.webp",
        "category": "etc"
    },
    {
        "file": "안주로.webp",
        "category": "road"
    },
    {
        "file": "안천경찰서전경.webp",
        "category": "facility_gov"
    },
    {
        "file": "안천고속.webp",
        "category": "bus"
    },
    {
        "file": "안천구 행정동 지도.webp",
        "category": "map"
    },
    {
        "file": "안천구.webp",
        "category": "etc"
    },
    {
        "file": "안천구_흰색로고.webp",
        "category": "logo"
    },
    {
        "file": "안천구청 이자출장소.webp",
        "category": "station"
    },
    {
        "file": "안천구청.webp",
        "category": "facility_gov"
    },
    {
        "file": "안천동_효빈공항.webp",
        "category": "etc"
    },
    {
        "file": "안천로.webp",
        "category": "road"
    },
    {
        "file": "안천병원.svg",
        "category": "facility_com"
    },
    {
        "file": "안천병원.webp",
        "category": "facility_com"
    },
    {
        "file": "안천선_노선도.webp",
        "category": "map"
    },
    {
        "file": "안천역_1호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "안천역_빈효선_승강장.webp",
        "category": "station"
    },
    {
        "file": "안천역_일반열차_승강장.webp",
        "category": "station"
    },
    {
        "file": "안천역_일반열차_전경.webp",
        "category": "station"
    },
    {
        "file": "안천역_전경.webp",
        "category": "station"
    },
    {
        "file": "안천우체국.webp",
        "category": "facility_gov"
    },
    {
        "file": "안천지구_전경.webp",
        "category": "facility_com"
    },
    {
        "file": "알뜰폰 약정 노예.webp",
        "category": "etc"
    },
    {
        "file": "알바.webp",
        "category": "person"
    },
    {
        "file": "알바와 장학금.webp",
        "category": "person"
    },
    {
        "file": "알코올 완전 거부.webp",
        "category": "etc"
    },
    {
        "file": "알터편순이리코..webp",
        "category": "character"
    },
    {
        "file": "암흑기 청산.webp",
        "category": "etc"
    },
    {
        "file": "압도적 G컵의 런닝.webp",
        "category": "etc"
    },
    {
        "file": "압도적 피지컬.webp",
        "category": "etc"
    },
    {
        "file": "압일역.webp",
        "category": "station"
    },
    {
        "file": "애니메이트_로고.svg",
        "category": "logo"
    },
    {
        "file": "애니철도박물관.webp",
        "category": "etc"
    },
    {
        "file": "애니플러스_로고.svg",
        "category": "logo"
    },
    {
        "file": "애미나이병신.webp",
        "category": "etc"
    },
    {
        "file": "애미나이지랄.webp",
        "category": "etc"
    },
    {
        "file": "애산역.webp",
        "category": "station"
    },
    {
        "file": "애산역_승강장.webp",
        "category": "station"
    },
    {
        "file": "애쉬 브라운 단발.webp",
        "category": "etc"
    },
    {
        "file": "앱솔루트 매뉴얼.webp",
        "category": "etc"
    },
    {
        "file": "앵내리.webp",
        "category": "etc"
    },
    {
        "file": "앵내역_승강장.webp",
        "category": "station"
    },
    {
        "file": "앵내역로.webp",
        "category": "road"
    },
    {
        "file": "앵내이자로.webp",
        "category": "road"
    },
    {
        "file": "앵소로.webp",
        "category": "road"
    },
    {
        "file": "야간 열차의 수호자.webp",
        "category": "train"
    },
    {
        "file": "야근 요정의 부활.webp",
        "category": "etc"
    },
    {
        "file": "야마다 료.webp",
        "category": "etc"
    },
    {
        "file": "야마다 미도리.webp",
        "category": "etc"
    },
    {
        "file": "야마다료 윤석열 단죄 업그레이드.webp",
        "category": "etc"
    },
    {
        "file": "야마부키 사아야.webp",
        "category": "character"
    },
    {
        "file": "야마부키베이커리.webp",
        "category": "etc"
    },
    {
        "file": "야마토 마야.webp",
        "category": "etc"
    },
    {
        "file": "야마하 THR5 앰프.webp",
        "category": "etc"
    },
    {
        "file": "야마하 퍼시피카.webp",
        "category": "etc"
    },
    {
        "file": "야부로.webp",
        "category": "road"
    },
    {
        "file": "야시오 루이.webp",
        "category": "character"
    },
    {
        "file": "야자와 니코.webp",
        "category": "character"
    },
    {
        "file": "야진01.webp",
        "category": "bus"
    },
    {
        "file": "야진02.webp",
        "category": "bus"
    },
    {
        "file": "야진역.webp",
        "category": "station"
    },
    {
        "file": "야진입구역 전경.webp",
        "category": "landscape"
    },
    {
        "file": "야진입구역_승강장.webp",
        "category": "station"
    },
    {
        "file": "야진입구역_전경.webp",
        "category": "station"
    },
    {
        "file": "야하타 우미리.webp",
        "category": "character"
    },
    {
        "file": "약대 보건대역_승강장.webp",
        "category": "station"
    },
    {
        "file": "약맥역_승강장.webp",
        "category": "station"
    },
    {
        "file": "약산_천주_시장단_항의.webp",
        "category": "facility_com"
    },
    {
        "file": "약산대학교_UI.svg",
        "category": "school"
    },
    {
        "file": "약산바이오클러스터.webp",
        "category": "facility_com"
    },
    {
        "file": "약산병원_조감도.webp",
        "category": "map"
    },
    {
        "file": "약산보녕점.webp",
        "category": "etc"
    },
    {
        "file": "약산시 시내버스.webp",
        "category": "bus"
    },
    {
        "file": "약산시 야경.webp",
        "category": "landscape"
    },
    {
        "file": "약산시 행정구역 지도.webp",
        "category": "map"
    },
    {
        "file": "약산시.webp",
        "category": "etc"
    },
    {
        "file": "약산시청.webp",
        "category": "facility_gov"
    },
    {
        "file": "약산시청역_승강장.webp",
        "category": "station"
    },
    {
        "file": "약산시청역_전경.webp",
        "category": "station"
    },
    {
        "file": "약산역.webp",
        "category": "station"
    },
    {
        "file": "약산역_빈효선_승강장.webp",
        "category": "station"
    },
    {
        "file": "약산역_일반상행_승강장.webp",
        "category": "station"
    },
    {
        "file": "약산역_일반열차_승강장.webp",
        "category": "station"
    },
    {
        "file": "약산역_일반하행_승강장.webp",
        "category": "station"
    },
    {
        "file": "약산역_전경.webp",
        "category": "station"
    },
    {
        "file": "양덕성.webp",
        "category": "person"
    },
    {
        "file": "양소현.webp",
        "category": "person"
    },
    {
        "file": "양악설.webp",
        "category": "person"
    },
    {
        "file": "양원승.webp",
        "category": "person"
    },
    {
        "file": "양지현.webp",
        "category": "person"
    },
    {
        "file": "양촌신호장_전경.webp",
        "category": "station"
    },
    {
        "file": "어간 해수욕장.webp",
        "category": "landmark"
    },
    {
        "file": "어간로.webp",
        "category": "road"
    },
    {
        "file": "어간수산시장.webp",
        "category": "facility_com"
    },
    {
        "file": "어간수산시장역_승강장.webp",
        "category": "station"
    },
    {
        "file": "어간역_승강장.webp",
        "category": "station"
    },
    {
        "file": "어간중앙역_2호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "어간중앙역_승강장.webp",
        "category": "station"
    },
    {
        "file": "어간초역_승강장.webp",
        "category": "station"
    },
    {
        "file": "어간항.webp",
        "category": "etc"
    },
    {
        "file": "어간항_전경.webp",
        "category": "landscape"
    },
    {
        "file": "어간항역_승강장.webp",
        "category": "station"
    },
    {
        "file": "어간해수욕장.webp",
        "category": "landmark"
    },
    {
        "file": "어느 겨울날의 코타츠.webp",
        "category": "illustration"
    },
    {
        "file": "어둠을 찢는 킹블레이드.webp",
        "category": "etc"
    },
    {
        "file": "어둠의 AGT 마개조.webp",
        "category": "etc"
    },
    {
        "file": "어둠의 AGT 마개조].webp",
        "category": "etc"
    },
    {
        "file": "어머니의 유산, 완벽 딕션.webp",
        "category": "etc"
    },
    {
        "file": "어뮤즈 광견의 포효.webp",
        "category": "character"
    },
    {
        "file": "어뮤즈의 광견 등판.webp",
        "category": "character"
    },
    {
        "file": "어장고등학교로고.webp",
        "category": "school"
    },
    {
        "file": "어째서 나한테만!.webp",
        "category": "etc"
    },
    {
        "file": "언니와 껌딱지.webp",
        "category": "person"
    },
    {
        "file": "언니와의 기싸움.webp",
        "category": "person"
    },
    {
        "file": "언니의 3단 도시락.webp",
        "category": "food"
    },
    {
        "file": "언니의 등짝 스매싱.webp",
        "category": "person"
    },
    {
        "file": "엄지 30렙 풀콤보.webp",
        "category": "etc"
    },
    {
        "file": "엄지족의 위엄.webp",
        "category": "etc"
    },
    {
        "file": "엄치돈.webp",
        "category": "person"
    },
    {
        "file": "업주체포.webp",
        "category": "etc"
    },
    {
        "file": "에미나이 109.webp",
        "category": "etc"
    },
    {
        "file": "에미나이 구라.webp",
        "category": "etc"
    },
    {
        "file": "에비즈카 토모.webp",
        "category": "etc"
    },
    {
        "file": "에스프레소 극혐.webp",
        "category": "etc"
    },
    {
        "file": "에스프레소 투 샷.webp",
        "category": "etc"
    },
    {
        "file": "에코백.webp",
        "category": "merch"
    },
    {
        "file": "엔터식스_로고.svg",
        "category": "logo"
    },
    {
        "file": "엠마 베르데 빵 러버.webp",
        "category": "food"
    },
    {
        "file": "엠마 베르데.webp",
        "category": "character"
    },
    {
        "file": "엠마_체레스떼.webp",
        "category": "character"
    },
    {
        "file": "엠마공항버스.webp",
        "category": "bus"
    },
    {
        "file": "엠마의 빵.webp",
        "category": "food"
    },
    {
        "file": "엠마의빵_난동.webp",
        "category": "event"
    },
    {
        "file": "여객터미널_야경.webp",
        "category": "bus"
    },
    {
        "file": "여름 워터파크.webp",
        "category": "etc"
    },
    {
        "file": "여름 하복 세일러.webp",
        "category": "etc"
    },
    {
        "file": "여름 휴가의 목적지.webp",
        "category": "etc"
    },
    {
        "file": "여름날의 비키니.webp",
        "category": "etc"
    },
    {
        "file": "여름날의 휴식.webp",
        "category": "illustration"
    },
    {
        "file": "여름방학 특강 지옥.webp",
        "category": "illustration"
    },
    {
        "file": "여수원.webp",
        "category": "person"
    },
    {
        "file": "여연역_승강장.webp",
        "category": "station"
    },
    {
        "file": "여초역.webp",
        "category": "station"
    },
    {
        "file": "여초역_승강장.webp",
        "category": "station"
    },
    {
        "file": "역무본부 대리.webp",
        "category": "facility_gov"
    },
    {
        "file": "역무본부의 스마일.webp",
        "category": "facility_gov"
    },
    {
        "file": "연금.webp",
        "category": "etc"
    },
    {
        "file": "연금계좌.webp",
        "category": "etc"
    },
    {
        "file": "연금계좌_IRP.webp",
        "category": "etc"
    },
    {
        "file": "연말정산.webp",
        "category": "etc"
    },
    {
        "file": "연예원.webp",
        "category": "etc"
    },
    {
        "file": "연월엽.webp",
        "category": "etc"
    },
    {
        "file": "염곡역_3호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "염곡역_승강장.webp",
        "category": "station"
    },
    {
        "file": "염곡역_전경.webp",
        "category": "station"
    },
    {
        "file": "염산신호장_전경.webp",
        "category": "station"
    },
    {
        "file": "염세현.webp",
        "category": "etc"
    },
    {
        "file": "염세현_민주당.webp",
        "category": "etc"
    },
    {
        "file": "염세현_입당.webp",
        "category": "etc"
    },
    {
        "file": "엽떡 5단계.webp",
        "category": "food"
    },
    {
        "file": "엽월대 근로장학생.webp",
        "category": "person"
    },
    {
        "file": "엽월대로.webp",
        "category": "road"
    },
    {
        "file": "엽월대병원_본원.webp",
        "category": "facility_com"
    },
    {
        "file": "엽월대학교.webp",
        "category": "school"
    },
    {
        "file": "엽월대학교_UI.webp",
        "category": "school"
    },
    {
        "file": "엽월대학교병원_로고.webp",
        "category": "school"
    },
    {
        "file": "엽천역_승강장.webp",
        "category": "station"
    },
    {
        "file": "영광역_전경.webp",
        "category": "station"
    },
    {
        "file": "영끌 굿즈 결제.webp",
        "category": "merch"
    },
    {
        "file": "영남대학교.svg",
        "category": "school"
    },
    {
        "file": "영내역_승강장.webp",
        "category": "station"
    },
    {
        "file": "영내역_전경.webp",
        "category": "station"
    },
    {
        "file": "영목역_전경.webp",
        "category": "station"
    },
    {
        "file": "영색무역_1호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "영색무역_빈효선_승강장.webp",
        "category": "station"
    },
    {
        "file": "영색무역_전경.webp",
        "category": "station"
    },
    {
        "file": "영어 1등급의 기적.webp",
        "category": "etc"
    },
    {
        "file": "영어 3등급의 공포.webp",
        "category": "etc"
    },
    {
        "file": "영어 6등급의 비애.webp",
        "category": "etc"
    },
    {
        "file": "영혼의 파트너.webp",
        "category": "etc"
    },
    {
        "file": "예산 삭감 방어전.webp",
        "category": "illustration"
    },
    {
        "file": "예산안 프레임 짜기.webp",
        "category": "etc"
    },
    {
        "file": "예술대역_승강장.webp",
        "category": "station"
    },
    {
        "file": "예정신고.webp",
        "category": "etc"
    },
    {
        "file": "예측 불허의 변수.webp",
        "category": "etc"
    },
    {
        "file": "오갈매.webp",
        "category": "person"
    },
    {
        "file": "오내사거리역_승강장.webp",
        "category": "station"
    },
    {
        "file": "오내역_승강장.webp",
        "category": "station"
    },
    {
        "file": "오니츠카 나츠미.webp",
        "category": "character"
    },
    {
        "file": "오니츠카 토마리.webp",
        "category": "character"
    },
    {
        "file": "오다구.webp",
        "category": "etc"
    },
    {
        "file": "오다이바_테러.webp",
        "category": "event"
    },
    {
        "file": "오다혜.webp",
        "category": "person"
    },
    {
        "file": "오답 노트 집착.webp",
        "category": "etc"
    },
    {
        "file": "오라버니..!.webp",
        "category": "etc"
    },
    {
        "file": "오렌지 커스텀 폰.webp",
        "category": "character"
    },
    {
        "file": "오렌지빛 궤도의 여신.webp",
        "category": "character"
    },
    {
        "file": "오사와 루리노.webp",
        "category": "character"
    },
    {
        "file": "오사카 시즈쿠.webp",
        "category": "character"
    },
    {
        "file": "오사카시즈쿠SD.webp",
        "category": "character"
    },
    {
        "file": "오사카시즈쿠동인.webp",
        "category": "character"
    },
    {
        "file": "오사카시즈쿠사복.webp",
        "category": "character"
    },
    {
        "file": "오사카시즈쿠스쿠스타.webp",
        "category": "character"
    },
    {
        "file": "오사카시즈쿠스쿠페스선전.webp",
        "category": "event"
    },
    {
        "file": "오사카시즈쿠자기소개.webp",
        "category": "character"
    },
    {
        "file": "오상원.webp",
        "category": "person"
    },
    {
        "file": "오서영.webp",
        "category": "person"
    },
    {
        "file": "오석 아쿠아 아파트(2027).webp",
        "category": "facility_com"
    },
    {
        "file": "오석역_1호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "오석역_4호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "오선온.webp",
        "category": "person"
    },
    {
        "file": "오성국.webp",
        "category": "person"
    },
    {
        "file": "오세윤.webp",
        "category": "person"
    },
    {
        "file": "오수아_의사.webp",
        "category": "etc"
    },
    {
        "file": "오수영.webp",
        "category": "person"
    },
    {
        "file": "오스트리아풍경.webp",
        "category": "landscape"
    },
    {
        "file": "오시연.webp",
        "category": "person"
    },
    {
        "file": "오오사와_루리노_극장판.webp",
        "category": "character"
    },
    {
        "file": "오오하시 아야카.webp",
        "category": "person"
    },
    {
        "file": "오이슬.webp",
        "category": "person"
    },
    {
        "file": "오전희.webp",
        "category": "person"
    },
    {
        "file": "오주역_승강장.webp",
        "category": "station"
    },
    {
        "file": "오주역_전경.webp",
        "category": "station"
    },
    {
        "file": "오지대.webp",
        "category": "person"
    },
    {
        "file": "오진여객.webp",
        "category": "bus"
    },
    {
        "file": "오창석.webp",
        "category": "person"
    },
    {
        "file": "오케스트라.webp",
        "category": "etc"
    },
    {
        "file": "오쿠다 나오.webp",
        "category": "character"
    },
    {
        "file": "오쿠사와 미사키.webp",
        "category": "character"
    },
    {
        "file": "오타쿠시민.webp",
        "category": "person"
    },
    {
        "file": "오토무네 코즈에.webp",
        "category": "character"
    },
    {
        "file": "오토무네_코즈에_극장판.webp",
        "category": "character"
    },
    {
        "file": "오하라 마리.webp",
        "category": "character"
    },
    {
        "file": "오한길.webp",
        "category": "road"
    },
    {
        "file": "오한숙.webp",
        "category": "person"
    },
    {
        "file": "오현주.webp",
        "category": "person"
    },
    {
        "file": "옥덕호.webp",
        "category": "etc"
    },
    {
        "file": "옥산민.webp",
        "category": "etc"
    },
    {
        "file": "옥선대.webp",
        "category": "etc"
    },
    {
        "file": "옥선대학교_UI.webp",
        "category": "school"
    },
    {
        "file": "온열질환 예방 캠페인.webp",
        "category": "illustration"
    },
    {
        "file": "와카나 시키.webp",
        "category": "person"
    },
    {
        "file": "와카미야 이브.webp",
        "category": "character"
    },
    {
        "file": "와카바 무츠미.webp",
        "category": "etc"
    },
    {
        "file": "와타나베 요우 서명.webp",
        "category": "logo"
    },
    {
        "file": "와타나베 요우 아이콘.webp",
        "category": "logo"
    },
    {
        "file": "와타나베 요우.webp",
        "category": "character"
    },
    {
        "file": "완벽한 3줄 요약.webp",
        "category": "document"
    },
    {
        "file": "완벽한 동선 최적화.webp",
        "category": "etc"
    },
    {
        "file": "완벽한 마네킹 비율.webp",
        "category": "etc"
    },
    {
        "file": "완벽한 마이크 테스트.webp",
        "category": "etc"
    },
    {
        "file": "완벽한 스마일 통제선.webp",
        "category": "etc"
    },
    {
        "file": "완벽한 엑셀 매크로.webp",
        "category": "road"
    },
    {
        "file": "완벽한 예산 기획.webp",
        "category": "etc"
    },
    {
        "file": "완벽한 월급루팡의 궤적.webp",
        "category": "etc"
    },
    {
        "file": "완벽한 체크리스트.webp",
        "category": "document"
    },
    {
        "file": "완벽한 튜닝의 마술사.webp",
        "category": "etc"
    },
    {
        "file": "완산역_일반열차_승강장.webp",
        "category": "station"
    },
    {
        "file": "완산역_전경.webp",
        "category": "station"
    },
    {
        "file": "완숙망고봇.webp",
        "category": "etc"
    },
    {
        "file": "왓슨.webp",
        "category": "etc"
    },
    {
        "file": "외계어 랩 배틀.webp",
        "category": "etc"
    },
    {
        "file": "외국납부.webp",
        "category": "document"
    },
    {
        "file": "외신_보도_화면.webp",
        "category": "document"
    },
    {
        "file": "요곡역_승강장.webp",
        "category": "station"
    },
    {
        "file": "요곡역_전경.webp",
        "category": "station"
    },
    {
        "file": "요네메 메이.webp",
        "category": "character"
    },
    {
        "file": "요소로.webp",
        "category": "road"
    },
    {
        "file": "요우.webp",
        "category": "character"
    },
    {
        "file": "요우로.webp",
        "category": "road"
    },
    {
        "file": "요우리.webp",
        "category": "character"
    },
    {
        "file": "요우역_승강장.webp",
        "category": "station"
    },
    {
        "file": "요하네.webp",
        "category": "etc"
    },
    {
        "file": "욕실.webp",
        "category": "etc"
    },
    {
        "file": "용서민.webp",
        "category": "etc"
    },
    {
        "file": "용시현.webp",
        "category": "etc"
    },
    {
        "file": "우격역_전경.webp",
        "category": "station"
    },
    {
        "file": "우곡역.webp",
        "category": "station"
    },
    {
        "file": "우구역.webp",
        "category": "station"
    },
    {
        "file": "우다가와 아코.webp",
        "category": "character"
    },
    {
        "file": "우다가와 토모에.webp",
        "category": "character"
    },
    {
        "file": "우모현.webp",
        "category": "person"
    },
    {
        "file": "우무문어봇치피규어.webp",
        "category": "merch"
    },
    {
        "file": "우미린팰리스.webp",
        "category": "character"
    },
    {
        "file": "우미현.webp",
        "category": "person"
    },
    {
        "file": "우시고메 리미.webp",
        "category": "character"
    },
    {
        "file": "우신면 현수막 철거.webp",
        "category": "etc"
    },
    {
        "file": "우신면.webp",
        "category": "etc"
    },
    {
        "file": "우신면_계란투척소동.webp",
        "category": "character"
    },
    {
        "file": "우아함 호소인의 최후.webp",
        "category": "etc"
    },
    {
        "file": "우에하라 아유무.webp",
        "category": "character"
    },
    {
        "file": "우에하라 히마리.webp",
        "category": "character"
    },
    {
        "file": "우영철.webp",
        "category": "person"
    },
    {
        "file": "우이문화촌역_승강장.webp",
        "category": "station"
    },
    {
        "file": "우이역_승강장.webp",
        "category": "station"
    },
    {
        "file": "우전 아쿠아 아파트.webp",
        "category": "facility_com"
    },
    {
        "file": "우전병원.svg",
        "category": "facility_com"
    },
    {
        "file": "우전병원.webp",
        "category": "facility_com"
    },
    {
        "file": "우전역_1호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "우전역_2호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "우전지구_전경.webp",
        "category": "facility_com"
    },
    {
        "file": "우전천_전경.webp",
        "category": "landscape"
    },
    {
        "file": "우정사업본부_로고.svg",
        "category": "facility_gov"
    },
    {
        "file": "우지남.webp",
        "category": "person"
    },
    {
        "file": "우진현.webp",
        "category": "person"
    },
    {
        "file": "우치다 마아야 톤의 폭주.webp",
        "category": "person"
    },
    {
        "file": "우치다 마아야.webp",
        "category": "person"
    },
    {
        "file": "우택역_승강장.webp",
        "category": "station"
    },
    {
        "file": "우택역_창전선_승강장.webp",
        "category": "station"
    },
    {
        "file": "운남역.webp",
        "category": "station"
    },
    {
        "file": "운동장로.webp",
        "category": "road"
    },
    {
        "file": "운양역_승강장.webp",
        "category": "station"
    },
    {
        "file": "운양중앙역 잠입 액션.webp",
        "category": "etc"
    },
    {
        "file": "운양중앙역_승강장.webp",
        "category": "station"
    },
    {
        "file": "운양중앙역_전경.webp",
        "category": "station"
    },
    {
        "file": "운양중앙역점.webp",
        "category": "station"
    },
    {
        "file": "운중로.webp",
        "category": "road"
    },
    {
        "file": "운진군 농어촌버스.webp",
        "category": "bus"
    },
    {
        "file": "운진군.webp",
        "category": "etc"
    },
    {
        "file": "운진군청.webp",
        "category": "facility_gov"
    },
    {
        "file": "운진역.webp",
        "category": "station"
    },
    {
        "file": "운진항.webp",
        "category": "etc"
    },
    {
        "file": "운진항역.webp",
        "category": "station"
    },
    {
        "file": "운촌역_승강장.webp",
        "category": "station"
    },
    {
        "file": "운촌역_전경.webp",
        "category": "station"
    },
    {
        "file": "울릉군.svg",
        "category": "logo"
    },
    {
        "file": "울산HD_로고.svg",
        "category": "logo"
    },
    {
        "file": "울산광역시.svg",
        "category": "logo"
    },
    {
        "file": "울산대학교.svg",
        "category": "school"
    },
    {
        "file": "웅읍역_승강장.webp",
        "category": "station"
    },
    {
        "file": "웅읍역_전경.webp",
        "category": "station"
    },
    {
        "file": "원개현.webp",
        "category": "person"
    },
    {
        "file": "원기덕.webp",
        "category": "person"
    },
    {
        "file": "원동4가역_승강장.webp",
        "category": "station"
    },
    {
        "file": "원명역.webp",
        "category": "station"
    },
    {
        "file": "원명중앙역_전경.webp",
        "category": "station"
    },
    {
        "file": "원명차량사업소_내부.webp",
        "category": "train"
    },
    {
        "file": "원상민.webp",
        "category": "person"
    },
    {
        "file": "원성준.webp",
        "category": "person"
    },
    {
        "file": "원수현.webp",
        "category": "person"
    },
    {
        "file": "원안군 농어촌버스.webp",
        "category": "bus"
    },
    {
        "file": "원안군.webp",
        "category": "etc"
    },
    {
        "file": "원안군청.webp",
        "category": "facility_gov"
    },
    {
        "file": "원유미.webp",
        "category": "person"
    },
    {
        "file": "원전역.webp",
        "category": "station"
    },
    {
        "file": "원중현.webp",
        "category": "person"
    },
    {
        "file": "원지연.webp",
        "category": "person"
    },
    {
        "file": "원지현.webp",
        "category": "person"
    },
    {
        "file": "원천징수.webp",
        "category": "etc"
    },
    {
        "file": "원춘석.webp",
        "category": "person"
    },
    {
        "file": "월급날의 비애.webp",
        "category": "etc"
    },
    {
        "file": "월급루팡의 정석.webp",
        "category": "etc"
    },
    {
        "file": "월마트_로고.svg",
        "category": "facility_com"
    },
    {
        "file": "월삼역.webp",
        "category": "station"
    },
    {
        "file": "월삼역_승강장.webp",
        "category": "station"
    },
    {
        "file": "월스트리트.webp",
        "category": "etc"
    },
    {
        "file": "월주여객.webp",
        "category": "bus"
    },
    {
        "file": "월천역_1호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "월천역_7호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "월천역_본선_승강장.webp",
        "category": "station"
    },
    {
        "file": "월천역_지선_승강장.webp",
        "category": "station"
    },
    {
        "file": "위기 상황 돌변.webp",
        "category": "etc"
    },
    {
        "file": "위기 상황 돌파.webp",
        "category": "etc"
    },
    {
        "file": "위기 수습의 최종 보스.webp",
        "category": "etc"
    },
    {
        "file": "위서은.webp",
        "category": "etc"
    },
    {
        "file": "위시윤.webp",
        "category": "etc"
    },
    {
        "file": "유가족_오열.webp",
        "category": "person"
    },
    {
        "file": "유근혁.webp",
        "category": "person"
    },
    {
        "file": "유기리 츠즈리.webp",
        "category": "etc"
    },
    {
        "file": "유나영_디자이너.webp",
        "category": "etc"
    },
    {
        "file": "유내역_승강장.webp",
        "category": "station"
    },
    {
        "file": "유두로.webp",
        "category": "road"
    },
    {
        "file": "유록역.webp",
        "category": "station"
    },
    {
        "file": "유류역_승강장.webp",
        "category": "station"
    },
    {
        "file": "유리아 1차 방어선.webp",
        "category": "character"
    },
    {
        "file": "유리아 8호선 래핑.webp",
        "category": "character"
    },
    {
        "file": "유리아 로고.webp",
        "category": "logo"
    },
    {
        "file": "유리아 방어전.webp",
        "category": "character"
    },
    {
        "file": "유리아 사복.webp",
        "category": "character"
    },
    {
        "file": "유리아 수영복.webp",
        "category": "character"
    },
    {
        "file": "유리아 열차 내부.webp",
        "category": "train"
    },
    {
        "file": "유리아 임세하 (2).webp",
        "category": "character"
    },
    {
        "file": "유리아 임세하.webp",
        "category": "character"
    },
    {
        "file": "유리아 전용 억제기.webp",
        "category": "character"
    },
    {
        "file": "유리아 태피.webp",
        "category": "merch"
    },
    {
        "file": "유리아 프로필.webp",
        "category": "character"
    },
    {
        "file": "유리아 해변.webp",
        "category": "landmark"
    },
    {
        "file": "유리아.webp",
        "category": "person"
    },
    {
        "file": "유리아sd.webp",
        "category": "character"
    },
    {
        "file": "유리아_긴장함_투명.webp",
        "category": "character"
    },
    {
        "file": "유리아_네소베리_신형.webp",
        "category": "merch"
    },
    {
        "file": "유리아_넨도.webp",
        "category": "merch"
    },
    {
        "file": "유리아_노트.webp",
        "category": "character"
    },
    {
        "file": "유리아_동물머리띠_투명.webp",
        "category": "merch"
    },
    {
        "file": "유리아_먹여주기_투명.webp",
        "category": "character"
    },
    {
        "file": "유리아_메롱_투명.webp",
        "category": "character"
    },
    {
        "file": "유리아_볼바람_투명.webp",
        "category": "character"
    },
    {
        "file": "유리아_볼펜.webp",
        "category": "character"
    },
    {
        "file": "유리아_아빠.webp",
        "category": "person"
    },
    {
        "file": "유리아_애교_투명.webp",
        "category": "character"
    },
    {
        "file": "유리아_엄마.webp",
        "category": "person"
    },
    {
        "file": "유리아_윙크_투명.webp",
        "category": "character"
    },
    {
        "file": "유리아_입벌리기_투명.webp",
        "category": "character"
    },
    {
        "file": "유리아_입술내밀기_투명.webp",
        "category": "character"
    },
    {
        "file": "유리아_자.webp",
        "category": "character"
    },
    {
        "file": "유리아_잠자기_투명.webp",
        "category": "character"
    },
    {
        "file": "유리아_전신_놀란표정_투명.webp",
        "category": "character"
    },
    {
        "file": "유리아_전신_무표정_투명.webp",
        "category": "character"
    },
    {
        "file": "유리아_전신_부끄러운표정_투명.webp",
        "category": "character"
    },
    {
        "file": "유리아_전신_슬픈표정_투명.webp",
        "category": "character"
    },
    {
        "file": "유리아_전신_행복한표정_투명.webp",
        "category": "character"
    },
    {
        "file": "유리아_전신_화난표정_투명.webp",
        "category": "character"
    },
    {
        "file": "유리아_지우개.webp",
        "category": "character"
    },
    {
        "file": "유리아_질투_투명.webp",
        "category": "character"
    },
    {
        "file": "유리아_피곤함_투명.webp",
        "category": "character"
    },
    {
        "file": "유리아_피규어.webp",
        "category": "merch"
    },
    {
        "file": "유리아_하트_투명.webp",
        "category": "character"
    },
    {
        "file": "유리아가족.webp",
        "category": "person"
    },
    {
        "file": "유리아네소베리.webp",
        "category": "merch"
    },
    {
        "file": "유리아로.webp",
        "category": "road"
    },
    {
        "file": "유리아방.webp",
        "category": "character"
    },
    {
        "file": "유리아뱃지.webp",
        "category": "merch"
    },
    {
        "file": "유리아전노아임세하.webp",
        "category": "character"
    },
    {
        "file": "유리혁.webp",
        "category": "person"
    },
    {
        "file": "유방로.webp",
        "category": "road"
    },
    {
        "file": "유산성.webp",
        "category": "person"
    },
    {
        "file": "유상미.webp",
        "category": "person"
    },
    {
        "file": "유설미.webp",
        "category": "person"
    },
    {
        "file": "유성당역_승강장.webp",
        "category": "station"
    },
    {
        "file": "유성민.webp",
        "category": "person"
    },
    {
        "file": "유성신.webp",
        "category": "person"
    },
    {
        "file": "유성철.webp",
        "category": "person"
    },
    {
        "file": "유성태.webp",
        "category": "person"
    },
    {
        "file": "유소현.webp",
        "category": "person"
    },
    {
        "file": "유시온.webp",
        "category": "person"
    },
    {
        "file": "유신민.webp",
        "category": "person"
    },
    {
        "file": "유우기리_츠즈리_극장판.webp",
        "category": "character"
    },
    {
        "file": "유우뽀무.webp",
        "category": "character"
    },
    {
        "file": "유우세라스(이 사진을 아유무가 싫어합니다).webp",
        "category": "character"
    },
    {
        "file": "유우시즈.webp",
        "category": "character"
    },
    {
        "file": "유우키 안쥬.webp",
        "category": "person"
    },
    {
        "file": "유원민.webp",
        "category": "person"
    },
    {
        "file": "유은태.webp",
        "category": "person"
    },
    {
        "file": "유이 내레이션.webp",
        "category": "character"
    },
    {
        "file": "유인철.webp",
        "category": "person"
    },
    {
        "file": "유줄리.webp",
        "category": "etc"
    },
    {
        "file": "유증민.webp",
        "category": "person"
    },
    {
        "file": "유진태.webp",
        "category": "person"
    },
    {
        "file": "유채나.webp",
        "category": "person"
    },
    {
        "file": "유키 세츠나.webp",
        "category": "character"
    },
    {
        "file": "유키나 열차 내부.webp",
        "category": "train"
    },
    {
        "file": "유텐지 냐무.webp",
        "category": "etc"
    },
    {
        "file": "유형별 포괄주의.webp",
        "category": "etc"
    },
    {
        "file": "육각로.webp",
        "category": "road"
    },
    {
        "file": "윤간석 후보와 여성단체 규탄 집회 (자료사진).webp",
        "category": "event"
    },
    {
        "file": "윤간석.webp",
        "category": "person"
    },
    {
        "file": "윤대환 빠돌이 척결.webp",
        "category": "person"
    },
    {
        "file": "윤대환.webp",
        "category": "person"
    },
    {
        "file": "윤대환_개새끼_당선.webp",
        "category": "person"
    },
    {
        "file": "윤대환_박현만_캠프.webp",
        "category": "person"
    },
    {
        "file": "윤대환_반발.webp",
        "category": "person"
    },
    {
        "file": "윤대환_빵테러.webp",
        "category": "event"
    },
    {
        "file": "윤대환_지랄.webp",
        "category": "person"
    },
    {
        "file": "윤서진.webp",
        "category": "person"
    },
    {
        "file": "윤석열_윤재훈_사면.webp",
        "category": "etc"
    },
    {
        "file": "윤석열체포.webp",
        "category": "etc"
    },
    {
        "file": "윤세아_유튜버.webp",
        "category": "person"
    },
    {
        "file": "윤월선.webp",
        "category": "etc"
    },
    {
        "file": "윤재민.webp",
        "category": "person"
    },
    {
        "file": "윤재훈 구속.webp",
        "category": "etc"
    },
    {
        "file": "윤재훈.webp",
        "category": "person"
    },
    {
        "file": "윤재훈_구치소.webp",
        "category": "etc"
    },
    {
        "file": "윤재훈_망연자실.webp",
        "category": "etc"
    },
    {
        "file": "윤재훈_출소.webp",
        "category": "etc"
    },
    {
        "file": "윤항문.webp",
        "category": "person"
    },
    {
        "file": "율주역.webp",
        "category": "station"
    },
    {
        "file": "은밀하고 따뜻한 미소.webp",
        "category": "etc"
    },
    {
        "file": "은은한 광기.webp",
        "category": "etc"
    },
    {
        "file": "의료기기 착용.webp",
        "category": "etc"
    },
    {
        "file": "의외로 꿀(...).webp",
        "category": "etc"
    },
    {
        "file": "의제배당표.webp",
        "category": "etc"
    },
    {
        "file": "의회_로고.svg",
        "category": "facility_gov"
    },
    {
        "file": "이 돈이면 뼈해장국이.webp",
        "category": "etc"
    },
    {
        "file": "이 사안의 핵심은....webp",
        "category": "etc"
    },
    {
        "file": "이_주무관.webp",
        "category": "person"
    },
    {
        "file": "이가람_성우.webp",
        "category": "person"
    },
    {
        "file": "이갑수.webp",
        "category": "person"
    },
    {
        "file": "이거 귀여울지도♪.webp",
        "category": "map"
    },
    {
        "file": "이규희.webp",
        "category": "person"
    },
    {
        "file": "이나미_안쥬.webp",
        "category": "person"
    },
    {
        "file": "이나미안쥬백덤블링.webp",
        "category": "person"
    },
    {
        "file": "이남현.webp",
        "category": "person"
    },
    {
        "file": "이덕경.webp",
        "category": "person"
    },
    {
        "file": "이덕희.webp",
        "category": "person"
    },
    {
        "file": "이덕희sd.webp",
        "category": "character"
    },
    {
        "file": "이덕희_넨도.webp",
        "category": "merch"
    },
    {
        "file": "이덕희_노트.webp",
        "category": "character"
    },
    {
        "file": "이덕희_놀람_투명.webp",
        "category": "character"
    },
    {
        "file": "이덕희_로고.webp",
        "category": "logo"
    },
    {
        "file": "이덕희_메이드.webp",
        "category": "character"
    },
    {
        "file": "이덕희_무표정_투명.webp",
        "category": "character"
    },
    {
        "file": "이덕희_볼펜.webp",
        "category": "character"
    },
    {
        "file": "이덕희_부끄러움_투명.webp",
        "category": "character"
    },
    {
        "file": "이덕희_사복.webp",
        "category": "character"
    },
    {
        "file": "이덕희_수영복.webp",
        "category": "character"
    },
    {
        "file": "이덕희_슬픔_투명.webp",
        "category": "character"
    },
    {
        "file": "이덕희_아빠.webp",
        "category": "person"
    },
    {
        "file": "이덕희_엄마.webp",
        "category": "person"
    },
    {
        "file": "이덕희_지우개.webp",
        "category": "character"
    },
    {
        "file": "이덕희_피규어.webp",
        "category": "merch"
    },
    {
        "file": "이덕희_행복_투명.webp",
        "category": "character"
    },
    {
        "file": "이덕희_화남_투명.webp",
        "category": "character"
    },
    {
        "file": "이덕희가족.webp",
        "category": "person"
    },
    {
        "file": "이덕희네소베리.webp",
        "category": "merch"
    },
    {
        "file": "이덕희열차.webp",
        "category": "train"
    },
    {
        "file": "이독사.webp",
        "category": "person"
    },
    {
        "file": "이름 뺍니다 찡긋.webp",
        "category": "etc"
    },
    {
        "file": "이마이 리사.webp",
        "category": "character"
    },
    {
        "file": "이마트_로고.svg",
        "category": "facility_com"
    },
    {
        "file": "이마트_로고.webp",
        "category": "facility_com"
    },
    {
        "file": "이마트_마잡점_전경.webp",
        "category": "facility_com"
    },
    {
        "file": "이마트_사복점_전경.webp",
        "category": "facility_com"
    },
    {
        "file": "이마트_안천점_전경.webp",
        "category": "facility_com"
    },
    {
        "file": "이마트_월천점_전경.webp",
        "category": "facility_com"
    },
    {
        "file": "이마트_중수점_전경.webp",
        "category": "facility_com"
    },
    {
        "file": "이마트_창전점.webp",
        "category": "facility_com"
    },
    {
        "file": "이마트_효빈점_전경.webp",
        "category": "facility_com"
    },
    {
        "file": "이만구.webp",
        "category": "etc"
    },
    {
        "file": "이목선.webp",
        "category": "etc"
    },
    {
        "file": "이미사.webp",
        "category": "person"
    },
    {
        "file": "박효빈면상.png",
        "category": "etc"
    },
    {
        "file": "이벤트시티투어버스.webp",
        "category": "bus"
    },
    {
        "file": "이부역_승강장.webp",
        "category": "station"
    },
    {
        "file": "이브열차 내부.webp",
        "category": "train"
    },
    {
        "file": "이사원.webp",
        "category": "person"
    },
    {
        "file": "이상휴.webp",
        "category": "person"
    },
    {
        "file": "이성 마비, 젤리 충전.webp",
        "category": "etc"
    },
    {
        "file": "이성민.webp",
        "category": "person"
    },
    {
        "file": "이성한.webp",
        "category": "person"
    },
    {
        "file": "이성화.webp",
        "category": "person"
    },
    {
        "file": "이세리 니나.webp",
        "category": "etc"
    },
    {
        "file": "이세리.webp",
        "category": "etc"
    },
    {
        "file": "이세희.webp",
        "category": "person"
    },
    {
        "file": "이수라남.webp",
        "category": "etc"
    },
    {
        "file": "이수진.webp",
        "category": "person"
    },
    {
        "file": "이시카와 유이.webp",
        "category": "character"
    },
    {
        "file": "이어폰 잭팟 참사.webp",
        "category": "etc"
    },
    {
        "file": "이영진.webp",
        "category": "person"
    },
    {
        "file": "이와로.webp",
        "category": "road"
    },
    {
        "file": "이은역.webp",
        "category": "station"
    },
    {
        "file": "이은역_1호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "이은역_2호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "이자경찰서전경.webp",
        "category": "facility_gov"
    },
    {
        "file": "이자공원역_1호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "이자공원역_4호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "이자공원역점.webp",
        "category": "station"
    },
    {
        "file": "이자로.webp",
        "category": "road"
    },
    {
        "file": "이자병원.webp",
        "category": "facility_com"
    },
    {
        "file": "이자서로.webp",
        "category": "road"
    },
    {
        "file": "이자아쿠아아파트.webp",
        "category": "facility_com"
    },
    {
        "file": "이자여객.webp",
        "category": "bus"
    },
    {
        "file": "이자역_4호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "이자역_빈효선_승강장.webp",
        "category": "station"
    },
    {
        "file": "이자역_일반열차_승강장.webp",
        "category": "station"
    },
    {
        "file": "이자역_전경.webp",
        "category": "station"
    },
    {
        "file": "이자역샌드위치.webp",
        "category": "food"
    },
    {
        "file": "이자중앙로.webp",
        "category": "road"
    },
    {
        "file": "이자지구_전경.webp",
        "category": "facility_com"
    },
    {
        "file": "이자출장소_흰색_로고.webp",
        "category": "station"
    },
    {
        "file": "이자출장소역_승강장.webp",
        "category": "station"
    },
    {
        "file": "이재명 대통령 프로필.webp",
        "category": "etc"
    },
    {
        "file": "이재명박효빈.webp",
        "category": "person"
    },
    {
        "file": "이재성.webp",
        "category": "person"
    },
    {
        "file": "이재원.webp",
        "category": "person"
    },
    {
        "file": "이주노.webp",
        "category": "person"
    },
    {
        "file": "이지치 니지카.webp",
        "category": "etc"
    },
    {
        "file": "이지현.webp",
        "category": "person"
    },
    {
        "file": "이직하.webp",
        "category": "person"
    },
    {
        "file": "이차야.webp",
        "category": "person"
    },
    {
        "file": "이차원_사쿠라우치리코..webp",
        "category": "character"
    },
    {
        "file": "이찬대.webp",
        "category": "person"
    },
    {
        "file": "이치가야 아리사.webp",
        "category": "character"
    },
    {
        "file": "이케부쿠로 애니메이트 습격사건 계도 광고.webp",
        "category": "event"
    },
    {
        "file": "이케아_로고.svg",
        "category": "logo"
    },
    {
        "file": "이태식.webp",
        "category": "person"
    },
    {
        "file": "이한선.webp",
        "category": "etc"
    },
    {
        "file": "이한선_민증공개.webp",
        "category": "etc"
    },
    {
        "file": "이한선_평소모습.webp",
        "category": "etc"
    },
    {
        "file": "익명 기부 추적자.webp",
        "category": "etc"
    },
    {
        "file": "인간 감정은 어려워.webp",
        "category": "etc"
    },
    {
        "file": "인간 신문고.webp",
        "category": "etc"
    },
    {
        "file": "인간 확성기.webp",
        "category": "etc"
    },
    {
        "file": "인간계 최강 철덕의 위엄.webp",
        "category": "character"
    },
    {
        "file": "인곡과학대학교_UI.webp",
        "category": "school"
    },
    {
        "file": "인곡군 농어촌버스.webp",
        "category": "bus"
    },
    {
        "file": "인곡군.webp",
        "category": "etc"
    },
    {
        "file": "인곡군청.webp",
        "category": "facility_gov"
    },
    {
        "file": "인스타 감성 카페.webp",
        "category": "food"
    },
    {
        "file": "인스타그램.svg",
        "category": "logo"
    },
    {
        "file": "인스타그램_아이콘.svg",
        "category": "logo"
    },
    {
        "file": "인싸와 허세.webp",
        "category": "etc"
    },
    {
        "file": "인정욕구몬스터.webp",
        "category": "etc"
    },
    {
        "file": "인제군.svg",
        "category": "logo"
    },
    {
        "file": "인천.svg",
        "category": "logo"
    },
    {
        "file": "인천광역시.svg",
        "category": "logo"
    },
    {
        "file": "인천광역시청_핸드볼_로고.svg",
        "category": "facility_gov"
    },
    {
        "file": "인천도시공사_핸드볼_로고.svg",
        "category": "facility_gov"
    },
    {
        "file": "인천시청.webp",
        "category": "facility_gov"
    },
    {
        "file": "인천옹진군.svg",
        "category": "logo"
    },
    {
        "file": "인천유나이티드_로고.svg",
        "category": "logo"
    },
    {
        "file": "인천중구.svg",
        "category": "logo"
    },
    {
        "file": "일렉트로마트_로고.svg",
        "category": "facility_com"
    },
    {
        "file": "일본.svg",
        "category": "logo"
    },
    {
        "file": "일본_SNS_반응.webp",
        "category": "etc"
    },
    {
        "file": "일본어 랩 사과.webp",
        "category": "event"
    },
    {
        "file": "일어일문 .webp",
        "category": "etc"
    },
    {
        "file": "일어일문학과 과방.webp",
        "category": "school"
    },
    {
        "file": "일코 해제 1초 전.webp",
        "category": "etc"
    },
    {
        "file": "일코용 아이폰 일반.webp",
        "category": "character"
    },
    {
        "file": "임대석.webp",
        "category": "person"
    },
    {
        "file": "임선아.webp",
        "category": "person"
    },
    {
        "file": "임세빈.webp",
        "category": "person"
    },
    {
        "file": "임세연.webp",
        "category": "person"
    },
    {
        "file": "임세정 로고.webp",
        "category": "logo"
    },
    {
        "file": "임세정 메이드복.webp",
        "category": "character"
    },
    {
        "file": "임세정 사복.webp",
        "category": "character"
    },
    {
        "file": "임세정 수영복.webp",
        "category": "character"
    },
    {
        "file": "임세정 유리아 훈육 (2).webp",
        "category": "character"
    },
    {
        "file": "임세정 유리아 훈육.webp",
        "category": "character"
    },
    {
        "file": "임세정 태피.webp",
        "category": "merch"
    },
    {
        "file": "임세정 프로필.webp",
        "category": "character"
    },
    {
        "file": "임세정.webp",
        "category": "person"
    },
    {
        "file": "임세정sd.webp",
        "category": "character"
    },
    {
        "file": "임세정_넨도.webp",
        "category": "merch"
    },
    {
        "file": "임세정_노트.webp",
        "category": "character"
    },
    {
        "file": "임세정_무표정_투명.webp",
        "category": "character"
    },
    {
        "file": "임세정_볼펜.webp",
        "category": "character"
    },
    {
        "file": "임세정_사복.webp",
        "category": "character"
    },
    {
        "file": "임세정_슬픔_투명.webp",
        "category": "character"
    },
    {
        "file": "임세정_열차.webp",
        "category": "train"
    },
    {
        "file": "임세정_열차_내부.webp",
        "category": "train"
    },
    {
        "file": "임세정_전신_놀란표정_투명.webp",
        "category": "character"
    },
    {
        "file": "임세정_전신_무표정_투명.webp",
        "category": "character"
    },
    {
        "file": "임세정_전신_부끄러운표정_투명.webp",
        "category": "character"
    },
    {
        "file": "임세정_전신_슬픈표정_투명.webp",
        "category": "character"
    },
    {
        "file": "임세정_전신_행복한표정_투명.webp",
        "category": "character"
    },
    {
        "file": "임세정_전신_화난표정_투명.webp",
        "category": "character"
    },
    {
        "file": "임세정_제복.webp",
        "category": "character"
    },
    {
        "file": "임세정_지우개.webp",
        "category": "character"
    },
    {
        "file": "임세정_피곤_투명.webp",
        "category": "character"
    },
    {
        "file": "임세정_피규어.webp",
        "category": "merch"
    },
    {
        "file": "임세정_화남_투명.webp",
        "category": "character"
    },
    {
        "file": "임세정가족.webp",
        "category": "person"
    },
    {
        "file": "임세정네소베리.webp",
        "category": "merch"
    },
    {
        "file": "임세정로.webp",
        "category": "road"
    },
    {
        "file": "임세정방.webp",
        "category": "character"
    },
    {
        "file": "임세정뱃지.webp",
        "category": "merch"
    },
    {
        "file": "임세하 7호선 래핑.webp",
        "category": "character"
    },
    {
        "file": "임세하 과잠.webp",
        "category": "character"
    },
    {
        "file": "임세하 로고.webp",
        "category": "logo"
    },
    {
        "file": "임세하 메가박스.webp",
        "category": "facility_com"
    },
    {
        "file": "임세하 메이드복(터지기전).webp",
        "category": "character"
    },
    {
        "file": "임세하 메이드복(터진후).webp",
        "category": "character"
    },
    {
        "file": "임세하 수영복.webp",
        "category": "character"
    },
    {
        "file": "임세하 열차 내부.webp",
        "category": "train"
    },
    {
        "file": "임세하 정비복.webp",
        "category": "character"
    },
    {
        "file": "임세하 정장.webp",
        "category": "character"
    },
    {
        "file": "임세하 태피.webp",
        "category": "merch"
    },
    {
        "file": "임세하 트램.webp",
        "category": "train"
    },
    {
        "file": "임세하 프로필.webp",
        "category": "character"
    },
    {
        "file": "임세하.webp",
        "category": "person"
    },
    {
        "file": "임세하sd.webp",
        "category": "character"
    },
    {
        "file": "임세하_30.webp",
        "category": "character"
    },
    {
        "file": "임세하_강아지흉내_투명.webp",
        "category": "character"
    },
    {
        "file": "임세하_개삐짐_투명.webp",
        "category": "character"
    },
    {
        "file": "임세하_고양이흉내_투명.webp",
        "category": "character"
    },
    {
        "file": "임세하_곰흉내_투명.webp",
        "category": "character"
    },
    {
        "file": "임세하_과잠.webp",
        "category": "character"
    },
    {
        "file": "임세하_과잠_얀데레.webp",
        "category": "character"
    },
    {
        "file": "임세하_광기 (2).webp",
        "category": "character"
    },
    {
        "file": "임세하_광기.webp",
        "category": "character"
    },
    {
        "file": "임세하_귀엽게화난표정_투명.webp",
        "category": "character"
    },
    {
        "file": "임세하_깜찍옷_투명.webp",
        "category": "character"
    },
    {
        "file": "임세하_네소베리_신형.webp",
        "category": "merch"
    },
    {
        "file": "임세하_넨도.webp",
        "category": "merch"
    },
    {
        "file": "임세하_노트.webp",
        "category": "character"
    },
    {
        "file": "임세하_놀란표정_자연스러운자세_투명.webp",
        "category": "character"
    },
    {
        "file": "임세하_놀란표정_투명.webp",
        "category": "character"
    },
    {
        "file": "임세하_매우행복한표정_투명.webp",
        "category": "character"
    },
    {
        "file": "임세하_메롱하는모습_투명.webp",
        "category": "character"
    },
    {
        "file": "임세하_무표정_투명.webp",
        "category": "character"
    },
    {
        "file": "임세하_박효빈_소파_키스.webp",
        "category": "person"
    },
    {
        "file": "임세하_박효빈_안기.webp",
        "category": "person"
    },
    {
        "file": "임세하_박효빈_웃음.webp",
        "category": "person"
    },
    {
        "file": "임세하_박효빈_침실.webp",
        "category": "person"
    },
    {
        "file": "임세하_박효빈_침실_키스.webp",
        "category": "person"
    },
    {
        "file": "임세하_박효빈_휴식.webp",
        "category": "person"
    },
    {
        "file": "임세하_박효빈_휴식2.webp",
        "category": "person"
    },
    {
        "file": "임세하_밥떠먹여주는모습_투명.webp",
        "category": "character"
    },
    {
        "file": "임세하_볼바람_투명.webp",
        "category": "character"
    },
    {
        "file": "임세하_볼펜.webp",
        "category": "character"
    },
    {
        "file": "임세하_부끄러운표정_자연스러운자세_투명.webp",
        "category": "character"
    },
    {
        "file": "임세하_부끄러운표정_투명.webp",
        "category": "character"
    },
    {
        "file": "임세하_삐짐_투명.webp",
        "category": "character"
    },
    {
        "file": "임세하_사복_투명.webp",
        "category": "character"
    },
    {
        "file": "임세하_소프트_얀.webp",
        "category": "character"
    },
    {
        "file": "임세하_손가락하트_투명.webp",
        "category": "character"
    },
    {
        "file": "임세하_신남_투명.webp",
        "category": "character"
    },
    {
        "file": "임세하_심하게삐짐_투명.webp",
        "category": "character"
    },
    {
        "file": "임세하_아빠.webp",
        "category": "person"
    },
    {
        "file": "임세하_애교부리는모습_투명.webp",
        "category": "character"
    },
    {
        "file": "임세하_얀데레 (2).webp",
        "category": "character"
    },
    {
        "file": "임세하_얀데레 (3).webp",
        "category": "character"
    },
    {
        "file": "임세하_얀데레 (4).webp",
        "category": "character"
    },
    {
        "file": "임세하_얀데레.webp",
        "category": "character"
    },
    {
        "file": "임세하_엄마.webp",
        "category": "person"
    },
    {
        "file": "임세하_열일.webp",
        "category": "character"
    },
    {
        "file": "임세하_우는표정_자연스러운자세_투명.webp",
        "category": "character"
    },
    {
        "file": "임세하_우는표정_투명.webp",
        "category": "character"
    },
    {
        "file": "임세하_윙크하는모습_투명.webp",
        "category": "character"
    },
    {
        "file": "임세하_인형.webp",
        "category": "merch"
    },
    {
        "file": "임세하_입벌린모습_투명.webp",
        "category": "character"
    },
    {
        "file": "임세하_입술내민모습_투명.webp",
        "category": "character"
    },
    {
        "file": "임세하_잠자는모습_투명.webp",
        "category": "character"
    },
    {
        "file": "임세하_정비복_기본_투명.webp",
        "category": "character"
    },
    {
        "file": "임세하_정비복_부끄_투명.webp",
        "category": "character"
    },
    {
        "file": "임세하_정비복_아앙_투명.webp",
        "category": "character"
    },
    {
        "file": "임세하_정비복_얀데레 (2).webp",
        "category": "character"
    },
    {
        "file": "임세하_정비복_얀데레.webp",
        "category": "character"
    },
    {
        "file": "임세하_정비복_하트.webp",
        "category": "character"
    },
    {
        "file": "임세하_정비복_해맑_투명.webp",
        "category": "character"
    },
    {
        "file": "임세하_정비복_흥_투명.webp",
        "category": "character"
    },
    {
        "file": "임세하_정장_냥_투명.webp",
        "category": "character"
    },
    {
        "file": "임세하_정장_놀람_투명.webp",
        "category": "character"
    },
    {
        "file": "임세하_정장_부끄_투명.webp",
        "category": "character"
    },
    {
        "file": "임세하_정장_윙크_투명.webp",
        "category": "character"
    },
    {
        "file": "임세하_정장_하트_투명.webp",
        "category": "character"
    },
    {
        "file": "임세하_정장_흥_투명.webp",
        "category": "character"
    },
    {
        "file": "임세하_지우개.webp",
        "category": "character"
    },
    {
        "file": "임세하_큰하트_투명.webp",
        "category": "character"
    },
    {
        "file": "임세하_토끼흉내_투명.webp",
        "category": "character"
    },
    {
        "file": "임세하_평상복 (2)_투명.webp",
        "category": "character"
    },
    {
        "file": "임세하_평상복 (3)_투명.webp",
        "category": "character"
    },
    {
        "file": "임세하_평상복 (4)_투명.webp",
        "category": "character"
    },
    {
        "file": "임세하_평상복 (5)_투명.webp",
        "category": "character"
    },
    {
        "file": "임세하_평상복_투명.webp",
        "category": "character"
    },
    {
        "file": "임세하_피규어.webp",
        "category": "merch"
    },
    {
        "file": "임세하_행복한표정.webp",
        "category": "character"
    },
    {
        "file": "임세하_행복한표정_자연스러운자세.webp",
        "category": "character"
    },
    {
        "file": "임세하_행복한표정_자연스러운자세_투명.webp",
        "category": "character"
    },
    {
        "file": "임세하_행복한표정_투명.webp",
        "category": "character"
    },
    {
        "file": "임세하_화난표정.webp",
        "category": "character"
    },
    {
        "file": "임세하_화난표정_투명.webp",
        "category": "character"
    },
    {
        "file": "임세하네소베리.webp",
        "category": "merch"
    },
    {
        "file": "임세하방.webp",
        "category": "character"
    },
    {
        "file": "임세하뱃지.webp",
        "category": "merch"
    },
    {
        "file": "임세혁.webp",
        "category": "person"
    },
    {
        "file": "임세현.webp",
        "category": "person"
    },
    {
        "file": "임승현.webp",
        "category": "person"
    },
    {
        "file": "임은혜.webp",
        "category": "person"
    },
    {
        "file": "임천여객.webp",
        "category": "bus"
    },
    {
        "file": "임체제.webp",
        "category": "person"
    },
    {
        "file": "입동역_승강장.webp",
        "category": "station"
    },
    {
        "file": "입동주박기지_지도.webp",
        "category": "map"
    },
    {
        "file": "입등신호소_전경.webp",
        "category": "station"
    },
    {
        "file": "입선역_승강장.webp",
        "category": "station"
    },
    {
        "file": "입포여객.webp",
        "category": "bus"
    },
    {
        "file": "입희병원.webp",
        "category": "facility_com"
    },
    {
        "file": "입희역_1호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "입희역_2호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "자본주의 미소의 극한.webp",
        "category": "etc"
    },
    {
        "file": "자본주의 절대 미소.webp",
        "category": "etc"
    },
    {
        "file": "자본주의 짠순이.webp",
        "category": "etc"
    },
    {
        "file": "자본주의의 노예.webp",
        "category": "etc"
    },
    {
        "file": "자선 찻집의 굴욕.webp",
        "category": "etc"
    },
    {
        "file": "자아분열의 늪.webp",
        "category": "etc"
    },
    {
        "file": "자언로.webp",
        "category": "road"
    },
    {
        "file": "자연대역_승강장.webp",
        "category": "station"
    },
    {
        "file": "자율주행버스.webp",
        "category": "bus"
    },
    {
        "file": "자칭 쿨뷰티.webp",
        "category": "etc"
    },
    {
        "file": "자칭 쿨뷰티의 최후.webp",
        "category": "etc"
    },
    {
        "file": "잠재역_승강장.webp",
        "category": "station"
    },
    {
        "file": "잠재역_전경.webp",
        "category": "station"
    },
    {
        "file": "장곡궁하로.webp",
        "category": "road"
    },
    {
        "file": "장곡여객선터미널.webp",
        "category": "bus"
    },
    {
        "file": "장곡역_승강장.webp",
        "category": "station"
    },
    {
        "file": "장곡역_전경.webp",
        "category": "station"
    },
    {
        "file": "장근로.webp",
        "category": "road"
    },
    {
        "file": "장기구청.webp",
        "category": "facility_gov"
    },
    {
        "file": "장기구청역_승강장.webp",
        "category": "station"
    },
    {
        "file": "장기역.webp",
        "category": "station"
    },
    {
        "file": "장기역_1호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "장기역_2호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "장기역_광역전철_승강장.webp",
        "category": "station"
    },
    {
        "file": "장기역_전경.webp",
        "category": "station"
    },
    {
        "file": "장기중앙역_승강장.webp",
        "category": "station"
    },
    {
        "file": "장선역_승강장.webp",
        "category": "station"
    },
    {
        "file": "장선역_전경.webp",
        "category": "station"
    },
    {
        "file": "장선차량사업소_지도.webp",
        "category": "map"
    },
    {
        "file": "장원역_1호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "장원역_4호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "장원역_빈효선_승강장.webp",
        "category": "station"
    },
    {
        "file": "장원역_전경.webp",
        "category": "station"
    },
    {
        "file": "장은재.webp",
        "category": "person"
    },
    {
        "file": "장패드.webp",
        "category": "person"
    },
    {
        "file": "장포역_승강장.webp",
        "category": "station"
    },
    {
        "file": "장학금 탕진잼.webp",
        "category": "etc"
    },
    {
        "file": "재고자산.webp",
        "category": "etc"
    },
    {
        "file": "재무 설계의 정점.webp",
        "category": "document"
    },
    {
        "file": "재무제표표시.webp",
        "category": "document"
    },
    {
        "file": "재무회계.webp",
        "category": "document"
    },
    {
        "file": "재진숙.webp",
        "category": "etc"
    },
    {
        "file": "재천병원.webp",
        "category": "facility_com"
    },
    {
        "file": "저소대학교.webp",
        "category": "school"
    },
    {
        "file": "저소대학교_UI.webp",
        "category": "school"
    },
    {
        "file": "저천군 농어촌버스.webp",
        "category": "bus"
    },
    {
        "file": "저천군.webp",
        "category": "etc"
    },
    {
        "file": "저천군청.webp",
        "category": "facility_gov"
    },
    {
        "file": "전남광주통합특별시.svg",
        "category": "logo"
    },
    {
        "file": "전남대.svg",
        "category": "logo"
    },
    {
        "file": "전노아 과잠.webp",
        "category": "character"
    },
    {
        "file": "전노아 과잠2.webp",
        "category": "character"
    },
    {
        "file": "전노아 로고.webp",
        "category": "logo"
    },
    {
        "file": "전노아 메이드복.webp",
        "category": "character"
    },
    {
        "file": "전노아 수영복.webp",
        "category": "character"
    },
    {
        "file": "전노아 태피.webp",
        "category": "merch"
    },
    {
        "file": "전노아 프로필.webp",
        "category": "character"
    },
    {
        "file": "전노아(당가고).webp",
        "category": "character"
    },
    {
        "file": "전노아.webp",
        "category": "person"
    },
    {
        "file": "전노아sd.webp",
        "category": "character"
    },
    {
        "file": "전노아_네소베리_신형.webp",
        "category": "merch"
    },
    {
        "file": "전노아_네임택.webp",
        "category": "character"
    },
    {
        "file": "전노아_넨도.webp",
        "category": "merch"
    },
    {
        "file": "전노아_노트.webp",
        "category": "character"
    },
    {
        "file": "전노아_볼펜.webp",
        "category": "character"
    },
    {
        "file": "전노아_아빠.webp",
        "category": "person"
    },
    {
        "file": "전노아_엄마.webp",
        "category": "person"
    },
    {
        "file": "전노아_열차_내부.webp",
        "category": "train"
    },
    {
        "file": "전노아_지우개.webp",
        "category": "character"
    },
    {
        "file": "전노아_피규어.webp",
        "category": "merch"
    },
    {
        "file": "전노아가족.webp",
        "category": "person"
    },
    {
        "file": "전노아네소베리.webp",
        "category": "merch"
    },
    {
        "file": "전노아로.webp",
        "category": "road"
    },
    {
        "file": "전노아방.webp",
        "category": "character"
    },
    {
        "file": "전노아뱃지.webp",
        "category": "merch"
    },
    {
        "file": "전덕역_6호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "전덕역_빈효선_승강장.webp",
        "category": "station"
    },
    {
        "file": "전덕역_전경.webp",
        "category": "station"
    },
    {
        "file": "전덕역_창전선_승강장.webp",
        "category": "station"
    },
    {
        "file": "전동우산.webp",
        "category": "etc"
    },
    {
        "file": "전동차 출사의 성지.webp",
        "category": "train"
    },
    {
        "file": "전라남도.svg",
        "category": "logo"
    },
    {
        "file": "전례가 없습니다.webp",
        "category": "etc"
    },
    {
        "file": "전북.webp",
        "category": "etc"
    },
    {
        "file": "전북대_로고.svg",
        "category": "logo"
    },
    {
        "file": "전북대과방.webp",
        "category": "school"
    },
    {
        "file": "전북특별자치도.svg",
        "category": "logo"
    },
    {
        "file": "전북현대_로고.svg",
        "category": "logo"
    },
    {
        "file": "전산시 시내버스.webp",
        "category": "bus"
    },
    {
        "file": "전산시.webp",
        "category": "etc"
    },
    {
        "file": "전산시청.webp",
        "category": "facility_gov"
    },
    {
        "file": "전산역.webp",
        "category": "station"
    },
    {
        "file": "전산역_승강장.webp",
        "category": "station"
    },
    {
        "file": "전산항.webp",
        "category": "person"
    },
    {
        "file": "전선우.webp",
        "category": "person"
    },
    {
        "file": "전속 전진 요소로!.webp",
        "category": "etc"
    },
    {
        "file": "전역헌.webp",
        "category": "person"
    },
    {
        "file": "전주대학교.svg",
        "category": "school"
    },
    {
        "file": "전지호.webp",
        "category": "etc"
    },
    {
        "file": "전진역.webp",
        "category": "station"
    },
    {
        "file": "전차 언니의 위엄.webp",
        "category": "person"
    },
    {
        "file": "전차 자매의 대토벌.webp",
        "category": "etc"
    },
    {
        "file": "전차_개통식.webp",
        "category": "event"
    },
    {
        "file": "전천역_1호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "전천역_5호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "전천중앙역_5호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "전천중앙역_6호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "전포역.webp",
        "category": "station"
    },
    {
        "file": "전포역_승강장.webp",
        "category": "station"
    },
    {
        "file": "절대 립스틱 사수.webp",
        "category": "etc"
    },
    {
        "file": "절대 방어, 시스템 복구.webp",
        "category": "illustration"
    },
    {
        "file": "절대영도 기강반장.webp",
        "category": "etc"
    },
    {
        "file": "절대영역 사수.webp",
        "category": "etc"
    },
    {
        "file": "정관장_레드부스터스_로고.svg",
        "category": "logo"
    },
    {
        "file": "정근01.webp",
        "category": "bus"
    },
    {
        "file": "정근02.webp",
        "category": "bus"
    },
    {
        "file": "정동혁.webp",
        "category": "person"
    },
    {
        "file": "정래원.webp",
        "category": "person"
    },
    {
        "file": "정민재.webp",
        "category": "person"
    },
    {
        "file": "정비복_밥먹이는_임세하.webp",
        "category": "character"
    },
    {
        "file": "정비복_밥먹이는_임세하_투명.webp",
        "category": "character"
    },
    {
        "file": "정비복에 가려진 그것(...).webp",
        "category": "etc"
    },
    {
        "file": "정시우_프로듀서.webp",
        "category": "etc"
    },
    {
        "file": "정시원.webp",
        "category": "person"
    },
    {
        "file": "정용석.webp",
        "category": "person"
    },
    {
        "file": "정우혁.webp",
        "category": "person"
    },
    {
        "file": "정유리_검사.webp",
        "category": "etc"
    },
    {
        "file": "정읍역_경빈선_승강장.webp",
        "category": "station"
    },
    {
        "file": "정읍역_전경.webp",
        "category": "station"
    },
    {
        "file": "정장_밥먹이는_임세하.webp",
        "category": "character"
    },
    {
        "file": "정중역.webp",
        "category": "station"
    },
    {
        "file": "정진서.webp",
        "category": "person"
    },
    {
        "file": "정책 모드 ON.webp",
        "category": "etc"
    },
    {
        "file": "정철규.webp",
        "category": "person"
    },
    {
        "file": "정철규_고해역_난동.webp",
        "category": "station"
    },
    {
        "file": "정철규_낙선.webp",
        "category": "etc"
    },
    {
        "file": "정치역_승강장.webp",
        "category": "station"
    },
    {
        "file": "정형외과_교수.webp",
        "category": "person"
    },
    {
        "file": "제1대_덕북도청.webp",
        "category": "facility_gov"
    },
    {
        "file": "제1차 철덕 회동.webp",
        "category": "character"
    },
    {
        "file": "제2대_덕북도청.webp",
        "category": "facility_gov"
    },
    {
        "file": "제가동2가역_승강장.webp",
        "category": "station"
    },
    {
        "file": "제가동2가역_전경.webp",
        "category": "station"
    },
    {
        "file": "제가역_승강장.webp",
        "category": "station"
    },
    {
        "file": "제미나이 나이 순서 바꿔놓은 지랄.webp",
        "category": "etc"
    },
    {
        "file": "제미나이 나한테 욕함.webp",
        "category": "etc"
    },
    {
        "file": "제미나이 씨발새끼_사진을 이상하게 쳐 만들어 놓음.webp",
        "category": "etc"
    },
    {
        "file": "제미나이.webp",
        "category": "etc"
    },
    {
        "file": "제미나이_개새끼.webp",
        "category": "etc"
    },
    {
        "file": "제미나이오류화면.webp",
        "category": "document"
    },
    {
        "file": "제복의 무게.webp",
        "category": "illustration"
    },
    {
        "file": "제왕시장.webp",
        "category": "facility_com"
    },
    {
        "file": "제육볶음 매니아.webp",
        "category": "food"
    },
    {
        "file": "제주대.svg",
        "category": "logo"
    },
    {
        "file": "제주유나이티드_로고.svg",
        "category": "logo"
    },
    {
        "file": "제주특별자치도.svg",
        "category": "logo"
    },
    {
        "file": "젤리 보급 작전.webp",
        "category": "etc"
    },
    {
        "file": "조경원.webp",
        "category": "person"
    },
    {
        "file": "조광훈.webp",
        "category": "person"
    },
    {
        "file": "조기대선투표.webp",
        "category": "event"
    },
    {
        "file": "조기소진_안내문.webp",
        "category": "document"
    },
    {
        "file": "조다윗.webp",
        "category": "person"
    },
    {
        "file": "조만석.webp",
        "category": "person"
    },
    {
        "file": "조민규.webp",
        "category": "person"
    },
    {
        "file": "조민수.webp",
        "category": "person"
    },
    {
        "file": "조별과제 생태계 깡패.webp",
        "category": "etc"
    },
    {
        "file": "조별과제 팀장.webp",
        "category": "person"
    },
    {
        "file": "조별과제 포식자.webp",
        "category": "etc"
    },
    {
        "file": "조병진.webp",
        "category": "person"
    },
    {
        "file": "조삼현.webp",
        "category": "person"
    },
    {
        "file": "조상현.webp",
        "category": "person"
    },
    {
        "file": "조선대학교.svg",
        "category": "school"
    },
    {
        "file": "조성일.webp",
        "category": "person"
    },
    {
        "file": "조에녹.webp",
        "category": "person"
    },
    {
        "file": "조영식.webp",
        "category": "person"
    },
    {
        "file": "조우영.webp",
        "category": "person"
    },
    {
        "file": "조유동2가역_승강장.webp",
        "category": "station"
    },
    {
        "file": "조유동3가역_승강장.webp",
        "category": "station"
    },
    {
        "file": "조유로.webp",
        "category": "road"
    },
    {
        "file": "조유아파트.webp",
        "category": "facility_com"
    },
    {
        "file": "조유진.webp",
        "category": "person"
    },
    {
        "file": "조잠언.webp",
        "category": "person"
    },
    {
        "file": "조전구청역_전경.webp",
        "category": "station"
    },
    {
        "file": "조전역_전경.webp",
        "category": "station"
    },
    {
        "file": "조천산역_전경.webp",
        "category": "station"
    },
    {
        "file": "조청남.webp",
        "category": "person"
    },
    {
        "file": "조향림.webp",
        "category": "person"
    },
    {
        "file": "족포초등학교로고.webp",
        "category": "school"
    },
    {
        "file": "졸리비.webp",
        "category": "etc"
    },
    {
        "file": "종성여객.webp",
        "category": "bus"
    },
    {
        "file": "종합소득과세표준계산흐름.webp",
        "category": "document"
    },
    {
        "file": "좆선사과문.webp",
        "category": "event"
    },
    {
        "file": "좆선폐간기원.webp",
        "category": "etc"
    },
    {
        "file": "좌목산_전경.webp",
        "category": "landmark"
    },
    {
        "file": "좌석버스.webp",
        "category": "bus"
    },
    {
        "file": "주곡역_승강장.webp",
        "category": "station"
    },
    {
        "file": "주곡역_전경.webp",
        "category": "station"
    },
    {
        "file": "주기역_전경.webp",
        "category": "station"
    },
    {
        "file": "주길차량사업소_지도.webp",
        "category": "map"
    },
    {
        "file": "주말의 등산객.webp",
        "category": "etc"
    },
    {
        "file": "주민우.webp",
        "category": "person"
    },
    {
        "file": "주방선.webp",
        "category": "illustration"
    },
    {
        "file": "주성역_전경.webp",
        "category": "station"
    },
    {
        "file": "주식.webp",
        "category": "etc"
    },
    {
        "file": "주양역_승강장.webp",
        "category": "station"
    },
    {
        "file": "주양역_전경.webp",
        "category": "station"
    },
    {
        "file": "주언일.webp",
        "category": "person"
    },
    {
        "file": "주옥현.webp",
        "category": "person"
    },
    {
        "file": "주은태.webp",
        "category": "person"
    },
    {
        "file": "주전중앙역_승강장.webp",
        "category": "station"
    },
    {
        "file": "주전중앙역_전경.webp",
        "category": "station"
    },
    {
        "file": "주택청약 납입일.webp",
        "category": "etc"
    },
    {
        "file": "주하석.webp",
        "category": "person"
    },
    {
        "file": "주한_필리핀_대사.webp",
        "category": "etc"
    },
    {
        "file": "주현진.webp",
        "category": "person"
    },
    {
        "file": "죽구로.webp",
        "category": "road"
    },
    {
        "file": "중2병 각성.webp",
        "category": "etc"
    },
    {
        "file": "중고 스마트폰.webp",
        "category": "facility_com"
    },
    {
        "file": "중구 행정동 지도.webp",
        "category": "map"
    },
    {
        "file": "중구.webp",
        "category": "etc"
    },
    {
        "file": "중구_흰색로고.webp",
        "category": "logo"
    },
    {
        "file": "중구청.webp",
        "category": "facility_gov"
    },
    {
        "file": "중구청역_1호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "중구청역_7호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "중국.svg",
        "category": "logo"
    },
    {
        "file": "중동3가역_승강장.webp",
        "category": "station"
    },
    {
        "file": "중만도역_승강장.webp",
        "category": "station"
    },
    {
        "file": "중보로.webp",
        "category": "road"
    },
    {
        "file": "중보로역_승강장.webp",
        "category": "station"
    },
    {
        "file": "중수강변공원.webp",
        "category": "landmark"
    },
    {
        "file": "중수도서관.webp",
        "category": "school"
    },
    {
        "file": "중수로.webp",
        "category": "road"
    },
    {
        "file": "중수여고 3학년.webp",
        "category": "etc"
    },
    {
        "file": "중수여고.webp",
        "category": "etc"
    },
    {
        "file": "중수여고_교실.webp",
        "category": "etc"
    },
    {
        "file": "중수역.webp",
        "category": "station"
    },
    {
        "file": "중수역_골든로드.webp",
        "category": "station"
    },
    {
        "file": "중수역럭키박스.webp",
        "category": "etc"
    },
    {
        "file": "중수역점.webp",
        "category": "station"
    },
    {
        "file": "중수중앙로.webp",
        "category": "road"
    },
    {
        "file": "중수지구_전경.webp",
        "category": "facility_com"
    },
    {
        "file": "중수해안공원.webp",
        "category": "landmark"
    },
    {
        "file": "중앙고등학교역_승강장.webp",
        "category": "station"
    },
    {
        "file": "중앙도서관역_승강장.webp",
        "category": "station"
    },
    {
        "file": "중앙동3가역_승강장.webp",
        "category": "station"
    },
    {
        "file": "중앙로.webp",
        "category": "road"
    },
    {
        "file": "중앙로1가역_승강장.webp",
        "category": "station"
    },
    {
        "file": "중앙로1가역점.webp",
        "category": "station"
    },
    {
        "file": "중앙로3가역_승강장.webp",
        "category": "station"
    },
    {
        "file": "중앙로역_1호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "중앙로역_2호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "중앙로역_7호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "중앙환승장_A선_승강장.webp",
        "category": "station"
    },
    {
        "file": "중앙환승장_B선_승강장.webp",
        "category": "station"
    },
    {
        "file": "중은역_승강장.webp",
        "category": "station"
    },
    {
        "file": "중장갑 베이글.webp",
        "category": "etc"
    },
    {
        "file": "중장갑의 기적.webp",
        "category": "etc"
    },
    {
        "file": "중촌대학교.webp",
        "category": "school"
    },
    {
        "file": "중학교 졸업사진(2018, 살뺴기전).webp",
        "category": "school"
    },
    {
        "file": "즉흥적인 땡땡이.webp",
        "category": "etc"
    },
    {
        "file": "증동3가역_승강장.webp",
        "category": "station"
    },
    {
        "file": "증림역.webp",
        "category": "station"
    },
    {
        "file": "증림역_승강장.webp",
        "category": "station"
    },
    {
        "file": "지독한 럽순이.webp",
        "category": "character"
    },
    {
        "file": "지미역.webp",
        "category": "station"
    },
    {
        "file": "지미역_승강장.webp",
        "category": "station"
    },
    {
        "file": "지민성.webp",
        "category": "person"
    },
    {
        "file": "지산역_승강장.webp",
        "category": "station"
    },
    {
        "file": "지상 구간 진입.webp",
        "category": "etc"
    },
    {
        "file": "지선버스.webp",
        "category": "bus"
    },
    {
        "file": "지선진.webp",
        "category": "person"
    },
    {
        "file": "지소현.webp",
        "category": "person"
    },
    {
        "file": "지아센 대청교 당시 애들이 찍어준사진(2024).webp",
        "category": "etc"
    },
    {
        "file": "지옥의 16개월 생환.webp",
        "category": "etc"
    },
    {
        "file": "지옥의 캡사이신 파티.webp",
        "category": "illustration"
    },
    {
        "file": "지옥철 푸시맨.webp",
        "category": "etc"
    },
    {
        "file": "지은민.webp",
        "category": "person"
    },
    {
        "file": "지총민.webp",
        "category": "person"
    },
    {
        "file": "지총민_규탄시위.webp",
        "category": "event"
    },
    {
        "file": "지총민_기자회견.webp",
        "category": "event"
    },
    {
        "file": "지하실.webp",
        "category": "etc"
    },
    {
        "file": "진기현.webp",
        "category": "etc"
    },
    {
        "file": "진레아.webp",
        "category": "etc"
    },
    {
        "file": "진백광정공단_전경.webp",
        "category": "facility_gov"
    },
    {
        "file": "진백역_승강장.webp",
        "category": "station"
    },
    {
        "file": "진보당.svg",
        "category": "logo"
    },
    {
        "file": "진상 컷쏘우.webp",
        "category": "etc"
    },
    {
        "file": "진수혁.webp",
        "category": "etc"
    },
    {
        "file": "진수현.webp",
        "category": "etc"
    },
    {
        "file": "진월천역_4호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "진월천역_빈효선_승강장.webp",
        "category": "station"
    },
    {
        "file": "진월천역_전경.webp",
        "category": "station"
    },
    {
        "file": "진유성.webp",
        "category": "etc"
    },
    {
        "file": "진적역.webp",
        "category": "station"
    },
    {
        "file": "진정한 바다 요정.webp",
        "category": "landscape"
    },
    {
        "file": "진주시.svg",
        "category": "logo"
    },
    {
        "file": "진현보.webp",
        "category": "etc"
    },
    {
        "file": "진희역_승강장.webp",
        "category": "station"
    },
    {
        "file": "짝퉁새끼.webp",
        "category": "etc"
    },
    {
        "file": "짬처리 마스터.webp",
        "category": "etc"
    },
    {
        "file": "찌라시_로고.webp",
        "category": "logo"
    },
    {
        "file": "차가운 스즈네 톤.webp",
        "category": "etc"
    },
    {
        "file": "차등공제.webp",
        "category": "etc"
    },
    {
        "file": "차수호_기자.webp",
        "category": "person"
    },
    {
        "file": "착한 언니 코스프레.webp",
        "category": "person"
    },
    {
        "file": "참이슬 프레시.webp",
        "category": "food"
    },
    {
        "file": "참치김밥의 사치.webp",
        "category": "food"
    },
    {
        "file": "창건동스터디카페.webp",
        "category": "food"
    },
    {
        "file": "창문공원.webp",
        "category": "landmark"
    },
    {
        "file": "창선역_1호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "창선역_본선_승강장.webp",
        "category": "station"
    },
    {
        "file": "창선역_지선_승강장.webp",
        "category": "station"
    },
    {
        "file": "창선역점.webp",
        "category": "station"
    },
    {
        "file": "창율로.webp",
        "category": "road"
    },
    {
        "file": "창전구 행정동 지도.webp",
        "category": "map"
    },
    {
        "file": "창전구.webp",
        "category": "etc"
    },
    {
        "file": "창전구_흰색_로고.webp",
        "category": "logo"
    },
    {
        "file": "창전구_흰색로고.webp",
        "category": "logo"
    },
    {
        "file": "창전구청.webp",
        "category": "facility_gov"
    },
    {
        "file": "창전구청역_승강장.webp",
        "category": "station"
    },
    {
        "file": "창전구청역_창전선_승강장.webp",
        "category": "station"
    },
    {
        "file": "창전구청역점.webp",
        "category": "station"
    },
    {
        "file": "창전동 다이아수저.webp",
        "category": "character"
    },
    {
        "file": "창전로.webp",
        "category": "road"
    },
    {
        "file": "창전병원.webp",
        "category": "facility_com"
    },
    {
        "file": "창전선 홍보대사.webp",
        "category": "etc"
    },
    {
        "file": "창전선_노선도.webp",
        "category": "map"
    },
    {
        "file": "창전아쿠아1단지.webp",
        "category": "facility_com"
    },
    {
        "file": "창전아쿠아2단지.webp",
        "category": "facility_com"
    },
    {
        "file": "창전아쿠아3단지.webp",
        "category": "facility_com"
    },
    {
        "file": "창전여객.webp",
        "category": "bus"
    },
    {
        "file": "창전역_승강장.webp",
        "category": "station"
    },
    {
        "file": "창전중앙시장_유세.webp",
        "category": "facility_com"
    },
    {
        "file": "창전지구_전경.webp",
        "category": "facility_com"
    },
    {
        "file": "창조와 파괴의 여신.webp",
        "category": "etc"
    },
    {
        "file": "채산01.webp",
        "category": "bus"
    },
    {
        "file": "채산02.webp",
        "category": "bus"
    },
    {
        "file": "채산_승강장.webp",
        "category": "station"
    },
    {
        "file": "채산식품단지_전경.webp",
        "category": "facility_com"
    },
    {
        "file": "천_비서실장.webp",
        "category": "person"
    },
    {
        "file": "천가역_승강장.webp",
        "category": "station"
    },
    {
        "file": "천가역_전경.webp",
        "category": "station"
    },
    {
        "file": "천남역.webp",
        "category": "station"
    },
    {
        "file": "천남역_승강장.webp",
        "category": "station"
    },
    {
        "file": "천리나.webp",
        "category": "character"
    },
    {
        "file": "천리내.webp",
        "category": "etc"
    },
    {
        "file": "천석동2가역_승강장.webp",
        "category": "station"
    },
    {
        "file": "천석동3가역_승강장.webp",
        "category": "station"
    },
    {
        "file": "천석초등학교.webp",
        "category": "school"
    },
    {
        "file": "천성구청.webp",
        "category": "facility_gov"
    },
    {
        "file": "천왕사로.webp",
        "category": "road"
    },
    {
        "file": "천왕사역_승강장.webp",
        "category": "station"
    },
    {
        "file": "천조역.webp",
        "category": "station"
    },
    {
        "file": "천조역_승강장.webp",
        "category": "station"
    },
    {
        "file": "천주1호선_노선도.webp",
        "category": "map"
    },
    {
        "file": "천주대학교.webp",
        "category": "school"
    },
    {
        "file": "천주시 시내버스.webp",
        "category": "bus"
    },
    {
        "file": "천주시.webp",
        "category": "etc"
    },
    {
        "file": "천주시청.webp",
        "category": "facility_gov"
    },
    {
        "file": "천주시청역_승강장.webp",
        "category": "station"
    },
    {
        "file": "천주시청역_전경.webp",
        "category": "station"
    },
    {
        "file": "천주역 내부.webp",
        "category": "etc"
    },
    {
        "file": "천주역_빈효선_승강장.webp",
        "category": "station"
    },
    {
        "file": "천주역_일반열차_승강장.webp",
        "category": "station"
    },
    {
        "file": "천주역_일반열차_전경.webp",
        "category": "station"
    },
    {
        "file": "천주중앙역_승강장.webp",
        "category": "station"
    },
    {
        "file": "천주중앙역_전경.webp",
        "category": "station"
    },
    {
        "file": "철덕일기 (2).webp",
        "category": "character"
    },
    {
        "file": "철덕일기_포스터.webp",
        "category": "logo"
    },
    {
        "file": "철도박물관_전경.webp",
        "category": "landscape"
    },
    {
        "file": "철도부_포스터1.webp",
        "category": "logo"
    },
    {
        "file": "철도부_포스터2.webp",
        "category": "logo"
    },
    {
        "file": "철도실습1.webp",
        "category": "etc"
    },
    {
        "file": "철도안전법 제48조.webp",
        "category": "etc"
    },
    {
        "file": "철도애니박물관 1층.webp",
        "category": "etc"
    },
    {
        "file": "철도애니박물관 2층.webp",
        "category": "etc"
    },
    {
        "file": "철도애니박물관 3층 .webp",
        "category": "etc"
    },
    {
        "file": "철도애니박물관 CU.webp",
        "category": "etc"
    },
    {
        "file": "철도애니박물관 루프탑.webp",
        "category": "etc"
    },
    {
        "file": "철도애니박물관 지하.webp",
        "category": "etc"
    },
    {
        "file": "철도애니박물관 콜라보 카페.webp",
        "category": "merch"
    },
    {
        "file": "철도운전학과 과잠.webp",
        "category": "illustration"
    },
    {
        "file": "철야의 정책 기획.webp",
        "category": "etc"
    },
    {
        "file": "철저한 옷매무새.webp",
        "category": "etc"
    },
    {
        "file": "청능도매종합시장.webp",
        "category": "facility_com"
    },
    {
        "file": "청능역_승강장.webp",
        "category": "station"
    },
    {
        "file": "청덕 다이버시티 아파트.webp",
        "category": "facility_com"
    },
    {
        "file": "청덕공원역_승강장.webp",
        "category": "station"
    },
    {
        "file": "청덕다이버시티 아파트.webp",
        "category": "facility_com"
    },
    {
        "file": "청덕레인보우타운아파트.webp",
        "category": "facility_com"
    },
    {
        "file": "청덕역_2호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "청덕역_3_승강장.webp",
        "category": "station"
    },
    {
        "file": "청덕중앙로.webp",
        "category": "road"
    },
    {
        "file": "청덕지구_전경.webp",
        "category": "facility_com"
    },
    {
        "file": "청덕차량사업소_지도.webp",
        "category": "map"
    },
    {
        "file": "청선여객.webp",
        "category": "bus"
    },
    {
        "file": "청선인자선_노선도.webp",
        "category": "map"
    },
    {
        "file": "청엽구 행정동 지도.webp",
        "category": "map"
    },
    {
        "file": "청엽구.webp",
        "category": "etc"
    },
    {
        "file": "청엽구_흰색로고.webp",
        "category": "logo"
    },
    {
        "file": "청엽구청.webp",
        "category": "facility_gov"
    },
    {
        "file": "청엽구청역_승강장1.webp",
        "category": "station"
    },
    {
        "file": "청엽구청역_승강장3.webp",
        "category": "station"
    },
    {
        "file": "청엽구청역점.webp",
        "category": "station"
    },
    {
        "file": "청엽국제학교역_승강장.webp",
        "category": "station"
    },
    {
        "file": "청엽로.webp",
        "category": "road"
    },
    {
        "file": "청엽병원.webp",
        "category": "facility_com"
    },
    {
        "file": "청엽선_노선도.webp",
        "category": "map"
    },
    {
        "file": "청엽아쿠아 1차.webp",
        "category": "facility_com"
    },
    {
        "file": "청엽아쿠아2차.webp",
        "category": "facility_com"
    },
    {
        "file": "청엽여객.webp",
        "category": "bus"
    },
    {
        "file": "청엽역_빵지순례.webp",
        "category": "station"
    },
    {
        "file": "청엽역_승강장.webp",
        "category": "station"
    },
    {
        "file": "청엽중앙로.webp",
        "category": "road"
    },
    {
        "file": "청엽지구.webp",
        "category": "facility_com"
    },
    {
        "file": "청엽지구_전경.webp",
        "category": "facility_com"
    },
    {
        "file": "청해역.webp",
        "category": "station"
    },
    {
        "file": "체력 단련 시간.webp",
        "category": "etc"
    },
    {
        "file": "체크리스트 확인.webp",
        "category": "document"
    },
    {
        "file": "초3 수학 수포자 짤.webp",
        "category": "etc"
    },
    {
        "file": "초대형 아바라의 축복.webp",
        "category": "etc"
    },
    {
        "file": "초딩 동생의 협박.webp",
        "category": "person"
    },
    {
        "file": "초코 소라빵의 여유.webp",
        "category": "food"
    },
    {
        "file": "초코바 수혈.webp",
        "category": "food"
    },
    {
        "file": "촌주역.webp",
        "category": "station"
    },
    {
        "file": "최_부장판사.webp",
        "category": "etc"
    },
    {
        "file": "최강한.webp",
        "category": "person"
    },
    {
        "file": "최대현.webp",
        "category": "person"
    },
    {
        "file": "최대현_카스미_빅네소.webp",
        "category": "merch"
    },
    {
        "file": "최동혁.webp",
        "category": "person"
    },
    {
        "file": "최두식.webp",
        "category": "person"
    },
    {
        "file": "최말구.webp",
        "category": "etc"
    },
    {
        "file": "최민규.webp",
        "category": "person"
    },
    {
        "file": "최수아_직원_인터뷰.webp",
        "category": "etc"
    },
    {
        "file": "최유리.webp",
        "category": "etc"
    },
    {
        "file": "최정아.webp",
        "category": "person"
    },
    {
        "file": "최지훈_감독.webp",
        "category": "person"
    },
    {
        "file": "최진호.webp",
        "category": "etc"
    },
    {
        "file": "최현수.webp",
        "category": "person"
    },
    {
        "file": "최형석 띱빡.webp",
        "category": "person"
    },
    {
        "file": "최형석.webp",
        "category": "person"
    },
    {
        "file": "쵸후 노리코.webp",
        "category": "character"
    },
    {
        "file": "쵸후_노리코.webp",
        "category": "character"
    },
    {
        "file": "추산령.webp",
        "category": "etc"
    },
    {
        "file": "추산역_승강장.webp",
        "category": "station"
    },
    {
        "file": "추산차량사업소_지도.webp",
        "category": "map"
    },
    {
        "file": "추자역_승강장.webp",
        "category": "station"
    },
    {
        "file": "추하다.webp",
        "category": "etc"
    },
    {
        "file": "축제배경.webp",
        "category": "event"
    },
    {
        "file": "출근길의 자매.webp",
        "category": "illustration"
    },
    {
        "file": "출사 vs 시험.webp",
        "category": "etc"
    },
    {
        "file": "출사 배틀.webp",
        "category": "etc"
    },
    {
        "file": "충남대.svg",
        "category": "logo"
    },
    {
        "file": "충남도청_핸드볼_로고.svg",
        "category": "facility_gov"
    },
    {
        "file": "충북대.svg",
        "category": "logo"
    },
    {
        "file": "충승당.webp",
        "category": "etc"
    },
    {
        "file": "충청남도.svg",
        "category": "logo"
    },
    {
        "file": "충청북도.svg",
        "category": "logo"
    },
    {
        "file": "츠루마키 코코로.webp",
        "category": "road"
    },
    {
        "file": "츠시마 요시코.webp",
        "category": "character"
    },
    {
        "file": "츠즈츠즈사인.webp",
        "category": "logo"
    },
    {
        "file": "츠즈츠즈츠즈.webp",
        "category": "etc"
    },
    {
        "file": "츠치노코봇치.webp",
        "category": "character"
    },
    {
        "file": "츠치노코봇치피규어.webp",
        "category": "merch"
    },
    {
        "file": "치고대학교_UI.webp",
        "category": "school"
    },
    {
        "file": "치구역_승강장.webp",
        "category": "station"
    },
    {
        "file": "치남역_승강장.webp",
        "category": "station"
    },
    {
        "file": "치사쿠쿠1.webp",
        "category": "character"
    },
    {
        "file": "치원군 농어촌버스.webp",
        "category": "bus"
    },
    {
        "file": "치원군 후등면 고토 히토리 동상 조감도.webp",
        "category": "map"
    },
    {
        "file": "치원군.webp",
        "category": "etc"
    },
    {
        "file": "치원군청 앞 트랙터 시위 현장.webp",
        "category": "facility_gov"
    },
    {
        "file": "치원군청.webp",
        "category": "facility_gov"
    },
    {
        "file": "치원남부중학교 전경 및 윤간석 후보 선거사무소.webp",
        "category": "school"
    },
    {
        "file": "치이카논1.webp",
        "category": "character"
    },
    {
        "file": "치이카논2.webp",
        "category": "character"
    },
    {
        "file": "치즈 참치김밥의 축복.webp",
        "category": "food"
    },
    {
        "file": "치카 싱크로율.webp",
        "category": "character"
    },
    {
        "file": "치카.webp",
        "category": "character"
    },
    {
        "file": "치카치카사인.webp",
        "category": "logo"
    },
    {
        "file": "치카치카치카.webp",
        "category": "character"
    },
    {
        "file": "치하야 아논.webp",
        "category": "character"
    },
    {
        "file": "칠라로.webp",
        "category": "road"
    },
    {
        "file": "칠심_승강장.webp",
        "category": "station"
    },
    {
        "file": "칠심역_창전선_승강장.webp",
        "category": "station"
    },
    {
        "file": "칠양여객.webp",
        "category": "bus"
    },
    {
        "file": "칠양여객_이타샤.webp",
        "category": "bus"
    },
    {
        "file": "칠채01.webp",
        "category": "bus"
    },
    {
        "file": "칠천역_서브컬처.webp",
        "category": "station"
    },
    {
        "file": "칠천역_승강장.webp",
        "category": "station"
    },
    {
        "file": "칭다오 사변 당시(2019).webp",
        "category": "event"
    },
    {
        "file": "칭찬은 정상입니다.webp",
        "category": "etc"
    },
    {
        "file": "카나메 라나.webp",
        "category": "person"
    },
    {
        "file": "카나자와 미라클.webp",
        "category": "person"
    },
    {
        "file": "카나타 강림.webp",
        "category": "person"
    },
    {
        "file": "카나타마을버스.webp",
        "category": "bus"
    },
    {
        "file": "카난.webp",
        "category": "character"
    },
    {
        "file": "카난카난사인.webp",
        "category": "logo"
    },
    {
        "file": "카난카난카난.webp",
        "category": "character"
    },
    {
        "file": "카논쿠쿠1.webp",
        "category": "character"
    },
    {
        "file": "카논쿠쿠2.webp",
        "category": "character"
    },
    {
        "file": "카린광역버스.webp",
        "category": "bus"
    },
    {
        "file": "카메라 렌즈 사수.webp",
        "category": "character"
    },
    {
        "file": "카스미 열차 내부.webp",
        "category": "train"
    },
    {
        "file": "카스미_임세하_하루빈_콜라보 (2).webp",
        "category": "merch"
    },
    {
        "file": "카스미_임세하_하루빈_콜라보 (3).webp",
        "category": "merch"
    },
    {
        "file": "카스미_임세하_하루빈_콜라보.webp",
        "category": "merch"
    },
    {
        "file": "카스미로.webp",
        "category": "road"
    },
    {
        "file": "카스미순환버스.webp",
        "category": "bus"
    },
    {
        "file": "카스미아파트.webp",
        "category": "facility_com"
    },
    {
        "file": "카스카스 도플갱어.webp",
        "category": "etc"
    },
    {
        "file": "카와라기 모모카.webp",
        "category": "character"
    },
    {
        "file": "카즈노 리아.webp",
        "category": "character"
    },
    {
        "file": "카즈노 세이라.webp",
        "category": "character"
    },
    {
        "file": "카츠라기 이즈미.webp",
        "category": "character"
    },
    {
        "file": "카츠라기_이즈미_극장판.webp",
        "category": "character"
    },
    {
        "file": "카치마치 코스즈.webp",
        "category": "character"
    },
    {
        "file": "카치마치_코스즈_극장판.webp",
        "category": "character"
    },
    {
        "file": "카페의 기안서.webp",
        "category": "document"
    },
    {
        "file": "카호카호사인.webp",
        "category": "logo"
    },
    {
        "file": "카호카호카호.webp",
        "category": "character"
    },
    {
        "file": "캐릭터 티셔츠 패션.webp",
        "category": "merch"
    },
    {
        "file": "케손로.webp",
        "category": "road"
    },
    {
        "file": "케손시티.webp",
        "category": "etc"
    },
    {
        "file": "케손시티_시장_영상.webp",
        "category": "facility_com"
    },
    {
        "file": "케이블 타이 마술사.webp",
        "category": "etc"
    },
    {
        "file": "케이온 1기 이미지 싱글 리츠.webp",
        "category": "character"
    },
    {
        "file": "케이온 1기 이미지 싱글 무기.webp",
        "category": "character"
    },
    {
        "file": "케이온 1기 이미지 싱글 아즈사.webp",
        "category": "character"
    },
    {
        "file": "케이온 1기 이미지 싱글 우이.webp",
        "category": "character"
    },
    {
        "file": "케이온 1기 이미지 싱글 유이.webp",
        "category": "character"
    },
    {
        "file": "케이온 1기 이미지 싱글.webp",
        "category": "character"
    },
    {
        "file": "케이온 2기 이미지 싱글 리츠.webp",
        "category": "character"
    },
    {
        "file": "케이온 2기 이미지 싱글 무기.webp",
        "category": "character"
    },
    {
        "file": "케이온 2기 이미지 싱글 우이.webp",
        "category": "character"
    },
    {
        "file": "케이온 2기 이미지 싱글 유이.webp",
        "category": "character"
    },
    {
        "file": "코노에 카나타.webp",
        "category": "person"
    },
    {
        "file": "코노하나 오로라.webp",
        "category": "etc"
    },
    {
        "file": "코레일 무제한 법인카드.webp",
        "category": "merch"
    },
    {
        "file": "코레일 본부장의 픽.webp",
        "category": "facility_gov"
    },
    {
        "file": "코레일_로고.svg",
        "category": "logo"
    },
    {
        "file": "코레일_마닐라_수주.webp",
        "category": "etc"
    },
    {
        "file": "코레일의 양딸.webp",
        "category": "etc"
    },
    {
        "file": "코로나 엑스트라 마에다 카오리.webp",
        "category": "etc"
    },
    {
        "file": "코마가타 하나비.webp",
        "category": "etc"
    },
    {
        "file": "코사카 호노카.webp",
        "category": "character"
    },
    {
        "file": "코스 요리 극혐.webp",
        "category": "etc"
    },
    {
        "file": "코스트코_로고.svg",
        "category": "logo"
    },
    {
        "file": "코스트코_로고.webp",
        "category": "logo"
    },
    {
        "file": "코스트코_이자점_전경.webp",
        "category": "landscape"
    },
    {
        "file": "코스트코_효빈점_전경.webp",
        "category": "landscape"
    },
    {
        "file": "코스프레_준비.webp",
        "category": "etc"
    },
    {
        "file": "코스프레_퍼레이드_인파.webp",
        "category": "etc"
    },
    {
        "file": "코이즈미 하나요.webp",
        "category": "character"
    },
    {
        "file": "코즈코즈사인.webp",
        "category": "logo"
    },
    {
        "file": "코즈코즈코즈.webp",
        "category": "etc"
    },
    {
        "file": "코타츠 마개조.webp",
        "category": "illustration"
    },
    {
        "file": "코토부키 츠무기.webp",
        "category": "character"
    },
    {
        "file": "콜라보시티투어버스(1).webp",
        "category": "bus"
    },
    {
        "file": "콜라보시티투어버스.webp",
        "category": "bus"
    },
    {
        "file": "쾌감펀치..webp",
        "category": "etc"
    },
    {
        "file": "쿠노 미사키.webp",
        "category": "character"
    },
    {
        "file": "쿠니키다 하나마루.webp",
        "category": "character"
    },
    {
        "file": "쿠라타 마시로.webp",
        "category": "road"
    },
    {
        "file": "쿠로사와 다이아.webp",
        "category": "character"
    },
    {
        "file": "쿠로사와 루비 신프로필.webp",
        "category": "character"
    },
    {
        "file": "쿠로사와 루비.webp",
        "category": "character"
    },
    {
        "file": "쿠쿠카논2.webp",
        "category": "character"
    },
    {
        "file": "크리스마스의 기적.webp",
        "category": "etc"
    },
    {
        "file": "크리스마스의 산타걸.webp",
        "category": "etc"
    },
    {
        "file": "키라 츠바사.webp",
        "category": "character"
    },
    {
        "file": "키라키라 도키도키!.webp",
        "category": "etc"
    },
    {
        "file": "키리가야 토우코.webp",
        "category": "character"
    },
    {
        "file": "키움_히어로즈_로고.svg",
        "category": "logo"
    },
    {
        "file": "키타 이쿠요.webp",
        "category": "character"
    },
    {
        "file": "키타자와 하구미.webp",
        "category": "character"
    },
    {
        "file": "키탕.webp",
        "category": "etc"
    },
    {
        "file": "키토 아카리.webp",
        "category": "person"
    },
    {
        "file": "키토그림1.webp",
        "category": "etc"
    },
    {
        "file": "키토그림2.webp",
        "category": "etc"
    },
    {
        "file": "키토그림3.webp",
        "category": "etc"
    },
    {
        "file": "킨죠 마이카.webp",
        "category": "character"
    },
    {
        "file": "타네자키 아츠미.webp",
        "category": "etc"
    },
    {
        "file": "타에 열차 내부.webp",
        "category": "train"
    },
    {
        "file": "타이나카 리츠.webp",
        "category": "character"
    },
    {
        "file": "타임빌라스_로고.svg",
        "category": "logo"
    },
    {
        "file": "타자 800타의 위엄.webp",
        "category": "etc"
    },
    {
        "file": "타천역_승강장.webp",
        "category": "station"
    },
    {
        "file": "타천역_전경.webp",
        "category": "station"
    },
    {
        "file": "타카마츠 토모리.webp",
        "category": "character"
    },
    {
        "file": "타카미 치카.webp",
        "category": "character"
    },
    {
        "file": "타카사키 유우.webp",
        "category": "character"
    },
    {
        "file": "타카하시 폴카.webp",
        "category": "etc"
    },
    {
        "file": "타카하시_폴카.webp",
        "category": "etc"
    },
    {
        "file": "탁민석.webp",
        "category": "person"
    },
    {
        "file": "탄미역_승강장.webp",
        "category": "station"
    },
    {
        "file": "탄미역_전경.webp",
        "category": "station"
    },
    {
        "file": "탄성 아쿠아아파트.webp",
        "category": "facility_com"
    },
    {
        "file": "탄성-승남항.webp",
        "category": "etc"
    },
    {
        "file": "탄성01.webp",
        "category": "bus"
    },
    {
        "file": "탄성01번버스.webp",
        "category": "bus"
    },
    {
        "file": "탄성02.webp",
        "category": "bus"
    },
    {
        "file": "탄성군 읍면 지도.webp",
        "category": "map"
    },
    {
        "file": "탄성군.webp",
        "category": "etc"
    },
    {
        "file": "탄성군_흰색로고.webp",
        "category": "logo"
    },
    {
        "file": "탄성군청.webp",
        "category": "facility_gov"
    },
    {
        "file": "탄성군청역_승강장.webp",
        "category": "station"
    },
    {
        "file": "탄성군청역_전경.webp",
        "category": "station"
    },
    {
        "file": "탄성여객.webp",
        "category": "bus"
    },
    {
        "file": "탄성역_승강장.webp",
        "category": "station"
    },
    {
        "file": "탄성역_전경.webp",
        "category": "station"
    },
    {
        "file": "탄자역_승강장.webp",
        "category": "station"
    },
    {
        "file": "탄핵가결.webp",
        "category": "event"
    },
    {
        "file": "탕 쿠쿠.webp",
        "category": "character"
    },
    {
        "file": "탕천역.webp",
        "category": "station"
    },
    {
        "file": "탕쿠쿠_등신대.webp",
        "category": "character"
    },
    {
        "file": "탕쿠쿠_등신대_수리.webp",
        "category": "character"
    },
    {
        "file": "탕쿠쿠_카페_인증샷.webp",
        "category": "food"
    },
    {
        "file": "탕쿠쿠_파일.webp",
        "category": "character"
    },
    {
        "file": "탕쿠쿠대첩_당시.webp",
        "category": "character"
    },
    {
        "file": "탕쿠쿠엔드카드.webp",
        "category": "merch"
    },
    {
        "file": "탕쿠쿠잡지.webp",
        "category": "character"
    },
    {
        "file": "태상훈.webp",
        "category": "etc"
    },
    {
        "file": "태인역_전경.webp",
        "category": "station"
    },
    {
        "file": "터미널_내부.webp",
        "category": "bus"
    },
    {
        "file": "터질듯한 셔츠 단추.webp",
        "category": "etc"
    },
    {
        "file": "텀블러.webp",
        "category": "etc"
    },
    {
        "file": "텅장 탈출 기원.webp",
        "category": "etc"
    },
    {
        "file": "테러범_검거현장.webp",
        "category": "event"
    },
    {
        "file": "테마역사.webp",
        "category": "station"
    },
    {
        "file": "텐노지 리나.webp",
        "category": "character"
    },
    {
        "file": "토가와 사키코.webp",
        "category": "character"
    },
    {
        "file": "토도 에레나.webp",
        "category": "character"
    },
    {
        "file": "토론회 인신공격.webp",
        "category": "etc"
    },
    {
        "file": "토마역.webp",
        "category": "station"
    },
    {
        "file": "토모리로.webp",
        "category": "road"
    },
    {
        "file": "토모리해수욕장.webp",
        "category": "landmark"
    },
    {
        "file": "토목대 복지관역_승강장.webp",
        "category": "station"
    },
    {
        "file": "토야마 카스미.webp",
        "category": "character"
    },
    {
        "file": "토이저러스_로고.svg",
        "category": "logo"
    },
    {
        "file": "토정역.webp",
        "category": "station"
    },
    {
        "file": "토정역_승강장.webp",
        "category": "station"
    },
    {
        "file": "토죠 노조미.webp",
        "category": "character"
    },
    {
        "file": "토치만호텔.webp",
        "category": "facility_com"
    },
    {
        "file": "통장 잔고 방어전.webp",
        "category": "illustration"
    },
    {
        "file": "통장 잔고 확인.webp",
        "category": "etc"
    },
    {
        "file": "통장 잔고 힐링.webp",
        "category": "etc"
    },
    {
        "file": "퇴근 10분 전.webp",
        "category": "illustration"
    },
    {
        "file": "퇴근 1분 전.webp",
        "category": "illustration"
    },
    {
        "file": "퇴근 후 섀도우 복싱.webp",
        "category": "illustration"
    },
    {
        "file": "퇴직소득계산.webp",
        "category": "document"
    },
    {
        "file": "투사의 귀환.webp",
        "category": "etc"
    },
    {
        "file": "투자 모르포니카 아파트.webp",
        "category": "facility_com"
    },
    {
        "file": "투자역_승강장.webp",
        "category": "station"
    },
    {
        "file": "트램실습.webp",
        "category": "train"
    },
    {
        "file": "트램의 수호신.webp",
        "category": "train"
    },
    {
        "file": "트레이더스_로고.svg",
        "category": "facility_com"
    },
    {
        "file": "트레이더스_홀세일_클럽_로고.svg",
        "category": "facility_com"
    },
    {
        "file": "트레이더스_홀세일_클럽_평당곽산점.webp",
        "category": "facility_com"
    },
    {
        "file": "트레이더스_홀세일_클럽_효빈점.webp",
        "category": "facility_com"
    },
    {
        "file": "트레이더스_홀세일_클럽_흑택점.webp",
        "category": "facility_com"
    },
    {
        "file": "특별 교육 ASMR.webp",
        "category": "etc"
    },
    {
        "file": "특별 단속반 출동.webp",
        "category": "etc"
    },
    {
        "file": "파괴적인 장갑 연합.webp",
        "category": "etc"
    },
    {
        "file": "파란 궤도의 지배자.webp",
        "category": "character"
    },
    {
        "file": "파레오.webp",
        "category": "character"
    },
    {
        "file": "파스타.webp",
        "category": "food"
    },
    {
        "file": "파스파레_굿즈.webp",
        "category": "merch"
    },
    {
        "file": "파스파레_앨범.webp",
        "category": "merch"
    },
    {
        "file": "파스파레로고.svg",
        "category": "logo"
    },
    {
        "file": "파일명.webp",
        "category": "etc"
    },
    {
        "file": "판주여객.webp",
        "category": "bus"
    },
    {
        "file": "판주역.webp",
        "category": "station"
    },
    {
        "file": "판주역_승강장.webp",
        "category": "station"
    },
    {
        "file": "팔망성역_승강장.webp",
        "category": "station"
    },
    {
        "file": "팔원역.webp",
        "category": "station"
    },
    {
        "file": "팔조역_승강장.webp",
        "category": "station"
    },
    {
        "file": "팔조지구_전경.webp",
        "category": "facility_com"
    },
    {
        "file": "팔조차량사업소_지도.webp",
        "category": "map"
    },
    {
        "file": "팔천고등학교로고.webp",
        "category": "school"
    },
    {
        "file": "팩트 폭격기.webp",
        "category": "event"
    },
    {
        "file": "팩트체크 봇.webp",
        "category": "etc"
    },
    {
        "file": "페이튼 나오미.webp",
        "category": "person"
    },
    {
        "file": "펜타곤시티.webp",
        "category": "etc"
    },
    {
        "file": "편순이리코2..webp",
        "category": "character"
    },
    {
        "file": "평당6동주민센터역_승강장.webp",
        "category": "station"
    },
    {
        "file": "평당6동주민센터역_전경.webp",
        "category": "station"
    },
    {
        "file": "평당고등학교역_승강장.webp",
        "category": "station"
    },
    {
        "file": "평당고등학교역_전경.webp",
        "category": "station"
    },
    {
        "file": "평당대로.webp",
        "category": "road"
    },
    {
        "file": "평당동.webp",
        "category": "etc"
    },
    {
        "file": "평당역_승강장.webp",
        "category": "station"
    },
    {
        "file": "평당장애인복지관역_승강장.webp",
        "category": "station"
    },
    {
        "file": "평당장애인복지관역_전경.webp",
        "category": "station"
    },
    {
        "file": "평당차량사업소_지도.webp",
        "category": "map"
    },
    {
        "file": "평범박물관.webp",
        "category": "etc"
    },
    {
        "file": "평안남도.svg",
        "category": "logo"
    },
    {
        "file": "평안명대_과방.webp",
        "category": "school"
    },
    {
        "file": "평안명대학교_UI.webp",
        "category": "school"
    },
    {
        "file": "평안북도.svg",
        "category": "logo"
    },
    {
        "file": "평운역_승강장.webp",
        "category": "station"
    },
    {
        "file": "평운역_전경.webp",
        "category": "station"
    },
    {
        "file": "평전공단_전경.webp",
        "category": "facility_gov"
    },
    {
        "file": "평전역_승강장.webp",
        "category": "station"
    },
    {
        "file": "평천대학교.webp",
        "category": "school"
    },
    {
        "file": "평천대학교_UI.webp",
        "category": "school"
    },
    {
        "file": "폐쇄공포증 발작.webp",
        "category": "etc"
    },
    {
        "file": "포산역_승강장.webp",
        "category": "station"
    },
    {
        "file": "포성산_전경.webp",
        "category": "landmark"
    },
    {
        "file": "포성산역_승강장.webp",
        "category": "station"
    },
    {
        "file": "포성산역_전경.webp",
        "category": "station"
    },
    {
        "file": "포아이즈.webp",
        "category": "character"
    },
    {
        "file": "포장공단역_전경.webp",
        "category": "station"
    },
    {
        "file": "포항스틸러스_로고.svg",
        "category": "logo"
    },
    {
        "file": "폭주 기관차 제동.webp",
        "category": "train"
    },
    {
        "file": "폰케이스.webp",
        "category": "etc"
    },
    {
        "file": "폴리텍.svg",
        "category": "logo"
    },
    {
        "file": "폴카폴카폴카.webp",
        "category": "etc"
    },
    {
        "file": "푸른 궤도의 슬렌더.webp",
        "category": "character"
    },
    {
        "file": "풍영여객선터미널.webp",
        "category": "bus"
    },
    {
        "file": "풍영역.webp",
        "category": "station"
    },
    {
        "file": "풍영역_승강장.webp",
        "category": "station"
    },
    {
        "file": "풍영차량사업소_내부.webp",
        "category": "train"
    },
    {
        "file": "풍은역.webp",
        "category": "station"
    },
    {
        "file": "풍은역_2호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "풍은역_일반열차_승강장.webp",
        "category": "station"
    },
    {
        "file": "풍은차량사업소.webp",
        "category": "train"
    },
    {
        "file": "풍천복지재단.webp",
        "category": "facility_gov"
    },
    {
        "file": "피로 누적.webp",
        "category": "etc"
    },
    {
        "file": "필리핀식 스파게티.webp",
        "category": "etc"
    },
    {
        "file": "필리핀어학과 과잠.webp",
        "category": "illustration"
    },
    {
        "file": "필리핀의 추억.webp",
        "category": "etc"
    },
    {
        "file": "필사적인 일코 해제.webp",
        "category": "etc"
    },
    {
        "file": "필어필문학과.webp",
        "category": "etc"
    },
    {
        "file": "하가역_2호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "하가역_4호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "하나로마트_로고.svg",
        "category": "facility_com"
    },
    {
        "file": "하나마루.webp",
        "category": "character"
    },
    {
        "file": "하나자와 카나.webp",
        "category": "person"
    },
    {
        "file": "하나조노 타에.webp",
        "category": "character"
    },
    {
        "file": "하남시청_핸드볼_로고.svg",
        "category": "facility_gov"
    },
    {
        "file": "하내장역_승강장.webp",
        "category": "station"
    },
    {
        "file": "하내장역_전경.webp",
        "category": "station"
    },
    {
        "file": "하루미야 유쿠리.webp",
        "category": "character"
    },
    {
        "file": "하루빈 2호선래핑.webp",
        "category": "character"
    },
    {
        "file": "하루빈 로고.webp",
        "category": "logo"
    },
    {
        "file": "하루빈 사복.webp",
        "category": "character"
    },
    {
        "file": "하루빈 열차 내부.webp",
        "category": "train"
    },
    {
        "file": "하루빈 태피.webp",
        "category": "merch"
    },
    {
        "file": "하루빈 프로필.webp",
        "category": "character"
    },
    {
        "file": "하루빈.webp",
        "category": "person"
    },
    {
        "file": "하루빈sd.webp",
        "category": "character"
    },
    {
        "file": "하루빈_긴장함_투명.webp",
        "category": "character"
    },
    {
        "file": "하루빈_넨도.webp",
        "category": "merch"
    },
    {
        "file": "하루빈_노트.webp",
        "category": "character"
    },
    {
        "file": "하루빈_놀람_투명.webp",
        "category": "character"
    },
    {
        "file": "하루빈_동물머리띠_투명.webp",
        "category": "merch"
    },
    {
        "file": "하루빈_많이피곤_투명.webp",
        "category": "character"
    },
    {
        "file": "하루빈_먹여주기_투명.webp",
        "category": "character"
    },
    {
        "file": "하루빈_메롱_투명.webp",
        "category": "character"
    },
    {
        "file": "하루빈_무표정_투명.webp",
        "category": "character"
    },
    {
        "file": "하루빈_볼펜.webp",
        "category": "character"
    },
    {
        "file": "하루빈_부끄러움_투명.webp",
        "category": "character"
    },
    {
        "file": "하루빈_슬픔_투명.webp",
        "category": "character"
    },
    {
        "file": "하루빈_아빠.webp",
        "category": "person"
    },
    {
        "file": "하루빈_애교_투명.webp",
        "category": "character"
    },
    {
        "file": "하루빈_엄마.webp",
        "category": "person"
    },
    {
        "file": "하루빈_웃음_투명.webp",
        "category": "character"
    },
    {
        "file": "하루빈_윙크_투명.webp",
        "category": "character"
    },
    {
        "file": "하루빈_입벌리기_투명.webp",
        "category": "character"
    },
    {
        "file": "하루빈_입술내밀기_투명.webp",
        "category": "character"
    },
    {
        "file": "하루빈_잠자기_투명.webp",
        "category": "character"
    },
    {
        "file": "하루빈_지우개.webp",
        "category": "character"
    },
    {
        "file": "하루빈_질투_투명.webp",
        "category": "character"
    },
    {
        "file": "하루빈_피곤함_투명.webp",
        "category": "character"
    },
    {
        "file": "하루빈_피규어.webp",
        "category": "merch"
    },
    {
        "file": "하루빈_하트_투명.webp",
        "category": "character"
    },
    {
        "file": "하루빈_행복_투명.webp",
        "category": "character"
    },
    {
        "file": "하루빈_홀더.webp",
        "category": "facility_com"
    },
    {
        "file": "하루빈_화남_투명.webp",
        "category": "character"
    },
    {
        "file": "하루빈가족.webp",
        "category": "person"
    },
    {
        "file": "하루빈고나미임세정 (2).webp",
        "category": "character"
    },
    {
        "file": "하루빈고나미임세정 (3).webp",
        "category": "character"
    },
    {
        "file": "하루빈고나미임세정.webp",
        "category": "character"
    },
    {
        "file": "하루빈네소베리.webp",
        "category": "merch"
    },
    {
        "file": "하루빈로.webp",
        "category": "road"
    },
    {
        "file": "하루빈방.webp",
        "category": "character"
    },
    {
        "file": "하루빈뱃지.webp",
        "category": "merch"
    },
    {
        "file": "하루아.webp",
        "category": "person"
    },
    {
        "file": "하미역_조감도.webp",
        "category": "map"
    },
    {
        "file": "하미차량기지_지도.webp",
        "category": "map"
    },
    {
        "file": "하성민.webp",
        "category": "person"
    },
    {
        "file": "하성천역_승강장.webp",
        "category": "station"
    },
    {
        "file": "하성천역_전경.webp",
        "category": "station"
    },
    {
        "file": "하성천역_창전선_승강장.webp",
        "category": "station"
    },
    {
        "file": "하원역.webp",
        "category": "station"
    },
    {
        "file": "하원역_승강장.webp",
        "category": "station"
    },
    {
        "file": "하자와 츠구미.webp",
        "category": "character"
    },
    {
        "file": "하정시.webp",
        "category": "etc"
    },
    {
        "file": "하정시청.webp",
        "category": "facility_gov"
    },
    {
        "file": "하정여객 버스.webp",
        "category": "bus"
    },
    {
        "file": "하정역.webp",
        "category": "station"
    },
    {
        "file": "하정역_승강장.webp",
        "category": "station"
    },
    {
        "file": "하정역_일반선_승강장.webp",
        "category": "station"
    },
    {
        "file": "하즈키 렌.webp",
        "category": "character"
    },
    {
        "file": "하진수.webp",
        "category": "person"
    },
    {
        "file": "학사경고의 요정.webp",
        "category": "etc"
    },
    {
        "file": "학생A.webp",
        "category": "person"
    },
    {
        "file": "학생B.webp",
        "category": "person"
    },
    {
        "file": "학생C.webp",
        "category": "person"
    },
    {
        "file": "학생_E.webp",
        "category": "person"
    },
    {
        "file": "학생복지회관.webp",
        "category": "facility_com"
    },
    {
        "file": "학전역.webp",
        "category": "station"
    },
    {
        "file": "한광호.webp",
        "category": "etc"
    },
    {
        "file": "한국가스공사_페가수스_로고.svg",
        "category": "facility_gov"
    },
    {
        "file": "한국철도공사 791000호대.webp",
        "category": "train"
    },
    {
        "file": "한국핸드볼연맹_로고.svg",
        "category": "logo"
    },
    {
        "file": "한도초과.webp",
        "category": "etc"
    },
    {
        "file": "한바다 SD.webp",
        "category": "landscape"
    },
    {
        "file": "한바다 네소 앉음.webp",
        "category": "landscape"
    },
    {
        "file": "한바다 네소베리.webp",
        "category": "landscape"
    },
    {
        "file": "한바다 넨도.webp",
        "category": "landscape"
    },
    {
        "file": "한바다 메이드복.webp",
        "category": "landscape"
    },
    {
        "file": "한바다 뱃지 머리긴버전.webp",
        "category": "landscape"
    },
    {
        "file": "한바다 스케일피규어.webp",
        "category": "landscape"
    },
    {
        "file": "한바다 에코백.webp",
        "category": "landscape"
    },
    {
        "file": "한바다 창선역.webp",
        "category": "station"
    },
    {
        "file": "한바다 태피.webp",
        "category": "landscape"
    },
    {
        "file": "한바다_SD일러스트.webp",
        "category": "landscape"
    },
    {
        "file": "한바다_구출_장면.webp",
        "category": "landscape"
    },
    {
        "file": "한바다_네소.webp",
        "category": "landscape"
    },
    {
        "file": "한바다_네소2.webp",
        "category": "landscape"
    },
    {
        "file": "한바다_노트.webp",
        "category": "landscape"
    },
    {
        "file": "한바다_대통령상.webp",
        "category": "landscape"
    },
    {
        "file": "한바다_덕질2.webp",
        "category": "landscape"
    },
    {
        "file": "한바다_덕질3.webp",
        "category": "landscape"
    },
    {
        "file": "한바다_덕질4.webp",
        "category": "landscape"
    },
    {
        "file": "한바다_덕질5.webp",
        "category": "landscape"
    },
    {
        "file": "한바다_볼펜.webp",
        "category": "landscape"
    },
    {
        "file": "한바다_블레이드1.webp",
        "category": "landscape"
    },
    {
        "file": "한바다_시청패널.webp",
        "category": "facility_gov"
    },
    {
        "file": "한바다_식사.webp",
        "category": "landscape"
    },
    {
        "file": "한바다_인형.webp",
        "category": "landscape"
    },
    {
        "file": "한바다_입구.webp",
        "category": "landscape"
    },
    {
        "file": "한바다_전신.webp",
        "category": "landscape"
    },
    {
        "file": "한바다_지우개.webp",
        "category": "landscape"
    },
    {
        "file": "한바다방.webp",
        "category": "landscape"
    },
    {
        "file": "한바다콜택시.webp",
        "category": "bus"
    },
    {
        "file": "한반도_지역_1.webp",
        "category": "station"
    },
    {
        "file": "한부모.webp",
        "category": "person"
    },
    {
        "file": "한상구.webp",
        "category": "etc"
    },
    {
        "file": "한성민.webp",
        "category": "person"
    },
    {
        "file": "한성진.webp",
        "category": "person"
    },
    {
        "file": "한여름의 바캉스.webp",
        "category": "etc"
    },
    {
        "file": "한지원_변호사.webp",
        "category": "etc"
    },
    {
        "file": "한태성_프로게이머.webp",
        "category": "person"
    },
    {
        "file": "한화_이글스_로고.svg",
        "category": "logo"
    },
    {
        "file": "할로윈 마녀의 감성.webp",
        "category": "etc"
    },
    {
        "file": "할로윈의 매드 사이언티스트.webp",
        "category": "etc"
    },
    {
        "file": "할로윈의 일탈.webp",
        "category": "etc"
    },
    {
        "file": "할로윈의 프랑켄슈타인.webp",
        "category": "etc"
    },
    {
        "file": "할로할로.webp",
        "category": "road"
    },
    {
        "file": "할부의 노예.webp",
        "category": "etc"
    },
    {
        "file": "함경남도.svg",
        "category": "logo"
    },
    {
        "file": "함경북도.svg",
        "category": "logo"
    },
    {
        "file": "합법적 진상 퇴치.webp",
        "category": "etc"
    },
    {
        "file": "합법적 칼퇴 요정.webp",
        "category": "etc"
    },
    {
        "file": "합법적 퇴근과 야근의 늪.webp",
        "category": "illustration"
    },
    {
        "file": "합법적강도_프레젠테이션.webp",
        "category": "etc"
    },
    {
        "file": "합천군.svg",
        "category": "logo"
    },
    {
        "file": "핫핑크 명예 차장.webp",
        "category": "etc"
    },
    {
        "file": "항동1가역_승강장.webp",
        "category": "station"
    },
    {
        "file": "항동3가역_승강장.webp",
        "category": "station"
    },
    {
        "file": "항동로.webp",
        "category": "road"
    },
    {
        "file": "항동문화회관역_승강장.webp",
        "category": "station"
    },
    {
        "file": "항동물류지구_전경.webp",
        "category": "facility_com"
    },
    {
        "file": "항동아쿠아아파트.webp",
        "category": "facility_com"
    },
    {
        "file": "항동차량사업소_지도.webp",
        "category": "map"
    },
    {
        "file": "항만해변역_승강장.webp",
        "category": "station"
    },
    {
        "file": "항선로.webp",
        "category": "road"
    },
    {
        "file": "항해사들의 영원한 빛.webp",
        "category": "etc"
    },
    {
        "file": "해수욕장.webp",
        "category": "landmark"
    },
    {
        "file": "해양열차.webp",
        "category": "train"
    },
    {
        "file": "해운산업지구역_승강장.webp",
        "category": "station"
    },
    {
        "file": "해운산업지구역_전경.webp",
        "category": "station"
    },
    {
        "file": "해진역.webp",
        "category": "station"
    },
    {
        "file": "해진역_승강장.webp",
        "category": "station"
    },
    {
        "file": "해천대.svg",
        "category": "logo"
    },
    {
        "file": "해천대학교.webp",
        "category": "school"
    },
    {
        "file": "해총대학교_UI.webp",
        "category": "school"
    },
    {
        "file": "행정 불도저의 기적.webp",
        "category": "etc"
    },
    {
        "file": "행정 혁신의 불도저.webp",
        "category": "etc"
    },
    {
        "file": "행정구역구분지도.webp",
        "category": "map"
    },
    {
        "file": "행정학과 1학년.webp",
        "category": "etc"
    },
    {
        "file": "향징호.webp",
        "category": "etc"
    },
    {
        "file": "허세풍.webp",
        "category": "person"
    },
    {
        "file": "헌이송역_승강장.webp",
        "category": "station"
    },
    {
        "file": "헤안나 스미레.webp",
        "category": "character"
    },
    {
        "file": "헬스장 바벨.webp",
        "category": "etc"
    },
    {
        "file": "현대모비스_피버스_로고.svg",
        "category": "bus"
    },
    {
        "file": "현대백화점_로고.svg",
        "category": "facility_com"
    },
    {
        "file": "현대백화점_효빈점_전경.webp",
        "category": "facility_com"
    },
    {
        "file": "현대조선소_효빈.webp",
        "category": "etc"
    },
    {
        "file": "현장 대장의 여유.webp",
        "category": "etc"
    },
    {
        "file": "현장 통제의 화신.webp",
        "category": "etc"
    },
    {
        "file": "호구 잡힌 애프터눈 티.webp",
        "category": "etc"
    },
    {
        "file": "호두역.webp",
        "category": "station"
    },
    {
        "file": "호두역_승강장.webp",
        "category": "station"
    },
    {
        "file": "호랑이 아버지의 가르침.webp",
        "category": "etc"
    },
    {
        "file": "호시조라 린.webp",
        "category": "character"
    },
    {
        "file": "호주.svg",
        "category": "logo"
    },
    {
        "file": "혼잡 구역의 지배자.webp",
        "category": "etc"
    },
    {
        "file": "혼혈의 기적적인 핏.webp",
        "category": "etc"
    },
    {
        "file": "홈에버_로고.svg",
        "category": "logo"
    },
    {
        "file": "홈페이지_아이콘.svg",
        "category": "logo"
    },
    {
        "file": "홈플러스 고송점.webp",
        "category": "facility_com"
    },
    {
        "file": "홈플러스 사노점.webp",
        "category": "facility_com"
    },
    {
        "file": "홈플러스 청능점.webp",
        "category": "facility_com"
    },
    {
        "file": "홈플러스 청엽점.webp",
        "category": "facility_com"
    },
    {
        "file": "홈플러스 탄성점.webp",
        "category": "facility_com"
    },
    {
        "file": "홈플러스 효빈역점.webp",
        "category": "station"
    },
    {
        "file": "홈플러스_로고.svg",
        "category": "facility_com"
    },
    {
        "file": "홈플러스_로고.webp",
        "category": "facility_com"
    },
    {
        "file": "홈플러스스페셜_로고.svg",
        "category": "facility_com"
    },
    {
        "file": "홍보영상_썸네일5.webp",
        "category": "etc"
    },
    {
        "file": "홍콩네온.webp",
        "category": "etc"
    },
    {
        "file": "홍콩야경.webp",
        "category": "landscape"
    },
    {
        "file": "홍하역_승강장.webp",
        "category": "station"
    },
    {
        "file": "홍하역_전경.webp",
        "category": "station"
    },
    {
        "file": "화공 전기대역_승강장.webp",
        "category": "station"
    },
    {
        "file": "화면역_승강장.webp",
        "category": "station"
    },
    {
        "file": "화면역_전경.webp",
        "category": "station"
    },
    {
        "file": "화소역_1Line_승강장.webp",
        "category": "station"
    },
    {
        "file": "화소역_B25_승강장.webp",
        "category": "station"
    },
    {
        "file": "화소역_General_Down_승강장.webp",
        "category": "station"
    },
    {
        "file": "화소역_General_Up_승강장.webp",
        "category": "station"
    },
    {
        "file": "화소역_미사용_승강장.webp",
        "category": "station"
    },
    {
        "file": "화소역_전경.webp",
        "category": "station"
    },
    {
        "file": "화원신호장.webp",
        "category": "station"
    },
    {
        "file": "화장실.webp",
        "category": "illustration"
    },
    {
        "file": "화장이 지워지는 음식.webp",
        "category": "food"
    },
    {
        "file": "화주역_전경.webp",
        "category": "station"
    },
    {
        "file": "화진역.webp",
        "category": "station"
    },
    {
        "file": "환산채.webp",
        "category": "etc"
    },
    {
        "file": "황보람.webp",
        "category": "person"
    },
    {
        "file": "황해도.svg",
        "category": "logo"
    },
    {
        "file": "회리천_전경.webp",
        "category": "landscape"
    },
    {
        "file": "회산_전경.webp",
        "category": "landmark"
    },
    {
        "file": "회산역_승강장.webp",
        "category": "station"
    },
    {
        "file": "회식 요격 태세.webp",
        "category": "etc"
    },
    {
        "file": "회주기업.webp",
        "category": "facility_com"
    },
    {
        "file": "회주기업_로고.webp",
        "category": "facility_com"
    },
    {
        "file": "회주기업_사옥.webp",
        "category": "facility_com"
    },
    {
        "file": "회주돌핀즈.webp",
        "category": "etc"
    },
    {
        "file": "회주돌핀즈로고.webp",
        "category": "logo"
    },
    {
        "file": "회주제1공장.webp",
        "category": "etc"
    },
    {
        "file": "회주제2공장.webp",
        "category": "etc"
    },
    {
        "file": "회춘한 K-장녀.webp",
        "category": "etc"
    },
    {
        "file": "효빈_1호선_고나미_퍼스널_아이콘.svg",
        "category": "logo"
    },
    {
        "file": "효빈_2호선_하루빈_퍼스널_아이콘.svg",
        "category": "logo"
    },
    {
        "file": "효빈_3호선_박라미_퍼스널_아이콘.svg",
        "category": "logo"
    },
    {
        "file": "효빈_4호선_다로나_퍼스널_아이콘.svg",
        "category": "logo"
    },
    {
        "file": "효빈_5호선_미소하_퍼스널_아이콘.svg",
        "category": "logo"
    },
    {
        "file": "효빈_6호선_라세나_퍼스널_아이콘.svg",
        "category": "logo"
    },
    {
        "file": "효빈_7호선_임세정_퍼스널_아이콘.svg",
        "category": "logo"
    },
    {
        "file": "효빈_7호선_임세하_퍼스널_아이콘.svg",
        "category": "logo"
    },
    {
        "file": "효빈_8호선_유리아_퍼스널_아이콘.svg",
        "category": "logo"
    },
    {
        "file": "효빈_덕북_통합환승.webp",
        "category": "etc"
    },
    {
        "file": "효빈_도시철도의_역사_책_표지.webp",
        "category": "station"
    },
    {
        "file": "효빈_레인보우_아쿠아드_로고.webp",
        "category": "facility_com"
    },
    {
        "file": "효빈_빈효선_전노아_퍼스널_아이콘.svg",
        "category": "logo"
    },
    {
        "file": "효빈_창전선_심세이_퍼스널_아이콘.svg",
        "category": "logo"
    },
    {
        "file": "효빈_한바다_퍼스널_아이콘.svg",
        "category": "landscape"
    },
    {
        "file": "효빈개찰구광고.webp",
        "category": "logo"
    },
    {
        "file": "효빈경제진흥원_로고.svg",
        "category": "facility_gov"
    },
    {
        "file": "효빈경찰청전경.webp",
        "category": "facility_gov"
    },
    {
        "file": "효빈고등검찰청.webp",
        "category": "facility_gov"
    },
    {
        "file": "효빈고등법원.webp",
        "category": "facility_gov"
    },
    {
        "file": "효빈고등법원_전경.webp",
        "category": "facility_gov"
    },
    {
        "file": "효빈고등학교.webp",
        "category": "school"
    },
    {
        "file": "효빈고로고.webp",
        "category": "logo"
    },
    {
        "file": "효빈고속.webp",
        "category": "bus"
    },
    {
        "file": "효빈고속버스터미널.webp",
        "category": "bus"
    },
    {
        "file": "효빈고송경찰서.webp",
        "category": "facility_gov"
    },
    {
        "file": "효빈고역_승강장.webp",
        "category": "station"
    },
    {
        "file": "효빈고용노동청.webp",
        "category": "facility_gov"
    },
    {
        "file": "효빈공단_마잡헌이송지구_전경.webp",
        "category": "facility_gov"
    },
    {
        "file": "효빈공단_통합지도.webp",
        "category": "map"
    },
    {
        "file": "효빈공단로.webp",
        "category": "facility_gov"
    },
    {
        "file": "효빈공단역_승강장.webp",
        "category": "station"
    },
    {
        "file": "효빈공단인입선_노선도.webp",
        "category": "map"
    },
    {
        "file": "효빈과학기술원.webp",
        "category": "etc"
    },
    {
        "file": "효빈과학기술원역_승강장.webp",
        "category": "station"
    },
    {
        "file": "효빈과학대학교_UI.webp",
        "category": "school"
    },
    {
        "file": "효빈관광공사.webp",
        "category": "facility_gov"
    },
    {
        "file": "효빈관광공사_로고.svg",
        "category": "facility_gov"
    },
    {
        "file": "효빈광고2.webp",
        "category": "logo"
    },
    {
        "file": "효빈광역시 공식캐릭터 한바다.webp",
        "category": "landscape"
    },
    {
        "file": "효빈광역시 상수도사업본부.webp",
        "category": "facility_gov"
    },
    {
        "file": "효빈광역시 하수도사업본부.webp",
        "category": "facility_gov"
    },
    {
        "file": "효빈광역시_교육청_로고.webp",
        "category": "logo"
    },
    {
        "file": "효빈광역시_흰색로고.webp",
        "category": "logo"
    },
    {
        "file": "효빈광역시광고.webp",
        "category": "logo"
    },
    {
        "file": "효빈광역시교육청.webp",
        "category": "etc"
    },
    {
        "file": "효빈광역시립시민도서관.webp",
        "category": "school"
    },
    {
        "file": "효빈광역시사회서비스원.webp",
        "category": "etc"
    },
    {
        "file": "효빈광역시상수도_로고.webp",
        "category": "logo"
    },
    {
        "file": "효빈광역시전경.webp",
        "category": "landscape"
    },
    {
        "file": "효빈광역시청.webp",
        "category": "facility_gov"
    },
    {
        "file": "효빈광역시하수도_로고.webp",
        "category": "logo"
    },
    {
        "file": "효빈교도소.webp",
        "category": "facility_gov"
    },
    {
        "file": "효빈교육대학교.webp",
        "category": "school"
    },
    {
        "file": "효빈교육대학교_UI.webp",
        "category": "school"
    },
    {
        "file": "효빈교통공사 1000호대 3세대 주둥이.webp",
        "category": "bus"
    },
    {
        "file": "효빈교통공사 1000호대(1세대).webp",
        "category": "bus"
    },
    {
        "file": "효빈교통공사 1000호대(2~3세대).webp",
        "category": "bus"
    },
    {
        "file": "효빈교통공사 1000호대.webp",
        "category": "bus"
    },
    {
        "file": "효빈교통공사 100호대 전동차 초기저항.webp",
        "category": "bus"
    },
    {
        "file": "효빈교통공사 2000호대 (1세대).webp",
        "category": "bus"
    },
    {
        "file": "효빈교통공사 2000호대 (2세대).webp",
        "category": "bus"
    },
    {
        "file": "효빈교통공사 2000호대 2007편성 5량.webp",
        "category": "bus"
    },
    {
        "file": "효빈교통공사 200호대 전동차 초퍼제어.webp",
        "category": "bus"
    },
    {
        "file": "효빈교통공사 3000호대 (1세대).webp",
        "category": "bus"
    },
    {
        "file": "효빈교통공사 3000호대 (2세대).webp",
        "category": "bus"
    },
    {
        "file": "효빈교통공사 3000호대 1세대 수하물칸.webp",
        "category": "bus"
    },
    {
        "file": "효빈교통공사 4000호대 (1세대).webp",
        "category": "bus"
    },
    {
        "file": "효빈교통공사 4000호대.webp",
        "category": "bus"
    },
    {
        "file": "효빈교통공사 5000호대.webp",
        "category": "bus"
    },
    {
        "file": "효빈교통공사 6000호대.webp",
        "category": "bus"
    },
    {
        "file": "효빈교통공사 7000호대(1세대).webp",
        "category": "bus"
    },
    {
        "file": "효빈교통공사 7000호대(2세대).webp",
        "category": "bus"
    },
    {
        "file": "효빈교통공사 8000호대.webp",
        "category": "bus"
    },
    {
        "file": "효빈교통공사 근로장학지원센터.webp",
        "category": "bus"
    },
    {
        "file": "효빈교통공사 배너광고.webp",
        "category": "bus"
    },
    {
        "file": "효빈교통공사 본사.webp",
        "category": "bus"
    },
    {
        "file": "효빈교통공사_2000호대_전동차(1세대).webp",
        "category": "bus"
    },
    {
        "file": "효빈교통공사_4000호대_2차분.webp",
        "category": "bus"
    },
    {
        "file": "효빈교통공사_4000호대_4차분.webp",
        "category": "bus"
    },
    {
        "file": "효빈교통공사_C000호대.webp",
        "category": "bus"
    },
    {
        "file": "효빈교통공사_본사_굿즈샵_0.webp",
        "category": "bus"
    },
    {
        "file": "효빈교통공사_본사_굿즈샵_1.webp",
        "category": "bus"
    },
    {
        "file": "효빈교통공사_본사_굿즈샵_2.webp",
        "category": "bus"
    },
    {
        "file": "효빈교통공사_본사_굿즈샵_3.webp",
        "category": "bus"
    },
    {
        "file": "효빈교통공사_본사_굿즈샵_4.webp",
        "category": "bus"
    },
    {
        "file": "효빈교통공사_성우_녹음현장.webp",
        "category": "bus"
    },
    {
        "file": "효빈교통공사_전동차_모음.webp",
        "category": "bus"
    },
    {
        "file": "효빈교통공사_정직원_합동이미지_화풍일치_v2.webp",
        "category": "bus"
    },
    {
        "file": "효빈교통공사_흰색로고.webp",
        "category": "bus"
    },
    {
        "file": "효빈교통공사본점.webp",
        "category": "bus"
    },
    {
        "file": "효빈교통문화공원.webp",
        "category": "bus"
    },
    {
        "file": "효빈교통카드 초기판 (2).webp",
        "category": "bus"
    },
    {
        "file": "효빈교통카드.webp",
        "category": "bus"
    },
    {
        "file": "효빈국제공항.webp",
        "category": "etc"
    },
    {
        "file": "효빈국제공항_역사.webp",
        "category": "station"
    },
    {
        "file": "효빈국제공항역_승강장.webp",
        "category": "station"
    },
    {
        "file": "효빈국제공항점.webp",
        "category": "etc"
    },
    {
        "file": "효빈글로벌도시재단.webp",
        "category": "facility_gov"
    },
    {
        "file": "효빈남부시외버스터미널역_승강장.webp",
        "category": "bus"
    },
    {
        "file": "효빈남부터미널.webp",
        "category": "bus"
    },
    {
        "file": "효빈내항_전경.webp",
        "category": "landscape"
    },
    {
        "file": "효빈대 축제 기념.webp",
        "category": "event"
    },
    {
        "file": "효빈대 학생회관 푸드코트.webp",
        "category": "school"
    },
    {
        "file": "효빈대 헌혈의집.webp",
        "category": "etc"
    },
    {
        "file": "효빈대_강주캠퍼스_전경.webp",
        "category": "school"
    },
    {
        "file": "효빈대_과방.webp",
        "category": "school"
    },
    {
        "file": "효빈대_난입.webp",
        "category": "etc"
    },
    {
        "file": "효빈대_낭원캠퍼스_전경.webp",
        "category": "school"
    },
    {
        "file": "효빈대_로고.webp",
        "category": "logo"
    },
    {
        "file": "효빈대_사회복지정책학과_과방.webp",
        "category": "school"
    },
    {
        "file": "효빈대_이자캠퍼스_전경.webp",
        "category": "school"
    },
    {
        "file": "효빈대_인간띠.webp",
        "category": "etc"
    },
    {
        "file": "효빈대_일어일문학과_꽈잠.webp",
        "category": "etc"
    },
    {
        "file": "효빈대_천주캠퍼스_전경.webp",
        "category": "school"
    },
    {
        "file": "효빈대_천주캠퍼스_전경_2.webp",
        "category": "school"
    },
    {
        "file": "효빈대_해양대학.webp",
        "category": "school"
    },
    {
        "file": "효빈대병원.webp",
        "category": "facility_com"
    },
    {
        "file": "효빈대병원_노사타결.webp",
        "category": "facility_com"
    },
    {
        "file": "효빈대병원_전경.webp",
        "category": "facility_com"
    },
    {
        "file": "효빈대병원역_승강장.webp",
        "category": "station"
    },
    {
        "file": "효빈대사회복지정책학과.webp",
        "category": "etc"
    },
    {
        "file": "효빈대신문.webp",
        "category": "etc"
    },
    {
        "file": "효빈대역_승강장.webp",
        "category": "station"
    },
    {
        "file": "효빈대입구역_승강장.webp",
        "category": "station"
    },
    {
        "file": "효빈대중앙환승장.webp",
        "category": "station"
    },
    {
        "file": "효빈대학교 본부.webp",
        "category": "facility_gov"
    },
    {
        "file": "효빈대학교 정문.webp",
        "category": "school"
    },
    {
        "file": "효빈대학교_흰색로고.webp",
        "category": "school"
    },
    {
        "file": "효빈대학로.webp",
        "category": "school"
    },
    {
        "file": "효빈덕북지방우정청.webp",
        "category": "facility_gov"
    },
    {
        "file": "효빈도서관.webp",
        "category": "school"
    },
    {
        "file": "효빈도시공사.webp",
        "category": "facility_gov"
    },
    {
        "file": "효빈도시공사_로고.webp",
        "category": "facility_gov"
    },
    {
        "file": "효빈도시철도 1호선 노선도.webp",
        "category": "map"
    },
    {
        "file": "효빈도시철도 2호선 급행 노선도.webp",
        "category": "map"
    },
    {
        "file": "효빈도시철도 3호선 노선도.webp",
        "category": "map"
    },
    {
        "file": "효빈도시철도 4호선 노선도.webp",
        "category": "map"
    },
    {
        "file": "효빈도시철도 5호선 노선도.png1.png 연장예정포함.webp",
        "category": "map"
    },
    {
        "file": "효빈도시철도 6호선 노선도.webp",
        "category": "map"
    },
    {
        "file": "효빈도시철도 7호선 노선도.webp",
        "category": "map"
    },
    {
        "file": "효빈도시철도 8호선 노선도.webp",
        "category": "map"
    },
    {
        "file": "효빈도시철도 노선도.webp",
        "category": "map"
    },
    {
        "file": "효빈도시철도 빈효선광역전철 노선도.webp",
        "category": "map"
    },
    {
        "file": "효빈동신도시.webp",
        "category": "etc"
    },
    {
        "file": "효빈동신도시_조감도.webp",
        "category": "map"
    },
    {
        "file": "효빈동신도시아쿠아아파트.webp",
        "category": "facility_com"
    },
    {
        "file": "효빈동신도시역_승강장.webp",
        "category": "station"
    },
    {
        "file": "효빈동신도시역_전경.webp",
        "category": "station"
    },
    {
        "file": "효빈디자인진흥원.webp",
        "category": "facility_gov"
    },
    {
        "file": "효빈레인보우아쿠아드.webp",
        "category": "facility_com"
    },
    {
        "file": "효빈로.webp",
        "category": "road"
    },
    {
        "file": "효빈만평.webp",
        "category": "document"
    },
    {
        "file": "효빈만화애니메이션도서관.webp",
        "category": "school"
    },
    {
        "file": "효빈메트로_로고.webp",
        "category": "logo"
    },
    {
        "file": "효빈면세점_로고.svg",
        "category": "logo"
    },
    {
        "file": "효빈문화공사 본부.webp",
        "category": "facility_gov"
    },
    {
        "file": "효빈문화공사.webp",
        "category": "facility_gov"
    },
    {
        "file": "효빈문화공사_로고.webp",
        "category": "facility_gov"
    },
    {
        "file": "효빈문화공원_가을.webp",
        "category": "landmark"
    },
    {
        "file": "효빈문화광장_탄핵축제.webp",
        "category": "landmark"
    },
    {
        "file": "효빈문화재단_로고.webp",
        "category": "facility_gov"
    },
    {
        "file": "효빈문화재단_본사.webp",
        "category": "facility_gov"
    },
    {
        "file": "효빈문화재단_흰색로고.webp",
        "category": "facility_gov"
    },
    {
        "file": "효빈문화회관.webp",
        "category": "facility_com"
    },
    {
        "file": "효빈박물관.webp",
        "category": "etc"
    },
    {
        "file": "효빈방송.webp",
        "category": "facility_com"
    },
    {
        "file": "효빈방송_본사.webp",
        "category": "facility_com"
    },
    {
        "file": "효빈보건대학교.svg",
        "category": "school"
    },
    {
        "file": "효빈보훈병원.webp",
        "category": "facility_com"
    },
    {
        "file": "효빈복지대학교_UI.webp",
        "category": "school"
    },
    {
        "file": "효빈복지대학역_승강장.webp",
        "category": "station"
    },
    {
        "file": "효빈복지방송_로고.webp",
        "category": "facility_com"
    },
    {
        "file": "효빈북부경찰서.webp",
        "category": "facility_gov"
    },
    {
        "file": "효빈브레스파.webp",
        "category": "etc"
    },
    {
        "file": "효빈빈주고속도로.webp",
        "category": "bus"
    },
    {
        "file": "효빈빈주선_노선도.webp",
        "category": "map"
    },
    {
        "file": "효빈산업과학혁신원.webp",
        "category": "etc"
    },
    {
        "file": "효빈산업단지_전경.webp",
        "category": "facility_com"
    },
    {
        "file": "효빈상업고등학교.webp",
        "category": "school"
    },
    {
        "file": "효빈상업고로고.webp",
        "category": "logo"
    },
    {
        "file": "효빈서해고속도로.webp",
        "category": "bus"
    },
    {
        "file": "효빈서해선_노선도.webp",
        "category": "map"
    },
    {
        "file": "효빈성.webp",
        "category": "etc"
    },
    {
        "file": "효빈성공원.webp",
        "category": "landmark"
    },
    {
        "file": "효빈성북문역_승강장.webp",
        "category": "station"
    },
    {
        "file": "효빈성앞역_승강장.webp",
        "category": "station"
    },
    {
        "file": "효빈시 도심 공원.webp",
        "category": "landmark"
    },
    {
        "file": "효빈시민_항의집회.webp",
        "category": "event"
    },
    {
        "file": "효빈시민환호.webp",
        "category": "person"
    },
    {
        "file": "효빈시설관리공단_로고.webp",
        "category": "facility_gov"
    },
    {
        "file": "효빈시설관리공단_본사.webp",
        "category": "facility_gov"
    },
    {
        "file": "효빈시외버스터미널.webp",
        "category": "bus"
    },
    {
        "file": "효빈시청 대변인실.webp",
        "category": "facility_gov"
    },
    {
        "file": "효빈시청 주변 전경.webp",
        "category": "facility_gov"
    },
    {
        "file": "효빈시청_1대.webp",
        "category": "facility_gov"
    },
    {
        "file": "효빈시청_2대.webp",
        "category": "facility_gov"
    },
    {
        "file": "효빈시청_2대_과거.webp",
        "category": "facility_gov"
    },
    {
        "file": "효빈시청_굿즈샵.webp",
        "category": "facility_gov"
    },
    {
        "file": "효빈시청_통합관제센터.webp",
        "category": "facility_gov"
    },
    {
        "file": "효빈시청한바다도서관.webp",
        "category": "facility_gov"
    },
    {
        "file": "효빈신용보증재단.webp",
        "category": "facility_gov"
    },
    {
        "file": "효빈아레나.webp",
        "category": "etc"
    },
    {
        "file": "효빈아쿠아.webp",
        "category": "facility_com"
    },
    {
        "file": "효빈안천소방서.webp",
        "category": "facility_gov"
    },
    {
        "file": "효빈애니메이션_본부_흰색로고 .webp",
        "category": "facility_gov"
    },
    {
        "file": "효빈애니메이션본부.webp",
        "category": "facility_gov"
    },
    {
        "file": "효빈애니메이션본부_로고.webp",
        "category": "facility_gov"
    },
    {
        "file": "효빈앱글로고.webp",
        "category": "logo"
    },
    {
        "file": "효빈여객.webp",
        "category": "bus"
    },
    {
        "file": "효빈여고로고.webp",
        "category": "logo"
    },
    {
        "file": "효빈여자고등학교.webp",
        "category": "school"
    },
    {
        "file": "효빈역 1대역사.webp",
        "category": "station"
    },
    {
        "file": "효빈역 2대역사.webp",
        "category": "station"
    },
    {
        "file": "효빈역 3대역사.webp",
        "category": "station"
    },
    {
        "file": "효빈역 3대역사_건물.webp",
        "category": "station"
    },
    {
        "file": "효빈역 아쿠아 아파트.webp",
        "category": "facility_com"
    },
    {
        "file": "효빈역_1호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "효빈역_3호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "효빈역_7호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "효빈역_고속선_승강장.webp",
        "category": "bus"
    },
    {
        "file": "효빈역_빈효선_승강장.webp",
        "category": "station"
    },
    {
        "file": "효빈역_역내시설.webp",
        "category": "station"
    },
    {
        "file": "효빈역_일반선_승강장.webp",
        "category": "station"
    },
    {
        "file": "효빈역_전경.webp",
        "category": "station"
    },
    {
        "file": "효빈역_창전선_승강장.webp",
        "category": "station"
    },
    {
        "file": "효빈역플래그십(1층).webp",
        "category": "etc"
    },
    {
        "file": "효빈역플래그십(2층).webp",
        "category": "etc"
    },
    {
        "file": "효빈연구원.webp",
        "category": "facility_gov"
    },
    {
        "file": "효빈예술대.svg",
        "category": "logo"
    },
    {
        "file": "효빈외곽순환고속도로.webp",
        "category": "bus"
    },
    {
        "file": "효빈외곽순환도로.webp",
        "category": "road"
    },
    {
        "file": "효빈외곽순환선_노선도.webp",
        "category": "map"
    },
    {
        "file": "효빈외대.svg",
        "category": "logo"
    },
    {
        "file": "효빈위키.webp",
        "category": "etc"
    },
    {
        "file": "효빈위키아이콘.webp",
        "category": "logo"
    },
    {
        "file": "효빈유람선.webp",
        "category": "etc"
    },
    {
        "file": "효빈은행_로고.webp",
        "category": "logo"
    },
    {
        "file": "효빈은행역_승강장.webp",
        "category": "station"
    },
    {
        "file": "효빈의 푸른 심장.webp",
        "category": "etc"
    },
    {
        "file": "효빈의료원.webp",
        "category": "facility_com"
    },
    {
        "file": "효빈일보.webp",
        "category": "etc"
    },
    {
        "file": "효빈일보_로고.webp",
        "category": "logo"
    },
    {
        "file": "효빈전차_전성기.webp",
        "category": "etc"
    },
    {
        "file": "효빈정보고등학교로고.webp",
        "category": "school"
    },
    {
        "file": "효빈정보산업진흥원.webp",
        "category": "facility_gov"
    },
    {
        "file": "효빈종합고역_승강장.webp",
        "category": "station"
    },
    {
        "file": "효빈종합운동장.webp",
        "category": "etc"
    },
    {
        "file": "효빈중앙고로고.webp",
        "category": "logo"
    },
    {
        "file": "효빈지도.webp",
        "category": "map"
    },
    {
        "file": "효빈지방국세청.webp",
        "category": "facility_gov"
    },
    {
        "file": "효빈지하철_쿨링존.webp",
        "category": "etc"
    },
    {
        "file": "효빈집거실.webp",
        "category": "illustration"
    },
    {
        "file": "효빈집침실.webp",
        "category": "illustration"
    },
    {
        "file": "효빈컬쳐레스풀.webp",
        "category": "etc"
    },
    {
        "file": "효빈테크노파크.webp",
        "category": "facility_com"
    },
    {
        "file": "효빈평생교육진흥원.webp",
        "category": "facility_gov"
    },
    {
        "file": "효빈프렌즈.webp",
        "category": "character"
    },
    {
        "file": "효빈항 국제여객터미널.webp",
        "category": "bus"
    },
    {
        "file": "효빈항_주박기지_지도.webp",
        "category": "map"
    },
    {
        "file": "효빈항국제여객터미널_전경.webp",
        "category": "bus"
    },
    {
        "file": "효빈항국제여객터미널역_승강장.webp",
        "category": "bus"
    },
    {
        "file": "효빈항동부역_승강장.webp",
        "category": "station"
    },
    {
        "file": "효빈항물류지구역_1호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "효빈항물류지구역_빈효선_승강장.webp",
        "category": "station"
    },
    {
        "file": "효빈항물류지구역_전경.webp",
        "category": "station"
    },
    {
        "file": "효빈항선_노선도.webp",
        "category": "map"
    },
    {
        "file": "효빈항역_1호선_승강장.webp",
        "category": "station"
    },
    {
        "file": "효빈항역_빈효선_승강장.webp",
        "category": "station"
    },
    {
        "file": "효빈항역_일반열차_승강장.webp",
        "category": "station"
    },
    {
        "file": "효빈항역_전경.webp",
        "category": "station"
    },
    {
        "file": "효빈항의 총사령관.webp",
        "category": "etc"
    },
    {
        "file": "효빈항차량주박기지_지도.webp",
        "category": "map"
    },
    {
        "file": "효빈해양대1캠퍼스.webp",
        "category": "school"
    },
    {
        "file": "효빈해양대학교2캠퍼스.webp",
        "category": "school"
    },
    {
        "file": "효빈환경공단.webp",
        "category": "facility_gov"
    },
    {
        "file": "효빈환경공단_로고.webp",
        "category": "facility_gov"
    },
    {
        "file": "효사부고로고.webp",
        "category": "logo"
    },
    {
        "file": "효사부중로고.webp",
        "category": "logo"
    },
    {
        "file": "효안교통.webp",
        "category": "bus"
    },
    {
        "file": "후등관.webp",
        "category": "etc"
    },
    {
        "file": "후배 조련사.webp",
        "category": "etc"
    },
    {
        "file": "후배 지도.webp",
        "category": "map"
    },
    {
        "file": "후지 미야코.webp",
        "category": "etc"
    },
    {
        "file": "후지시마 메구미.webp",
        "category": "character"
    },
    {
        "file": "후타바 츠쿠시.webp",
        "category": "character"
    },
    {
        "file": "휴게실.webp",
        "category": "etc"
    },
    {
        "file": "휴식 시간의 명상.webp",
        "category": "illustration"
    },
    {
        "file": "휴일의 쪽잠.webp",
        "category": "etc"
    },
    {
        "file": "휴일의 철덕 스토커.webp",
        "category": "character"
    },
    {
        "file": "휴일의 통장 정리.webp",
        "category": "etc"
    },
    {
        "file": "흑남색 반묶음.webp",
        "category": "etc"
    },
    {
        "file": "흑석리역_승강장.webp",
        "category": "station"
    },
    {
        "file": "흑석리역_전경.webp",
        "category": "station"
    },
    {
        "file": "흑성신호장.webp",
        "category": "station"
    },
    {
        "file": "흑역사 박제.webp",
        "category": "station"
    },
    {
        "file": "흑택01.webp",
        "category": "bus"
    },
    {
        "file": "흑택리.webp",
        "category": "etc"
    },
    {
        "file": "흑택아쿠아아파트.webp",
        "category": "facility_com"
    },
    {
        "file": "흑택역_승강장.webp",
        "category": "station"
    },
    {
        "file": "흥림역.webp",
        "category": "station"
    },
    {
        "file": "희귀 편성 발견.webp",
        "category": "train"
    },
    {
        "file": "희다관 식당.webp",
        "category": "food"
    },
    {
        "file": "희다관.webp",
        "category": "etc"
    },
    {
        "file": "흰 셔츠 사수전.webp",
        "category": "etc"
    },
    {
        "file": "히노시타 카호.webp",
        "category": "character"
    },
    {
        "file": "히노시타_카호_극장판.webp",
        "category": "character"
    },
    {
        "file": "히드라리스크.webp",
        "category": "etc"
    },
    {
        "file": "히라사와 유이.webp",
        "category": "character"
    },
    {
        "file": "히로마치 나나미.webp",
        "category": "character"
    },
    {
        "file": "히버히.webp",
        "category": "etc"
    },
    {
        "file": "히이라기 마오.webp",
        "category": "character"
    },
    {
        "file": "히지리사와 유우나.webp",
        "category": "character"
    },
    {
        "file": "히카와 사요.webp",
        "category": "character"
    },
    {
        "file": "히카와 히나.webp",
        "category": "character"
    }
];
