import { View, Text } from 'react-native'
import React from 'react'
import Skeleton from '@components/atoms/Skeleton'

export default function FoodItemWrapperSkeleton() {
  return (
    <View className="border border-color3 p-2 my-2 rounded-[40px] flex-row justify-between ml-2">
        <View className="ml-3">
          <View className="flex-row items-center">
            <Skeleton height={20} width={12} rounded={20} mx={3} />
            <Skeleton height={10} width={40} rounded={20} mx={3} />
          </View>
            <Skeleton height={12} width={100} rounded={20} my={7} />
            <Skeleton height={12} width={40} rounded={20} my={3} />
            <Skeleton height={8} width={90} rounded={20} my={4} />
            <Skeleton height={8} width={90} rounded={20} my={4} />
            <Skeleton height={8} width={70} rounded={20} my={4} />
            <Skeleton height={15} width={20} rounded={20} my={4} />
        </View>
        <Skeleton height={140} width={40} rounded={30} />
      </View>
  )
}