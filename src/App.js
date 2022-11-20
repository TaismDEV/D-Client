import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Main } from './pages';

import { store } from './store'

const App = () => (
  <>
  <BrowserRouter>
  <Provider store={store}>
   <Main/>
  </Provider>
  </BrowserRouter>
  </>
);

export default App;
