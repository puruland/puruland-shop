// 푸루맘 상점 상품 목록 — 새 상품은 Claude에게 "상품 추가해줘" 하면 여기에 들어가요.
//
// id       : 인포크링크 주소 끝부분 → https://puruland.github.io/puruland-shop/#id (누르면 그 카테고리가 열리고 상품으로 이동)
// type     : "공구"(start/end 날짜 필요) 또는 "추천템"(일반 제휴 링크)
// partner  : coupang / naver / slit
// category : 일상템 / 패션템 / 인테리어템 / 주방템 / 이유식템
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
  }
];
