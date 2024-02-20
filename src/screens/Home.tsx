import { Image, ScrollView, StatusBar, Text, View } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { Logo, SectionHeading } from "@components/atoms";
import { AdvertiseWrapper } from "@components/molecules";
import {
  CravingContainer,
  OffersContainer,
  RestaurantContainer,
} from "@containers";
import { ImageSlider } from "@components/organisms";
import { restaurantData } from "../constants";
import { GlassView } from "@metafic-co/react-native-glassmorphism";

export default function Home({
  navigation,
}: {
  navigation: { navigate: (routeName: string) => void };
}) {
  return (
    <View className="relative">
      <ScrollView
        showsVerticalScrollIndicator={false}
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
      <View className=" flex-row bg-color5 rounded-t-[36px] justify-end px-2 left-0 bottom-[94px] w-[100vw]">
        <View
          className=" shadow-2xl flex-row items-center justify-around w-full h-[70px]  
       bg-color5  border border-color3 rounded-[17px]"
        >
          <View className="flex-row items-center bg-color2 py-2 px-3 rounded-[10px] space-x-2">
            <Image
              className="w-[23px] h-[23px] "
              source={require("../assets/images/homelite.png")}
            />
            <Text className="text-xs mt-1 font-medium text-white">Home</Text>
          </View>
          <View className="flex-row items-center py-3 px-3 rounded-[20px] space-x-2">
            <Image
              className="w-[23px] h-[23px] "
              source={require("../assets/images/basket.png")}
            />
            <Text className="text-xs mt-1 font-medium text-color2">Basket</Text>
          </View>
          <View className="flex-row items-center py-3 px-3 rounded-[20px] space-x-2">
            <Image
              className="w-[23px] h-[23px] "
              source={require("../assets/images/profile3.png")}
            />
            <Text className="text-xs mt-1 font-medium text-color2">Me</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
