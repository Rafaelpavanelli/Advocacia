import './advogados.modules.css'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {HiMail} from 'react-icons/hi'
import advogada from '../../images/advogada2.webp'
export default function Advogados(){
  return(
    <div className="advogados">
      <header>
        <p>EQUIPE</p>
        <h1>NOSSOS<br/> ADVOGADOS</h1>
        <div><a href="/">HOME</a> |<span>NOME DO ADVOGADO</span></div>
      </header>
      <main>
        <img src={advogada} alt="" />
        <div className="description">
          <h2>Nome do Advogado</h2>
          <p>Area de atuação</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora reiciendis fugit eveniet soluta cumque alias modi a est, expedita
             saepe. Sint ratione pariatur sed at quia incidunt iste enim quam.<br/>
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora reiciendis fugit eveniet soluta cumque alias modi a est, expedita
             saepe. Sint ratione pariatur sed at quia incidunt iste enim quam.
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora reiciendis fugit eveniet soluta cumque alias modi a est, expedita
             saepe. Sint ratione pariatur sed at quia incidunt iste enim quam.<br/>
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora reiciendis fugit eveniet soluta cumque alias modi a est, expedita
             saepe. Sint ratione pariatur sed at quia incidunt iste enim quam.
             </p>
        </div>
        <div className="contato">
          <h2>Entrar em contato</h2>
          <p>Contate-me</p>
          <span><p><BsFillTelephoneFill style={{color:"rgb(255, 196, 0)" }}/> (00) 000000-0000</p></span>
          <span><p><HiMail style={{color:"rgb(255, 196, 0)" }}/> contato@contato.com</p></span>
          

        </div>
      </main>
    </div>
  )
}