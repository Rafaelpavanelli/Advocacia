import { useState } from 'react'
import Home from './pages/Home'
import Navbar from './Modules/Navbar'
import Footer from './Modules/footer'
import Advogados from './pages/Advogados'
import Noticias from './pages/noticias'
import AddAdvogado from './pages/AddAdvogado'
import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'

function App() {

  return (
    
    <BrowserRouter >
    <Navbar />
    <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/noticias/:id' element={<Noticias />}/>
    <Route path='/addadvogado' element={<AddAdvogado />}/>
    <Route path='/advogados/:id' element={<Advogados />}/>
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
