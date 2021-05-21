import './items.css';
import vector from "./Vector (4).png"
import heart from "./Vector (6).png"

import group from "./Group 102.png"

import {withRouter} from "react-router-dom"
import { useState } from 'react';
function User(props)
{
    console.warn(props)
    const [value,setValue]=useState(1)
    return(
        <div style={{marginBottom:"70px"}}>
            <div className="img-holder">
            <img src={vector}></img>
            </div>
            <div className="img-flex">
                    <div><h3> {props.match.params.name}</h3></div>
                    <img src={heart}></img>
            </div>
            <p className="desc-two"> {props.match.params.description}</p>
                <div className="img-flex">
                    <div className="new-counter">
                            <div ><i class="fa fa-minus"></i></div>
                            <div className="counter-holder">{value}</div>
                            <div onClick={()=>setValue(value+1)} ><i class="fa fa-plus"></i></div>
                    </div>
                    <div>
                    <h2> {props.match.params.price}</h2>

                    </div>
                </div>
                <section>
                    <div className="divide"></div>
                    <div className="img-flex">
                        <h4 style={{marginLeft:"5px"}}>Product detail</h4>
                        <i class="fa fa-chevron-down"></i>

                    </div>
                    <p className="detail">Apples are nutritious. Apples may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.</p>
                </section>
                <section>
                <div className="divide"></div>
                    <div className="img-flex">
                        <h4 style={{marginLeft:"5px"}}>Nutritious</h4>
                        <div className="new-counter">
                        <img  src={group}></img>
                        <i class="fa fa-chevron-right"></i>
                        </div>
                       
                    </div>
                </section>
                <section>
                <div className="divide"></div>
                    <div className="img-flex">
                        <h4 style={{marginLeft:"5px"}}>Reviews</h4>
                        <div className="new-counter">
                        <img  src={group}></img>
                        <i class="fa fa-chevron-right"></i>                 
                               </div>
                       
                    </div>
                    <button className="button"><h3 style={{display:"flex",margin:"auto",color:"white"}}>Add To Basket</h3></button>
                </section>
               
        </div>
    )
}
export default withRouter (User)