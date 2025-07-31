import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { bikesData } from "../hero/bikesData.js";
import style from "../hero/hero.module.scss";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function BikeGallery() {
  return (
    <div className={style.container}>
      <h2 className={style.container_gallery_title}> Новинки</h2>
    <div className={style.bike_gallery}>
   <Swiper
  modules={[Navigation, Pagination, Autoplay]}
  spaceBetween={20}
  slidesPerView={1}
  navigation
  pagination={{ clickable: true }}
  autoplay={{ delay: 3000 }}
  loop={true}
  observer={true}
  observeParents={true}
  breakpoints={{
    500: { slidesPerView: 1 },
    800: { slidesPerView: 2 },
    1280: { slidesPerView: 3 },
  }}
>
        {bikesData.map((bike) => (
          <SwiperSlide key={bike.id}>
            <div className={style.bike_card}>
              <span className={style.bike_card_flag}>{bike.flag}</span>
              <img src={bike.img} alt={bike.name}  className={style.bike_card_img_velo}/>
              <h3 className={style.bike_card_name}>{bike.name}</h3>
              <p className={style.bike_card_price}>{bike.price} грн</p>
              <a href={bike.link} className={style.bike_card_btn}>
                Купити
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper >
    </div>
    <p className={style.container_btn}>Show all of them</p>
    </div>
  );
}

export default BikeGallery;
