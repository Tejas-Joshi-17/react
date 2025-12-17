import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Navbar from './components/Navbar.jsx'
import CardService from './components/CardService.jsx'
import './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <CardService/>
  </StrictMode>,
)
