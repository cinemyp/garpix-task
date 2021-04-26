import mvideo from "../components/Views/Partners/assets/mvideo.svg";
import burger from "../components/Views/Partners/assets/burger.svg";
import techno from "../components/Views/Partners/assets/techno.svg";
import bork from "../components/Views/Partners/assets/bork.svg";
import euro from "../components/Views/Partners/assets/euro.svg";

import technoOffer from "../components/Views/Offers/assets/technoOffer.svg";
import technoSmallLogo from "../components/Views/Offers/assets/technoSmallLogo.svg";

import five from "../components/Views/Bar/assets/five.svg";

export const NAVIGATION_DATA = [
  { title: "Купоны и сертификаты", to: "/coupons" },
  { title: "Впечатления", to: "/impressions" },
  { title: "Авиабилеты", to: "/air" },
  { title: "Ж/д билеты", to: "/railway" },
  { title: "Отели", to: "/hotels" },
  { title: "Каршеринг", to: "/carsharing" },
  { title: "Театры", to: "/theaters" },
  { title: "Страхование", to: "/insurance" },
  { title: "Как подключиться", to: "/connect" },
  { title: "Партнеры", to: "/partners" },
];

export const PARTNERS_FILTER = [
  { title: "Все партнеры", value: "all" },
  { title: "Популярное", value: "popular" },
  { title: "Супермаркеты", value: "supermarkets" },
  { title: "Кафе и рестораны", value: "cafes" },
  { title: "Такси", value: "taxi" },
  { title: "Красота", value: "beauty" },
  { title: "Электроника и бытовая техника", value: "electronics" },
  { title: "Зоотовары", value: "petsupplies" },
  { title: "Кино и театр", value: "theaters" },
  { title: ". . .", value: "etc" },
];

export const PARTNERS_DATA = [
  {
    percent: "1.5%",
    title: "Спасибо от суммы покупки",
    logo: mvideo,
    companyName: "М.Видео",
  },
  {
    percent: "3%",
    title: "Спасибо от суммы покупки",
    logo: burger,
    companyName: "Бургер Кинг",
  },
  {
    percent: "4.5%",
    title: "Спасибо от суммы покупки",
    logo: techno,
    companyName: "Холодильник.ру",
  },
  {
    percent: "От 1,5%",
    title: "Спасибо от суммы покупки",
    logo: bork,
    companyName: "BORK",
  },
  {
    percent: "1,5%",
    title: "Спасибо от суммы покупки",
    logo: euro,
    companyName: "Евросеть",
  },
  {
    percent: "4.5%",
    title: "Спасибо от суммы покупки",
    logo: techno,
    companyName: "Холодильник.ру",
  },
  {
    percent: "От 1,5%",
    title: "Спасибо от суммы покупки",
    logo: bork,
    companyName: "BORK",
  },
  {
    percent: "1,5%",
    title: "Спасибо от суммы покупки",
    logo: euro,
    companyName: "Евросеть",
  },
  {
    percent: "1,5%",
    title: "Спасибо от суммы покупки",
    logo: euro,
    companyName: "Евросеть",
  },
];

export const OFFERS_DATA = [
  {
    photo: technoOffer,
    smallLogo: technoSmallLogo,
    companyName: "Технопарк",
    offer: "20% спасибо за технику Electrolux",
  },
  {
    photo: technoOffer,
    smallLogo: technoSmallLogo,
    companyName: "Технопарк",
    offer: "20% спасибо за технику Electrolux",
  },
  {
    photo: technoOffer,
    smallLogo: technoSmallLogo,
    companyName: "Технопарк",
    offer: "20% спасибо за технику Electrolux",
  },
];

export const CARDSBAR_DATA = [
  {
    data: [
      { logo: five, percent: "" },
      { logo: five, percent: "" },
      { logo: five, percent: "" },
      { logo: five, percent: "" },
      { logo: five, percent: "" },
    ],
    description: "Скидки за бонусы",
  },
  {
    data: [
      { logo: five, percent: "3%" },
      { logo: five, percent: "1.5%" },
      { logo: five, percent: "1.5%" },
    ],
    description: "Большой % начисления",
  },
  {
    data: [
      { logo: five, percent: "" },
      { logo: five, percent: "" },
      { logo: five, percent: "" },
    ],
    description: "Выгодные купоны",
  },
  {
    data: [
      { logo: five, percent: "" },
      { logo: five, percent: "" },
      { logo: five, percent: "" },
      { logo: five, percent: "" },
      { logo: five, percent: "" },
    ],
    description: "Персональное исходя из трат",
  },
];
