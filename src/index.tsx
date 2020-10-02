import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';

import { Provider } from 'react-redux';
import {store} from './redux-app/configure-store';
import CounterContainer from './containers/Counter';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      <CounterContainer/>
    </Provider>    
  </React.StrictMode>,
  document.getElementById('root')
);

