import React from 'react';
const Menu = ({itemss}) => {
  return (
    <>
        <div className="section-center">
          {itemss.map((item)=>{
              return(
                <>
                  <article key={item.id} className='menu-item'>
                  <img src={item.img} alt={item.title} className='photo'/>
                  <div className="item-info">
                    <header>
                      <h4>{item.title}</h4>
                      <h4 className="price">
                        {item.price}
                      </h4>
                      <p className="item-text">
                        {item.desc}
                      </p>
                    </header>
                  </div>
                  </article>
                </>
              )
          })}
        </div>
    </>
  )
};

export default Menu;
