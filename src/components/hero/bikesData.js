// src/data/bikesData.js

import bike1 from "../../assets/images/bikes/bike1.png";
import bike2 from "../../assets/images/bikes/bike2.jpg";
import bike3 from "../../assets/images/bikes/bike3.jpg";
import bike4 from "../../assets/images/bikes/bike4.png";
import bike5 from "../../assets/images/bikes/bike5.jpg";




export const bikesData = [
  {
    id: 1,
    name: "Гірський велосипед",
    img: bike1,
    flag: "🇺🇦", // можна і URL прапора, якщо треба картинка
    price: 12000,
    link: "/buy/1", // куди веде кнопка "Купити"
  },
  {
    id: 2,
    name: "Шосейний велосипед",
    img: bike2,
    flag: "🇵🇱",
    price: 18500,
    link: "/buy/2",
  },
  {
    id: 3,
    name: "Дитячий велосипед",
    img: bike3,
    flag: "🇩🇪",
    price: 8500,
    link: "/buy/3",
  },
  {
    id: 4,
    name: "Шосейний велосипед",
    img: bike4,
    flag: "🇵🇱",
    price: 18500,
    link: "/buy/2",
  },
  {
    id: 5,
    name: "Дитячий велосипед",
    img: bike5,
    flag: "🇩🇪",
    price: 8500,
    link: "/buy/3",
  },
];
