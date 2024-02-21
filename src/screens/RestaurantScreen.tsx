import { View, Text } from "react-native";
import React from "react";
import { StatusBar } from "react-native";
import { RestaurantDataContainer } from "@containers";
import { RestaurantHeader } from "@components/organisms";

export default function RestaurantScreen() {
  return (
    <View style={{ paddingTop: StatusBar.currentHeight }} className={``}>
      <RestaurantHeader />
      <RestaurantDataContainer />
    </View>
  );
}
