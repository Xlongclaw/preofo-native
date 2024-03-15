import { ActivityIndicator, View } from "react-native";
import React from "react";
import Toast from "react-native-toast-message";

import PhoneInput from "@components/organisms/PhoneInput";
import BulletHeading from "@components/organisms/BulletHeading";
import XOtpField from "@components/organisms/XOtpField";
import XButton from "@components/organisms/XButton";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { sendOtp, showToast, validateUser } from "@utils";
import { RootStackParamList } from "@types";

/**
 * This Components renders Application Heading and an
 * input form to get user Phone Number to register him into the application.
 *
 * @returns a JSX component of sign up form.
 */
export default function SignUpContainer() {
  /**
   * otp - state variable to store the OTP taken as input from the user.
   */
  const [otp, setOtp] = React.useState<string>("");

  /**
   * phoneNumber - state variable to store the Phone Number taken as input from the user.
   *
   * Its value change as the user enters something in the phoneInput Field
   */
  const [phoneNumber, setPhoneNumber] = React.useState<string>("");

  /**
   * ActivityIndicaterVisible - state variable to set activityIndicator visible after
   * the submission of otp.
   *
   * It is set to true just before OTP is sent for validation
   * and set to false again after the validation is completed or rejected.
   */
  const [ActivityIndicatorVisible, setActivityIndicatorVisible] =
    React.useState(false);

  /**
   *
   */
  React.useEffect(() => {
    otp !== "" && ValidateOtp();
  }, [otp]);

  /**
   * A function that checks whether the otp is correct.
   * If user is Authenticated then the function redirects user to the
   * registeration page for user data collection.
   */
  const ValidateOtp = async () => {
    /**
     * displays loading while the OTP Validates.
     */
    setActivityIndicatorVisible(true);
    const validation = await validateUser(phoneNumber, otp);

    /**
     * Checking validation.code .
     * If the code is expired displaying a toast
     * that otp is expired.
     */
    if (validation.code == "OTP_EXPIRED")
      showToast("error", "OTP expired. Try again !");
    /**
     * If validation.code == "SUCCESS"
     * Navigating the user to registeration screen.
     */ else if (validation.code == "SUCCESS")
      navigation.navigate("Registeration", { userToken: validation.userToken });
    /**
     * If the user OTP does not matches with the database OTP
     * rendering a toast with the smae message.
     */ else showToast("error", "Invalid OTP!");

    /**
     * Hiding the Activity indicator after the validation process ends.
     */
    setActivityIndicatorVisible(false);
  };

  /**
   * Function that handles any change in OTP Field.
   * @param value - changed value of the OTP
   */
  const onChange = (value: string) => {
    setOtp(value);
  };

  /**
   * Reference of the Otp Input.
   */
  const otpFieldRef = React.useRef<any>(null);

  /**
   * This function decides what happen when the Request Otp Button is pressed
   * invovke a sentOtp function that sends an api request to the server for
   * sending otp to the given Phone Number.
   */
  const handleRequestOtpButtonPress = () => {

    /**
     * Checking if the phone number contains 10 digits.
     */
    if (phoneNumber.length === 10) {

      /**
       * Sending Otp to the phone Number and wait the server response
       */
      sendOtp(phoneNumber).then((result) => {

        /**
         * If the result from the server === 'SUCCESS'
         * Showing Toast that the OTP was sent Successfully.
         */
        if (result === "SUCCESS") {
          showToast("success", "OTP sent successfully!");
          otpFieldRef.current?.focus();
        }


        /**
         * If the result from the server === 'USER_EXISTS'
         * Showing toast for the same.
         */
        else if (result === "USER_EXISTS") 
        showToast('error',"User already exists try login instead")
        
        /**
         * Else Showing toast that something went wrong.
         */
        else 
          showToast('error',"Something went Wrong")
      });
    } else showToast("error", "Enter a valid 10 digits phone number");
  };

  /**
   * useNavigation - hook that give access to navigation object and let you navigate
   * in the through the navigation stack.
   */
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  return (
    <View className="px-4 h-screen flex-col mt-32">
      <BulletHeading subtitle="PARTNER" appName="Preofo" />

      {/* Basically an input Field to get phone number from the user with a request OTP button */}
      <PhoneInput
        marginY="md"
        onChange={(value) => {
          setPhoneNumber(value);
        }}
        onRequestOtpButtonPress={handleRequestOtpButtonPress}
        type="with-otp-button"
      />

      <View className="flex-row items-center">
        {/* An OTP field to ake OTP input from the User */}
        <XOtpField
          getOtp={(value) => {
            onChange(value);
          }}
          field0Ref={otpFieldRef}
        />
        {ActivityIndicatorVisible && (
          <ActivityIndicator size={32} className="mx-6" />
        )}
      </View>

      <View className="w-1/2 mt-4">
        {/* Continue Button to submit OTP and register him in the Application */}
        <XButton
          onPress={ValidateOtp}
          title="Continue"
          type="dark"
          textSize="sm"
        />

        {/* A button that takes user to the signIn page */}
        <XButton
          onPress={() => navigation.navigate("SignIn")}
          title="Existing User ? Login"
          type="transparent"
          marginY="md"
          textSize="sm"
        />
      </View>
    </View>
  );
}
