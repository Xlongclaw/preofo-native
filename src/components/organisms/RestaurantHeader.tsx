import { View, Image, TouchableHighlight } from "react-native";
import React from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";

export default function RestaurantHeader() {
  const navigation: NavigationProp<any> = useNavigation();
  return (
    <View className="flex-row px-6 h-16 items-center justify-between">
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
      <View>
        <Image
          className=" h-6 w-6 mx-6"
          source={require("../../assets/images/basket.png")}
        />
      </View>
    </View>
  );
}
