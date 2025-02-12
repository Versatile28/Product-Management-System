import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Landing() {
  let navigate=useNavigate()

  return (
    <div style={{height:"70vh", width:"100vw", display:"flex",justifyContent:"center", alignItems:"center"}}>
      <div style={{display:"flex", justifyContent:"space-around"}}>
        <div style={{padding:"50px", backgroundColor:"wheat",margin:"5px", cursor:"pointer"}} onClick={()=>{navigate("/add")}}>Add Products</div>
        <div style={{padding:"50px", backgroundColor:"wheat",margin:"5px", cursor:"pointer"}} onClick={()=>{navigate("/view")}}>View Products</div>
      </div>
    </div>
  )
}
