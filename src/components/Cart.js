import React, { useContext } from "react";
import { CartContext } from "../Context/Context";
import "../Componet Css/explore.css";
import Incart from "../components/Incart"
import Bottomnav from "./Bottomnav";

function Cart() {
  const [cart] = useContext(CartContext);

  return (
    <>
      <div>
        <h3 style={{ textAlign: "center", margin: "20px" }}>My cart</h3>
      </div>
      <div className="line"></div>
      <section>
        {cart.map((item) => {
          return (
            <>
              <Incart
                key={item.id}
                name={item.name}
                price={item.price}
                description={item.description}
                image={item.image}
                id={item.id}
              ></Incart>
            </>
          );
        })}
      </section>
      <Bottomnav></Bottomnav>
    </>
  );
}

export default Cart;
