import {
  View,
  Text,
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "react-native";
import {
  RestaurantDataContainer,
  RestaurantBottomNavigationStrip,
  FoodItemContainer,
} from "@containers";
import { RestaurantHeader } from "@components/organisms";
import { useFetch } from "hooks";
import { getRestaurantById } from "sanity/sanity-queries";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList, restaurantDataType } from "@types";

export default function RestaurantScreen() {
  /**
   * scrollPosition - state Variable stores the store position of Food item Container
   */
  const [scrollPosition, setScrollPosition] = useState(0);

  /**
   * Grabbing the Navigigation params sent from restaurantWrapper
   * Contains the restaurantId required for fetching Restaurant Data.
   */
  const { params } =
    useRoute<RouteProp<RootStackParamList, "RestaurantScreen">>();

  /**
   * Fetching Restaurant Data through Sanity.
   */
  const { data, isLoading }: { data: restaurantDataType; isLoading: boolean } =
    useFetch({
      method: "POST",
      type: "sanity",
      url: getRestaurantById(params.restaurantId),
    });

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    let yOffset = event.nativeEvent.contentOffset.y / 1;
    setScrollPosition(yOffset);
  };

    return (
      <View style={{ paddingTop: StatusBar.currentHeight }} className={`mr-2`}>
        <RestaurantHeader data={data} isLoading={isLoading} scrollPosition={scrollPosition} />
        <ScrollView
          onScroll={(event) => handleScroll(event)}
          showsVerticalScrollIndicator={false}
          className="max-h-[78vh]"
        >
          <RestaurantDataContainer isLoading={isLoading} data={data} />
          <View className="h-[1px] w-full bg-color3/40 mt-4"></View>
          <FoodItemContainer isLoading={isLoading} data={data} />
        </ScrollView>
        <RestaurantBottomNavigationStrip />
      </View>
    );
}
