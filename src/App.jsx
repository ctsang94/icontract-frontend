import { useState } from 'react'
import './App.scss'
import Header from './components/Header/Header'
import '../src/components/styles/resets.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
    </>
  )
}

export default App
