import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';

import { Provider } from 'react-redux';
import {store} from './store/configure-store';
import CounterContainer from './containers/Counter';
import LoginContainer from './containers/LoginContainer';

import 'primereact/resources/themes/nova-accent/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      <LoginContainer/>
    </Provider>    
  </React.StrictMode>,
  document.getElementById('root')
);

