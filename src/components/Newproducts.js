import React from 'react';


function Newproducts({name,image}) {
    return (
        <div className="new">
            <div className="new-products">
                <div className="img-container">
                    <img src={image}></img>
                </div>
                <h5 className="explore">{name}</h5>

            </div>
        </div>
    )
}

export default Newproducts
