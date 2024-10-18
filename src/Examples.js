import React ,{ useState } from 'react'
export default function Examples() {
    const array=[2,3,4,5,6]
   const  [islogin, setislogin]=useState(true)
  return (
    
    <div>
        <ul>
      {
        array.map(
            (num,index)=>
       <li key={index}>{num}
       </li>
     ) }
      </ul>
      <h1>
        {islogin ? "hi welcome" : "pleaselogin"}
      </h1>
        <button onClick={()=>setislogin(!islogin)}>
            {islogin ? "logout":"login"}

        </button>
    </div>

  )
}

