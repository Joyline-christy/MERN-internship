import React, { useState } from 'react'

const Theme = () => {
    const [darktheme,setdarktheme]=useState(false)
    const style={color:darktheme? "white" : "black",background:darktheme ?"black" :"white",width:'100%',height:'100vh'}
    
  return (
   <div style={style} onClick={()=>setdarktheme(!darktheme)}>App
        
    </div>
  )
}

export default Theme
