// 푸루맘 상점 상품 목록
// 새 상품은 Claude에게 "상품 추가해줘" 하면 여기에 들어가요.
//
// id       : 인포크링크에 넣을 주소 끝부분 → https://puruland-shop.netlify.app/#id
// type     : "공구" 또는 "추천템"(일반 제휴 링크)
// category : 이유식템 / 놀이템 / 외출템 등 (카테고리 버튼이 자동으로 생겨요)
// start/end: 공구 시작일·마감일 (YYYY-MM-DD). 마감일이 지나면 자동으로 '지난 공구'로 가요
// sale     : 공구가·할인가 (크게 보임)   price : 정가 (줄 그어짐)
// note     : 한 줄 설명      link : 구매 링크
// img      : 상품 사진 파일 이름(없으면 emoji가 보여요)
// color    : peach / mint / sky / yellow / lav

window.PRODUCTS = [
  {
    id: "sample-spoon",
    type: "공구",
    category: "이유식템",
    name: "예시) 자기주도 실리콘 스푼 세트",
    start: "2026-11-24",
    end: "2026-11-30",
    sale: "15,900원",
    price: "19,800원",
    note: "푸루가 혼자 떠먹기 시작할 때 쓴 스푼 (예시 상품)",
    link: "https://www.instagram.com/puruland_/",
    img: "",
    emoji: "🥄",
    color: "peach"
  },
  {
    id: "sample-bib",
    type: "추천템",
    category: "이유식템",
    name: "예시) 푸루 최애 방수 턱받이",
    note: "매일 쓰는 거 (예시 상품)",
    link: "https://www.instagram.com/puruland_/",
    img: "",
    emoji: "🍼",
    color: "sky"
  },
  {
    id: "sample-book",
    type: "추천템",
    category: "놀이템",
    name: "예시) 까꿍 헝겊책",
    note: "집중력 놀이할 때 (예시 상품)",
    link: "https://www.instagram.com/puruland_/",
    img: "",
    emoji: "📚",
    color: "yellow"
  }
];
