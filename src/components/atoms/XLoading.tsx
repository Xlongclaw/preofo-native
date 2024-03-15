import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'

export default function XLoading() {
  return (
    <View className='h-screen items-center justify-center'>
      <ActivityIndicator color={`#000`} size={60}/>
      <Text className='text-color2/70 font-bold mt-10 text-base'>Getting things done</Text>
    </View>
  )
}