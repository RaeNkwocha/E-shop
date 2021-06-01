import React, { useState } from "react";
import Newproducts from "./components/Newproducts";
import beverages from "./beverages.png";
import eggs from "./eggs.png";
import meat from "./meat.png";
// import oil from "./Oil.png"
import oil from "./new.png";
import snacks from "./snacks.png";
import vegetables from "./vegetable.png";

import ColorTextFields from "./Splash/Search";
import "./explore.css";
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
