import { View, Text } from "react-native";
import React from "react";
import { StatusBar } from "react-native";
import { RestaurantDataContainer, FoodItemContainer } from "@containers";
import { RestaurantHeader } from "@components/organisms";

export default function RestaurantScreen() {
  return (
    <View style={{ paddingTop: StatusBar.currentHeight }} className={`mr-2`}>
      <RestaurantHeader />
      <RestaurantDataContainer />
      <View className="h-[1px] w-full bg-color3/40 my-4"></View>
      <FoodItemContainer />
    </View>
  );
}
