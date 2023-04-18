import React, { useEffect } from 'react'

const Alert = ({type,message,removealert,list}) => {
  useEffect(()=>{
   const timeout=setTimeout(()=>{
     removealert()
   },3000)
   return ()=>clearTimeout(timeout)
  },[list])
  return (
    <p className={`alert alert-${type}`}>
      {message}
    </p>
  )
}

export default Alert
