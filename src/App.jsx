import { useState } from 'react'
import Home from './pages/Home'
import Navbar from './Modules/Navbar'
import Footer from './Modules/footer'
import Advogados from './pages/Advogados'
import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <BrowserRouter >
    <Navbar />
    <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/advogados' element={<Advogados />}/>
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
