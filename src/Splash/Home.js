import React from "react";
import home from "./Home.png";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
  const navHandler = () => {
    history.push("/signup");
  };
  return (
    <div style={{ background: "lightGrey", height: "100vh" }}>
      <div>
        <img
          style={{
            width: "100%",
            height: "60vh",
          }}
          src={home}
          alt=""
        ></img>
        <div
          style={{
            width: "65%",
            marginLeft: "20%",
            paddingTop: "35PX",
            display: "flex,",
            justifyContent: "center",
            margin: "auto",
          }}
        >
          <h2 style={{ color: "black" }}>Get Your Groceries With Nectar </h2>
        </div>
        <div
          style={{
            display: "flex,",
            justifyContent: "center",
            margin: "auto",
            marginLeft: "50px",
            marginTop: "7vh",
          }}
        >
          <button
            onClick={navHandler}
            style={{
              borderRadius: "10px",
              outline: "none",
              border: "none",
              background: "#53B175",
              color: "white",
              width: "40%",
              padding: "10px",
              cursor: "pointer",
            }}
          >
            <h3 style={{ letterSpacing: "7px", textTransform: "uppercase" }}>
              {" "}
              Get Started
            </h3>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
