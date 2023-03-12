import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//Grabbing the element named root from the DOM, so that we can render our program
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  //This is where the rendering will happen 
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
