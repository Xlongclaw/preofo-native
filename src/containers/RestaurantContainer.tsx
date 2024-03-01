import { Text, View } from "react-native";
import React from "react";
import { RestaurantWrapper } from "@components/organisms";
import { useFetch } from "hooks";
import getAllRestaurants from "sanity/sanity-queries/getAllRestaurants";
import { restaurantData } from "@constants";
import { restaurantDataType } from "@types";
// import { restaurantData } from "../constants";

/**
 * A container to display all the restaurants.
 * @returns a JSX element that displays all the restaurants.
 */
export default function RestaurantContainer() {
  const { data, isLoading, error } = useFetch({method:"POST",type:"sanity",url:getAllRestaurants()});
  console.log(data);
  if(!isLoading)
    return (
      <View className="mr-2 mb-32">
        {data.map((restaurant:restaurantDataType) => (
          /**
           * Rendering all restaurants through piping data from constant
           * restaurantData file into the RestaurantWrapper.
           * Here, The Key has to be replaced by Restaurant_ID coming from CMS.
           */
          <RestaurantWrapper key={restaurant._id} restaurant={restaurant} />
        ))}
      </View>
    );
    return <Text>Loading</Text>
}
