import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React from "react";

export default function PromoCodeInputContainer() {
  return (
    <View className="flex-row my-4 mx-2 space-x-2">
      <View className="border border-color3 py-5 flex-1 rounded-[20px] px-4 flex-row items-center space-x-2 bg-color3/20">
      <Image
            className="w-[25px] h-[25px] ]"
            source={require("../assets/images/offer.png")}
          />
      <TextInput
        className="text-xs font-bold flex-1"
        placeholder="Do you have a Promo Code ?"
      />

      </View>
      <TouchableOpacity className=" bg-color2 items-center justify-center px-8 rounded-[20px]">
        <Text className="text-color1 font-semibold">Apply</Text>
      </TouchableOpacity>
    </View>
  );
}
