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

      {/* Вынесли за пределы ограниченного контейнера */}
      <div className={style.description_block}>
        <img
          className={style.description_block_image}
          src={img}
          alt="Description"
        />
        <div className={style.description_block_guarantees}>
          <ul className={style.description_block_guarantees_list}>
            <li className={style.description_block_guarantees_list_el}>
              <img src={icon1} />
              dfbs
            </li>
            <li className={style.description_block_guarantees_list_el}>
              <img src={icon2} />
              fdsbvs
            </li>
            <li className={style.description_block_guarantees_list_el}>
              <img src={icon3} />
              fdsbv
            </li>
            <li className={style.description_block_guarantees_list_el}>
              <img src={icon4} />
              sdfv
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Description;
