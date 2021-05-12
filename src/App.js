import logo from './logo.svg';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import './App.css';
import Splash from './Splash/Splash';
import Bottomnav from './Bottomnav';
import Explore from './Explore';
import Shop from './Splash/Shop';
import Itemdetail from './Itemdetail';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>

         <Route path="/" exact component={Splash}></Route>
         <Route path="/shop" exact  component={Shop}></Route>
         <Route path="/shop/:id/:name"   component={Itemdetail}></Route>
        <Route path="/explore" component={Explore}></Route>
   
      </Switch>
      <Bottomnav></Bottomnav>

      </Router>
    
    </div>
  );
}

export default App;
