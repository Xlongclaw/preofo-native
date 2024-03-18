import { View } from "react-native";
import React from "react";
import { RestaurantWrapperFetchedDataType} from "@types";
import FoodCategoryList from "./FoodCategoryList";
import { FoodItemContainerSkeleton } from "@components/skeletons";

export default function FoodItemContainer({
  data,
}: {
  data: RestaurantWrapperFetchedDataType;
}) {
  return (
    <View>
      {data.foodCategories.map((categoryData, i) => (
        <FoodCategoryList
          key={`CATEGORY_${i}`}
          dishIds={categoryData.dishIds}
          expanded={!i}
          category={categoryData.name}
          restaurantId={data._id}
        />
      ))}
    </View>
  );
  return <FoodItemContainerSkeleton/>
}
