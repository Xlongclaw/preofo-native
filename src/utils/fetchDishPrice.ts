import { EXPO_PUBLIC_SERVER_TEST_ADDRESS } from "constants/secrets";

const fetchDishPrice = async (dishId: string) => {
  try {
    const category = await fetch(
      `${EXPO_PUBLIC_SERVER_TEST_ADDRESS}/restaurant/dish/price?_id=${dishId}`
    );
    const JSONData = await category.json();
    return JSONData;
  } catch (error) {
    console.log(error);
    return { code: "SOMETHING_WENT_WRONG" };
  }
};

export default fetchDishPrice;
