import React from 'react'
import ReactDOM from 'react-dom/client'
import { gsap } from 'gsap'
import App from './App'
import './index.css'

// GSAP core should only be registered once
gsap.config({
  autoSleep: 60,
  nullTargetWarn: false,
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)