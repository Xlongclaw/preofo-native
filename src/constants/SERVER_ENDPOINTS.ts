const SERVER_ENDPOINTS = {
  SEND_OTP_GET:"otp/send",
  VALIDATE_OTP_GET:"otp/validate",
  ADD_PARTNER_POST:"partner/add",
  ADD_USER_POST:"user/add",
  GET_PARTNER_FROM_CREDENTIALS_GET:'partner',
  GET_PARTNER_FROM_TOKEN_GET:'partner/token',
  GET_USER_FROM_CREDENTIALS_GET:'user',
  GET_USER_FROM_TOKEN_GET:'user/token',
  GET_RESTAURANT:'restaurant',
  GET_CATEGORY:'restaurant/category',
  POST_CATEGORY:'restaurant/category',
  POST_DISH:'restaurant/dish',
  EDIT_DISH:'restaurant/dish',
  GET_DISH:'restaurant/dish',
  POST_DISH_AVAILABILITY:'restaurant/dish/available',
  DELETE_DISH:'restaurant/dish',
}

export default SERVER_ENDPOINTS