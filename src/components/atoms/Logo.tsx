import { View, Image } from "react-native";
import React from "react";

/**
 * Renders the logo image of the application.
 * @returns LOGO of the application
 */
export default function Logo() {
  return (
    <View className="justify-center items-center">
      <Image
        className=" w-[64px] h-[64px]"
        source={require("@images/logo.png")}
      />
    </View>
  );
}
