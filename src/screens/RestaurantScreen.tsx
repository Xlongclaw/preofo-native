import {
  View,
  Text,
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "react-native";
import {
  RestaurantDataContainer,
  FoodItemContainer,
  RestaurantBottomNavigationStrip,
} from "@containers";
import { RestaurantHeader } from "@components/organisms";
import { useFetch } from "hooks";
import { getRestaurantById } from "sanity/sanity-queries";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList, restaurantDataType } from "@types";
import Skeleton from "@components/atoms/Skeleton";

export default function RestaurantScreen() {

  const {params} = useRoute<RouteProp<RootStackParamList, 'RestaurantScreen'>>()
  
  const {data, isLoading}:{data:Array<restaurantDataType>,isLoading:boolean} = useFetch({method:"POST",type:"sanity",url:getRestaurantById(params.restaurantId)})
  

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    let yOffset = event.nativeEvent.contentOffset.y / 1;
    setScrollPosition(yOffset);
  };

  if(!isLoading)
  return (
    <View
      style={{ paddingTop: StatusBar.currentHeight }}
      className={`mr-2 relative`}
    >
      <RestaurantHeader name={data[0].name} scrollPosition={scrollPosition} />
      <ScrollView
        onScroll={(event) => handleScroll(event)}
        showsVerticalScrollIndicator={false}
        className="mb-[173px]"
      >
        <RestaurantDataContainer name={data[0].name} />
        <View className="h-[1px] w-full bg-color3/40 mt-4"></View>
        {
          data[0].foodCategories.map((categoryData,i)=>(
            <FoodItemContainer dishes={categoryData.dishes} expanded={!i} category={categoryData.category} />
          ))
        }
      </ScrollView>
      <RestaurantBottomNavigationStrip />
    </View>
  );
  return <Text>LOADING...</Text>
}
