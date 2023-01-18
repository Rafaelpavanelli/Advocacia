import './Home.modules.css'
export default function Home(){
return(
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
  <div className='titulo'>
      <p>EQUIPE</p>
      <h2>NOSSOS <br/>ADVOGADOS</h2>
    </div>
    <div className='frase'>
      <p>Resolver seus problemas ja existentes e evitar que novos problemas surjam, de forma responsavel,consciente
        e personalizada para as suas necessidades.</p></div>
  </div>
  </div>
)
}