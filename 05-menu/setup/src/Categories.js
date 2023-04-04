import React from 'react';

const Categories = ({filteritems,categorie}) => {
  return (
    <>
      <div className="btn-container">
      {
         categorie.map((cat)=>{
          return(
         <button className="filter-btn" onClick={()=>filteritems(`${cat}`)}>
         {cat}
        </button>
          )
         })
      }
      </div>
    </>
  );
};

export default Categories;
