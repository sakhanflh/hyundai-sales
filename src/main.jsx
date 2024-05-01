import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import HomePage from './pages/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Stargezer } from './data/Stargezer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/stargezer' element={<Stargezer/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
