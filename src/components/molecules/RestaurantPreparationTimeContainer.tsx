import { View, Text, Image } from 'react-native'
import React from 'react'


/**
 * This container displays the restaurant's average preparation time provided through
 * component props.
 *
 * @param prepTime contains preparation time of a particular restaurant.
 * @returns a JSX element that displays Restaurant Preperation Time.
 */
export default function RestaurantPreparationTimeContainer({minprepTime,maxPrepTime}:{minprepTime:number,maxPrepTime:number}) {
  return (
    <View className="flex-row items-center space-x-1 mt-2">
        <Image
          className="w-[12px] h-[12px]"
          source={require("@images/time.png")}
        />
        <Text className="text-[11px] font-bold text-color2/40">
          {minprepTime} - {maxPrepTime} min
        </Text>
      </View>
  )
}