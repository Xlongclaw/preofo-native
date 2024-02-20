import { View, Text, Image } from "react-native";
import React from "react";

export default function SectionHeading({ heading }: { heading: string }) {
  return (
    <View className=" flex-row items-center justify-between">
      <Text className="text-base ml-8 mt-5 mb-3 font-black text-color2/60">
        {heading}
      </Text>
      <Image
        className="w-[20px] h-[15px] mt-1 mr-6"
        source={require("../../assets/images/arrow.png")}
      />
    </View>
  );
}
