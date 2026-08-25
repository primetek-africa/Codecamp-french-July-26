import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Compteur from './components/Compteur'
import Salutation from './components/Salutation'
import Formilaire from './components/Formulaire'



function App() {
  let name = "Tresor";

  return (
    <>

        <div>

          <Compteur/>
          <br />
          <Salutation/>
          <br />
          <Formilaire/>

        </div>

    </>
  )
}

export default App
