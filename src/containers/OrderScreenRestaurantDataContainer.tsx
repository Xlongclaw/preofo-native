import { View, Text, Image } from "react-native";
import React from "react";

export default function OrderScreenRestaurantDataContainer() {
  return (
    <View className="flex-row gap-2 ml-[1px] mt-0">
      <View className="flex-col justify-center items-start space-y-[4px] border border-color3 p-8 rounded-[35px] bg-color3/20">
        <Text className="text-lg font-semibold text-color2">Cafe Rouge</Text>
        <Text className="text-xs font-medium text-color2/50">
          French Cuisine • Italian • Fine dine
        </Text>
        <View className="flex-row space-x-2">
          <View className="flex-row gap-1 items-center">
            <Image
              className="h-4 w-4"
              source={require("../assets/images/time.png")}
            />
            <Text className="text-xs font-semibold text-color2/50">
              25 - 30 min
            </Text>
          </View>
        </View>
      </View>
      <View className=" bg-color2 flex-1 rounded-l-[35px] justify-center items-center pl-3">
        <Image
          className="h-8 w-8"
          source={require("../assets/images/dine.png")}
        />
        <View className="flex-row items-center gap-1 mt-[1px]">

        <Text className="text-color1 text-xs font-bold">DINE IN</Text>
        <Image
          className="h-2 w-2"
          source={require("../assets/images/caret-right-white.png")}
        />
        </View>
      </View>
    </View>
  );
}
