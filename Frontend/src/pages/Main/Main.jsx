import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header, Footer } from '../../components';
import { Home, Registration, Login } from "../";
// import styles from "./style.module.css";

const Main = () => {
  return (
    <>
      <div className="main">
        <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/ingconstructie-registration" element={<Registration/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </div>
    <div className="footer">
      <Footer />
    </div>
  </>
  );
}

export default Main;