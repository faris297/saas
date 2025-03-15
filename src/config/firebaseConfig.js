import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAw_oEbEW0owMOtxGDdV22yl8AujHkssNo",
  authDomain: "player-vision.firebaseapp.com",
  projectId: "player-vision",
  storageBucket: "player-vision.firebasestorage.app",
  messagingSenderId: "149399163990",
  appId: "1:149399163990:web:1b58796d808bb912ee57f7",
  measurementId: "G-9JXPKJBWX9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
