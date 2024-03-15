import { View, TextInput, InputModeOptions } from "react-native";
import React from "react";
import classnames from "classnames";

/**
 * Prop Type of this React Component.
 */
type PropType ={
  placeholder: string;
  type?: InputModeOptions;
  onChange: (value: string) => void;
  onFocus?: () => void;
  value?:string,
  onBlur?: () => void;
  marginY?: "sm"|"md"|"lg";
  marginX?: "sm"|"md"|"lg";
}

/**
 * This Componenet Renders an input field with Custom styles.
 * @returns a JSX Element that is a input field.
 */
export default function BorderInputField({
  placeholder,
  type = "text",
  onChange,
  onFocus,
  onBlur,
  marginX,
  marginY,
  value
}: PropType) {
  return (
    <View className={classnames("flex-row border border-color3 px-4 rounded-2xl ",{

      /**
       * Vertical Margins
       */
      "my-2":marginY=='sm',
      "my-4":marginY=='md',
      "my-6":marginY=='lg',

      /**
       * Horizontal Margins
       */
      "mx-2":marginX=='sm',
      "mx-4":marginX=='md',
      "mx-6":marginX=='lg',
    })}>
      <TextInput
        className=" font-semibold flex-1 py-5 "
        placeholder={placeholder}
        inputMode={type}
        onChangeText={(value) => onChange(value)}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
      />
    </View>
  );
}
