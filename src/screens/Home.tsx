import { ScrollView, StatusBar, View } from "react-native";
import React from "react";
import { Logo, SectionHeading, TextHeading } from "@components/atoms";
import { AdvertiseWrapper } from "@components/molecules";
import {
  CravingContainer,
  NavigationBar,
  OffersContainer,
  RestaurantContainer,
} from "@containers";
import { useFetch } from "hooks";
import { getAllCategories } from "sanity/sanity-queries";

/**
 * This component renders the home Page of the Application.
 * @returns a JSX element that render Home Screen
 */
export default function Home() {
  return (
    <View className="relative" style={{ paddingTop: StatusBar.currentHeight }}>
      <ScrollView showsVerticalScrollIndicator={false} className={`mt-0 pl-2`}>
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

        <TextHeading title="Our Restaurants" />
        <RestaurantContainer />
      </ScrollView>
      <NavigationBar />
    </View>
  );
}
