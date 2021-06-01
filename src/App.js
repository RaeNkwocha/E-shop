import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Splash from "./Splash/Splash";
import Explore from "./Explore";
import Cart from "./Cart";
// import meat from "./meat.png";
// import eggs from "./eggs.png";
// import ne from "./new.png";

import Shop from "./Splash/Shop";
import User from "./Itemdetail";
import { Context } from "./Context";
import Fav from "./Fav";
import Account from "./Account";
import Signup from "./Signup";
import { AuthProvider } from "./Authcontext";
import Login from "./Login";

function App() {
  // let user = [
  //   {
  //     name: "rae",
  //     id: 1,
  //     image: meat,
  //     price: "$10",
  //     description: "7pcs priceg",
  //   },
  //   {
  //     name: "Jade",
  //     id: 2,
  //     image: eggs,
  //     price: "$10",
  //     description: "7pcs priceg",
  //   },
  //   {
  //     name: "Girl",
  //     id: 3,
  //     image: ne,
  //     price: "$10",
  //     description: "7pcs priceg",
  //   },
  //   {
  //     name: "Boy",
  //     id: 4,
  //     price: "$10",
  //     description: "7pcs priceg",
  //   },
  // ];

  return (
    <div className="App">
      <Context>
        <Router>
          <Switch>
            <AuthProvider>
              <Route path="/" exact component={Splash}></Route>
              <Route path="/signup" exact component={Signup}></Route>
              <Route path="/login" component={Login}></Route>

              <Route path="/shop" component={Shop}></Route>
              <Route path="/user/:id/:price/:name/:description/">
                <User></User>
              </Route>
              <Route path="/cart" component={Cart}>
                {" "}
                <Cart></Cart>
              </Route>
              <Route path="/fav" component={Fav}>
                {" "}
                <Fav></Fav>
              </Route>
              <Route path="/account" component={Account}>
                {" "}
                <Account></Account>
              </Route>
              <Route path="/explore" component={Explore}></Route>
            </AuthProvider>
          </Switch>
        </Router>
      </Context>
    </div>
  );
}

export default App;
