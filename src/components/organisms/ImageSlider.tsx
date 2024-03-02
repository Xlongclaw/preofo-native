import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";
import Swiper from "react-native-swiper";


const ImageSlider = ({
  images,
  controlImageIndex,
  height
}: {
  images: Array<string>;
  controlImageIndex: (index: number) => void;
  height:number
}) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    controlImageIndex(index);
  }, [index]);
  return (
    <Swiper
      loop
      autoplayTimeout={4}
      removeClippedSubviews={false}
      showsPagination={false}
      onIndexChanged={(index) => setIndex(index)}
      className=" overflow-hidden"
      style={[styles.wrapper, {height:height}]}
      autoplay
    >
      {images.map((image, index) => (
        <View key={index} style={styles.slide}>
          <Image src={image} style={styles.image} />
        </View>
      ))}
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 1000,
    overflow: "hidden",
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: '100%',
    flex: 1,
  },
});

export default ImageSlider;
