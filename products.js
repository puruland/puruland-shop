// 푸루맘 상점 상품 목록 — 새 상품은 Claude에게 "상품 추가해줘" 하면 여기에 들어가요.
//
// id       : 인포크링크 주소 끝부분 → https://puruland.github.io/puruland-shop/#id (누르면 그 카테고리가 열리고 상품으로 이동)
// type     : "공구"(start/end 날짜 필요) 또는 "추천템"(일반 제휴 링크)
// partner  : coupang / naver / slit
// category : 일상템 / 패션템 / 인테리어템 / 주방템 / 이유식템 / 가성비 놀이템(1~2만원대)
// pick     : true 로 하면 첫 화면 PURU'S PICK 에 올라가요 (하나만)
// name     : 상품명    mom : 엄마 말투 한 줄
// tag      : 작은 뱃지 (예: "17%", "팔로워 전용가")
// sale     : 가격 (크게)    price : 정가 (줄 그어짐, 진짜 정가가 있을 때만)
// guide    : "seller" 로 하면 '🔥 품절 직전!' 버튼 + 다른 판매자 구매 가이드가 붙어요
// link     : 구매 링크    img : 사진 파일    emoji : 사진 없을 때 대신 보일 이모지

window.PRODUCTS = [
  {
    id: "suupy-nasal-aspirator",
    type: "추천템",
    partner: "slit",
    category: "일상템",
    name: "수피(SUUPY) 전동 콧물 흡인기 TX-5",
    mom: "콧물 때문에 잠 설치는 밤, 엄마 손목 대신 기계가 일해요",
    tag: "17%",
    sale: "248,000원",
    price: "298,000원",
    link: "https://slit.to/s/m5ywd6",
    img: "img/suupy.svg",
    emoji: "👶"
  },
  {
    id: "cheese-disney-pajama",
    type: "추천템",
    partner: "slit",
    category: "패션템",
    pick: true,
    name: "치즈실내복 [26 겨울] 메리 디즈니 실내복 낙낙핏",
    mom: "크리스마스 사진 찍는 날 입히면 딱이에요 🎄",
    sale: "19,800원",
    link: "https://slit.to/s/sipqge",
    img: "img/cheese-disney.svg",
    emoji: "👕"
  },
  {
    id: "cheese-couple-pajama",
    type: "추천템",
    partner: "slit",
    category: "패션템",
    name: "치즈실내복 꿀잼커플실내복 낙낙핏",
    mom: "형제·자매 커플룩으로 맞춰 입히기 좋아요",
    tag: "팔로워 전용가",
    sale: "16,900원",
    link: "https://slit.to/s/u5zgrh",
    img: "img/cheese-couple.svg",
    emoji: "👕"
  },
  {
    id: "cheese-slimball-pajama",
    type: "추천템",
    partner: "slit",
    category: "패션템",
    name: "치즈실내복 [26 봄 가을] 슬림볼 실내복 착붙핏",
    mom: "봄가을 잠옷은 역시 착붙핏이죠",
    sale: "15,900원",
    link: "https://slit.to/s/vs62jt",
    img: "img/cheese-slimball.svg",
    emoji: "👕"
  },
  {
    id: "cheese-bamboo-pajama",
    type: "추천템",
    partner: "slit",
    category: "패션템",
    name: "치즈실내복 [26 봄가을] 포인트 밤부 실내복 낙낙핏",
    mom: "봄가을 잠옷으로 부드럽게 입히기 좋아요",
    sale: "16,900원",
    link: "https://slit.to/s/eu8m8h",
    img: "img/cheese-bamboo.svg",
    emoji: "👕"
  },
  {
    id: "art-play-book",
    type: "추천템",
    partner: "coupang",
    category: "일상템",
    name: "0~5세 기적의 미술 놀이",
    mom: "하루 10분, 준비물 없이 바로 놀아요",
    tag: "10%",
    sale: "19,800원",
    price: "22,000원",
    guide: "seller",
    link: "https://link.coupang.com/a/iV8X4ib0Ng",
    img: "book_art.jpg",
    emoji: "🎨"
  },
  {
    id: "cloth-peekaboo-book",
    type: "추천템",
    partner: "naver",
    category: "가성비 놀이템",
    name: "마이빈스토어 헝겊책 촉감책 까꿍놀이 (6~10개월 돌전 아기)",
    mom: "까꿍 하면서 쥐고 물고 빨고, 혼자서도 한참 놀아요",
    tag: "4%",
    sale: "23,900원",
    price: "25,000원",
    link: "https://naver.me/5WUz4lvq",
    img: "img/play-cloth-book.svg",
    emoji: "🧸"
  },
  {
    id: "kizeus-play-mobile",
    type: "추천템",
    partner: "naver",
    category: "가성비 놀이템",
    name: "키저스 플레이 베베 유모차 모빌 장난감 (카시트·신생아 선물)",
    mom: "유모차·카시트에 걸어두면 외출길 칭얼거림이 줄어요",
    tag: "41%",
    sale: "27,900원",
    price: "48,100원",
    link: "https://naver.me/Gmp55JLO",
    img: "img/play-mobile.svg",
    emoji: "🎠"
  },
  {
    id: "fingerfishing-rings",
    type: "추천템",
    partner: "naver",
    category: "가성비 놀이템",
    name: "핑거피싱 아기 체육관 소근육 발달 고리 장난감 토이버클 24P",
    mom: "끼우고 빼고 연결하고, 소근육 놀이로 이만한 게 없어요",
    tag: "82%",
    sale: "17,800원",
    price: "104,000원",
    link: "https://naver.me/xAf88j1l",
    img: "img/play-rings.svg",
    emoji: "🟡"
  },
  {
    id: "huanger-monkey-ball-tower",
    type: "추천템",
    partner: "coupang",
    category: "가성비 놀이템",
    name: "후앙어 몽키 공굴리기 볼 타워 촉감발달완구",
    mom: "공 넣고 데굴데굴 굴러가는 거 보면 눈이 반짝반짝해요",
    sale: "7,970원",
    link: "https://link.coupang.com/a/iZRPbbSGL6",
    img: "https://thumbnail.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/803340127089259-aa55375e-d883-4bc4-9cef-ef4f227aa7c8.jpg",
    emoji: "🐒"
  },
  {
    id: "popup-animal-peekaboo",
    type: "추천템",
    partner: "coupang",
    category: "가성비 놀이템",
    name: "하늘썬별 유아용 팝업 동물친구 터치 까꿍놀이",
    mom: "꾹 누르면 동물이 뿅! 까꿍 놀이에 꺄르르 웃어요",
    tag: "48%",
    sale: "12,990원",
    price: "25,000원",
    link: "https://link.coupang.com/a/iZRRS5nDFI",
    img: "https://thumbnail.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2024/03/13/10/1/b8e4e31d-b0b3-4a22-a7ba-0448cd106d41.jpg",
    emoji: "🐰"
  },
  {
    id: "keycap-keyboard-toy",
    type: "추천템",
    partner: "naver",
    category: "가성비 놀이템",
    name: "위너유니 대왕 키캡 키보드 26구 키링 소리나는 장난감",
    mom: "딸깍딸깍 누르는 맛에 엄마 키보드 대신 이걸 줘요",
    tag: "40%",
    sale: "6,550원",
    price: "11,000원",
    link: "https://naver.me/x7e77DEN",
    img: "img/play-keycap.svg",
    emoji: "⌨️"
  },
  {
    id: "kizeus-spinpop",
    type: "추천템",
    partner: "naver",
    category: "가성비 놀이템",
    name: "키저스 빙글빙글 스핀팝 흡착 회전 딸랑이 세트 (백일·돌 아기 스피너)",
    mom: "식탁에 붙여두면 빙글빙글 돌리느라 밥 먹는 시간이 평화로워요",
    tag: "42%",
    sale: "10,900원",
    price: "18,890원",
    link: "https://naver.me/FIc6N4Yd",
    img: "img/play-spinner.svg",
    emoji: "🌀"
  },
  {
    id: "purbebe-rattle-teether-set",
    type: "추천템",
    partner: "naver",
    category: "가성비 놀이템",
    name: "푸르베베 열탕소독 가능 북유럽 감성 딸랑이 치발기 10종 세트",
    mom: "열탕소독 돼서 입에 넣어도 안심, 선물용으로도 예뻐요",
    tag: "20%",
    sale: "28,000원",
    price: "35,000원",
    link: "https://naver.me/xgXll8cq",
    img: "img/play-rattle.svg",
    emoji: "🔔"
  }
];
