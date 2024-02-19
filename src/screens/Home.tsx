import { View, Text } from "react-native";
import React from "react";

export default function Home({
  navigation,
}: {
  navigation: { navigate: (routeName: string) => void };
}) {
  return (
    <View className="bg-black">
      <Text className="text-white">HomeScreen</Text>
    </View>
  );
}
