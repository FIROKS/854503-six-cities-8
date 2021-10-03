import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const AppSettings = {
  CARDS_AMOUNT: 8,
};

ReactDOM.render(
  <React.StrictMode>
    <App cardsAmount = {AppSettings.CARDS_AMOUNT}/>
  </React.StrictMode>,
  document.getElementById('root'));
