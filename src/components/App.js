import React from "react";
import AuthProvider from "../contexts/AuthContext";
import SignUp from "./SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashBoard from "./DashBoard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import Storage from "./Storage";
import Home from "./Home";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/storage" component={Storage} />
          <Route path="/dashboard" component={DashBoard} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
