import { StatusBar, View } from "react-native";
import React from "react";
import SignUpContainer from "containers/SignUpContainer";

export default function SignUp() {
  return (
    <View className="px-2"
    style={{ paddingTop: StatusBar.currentHeight }}>
      <SignUpContainer/>
    </View>
  );
}
