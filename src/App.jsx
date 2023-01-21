import { useState } from 'react'
import Home from './pages/Home'
import Navbar from './Modules/Navbar'
import Footer from './Modules/footer'
import Advogados from './pages/Advogados'
import Noticias from './pages/noticias'
import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'

function App() {

  return (
    
    <BrowserRouter >
    <Navbar />
    <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/noticias' element={<Noticias />}/>
    <Route path='/advogados' element={<Advogados />}/>
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
