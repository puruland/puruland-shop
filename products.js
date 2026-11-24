// 푸루맘 상점 상품 목록
// 새 상품은 Claude에게 "상품 추가해줘" 하면 여기에 들어가요.
//
// id       : 인포크링크에 넣을 주소 끝부분 → https://puruland-shop.netlify.app/#id
// type     : "공구" 또는 "추천템"(일반 제휴 링크)
// partner  : "coupang"(쿠팡 인플루언서) / "naver"(네이버 브랜드커넥트) / "slit"(아임웹 슬릿) / 없으면 비워두기 → 카드와 페이지 아래에 수수료 문구가 자동으로 붙어요
// category : 이유식템 / 놀이템 / 외출템 / 책 / 아기옷 등 (카테고리 버튼이 자동으로 생겨요)
// start/end: 공구 시작일·마감일 (YYYY-MM-DD). 마감일이 지나면 자동으로 '지난 공구'로 가요
// sale     : 공구가·할인가 (크게 보임)   price : 정가 (줄 그어짐)
// note     : 한 줄 설명      link : 구매 링크
// img      : 상품 사진 파일 이름(없거나 못 불러오면 emoji가 보여요)
// color    : peach / mint / sky / yellow / lav

window.PRODUCTS = [
  {
    id: "suupy-nasal-aspirator",
    type: "추천템",
    partner: "slit",
    category: "육아템",
    name: "수피(SUUPY) 전동 콧물 흡인기 TX-5",
    note: "아기 콧물 뺄 때 쓰는 전동 콧물 흡인기",
    sale: "248,000원",
    price: "298,000원",
    link: "https://slit.to/s/m5ywd6",
    img: "img/suupy.svg",
    emoji: "👶",
    color: "sky"
  },
  {
    id: "cheese-slimball-pajama",
    type: "추천템",
    partner: "slit",
    category: "아기옷",
    name: "치즈실내복 [26 봄 가을] 슬림볼 실내복 착붙핏",
    note: "봄가을에 입히는 슬림볼 실내복, 착 붙는 핏",
    sale: "15,900원",
    link: "https://slit.to/s/vs62jt",
    img: "img/cheese-slimball.svg",
    emoji: "👕",
    color: "yellow"
  },
  {
    id: "cheese-couple-pajama",
    type: "추천템",
    partner: "slit",
    category: "아기옷",
    name: "치즈실내복 꿀잼커플실내복 낙낙핏",
    note: "알록달록 커플 실내복, 낙낙한 핏",
    sale: "할인가 16,900원",
    link: "https://slit.to/s/u5zgrh",
    img: "img/cheese-couple.svg",
    emoji: "👕",
    color: "peach"
  },
  {
    id: "cheese-bamboo-pajama",
    type: "추천템",
    partner: "slit",
    category: "아기옷",
    name: "치즈실내복 [26 봄가을] 포인트 밤부 실내복 낙낙핏",
    note: "봄가을에 입히는 밤부 실내복, 낙낙한 핏",
    sale: "16,900원",
    link: "https://slit.to/s/eu8m8h",
    img: "img/cheese-bamboo.svg",
    emoji: "👕",
    color: "mint"
  },
  {
    id: "cheese-disney-pajama",
    type: "추천템",
    partner: "slit",
    category: "아기옷",
    name: "치즈실내복 [26 겨울] 메리 디즈니 실내복 낙낙핏",
    note: "겨울에 입히기 좋은 디즈니 실내복, 낙낙한 핏",
    sale: "19,800원",
    link: "https://slit.to/s/sipqge",
    img: "img/cheese-disney.svg",
    emoji: "👕",
    color: "peach"
  },
  {
    id: "art-play-book",
    type: "추천템",
    partner: "coupang",
    category: "책",
    name: "0~5세 기적의 미술 놀이",
    note: "하루 10분, 준비 없이 하는 두뇌 발달 놀이 95가지",
    link: "https://link.coupang.com/a/iV8X4ib0Ng",
    img: "book_art.jpg",
    emoji: "🎨",
    color: "yellow"
  }
];
