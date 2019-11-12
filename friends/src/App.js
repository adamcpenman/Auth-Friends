import React from 'react';
import './App.css';

import { Link, Route, withRouter } from "react-router-dom";
import { getToken } from "./utils/api";

import Friends from "./Components/Friends";
import Home from "./Components/Home";
import Logout from "./Components/Logout";
import ProtectedRoute from "./Components/ProtectedRoute";
import Signin from "./Components/Signin";
import {Helmet} from "react-helmet";


function App() {
  const signedIn = getToken();
  return (
    <div className="App">
       <Helmet>
            <title>Authentication</title>
            <meta name="tokens, private routes, and authentication" content="tokens, private routes, and authentication" />
        </Helmet>

      <nav>
        <Link to="/">Home</Link>
        {!signedIn && <Link to="signin">Sign In</Link>}
        {signedIn && <Link to="friends">Friends</Link>}
        {signedIn && <Link to="logout">Log Out</Link>}
      </nav>

      <Route exact path="/" component={Home} />
      <Route exact path="/signin" component={Signin} />
      <ProtectedRoute exact path="/friends" component={Friends} />
      <ProtectedRoute exact path="/logout" component={Logout} />
    </div>
  );
}

export default withRouter(App);
