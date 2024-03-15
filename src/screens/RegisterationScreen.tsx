import { View, Text, Keyboard } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@types";
import XStatusBar from "@components/atoms/XStatusBar";
import RegisterationScreenForm from "containers/RegisterationScreenForm";
import XLoading from "@components/atoms/XLoading"
type NavigationProps = NativeStackScreenProps<
  RootStackParamList,
  "Registeration"
>;

export default function RegisterationScreen({
  navigation,
  route,
}: NavigationProps) {
  const [keyboardVisible, setKeyboardVisible] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardVisible(true);
    });
    Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardVisible(false);
    });
  }, []);

  if(!loading)
  return (
    <View
      className={` px-8 h-screen ${
        keyboardVisible ? "justify-start" : "justify-center pb-16"
      }`}
    >
      <XStatusBar />
      <View className={`mx-3 my-10 ${keyboardVisible ? "mb-2" : "mb-6"}`}>
        <Text className="text-4xl font-bold text-color2">Hello There,</Text>
        <Text className="text-2xl font-bold text-color2/70">
          So, What are you doing for your Craving
        </Text>
      </View>
      <RegisterationScreenForm isDataLoading={(loading)=>setLoading(loading)} userToken={route.params.userToken} />
    </View>
  );
  return <XLoading/>
}
