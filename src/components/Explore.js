import React, { useState } from "react";
import Newproducts from "./Newproducts";
import beverages from "../Images/beverages.png"
import vegetables from "../Images/vegetable.png"
import eggs from "../Images/eggs.png"
import oil from "../Images/new.png"
import meat from "../Images/meat.png"
import snacks from "../Images/snacks.png"
import ColorTextFields from "../Splash/Search"
// import ColorTextFields from "./Splash/Search";
import "../Componet Css/explore.css";
import Bottomnav from "./Bottomnav";

function Explore() {
  const [input, setInput] = useState("");
  let explore = [
    {
      name: " Fresh fruits & Vegetables",
      image: vegetables,
    },
    {
      name: "Cooking oil & Ghee",
      image: oil,
    },
    {
      name: "Meat & Fish",
      image: meat,
    },
    {
      name: "Bakery & Snacks",
      image: snacks,
    },
    {
      name: "Dairy & Eggs",
      image: eggs,
    },
    {
      name: "Beverages",
      image: beverages,
    },
    {
      name: "fruits & Vegetables",
      image: "",
    },
    {
      name: "fruits & Vegetables",
      image: "",
    },
  ];
  if (input.length > 0) {
    explore = explore.filter((item) => {
      return item.name.match(input);
    });
  }
  return (
    <div>
      <div
        style={{
          textAlign: "center",
          marginTop: "1rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "0.9rem",
        }}
      >
        <h4>Find Products</h4>
      </div>

      <div
        style={{
          display: "flex",
          margin: "auto",
          justifyContent: "center",
          marginTop: "1rem",
        }}
      >
        <ColorTextFields input={input} setInput={setInput}></ColorTextFields>
      </div>
      <div className="new-display">
        {explore.map((item) => {
          return (
            <Newproducts name={item.name} image={item.image}></Newproducts>
          );
        })}
      </div>
      <Bottomnav></Bottomnav>
    </div>
  );
}

export default Explore;
