import './noticias.modules.css'
import {BsCalendar3} from 'react-icons/bs'
import Advogado from './../../images/advogado3.jpg'
import { NavLink } from 'react-router-dom'
export default function Noticias(){
  return(
    <div className="noticias">
    <header>
        <p>BLOG</p>
        <h1>ARTIGOS<br/> E NOTICIAS</h1>
        <div><NavLink to={"/"}>HOME </NavLink>|<span>NOME DO ARTIGO</span></div>
      </header>
      <div className="description">
        <div className="noticia">
      <img src="https://blog.ulbra.br/wp-content/uploads/2020/12/Advocacia-criminal_-o-que-%C3%A9-e-como-trabalhar-nessa-%C3%A1rea_.jpg" alt="" />
      <h2>NOME DO ARTIGO</h2>
      <h5><BsCalendar3 style={{color:" rgb(255, 196, 0)"}}/> 00 NOV 0000</h5>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet laudantium vero, quam velit consectetur veniam ea delectus consequuntur, officiis magni, sit natus expedita placeat asperiores perferendis ex ratione necessitatibus magnam?
      Aspernatur voluptatem rerum, impedit ipsum assumenda provident quibusdam officiis eveniet molestiae hic obcaecati. Atque porro ipsam at est saepe, voluptatem beatae quae sequi, illum consectetur iure earum officiis libero. Beatae?
      Eos numquam suscipit voluptate fuga dolor dicta maxime eius velit reprehenderit cumque. Incidunt sapiente mollitia perferendis cupiditate hic atque qui esse libero aliquam. Libero dolore perferendis sapiente? Nulla, in porro?
      Odit obcaecati hic, vitae dolorem eum consequatur nobis praesentium laboriosam recusandae ratione. Incidunt, nobis ex ab officiis consequatur iure id repellendus sapiente numquam aspernatur excepturi voluptate rerum asperiores necessitatibus commodi!
      Minima, maiores odit esse alias laboriosam tempore accusantium animi labore perspiciatis quibusdam expedita officiis aliquid ipsam veritatis dicta aut molestias a consequatur mollitia? Consequatur, fugit architecto dolores eveniet ipsa quasi?
      Ad laborum molestiae omnis voluptates, sed quasi repellat doloremque. Doloremque, quam! Incidunt hic fuga nemo, ut error distinctio ad. Architecto ea dicta libero harum aut nam est reiciendis eum nemo?
      Veritatis, veniam dolorem obcaecati eveniet eos rem consectetur, illum aspernatur error iure excepturi, debitis deleniti voluptate repudiandae! Cum, dolores? Doloremque id vel vitae, obcaecati earum excepturi rerum fugit doloribus accusamus!
      Voluptate voluptatum ab distinctio, provident unde consectetur exercitationem consequuntur reprehenderit eius veritatis necessitatibus delectus atque nulla ipsum autem temporibus minus nobis assumenda iste facilis totam deleniti corporis iure sint? Officiis.
      Neque dolorum nihil praesentium quo delectus necessitatibus soluta? Dignissimos magnam voluptate nemo architecto exercitationem commodi, aperiam esse. Perspiciatis, deserunt accusamus incidunt consequatur reiciendis perferendis sunt esse odio, similique voluptatem assumenda.
      Earum ad aliquam totam esse nesciunt quod molestiae mollitia debitis error nihil odio, nostrum sequi ea vero voluptate necessitatibus saepe quas ex quo iste minima consequuntur sit velit fuga. Neque.</p>
      </div>
    </div>
    </div>
  )
}