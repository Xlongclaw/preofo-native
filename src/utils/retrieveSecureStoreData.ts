import * as SecureStore from "expo-secure-store";

const retrieveSecureStoreData = async function getValueFor(key: string) {
  let result = await SecureStore.getItemAsync(key);
  return result
}

export default retrieveSecureStoreData