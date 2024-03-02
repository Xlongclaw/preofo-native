import { View } from "react-native";
import React, { useEffect, useState } from "react";
import ImageSlider from "./ImageSlider";
import OffersCard from "./OffersCard";
import { restaurantDataType } from "@types";

export default function RestaurantWrapperImageContainer({
  images,
  controlImageIndex
}: {
  images:Array<string>
  controlImageIndex: (index:number) => void;
}) {
  /**
   * currentImageIndex - It is a state variable that contains the
   * index of the dispalyed restaurant image.
   */
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(()=>{
    controlImageIndex(currentImageIndex)
  },[currentImageIndex])

  /**
   * This function replaces the value of the currentImageIndex
   * with the value of index passed as argument.
   * @param index - new value of currentImageIndex state variable.
   */
  const changeImageIndex = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <View className="overflow-hidden w-[89vw] rounded-[27px] relative">
      <ImageSlider
      height={180}
        controlImageIndex={changeImageIndex}
        images={images}
      />
      <OffersCard />
    </View>
  );
}
