import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
//import Admin from "./Admin"

const Login = ({ setLoginUser }) => {
  const history = useHistory();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    axios
      .post("http://localhost:9002/login", user)
      .then((res) => {
        alert(res.data.message);
        console.log(res.data);
        // setLoginUser(res.data)
        //new
        if (res.data) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("_id", res.data.user._id);
          localStorage.setItem("name", res.data.user.name);
          //localStorage.setItem('username', res.data.user.username)
          localStorage.setItem("email", res.data.user.email);
          localStorage.setItem("contact", res.data.user.contact);

          localStorage.setItem("city", res.data.user.city);
          localStorage.setItem("address", res.data.user.address);

          localStorage.setItem("role", res.data.user.role);
          localStorage.setItem("info", res.data.user.info);
          localStorage.setItem("__v", res.data.user.__v);

          if (res.data.user.__v === 0) {
            //console.log('userlogin')
            history.push("/home");
          } else history.push("/home");
        }
      })
      .catch((err) => {
        console.log(err);
        history.push("/home");
      });
  };

  return (
    <div>
      <header>
        <nav class="navbar navbar-inverse navbar-fixed-top">
          <div class="container">
            <div class="navbar-header">
              <button
                type="button"
                class="navbar-toggle"
                data-toggle="collapse"
                data-target="#mynavbar"
              >
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <Link to="/" class="navbar-brand">
                Pure Feel
              </Link>
            </div>
            <div class="collapse navbar-collapse" id="mynavbar">
              <ul class="nav navbar-nav navbar-right">
                <li>
                  <Link to="/sign-up" class="">
                    <span class="glyphicon glyphicon-user">SignUp</span>
                  </Link>
                </li>
                <li>
                  <Link to="/login" id="button-link">
                    <span class="">Login</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <div className="mainForm">
          <div class="container">
            <div class="row row_style">
              <div class="col-xs-5 col-lg-offset-2">
                <form>
                  <div className="loginMain">
                    <h1 className="heading">Login</h1>
                    <p>Login to make a purchase</p>
                    <input
                      type="text"
                      class="form-control"
                      name="email"
                      value={user.email}
                      onChange={handleChange}
                      placeholder="Enter your Email"
                    ></input>
                    <input
                      type="password"
                      class="form-control"
                      name="password"
                      value={user.password}
                      onChange={handleChange}
                      placeholder="Enter your Password"
                    ></input>
                    <div className="btn btn-primary" onClick={login}>
                      Login
                    </div>
                    <div class="hint-text">
                      Don't have an account? <Link to="/sign-up">Register</Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <div class="container">
          <center>Copyright © Pure Feel Store. All Rights Reserved</center>
        </div>
      </footer>
    </div>
  );
};

export default Login;
