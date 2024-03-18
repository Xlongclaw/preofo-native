const fetchDishById = async ({dishId,restaurantId,userToken}:{dishId: string,userToken:string,restaurantId:string}) => {
  try {
    const category = await fetch(
      `${process.env.EXPO_PUBLIC_SERVER_TEST_ADDRESS}/restaurant/dish?_id=${dishId}&restaurantId=${restaurantId}&userToken=${userToken}`
    );
    const JSONData = await category.json();
    return JSONData;
  } catch (error) {
    console.log(error);
    return { code: "SOMETHING_WENT_WRONG" };
  }
};

export default fetchDishById;
