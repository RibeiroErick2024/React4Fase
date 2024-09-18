import Navbar from "../components/Navbar"
import './Contato.css'

function Contato() {
  return (
    <div>
   <Navbar />   
   (
    <div className="register-container">
      <h1>Cadastre-se</h1>
      <form className="register-form">
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Digite seu nome"
          required
        />

        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Digite seu e-mail"
          required
        />

        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Digite sua senha"
          required
        />

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );



    </div>
  )
}

export default Contato
