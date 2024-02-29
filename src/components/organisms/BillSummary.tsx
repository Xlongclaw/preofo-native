import { View, Text } from "react-native";
import React from "react";

export default function BillSummary() {
  return (
    <View className="border border-color3 mx-3 px-8 rounded-[25px]">
      <View className="flex-row justify-between border-b border-color3 py-5">
        <Text className="text-base font-bold text-color2/40">Subtotal</Text>
        <Text className="text-base font-bold text-color2/90">Rs. 999.97</Text>
      </View>
      <View className="flex-row justify-between border-b border-color3 py-5">
        <Text className="text-base font-bold text-color2/40">Delivery</Text>
        <Text className="text-base font-bold text-color2/90">Rs. 45.76</Text>
      </View>
      <View className="flex-row justify-between py-5">
        <Text className="text-base font-bold text-color2/40">Total</Text>
        <Text className="text-base font-bold text-color2/90 text-green-600">Rs. 1087.98</Text>
      </View>
    </View>
  );
}
