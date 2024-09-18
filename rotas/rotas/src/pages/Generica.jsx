import Navbar from "../components/Navbar"
import './Generica.css'

function Generica() {
  return (
    <div>
      
      <Navbar />



    <div className="login-container">
      <h1>Login</h1>
      <form className="login-form">
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

        <button type="submit">Entrar</button>
      </form>
    </div>
  );








    </div>
  )
}

export default Generica
