import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
const Review = () => {
  const [index,setindex]=useState(0)
  const {name,job,image,text}=people[index]
  const nextperson=()=>{
      setindex((index)=>{
        let newindex=index+1
        if(newindex<people.length){
           return newindex
        }
         return index
      })
  }
  const prevperson=()=>{
   setindex((index)=>{
    let newindex=index-1
      if(newindex>=0){
      return newindex
      }
         return index
   })
  }
  const randomperson=()=>{
    const newindex=Math.floor(Math.random() * people.length);
    setindex(()=>{
      return newindex
    })
  }
  return (
    <>
      <article className="review">
       <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote">
          <FaQuoteRight/>
        </span>
       </div>
       <h4 className="author">
        {name}
       </h4>
       <p className="job">{job}</p>
       <p className="info">{text}</p>
       <div className="button-container">
        <button className="prev-btn" onClick={prevperson}>
          <FaChevronLeft/>
        </button>
        <button className="next-btn" onClick={nextperson}>
          <FaChevronRight/>
        </button>
       </div>
        <button className="random-btn" onClick={randomperson}>
         Surprise Me
        </button>
      </article>
    </>
  )
};

export default Review;
