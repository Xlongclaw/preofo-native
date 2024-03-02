import { View, Text } from "react-native";
import React from "react";
import { RestaurantWrapperFetchedDataType, restaurantDataType } from "@types";
import RestaurantPreparationTimeContainer from "./RestaurantPreparationTimeContainer";
import Skeleton from "@components/atoms/Skeleton";

/**
 * This container displays the restaurant Details provided through
 * component props.
 *
 * @param restaurant contains a particular restaurant's data.
 * @returns a JSX element that displays Restaurant Details inside the RetaurantWrapper.
 */
export default function RestaurantWrapperDetailsContainer({
  restaurant,
}: {
  restaurant: RestaurantWrapperFetchedDataType;
}) {
  return (
    <View className=" flex-col ">
      <Text className="text-base font-bold">{restaurant.name}</Text>
      <View className="text-[10px] flex-row ">
        {restaurant.tags.map((tag, i) => (
          <Text className="font-bold text-color2/40 text-[11px]" key={i}>
            {tag}
            {restaurant.tags.length - 1 !== i && " • "}
          </Text>
        ))}
      </View>
      <RestaurantPreparationTimeContainer
        minprepTime={restaurant.minPrepTime}
        maxPrepTime={restaurant.maxPrepTime}
      />
    </View>
  );
}
