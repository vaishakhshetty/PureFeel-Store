import { Link } from "react-router-dom";

function Beverages() {
  return (
    <div class="col-xs-4 text-center">
      <div class="thumbnail">
        <Link to="/products">
          <img src="img/Beverages/Beverage.jpg" alt="Beverages" />
        </Link>
        <div class="caption">
          <h2>Beverages</h2>
          <p>Choose among the best available.</p>
        </div>
      </div>
    </div>
  );
}

export default Beverages;
