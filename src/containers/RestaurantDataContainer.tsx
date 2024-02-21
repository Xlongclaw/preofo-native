import { View, Text, Image } from "react-native";
import React from "react";

export default function RestaurantDataContainer() {
  return (
    <View className="flex-col justify-center items-center space-y-[4px]">
      <Text className="text-xl font-semibold text-color2">Cafe Rouge</Text>
      <Text className="text font-medium text-color2/50">
        French Cuisine • Italian • Fine dine
      </Text>
      <View className="flex-row space-x-2">
        <View className="flex-row gap-1 items-center">
          <Image
            className="h-4 w-4"
            source={require("../assets/images/time.png")}
          />
          <Text className="text-sm font-semibold text-color2/50">
            25 - 30 min
          </Text>
        </View>

        <View className="flex-row gap-1">
          <Image
            className="h-4 w-4"
            source={require("../assets/images/star.png")}
          />
          <Text className="text-sm font-semibold text-color2">4.5</Text>
        </View>
      </View>
    </View>
  );
}
