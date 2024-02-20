import { View, Text, Image } from "react-native";
import React from "react";

export default function RestaurantImageContainer({ image }: { image: any }) {
  return (
    <View className="relative">
      <Image borderRadius={30} className="w-[88vw] h-[180px]" source={image} />
      <View className="bg-color1 absolute h-[35px] right-4 bottom-4 rounded-full flex-row items-center px-2 space-x-2">
        <Image
          className="w-[16px] h-[16px]"
          source={require("../../assets/images/offer.png")}
        />
        <Text className="text-[10px] font-bold text-color2/80 mr-2">
          2 Offers
        </Text>
      </View>
    </View>
  );
}
