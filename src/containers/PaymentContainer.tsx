import { View, Text, Image, TouchableHighlight } from 'react-native'
import React from 'react'
import { NavigationProp, useNavigation } from '@react-navigation/native';

export default function PaymentContainer() {
  const navigation: NavigationProp<any> = useNavigation();

  return (
    <View className='absolut bottom-[0px] flex-row py-2 px-2 space-x-2'>
      <View className='flex-row border border-color3 p-4 space-x-2 items-center rounded-[20px]'>
        <View>
          <Text className='text-xs font-bold text-color2/50'>Payment Method</Text>
          <Text className='text-lg font-semibold'>UPI</Text>
        </View>
        <Image
            className="w-[15px] h-[15px] rotate-180"
            source={require("../assets/images/caretdown.png")}
          />
      </View>
      <TouchableHighlight
        underlayColor={"#dfdfdf"}
        onPress={() => navigation.navigate('PlacedOrderScreen')}
        className="border bg-green-500 border-color3 flex-1 rounded-[20px] items-center justify-center"
      >

      <View className='flex-row  p-4   items-center justify-center space-x-2'>
      <Image
            className="w-[30px] h-[30px]"
            source={require("../assets/images/cash-white.png")}
          />
          <Text className='text-color1 font-bold text-base'>Place order</Text>
      </View>
      </TouchableHighlight>
    </View>
  )
}