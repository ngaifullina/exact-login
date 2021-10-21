import React from "react";
import { Login } from "./features/login/Login";
import { Profile } from "./features/profile/Profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route component={Login} path="/" />
          <Route exact component={Profile} path="/profile" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
