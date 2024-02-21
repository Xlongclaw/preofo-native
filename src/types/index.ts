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

type navigationDataType = {
  icon: any;
  iconSelected: any;
  title: string;
  goto: string;
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
type foodItemDataType = {
  name: string;
  goto: string;
  rating: Number;
  images: Array<any>;
  price: string;
  nonVeg: boolean;
  description: string;
};

export {
  offerDataType,
  cravingDataType,
  restaurantDataType,
  navigationDataType,
  foodItemDataType,
};
