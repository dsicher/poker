import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './redux/reducers';
import Poker from './components/Poker';
import './styles.scss';

const store = createStore(reducer);

/* Render the root component, Poker, wrapper in a redux Provider. */
render(
  <Provider store={store}>
    <Poker />
  </Provider>,
  document.getElementById('root')
);
