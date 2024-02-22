import { View, Text } from "react-native";
import React from "react";
import { StatusBar } from "react-native";

export default function CartScreen() {
  return (
    <View style={{ paddingTop: StatusBar.currentHeight }}>
      <Text>CartScreen</Text>
    </View>
  );
}
