type offerDataType = {
  title: string;
  price: string;
  time: string;
  restaurant: string;
  image: any;
};

type cravingDataType = {
  image: any;
  goto: string;
  name: string;
};
type restaurantDataType = {
  name: string;
  goto: string;
  tags: Array<string>;
  prepTime: string;
  rating: string;
  reviews: string;
  images: Array<{ image: any }>;
};

export { offerDataType, cravingDataType, restaurantDataType };
