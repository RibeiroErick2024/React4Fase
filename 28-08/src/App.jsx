import './App.css'
import Titulo from './components/Titulo'
import Produto from './components/Produto'
import { useState } from 'react'

function App() {
  const [inputNome, setInputNome] = useState('')
  const [inputDescricao, setInputDescricao] = useState('')
  const [inputPreco, setInputPreco] = useState('')
  const [produtos, setProdutos] = useState([
    {id: Date.now() + 1, nome: "Lancha Esportiva", descricao: "Lancha rápida e ágil, ideal para esportes aquáticos.", preco: 150000.00},
    {id: Date.now() + 2, nome: "Iate de Luxo", descricao: "Iate de luxo com acomodações completas para longas viagens.", preco: 2500000.00},
    {id: Date.now() + 3, nome: "Veleiro Clássico", descricao: "Veleiro com design clássico e excelente navegabilidade.", preco: 350000.00},
    {id: Date.now() + 4, nome: "Barco de Pesca", descricao: "Barco de pesca com compartimentos para armazenar peixes.", preco: 75000.00},
    {id: Date.now() + 5, nome: "Catamarã", descricao: "Catamarã estável e espaçoso, ideal para festas e eventos.", preco: 500000.00},
    {id: Date.now() + 6, nome: "Canoa", descricao: "Canoa leve e resistente, perfeita para rios e lagos.", preco: 1200.00},
    {id: Date.now() + 7, nome: "Bote Inflável", descricao: "Bote inflável prático e fácil de transportar.", preco: 3000.00},
    {id: Date.now() + 8, nome: "Jet Ski", descricao: "Jet ski veloz e manobrável, ideal para aventuras no mar.", preco: 45000.00},
    {id: Date.now() + 9, nome: "Barco a Remo", descricao: "Barco a remo tradicional para passeios tranquilos.", preco: 2500.00},
    {id: Date.now() + 10, nome: "Submarino Privado", descricao: "Submarino para exploração subaquática com alta tecnologia.", preco: 15000000.00}
  ])

  function mudouNome(event){
    setInputNome(event.target.value)
  }

  function mudouDescricao(event){
    setInputDescricao(event.target.value)
  }

  function mudouPreco(event){
    setInputPreco(event.target.value)
  }

  function cadastrarProduto(){
   
    let produto = {
      id: Date.now(),
      nome: inputNome,
      descricao: inputDescricao,
      preco: parseFloat(inputPreco), 
    }
    setProdutos([produto, ...produtos])
    
    setInputNome('')
    setInputDescricao('')
    setInputPreco('')
  }

  return(
    <> 
      <Titulo texto={"Barra da Lagoa"}/>
      <div className="formCadastro">
        <h2>Cadastro de Embarcações</h2>
        <div className='input-container'>
          <label>Nome</label>
          <input type="text" placeholder='Nome da embarcação' value={inputNome} onChange={mudouNome}/>
        </div>
        <div className='input-container'> 
          <label>Descrição</label>
          <input type="text" placeholder='Descrição da embarcação' value={inputDescricao} onChange={mudouDescricao}/>
        </div>
        <div className='input-container'>
          <label>Preço</label>
          <input type="text" placeholder='Preço da embarcação' value={inputPreco} onChange={mudouPreco}/>
        </div>
        <button onClick={cadastrarProduto}>Cadastrar</button>
      </div>
      <div className='cards'>
        {produtos.map(p => (
          <Produto produto={p} key={p.id}/>
        ))}
      </div>
    </>
  )
}

export default App
