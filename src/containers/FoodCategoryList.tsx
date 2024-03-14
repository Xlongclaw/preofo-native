import {
  View,
  Text,
  Image,
  TouchableHighlight,
} from "react-native";
import React, { useState } from "react";
import { FoodItemWrapper } from "@components/organisms";

export default function FoodCategoryList({
  dishIds,
  category,
  expanded,
}: {
  dishIds: Array<string>;
  category: string;
  expanded: boolean;
}) {
  const [expand, setExpand] = useState<boolean>(expanded);

  return (
    <View className="flex-col ml-2 border-b border-color3/40 pb-2">
      <View className="flex-row justify-between mx-4 items-center">
        <Text className="font-bold text-base mb-2 mt-6">{category}</Text>
        <TouchableHighlight
          underlayColor={"#dfdfdf"}
          onPress={() => setExpand(!expand)}
          className="p-4 mt-2 rounded-full"
        >
          <Image
            className="w-[15px] h-[15px]"
            source={require("@images/caretdown.png")}
          />
        </TouchableHighlight>
      </View>
      {expand &&
        dishIds.map((id, i) => (
          <FoodItemWrapper id={id} key={`FOOD_ITEM_${i}`} />
        ))}
    </View>
  );
}
