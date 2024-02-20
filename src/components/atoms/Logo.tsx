import { View, Image } from "react-native";
import React from "react";

export default function Logo() {
  return (
    <View className="justify-center items-center">
      <Image
        className=" w-[64px] h-[64px]"
        source={require("../../assets/images/logo.png")}
      />
    </View>
  );
}
