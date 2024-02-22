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
  FoodItemContainer,
  RestaurantBottomNavigationStrip,
} from "@containers";
import { RestaurantHeader } from "@components/organisms";

export default function RestaurantScreen() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    let yOffset = event.nativeEvent.contentOffset.y / 1;
    setScrollPosition(yOffset);
  };
  return (
    <View
      style={{ paddingTop: StatusBar.currentHeight }}
      className={`mr-2 relative`}
    >
      <RestaurantHeader scrollPosition={scrollPosition} />
      <ScrollView
        onScroll={(event) => handleScroll(event)}
        showsVerticalScrollIndicator={false}
        className="mb-[173px]"
      >
        <RestaurantDataContainer />
        <View className="h-[1px] w-full bg-color3/40 my-4"></View>
        <FoodItemContainer />
      </ScrollView>
      <RestaurantBottomNavigationStrip />
    </View>
  );
}
