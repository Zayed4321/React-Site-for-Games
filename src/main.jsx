import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { GetGames } from './context/allData.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GetGames>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GetGames>
  </React.StrictMode>,
)

