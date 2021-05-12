import React from 'react'
import "./products.css"
import cart from "./cart.png"
import TransitionsModal from '../../Modal/Modal'

function Products({name,description,price,image}) {
    
    return (
        <>
          <TransitionsModal name={name} description={description} price={price} image={image}>
                <div className="container">
                        <div className="image-holder">
                            <img src={image}></img>
                        </div>
                        <div className="para">
                        <p>{name}</p>
                        <p className="desc">{description}</p>
                        </div>
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
          </TransitionsModal>

        </>
    )
}

export default Products
