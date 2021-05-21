import React from 'react'
import './explore.css';


function Incart({name,price,description,image,id}) {
    return (
        <div className="incart">
         <div className="cart-img"><img style={{width:"40%",margin:"20px"}} src={image}></img></div>
            <div className="new-layout">
                <div className="layout-flex">
                <h6 >{name}</h6> 
            <p>{price}</p>
                </div>
        
            <p className="cart-desc">{description}</p>

            </div>
           
            
        </div>
    )
}

export default Incart
