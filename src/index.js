import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// First open index.js to know some insights
// ENTRY POINT OF DOM

ReactDOM.render(
  // JSX -Javascript Syntax Extension
  <React.StrictMode>  
    <App />
  </React.StrictMode>,
  document.getElementById('root') // gets the element id = root from index html
          // and insert all things from Line 10 to 12 in this selector 
          // Since the selector says go to App.js now DOM goes to App.js (first component)
);
reportWebVitals();
