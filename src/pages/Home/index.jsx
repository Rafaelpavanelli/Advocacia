import './Home.modules.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import advogada1 from '../../images/advogada1.jpg'
import advogada2 from '../../images/advogada2.webp'
import advogada3 from '../../images/advogado3.jpg'
import clipbord from '../../icons/clip.ico'
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
//Acaba as importações
export default function Home(){
  function ver(){ //Função para abrir e fechar as noticias
    overflow!="80vh"?setOverflow("80vh"):setOverflow("auto")
    overflow!="80vh"?setMostrar("Ver mais"):setMostrar("Ver menos")
  }
  const[mostrar,setMostrar]=useState("Ver mais")
  const[overflow,setOverflow]=useState("80vh")
return( //Começa a renderizar o HTML
  <div className="menu" id='home'>
  <div className="Home">
    <h1>DIREITO DO<br/><span>CONSUMIDOR</span></h1>
    <a href="#">SAIBA MAIS</a>
  </div>
  <div id="empresa">
    <div className='titulo'>
      <p>EMPRESA</p>
      <h2>NOSSO <br/>PROPÓSITO</h2>
    </div>
    <div className='frase'>
      <p>Resolver seus problemas ja existentes e evitar que novos problemas surjam, de forma responsavel,consciente
        e personalizada para as suas necessidades.</p></div>
  </div>
  <div id="equipe">
  <div className='sobre'>
  <div className='titulo'>
      <p>EQUIPE</p>
      <h2>NOSSOS <br/>ADVOGADOS</h2>
    </div>
    <div className='frase'>
      <p>Resolver seus problemas ja existentes e evitar que novos problemas surjam, de forma responsavel,consciente
        e personalizada para as suas necessidades.</p></div>
        </div>
        <div className="cards">
    <div className="card">
      <img src={advogada1} alt="" />
      <div className="boxtext">
        <h3>Julia</h3>
      <p>Advogada Literaria</p></div>
    </div>
  </div>
  </div>
  <div id="area">
    <div className="titulo">
      <p>SERVIÇOS</p>
      <h2>ÁREAS <br/> DE ATUAÇÃO</h2>
    </div>
    <div className="cards">
      <div className="card">
      <HiOutlineBuildingOffice2 id='icon'/>
      <h4>EMPRESARIAL</h4>
      <p>Assessoria societária,fusões,aquisições e gestão de riscos</p>
      </div>
      <div className="card">
      <HiOutlineBuildingOffice2 id='icon'/>
      <h4 style={{"fontSize": "0.8em"}}>SOLUÇÃO EXTRAJUDICIAL DE CONFLITOS
</h4>
      <p>Assessoria societária,fusões,aquisições e gestão de riscos</p>
      </div>
      <div className="card">
      <HiOutlineBuildingOffice2 id='icon'/>
      <h4>EMPRESARIAL</h4>
      <p>Assessoria societária,fusões,aquisições e gestão de riscos</p>
      </div>
      <div className="card">
      <HiOutlineBuildingOffice2 id='icon'/>
      <h4>EMPRESARIAL</h4>
      <p>Assessoria societária,fusões,aquisições e gestão de riscos</p>
      </div>
    </div>
  </div>
  <div className="diferenciais">
    <div id="head">
  <div className='titulo'>
      <p>NOSSOS</p>
      <h2>DIFERENCIAIS</h2>
    </div>
    <div className='frase'>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias quis voluptatum, dicta dignissimos, repellat vitae eius error numquam recusandae neque architecto pariatur laborum odit tenetur ut voluptates ad quod at!</p>
    </div>
    </div>
    <div className="cards">
    <div className="card" style={{}}>
    <h1>Icon</h1>
    <h5>SERVIÇO <br/>PERSONALIZADO <br/> E DIFERENCIADO </h5>
    <p>adequamos nossa prestação de serviços às suas necessidades.
</p>
    </div>
    <div className="card">
    <h1>Icon</h1>
    <h5>SERVIÇO <br/>PERSONALIZADO <br/> E DIFERENCIADO </h5>
    <p>adequamos nossa prestação de serviços às suas necessidades.
</p>
    </div>
    <div className="card">
    <h1>Icon</h1>
    <h5>SERVIÇO <br/>PERSONALIZADO <br/> E DIFERENCIADO </h5>
    <p>adequamos nossa prestação de serviços às suas necessidades.
</p>
    </div>
    <div className="card">
    <h1>Icon</h1>
    <h5>SERVIÇO <br/>PERSONALIZADO <br/> E DIFERENCIADO </h5>
    <p>adequamos nossa prestação de serviços às suas necessidades.
</p>
    </div>
  </div>
  </div>
  <div id="blog">
  <div id="head">
  <div className='titulo'>
      <p>BLOG</p>
      <h2>NOTÍCIAS<br/> E ARTIGOS</h2>
    </div>
    </div>
    <div className="noticias" style={{"height": `${overflow}`}}>
    <div className="card">
      <img src={advogada1} alt=""/>
      <p id='data'>00/00/00</p>
      <h3>A SEPARAÇÃO DA SEPARAÇÃO</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ab culpa saepe suscipit obcaecati fugit magni eum soluta quo voluptatibus?
         Error velit ipsum tempore aut nihil optio perspiciatis accusantium blanditiis!
         </p>
      </div>
      <div className="card">
      <img src={advogada1} alt=""/>
      <p id='data'>00/00/00</p>
      <h3>A SEPARAÇÃO DA SEPARAÇÃO</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ab culpa saepe suscipit obcaecati fugit magni eum soluta quo voluptatibus?
         Error velit ipsum tempore aut nihil optio perspiciatis accusantium blanditiis!
         </p>
      </div>
      <div className="card">
      <img src={advogada1} alt=""/>
      <p id='data'>00/00/00</p>
      <h3>A SEPARAÇÃO DA SEPARAÇÃO</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ab culpa saepe suscipit obcaecati fugit magni eum soluta quo voluptatibus?
         Error velit ipsum tempore aut nihil optio perspiciatis accusantium blanditiis!
         </p>
      </div>
      <div className="card">
      <img src={advogada1} alt=""/>
      <p id='data'>00/00/00</p>
      <h3>A SEPARAÇÃO DA SEPARAÇÃO</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ab culpa saepe suscipit obcaecati fugit magni eum soluta quo voluptatibus?
         Error velit ipsum tempore aut nihil optio perspiciatis accusantium blanditiis!
         </p>
      </div>
    </div>
    <button onClick={()=>{ver()}}>{mostrar}</button>
  </div>
  <div className="contato" id='contato'>
    <p>CONTATO</p>
    <h2>ENTRE EM <br /> CONTATO CONOSCO</h2>
   <div className='email'>
    <input type="text" placeholder='Nome*' />
    <input type="email" placeholder='Email*' />
    <input type="text" placeholder='Assunto*' />
    <input type="text" name="Mensagem" id="mensagem" placeholder='Mensagem*' />
    <button>Enviar</button>
   </div>
  </div>
  <div className="">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.4197965346943!2d-49.62669798523304!3d-22.89788198501635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c06a3156077a3d%3A0x34662f9af2a5518e!2sR.%20Euclides%20da%20Cunha%2C%20700%20-%20Centro%2C%20Santa%20Cruz%20do%20Rio%20Pardo%20-%20SP%2C%2018900-000!5e0!3m2!1spt-BR!2sbr!4v1674093816418!5m2!1spt-BR!2sbr" width="100%" height="450" style={{"border":"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
  </div>
)
}