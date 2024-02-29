import { ScrollView, View } from "react-native";
import React from "react";
import { StatusBar } from "react-native";
import { BillSummary, OrderScreenHeader } from "@components/organisms";
import {
  OrderItemContainer,
  OrderScreenRestaurantDataContainer,
  PaymentContainer,
  PromoCodeInputContainer,
} from "@containers";

export default function CartScreen() {
  return (
    <View className="relative" style={{ paddingTop: StatusBar.currentHeight }}>
      <OrderScreenHeader />
      <ScrollView showsVerticalScrollIndicator={false} className="mb-[160px  h-[77vh]">
        <OrderScreenRestaurantDataContainer />
        <OrderItemContainer />
        <PromoCodeInputContainer />
        <BillSummary />
      </ScrollView>
      <PaymentContainer/>
    </View>
  );
}
