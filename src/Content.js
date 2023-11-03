import React from 'react'
import { useState } from 'react';

const Content = () => {
    function handleNameChange(){
    const city=["tuty","chennai","madurai"];
    const n=Math.floor(Math.random()*3);
    return city[n];
    }
    const handleclick=(e)=>{
        console.log(e.target.innerText);
    }
    const handleclick2=(name)=>{
        console.log(`thanks for support ${name}`);
    }
  return (
    <main>
    <div>I am from {handleNameChange()}</div>
    <button onClick={(e)=>handleclick(e)}>subscribe</button>
    <button onClick={()=>handleclick2('suresh')}>subscribe2</button>
    </main>
  )
}

export default Content