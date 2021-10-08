import { Link } from "react-router-dom";

function MainNavigation() {
  return (
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
                <Link to="/">
                  <span class="about-us">Home</span>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <span class="contact-us">Contact Us</span>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <span class="about-us">Feedback</span>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <span class="about-us">About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/sign-up">
                  <span class="">SignUp</span>
                </Link>
              </li>
              <li>
                <Link to="/login" id="button-link">
                  <span class="toggle-button"> Login</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default MainNavigation;
