import { React, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from './style.module.css';

const Carousel = () => {

  const slides = useSelector(state => state.content.slides);

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(current === slides.length - 1 ? 0 : current + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [current, slides.length]);


  const goToNext = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  }

  const goToPrev = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  }

  return (
    <div   className={styles.divImg}>
      <div className={styles.rightArrow} onClick={goToNext}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-10 h-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>
      </div>
      <div className={styles.leftArrow} onClick={goToPrev}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-10 h-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
</svg>

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


