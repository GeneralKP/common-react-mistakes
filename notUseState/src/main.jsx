import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AppWithoutUseState from './AppWithoutUseState.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <AppWithoutUseState />
  </React.StrictMode>,
)
