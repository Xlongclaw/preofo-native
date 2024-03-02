import { View} from 'react-native'
import React from 'react'

export default function Skeleton({width,height,rounded}:{width:number,height:number,rounded:number}) {
  return (
    <View style={{width:`${width}%`, height, borderRadius:rounded,backgroundColor:'#e6e6e6'}}>
    </View>
  )
}