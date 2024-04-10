import { Image, Text, View } from "react-native";
import React from "react";
import { RestaurantWrapper } from "@components/organisms";
import { useFetch } from "@hooks";
import { TextHeading } from "@components/atoms";
import { RestaurantWrapperSkeleton } from "@components/skeletons";
import fetchAllRestaurantIds from "utils/fetchAllRestaurantIds";

/**
 * A container to display all the restaurants.
 * @returns a JSX element that displays all the restaurants.
 */
export default function RestaurantContainer() {
  const [restautantIds, setRestaurantIds] = React.useState<[{ _id: string }]>();

  React.useEffect(() => {
    fetchAllRestaurantIds().then((res) => {
      setRestaurantIds(res.data);
    });
  }, []);

  /**
   * Render only after Data is fetched else displaying Loading Skeletons.
   */
  if (restautantIds)
    return (
      <View className="mr-2 ml-2 mb-28">
        <View className="flex-row items-center justify-between ml-3 mr-4 mb-2">
          <TextHeading
            title="RESTAURANTS"
            subtitle="Top Quality food just one click away."
          />
          <View className="gap-1 items-end" >
            <View className="bg-color2 w-6 h-[3px]"></View>
            <View className="bg-color2 w-6 h-[3px]"></View>
            <View className="bg-color2 w-3 h-[3px]"></View>
          </View>
        </View>
        {restautantIds.map((restaurantId) => (
          /**
           * Rendering all restaurants through sending restaurantIds to Restaurant Wrappers
           */
          <RestaurantWrapper
            key={restaurantId._id}
            restaurantId={restaurantId._id}
          />
        ))}
        {/* <>
          <RestaurantWrapperSkeleton />
          <RestaurantWrapperSkeleton />
        </> */}
      </View>
    );
  else return <Text>LOADING</Text>;
}
