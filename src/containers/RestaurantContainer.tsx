import { View } from "react-native";
import React from "react";
import { RestaurantWrapper } from "@components/organisms";
import { restaurantData } from "../constants";

/**
 * A container to display all the restaurants.
 * @returns a JSX element that displays all the restaurants.
 */
export default function RestaurantContainer() {
  return (
    <View className="mr-2 mb-32">
      {restaurantData.map((restaurant, i) => (

        /**
         * Rendering all restaurants through piping data from constant 
         * restaurantData file into the RestaurantWrapper.
         * Here, The Key has to be replaced by Restaurant_ID coming from CMS.
         */
        <RestaurantWrapper key={i} restaurant={restaurant} />
      ))}
    </View>
  );
}
