import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './component/Navbar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Form from './component/Form.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Form/>
  </StrictMode>,
)
