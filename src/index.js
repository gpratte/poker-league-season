import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import seasonStore from './seasonStore'
import App from './components/App';

ReactDOM.render(
  <Provider store={seasonStore}>
    <App />
  </Provider>,
  document.getElementById('root'));
