import { Text, View } from "react-native";
import React from "react";
import { RestaurantWrapper } from "@components/organisms";
import { useFetch } from "hooks";
import getAllRestaurants from "sanity/sanity-queries/getAllRestaurants";
import { restaurantDataType } from "@types";
import { getAllRestaurantIds } from "sanity/sanity-queries";

/**
 * A container to display all the restaurants.
 * @returns a JSX element that displays all the restaurants.
 */
export default function RestaurantContainer() {


  /**
   * Fetching Array of all restaurant IDs.
   */
  const { data, isLoading}: { data: Array<string>,isLoading:boolean } =
    useFetch({ method: "POST", type: "sanity", url: getAllRestaurantIds() });

  /**
   * Render only after Data is fetched else displaying Loading Skeletons.
   */
  if (!isLoading)
    return (
      <View className="mr-2 mb-28">
        {data.map((restaurantId) => (
          /**
           * Rendering all restaurants through piping data from constant
           * restaurantData file into the RestaurantWrapper.
           * Here, The Key has to be replaced by Restaurant_ID coming from CMS.
           */
          <RestaurantWrapper key={restaurantId} restaurantId={restaurantId} />
        ))}
      </View>
    );
  return <Text>Loading</Text>;
}
