import { View, Text, Image } from "react-native";
import React from "react";
import { RestaurantImageContainer } from "@components/molecules";
import { PositionIndicator } from "@components/atoms";

export default function RestaurantWrapper() {
  return (
    <View className="border rounded-[40px] justify-center items-center p-[15px] border-color3 mx-0 mb-4">
      <RestaurantImageContainer />
      <View className=" flex-row justify-between w-[100%] px-6 mt-4">
        <View className="flex-col ">
          <Text className="text-base font-bold">Cafe Rogue</Text>
          <Text className="text-[10px] font-bold text-color2/40">
            French Cuisine • Italian • Fine dine
          </Text>
          <View className="flex-row items-center space-x-1 mt-2">
            <Image
              className="w-[12px] h-[12px]"
              source={require("../../assets/images/time.png")}
            />
            <Text className="text-[10px] font-bold text-color2/40">
              25 - 30 min
            </Text>
          </View>
        </View>
        <View className="flex-col items-end space-y-0">
          <PositionIndicator />
          <View className=" flex-row items-center space-x-1 pt-6">
            <Image
              className="w-[12px] h-[12px] mb-1"
              source={require("../../assets/images/star.png")}
            />
            <Text className="text-xs font-semibold">4.9</Text>
          </View>
          <Text className="text-[10px] font-bold text-color2/40">
            2.7K Ratings
          </Text>
        </View>
      </View>
    </View>
  );
}
