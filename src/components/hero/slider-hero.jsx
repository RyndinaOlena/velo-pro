import style from "./hero.module.scss";

import slide1 from "../../assets/images/scrol-hero/1.png";
import slide2 from "../../assets/images/scrol-hero/2.png";
import slide3 from "../../assets/images/scrol-hero/3.png";
import slide4 from "../../assets/images/scrol-hero/4.png";
import slide5 from "../../assets/images/scrol-hero/5.png";
import slide6 from "../../assets/images/scrol-hero/6.png";
import slide7 from "../../assets/images/scrol-hero/7.png";
import slide8 from "../../assets/images/scrol-hero/1.png";
import slide9 from "../../assets/images/scrol-hero/2.png";
import slide10 from "../../assets/images/scrol-hero/3.png";
import slide11 from "../../assets/images/scrol-hero/4.png";
import slide12 from "../../assets/images/scrol-hero/5.png";

export default function ImageSlider() {

const images = [slide1, slide2, slide3, slide4, slide5, slide6, slide7,slide8, slide9, slide10, slide11, slide12 ];


  return (
    <div className={style.gallery}>
      {images.map((img, i) => (
        <img className={style.gallery_img_slider} key={i} src={img} alt={`Slide ${i}`} />
      ))}
    </div>
  );
}
