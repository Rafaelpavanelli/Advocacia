import './advogados.modules.css'
import {BsFillTelephoneFill} from 'react-icons/bs'
import bd from '../../controller/bd.json'
import {HiMail} from 'react-icons/hi'
import advogada from '../../images/advogada2.webp'
import { NavLink, useLocation,useParams } from 'react-router-dom'
export default function Advogados(props){
 const{id}=useParams()
 const Perfil= bd.Advogados.filter(function(obj) { return obj.id == id; });
const dados=Perfil[0]
  return(
    <div className="advogados">
      <header>
        <p>EQUIPE</p>
        <h1>NOSSOS<br/> ADVOGADOS</h1>
        <div><NavLink to={"/"}>HOME </NavLink>|<span>NOME DO ADVOGADO</span></div>
      </header>
      <main>
        <img src={dados.Perfil} alt="" />
        <div className="description">
          <h2>{dados.Nome}</h2>
          <p>{dados.Area}</p>
          <p>{dados.Descricao}</p>
        </div>
        <div className="contato">
          <h2>Entrar em contato</h2>
          <p>Contate-me</p>
          <span><p><BsFillTelephoneFill style={{color:"rgb(255, 196, 0)" }}/>{dados.Contato.Telefone}</p></span>
          <span><p><HiMail style={{color:"rgb(255, 196, 0)" }}/> {dados.Contato.Email}</p></span>
          

        </div>
      </main>
    </div>
  )
}