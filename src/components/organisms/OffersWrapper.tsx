import { View, Text, Image } from "react-native";
import React from "react";
import { offerDataType } from "@types";

export default function OffersWrapper({ offer }: { offer: offerDataType }) {
  return (
    <View className="border rounded-[40px] flex-row justify-center items-center border-color3 mx-1 p-2">
      <View className="py-3 pl-6 pr-3">
        <Image className="w-[75px] h-[75px]" source={offer.image} />
      </View>
      <View className="w-[130px] mx-3">
        <Text className="font-black text-xs text-color2">{offer.title}</Text>
        <Text className="font-bold text-base mt-1 text-color2">
          Rs. {offer.price}
        </Text>
        <Text className="font-bold text-xs mt-0 text-color3">25 -30 min</Text>
      </View>
    </View>
  );
}
