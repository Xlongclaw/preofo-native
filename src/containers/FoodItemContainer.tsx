import { View, Text } from "react-native";
import React from "react";
import { FoodItemWrapper } from "@components/organisms";
import foodItemData from "constants/foodItemData";

export default function FoodItemContainer() {
  return (
    <View className="flex-col ">
      {foodItemData.map((foodItem, i) => (
        <FoodItemWrapper foodItem={foodItem} key={`FOOD_ITEM_${i}`} />
      ))}
    </View>
  );
}
