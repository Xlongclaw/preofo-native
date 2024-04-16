import SERVER_ENDPOINTS from "constants/SERVER_ENDPOINTS";

const addOrder = async ({
  categoryId,
  restaurantId,
  dish,
}: {
  categoryId: string;
  restaurantId: string;
  dish: {
    name:string,
    description:string,
    prepTime:number,
    price:number,
    nonVeg:boolean,
    image:{
      publicId:string,
      url:string,
      signature:string
    }
  };
}) => {
  try {
    const category = await fetch(
      `${process.env.SERVER_TEST_ADDRESS}/${SERVER_ENDPOINTS.POST_DISH}`,
      {
        method: "POST",
        body: JSON.stringify({
          categoryId,
          restaurantId,
          dish,
        }),
        headers: { "Content-Type": "application/json" },
      }
    );
    const JSONData = await category.json();
    return JSONData;
  } catch (error) {
    console.log(error);
    return { code: "SOMETHING_WENT_WRONG" };
  }
};

export default addOrder;
