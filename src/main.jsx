import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { CartProvider } from './Stores/useContext/CartContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <React.StrictMode>
    <CartProvider>
    <App />
    </CartProvider>
  </React.StrictMode>
  </BrowserRouter>
 
)
