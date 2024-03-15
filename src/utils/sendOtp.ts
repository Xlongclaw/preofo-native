import SERVER_ENDPOINTS from "constants/SERVER_ENDPOINTS";

/**
 * This utility function sends an api request to the server for
 * sending otp to the given Phone Number.
 *
 * @param phoneNumber - Phone Number of the user.
 */
const sendOtp = async (phoneNumber: string) => {
  const res = await fetch(
    `${process.env.EXPO_PUBLIC_SERVER_TEST_ADDRESS}/${SERVER_ENDPOINTS.SEND_OTP_GET}?phoneNumber=${phoneNumber}&serverKey=${process.env.EXPO_PUBLIC_SERVER_KEY}&clientType=USER`,
    {
      method: "GET",
    }
  );
  return (await res.json()).code;
};

export default sendOtp;
