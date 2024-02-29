import { View, Text, StatusBar } from "react-native";
import React from "react";
import OrderPlacedHeader from "@components/organisms/OrderPlacedHeader";
import { OrderSummary } from "@components/organisms";

export default function PlacedOrderScreen() {
  return (
    <View
      className="px-2"
      style={{ paddingTop: StatusBar.currentHeight }}
    >
      <OrderPlacedHeader/>
      <OrderSummary/>
    </View>
  );
}
