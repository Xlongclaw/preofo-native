import { View } from "react-native";
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
      </View>
    </View>
  );
}
