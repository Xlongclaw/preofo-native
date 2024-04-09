import { View, Text, Image } from "react-native";
import React from "react";

/**
 * This container displays the restaurant Reviews and ratings provided through
 * component props.
 *
 * @param reviews number of reviews of the restaurant.
 * @param rating rating of that restaurant
 * @returns a JSX element that displays Reviews and Rating inside the RetaurantWrapper.
 */
export default function RestaurantWrapperRatings({
  reviews,rating
}: {
  reviews: string;
  rating:number
}) {
  return (
    <View className="flex-col items-end">
      <View className=" flex-row items-center space-x-1 mt-6 ">
        <Image
          className="w-[12px] h-[12px] mb-1"
          source={require("@images/star.png")}
        />
        <Text className="text-sm  font-semibold">{rating}</Text>
      </View>
      <Text className="text-[12px] font-bold text-color2/40">
        {reviews} Ratings
      </Text>
    </View>
  );
}
