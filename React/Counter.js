import React from 'react';
import { useState } from 'react';
const Counter = () => {
    let [count,setcount]=useState(0);

  return (
    <div>
        <h1>states</h1>
        <p>{count}</p>
        <button onClick={()=>setcount((prev)=>prev+1)}>click</button>
    </div>

  )
}

export default Counter
