import React, { useState, useContext } from "react";
import fruit from "./Group.png";
import banner from "./banner.png";
import Bannas from "./bannas.png";
import Apples from "./Apple.png";
import Nuts from "./Cashew Nuts.png";
import berry from "./Strawberry.png";
import pie from "./pie.png";
import food from "./food.png";
import bone from "./bone.png";
import chicken from "./chicken.png";
import add from "./cart.png";

import ColorTextFields from "./Search";
import "./splash.css";
import Products from "../components/Products/Products";
import { Link } from "react-router-dom";
import { CartContext } from "../Context";
import Bottomnav from "../Bottomnav";

function Shop() {
  const [cart, setCart] = useContext(CartContext);
  const [input, setInput] = useState("");
  const addTocart = (product) => {
    product.inCart = true;
    setCart([...cart, { ...product }]);
  };

  let [fruits] = useState([
    {
      id: 1,
      name: "Organic Bannas",
      image: Bannas,
      price: "$4.99",
      description: "7pcs priceg",
      inCart: false,
    },
    {
      id: 2,
      name: "Red Apple",
      image: Apples,
      price: "$4.99",
      description: "7pcs priceg",
      inCart: false,
    },
    {
      id: 3,
      name: "Red Apple",
      image: Apples,
      price: "$4.99",
      description: "7pcs priceg",
      inCart: false,
    },
    {
      id: 4,
      name: "Red Apple",
      image: Apples,
      price: "$4.99",
      description: "7pcs priceg",
      inCart: false,
    },
  ]);
  if (input.length > 0) {
    fruits = fruits.filter((i) => {
      return i.name.match(input);
    });
  }
  let [best] = useState([
    {
      id: 5,
      name: "Strawberries",
      image: berry,
      price: "$4.99",
      inCart: false,

      description: "7pcs priceg",
    },
    {
      id: 6,
      name: "Cashew Nuts",
      image: Nuts,
      price: "$4.99",
      inCart: false,

      description: "7pcs priceg",
    },
    {
      id: 7,
      name: "Tomatoes",
      image: Bannas,
      price: "$4.99",
      inCart: false,

      description: "7pcs priceg",
    },
    {
      id: 8,
      name: "Pear",
      image: Bannas,
      price: "$4.99",
      inCart: false,

      description: "7pcs priceg",
    },
  ]);

  if (input.length > 0) {
    best = best.filter((fruit) => {
      return fruit.name.match(input);
    });
  }
  let [groceries] = useState([
    {
      id: 9,
      name: "Beef bone",
      image: bone,
      price: "$4.99",
      inCart: false,
      description: "7pcs priceg",
    },
    {
      id: 10,
      name: "Broiller chicken",
      image: chicken,
      price: "$4.99",
      inCart: false,
      description: "7pcs priceg",
    },
    {
      id: 11,
      name: "Strawberries",
      image: berry,
      price: "$4.99",
      inCart: false,
      description: "7pcs priceg",
    },
    {
      id: 12,
      name: "Strawberries",
      image: berry,
      price: "$4.99",
      inCart: false,
      description: "7pcs priceg",
    },
  ]);
  if (input.length > 0) {
    groceries = groceries.filter((grocery) => {
      return grocery.name.match(input);
    });
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          margin: "auto",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <div className="load-screen">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "auto",
              padding: "10px",
            }}
            className="fruit"
          >
            <img src={fruit} alt=""></img>
          </div>

          <h6 style={{ textAlign: "center" }}>
            {" "}
            <i
              style={{ fontSize: "0.8rem" }}
              class="fa fa-map-marker"
              aria-hidden="true"
            ></i>{" "}
            Dhaka Location
          </h6>
          <div
            style={{
              display: "flex",
              margin: "auto",
              justifyContent: "center",
              marginTop: "1rem",
            }}
          >
            <ColorTextFields
              input={input}
              setInput={setInput}
            ></ColorTextFields>{" "}
          </div>
          <div
            style={{
              marginTop: "50px",
              display: "flex",
              margin: "auto",
              justifyContent: "center",
              paddingTop: "1rem",
            }}
          >
            <img
              style={{ marginTop: "10px", width: "200px" }}
              src={banner}
              alt=""
            ></img>
          </div>
          <section className="section">
            <section className="flex">
              <h5 style={{ fontWeight: "bold" }}>Exclusive Offer</h5>
              <h5 style={{ color: "#53B175", fontSize: "0.6rem" }}>see more</h5>
            </section>
            {/* <div className="overflow">  */}
            <div className="product-display">
              {fruits.map((fruit) => {
                // return  <Products key={fruit.id}
                //                   name={fruit.name}
                //                   price={fruit.price}
                //                   description={fruit.description}
                //                   image={fruit.image}
                //                   id={fruit.id}
                //                   addTocart={addTocart}
                //                   fruit={fruit}

                // >

                // </Products>
                return (
                  <div key={fruit.id} className="container">
                    <Link
                      style={{
                        textDecoration: "none",
                        listStyle: "none",
                        color: "black",
                      }}
                      to={
                        "/user/" +
                        fruit.id +
                        "/" +
                        fruit.price +
                        "/" +
                        fruit.name +
                        "/" +
                        fruit.description +
                        "/"
                      }
                    >
                      <div className="image-holder">
                        <img src={fruit.image} alt=""></img>
                      </div>
                      <div className="para">
                        <p>{fruit.name}</p>
                        <p className="desc">{fruit.description}</p>
                      </div>
                    </Link>
                    <div className="para-flex">
                      <div className="para">
                        <p>{fruit.price}</p>
                      </div>
                      <div className="para">
                        <div className="cart">
                          <button
                            disabled={fruit.inCart ? true : false}
                            onClick={() => addTocart(fruit)}
                          >
                            {" "}
                            {fruit.inCart ? (
                              <p>in cart</p>
                            ) : (
                              <img
                                alt=""
                                style={{ width: "30px" }}
                                src={add}
                              ></img>
                            )}{" "}
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* <img onClick={() => addTocart(fruit)} style={{width:"30px"}} src={add}  ></img> */}
                  </div>
                );
              })}
            </div>

            {/* </div> */}

            <section className="flex">
              <h5 style={{ fontWeight: "bold", fontSize: "0.7rem" }}>
                Best selling
              </h5>
              <h5 style={{ color: "#53B175", fontSize: "0.6rem" }}>see more</h5>
            </section>
            <div className="product-display">
              {best.map((item) => {
                // return <Products key={item.id} name={item.name}
                //                  price={item.price}
                //                  description={item.description}
                //                  image={item.image}
                //                  id={item.id}

                // >

                // </Products>
                return (
                  <div key={item.id} className="container">
                    <Link
                      style={{
                        textDecoration: "none",
                        listStyle: "none",
                        color: "black",
                      }}
                      to={
                        "/user/" +
                        item.id +
                        "/" +
                        item.price +
                        "/" +
                        item.name +
                        "/" +
                        item.description +
                        "/"
                      }
                    >
                      <div className="image-holder">
                        <img alt="" src={item.image}></img>
                      </div>
                      <div className="para">
                        <p>{item.name}</p>
                        <p className="desc">{fruit.description}</p>
                      </div>
                    </Link>
                    <div className="para-flex">
                      <div className="para">
                        <p>{item.price}</p>
                      </div>
                      <div className="para">
                        <div className="cart">
                          <button
                            disabled={item.inCart ? true : false}
                            onClick={() => addTocart(item)}
                          >
                            {" "}
                            {item.inCart ? (
                              <p>in cart</p>
                            ) : (
                              <img
                                alt=""
                                style={{ width: "30px" }}
                                src={add}
                              ></img>
                            )}{" "}
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* <img onClick={() => addTocart(fruit)} style={{width:"30px"}} src={add}  ></img> */}
                  </div>
                );
              })}
            </div>
            <section className="flex">
              <h5 style={{ fontWeight: "bold", fontSize: "0.7rem" }}>
                Groceries
              </h5>
              <h5 style={{ color: "#53B175", fontSize: "0.6rem" }}>see more</h5>
            </section>
            <section className="grocery-flex">
              <div className="width">
                <div className="pie">
                  <div className="rice-img">
                    <img alt="" style={{ padding: "15px" }} src={pie}></img>
                  </div>
                  <div className="rice-text">
                    <h5>Pulses</h5>
                  </div>
                </div>
              </div>
              <div className="width">
                <div className="rice">
                  <div className="rice-img">
                    <img alt="" style={{ padding: "15px" }} src={food}></img>
                  </div>
                  <div className="rice-text">
                    <h5>Rice</h5>
                  </div>
                </div>
              </div>
            </section>
            <div className="product-display">
              {groceries.map((grocery) => {
                //     return <Products key={grocery.id} name={grocery.name}
                //                      price={grocery.price}
                //                      description={grocery.description}
                //                      image={grocery.image}
                //                      id={grocery.id}

                //    >

                //     </Products>
                return (
                  <div key={grocery.id} className="container">
                    <Link
                      style={{
                        textDecoration: "none",
                        listStyle: "none",
                        color: "black",
                      }}
                      to={
                        "/user/" +
                        grocery.id +
                        "/" +
                        grocery.price +
                        "/" +
                        grocery.name +
                        "/" +
                        grocery.description +
                        "/"
                      }
                    >
                      <div className="image-holder">
                        <img alt="" src={grocery.image}></img>
                      </div>
                      <div className="para">
                        <p>{grocery.name}</p>
                        <p className="desc">{grocery.description}</p>
                      </div>
                    </Link>
                    <div className="para-flex">
                      <div className="para">
                        <p>{grocery.price}</p>
                      </div>
                      <div className="para">
                        <div className="cart">
                          <button
                            disabled={grocery.inCart ? true : false}
                            onClick={() => addTocart(grocery)}
                          >
                            {" "}
                            {grocery.inCart ? (
                              <p>in cart</p>
                            ) : (
                              <img
                                alt=""
                                style={{ width: "30px" }}
                                src={add}
                              ></img>
                            )}{" "}
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* <img onClick={() => addTocart(fruit)} style={{width:"30px"}} src={add}  ></img> */}
                  </div>
                );
              })}
            </div>
          </section>

          {/* <Bottomnav></Bottomnav> */}
        </div>
      </div>
      <Bottomnav></Bottomnav>
    </>
  );
}

export default Shop;
