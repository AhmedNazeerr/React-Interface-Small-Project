import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

 const catgeories=['All',...new Set(items.map((item)=>{
   return item.category}))]

function App() {
  const [menuitems,setmenuitems]=useState(items)
  const [categorie,setcategorie]=useState(catgeories)

  const filteritems=(category)=>{
    if(category==='All'){
         setmenuitems(items)
    }
     else{
        const newitems=items.filter((item)=>
         item.category === category
     )
     setmenuitems(newitems);}
     
  }
  return (
    <>
     <section className="menu section">
     <div className="title">
      <h2>Our Menu</h2>
      <div className="underline"></div>
     </div>
     <Categories filteritems={filteritems} categorie={categorie}/>
     <Menu itemss={menuitems}/>
     </section>
    </>
  )
}

export default App;
