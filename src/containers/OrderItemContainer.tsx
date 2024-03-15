import { View, Text } from "react-native";
import React from "react";
import { OrderItemWrapper } from "@components/organisms";
import { OrderType } from "@types";

export default function OrderItemContainer({
  orderData,
}: {
  orderData: OrderType;
}) {
  return (
    <View className="flex-col mt-2">
      {orderData.orderItems.map((orderItem) => (
        <OrderItemWrapper key={orderItem._id} data={orderItem} />
      ))}
    </View>
  );
}
