import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Ulvi from './ulvi.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Ulvi/>


  </StrictMode>,
)
