import { View, Text, StatusBar, Image, Dimensions } from "react-native";
import React from "react";
import { Logo } from "@components/atoms";
import { AdvertiseWrapper } from "@components/molecules";

export default function Home({
  navigation,
}: {
  navigation: { navigate: (routeName: string) => void };
}) {
  return (
    <View style={{ paddingTop: StatusBar.currentHeight }} className={`my-3`}>
      <Logo />

      <AdvertiseWrapper />
    </View>
  );
}
