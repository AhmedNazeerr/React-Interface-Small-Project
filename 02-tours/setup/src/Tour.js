import React, { useState } from 'react';

const Tour = (props) => {
  const {id,name,info,image,price}=props
  const [readmore,setreadmore]=useState(false);
  return (
    <>
      <article className='single-tour'>
        {
          console.log(image)
        }
       <img src={image} alt={name} />
       <footer>
        <div className='tour-info'>
          <h4>
           {name}          
          </h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
        <p>{readmore?info: `${info.substring(0,200)}...`}</p>
        <button onClick={()=>setreadmore(!readmore)}>{readmore? "Show Less":"Show More"}</button>
        <button className='delete-btn' onClick={()=>
          props.removertour(id)
        }>Not Interested</button>
       </footer>
      </article>
    </>
  )
};

export default Tour;
