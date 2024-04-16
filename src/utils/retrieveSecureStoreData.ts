import * as SecureStore from "expo-secure-store";

const retrieveSecureStoreData = async function getValueFor(key: string) {
  let result = await SecureStore.getItemAsync(key);
  console.log(result);
  return result
}

export default retrieveSecureStoreData