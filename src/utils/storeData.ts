import * as SecureStore from "expo-secure-store";

/**
 * This function stores the secure store.
 *
 * @param key - Value of key of the stored data.
 * @param value - value of the data to be stored.
 */
async function storeData(key: string, value: string) {
  await SecureStore.setItemAsync(key, value);
}

export default storeData;
