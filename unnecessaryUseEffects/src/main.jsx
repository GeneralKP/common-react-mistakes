import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AppWithoutUseEffect from './AppWithoutUseEffect.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <AppWithoutUseEffect />
  </React.StrictMode>,
)
