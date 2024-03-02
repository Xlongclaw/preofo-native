import { View, TouchableWithoutFeedback, Text } from "react-native";
import React, { useState } from "react";
import { PositionIndicator } from "@components/atoms";
import { restaurantDataType } from "@types";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import RestaurantWrapperImageContainer from "./RestaurantWrapperImageContainer";
import {
  RestaurantWrapperDetailsContainer,
  RestaurantWrapperRatings,
} from "@components/molecules";
import Skeleton from "@components/atoms/Skeleton";
import { getAllRestaurants, getRestaurantById } from "sanity/sanity-queries";
import { useFetch } from "@hooks";

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
  }: { data: Array<restaurantDataType>; isLoading: boolean } = useFetch({
    method: "POST",
    type: "sanity",
    url: getRestaurantById(restaurantId),
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
  return (
    <TouchableWithoutFeedback
      onPress={() =>
        navigation.navigate("RestaurantScreen", { restaurantId: restaurantId })
      }
    >
      <View className="border rounded-[40px] py-[15px] items-center overflow-hidden border-color3 mx-0 mb-4">
        {isLoading ? (
          <Skeleton height={180} width={92} rounded={30} />
        ) : (
          <RestaurantWrapperImageContainer
            controlImageIndex={changeImageIndex}
            restaurant={data[0]}
          />
        )}
        {/* Bottom container of restaurant Wrapper */}
        <View className=" flex-row justify-between w-[100%] px-6 mt-4">
          {/* Left Bottom container of restaurant wrapper that displays NAME,
          TAGS, PREPARATION TIME for a particular Restaurant */}

          {isLoading ? (
            <View className="flex-col w-[70%]">
              <Skeleton height={16} width={50} rounded={40} my={4} />
              <Skeleton height={10} width={90} rounded={40} my={3} />
              <Skeleton height={10} width={60} rounded={40} my={3} />
            </View>
          ) : (
            <RestaurantWrapperDetailsContainer restaurant={data[0]} />
          )}

          {/* Right Bottom Container of the restaurant that displays POSITION_INDICATOR
          Rating of the restaurant and its Reviews */}
          {isLoading ? (
            <View className="w-[25%] items-end">
              <Skeleton height={16} width={50} rounded={40} my={3} />
              <Skeleton height={11} width={80} rounded={40} my={3} />
              <Skeleton height={11} width={80} rounded={40} my={3} />
            </View>
          ) : (
            <View className="flex-col items-end space-y-0">
              <PositionIndicator
                index={currentImageIndex}
                size={data[0].images.length}
              />
              <RestaurantWrapperRatings
                rating={data[0].rating}
                reviews={data[0].reviews}
              />
            </View>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
  return <Text>LODING</Text>;
}
