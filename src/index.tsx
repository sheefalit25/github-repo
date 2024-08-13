import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import global CSS styles
import App from './App'; // Import the main App component

// Render the App component into the root element in the HTML
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
