import { useState } from 'react'
import './App.scss'
import '../src/components/styles/resets.scss'
import Header2 from './components/Header/Header2'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Contractorpage from './pages/Contractorpage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Header2 />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/contractor' element={<Contractorpage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
