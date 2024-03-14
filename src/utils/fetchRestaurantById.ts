const fetchRestaurantById = async (restaurantId: string) => {
  try {
    const restaurant = await fetch(
      `${process.env.EXPO_PUBLIC_SERVER_TEST_ADDRESS}/restaurant?_id=${restaurantId}`
    );
    const JSONData = await restaurant.json();
    return JSONData;
  } catch (error) {
    console.log(error);
    return { code: "SOMETHING_WENT_WRONG" };
  }
};

export default fetchRestaurantById