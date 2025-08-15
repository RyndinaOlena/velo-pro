import React from 'react';
import style from './style.module.scss';
import bike from '../../assets/images/mountain-bikes.jpg';

const MountainBikes = () => {
  return (
    <div className={style.mountain_bikes_block}>
      <h2 className={style.mountain_bikes_title}>
        <strong>Mountain Bikes</strong>
      </h2>
      <div className={style.mountain_bikes}>
        <div className={style.mountain_bikes_list}>
          <ul className={style.mountain_bikes_list_items}>
            <li className={style.mountain_bikes_list_items_item}>
              <h4 className={style.mountain_bikes_list_items_item_title}>
                Рама
              </h4>
              <p className={style.mountain_bikes_list_item_text}>
                It is a long established fact that a reader will be distracted
                by the readable content of
              </p>
            </li>
            <li className={style.mountain_bikes_list_items_item}>
              <h4 className={style.mountain_bikes_list_items_item_title}>
                Бортовой компьютер
              </h4>
              <p className={style.mountain_bikes_list_item_text}>
                The point of using lorem ipsum is that it has a more-or-less
                normal distribution of letters
              </p>
            </li>
            <li className={style.mountain_bikes_list_items_item}>
              <h4 className={style.mountain_bikes_list_items_item_title}>
                Трансмиссия
              </h4>
              <p className={style.mountain_bikes_list_item_text}>
                Many desktop publishing packages and web page editors now use
                lorem ipsum as
              </p>
            </li>
            <li className={style.mountain_bikes_list_items_item}>
              <h4 className={style.mountain_bikes_list_items_item_title}>
                Оборудование
              </h4>
              <p className={style.mountain_bikes_list_item_text}>
                Contrary to popular belief, lorem ipsum is not simply random
                text. It has roots in
              </p>
            </li>
          </ul>
        </div>
        <div className={style.mountain_bikes_container}>
          <img
            className={style.mountain_bikes_container_image}
            src={bike}
            alt="Mountain Bike"
          />
          <p>
            Горный велосипед несмотря на свое название часто и активно
            используются в условиях города, так как обладает рядом
            характеристик, позволяющих сделать велопрогулку максимально приятной
            и комфортной
          </p>
          <button className={style.mountain_bikes_button}>Узнать больше</button>
        </div>
      </div>
    </div>
  );
};

export default MountainBikes;
