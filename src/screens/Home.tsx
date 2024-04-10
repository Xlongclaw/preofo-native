import {
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Logo, SectionHeading } from "@components/atoms";
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
        <View className="flex-row items-center justify-between px-5 py-3 mb-0 bg-white shadow-b-2xl">
          {/* <Logo /> */}
          <View className=" flex-row items-center gap-3">
            <View>
              <Text className="text-black/80 text-lg font-semibold">
                Shivaji Nagar
              </Text>
              <View className="flex-row gap-2 items-center">
                <Text className="text-black/80 font-bold">Jhansi</Text>
                <Image
                  className=" w-[16px] h-[16px]"
                  source={require("@images/caretdown.png")}
                />
              </View>
            </View>
          </View>
          <View className="bg-color6/10 w-10 h-10 justify-center items-center rounded-full border-2 border-color6/10">
            <Text className="text-color6 text-lg font-semibold">M</Text>
          </View>
        </View>
      <ScrollView
        style={{ minHeight: height - StatusBar.currentHeight! }}
        showsVerticalScrollIndicator={false}
        className={`mt-0 pt-4 pl-0 bg-color1 flex-1`}
      >
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
