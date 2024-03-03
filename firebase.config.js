import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBkFuL15B4naRYSz6HSd_x5SRMo7IqjmPY',
  authDomain: 'preofo-native-xlc.firebaseapp.com',
  projectId: 'preofo-native-xlc',
  storageBucket: 'preofo-native-xlc.appspot.com',
  // messagingSenderId: 'sender-id',
  appId: '1:65211456909:web:3ae38ef1cdcn2e01fe5f0c',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export {auth}