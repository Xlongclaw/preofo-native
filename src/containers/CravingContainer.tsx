import { View, Text, ScrollView } from "react-native";
import React from "react";
import { CravingWrapper } from "@components/molecules";
import { cravingData } from "../constants";

export default function CravingContainer() {
  return (
    <ScrollView showsHorizontalScrollIndicator={false} horizontal className="">
      {cravingData.map((data, i) => (
        <CravingWrapper data={data} key={i} />
      ))}
    </ScrollView>
  );
}
