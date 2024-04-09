import { View, Text } from "react-native";
import React from "react";
import { RestaurantWrapperFetchedDataType } from "@types";
import RestaurantPreparationTimeContainer from "./RestaurantPreparationTimeContainer";

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
    <View className=" flex-col w-2/3">
      <Text className="text-xl font-bold">{restaurant.name}</Text>
      <View className=" flex-row flex-wrap">
        {restaurant.restaurantTags.map((tag, i) => (
          <Text className="font-bold text-color6 text-[13px]" key={i}>
            {i<3 && tag}
            {i<2 && restaurant.restaurantTags.length - 1 !== i && " • "}
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
