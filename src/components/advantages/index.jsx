import React from 'react';
import style from './style.module.scss';
import img from '../../assets/images/rectangle.png';
import img2 from '../../assets/images/rectangle2.png';

const Advantages = () => {
  return (
    <div className={style.advantages}>
      <h2 className={style.advantages_title}>Преимущества</h2>
      <div className={style.advantages_list}>
        <img
          src={img}
          alt="Advantage 1"
          className={style.advantages_list_img}
        />
        <div className={style.advantages_list_items}>
          <div className={style.advantages_list_items_block}>
            <h4 className={style.advantages_list_items_title}>
              Быстрая доставка
            </h4>
            <p className={style.advantages_list_items_text}>
              Мы пользуемся всеми популярными видами доставки
            </p>
            <button className={style.advantages_list_items_button}>
              Подробнее
            </button>
          </div>
          <div className={style.advantages_list_items_block}>
            <h4 className={style.advantages_list_items_title}>
              Гарантия качества
            </h4>
            <p className={style.advantages_list_items_text}>
              Все товары обеспечены фирменной гарантией фирм-производителей
            </p>
            <button className={style.advantages_list_items_button}>
              Подробнее
            </button>
          </div>
          <div className={style.advantages_list_items_block}>
            <h4 className={style.advantages_list_items_title}>ОНЛАЙН ОПЛАТА</h4>
            <p className={style.advantages_list_items_text}>
              Мы выполняем ремонт велосипеда любой сложности
            </p>
            <button className={style.advantages_list_items_button}>
              Подробнее
            </button>
          </div>
          <div className={style.advantages_list_items_block}>
            <h4 className={style.advantages_list_items_title}>
              ДОП. ОБСЛУЖИВАНИЕ
            </h4>
            <p className={style.advantages_list_items_text}>
              Для удобства вы можете оплатить товар банковской картой через сайт
            </p>
            <button className={style.advantages_list_items_button}>
              Подробнее
            </button>
          </div>
        </div>
        <img
          src={img2}
          alt="Advantage 2"
          className={style.advantages_list_img}
        />
      </div>
    </div>
  );
};

export default Advantages;
