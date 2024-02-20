import { View, Text, Image } from "react-native";
import React from "react";
import { RestaurantImageContainer } from "@components/molecules";
import { PositionIndicator } from "@components/atoms";
import { restaurantDataType } from "@types";

export default function RestaurantWrapper({
  restaurant,
}: {
  restaurant: restaurantDataType;
}) {
  return (
    <View className="border rounded-[40px] justify-center items-center p-[15px] border-color3 mx-0 mb-4">
      <RestaurantImageContainer image={restaurant.images[0].image} />
      <View className=" flex-row justify-between w-[100%] px-6 mt-4">
        <View className="flex-col ">
          <Text className="text-base font-bold">{restaurant.name}</Text>
          <View className="text-[10px] flex-row ">
            {restaurant.tags.map((tag, i) => (
              <Text className="font-bold text-color2/40 text-[11px]" key={i}>
                {tag}
                {restaurant.tags.length - 1 !== i && " • "}
              </Text>
            ))}
          </View>
          <View className="flex-row items-center space-x-1 mt-2">
            <Image
              className="w-[12px] h-[12px]"
              source={require("../../assets/images/time.png")}
            />
            <Text className="text-[11px] font-bold text-color2/40">
              {restaurant.prepTime}
            </Text>
          </View>
        </View>
        <View className="flex-col items-end space-y-0">
          <PositionIndicator />
          <View className=" flex-row items-center space-x-1 pt-6">
            <Image
              className="w-[12px] h-[12px] mb-1"
              source={require("../../assets/images/star.png")}
            />
            <Text className="text-xs font-semibold">{restaurant.rating}</Text>
          </View>
          <Text className="text-[10px] font-bold text-color2/40">
            {restaurant.reviews} Ratings
          </Text>
        </View>
      </View>
    </View>
  );
}
