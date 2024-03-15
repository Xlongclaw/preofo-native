import { ActivityIndicator, View } from "react-native";
import React from "react";
import BulletHeading from "@components/organisms/BulletHeading";
import PhoneInput from "@components/organisms/PhoneInput";
import XButton from "@components/organisms/XButton";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import BorderInputField from "@components/organisms/BorderInputField";
import { RootStackParamList } from "@types";
import storeData from "utils/storeData";
import Toast from "react-native-toast-message";
import { showToast } from "@utils";
import fetchUserDatafromCredentials from "utils/fetchUserDatafromCredentials";

/**
 * This Components renders Application Heading and an
 * input form to get user Details and sign him/her into the application.
 *
 * @returns a jsx element of sign in form.
 */
export default function SignInContainer() {
  const [phoneNumber, setPhoneNumber] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  /**
   * ActivityIndicaterVisible - state variable to set activityIndicator visible after
   * the submission of Credentials.
   *
   * It is set to true just before Credentials are sent for validation
   * and set to false again after the validation is completed or rejected.
   */
  const [ActivityIndicatorVisible, setActivityIndicatorVisible] =
    React.useState(false);

  /**
   * useNavigation - hook that give access to navigation object and let you navigate
   * in the through the navigation stack.
   */
  const navigation: NavigationProp<RootStackParamList> = useNavigation();

  /**
   * This function is called when the continue button is pressed.
   * It validates the user and provides a token in order to remain authenticated
   */
  const handleCredentials = async () => {
    setActivityIndicatorVisible(true);
    if (phoneNumber.length === 10) {
      const responseData = await fetchUserDatafromCredentials({
        phoneNumber,
        password,
      });
         
      if (responseData.code === "SUCCESS") {
        /**
         * If responseData === "SUCCESS"
         * storing the userToken in the local storage for authentication
         * and then redirecting the user to AppLoadingScreen.
         */
        await storeData("userToken", responseData.userToken);
        navigation.reset({ routes: [{ name: "AppLoadingScreen" }] });
      } else if (responseData.code === "PASSWORD_DOES_NOT_MATCH") {
        /**
         * If responseData === "PASSWORD_DOES_NOT_MATCH"
         * Showing a toast for the same.
         */
        showToast("error", "Incorrect Password.");
      } else if (responseData.code === "PARTNER_DOES_NOT_EXIST") {
        /**
         * If responseData === "USER_DOES_NOT_EXIST"
         * Showing a toast for the same.
         */
        showToast("error", "User does not exist.");
      } else {
        showToast('error','Something Went Wrong')
      }
    } else {
      showToast("error","Enter a valid Phone number.")
    }
    setActivityIndicatorVisible(false);
  };

  return (
    <View className="px-4 h-screen flex-col mt-32">
      <BulletHeading subtitle="" appName="Preofo" />

      {/* Basically an input Field to get phone number from the user */}
      <PhoneInput
        onChange={(value) => {
          setPhoneNumber(value);
        }}
        type="without-otp-button"
        marginY="md"
      />

      {/* Input Field to take password as input from the user */}
      <BorderInputField
        onChange={(value) => {
          setPassword(value);
        }}
        type="text"
        placeholder="Password"
      />

      <View className="flex-row">
        {/* Continue Button to submit user phone number and password to sign him in. */}
        <XButton
          onPress={handleCredentials}
          title="Continue"
          type="dark"
          width="half"
          marginY="md"
          textSize="sm"
        />
        {ActivityIndicatorVisible && (
          <ActivityIndicator className="ml-6" color={"#000"} size={32} />
        )}
      </View>

      {/* A button that takes user to the signUp page */}
      <XButton
        onPress={() => navigation.navigate("SignUp")}
        title="New User ? SignUp"
        type="transparent"
        width="half"
        textSize="sm"
      />
    </View>
  );
}
