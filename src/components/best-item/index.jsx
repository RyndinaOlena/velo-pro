import React from 'react';
import style from './style.module.scss';
import BikesCarousel from './carousel';

const BestVelo = () => {
  return (
    <div className={style.best_velo}>
      <h2>Лучшие модели для зимней здs</h2>
      <div className={style.best_velo_container}>
        <BikesCarousel />
      </div>
    </div>
  );
};

export default BestVelo;
