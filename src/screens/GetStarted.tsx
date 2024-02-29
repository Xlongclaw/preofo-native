import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { StatusBar } from "react-native";
import { Image } from "react-native";
import { PositionIndicator } from "@components/atoms";
import { NavigationProp, useNavigation } from "@react-navigation/native";

export default function GetStarted() {
  const navigation: NavigationProp<any> = useNavigation();
  return (
    <View style={{ paddingTop: StatusBar.currentHeight }}>
      <View className="relative">

      <Image
        className=" w-[100%] h-[500px] "
        source={require("../assets/images/getstarted.png")}
      />
      <View className="absolute right-[15vw] bottom-[12%]">
        <PositionIndicator index={0} size={4}/>
      </View>
      </View>
      <View className="pl-8 pr-16 py-6">
        <Text className="text-3xl font-black text-color2/70">
          Discover Our World of Restaurants
        </Text>
        <Text className="text-base font-black text-color2/30 mt-4">
          EXPERIENCE THE MOST DELICIOUS FOOD WITH US
        </Text>
        <View className="flex-row items-center space-x-5 justify-between">
          <TouchableOpacity onPress={()=>navigation.navigate('SignIn')} className="px-8 py-4 bg-color2 rounded-2xl mt-4 w-[40vw] items-center">
            <Text className="text-color1 font-extrabold">Get Started</Text>
          </TouchableOpacity>
          <Image
        className=" w-10 h-3 mt-2"
        source={require("../assets/images/arrow-right.png")}
      />
        </View>
      </View>
      
    </View>
  );
}
