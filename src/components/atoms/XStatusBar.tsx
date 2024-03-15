import { View } from 'react-native'
import React from 'react'
import { StatusBar } from "react-native";

/**
 * This statusbar is developed so that the content in the screens 
 * will only be displayed in safe areas in order to prevent the notches
 * blocking the content.
 * 
 * @returns a React.JSX.Element that is a custom statusbar.
 */
export default function XStatusBar() {
  return (
    <View style={{height:StatusBar.currentHeight}}/>
  )
}