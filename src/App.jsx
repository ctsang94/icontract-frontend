import { useState } from 'react'
import './App.scss'
import Header from './components/Header/Header'
import '../src/components/styles/resets.scss'
import Header2 from './components/Header/Header2'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Header2 />
        <Routes>
          <Route path='/' element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
