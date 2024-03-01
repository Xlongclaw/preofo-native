import { View, Text, Image } from "react-native";
import React from "react";

/**
 * This component displays offers of a particular restaurant.
 * @returns component renders the odder Card floating over the image in restaurantWrapper.
 */
export default function OffersCard() {
  return (
    <View className="bg-color1 absolute h-[35px] right-4 bottom-4 rounded-full flex-row items-center px-2 space-x-2">
      <Image
        className="w-[16px] h-[16px]"
        source={require("@images/offer.png")}
      />
      <Text className="text-[10px] font-bold text-color2/80 mr-2">
        2 Offers
      </Text>
    </View>
  );
}
