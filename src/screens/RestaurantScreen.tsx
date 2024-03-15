import {
  View,
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

import { RootStackParamList } from "@types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
type NavigationProps = NativeStackScreenProps<
  RootStackParamList,
  "RestaurantScreen"
>;

export default function RestaurantScreen({
  navigation,
  route,
}: NavigationProps) {
  /**
   * scrollPosition - state Variable stores the store position of Food item Container
   */
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    let yOffset = event.nativeEvent.contentOffset.y / 1;
    setScrollPosition(yOffset);
  };

  return (
    <View style={{ paddingTop: StatusBar.currentHeight }} className={`mr-2`}>
      <RestaurantHeader
        data={route.params.restaurant}
        scrollPosition={scrollPosition}
      />
      <ScrollView
        onScroll={(event) => handleScroll(event)}
        showsVerticalScrollIndicator={false}
        className="max-h-[78vh]"
      >
        <RestaurantDataContainer data={route.params.restaurant} />
        <View className="h-[1px] w-full bg-color3/40 mt-4"></View>
        <FoodItemContainer data={route.params.restaurant} />
      </ScrollView>
      <RestaurantBottomNavigationStrip restaurant={route.params.restaurant} />
    </View>
  );
}
