import React, { useState } from 'react'
import fruit from "./Group.png"
import banner from "./banner.png"
import Bannas from "./bannas.png"
import Apples from "./Apple.png"
import Nuts from "./Cashew Nuts.png"
import berry from "./Strawberry.png"
import pie from "./pie.png"
import food from "./food.png"
import bone from "./bone.png"
import chicken from "./chicken.png"
import ColorTextFields from './Search'
import "./splash.css"
import Products from '../components/Products/Products'


function Shop() {
    const [input, setInput]=useState("")
    let fruits=[
        {
            name:"Organic Bannas",
            image:Bannas,
            price:"$4.99",
            description:"7pcs priceg"
        },
        {
            name:"Red Apple",
            image:Apples,
            price:"$4.99",
            description:"7pcs priceg"
        },
        {
            name:"Red Apple",
            image:Apples,
            price:"$4.99",
            description:"7pcs priceg"
        },
        {
            name:"Red Apple",
            image:Apples,
            price:"$4.99",
            description:"7pcs priceg"
        }
        
      
    ]
    if (input.length > 0){
        fruits=fruits.filter((i)=>{
          return i.name.match(input)
        })
     }
     let best=[
         {
            name:"Strawberries",
            image:berry,
            price:"$4.99",
            description:"7pcs priceg"
         },
         {
            name:"Cashew Nuts",
            image:Nuts,
            price:"$4.99",
            description:"7pcs priceg"
         },
         {
            name:"Tomatoes",
            image:Bannas,
            price:"$4.99",
            description:"7pcs priceg"
         },
         {
            name:"Pear",
            image:Bannas,
            price:"$4.99",
            description:"7pcs priceg"
         }
     ]
    
     if(input.length > 0){
         best=best.filter((fruit)=>{
             return fruit.name.match(input)
         })
     }
     let groceries=[
        {
           name:"Beef bone",
           image:bone,
           price:"$4.99",
           description:"7pcs priceg"
        },
        {
           name:"Broiller chicken",
           image:chicken,
           price:"$4.99",
           description:"7pcs priceg"
        },
        {
           name:"Strawberries",
           image:berry,
           price:"$4.99",
           description:"7pcs priceg"
        },
        {
           name:"Strawberries",
           image:berry,
           price:"$4.99",
           description:"7pcs priceg"
        }
    ]
    if (input.length>0){
        groceries=groceries.filter((grocery)=>{
            return grocery.name.match(input)
        })
    }

    return (
        <>
        <div  style={{display:"flex",margin:"auto",justifyContent:"center",width:"100%"}}>
            <div className="load-screen" > 
            <div className="fruit">
              <img src={fruit} alt=""></img>
            </div>

            <h6 style={{textAlign:"center" }}> <i style={{fontSize:"0.8rem"}} class="fa fa-map-marker" aria-hidden="true"></i> Dhaka Location</h6>
            <div style={{display:"flex",margin:"auto",justifyContent:"center",marginTop:"1rem"}}>
            <ColorTextFields input={input} setInput={setInput} ></ColorTextFields>  </div>
            <div style={{marginTop:"50px",display:"flex",margin:"auto",justifyContent:"center",marginTop:"1rem"}}>
                <img style={{marginTop:"10px",width:"200px"}} src={banner}></img>
                </div>
                <section className="section">
                <section className="flex">
                    <h5 style={{fontWeight:"bold"}}>Exclusive Offer</h5>
                    <h5 style={{color:"#53B175", fontSize:"0.6rem"}}>see more</h5>
                </section>
                {/* <div className="overflow">  */}
                <div className="product-display">
                    {fruits.map((fruit)=>{
                        return  <Products name={fruit.name} 
                                          price={fruit.price}
                                          description={fruit.description}
                                          image={fruit.image}
                        
                        
                        >


                        </Products>
                    })}
                    </div>


                    
                {/* </div> */}
                
                    <section className="flex">
                    <h5 style={{fontWeight:"bold",fontSize:"0.7rem"}}>Best selling</h5>
                    <h5 style={{color:"#53B175", fontSize:"0.6rem"}}>see more</h5>
                </section>
                <div className="product-display">
                        {best.map((item)=>{
                            return <Products name={item.name}
                                             price={item.price}
                                             description={item.description}
                                             image={item.image}
                            
                            
                            >
                                
                            </Products>
                        })}
                </div>
                <section className="flex">
                    <h5 style={{fontWeight:"bold",fontSize:"0.7rem"}}>Groceries</h5>
                    <h5 style={{color:"#53B175", fontSize:"0.6rem"}}>see more</h5>
                </section>
                <section  className="grocery-flex">
                    <div className="width">
                       <div className="pie">
                            <div className="rice-img">
                                <img style={{padding:"15px"}} src={pie}></img>
                            </div>
                            <div className="rice-text">
                                <h5>
                                    Pulses
                                </h5>
                            </div>
                       </div>
                   </div>
                   <div className="width">
                       <div className="rice">
                            <div className="rice-img">
                                <img style={{padding:"15px"}} src={food}></img>
                            </div>
                            <div className="rice-text">
                                <h5>
                                    Rice
                                </h5>
                            </div>
                       </div>
                   </div>
                </section>
                <div className="product-display">
                    {groceries.map((grocery)=>{
                        return <Products name={grocery.name}
                                         price={grocery.price}
                                         description={grocery.description}
                                         image={grocery.image}
                       
                       
                       >

                        </Products>
                    })}
                </div>
                </section>
               
                {/* <Bottomnav></Bottomnav> */}

              
            </div> 
           
        </div>
        
        </>
    )
}

export default Shop
