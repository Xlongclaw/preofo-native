import { View, Text } from "react-native";
import React from "react";

/**
 * Prop Type of this React Component.
 */
type PropType = {
  appName: string;
  subtitle?: string;
};

/**
 * This component renders the App name and a subtitle.
 *
 * @returns JSX Elemnent - the heading and subheading of signup Page.
 */
export default function BulletHeading({ appName, subtitle }: PropType) {
  return (
    <View>
      <View className="flex-row items-center space-x-2">
        <Text className="font-black text-4xl text-color2">{appName}</Text>
        <Text className="font-black text-base text-color2">{subtitle}</Text>
      </View>
    </View>
  );
}
