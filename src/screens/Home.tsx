import { View, StatusBar } from "react-native";
import React from "react";
import { Logo, SectionHeading } from "@components/atoms";
import { AdvertiseWrapper } from "@components/molecules";
import { OffersContainer } from "@containers";

export default function Home({
  navigation,
}: {
  navigation: { navigate: (routeName: string) => void };
}) {
  return (
    <View
      style={{ paddingTop: StatusBar.currentHeight }}
      className={`my-3 px-3`}
    >
      <Logo />
      <AdvertiseWrapper />
      <SectionHeading heading="Offers just for you" />
      <OffersContainer />
    </View>
  );
}
