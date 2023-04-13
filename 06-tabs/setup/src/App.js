import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [loading,setloading]=useState(true);
  const [jobs,setjobs]=useState([]);
  const [value,setvalue]=useState(0);
  const fetchjobs=async ()=>{
    const responce=await fetch(url);
    const newjobs=await responce.json()
    setjobs(newjobs);
    setloading(false); 
  }
  useEffect(()=>{
    fetchjobs()
  },[])
  if(loading){
   return(
    <>
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    </>
   )
  }
  const {company,dates,duties,title}=jobs[value]
  return (
    <>
      <section className="section">
        <div className="title">
          <h2>Experience</h2>
          <div className="underline">
            
          </div>
          <div className="jobs-center">
          <div className="btn-container">
            {
              jobs.map((job,index)=>{
                   return(
                    <>
                      <button key={job.id} onClick={()=>setvalue(index)} className={`job-btn ${index===value && `active-btn`}`}>
                        {
                           job.company
                        }
                      </button>
                    </>
                   )
              })
            }
          </div>
            <article className="job-info">
              <h3>{title}</h3>
              <h4>{company}</h4>
              <p className="job-date">{dates}</p>
              {duties.map((duty)=>{
                return(
                  <>
                    <div className="job-desc">
                      <FaAngleDoubleRight className='job-icon'>
                      </FaAngleDoubleRight>
                         <p>{duty}</p>
                    </div>
                  </>
                )
              })}
            </article>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
