import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import HomePage from './pages/home'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { Stargezer } from './data/Stargezer'
import { StargazerX } from './data/StargazerX'
import { Creta } from './data/Creta'
import { SantaFe } from './data/SantaFe'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/stargezer' element={<Stargezer/>} />
        <Route path='/stargazerx' element={<StargazerX/>} />
        <Route path='/creta' element={<Creta/>} />
        <Route path='/santafe' element={<SantaFe/>} />

      </Routes>
    </HashRouter>
  </React.StrictMode>,
)
