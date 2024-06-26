import { Text, View } from "react-native";
import React from "react";

/**
 * This Component renders a heading with the given props.title
 *
 * @param title - getting title of the Heading through props
 * @returns JSX that render the heading of the given title
 */
export default function TextHeading({ title ,subtitle}: { title: string,subtitle?:string }) {
  return (
    <View className="">
      <Text className="text-base font-black text-color2/50">
        {title}
      </Text>
      <Text className="text-xs font-bold text-color2/30">
        {subtitle}
      </Text>
    </View>
  );
}
