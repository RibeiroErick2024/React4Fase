import { useState } from 'react';

function Home() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: ''
  });

  return (
    <div>
      <h1>Cadastro</h1>
      
        <div>
          <label>Nome:</label>
          <input
            type="text"
            name="nome"
           
          />
        </div>
        <div>
          <label>E-mail:</label>
          <input
            type="email"
            name="email"
            
          />
          
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            name="senha"
           
          />
        </div>
        <button type="submit">Cadastrar</button>
     
    </div>
  );
}


export default Home;
