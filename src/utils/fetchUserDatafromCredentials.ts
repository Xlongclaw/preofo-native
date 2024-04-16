import SERVER_ENDPOINTS from "constants/SERVER_ENDPOINTS";
import { EXPO_PUBLIC_SERVER_TEST_ADDRESS } from "constants/secrets";

const fetchUserDatafromCredentials = async ({
  phoneNumber,
  password,
}: {
  phoneNumber: string;
  password: string;
}) => {
  try{
    const res = await fetch(
      `${EXPO_PUBLIC_SERVER_TEST_ADDRESS}/${SERVER_ENDPOINTS.GET_USER_FROM_CREDENTIALS_GET}?phoneNumber=${phoneNumber}&password=${password}`
    );
    const data = await res.json();
    return data
  }
  catch(err){
    console.log(err);
    return {'code' : 'SOMETHING_WENT_WRONG'} 
  }
};

export default fetchUserDatafromCredentials