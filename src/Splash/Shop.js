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
            id:1,
            name:"Organic Bannas",
            image:Bannas,
            price:"$4.99",
            description:"7pcs priceg"
        },
        {
            id:2,
            name:"Red Apple",
            image:Apples,
            price:"$4.99",
            description:"7pcs priceg"
        },
        {
            id:3,
            name:"Red Apple",
            image:Apples,
            price:"$4.99",
            description:"7pcs priceg"
        },
        {    id:4,
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
            id:5,
            name:"Strawberries",
            image:berry,
            price:"$4.99",
            description:"7pcs priceg"
         },
         {
            id:6,
            name:"Cashew Nuts",
            image:Nuts,
            price:"$4.99",
            description:"7pcs priceg"
         },
         {
            id:7,
            name:"Tomatoes",
            image:Bannas,
            price:"$4.99",
            description:"7pcs priceg"
         },
         {    id:8,
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
            id:9,
           name:"Beef bone",
           image:bone,
           price:"$4.99",
           description:"7pcs priceg"
        },
        {
            id:10,
           name:"Broiller chicken",
           image:chicken,
           price:"$4.99",
           description:"7pcs priceg"
        },
        {
            id:11,
           name:"Strawberries",
           image:berry,
           price:"$4.99",
           description:"7pcs priceg"
        },
        {
            id:12,
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
                        return  <Products key={fruit.id} 
                                          name={fruit.name} 
                                          price={fruit.price}
                                          description={fruit.description}
                                          image={fruit.image}
                                          id={fruit.id}
                        
                        
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
                            return <Products key={item.id} name={item.name}
                                             price={item.price}
                                             description={item.description}
                                             image={item.image}
                                             id={item.id}
                            
                            
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
                        return <Products key={grocery.id} name={grocery.name}
                                         price={grocery.price}
                                         description={grocery.description}
                                         image={grocery.image}
                                         id={grocery.id}
                       
                       
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
