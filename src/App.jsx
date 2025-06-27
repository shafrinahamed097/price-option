import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DaisyNav from './Components/DaisyNav/DaisyNav'
import Navbar from './Components/NavBar/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <DaisyNav />
   <Navbar />
 
   </>
  )
}

export default App
