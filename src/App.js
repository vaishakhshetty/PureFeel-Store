import { Route, Switch } from "react-router-dom";

import Main from "./pages/Main";
import "./App.css";
import Register from "./pages/Register";
import LoginPage from "./pages/Login";
import MainNavigation from "./components/layout/MainNavigation";
import Products from "./components/Products";
import Cart from "./components/Cart";
import data from "./Data";
import { useState } from "react";
import Checkout from "./components/Checkout";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";
import Feedback from "./components/Feedback";
import Home from "./pages/Home";

function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
    alert("Product added");
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
    alert("Product Removed");
  };
  return (
    <div className="App">
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/sign-up">
          <Register />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/products">
          <Products onAdd={onAdd} products={products} />
        </Route>
        <Route path="/cart">
          <Cart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/aboutus">
          <AboutUs />
        </Route>
        <Route path="/feedback">
          <Feedback />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
