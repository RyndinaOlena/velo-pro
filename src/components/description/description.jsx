import React from 'react';
import style from './style.module.scss';
import img from '../../assets/images/bg.jpg';
import icon1 from '../../assets/images/icons/Group.png';
import icon2 from '../../assets/images/icons/Group1.png';
import icon3 from '../../assets/images/icons/group2.png';
import icon4 from '../../assets/images/icons/vector.png';
const Description = () => {
  return (
    <div className={style.description_container}>
      <div className={style.description}>
        <div className={style.description_content}>
          <h2 className={style.description_content_title}>
            Ничего не сможет остановить вас
          </h2>
          <div className={style.description_content_text}>
            <p>
              Наша компания специализируется на продаже товаров для
              велосипедного спорта — велосипедов, запасных частей, аксессуаров и
              различного спортивного инвентаря для активного спорта и отдыха.
            </p>
            <a href="#">More</a>
          </div>
        </div>
      </div>

      <div className={style.description_block}>
        <img
          className={style.description_block_image}
          src={img}
          alt="Description"
        />
        <div className={style.description_block_guarantees}>
          <ul className={style.description_block_guarantees_list}>
            <li className={style.description_block_guarantees_list_el}>
              <div className={style.description_block_guarantees_list_el_item}>
                <img
                  className={
                    style.description_block_guarantees_list_el_item_icon
                  }
                  src={icon1}
                />
                <h4
                  className={
                    style.description_block_guarantees_list_el_title_title
                  }
                >
                  Европейские бренды
                </h4>
              </div>
              <p className={style.description_block_guarantees_list_el_text}>
                Представляем десятки европейских брендов
              </p>
            </li>
            <li className={style.description_block_guarantees_list_el}>
              <div className={style.description_block_guarantees_list_el_item}>
                <img
                  className={
                    style.description_block_guarantees_list_el_item_icon
                  }
                  src={icon2}
                />
                <h4
                  className={
                    style.description_block_guarantees_list_el_title_title
                  }
                >
                  Вечная гарантия
                </h4>
              </div>
              <p className={style.description_block_guarantees_list_el_text}>
                На некоторые бренды предоставляем пожизненную гарантию
              </p>
            </li>
            <li className={style.description_block_guarantees_list_el}>
              <div className={style.description_block_guarantees_list_el_item}>
                <img
                  className={
                    style.description_block_guarantees_list_el_item_icon
                  }
                  src={icon3}
                />
                <h4
                  className={
                    style.description_block_guarantees_list_el_title_title
                  }
                >
                  Предпродажная настройка
                </h4>
              </div>
              <p className={style.description_block_guarantees_list_e_text}>
                Специалисты настроят ваш велосипед наилучшим образом
              </p>
            </li>
            <li className={style.description_block_guarantees_list_el}>
              <div className={style.description_block_guarantees_list_el_item}>
                <img
                  className={
                    style.description_block_guarantees_list_el_item_icon
                  }
                  src={icon4}
                />
                <h4
                  className={
                    style.description_block_guarantees_list_el_title_title
                  }
                >
                  Доставка за 24 часа
                </h4>
              </div>
              <p className={style.description_block_guarantees_list_el_text}>
                Доставляем товар всеми популярными транспортными компаниями
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Description;
