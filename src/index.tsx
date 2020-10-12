import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';

import { Provider } from 'react-redux';
import {store} from './store/configure-store';
// import CounterContainer from './containers/Counter';
// import LoginContainer from './containers/LoginContainer';

// import SiderbarMenu from './components/demo/siderbar';

import 'antd/dist/antd.css'


ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

