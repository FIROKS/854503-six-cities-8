import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { offers } from './mocks/offers';

// const cards: JSX.Element[] = new Array(5).fill({});

ReactDOM.render(
  <React.StrictMode>
    <App
      offers = {offers}
    />
  </React.StrictMode>,
  document.getElementById('root'));
