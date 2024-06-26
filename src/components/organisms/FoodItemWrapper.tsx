import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import FoodItemWrapperCounter from "@components/molecules/FoodItemWrapperCounter";
import fetchDishById from "utils/fetchDishById";
import { FoodItemWrapperSkeleton } from "@components/skeletons";
import retrieveSecureStoreData from "utils/retrieveSecureStoreData";

export default function FoodItemWrapper({
  id,
  restaurantId,
}: {
  id: string;

  restaurantId: string;
}) {
  const [foodItem, setFoodItem] = React.useState<any>();
  const [qty, setQty] = React.useState(0);

  React.useEffect(() => {
    retrieveSecureStoreData("userToken").then((res) => {
      fetchDishById({ dishId: id, restaurantId, userToken: res! }).then(
        (res) => {
          setQty(res.qty);
          setFoodItem(res.dish);
        }
      );
    });
  }, []);

  if (foodItem)
    return (
      <View style={styles.shadow} className="borde relative w-full rounded-[40px] flex-row bg-white justify-between items-center border-color3 p-2 my-3">
        <View className="max-w-[50%] pl-4 space-y-1">
          <View className="flex-row gap-2">
            {foodItem.nonVeg ? (
              <Image
                className="w-[20px] h-[20px] ]"
                source={require("../../assets/images/nonveg.png")}
              />
            ) : (
              <Image
                className="w-[20px] h-[20px] ]"
                source={require("../../assets/images/veg.png")}
              />
            )}
            <View className="flex-row items-center space-x-[2px]">
              {Array.from({ length: foodItem.rating }).map((_, i) => (
                <Image
                  key={`FOOD_ITEM_RATING_STAR_${i}`}
                  className="w-[10px] h-[10px] "
                  source={require("../../assets/images/star.png")}
                />
              ))}
              {foodItem.rating % 1 !== 0 && (
                <Image
                  className="w-[10px] h-[10px] "
                  source={require("../../assets/images/star-half2.png")}
                />
              )}
            </View>
          </View>
          <Text className="font-bold text-color2/90">{foodItem.name}</Text>
          <Text
            numberOfLines={4}
            className="text-[11px] font-semibold text-color2/40"
          >
            {foodItem.description}
          </Text>
          <Text className=" font-bold text-color2/90">₹{foodItem.price}</Text>
        </View>
        <View>
          {/* <ImageSlider images={} /> */}
          <Image
            className="w-[40vw] h-[150px] rounded-[35px]"
            src={foodItem.image.url}
          />
        </View>
        <View className="w-full absolute flex-row justify-center items-center bottom-[-8%] ">
          <FoodItemWrapperCounter initialValue={qty} />
        </View>
      </View>
    );
  return <FoodItemWrapperSkeleton />;
}

const styles = StyleSheet.create({
  shadow: {
      shadowColor: "#ccc",
      shadowOffset: {
          width: 0,
          height: 0,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,

      elevation: 6,
  }
})