import React from "react";
import "./Checkout.css";
import { Link } from "react-router-dom";

import MainNavigation from "../components/layout/MainNavigation";
function Checkout() {
  return (
    <div>
      <MainNavigation />
      <div class="jumbotron">
        <div class="jumbotron">
          <h2>Thank you for Shopping from Pure Feel Store</h2>
        </div>
        <img src="img/checked.png" height="70" width="70" alt="tick"></img>
      </div>
      <Link to="/Products">
        <button type="button" class="btn btn-light">
          Shop More
        </button>
      </Link>
      <br />
      <br />
      <Link to="/home">
        <button type="button" class="btn btn-info">
          Return to Home Page
        </button>
      </Link>
    </div>
  );
}
export default Checkout;
