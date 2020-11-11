import React from 'react';
import ReactDom from 'react-dom';
import App from './routes/App'
import store from './redux/store';
import { Provider } from 'react-redux';
import '../src/assets/styles/index.scss'

ReactDom.render( <Provider store={store}> <App /> </Provider>,  document.querySelector('#app'));
