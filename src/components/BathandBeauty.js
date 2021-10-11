import { Link } from "react-router-dom";

function BathandBeauty(props) {
  return (
    <div class="col-xs-4 text-center">
      <div class="thumbnail">
        <Link to="/products">
          <img src="img/Beauty/Bath.jpg" alt="Beauty" />
        </Link>
        <div class="caption">
          <h2>{props.title}</h2>
          <p>Original Beauty products from the best brands.</p>
        </div>
      </div>
    </div>
  );
}

export default BathandBeauty;
