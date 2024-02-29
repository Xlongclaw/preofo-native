import { View, Text, TouchableHighlight } from 'react-native'
import React from 'react'
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';

export default function OrderPlacedHeader() {
  const navigation: NavigationProp<any> = useNavigation();
  return (
    <View className='flex-row justify-between py-4'>
       <TouchableHighlight
        underlayColor={"#dfdfdf"}
        onPress={() => navigation.goBack()}
        className="p-4 rounded-full"
      >
        <Image
          className="rotate-180 h-4 w-6"
          source={require("../../assets/images/arrow.png")}
        />
      </TouchableHighlight>
      <View className='bg-color2 px-8 py-5 justify-center items-center space-x-2 flex-row rounded-3xl'>
      <Image
          className="rotate-180 h-6 w-6"
          source={require("../../assets/images/explore.png")}
        />
      <Text className=' text-xs font-bold text-color4'>Get Directions</Text>
      </View>
    </View>
  )
}