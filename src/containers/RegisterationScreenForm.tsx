import { ScrollView, View } from "react-native";
import React from "react";
import BorderInputField from "@components/organisms/BorderInputField";
import XButton from "@components/organisms/XButton";
import Toast from "react-native-toast-message";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import storeData from "utils/storeData";
import submitUserData from "utils/submitUserData";
import XImagePicker from "@components/organisms/XImagePicker";
import generateCloudinaryImageUrl from "utils/generateCloudinaryImageUrl";
import XLoading from "@components/atoms/XLoading";

/**
 * This component provide a form with three input fields name, password
 * and confirm password and a continue button to submit the form.
 *
 * @returns a JSX ELement Component that renders a form collecting user
 * data after successful OTP Validation.
 */
export default function RegisterationScreenForm({
  userToken,
  isDataLoading
}: {
  userToken: string;
  isDataLoading:(loading:boolean)=>void
}) {
  /**
   * State Variables the store the name, password and
   * confirm password from the user input.
   */
  const [name, setName] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [confirmPassword, setConfirmPassword] = React.useState<string>("");

  /**
   * useNavigation - hook that give access to navigation object and let you navigate
   * in the through the navigation stack.
   */
  const navigation: NavigationProp<any> = useNavigation();
  // console.log(userToken);
  
  const handleFormData = async () => {
    isDataLoading(true)
    
    
    /**
     * Different codes:
     *
     * SUCCESS - userToken was valid and data submitted suvccessfully without any error.
     * PASSWORD_DOES_NOT_MATCH - password and confirmPassword Does not match.
     * INVALID_TOKEN - userToken is invalid.
     */
    type CodeType = {
      code: "SUCCESS" | "PASSWORD_DOES_NOT_MATCH" | "INVALID_TOKEN";
    };
    const { code }: CodeType = await submitUserData({
      name,
      confirmPassword,
      password,
      userToken,
    }).catch((err) => console.log(err));

    switch (code) {
      case "SUCCESS": {
        /**
         * Stored the user token in the storage through expo secure store.
         */
        await storeData("userToken", userToken);

        /**
         * Navigating to Home Screen after the user is succesfully registered.
         */
        navigation.navigate("Home");
        break;
      }
      case "PASSWORD_DOES_NOT_MATCH": {
        /**
         * Displaying message that password does not exist.
         */
        Toast.show({
          type: "error",
          text1: "Password dosen't match!",
          topOffset: 60,
        });
        break;
      }
      case "INVALID_TOKEN": {
        /**
         * Displaying message that the token is not valid
         * and redirecting user to SignUp Screen.
         */
        Toast.show({
          type: "error",
          text1: "INVALID userToken! Try again",
          topOffset: 60,
        });
        navigation.navigate("SignUp");
        break;
      }
    }
    isDataLoading(false)
  };
  return (
    <ScrollView className="flex-co space-y-2">
      {/* Name Input Field */}
      <BorderInputField
        placeholder={`What's your name ?`}
        type="text"
        marginY="sm"
        onChange={(value) => {
          setName(value);
        }}
      />

      {/* Password Input Field */}
      <BorderInputField
        placeholder={`Password`}
        type="text"
        marginY="sm"
        onChange={(value) => {
          setPassword(value);
        }}
      />

      {/* Confirm Password Field */}
      <BorderInputField
        placeholder={`Confirm Password`}
        type="text"
        marginY="sm"
        onChange={(value) => {
          setConfirmPassword(value);
        }}
      />

      {/* Dark Continue Button to submit all above fields Data */}
      <XButton
        title="Continue"
        width="half"
        type="dark"
        onPress={handleFormData}
      />
    </ScrollView>
  );
}
