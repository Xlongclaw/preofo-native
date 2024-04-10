import { View } from "react-native";
import React from "react";

export default function AdvPositionIndicator({
  index,
  size,
}: {
  index: number;
  size: number;
}) {
  return (
    <View className="flex-row justify-center items-center absolute right-6 bottom-7 bg-white py-1 px-1 rounded-2xl">
      {Array.from({ length: size }).map((x, i) => (
        <View
          key={`DOT_${i}`}
          className={` rounded-xl mx-1 ${
            index == i
              ? "w-[12px] h-[5px] bg-color6"
              : "w-[5px] h-[5px] bg-color3"
          } `}
        ></View>
      ))}
    </View>
  );
}
