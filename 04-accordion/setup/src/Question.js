import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({info,title}) => {
  const [showinfo,setshowinfo]=useState(false)
   const Showinfofunc=(showinfo)=>{
    if(showinfo){
      setshowinfo(true)
    }
    else{
      setshowinfo(false)
    }
  }
  return (
<>
<article className="question">
    <header>
      <h4>{title}</h4>
      <button className="btn" onClick={()=>Showinfofunc(!showinfo)}>
        {
          showinfo? <AiOutlineMinus/> : <AiOutlinePlus/>
        }
      </button>
    </header>
    <p>
      {showinfo? <p>{info}</p>: ""}
    </p>
</article>
</>
  );
};

export default Question;
