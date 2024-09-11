import { useState } from 'react';

function Viagens() {
  const [loginData, setLoginData] = useState({
    email: '',
    senha: ''
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login enviado:', loginData);
    // Aqui você pode adicionar a lógica para autenticar o usuário
  };

  return (
    <div>
   

      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>E-mail:</label>
          <input
            type="email"
            name="email"
            value={loginData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            name="senha"
            value={loginData.senha}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Viagens;
