import React, { useEffect, useState } from 'react'
import "./splash.css"
import group from "./Group 1.png"
import Bannas from "./bannas.png"
import Apples from "./Apple.png"
import Nuts from "./Cashew Nuts.png"
import berry from "./Strawberry.png"
import bone from "./bone.png"
import chicken from "./chicken.png"
import Shop from '../Splash/Shop'



function Splash() {
    const [loading, setLoading]=useState(false)
    const [input, setInput]=useState("")
    // useEffect(()=>{
    //     setLoading(true)
    //     setTimeout(()=>{
    //         setLoading(false)
    //     },5000)
    // },[])
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
        <div style={{display:"flex",margin:"auto",justifyContent:"center",width:"100%"}}>
            <Shop></Shop>

            
            
        </div>
    )
}

export default Splash
