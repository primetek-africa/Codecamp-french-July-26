import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Timing from './components/TroisFormes'
import FicheUtilisateur from './components/FicheUtilisateur'


function App() {
  let name = "Tresor";

  return (
    <>

        <div>
         
         <Timing/>
         <FicheUtilisateur/>
        </div>

    </>
  )
}

export default App
