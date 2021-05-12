import React from 'react';
import { Link } from 'react-router-dom';


function Newproducts({name,image}) {
    return (
        <>
        <section className="new">
            <div className="new-products">
                <div className="img-container">
                    <img src={image}></img>
                </div>
                <h5 className="explore">{name}</h5>

            </div>
        </section>
       
        </>
    )
}

export default Newproducts
