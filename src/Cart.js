import React, { useContext } from 'react'
import Bottomnav from './Bottomnav';
import Products from './components/Products/Products'
import { CartContext } from './Context'
import './explore.css';
import Incart from './Incart';


function Cart() {
    const [cart, setCart] = useContext(CartContext)           

    return (
        <>
        <div>
            <h3 style={{textAlign:"center", margin:"20px"}}>My cart</h3>
        </div>
        <div className="line"></div>
            <section>
            {cart.map((item)=>{
                return (
                    <>
                    <Incart  key={item.id} name={item.name}
                    price={item.price}
                    description={item.description}
                    image={item.image}
                    id={item.id}>

                    </Incart>
              
                    </>
                    
                )
            })}
            </section>
            <Bottomnav ></Bottomnav>
        </>
    )
}

export default Cart
