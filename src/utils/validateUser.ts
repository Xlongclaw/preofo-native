import SERVER_ENDPOINTS from "constants/SERVER_ENDPOINTS";
import { EXPO_PUBLIC_SERVER_TEST_ADDRESS } from "constants/secrets";

/**
 * This functions sends an AJAX call to the server to check whether 
 * the otp is correct or not.
 * 
 * @param phoneNumber - stores the phone number of the user.
 * @param otp - contains the otp entered bu the user
 */
const validateUser = async (phoneNumber:string,otp:string) => {
  
  const data = await fetch(
    `${EXPO_PUBLIC_SERVER_TEST_ADDRESS}/${SERVER_ENDPOINTS.VALIDATE_OTP_GET}?phoneNumber=${phoneNumber}&otp=${otp}&clientType=USER`
  )
    return data.json()
};

export default validateUser