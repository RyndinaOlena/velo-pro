import { useRef, useState } from "react";
import styles from "./slider.module.scss";

export default function Slider() {
  const slides = [
    { text: "Экстремальное вождение", bg: "/img/slide1.jpg" },
    { text: "Велосипеды для профессионалов", bg: "/img/slide2.jpg" },
    { text: "Прогулочные маршруты", bg: "/img/slide3.jpg" },
  ];

  const sliderRef = useRef(null);
  const [current, setCurrent] = useState(0);

  const scrollToSlide = (index) => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.clientWidth;
      sliderRef.current.scrollTo({
        left: slideWidth * index,
        behavior: "smooth",
      });
      setCurrent(index);
    }
  };

  return (
    <div className={styles.sliderWrapper}>
      <div className={styles.dots}>
        {slides.map((_, i) => (
          <span
            key={i}
            className={`${styles.dot} ${i === current ? styles.active : ""}`}
            onClick={() => scrollToSlide(i)}
          ></span>
        ))}
      </div>

    <div className={styles.slider} ref={sliderRef}>
  {slides.map((slide, i) => (
    <div
      key={i}
      className={styles.slide}
    onClick={() => scrollToSlide(i)}
    >
      <div
        className={`${styles.overlay} ${
          i === current ? styles.overlay_active_slide : ""
        }`}
      >
        <p>{slide.text}</p>
        <a href="#">Подробнее</a>
      </div>
    </div>
  ))}
</div>
    </div>
  );
}
