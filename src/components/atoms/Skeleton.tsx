import { View} from 'react-native'
import React from 'react'

export default function Skeleton({width,height,rounded,mx,my}:{width:number,height:number,rounded:number,mx?:number,my?:number}) {
  return (
    <View style={{width:`${width}%`, height, borderRadius:rounded,backgroundColor:'#e6e6e6',marginVertical:my,marginHorizontal:mx}}>
    </View>
  )
}