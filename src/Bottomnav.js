import { Badge, Tabs } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from './Context';
import Explore from './Explore';
import './nav.css';
import Shop from './Splash/Shop';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
function Bottomnav() {
            const [tab, setTab]=useState(1)
            const [cart, setCart] = useContext(CartContext)           
            const toggle=(index)=>{
                setTab(index)
                // console.log(index)
            }
    //          useEffect(()=>{
    //              toggle()
    // },[toggle])
    return (
        <div>
            <div className="nav">
                    <div className="icons-flex">
                        <Link to="/">
                        <button className={tab===1?"btn-active":"btn"} onClick={()=>toggle(1)}><i class="fa fa-home"></i></button>

                        </Link>
                    <p>Shop</p>
                    </div>
               <div  className="icons-flex">
                   <Link to="/Explore" >
                   <button className={tab===2?"btn-active":"btn"}  onClick={()=>toggle(2)}><i class="fa fa-search"></i></button>
                   </Link>
               <p>Explore</p>
               </div>

               <div className="icons-flex">
               <Link style={{textDecoration:"none",color:"black"}} to="/Cart" >
                   <Badge badgeContent={(cart.length)}  color="secondary"><button   className={tab===3?"btn-active":"btn"} onClick={()=>toggle(3)}> <i class="fa fa-shopping-cart"></i> </button></Badge>
               
               <p>Cart</p>
               </Link>

               </div>
               <div className="icons-flex">
               <button className={tab===4?"btn-active":"btn"} onClick={()=>toggle(4)}><i class="fa fa-heart"></i></button>
               <p>Favourite</p>
               </div>
               <div className="icons-flex">
               <button className={tab===5?"btn-active":"btn"}  onClick={()=>toggle(5)}><i class="fa fa-user"></i></button>
               <p>User</p>
               </div>
            </div>

            <div>
               
               
           
            </div>
        </div>
    )
}

export default Bottomnav
