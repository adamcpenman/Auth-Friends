import React, { useState } from "react";
import { api } from "../utils/api";
import axios from "axios";

function Signin(props) {
const [error, setError] = useState()
  const [data, setData] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
      
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
     e.preventDefault()

     api()
        .post('/api/login', data)
        .then(result => {
            localStorage.setItem("token", result.data.token)
            console.log(result)
            props.history.push("/friends")
        })
        .catch(err => {
            setError(err.response.data)
        })
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
          {error && <div className="error">
          {error}
          </div>}
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={data.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={data.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
      
    </div>
  );
}

export default Signin;
