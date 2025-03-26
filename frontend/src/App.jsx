import { useState } from 'react'
import './assets/css/App.css'
import Navbar from "./components/Navbar.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
    </>
  )
}

export default App
