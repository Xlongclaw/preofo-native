import { View, Text } from "react-native";
import React from "react";

export default function Home({
  navigation,
}: {
  navigation: { navigate: (routeName: string) => void };
}) {
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
}
