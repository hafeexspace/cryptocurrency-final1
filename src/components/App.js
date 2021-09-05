import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { SignUp } from "../pages/SignUp";
import { Login } from "../pages/Login";
import { Dashboard } from "../pages/Dashboard";
import { AuthProvider } from "../utils/Auth";
import { PrivateRoute } from "./PrivateRoute";

import "./App.css";

export default function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}
