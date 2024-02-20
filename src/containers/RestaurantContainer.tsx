import { View } from "react-native";
import React from "react";
import { RestaurantWrapper } from "@components/organisms";
import { restaurantData } from "../constants";

export default function RestaurantContainer() {
  return (
    <View className="mr-2 mb-12">
      {restaurantData.map((restaurant, i) => (
        <RestaurantWrapper key={i} restaurant={restaurant} />
      ))}
    </View>
  );
}
