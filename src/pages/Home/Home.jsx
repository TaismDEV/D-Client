import React from "react";
import { useSelector } from "react-redux";
import { OurServices, Carousel, About, BeforeAfter } from "../../components";
import styles from './style.module.css'

const Home = () => {
  
  const contentBeforeAfter = useSelector(state => state.content.contentBeforeAfter);
  
  return (
      <> 

      <p id="top" className={styles.p}></p>

      <div className={styles.carouselDiv}>
        <Carousel />
      </div>

      <About />

      <p className="text-center py-16 text-4xl text-indigo-900"> Wij zijn gespecialiseerd in alle soorten bouw- en renovatiewerken. <br /> U kunt ook bij ons terecht voor het plaatsen van tegels.</p>

      <OurServices />
      <p id="fotosVanJob" className="w-full h-12 EL FOR YAKOR"></p>
      <p className="text-center py-10 text-6xl text-indigo-900"> VOOR-EN-NA-FOTO'S </p>

      <div className={styles.beforeAfterContent}>
        <div className={styles.BeforeAfter}>
          {contentBeforeAfter.map((content) => (
            <div key={content.id} className={styles.beforeAfterIMG}>
              <BeforeAfter content={content} />
            </div>
          ))}
        </div>
      </div>

      <p className="text-center py-10 text-2xl text-indigo-900"> <a href="#top"> Druk om naar boven te gaan </a>  </p>

      </>
  );
};  

export default Home;
