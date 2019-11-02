import React from 'react';
import { Link, Route, withRouter} from "react-router-dom";
import './App.css';
import Signin from "./Components/Signin";
import Friends from "./Components/Friends";
import ProtectedRoute from "./Components/ProtectedRoute";
import { getToken } from "./utils/api";

function App() {
  const signedIn = getToken();
  return (
    <div className="App">
     <h1>Friends</h1>

     <nav>
        <Link to="/">Home</Link>
        {!signedIn &&<Link to="signin">Sign In</Link>}
        {signedIn &&<Link to="friends">Friends</Link>}
        {signedIn &&<Link to="logout">Log Out</Link>}
      </nav>

      <Route exact path="/signin" component={Signin} />
      <ProtectedRoute exact path="/friends" component={Friends}/>
    </div>
  );
}

export default withRouter(App);
