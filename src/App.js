import { Route, Switch } from "react-router-dom";

import Main from "./pages/Main";
import "./App.css";
import Register from "./pages/Register";
import LoginPage from "./pages/Login";
import MainNavigation from "./components/layout/MainNavigation";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/sign-up">
          <Register />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
