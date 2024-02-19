import { View, Text } from "react-native";
import React from "react";

export default function PositionIndicator() {
  return (
    <View className="flex-row justify-center gap-2">
      <View className="bg-color2 rounded-xl w-[12px] h-[5px]"></View>
      <View className="bg-color3 rounded-xl w-[5px] h-[5px]"></View>
      <View className="bg-color3 rounded-xl w-[5px] h-[5px]"></View>
      <View className="bg-color3 rounded-xl w-[5px] h-[5px]"></View>
    </View>
  );
}
