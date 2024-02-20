import { View, StatusBar } from "react-native";
import React from "react";
import { Logo, SectionHeading } from "@components/atoms";
import { AdvertiseWrapper } from "@components/molecules";
import { CravingContainer, OffersContainer } from "@containers";

export default function Home({
  navigation,
}: {
  navigation: { navigate: (routeName: string) => void };
}) {
  return (
    <View
      style={{ paddingTop: StatusBar.currentHeight }}
      className={`mt-0 pl-2`}
    >
      <Logo />
      <AdvertiseWrapper />
      <SectionHeading heading="Offers just for you" />
      <OffersContainer />
      <SectionHeading heading="What are you craving for?" />
      <CravingContainer />
      <SectionHeading heading="Popular restaurants around you" />
    </View>
  );
}
