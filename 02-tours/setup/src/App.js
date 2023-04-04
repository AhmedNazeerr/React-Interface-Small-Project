import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  //setting loading true as default, because we want loading to come
  const [loading,setloading]=useState(true)
  const [tours,settours]=useState([])

   const removertour=(id)=>{
    const newtours=tours.filter((tour)=>{
         return tour.id !==id
    })
    settours(newtours);
   }

  const fetchtours=async()=>{
    try{
       const responce=await fetch(url)
       const tour=await responce.json();
       console.log(tour)
       setloading(false)
       settours(tour)
    }catch(error){
       setloading(false)
       console.log("There is an error fetching data from Api")

    }

  }

  useEffect(()=>{
    fetchtours();
  },[])


  if(loading){
    return (
       <main>
        <Loading/>
       </main>
    )
    }
    if(tours.length===0){
      return(
        <>
          <main>
            <div className='title'>
               <h2>No Tours Left</h2>
               <button onClick={()=>{
                fetchtours()
               }} className='btn'>Fetch Tour</button>
            </div>
          </main>
        </>
      )
    }
  return (
  <main>
   <Tours tours={tours} removertour={removertour}/>
   <button className='btn' onClick={()=>{
    settours([])
   }}>Clear All
   </button>
  </main>
  )
}

export default App
