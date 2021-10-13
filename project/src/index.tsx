import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const cards: JSX.Element[] = new Array(5).fill({});

ReactDOM.render(
  <React.StrictMode>
    <App cards = {cards}/>
  </React.StrictMode>,
  document.getElementById('root'));
