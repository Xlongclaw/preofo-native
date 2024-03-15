import { View, Text } from "react-native";
import React from "react";
import fetchUserData from "utils/fetchUserData";
import retrieveSecureStoreData from "utils/retrieveSecureStoreData";

export default function ProfileScreen() {
  const [userData, setUserData] = React.useState<any>();
  React.useEffect(() => {
    retrieveSecureStoreData("userToken").then((userToken) => {
      if (userToken)
        fetchUserData(userToken).then((res) => {
          setUserData(res.data[0]);
        });
      else "";
    });
  }, []);

  if (userData)
    return (
      <View>
        <Text>{userData.name}</Text>
      </View>
    );
}
