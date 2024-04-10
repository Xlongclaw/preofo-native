import { View } from "react-native";
import React, { useState } from "react";
import { navBarData } from "../constants";
import NavigationButton from "@components/molecules/NavigationButton";
import { navigationDataType } from "@types";

export default function NavigationBar() {
  const [selected, setSelected] = useState(0);
  return (
    <View className=" flex-row  rounded-t-[36px] justify-end left-0 bottom-[135px]  bg-white w-[100vw]">
      <View
        className="flex-row items-center px-3 w-full py-2 
       bg-color5  rounded-[17px]"
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
