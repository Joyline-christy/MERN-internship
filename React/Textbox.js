import React, { useState } from 'react';

const Textbox = () => {
    const [input,setinput]=useState({name:"",email:"",number:"",age:""})
    console.log(input);
    const handleChange=(e)=>{
         setinput({...input,[e.target.name]: e.target.value} )
    }
  return (
    <div>
      <input onChange={handleChange} value={input.name} name="name"/>
      <p>{input.name}</p>
      <input onChange={handleChange} value={input.email} name="email"/>
      <p>{input.email}</p> 
      <input onChange={handleChange} value={input.number} name="number"/>
      <p>{input.number}</p> 
      <input onChange={handleChange} value={input.age} name="age"/>
      <p>{input.age}</p> 
    </div>
 )
}
export default Textbox
