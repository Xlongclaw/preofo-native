import { Dimensions, ScrollView, StatusBar, View } from "react-native";
import React from "react";
import { Logo, SectionHeading} from "@components/atoms";
import {
  CravingContainer,
  NavigationBar,
  OffersContainer,
  RestaurantContainer,
} from "@containers";
import { AdvertiseWrapper } from "@components/organisms";
const { height } = Dimensions.get("window");

/**
 * This component renders the home Page of the Application.
 * @returns a JSX element that render Home Screen
 */
export default function Home() {

  return (
    <View style={{ paddingTop: StatusBar.currentHeight }}>
      <ScrollView
        style={{ minHeight: height - StatusBar.currentHeight! }}
        showsVerticalScrollIndicator={false}
        className={`mt-0 pl-0`}
      >
        <Logo />
        <AdvertiseWrapper />

        {/* The Offer Section displays different offers for the user
        Uncomment the Below two line to add it to the HomeScreen */}

        {/* <SectionHeading heading="Offers just for you" /> */}
        {/* <OffersContainer /> */}

        {/* The Craving Section displays a list of different food items 
        giving use the choice to select what he want to eat the most
        Uncomment the Below two line to add it to the HomeScreen */}

        {/* <SectionHeading heading="What are you craving for?" /> */}
        {/* <CravingContainer /> */}

        <RestaurantContainer />
      </ScrollView>
      <NavigationBar />
    </View>
  );
}
