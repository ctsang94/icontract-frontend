import { useState } from 'react'
import './App.scss'
import '../src/components/styles/resets.scss'
import Header2 from './components/Header/Header2'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Contractorpage from './pages/Contractorpage'
import Landingpage from './pages/Landingpage'

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderWrapper />
        <Routes>
          <Route path='/' element={<Landingpage />} />
          <Route path='/homeowner' element={<Homepage />} />
          <Route path='/contractor' element={<Contractorpage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

function HeaderWrapper() {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';
  return !isLandingPage && <Header2 />;
}

export default App
