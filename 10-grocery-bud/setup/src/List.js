import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({items,removeitem,edititem}) => {
  return (
<>
  <div className="grocery-list">
    {
      items.map((item)=>{
        return(
          <>
            <article key={item.id} className='grocery-item'>
            <p className="title">
              {
                item.title
              }
              <div className="btn-container">
                <button className="edit-btn" type='button'
                onClick={()=>edititem(item.id)}
                >
                   <FaEdit/>
                </button>
                <button className="delete-btn" type='button'
                onClick={()=>{
                  removeitem(item.id)
                }}>
                   <FaTrash/>
                </button>
              </div>
            </p>
         
            </article>
          </>
        )
      })
    }
  </div>
</>
  )}

export default List
