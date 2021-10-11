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
            <Link to="/home" class="navbar-brand">
              Pure Feel
            </Link>
          </div>
          <div class="collapse navbar-collapse" id="mynavbar">
            <ul class="nav navbar-nav navbar-right">
              <li>
                <Link to="/home">
                  <span class="about-us">Home</span>
                </Link>
              </li>
              <li>
                <Link to="/Contact">
                  <span class="contact-us">Contact Us</span>
                </Link>
              </li>
              <li>
                <Link to="/Feedback">
                  <span class="about-us">Feedback</span>
                </Link>
              </li>
              <li>
                <Link to="/AboutUs">
                  <span class="about-us">About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/login">
                  <span class="glyphicon glyphicon-log-out"> Logout</span>
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
