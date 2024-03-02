import { View } from "react-native";
import React from "react";
import Skeleton from "@components/atoms/Skeleton";

export default function RestaurantWrapperSkeleton() {
  return (
    <View className="p-[15px] border border-color3 rounded-[40px] mr-2 mb-4">
      <View className="mb-4">
        <Skeleton height={180} width={100} rounded={30} />
      </View>
      <View className="flex-row px-2 justify-between">
        <View className="flex-col w-[70%]">
          <Skeleton height={16} width={50} rounded={40} my={4} />
          <Skeleton height={10} width={90} rounded={40} my={3} />
          <Skeleton height={10} width={60} rounded={40} my={3} />
        </View>
        <View className="w-[25%] justify-end items-end">
          <Skeleton height={16} width={50} rounded={40} my={3} />
          <Skeleton height={11} width={80} rounded={40} my={3} />
          <Skeleton height={11} width={80} rounded={40} my={3} />
        </View>
      </View>
    </View>
  );
}
