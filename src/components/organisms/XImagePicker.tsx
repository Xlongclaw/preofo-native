import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import * as ImagePicker from "expo-image-picker";

/**
 * Prop Type of this React Component.
 */
type PropType = {
  getImage: (imagesArray: Array<string>) => void;
  title: string;
  initialImages?: Array<string>;
  maximum?: number;
};

/**
 * This component lets user to add or pick image from their own
 * storage, allowing the client to get access to the images and upload them
 * afterwards.
 *
 * @returns a JSX Element that prompts the user to add a group of images.
 */
export default function XImagePicker({
  getImage,
  title,
  initialImages = [],
  maximum = 3,
}: PropType) {
  const [images, setImages] = React.useState<Array<string>>(initialImages);

  // React.useEffect(() => {
  //   console.log(images);
  // }, [images]);

  /**
   * This funtion launches image Picker and add the uri of the selected image to
   * images array.
   */
  const addImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 2.5],
      quality: 1,
    });
    if (!result.canceled) {
      setImages([...images, result.assets![0].uri]);
    }
  };

  /**
   * This function remove the image from the image Array
   * at the given index i.
   *
   * @param i index of the image.
   */
  const removeImage = (i: number) => {
    setImages(images.filter((_, index) => index !== i));
  };

  /**
   * Sending images to the parent through calling
   * getImage() function passed as props.
   *
   * This runs every time the images array changes.
   */
  React.useEffect(() => {
    getImage(images);
  }, [images]);

  return (
    <View className="my-6">
      <Text className="font-semibold text-center text-color2/70 mb-2">
        {title}
      </Text>
      {images.map((imageUrl, i) => (
        /**
         * This is an image Container in which an image of images Array
         * are displayed if any.
         *
         * If there are 5 images in the images Array then 5 such container will be rendered
         * with their respective image URIs.
         */
        <View
          key={imageUrl}
          className="border border-color3 mb-2 p-1 rounded-3xl overflow-hidden"
        >
          {/* This is a delete button for the image. */}
          <TouchableOpacity
            onPress={() => removeImage(i)}
            activeOpacity={0.7}
            className=" bg-color1 absolute right-3 top-3 z-10 px-4 py-2 rounded-full"
          >
            <Text className="font-black text-color2/50 text-xs">X</Text>
          </TouchableOpacity>
          <Image className="w-full h-40 rounded-[20px]" src={imageUrl} />
        </View>
      ))}

      {/* This button prompts user to select an image from their storage*/}
      {images.length < maximum && (
        <TouchableOpacity
          onPress={addImage}
          className="border border-color3 justify-center items-center p-5 rounded-2xl"
        >
          <Text className="font-semibold text-color2 text-xs">+ ADD IMAGE</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
