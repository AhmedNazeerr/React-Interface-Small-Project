import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [people,setpeople]=useState(data)
  const [indexs,setindexs]=useState(0)
  useEffect(()=>{
    const lastIndex=people.length-1;
    if(indexs<0){
      setindexs(lastIndex)
    }
    if(indexs>lastIndex){
      setindexs(0)
    }
  },[indexs,people])
  useEffect(()=>{
    let slider=setInterval(()=>{
      setindexs(indexs+1)
    },3000);
    return ()=>clearInterval(slider)
  },[indexs])
  return ( 
    <>
      <section className="section">
        <div className="title">
          <h2>
            <span>/</span>Reviews
          </h2>
        </div>
        <section className='section-center' >
           {people.map((per,index)=>{
            let position='nextSlide'
            if(index===indexs){
                  position='activeSlide'
            }
            if(index===indexs-1 || 
            (indexs === 0 && index === people.length-1)
            ){
              position='lastSlide'
            }
             return(
              <>
                <article key={per.id} className={position}>
                   <img src={per.image} alt={per.name} className='person-img' />
                   <h4>{per.name}</h4>
                   <p className="title">
                    {per.title}
                   </p>
                   <p className="quote">
                    {per.quote}
                   </p>
                   <FaQuoteRight className='icon'></FaQuoteRight>
                </article>
                <button className='prev' onClick={()=>setindexs(indexs-1)}>
               <FiChevronLeft></FiChevronLeft>
                </button>
                <button className='next' onClick={()=>setindexs(indexs+1)}>
                 <FiChevronRight></FiChevronRight>
                </button>
              </>
             )
           }
          )}
        </section>
      </section>
    </>
  )
}

export default App;
