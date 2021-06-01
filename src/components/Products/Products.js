import React, { useContext } from "react";
import "./products.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context";

function Products({ name, description, price, image, id, fruit }) {
  const addTocart = (product) => {
    // product.inCart=true
    setCart([...cart, { ...product }]);
  };
  const [cart, setCart] = useContext(CartContext);

  return (
    <>
      {/* <TransitionsModal name={name} description={description} price={price} image={image}> */}

      <div key={id} className="container">
        <Link
          style={{ textDecoration: "none", listStyle: "none", color: "black" }}
          to={
            "/user/" + id + "/" + price + "/" + name + "/" + description + "/"
          }
        >
          <div className="image-holder">
            <img alt="" src={image}></img>
          </div>
          <div className="para">
            <p>{name}</p>
            <p className="desc">{description}</p>
          </div>
        </Link>
        <div className="para-flex">
          <div className="para">
            <p>{price}</p>
          </div>
          <div className="para">
            <div className="cart">
              <button
                onClick={() => addTocart(fruit)}
                style={{ width: "30px" }}
              >
                add me
              </button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Products;
