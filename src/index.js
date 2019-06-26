import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss";

import Index from "views/Index.jsx";
import Landing from "views/examples/Landing.jsx";
import Login from "views/examples/Login.jsx";
import Profile from "views/examples/Profile.jsx";
import Register from "views/examples/Register.jsx";
import Whatweone from "views/examples/whatwecanhelpme/Whatweone.jsx";
import Whatwetwo from "views/examples/whatwecanhelpme/Whatwetwo.jsx";
import Whatwethree from "views/examples/whatwecanhelpme/Whatwethree.jsx";
import Whatwefour from "views/examples/whatwecanhelpme/Whatwefour";
import Whatwefive from "views/examples/whatwecanhelpme/Whatwefive";
import Whatwesix from "views/examples/whatwecanhelpme/Whatwesix";


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={props => <Index {...props} />} />
      <Route
        path="/landing-page"
        exact
        render={props => <Landing {...props} />}
      />
      <Route path="/login-page" exact render={props => <Login {...props} />} />
      <Route
        path="/profile-page"
        exact
        render={props => <Profile {...props} />}
      />
      <Route
        path="/register-page"
        exact
        render={props => <Register {...props} />}
      />
      <Route
        path="/whatweone-page"
        exact
        render={props => <Whatweone {...props} />}
      />
      <Route
        path="/whatwetwo-page"
        exact
        render={props => <Whatwetwo {...props} />}
      />
      <Route
        path="/whatwethree-page"
        exact
        render={props => <Whatwethree {...props} />}
      />
      <Route
        path="/whatwefour-page"
        exact
        render={props => <Whatwefour {...props} />}
      />
      <Route
        path="/whatwefive-page"
        exact
        render={props => <Whatwefive {...props} />}
      />
      <Route
        path="/whatwesix-page"
        exact
        render={props => <Whatwesix {...props} />}
      />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
