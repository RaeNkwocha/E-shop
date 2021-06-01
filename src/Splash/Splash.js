import React, { useEffect, useState } from "react";
import group from "./Group 1.png";
import Home from "./Home";
import "./splash.css";

function Splash() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div>
      {loading ? (
        <div style={{ background: "#53B175", height: "100vh" }}>
          <div
            style={{
              display: "flex",
              margin: "auto",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "40vh",
            }}
          >
            <img alt="" src={group}></img>
          </div>
        </div>
      ) : (
        <Home></Home>
      )}
    </div>
  );
}

export default Splash;
