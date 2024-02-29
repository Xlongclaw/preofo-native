import { View } from "react-native";
import React from "react";
import {
  AdvertiseWrapperImageContainer,
  PositionIndicator,
} from "@components/atoms";

/**
 * This component is a display a group of food advertisement
 * in a sliding manner. A restaurant can display their advertisement 
 * by using the wrapper
 * 
 * @returns the advertisement showing container
 */
export default function AdvertiseWrapper() {
  return (
    <View className="pr-2">
      <AdvertiseWrapperImageContainer />
      <PositionIndicator index={2} size={4} />
    </View>
  );
}
