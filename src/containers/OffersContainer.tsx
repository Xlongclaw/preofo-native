import { View, Text, ScrollView } from "react-native";
import React from "react";
import { OffersWrapper } from "@components/organisms";
import { yourOfferData } from "../constants";

export default function OffersContainer() {
  return (
    <ScrollView showsHorizontalScrollIndicator={false} horizontal className="">
      {yourOfferData.map((offer, i) => (
        <OffersWrapper offer={offer} key={i} />
      ))}
    </ScrollView>
  );
}
