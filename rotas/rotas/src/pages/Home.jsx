import Navbar from "../components/Navbar"
import './Home.css'
import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"




function Home() {

    const {usuarioLogado, usuarios, setUsuarios} = useContext(GlobalContext)

    function inventarUsuario(){
        let usuarioNovo = {
            id: Date.now(),
            nome: "Jhon bone jhones",
            email: "jhonbones@gmail.com"
        }
        setUsuarios([...usuarios,usuarioNovo])
    }


  return (
    <div>
      

<Navbar />

<div className="home">
      <header className="home-header">
        <h1>Olá {usuarioLogado}</h1>
        <div>
            {
                usuarios.map( ( usuario) => (

                    <div className="divDosNomes"> 
                        <p>Nome: {usuario.nome}</p>
                        <p>Email: {usuario.email}</p>
                        <p>{usuario.id}</p>
                    </div>

                ) ) 
            }
        </div>
        <button onClick={inventarUsuario}>Inventar Usuario</button>
        <h1>Bem-vindo ao Meu Website</h1>
        <p>Aqui você encontra as melhores soluções para o seu projeto!</p>
      </header>

      <main className="home-main">

      <section className="services">
          <h2>Nossos Serviços</h2>
          <ul>
            <li>Desenvolvimento Web</li>
            <li>Design Gráfico</li>
            <li>Consultoria Tecnológica</li>
          </ul>
        </section>



        <section className="introduction">
          <h2>Sobre Nós</h2>
          <p>Somos uma equipe dedicada a entregar experiências incríveis através da tecnologia.</p>
        </section>

       
      </main>

      <footer className="home-footer">
        <p>&copy; 2024 Minha Empresa. Todos os direitos reservados.</p>
      </footer>
    </div>
  );



    </div>
  )
}

export default Home
