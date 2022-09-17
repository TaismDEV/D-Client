import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Main, Footer } from './components';

import { store } from './store'

const App = () => (
  <BrowserRouter>
  <Provider store={store}>
    <div>
      <Main />
      <Footer />
    </div>
  </Provider>
  </BrowserRouter>
);

export default App;
