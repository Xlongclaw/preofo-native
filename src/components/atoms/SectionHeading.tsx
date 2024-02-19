import { View, Text } from "react-native";
import React from "react";

export default function SectionHeading({ heading }: { heading: string }) {
  return (
    <View className=" flex-row">
      <Text className="text-lg ml-4 mt-5 font-bold text-color2">{heading}</Text>
    </View>
  );
}
