import React from 'react';
import './explore.css';
import cross from "./delete.png"




function Incart({name,price,description,image,id}) {
    return (
        <div className="incart">
         <div className="cart-img"><img style={{width:"40%",margin:"20px"}} src={image}></img></div>
            <div className="new-layout">
                <div className="layout-flex">
                <h6 >{name}</h6> 
            <img style={{width:"12px"}} src={cross}></img>
                </div>
        
            <p className="cart-desc">{description}</p>
            <div className="layout-flex-1">

            <div className="new-counter" style={{width:"20%",display:"flex"}}>
                            <div className="circle" ><i style={{margin:"auto"}} class="fa fa-minus"></i></div>
                            <div className="counter-holder" style={{margin:"auto",width:"20%",marginLeft:"0.2rem"}}><h3>1</h3></div>
                            <div className="circle" ><i style={{color:"#53B175",margin:"auto"}} class="fa fa-plus"></i></div>
                    </div>
                    <h6>{price}</h6>

                    </div>
                    <div className="line"></div>


            </div>
           
            
        </div>
    )
}

export default Incart
