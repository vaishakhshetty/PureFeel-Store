import React from "react";
import MainNavigation from "../components/layout/MainNavigation";

function Register() {
  return (
    <div>
      <MainNavigation />
      <main>
        <div class="container">
          <div class="row row_style">
            <div class="col-xs-5 col-lg-offset-2">
              <form>
                <h2>SIGN UP</h2>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Name"
                    name="Name"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="e-mail"
                    class="form-control"
                    placeholder="E-mail"
                    name="E-mail"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    name="Password"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="contact"
                    class="form-control"
                    placeholder="Contact"
                    name="Contact"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="City"
                    name="City"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Address"
                    name="Address"
                  />
                </div>
                <button class="btn btn-primary">Submit</button>
                <div class="hint-text">
                  Already have an account? <a href="login.html">Login here</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Register;
