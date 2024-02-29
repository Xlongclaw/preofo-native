import { Text } from "react-native";
import React from "react";

/**
 * This Component renders a heading with the given props.title
 * 
 * @param title - getting title of the Heading through props
 * @returns JSX that render the heading of the given title
 */
export default function TextHeading({ title }: { title: string }) {
  return (
    <Text className="text-base text-center mt-5 mb-3 mr-2 justify-center font-black text-color2/60">
      {title}
    </Text>
  );
}
