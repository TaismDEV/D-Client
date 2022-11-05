import { React, useState, useEffect } from 'react';
import styles from './style.module.css';

const Carousel = ({slides}) => {

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(current === slides.length - 1 ? 0 : current + 1);
      console.log(current);
    }, 7000);
    return () => clearInterval(interval);
  }, [current, slides.length]);


  const goToNext = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  }

  const goToPrev = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  }

  return (
    <div className={styles.divImg}>
      <div className={styles.rightArrow} onClick={goToNext}>
        ▶︎
      </div>
      <div className={styles.leftArrow} onClick={goToPrev}>
        ◀︎
      </div>
      <div className={styles.img} style={{backgroundImage: `url(${slides[current].src})`}}></div>
      <div className={styles.dotContainer}>
        {slides.map((slide, index) => (
          <div key={index} className={styles.dot} onClick={() => setCurrent(index)}>●</div>
        ))}
      </div>  
    </div>
  );
}

export default Carousel;
