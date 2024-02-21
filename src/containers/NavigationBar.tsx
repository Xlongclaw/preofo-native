import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { navBarData } from "../constants";
import NavigationButton from "@components/molecules/NavigationButton";
import { navigationDataType } from "@types";

export default function NavigationBar() {
  const [selected, setSelected] = useState(0);
  return (
    <View className=" flex-row bg-color5 rounded-t-[36px] justify-end px-2 left-0 bottom-[94px] w-[100vw]">
      <View
        className=" shadow-2xl flex-row items-center justify-between px-3 w-full h-[70px]  
       bg-color5  border border-color3 rounded-[17px]"
      >
        {navBarData.map((data: navigationDataType, i) => (
          <NavigationButton
            key={`NAVBTN_${i}`}
            data={data}
            selected={selected === i}
          />
        ))}

        {/* <View className="flex-row items-center bg-color2 py-3 rounded-[12px] px-8  space-x-2">
          <Image
            className="w-[23px] h-[23px] "
            source={require("../assets/images/explore.png")}
          />
          <Text className="text-xs mt-1 font-medium text-white">Discover</Text>
        </View>
        <View className="flex-row space-x-2">
          <View className="flex-row items-center  border border-color3/20 py-3 px-3 space-x-2 rounded-[20px]">
            <Image
              className="w-[23px] h-[23px] "
              source={require("../assets/images/basket.png")}
            />

            <Text className="text-xs mt-1 font-medium text-color2">Basket</Text>
          </View>
          <View className="flex-row items-center border-color3/20  border py-3 px-3 space-x-2 rounded-[20px]">
            <Image
              className="w-[23px] h-[23px] "
              source={require("../assets/images/profile3.png")}
            />

            <Text className="text-xs mt-1 font-medium text-color2">
              Profile
            </Text>
          </View>
        </View> */}
      </View>
    </View>
  );
}
