import React from 'react';
import ReactDom from 'react-dom';
import Routers from './app/routers';
import store from './redux/store';
import { Provider } from 'react-redux';

ReactDom.render( <Provider store={store}> <Routers /> </Provider>,  document.querySelector('#app'));


