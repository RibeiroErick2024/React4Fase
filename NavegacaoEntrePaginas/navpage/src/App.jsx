import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Viagens from './pages/Viagens'
import Portfolio from './pages/Portfolio'



function App() {
 
const [pagina, setPagina] = useState(<Home />)



  return (
    <>
      

      <nav>
        <button onClick={ () => {setPagina(<Home />)}}>Cadastro</button>
        <button onClick={ () => {setPagina(<Viagens />)}}>Login</button>
        <button onClick={ () => {setPagina(<Portfolio />)}}>Home</button>
      </nav>
      {pagina}
      
    </>
  )
}

export default App
