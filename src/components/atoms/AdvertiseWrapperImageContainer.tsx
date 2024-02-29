import { Image } from "react-native";
import React from "react";

/**
 * @returns returns the restaurant Advertisement Image
 */
export default function AdvertiseWrapperImageContainer() {
  return (
    <Image
      className="w-full h-32 my-3 rounded-3xl overflow-hidden"
      source={require("../../assets/images/adv1.png")}
    />
  );
}
