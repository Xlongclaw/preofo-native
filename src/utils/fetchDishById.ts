const fetchDishById = async (dishId: string) => {
  try {
    const category = await fetch(
      `${process.env.EXPO_PUBLIC_SERVER_TEST_ADDRESS}/restaurant/dish?_id=${dishId}`
    );
    const JSONData = await category.json();
    return JSONData;
  } catch (error) {
    console.log(error);
    return { code: "SOMETHING_WENT_WRONG" };
  }
};

export default fetchDishById;
