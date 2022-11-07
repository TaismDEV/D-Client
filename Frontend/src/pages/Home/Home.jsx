import React from "react";
import { OurServices, Carousel, About } from "../../components";
// import { useSelector, useDispatch } from "react-redux";
import styles from './style.module.css'

const slides =[
  {
    id: 1,
    title: 'Slide 1',
    src: 'http://localhost:3000/3.jpg',
  },
  {
    id: 2,
    title: 'Slide 2',
    src: 'http://localhost:3000/2.jpg',
  },
  {
    id: 3,
    title: 'Slide 3',
    src: 'http://localhost:3000/6.jpg',
  },
]

const Home = () => {

  return (
      <> 
      <div className={styles.carouselDiv}>
        <Carousel slides={slides} />
      </div>
      <About />
      <OurServices />
      </>
  );
};  

export default Home;
