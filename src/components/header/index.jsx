import React from 'react'
import styles from './header.module.scss'
import logo2 from '../../assets/images/logo2.png' 
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { useTranslation } from 'react-i18next';
import Slider from './slider';

const Header = () => {
    const { t, i18n } = useTranslation();

const changeLanguage = (lng) => {
  i18n.changeLanguage(lng);
  localStorage.setItem('language', lng);
};
  return (
    <div>
    <div className={styles.header_background}>
    <div className={styles.header_container}>
    <div className={styles.hero}>
      <img src={logo2} className={styles.hero_logo} alt="logo" />
    <div className={styles.hero_language_container}>      

  <button
  className={`${styles.hero_language_container_btn} ${i18n.language === "uk" ? styles.active : ""}`}
  onClick={() => changeLanguage("uk")}
>
  UA
</button>
  <button
    className={`${styles.hero_language_container_btn} ${i18n.language === "en" ? styles.active : ""}`}
    onClick={() => changeLanguage("en")}
  >
    EN
  </button>
      </div>
      
      <ul className={styles.hero_menu}>
      <li className={styles.hero_menu_nav_item}>
        <a>{t('tradeIn')}</a></li>
      <li className={styles.hero_menu_nav_item}><a>{t('bicycles')}</a></li>
      <li className={styles.hero_menu_nav_item}><a>{t('spareParts')}</a></li>
      <li className={styles.hero_menu_nav_item}><a>{t('equipment')}</a></li>
      <li className={styles.hero_menu_nav_item}><a>{t('accessories')}</a></li>
      <li className={styles.hero_menu_nav_item}><a>{t('bikeRacks')}</a></li>
      </ul>
      <ul className={styles.hero_icons}>
        <li className={styles.hero_icons_item}><CiSearch /></li>
        <li className={styles.hero_icons_item}><CiUser /></li>
        <li className={styles.hero_icons_item}><CiHeart /></li>
        <li className={styles.hero_icons_item} ><CiShoppingCart /></li>
      </ul>
      <div className={styles.hero_menu_mobile}>
        <span className={styles.hero_menu_mobile_item}></span>
        <span className={styles.hero_menu_mobile_item}></span>
        <span className={styles.hero_menu_mobile_item}></span>
      </div>
    </div> 
   </div>
    <div className={styles.header_background_title_container}>
        <h1 className={styles.header_background_title_container_item}>{t('electro')}<br/>{t('bicycles')}</h1>
        <p className={styles.header_background_title_container_text}>{t('bicyclesText')}</p>
        <button className={styles.header_background_title_container_btn}>Подробнее</button>
        </div>
   </div>
   <Slider />
   </div>
  )
}

export default Header