import { Link } from "react-router-dom";
import MainNavigation from "../components/layout/MainNavigation";
import BathandBeauty from "../components/BathandBeauty";
import Beverages from "../components/Beverages";
import Food from "../components/Food";

function Home() {
  return (
    <div>
      <MainNavigation />
      <main>
        <section class="banner-image">
          <div class="container">
            <div class="banner-content">
              <h1>We sell Pure natural products</h1>
              <p>Flat 40% OFF on all products</p>
              <Link to="/products" class="btn btn-danger btn-lg active">
                Shop Now
              </Link>
            </div>
          </div>
        </section>
        <section>
          <div class="container">
            <div class="padding-20"></div>
            <div class="row">
              <BathandBeauty title="Bath and Beauty" />
              <Beverages />
              <Food />
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

export default Home;
