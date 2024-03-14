import { View, Text, Button, Image } from "react-native";
import React from "react";
import * as ImagePicker from 'expo-image-picker'

export default function TestPage() {
  const handleChoosePhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);
    if (!result.canceled) {
      // setImage(result.assets[0].uri);
    }

  };
  return (
    <View className="mt-12">
      <Button onPress={handleChoosePhoto} title="Upload Image" />
      <Image className="w-24 h-24" src="file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252Fpreofo-77936c7b-bddf-4a29-b38a-7a48736a66b8/ImagePicker/ac12e65d-3cc0-4033-8af1-8e9d3cefa91f.png"/>
    </View>
  );
}
