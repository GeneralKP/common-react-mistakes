import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AppWithUseStateFunction from './AppWithUseStateFunction.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <br/>
    <br/>
    <br/>
    <br/>
    <AppWithUseStateFunction />
  </React.StrictMode>,
)
