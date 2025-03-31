import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Usuario from './usuarios.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Usuario />
  </StrictMode>,
)
