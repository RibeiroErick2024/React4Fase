import  './Produto.css'

function Produto(props) {
    let p = props.produto
    
  return (
    <div className='produto-container'>
      <h2>{p.nome}</h2>

      <p>{p.descricao}</p>

      



      <p>{p.preco.toFixed(2)}R$</p>
      <p>ID PRODUTO: {p.id}</p>



    </div>

    
  )
}

export default Produto
