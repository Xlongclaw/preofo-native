import { View, Text, TouchableHighlight, Image } from 'react-native'
import React from 'react'
import { NavigationProp, useNavigation } from "@react-navigation/native";

export default function OrderScreenHeader() {
  const navigation: NavigationProp<any> = useNavigation();
  return (
    <View className="flex-row gap-10 px-3 py-2 items-center">
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
      <Text className="font-bold text-lg">Your Order</Text>
    </View>
  )
}