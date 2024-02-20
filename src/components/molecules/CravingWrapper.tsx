import { View, Text, Image } from "react-native";
import React from "react";
import { cravingDataType } from "@types";

export default function CravingWrapper({ data }: { data: cravingDataType }) {
  return (
    <View className="border rounded-[25px] flex-col justify-center space-y-3 items-center border-color3 mx-1 py-3 px-7">
      <Image className="w-[50px] h-[50px]" source={data.image} />
      <Text className="text-xs font-semibold">{data.name}</Text>
    </View>
  );
}
