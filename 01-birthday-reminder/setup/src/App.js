import React, { useState } from 'react';
import {data} from './data';
import List from './List';
function App() {
  const [people,setpeople]=useState(data)
  const clearall=()=>{
    if(people.length!==0){
      setpeople([])
    }
  }
  const getall=()=>{
    if(people.length<=0){
      setpeople(data)
    }
  }
  return (<>
    <main>
      <section>
        <div className="container">
          <h3>
            {people.length} Birthdays Today
          </h3>
             <List data={people}/>
           <button type='button' onClick={()=>{clearall()}}>Clear All</button>
           <button type='button' onClick={()=>{getall()}} >Get All</button>
        </div>
      </section>
    </main>
  </>)
}

export default App;
