const withBestSellerLabel = (RestaurantMenuCard) => {
  return (props) => {
    return (
      <div>
        <div>Bestseller</div>
        <RestaurantMenuCard {...props} />
      </div>
    );
  };
};

export default withBestSellerLabel;
