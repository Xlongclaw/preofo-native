import { View, Text, ScrollView } from "react-native";
import React from "react";
import { OffersWrapper } from "@components/organisms";

export default function OffersContainer() {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      className="pt-6 "
    >
      <OffersWrapper />
      <OffersWrapper />
      <OffersWrapper />
      <OffersWrapper />
    </ScrollView>
  );
}
