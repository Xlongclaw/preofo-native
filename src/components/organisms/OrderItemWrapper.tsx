import { View, Text, Image } from "react-native";
import React from "react";
import FoodItemWrapperCounter from "@components/molecules/FoodItemWrapperCounter";
import { DishType } from "@types";
import fetchDishById from "utils/fetchDishById";
import getFinalItemPrice from "utils/getFinalItemPrice";
import retrieveSecureStoreData from "utils/retrieveSecureStoreData";

export default function OrderItemWrapper({
  data,
}: {
  data: {
    _id: string;
    dishId: string;
    quantity: number;
  };
}) {
  const [dish, setDish] = React.useState<DishType>();

  React.useEffect(() => {
    retrieveSecureStoreData("userToken").then((res) => {
      fetchDishById({
        dishId: data.dishId,
        restaurantId: "",
        userToken: res!,
      }).then((res) => {
        setDish(res.dish);
      });
    });
  }, []);

  if (dish)
    return (
      <View className=" border-b border-color3/50 py-4 space-x-3 my-0 flex-row pl-2 justify-between">
        <Image
          className="rotate-180 w-[120px] h-[100px] rounded-[25px]"
          source={require("../../assets/images/noodleitem.png")}
        />
        <View className="flex-1 space-y-1">
          <View className="flex-row gap-2 ">
            {dish?.nonVeg ? (
              <Image
                className="w-[20px] h-[20px] "
                source={require("../../assets/images/nonveg.png")}
              />
            ) : (
              <Image
                className="w-[20px] h-[20px] "
                source={require("../../assets/images/veg.png")}
              />
            )}
            <View className="flex-row items-center space-x-[2px]">
              <Image
                className="w-[10px] h-[10px] "
                source={require("../../assets/images/star.png")}
              />
              <Image
                className="w-[10px] h-[10px] "
                source={require("../../assets/images/star.png")}
              />
              <Image
                className="w-[10px] h-[10px] "
                source={require("../../assets/images/star.png")}
              />
              <Image
                className="w-[10px] h-[10px] "
                source={require("../../assets/images/star.png")}
              />
              <Image
                className="w-[10px] h-[10px] "
                source={require("../../assets/images/star.png")}
              />
            </View>
          </View>
          <Text className="font-bold text-color2/90 ">{dish.name}</Text>
          <Text className=" font-bold text-color2/90">
            ₹{dish.price} x{data.quantity}
          </Text>
        </View>
        <View className="space-y-2 items-end">
          <View className="mr-2">
            <FoodItemWrapperCounter initialValue={data.quantity} />
          </View>
          <Text className=" font-bold text-color2/90 py-0 pl-6 pr-8 rounded-l-full">
            ₹
            {getFinalItemPrice({
              discount: 0,
              price: dish.price,
              quntity: data.quantity,
            })}
          </Text>
          <Text className=" font-bold text-xs text-color1 py-1 pl-3 pr-5 rounded-l-full bg-color2">
            CUSTOMISE
          </Text>
        </View>
        {/* <View className="space-y-3 items-end">
        <View className="mr-2">
          <FoodItemWrapperCounter />
        </View>
        <Text className=" font-bold text-base text-color1 py-2 pl-6 pr-8 rounded-l-full bg-color2">
          ₹399
        </Text>
      </View> */}
      </View>
    );
  return <Text>LOADING</Text>;
}
