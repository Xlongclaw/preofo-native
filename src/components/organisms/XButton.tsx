import { Text, TouchableOpacity } from "react-native";
import React from "react";
import classnames from "classnames";

/**
 * Prop Type of this React Component.
 */
type PropType = {
  title: string;
  onPress: () => void;
  children?: React.JSX.Element;
  type?: "transparent" | "dark";
  width?: "half" | "full" | "one-third" | "two-fifth";
  marginY?: "sm" | "md" | "lg" | "none";
  rounded?: "sm" | "md" | "lg" | "xl" | "full" | "none";
  textSize?: "xs" | "sm" | "md" |'lg';
};

/**
 * This is a Custom Button Component.
 * @returns a JSX Element button.
 */
export default function XButton({
  title,
  onPress,
  type = "transparent",
  width = "full",
  marginY = "none",
  rounded = "full",
  textSize = "xs",
  children,
}: PropType) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={classnames("justify-center items-center px-4 ", {
        /**
         * Different button widths
         */
        "w-full": width === "full",
        "w-1/2": width === "half",
        "w-[33.3%]": width === "one-third",
        "w-[40%]": width === "two-fifth",
        /**
         * Different button types
         */
        "bg-color2 py-4": type === "dark",
        "bg-transparent": type === "transparent",
        /**
         * Margin Y
         */
        "my-2": marginY === "sm",
        "my-4": marginY === "md",
        "my-6": marginY === "lg",
        "my-0": marginY === "none",
        /**
         * Boder Radius
         */
        "rounded-none": rounded === "none",
        "rounded-full": rounded === "full",
        "rounded-lg": rounded === "sm",
        "rounded-xl": rounded === "md",
        "rounded-2xl": rounded === "lg",
        "rounded-3xl": rounded === "xl",
      })}
    >
      <Text
        className={classnames(`font-bold `, {
          "text-color2": type === "transparent",
          "text-color1": type === "dark",

          /**
           * Text Sizes
           */
          "text-xs": textSize === "xs",
          "text-sm": textSize === "sm",
          "text-md": textSize === "md",
          "text-lg": textSize === "lg",
        })}
      >
        {children}
        {title}
      </Text>
    </TouchableOpacity>
  );
}
