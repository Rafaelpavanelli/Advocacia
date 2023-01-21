import { useState } from "react"
export default function addAdvogado(){
  const[nome,SetNome]=useState('')
  const[descricao,SetDescricao]=useState('')
  const[image,SetImage]=useState('')
  const[area,setArea]=useState('')

  return(
    <div className="criarAdvogado" >
      <form style={{"display":"flex","flexDirection":"column","justifyContent":"center","alignItems":"center"}}>
        <label>
          <p>Nome Completo</p>
          <input type="text" onChange={e => setNome(e.target.value)}/>
        </label>
        <label>
          <p>Area</p>
          <input type="text" onChange={e => setArea(e.target.value)}/>
        </label>
        <label>
          <p>Descrição</p>
          <input type="text" onChange={e => setDescricao(e.target.value)}/>
        </label>
        <label>
          <p>Foto de perfil</p>
          <input type="file" onChange={e => setImage(e.target.value)}/>
        </label>
        <button onClick={()=>{upload({image,nome,area,descricao})}}></button>
      </form>
    </div>
  )
}