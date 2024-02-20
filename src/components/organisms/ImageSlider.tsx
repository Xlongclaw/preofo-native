import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";
import Swiper from "react-native-swiper";

const { width } = Dimensions.get("window");

const ImageSlider = ({
  images,
  controlImageIndex,
}: {
  images: Array<{ image: any }>;
  controlImageIndex: (index: number) => void;
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
      className="h-[180px]"
      style={styles.wrapper}
      autoplay
    >
      {images.map((image, index) => (
        <View key={index} style={styles.slide}>
          <Image source={image.image} style={styles.image} />
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
    width: width - 42,
    flex: 1,
  },
});

export default ImageSlider;
