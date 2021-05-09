import logo from './logo.svg';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import './App.css';
import Splash from './Splash/Splash';
import Bottomnav from './Bottomnav';
import Explore from './Explore';
import Shop from './Splash/Shop';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>

         <Route path="/" exact component={Splash}></Route>
         <Route path="/shop"  component={Shop}></Route>
        <Route path="/explore" component={Explore}></Route>
   
      </Switch>
      <Bottomnav></Bottomnav>

      </Router>
    
    </div>
  );
}

export default App;
