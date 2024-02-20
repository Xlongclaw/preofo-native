import { View, Image, Dimensions } from "react-native";
import React from "react";
const dimensions = Dimensions.get("window");

export default function AdvertiseWrapperImageContainer() {
  return (
    <View className="flex-row justify-center w-[20rem] overflow-hidden">
      <Image
        style={{ width: dimensions.width - 16 }}
        resizeMode="contain"
        source={require("../../assets/images/adv.png")}
      />
    </View>
  );
}
