import React from "react";
import { Link } from "react-router-dom";

import MainNavigation from "../components/layout/MainNavigation";
import "./Login.css";

function LoginPage() {
  return (
    <div>
      <MainNavigation />
      <main>
        <div class="container">
          <div class="row row_style">
            <div class="col-xs-5 col-lg-offset-2">
              <div class="panel panel-primary">
                <div class="panel-heading">
                  <h2>LOGIN</h2>
                </div>
                <div class="panel-body">
                  <p class="text-warning">Login to make a purchase</p>
                  <form>
                    <div class="form-group">
                      <input
                        type="text"
                        placeholder="E-mail"
                        class="form-control"
                        name="E-mail"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="text"
                        placeholder="Password"
                        class="form-control"
                        name="Password"
                      />
                    </div>
                    <button class="btn btn-primary">Login</button>
                    <div>
                      Don't have an account?<Link to="/sign-up">Register</Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
