import React from "react";
import Home from "../Home/Home";
import { Route, Link, Routes, useLocation, Navigate } from "react-router-dom";
import Registration from "../Registration/Registration";

const Main = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <Link to='/'>Home</Link>
      <Link to ='/registration'>Registration</Link>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/registration" element={<Registration/>} />
      </Routes>
      <p>lkdc</p>
    </div>
  );
};

export default Main;
