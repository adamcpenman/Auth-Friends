import React from 'react';
import { Link, Route } from "react-router-dom";
import './App.css';
import Signin from "./Components/Signin";
import { getToken } from "./utils/api";

function App() {
  const signedIn = getToken();
  return (
    <div className="App">
     <h1>Friends</h1>

     <nav>
        <Link to="/">Home</Link>
        <Link to="signin">Sign In</Link>
        <Link to="friends">Friends</Link>
        <Link to="logout">Log Out</Link>
      </nav>

      <Route exact path="/signin" component={Signin} />
    </div>
  );
}

export default App;
