import React from 'react'
import './index.scss'
import ReactDOM from 'react-dom/client'
import WebFont from 'webfontloader'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

WebFont.load({
  google: {
    // Work+Sans:ital,wght@0,100;0,400;0,600;1,100;1,400
    families: ['Work Sans:200,300,400,600,100italic,400italic', 'Bebas Neue: 400', 'sans-serif'],
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
