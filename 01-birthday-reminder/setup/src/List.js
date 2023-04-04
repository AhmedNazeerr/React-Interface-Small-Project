import React from 'react';

const List = (props) => {
  return (
   
       props.data.map((per)=>{
          return(
            <>
            <article key={per.id} className='person'>
            <img src={per.image} alt="" className=''/>
            <div>
              <h4>{per.name}</h4>
              <p>{per.age} Years</p>
            </div>
            </article>
    
            </>
          )
       })
  );
};

export default List;
