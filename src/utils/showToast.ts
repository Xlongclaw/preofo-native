import Toast, { ToastType } from "react-native-toast-message"

const showToast = (type:ToastType,message:string) =>{
  Toast.show({
    topOffset:60,
    type:type,
    text1:message
  })
}

export default showToast