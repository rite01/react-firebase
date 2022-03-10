import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDx_HtgvRoMy4f35-rMsP2GPj08UCOkow4",
  authDomain: "userdata-353a7.firebaseapp.com",
  projectId: "userdata-353a7",
  storageBucket: "userdata-353a7.appspot.com",
  messagingSenderId: "56982792588",
  appId: "1:56982792588:web:0c7feca329578ec7a8cea9"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
