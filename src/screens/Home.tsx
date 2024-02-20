import { ScrollView, StatusBar, Text, View } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { Logo, SectionHeading } from "@components/atoms";
import { AdvertiseWrapper } from "@components/molecules";
import {
  CravingContainer,
  OffersContainer,
  RestaurantContainer,
} from "@containers";

export default function Home({
  navigation,
}: {
  navigation: { navigate: (routeName: string) => void };
}) {
  return (
    <ScrollView
      style={{ paddingTop: StatusBar.currentHeight }}
      className={`mt-0 pl-2`}
    >
      <ExpoStatusBar backgroundColor="#f5f5f5" style="auto" />
      <Logo />
      <AdvertiseWrapper />
      <SectionHeading heading="Offers just for you" />
      <OffersContainer />
      <SectionHeading heading="What are you craving for?" />
      <CravingContainer />
      <Text className="text-base text-center mt-5 mb-3 mr-2 justify-center font-black text-color2/60">
        Our Restaurants
      </Text>
      <RestaurantContainer />
    </ScrollView>
  );
}
