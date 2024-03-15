// NEEDS OPTIMISATION
import { View, TextInput } from "react-native";
import React from "react";

/**
 * Prop Type of this React Component.
 */
type PropType = {
  getOtp: (value: string) => void;
  field0Ref?: React.MutableRefObject<any>;
};

export default function XOtpField({ getOtp, field0Ref }: PropType) {
  const [otp, setOtp] = React.useState(["", "", "", ""]);


  const otpFieldRefs = []

  const field1Ref = React.useRef<any>(null);
  const field2Ref = React.useRef<any>(null);
  const field3Ref = React.useRef<any>(null);

  return (
    <View className="flex-row gap-2">
      <TextInput
        ref={field0Ref}
        inputMode="numeric"
        maxLength={1}
        onChangeText={(value) => {
          setOtp((x) => {
            return [value, x[1], x[2], x[3]];
          });
          value !== "" && field1Ref.current?.focus();
        }}
        className=" font-semibold border text-center px-5 py-4 justify-center items-center rounded-xl border-color3"
      />
      <TextInput
        inputMode="numeric"
        ref={field1Ref}
        maxLength={1}
        onChangeText={(value) => {
          setOtp((x) => {
            return [x[0], value, x[2], x[3]];
          });
          value !== "" && field2Ref.current?.focus();
        }}
        className=" font-semibold border text-center px-5 py-4 rounded-xl border-color3"
      />
      <TextInput
        inputMode="numeric"
        ref={field2Ref}
        maxLength={1}
        onChangeText={(value) => {
          setOtp((x) => {
            return [x[0], x[1], value, x[3]];
          });
          value !== "" && field3Ref.current?.focus();
        }}
        className=" font-semibold border px-5 py-4 text-center rounded-xl border-color3"
      />
      <TextInput
        inputMode="numeric"
        ref={field3Ref}
        maxLength={1}
        onChangeText={(value) => {
          setOtp((x) => {
            return [x[0], x[1], x[2], value];
          });
          otp[0] &&
            otp[1] &&
            otp[2] &&
            value &&
            getOtp([...otp, value].join(""));
        }}
        className=" font-semibold border px-5 py-4 text-center rounded-xl border-color3"
      />
    </View>
  );
}
