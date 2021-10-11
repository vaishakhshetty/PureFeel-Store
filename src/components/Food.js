import { Link } from "react-router-dom";

function Food() {
  return (
    <div class="col-xs-4 text-center">
      <div class="thumbnail">
        <Link to="/products">
          <img src="img/Food/Food.jpg" alt="Shirt" />
        </Link>
        <div class="caption">
          <h2>Food</h2>
          <p>Pure and healthy Food.</p>
        </div>
      </div>
    </div>
  );
}

export default Food;
