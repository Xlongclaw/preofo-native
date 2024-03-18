import { View, Text } from "react-native";
import React from "react";
import { OrderType } from "@types";
import fetchDishPrice from "utils/fetchDishPrice";

export default function BillSummary({ orderData }: { orderData: OrderType }) {
  const [subTotal, setSubTotal] = React.useState<number>();
  const [counter, setCounter] = React.useState<number>(0);
  const FEES = 45.90

  React.useEffect(() => {
    orderData.orderItems.forEach((element,i) => {
      fetchDishPrice(element.dishId).then((res) => {
        setCounter((total) => total + res.dish.price*orderData.orderItems[i].quantity);
      }); 
    });
  }, []);

  if(counter)
  return (
    <View className="border border-color3 mx-3 px-8 rounded-[25px]">
      <View className="flex-row justify-between border-b border-color3 py-5">
        <Text className="text-base font-bold text-color2/40">Subtotal</Text>
        <Text className="text-base font-bold text-color2/90">₹{counter}</Text>
      </View>
      <View className="flex-row justify-between border-b border-color3 py-5">
        <Text className="text-base font-bold text-color2/40">Platform Fee</Text>
        <Text className="text-base font-bold text-color2/90">₹{FEES}</Text>
      </View>
      <View className="flex-row justify-between py-5">
        <Text className="text-base font-bold text-color2/40">Total</Text>
        <Text className="text-base font-bold text-color2/90 text-green-600">
        ₹{counter+FEES}
        </Text>
      </View>
    </View>
  );
}
