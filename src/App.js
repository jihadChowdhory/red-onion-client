import "./App.css";
import Home from "./components/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Shared/Login/Login";
import { createContext, useState } from "react";
import Menu from "./components/Menu/Menu";
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/menu">
            <Menu></Menu>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
