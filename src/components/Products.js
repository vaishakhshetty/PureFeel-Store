import MainNavigation from "./layout/MainNavigation";

function Products() {
  return (
    <div>
      <MainNavigation />
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
            <div class="thumbnail">
              <img src="img/Food/Food4.jpg" alt="Natural Honey" />
              <div class="caption">
                <h3>
                  Natural Honey{" "}
                  <span class="badge bg-primary md-2">40% Off</span>
                </h3>
                <p>
                  <del>Rs.850</del> Rs.470
                </p>
                <button class="add-to-cart">Add to Cart</button>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="thumbnail">
              <img src="img/Food/Food1.jpg" alt="Gulkand" />
              <div class="caption">
                <h3>Gulkand</h3>
                <p>Rs.450</p>
                <button class="add-to-cart">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col-md-3 col-sm-6">
            <div class="thumbnail">
              <img src="img/Beverages/Beverage.jpg" alt="Sapote" />
              <div class="caption">
                <h3>Smoothie Mix Sapote</h3>
                <p>
                  <del>Rs.450</del> Rs.255
                </p>
                <button class="add-to-cart">Add to Cart</button>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="thumbnail">
              <img src="img/Beverages/Beverage6.jpg" alt="Juice" />
              <div class="caption">
                <h3>Giloy Amla Juice</h3>
                <p>Rs.200</p>
                <button class="add-to-cart">Add to Cart</button>
              </div>
            </div>
          </div>
          <div class="row text-center">
            <div class="col-md-3 col-sm-6">
              <div class="thumbnail">
                <img src="img/Beauty/Bath2.jpg" alt="Tree Skin care" />
                <div class="caption">
                  <h3>Tea tree skin care</h3>
                  <p>Rs.399</p>
                  <button class="add-to-cart">Add to Cart</button>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="thumbnail">
                <img src="img/Beauty/Bath7.jpg" alt="Fresh Oil" />
                <div class="caption">
                  <h3>Sow fresh Oil</h3>
                  <p>Rs.250</p>
                  <button class="add-to-cart">Add to Cart</button>
                </div>
              </div>
            </div>
            <div class="row text-center">
              <div class="col-md-3 col-sm-6">
                <div class="thumbnail">
                  <img src="img/Beauty/Bath5.jpg" alt="Honey Soap" />
                  <div class="caption">
                    <h3>
                      Honey Soap{" "}
                      <span class="badge bg-primary md-2">40% Off</span>
                    </h3>
                    <p>
                      <del>Rs.220</del> Rs.119
                    </p>
                    <button class="add-to-cart">Add to Cart</button>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-sm-6">
                <div class="thumbnail">
                  <img src="img/Beauty/Bath6.jpg" alt="error" />
                  <div class="caption">
                    <h3>Neem & Tulsi Soap</h3>
                    <p>Rs.300</p>
                    <button class="add-to-cart">Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="row text-center">
              <div class="col-md-3 col-sm-6">
                <div class="thumbnail">
                  <img src="img/Food/Food7.jpg" alt="Jowar Dalia" />
                  <div class="caption">
                    <h3>Jowar Dalia</h3>
                    <p>Rs.200</p>
                    <button class="add-to-cart">Add to Cart</button>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-sm-6">
                <div class="thumbnail">
                  <img src="img/Food/Food6.jpg" alt="Singhara Atta" />
                  <div class="caption">
                    <h3>Singhara Atta</h3>
                    <p>Rs.200</p>
                    <button class="add-to-cart">Add to Cart</button>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-sm-6">
                <div class="thumbnail">
                  <img src="img/Food/Food8.jpg " alt="Dal Khichadi" />
                  <div class="caption">
                    <h3>
                      Buransh Juice{" "}
                      <span class="badge bg-primary md-2">40% Off</span>
                    </h3>
                    <p>
                      <del>Rs.330</del> Rs.199
                    </p>
                    <button class="add-to-cart">Add to Cart</button>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-sm-6">
                <div class="thumbnail">
                  <img src="img/Beauty/Bath1.jpg" alt="Alovera Gel" />
                  <div class="caption">
                    <h3>Pure Alovera Gel</h3>
                    <p>Rs.499</p>
                    <button class="add-to-cart">Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="padding-20"></div>
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
