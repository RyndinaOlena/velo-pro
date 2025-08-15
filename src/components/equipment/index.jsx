import React, { useRef } from 'react';
import style from './style.module.scss';
import { bikesData } from '../hero/bikesData.js';

const Equipment = () => {
  const gallery = useRef(null);

  const scrollLeft = () => {
    gallery.current.scrollBy({
      left: -300,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    gallery.current.scrollBy({
      left: 300,
      behavior: 'smooth',
    });
  };

  return (
    <div className={style.carousel}>
      <div ref={gallery} className={style.carousel_gallery}>
        <button
          onClick={scrollLeft}
          className={`${style.carousel_arrow} ${style.carousel_left}`}
        >
          Left
        </button>
        {bikesData.map((bike, index) => (
          <div key={index} className={style.carousel_gallery_item}>
            <img
              src={bike.img}
              alt={bike.name}
              className={style.carousel_gallery_item_img}
            />
            <h3>{bike.name}</h3>
            <p>{bike.price} грн</p>
          </div>
        ))}
        <button
          onClick={scrollRight}
          className={`${style.carousel_arrow} ${style.carousel_right}`}
        >
          Right
        </button>
      </div>
    </div>
  );
};

export default Equipment;
