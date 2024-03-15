import SERVER_ENDPOINTS from "constants/SERVER_ENDPOINTS";

const fetchUserData = async (userToken: string) => {
  try {
    const data = await fetch(
      `${process.env.EXPO_PUBLIC_SERVER_TEST_ADDRESS}/${SERVER_ENDPOINTS.GET_USER_FROM_TOKEN_GET}?userToken=${userToken}`,
      {
        method: "GET",
      }
    );
    const jsonData = await data.json();
    return  jsonData
  } catch (err) {
    return { code: "USER_DOES_NOT_EXIST" };
  }
};
export default fetchUserData;
