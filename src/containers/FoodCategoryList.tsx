import {
  View,
  Text,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { FoodItemWrapper } from "@components/organisms";
import { DishType, OrderType } from "@types";
import retrieveSecureStoreData from "utils/retrieveSecureStoreData";
import fetchOrder from "utils/fetchOrder";

export default function FoodCategoryList({
  dishIds,
  category,
  expanded,
  restaurantId,
}: {
  dishIds: Array<string>;
  category: string;
  expanded: boolean;
  restaurantId: string;
}) {
  const [expand, setExpand] = useState<boolean>(expanded);
  const [dishes, setDishes] = React.useState<Array<any>>([]);


    return (
      <View className="flex-col ml-2 border-b border-color3/40 pb-2">
        <TouchableOpacity
          onPress={() => setExpand(!expand)}
          className="flex-row justify-between mx-4 items-center"
        >
          <Text className="font-bold text-base mb-2 mt-6">{category}</Text>
          <TouchableHighlight
            onPress={() => setExpand(!expand)}
            underlayColor={"#dfdfdf"}
            className="p-4 mt-2 rounded-full"
          >
            <Image
              className="w-[15px] h-[15px]"
              source={require("@images/caretdown.png")}
            />
          </TouchableHighlight>
        </TouchableOpacity>
        {expand &&
          dishIds.map((id, i) => {
            return <FoodItemWrapper restaurantId={restaurantId} id={id} key={`FOOD_ITEM_${i}`} />;
          })}
      </View>
    );

}
