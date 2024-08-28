import React from 'react';
import './Home.css'


function Home() {
  return (
    
    <div className='container'>

        <div className='header'>

            <div>
                <img src='src\imgs\logo.png' className='img_logo' alt="img_logo" />
            </div>

            <div>
              <img src='src\imgs\logoCompleta.png' className='logoCentral' />
            </div>
            <div>
                <img src='src\imgs\placa.png' className='img_placa' />
              </div>
            {/* <div className='placa'>
             <img src='src\imgs\placa.png' className='img_placa' />

            </div> */}

          

        </div>

        









        <div className='body'>


          <div className='ladoEsquerdo'>
                <section id="home" class="welcome">
                  <h1>Bem-vindo à Nossa Nova Farmácia!</h1>
                  <p>Estamos animados em anunciar que mudamos para um novo local com uma nova marca!</p>

                </section>


              

             <section id="inauguracao" class="inauguracao">
                <h1>Inauguração</h1>
                <p>Data: 15 de Agosto de 2024</p>
                <p>Horário: 10:00 - 16:00</p>
                <p>Endereço: Rua das Flores, 123, Centro</p>
                
            </section>


          </div>

          <div className='meio'>
            <div className='fotoCentral'>
                <img src='src\imgs\farmarcia-camiseta.png' className='imgCentral' />
              </div>
              
              <div className='fotoCentral'>
                <img src='src\imgs\camisetas.png' className='imgCentral' />
              </div>
          </div>

                <div className='ladoDireito'>
            <a href="https://wa.me/5511999999999" target="_blank" class="whatsapp-button">
              Fale Conosco no WhatsApp
            </a>
</div>


       

        

        

   
        



        </div>





        
    <footer className="footer">
      <div className="footer-section">
        <h4>Informações de Contato</h4>
        <p>Endereço: Rua Exemplo, 123, Cidade, Estado</p>
        <p>Telefone: (11) 1234-5678</p>
        <p>Email: contato@farmacia.com</p>
        <p>Horário de Funcionamento: Seg-Sex, 8h-18h</p>
      </div>


      <div className="footer-section-two">
        <p>© 2024 Farmácia. Todos os direitos reservados.</p>
      </div>
    </footer>
      
      
    </div>
    
  );
}

export default Home;
