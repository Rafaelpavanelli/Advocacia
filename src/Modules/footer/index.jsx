import { BsTelephone } from "react-icons/Bs";
import { SiGooglemaps } from "react-icons/Si";
import { AiOutlineMail } from "react-icons/Ai";
import { AiOutlineInstagram,AiOutlineFacebook,AiOutlineYoutube  } from 'react-icons/ai';
import './footer.modules.css'
export default function Footer(){
  return(
    <div className="footer">
      <div className="contatos">
        <BsTelephone style={{"fontSize":"2rem"}}/>
        <p>{"(14) 3372-9034/ (14) 3372-9004"}</p>
      </div>
      <div className="contatos">
       <SiGooglemaps style={{"fontSize":"2rem"}} />
        <p>{"Rua Euclides da Cunha, 700.Centro"}<br/>{" Santa Cruz do Rio Pardo - SP "}</p>
      </div>
      <div className="contatos">
       <AiOutlineMail style={{"fontSize":"2rem"}} />
        <p>{"francisco@francisco.adv.br"}</p>
      </div>
      <div className="redes">
          <ul>
            <a href="#"><li><AiOutlineFacebook/></li></a>
            <a href="#"><li><AiOutlineInstagram /></li></a>
            <a href='#'><li><AiOutlineYoutube /></li></a>
          </ul>
        </div>
        <p style={{"width":"70vw"}} id="direitos">	&copy; <span style={{"color":"white"}}>Francisco Advocacia</span>-
          Todos os direitos reservados. Site by
          <span style={{"color":"white"}}> Centro Paulista</span>
        </p>
    </div>
  )
}