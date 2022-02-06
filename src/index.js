import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const firebase = require('firebase/app');

const firebaseKey = process.env.FIREBASE_API_KEY;

const firebaseConfig = {
  apiKey: firebaseKey,
  authDomain: "web-kids-activity.firebaseapp.com",
  projectId: "web-kids-activity",
  storageBucket: "web-kids-activity.appspot.com",
  messagingSenderId: "402516340590",
  appId: "1:402516340590:web:8c0d95bf0a4b3f8aa25b7f"
}

firebase.initializeApp(firebaseConfig);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
