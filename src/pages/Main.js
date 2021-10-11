import { Link } from "react-router-dom";

function Main() {
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
                  <Link to="/">
                    <span class="about-us">Home</span>
                  </Link>
                </li>
                <li>
                  <Link to="/login">
                    <span class="contact-us">Contact Us</span>
                  </Link>
                </li>
                <li>
                  <Link to="/login">
                    <span class="about-us">Feedback</span>
                  </Link>
                </li>
                <li>
                  <Link to="/login">
                    <span class="about-us">About Us</span>
                  </Link>
                </li>
                <li>
                  <Link to="/sign-up">
                    <span class="sign-up">Sign-up</span>
                  </Link>
                </li>
                <li>
                  <Link to="/login" id="button-link">
                    <span class="">login</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <section class="banner-image">
          <div class="container">
            <div class="banner-content">
              <h1>We sell Pure natural products</h1>
              <p>Flat 40% OFF on all products</p>
              <Link to="/login" class="btn btn-danger btn-lg active">
                Shop Now
              </Link>
            </div>
          </div>
        </section>
        <section>
          <div class="container">
            <div class="padding-20"></div>
            <div class="row">
              <div class="col-xs-4 text-center">
                <div class="thumbnail">
                  <Link to="/login">
                    <img src="img/Beauty/Bath.jpg" alt="Beauty" />
                  </Link>
                  <div class="caption">
                    <h2>Bath & Beauty</h2>
                    <p>Original Beauty products from the best brands.</p>
                  </div>
                </div>
              </div>
              <div class="col-xs-4 text-center">
                <div class="thumbnail">
                  <Link to="/login">
                    <img src="img/Beverages/Beverage.jpg" alt="Beverages" />
                  </Link>
                  <div class="caption">
                    <h2>Beverages</h2>
                    <p>Choose among the best available.</p>
                  </div>
                </div>
              </div>
              <div class="col-xs-4 text-center">
                <div class="thumbnail">
                  <Link to="/login">
                    <img src="img/Food/Food.jpg" alt="Shirt" />
                  </Link>
                  <div class="caption">
                    <h2>Food</h2>
                    <p>Pure and healthy Food.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="padding-20"></div>
          </div>
        </section>
      </main>
      <footer>
        <div class="container">
          <center>Copyright © Pure Feel Store. All Rights Reserved</center>
        </div>
      </footer>
    </div>
  );
}

export default Main;
