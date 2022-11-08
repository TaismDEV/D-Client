import React from "react";
// import { Link } from "react-router-dom";
import { OurServices, Carousel, About, BeforeAfter } from "../../components";
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

const contentBeforeAfter =[
  [
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
  ],
  [
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
  ],
  [
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
  ],
  [
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
  ],
]

const Home = () => {

  return (
      <> 
      <div className={styles.carouselDiv}>
        <Carousel slides={slides} />
      </div>

      <About />

      <p className="text-center py-16 text-6xl text-indigo-900"> Ons bedrijf levert allerlei diensten met betrekking tot reparatie en constructie </p>

      <OurServices />

      <p className="text-center py-16 text-6xl text-indigo-900"> Foto's van ons werk </p>

      <div className={styles.beforeAfterContent}>
        <div className={styles.BeforeAfter}>
          {contentBeforeAfter.map((content, index) => (
            <div className={styles.beforeAfter}>
              <BeforeAfter content={content} />
            </div>
          ))}
        </div>
      </div>

      <p className="text-center py-5 text-3xl text-indigo-900"> <a href="#"> Druk om naar de top te gaan </a>  </p>

      </>
  );
};  

export default Home;
