import { View } from "react-native";
import React, { useState } from "react";
import {
  AdvertiseWrapperImageContainer,
  PositionIndicator,
} from "@components/atoms";
import { useFetch } from "@hooks";
import { AdvertisementDataType } from "@types";
import { AdvertisementWrapperSkeleton } from "@components/skeletons";
import ImageSlider from "@components/organisms/ImageSlider";
import fetchAdvertisements from "utils/fetchAdvertisements";

/**
 * This component is a display a group of food advertisement
 * in a sliding manner. A restaurant can display their advertisement
 * by using the wrapper
 *
 * @returns the advertisement showing container
 */
export default function AdvertiseWrapper() {
  const [advertisements, setAdvertisements] = React.useState<any>();
  /**
   * State Variable for storing the currently displayed advertisement Index
   */
  const [currentAdvertisementIndex, setcurrentAdvertisementIndex] = useState(0);

  /**
   * This function replaces the value of the currentImageIndex
   * with the value of index passed as argument.
   * @param index - new value of currentImageIndex state variable.
   */
  const controlImageIndex = (i: number) => {
    setcurrentAdvertisementIndex(i);
  };

  React.useEffect(() => {
    fetchAdvertisements().then((res) => {
      setAdvertisements(res.data);
    });
  }, []);

  /**
   * Constructing Advertisement Images Array to feed it to ImageSliler.
   */
  if (advertisements) {
    let advertisementImagesArray: Array<string> = [];
    for (let i = 0; i < advertisements.length; i++) {
      advertisementImagesArray.push(advertisements[i].image.url);
    }

    if (advertisements)
      return (
        <View className="pr-2">
          <View className="rounded-[25px] overflow-hidden mb-4 mt-2">
            <ImageSlider
              height={160}
              controlImageIndex={controlImageIndex}
              images={advertisementImagesArray}
            />
          </View>
          <PositionIndicator
            index={currentAdvertisementIndex}
            size={advertisementImagesArray.length}
          />
        </View>
      );
  }
  return <AdvertisementWrapperSkeleton />;
}
