import React, { useState } from "react";
import { api } from "../utils/api";

function Signin(props) {
  const [isLoading, setIsLoading] = useState(false)
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
    setIsLoading(true)
    api()
      .post('/api/login', data)
      .then(result => {
        localStorage.setItem("token", result.data.payload)
        console.log(result)
        props.history.push("/friends")
      })
      .catch(err => {
        setError(err.response.data)
      })
  }

  // setTimeout(isLoading, 2000)

  return (
    <div>
      <section className='log-in'>
        
        {isLoading ? (
          <div className="spinner"><h2>Loading Data...</h2></div>
        ) : (
            null
          )}
        <form onSubmit={handleSubmit}>
          {error && <div className="error">
            {error}
          </div>}
          <div className="signInForm">
            <div className="signinCard">
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
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Signin;
