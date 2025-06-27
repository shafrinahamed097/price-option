import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DaisyNav from './Components/DaisyNav/DaisyNav'
import Navbar from './Components/NavBar/NavBar'
import PriceOptions from './Components/PriceOptions/PriceOptions'

function App() {
 

  return (
   <>
   <Navbar />
   {/* <DaisyNav /> */}
   <PriceOptions />
   
 
   </>
  )
}

export default App
