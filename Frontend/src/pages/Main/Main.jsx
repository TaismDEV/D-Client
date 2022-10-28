import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header, Footer } from '../../components';
import { Home, Registration } from "../";
// import styles from "./style.module.css";

const Main = () => {
  return (
    <>
      <div className="main">
        <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/registration" element={<Registration/>} />
        </Routes>
      </div>
    <div className="footer">
      <Footer />
    </div>
  </>
  );
}

export default Main;
