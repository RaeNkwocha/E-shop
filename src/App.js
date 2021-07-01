import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Splash from "./Splash/Splash";


import Shop from "./Splash/Shop";
// import User from "./Itemdetail";
import {Context} from "./Context/Context"

import Login from "./Authetification/Login"
import Signup from "./Authetification/Signup"
import {AuthProvider} from "./Authetification/Authcontext"
import Cart from "./components/Cart";
import Fav from "./components/Fav";
import Account from "./components/Account";
import Explore from "./components/Explore";


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
              {/* <Route path="/user/:id/:price/:name/:description/">
                <User></User>
              </Route> */}
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
