import { View, TouchableWithoutFeedback, Text } from "react-native";
import React, { useState } from "react";
import { PositionIndicator } from "@components/atoms";
import { RestaurantWrapperFetchedDataType, restaurantDataType } from "@types";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import RestaurantWrapperImageContainer from "./RestaurantWrapperImageContainer";
import {
  RestaurantWrapperDetailsContainer,
  RestaurantWrapperRatings,
} from "@components/molecules";
import Skeleton from "@components/atoms/Skeleton";
import { getAllRestaurants, getRestaurantById, getRestaurantWrapperDataById } from "sanity/sanity-queries";
import { useFetch } from "@hooks";
import { RestaurantWrapperSkeleton } from "@components/skeletons";

/**
 * This component displays the restaurant Details provided through
 * component props.
 *
 * @param restaurant contains a particular restaurant's data.
 * @returns a JSX element that displays Restaurant Data.
 */
export default function RestaurantWrapper({
  restaurantId,
}: {
  restaurantId: string;
}) {
  const {
    data,
    isLoading,
  }: { data: RestaurantWrapperFetchedDataType; isLoading: boolean } = useFetch({
    method: "POST",
    type: "sanity",
    url: getRestaurantWrapperDataById(restaurantId),
  });

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
   * Accuiring usNavigation from react-navigation to navigate to different Screens in the Navigation stack .
   */
  const navigation: NavigationProp<any> = useNavigation();
  if(!isLoading)
  return (
    <TouchableWithoutFeedback
      onPress={() =>
        navigation.navigate("RestaurantScreen", { restaurantId: restaurantId })
      }
    >
      <View className="border rounded-[40px] py-[15px] items-center overflow-hidden border-color3 mx-0 mb-4">
        <RestaurantWrapperImageContainer
            controlImageIndex={changeImageIndex}
            images={data.images}
          />
          
        {/* Bottom container of restaurant Wrapper */}
        <View className=" flex-row justify-between w-[100%] px-6 mt-4">

          {/* Left Bottom container of restaurant wrapper that displays NAME,
          TAGS, PREPARATION TIME for a particular Restaurant */}
            <RestaurantWrapperDetailsContainer restaurant={data} />

          {/* Right Bottom Container of the restaurant that displays POSITION_INDICATOR
          Rating of the restaurant and its Reviews */}
            <View className="flex-col items-end space-y-0">
              <PositionIndicator
                index={currentImageIndex}
                size={data.images.length}
              />
              <RestaurantWrapperRatings
                rating={data.rating}
                reviews={data.reviews}
              />
            </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
  return <RestaurantWrapperSkeleton/>;
}
