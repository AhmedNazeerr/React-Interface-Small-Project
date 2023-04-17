import React, { useState } from 'react';
import data from './data';
function App() {
  const [count,setcount]=useState(0)
  const [text,settext]=useState([])

   const handleSubmit=(e)=>{
     e.preventDefault();
     var amount=parseInt(count);
      if(count<=0){
        amount=0
     }
      
   
     
     settext(data.slice(0,amount))
   }
  return (
  <>
    <section className="section-center">
      <h3>Tired of Boring Lorem Ipsum?</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
      <label htmlFor="amount">Paragraph: </label>
      <input type="number" name='amount' id='amount' value={count} onChange={(e)=>setcount(e.target.value)} max={8} />
      <button  type='submit' className='btn'>Fetch</button>
      </form>
      <article className="lorem-text">
       { text.map((val,index)=>{
        return(
          <p key={index}>{val}</p>
        )
       })

       }
      </article>
    </section>
  </>
    )
}

export default App;
