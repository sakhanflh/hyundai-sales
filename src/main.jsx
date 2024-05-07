import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import HomePage from './pages/home'
import { HashRouter, Route, Routes } from 'react-router-dom'
import ProdukPage from './pages/produk'
import DetailCar from './pages/detailCar'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/produk' element={<ProdukPage />} />
        <Route path='/car/:id' element={<DetailCar />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)
