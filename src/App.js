import logo from './logo.svg';
import {BrowserRouter as Router,Link,Route,Switch} from "react-router-dom"
import './App.css';
import Splash from './Splash/Splash';
import Bottomnav from './Bottomnav';
import Explore from './Explore';
import meat from "./meat.png"
import eggs from "./eggs.png"
import ne from "./new.png"

import Shop from './Splash/Shop';
import Itemdetail from './Itemdetail';
import User from './Itemdetail';

function App() {
  let user= [
    {
        name:"rae",id:1,image:meat,price:"$10",description:"7pcs priceg"

    },
    {
        name:"Jade",id:2,image:eggs,price:"$10",description:"7pcs priceg"
    },
    {
        name:"Girl",id:3, image:ne,price:"$10",description:"7pcs priceg"
    },
    {
        name:"Boy",id:4,price:"$10",description:"7pcs priceg"
    },
  ]
  return (
    <div className="App">
      <Router>
      <Switch>

         <Route path="/" exact component={Splash}></Route>
         <Route path="/shop" exact  component={Shop}></Route>
         {/* <Route path="/user/:id/:price/:name/:description/"><User></User></Route> */}
        <Route path="/explore" component={Explore}></Route>
 
      </Switch>
      {/* {user.map((user)=>{
        return(
          <div ><Link to={"/user/"+user.id+"/"+user.price+"/"+user.name+"/"+user.description+"/"+user.image+"/"}>{user.name}</Link>

          </div>
        )
        
      })}
      <Route path="/user/:id/:price/:name/:description/:image"><User></User></Route> */}
      <Bottomnav></Bottomnav>

      </Router>
    
    </div>
  );
}

export default App;
