import { View, Text, ScrollView } from "react-native";
import React from "react";
import { StatusBar } from "react-native";
import {
  RestaurantDataContainer,
  FoodItemContainer,
  RestaurantBottomNavigationStrip,
} from "@containers";
import { RestaurantHeader } from "@components/organisms";

export default function RestaurantScreen() {
  return (
    <View
      style={{ paddingTop: StatusBar.currentHeight }}
      className={`mr-2 relative`}
    >
      <RestaurantHeader />
      <ScrollView showsVerticalScrollIndicator={false} className="mb-[173px]">
        <RestaurantDataContainer />
        <View className="h-[1px] w-full bg-color3/40 my-4"></View>
        <FoodItemContainer />
      </ScrollView>
      <RestaurantBottomNavigationStrip />
    </View>
  );
}
