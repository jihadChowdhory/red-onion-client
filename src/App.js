import "./App.css";
import Home from "./components/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Shared/Login/Login";
import { createContext, useState } from "react";
import Menu from "./components/Menu/Menu";
import AddFood from "./components/Dashboard/AddFood/AddFood";
import AdminPanel from "./components/Dashboard/AdminPanel/AdminPanel";
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
          <Route path="/addfood">
            <AddFood></AddFood>
          </Route>
          <Route path="/adminpanel">
            <AdminPanel></AdminPanel>
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
