import './noticias.modules.css'
import { useParams } from 'react-router-dom'
import {BsCalendar3} from 'react-icons/bs'
import Advogado from './../../images/advogado3.jpg'
import { NavLink } from 'react-router-dom'
import bd from '../../controller/bd.json'
export default function Noticias(){
  const{id}=useParams()
 const Post= bd.Posts.filter(function(obj) { return obj.id == id; });
const dados=Post[0]
  return(
    <div className="noticias">
    <header>
        <p>BLOG</p>
        <h1>ARTIGOS<br/> E NOTICIAS</h1>
        <div><NavLink to={"/"}>HOME </NavLink>|<span>NOME DO ARTIGO</span></div>
      </header>
      <div className="description">
        <div className="noticia">
      <img src={dados.Background} alt="" />
      <h2>{dados.Titulo}</h2>
      <h5><BsCalendar3 style={{color:" rgb(255, 196, 0)"}}/>{dados.Data}</h5>
      <p>{dados.Materia}</p>
      </div>
    </div>
    </div>
  )
}