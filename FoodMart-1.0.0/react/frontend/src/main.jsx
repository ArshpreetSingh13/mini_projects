import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import './css/style.css'
import './css/Csss/normalize.css'
import './css/Csss/vendor.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
