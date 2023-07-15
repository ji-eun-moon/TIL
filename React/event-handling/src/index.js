import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import ConfirmButton01 from './chapter_08/ConfirmButton01';
import ConfirmButton02 from './chapter_08/ConfirmButton02';
import ConfirmButton03 from './chapter_08/ConfirmButton03';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ConfirmButton01 />
    <ConfirmButton02 />
    <ConfirmButton03 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
