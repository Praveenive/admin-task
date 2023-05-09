
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import './App.css';
import Animations from './Components/Animations';
import Borders from './Components/Borders';
import Buttons from './Components/Buttons';
import Cards from './Components/Cards';
import Charts from './Components/Charts';
import Colors from './Components/Colors';
import Dashboard from './Components/Dashboard';
import Others from './Components/Others';
import Tables from './Components/Tables';
import Blank from './Pages/Blank';
import Error from './Pages/Error';
import Forget from './Pages/Forget';
import Login from './Pages/Login';
import Register from './Pages/Register';

function App() {
  return (
    <div >
      <Switch>
        <Route exact path="/">
          <Dashboard/>
        </Route>
        <Route  path="/buttons">
          <Buttons/>
        </Route>
        <Route  path="/cards">
          <Cards/>
        </Route>
        <Route  path="/colors">
          <Colors/>
        </Route>
        <Route  path="/borders">
          <Borders/>
        </Route>
        <Route  path="/animations">
          <Animations/>
        </Route>
        <Route  path="/others">
          <Others/>
        </Route>
        <Route  path="/login">
          <Login/>
        </Route>
        <Route  path="/register">
          <Register/>
        </Route>
        <Route  path="/error">
          <Error/>
        </Route>
        <Route  path="/forget">
          <Forget/>
        </Route>
        <Route  path="/blank">
          <Blank/>
        </Route>
        <Route  path="/charts">
          <Charts/>
        </Route>
        <Route  path="/tables">
          <Tables/>
        </Route>

      </Switch>
      
      

    </div>
  );
}

export default App;
