/**
 * Header
 *   - logo
 *   - links
 * Body
 *   - search
 *   - Restaurant Container
 *       - Restaurant Card (img, name of res, star rating, cuisines)
 * Footer
 *   - copyrights
 *   - Links
 *   - Address
 *   - contact
 *
 */

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-logo">
        <img
          alt="logo"
          height="100%"
          width="100%"
          // src="https://www.clipartmax.com/png/middle/111-1118804_android-food-delivery-apps.png"
          src="https://static.vecteezy.com/system/resources/previews/011/468/885/non_2x/food-logo-spoon-fork-icon-illustration-symbol-for-fast-delivery-app-restaurant-template-free-vector.jpg"
        />
      </div>
      <ul className="header-nav-items">
        <li className="header-nav-item">Home</li>
        <li className="header-nav-item">About Us</li>
        <li className="header-nav-item">Contact Us</li>
        <li className="header-nav-item">Cart</li>
      </ul>
    </div>
  );
};
const restaurantCardStyle = {
  width: "400px",
  backgroundColor: "gray",
  padding: "0.5rem",
};
const RestaurantCard = () => {
  return (
    <div
      style={{
        width: "400px",
        backgroundColor: "#eae8e8",
        padding: "0.8rem",
        borderRadius: "1rem",
        flexWrap: "wrap",
      }}
    >
      {console.log(restaurantCardStyle)}
      <div className="res-logo">
        <img
          alt="res-logo"
          height="100%"
          width="100%"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/f69eca71-5564-4248-8d45-91d8b4d42218_377795.JPG"
        />
      </div>
      <div>
        <h3>Chinese Wok</h3>
        <h4>4.3 rating</h4>
        <h4>Chinese, Asian, Tibetan, Dessert</h4>
        <h4>Madhapur</h4>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="main-body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
      <h1>Footer</h1>
    </div>
  );
};

export default AppLayout;
