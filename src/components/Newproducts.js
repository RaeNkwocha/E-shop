import React from 'react';


function Newproducts({name,image}) {
    return (
        <div className="new">
            <article className="new-products">
                <div className="img-container">
                    <img src={image}></img>
                </div>
                <h5 className="explore">{name}</h5>

            </article>
        </div>
    )
}

export default Newproducts
