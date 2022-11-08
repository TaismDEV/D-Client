import { React, useState, useEffect } from 'react';
import styles from './style.module.css';

const BeforeAfter = ({ content }) => {

  const [current, setCurrent] = useState(0);

  const goToNext = () => {
    setCurrent(current === content.length - 1 ? 0 : current + 1);
  }

  const goToPrev = () => {
    setCurrent(current === 0 ? content.length - 1 : current - 1);
  }

  return (
    <div className={styles.divImg}>

      <div className={styles.rightArrow} onClick={goToNext}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-9 h-9">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </div>

      <div className={styles.leftArrow} onClick={goToPrev}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-9 h-9">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </div>

      <div className={styles.img} style={{backgroundImage: `url(${content[current].src})`}}></div>

    </div>
  );
}

export default BeforeAfter;
