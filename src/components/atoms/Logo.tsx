import { View, Image } from "react-native";
import React from "react";

export default function Logo() {
  return (
    <View className=" justify-center items-center h-[10%]">
      <Image
        className=" w-16 h-16"
        source={require("../../assets/images/logo.png")}
      />
    </View>
  );
}
