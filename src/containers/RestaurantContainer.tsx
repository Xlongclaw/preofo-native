import { Text, View } from "react-native";
import React from "react";
import { RestaurantWrapper } from "@components/organisms";
import { useFetch } from "hooks";
import getAllRestaurants from "sanity/sanity-queries/getAllRestaurants";
import { restaurantDataType } from "@types";

/**
 * A container to display all the restaurants.
 * @returns a JSX element that displays all the restaurants.
 */
export default function RestaurantContainer() {
  /**
   * Fetching all Restaurants Data through AJAX Call to Sanity.
   */
  const { data, isLoading}: { data: Array<restaurantDataType>,isLoading:boolean } =
    useFetch({ method: "POST", type: "sanity", url: getAllRestaurants() });

  /**
   * Render only after Data is fetched else displaying Loading Skeletons.
   */
  if (!isLoading)
    return (
      <View className="mr-2 mb-32">
        {data.map((restaurant) => (
          /**
           * Rendering all restaurants through piping data from constant
           * restaurantData file into the RestaurantWrapper.
           * Here, The Key has to be replaced by Restaurant_ID coming from CMS.
           */
          <RestaurantWrapper isLoading={isLoading} key={restaurant._id} restaurant={restaurant} />
        ))}
      </View>
    );
  return <Text>Loading</Text>;
}
