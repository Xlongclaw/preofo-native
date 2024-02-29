import { View, Text } from "react-native";
import React from "react";
import { Image } from "react-native";

export default function OrderSummary() {
  return (
    <View>
      <Text className="ml-4 text-base font-semibold text-color2/70">
        Order Summary
      </Text>
      <View className="border border-color3 rounded-3xl px-6 flex-col mt-3">
        <View className="flex-row items-center justify-between border-b border-color3 py-4">
        <View className="flex-row space-x-4 items-center">

        <Image
          className=" h-4 w-4"
          source={require("../../assets/images/veg.png")}
        />
        <View>
          <Text className="font-semibold text-color2/90">Super jumbo extra cheese Burger</Text>
          <Text className="font-bold text-color2/90">₹297</Text>
        </View>
        </View>
        <View className="items-end">
          <Text>x3</Text>
          <Text className="font-bold text-color2/90">₹297</Text>
        </View>

        </View>
        <View className="flex-row items-center justify-between border-b border-color3 py-4">
        <View className="flex-row space-x-4 items-center">

        <Image
          className="rotate-180 h-4 w-4"
          source={require("../../assets/images/veg.png")}
        />
        <View>
          <Text className="font-semibold text-color2/90">Super jumbo extra cheese Burger</Text>
          <Text className="font-bold text-color2/90">₹297</Text>
        </View>
        </View>
        <View className="items-end">
          <Text>x3</Text>
          <Text className="font-bold text-color2/90">₹297</Text>
        </View>

        </View>
        <View className="flex-row items-center justify-between border-color3 py-4">
        <View className="flex-row space-x-4 items-center">

        <Image
          className="rotate-180 h-4 w-4"
          source={require("../../assets/images/veg.png")}
        />
        <View>
          <Text className="font-semibold text-color2/90">Super jumbo extra cheese Burger</Text>
          <Text className="font-bold text-color2/90">₹297</Text>
        </View>
        </View>
        <View className="items-end">
          <Text>x3</Text>
          <Text className="font-bold text-color2/90">₹297</Text>
        </View>

        </View>
      
      </View>
    </View>
  );
}
