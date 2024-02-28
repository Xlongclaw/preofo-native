import { View, Text } from 'react-native'
import React from 'react'
import { OrderItemWrapper } from '@components/organisms'

export default function OrderItemContainer() {
  return (
    <View className='flex-col mt-2'>
      <OrderItemWrapper/>
      <OrderItemWrapper/>
    </View>
  )
}