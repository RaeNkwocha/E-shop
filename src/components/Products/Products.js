import React from 'react'
import "./products.css"
import cart from "./cart.png"
import TransitionsModal from '../../Modal/Modal'
import { Link } from 'react-router-dom'

function Products({name,description,price,image,id}) {
    
    return (
        <>
          {/* <TransitionsModal name={name} description={description} price={price} image={image}> */}
               
               <div key={id} className="container">
               <Link style={{textDecoration:"none",listStyle:"none",color:"black"}} to={"/shop/"+id+"/"+name}>

                        <div className="image-holder">
                            <img src={image}></img>
                        </div>
                        <div className="para">
                        <p>{name}</p>
                        <p className="desc">{description}</p>
                        </div>
                        </Link>
                        <div className="para-flex">
                            <div className="para">
                            <p>{price}</p>
                            </div>
                            <div className="para">
                            <div className="cart">
                                <img style={{width:"30px"}} src={cart}></img>
                                
                            </div>
                            </div>
                        
                        </div>
                        
                </div>
               
               
               
          {/* </TransitionsModal> */}

        </>
    )
}

export default Products
