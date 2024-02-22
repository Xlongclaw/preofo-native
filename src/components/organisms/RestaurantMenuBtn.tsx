import {
  View,
  Text,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

export default function RestaurantMenuBtn() {
  const [expandMenu, setExpandMenu] = useState(false);
  const restaurantCategories = [
    {
      name: "Recommended",
      items: [],
    },
    {
      name: "Newly Launched Pizza",
      items: [],
    },
    {
      name: "Pizza",
      items: [],
    },
    {
      name: "Burger",
      items: [],
    },
    {
      name: "Sandwich",
      items: [],
    },
    {
      name: "Accompainments",
      items: [],
    },
  ];
  return (
    <View className="relative">
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => setExpandMenu(!expandMenu)}
        className="bg-color2 flex-row rounded-[20px] px-6 py-6 justify-center items-center space-x-3"
      >
        <Image
          className="w-6 h-6"
          source={require("../../assets/images/menu.png")}
        />
        <Text className="text-color3 text-xs font-bold">MENU</Text>
      </TouchableOpacity>
      {expandMenu && (
        <View className="absolute bg-color1 border-color3 rounded-[20px] border w-[280px] bottom-[80px] left-0">
          {restaurantCategories.map((category, i) => (
            <View
              className={`flex-row justify-between ${
                i !== restaurantCategories.length - 1 && "border-b"
              } border-color3/30 items-center space-x-10 py-4 px-7`}
            >
              <Text className="font-semibold" key={`CATEGOTY_${i}`}>
                {category.name}
              </Text>
              <Text>{category.items.length}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}
