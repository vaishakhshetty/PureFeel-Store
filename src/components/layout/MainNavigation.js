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
                <a href="contact.html">
                  <span class="contact-us">Contact Us</span>
                </a>
              </li>
              <li>
                <a href="index.html">
                  <span class="about-us">Feedback</span>
                </a>
              </li>
              <li>
                <a href="index.html">
                  <span class="about-us">About Us</span>
                </a>
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
