import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "types";
import retrieveSecureStoreData from "utils/retrieveSecureStoreData";
import fetchUserData from "utils/fetchUserData";
type Props = NativeStackScreenProps<RootStackParamList, "AppLoadingScreen">;

export default function AppLoadingScreen({ navigation, route }: Props) {
  /**
   * userToken - state variable to store user Authentication token.
   */
  const [userToken, setUserToken] = React.useState<string | null>(null);

  /**
   * Retrieving the userToken from the storage.
   */
  React.useEffect(() => {
    retrieveSecureStoreData("userToken").then((userToken) => {
      if (!userToken) navigation.navigate("SignUp");
      setUserToken(userToken);
    });
  }, []);

  /**
   * Cheking if the token is valid and the user exists.
   *
   * if user exists - redirecting him to home screen.
   * if user does not exist - redirecting him to signUp screen
   */
  React.useEffect(() => {
    userToken &&
      fetchUserData(userToken).then((res) => {
        if (res.code == "SUCCESS") navigation.navigate("Home");
        else navigation.navigate("SignUp");
      });
  }, [userToken]);

  return (
    <View className="justify-center h-screen items-center">
      {/* <XStatusBar /> */}
      <View className="space-y-48 mt-56">
        <View className="items-center">
          <Text className=" text-6xl font-extrabold pt-2">Preofo</Text>
          <Text className=" text-xl font-extrabold ">PARTNER</Text>
        </View>
        <ActivityIndicator size={40} color={"#000"} />
      </View>
    </View>
  );
}
