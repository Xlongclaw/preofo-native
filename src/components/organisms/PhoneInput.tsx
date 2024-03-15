import { Text, TextInput, View } from "react-native";
import React from "react";

import Timer from "@components/organisms/Timer";
import classnames from "classnames";
import { OTP_COOLDOWN } from "constants/PHONE_INPUT";
import XButton from "./XButton";

/**
 * Prop Type of this React Component.
 */
type PropType = {
  type: "with-otp-button" | "without-otp-button";
  onChange: (value: string) => void;
  onRequestOtpButtonPress?: () => void;
  marginY?: "sm" | "md" | "lg" | "none";
};

/**
 * This component renders a Input Field that Prompts user to
 * enter their their phone number.
 *
 * If type value passed is "with-otp-button" -> an extra Request OTP button is visible.
 * @returns a JSX Element that displays a phone number Input Field.
 */
export default function PhoneInput({
  type,
  onChange,
  onRequestOtpButtonPress,
  marginY = "none",
}: PropType) {
  /**
   * timerVisible - State Variable to store a boolean value depending on
   * whether the timer is visible or not.
   *
   * When the Request OTP Button is Pressed, this state is set to true in
   * order to provide a cooldown before requestin the OTP again.
   */
  const [timerVisible, setTimerVisibile] = React.useState(false);

  /**
   * This function runs as the otp button is pressed.
   * It performs the following tasks:
   *
   * 1. Runs onRequestOtpButtonPress function that send a Press Action
   * to the parent.
   *
   * 2. Makes the Cooldown timer Visible.
   *
   * 3. Call setTimeout ho hide the timer after n seconds.
   */
  const handleRequestOtp = () => {
    onRequestOtpButtonPress!();
    setTimerVisibile(true);
    setTimeout(() => {
      setTimerVisibile(false);
    }, OTP_COOLDOWN * 1000);
  };

  return (
    <View
      className={classnames(
        "flex-row border border-color3 px-4 py-6 my-4 rounded-2xl",
        {
          /**
           * Vertical Margins.
           */
          "my-2": marginY === "sm",
          "my-4": marginY === "md",
          "my-6": marginY === "lg",
          "my-0": marginY === "none",
        }
      )}
    >
      <TextInput
        className=" font-semibold text-sm flex-1 border-r border-color3"
        placeholder="Enter Your Phone Number"
        inputMode="numeric"
        onChangeText={(value) => onChange(value)}
      />

      {
        /**
         * If props.type is set to "with-otp-button" and timer is hidden then only the Request Otp Button
         * will be visible.
         */
        !timerVisible && type == "with-otp-button" && (
          <XButton
            type="transparent"
            title="Request OTP"
            onPress={handleRequestOtp}
            width="two-fifth"
            textSize="xs"
          />
        )
      }

      {/**
       * A cooldown timer will be displayed after Request otp button
       * is pressed.
       */}
      {type !== "without-otp-button" && timerVisible && (
        <Text className="font-bold py-4 ml-3">
          Wait <Timer seconds={OTP_COOLDOWN} /> seconds
        </Text>
      )}
    </View>
  );
}
