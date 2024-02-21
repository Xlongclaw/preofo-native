import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import React, { useState } from "react";
import { PositionIndicator } from "@components/atoms";
import { restaurantDataType } from "@types";
import ImageSlider from "./ImageSlider";
import { NavigationProp, useNavigation } from "@react-navigation/native";

export default function RestaurantWrapper({
  restaurant,
}: {
  restaurant: restaurantDataType;
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const changeImageIndex = (index: number) => {
    setCurrentImageIndex(index);
  };
  const navigation: NavigationProp<any> = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("RestaurantScreen")}
    >
      <View className="border rounded-[40px] py-[15px] items-center overflow-hidden border-color3 mx-0 mb-4">
        <View className="overflow-hidden w-[89vw] rounded-[27px] relative">
          <ImageSlider
            controlImageIndex={changeImageIndex}
            images={restaurant.images}
          />
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
            <PositionIndicator
              index={currentImageIndex}
              size={restaurant.images.length}
            />
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
    </TouchableWithoutFeedback>
  );
}
