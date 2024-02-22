import { Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

export default function FoodItemWrapperCounter() {
  const [count, setCounter] = useState(0);
  return (
    <View className="border text-xs flex-row items-center justify-center bg-color1 border-color3 rounded-full font-bold">
      {count !== 0 ? (
        <View className="flex-row justify-center items-center ">
          <TouchableOpacity
            className="h-7 w-10 flex-row justify-center items-center"
            onPress={() => setCounter(count - 1)}
          >
            <Text className="font-bold  text-center">-</Text>
          </TouchableOpacity>
          <Text className="font-bold">{count}</Text>
          <TouchableOpacity
            className="flex-row justify-center items-center h-7 w-10 "
            onPress={() => setCounter(count + 1)}
          >
            <Text className="font-bold text-center">+</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity
          className="px-6 py-1"
          onPress={() => setCounter(count + 1)}
        >
          <Text className="font-bold">+ Add</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
