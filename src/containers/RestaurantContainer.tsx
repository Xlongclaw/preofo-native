import { View, Text, ScrollView } from "react-native";
import React from "react";
import { RestaurantWrapper } from "@components/organisms";

export default function RestaurantContainer() {
  return (
    <View className="mr-2">
      <RestaurantWrapper />
      <RestaurantWrapper />
      <RestaurantWrapper />
    </View>
  );
}
