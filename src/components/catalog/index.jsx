import style from './catalog.module.scss';
import img1 from '../../assets/images/catalog/ekip.png';
import img2 from '../../assets/images/catalog/bike2.png';
import img3 from '../../assets/images/catalog/tool.png';
import img4 from '../../assets/images/catalog/wheel.png';
import img5 from '../../assets/images/catalog/equipment.png';
import img6 from '../../assets/images/catalog/bike-main.png';
const Catalog = () => {
  return (
    <section className={style.catalog}>
      <div className={style.big_block}>
        <h2>Велосипеды</h2>
        <img src={img6} alt="img"></img>
      </div>

      <div className={style.small_blocks}>
        <div className={style.small_blocks_item_first}>
          <h2>Trade-In</h2>
          <img src={img2} alt="img" />
        </div>

        <div className={style.small_blocks_info}>
          <div className={style.small_blocks_info_item}>
            <div className={style.small_blocks_item}>
              <h2>запчастини</h2>
              <img src={img3}></img>
            </div>
            <div className={style.small_blocks_item}>
              <h2>Экипировка</h2>
              <img src={img1}></img>
            </div>
          </div>
          <div className={style.small_blocks_info_item}>
            <div className={style.small_blocks_item}>
              <h2> Аксессуары</h2>
              <img src={img4}></img>
            </div>
            <div className={style.small_blocks_item}>
              <h2>Велостанки</h2>
              <img src={img5}></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
