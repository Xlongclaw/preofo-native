import { EXPO_PUBLIC_SERVER_TEST_ADDRESS } from "constants/secrets";

const fetchOrder = async ({restaurantId,userToken}:{restaurantId:string,userToken:string}) => {
  try {
    const category = await fetch(
      `${EXPO_PUBLIC_SERVER_TEST_ADDRESS}/user/basket?restaurantId=${restaurantId}&userToken=${userToken}`
    );
    const JSONData = await category.json();
    return JSONData;
  } catch (error) {
    console.log(error);
    return { code: "SOMETHING_WENT_WRONG" };
  }
};

export default fetchOrder;
