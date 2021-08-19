import './App.css';
import {Switch,Route} from "react-router-dom";
import Home from './pages/Home';
import Adduser from './pages/Adduser';
import Edituser from './pages/Edituser';

function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/adduser" component={Adduser}/>
      <Route exact path="/edituser/:id" component={Edituser}/>
    </Switch>
    </div>
  );
}

export default App;
