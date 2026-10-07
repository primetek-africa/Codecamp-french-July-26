import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Layout from './composantsNew/Layout'
import { ThemeProvider } from './ThemeContex'
import ListUtilisateurs from './composantsNew/ListeUtilisateurs'
import styled from 'styled-components'


function App() {

  //  const Button = styled.button`
  //    background:blue;
  //    color:white;
  //    padding:10px 16px;
  //  `;
  const Button =styled.button`
     background:${(props)=> props.danger ? 'red':'blue'};
     color:white;
     padding:10px 16px;
     &:hover{
      background:darkblue;
     }

  `
const Div = styled.div`
padding:24px;
display:grid;
grind-template-columns:repeat(3, 1fr);


@media (max-width:768px){
padding:16px;
}

@media (max-width:425px){
grid-template-columns:1fr;
}
`

function multiply(a, b) {
  return a * b
}


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

        <Button>Enregistrer</Button>
        <Button danger>Suprimer</Button>
  </ThemeProvider>
    </>
  )
}
//APP.JSX(lAYOUT -> SIDEBAR ->PROFIL)
export default App
//use
//npm install -D sass