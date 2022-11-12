import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar, Footer, Request, Feedback, BeforeAfter } from '../../components';
import { Home, Registration, Login } from "../";
import { useSelector } from 'react-redux';


const Main = () => {

  const modal = useSelector(state => state.consts.modal);

  const feedback = useSelector(state => state.consts.feedback);

  return (
    <>
    {modal && <Request /> }
    {feedback && <Feedback /> }
      <div className="main">
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/ingconstructie-registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/request" element={<Request />} />
            {/* <Route path="/beforeAfter" element={<BeforeAfter />} /> */}
          </Routes>
      </div>

      <div className="footer ">
            <Footer />
      </div>
    </>
  );
}

export default Main;
