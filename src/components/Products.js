import { Link } from "react-router-dom";
import ProductItems from "./ProductItems";

function Products(props) {
  const { products, onAdd } = props;
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
              <Link to="/home" class="navbar-brand">
                Pure Feel
              </Link>
            </div>
            <div class="collapse navbar-collapse" id="mynavbar">
              <ul class="nav navbar-nav navbar-right">
                <li>
                  <Link to="/cart">
                    <span class="glyphicon glyphicon-shopping-cart">Cart</span>
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
      <div class="jumbotron jumbotron_style">
        <h1>Welcome to our Lifestyle store!</h1>
        <p>
          <b>GET UPTO 40% OFF!</b> on our Best Selling Products..!
        </p>
      </div>

      <div class="padding-20"></div>
      <div class="container">
        <div class="row text-center">
          <div class="col-md-3 col-sm-6">
            {products.map((product) => (
              <ProductItems
                key={product.id}
                product={product}
                onAdd={onAdd}
              ></ProductItems>
            ))}
          </div>
        </div>
      </div>

      <footer>
        <div class="container">
          <center>Copyright © Pure Feel Store. All Rights Reserved</center>
        </div>
      </footer>
    </div>
  );
}

export default Products;
