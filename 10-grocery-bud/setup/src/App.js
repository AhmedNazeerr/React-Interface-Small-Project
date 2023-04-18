import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getlocalstorage=()=>{
  let list=localStorage.getItem('list');
  if(list){
    return JSON.parse(localStorage.getItem('list'))
  }else{
    return []
  }
}

function App() {
  const [name,setname]=useState('');
  const [list,setlist]=useState(getlocalstorage())
  const [isediting,setisediting]=useState(false)
  const [editid,seteditid]=useState(null)
  const [alert,setalert]=useState({show:false,message:'',type:''})
   const handleSubmit=(e)=>{
    e.preventDefault();
    if(!name){
         //display alert
         showalert(true,"Please Enter Value","danger")

    }
    else if(name && isediting){
        ///deal with edit
          setlist(list.map((item)=>{
            if(item.id===editid){
              return {...item,title:name}
            }
            return item
          }))
          setname('')
          seteditid(null)
          setisediting(false)
          showalert(true,"Editied successfully",'success')
    }
    else if(name && !isediting){
      //show alert
         showalert(true,"value entered","success")
      // deal with add the item in list
      const newitem= {id:new Date().getTime().toString(),
      title:name
      }
      setlist([...list,newitem]);

    }
   }
    const showalert=(show=false,message=' ',type=' ')=>{
    setalert({show:show,message:message,type:type})
   }
   const removeritem=(id)=>{
    showalert(true,"item deleted","danger")
    setlist(list.filter((item)=>{
      return item.id!==id
    }))
   }
    const edititem=(id)=>{
      const specificitem= list.find((item)=>{
        return item.id===id
      })
      setisediting(true)
      seteditid(id)
      setname(specificitem.title)
    }
    useEffect(()=>{
      localStorage.setItem('list',JSON.stringify(list))
    },[list])
  return (
    <>
      <section className="section-center">
      <form onSubmit={handleSubmit} className="grocery-form">
        {alert.show && <Alert {...alert} removealert={showalert} list={list}/>}
        <h3>Grocery Bud</h3>
        <div className="form-control">
          <input type="text"  className='grocery' placeholder='e.g. eggs' value={name} onChange={(e)=>setname
          (e.target.value)}/>
          <button className="submit-btn">
            {
              isediting ? "Edit":"Submit"
            }
          </button>
        </div>
      </form>
      {list.length>0 &&
          <div className="grocery-container">
          <List items={list} removeitem={removeritem}
            edititem={edititem}
          />
          <button className="clear-btn" onClick={()=>{
            showalert(true,"List Cleared","success")
            setlist([])}}>
            Clear All
          </button>
        </div>
      }
      </section>
    </>
  )
}

export default App
