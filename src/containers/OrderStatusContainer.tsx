import { View, Text, Image } from "react-native";
import React from "react";

export default function OrderStatusContainer() {
  return (
    <View className="bg-color2 rounded-[30px] p-8 mt-3">
      <Text className="text-color1  text-2xl font-semibold">
        Preparing Your Order
      </Text>
      <View className="flex-row gap-1">
        <Text className=" text-xs font-semibold text-color1/70">
          Prepared between
        </Text>
        <Text className="text-color1 text-xs font-bold">10:30 - 10:35</Text>
      </View>

      <View className="mt-8 space-y-8">
        <View className="flex-row items-center space-x-10">
          <View className="bg-color1 p-3 rounded-full">
            <Image
              className="w-5 h-5"
              source={require("../assets/images/bill.png")}
            />
          </View>
          <View className="mr-10 space-y-1">
            <Text className="text-color1 text-base font-bold">Order placed</Text>
            <Text className="text-color1 text-xs font-bold text-color1/80">“ Your Order with Order ID GAGSKJGK6870 was placed Successfully at 6:03 am, 27 Feb, 2024 “</Text>
          </View>
        </View>
        <View className="flex-row items-center space-x-10">
          <View className="bg-color1 p-3 rounded-full">
            <Image
              className="w-5 h-5"
              source={require("../assets/images/checkbox.png")}
            />
          </View>
          <View className="mr-10 space-y-1">
            <Text className="text-color1 text-base font-bold">Order Accepted</Text>
            <Text className="text-color1 text-xs font-bold text-color1/80">
              “ Order accepted by restaurant at 06:03 am. “
            </Text>
          </View>
        </View>
        <View className="flex-row items-center space-x-10">
          <View className="bg-color1 p-3 rounded-full">
            <Image
              className="w-5 h-5"
              source={require("../assets/images/coke.png")}
            />
          </View>
          <View className="mr-10 space-y-1">
            <Text className="text-color1 text-base font-bold">Cafe Rogue is preparing your Order</Text>
            {/* <Text className="text-color1 text-xs font-bold text-color1/80">
              
            </Text> */}
          </View>
        </View>
      </View>
    </View>
  );
}
