import React from 'react'
import style from "./catalog.module.scss";
const Catalog = () => {
  return (
       <section className={style.catalog}>
      <div className={style.bigBlock}>Велосипеды</div>
      
      <div className={style.smallBlocks}>
        <div className={style.block}>Trade-In</div>
        <div className={style.block}>Запчасти</div>
        <div className={style.block}>Экипировка</div>
        <div className={style.block}>Аксессуары</div>
        <div className={style.block}>Велостанки</div>
      </div>
    </section>
 
  )
}

export default Catalog