import { useState } from 'react'
import './App.scss'
import Header from './components/Header/Header'
import '../src/components/styles/resets.scss'
import Header2 from './components/Header/Header2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header2 />
    </>
  )
}

export default App
