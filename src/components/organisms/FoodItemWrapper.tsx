import { View, Text, Image } from "react-native";
import React from "react";
import ImageSlider from "./ImageSlider";
import { foodItemDataType } from "@types";

export default function FoodItemWrapper({
  foodItem,
}: {
  foodItem: foodItemDataType;
}) {
  return (
    <View className="border relative w-full rounded-[40px] flex-row justify-between items-center border-color3 mx-1 p-2 my-3">
      <View className="max-w-[50%] pl-4 space-y-1">
        <View className="flex-row gap-2">
          <Image
            className="w-[20px] h-[20px] ]"
            source={require("../../assets/images/veg.png")}
          />
          <View className="flex-row items-center space-x-[2px]">
            <Image
              className="w-[10px] h-[10px] "
              source={require("../../assets/images/star.png")}
            />
            <Image
              className="w-[10px] h-[10px] "
              source={require("../../assets/images/star.png")}
            />
            <Image
              className="w-[10px] h-[10px] "
              source={require("../../assets/images/star.png")}
            />
            <Image
              className="w-[10px] h-[10px] "
              source={require("../../assets/images/star.png")}
            />
            <Image
              className="w-[10px] h-[10px] "
              source={require("../../assets/images/star.png")}
            />
          </View>
        </View>
        <Text className="font-bold text-color2/90">{foodItem.name}</Text>
        <Text className="text-[11px] font-semibold text-color2/40">
          {foodItem.description}
        </Text>
        <Text className=" font-bold text-color2/90">₹{foodItem.price}</Text>
      </View>
      <View>
        {/* <ImageSlider images={} /> */}
        <Image
          className="w-[40vw] h-[150px] rounded-[35px]"
          source={foodItem.images[0]}
        />
      </View>
      <View className="w-full absolute flex-row justify-center items-center bottom-[-8%] ">
        <Text className="border px-6 py-2 text-xs bg-color1 border-color3 rounded-full font-bold">
          + Add
        </Text>
      </View>
    </View>
  );
}