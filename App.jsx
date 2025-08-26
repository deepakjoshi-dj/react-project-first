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

const resObj = {
  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
  info: {
    id: "485370",
    name: "Big Bowl",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/22/deff0d02-ca1d-4ef9-9d62-b0cbeabf33d3_485370.JPG",
    locality: "Balkampet Road",
    areaName: "Ameerpet",
    costForTwo: "₹250 for two",
    cuisines: ["Chinese", "Tibetan", "Desserts"],
    avgRating: 4.3,
    parentId: "434792",
    avgRatingString: "4.3",
    totalRatingsString: "2.9K+",
    sla: {
      deliveryTime: 54,
      lastMileTravel: 3.9,
      serviceability: "SERVICEABLE",
      slaString: "50-60 mins",
      lastMileTravelString: "3.9 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-08-26 23:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹129",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  analytics: {
    context: "seo-data-db869f69-9384-4a14-97f3-446ff1ca7cb9",
  },
  cta: {
    link: "https://www.swiggy.com/city/hyderabad/big-bowl-balkampet-road-ameerpet-rest485370",
    text: "RESTAURANT_MENU",
    type: "WEBLINK",
  },
  widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
};

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
const RestaurantCard = (props) => {
  const { name, avgRatingString, cuisines, areaName, cloudinaryImageId } =
    props?.resObj?.info;
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
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
        />
      </div>
      <div>
        <h3>{name}</h3>
        <h4>{avgRatingString} rating</h4>
        <h4>{cuisines?.join(", ")}</h4>
        <h4>{areaName}</h4>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="main-body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard resObj={resObj} />
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
