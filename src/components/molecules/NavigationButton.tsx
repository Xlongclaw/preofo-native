import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { navigationDataType } from "@types";
import { NavigationProp, useNavigation } from "@react-navigation/native";

export default function NavigationButton({
  selected,
  data,
}: {
  selected: boolean;
  data: navigationDataType;
}) {
  const navigation: NavigationProp<any> = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => navigation.navigate(data.goto)}
      className={`flex-row items-center justify-center w-1/2 ${
        selected ? "bg-color2" : "border border-color3/20"
      }
     py-3 rounded-[12px] ${selected ? "px-8" : "px-3"}  space-x-2`}
    >
      {selected ? (
        <Image className="w-[23px] h-[23px] " source={data.iconSelected} />
      ) : (
        <Image className="w-[23px] h-[23px] " source={data.icon} />
      )}

      <Text
        className={`text-sm font-semibold text-white ${
          selected ? "text-white" : "text-color2"
        }`}
      >
        {data.title}
      </Text>
    </TouchableOpacity>
  );
}
