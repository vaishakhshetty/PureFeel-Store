import { Link } from "react-router-dom";

function Cart(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const GST = itemsPrice * 0.12;
  const shippingPrice = itemsPrice > 1000 ? 0 : 50;
  const totalPrice = itemsPrice + GST + shippingPrice;
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
                  <Link to="/login">
                    <span class="glyphicon glyphicon-log-out"> Logout</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main className="container">
        <div>
          {cartItems.length === 0 && (
            <div className="jumbotron jumbroton_style">
              <h1>Cart Items</h1>
              <h4>Your Shopping Cart is empty</h4>
            </div>
          )}
        </div>
        {cartItems.map((item) => (
          <div key={item.id} className="jumbotron jumbotron_container">
            <div className="thumbnail">
              <img src={item.image} alt={item.name}></img>
            </div>
            <div className="caption">
              <h4>{item.name}</h4>
            </div>
            <div>
              <button onClick={() => onAdd(item)} className="add-to-cart">
                +
              </button>
              <button onClick={() => onRemove(item)} className="add-to-cart">
                -
              </button>
            </div>
            <div>
              <h5>
                {item.qty} x Rs {item.price.toFixed(2)}
              </h5>
            </div>
          </div>
        ))}
        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div class="container">
              <div>Items Price</div>
              <div>Rs{itemsPrice.toFixed(2)}</div>
              <br></br>
              <div>GST</div>
              <div>Rs{GST.toFixed(2)}</div>
              <br></br>
              <div>Shipping Price</div>
              <div>Rs{shippingPrice.toFixed(2)}</div>
              <br></br>
              <div>
                <strong>Total Amount</strong>
              </div>
              <div>
                <strong>Rs{totalPrice.toFixed(2)}</strong>
              </div>
              <br></br>
            </div>
          </>
        )}
        {cartItems.length !== 0 && (
          <Link to="/Checkout">
            <button class="add-to-cart container">Checkout</button>{" "}
          </Link>
        )}
      </main>
      <footer>
        <div class="container">
          <center>Copyright © Pure Feel Store. All Rights Reserved</center>
        </div>
      </footer>
    </div>
  );
}

export default Cart;
