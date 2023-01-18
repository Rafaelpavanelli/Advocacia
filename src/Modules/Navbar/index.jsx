import { AiOutlineInstagram,AiOutlineFacebook,AiOutlineYoutube  } from 'react-icons/ai';
import Logo from './../../images/Logo.png'
import './Navbar.modules.css'
export default function Navbar(){
  return(
    <div className="navbar">
      <img src={Logo} />
      <div className="buttons">
        <div className="redes">
          <ul>
            <a href="#"><li><AiOutlineFacebook/></li></a>
            <a href="#"><li><AiOutlineInstagram /></li></a>
            <a href='#'><li><AiOutlineYoutube /></li></a>
          </ul>
        </div>
        <div className="links">
          <ul>
            <li><a href="#home">HOME</a></li>
            <li><a href="#empresa">EMPRESA</a></li>
            <li><a href="#equipe">EQUIPE</a></li>
            <li><a href="#area">ÁREAS DE ATUAÇÃO</a></li>
            <li><a href="#noticias">NOTÍCIAS E ARTIGOS</a></li>
            <li><a href="#contato">CONTATO</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}