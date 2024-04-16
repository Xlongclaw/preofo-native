import { EXPO_PUBLIC_SERVER_TEST_ADDRESS } from "constants/secrets";
import passwordValidation from "./passwordValidation";
import SERVER_ENDPOINTS from "constants/SERVER_ENDPOINTS";

type submitDataPropType = {
  password: string;
  confirmPassword: string;
  name: string;
  userToken: string;
};

const submitUserData = async ({
  password,
  confirmPassword,
  name,
  userToken,
  // restaurantData
}: submitDataPropType) => {
  if (passwordValidation(password, confirmPassword)) {
    const res = await fetch(`${EXPO_PUBLIC_SERVER_TEST_ADDRESS}/${SERVER_ENDPOINTS.ADD_USER_POST}`, {
      method: "POST",
      body: JSON.stringify({
        name,
        password,
        userToken,
        // restaurantData
      }),
      headers: { "Content-Type": "application/json" },
    });
    return res.json();
  } else return { code: "PASSWORD_DOES_NOT_MATCH" };
};

export default submitUserData;
