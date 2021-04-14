import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'views/Root';

import { worker } from 'mocks/browser';

import 'assets/styles/fonts.css';

worker.start();

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
