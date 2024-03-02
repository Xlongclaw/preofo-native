import { View, Text } from "react-native";
import React from "react";
import Skeleton from "@components/atoms/Skeleton";

export default function AdvertisementWrapperSkeleton() {
  return (
    <View className="mr-2 mt-4">
      <Skeleton width={100} height={160} rounded={20} />
      <View className="flex-row justify-center mt-4">
        <Skeleton width={4} height={5} rounded={40} mx={3} />
        <Skeleton width={2} height={5} rounded={40} mx={3} />
        <Skeleton width={2} height={5} rounded={40} mx={3}  />
        <Skeleton width={2} height={5} rounded={40} mx={3}  />
      </View>
    </View>
  );
}
