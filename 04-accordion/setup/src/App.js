import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [question,setquestion]=useState(data)
  return (
<>
  <main>
    <div className="container">
      <h3>
        Faqs
      </h3>
      <section className="info">
        {
          question.map((q)=>{
            return <SingleQuestion key={q.id} {...q}/>
          })
        }
      </section>
    </div>
  </main>
</>
  )}

export default App;
