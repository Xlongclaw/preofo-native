import { View, Text, Image } from "react-native";
import React from "react";
import { restaurantDataType } from "@types";
import Skeleton from "@components/atoms/Skeleton";

export default function RestaurantDataContainer({
  data,
  isLoading,
}: {
  name?: string;
  tags?: Array<string>;
  minPrepTime?: number;
  maxPrepTime?: number;
  rating?: number;
  data: restaurantDataType;
  isLoading: boolean;
}) {
  if (!isLoading)
    return (
      <View className="flex-col justify-center items-center space-y-[4px]">
        <Text className="text-xl font-semibold text-color2">{data.name}</Text>
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
  return (
    <View className="justify-center items-center">
      <Skeleton height={22} width={40} rounded={20} my={4} />
      <Skeleton height={15} width={60} rounded={20} my={4} />
      <Skeleton height={15} width={50} rounded={20} my={4} />
    </View>
  );
}
