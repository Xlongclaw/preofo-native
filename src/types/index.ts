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
  foodCategories:Array<{category:string,dishes:Array<DishType>}>
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

type DishType = {
  _id:string,
  image:string,
  price:number,
  rating:number,
  name:string,
  prepTime:number;
  available:boolean,
  nonVeg:boolean
  description:string,
}

type RootStackParamList = {
  Home: undefined;
  RestaurantScreen: { restaurantId:string};
  RestaurantsScreen: undefined;
  SignIn: undefined;
  GetStarted: undefined;
  CartScreen: undefined;
  PlacedOrderScreen: undefined;
  ProfileScreen: undefined;
};

export {
  offerDataType,
  cravingDataType,
  restaurantDataType,
  navigationDataType,
  foodItemDataType,
  RootStackParamList,
  DishType
};
