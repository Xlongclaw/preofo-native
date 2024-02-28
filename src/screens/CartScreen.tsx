import { View } from "react-native";
import React from "react";
import { StatusBar } from "react-native";
import { OrderScreenHeader } from "@components/organisms";
import { OrderScreenRestaurantDataContainer } from "@containers";


export default function CartScreen() {
  return (
    <View style={{ paddingTop: StatusBar.currentHeight }}>
      <OrderScreenHeader/>
      <OrderScreenRestaurantDataContainer/>
    </View>
  );
}
