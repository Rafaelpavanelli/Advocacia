import { useState } from 'react'
import Home from './pages/Home'
import Navbar from './Modules/Navbar'
import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <BrowserRouter >
    <Navbar />
    <Routes>
    <Route path='/' element={<Home />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
