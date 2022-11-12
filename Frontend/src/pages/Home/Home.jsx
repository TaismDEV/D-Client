import React from "react";
import { useSelector } from "react-redux";
import { OurServices, Carousel, About, BeforeAfter } from "../../components";
import styles from './style.module.css'

const Home = () => {
  
  const contentBeforeAfter = useSelector(state => state.content.contentBeforeAfter);
  
  return (
      <> 
      <div className={styles.carouselDiv}>
        <Carousel />
      </div>

      <About />

      <p className="text-center py-16 text-6xl text-indigo-900"> Ons bedrijf levert allerlei diensten met betrekking tot reparatie en constructie </p>

      <OurServices />

      <p id={"fotosVanJob"} className="text-center py-16 text-6xl text-indigo-900"> Foto's van ons werk </p>

      <div className={styles.beforeAfterContent}>
        <div className={styles.BeforeAfter}>
          {contentBeforeAfter.map((content) => (
            <div key={content.id} className={styles.beforeAfterIMG}>
              <BeforeAfter content={content} />
            </div>
          ))}
        </div>
      </div>

      <p className="text-center py-10 text-3xl text-indigo-900"> <a href="#top"> Druk om naar de top te gaan </a>  </p>
      {console.log('render')}

      </>
  );
};  

export default Home;
