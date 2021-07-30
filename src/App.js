import './App.css';
import Login from './container/Login/Login'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from './container/Dashboard/Dashboard';
import MoreInfo from './container/Moreinfo/Moreinfo';
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard">
          <Header/>
          <Dashboard/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/moreinfo">
          <Header/>
          <MoreInfo/>
        </Route>
        <Route path="/">
          <Login/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
