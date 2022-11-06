import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar, Footer, Request } from '../../components';
import { Home, Registration, Login } from "../";

const Main = () => {

  // const modal = true;
  const modal = false;

  return (
    <>
    {modal && <Request /> }
      <div className="main">
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/ingconstructie-registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/request" element={<Request />} />
          </Routes>
      </div>

      <div className="footer">
            <Footer />
      </div>
    </>
  );
}

export default Main;
