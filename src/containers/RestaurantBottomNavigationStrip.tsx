import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RestaurantMenuBtn } from "@components/organisms";
import { RestaurantWrapperFetchedDataType, RootStackParamList } from "@types";


export default function RestaurantBottomNavigationStrip({restaurant}:{restaurant:RestaurantWrapperFetchedDataType}) {
  const navigation: NativeStackNavigationProp<RootStackParamList> = useNavigation();
  return (
    <View className=" w-[100vw] bg-color5 flex-row p-2 space-x-2">
      <RestaurantMenuBtn />
      <View className="border border-color3 rounded-[20px] flex-row justify-between flex-1 bg-color5 pl-5 pr-2 items-center">
        <View className="space-y-[2px]">
          <Text className="text-color2/50 font-semibold text-xs">
            2 items in order List
          </Text>
          <Text className="font-bold">Total : Rs 798</Text>
        </View>
        <TouchableHighlight
          underlayColor={"#dfdfdf"}
          onPress={() => navigation.navigate("CartScreen",{restaurant:restaurant} )}
          className="p-4 rounded-full"
        >
          <Image
            className="h-4 w-6"
            source={require("../assets/images/arrow.png")}
          />
        </TouchableHighlight>
      </View>
    </View>
  );
}
