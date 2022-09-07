import React from 'react';
import { Provider } from 'react-redux';

import { Main } from './components';

import { store } from './store'

const App = () => (
  <Provider store={store}>
    <div className='wrapper'>
      <Main />
    </div>
  </Provider>
);

export default App;
