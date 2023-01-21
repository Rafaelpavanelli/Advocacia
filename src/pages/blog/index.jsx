import "./blog.modules.css"
import {IoCalendarSharp} from 'react-icons/io5'
import {BsFillArrowRightSquareFill} from 'react-icons/bs'
import db from '../../controller/bd.json'
import { NavLink } from "react-router-dom"
export default function Blog(){
  const posts=db.Posts
  return (
    <div className="blog">
    <header>
    <p>EQUIPE</p>
    <h1>NOSSOS<br/> ADVOGADOS</h1>
    <div><NavLink to={"/"}>HOME </NavLink>|<span>BLOG</span></div>
  </header>
  <div className="main">
   {
    posts.map((post)=>{
      return(
        <div className="materias" key={post.id}>
          <img src={post.Background} alt="" />
          <h2>{post.Titulo}</h2>
          <h3 style={{display:"flex",alignItems:"center",marginBottom:"1vh"}}><IoCalendarSharp style={{color:"yellow",marginRight:"1vh"}}/>  {post.Data}</h3>
          <p>{post.Materia}</p>
          <NavLink to={`/noticias/${post.id}`}>Leia Mais <BsFillArrowRightSquareFill style={{color:"rgb(255, 196, 0)",fontSize:"1.5rem"}}/></NavLink>
        </div>
      )
    })
   }
   
   </div>
  </div>

  )
}