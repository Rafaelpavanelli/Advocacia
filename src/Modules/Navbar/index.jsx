import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineInstagram,AiOutlineFacebook,AiOutlineYoutube  } from 'react-icons/ai';
import Logo from './../../images/Logo.png'
import './Navbar.modules.css'
export default function Navbar(){
  const[navbar,setNavbar] =useState('')
  const openNavbar=()=>{
    navbar != ''? setNavbar(''):setNavbar('active')
  }
  return(
    <div className="navbar">
      <NavLink to={"/"} style={{textDecoration:"none"}}>
      <img src={Logo} />
      </NavLink>
      <div className={"mobile-menu"} onClick={()=>{openNavbar()}}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <div className={`buttons ${navbar}`}>
        <div className="redes">
          <ul>
            <a href="#"><li><AiOutlineFacebook/></li></a>
            <a href="#"><li><AiOutlineInstagram /></li></a>
            <a href='#'><li><AiOutlineYoutube /></li></a>
          </ul>
        </div>
        <div className="links">
          <ul>
            <li><NavLink to={"/"}>HOME</NavLink></li>
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