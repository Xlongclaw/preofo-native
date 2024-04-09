import { View } from "react-native";
import React from "react";

export default function PositionIndicator({
  index,
  size,
}: {
  index: number;
  size: number;
}) {
  return (
    <View className="flex-row justify-center gap-2">
      {Array.from({ length: size }).map((x, i) => (
        <View
          key={`DOT_${i}`}
          className={` rounded-xl ${
            index == i
              ? "w-[12px] h-[5px] bg-color6"
              : "w-[5px] h-[5px] bg-color3"
          } `}
        ></View>
      ))}
    </View>
  );
}
