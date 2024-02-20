import { View, Image } from "react-native";
import React from "react";
import {
  AdvertiseWrapperImageContainer,
  PositionIndicator,
} from "@components/atoms";

export default function AdvertiseWrapper() {
  return (
    <View className="pr-2">
      <AdvertiseWrapperImageContainer />
      <PositionIndicator />
    </View>
  );
}
