import { StatusBar, View } from "react-native";
import React from "react";
import SignInContainer from "containers/SignInContainer";

export default function SignIn() {
  return (
    <View className="px-2" style={{ paddingTop: StatusBar.currentHeight }}>
      <SignInContainer />
    </View>
  );
}
