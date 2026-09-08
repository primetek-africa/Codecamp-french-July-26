import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Layout from './composantsNew/Layout'
import { ThemeProvider } from './ThemeContex'
import ListUtilisateurs from './composantsNew/ListeUtilisateurs'
function App() {

   

  return (
    <>
      
   <ThemeProvider>
    
        <div className="page">
          <h1>demo api context</h1>
          <p className='sous-titre'>
            app-layout-sidebar-profil(3niveaux)
          </p>
         <Layout/>
        <ListUtilisateurs/>
        </div>
  </ThemeProvider>
    </>
  )
}
//APP.JSX(lAYOUT -> SIDEBAR ->PROFIL)
export default App
//use
//