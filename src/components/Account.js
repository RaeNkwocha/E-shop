import React, { useState } from "react";
import { useAuth } from "../Authetification/Authcontext";
// import "./Account.css";
import "../Componet Css/Account.css"
import Bottomnav from "./Bottomnav";

function Account() {
  const { currentUser } = useAuth();
  function handleClick(e) {
    e.preventDefault();
  }
  const [click, setClick] = useState(false);
  const [lists] = useState([
    {
      name: "Orders",
      id: 1,
    },
    {
      id: 2,
      name: "My Details",
    },
    {
      id: 3,
      name: "Delivery Address",
    },
    {
      id: 4,
      name: "Payment Methods",
    },
    {
      id: 5,
      name: "Promo Card",
    },
    {
      id: 6,
      name: "Notifications",
    },
    {
      id: 7,
      name: "Help",
    },
    {
      id: 8,
      name: "About",
    },
  ]);
  return (
    <div style={{ marginBottom: "200PX" }}>
      <div className="profile-flex">
        <div className="profile"></div>
        <div style={{ padding: "10px" }}>
          <strong>
            <div>Rae Nkwocha </div>
          </strong>
          {currentUser.email}
        </div>
      </div>
      <div className="content-line"></div>
      <section>
        {lists.map((list) => {
          return (
            <div key={list.id}>
              <div className="nav-flex">
                <div style={{ margin: "18px" }}>{list.name}</div>

                <i class="fa fa-chevron-right"></i>
              </div>

              <div className="content-line"></div>
            </div>
          );
        })}
      </section>
      <div
        style={{
          display: "flex",
          margin: "auto",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {" "}
        <form onSubmit={handleClick}>
          <button
            style={{
              color: "#53B175",
              marginTop: "50px",
              background: "#F2F3F2",
              outline: "none",
              border: "none",
              width: "364px",
              padding: "15px",
              borderRadius: "10px",
            }}
            onClick={handleClick}
          >
            Log Out
          </button>
        </form>
      </div>

      <Bottomnav></Bottomnav>
    </div>
  );
}

export default Account;
