import { ScrollView, Text, View } from "react-native";
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
  return <Text>LOADING</Text>
}
