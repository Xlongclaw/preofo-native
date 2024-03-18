import { ScrollView, Text, TouchableHighlight, View } from "react-native";
import React from "react";
import { StatusBar } from "react-native";
import { BillSummary, OrderScreenHeader } from "@components/organisms";
import {
  OrderItemContainer,
  OrderScreenRestaurantDataContainer,
  PaymentContainer,
  PromoCodeInputContainer,
} from "@containers";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { OrderType, RootStackParamList } from "@types";
import fetchOrder from "utils/fetchOrder";
import retrieveSecureStoreData from "utils/retrieveSecureStoreData";
import XStatusBar from "@components/atoms/XStatusBar";
import { Image } from "react-native";
type NavigationProps = NativeStackScreenProps<
  RootStackParamList,
  "CartScreen"
>;

export default function CartScreen({ navigation, route }: NavigationProps) {
  const [orderData, setOrderData] = React.useState<OrderType>();

  React.useEffect(() => {
    retrieveSecureStoreData("userToken").then((token) => {
      fetchOrder({
        restaurantId: route.params.restaurant._id,
        userToken: token!,
      }).then((res) => {
        console.log(res.basket);
        setOrderData(res.basket[0]);
      }).catch((err)=>{
        console.log(err);
      });
    });
  }, []);
  if(orderData)
  return (
    <View className="relative" style={{ paddingTop: StatusBar.currentHeight }}>
      <OrderScreenHeader />
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="mb-[160px  h-[77vh]"
      >
        <OrderScreenRestaurantDataContainer
          restaurant={route.params.restaurant}
        />
        <OrderItemContainer orderData={orderData} />
        <PromoCodeInputContainer />
        <BillSummary orderData={orderData} />
      </ScrollView>
      <PaymentContainer />
    </View>
  );
  return <View className=" ">
    <XStatusBar/>
    <View className="flex-row px-4 py-4">
    <TouchableHighlight
          underlayColor={"#dfdfdf"}
          onPress={() => navigation.goBack()}
          className="p-4 rounded-full"
        >
          <Image
            className="h-4 w-6 rotate-180"
            source={require("../assets/images/arrow.png")}
          />
        </TouchableHighlight>
    </View>
    <View className="items-center justify-center h-[80vh]">
    <Text className="text-xl">CART IS EMPTY</Text>

    </View>
  </View>
}
