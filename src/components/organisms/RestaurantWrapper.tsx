import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import React, { useState } from "react";
import { PositionIndicator } from "@components/atoms";
import { restaurantDataType } from "@types";
import ImageSlider from "./ImageSlider";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import OffersCard from "./OffersCard";
import RestaurantWrapperImageContainer from "./RestaurantWrapperImageContainer";

/**
 * This component displays the restaurant Details provided through
 * component props.
 *
 * @param restaurant contains a particular restaurant's data.
 * @returns a JSX element that displays Restaurant Data.
 */
export default function RestaurantWrapper({
  restaurant,
}: {
  restaurant: restaurantDataType;
}) {
  /**
   * currentImageIndex - It is a state variable that contains the
   * index of the dispalyed restaurant image.
   */
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  /**
   * This function replaces the value of the currentImageIndex
   * with the value of index passed as argument.
   * @param index - new value of currentImageIndex state variable.
   */
  const changeImageIndex = (index: number) => {
    setCurrentImageIndex(index);
  };

  /**
   * Accuiring to navigate to different Screens in the Navigation stack .
   */
  const navigation: NavigationProp<any> = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("RestaurantScreen")}
    >
      <View className="border rounded-[40px] py-[15px] items-center overflow-hidden border-color3 mx-0 mb-4">
        <RestaurantWrapperImageContainer
          controlImageIndex={changeImageIndex}
          restaurant={restaurant}
        />
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
