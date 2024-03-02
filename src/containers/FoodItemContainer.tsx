import { Text, View } from "react-native";
import React from "react";
import { restaurantDataType } from "@types";
import FoodCategoryList from "./FoodCategoryList";
import { FoodItemContainerSkeleton } from "@components/skeletons";

export default function FoodItemContainer({
  data,
  isLoading,
}: {
  data: restaurantDataType;
  isLoading: boolean;
}) {

  if(!isLoading)
  return (
    <View>
      {data.foodCategories.map((categoryData, i) => (
        <FoodCategoryList
          key={`CATEGORY_${i}`}
          dishes={categoryData.dishes}
          expanded={!i}
          category={categoryData.category}
        />
      ))}
    </View>
  );
  return <FoodItemContainerSkeleton/>
}
