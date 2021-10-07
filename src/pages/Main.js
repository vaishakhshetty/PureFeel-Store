import MainNavigation from "../components/layout/MainNavigation";

function Main() {
  return (
    <div>
      <MainNavigation />
      <main>
        <section class="banner-image">
          <div class="container">
            <div class="banner-content">
              <h1>We sell Pure natural products</h1>
              <p>Flat 40% OFF on all products</p>
              <a href="products.html" class="btn btn-danger btn-lg active">
                Shop Now
              </a>
            </div>
          </div>
        </section>
        <section>
          <div class="container">
            <div class="padding-20"></div>
            <div class="row">
              <div class="col-xs-4 text-center">
                <div class="thumbnail">
                  <a href="Bath&Beauty.html">
                    <img src="img/Beauty/Bath.jpg" alt="Beauty" />
                  </a>
                  <div class="caption">
                    <h2>Bath & Beauty</h2>
                    <p>Original Beauty products from the best brands.</p>
                  </div>
                </div>
              </div>
              <div class="col-xs-4 text-center">
                <div class="thumbnail">
                  <a href="Beverages.html">
                    <img src="img/Beverages/Beverage.jpg" alt="Beverages" />
                  </a>
                  <div class="caption">
                    <h2>Beverages</h2>
                    <p>Choose among the best available.</p>
                  </div>
                </div>
              </div>
              <div class="col-xs-4 text-center">
                <div class="thumbnail">
                  <a href="Food.html">
                    <img src="img/Food/Food.jpg" alt="Shirt" />
                  </a>
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
