import { View, Text, ScrollView } from "react-native";
import React from "react";
import { FoodItemWrapper } from "@components/organisms";
import foodItemData from "constants/foodItemData";
import { DishType } from "@types";

export default function FoodItemContainer({dishes}:{dishes:Array<DishType>}) {
  return (
    <View className="flex-col ">
      {dishes.map((foodItem, i) => (
        <FoodItemWrapper foodItem={foodItem} key={`FOOD_ITEM_${i}`} />
      ))}
    </View>
  );
}
