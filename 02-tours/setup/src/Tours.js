import React from 'react';
import Tour from './Tour';
const Tours = (props) => {
  return (
    <>
      <section className='title'>
         <h2>Ours Tours</h2>
         <div className='underline'>
         </div>
         {props.tours.map((obj)=>{
           return (
            <>
              <Tour key={obj.id} {...obj} removertour={props.removertour}/>
            </>
           )
         })}
      </section>
    </>
  )
};

export default Tours;
