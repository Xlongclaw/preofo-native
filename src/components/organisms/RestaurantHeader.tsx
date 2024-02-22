import { View, Image, TouchableHighlight, Text } from "react-native";
import React from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";

export default function RestaurantHeader({
  scrollPosition,
}: {
  scrollPosition: number;
}) {
  const navigation: NavigationProp<any> = useNavigation();
  return (
    <View className={`flex-row px-3 h-16 items-center justify-between`}>
      <TouchableHighlight
        underlayColor={"#dfdfdf"}
        onPress={() => navigation.goBack()}
        className="p-4 rounded-full"
      >
        <Image
          className="rotate-180 h-4 w-6"
          source={require("../../assets/images/arrow.png")}
        />
      </TouchableHighlight>
      <View
        className={`${
          scrollPosition > 120 ? "opacity-100" : "opacity-0"
        } items-center justify-center `}
      >
        <Text className={` font-bold text-l`}>Cafe Rogue</Text>
        {/* <Text className="text-xs font-semibold text-color2/50">
          French Cusine
        </Text> */}
      </View>
      <View>
        <TouchableHighlight
          underlayColor={"#dfdfdf"}
          onPress={() => navigation.navigate("CartScreen")}
          className="p-3 rounded-full"
        >
          <Image
            className=" h-6 w-6 "
            source={require("../../assets/images/basket.png")}
          />
        </TouchableHighlight>
      </View>
    </View>
  );
}
