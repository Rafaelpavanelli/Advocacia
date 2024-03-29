import './Home.modules.css';
import bd from '../../controller/bd.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import Advocacia from './../../icons/advocacia.ico';
import Suporte from './../../icons/homemidea.ico';
import Profissoes from './../../icons/HomemEstrela.ico';
import Tv from './../../icons/Tvgrafico.ico';
import planta from './../../icons/Planta.ico';
import clip from  './../../icons/clip-removebg-preview.png'
import Ring from './../../icons/Separação.ico';
import { useState } from 'react';
import advogada1 from '../../images/advogada1.jpg'
import advogada2 from '../../images/advogada2.webp'
import advogada3 from '../../images/advogado3.jpg';
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { IoIosAddCircle } from "react-icons/io";
import { AiOutlineArrowRight,AiOutlineArrowLeft } from "react-icons/ai";
import { Navigate, NavLink } from 'react-router-dom';
//Acaba as importações

export default function Home(){
  const Adv=bd.Advogados
  function ver(){ //Função para abrir e fechar as noticias
    overflow!="80vh"?setOverflow("80vh"):setOverflow("auto")
    overflow!="80vh"?setMostrar("Ver mais"):setMostrar("Ver menos")
  }
  const img=[advogada1,advogada2,advogada3];
  const[mostrar,setMostrar]=useState("Ver mais")
  const[overflow,setOverflow]=useState("80vh")
  const[carrossel,setCarrossel]=useState(0)
  const[carrossel2,setCarrossel2]=useState(0)
return( //Começa a renderizar o HTML
  <div className="menu" id='home'>
  <div className="Home">
    <h1>DIREITO DO<br/><span>CONSUMIDOR</span></h1>
    <a href="#">SAIBA MAIS</a>
  </div>
  <div id="empresa">
    <div className='titulo' >
      <p>EMPRESA</p>
      <h2>NOSSO <br/>PROPÓSITO</h2>
    </div>
    <div className='frase'>
      <p>Resolver seus problemas ja existentes e evitar que novos problemas surjam, de forma responsavel,consciente
        e personalizada para as suas necessidades.</p>
        </div>
  </div>
  <div id="equipe">
  <div className="titulo">
      <p>Equipe</p>
      <h2>Nossos <br/> Advogados</h2>
    </div>
    <div className="cards" style={{"transform": `translateX(${carrossel2}px)`,"transition":"0.5s"}}>
      {bd.Advogados.map(dados=>{
        return(
          <>
          <NavLink to={`/advogados/${dados.id}`} >
            
             <div className="card" style={{"backgroundImage": `url(${dados.Perfil})`,backgroundPosition:"center center",backgroundRepeat:"no-repeat",backgroundColor:"transparent"}}>
              <div id='cardbody'>
              <div className="cards" >
             
                <h4>  <IoIosAddCircle style={{color:"yellow",position:"absolute",top:"-12px",left:"2vh",fontSize:"1.5em"}}/> {dados.Nome}</h4>
                <p>{dados.Area}</p>
                </div>
              
              </div>
              
             </div>
             </NavLink>
             </>
        )
      })}
    </div>
    <div className="buttons">
    <button onClick={()=>setCarrossel2(carrossel2>0?0:carrossel2+(carrossel2<-400?950:0))} style={carrossel2>-400?{"backgroundColor":"gray",cursor:"default"}:{"backgroundColor":""}}><AiOutlineArrowLeft /></button>
    <button onClick={()=>setCarrossel2(carrossel2-(carrossel2>-(bd.Advogados.length*150)?950:0))} style={carrossel2<-(bd.Advogados.length*150)?{"backgroundColor":"gray"}:{"backgroundColor":""}}><AiOutlineArrowRight/></button>
  </div>
  </div>
  <div id="area">
    <div className="titulo">
      <p>SERVIÇOS</p>
      <h2>ÁREAS <br/> DE ATUAÇÃO</h2>
    </div>
    <div className="cards" style={{"transform": `translateX(${carrossel}px)`,"transition":"0.5s"}}>
      <div className="card">
      <HiOutlineBuildingOffice2 id='icon' style={{"color":"rgb(255, 196, 0)"}}/>
      <h4>EMPRESARIAL</h4>
      <p>Assessoria societária,fusões,aquisições e gestão de riscos</p>
      </div>
      <div className="card">
      <img src={Ring} alt="" />
      <h4 style={{"fontSize": "0.8em"}}>SOLUÇÃO EXTRAJUDICIAL DE CONFLITOS
      </h4>
      <p>Mediação extrajudicial
      de conflitos
</p>
      </div>
      <div className="card">
      <img src={Advocacia} alt="" />
      <h4>CIVEL</h4>
      <p>Elaboração de contratos, elaboração de notificações,cobrança de títulos, além de ações civeis em geral.
</p>
      </div>
      <div className="card">
      <img src={planta} alt="" />
      <h4>AGRARIO E <br/> AGRONEGÓCIO</h4>
      <p>Assessoria societária,fusões,aquisições e gestão de riscos</p>
      </div>
      <div className="card">
      <HiOutlineBuildingOffice2 id='icon'/>
      <h4>AGRARIO E <br/> AGRONEGÓCIO</h4>
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
    <div className="buttons">
    <button onClick={()=>setCarrossel(carrossel+(carrossel<0?1000:0))} style={carrossel==0?{"backgroundColor":"gray"}:{"backgroundColor":""}}><AiOutlineArrowLeft /></button>
    <button onClick={()=>setCarrossel(carrossel-(carrossel>-1000?1000:0))} style={carrossel==-1000?{"backgroundColor":"gray"}:{"backgroundColor":""}}><AiOutlineArrowRight/></button>
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
    <div className="card">
    <img src={clip }alt=""/>
    <h5>SERVIÇO <br/>PERSONALIZADO <br/> E DIFERENCIADO </h5>
    <p id='frase'>adequamos nossa prestação de serviços às suas necessidades.
</p>
    </div>
    <div className="card">
    <img src={Suporte }alt="" style={{"width":"20vh","padding": "0vh 1vh"}}/>
    <h5>SERVIÇO <br/>PERSONALIZADO <br/> E DIFERENCIADO </h5>
    <p id='frase'>adequamos nossa prestação de serviços às suas necessidades.
</p>
    </div>
    <div className="card" >
    <img src={Tv}alt=""/>
    <h5>SERVIÇO <br/>PERSONALIZADO <br/> E DIFERENCIADO </h5>
    <p id='frase'>adequamos nossa prestação de serviços às suas necessidades.
</p>
    </div>
    <div className="card">
    <img src={Profissoes} alt="" />
    <h5>SERVIÇO <br/>PERSONALIZADO <br/> E DIFERENCIADO </h5>
    <p id='frase'>adequamos nossa prestação de serviços às suas necessidades.
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
    <div className="noticias" style={{"height": `${overflow}`,"transition":"height 0.5s ease-in-out"}}>
      
        {bd.Posts.map((post)=>{
          return(
            <NavLink to={`/noticias/${post.id}`} style={{textDecoration: "none",color:"white"}} key={post.id}>
            <div className="card">
            <img src={post.Background} alt=""/>
            <p id='data'>{post.Data}</p>
            <h3>{post.Titulo}</h3>
            <p>{post.Materia}</p>
            </div>
            </NavLink>
          )
        })}
    
      </div>
      <NavLink to={"/blog"} style={{textAlign:"center"}}><button>mostrar</button></NavLink>
   
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