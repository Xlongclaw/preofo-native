import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import React from "react";

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
  _id:string
  name: string;
  goto: string;
  tags: Array<string>;
  minPrepTime: number;
  maxPrepTime: number;
  rating: number;
  reviews: string;
  images: Array<string>;
};

type restaurantDataType2 = {
  name: string;
  // goto: string;
  // tags: Array<string>;
  // prepTime: string;
  rating: number;
  reviews: string;
  images: Array<any>;
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
  restaurantDataType2
};
