import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import { CartProvider } from 'react-use-cart';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  {/* <React.StrictMode> */}
    {/* <CartProvider> */}
    <App />
    {/* </CartProvider> */}
  {/* </React.StrictMode> */}

  </BrowserRouter>
);


reportWebVitals();
