import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// example
import NameForm from './example/NameForm';
import RequestForm from './example/RequestForm';
import FruitSelect from './example/FruitSelect';
import Reservation from './example/Reservation';

// practice
import SignUp from './chapter_11/SignUp';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <NameForm />
    <RequestForm />
    <FruitSelect />
    <Reservation />

    <SignUp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
